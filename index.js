//Q-1:-

//Write one example explaining how you can write a callback function?

const message = function() {  
    console.log("This message is shown after 2 seconds");
}
 
setTimeout(message, 2000);

//...............................................................................................................................................................


//Q-2:-

//Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
//Explain callback hell.

//Numbers
//1
// 2
// 3
// 4
// 5
// 6
// 7

function myNum(callBack) {               
    console.log("Numbers");
    callBack();
}

function callBack(){
    setTimeout(() => {
        console.log("1");
    }, 1000);

    setTimeout(() => {
        console.log("2");
    }, 2000);

    setTimeout(() => {
        console.log("3");
    }, 3000);

    setTimeout(() => {
        console.log("4");
    }, 4000);

    setTimeout(() => {
        console.log("5");
    }, 5000);

    setTimeout(() => {
        console.log("6");
    }, 6000);

    setTimeout(() => {
        console.log("7");
    }, 7000);           
}

//myNum(callBack);

//callback hell - Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code. 

//...............................................................................................................................................................

//Q-3:-

//Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

const getProm = new Promise((resolve, reject)=>{
    console.log("Numbers");
    setTimeout(() => {
        let num1 = "1";
        resolve(num1);

        setTimeout(() => {
            console.log("2");
            resolve();

            setTimeout(() => {
                console.log("3");
                resolve();

                setTimeout(() => {
                    console.log("4");
                    resolve();

                    setTimeout(() => {
                        console.log("5");
                        resolve();

                        setTimeout(() => {
                            console.log("6");
                            resolve();

                            setTimeout(() => {
                                console.log("7");
                                resolve();
                            }, 7000);
                        }, 6000);
                    }, 5000);
                }, 4000);
            }, 3000);
        }, 2000);
    }, 1000);
});

getProm                       
    .then((a) =>{
        console.log(a);
    })
    .catch((error) =>{
        console.log(error);
    });

//...............................................................................................................................................................

//Q-4:-

//Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected.

const promiseTwo = new Promise((resolve,reject) => {
    resolve();
    //reject();
    
})

promiseTwo
.then((data) => {
    console.log("Promise resolved");
})
.catch((error) => {
    console.log("promise rejected");
})

//...............................................................................................................................................................

//Q-5:-

//Create examples to explain callback function.

function myCall() { 
    console.log("Hi, I will be printed first.");
    callLater();
}

function callLater() {
    setTimeout(() => {
        console.log('I am callback function, and i will be printed later.');
    }, 2000);
}
myCall();

//...............................................................................................................................................................

//Q-6:-

//Create examples to explain callback hell function.

const getMyId = () =>{
    setTimeout(() =>{
        console.log("Fetching the ID's");
        let id = [1,2,3,4,5];
        console.log(id);

        setTimeout(()=> {
            let myDetails = {
                fName: "UMESH",
                lName: "PM",
                age:"25",
            }
            console.log(`The name of the Employee is ${myDetails.fName} ${myDetails.lName} and age is ${myDetails.age}`);

            setTimeout(() =>{
                myDetails.gender = "Male",
                console.log(`The name of the Employee is ${myDetails.fName} ${myDetails.lName} and age is ${myDetails.age} and the gender is ${myDetails.gender}`);
            },2000);

        },2000);
    },2000);
}
getMyId();

//...............................................................................................................................................................

//Q-7:-

//Create examples to explain promises function

const promChain = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        let arr = [1,2,3,4,5];
        resolve(arr);
        reject("failed"); 

    }, 2000);
});

const getArrDetails = (data) => {
    return new Promise((resolve,reject)=>{
        setTimeout((data)=>{
            let bikeDetails = {
                brand : "ROYAL",
                bike : "ENFIELD",
                milage : "25KM",
            }
            resolve(`The Model No. of the bike is ${data} and the name of the company is ${bikeDetails.brand}, bike name is ${bikeDetails.bike} and milage of the bike is ${bikeDetails.milage}`);
        },2000,data);
    });
};
promChain
    .then((arr)=>{
        console.log('Models are',arr);
        getArrDetails(arr[1]).then((data)=>{
            console.log(data);
        })
    })
    .catch((err)=>{
        console.log(err);
    })

//...............................................................................................................................................................

//Q-8:-

//Create examples to explain async await function.

const functionOne = () =>{
    return("I am function one");
}
    
const functionTwo = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("I am function two");
        }, 3000)
    })
}
    
const functionThree = () =>{
    return ("I am Function three");
}
    
const callAllFunction = async() =>{
    let responseOne = functionOne();
        console.log(responseOne);
    
    let responseTwo = await functionTwo();
        console.log(responseTwo);
        
    let responseThree = functionThree();
        console.log(responseThree);
}
    
    
callAllFunction();

//...............................................................................................................................................................

//Q-9:-

//Create examples to explain promise.all function.

const tOut = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Completed in ${t}`)
      }, t)
    })
  }
   
  tOut(1000)
              .then(result => console.log(result));
   
  Promise.all([tOut(1000), tOut(2000)])
              .then(result => console.log(result))
  



