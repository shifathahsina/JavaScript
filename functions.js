//without return and non parameterized

function orange()
{
    console.log("Orange");
}
orange();


//with return and non parameterized

function apple()
{
    return "apple";
}
console.log(apple());


//with return and parameterized

function sum(x,y)
{
    return x+y;
}
var a=5;
var b=10;
console.log(sum(a,b));


//without return and parameterized

function mul(x,y)
{
    console.log(x*y);
}
mul(20,2);