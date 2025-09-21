/*
Exemple des prompts :
    const n1 = parseFloat(prompt("Une note svp ?"));
    const n2 = parseFloat(prompt("Une autre svp ?"));
    const moy = (n1 + n2) / 2;
*/

function nbAlea(min, max) {
    return Math.floor(Math.random() * ((max+1)-min)) + min;
}

function question(n1, n2) {
    const t1 = Date.now();
    const rep = parseInt(prompt(n1 + "x" + n2 + " = ?"));
    const t2 = Date.now();
    return [rep == n1 * n2, t2 - t1];
}

const min = 1;
//const max = 10;
//const max2 = 12;
const numQs = 10;

function quiz(max, quiz) {
    var numCorrect = 0;
    var totalTime = 0;
    var results = [0, 0];
    var num1 = 0;
    if (quiz == 2) {
        num1 = parseInt(prompt("Vous voulez vous entraîner sur "
        + "quelle table ?"));
    }
    for (var i = 0; i < numQs; i++) {
        if (quiz == 1) {
            num1 = nbAlea(min, max);
        }
        var num2 = nbAlea(min, max);
        results = question(num1, num2);
        totalTime += results[1];
        if (results[0]) {
            numCorrect++;
        }
    }
    prompt(numCorrect + " bonnes réponses sur " + numQs + " !\n"
        + "Temps écoulé = " + totalTime/1000 + " secondes."
    );
}

function quiz1() {
    quiz(10, 1);    
}

function quiz2() {
    quiz(12, 2);
}

function quiz3() {
    var max = 12;
    var numCorrect = 0;
    var totalTime = 0;
    var results = [0, 0];
    var num1 = parseInt(prompt("Vous voulez vous entraîner sur "
        + "quelle table ?"));
    const possibleNums = [];
    for (var i = 0; i <= max; i++) {
        possibleNums.push(i);
    }
    const repeats = [];
    var repeating = false;
    var j = 0;
    for (var i = 0; i < numQs; i++) {
        if (!repeating) {
            randomIndex = nbAlea(min, max)
            var num2 = possibleNums[randomIndex];
            //remove number from array
            possibleNums.splice(randomIndex, 1);
            //decrease max by 1
            max--;
            results = question(num1, num2);
            totalTime += results[1];
            if (results[0]) {
                numCorrect++;
            } else {
                //Wrong answer
                repeats.push(num2);
            }
            if (numQs-1-i == repeats.length) {
                //If number of questions left = size of repeats
                repeating = true;
            }
        } else {
            results = question(num1, repeats[j]);
            j++;
            totalTime += results[1];
            if (results[0]) {
                numCorrect++;
            } 
        }
        
    }
    prompt(numCorrect + " bonnes réponses sur " + numQs + " !\n"
        + "Temps écoulé = " + totalTime/1000 + " secondes."
    );
}

function main() {
    alert("Quiz 1:\n\t10 questions aléatoires vous seront" +
        " posées, entre 1x1 et 10x10.\n\n" + 
        "Quiz 2:\n\tVous choisissez la table de multiplication sur" +
        " laquelle vous souhaitez être interrogé(e) (entre 1 et 10)" + 
        ", puis 10 questions aléatoires vous seront posées sur cette table.\n\n" +
        "Quiz 3:\n\tVous choisissez votre table puis 10 questions vous" +
        " seront posées sur cette table, dans un ordre quelconque mais" +
        " sans répétition. En cas d'erreur sur une question, celle-ci" +
        " vous sera reposée ultérieurement.\n\n" +
        "Le score (nombre de bonnes réponses) et le temps écoulé seront" +
        " affichés à la fin de chaque quiz."
    );
    const quiz = parseInt(prompt("Sélectionnez un quiz : " +
        " (1, 2, ou 3) :"
    ));
    if (quiz == 1) {
        quiz1();
    } else if (quiz == 2) {
        quiz2();
    } else {
        quiz3();
    }
}

main();