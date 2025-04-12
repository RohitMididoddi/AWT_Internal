import React from 'react';
// import Login from './component/Login'
class App extends React.Component{
  constructor(){
    super();
    
  }
 
  render(){
    return(

      <>
        <h1><center>
          E-commerce Website
          </center>
          </h1>
          <form>

          <input type="text" placeholder='Enter the product id' required="true"></input>
          <input type="text" placeholder='Enter the product description'></input>
          <input type="number" placeholder='Enter the product price' required="true"></input>
          <input type="text" placeholder='Enter the product category'></input>
          <input type="number" placeholder='Enter the product stock' defaultValue={0}></input>
        <button onClick="" id="add">ADD</button>
          </form>
      </>
    )
        

  }
  
    
}
export default App;