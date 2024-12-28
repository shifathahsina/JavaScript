function attendance()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let att=false;
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
            let a=false;
            if(a)
                resolve("Went home");
            else
                reject("Missed bus");
        },2000)
    })
}


async function finalday()
{
    // let a=await attendance();
    // console.log(a);
    // let b=await lunch();
    // console.log(b);
    // let c=await home();
    // console.log(c);
    try{
        let a=await attendance();
        console.log(a);
    }catch(error)
    {
        console.error(error)
    }
    try{
        let b=await lunch();
        console.log(b);
    }catch(error)
    {
        console.error(error)
    }
    try{
        let c=await home();
        console.log(c);
    }catch(error)
    {
        console.error(error)
    }
}
finalday();

