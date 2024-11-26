import 'package:flutter/widgets.dart';

class EmptyPage extends StatelessWidget {
  const EmptyPage({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Container(
        child: const Text("Push Notifications"),
      ),
    );
  }
}
