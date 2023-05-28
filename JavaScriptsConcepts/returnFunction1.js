const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if ((par === 4 && strokes === 1) ||(par === 1 && strokes === 1)){
  return console.log(names[0]);
}else if ((par === 4 && strokes === 2) ||(par === 5 && strokes === 2)){
  return console.log(names[1]);
}else if (par === 4 && strokes === 3) {
  return console.log(names[2]);
}else if ((par === 4 && strokes === 4) ||(par === 5 && strokes === 5)){
  return console.log(names[3]);
}else if (par === 4 && strokes === 5){
  return console.log(names[4]);
}else if (par === 4 && strokes === 6){
  return console.log(names[5]);
}else if ((par === 4 && strokes === 7) ||(par === 5 && strokes === 9)){
  return console.log(names[6]);
}
  // Only change code above this line
}

golfScore(4, 5);