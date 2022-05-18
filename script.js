let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

// ce script traduit le lanuage en "language baleine"
// les règles : le langage baleine ne contient aucune consonne, et les voyelles A et U sont répétée à chque appel

// boucle qui analyse les mots 

for(inputIndex = 0; inputIndex < input.length; inputIndex++){
    // si voyelle E = doubler E
  if(input[inputIndex] === "e"){
    resultArray.push(input[inputIndex]);

    // SI voyelle U = doubler U
    
  } else if(input[inputIndex] === "u"){
    resultArray.push(input[inputIndex]);
  };
  // boucle qui lie les voyelles 
  for(vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
   // si dans le mot il y a une voyelle alors donne là à la valeur resultArray
     if(input[inputIndex] === vowels[vowelsIndex]){
 
       resultArray.push(vowels[vowelsIndex])
        

     }
  }
 
}

console.log(resultArray.join("").toUpperCase())
//console.log(inputIndex)
