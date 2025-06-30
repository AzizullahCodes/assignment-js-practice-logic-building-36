/* -----------------------------------------
   JavaScript Q&A Practice assignment 36
   Author: Azizullah
   Date: 29-06-2025
   ----------------------------------------- */


/* ========== Question 1 ==========
Q:  create a pattern by repeat( )
*/
// function repeating(){let get = document.getElementById('it').value;
//     let time = document.getElementById('it2').value;
//     let result = '';
//     for(var i = 0; i<=time;i++){result = result + get.repeat(i)+ '\n';}
//     document.getElementById('ph').innerHTML = result;
// }

/* ========== Question 2 ==========
.repeat( ) practice
Q: 

*/
// function repeating(){let get = document.getElementById('it').value;
//     let time = document.getElementById('it2').value;
//     let result = '';
//     for(var i = 0; i<=time;i++){result = result + get.repeat(i)+ '\n';}
//     document.getElementById('ph').innerHTML = result;
// }

/* ========== Question 3 ==========
Q:  Dynamic Button
Create a button with text "Click Me".
When clicked, it shows an alert "Button was clicked!".
*/
// let btn = document.createElement('button');
// let btnText = document.createTextNode('Click Me');
// btn.appendChild(btnText)
// document.body.appendChild(btn);

// btn.setAttribute('onclick','clicking()');
// console.log(btn);
// function clicking(){let p = document.createElement('p');
//     document.body.appendChild(p);
//     p.setAttribute('id','para');
//     document.getElementById('para').innerHTML = 'Button was clicked'
// }



/* ========== Question 4 ==========
Q:Add a Styled Div
Create a <div> with some text.
Apply CSS styles (width, background color, padding) using style
 property in JS. 

*/
// let dv = document.createElement('div');
// let dvContent = document.createTextNode('Hello');
// dv.appendChild(dvContent);
// document.body.appendChild(dv);

// dv.setAttribute('id','myDiv');
// console.log(dv);
// let getDiv = document.getElementById('myDiv');
// getDiv.style.width = '200px';
// getDiv.style.background = 'black'
// getDiv.style.color = 'white'
// getDiv.style.padding = '20px'

/* ========== Question 5 ==========
Q:  apply css by js by className
*/
// function styling(){let get = document.getElementsByClassName('li');
// console.log(get);
// for(let i = 0; i < get.length; i++){get[i].style.color = 'blue';
//     get[i].style.fontSize = '70px'
//     get[i].style.textDecoration  = 'underline'
//     get[i].style.listStyle = 'none'
// }

// }

/* ========== Question 6 ==========
style by js by className
*/
// function styling(){let get = document.getElementsByClassName('st');
//     console.log(get);
//     for(let i = 0; i < get.length; i ++){get[i].style.color = 'red';}
// }

/* ========== Question 7 ==========
Q:  classList styling
*/
// function addStyling(){let get = document.getElementById('paragraph');
//     get.classList.add('class2')
// }

// function removing(){let get = document.getElementById('paragraph');
//     get.classList.remove('class2')
// }



/* ========== Question 8 ==========
Q: classList styling
*/
// function adding(){let get = document.getElementsByClassName('st');
//     console.log(get);
//     for(let i = 0; i < get.length; i ++){get[i].classList.add('st2')}
    
// }

// function removing(){let get = document.getElementsByClassName('st');
//     console.log(get);
//     for(let i = 0; i < get.length; i ++){get[i].classList.remove('st2')}}


/* ========== Question 9 ==========
Q:  querySelector( ) & queryAllSelector( )
*/
// let a = document.querySelector('p');
// console.log(a)
// let b = document.querySelectorAll('p');
// console.log(b);
// for(let i = 0; i < b.length; i++){console.log(b[i])}


/* ========== Question 10 ==========
Q: practice date() and its methods
*/
// let current = Date()
// console.log(current);
// console.log(typeof current);
//  current = new Date();
// // console.log(typeof current);
// let year = current.getFullYear();
// console.log(year);

// let month = current.getMonth()+1;
// console.log(month);

// let dat = current.getDate();
// console.log(dat);

// let day = current.getDay();
// console.log(day);

// let todayDate = current.toLocaleDateString();
// console.log(todayDate);

// let tim = current.toLocaleTimeString();
// console.log(tim);

