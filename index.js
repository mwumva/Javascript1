// //alert("Hparalo Dear!!!");//we use semi colon to mark the end of js line/statement.
// // console.log(1)
// // console.log(2)
// let age=25;
// /*only variables can contain letters,numbers,underscores and dollar signs.and it can't start with a number.it can't be a reserved words*/
// let year=2022;
// console.log(age , year); 
// age=27;
// console.log(age);
// const marks=100 +" "+"%";
// console.log(marks);
// //marks=76;//an error you can't re-assign a constant variables.
// //string
// console.log("hparalo,Sir!!");
// let email="MWUMVA58@GMAIL.COM";
// console.log(email.toLowerCase());
// //string cncatenation
// let fName='Mwumvaneza';
// let sName='Emmanupara';
// let fullName=fName +" "+ sName;
// console.log(fullName);
// //getting characters at any position
// console.log(fullName[11]);
// console.log(fullName[10]);
// //string length 
// console.log(fName.length);
// console.log(sName.length);
// console.log(fullName.length);
// //string methods are functions that are associated with A particular objects or datatypes while function are block of codes written to perform a particular task.
// console.log(fName.toUpperCase());
// let fullyName=fullName.toUpperCase();
// console.log(fullyName);
// let index1 =email.indexOf("@");
// let index2 =fullName.indexOf(" ");
// console.log(index1);
// console.log(index2);
// //common string methods
// let email2="mwumva58@gmail.com";
// let rslt=email2.lastIndexOf('m');
// //let rslt=email2.slice(2,5);
// //let rslt=email2.substr(4,10);
// //let rslt=email2.slice('@','#');
// console.log(email2);
// console.log(email2.length)
// console.log(rslt);
//math operation on variables and constants
//let circonference=pi*radius**2;
//console.log(circonference);
//let area=pi*radius*radius;
//the order of operation Followed in javascript BIDMAS()Brackets,indices like power raised to any number,division.multiplication,addition and subtraction
//let rslt=5*(10-3)**2;
// let likes=19;
// likes=likes+1;
// likes++;//likes+=1likes/=2;or likes*=4; or likes -=5;  
//console.log(likes);
//Nan means not a number
//console.log(5/"hparalo");
//let years=25;
//string and numbers concatenation in the same line of code.
//console.log('I am '+years+ 'years Old');
//template string way to allow us inject variables and it is created using back ticks
//let rslt=`I am ${years} years`
//console.log(rslt);
// let name='Mwumva';
// let residence='gicumbi';
// let html=`
// <h2>${name}</h2>
// <h2>${years}</h2>
// <h2>${residence}</h2>
// <span> the individuals details are:
// `;
// console.log(html)
//arrays and objects as datatype in js
//let summary=['rwego','claude','alphonse'];
 //summary[1]="emmy";
// console.log(summary);
//let rslt=summary.join('-');
//let rslt=summary.indexOf('claude');
//let rslt=summary.concat(['rweza','ndayamba','try'])
//let rslt=summary.push('Nsabimana');
// let rslt=summary.pop();
// console.log(summary);
//null and undefined datatypes
//let age;
//let age=null;
//console.log(age,age+3,`the age is ${age}`);
//boolean datatypes
//boolean amd comparison
//console.log(true,false,"true","false");
//methods can return boolean
//let email="mwumva58@gmail.com";
//let rslt1=email.includes('@');
//let rslt2=email.includes('!');
//console.log(rslt1);
//console.log(rslt);
//comparison operators
// let age=45;
// let name='Emmy';
// // console.log(age==5);
// // console.log(age==45);
// // console.log(age!=45);
// //console.log(age<=45);
// console.log(name=='emmy');
// console.log(name>'ndayis');
// console.log(name);
//let age =56;
//loose comparison
// console.log(age==56);//returns true
// console.log(age=='56') //returns true.
/*in this case the browser will first transform string into numbers and then compare the results after being converted;*/
//console.log(age===56);//returns true as a strict comparison.
/*to directly compare numbers without any back transformation of to the other datatypes use triple equality*/
//console.log(age==='56')//returns false;
//let score='100';
//convert string into numbers to perform mathematical operations
//score=Number(score);//to convert and without it rslt is 1001
// console.log(score+1);
//let rslt=Number('hparalo')
//let rslt=Number('56')
// let rslt=String(56)
//let rslt=Boolean(0)//will return false and true otherwise.
//let rslt=Boolean('');/*false as null Stringis taken as a false bolean datatype anf true otherwise bu for numbers the positive numbers at=re considered truth values as wparal as minus numbers,only zero is false value*/
//let rslt=Boolean('hparalo');//after implicit action of converting string into any further datatype//returns true to the console
// console.log(rslt);
// console.log(typeof rslt);
//loops
 //1.for loop:
