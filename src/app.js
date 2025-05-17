import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
  //write your code here
//  console.log("Hello Rigo from the console!");
window.onload = function() {

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function generarExcusa(){
    const who1 = who[Math.floor(Math.random() * who.length)];
    const action1 = action[Math.floor(Math.random() * action.length)];
    const what1 = what [Math.floor(Math.random() * what.length)];
    const when1 = when [Math.floor(Math.random() * when.length)];

    return `${who1} ${action1} ${what1} ${when1}.`;
  }
  document.getElementById("excuse").innerHTML = generarExcusa();


};