// let min = current.getMinutes();
// console.log(min);

// let seconds = current.getSeconds();
// console.log(seconds);

// let milli = current.getMilliseconds();
// console.log(milli);

// let n = current.toTimeString();
// console.log(n)
/* ========== Question 11 ==========
Q:  
*/
// function datePractice(){let get = document.getElementById('it').value;
//     console.log(get);
//     let current = new Date();
//     let currentInMIlliSeconds = current.getTime();
//     console.log(currentInMIlliSeconds);
//     let required = new Date(get);
//     let requiredInMilliSeconds = required.getTime();
//     console.log(requiredInMilliSeconds);
//     let difference = currentInMIlliSeconds - requiredInMilliSeconds;
//     console.log(difference);
//     let year = difference /(1000*60*60*24*30*12);
//     console.log(year);
//     let month = difference /(1000*60*60*24*30);
//     console.log(month);

// let days = difference /(1000 * 60 * 60 * 24);
// console.log(days)
// }



/* ========== Question 12 ==========
Q: .setDate()
etc
*/
// let current = new Date();
// current.setDate(current.getDate()+ 7);
// console.log(current);

// current.setFullYear(2000)
// console.log(current);
// current.setMonth(3-1);
// console.log(current);
// current.setMinutes(23);
// console.log(current);

/* ========== Question 13 ==========
Q:  setFullYear(),setMonth( )etc
*/
// let current = new Date();
// // first we setFullYear 
// current.setFullYear(2022);
// console.log(current);
// // output Thu Jun 30 2022 
// // now setMonth 
// current.setMonth(2-1);
// console.log(current);
// // output = Wed Mar 02 2022 
// // now set date 
// current.setDate(22);
// console.log(current);
// // output = Tue Mar 22 2022 
// // now setHours()
// current.setHours(14);
// console.log(current);
// // output = 14:04:40 
// // now setMinutes();
// current.setMinutes(43);
// console.log(current);
// // output = 14:43:57
// // now setSeconds();
// current.setSeconds(23);
// console.log(current);
// // output = 14:43:23 
// // now getMilliseconds();
// current.getMilliseconds(676);
// console.log(current);
// // output = 676

/* ========== Question 14 ==========
Q: Ask the user to enter a number (1 to 7) and print the corresponding day name.

*/
// let enterDayNumber = parseFloat(prompt('enter day number'));
// switch (enterDayNumber){case(1):console.log('sunday');
//    break;
//    case(2):console.log('Monday');
//    break;
//    case(3):console.log('Tuesday');
//    break;
//    case(4):console.log('Wednesday');
//    break;
//    case(5):console.log('Thursday');
//    break;
//    case(6):console.log('Friday');
//    break;
//    case(7):console.log('Saturday');
//    break;
//    default:console.log('invalid entry')
// }

/* ========== Question 15 ==========
Q:  Ask the user to input two numbers and an operator (+, -, *, /), then 
perform the calculation using switch.
*/
// let getNumberOne = Number(prompt('enter number 1'))
// let getNumberTwo = Number(prompt('enter number 2'));
// let getOperator = prompt('enter operator')

// switch(getOperator){case('+'):
//    console.log(getNumberOne + getNumberTwo);
//    break;

//    case('-'):
//    console.log(getNumberOne - getNumberTwo);
//    break;

//    case('/'):
//    console.log(getNumberOne / getNumberTwo);
//    break;

//    case('*'):
//    console.log(getNumberOne * getNumberTwo);
//    break;
//    default:console.log('invalid entry')
// }



/* ========== Question 16 ==========
Q: Fruits Switch
Ask the user to enter a fruit name and use switch to show a message:
Mango: King of fruits
Apple: Keeps doctor away
Banana: Good source of potassium
Default: I don’t know about that fruit.

*/
// let fruitName = prompt('etner fruit name');
// switch(fruitName){case('Mango'):
//    console.log('King of fruits');
//    break;
//    case ('Apple'):console.log('keeps doctor away');
//    break;
//    case('Banana'):console.log('Good source of potassium');
//    break;
//    default:console.log('invalid entry')
// }

