//spread operator
let s1={
    name :"Nick",
    age:20
}
let b={...s1};
b.name="ruby";
console.log(s1);
console.log(b);

//rest operator
function sample(...values)
{
    console.log(values);
}
sample(b); 
