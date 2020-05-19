/*
	COMP 125 - Summer 2019
	Client-Side Web Development
	Blessing Ajiboye

    Bug Smasher Game - Assignment 5
	HTML 5 Canvas - JavaScript
	Author: Tiago Franco Finotti #301041366
	Date: Jul 26th 2019

	Filename: Assignment5.js
*/

"use strict";

// Initializing variables for starting interval (2000 ms), score, subsequent intervals, and the bug image
var startInterval = 1500;
var score = 0;
var flyInterval;
var bugImg;

// Function to update the bug's position on the screen
var start = function () {
    bugImg = document.getElementById("bug");
    bugImg.addEventListener("click", getFly, false);
    update();
}

var update = function () {
    document.getElementById('scoreband').innerHTML = score;
    flyInterval = window.setInterval(flyFly, startInterval);
}

var flyFly = function () {
    bugImg.style.left = Math.random() * 800 + "px";
    bugImg.style.top = Math.random() * 400 + "px";
    bugImg.addEventListener("click", getFly, false);
}

//Removes the bug image when clicked, updates the score,
//and pops a new bug image with the new fly interval
var getFly = function () {

    bugImg.removeEventListener("click", getFly, false);
    bugImg.style.left = Math.random() * 800 + "px";
    bugImg.style.top = Math.random() * 400 + "px";

    score += 10;
    document.getElementById('scoreband').innerHTML = score;

    startInterval -= 100;
    clearInterval(flyInterval);
    flyInterval = window.setInterval(flyFly, startInterval);
}

//Resets the score
var resetScore = function () {
    score = 0;
    document.getElementById('scoreband').innerHTML = score;
}

//Resets the speed
var resetSpeed = function () {
    startInterval = 2000;
    clearInterval(flyInterval);
    flyInterval = window.setInterval(flyFly, startInterval);
}

//Creates event listeners
if (window.addEventListener) {
    document.getElementById("btnSpeed").addEventListener("click", resetSpeed, false);
} else if (window.attachEvent) {
    document.getElementById("btnSpeed").attachEvent("onclick", resetSpeed);
}

if (window.addEventListener) {
    document.getElementById("btnScore").addEventListener("click", resetScore, false);
} else if (window.attachEvent) {
    document.getElementById("btnScore").attachEvent("onclick", resetScore);
}

if (window.addEventListener) {
    window.addEventListener("load", start, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", start);
}