/* ========== Question 17 ==========
Q: Ask the user to enter a grade (A, B, C, D, F) and print a message like:
A: Excellent
B: Good
C: Fair
D: Poor
F: Fail 
*/
// let enterGrade = prompt('enter grade like A,B,C etc');
// enterGrade = enterGrade.toUpperCase()
// switch(enterGrade){case('A'):console.log('Excellent');
//    break;

//    case('B'):console.log('Good');
//    break;

//    case('C'):console.log('Fair');
//    break;

//    case('D'):console.log('poor');
//    break;

//    case('F'):console.log('failed');
//    break;
//    default:console.log('invalid entry')
// }



/* ========== Question 18 ==========
Q:  Convert Input to Uppercase
Description: Ask the user to enter their name, and display it in all 
capital letters.
Example Input: Azizullah
Output: AZIZULLAH

*/
// let enterName = prompt('enter your name ');
// console.log(enterName);
// enterName = enterName.toUpperCase();
// console.log(enterName);


/* ========== Question 19 ==========
Q:  Extract First Name
Input: "Azizullah Khan"
Goal: Extract only the first name
Hint: Use slice() or substring()
📌 Expected Output: "Azizullah"
*/
// let name = 'Azizullah Khan';
// let ind = name.indexOf('h');
// console.log(ind);
// let needed = name.slice(0,9);
// console.log(needed);

/* ========== Question 20 ==========
Q: xtract First Letter of Each Word
Input: "Learn JavaScript Fast"
Goal: Output should be "LJF"
Hint: Use split() and charAt(0)
📌 Expected Output: "LJF"

*/
// let input = 'Learn JavaScript Fast';
// let first = input.charAt(0);
// let indJ = input.indexOf('J');
// let indF = input.indexOf('F');
// let second = input.charAt(indJ);
// let third = input.charAt(indF);
// let result = first + second + third;
// console.log(result)


/* ========== Question 21 ==========
Q:  Extract a Segment
Objective: Extract the word "Frontend" from this sentence using substring().
let text = "I am a Frontend Developer";
*/
// let text = 'I am a Frontend Developer';
// let charF = text.indexOf('F');
// let charD = text.indexOf('d');
// let need = text.slice(charF,(charD+1));
// console.log(need);
/* ========== Question 22 ==========
Q:  First and Last Character
Question:
Ask the user to enter a word. Show the first and last characters.
Example Input:
"OpenAI"
Expected Output:
"First: O, Last: I"
*/
// let word = 'OpenAI';
// let indO = word.indexOf('O');
// let indI = word.indexOf('I');
// let first = word.charAt(indO)
// let second = word.charAt(indI)
// console.log(first);
// console.log(second);

/* ========== Question 23 ==========
Q:  
You are given a string. Write a JavaScript function that replaces 
all occurrences of the letter "a" with "@" in the string.
🧪 Example Input/Output
Input:
let str = "javascript is amazing";
Output:
"j@v@script is @m@zing"
*/
// let str = 'javascript is amazing';
// let need = str.replaceAll('a','@');
// console.log(need)

/* ========== Question 24 ==========
Q: math.round(),ceil, floor etc practice

*/
// let number = 32.725;
// // let result = Math.round(number);
// // let result = Math.ceil(number);
// let result = Math.floor(number);
// console.log(result)

/* ========== Question 25 ==========
Q: Random Name Picker
Question:
Create an array of 5 names. Use Math.random() to pick a random 
name from the list and display it.
Expected Output Example:
Selected: Ali 
*/
// let array = ['ali','hafiz','sabir','shakir','naveed'];
// let random = Math.floor(Math.random()*array.length);
// console.log(array);
// console.log(random);
// let result = array[random];
// console.log(result)
/* ========== Question 26 ==========
Q: convert sring to number 

*/
// let str = '87.667';
// console.log(typeof str);
// let result = +(str);
// console.log(typeof result)
// console.log(result);

/* ========== Question 27 ==========
Q:covert number to string 
*/
// let number = 323.7676;
// console.log(number);
// console.log(typeof number);
// let result = String(number)
// console.log(result);
// console.log(typeof result);


/* ========== Question 28 ==========
Q: controlling the length of decimal 

*/
// let num = 78.8976;
// let result = num.toFixed(2);
// console.log(result)
/* ========== Question 29 ==========
Q:  :
Create a global variable named userName = "Ali" and a function 
() that uses this variable to print:
"Hello, Ali!"
Expected Output:
Hello, Ali!
*/
// let userName = 'Ali';
// function abc(){console.log('Hello ', userName)}
// abc(userName)



