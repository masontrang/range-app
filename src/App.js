import "./App.css";
import Todo from './components/Todo'
// import Modal from "./components/Modal";
// import Backdrop from "./components/Backdrop";

// function TableHeader() {
//   return (
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Job</th>
//         <th>Remove</th>
//       </tr>
//     </thead>
//   );
// }

// function TableBody() {
//   return (
//     <tr>
//       <td>Name</td>
//       <td>Job</td>
//     </tr>
//   );
// }



function App() {
  return (
    <div className="app">
      <h1>My List</h1>
      <Todo text='Learn React' />
      <br></br>
      <Todo text='Beat React'/>
      <br></br>
      <Todo text='Win React'/>
      {/* <Modal /> */}
      {/* <Backdrop /> */}
    </div>
  );
}

export default App;



//<Todo text='Learn React'/>
//key/value pairs (text / learn react )
