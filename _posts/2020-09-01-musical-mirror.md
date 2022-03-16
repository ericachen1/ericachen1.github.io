---
layout: post
title: "Musical Mirror"
subtitle: "environmentally conscious crafts"
background: '/img/posts/mirror-background.jpg'
---

## Background 
The following is a side project I worked on during Fall of 2020. The project consists of four components. The mirror was purchased from Target at the Discount Section. I collected empty toilet paper rolls to create the surrounding floral pattern of the mirror.

I headed to my local hardware store to purchase a breadboard, wires, plug-in stereo and ultrasonic sensor. I downloaded the free software, Arduino, to code the project. I was not familiar with Arduino, so I taught myself the syntax of C++ before I was successful in coding the project to life. The function of the Musical Mirror is when an object is close enough to the mirror the sensor will recognize this and the speaker will output a melody.

## Arduino
![Breadboard](/assets/img/posts/breadboard.jpg)
The upper red wires on the left side of the Arduino UNO (smaller board) to the ultrasonic sensor on the breadboard (longer white).

## Mirror
The mirror has a floral petal design surrounding the perimeter of the mirror. There is enough space between the crevices to insert the ultrasonic sensor and hide the base of the breadboard.

## Music Code
This code determines two scenarios: if the user is close enough to the sensor/mirror or if the user is too far away to activate the sensor

I used a public source to find a tune to output.