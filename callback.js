function attendance(callback)
{
    setTimeout(()=>{
        console.log("Taking Attendance");
        callback();
        },1000);
}
function lunch(callback)
{
    setTimeout(()=>{
        console.log("Eating lunch");
        callback();
        },1000);
}
function home(callback)
{
    setTimeout(()=>{
        console.log("Going home");
        callback();
        },1000);
}

//callback hell
attendance(()=>{
    lunch(()=>{
        home(()=>{
            console.log("Day completed");
        })
    })
})