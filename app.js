function getPin (){
 const mathPart = Math.round(Math.random()*10000);
 const mathString = mathPart+'';
  if(mathString.length == 4 ){
      return mathPart;
  }
  else {
     
      return getPin();
  }

}

function generatePin (){
    const mathPart = getPin();
    document.getElementById('display-pin').value = mathPart;
}

document.getElementById ('key-pad').addEventListener ('click',function(event){
    const buttonTag = event.target.innerText;
const inputPin = document.getElementById('typed-numbers');
if(  isNaN (buttonTag) ){
    if(buttonTag=='C'){
        inputPin.value = '';
    }
}
else{
    const inputValue = inputPin.value ;
const newTotal = inputValue + buttonTag;
inputPin.value = newTotal;
}
})
function verifyPin(){
  const displayPin =  document.getElementById('display-pin').value
  const typedNumbers =  document.getElementById('typed-numbers').value;
  const notifySuccess  =  document.getElementById('notify-success');
  const notifyFail  =  document.getElementById('notify-fail');

  if(displayPin==typedNumbers){
     notifySuccess.style.display = 'block'; 
     notifyFail .style.display = 'none'; 

  }
  else{
   notifyFail .style.display = 'block'; 
   notifySuccess.style.display = 'none'; 

  }




}

