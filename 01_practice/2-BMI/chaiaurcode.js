const form=document.querySelector('form');


form.addEventListener('submit',function(e){
  e.preventDefault();

  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');
  results.style
  const bmi=(weight/((height*height)/10000)).toFixed(2);
  

  // setting conditions
  if(height<0||height===''||isNaN(height)){
    results.innerHTML=`<p>Please enter some valid value your height is ${height}</p>` 
  }
  else if(weight<0||weight===''||isNaN(weight)){
    results.innerHTML=`<p>Please enter some valid value your height is ${weight}</p>` 
  }
  else{
    results.innerHTML=`<p>your BMI is ${bmi}</p>`;
  }


  
//setting condition for BMI
if(bmi<18.5){
  results.innerHTML+=`<p>you are underweight</p>`;
}
else if(bmi>25){
  results.innerHTML+='<p>you are overweight</p>';
}
else{
  results.innerHTML+='<p>you are normal</p>';
}




});
