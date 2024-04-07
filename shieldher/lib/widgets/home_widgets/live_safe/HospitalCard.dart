import 'package:flutter/material.dart';

class HospitalCard extends StatelessWidget {
  final Function? onMapFunction;
  const HospitalCard({Key? key, this.onMapFunction}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 20),
      child: Column(
        children: [
          InkWell(
            onTap: () {
              onMapFunction!("Hospitals near me");
            },
            child: Card(
              elevation: 3,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(20),
              ),
              child: Container(
                height: 56,
                width: 58,
                child: Center(
                  child: Image.asset(
                    'assets/Hospital_location_WSA.png',
                    height: 32,
                  ),
                ),
              ),
            ),
          ),
          Text("Hospitals")
        ],
      ),
    );
  }
}
