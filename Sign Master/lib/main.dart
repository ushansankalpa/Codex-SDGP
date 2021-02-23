import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          centerTitle: true,
          title:
              Text("Sign Master", style: Theme.of(context).textTheme.headline6),
        ),
        body: Center(
          child: Container(
            height: 50.0,
            width: 150.0,
            decoration: BoxDecoration(boxShadow: [
              BoxShadow(
                  offset: Offset(0.0, 20.0),
                  blurRadius: 30.0,
                  color: Colors.black12)
            ], color: Colors.white, borderRadius: BorderRadius.circular(22.0)),
            child: Row(
              children: <Widget>[
                Container(
                  height: 50.0,
                  width: 120.0,
                  child: Text("Live Video"),
                  decoration: BoxDecoration(
                      color: Colors.greenAccent,
                      borderRadius: BorderRadius.only(
                          bottomLeft: Radius.circular(22.0),
                          topLeft: Radius.circular(22.0),
                          bottomRight: Radius.circular(200.0))),
                ),
                Icon(
                  Icons.video_call,
                  size: 30.0,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
