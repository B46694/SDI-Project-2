//alert("JavaScript works!");
// Brannon DuBose
// SDI Project 2
// Section Number: 1311

var motorcycle = "CBR500r";
var motorcyclePrice = 5999; 
var yesPrice;
var canAfford; 
// Procedure function to determine bikePrice(finalPrice)
var bikePrice = function(promptPrice){
	if (promptPrice < 5500){ 
		console.log("Sorry the price is $5,999!");
		console.log("The best price the dealer can do is $5,500.");	
	}else if (promptPrice >= 5500){
		console.log("The best price the dealer can do for the CBR500r is $5,999!")
	}
};
// Boolean - While Loop to determine accersories 
var accesoriesPrice = function(yesPrice, limit500) {
	var helmet = 150;
	var gloves = 50;
	var jacket = 200;
	var boots = 250;
	var total = 0;
// Begining of While Loop	
	while (total <= limit500) {
		if (total === 0) {
			total = helmet;	
		}else if (total <= 150) {
			total = total + gloves;		
		}else if (total <= 200) {
			total = total + jacket;
		}else if (total <= 400) {
			total = total + boots;			
		}				
	};
	if (total > limit500) {
		total = total - boots;			
	}	
	console.log("Your total is " + total + "!");	
	if (total <= limit500){
		return true		
	}else{
		return false
	};
};
// Number function, determines downPayment based on desired interest rate
var downPayment = function(interestRate) {	
	var paymentIncrease = 0;		
	for (interestRate; interestRate > 2.99; interestRate-=1) {
		paymentIncrease = paymentIncrease + 200
		console.log("Lets increase by $200 until we reach a suitable down payment: " + paymentIncrease);
	}
	console.log("To reach the %2.99 interest rate your down payment is " + paymentIncrease + ".");
	return(paymentIncrease)	
};
//String function, determines my monthly payments
var monthlyPayment = function (motorcyclePrice) {	
	var myPayment = function (numerator, denominator) { 
		var fraction = (numerator / denominator);
		return (fraction === Math.floor(fraction));		
	}	
	console.log("My monthly payments for a 12 month financing period is $" + (motorcyclePrice / 12) + " per month.");
	console.log("My monthly payments for a 24 month financing period is $" + (motorcyclePrice / 24) + " per month.");
	console.log("My monthly payments for a 48 month financing period is $" + (motorcyclePrice / 48) + " per month.");	
};

// Prompt for price willing to pay
finalPrice = parseInt(prompt("Thank you for choosing the " + motorcycle + "!" + " The price is " + motorcyclePrice + ". What are you willing to pay?"));
// Calling my procedure to determin what to do with finalPrice
bikePrice(finalPrice);
// Confirm determining the return based on the boolean value
yesPrice = confirm("Are you willing to pay the dealers price?");
	if (yesPrice === true) {
		console.log("Great! What accecories do you want?");		
		console.log("I would like $500 worth of accesories for my new motorcycle!");
	}else{
		console.log("Sorry, the dealer can not lower the price any more.");
		console.log("Alright, I still want $500 worth of accesories for my other motorcycle!");
};

// Calling accesoriesPrice function
canAfford = accesoriesPrice(yesPrice, 500 );

console.log("It is " + canAfford + " I can afford $400 worth of accesories");
// Calling my downPayment function	
myDownPayment = downPayment(8.99);
// Calling my monthlyPayment function
monthlyPayment(motorcyclePrice);

console.log("I choose the 12 month financing option so I can have it paid off sooner.");
console.log("Awesome!!! I now have a CBR500r for $" + motorcyclePrice + " with a $" + myDownPayment); 
console.log("My interest rate is %2.99 and I have the 12 month financing option!");
console.log("Congradulations!! Im riding home on my brand new " + motorcycle + "!!");