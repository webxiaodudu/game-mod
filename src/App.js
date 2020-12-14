import {useState} from 'react'

function App () {
 const [count,setCount] = useState(0)
 
 const increament = () => {
  setCount(count+1)
 }
 return ( <div>
   <h1>{count}</h1>
    <button onClick={increament}>增加</button>
   </div>)
 
}
export default App;
