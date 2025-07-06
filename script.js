console.log("javascript is connected!");
// ES6: NEW VERSION introduced in JS after 2015, which introduced new features, like var is replaced by let & const

//chapter1: variables and types of data
// three types of variables, var: can be updated and used with same name property(global scope variable) let: can be updated but can't use same property names, only one property name. const: can't be re-decalred like let but also can't be upadted . its gonna stay constant. let & const are (block scope variables. blocks are curly braces {}). downwards there are examples

let name="bilal farooq";
name= "ayesha";
name="zaviyar"; // if used with with same property name it gives you error

const age=29; // now there is age 30 written downwards, now it has given error we went for the output in console.log
//age=30 // any name could be given variable eg a bc d e , bilal, zaviyar
let x=null; // these examples before console.log are called assignement operator which saves value of after = which is string value to before equal which is VARIABLE
let y=undefined;
let price=100;  // avoid sapcing in giving variable names and if apple and APPLE are given the name, then both have different storage and meaning, only letters, digits, _ and $ is allowed in giving name and letter underscore_ and $ should be the first character if using
//reserved words like console and log etc cant not be used as variable names
let isFollow=true; //boolean is just true or falue value //convention: not rule, but good if used if using two words like fullname, then first word needs to be stay small, second words first ellter needs to be capital like, fullName
 console.log(name);

// data types: primitive(7 types:number: which has some numbers, string: which contain the value in letter lik( my name is bilal), boolean: isFollow(true or false), undefined:  for eg let x; which conatins no value or property is not defined ,null ,bigint, symbol)

let a = BigInt("123");
console.log(a); 

let b= Symbol("bilal");
console.log(b);

//non primitive data types: objects( it is a collection of values, if we want save multiple values) these have two further sub categories: arrays & functions

/* EXAMPLE pf upper cpncept
students
name bilal  string
age 30    number
marks 99  number
if passed or failed boolean
and this whole set is collection of data which we can save in non primitive data type objects, but this details individually are primitive data types
*/
 const student={
    fullName: "bilal farooq",
    age:30,
    cgpa:3.5,
    ispass:true,
};// this is object means collection of information/value. inside block: the terms are called key:value
console.log(student.age);
// if we want to change the value inside object downwards is the example  
// we can not change const value but inside object we can change the value of its content which is called mutation 
student["age"]+=1;
student["fullName"]="bilal zaviyar";
console.log(student);


//_______________________________________________________________________________________________________



/*chapter 2: operators: used to perform some operations on data and
 conditional statements: */

 // opertators types:  arithematic: +-*/   downwards are also arithematic operators
 //modulas operator %: gives the value of remainder when divided like we used to do it in school, then the value left at the bootm'remainder' it is given
 //exponentiation operator **: its like a aquare, but here power what comes after** so if c**d which is 5**5 that means 5 power 5
 // unary operators: increment ++ for eg if c is c++ that means c+1, decrement-- for eg if c is c-- that means c-1.    Thats why these are called single opearators. another thing if used ++c or --c the value value will be changed first then it would give output. these are called post and pre increment and decrement
 
 let c=5;
 let d=5;
 let e=c+d;// another way to get the value
 console.log("e=", e);
 console.log("c+d=", c+d);
 console.log("c%d=", c%d); 
 console.log("c**d=", c**d);// 5 power 5 is 5 5times 5 which is 3125
  console.log("c++=", c++); // c is 5 so 5+1 is 6,  another way to get value just write c++; then console.log("c=",c);


  // next are. assignment operators: =, +=, -=, *=, %= **= for eg we are already using one asignment operator which is = in upper section

let g=4;
let h=5;
g +=6;  // g=g+6
console.log("g=" ,g); // same goes with -= all the remaining
h **=3; // h=h raise tp power 3
console.log("h=",h); 

// next are comparison operators: to comapre to values.   equal to==, equal and type===,not equal to!=,not equal to and type!==, >,>=, <, <=

let i=5;
let j=4;
console.log("5==4",i==j); //same is !=   // output would be false because both are not equal, 5==4 in inverted commas is like what would be the property or which is like heading to the ans/output. and with these operators true or false would be shown

