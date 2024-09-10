/* 3.Ödev */
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', (e) => {
  let name = e.currentTarget.value.trim("");
  if(name){
      nameOutput.textContent = name;
  }
  else{
      nameOutput.textContent = "Anonymous";
  }
})