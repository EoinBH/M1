const n1 = parseFloat(prompt("Une note svp ?"));
const n2 = parseFloat(prompt("Une autre svp ?"));
const moy = (n1 + n2) / 2;


function nbAlea(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

function question(n1, n2) {
    const t1 = Date.now();
    const rep = parseInt(prompt(n1 + "x" + n2 + " = ?"));
    const t2 = Date.now();
    
    
    
    return [rep == n1 * n2, t2 -t1];
}

const min = 1;
const max = 11;
var num1 = nbAlea(min, max);
var num2 = nbAlea(min, max);
question(num1, num2);
//console.log(question(4, 5));