/*4.Ödev*/
const loginInfo = {}
const loginForm = document.querySelector('.login-form');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  if(!email.value.trim() || !password.value.trim() ){
      alert('All form fields must be filled in')
  }
  else{
      const formData = new FormData(e.currentTarget);
      formData.forEach((value, key) => {
         loginInfo[key] = value.trim();
      });
      console.log( loginInfo );
      e.currentTarget.reset();
  }
})