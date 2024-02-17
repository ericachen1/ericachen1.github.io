---
layout: post
title: "Musical Mirror Arduino Project"
subtitle: "environmentally conscious crafts"
background: '/img/posts/mirror-background.jpg'
---

## Background 
The following is a side project I worked on during Fall 2020. The project consists of four components. The mirror was purchased from Target. I collected empty toilet paper rolls to create the surrounding floral pattern of the mirror.The breadboard, wires, plug-in stereo and ultrasonic sensor were all borrowed materials.

## Arduino 
The upper red wires on the left side of the Arduino UNO (smaller board) connects to the ultrasonic sensor on the breadboard (longer board).
![Breadboard](/img/posts/breadboard.jpg)

## Mirror 
The mirror has a floral petal design surrounding the perimeter of the mirror. There is enough space between the crevices to insert the ultrasonic sensor and hide the base of the breadboard.
![Mirror](/img/posts/mirror.jpg)

## Music Theory
When a user is close enough to the ultrasonic sensor, this will trigger the censor to activate, which outputs a customizable melody through the speaker. I used a public source to find a [Pink Panther tune](https://github.com/robsoncouto/arduino-songs/blob/master/pinkpanther/pinkpanther.ino) to output. 
