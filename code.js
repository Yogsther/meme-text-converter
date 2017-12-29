
function run(){
  input = document.getElementById("input").value; // Load input

  /* Do what has to be done. */
  if(document.getElementById("studlycaps").checked) input = studlycaps(input);
  if(document.getElementById("spacing").checked) input = spacing(input);

  /* Apply changes */
  document.getElementById("output").value = input;
}


function studlycaps(input){
  var pre = input.split("");

  for(var i = 0; i < pre.length; i++){
    if(i % 2 != 0){
      pre[i] = pre[i].toUpperCase();
    } else {
      pre[i] = pre[i].toLowerCase();
    }
  }

  return pre.join("");
}


function spacing(input){

  input = input.toUpperCase();
  input = input.split("");

  for(var i = 0; i < input.length-1; i++){
    if(input[i] == " " && input[i-1] != ""){
      input.splice(i, 1);
    }
  }

  for(var i = 0; i < (input.length-1); i++){
    if(input[i].indexOf(" ") == -1){
      input[i] += " ";
    }
  }


  return input.join("");
}