let ii=5;
let jj="5";
console.log("5===5, ii===jj"); // the output is false beacuse in jj 5 is used as a string and it could be counted as equal in ==, but not in ===  beacuse in == js reads the value inside string, but in === it uses data only as string if string is used and not its value, so number and string wont be equal. // same goes with !==

let iii=5;
let jjj=6;
console.log("iii>jjj", iii>=jjj); // its simple equal to greater & equal to, lessthan or less than & equal to. simple

/* next are logical operators: 
1.logical and &&: it means if there are are two conditions both needs to be true
2. logical or ||: it means either one of the condition needs to be true
3. logical not !: neither are true 
*/

let k=5;
let l=6;
 let cond1=k>l;
 let cond2=k===l;

 console.log("cond1 && cond2 =", cond1&&cond2); // second condition is not true, hence one of the condition is false so its false


 // condition statements: to implement some conditions in the code. there are multiple types of statements. like if, else , else if, switch

 let Age=18;
 if(Age>=18){
    console.log("you can vote");
 }
if(Age<18){
    console.log("you can't vote");// if statement example

}
// else example
// so the mode value is set to light, but we are giving mode value equal to dark in if, the vlaue was set to light, so we used else, if it is not true, it would switch to else statement. if for example we have used mode value to blue , it would have switched to else beacuse else is used and that would have to switch to else statement. else always comes at the end of condition statements
//else doesnot contain any condition beacuse its the final output without condition
let mode="light";
let color; // color is used with no value or you cpuld say variable with no value means its gonna be used inside the condition statements to assign certain value in that particalur conditon statement
if(mode==="dark"){
    color="black";
} //=== should be preferably used beacuse it also asses the data type. both == & === means equal but === asses data type as well. so in JS its prefereed to be used for safe side for errors
else{
    color="white";
}
console.log(color); // console.log inside if you are using inside without inverted commas the vlaue will print and if  inverted commas are used  that particular word which is being written would be printed

//else if example
// else if used when you want to check more than 2 statement  conditons. these are because in if and else , we canuse them fro 2 statements, but if we add else if, which is always used after if and before else, it can be used as many times as we want

let Mode="light";
let color;
if(Mode==="dark"){
    color="black";
}
else if(Mode==="light"){
    color="white";

}
else{
    color="blue";

}
console.log(color);

// ternary operator: with name a operator but used in place of if & else statements

 let AGE=25;
 let result=AGE>=18?"adult":"not adult";
console.log(result);// so basically age >= is variable which we want to check with true or false so where adult is written thats if statement and where not adult is thats else statement. so shot form for if amd else. not used for complex and long statements

let NUM= prompt(" enter a number:");// prompt open a mesage type where user types somethings
if(NUM%5===0){
    console.log(NUM,"number is a multiple of 5")
}
else{
    console.log(NUM,"num is not multple of 5")
}

// practise question of conditon statements and operators
let score=75;
let grade;

if(score>=90 && score<=100){
    grade="A";
}
else if(score>=70 && score<=89){
    grade="B";
}
else if(score>=60 && score<=69){
    grade="C";
}
else if(score>=50 && score<=59){
    grade="D";
}
else if(score>=0 && score<=49){
    grade="F";
}
console.log(grade, ":according to your score your grade was");// else is not written at last beacuse we did not need it, so thats tottaly normal according to over needs

//______________________________________________________________________________________________________


// chapter 3: loops & strings
//loops: as the meaning states, something which goes time and again. TYPES: for, while, dowhile

//for loop

for(let Count=1;Count<=5;Count++){
    console.log("ayesha bilal");
}// simple example but its showing that first value is when the loop starts, second value is the limit, and third connects with the first which adds one value in the original value and it continues till the maximum vlaue set reaches it
// one more example. 1 to 5 sum calculate
sum=0;
for(m=1;m<=5;m++){
    sum=sum+m;
}
console.log("sum=", sum); // explaination: what happened is, sum  is 0 , it starts from the value of m, then adds in sum, then goes to last property ++, where it adds ++ which means plus one, then the value of m changes after addition in ++, and sum value already changed when added with m, so they in lop changing values then we get sum of 1 to 5 which is 15.

