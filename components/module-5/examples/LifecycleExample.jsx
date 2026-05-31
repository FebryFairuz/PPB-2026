import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// Child component to demonstrate lifecycle
function LifecycleChild({ name }) {
  const [renderCount, setRenderCount] = useState(0);

  // Mount
  useEffect(() => {
    console.log(`[${name}] Component Mounted`);
    setRenderCount((prev) => prev + 1);

    return () => {
      console.log(`[${name}] Component Will Unmount`);
    };
  }, []);

  // Update
  useEffect(() => {
    console.log(`[${name}] Component Updated - Render #${renderCount}`);
  });

  // Dependency change
  useEffect(() => {
    console.log(`[${name}] Name prop changed to: ${name}`);
  }, [name]);

  return (
    <View style={styles.childComponent}>
      <View style={styles.childHeader}>
        <Ionicons name="cube" size={20} color="#3B82F6" />
        <Text style={styles.childTitle}>{name}</Text>
      </View>
      <Text style={styles.childText}>Render Count: {renderCount}</Text>
    </View>
  );
}

export default function LifecycleExample() {
  const [showChild, setShowChild] = useState(true);
  const [childName, setChildName] = useState("Child Component");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Override console.log to capture logs
    const originalLog = console.log;
    console.log = (...args) => {
      const message = args.join(" ");
      if (message.includes("[")) {
        setLogs((prev) => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            message,
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
      }
      originalLog(...args);
    };

    return () => {
      console.log = originalLog;
    };
  }, []);

  const handleToggleChild = () => {
    setShowChild(!showChild);
  };

  const handleChangeName = () => {
    const names = [
      "Child Component",
      "Updated Component",
      "New Component",
      "Modified Component",
    ];
    const currentIndex = names.indexOf(childName);
    const nextIndex = (currentIndex + 1) % names.length;
    setChildName(names[nextIndex]);
  };

  const handleClearLogs = () => {
    setLogs([]);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Lifecycle Diagram */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="git-network" size={24} color="#3B82F6" />
          <Text style={styles.sectionTitle}>Component Lifecycle</Text>
        </View>

        <View style={styles.lifecycleDiagram}>
          <View style={styles.lifecyclePhase}>
            <View style={[styles.phaseIcon, { backgroundColor: "#10B981" }]}>
              <Ionicons name="play-circle" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.phaseTitle}>Mount</Text>
            <Text style={styles.phaseDescription}>
              Component is created and inserted into the DOM
            </Text>
          </View>

          <Ionicons name="arrow-down" size={24} color="#6B7280" />

          <View style={styles.lifecyclePhase}>
            <View style={[styles.phaseIcon, { backgroundColor: "#F59E0B" }]}>
              <Ionicons name="refresh-circle" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.phaseTitle}>Update</Text>
            <Text style={styles.phaseDescription}>
              Component re-renders when state or props change
            </Text>
          </View>

          <Ionicons name="arrow-down" size={24} color="#6B7280" />

          <View style={styles.lifecyclePhase}>
            <View style={[styles.phaseIcon, { backgroundColor: "#EF4444" }]}>
              <Ionicons name="stop-circle" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.phaseTitle}>Unmount</Text>
            <Text style={styles.phaseDescription}>
              Component is removed from the DOM
            </Text>
          </View>
        </View>

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`// Mount
useEffect(() => {
  console.log('Mounted');
  return () => {
    console.log('Unmounted');
  };
}, []);

// Update
useEffect(() => {
  console.log('Updated');
});

// Dependency change
useEffect(() => {
  console.log('Prop changed');
}, [prop]);`}
          </Text>
        </View>
      </View>

      {/* Interactive Demo */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="play" size={24} color="#10B981" />
          <Text style={styles.sectionTitle}>Interactive Demo</Text>
        </View>

        <View style={styles.controlsContainer}>
          <TouchableOpacity
            style={[
              styles.controlButton,
              showChild ? styles.unmountButton : styles.mountButton,
            ]}
            onPress={handleToggleChild}
          >
            <Ionicons
              name={showChild ? "close-circle" : "add-circle"}
              size={20}
              color="#FFFFFF"
            />
            <Text style={styles.controlButtonText}>
              {showChild ? "Unmount" : "Mount"} Component
            </Text>
          </TouchableOpacity>

          {showChild && (
            <TouchableOpacity
              style={[styles.controlButton, styles.updateButton]}
              onPress={handleChangeName}
            >
              <Ionicons name="refresh" size={20} color="#FFFFFF" />
              <Text style={styles.controlButtonText}>Change Name (Update)</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Child Component Display */}
        <View style={styles.componentDisplay}>
          {showChild ? (
            <LifecycleChild name={childName} />
          ) : (
            <View style={styles.noComponent}>
              <Ionicons name="cube-outline" size={48} color="#9CA3AF" />
              <Text style={styles.noComponentText}>Component Unmounted</Text>
            </View>
          )}
        </View>
      </View>

      {/* Lifecycle Logs */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="terminal" size={24} color="#8B5CF6" />
          <Text style={styles.sectionTitle}>Lifecycle Logs</Text>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearLogs}
          >
            <Ionicons name="trash" size={18} color="#EF4444" />
          </TouchableOpacity>
        </View>

        <View style={styles.logsWrapper}>
          <ScrollView
            style={styles.logsContainer}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={true}
          >
            {logs.length > 0 ? (
              logs.map((log) => (
                <View key={log.id} style={styles.logItem}>
                  <Text style={styles.logTimestamp}>{log.timestamp}</Text>
                  <Text style={styles.logMessage}>{log.message}</Text>
                </View>
              ))
            ) : (
              <View style={styles.emptyLogs}>
                <Ionicons
                  name="document-text-outline"
                  size={48}
                  color="#9CA3AF"
                />
                <Text style={styles.emptyLogsText}>
                  No logs yet. Try mounting/unmounting the component!
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>

      {/* Lifecycle Hooks Comparison */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="git-compare" size={24} color="#F59E0B" />
          <Text style={styles.sectionTitle}>useEffect Patterns</Text>
        </View>

        <View style={styles.comparisonList}>
          <View style={styles.comparisonItem}>
            <View style={styles.comparisonHeader}>
              <Ionicons name="play-circle" size={20} color="#10B981" />
              <Text style={styles.comparisonTitle}>componentDidMount</Text>
            </View>
            <View style={styles.comparisonCode}>
              <Text style={styles.comparisonCodeText}>
                {`useEffect(() => {
  // Runs once after mount
}, []);`}
              </Text>
            </View>
          </View>

          <View style={styles.comparisonItem}>
            <View style={styles.comparisonHeader}>
              <Ionicons name="refresh-circle" size={20} color="#F59E0B" />
              <Text style={styles.comparisonTitle}>componentDidUpdate</Text>
            </View>
            <View style={styles.comparisonCode}>
              <Text style={styles.comparisonCodeText}>
                {`useEffect(() => {
  // Runs after every render
});`}
              </Text>
            </View>
          </View>

          <View style={styles.comparisonItem}>
            <View style={styles.comparisonHeader}>
              <Ionicons name="stop-circle" size={20} color="#EF4444" />
              <Text style={styles.comparisonTitle}>componentWillUnmount</Text>
            </View>
            <View style={styles.comparisonCode}>
              <Text style={styles.comparisonCodeText}>
                {`useEffect(() => {
  return () => {
    // Cleanup before unmount
  };
}, []);`}
              </Text>
            </View>
          </View>

          <View style={styles.comparisonItem}>
            <View style={styles.comparisonHeader}>
              <Ionicons name="eye" size={20} color="#8B5CF6" />
              <Text style={styles.comparisonTitle}>Watch Dependencies</Text>
            </View>
            <View style={styles.comparisonCode}>
              <Text style={styles.comparisonCodeText}>
                {`useEffect(() => {
  // Runs when deps change
}, [dep1, dep2]);`}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Best Practices */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="bulb" size={24} color="#F59E0B" />
          <Text style={styles.sectionTitle}>Best Practices</Text>
        </View>

        <View style={styles.practicesList}>
          <View style={styles.practiceItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <View style={styles.practiceContent}>
              <Text style={styles.practiceTitle}>Always cleanup</Text>
              <Text style={styles.practiceDescription}>
                Return cleanup function for timers, subscriptions, and event
                listeners
              </Text>
            </View>
          </View>

          <View style={styles.practiceItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <View style={styles.practiceContent}>
              <Text style={styles.practiceTitle}>Specify dependencies</Text>
              <Text style={styles.practiceDescription}>
                Always include all dependencies in the dependency array
              </Text>
            </View>
          </View>

          <View style={styles.practiceItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <View style={styles.practiceContent}>
              <Text style={styles.practiceTitle}>Avoid infinite loops</Text>
              <Text style={styles.practiceDescription}>
                Don't update state that's in the dependency array without
                conditions
              </Text>
            </View>
          </View>

          <View style={styles.practiceItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <View style={styles.practiceContent}>
              <Text style={styles.practiceTitle}>Separate concerns</Text>
              <Text style={styles.practiceDescription}>
                Use multiple useEffect hooks for different side effects
              </Text>
            </View>
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
    flex: 1,
  },
  lifecycleDiagram: {
    alignItems: "center",
    paddingVertical: 16,
    marginBottom: 16,
  },
  lifecyclePhase: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 16,
  },
  phaseIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  phaseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  phaseDescription: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  controlsContainer: {
    gap: 12,
    marginBottom: 16,
  },
  controlButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 8,
    gap: 8,
  },
  mountButton: {
    backgroundColor: "#10B981",
  },
  unmountButton: {
    backgroundColor: "#EF4444",
  },
  updateButton: {
    backgroundColor: "#F59E0B",
  },
  controlButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  componentDisplay: {
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    padding: 20,
    minHeight: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  childComponent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#3B82F6",
    width: "100%",
  },
  childHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  childTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3B82F6",
    marginLeft: 8,
  },
  childText: {
    fontSize: 14,
    color: "#6B7280",
  },
  noComponent: {
    alignItems: "center",
    padding: 20,
  },
  noComponentText: {
    fontSize: 16,
    color: "#9CA3AF",
    marginTop: 12,
  },
  clearButton: {
    padding: 8,
  },
  logsWrapper: {
    backgroundColor: "#1F2937",
    borderRadius: 8,
    height: 300,
    overflow: "hidden",
  },
  logsContainer: {
    flex: 1,
    padding: 16,
  },
  logItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#374151",
  },
  logTimestamp: {
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 4,
    fontFamily: "monospace",
  },
  logMessage: {
    fontSize: 14,
    color: "#F9FAFB",
    fontFamily: "monospace",
  },
  emptyLogs: {
    alignItems: "center",
    padding: 32,
  },
  emptyLogsText: {
    fontSize: 14,
    color: "#9CA3AF",
    marginTop: 12,
    textAlign: "center",
  },
  comparisonList: {
    gap: 16,
  },
  comparisonItem: {
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 4,
  },
  comparisonHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  comparisonTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginLeft: 8,
  },
  comparisonCode: {
    backgroundColor: "#1F2937",
    padding: 12,
    borderRadius: 6,
  },
  comparisonCodeText: {
    fontSize: 12,
    color: "#F9FAFB",
    fontFamily: "monospace",
    lineHeight: 18,
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
  practicesList: {
    gap: 16,
  },
  practiceItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#F0FDF4",
    padding: 16,
    borderRadius: 8,
  },
  practiceContent: {
    marginLeft: 12,
    flex: 1,
  },
  practiceTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#166534",
    marginBottom: 4,
  },
  practiceDescription: {
    fontSize: 14,
    color: "#15803D",
    lineHeight: 20,
  },
});
