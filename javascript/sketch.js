let weatherData;
let loading = true;
let url = 'https://api.open-meteo.com/v1/forecast?latitude=51.46&longitude=-0.21&hourly=temperature_2m,relativehumidity_2m,rain&current_weather=true';

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  // perform request
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log("Got data");
    
    weather = data.current_weather;
    loading = false;
    
    //currentWeather();
     
  
  }).catch(function(err) {
    console.log(`Something went wrong: ${err}`);
  });
  
  
}
     


function draw() {
  
  textAlign(CENTER);
  background(0);

 
  
  if (loading) {
    // loading screen
    textSize(30);
    text("Loading...", 0, height/2-25, width, 50);
    
  }else{
    
  currentWeather()

  }
 
}

function currentWeather(){

  //position of the text
  let x = width / 2;
  let y = height / 2;

  let temperature = weather.temperature;
  let windDirection = weather.winddirection;

  fill(250);
  textSize(20);
  
  text("Temperature in Wandsworth: " + temperature + "°C", x, y - 100);

  push();
  translate(x, y);
  rotate(radians(windDirection));
  stroke(0);
  strokeWeight(3);
  triangle(0, 0, 10, 40, -10, 40);
  pop();
  
  text("Wind direction: " + windDirection + "°", x, y + 100);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}