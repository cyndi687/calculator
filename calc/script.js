const display=document.getElementById("display");
const buttons=Array.from(document.getElementsByClassName("button"));
const equal=document.getElementById("equal")

buttons.map( button =>{

    button.addEventListener("click",(e)=>{
      switch (e.target.innerText){
          case "AC":
              display.innerText = "";
              break;
         case "C":
             if(display.innerText){
                display.innerText=display.innerText.slice(0,-1);
             }
             break;

             case "=":
               try{
                display.innerText =eval(display.innerText);
                  }catch{
                    display.innerText="Error!" 
                  }
                
          default:
              display.innerText +=e.target.innerText;
      } 
     })
 })
  
  

   //  console.log("clicked");
        //  console.log(e);
        //  consolelog(e.target);
        // console.log(e.target.innertext) 
       //