const identity = document.querySelector('.identity');
const advice = document.querySelector('.advice');
const button = document.querySelector('button')
async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice', {
        method: 'GET'
       
    })
    console.log(response);
    const data = await response.json();
    console.log(data);
    identity.textContent = data.slip.id;
    advice.textContent = data.slip.advice;
}
getAdvice()

button.addEventListener('click', () => getAdvice())