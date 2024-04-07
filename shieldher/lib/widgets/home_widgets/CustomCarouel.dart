import 'package:carousel_slider/carousel_slider.dart';
import 'package:shieldher/utils/quotes.dart';
import 'package:flutter/material.dart';

class CustomCarouel extends StatelessWidget {
  const CustomCarouel({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: CarouselSlider(
        options: CarouselOptions(
          aspectRatio: 2.0,
          autoPlay: true,
          enlargeCenterPage: true,
        ),
        items: List.generate(
          imageSliders.length,
          (index) => Card(
            elevation: 5.0,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(20),
            ),
            child: Container(
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(20),
                  image: DecorationImage(
                      fit: BoxFit.cover,
                      image: NetworkImage(
                        imageSliders[index],
                      ))),
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(20),
                  gradient: LinearGradient(colors: [
                    Colors.black.withOpacity(0.5),
                    Colors.transparent,
                  ]),
                ),
                child: Align(
                  alignment: Alignment.bottomLeft,
                  child: Padding(
                    padding: const EdgeInsets.only(bottom: 8, left: 8),
                    child: Text(
                      articleTitle[index],
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: Color.fromARGB(255, 246, 248, 249),
                        fontSize: MediaQuery.of(context).size.width * 0.05,
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
