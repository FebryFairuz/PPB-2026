import axios from "axios";

// Add request interceptor
axios.interceptors.request.use(
  (config) => {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📤 REQUEST STARTED");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("🔗 URL:", config.url);
    console.log("📋 Method:", config.method?.toUpperCase());
    console.log("📦 Headers:", JSON.stringify(config.headers, null, 2));
    console.log("📝 Data:", JSON.stringify(config.data, null, 2));
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    return config;
  },
  (error) => {
    console.log("❌ REQUEST ERROR:", error);
    return Promise.reject(error);
  },
);

// Add response interceptor
axios.interceptors.response.use(
  (response) => {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("✅ RESPONSE RECEIVED");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("🔗 URL:", response.config.url);
    console.log("📊 Status:", response.status, response.statusText);
    console.log("📦 Headers:", JSON.stringify(response.headers, null, 2));
    console.log("📝 Data:", JSON.stringify(response.data, null, 2));
    console.log(
      "⏱️ Duration:",
      response.config.metadata?.endTime - response.config.metadata?.startTime,
      "ms",
    );
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    return response;
  },
  (error) => {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("❌ RESPONSE ERROR");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("🔗 URL:", error.config?.url);
    console.log("📋 Method:", error.config?.method?.toUpperCase());
    console.log("❗ Error Code:", error.code);
    console.log("❗ Error Message:", error.message);

    if (error.response) {
      // Server responded with error
      console.log("📊 Status:", error.response.status);
      console.log(
        "📝 Response Data:",
        JSON.stringify(error.response.data, null, 2),
      );
      console.log(
        "📦 Response Headers:",
        JSON.stringify(error.response.headers, null, 2),
      );
    } else if (error.request) {
      // Request made but no response
      console.log("📡 Request:", error.request);
      console.log("⚠️ No response received from server");
    } else {
      // Error in request setup
      console.log("⚠️ Error setting up request:", error.message);
    }
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    return Promise.reject(error);
  },
);

const RequestAPI = async (method, url, headers, data, is_login = false) => {
  try {
    let config = {
      method,
      url,
      maxBodyLength: Infinity,
      headers,
      data,
      timeout: 10000,
      metadata: { startTime: new Date().getTime() },
    };

    const response = await axios(config);
    config.metadata.endTime = new Date().getTime();

    let result = response.data;

    if (result.success && result.message) {
      if (is_login) {
        return {
          loading: false,
          message: "",
          data: {
            token: result?.accessToken || result?.token,
            expiresIn: result?.expiresIn,
            data: result?.data,
          },
          success: result.success,
        };
      } else {
        return {
          loading: false,
          message: "",
          data: result.data || [],
          success: result.success,
        };
      }
    } else if (
      result.success &&
      result.data &&
      Object.values(result.data).length > 0
    ) {
      return {
        loading: false,
        message: "",
        data: result.data,
        success: result.success,
      };
    } else {
      return {
        loading: false,
        message: result.message || "No record found",
        data: [],
        success: result.success,
      };
    }
  } catch (error) {
    // Error already logged by interceptor

    if (error.code === "ECONNABORTED") {
      return {
        loading: false,
        message: "Request timeout. Please check your connection.",
        data: [],
        success: false,
      };
    }

    if (error.code === "ERR_NETWORK" || error.message === "Network Error") {
      return {
        loading: false,
        message:
          "Network error. Cannot connect to server. Check if backend is running.",
        data: [],
        success: false,
      };
    }

    if (error.response) {
      return {
        loading: false,
        message:
          error.response.data?.message ||
          `Server error: ${error.response.status}`,
        data: [],
        success: false,
      };
    }

    return {
      loading: false,
      message: error.message || "An unexpected error occurred",
      data: [],
      success: false,
    };
  }
};

export { RequestAPI };
