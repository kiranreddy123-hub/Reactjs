import React, { useState } from 'react'
import Inbox from './Inbox'
import Next7Days from './Next7Days'
import Today from './Today'

const list =[
  {number:1,title:"Upload React Project",date:new Date("02/08/2023")},
  {number:2,title:"Elitmus test on online", date:new Date("02/11/2023")},
  {number:3,title:"coursera course completion",date:new Date("02/15/2023")}
]

export default function MainSection(props) {
  const [filteredList,setFilteredlist] = useState(list)
  const addToList =(obj)=>{
    list.push(obj)
    setFilteredlist(list)
  }
  return (
    <div className='main-section'>
      {props.active === "INBOX" && (
        <Inbox list={filteredList} append={addToList}/>
      )}
      {props.active === "TODAY" && <Today list={filteredList}/>}
      {props.active === "NEXT" && <Next7Days list={filteredList}/>}
      
    </div>
  )
}
