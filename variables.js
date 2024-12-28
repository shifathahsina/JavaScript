let s1={
    name:["Shifa","Divya"],
    age:20,
    isStudent:true,
    address : {
        state: "TamilNadu",
        city: "Erode"
    },
    hello: function()
    {
        console.log("Hi");
    }
}
console.log(s1.name);
console.log(s1.name[1]);                 
console.log(s1["age"]);
console.log(s1);