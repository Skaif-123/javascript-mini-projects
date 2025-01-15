// generate random color

const randomColor=function (){
  const hex="0123456789ABCDEF";
  let color="#";

  for(let i=0;i<6;i++){
    color+= hex[Math.floor(Math.random()*16)]
  }
  return color
};
let IntervalID;
const startChangingColor=()=>{
  function changeBgColor() {
    document.querySelector('body').style.backgroundColor=randomColor();
  }
  if(!IntervalID){
    IntervalID=setInterval(changeBgColor,1000);
  }
}

const stopChangingColor=()=> {
  console.log("I am active heloo....")
  clearInterval(IntervalID);
  IntervalID=null;
}

document.querySelector("#start").addEventListener('click',startChangingColor);
document.querySelector("#stop").addEventListener('click',stopChangingColor);





