// lightingStore.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type HistoryEntry = {
  id: number;
  timestamp: string;
  date: string;          // 👈 NEW
  status: "on" | "off";
};

type LightingContextType = {
  isOn: boolean;
  history: HistoryEntry[];
  toggleLight: () => void;
  clearHistory: () => void;
};

const LightingContext = createContext<LightingContextType | undefined>(
  undefined
);

export const LightingProvider = ({ children }: { children: ReactNode }) => {
  const [isOn, setIsOn] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const addHistoryEntry = (next: boolean) => {
    const now = new Date();

    const timeString = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

    const dateString = now.toLocaleDateString("en-US", {
      month: "short",   // e.g., "Nov"
      day: "numeric",   // e.g., "24"
      year: "numeric",  // e.g., "2025"
    });

    const entry: HistoryEntry = {
      id: now.getTime(),
      timestamp: timeString,
      date: dateString,          // 👈 NEW
      status: next ? "on" : "off",
    };

    setHistory((prev) => [entry, ...prev]); // newest first
  };

  const toggleLight = () => {
    setIsOn((prev) => {
      const next = !prev;
      addHistoryEntry(next);
      return next;
    });
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <LightingContext.Provider
      value={{ isOn, history, toggleLight, clearHistory }}
    >
      {children}
    </LightingContext.Provider>
  );
};

export const useLighting = () => {
  const ctx = useContext(LightingContext);
  if (!ctx) {
    throw new Error("useLighting must be used within LightingProvider");
  }
  return ctx;
};
