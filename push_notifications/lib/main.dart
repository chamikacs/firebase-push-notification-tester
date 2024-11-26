import 'dart:convert';

import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/material.dart';
import 'package:push_notifications/firebase_api.dart';
import 'package:push_notifications/home_page.dart';
import 'package:push_notifications/empty_page.dart';

final GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();

  // Initialize Firebase API
  final firebaseApi = FirebaseApi();
  await firebaseApi.initNotifications();

  // Subscribe to a topic based on userId
  const String userId = "userId1"; // Replace with the actual userId
  await firebaseApi.subscribeToTopic(userId);

  // Handle foreground messages
  FirebaseMessaging.onMessage.listen((RemoteMessage message) {
    print(
        "onMessage: ${message.notification?.title}, ${message.notification?.body}");

    if (message.notification != null) {
      String notificationMessage =
          "${message.notification?.title}: ${message.notification?.body}";
      Navigator.pushNamed(
        navigatorKey.currentState!.context,
        '/push-page',
        arguments: {"message": notificationMessage},
      );
    }

    if (message.data.isNotEmpty) {
      print("Received data message: ${message.data}");
      Navigator.pushNamed(
        navigatorKey.currentState!.context,
        '/push-page',
        arguments: {"message": jsonEncode(message.notification?.body)},
      );
    }
  });

  // Handle background and terminated state notifications
  FirebaseMessaging.onMessageOpenedApp.listen((RemoteMessage message) {
    print("onMessageOpenedApp: ${message.data}");
    Navigator.pushNamed(
      navigatorKey.currentState!.context,
      '/push-page',
      arguments: {"message": jsonEncode(message.notification?.body)},
    );
  });

  FirebaseMessaging.instance.getInitialMessage().then((RemoteMessage? message) {
    if (message != null) {
      print("App opened via notification: ${message.notification?.title}");
      Navigator.pushNamed(
        navigatorKey.currentState!.context,
        '/push-page',
        arguments: {"message": jsonEncode(message.data)},
      );
    }
  });

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Flutter Push Notifications Demo",
      navigatorKey: navigatorKey,
      routes: {
        '/': ((context) => const EmptyPage()),
        '/push-page': ((context) => const HomePage()),
      },
    );
  }
}
