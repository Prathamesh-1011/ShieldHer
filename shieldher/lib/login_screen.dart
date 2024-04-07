import 'package:shieldher/components/custom_textfield.dart';
import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
          child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            Text(
              "User Login",
              style: TextStyle(fontSize: 40),
            ),
            Image.asset(
              'assets/logo.png',
              height: 50,
              width: 60,
            ),
            CustomTextField(
              hintText: "enter name",
              prefix: Icon(Icons.person),
            ),
          ],
        ),
      )),
    );
  }
}