/* ========== Question 30 ==========
Q: Local Variable in Function
Question:
Create a function called showAge() that declares a local variable 
let age = 25 and logs it inside the function. Try to access age outside the function and see what happens.
Expected Output (inside function):
Age is 25
Outside the function:
*/
// function showAge(){let age = 25;
//    console.log(age);
// }
// showAge()
// console.log(age)

/* ========== Question 31 ==========
Q:  Local vs Global Conflict
Question:
Create a global variable let message = "Global Message"
Then, inside a function showMessage(), declare a local variable 
with the same name: let message = "Local Message"
Print the message inside the function and also outside.
*/
// let message = 'Global Message';
// function showMessage(){let message = 'Local Message';
//    console.log(message);
// }

// showMessage();
// console.log(message)

/* ========== Question 32 ==========
Q: Modify Global Variable in Function
Question:
Create a global variable count = 0.
Create a function increaseCount() that adds 1 to count.
Call the function three times and show the final value of count.

*/
// let count = 0;
// function increaseCount(){count = count + 1;}
// increaseCount();
// increaseCount();
// increaseCount();
// console.log(count)

/* ========== Question 33 ==========
Q:   Greet User
Question:
Create a function greetUser(name) that takes a name as a parameter and logs:
Hello, [name]!
Example Call:
greetUser("Azizullah");
*/
// function greetUser(name){console.log('Hello ',name)}
// greetUser('Aziz')

/* ========== Question 33 ==========
Q: Add Two Numbers
Question:
Create a function addNumbers(a, b) that returns the sum of two numbers.
Example Call:
console.log(addNumbers(5, 10))
*/
// function addNumbers(a,b){let bv = a + b;
//    return bv;
// }
// let result = addNumbers(3,8);
// console.log(result)


/* ========== Question 34 ==========
Q:  
Create a function square(num) that returns the square of a number.
Example Call:
console.log(square(4)); /
*/
// function square(num){let result = num*num;
//    return result;
// }
// let finalResult = square(6);
// console.log(finalResult)



/* ========== Question 35 ==========
Q: call one function inside another function 

*/
// function add(a,b){let result = a + b;
//    return result;
// }
// function subtract(a,b,c){add(a,b);
//    let subtr = add(a,b) - c;
//    return subtr;
// }
// function multiplication(a,b,c,d){subtract(a,b,c);
//    let multipli = subtract(a,b,c) * d;
//    return multipli;
// }

// function division(a,b,c,d,e){multiplication(a,b,c,d);
//    let divis = multiplication(a,b,c,d)/ e;
//    return divis;
// }
// let finalResult = division(4,2,2,5,3);
// console.log(finalResult)

/* ========== Question 36 ==========
Q:a2 + 2ab + b3
create a formula by function?
*/
// function formula(a,b){let num1 = a*a;
//    let num2 = b*b*b;
//    let result = num1 +(2*a*b)+ num2;
//    console.log(result)
// }

// formula(2,4)

/* ========== Question 37 ==========
Q: : Multiply array all index with each other by function?
*/
// function practice(){let array = [2,4,6];
//    console.log(array);
//    let product= 1;
//    for(let i = 0; i < array.length ; i++){product = product * array[i]}
//    return product;
// }
// let finalResult = practice();
// console.log(finalResult)

/* ========== Question 38 ==========
Q:  Multiply array all index with each other by function?
*/
// function multiplication(){let array = [2,3,4];
//    let product = 1;
//    for(let i = 0; i < array.length; i++){product = product * array[i]}
//    return product;
// }
// let final = multiplication();
// console.log(final)

/* ========== Question 2 ==========
Q: 

*/



/* ========== Question 1 ==========
Q:  
*/




/* ========== Question 2 ==========
Q: 

*/


/* ========== Question 1 ==========
Q:  
*/




/* ========== Question 2 ==========
Q: 

*/


/* ========== Question 1 ==========
Q:  
*/




/* ========== Question 2 ==========
Q: 

*/


/* ========== Question 1 ==========
Q:  
*/




/* ========== Question 2 ==========
Q: 

*/



/* ========== Question 1 ==========
Q:  
*/




/* ========== Question 2 ==========
Q: 

*/