//while loop: works same as for loop. for loop is usually used for for counting. while is used best for waiting conditon to become false. you dont kow how many times to repeat eg login, loading etc

let M=1;
while(M<=5){
    console.log("M", M);
    M++;
}// same purpose as for loop but different way to do it. and slight different stated above

//do-while loop: in while and for loop the condition is at the start. but in do while its opposite, its in the end. so that means its gonna run atleast once must. 

let N=10;
do{
    console.log(N,"N");
    N++;
}while(N<=20);// so the value of N is 20, its gonna run once, then it gets to condition and condition is false, beacuse N is smaller than 20 in condition. so it stops there.

// for-of loop: it helps in looping on strings and arrays,sets, maps which are data types
let str="Javascript";
let size=0;
for(let b of str ){
    console.log(b, "b");
    size++;
}
console.log(size, "string size"); // its counting the charcters of str and in 2nd console log its telling its size which is 10 characters in javascript. where b is written it is called KEY or Iterator

// for-in loop: it is used on objects, for example multple data of something in strings{}
let Student={
    NAME:"bilal farooq",
    age: 30,
    cgpa: 3.5,
    ispass:true,
};
for(let details in Student){
    console.log("details", details, "value",Student[details]);
}// example of for-in loop

let gameNum= 5;
let userNum = prompt("Guess the game number : ");
while (userNum != gameNum) {
userNum = prompt("You entered wrong number. Guess again : ");
}
console. log("congratulations, you entered the right number");

//strings: its a sequence of characters to represent text

let string = "zaviyar farooq";
console.log(string[6]);// example of index, character 6 is r
// string.length can be seen in console
//string index/indices , it starts from zero whichever the word is its first character start from 0. used for passwords etc for example password should contain this much characters

//template literals:  
let obj = {
item:"pen",
price: 10,

};
let output =`the cost of ${obj.item} is ${obj.price} rupees`
console. log (output);// the back tick is used in the place of inverted commas, to print the output in easy way by using $ signs with the value we want to show

//string interpolation: to create strings by doing substitution of placeholders, like ${1+2+3}
//escape character: example to create next line in console.log or you can say string, you put \n between the place of words // \t(tab space): for space between words

//string methods:built in functions to manipulate string
/*str.toUpperCase() for capital letters ,str.toLowerCase() for small letters ,str.trim() it removes whitespaces 
 str.slice(start, end?) Il returns part of string. example let str = "JavaScript";
let part = str.slice(0, 4); it can start and end index from anywhere 
console.log(part); // "Java" if you use minus it will start the counting from the end

• str1.concat( str2 ) I| joins str2 with str1, for example first name last name
• str.replace( searchVal, newVal) for example i love html, its a string, and you want to change html, so you use this
• str.charAt( idx): fro eg it pin points exact index you want to point out*/ 
let str="ayesha bilal";
str=str.toUpperCase();
console.log(str);
//javascript strings are immutable, means the capital or small letters dont change. old string does not change you have to make new string, like we did upwards in UpperCase example

//_____________________________________________________________________________________________________


//chapter 4: Arrays: collection of item. object is also collection of items. linear way to store info. array in itself is an object, a special kind. it goes in suare brackets[]
//example

let marks=[
    91,92,93,94,95
];
console.log(marks[0]=66);

//array indices: plural from of index. in string we write the name of string whatever we have given then in [] we write its position. but in array, we write array which is obviously a variable name then in [] we write position. for example the value like in upper example, the whole marks is considered as one index like 91, which lies on index 0. we can also change the value, example stated above

// itrrables(strings(collection of characters), objects(collection of key values), arrays(collection of similar type of items collection)): are those items on which we can apply loop
// example: how it easily count and shows the values of indices in loop
let heroes= ["ironman", "thor", "hulk", "shaktiman", "spiderman" , "antman"];
for (let idx = 0; idx & heroes. length; idx++) {
console. log (heroes [idx]);
}
//another way to do it
let Heroes= ["ironman", "thor", "hulk", "shaktiman", "spiderman" , "antman"];
for (let hero of Heroes) {
console. log (hero);
}
// another example how uppercase method of sting used in loop
let cities= ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];
for (let city of cities) {
console. log(city.toUpperCase());
}
// practise quesion 
let Marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of Marks) {
sum+= val;
}
let avg= sum/ Marks.length;
console. log(`avg Marks of the class = ${avg}`); // here lengeth, average marks, sum of numbers are practised in a loop

