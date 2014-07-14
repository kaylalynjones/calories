var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var weight = prompt(' How much do you weigh? ');
weight = parseInt(weight);
var gender = prompt(' Gender ( M/F ) ');
var food;
var cal = 0;
var meals = [];
var calories = [];
var limitM = 4000;
var limitF = 3000;
var newWeight = 0;
var sum = 0;
  
var gain;

var response = prompt(' Calculate your calories (Y)es or (N)o? ');

while( response != 'N'){
  food = prompt(' What did you eat? ');
  cal = prompt(' How many calories? ');
  cal = parseInt(cal);

  meals.push(food);
  calories.push(cal);

  var response = prompt(' Do you have more entries? (Y)es or (N)o? ');
}

for( i = 0; i < calories.length; i++ ){
  sum += calories[i];
}

/*if (gender === 'M'){
  gain = sum/limitM;
} else {
  gain = sum/limitF;
}*/

//use ternary op
gain = (gender === 'M') ? sum/limitM : sum/limitF;

newWeight = weight + gain;
newWeight = Math.floor(newWeight);

var foodList = meals.join(', ');

console.log(' You ate ' + foodList + '. ');
console.log(' That is ' + sum + ' many calories. ');
console.log(' You now weigh ' + newWeight);
