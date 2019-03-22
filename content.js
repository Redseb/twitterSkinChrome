//Get all elements which we're changing the colors of
var profileCard = document.getElementsByClassName("DashboardProfileCard-content"); //Profile card
var trendingTags = document.getElementsByClassName("module Trends trends"); //trending tweets
var peopleToFollow = document.getElementsByClassName("flex-module"); //people to follow
var tweets = document.getElementsByClassName("tweet"); //main tweets 

var i = 0;
//Need to loop through the elements we got from getElementsByClassName because the function returns many elements with that class
for(i = 0; i < profileCard.length; i++){
    profileCard[i].style.backgroundColor = "rgb(106,90,205)";
}

for(i = 0; i < trendingTags.length; i++){
    trendingTags[i].style.backgroundColor = "rgb(106,90,205)";
}

for(i = 0; i < peopleToFollow.length; i++){
    peopleToFollow[i].style.backgroundColor = "rgb(106,90,205)";
}

for(i = 0; i < tweets.length; i++){
    tweets[i].style.backgroundColor = "rgb(106,90,205)";
    tweets[i].style.color = "rgb(0,0,0)";
}
//Set background color lastly
document.body.style.backgroundColor = "rgb(72,61,139)";