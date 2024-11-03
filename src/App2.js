import React, {useState, useEffect} from 'react'

function App() {

//   const[data,setData] = useState([{}])

//   useEffect(() => {
//     fetch("/members").then(
//       res => res.json()
//     ).then(
//         data => {
//           setData(data)
//           console.log(data)
//       }
//     )
//   }, [])

//   return (
//     <div>
      
//         {(typeof data.members === 'undefined') ? (
//             <p>Loading...</p>
//         ) : (
//           data.members.map((member, i) => (
//               <p key={i} > {member} </p>
//           ))
//         )}
//     </div>
//   )
// }

  // BACKEND API

  // returning string in useState
  const [message, setMessage] = useState("");

useEffect(() => {
  fetch("/home")
    .then(res => res.json())
    .then(message => {
      setMessage(message);
      // console.log(message);
    });
}, []);

  // HTML API
const [htmlContent, setHtmlContent] = useState("");

useEffect(() => {
  fetch(`${process.env.PUBLIC_URL}/home.html`)
    .then(res => res.text())
    .then((html) => {
      setHtmlContent(html); // Store the HTML in state
    })
    .catch((error) => console.error("Error loading HTML:", error));
}, []);

return (
  <div className="App">
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  </div>
);


}



export default App