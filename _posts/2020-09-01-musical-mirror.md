---
layout: post
title: "Musical Mirror"
subtitle: "environmentally conscious crafts"
background: '/img/posts/mirror-background.jpg'
---

## Background 
The following is a side project I worked on during Fall of 2020. The project consists of four components. The mirror was purchased from Target at the Discount Section. I collected empty toilet paper rolls from home to create the surrounding floral pattern of the mirror.

The breadboard, wires, plug-in stereo and ultrasonic sensor are were all borrowed materials. I had not been familiar with Arduino, so I taught myself the syntax of C++.

When a user is close enough to the mirror, this will trigger the censor to activate consequently outputting a customizable melody through the speaker.

## Arduino ![Breadboard](/img/posts/breadboard.jpg)
The upper red wires on the left side of the Arduino UNO (smaller board) connect to the ultrasonic sensor on the breadboard (longer white).

## Mirror ![Mirror](/img/posts/mirror.jpg)
The mirror has a floral petal design surrounding the perimeter of the mirror. There is enough space between the crevices to insert the ultrasonic sensor and hide the base of the breadboard.

## Music Code
I used a public source to find a Pink Panther tune to output.