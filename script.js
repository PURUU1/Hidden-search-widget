var icon = document.getElementById('icon');
var inp = document.getElementById('inp')
var isToggle = false;

icon.addEventListener('click',()=>{
  console.log('icon clicked')
  if(isToggle == false){
  inp.style.display = 'block'
  isToggle = true;
  }
  else{
    inp.style.display = 'none'
    isToggle = false
  }
})