document.getElementById('calculateButton').onclick = arrange;

function arrange() { 
   const numberInput = document.getElementById('numberInput').value;    
   const resultDiv = document.getElementById('result');    
   if (numberInput === '' || isNaN(numberInput)) {        
	   resultDiv.innerHTML = 'Please enter a valid number.';        
	   return;    
   }        
   const number = parseInt(numberInput);    
   const factors = calculateFactors(number);    
   resultDiv.innerHTML = `Factors of ${number}: ${factors.join(', ')}`;
};
   
function calculateFactors(number) {
    const factors = [];    
    for (let i = 1; i <= number; i++) {        
	    if (number % i === 0) {            
	    	factors.push(i);        
	    }    
    }    
    return factors; 
}