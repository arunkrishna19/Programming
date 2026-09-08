// This file is about "string" data type.
let Intro ="Hi i am Arun";
// string has to be written in single or double quotes
console.log(Intro,"\n", typeof Intro);

//We can use ethier single quotes inside double quotes and vice versa
let text = "This is Arun's work";
let text2 = 'This is Arun"s topic';

console.log(text,"\n", text2);

// There is an exception like if we use ` then we can use both the single and double quotes 

let sample = `This is a Sample the we can use both 'single' and "double" quotes as a exeception`
console.log(sample);

// We can use ` mainly for embedding like using an expression and evaluate or other data type inside string
let embed = `1+2 = ${1+2}, ${text}`;
console.log(embed);

let name = 'Arun'
console.log(name)