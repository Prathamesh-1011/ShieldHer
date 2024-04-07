import 'package:flutter/material.dart';

class BusStationCard extends StatelessWidget {
  final Function? onMapFunction;
  const BusStationCard({Key? key, this.onMapFunction}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 20),
      child: Column(
        children: [
          InkWell(
            onTap: () {
              onMapFunction!("Bus Stops near me");
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
                    'assets/BusStop_location_WSA.png',
                    height: 32,
                  ),
                ),
              ),
            ),
          ),
          Text("Bus Stops ")
        ],
      ),
    );
  }
}
