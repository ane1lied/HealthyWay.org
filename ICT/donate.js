

const passwordInput = document.getElementById('passwordInput');
const checkButton = document.getElementById('checkButton');
const hintText = document.getElementById('hintText');
const iNumber = 1234567; 

function checkNumber(event) {
  event.preventDefault(); 

  const userInput = passwordInput.value;

  if (userInput.length <= 6) {
    hintText.textContent = 'Please enter more than 6 characters.';
  } else {
    
    if (userInput === String(iNumber)) {
      
      hintText.textContent = 'The password is correct.';
    } else {
      hintText.textContent = 'The password is incorrect.';
    }
  }
}

checkButton.addEventListener('click', checkNumber);


document.getElementById('reset').addEventListener('click', function(event) {
  event.preventDefault();
  hintText.textContent = '';
  
});

