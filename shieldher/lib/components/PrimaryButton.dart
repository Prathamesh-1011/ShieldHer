import 'package:shieldher/utils/constants.dart';
import 'package:flutter/material.dart';

class PrimaryButton extends StatelessWidget {
  final String title;
  final Function onPressed;
  bool loading;
  PrimaryButton(
      {required this.title, required this.onPressed, this.loading = false});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 60,
      width: double.infinity,
      child: ElevatedButton(
        onPressed: () {
          onPressed();
        },
        child: Text(
          title,
          style: TextStyle(fontSize: 18),
        ),
        style: ElevatedButton.styleFrom(
            backgroundColor: primaryColor,
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(30))),
      ),
    );
  }
}
