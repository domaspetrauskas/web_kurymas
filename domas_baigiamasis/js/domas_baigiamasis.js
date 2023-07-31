




var options = [

    'THIS',
    'SITE',
    'IS',
    'AMAZING',
    '<3',
  
  ]
  
  function vienas() {
  
    document.getElementById('vidurys').innerHTML = '' // remove prev text  
    document.getElementById('vidurys').innerHTML = options[0]; // add text
    
    resetFont()
    document.getElementById('btn0').style.fontWeight ='700'; // set text BOLD
  }
  
  function du() {
  
    document.getElementById('vidurys').innerHTML = '' // remove prev text
    document.getElementById('vidurys').innerHTML = options[1]; // add text
    
    resetFont()
    document.getElementById('btn1').style.fontWeight ='700'; // set text BOLD
  }
  
  function trys() {
  
    document.getElementById('vidurys').innerHTML = '' // remove prev text
    document.getElementById('vidurys').innerHTML = options[2]; // add text
  
    resetFont()
    document.getElementById('btn2').style.fontWeight ='700'; // set text BOLD
  }
  
  function keturi() {
  
    document.getElementById('vidurys').innerHTML = '' // remove prev text
    document.getElementById('vidurys').innerHTML = options[3]; // add text
  
    resetFont()
    document.getElementById('btn3').style.fontWeight ='700'; // set text BOLD
  }
  
  function penki() {
  
    document.getElementById('vidurys').innerHTML = '' // remove prev text
    document.getElementById('vidurys').innerHTML = options[4]; // add text
  
    resetFont()
    document.getElementById('btn4').style.fontWeight ='700'; // set text BOLD
  }
  
  function resetFont(){                              // reset'inu nuo visu bold
  
    document.getElementById('btn0').style.fontWeight ='400'; // set text Normal (default)
    document.getElementById('btn1').style.fontWeight ='400';
    document.getElementById('btn2').style.fontWeight ='400';
    document.getElementById('btn3').style.fontWeight ='400';
    document.getElementById('btn4').style.fontWeight ='400';
  
  
  
  }