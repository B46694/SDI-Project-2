//alert("JavaScript works!");


var CBR500r = "CBR500r";
var CBRPrice = 5999; 
var Haggle = true;
var yesPrice = true;
var canAfford; 


var hagglePrice = function(promptPrice) {
	if (promptPrice <= 4500) { 
	Haggle = false;
	console.log("Sorry the price is $5,999!");
	console.log("The best price the dealer can do is $5,500.");
	
	}
	
	else if (promptPrice >= 5000) {
	Haggle = true;
	console.log("The best price the dealer can do for the CBR500r is $5,500!")
	
	
	};
	
	
};

var accesoriesPrice = function(isAffordable, limit500) {
	var helmet = 150;
	var gloves = 50;
	var jacket = 200;
	var boots = 250;
	var total = 0;
	
	while (total <= limit500) {
		if (total === 0) {
			total = helmet;	
			}
			
		else if (total <= 150) {
				total = total + gloves;		
				}
				
		else if (total <= 200) {
				total = total + jacket;
				}
		
		else if (total <= 400) {
				total = total + boots;			
				}		
		
		};
		
		if (total > limit500) {
				total = total - boots;			
				}
	
	console.log("Your total is " + total + "!");
	
	if (total <= limit500) {
		return(true)		
		}
	
};


CBRPrice = parseInt(prompt("Thank you for choosing the " + CBR500r + "!" + " The price is " + CBRPrice + ". What are you willing to pay?"));

hagglePrice(CBRPrice);


yesPrice = confirm("Are you willing to pay $5,500?");

if (yesPrice === true) {
	console.log("Great! What accecories do you want?");
	
	
		
} else {
		console.log("Sorry, the dealer can not lower the price any more.");
};

console.log("I want $500 worth of accesories!");

canAfford = accesoriesPrice(yesPrice, 500 );

console.log("It is " + canAfford + " I can afford $400 worth of accesories");


var downPayment = function(interestRate) {
	
	var paymentIncrease = 0;
		
	for (var interest = interestRate; interest > 2.99; interest-=1) {
		
		paymentIncrease = paymentIncrease + 200
		
		console.log("Please increase downpayment");
			
	}

	console.log("Your down payment is " + paymentIncrease + ".");

	return(paymentIncrease)	
	
	

};
	
	
myDownPayment = downPayment(8.99)


var monthlyPayment = function (CBRPrice) {
	
	var myPayment = function (numerator, denominator) { 
		var fraction = numerator / denominator;
		return (fraction === Math.floor(fraction));
		
	};
	
	monthly = CBRPrice
	
	if (myPayment (monthly / 12)) { 
		
	
	}
	else if(myPayment (monthly / 24)) { }
	else if(myPayment( monthly / 48)) { }
	
	
	console.log("My monthly payments for 12 month financing is " + (monthly / 12) + " a month.");
	console.log("My monthly payments for 24 month financing is " + (monthly / 24) + " a month.");
	console.log("My monthly payments for 48 month financing is " + (monthly / 48) + " a month.");
	
};


payment = monthlyPayment(CBRPrice)


console.log("I choose the 12 month financing option.");

console.log("Awesome!!! I now have a CBR500r for $" + CBRPrice + " with a $" + myDownPayment); 
console.log(" and %2.99 interest rate and the 12 month financing option!");
console.log("Congradulations!! Im definitly gonna get counted of points for the returned values portion.....");
