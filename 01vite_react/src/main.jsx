
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return (
    <div>
      <h1>Custom App | Vineet </h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props : {
//         href: 'https://google.com',
//         target : "_blank"
//     },
//     children : 'click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank" >Visit google</a>
)

const anotherUser = "Sam"

const reactElement = React.createElement(
  'a',
  { href: "https://google.com",
    target: "_blank"
  },
  "click me to visit google",
  anotherUser

)

createRoot(document.getElementById('root')).render(
  
  // <App />
  // <MyApp/>
  // ReactElement // Will not work 'cause render uses differnt syntax
  // anotherElement // This will work
  reactElement // This will also work
)
