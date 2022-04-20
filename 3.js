function myFunction() {
 var x =  document.getElementById("myText1").value;
 var y =  document.getElementById("myText2").value;
 var x =  Number(x)
 var y =  Number(y)
 var z = x + y;
 var greeting;
 if ( isNaN(z) ){
   greeting = "Please enter a number";
 } else {
    greeting = z ;
 }
  document.getElementById("demo").innerHTML = greeting;
}
