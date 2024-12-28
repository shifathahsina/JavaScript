
function f1(x, f2) {
    setTimeout(() => {
        console.log(`file ${x} is being processed`);
        f2(x); 
    }, 1000);
}

function f2(x) {
    setTimeout(() => {
        console.log(`file ${x} is downloading`);
        setTimeout(() => {
            console.log(`download completed`);
        }, 1000); 
    }, 1000);
}

let a = "abc";
f1(a, f2);
