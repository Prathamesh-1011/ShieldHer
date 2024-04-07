import 'package:flutter/material.dart';
import 'dart:math';

import 'widgets/LifeSafe.dart';
import 'widgets/home_widgets/CustomCarouel.dart';
import 'widgets/home_widgets/SafeHome/SafeHome.dart';
import 'widgets/home_widgets/custom_appBar.dart';
import 'widgets/home_widgets/emergency.dart';

class HomeScreen extends StatefulWidget {
  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  // const HomeScreen({super.key});
  int qIndex = 0;

  getRandomQuote() {
    Random random = Random();
    setState(() {
      qIndex = random.nextInt(5);
    });
  }

  @override
  void initState() {
    getRandomQuote();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SingleChildScrollView(
      child: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              CustomAppBar(
                  quoteIndex: qIndex,
                  onTap: () {
                    getRandomQuote();
                  }),
              CustomCarouel(),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(
                  "Emergency",
                  style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
                ),
              ),
              Emergency(),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(
                  "Explore LifeSafe",
                  style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
                ),
              ),
              LifeSafe(),
              SafeHome(),
            ],
          ),
        ),
      ),
    ));
  }
}
