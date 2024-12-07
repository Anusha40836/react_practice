import React from 'react'
import './App.css'
import UserProfile from './components/UserProfile'
const userDetailsList = [
  {
    uniqueNo:1,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"Esther Howard",
  role:"Software Engineer"
},
{
  uniqueNo:2,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
  name:"Floyd Miles",
  role:"Software Engineer"
},
{
  uniqueNo:3,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
  name:"Jacob Jones",
  role:"Software Engineer"
},
{
  uniqueNo:4,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
  name:"Devon Lane",
  role:"Software Engineer"
}

]
const App = () => {
  return (
    <div className="list-container">
      <h1 className="title">Users List</h1>
      <ul>
        {userDetailsList.map((eachItem) => (
          <UserProfile userDetails={eachItem} key={eachItem.uniqueNo}/>
        ))}
      </ul>
    </div>
    
  )
}

export default App