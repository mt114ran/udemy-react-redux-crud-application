import React from "react";
import PropTypes from "prop-types";

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
    { name: "Hanako", age: 7 },
    { name: "NoName", age: 3 },
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User key={index} name={profiles.name} age={profiles.age} />
        })
      }
    </div>
  )
}
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.prototype = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

export default App;