/* another practise question to ge the discounted vlaue of 10%
let Items = [250, 645, 300, 900, 501];
 let i = 0;
 for (let val of Items) {
 let offer = val / 10;
 items[il = items[il - offer;
 console. log('value after offer = ${Items[il}');
 i++;  // a way to do th practise question through for-of loop
}*/
let Items = [250, 645, 300, 900, 501];
for (let i = 0; i < Items.length; i++) {
let offer = Items[i] / 10;
Items [i]-= offer;
}
console. log (Items) ;// solved using just for loop(10% discount practise question)

/*array methods: Push() : add to end
Pop() : delete from end & return
toString() : converts array to string: changes it array to string
*/
//  Push() : add to end: example
let foodItems = ["potato", "apple", "litchi", "tomato"];
foodItems.push("chips", "burger", "paneer");
console. log (foodItems) ;

//Pop() : delete from end & return: example
let FoodItems = ["potato", "apple", "litchi", "tomato"];
let deletedItem = FoodItems-pop ();
console. log (FoodItems);
console. log ("deleted", deletedItem) ;

//toString() : converts array to string: example
let FOODItems = ["potato", "apple", "litchi", "tomato"];
console.log(FOODItems.toString());

//more methods
//Concat(): joins multiple arrays & returns result
//example
let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];
let indianHeroes = ["shaktiman", "krish"];
let HEROES = marvelHeroes. concat (dcHeroes,marvelHeroes);
console. log (HEROES);

//unshift () : add to start
//example
let MARVELHeroes = ["thor", "spiderman", "ironman"] ;
marvelHeroes. unshift ("antman");

//shift() : delete from start & return
//example
let marvelstudio = ["thor", "spiderman", "ironman"];
let val = marvelstudio.shift();
console. log ("deleted ", val);


/*Slice() : returns a piece of the array
slice( startldx, endldx )*/
//example
let marvelSTUDIO = ["thor", "spiderman", "ironman", "antman", "Dr. Strange"];
console. log (marvelSTUDIO) ;
console. log(marvelSTUDIO.slice (1, 3));

/*Splice() : change original array (add, remove, replace)
splice( startldx, delCount, newEl1... )*/
//example
let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 101, 102);
//Add Element //arr.splice(2, 0, 101);
//Delete Element //arr.splice(3, 1);
//Replace Element
 arr.splice(3, 1, 101);

//______________________________________________________________________________________________________


 //chapter 5:Functions & Methods
 //Functions: Block of code that performs a specific task, can be invoked whenever needed
 // function definition & function call: first we have to make/define our function then we call it to perform that function. function can be clll multiple times, so that also means what ever function we made in our definition, its gonna perform that function as mnay times as we want

function sum (x, y){
   s = x+y;
  return s;
}
let varible = sum (3, 4) ;
console. log (val);// so whats happening is we named the function sum and put parameters or values on which its gonna work. so we wanted to add x y so we used operator, the used RETURN, return is what is used to call the function outside curly braces.
// one job function is if we want to reuse something, avoidng to write code again

//Arrow functions: compact way of writing a function
const arrowMul = (a, b) => {
console. log(a * b);
};// functions go with constant most of the time beacuse you dont change function normally. arrow function is a shorter way of writing code than traditional functional. this function is used for small functions.
// practise question: count vowels in a string
function countVowels (str) {
   let count = 0;
   for (const char of str) {
   if (
 char==="a"|| char==="e"|| char==="i"|| char==="o"||char==="u")
   {
    count++;
    }
   }
return count;
}
/*forEach Loop in Arrays. it is also called higher order function/methods beacuse they take other functions as parameter or return it
arr.forEach(callBackFunction)
CallbackFunction: Here, it is a function to execute for each element in the array
callback is a function passed as an argument to another function. 
*/
//example
let ARR = [1, 2, 3, 4, 5];
ARR. forEach (function printVal(val) {
console. log(val);
}) ;

