const buttons = document.querySelectorAll('.button');
let activeButton = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (activeButton) {
            activeButton.style.background = '';
        }

        button.style.background = 'hsl(25, 97%, 53%)';
        activeButton = button;
    });
});

const submitBtn = document.querySelector('.submit');
const modal = document.querySelector('.modal');
const windowOne = document.querySelector('.windowOne');

submitBtn.addEventListener('click', () => {
  windowOne.style.display = 'none'; 
  modal.style.display = 'flex'; 
  modal.style.flexDirection = 'column'; 
  modal.style.alignItems = 'center'; 
  modal.style.justifyContent = 'center'; 

  if (activeButton) {
    choice(activeButton.textContent);
}
}); 
const display = document.querySelector('.display')
function choice (selection) {
    return display.textContent = `You selected: ${selection}`
}