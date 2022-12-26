
const getToDos = (resource,callback) => {
    const myRequest= new XMLHttpRequest();
myRequest.addEventListener('readystatechange', ()=>{
    // console.log( myRequest, myRequest.readyState);
    if(myRequest.readyState === 4 && myRequest.status === 200){
        // console.log( myRequest.responseText);
        callback(undefined, myRequest.responseText);
    }else if(myRequest.readyState === 4){
        // console.log('canot fetch data Now. . . . ');
        callback('could not fetch data Now', undefined);
    }
});
// myRequest.open('GET','https://jsonplaceholder.typicode.com/todos/');
// myRequest.open('GET','toDos.json');
myRequest.open('GET',resource);


myRequest.send();
};

// getToDos('food.json',
//     (err,data) => {
//         console.log('callback fired. . . .');
//         if(err){
//             console.log(err)
//         }else{
//             console.log(data)
//         }
//     }
// );

//call back hell . . . . 

// getToDos( 'food.json',
//     (err,data)=> {
//         console.log(' first callback fired . . . .');
//         console.log(data);
//         getToDos( 'myData.json',
//             (err,data)=>{
//                 console.log('second callback is fired . . . .');
//                 console.log(data);
//                 getToDos( 'food.json',
//                     (err,data)=>{
//                         console.log('third callback is fired. . . .. ');
//                         console.log(data);
//                     }
//                 );
//         });
// }
// );

// promises. . . . .

    const getSomething = () => {
        return new Promise(
            (resolve, reject) => {
                //fetch something. . . 
                resolve('this is resolve data');
                // reject('this is reject data');
            }
        );
    };

    // getSomething().then(
    //     (data)=>{
    //         console.log(data,'from resolve')
    //     },
    //     (error)=>{
    //         console.log(error,'from reject')
    //     }
    // );

    getSomething().then(
        (data) => {
            console.log(data, 'from resolve')
        }
    ).catch(
        error => {
            console.log(error,'from reject')
        }
    );