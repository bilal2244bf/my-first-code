console.log("javascript is connected!");
// ES6: NEW VERSION introduced in JS after 2015, which introduced new features, like var is replaced by let & const

//chapter1: variables and types of data
// three types of variables, var: can be updated and used with same name property(global scope variable) let: can be updated but can't use same property names, only one property name. const: can't be re-decalred like let but also can't be updated . its gonna stay constant. let & const are (block scope variables. blocks are curly braces {}). downwards there are examples

let name="bilal farooq";
name= "ayesha";
name="zaviyar"; // if used with with same property name it gives you error, but only if let is used, without let the latest variable with same would give value

const age=29; // now there is age 30 written downwards, now it has given error we went for the output in console.log
//age=30 // any name could be given variable eg a bc d e , bilal, zaviyar
let x=null; // null: intentional absence of any value. these examples before console.log are called assignement operator which saves value of after = which is string value to before equal which is VARIABLE
let y=undefined;
let price=100;  // avoid sapcing in giving variable names and if apple and APPLE are given the name, then both have different storage and meaning, only letters, digits, _ and $ is allowed in giving name and letter underscore_ and $ should be the first character if using
//reserved words like console and log etc cant not be used as variable names
let isFollow=true; //isfollow: in iself we can name the variable with any name, but coders usually write it like this, we can name it whatever we like, but the value of it it which is true or false matters, which is written without inverted commas. Boolean is just true or falue value //convention: not rule, but good if used if using two words like fullname, then first word needs to be stay small, second words first ellter needs to be capital like, fullName
 console.log(name);

// data types: primitive(7 types:number: which has some numbers, string: which contain the value in letter lik( my name is bilal), boolean: isFollow(true or false), undefined:  for eg let x; which conatins no value or property is not defined ,null ,bigint, symbol)

let a = BigInt("123");
console.log(a); // just writes n with thevalue. functionality would be defined in practical

let b= Symbol("bilal");
console.log(b); // basically you can assign same values, but with different variable, for different purposes. thats why we use symbol for same values and different key/variable.

//non primitive data types: objects( it is a collection of values, if we want save multiple values) these have two further sub categories: arrays & functions

