import 'axios'; 
import axios from 'axios';
let initialState = [];

axios('https://fakestoreapi.com/products/', {
  params:{
    locked: true,
  }
})
  .then( resp =>{
 
    resp.data.forEach(element => {
      initialState.push(element);  
    });
    console.log(initialState);

  })


export default (state = initialState, action) => {
  return state;
}
