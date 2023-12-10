//functions <<<<

function empty_ids(){
   //alert(idmatrix);


   for(var i = 0;i<9;i++){
      
      var sum = i+1;
      let idn = "#p"+sum;
      if(idmatrix.length<1){
         $(idn).text("");

      }else{

         var tester = 0;
         for(var j = 0;j<idmatrix.length;j++)
         {
            if(idn===idmatrix[j]){
               tester = 1;
            }
         }
         
         if(tester===0){
            $(idn).text("");
         }


      
      }
      
   

   }



}

function choose_XO(){

   if(counter==1){
      var css = '.grid-item:hover:before{ content: "X" }';
      seira = "X";

   }else{
      var css = '.grid-item:hover:before{ content: "O" }';
      seira = "O";


   }

   var style = document.createElement('style');

   if (style.styleSheet) {
    style.styleSheet.cssText = css;
   } else {
    style.appendChild(document.createTextNode(css));
   }  

   document.getElementsByTagName('head')[0].appendChild(style);
   return seira;

}

function check_action(pointeever){

   for(var i = 0;i<idmatrix.length;i++){

      if(idmatrix[i]===pointeever){
         return false;
      }
   }

   return true;
}


function get_Winner(kolor){
      
   var finalid = [$("#p1").text(),$("#p2").text(),$("#p3").text(),$("#p4").text(),$("#p5").text(),$("#p6").text(),$("#p7").text(),$("#p8").text(),$("#p9").text()];

         var wiiner = "";
         if(kolor==="O"){
            wiiner = "X";
         }else{
            wiiner = "O";
         }

         if(finalid[0]===finalid[1]&&finalid[1]===finalid[2]&&finalid[0]!==(""))
         {
 
            alert("The winner is "+ wiiner);
            location.reload();
 
            
 
         }else if(finalid[3]===(finalid[4])&&finalid[4]===(finalid[5])&&finalid[3]!==(""))
         {
            
            alert("The winner is "+ wiiner);
            location.reload();


 
         }else if(finalid[6]===(finalid[7])&&finalid[7]===(finalid[8])&&finalid[6]!==(""))
         {
            alert("The winner is "+ wiiner);
            location.reload();

 
         }else if(finalid[0]===(finalid[3])&&finalid[3]===(finalid[6])&&finalid[0]!==(""))
         {
          
            alert("The winner is "+ wiiner);
            location.reload();


 
         }else if(finalid[1]===(finalid[4])&&finalid[4]===(finalid[7])&&finalid[1]!==(""))
         {
            alert("The winner is "+ wiiner);
            location.reload();

 
         }else if(finalid[2]===(finalid[5])&&finalid[5]===(finalid[8])&&finalid[2]!==(""))
         {
             
            alert("The winner is "+ wiiner);
            location.reload();


 
         }else if(finalid[0]===(finalid[4])&&finalid[4]===(finalid[8])&&finalid[0]!==(""))
         {
            alert("The winner is "+ wiiner);
            location.reload();

 
 
         }else if(finalid[2]===(finalid[4])&&finalid[4]===(finalid[6])&&finalid[2]!==(""))
         {
            alert("The winner is "+ wiiner);
            location.reload();

 
         }
 
  


  




}

function ok_button(){
   if(did_you_chose === 0){
      if(counter==1){
         counter=0;
      }else{
         counter=1;
      }
      var kolor  = choose_XO();
      $(id_take).css("pointer-events","none"); // NAIc
      idmatrix.push(id_take);
      $("p").text(seira);
   
      //var nn = $(id_take).text();// δουλέυει.   
      get_Winner(kolor);
      did_you_chose = 1;


   }else{


      alert("Πρέπει να κάνεις κίνηση!")
   }


}


//variables <<<

var counter = 1;
var seira = "";
var pointereven = "";
var idmatrix = [];
var sum1 = 0;
var id_take = "";
var did_you_chose = 1;



//main code <<<

choose_XO();

$( ".button-35" ).on( "click",function() {
   var name = $(this).css('background'); //παμε στο css και παίρνουμε αυτό που θέλουμε
   if(name.match(/moon-fill/)){

      name = name.replace("moon-fill","brightness-alt-high-fill")
      $(".button-35").css("background",name);
      $("body").css("background","#1f3325");  
      $("p").css("color","white");
      $("p").css("border","2px solid white");    
    


      $("header").css("background","white");



   }else if(name.match(/brightness-alt-high-fill/)){

      name = name.replace("brightness-alt-high-fill","moon-fill")
      $(".button-35").css("background",name);
      $("body").css("background","white");
      $("p").css("color","black");    
      $("p").css("border","2px solid black");    



   }
   
 } );




$( ".grid-item" ).on( "click",function() {

   empty_ids();
   if(sum1>0){
      pointereven = id_take;
   }
   id_take = "#"+this.id; // παίρνουμε το id 

   if(check_action(pointereven)){
      $(pointereven).css("pointer-events","auto"); // NAI
   }
   $(id_take).text(seira);
   $(id_take).css("pointer-events","none"); // NAI

   sum1++;
   did_you_chose = 0;


} );




$( ".button-78" ).on( "click",function() {
  
   
   ok_button();
  
   
 });