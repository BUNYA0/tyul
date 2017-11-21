window.onload = function(){

  var currentMode = 'portrait';
  var output = document.getElementById('output');

  var milkcocoa = MilkCocoa.connectWithApiKey('teaja1vzayz.mlkcca.com', 'MEGDPFGCGBGJIJLL', 'hifjRNRjgIcZDcjQjhnnLmVjPJLOVBEJLaLRmBni    ');
  var ds = milkcocoa.dataStore('gravity');

  window.addEventListener('devicemotion', function(e){
    gravity = e.accelerationIncludingGravity;

    output.innerHTML
    = "x方向:" +gravity.x
    + "<br>y方向: "+gravity.y;

    sendModeFromGravityValue(gravity);

  },true);


  function sendModeFromGravityValue(g){

    var x = Math.sqrt(g.x * g.x);
    var y = Math.sqrt(g.y * g.y);
    
    if(currentMode === 'portrait' && x > 8.5 && y < 1.5){
      currentMode = 'landscape';
      ds.send({mode: currentMode});
    }

    if(currentMode === 'landscape' && x < 1.5 && y > 8.5){
      currentMode = 'portrait';
      ds.send({mode: currentMode});
    }
  }
};
