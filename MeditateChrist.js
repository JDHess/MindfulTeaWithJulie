var cat1 = [
    "https://www.youtube.com/embed/cOf2GyphWvc?si=4jYQ_qMA1fY8r1wc",
    "https://www.youtube.com/embed/5tj38zeQnD4?si=78-9HcUQN-yKA-Ea", 
    "https://www.youtube.com/embed/dkYfGD1tWM8?si=cUnFWLJssyMkaTuW",
    "https://www.youtube.com/embed/Fq86W2nR04g?si=Y1DejxWE2DC9bmCw"
];


// Get the iframe element by its ID
var myFrame = document.getElementById("frame");

// Function to get a random URL from the array and set it as the iframe's source
function getRandomUrl(myFrame) {
    var index = Math.floor(Math.random() * cat1.length);
    var url = cat1[index];
    myFrame.src = url;
}

// Get the button element by its ID
var btn = document.getElementById("btn");

// Add a click event listener to the button
btn.addEventListener("click", function() {
    getRandomUrl(myFrame);
});