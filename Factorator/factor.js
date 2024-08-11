document.getElementById('calculateButton').onclick = arrangeThings;

function arrangeThings() { 
   const numberInput = document.getElementById('numberInput').value;    
   const resultDiv = document.getElementById('result');    
   if (numberInput === '' || isNaN(numberInput)) {        
   resultDiv.innerHTML = 'Please enter a valid number.';        
   return;    
   }        
   const number = parseInt(numberInput);    
   const factors = calculateFactors(number);    
   // resultDiv.innerHTML = numberInput;
   resultDiv.innerHTML = `Factors of ${number}: ${factors.join(', ')}`;
   }; 
   
function calculateFactors(number) {
    const factors = [];    
    for (let i = 1; i <= number; i++) {        
	    if (number % i === 0) {            
	    factors.push(i);        
	    }    
    }    
    return factors; }