var cat1 = [
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1855218975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1859720328&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", 
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1853162889&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1849239876&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
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