function shout(string){
  
  return string.toUpperCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function whisper(string){
  return string.toLowerCase();
}

function sayHiToGrandma(string){
  if(string.toUpperCase()===string)return 'YES INDEED!';
  if(string===string.toLowerCase())return "I can't hear you!";
  if(string==="I love you, Grandma.")return "I love you, too.";
  
}




