var buildings = [
  "Galvin Libray": {
    "address": "35 W 33rd St",
    "location":"https://www.google.com/maps/place/Paul+V.+Galvin+Library/@41.833676,-87.628307,15z/data=!4m5!3m4!1s0x0:0xd02a6e76ebf8681b!8m2!3d41.833676!4d-87.628307"
  },
  "S.R.Crown Hall": {
    "address": "3360 S State St",
    "location":"https://www.google.com/maps/place/S.+R.+Crown+Hall/@41.8343335,-87.6275423,17z/data=!3m1!5s0x880e2c0d0aad0f2f:0x18bd61b0ced378cc!4m12!1m6!3m5!1s0x0:0x91cbe4661afb6f1a!2sIllinois+Institute+of+Technology!8m2!3d41.8348731!4d-87.6270059!3m4!1s0x0:0x70210951aac6ba0f!8m2!3d41.8331937!4d-87.627275"
  },
  "Alumni Memorial": {
    "address": "3201 S Dearborn",
    "location": "https://www.google.com/maps/place/Alumni+Memorial+Hall,+3201+S+Dearborn+St,+Chicago,+IL+60616/@41.8362074,-87.6295179,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2c72b7ea734d:0x3a1373b16560a4c0!8m2!3d41.836184!4d-87.6273619"
  },
  "John T. Rettaliata Engineering Center": {
    "address": "10 W 32nd",
    "location": "https://www.google.com/maps/place/10+W+32nd+St,+Chicago,+IL+60616/@41.8368138,-87.6294606,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2c72b897eedd:0x18e5db013bdc1811!8m2!3d41.8368138!4d-87.6272719"
  },
  "Robert A. Pritzker Science Center": {
    "address": "3105 S Dearborn",
    "location": "https://www.google.com/maps/place/Stuart+Building,+Chicago,+IL+60616/@41.8395245,-87.6304336,17z/data=!3m1!5s0x880e2c7267cdc29f:0x16d7f78aa3cbe570!4m13!1m7!3m6!1s0x880e2c7208c2f807:0xf505ea1e9885a172!2s3105+S+Dearborn+St,+Chicago,+IL+60616!3b1!8m2!3d41.8395245!4d-87.6282449!3m4!1s0x880e2c7267d41d0d:0xa86f8aa74f6e9e8e!8m2!3d41.8387343!4d-87.627399"
  },
  "Perlstein Hall": {
    "address": "10 W 33rd",
    "location": "https://www.google.com/maps/place/Perlstein+Hall,+10+W+33rd+St,+Chicago,+IL+60616/@41.835479,-87.6293416,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2c0d35ac167b:0x2d05b964be01bbf8!8m2!3d41.835479!4d-87.6271529"
  },
  "Siegal Hall": {
    "address": "3301 S Dearborn",
    "location": "https://www.google.com/maps/place/3301+S+Dearborn+St,+Chicago,+IL+60616/@41.83368,-87.6306087,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2c0d7d0c76d1:0x92096876dc3b2f3c!8m2!3d41.83368!4d-87.62842"
  },
  "Stuart Builidng": {
    "address": "10 W 31st",
    "location": "https://www.google.com/maps/place/10+W+31st+St,+Chicago,+IL+60616/@41.838904,-87.6296597,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2c7268e33089:0xfee93bfcd7f0488a!8m2!3d41.838904!4d-87.627471"
  },
  "Wishnick Hall": {
    "address": "3255 S Dearborn",
    "location": "https://www.google.com/maps/place/3255+S+Dearborn+St,+Chicago,+IL+60616/@41.8350671,-87.6299163,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2c0d4f8ed923:0x7e60019b0027f2ad!8m2!3d41.8350671!4d-87.6277276"
  }
]

$('#buildingform').on('submit', function(e) {
  var buildingname = $('#buildingname').val();
  if(buildings[buildingname] !== undefined ) {
    $('#results').append('<li><a href="' + buildings[buildingname]["location"] + '">' +
    buildingname + '</a></li>');
  } else {
    $('#result').append('<li>' + buildingname + ' not found: it may not be in the system yet; try "Galvin library"');
  }
  e.preventDefault();
});
$('#buildingname').on('focus', function() {
    console.log('The building-name element is found. No "e"');
  });

var today = new Date();
var date = today.getFullYear() + ' '+ (today.getMonth()+1) + ' ' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
