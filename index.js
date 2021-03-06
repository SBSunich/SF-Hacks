const express = require("express");
const axios = require("axios");


const snackInfo = async ()=>
{
  
  const res = await axios.get("https://api.barcodelookup.com/v2/products?barcode=085239015759&key=7uym2paawshnadqi3jhk0d8mfm6f2h")
  console.log(res.data.products[0].product_name)
  var name = res.data.products[0].product_name;
  

const request = require('request');
var query = name;
request.get({
  url: 'https://api.calorieninjas.com/v1/nutrition?query='+query,
  headers: {
    'X-Api-Key': 'VeOgjLOXI9psqqnIEoLlDw==MJtmYsJ2VyLtRLb1'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
}); 
}
 

snakcInfo();