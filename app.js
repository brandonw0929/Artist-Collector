var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

var artist = {
    mariah:
    { name: "Mariah",
      value: 0
    },
    ariana:
    {name: "Ariana",
     value: 0
    },
    cardi:
    { name: "Cardi",
      value: 0
    },
    nicki:
    { name: "Nicki",
      value: 0
    }
  };
  
  var startGame = function() {
    currentScore = 0;
    targetScore = getRandom(19, 120);

    artist.mariah.value = getRandom(1, 12);
    artist.ariana.value = getRandom(1, 12);
    artist.cardi.value = getRandom(1, 12);
    artist.nicki.value = getRandom(1, 12);
  
    $("#your-score").text(currentScore);
    $("#target-score").text(targetScore);
  };

  startGame();

  function win(){
    alert("You're a WINNER!");
    winCount++;
    $('#win-count').text(winCount);
    startGame()
  }
  function lose(){
    alert("You SUCK!");
    lossCount++;
    $('#loss-count').text(lossCount);
    startGame()
  }
  $('#mariah').on ('click', function(){
    currentScore = currentScore + artist.mariah.value;
    console.log("Total = " + currentScore);
    $('#your-score').text(currentScore); 
      if(currentScore == targetScore){
        win()
      } else if (currentScore>targetScore){
        lose();
      }
  })  

  $('#ariana').on ('click', function(){
    currentScore = currentScore + artist.ariana.value;
    console.log("Total = " + currentScore);
    $('#your-score').text(currentScore); 
      if(currentScore == targetScore){
        win()
      } else if (currentScore>targetScore){
        lose();
      }
  })  

  $('#cardi').on ('click', function(){
    currentScore = currentScore + artist.cardi.value;
    console.log("Total = " + currentScore);
    $('#your-score').text(currentScore); 
      if(currentScore == targetScore){
        win()
      } else if (currentScore>targetScore){
        lose();
      }  
  })  

  $('#nicki').on ('click', function(){
    currentScore = currentScore + artist.nicki.value;
    console.log("Total = " + currentScore);
    $('#your-score').text(currentScore);  
      if(currentScore == targetScore){
        win()
      } else if (currentScore>targetScore){
        lose();
      }
  })  
  
  var addValues = function(selectedArtist) {
    currentScore += selectedArtist.value;
    $("#your-score").text(currentScore);
    checkWin();
    console.log("Your Score: " + currentScore);
  };
  