/* EXAMPLE of upper cpncept
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
console.log(student);// bassically the age given in the object in upper example is increased with this way by 1. so basically we can change anything inside object with this way. the upper example is in const, so we cant change its value, but if its an object we can change it. so thats the way to change it.
//inside object the thigs are called properties or keys. so inside objeacts they are treated as property names


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
let Color; // color is used with no value or you cpuld say variable with no value means its gonna be used inside the condition statements to assign certain value in that particalur conditon statement
if(mode==="dark"){
    Color="black";
} //=== should be preferably used beacuse it also asses the data type. both == & === means equal but === asses data type as well. so in JS its prefereed to be used for safe side for errors
else{
    Color="white";
}
console.log(Color); // console.log inside if you are using inside without inverted commas the vlaue will print and if  inverted commas are used  that particular word which is being written would be printed

//else if example
// else if used when you want to check more than 2 statement  conditons. these are because in if and else , we canuse them for 2 statements, but if we add else if, which is always used after if and before else, it can be used as many times as we want

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
let hamza="Javascript";
let size=0;
for(let b of hamza ){
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
//javascript strings are immutable, means the capital or small letters dont change. old string does not change you have to make new string, like we did upwards in UpperCase example.

//_____________________________________________________________________________________________________


//chapter 4: Arrays: collection of item. object is also collection of items. linear way to store info. array in itself is an object, a special kind. it goes in sqare brackets[]
//example

let marks=[
    91,92,93,94,95
];
console.log(marks[0]=66);

//array indices: plural from of index. in string we write the name of string whatever we have given then in [] we write its position. but in array, we write array which is obviously a variable name then in [] we write position. for example the value like in upper example, the whole marks is considered as one index like 91, which lies on index 0. we can also change the value, example stated above

// itrrables(strings(collection of characters), objects(collection of key values), arrays(collection of similar type of items collection)): are those items on which we can apply loop
// example: how it easily count and shows the values of indices in loop
let heroes= ["ironman", "thor", "hulk", "shaktiman", "spiderman" , "antman"];
for (let idx = 0; idx < heroes. length; idx++) {
    console.log(`index ${idx} = ${heroes[idx]}`)
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
 items[i] = items[i] - offer;
 console. log('value after offer = ${Items[i]}');
 i++;  // a way to do the practise question through for-of loop
}*/
let Items = [250, 645, 300, 900, 501];
for (let i = 0; i < Items.length; i++) {
let offer = Items[i] / 10;
Items [i]-= offer;// another way of writing items= items-offer
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
let deletedItem = FoodItems.pop ();
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

 // CLEAR EXPLANATION OF FUNCTION: if we want to for example run multipe things like subtraction, addition, multiplacation through operators, just an example, then we use function to set the parameters then inside curly brackets pass those instructions like given in the lower example s=x+y, that could be multiplication subtraction, anything. it would become easy. then to return the value, we can return multiple values but the way is, like if s=x+y, then  we are writing return s, for multiple return, we could write return { s,a,c, etc} whatever we named the variable inside the brackets for instructions use.


function sum (x, y){ // we have to write word function to define function then we name the fuction like its given in the name of "sum", the brackets after it are "parameters/ inputs to function", the curly brackets contains the instructions of the function. 
   s = x+y;
  return s;// return is the value, when the fucntion is called it gives the value
}
let varible = sum (3, 4) ;// outside the function we call it like this, which then gives the value
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
   if (char==="a"|| char==="e"|| char==="i"|| char==="o"||char==="u")
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
// example. its more difficul and lengthy  to filter in loops by setting conditions. its a simple way. and arrow function is used to consize the length, otherwise could be done with normal function
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
console. log("factorial = ", factorial);// factorial is muliplication

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
concept of first & last child for example there are multiple tags inside parent tag, then we can them by this way as well

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


// Insert & Delete elements: it has two steps before adding or removing elements, you have to create element , whether paragraph button etc
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
these access the details about event handles like mentioned there type, target, position and many more
It is a special object that has details about the event.
All event handlers have access to the Event Object's properties and methods.
node.event = (e) => {
//handle here
}
e.target: like which html tag or node
e.type: whether it was a click, keydown, mouseover, submit etc
 e.clientX: distance from left edge
 e.clientY: distance from top edge
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

//Chapter 8: Classes & Objects
/*Prototypes in JS
A javaScript object is an entity having state and behavior (properties and method).
JS objects have a special property called prototype.
We can set prototype using - - proto _-
*If object & prototype have same method, object's method will be used. method is what we could call here function etc
*/
//example
const studentss={
fullName: "shradha khapra",
marks:94.4,
printMarks: function (){
console. log ("marks = ", this.marks);// here "this" is used , which is like an attribute, to point to specific property and give value.
},
};// basically we made an object, and we are calling a function in it. its the simple and most common way to make an object

//Example 2: prototype explanation
const employee = {
 calcTax(){
 console.log("tax rate is 10%");
  },
};
const karanArjun={
 salary: 50000,
};

karanArjun.__proto__= employee;
// explanation of the example:  where we made variable employee, inside {} we used funcion with the name calctax, which is function name, another way to write the function without word function. second we made another variable with the name karanarjun, we used the employee function ,with the help of prototpye , for other object which is karanarjun. the way to write is __proto__. so if you wanna use same function for different objects thats the way. if some object has its own function, and we are also giving it prototype, then  by default the object  will use the function written inside its object.


/*Classes in JS
Class is a program-code template for creating objects.
Those objects will have some state (variables) & some behaviour (functions) inside it.
class MyClass {
constructor() {... }
myMethod() {...}
}
let myObj = new MyClass() ;
*/

//example
class ToyotaCar {
 start ( ){
 console. log ("start");
 }
 stop () {
 console. log ("stop");
   }
 setBrand (brand) {
 this. brandName = brand;
   }
}
let fortuner = new ToyotaCar();
fortuner. setBrand ("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus");


/*Constructor() method is :               class MyClass {

• automatically invoked by new      constructor () {... }
• initializes object                myMethod() {...}
*/


/*Inheritance in JS
inheritance is passing down properties & methods from parent class to child class.
class Parent {
}
class Child extends Parent {
}

*If Child & Parent have same method, child's method will be used. [Method Overriding]
*/

//EXAMPLE
class Person {
eat (){
 console. log ("eat");
 }
 sleep ( ){
 console. log ("sleep");
 }
}
 class Engineer extends Person {
work() {
console. log ("solve problems, build something");
}
}
let shradhaObj = new Engineer ();
// this is the way, if you make a class and you want to pass it on its functions to other classes, rather than writing all of it again you simply use that EXTENDS code. then at the the we have made a variable with the name of shradhaobj, so basically we can pass the functions and value in this way as well, to new variables.

/*super Keyword
The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
super(args) // calls Parent's constructor
super.parentMethod (args )
 */
//EXAMPLE
class Persons{
  constructor (){
  console. log("enter parent constructor");
  this. species = "homo sapiens";
  }
  eat () {
  console. log ("eat");
  }
}
class Engineer extends Persons {
 constructor (branch) {
 console. log("enter child constructor");
 super ();    //toinvoke parent class constructor
 this. branch = branch;
 console. log ("exit child constructor");
 }
 work () {
 console. log ("solve problems, build something");
 }
}
let engObj = new Engineer ("chemical engg");
//so the variable is startng from the bottom, which in engobj. now that takes it to engineer class, and inside engineer SUPER is called which takes to parents constructor/ methods, after getting data from there it exits through engineer remaining function.


/*
Error Handling: you just write the code inside try which you could have error, then you write catch, and if there is any error, it will tell you.
try-catch
try {
[... normal code ]
} catch (err) { //err is error object
... handling error
}
 */

//_____________________________________________________________________
//chapter 9: callbacks, promises & async-await
/*Sync in JS
Synchronous
Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.
Asynchronous
Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the Ul.
Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow*/
//EXAMPLE
console.log("start");
setTimeout(() => {
  console.log("timeout");
}, 0);
console.log("end");
console.log("one");
console.log("two");
//whats happening is, the first line is printed, then setTimeout is called, which is asynchronous, so it does not wait for it to finish, it goes to next line and prints end, then one and two. then after all of that is done, it goes back to setTimeout and prints timeout. so the output would be start, end, one, two, timeout

//callbacks
/*A callback is a function that is passed as an argument to another function.
When the other function is executed, it calls the callback function.
*/
//EXAMPLE
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}
greet("Ayesha", () => {
  console.log("Callback function executed");
});
//so the greet function is called, which takes name and callback as parameters, then it prints hello and name, then it calls the callback function which is passed as an argument, and prints the callback function executed. so the output would be Hello, Ayesha and Callback function executed
//example 2
function add(a, b, callback) {
  const sum = a + b;
  callback(sum);
}
function calculator(a, b, sumCallback) {
  add(a, b, sumCallback);
}
calculator(1, 2, (result) => {
  console.log("Sum:", result);
});
//so the add function takes a, b and callback as parameters, it calculates the sum and calls the callback function with the sum as an argument. then the calculator function calls the add function with a, b and sumCallback as arguments. finally, the callback function is called with the result which prints Sum: 3.
//two functions are compulsory to be used to use the callback function, one is the main function which takes the callback as parameter, and the second is the callback function which is called inside the main function.


