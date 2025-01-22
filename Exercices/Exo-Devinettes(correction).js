const readline = require('readline');

// Définition des devinettes et de leurs réponses
const questions = [
  { question: "Quel est la capitale de la France ?", answer: "Paris" },
  { question: "Quel est le plus grand océan de la planète ?", answer: "Pacifique" },
  { question: "Quel est le plus grand désert du monde ?", answer: "Sahara" }
];

// Fonction principale du jeu
function demarrageJeu() {
  console.log("Bienvenue au jeu de devinettes !");
  console.log("Répondez aux questions suivantes :");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let score = 0;

  // Fonction récursive pour poser les devinettes
  function poserQuestion(index) {
    if (index === questions.length) {
        console.log("Fin du jeu");
        if (score === 3) {
      console.log("Félicitations ! Vous avez répondu correctement à toutes les devinettes.");
        }
      console.log(`Votre score : ${score}/${questions.length}`);
      rl.close();
      return;
    }

    const question = questions[index];
    rl.question(question.question + " ", (userAnswer) => {
      if (userAnswer.trim().toLowerCase() === question.answer.toLowerCase()) {
        console.log("Bonne réponse !");
        score++;
      } else {
        console.log("Mauvaise réponse. Dommage ! La réponse était " + question.answer);
      }
      poserQuestion(index + 1); // Poser la devinette suivante
    });
  }

  // Commencer le jeu en posant la première devinette
  poserQuestion(0);
}

// Démarrer le jeu
demarrageJeu();