'use strict';

const $ = function (nml) { return document.getElementById(nml); };

/*
 * nmlCanvas0.js
 * function drawing a polygon
 */
const threeShapes = function () {
    let canvas1 = $('myCanvas1');
    if (canvas1.getContext) {
        var ctx = canvas1.getContext('2d');
        ctx.fillStyle = '#ddd';
        ctx.fillRect(0, 0, canvas1.width, canvas1.height);

        ctx.fillStyle = "#C60C30";         // fill color to C60C30
        ctx.fillRect(20, 10, 185, 140);  // fill rectangle

        ctx.fillStyle = 'white';
        ctx.fillRect(80, 10, 20, 140);

        ctx.fillStyle = 'white';
        ctx.fillRect(20, 70, 185, 20);
    }

    let canvas2 = $('myCanvas2');
    if (canvas2.getContext) {
        var ctx = canvas2.getContext('2d');
        ctx.fillStyle = '#ddd';
        ctx.fillRect(0, 0, canvas2.width, canvas2.height);

        ctx.fillStyle = "white";         // fill color to C60C30
        ctx.fillRect(20, 10, 180, 60);  // fill rectangle

        ctx.fillStyle = '#d00c33';
        ctx.fillRect(20, 70, 180, 60);

        ctx.beginPath();                // begin new path
        ctx.arc(90, 70, 40, 0, Math.PI, true);
        ctx.fillStyle = '#d00c33';         // set fill color
        ctx.fill();                     // fill the path
      
        ctx.beginPath();                // begin new path
        ctx.arc(90, 70, 40,Math.PI, 0, true);
        ctx.fillStyle = 'white';         // set fill color
        ctx.fill();                     // fill the path
    }

    let canvas3 = $('myCanvas3');
    if (canvas3.getContext) {
        var ctx = canvas3.getContext('2d');
        ctx.fillStyle = '#ddd';
        ctx.fillRect(0, 0, canvas3.width, canvas3.height);

        ctx.fillStyle = "white";         // fill color to C60C30
        ctx.fillRect(20, 10, 196, 140);  // fill rectangle

    

        ctx.beginPath();                // begin new path
        ctx.arc(60, 70, 25, 0, Math.PI * 2, true);
        ctx.strokeStyle = 'blue';        
        ctx.lineWidth = 3;
        ctx.stroke();
                        

        ctx.beginPath();                // begin new path
        ctx.arc(118, 70, 25, 0, Math.PI * 2, true);
        ctx.strokeStyle = 'black';        
        ctx.lineWidth = 3;
        ctx.stroke(); 

        ctx.beginPath();                // begin new path
        ctx.arc(176, 70, 25, 0, Math.PI * 2, true);
        ctx.strokeStyle = 'red';        
        ctx.lineWidth = 3;
        ctx.stroke(); 

       ctx.beginPath();                // begin new path
        ctx.arc(89, 95, 25, 0, Math.PI * 2, true);
        ctx.strokeStyle = 'yellow';        
        ctx.lineWidth = 3;
        ctx.stroke(); 


        ctx.beginPath();                // begin new path
        ctx.arc(148, 95, 25, 0, Math.PI * 2, true);
        ctx.strokeStyle = 'green';        
        ctx.lineWidth = 3;
        ctx.stroke(); 

         ctx.beginPath();                // begin new path
        ctx.arc(60, 70, 25, -Math.PI/3, Math.PI/3, false);
        ctx.strokeStyle = 'blue';        
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.beginPath();                // begin new path
        ctx.arc(89, 95, 25, -Math.PI/6, -Math.PI*4/9, true);
        ctx.strokeStyle = 'yellow';        
        ctx.lineWidth = 3;
        ctx.stroke(); 

        ctx.beginPath();                // begin new path
        ctx.arc(118, 70, 25, Math.PI*5/6, Math.PI/2 , true);
        ctx.strokeStyle = 'black';        
        ctx.lineWidth = 3;
        ctx.stroke(); 
        ctx.beginPath();                // begin new path
        ctx.arc(118, 70, 25, Math.PI/6, Math.PI*3/2 , true);
        ctx.strokeStyle = 'black';        
        ctx.lineWidth = 3;
        ctx.stroke();


        ctx.beginPath();                // begin new path
        ctx.arc(176, 70, 25,Math.PI*5/6 , Math.PI/2 , true);
        ctx.strokeStyle = 'red';        
        ctx.lineWidth = 3;
        ctx.stroke(); 


    }
}

window.addEventListener('load', threeShapes);
