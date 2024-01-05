import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getaddtoHistory } from '../services/AllApi'
import Button from 'react-bootstrap/Button';


function Watchhistoty() {
  const[historyDeleteStatus,sethistoryDeleteStatus]=useState(false)
  const [allwachhistory,setallwachhistory]=useState('')
  const getwatchHistoty=async()=>{
    const response=await getaddtoHistory()
    console.log('======wachhistory=====',response)
    const {data}=response
    setallwachhistory(data)
  } 
  const removehis=(id)=>{
    const response=deleteHistory(id)
    sethistoryDeleteStatus(true)

  }
  useEffect(() => {
    getwatchHistoty()
    sethistoryDeleteStatus(false)
  }, [historyDeleteStatus])
  console.log('itachi',allwachhistory)

  return (
    <div>
      <div  className='container mt-5 d-flex justify-content-between mb-5'>
        <h5>Watch Histoty</h5>
        <Link style={{textDecoration:'none',color:'white', fontSize:'15px',fontWeight:'600px'}} to='/'><i class="fa-solid fa-arrow-left pe-2"></i>Back to Home</Link>
      </div>
      
      <table className='table container mb-5'>
        <thead>

          <tr>
            <th>#</th>
            <th>caption</th>
            <th>Url</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {
            allwachhistory.length>0?
            allwachhistory.map((data)=>(
              <tr>
              <td>{data.id}</td>
              <td>{data.caption}</td>
              <td>{data.empeddedLink}</td>
              <td>{data.timestamp}</td>
              <td><Button variant="danger" className='ms-5' onClick={()=>{removehis(data.id)}}><i class="fa-solid fa-trash"></i></Button></td>
            </tr>
  


            )): <h5>no data to show</h5>


          }
          
        </tbody>
      </table>
    </div>
  )
}

export default Watchhistoty