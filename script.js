let square1 = document.querySelector(".i0");
let square2 = document.querySelector(".i1");
let square3 = document.querySelector(".i2");
let square4 = document.querySelector(".i3");
let square5 = document.querySelector(".i4");
let square6 = document.querySelector(".i5");
let square7 = document.querySelector(".i6");
let square8 = document.querySelector(".i7");
let square9 = document.querySelector(".i8");
let container = document.querySelector(".container");
let title = document.querySelector(".title");
let restart = document.querySelector(".restart")
let body =document.querySelector("body");
let user_turn = 1;
let won = 0;







function play(element){
    if(user_turn % 2 !== 0 && won===0&&element.textContent ==='?')
    {
        element.textContent = "X";
        title.textContent ="O turn"
        
    
    }
    else if(user_turn % 2 === 0 && won===0&&element.textContent ==='?')
    {
        element.textContent = "O";
        title.textContent ="X turn"
    }
    ++user_turn;
    rules();
   
}
function rules()
{
 if(square1.textContent=== square2.textContent&& square3.textContent===square2.textContent&& square1.textContent!==" " && square1.textContent==="X")
 {
    title.textContent ="X Won"
    title.style.backgroundColor = "green";
    body.style.backgroundColor = "#7fc172";
    
   won=1;
 }
 else if(square1.textContent=== square2.textContent&& square3.textContent===square2.textContent&& square1.textContent!==" " && square1.textContent==="O")
 {
    title.textContent ="O Won"
    title.style.backgroundColor = "green";
    body.style.backgroundColor = "#7fc172";
    won=1;
    
 }
 if(square4.textContent=== square5.textContent&& square6.textContent===square5.textContent&& square4.textContent!==" " && square4.textContent==="X")
 {
    title.textContent ="X Won"
    title.style.backgroundColor = "green";
    body.style.backgroundColor = "#7fc172";
    won=1;
   
 }
 else if(square4.textContent=== square5.textContent&& square6.textContent===square5.textContent&& square4.textContent!==" " && square4.textContent==="O")
 {
    title.textContent ="O Won"
    title.style.backgroundColor = "green";
    body.style.backgroundColor = "#7fc172";
    won=1;
    
 }

 if(square7.textContent=== square8.textContent&& square8.textContent===square9.textContent&& square7.textContent!==" " && square7.textContent==="X")
 {
    title.textContent ="X Won"
    title.style.backgroundColor = "green";
    body.style.backgroundColor = "#7fc172";
    won=1;
   
 }
 else if(square7.textContent=== square8.textContent&& square8.textContent===square9.textContent&& square7.textContent!==" " && square7.textContent==="O")
 {
    title.textContent ="O Won"
    title.style.backgroundColor = "green";
    body.style.backgroundColor = "#7fc172";
    won=1;
    
 }
  /*============================================= */
  /*============================================= */
  /*============================================= */
  /*============================================= */
  /*============================================= */
  if(square1.textContent=== square4.textContent&& square4.textContent===square7.textContent&& square7.textContent!==" " && square7.textContent==="X")
  {
     title.textContent ="X Won"
     title.style.backgroundColor = "green";
     body.style.backgroundColor = "#7fc172";
     won=1;
    
  }
  else if(square1.textContent=== square4.textContent&& square4.textContent===square7.textContent&& square7.textContent!==" " && square1.textContent==="O")
  {
     title.textContent ="O Won"
     title.style.backgroundColor = "green";
     body.style.backgroundColor = "#7fc172";
     won=1;
     
     
  }
  if(square2.textContent=== square5.textContent&& square8.textContent===square5.textContent&& square2.textContent!==" " && square5.textContent==="X")
  {
     title.textContent ="X Won"
     title.style.backgroundColor = "green";
     body.style.backgroundColor = "#7fc172";
     won=1;
    
  }
  else if(square2.textContent=== square5.textContent&& square8.textContent===square5.textContent&& square2.textContent!==" " && square5.textContent==="O")
  {
     title.textContent ="O Won"
     title.style.backgroundColor = "green";
     body.style.backgroundColor = "#7fc172";
     won=1;
     
  }
 
  if(square3.textContent=== square6.textContent&& square6.textContent===square9.textContent&& square6.textContent!==" " && square3.textContent==="X")
  {
     title.textContent ="X Won"
     title.style.backgroundColor = "green";
     body.style.backgroundColor = "#7fc172n";
     won=1;
    
  }
  else if(square3.textContent=== square6.textContent&& square6.textContent===square9.textContent&& square6.textContent!==" " && square3.textContent==="O")
  {
     title.textContent ="O Won"
     title.style.backgroundColor = "green";
     body.style.backgroundColor = "#7fc172";
     won=1;
     
  }

  /*============================================= */
  /*============================================= */
  /*============================================= */
  /*============================================= */
  /*============================================= */


  if(square1.textContent=== square5.textContent&& square9.textContent===square5.textContent&& square9.textContent!==" " && square5.textContent==="X")
  {
     title.textContent ="X Won"
     title.style.backgroundColor = "green";
     body.style.backgroundColor = "#7fc172";
     won=1;
    
  }
  else if(square1.textContent=== square5.textContent&& square9.textContent===square5.textContent&& square9.textContent!==" " && square5.textContent==="O")
  {
     title.textContent ="O Won"
     title.style.backgroundColor = "green";
     body.style.backgroundColor = "#7fc172";
     won=1;
     
  }
 
  if(square3.textContent=== square5.textContent&& square5.textContent===square7.textContent&& square5.textContent!==" " && square7.textContent==="X")
  {
     title.textContent ="X Won"
     title.style.backgroundColor = "green";
     body.style.backgroundColor = "#7fc172";
     won=1;
    
  }
  else if(square3.textContent=== square5.textContent&& square5.textContent===square7.textContent&& square5.textContent!==" " && square7.textContent==="O")
  {
     title.textContent ="O Won"
     title.style.backgroundColor = "green";
     body.style.backgroundColor = "#7fc172";
     won=1;
     
  }



}



square1.addEventListener("click",function(){ play(square1)});




square2.addEventListener("click",function(){ play(square2)});



square3.addEventListener("click",function(){play(square3)});




square4.addEventListener("click",function(){ play(square4)});



square5.addEventListener("click",function(){ play(square5)});


square6.addEventListener("click",function(){ play(square6)});



square7.addEventListener("click",function(){ play(square7)});



square8.addEventListener("click",function(){ play(square8)});



square9.addEventListener("click",function(){ play(square9)});








