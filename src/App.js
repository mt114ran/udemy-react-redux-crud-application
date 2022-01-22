import React from "react";

// function App() {
//   return (
//     <React.Fragment>
//     <label htmlFor="bar">bar</label>
//     <input type="text" onChange={() => {console.log("I am clicked!")}}/>
//     </React.Fragment>

//   )

// }

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 6 },
    { name: "NoName"},
  ]
  return (
    <div>
      {
        profiles.map((profiles,index) => {
          return <User key={index} name={profiles.name} age={profiles.age} />
        })
      }
    </div>
  )
}
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

export default App;
