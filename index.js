// function test(){
//     setTimeout(()=> console.log(1),0);
//     console.log(2);
//     console.log(3);
// }
// test();

//-----call back------
// function httpGetAsync(theUrl, callback) {
//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.onreadystatechange = function () {
//     if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
//   };
//   xmlHttp.open("GET", theUrl, true);
//   xmlHttp.send(null);
// }
// httpGetAsync('https://picsum.photos/300/300',(data)=>{
//     console.log(data);
//     document.getElementById('img_1').setAttribute('src',data.responseURL)

//     httpGetAsync('https://picsum.photos/300/300',(data)=>{
//         document.getElementById('img_2').setAttribute('src',data.responseURL)

//         httpGetAsync('https://picsum.photos/300/300',(data)=>{
//             document.getElementById('img_3').setAttribute('src',data.responseURL)
//         });
//     });
// })

// Promise
function httpGetAsync(theUrl, resolve) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
  };
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

const currentPromise = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/300/300',resolve)
//   let condition = true;
//   if (condition) {
//     setTimeout(() => {
//       resolve("Success");
//     }, 3000);
//   } else {
//     reject("Error");
//   }
});

const currentPromise2 = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/300/300',resolve)
});
const currentPromise3 = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/300/300',resolve)
});

// //chaining
// currentPromise
//   .then((data) => {
//     console.log(data);
//     document.getElementById('img_1').setAttribute('src',data.responseURL)
//     return currentPromise2;
//   })
//   .then((data) =>{
//     console.log(data);
//     document.getElementById('img_2').setAttribute('src',data.responseURL)
//     return currentPromise3;
//   })
//   .then((data) =>{
//     console.log(data);
//     document.getElementById('img_3').setAttribute('src',data.responseURL)
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//Async await

const executeAsync = async () => {
    const respose = await currentPromise;
    console.log(respose);
    document.getElementById('img_1').setAttribute('src',respose.responseURL)
    const respose2 = await currentPromise2;
    console.log(respose2);
    document.getElementById('img_2').setAttribute('src',respose2.responseURL)
    const respose3 = await currentPromise3;
    console.log(respose3);
    document.getElementById('img_3').setAttribute('src',respose3.responseURL)
}
executeAsync();
