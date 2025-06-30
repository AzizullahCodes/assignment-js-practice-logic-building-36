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