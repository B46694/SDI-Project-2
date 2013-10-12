// Functions
// Author: Brannon DuBose
// Functions Lesson


// this is a static variable
/*
var pi = 3.14159, 
	radius1 = 5,
	area1 = radius1 * radius * pi;
	radius2 = 10,
	area2 = radius2 * radius2 * pi
;
*/

/*

var pi = 3.14159;
var radius = 5;

var getArea = function (r) {
	var area = r * r * pi;
	
	//return statement is usually the last thing a functions does and will give data back to the point where a function was called 
	//function will stop at a return, can end function prematurely if desired
	//return;
	return area;
	
	
};

var reportArea = function(name, area, message){
	console.log(name + "'s circle has " + area +  " area, and " + message);

};

var area = getArea(10);
reportArea("Ceiling cat", area, " is all seeing");
*/
/*

// funtions are performing an action ie. getting the area of a circle
var getArea = function () {
	console.log("getArea fired!");
	
	};
	
console.log("I'm technically first. I am after the funtion is defined, but nbefore the function is called upon.");
	
// open close () tells function to execute- cannont have space
getArea();
*/

// () declaration, calling, definition
// {} code block

/*
if () {};
for ()[];
*/





/*

// video two functions

var deckNames = [ "Birth deck", "Bridge", "Gun deck", "Quarterdeck"],
	minutesPerDeck = [ 30, 15, 60, 60];
	
var swabOneDeck = function() {
	var deckName = deckNames[deckNumber],
	minutesThisDeck = minutesPerDeck[deckNumber];
	console.log("Starting to swab the " + deckName + " for " + minutesThisDeck + "minutes.");
	
	for (var minutes = 0; minutes < minutesThisDeck; minutes += 5) {
		var minutesRemain = minutesThisDeck - minutes;
		console.log(minutes + " done " + minutesRemain + " to go!");
	}
	console.log("I'm done with the " + deckName + ".");
	
};
	
for (var deckNumber = 0; deckNumber < deckNames.length; deckNumber++) {
	swabOneDeck();
// encapsulation,	
	
} // for deckNumber

*/
/*	
var say = function(message) { console.log(message); };	
say("I saved myself " + 8 + " whole characters");
*/


var say = function(message) { console.log(message); };

// F = ((9/5) * C( + 32
var farFromCel = function(celsius) { return ((9/5) * celsius) + 32; };
say("22C = " + farFromCel(22) + "F");




// C = (F - 32) * (5/9)
var celFromFar = function (fahrenheit) { return (fahrenheit - 32) * (5/9); };
say("71.6F = " + celFromFar(71.6) + "C");

var isLeapYear = function (year) {
	// by 4 - true
	// by 100 - false
	// by 400 - true
	
	var isDivisibleBy = function (numerator, denominator) { 
		var fraction = numerator / denominator;
		return (fraction === Math.floor(fraction));
		
	};
	
	if (isDivisibleBy(year, 400)) { return true;}
	else if(isDivisibleBy (year, 100)) { return false;}
	else if(isDivisibleBy(year, 4)) { return true; }
	else { return false;}
	
};

say("2000 is a leap year: " + isLeapYear(2000));
say("1900 is a leap year: " + isLeapYear(1900));
say("2008 is a leap year: " + isLeapYear(2008));
say("2011 is a leap year: " + isLeapYear(2011));