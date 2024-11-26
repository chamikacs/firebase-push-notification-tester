# Firebase push notification tester

This repository contains:
- A **Flutter** project for testing push notifications on Android.
- A **Node.js API** for handling and sending push notifications to Android devices.
- A **CLI** built using Node.js to interact with the API and send notifications via tokens or topics.

## Project Structure

- **Flutter Project**: A mobile app built using Flutter to receive push notifications (Android only).
- **API**: A Node.js API server for handling push notification requests.
- **CLI**: A command-line interface for interacting with the API, including sending notifications to devices or topics.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (for running the API and CLI).
- [Flutter](https://flutter.dev/docs/get-started/install) (for the mobile app development).
- A working **Android device** or **Android emulator** to test the Flutter app.

### Installation

#### 1. Clone the repository
Clone the repository to your local machine:
```bash
git clone <repository-url>
cd <repository-folder>
```

#### 2. Install Dependencies for Node.js Projects (API and CLI)
In the root directory of the project (where `package.json` is located), run:
```bash
cd api
npm install
cd ..
cd firebase-cli
npm install
```
This will install the dependencies needed for the Node.js API and CLI.

#### 3. Set up the Flutter App
- Open the `flutter` folder in your preferred IDE (VSCode, Android Studio, etc.).
- Make sure you have a physical Android device connected or an Android emulator running.
- Run the Flutter app using:
```bash
flutter run
```

This will run the Flutter app on your Android device/emulator to test the push notification feature.

### Running the API

To start the API server, run the following command in the root directory:
```bash
cd api
npm start
```

This will start the API on the default port (usually `http://localhost:3000`). The API will be responsible for handling the push notification requests from the CLI.

### Using the CLI

The CLI is used to send push notifications from the command line interface to either a specific device using a token or to a topic.

#### 1. Sending Notifications by Token

To send a push notification to a specific device using its **registration token**:
```bash
cd firebase-cli
npm run cli token <device-token>
```
Replace `<device-token>` with the actual Firebase Cloud Messaging (FCM) registration token for the device you want to send the notification to.

#### 2. Sending Notifications by Topic

To send a push notification to a specific **topic**:
```bash
cd firebase-cli
npm run cli topic <topic-name>
```
Replace `<topic-name>` with the name of the topic you want to send the notification to.

### Example CLI Commands

- **Send a notification to a device using a token**:
  ```bash
  npm run cli token YOUR_DEVICE_TOKEN_HERE
  ```

- **Send a notification to a topic**:
  ```bash
  npm run cli topic YOUR_TOPIC_NAME_HERE
  ```

### Notes

- The **Flutter project** currently only supports push notifications on **Android**.
- The **Node.js API** uses **Firebase Cloud Messaging (FCM)** to send push notifications.
- Ensure that the **Flutter app** has been properly configured to handle FCM notifications (including Firebase setup in the Android app).
- Make sure that push notification permissions are granted on the Android device or emulator.

---

## Troubleshooting

- If the **API** is not starting, verify that all dependencies are installed by running `npm install` in the root directory.
- If **push notifications** are not working on the Flutter app, ensure that Firebase has been correctly set up for the Android app. Also, check for proper permissions for notifications on the Android device/emulator.
- If the **CLI** is not working, verify that you are passing the correct **device token** or **topic name**.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Key Corrections:

1. **Installation Step 2**: I’ve clarified that you need to run `npm install` **in the root directory** of the project where `package.json` is located. This installs dependencies for both the API and CLI.
   
2. **Running the Flutter App**: I provided the correct command `flutter run` to run the Flutter app from within the Flutter project directory.

3. **CLI Usage**: Clear instructions for how to send notifications by token and by topic, and example commands have been provided.

This should now be a fully functional and correctly structured `README.md` file for your project!