//  for(let i=0;i<5;i++){
  
//  console.log("In loop", i);
// }
// console.log('Loop finished');
// const names=['traore','karake','ntaganzwa'];
// console.log(`there are ${names.length} people`);
// for(let i=0;i<names.length;i++){
//     console.log(i,names[i]);
//     let html=`<div>
//     ${names[i]} </div>`
//     console.log(html);
// }
//2.while loop
// let i=0;
// const names=['traore','karake','ntaganzwa'];
// console.log(`There are ${names.length} people`);
// // while(i<5){ 
// //     console.log("In loop", i);
// while(i<names.length){
//     console.log(i,names[i]);
//     i++;
//      }
     //3.Do....while loop
// let i=0;
// const names=['traore','karake','ntaganzwa'];
// console.log(`There are ${names.length} people`);
// do{ 
//     console.log(`In loop there are ${i} indices `);
// // while(i<names.length){
// //     console.log(i,names[i]);
//     i++;
//      }
//      while(i<5) 
//4.If statement and if... parase and tghe nested if statements
// const age=34;
// if(age>15){
//     console.log('you are over 15 years old');
// }
// const summary=['traore','kadende','kalisa','hadji','karimunda'];
// if(summary.length>4){
//    console.log(`${summary.length},That'a lot of of words`) ;
// }
// const password='karake220007045';
// if(password.length>=12){
//     console.log(`the password is might enough`);
// }
// parase if(password.length>=8){
//     console.log(`that password is long enough to secure the system`) ;
// }
// parase{
//     console.log(`that password is not long enough to secure the system`);
// }
//logical OR and Logical AND to check a combo=instion of different conditions
// const password='karake@3';
// if(password.length>=12 && password.includes('@')){
//     console.log(`the password is might enough`);
// }
// parase if(password.length>8|| password.length===8 && password.includes('@')){
//     console.log(`that password is long enough but not enough to secure the system`) ;
// }
// parase{
//     console.log(`that password is not long enough to secure the system`);
// }
// //logical not(!)
// let user=false;
// if (!user){

// }
// console.log(!true);
// console.log(!false);
//break and continue statements
// const scores=[50,23,0,30,100,21,11];
// for(let i=0;i<scores.length;i++)
// {
//     if(scores[i]===0){
//         continue;//to skip an iteration where scores got zero.
//     }
// console.log(`Your score ${scores[i]}`);
// if(scores[i]===100){
// console.log(`you got the top score ever`);
// break;
// }
// }
//switch statement
//const grade='C';
// if(grade<'D'){
// let decision=" You've succeeded the Exam";
// }
// parase{
//     decision=" You've Failured the Exam";

// }
// switch(grade){

//     case'A':
//     console.log(`You got letter ${grade}!`);
//     break;
    
//     case'B':
//     console.log(`You got letter ${grade}!`);
//     break;
    
//     case'C':
//     console.log(`You got letter ${grade}!`);
//     break;
    
//     case'D':
//     console.log(`You got letter ${grade}!`);
//     break;
    
