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

