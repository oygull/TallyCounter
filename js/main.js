let elText = document.getElementById("text");
let elBtn = document.getElementById("btn");
let elNum = document.getElementById("num");
let count = 0;
let temp = true;
elNum.textContent=count;

elBtn.addEventListener("click", ()=>{
  if(temp==true){
    count++;
    elNum.textContent=count;
    if(count==0){
      elText.innerText="Subhanallah"
      elNum.textContent=count;
    }
    if(count==34){
      elText.innerText="Alhamdulillah"
      elNum.textContent=count;
    }
    else if(count==67){
      elText.innerText="Allahu Akbar"
      elNum.textContent=count;
    }
    else if(count==100){
      temp==false;
      
    }
  }
  else if(temp==false){
    count==0;
    temp==true;
  }

})