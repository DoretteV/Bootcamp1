/* tweetshirt.js */

window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;

	// Easter Egg
	makeImage();
}

function previewHandler() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");

	fillBackgroundColor(canvas, context);

	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;

	if (shape == "squares") {
		for (var squares = 0; squares < 20; squares++) {
			drawSquare(canvas, context);
		}
	}
	else if (shape == "circles") {
		for (var circles = 0; circles < 20; circles++) {
			drawCircle(canvas, context);
		}
	}
	drawText(canvas, context);
	drawBird(canvas, context);
}

// This is where we'll set the background color
function fillBackgroundColor(canvas, context) {
	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var bgColor = selectObj[index].value;

	context.fillStyle = bgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);

}

// Draws a square at a random location
function drawSquare(canvas, context) {
	var w = Math.floor(Math.random() * 40);    
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	// Use this fillStyle instead if you want to try
	// "twitter blue"
	//context.fillStyle = "rgb(0, 173, 239)";
	context.fillStyle = "lightblue";
	context.fillRect(x, y, w, w);
}

// Draws a circle at a random location
function drawCircle(canvas, context) {
	var radius = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	context.beginPath();
	context.arc(x, y, radius, 0, degreesToRadians(360), true);

	// Use this fillStyle instead if you want to try
	// "twitter blue"
	//context.fillStyle = "rgb(0, 173, 239)";
	context.fillStyle = "lightblue";
	context.fill();
}

// draws all the text, including the tweet
function drawText(canvas, context) {
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgColor = selectObj[index].value;

	context.fillStyle = fgColor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20, 40);


	// draw the tweet!
	selectObj = document.getElementById("tweets");
	index = selectObj.selectedIndex;
	var tweet = selectObj[index].value;
	context.font = "italic 1.2em serif";
	context.fillText(tweet, 30, 100);

	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shirt!", 
		canvas.width-20, canvas.height-40);
}

// draws the twitter bird image
function drawBird(canvas, context) {
	var twitterBird = new Image();
	twitterBird.src = "twitterBird.png";
	twitterBird.onload = function() {
		context.drawImage(twitterBird, 20, 120, 70, 70);
	};

}

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}


function updateTweets(tweets) {
	var tweetsSelection = document.getElementById("tweets");

	// add all tweets to the tweets menu
	for (var i = 0; i < tweets.length; i++) {
		tweet = tweets[i];

		// create option
		var option = document.createElement("option");
		option.text = tweet.text;

		// strip any quotes out of the tweet so they don't mess up our option
		option.value = tweet.text.replace("\"", "'");

		// add option to select
		tweetsSelection.options.add(option);
    }
	// make sure the top tweet is selected
	tweetsSelection.selectedIndex = 0;
}

// Easter Egg
function makeImage() {
	var canvas = document.getElementById("tshirtCanvas");
	canvas.onclick = function () {
		window.location = canvas.toDataURL('image/png');
	};
}


// //getting the previewbutton element
// window.onload = function () {
//   let button = document.getElementById("previewButton");
//   //add a click handler. when its clicked its calling the function previewHandler
//   button.onclick = previewHandler;

//   makeImage();
// };

// function previewHandler() {
//   //getting the canvas element & asking for its 2d drawing context
//   let canvas = document.getElementById("tshirtCanvas");
//   let context = canvas.getContext("2d");
//   fillBackgroundColor(canvas, context); //getting a clean background each time

//   //get the ele with the id of shape
//   let selectObj = document.getElementById("shape");
//   //finding out which item is selected (squares or circles) by getting the index of the selected item
//   //and assigning its value to the variable shape
//   let index = selectObj.selectedIndex;
//   let shape = selectObj[index].value;

//   if (shape == "squares") {
//     for (var squares = 0; squares < 20; squares++) {
//       drawSquare(canvas, context);
//     }
//   } else if (shape == "circles") {
//     for (var circles = 0; circles < 20; circles++) {
//       drawCircle(canvas, context);
//     }
//   }
//   drawText(canvas, context);
//   drawBird(canvas, context);
// }

// function fillBackgroundColor(canvas, context) {
//   //setting the background color
//   let selectObj = document.getElementById("backgroundColor");
//   let index = selectObj.selectedIndex;
//   let bgColor = selectObj[index].value;

//   context.fillStyle = bgColor;
//   context.fillRect(0, 0, canvas.width, canvas.height);
// }

// function drawSquare(canvas, context) {
//   //getting random width & x & y position for the square.
//   //largest square will be 40
//   let w = Math.floor(Math.random() * 40);
//   let x = Math.floor(Math.random() * canvas.width);
//   let y = Math.floor(Math.random() * canvas.height);
//   //making the square lightblue
//   context.fillStyle = "lightblue";
//   //and finally drawing the actual square with fillrect
//   context.fillRect(x, y, w, w);
// }

// function drawCircle(canvas, context) {
//   let radius = Math.floor(Math.random() * 40); //40 for the max size of the circle
//   //getting random width & x & y position for the circle
//   let x = Math.floor(Math.random() * canvas.width);
//   let y = Math.floor(Math.random() * canvas.height);
//   context.beginPath();
//   context.arc(x, y, radius, 0, degreesToRadians(360), true);
//   context.fillStyle = "lightblue";
//   context.fill();
// }

// function updateTweets(tweets) {
//   let tweetsSelection = document.getElementById("tweets");
//   for (let i = 0; i < tweets.length; i++) {
//     tweet = tweets[i]; //getting a tweet from the array
//     let option = document.createElement("option"); //create a new option element
//     option.text = tweet.text; //set its text to the tweet
//     option.value = tweet.text.replace('"', "'"); //replace double quotes with single quotes
//     tweetsSelection.options.add(option); //add an option to select
//   }
//   tweetsSelection.selectedIndex = 0; //making sure the first tweet is selected
// }

// function drawText(canvas, context) {
//   let selectObj = document.getElementById("foregroundColor");
//   let index = selectObj.selectedIndex;
//   let fgColor = selectObj[index].value;

//   context.fillStyle = fgColor;
//   context.font = "bold 1em sans-serif";
//   context.textalign = "left";
//   context.fillText("I saw this tweet", 20, 40);

//   selectObj = document.getElementById("tweets");
//   index = selectObj.selectedIndex;
//   let tweet = selectObj[index].value;
//   context.font = "italic 1.2em serif";
//   context.fillText(tweet, 30, 100);

//   context.font = "bold 1em sans-serif";
//   context.textalign = "right";
//   context.fillText(
//     "and all I got was this lousy t-shirt!",
//     canvas.width - 20,
//     canvas.height - 40
//   );
// }

// function drawBird(canvas, context) {
//   let twitterBird = new Image();
//   twitterBird.src = "twitterBird.png";
//   context.drawImage(twitterBird, 20, 120, 70, 70);
//   twitterBird.onload = function () {
//     context.drawImage(twitterBird, 20, 120, 70, 70);
//   };
// }

// function makeImage() {
//   var canvas = document.getElementById("tshirtCanvas");
//   canvas.onclick = function () {
//     window.location = canvas.toDataURL("image/png");
//   };
// }

// function degreesToRadians(degrees) {
//   return (degrees * Math.PI) / 180;
// }
