var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friendsArray = [
    {
        "name":"Vegeta",
        "photo":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwis7Y-H6OLaAhVwhOAKHUNQBIIQjRx6BAgBEAU&url=http%3A%2F%2Fwww.dragonballsuper.mx%2F&psig=AOvVaw26-tbvsjeUw7jEI7CzSLyh&ust=1525205675920774",
        "scores":[
            2,
            3,
            4,
            5,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Goku",
        "photo":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiilZ3I6uLaAhUDON8KHbAMCrYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.geek.com%2Fanime%2Fdragon-ball-super-may-not-be-coming-back-after-all-according-to-fan-rumblings-1734934%2F&psig=AOvVaw26-tbvsjeUw7jEI7CzSLyh&ust=1525205675920774",
        "scores":[
            1,
            5,
            3,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Jiren",
        "photo":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiKtM3p6uLaAhULVN8KHVuVCO0QjRx6BAgBEAU&url=http%3A%2F%2Fcollider.com%2Fdragon-ball-super-jiren-powers-origin-story-explained%2F&psig=AOvVaw26-tbvsjeUw7jEI7CzSLyh&ust=1525205675920774",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Beerus",
        "photo":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjzgbjQ7OLaAhXEg-AKHSvSDssQjRx6BAgBEAU&url=http%3A%2F%2Fwww.denofgeek.com%2Fus%2Ftv%2Fdragon-ball-super%2F262807%2Fdragon-ball-super-episode-10-review-show-us-goku-the-power-of-a-super-saiyan-god&psig=AOvVaw26-tbvsjeUw7jEI7CzSLyh&ust=1525205675920774",
        "scores":[
            4,
            3,
            3,
            2,
            1,
            1,
            2,
            5,
            4,
            1
          ]
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;