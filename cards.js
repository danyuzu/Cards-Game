

const cards= document.querySelectorAll(".card");
const puntaje= document.querySelector(".score");
const intentos=document.querySelector(".attemps");
let conta= 0;
// const imgL= document.querySelector(".imglambo");
// const imgB= document.querySelector(".imgbuga");
// const imgN= document.querySelector(".imgnissan");
// const imgL2= document.querySelector(".imglambo2");
// const imgB2= document.querySelector(".imgbuga2");
// const imgN2= document.querySelector(".imgnissan2");
// const images=document.querySelectorAll(".img");


const lc2= document.querySelector(".lambocard");
const lc= document.querySelector(".lambocard2");
const bc= document.querySelector(".bugacard");
const bc2= document.querySelector(".bugacard2");
const nc= document.querySelector(".nissancard");
const nc2= document.querySelector(".nissancard2");

const array= [lc2,lc,nc2, bc2,bc, nc];
//var arrayimages= [imgL, imgL2, imgB, imgB2, imgN, imgN2];


 
//lc.appendChild(imgL);



var ante="";
var punta=0;

cards.forEach( function(card)
{
 card.addEventListener("click",function(e){
const styles=e.currentTarget.classList;

// if(styles.contains("lambocard"))
// {
//    
 conta++;
    
    if(conta===1)
    {


       const morros= card.children;

       morros[0].style.display="block";
     //imgL.style.display= "block";
        

    
        //card.innerHTML=`<style>backface-visibility:visible;</style>`;
        //card.children.item().style.display= "block";


    console.log("fuck o0000ff we made it bro");
    ante=styles.value;

    }
//     else if(conta===2)
//     {
//         //imgL.style.display= "block";
//         if(ante==="lambocard2 card")
//         {
//             console.log("alright");
//         }
//     }
//      ante=styles.value;
    

// }
// else if(styles.contains("lambocard2"))
// {
//     

    
    // if(conta===1)
    // {
    //     //imgL2.style.display= "block";
    //     //card.innerHTML=`<style>backface-visibility:hidden;</style>`;
    //     card.style.display="inside";
    // console.log("fuck off");

    // }
    else if(conta===2)
    {//conta++;
        //imgL2.style.display= "block";
       // card.innerHTML=`<style>backface-visibility:visible;</style>`;
       const morros= card.children;

       morros[0].style.display="block";
                            

        array.forEach(goback);


        function goback(item)
        {
           var sta=item.classList;
            if(sta.value===ante)
            {
               
               
                setTimeout(voltear, 1000);
                
                function voltear()
                {
                    const itemmorros= item.children;
                    // if(sta.value===styles.value)
                    // {
                        if(card.id=== item.id)
                        {
                        console.log("holaa prrillos");
                        punta++;
                        puntaje.textContent=punta.toString();
                    }
                    else
                    {
                          //imgL.style.display="none";
                    // item.innerHTML=`<style>backface-visibility:hidden;</style>`;
                    // item.style.background= "red";
                    // card.style.background= "red";
                    // card.innerHTML=`<style>backface-visibility:hidden;</style>`;
                    // //card.style.backgroundimage.display="none";
                    //imgL2.style.display= "none";
                  
                    morros[0].style.display="none";
                   
                    itemmorros[0].style.display="none";
                    //itemmorros[1].style.display="none";
                    console.log("holaahijodelaverga");

                       
                    }
                   
                     conta=0;
                   
                }
            }
        }
        //ante=styles.value;

    }
        
        
        /*if(ante==="lambocard card")
        {
              console.log("alrighty");

              setTimeout(voltear, 2000);
             
            function voltear()
            {
                imgL2.style.display= "none";
                card.style.background= "black";
              
                lc.style.background= "black";
                imgL.style.display="none";
                punta++;
                puntaje.textContent=punta.toString();
                
                imgB2.style.display="none";
 }
        }*/

    // }
    
// }



 });
 

});



// images.forEach( function(img)
// {
// img.addEventListener("click", function(e)
// {

//     img.style.display= "block";
//     console.log("fuck off too");
   

// });
// });