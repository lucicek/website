let calculation = '';

document.querySelectorAll('.js-calculator-button').forEach((button)=>{
  button.addEventListener('click', ()=>{
    addOperationOrNumber(button.innerHTML);
  })
});

document.querySelector('.js-calculator-equals-button').addEventListener('click', ()=>{
  try{
    calculation = eval(calculation);
    document.querySelector('.js-counting-result').innerHTML = calculation;
  }catch(err){
    calculation = '';
    document.querySelector('.js-counting-result').innerHTML = calculation;
    alert('Udělal jsi neplatnou matematickou operaci!')
  }
});

document.querySelector('.js-calculator-clear-button').addEventListener('click', ()=>{
  calculation = '';
  document.querySelector('.js-counting-result').innerHTML = calculation;
})

function addOperationOrNumber(operationOrNumber){
  calculation += operationOrNumber
  document.querySelector('.js-counting-result').innerHTML = calculation;
};