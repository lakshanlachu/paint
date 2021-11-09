 mouseEvent=""
canvas=document.getElementById('my_canvas')
ctx=canvas.getContext("2d")

color="red";
width_line=2;

canvas.addEventListener("mousedown", my_mousedown);


function my_mousedown(e){
    color=document.getElementById("Color").value;

    width_line=document.getElementById("Width").value;

    radius=document.getElementById("Radius").value;

    mouseEvent="mouseDown";
}



canvas.addEventListener("mousemove",my_mousemove);
 
function my_mousemove(e){
    mouse_x= e.clientX-canvas.offsetLeft;
    mouse_y= e.clientY-canvas.offsetTop;

  if(mouseEvent=="mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth= width_line;
      ctx.arc(mouse_x,mouse_y,radius,0,2*Math.PI);
      ctx.stroke();

  }
}

canvas.addEventListener("mouseup",my_mouseup);
 
function my_mouseup(e){
    mouseEvent="mouseUP";
}


canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseLeave";
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