//map method
/*Creates a new array with the results of some operation. The value its callback returns are used to form new array
arr.map( callbackFnx value, index, array ) ) */
//example
let nums = [67, 52, 39];
let newArr = nums.map ( (val) => {
return val;
}) ;
console. log (newArr);

//filter method
/* Creates a new array of elements that give true for a condition/filter.
Eg: all even elements */
// example
let
array = [1, 2, 3, 4, 5, 6, 7];
let evenArr = array. filter ((val) => {
return val % 2 === 0;
}) ;
console. log(evenArr);

/*reduce method: Performs some operations & reduces the array to a single value. It returns that single value.*/
//example
let
ARRAY = [1,2,3,4];
const OUTPUT = ARRAY. reduce ((res, curr) => {
return res + curr;
}) ;
console. log (OUTPUT) ;//so, where res and curr are written, theses are accumulator and cuurent value, so what happens is the value are 4 in array, first element in array which is 1 and 2nd element 2, they are gonna add beacuse we used operator, so first 2 values add become 3, then the becomes the accumulator and the element 3 becomes the current value, its gonna go till the end of array elements or values. and its gonna give us the final value or reduced value

/*practise question:Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array. */
let n = prompt("enter a number : ");
let arr1 = [];
for (let i = 1; i <= n; i++) {
   arr1[i - 1] = i;// the value of index is inside the backets of arr1 so i-1=1 is 1-1=1, 0=1, so that means at index 0 the value is 1
}
console. log(arr1);

let sum = arr1. reduce ((res, curr) => {
return res + curr;
});
console. log (sum) ;

let factorial = arr1. reduce((res, curr) =>{
return res * curr;
}) ;
console. log("factorial = ", factorial);

//___________________________________________________________________________________________________

// chapter: 6 DOM( document object model) manipulation
/* EXPLANATION: basically the page is static, and we can make the changes without it being refreshed, for eg shopping cart if user updating its cart the static page built by coder gets changed beaccuse of the dom manipulation/code.
the selectors like ids, class, tags can only be accessed in dom and would be used with other javascript concepts like loops, condition statements etc
*/

/*Selecting with id
document.getElementByld("myld")

Selecting with class
document.getElementsByClassName("myClass")

Selecting with tag
document.getElementsByTagName("p")*/

let heading = document. getElementById ("animation"); 
console.dir (heading);
console.log (heading);

let headings = document-getElementsByClassName ("playground");
console.dir (headings); 
console. log (headings);// example of how id , class and tags can be used, you just need to write names you have given to the your structure through selectors. for tags you write certain tag like h1 and it will open all h1 files

/*Query Selector
document.querySelector("myld / myClass / tag")
returns first element
document.querySelectorAll("myld / myClass / tag")
returns a NodeList */

let firstEl = document. querySelector(".box1"); 
console-dir(firstEl);//1st element. you can choose any selector whether tag class, id. but you have to write .before class name and # before id name

let allEl = document. querySelectorAll("#flexbox"); 
console.dir(allEl);//all elements. it selectes all elements of selected selector

/*
Properties: for example the property tagName. the second words first letter always stays capital, so that no error comes. you just have to write element or variable name.tagname , other property names etc to get the result. its written in console in browser. 
concept of first & last child for example there are are multiple tags inside parent tag, then we can them by this way as well

• tagName: returns tag for element nodes
• innerText: returns the text content of the element and all its children. parent nodes, child nodes(which are inside some tags). third type is sibling, the tags on same levels. shows text inside tags parent to children all
• innerHTML : returns the plain text or HTML contents in the element. shows text as well as tags 
• textContent: returns textual content even for hidden elements. if some is hidden in text then it shows that as well.
 */

// examples
/*1.
let h2 = document. querySelector ("h2");
console dir(h2.innerText);
h2. innerText = h2. innerText + " from Apna College students';
what happened here is we can change the text as well as add more text beside it , with the way given upwards
 */
