import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function UseEffectExample() {
  // Example 1: Run once on mount
  const [mountTime, setMountTime] = useState("");

  // Example 2: Timer
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Example 3: Fetch data
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // Example 4: Dependency tracking
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Example 5: Cleanup
  const [windowWidth, setWindowWidth] = useState(0);

  // Effect 1: Run once on mount
  useEffect(() => {
    const time = new Date().toLocaleTimeString();
    setMountTime(time);
    console.log("Component mounted at:", time);

    // This runs only once when component mounts
    return () => {
      console.log("Component will unmount");
    };
  }, []); // Empty dependency array

  // Effect 2: Timer with cleanup
  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerRunning]); // Runs when isTimerRunning changes

  // Effect 3: Fetch data
  const fetchUsers = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=5",
      );
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError("Failed to fetch users");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Effect 4: Search with debounce
  useEffect(() => {
    if (searchTerm.length === 0) {
      setSearchResults([]);
      return;
    }

    const timeoutId = setTimeout(() => {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setSearchResults(filtered);
    }, 500); // Debounce 500ms

    return () => clearTimeout(timeoutId);
  }, [searchTerm, users]);

  const handleStartTimer = () => {
    setIsTimerRunning(true);
  };

  const handleStopTimer = () => {
    setIsTimerRunning(false);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setSeconds(0);
  };

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <ScrollView style={styles.container}>
      {/* Mount Time Example */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="time" size={24} color="#3B82F6" />
          <Text style={styles.sectionTitle}>Run Once on Mount</Text>
        </View>

        <View style={styles.infoCard}>
          <Ionicons name="information-circle" size={24} color="#3B82F6" />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Component Mounted At:</Text>
            <Text style={styles.infoValue}>{mountTime}</Text>
          </View>
        </View>

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`useEffect(() => {
  const time = new Date().toLocaleTimeString();
  setMountTime(time);
  
  return () => {
    // Cleanup on unmount
  };
}, []); // Empty array = run once`}
          </Text>
        </View>
      </View>

      {/* Timer Example */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="stopwatch" size={24} color="#10B981" />
          <Text style={styles.sectionTitle}>Timer with Cleanup</Text>
        </View>

        <View style={styles.timerDisplay}>
          <Text style={styles.timerText}>{formatTime(seconds)}</Text>
        </View>

        <View style={styles.timerControls}>
          {!isTimerRunning ? (
            <TouchableOpacity
              style={[styles.timerButton, styles.startButton]}
              onPress={handleStartTimer}
            >
              <Ionicons name="play" size={24} color="#FFFFFF" />
              <Text style={styles.timerButtonText}>Start</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.timerButton, styles.stopButton]}
              onPress={handleStopTimer}
            >
              <Ionicons name="pause" size={24} color="#FFFFFF" />
              <Text style={styles.timerButtonText}>Stop</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[styles.timerButton, styles.resetButton]}
            onPress={handleResetTimer}
          >
            <Ionicons name="refresh" size={24} color="#FFFFFF" />
            <Text style={styles.timerButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`useEffect(() => {
  let interval;
  
  if (isTimerRunning) {
    interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  }
  
  return () => {
    clearInterval(interval);
  };
}, [isTimerRunning]);`}
          </Text>
        </View>
      </View>

      {/* Fetch Data Example */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="cloud-download" size={24} color="#F59E0B" />
          <Text style={styles.sectionTitle}>Fetch Data</Text>
        </View>

        <TouchableOpacity
          style={styles.fetchButton}
          onPress={fetchUsers}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <Ionicons name="refresh" size={20} color="#FFFFFF" />
              <Text style={styles.fetchButtonText}>Fetch Users</Text>
            </>
          )}
        </TouchableOpacity>

        {error && (
          <View style={styles.errorCard}>
            <Ionicons name="alert-circle" size={24} color="#EF4444" />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        {users.length > 0 && (
          <View style={styles.usersList}>
            {users.map((user) => (
              <View key={user.id} style={styles.userCard}>
                <View style={styles.userAvatar}>
                  <Text style={styles.userAvatarText}>
                    {user.name.charAt(0)}
                  </Text>
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{user.name}</Text>
                  <Text style={styles.userEmail}>{user.email}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`const fetchUsers = async () => {
  setIsLoading(true);
  try {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};`}
          </Text>
        </View>
      </View>

      {/* Search with Debounce */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="search" size={24} color="#8B5CF6" />
          <Text style={styles.sectionTitle}>Search with Debounce</Text>
        </View>

        {users.length > 0 ? (
          <>
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color="#6B7280" />
              <input
                style={styles.searchInput}
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <TouchableOpacity onPress={() => setSearchTerm("")}>
                  <Ionicons name="close-circle" size={20} color="#6B7280" />
                </TouchableOpacity>
              )}
            </View>

            {searchResults.length > 0 ? (
              <View style={styles.searchResults}>
                <Text style={styles.searchResultsTitle}>
                  Found {searchResults.length} result(s)
                </Text>
                {searchResults.map((user) => (
                  <View key={user.id} style={styles.searchResultCard}>
                    <Text style={styles.searchResultName}>{user.name}</Text>
                    <Text style={styles.searchResultEmail}>{user.email}</Text>
                  </View>
                ))}
              </View>
            ) : searchTerm ? (
              <View style={styles.noResults}>
                <Ionicons name="search-outline" size={48} color="#9CA3AF" />
                <Text style={styles.noResultsText}>No users found</Text>
              </View>
            ) : null}
          </>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="people-outline" size={48} color="#9CA3AF" />
            <Text style={styles.emptyStateText}>
              Fetch users first to search
            </Text>
          </View>
        )}

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`useEffect(() => {
  const timeoutId = setTimeout(() => {
    // Search logic
    const filtered = users.filter(user =>
      user.name.includes(searchTerm)
    );
    setSearchResults(filtered);
  }, 500); // Debounce
  
  return () => clearTimeout(timeoutId);
}, [searchTerm, users]);`}
          </Text>
        </View>
      </View>

      {/* Key Concepts */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="bulb" size={24} color="#F59E0B" />
          <Text style={styles.sectionTitle}>Key Concepts</Text>
        </View>

        <View style={styles.conceptsList}>
          <View style={styles.conceptItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.conceptText}>useEffect runs after render</Text>
          </View>
          <View style={styles.conceptItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.conceptText}>Empty [] = run once on mount</Text>
          </View>
          <View style={styles.conceptItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.conceptText}>
              [deps] = run when deps change
            </Text>
          </View>
          <View style={styles.conceptItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.conceptText}>Return function = cleanup</Text>
          </View>
          <View style={styles.conceptItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.conceptText}>
              Use for side effects (API, timers, subscriptions)
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  section: {
    backgroundColor: "#FFFFFF",
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginLeft: 12,
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  infoContent: {
    marginLeft: 12,
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E40AF",
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: "#1E3A8A",
    fontWeight: "bold",
  },
  timerDisplay: {
    backgroundColor: "#F3F4F6",
    padding: 32,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  timerText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#111827",
    fontFamily: "monospace",
  },
  timerControls: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  timerButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  startButton: {
    backgroundColor: "#10B981",
  },
  stopButton: {
    backgroundColor: "#EF4444",
  },
  resetButton: {
    backgroundColor: "#6B7280",
  },
  timerButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  fetchButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F59E0B",
    paddingVertical: 14,
    borderRadius: 8,
    gap: 8,
    marginBottom: 16,
  },
  fetchButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  errorCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  errorText: {
    fontSize: 14,
    color: "#991B1B",
    marginLeft: 12,
    flex: 1,
  },
  usersList: {
    gap: 12,
    marginBottom: 16,
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#3B82F6",
    alignItems: "center",
    justifyContent: "center",
  },
  userAvatarText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  userInfo: {
    marginLeft: 12,
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: "#6B7280",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
    outlineStyle: "none",
    border: "none",
    backgroundColor: "transparent",
  },
  searchResults: {
    marginBottom: 16,
  },
  searchResultsTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B7280",
    marginBottom: 12,
  },
  searchResultCard: {
    backgroundColor: "#F0FDF4",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#10B981",
  },
  searchResultName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#166534",
    marginBottom: 4,
  },
  searchResultEmail: {
    fontSize: 14,
    color: "#15803D",
  },
  noResults: {
    alignItems: "center",
    padding: 32,
  },
  noResultsText: {
    fontSize: 16,
    color: "#9CA3AF",
    marginTop: 12,
  },
  emptyState: {
    alignItems: "center",
    padding: 32,
  },
  emptyStateText: {
    fontSize: 16,
    color: "#9CA3AF",
    marginTop: 12,
    textAlign: "center",
  },
  codeBlock: {
    backgroundColor: "#1F2937",
    padding: 16,
    borderRadius: 8,
  },
  codeText: {
    fontSize: 12,
    color: "#F9FAFB",
    fontFamily: "monospace",
    lineHeight: 20,
  },
  conceptsList: {
    gap: 12,
  },
  conceptItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    padding: 12,
    borderRadius: 8,
  },
  conceptText: {
    fontSize: 14,
    color: "#166534",
    marginLeft: 12,
    fontWeight: "500",
    flex: 1,
  },
});
