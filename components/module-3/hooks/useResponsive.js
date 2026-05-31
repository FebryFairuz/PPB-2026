import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export default function useResponsive() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
    screen: Dimensions.get("screen"),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window, screen }) => {
      setDimensions({ window, screen });
    });

    return () => subscription?.remove();
  }, []);

  const { width, height } = dimensions.window;

  const isSmallDevice = width < 375;
  const isMediumDevice = width >= 375 && width < 768;
  const isLargeDevice = width >= 768;
  const isPortrait = height > width;
  const isLandscape = width > height;

  const getResponsiveValue = (small, medium, large) => {
    if (isSmallDevice) return small;
    if (isMediumDevice) return medium;
    return large;
  };

  const spacing = getResponsiveValue(8, 12, 16);
  const fontSize = {
    small: getResponsiveValue(12, 14, 16),
    medium: getResponsiveValue(14, 16, 18),
    large: getResponsiveValue(18, 20, 24),
    xlarge: getResponsiveValue(24, 28, 32),
  };

  return {
    width,
    height,
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    isPortrait,
    isLandscape,
    getResponsiveValue,
    spacing,
    fontSize,
  };
}