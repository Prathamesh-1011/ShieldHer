import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:shieldher/home_screen.dart';
import 'package:shieldher/login_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ShieldHer',
      theme: ThemeData(
          textTheme: GoogleFonts.creteRoundTextTheme(
            Theme.of(context).textTheme,
          ),
          primarySwatch: Colors.pink
          // colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          // useMaterial3: true,
          ),
      home: HomeScreen(),
    );
  }
}
