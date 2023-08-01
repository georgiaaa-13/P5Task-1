"use strict";

function setup(){
    createCanvas(600,600);
}

let size = 100;
let px = 300;
let py = 200;
function draw(){
    background(120,120,120);
    
    //girl hair
    fill(0, 0, 0, 200);
    rect(px-size/2,py-size/2,size,size+50,10);

    fill('#D7BE9E');

    //head 
    ellipse(px,py,size,size);

    //body
    rect(px-size/2,py+size/2,size,size+size/2);

    //legs
    rect(px-size/2,py+2*size,40,size+20);
    rect(px+10,py+2*size,40,size+20);

    //arms
    rect(px-80,py+size/2,30,100);
    rect(px+50,py+size/2,30,100);

    //hair
    fill('black');
    arc(px,py,size,size,PI,0);

}