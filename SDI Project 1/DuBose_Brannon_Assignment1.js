//alert("JavaScript works!");

//Brannon DuBose 
//SDI Project 1 
//Term: 1301
// First Project for SDI


//My Variables
var myHondaDealer = "Honda Dealer I am purchasing my motorcycle from";
var myTwoMotorcycles = "Honda CBR500r and the CB1100";
var CBR500r = false;
var mySalesman = "my salesman and he informs me of my options";
var myTwoOptions = "financing  through the bank or the through the Honda Dealer";
var Bank = false;
var myBankInterest = "9%";
var myHondaInterest = "2.99%";
var myPaperwork = "filling out the loan paperwork";
var myLoanDecision = "wait 15 minutes for the approval or denyal of my loan";
var Approved = false;
var myAskWhatToDo = "discuss with my salesman what i could do";
var myNeedToDo = "come back with $1,000 or more down payment and a pay stub";
var myDateDecision = "my first available date to go back is on October 12th";
var October12 = true;
var mySelfWillBeBack = "I will be walking into the Honda Dealer on October 12th and riding out on my";

//My Outputs
console.log("I arrive at the " + myHondaDealer + ".");
console.log("I narrow down my choice between the " + myTwoMotorcycles + ".");




CBR500r = confirm("Is my choice the CBR500r?");

//My Motorcycle Conditional
if (CBR500r === true) {
	// the code that runs if my decision is the CBR500r	
	console.log("My decision is the CBR500r");
		
} else {
		//this runs when CBR500r is false
		console.log("My decision is the CB1100" + ".");
};


console.log("I start talking with " + mySalesman + ".");
console.log("After discussing my options we narrow it down to two, " + myTwoOptions + ".");
console.log("The interest rate for the bank was " + myBankInterest + ".");
console.log("But the interest rate for the Honda Dealer was " + myHondaInterest + ".");


Bank = confirm("Did i choose the stupidly high 9% interest Bank loan?");

//My loan conditional
if(Bank === false) {
	//code that runs if I dont choose the bank
	console.log("Without a doubt I chose the Honda Dealer to get a loan from.");

} else {
	//This runs if i am stupid and choose the bank loan
	console.log("I am stupid and chose the bank loan at a ridiculous 9% interest rate...");
};

console.log("I begin " + myPaperwork + ".");


Approved = confirm("Was my loan aproved or denied?");

//My loan decision conditional
if(Approved === true){
	//Code that runs if i am approved
	console.log("APPROVED!!! I am riding home on my brand new motorcyle!!!");
	
} else {
	//code that runs if denied loan
	console.log("DENIED! Well that sucks... But I decided to " + myAskWhatToDo +  ".");
	console.log("He informs me that I need to " + myNeedToDo + ".");
	console.log("I looked at my calender and " + myDateDecision + ".");
};

October12 = confirm("Am i going to go back to the Honda Dealer and purchase my Bike on October 12th?");
	
//My purchase date conditional
if (October12 === true) {
	// the code that runs if my decision is October 12th	
	console.log("I will be back on October 12th with my pay stub and $1,000 down payment.");
		
} else {
		//this runs October 12
		console.log("Sorry, but no if ands or buts about it, I am purchasing my motorcycle on October 12!");
		console.log( mySelfWillBeBack + " BRAND NEW MOTORCYCLE" + "!!!!!!!!");
};

//Ill be 100% honest, i simply have not had time to go through all of the lessons from monday through friday... I work 9-10 hours a day at my new job and then i also have a lawn care business on the side, if i was able to access this course over the weekend i would have been able to better prepare if i did not have such a short time span for this first week. I used knowledge i already had and the instructional flow chart as well as your live session video****

