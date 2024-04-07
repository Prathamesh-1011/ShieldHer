import 'package:flutter/material.dart';
import 'package:flutter_phone_direct_caller/flutter_phone_direct_caller.dart';

class ArmyEmergency extends StatelessWidget {
  _callNumber(String number) async {
    await FlutterPhoneDirectCaller.callNumber(number);
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.only(left: 10.0, bottom: 5),
        child: Card(
          elevation: 5,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20),
          ),
          child: InkWell(
            onTap: () => _callNumber('109'),
            child: Container(
              height: 180,
              width: MediaQuery.of(context).size.width * 0.7,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20),
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [
                    Color.fromARGB(255, 239, 77, 7),
                    Color.fromARGB(255, 242, 144, 6),
                    Color.fromARGB(248, 244, 224, 3)
                  ],
                ),
              ),
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    CircleAvatar(
                      radius: 25,
                      backgroundColor:
                          Color.fromARGB(254, 252, 252, 251).withOpacity(0.5),
                      child: Image.asset('assets/army2_WSA.png'),
                    ),
                    Expanded(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Cyber Crime',
                            style: TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                              fontSize:
                                  MediaQuery.of(context).size.width * 0.06,
                            ),
                          ),
                          Text(
                            ' National Cyber Crime Reporting',
                            style: TextStyle(
                              color: Colors.white,
                              overflow: TextOverflow.ellipsis,
                              fontSize:
                                  MediaQuery.of(context).size.width * 0.038,
                            ),
                          ),
                          Container(
                            height: 30,
                            width: 80,
                            //color: Colors.amber,
                            decoration: BoxDecoration(
                              color: Color.fromARGB(255, 246, 246, 243),
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: Center(
                              child: Text(
                                "1-9-3-0",
                                style: TextStyle(
                                  color: Color.fromARGB(210, 240, 36, 5),
                                  overflow: TextOverflow.ellipsis,
                                  fontSize:
                                      MediaQuery.of(context).size.width * 0.050,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ));
  }
}
