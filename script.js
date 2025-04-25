const massMark = 78;
const heightMark = 1.69;
const massJohn = 92
const heightJohn = 1.95
 // bmi = mass / height **2

 const bmiMark = massMark / heightMark**2;
 const bmiJohn = massJohn / heightJohn**2;
 console.log(bmiMark , bmiJohn)

// challenge

if (bmiMark > bmiJohn){
    console.log("mark's bmi is higher than john bmi")
}

else (johnbmi > markBmi)
console.log(bmiJohn > bmiMark)


// template literals
if (bmiMark > bmiJohn)  {
    console.log('mark bmi (${bmiMark}) is higher than john bmi(${bmiJohn}')
} else{
    console.log('john bmi(${bmiJohn}) is higher than mark bmi(${bmiMark}')
}

   // challenge 3
const teamDolphin = 96 + 108 + 89 /3;
const teamKaola = 88 + 91 + 100/3;

if (teamDolphin > teamKaola)
    console.log('Dolphin win the trophy')
else if (scoreKaola > Dolphin)
    console.log('kaola win the trophy')
else if (scoreKaola === scoreDolphin)
    console.log('both team wins')