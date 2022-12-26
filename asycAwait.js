// const getData = async () => {
// };

// const promiseFromGetData = getData();
// console.log(promiseFromGetData);

const getData = async () => {
const response = await fetch('food.json');
// console.log('response from await fetch', response);
const data = await response.json();
console.log('response.json data received', data);
const response2 = await fetch('myData.json');
const data2 = await response2.json();
console.log('response2 json data2 received', data2);
return data2;
};

//for testing with return inside in getData async function. . . .

// const asyncData = getData(); 
// console.log('async data',asyncData)

console.log('test console for blocking or non blocking codes 1');
console.log('test console for blocking or non blocking codes 2');

getData().then(
    data => {
        console.log('resolved data at return data2 final result .then method', data);
    }
).catch(
    error => {
        console.log('rejected data', error);
    }
)

console.log('test console for blocking or non blocking codes 3');
console.log('test console for blocking or non blocking codes 4');
