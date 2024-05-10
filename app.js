<<<<<<< HEAD
const display=document.querySelector("#display");
const btns=document.querySelectorAll("button");

btns.forEach(btn => {
    btn.addEventListener("click", ()=>{
    
        if(btn.id === "="){
            display.value = eval(display.value);
        } else if (btn.id === "ac"){
            display.value = "";
        } else if (btn.id === "de"){
            display.value = display.value.slice(0, -1);
        } else if (btn.id === "lg"){
            display.value = Math.log10(display.value);
        } else if (btn.id === "sqroot"){
            display.value = Math.sqrt(display.value);
        } else if (btn.id === "sin"){
            display.value = Math.sin(display.value);
        } else if (btn.id === "cos"){
            display.value = Math.cos(display.value);
        } else if (btn.id === "tan"){
            display.value = Math.tan(display.value);
        } 
        else{
            display.value += btn.id;
        }
    });
    
});
 
=======
const display=document.querySelector("#display");
const btns=document.querySelectorAll("button");

btns.forEach(btn => {
    btn.addEventListener("click", ()=>{
    
        if(btn.id === "="){
            display.value = eval(display.value);
        } else if (btn.id === "ac"){
            display.value = "";
        } else if (btn.id === "de"){
            display.value = display.value.slice(0, -1);
        } else if (btn.id === "lg"){
            display.value = Math.log10(display.value);
        } else if (btn.id === "sqroot"){
            display.value = Math.sqrt(display.value);
        } else if (btn.id === "sin"){
            display.value = Math.sin(display.value);
        } else if (btn.id === "cos"){
            display.value = Math.cos(display.value);
        } else if (btn.id === "tan"){
            display.value = Math.tan(display.value);
        } 
        else{
            display.value += btn.id;
        }
    });
    
});
 
>>>>>>> 9137dbb7304fbade0545be9971568f598f500379