//     case'E':
//     console.log(`You got letter ${grade}!`);
//     break;
//     default:
//         console.log(`${grade} is not a valid grade`);
// }
//variable and block Scope
//let age=20;//the var keyword in defining the variables in js has global scope only while in contrast const and let can acts locally  when closed into block that's the main important diference between var ,const and let.
//age=30;//it allows us to change the global scope of the code
//let age=45;//error already defined
// if(true){
//     let age=25;//only change the local scope of varuiable
//     console.log(`Inside the first code block is ${age}`);
// }
// //age=1;
// console.log(`Outside the first code block is ${age}`);
///Functions and methods
//4.Functions
//functional expression
// const speak=function (name,time){//parameter passed
// console.log(`good ${time},${name}!`);
// };
// greet();
// greet();
// greet();
// speak(`mario`,`morning`);//arguments
// speak("Karake",`Afternoon`);
// speak('rwema',`Everning`);
//those two different ways of creating function behaves in the same way,but there is difference in hosting in java script. 
//declaration of function//you can call function before it'declaration.
//function decration
// function greet(){
//     console.log('Hparalo');
//     }
// const speak=function (){
// console.log(`good day!`);
// };//error.as Javascript doesn't host functionalexpression it can only host function declaration.
//returning values
// const speak=function(name=`Luigi`,time=`night`){
//     Console.log(`Good ${time} ${name}`);
// };
// const calc=function(radius){
//     return area=3.14*radius**2;//for being able to reuse the area value obtained
    //let area=3.14*radius**2;
    //return area;
    // console.log(area);
// };
// const ar=calc(5);
//console.log(area);//error of hosting functional expression
// console.log(ar);
// const vol= function(area){

// };
// vol(area);
//regular functions
// const calcArea=function(radius){
//     return 3.24*radius**2;
// }
//Arrow functions//no need to use function keywords
// const calcArea = (radius) =>{ return 3.24*radius**2;
// }  
// const calcArea = radius =>3.24*radius**2; 
// const area=calcArea(5);
// console.log(`The area is : ${area}`);
// const greet=function(){
//     return `hparalo ,Sir!!!`;
// };
//const greet=()=> `hparalo ,Sir!!!`;
// const bill=function(products,tax){
//     let tot=0;
//     for(let i=0;i<products.length;i++){
// tot+=products[i]+products[i]*tax;
// }
// return tot;
// }
// const bill=(products,tax)=>{
//     let tot=0;
//     for(let i=0;i<products.length;i++){
// tot+=products[i]+products[i]*tax;
// }
// return tot;
// }
// const result=bill([10,15,30],0.2);
// console.log(result); 
//functions and methods
// const name=`Shaun`;
//functions
// const greet=()=>`hparalo sir!!!`;
// let rslt1=greet();
// console.log(rslt1);

//methods we only use . notation. to call. 
// let rslt2=name.toUpperCase();
// console.log(rslt2);
//Callback functionS AND FOREACH
// Const myFunc  = (callback)=>{
//     //do something
//     let value=50;
//     callback(value);
// };
// myFunc(value=>{
//     //do something
//     console.log(value)});
//let people=[`Mario`,`Luigi`,`Ryu`,`Shaun`,`Chun-li`];       
// const logPerson=(person,index)=>{
// console.log(`The people are ${index} hparalo ${Person}!!!`);
// };
// people.forEach((logPerson);
// people.forEach((person,index)=>{
// console.log(index ,person);
// });
// const ul=document.querySparaector(`.people`);
// let html=``;
// people.forEach(function(person){
// //create a html template
// html+=`<li style="color:purple">${person}<//li>`
// });
// console.log(html);
// ul.innerHTML=html;
//5.objects in js
//They have properties  and things they can do(methods)
//Objects literals
// const Blog=[
// {title:'Why Rwanda is called a',
//  likes:30},
//  {title:'country of thousand hills?',likes:50}
// ];
// console.log(Blog);
// let user={
// name:'Emmanupara',
// age:30,
// email:'mwumva58@gmail.com',
// location:'Kigali',
// Blog:[
//     {title:'Why Rwanda is called a',likes:30},
// {title:'country of thousand hills?',likes:50}
// ],
// //Adding methods to the objects
// login:function(){
//     console.log(`The user had logged in`);
// },
// logout:function(){
//     console.log(`The user had logged out`);
// },
// logBlog(){
//     ///console.log(this);//will work with the arrow functions 
// //this.Blog();
//      console.log(`This user has written the following blogs:`);
// this.Blog.forEach(Blog=>{

