import { useState } from 'react';
import {data as constantData} from '../constant/data';
import TableItems from './tableItems/TableItems';
import AddStudent from './addStudent/AddStudent'




export default function Table() {
const [data,setData]= useState([
    {
        id:1,
        name:"Raees", 
        email:"raees@gmail.com",
        rollNo:"1234",
        class:"BSCS"
    },
    {
        id:2,
        name:"Hassan Omar",
        email:"hassan@gmail.com",
        rollNo:"1235",
        class:"BSCS"
      },
      {
        id:3,
        name:"Daniyal Omar",
        email:"daniyal@gmail.com",
        rollNo:"1236",
        class:"BS-ECOM"
      }
    ])
    let onClickHandler=(id)=>{
      let newdata=data.filter(item=>item.id!==id)
      setData(newdata)
      
    }
    const onAddHandler=(student)=>{
      console.log("Student in home",student);
      setData([...data,{
        id:data.length+1,
        name:student.name,
        email:student.email,
        rollNo:student.rollNo
      }])

      
    }
  return (
    <div >
      <AddStudent onAddHandler={onAddHandler}/>
      <table>
        <tr  >
            <th>ID:</th>
            <th>Name:</th>
            <th>Email:</th>
            <th>Roll No:</th>
        </tr>
        {data.map((item)=>{
            return (
              <TableItems item={item} onclick={onClickHandler}  />
            )
        })}
      </table>
    </div>
  )
}
