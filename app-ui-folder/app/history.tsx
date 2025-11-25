// app/history.tsx
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import { useLighting } from "../lightingStore";
import BottomNav from "./BottomNav";

const BG = "#DEEAD9";
const PILL_OFF_TEXT = "#0f2c03ff";
const PILL_OFF_BG = "#4F8735";
const PILL_GREEN = "#89c756ff";

export default function HistoryScreen() {
  const { history, clearHistory } = useLighting();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>History / Log</Text>

        {history.length > 0 && (
          <Pressable style={styles.clearButton} onPress={clearHistory}>
            <Text style={styles.clearButtonText}>Clear dashboard</Text>
          </Pressable>
        )}
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {history.length === 0 ? (
          <Text style={styles.emptyText}>
            No events yet. Toggle the light on the dashboard to see history.
          </Text>
        ) : (
          history.map((entry) => {
            const isOff = entry.status === "off";
            return (
              <View
                key={entry.id}
                style={[
                  styles.pill,
                  isOff && { backgroundColor: PILL_OFF_BG },
                ]}
              >
                <Text
                  style={[
                    styles.pillText,
                    isOff && { color: PILL_OFF_TEXT, fontWeight: "700" },
                  ]}
                >
                  {entry.date} • {entry.timestamp} : lights {entry.status}
                </Text>
              </View>
            );
          })
        )}
      </ScrollView>

      {/* bottom nav bar */}
      <BottomNav active="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
  },
  headerRow: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  clearButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#F1F4EB",
    borderWidth: 1,
    borderColor: "#C1CEB7",
  },
  clearButtonText: {
    fontSize: 12,
    fontWeight: "600",
  },
  emptyText: {
    fontSize: 15,
    marginTop: 8,
  },
  pill: {
    backgroundColor: PILL_GREEN,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginBottom: 10,
  },
  pillText: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
});
