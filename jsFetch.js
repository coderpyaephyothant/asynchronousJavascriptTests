// fetch data with promise chaining

// fetch(
//     'food.json'
// ).then(
//  (response) => {
//     console.log('resolved data from food.json()', response);
//     return response.json();
//  }   
// ).then(
//     data => {
//         console.log('Response resolved Data json() received', data);
//         return fetch('myData.json');
//     }
// ).then(
//     (response) => {
//         console.log('resolved from myData.json api', response);
//         return response.json();
//     }
// ).then(
//     data => {
//         console.log('Response data from resolved json()', data);
//     }
// )
// .catch(
//     error => {
//         console.log('rejected', error)
//     }
// )