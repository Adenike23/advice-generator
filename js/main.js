const identity = document.querySelector('.identity');
const advice = document.querySelector('.advice');
const button = document.querySelector('button')
async function getAdvice() {
    
    const response = await fetch('https://api.adviceslip.com/advice', {
        method: 'GET'
    })
   console.log(response);
    const data = await response.json();
    identity.textContent = data.slip.id;
    advice.textContent = data.slip.advice;
}

// function getAdvice(){
//     fetch('https://api.adviceslip.com/advice')
//     .then(response => response.json())
//     .then(data => {
//         if(response.o)
//     })
//     .catch(err => console.log(err))
// }
// getAdvice()

button.addEventListener('click', () => getAdvice())