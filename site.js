var buildings = [
  "Academic Buildings" {
    "Galvin Libray": {
      "address": "35 W 33rd St, Chicago, IL",
      "location":"https://www.google.com/maps/place/Paul+V.+Galvin+Library/@41.833676,-87.628307,15z/data=!4m5!3m4!1s0x0:0xd02a6e76ebf8681b!8m2!3d41.833676!4d-87.628307"
    },
    {
      "S.R.Crown Hall": {
        "address": "3360 S State St, Chicago, IL",
        "location":"https://www.google.com/maps/place/S.+R.+Crown+Hall/@41.8343335,-87.6275423,17z/data=!3m1!5s0x880e2c0d0aad0f2f:0x18bd61b0ced378cc!4m12!1m6!3m5!1s0x0:0x91cbe4661afb6f1a!2sIllinois+Institute+of+Technology!8m2!3d41.8348731!4d-87.6270059!3m4!1s0x0:0x70210951aac6ba0f!8m2!3d41.8331937!4d-87.627275"
      },
      "Alumni Memorial": {
        "address": "3201 S Dearborn",
        "location": ""
      },
      "John T. Rettaliata Engineering Center": {
        "address": "10 W 32nd",
        "location": ""
      },
      "Robert A. Pritzker Science Center": {
        "address": "3105 S Dearborn",
        "location": ""
      },
      "Perlstein Hall":{
        "address": "10 W 33rd",
        "location": ""
      },
      "Siegal Hall":{
        "address": "3301 S Dearborn",
        "location": ""
      },
      "Stuart Builidng": {
        "address": "10 W 31st",
        "location": ""
      },
      "Wishnick Hall": {
        "address": "3255 S Dearborn",
        "location": ""
      }
  },
  "Athletic Building" {
    "Keating Hall": {
      "address": "3040 S Wabash",
      "location": ""
    }
  }
]

/* $('#building-form').append('<img src="' + building['avatar_url'] +'" />');
building image?*/

$('#building-form').on('submit', function(e) {
  var buildingname = $('#buildingname').val();
  $('#results').append('<li><a href="https://www.google.com/maps/place/' +
  buildingname + '">' + budilingname + '</a></li>');
  e.preventDefault();
});
$('#buildingname').on('focus', function() {
    console.log('The buildingname element is found. No "e"');
  });
/* $('#google').on('click', function(event) {
  console.log('OMG they tired to go to Google!');
  event.preventDefault();
}); directing to google?*/
