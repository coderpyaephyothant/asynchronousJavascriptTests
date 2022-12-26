
//promise
const getTodos2 = (resource, callback) =>{
    return new Promise(
        (resolve,reject)=>{
                const myRequest= new XMLHttpRequest();
                myRequest.addEventListener('readystatechange', ()=>{
                if(myRequest.readyState === 4 && myRequest.status === 200){
                    // callback(undefined, myRequest.responseText);
                    const data = JSON.parse(
                        myRequest.responseText
                    )
                    resolve(data, 'from 200 OK')
                }else if(myRequest.readyState === 4){
                    // callback('could not fetch data Now', undefined);
                    reject('getting error')
                }
                });
                myRequest.open('GET',resource);
                myRequest.send();
            }
        );
};

// promise chaining test

// getTodos2('food.json').then(data => {
//     console.log('promise1 resolve data', data);
//     return getTodos2('myData.json');
// }).then(data => {
//     console.log('promise2 resolve data',data);
//     return getTodos2('toDos.json');
// }).then(data => {
//     console.log('promise3 resolved data, finished!',data);
// }).catch(
//     error => {
//         console.log('promise reject data', error)
//     }
// );
    



