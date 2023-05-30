let string="";
let prev_ans="";
let buttons=document.querySelectorAll('.button');
let audio_element = new Audio("sins-city.mp3")

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target);
         if(e.target.innerHTML== '1' || e.target.innerHTML== '2' || e.target.innerHTML== '3' || e.target.innerHTML== '4' ||
          e.target.innerHTML== '5' || e.target.innerHTML== '6' || e.target.innerHTML== '7' || e.target.innerHTML== '8' || 
          e.target.innerHTML== '9' || e.target.innerHTML== '0' || e.target.innerHTML== '+' || e.target.innerHTML== '-' ||
           e.target.innerHTML== '*' || e.target.innerHTML== '/' || e.target.innerHTML== '.'){
            string= string+e.target.innerHTML;
            document.getElementById('text-bar').value=string;
         }else if(e.target.innerHTML== '='){
            string=eval(string);
            document.getElementById('text-bar').value=string;
         }else if(e.target.innerHTML=='Clr'){
            string='';
            document.getElementById('text-bar').value=string;
         }else if(e.target.innerHTML=='rt'){
        
         string=Math.sqrt(string);
         string=string+""
         document.getElementById('text-bar').value=string;
         }else if(e.target.innerHTML== 'song'){
            if(audio_element.paused || audio_element.duration==0){
                audio_element.currentTime=0.5;
                audio_element.play();
                string="|||.......Blinding Lights.......|||"
                document.getElementById('text-bar').value=string;
            }else if(audio_element.play()){
                
                audio_element.pause();
                string=""
                document.getElementById('text-bar').value=string;
            }
         }else if(e.target.innerHTML=='+/-'){
            
            string=string*(-1);
            string=string+""
            document.getElementById('text-bar').value=string;
         }
        
    })
})