import Card from './Components/Card'
import './App.css'

function App() {
  let first = {
    name : "prabhat gupta",
    age : 19,
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  }

  let second = {
    name: "prince patel",
    age : 20,
  }
  // let third = {
  //   name : "vishal chauhan",
  //   age : 21,
  //   img: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg"
  // }

  // let MyArr= [4,6,7,8,0];


  return (
    <>
      <h1 className="bg-green-600 text-black p-4 rounded-xl mb-4" >Tailwind test</h1>
      <Card {...first} />
      <Card  {...second}/>
      {/* <Card  {...third}/> */}    
         {/* // #### OR #### */}

      <Card name="vishal chauhan" age="21"  img="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg" />
      

    </>
  )
}

export default App
