"use strict"
//The line below this indicates that all the code inside the code block is to initiate/load on the page loading. 
$(document).ready(function() {
	//Variables for all functions and fields are declared here.
	var numberOne, numberTwo, result;
	var averageNumber, averageFinal;
	var average = 0;
	var averageArray = [];
	var squareSide, rectSideA, rectSideB, paraBase, paraHeight, trapBaseA, trapBaseB, trapHeight, circleRadius, ellAxisA, ellAxisB, triBase, triHeight;
	var squareAnswer, rectangleAnswer, paraAnswer, trapAnswer, circleAnswer, ellipseAnswer, triangleAnswer;
	//Set the values for the basic math page.
	function setValues()
	{
		numberOne = Number(document.getElementById("numberOne").value);
		numberTwo = Number(document.getElementById("numberTwo").value);
	}
	//Set the values for the Averages area of the basic math page. 
	function setAverageNumber()
	{
		averageNumber = Number(document.getElementById("averageNumber").value);
	}
	//Set the values for the Area page.
	function setAreaValues()
	{
		squareSide = Number(document.getElementById("squareSide").value);
		rectSideA = Number(document.getElementById("rectSideA").value);
		rectSideB = Number(document.getElementById("rectSideB").value);
		paraBase = Number(document.getElementById("paraBase").value);
		paraHeight = Number(document.getElementById("paraHeight").value);
		trapBaseA = Number(document.getElementById("trapBaseA").value);
		trapBaseB = Number(document.getElementById("trapBaseB").value);
		trapHeight = Number(document.getElementById("trapHeight").value);
		circleRadius = Number(document.getElementById("circleRadius").value);
		ellAxisA = Number(document.getElementById("ellAxisA").value);
		ellAxisB = Number(document.getElementById("ellAxisB").value);
		triBase = Number(document.getElementById("triBase").value);
		triHeight = Number(document.getElementById("triHeight").value);
		
	}
	//On click event to find the Sum.
	$("#addition").click(function() {
		setValues();
		if(isNaN(numberOne)) {
			alert("Entry must be numeric")
		}
		else if(isNaN(numberTwo)) {
			alert("Entry must be numeric")
		}
		else
		{
		result = numberOne+numberTwo;
		alert("The sum is: "+result);	
		}
	});
	//On click event to find the Remainder. 
	$("#subtraction").click(function() {
		setValues();
		if(isNaN(numberOne)) {
			alert("Entry must be numeric")
		}
		else if(isNaN(numberTwo)) {
			alert("Entry must be numeric")
		}
		else
		{
		result = numberOne-numberTwo;
		alert("The remainder is: "+result);
		}		
	});
	//On click event to find the Product. 
	$("#multiply").click(function() {
		setValues();
		if(isNaN(numberOne)) {
			alert("Entry must be numeric")
		}
		else if(isNaN(numberTwo)) {
			alert("Entry must be numeric")
		}
		else
		{
		result = numberOne*numberTwo;
		alert("The product is: "+result);	
		}
	});
	//On click event to find the Quotient.
	$("#divide").click(function() {
		setValues();
		if(isNaN(numberOne)) {
			alert("Entry must be numeric")
		}
		else if(isNaN(numberTwo)) {
			alert("Entry must be numeric")
		}
		else
		{		
		result = numberOne/numberTwo;
		alert("The quotient is: "+result);	
		}
	});
	//Adding the new number to be averaged to the average Array.
	$("#add").click(function() {
		setAverageNumber();
		if(isNaN(averageNumber)) {
			alert("Entry must be numeric.")
		}
		else {
		averageArray.push(averageNumber);
		}
	});
	//Taking each number in the Array and adding them together and dividing by the size of the Array.
	$("#average").click(function() {
		for(var i = 0; i < averageArray.length; i++) 
		{
			average += averageArray[i];
		}
		averageFinal = average / averageArray.length;
		alert(averageFinal);
	});
	//On click event to find the Area of a Square.
	$("#squareArea").click(function() {
		setAreaValues();
		if(isNaN(squareSide)) {
			alert("Entry must be numeric.")
		}
		else {
		squareAnswer = squareSide*squareSide;
		alert("The area of your Square is: "+squareAnswer);	
		}
	});
	//On click event to find the Area of a Rectangle.
	$("#rectangleArea").click(function() {
		setAreaValues();
		if(isNaN(rectSideA)) {
			alert("Entry must be numeric.")
		}
		else if(isNaN(rectSideB)) {
			alert("Entry must be numeric.")
		}
		else {		
		rectangleAnswer = rectSideA*rectSideB;
		alert("The area of your Rectangle is: "+rectangleAnswer);
		}
	});
	//On click event to find the Area of a Parallelogram.
	$("#paraArea").click(function() {
		setAreaValues();
		if(isNaN(paraBase)) {
			alert("Entry must be numeric.")
		}
		else if(isNaN(paraHeight)) {
			alert("Entry must be numeric.")
		}
		else {		
		paraAnswer = paraBase*paraHeight;
		alert("The area of your Parallelohram is: "+paraAnswer);
		}
	});
	//On click event to find the Area of a Trapezoid.
	$("#trapArea").click(function() {
		setAreaValues();
		if(isNaN(trapBaseA)) {
			alert("Entry must be numeric.")
		}
		else if (isNaN(trapBaseB)) {
			alert("Entry must be numeric.")
		}
		else if (isNaN(trapHeight)) {
			alert("Entry must be numeric.")
		}
		else {		
		trapAnswer = ((trapBaseA+trapBaseB)/2) * trapHeight;
		alert("The area of your Trapezoid is: "+trapAnswer);
		}
	});
	//On click event to find the Area of a Circle.
	$("#circleArea").click(function() {
		setAreaValues();
		if(isNaN(circleRadius)) {
			alert("Entry must be numeric.")
		}
		else {	
		circleAnswer = (circleRadius*circleRadius) * 3.14;
		alert("The area of your Circle is: "+circleAnswer);	
		}
	});
	//On click event to find the Area of an Ellipse.
	$("#ellipseArea").click(function() {
		setAreaValues();
		if(isNaN(ellAxisA)) {
			alert("Entry must be numeric.")
		}
		else if (isNaN(ellAxisB)) {
			alert("Entry must be numeric.")
		}
		else {
		ellipseAnswer = (ellAxisA*ellAxisB) * 3.14;
		alert("The area of your Ellipse is: "+ellipseAnswer);
		}
	});
	//On click event to find the Area of a Triangle.
	$("#triangleArea").click(function() {
		setAreaValues();
		if(isNaN(triBase)) {
			alert("Entry must be numeric.")
		}
		else if (isNaN(triHeight)) {
			alert("Entry must be numeric.")
		}
		else {
		triangleAnswer = ((triBase*triHeight)/2);
		alert("The area of your Triangle is: "+triangleAnswer);
		}
	});
});