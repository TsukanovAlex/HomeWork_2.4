// Задание №1 (while)
let  i = 0;
while (i < 2){
    console.log ('Привет');
    i++
}

// Задание №1 (for)

for (i = 0; i < 2; i++){
    console.log ('Привет')
}
// Задание № 2 

for(i=1; i<=5; i++){
    console.log(i);
}

// Задание №3 
for(i=7; i<=22; i++){
    console.log(i);
}

// Задание №4 
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
};
for(let key in obj){
    console.log(`${key} - зарплата ${obj[key]} долларов.`)
}  

//Задание №5

let n = 1000;
do {console.log(n);
    n /= 2;
} while (n > 50);
let num = 5;


