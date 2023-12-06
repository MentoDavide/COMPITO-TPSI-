document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    
  
    let currentInput = ''; // l'input dell'utente viene memorizzato 
    let result = ''; // variabile per gestire il risultato
  
    // Funzione per aggiornare il display
    function Agg_Display() {
        display.textContent = currentInput || result; // Mostra il numero corrente o il risultato
        
    }
    alert("SE RISCORNTRI PROBLEMI SCRIVIMI IN DM ");//creo un popup che avvisa l'utente 
  
            // Funzione per calcolare la radice quadrata
            function CalcolaRadice() {
            const inputValue = parseFloat(currentInput);
            if (!isNaN(inputValue) && inputValue >= 0) {
                result = Math.sqrt(inputValue).toString();
                currentInput = ''; // Resetta l'input corrente dopo aver ottenuto il risultato
                Agg_Display();
            } 
            }
    
    // Funzione per gestire i clic sui pulsanti
    function ButtonClick(value) {
        if (value === '=') {
            result = eval(currentInput).toString();//viene utilizzato per eseguire il calcolo basato sull'input
            currentInput = ''; // Resetta l'input corrente dopo aver ottenuto il risultato
        } else if (value === 'CE') {
            currentInput = currentInput.slice(0, -1);//rimuovere l'ultimo carattere dall'input 
        } else if (value === 'C') {
            currentInput = '';
            result = ''; // Resetta anche il risultato quando si cancella tutto
        } else if (value === '√') {
            CalcolaRadice(); // Chiamata alla funzione per calcolare la radice quadrata
        } else {
            currentInput += value;
        }
  
        Agg_Display();
    }
  
    // Event listener per i clic sui pulsanti
    document.querySelectorAll('.button, .call').forEach(button => {
        button.addEventListener('click', function () {
            ButtonClick(this.textContent);
        });
    });
  });
  