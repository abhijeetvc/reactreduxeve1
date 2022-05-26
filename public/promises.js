// promises : 3 states
//    - Pending
//    - Fulfilled/Complete
//    - Rejected

let isActive=true

//create promise
let getEmployeeInfo=new Promise(
    function(resolve,reject){
        if(isActive){
            let emp={
                name:"John",
                city:"Pune"
            }
            resolve(emp)
        }else{
            let rejectReason=new Error('Employee Not found!!!')
            reject(rejectReason)
        }
    }
)

//consuming promise
// let check=function(){
//     console.log('hiiiiiiiii');
//     getEmployeeInfo
//         .then((fulfilled)=>{
//             console.log(fulfilled);
//         })
//         .catch((error)=>{
//             console.log(error.message);
//         })
//         console.log('helllooooooo');
// }

let check=async ()=>{
    console.log('hiiiiiiiii');
    let emp=await getEmployeeInfo
    console.log(emp);
    console.log('helllooooooo');
}

check()