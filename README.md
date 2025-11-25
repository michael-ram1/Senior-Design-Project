# **Cloud-Connected Restaurant Lighting Mobile App (CSE Senior Design, Budderfly)**

This project implements the **mobile application UI** for an IoT-enabled restaurant lighting control system, as part of a joint ECE/CSE senior design collaboration with Budderfly. This app provides a clean, user-friendly interface for viewing and controlling exterior restaurant lighting behavior.

The mobile UI connects to backend cloud services (future integration) and demonstrates scalable, modern interface design for managing lighting schedules, manual overrides, and device state.

---

## **Overview**

The mobile app provides the frontend experience for restaurant managers to remotely control exterior lighting. Users can:

* Manually toggle lights on/off
* View real-time system status
* Set daily lighting schedules
* Review history logs of lighting changes
* Adjust profile settings

Built using the **Expo React Native** framework, the app runs on both iOS and Android devices.

---

## **Project Goals**

* Provide an intuitive UI for interacting with cloud-controlled lighting devices
* Mimic real hardware behavior using a simulated lighting store
* Support future backend integration with AWS IoT and ESP32 controllers
* Enable teammates to test UI features quickly using Expo Go or emulators
* Maintain a clean, modular, and easily extensible codebase

---

## **Technologies**

* **React Native (Expo)** for cross-platform mobile development
* **Expo Router** for navigation
* **TypeScript** for type-safe development
* **Local State Store** (`lightingStore.tsx`) for light state simulation
* **Git** for version control and branch separation

---

## **Key Files**

* `app-ui-folder/App.tsx` — App entry point
* `app-ui-folder/app/` — Screens (Dashboard, Schedule, History, Profile)
* `app-ui-folder/lightingStore.tsx` — Light state + history manager
* `app-ui-folder/assets/` — App images and logos
* `package.json` — Project dependencies
* `app.json` — Expo configuration

---

## **Setup Instructions**

### **1. Switch to the UI branch**

```bash
git checkout app-ui
```

### **2. Enter the Expo project folder**

```bash
cd app-ui-folder
```

### **3. Install dependencies**

Use legacy peer deps to avoid version conflicts:

```bash
npm install --legacy-peer-deps
```

### **4. Start the Expo development server**

```bash
npx expo start
```

This opens the Expo Dev Tools.

---

## **Running the App**

### **Option A — Physical Device (Expo Go)**

1. Install **Expo Go** (App Store / Google Play)
2. Ensure phone + computer are on the same Wi-Fi
3. Scan the QR code shown after running `npx expo start`

### **Option B — Simulator / Emulator**

With Expo running:

* Press **i** → Launch iOS Simulator (Mac only)
* Press **a** → Launch Android Emulator

---

## **Security & Repo Structure**

* `node_modules/` is never committed
* The entire UI lives inside `app-ui-folder/`
* All development for the mobile UI stays inside the `app-ui` branch
* **main branch remains clean** for final project deliverables

---

### **Designed and maintained by the CSE UI Team, University of Connecticut.**

**Project sponsored by Budderfly.**

