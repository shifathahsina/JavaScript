function attendance()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let att=true;
            if(att)
                resolve("Present");
            else
                reject("Absent");
        },2000)
    })
}
function lunch()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let lun=true;
            if(lun)
                resolve("Had lunch");
            else
                reject("Not had lunch");
        },2000)
    })
}
function home()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let a=true;
            if(a)
                resolve("Went home");
            else
                reject("Missed bus");
        },2000)
    })
}


attendance().then((value)=>{console.log(value);return lunch()})
            .then((value)=>{console.log(value);return home()})
            .then((value)=>{console.log(value);console.log("Day Completed")})
            .catch(error=>console.error(error))