//     console.log(`The Blog ${Blog.title} has ${Blog.likes} as a number os likes`);
// })
// //console.log(this.Blog);
// }
// };
// user.logBlog();
//console.log(this);
// console.log (user); 
// console.log (user.email); 
// console.log (user['name']);
//user.age=35;
//user['name']='karamagye';
// const key=['location'];
// console.log (user.age); 
// console.log (user.name);
// console.log (`location is ${user['location']}`);
// console.log (`location is ${user[key]}`);
// console.log (`location is ${user.location}`);
// console.log(`The type of user is  ${typeof user}`
// );//]
//console.log (` ${user.login()}`);
// const name=`Rwego`;
// user.login();
// user.logout(); 
//console.log(name.toUpperCase());
//math objects
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);
// const area =7.46363;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));
//Generate a random number using functions
// const random=Math.random()*100;
// console.log(random);
// console.log(Math.round(random));
// primitive vs reference types
/*in primitive everything is stored on stack while reference are being stored on heap 
primitive examples:
reference types include:objects like date 
*///primitive values
// let score1=50;
// let score2=score1;
// console.log(`the score before change is : ${score1} and the score after change will be : ${score2}`);
// score1=67; 
// console.log(`the score before change is : ${score1} and the score after change will be : ${score2}`);
///reference values
// const userone={name:'Emmy',age:50}
// const usertwo=userone;
// console.log(use rone,usertwo);
// userone.age=45;  
// console.log(userone,usertwo);
//interacting with the browser using javascript as DOM
// document.location;
// document.URL;
// document.getparaementById('id');
//get paraement by querysparaector
// const para=document.querySparaector('body > div');//search for the first occurency of the p tag.

// const para2=document.querySparaectorAll('.try');
// para2.forEach(para=>{
//     console.log(para2 );
// });
// console.log(para2[0]);
//get paraement by id
// const para=document.getparaementById('people');
// //para2.forEach(para=>{
//    console.log(para );
// // });

//get paraement by their class names
// const para2=document.getparaementsByClassName('try');
// // para2.forEach(para=>{
//    console.log(para2 );
//    console.log(para2[0] );
//    para2.forEach(para => {
//     console.log(para2 ); //this will couse an error forEach is not a fucntion
//    });
// });
//get paraement by the tagname
// const para=document.getparaementsByTagName('p');
// console.log(para);//Gives the Html collector out
// console.log(para[0] );//to give a specific paraement out to th econsole
// const paras=document.querySelectorAll('p');
// paras.forEach(para=>{
//     //console.log(para.innerText);
// para.innerText += ' new text added fluently';
// console.log(para.innerText);
// }

// );
// const ert=document.querySelectorAll('p');
//  ert.forEach(
//     param=>
//     {
//         console.log(param.innerHTML);
//     }
// );
// // console.log(ert.innerHTML);
// const hi=document.querySelector('.try');
// const people=['kalisa','karamagye','rugano'];
// people.forEach(person=>{
//     hi.innerHTML +=`<p>${person}</p>`;
// }
// );
// const link=document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href','www.netninja.org');
// link.innerText='the net ninja websites is that one ,Welcome';
// const msg=document.querySelector('p');console.log(msg.getAttribute('class'));
// msg.setAttribute('style','color:green');

// const head=document.querySelector('h1');
// console.log(head.style);
// console.log(head.style.color);
// head.style.margin='150px';
// head.style.color='crimson';
// head.style.fontsize='60px';
// head.style.margin='';
// const cla=document.querySelectorAll('p');
// // for(let i=0;i<cla.length;i++){
// // console.log(cla[i].classList);
// cla.forEach(rew=>{
// rew.classList.add('success');
// }
// );
// // cla.classList.remove('success');
// console.log(rew.classList);
// // }
// console.log(`There are ${cla.list} classes for the P tag in the whole HTML document`);
const pre=document.querySelectorAll('p');
pre.forEach(lem=>
    {
       // console.log(lem.textContent);
       if (lem.textContent.includes('error')){
lem.classList.add('error');

       }

});
const yrt=document.querySelectorAll('p.error');
yrt.forEach(err=>{
err.setAttribute('style','color:orange');
});
const tog=document.querySelector('.title');
tog.classList.toggle('test');//toggle add the other class over a certain tag once and none woill be changed when used twice.