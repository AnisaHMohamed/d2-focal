

const diceRoller = (rolls) => {
  var outcome = Math.ceil(Math.random() * Math.ceil(6));
  for (let i = 0; i < rolls-1; i++){
   outcome = outcome + ", " + Math.ceil(Math.random() * Math.ceil(6));
  }

  console.log(`Rolled ${rolls} dice: ${outcome}`)
}

diceRoller(1);