/*2.
let
divs = document.querySelectorAll(".box");
divs [0]. innerText = "new unique value 1";
divs [1]. innerText = "new unique value 2";
divs [2] . innerText = "new unique value 3";
we used class and with the help of indices changed their values.
indices practical use.
another way to do it using lopes to ease to process instead of ,for example we want to add 100 lines, writing 100 lines that we want to change.
*/
/*3.
let divs= document-querySelectorAll(".box");
let idx= 1;
for (div of divs){
div.innerText = `new unique value ${idx}`;
idx++;
}
this does the same thing in simple way
 */



// Attributes & Style in JS
/*
Attributes
• getAttribute( attr ) to get the attribute value
• setAttribute( attr, value ) to set the attribute val th

Style
• node.style: the way to write it is like this first in the place of node choose your node like div, p,h1, button etc.
in css you write like background-color, in js you write it like backgroundColor. it goes for every property. no - and second words first letter capital
 */
// EXAMPLES
/*1.
let div = document querySelector("div");
console. log (div);
let id = div.getAttribute("id"):
console. Log (id);

gets any attribute value/name, first you have to use queryselector
*/
/*2.
let para= document-querySelector ("p"); //p for paragraphy selected in queryselector
console. log(para.setAttribute("class","newClass"));

to change the value of attribute you write it like this
*/
/*3.style.node
let div = document. querySelector("div");
div.style.backgroundColor = "green" ; // here div is node
*/


// Insert & Delete elements: it has to steps befpre adding or removing elements, you have to create element , whether paragraph button etc
/*
Insert Elements
let el = document.createElement("div")
• node.append( el ) adds at the end of node (inside)
• node.prepend(el) adds at the start of node (inside)
• node.before(el ) adds before the node (outside)
• node.after(el) adds after the node (outside)
Delete Element
• node.remove() removes the node
*/
//EXAMPLE: apply to all of the abover insert elements
/*
let newBtn = document. createElement ("button");
newBtn. innerText = "click me!"; // first step
console. log (newBtn);

let div = document.querySelector ("div");
div.append (newBtn) ; // second step: where the place of the new element defines
*/
/* delete element example
let para = document. querySelector("p");
para.remove () ;
*/



//______________________________________________________________________________________________________

//chapter:7 events
/*Events in JS
The change in the state of an object is known as an Event
Events are fired to notify code of "interesting changes" that may affect code execution.
• Mouse events (click, double click etc.)
• Keyboard events (keypress, keyup, keydown)
• Form events (submit etc.)
• Print event & many more
*/
/*Event Handling in JS
btn.onclick// before dot is node and after is event. we can researech for specific events for mouse keyboards etc, in MDN. for eg there are hover and double click events for mouse
node.event = () => {
//handle here
*/
/*example
let btn1 = document. querySelector("#btn1");
btn1.onclick =()=> {
console. log ("btn1 was clicked"):
Let a = 25;
a++;
console. log (a); //26
*/

/*Event Object
these are access the details about event handles like mentioned there type, target, position and many more
It is a special object that has details about the event.
All event handlers have access to the Event Object's properties and methods.
node.event = (e) => {
//handle here
}
e.target, e.type, e.clientX, e.clientY
*/
//example
/*
let btn = document. querySelector ("#btn1");
btl. onclick = (evt) => {
console. log (evt);
console. log (evt. type); 
console. log (evt.target);
console. log(evt.clientX, evt.clientY);
};
*/

/*Event Listeners: we can  make multiple works on same event. event object can also be accessed through it
node.addEventListener ( event, callback)
node.removeEventListener( event, callback)
*Note: the callback reference should be same to remove
*/
// EXAMPLE
/*
btn1. addEventListener ("click", (evt) => {
console. log ("buttoni was clicked");
console. log (evt);
console. log (evt. type);
}）；
btn1. addEventListener ("click", () => {
console. log("buttoni was clicked - handler2");
}) ;
*/

/*dark light mode EXAMPLE
let modeBtn = document querySelector ("#mode");
let currMode = "light"; //dark
modeBtn.addEventListener("click", () => {
if (currMode === "light") {
currMode = "dark";
document. querySelector ("body"). style. backgroundColor = "black";
} else {
currMode = "light";
document. querySelector ("body"). style. backgroundColor = "white";
}
console. log (currMode) ;
});
*/

//___________________________________________________________________________________________________



