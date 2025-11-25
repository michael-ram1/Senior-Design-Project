import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import BottomNav from "./BottomNav";

const BG = "#DEEAD9";

type DaySchedule = {
  id: string;
  label: string;
  enabled: boolean;
  start: string;
  stop: string;
};

const initialDays: DaySchedule[] = [
  { id: "sun", label: "SUN", enabled: false, start: "00:00 pm", stop: "00:00 am" },
  { id: "mon", label: "MON", enabled: false, start: "00:00 pm", stop: "00:00 am" },
  { id: "tue", label: "TUES", enabled: false, start: "00:00 pm", stop: "00:00 am" },
  { id: "wed", label: "WED", enabled: false, start: "00:00 pm", stop: "00:00 am" },
  { id: "thu", label: "THURS", enabled: false, start: "00:00 pm", stop: "00:00 am" },
  { id: "fri", label: "FRI", enabled: false, start: "00:00 pm", stop: "00:00 am" },
  { id: "sat", label: "SAT", enabled: false, start: "00:00 pm", stop: "00:00 am" },
];

export default function ScheduleScreen() {
  const [days, setDays] = useState<DaySchedule[]>(initialDays);

  const toggleDay = (id: string) => {
    setDays((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, enabled: !d.enabled } : d
      )
    );
  };

  const updateTime = (id: string, field: "start" | "stop", value: string) => {
    setDays((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, [field]: value } : d
      )
    );
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Schedule</Text>
        <Text style={styles.subtitle}>
          Choose which days follow a schedule and set automatic on / off times
          for your lights.
        </Text>

        {days.map((day) => (
          <View
            key={day.id}
            style={[
              styles.dayCard,
              day.enabled && styles.dayCardActive,
            ]}
          >
            <View style={styles.dayHeaderRow}>
              <Text style={styles.dayLabel}>{day.label}</Text>

              {/* Toggle */}
              <Pressable
                onPress={() => toggleDay(day.id)}
                style={[
                  styles.toggleTrack,
                  day.enabled && styles.toggleTrackOn,
                ]}
              >
                <View
                  style={[
                    styles.toggleThumb,
                    day.enabled && styles.toggleThumbOn,
                  ]}
                />
              </Pressable>
            </View>

            <View style={styles.timeRow}>
              <Text style={styles.timeLabel}>Start</Text>
              <TextInput
                value={day.start}
                onChangeText={(text) => updateTime(day.id, "start", text)}
                style={styles.timeInput}
                keyboardType="numbers-and-punctuation"
                placeholder="00:00 pm"
                placeholderTextColor="#8A9585"
              />
            </View>

            <View style={styles.timeRow}>
              <Text style={styles.timeLabel}>Stop</Text>
              <TextInput
                value={day.stop}
                onChangeText={(text) => updateTime(day.id, "stop", text)}
                style={styles.timeInput}
                keyboardType="numbers-and-punctuation"
                placeholder="00:00 am"
                placeholderTextColor="#8A9585"
              />
            </View>
          </View>
        ))}

        <View style={styles.helperTextBox}>
          <Text style={styles.helperTitle}>How this schedule works</Text>
          <Text style={styles.helperText}>
            When a day is turned on, your restaurant’s exterior lights will
            automatically follow the start and stop times you set here, unless
            you manually override them from the dashboard.
          </Text>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BG,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1F261E",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#5F6E5A",
    marginBottom: 18,
  },

  dayCard: {
    backgroundColor: "#F2F7EF",
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginBottom: 14,

    borderWidth: 1,
    borderColor: "#DEE7D7",

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 2,
  },
  dayCardActive: {
    borderColor: "#9DBE8E",
    backgroundColor: "#E7F2E0",
  },

  dayHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  dayLabel: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F261E",
  },

  /* Toggle styles */
  toggleTrack: {
    width: 46,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#D1D8CF",
    padding: 3,
    justifyContent: "center",
  },
  toggleTrackOn: {
    backgroundColor: "#9BC87F",
  },
  toggleThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
  },
  toggleThumbOn: {
    alignSelf: "flex-end",
  },

  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  timeLabel: {
    width: 52,
    fontSize: 14,
    fontWeight: "600",
    color: "#324131",
  },
  timeInput: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#273024",
    borderWidth: 1,
    borderColor: "#D6E0D1",
  },

  helperTextBox: {
    marginTop: 12,
    padding: 12,
    borderRadius: 14,
    backgroundColor: "#ECF4E7",
  },
  helperTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 4,
    color: "#273024",
  },
  helperText: {
    fontSize: 13,
    color: "#5F6E5A",
    lineHeight: 18,
  },
});