//callback hell: nested callbacks
/*When we have multiple nested callbacks, it becomes difficult to read and maintain the code. nested callbaacks stacked below one another froming a pyramid shape, which is called pyramid of doom. 
//example

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

// Callback Nesting Example (Callback Hell)
getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});
//so the getData function takes dataId and getNextData as parameters, it simulates fetching data with a timeout, then it prints the dataId and calls the getNextData function if it exists. then we call the getData function with dataId 1, and pass a callback function which calls getData with dataId 2, and so on. this creates a nested structure which is difficult to read and maintain.

//Promises: promise is for eventual completion of task. its an objects in JS. its a solution to callback hell. it has 3 states: pending, fulfilled, rejected. it has function with two parameters resolve and reject. resolve is for success and reject is for failure. then we use .then() for success and .catch() for failure.  pending fullfilled and rejected are the three states of promise. pending is when the promise is not yet resolved or rejected, fulfilled is when the promise is resolved successfully, and rejected is when the promise is rejected with an error.
static content does not use promise but dynamic does and example is like comments payment gateway etc

//EXAMPLE 
let promise = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});
promises:
prmise.then((result) => {...})
promise.catch((error) => {...})
//EXAMPLE
promise
  .then((result) => {
    console.log("this is in then " + result);
  })
  .catch((error) => {
    console.log("this is in catch " + error);
  });
//so the promise is created with a function that takes resolve and reject as parameters, it checks if 1 + 1 is equal to 2, if yes it calls resolve with success, else it calls reject with failed. then we use .then() to handle the success case and .catch() to handle the failure case. so the output would be this is in then success

//promise chaining: we can chain multiple .then() and .catch() methods to handle multiple asynchronous operations in a sequence. each .then() method returns a new promise which can be used to chain another .then() or .catch() method.
//EXAMPLE
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 4000); // 4 seconds delay
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 4000); // 4 seconds delay
  });
}

console.log("fetching data1....");

let p1 = asyncFunc1();

p1.then((res) => {
  console.log("fetching data2....");
  let p2 = asyncFunc2();

  p2.then((res) => {
    console.log("Both async tasks finished successfully!");
  });
});
explanation: the asyncFunc1 and asyncFunc2 functions return a promise that simulates fetching data with a timeout, then it prints the data and calls resolve with success. we call asyncFunc1 and store the promise in p1, then we use .then() to handle the success case, inside it we call asyncFunc2 and store the promise in p2, then we use .then() again to handle the success case of p2. this creates a chain of promises that are executed in sequence. so the output would be fetching data1...., data1, fetching data2...., data2, Both async tasks finished successfully!


// VERY IMPORTANT POINTS: 1.RESOLVE AND REJECT ARE RESERVE IDENTIFIERS OR KEYWORDS, WE CANT USE THEM AS VARIABLE NAMES. 
2.RETURN WORD INSIDE THE FUNCTION IS USED FOR THE INSIDE FUNCTION TO RETURN THE VALUE TO OUTSIDE FUNCTION. SO BASICALLY RETURN IS USED TO PASS THE VALUE FROM INSIDE FUNCTION TO OUTSIDE FUNCTION.
3. ASYNCHRONOUS MEANS NOT AT THE SAME TIME
4. PROMISES ARE USED FOR DYNAMIC CONTENT, NOT STATIC CONTENT.



//async-await: 
//  always returns a promise. it makes the code look synchronous but it is asynchronous. we use async keyword before the function and await keyword before the promise. it makes the code easier to read and maintain. await makes the function wait for the promise to resolve or reject before moving to the next line of code. it can only be used inside an async function.
//EXAMPLE
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

// Async-await
async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
  await getData(5);
  await getData(6);
}

getAllData();


iife: immediately invoked function expression. its a function that is executed immediately after it is defined. it is used to create a new scope and avoid polluting the global scope. it is defined inside parentheses and followed by another set of parentheses to invoke it.
//EXAMPLE
(function () {
  console.log("iife");
})();
// so it basically prints iife immediately after it is defined. and it does not wait for any call to execute it. its used to avoid polluting the global scope by creating a new scope for the function.

TAKEAWAYS OF THIS CHAPTER: PROMISES WITH ASYNC AWAIT OR THEN & CATCH, CALLBACKS, IIFE, ARE USED  FOR WHEN THE DATA IS DYNAMIC, NOT STATIC.OR IT IS DELAYED. IT IS ALSO USED FOR USERS TO STORE THEIR DATA, LIKE COMMENTS, PAYMENT GATEWAY ETC. SO BASICALLY THE PARAMETERS ARE WHAT WE JUST USE AS DEFINED AREAS , THOSE PARAMETERS ARE THEN FILLED WITH VALUES WHEN THE FUNCTION IS CALLED. AND FUNCTION IS CALLED IN MANY WAYS, LIKE CALLBACKS, PROMISES, ASYNC AWAIT ETC. SO THESE ARE THE WAYS TO CALL THE FUNCTION. SO THAT WAY FOR EXAMPLE WE MAKE A FUNCTION LIKE , FUNCTION GETDATA(DATAID), SO DATAID IS PARAMETER, THEN WHEN WE CALL IT, WE FILL IT WITH VALUE LIKE GETDATA(1), SO 1 IS THE VALUE. SO THATS HOW IT WORKS. AND THAT 1 IS BASICALLY FILLED BY THE USER, SO THATS WHY IT IS DYNAMIC.

//____________________________________________________________________________________________________
//chapter 10: fetch API
/*APIs: Application Programming Interface
APIs are a set of rules that allow different software applications to communicate with each other.
fetch api provides  an interface for fetching sending requests and receiving responses over the network.
it uses requests & responses objects.
let promise = fetch(url, [options])
interface: means a middle layer where two systems meet and interact with each other.
AJAX: Asynchronous JavaScript and XML. it an old method to fetch data from server without refreshing the page. it uses XMLHttpRequest object to send and receive data.
JSON: JavaScript Object Notation. it is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse(convert) and generate. it is used to exchange data between client and server. json is used so that the date which is coming from backend could be in any language and would be in raaw format, so json is used to convert it into readable format for front end.
Http verbs: GET, POST, PUT, DELETE etc. these are the methods used to send requests to the server. GET is used to fetch data from the server, POST is used to send data to the server, PUT is used to update data on the server, DELETE is used to delete data from the server.
response status codes: 200, 404, 500 etc. these are the codes returned by the server to indicate the status of the request. 200 means OK, 404 means Not Found, 500 means Internal Server Error.
Http response headers: these are the metadata associated with the response. they provide information about the response such as content type, content length, etc. content type is used to indicate the type of data being sent in the response. for example, application/json indicates that the response is in json format. content length is used to indicate the size of the response body in bytes.
try -catch: it is used to handle errors in the code. 
response.ok: handles server errors. it is a boolean value that indicates whether the response was successful or not. if the response status code is in the range of 200-299, then response.ok is true, otherwise it is false.
*/