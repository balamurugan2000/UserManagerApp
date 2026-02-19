### Prerequisites

- Node.js >= 22.11.0
- npm
- Xcode (for iOS development on Mac)
- Android Studio (for Android development)

### Installation

git clone https://github.com/yourusername/UserManagerApp.git
cd UserManagerApp
npm install

### Run on Android:
npm run android

### Run on iOS (Mac only):
npm run ios

===========================================================================

### Architectural Decisions

The project architecture is designed to make the app easy to maintain, scalable, and performant.

# Core Architecture

React Native is used to build the mobile app for both Android and iOS using a single codebase.
TypeScript is used to improve code quality and reduce errors.

# State Management

Redux Toolkit is used to manage global data across the app in a structured and predictable way.

# Navigation

React Navigation is used to handle movement between screens with smooth transitions.

# Networking

Axios is used for API calls, and a service layer is created to keep API logic reusable and clean.

# Local Storage

MMKV and Redux Persist are used to store data locally and maintain app state even after restarting the app.

# UI & Styling

Custom components and StyleSheet are used to keep the UI consistent and reusable.

# Performance

Optimization techniques like memoization, FlatList optimization, and Hermes engine are used to improve app speed and reduce unnecessary re-renders.

# Testing

Jest and React Native Testing Library are used to test the app and ensure reliability.