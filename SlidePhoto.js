var prev=document.getElementById("prev");
var next=document.getElementById("next");
var img =document.getElementsByTagName("img")[0];
var imgArr=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg"];
var index=0;
var info=document.getElementById("info");
info.innerHTML="一共"+imgArr.length+"张图片，当前第"+(index+1)+"张" ;
prev.onclick=function(){
    index--;
    if (index<0){
        index=imgArr.length-1;
    }
   img.src=imgArr[index];
   info.innerHTML="一共"+imgArr.length+"张图片，当前第"+(index+1)+"张" ;
};
next.onclick=function(){
   index++;
   if(index>imgArr.length-1){
       index=0;
   }
    img.src=imgArr[index];
    info.innerHTML="一共"+imgArr.length+"张图片，当前第"+(index+1)+"张" ;
};

