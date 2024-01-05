import React, { useState } from 'react'
import Add from '../components/Add'
import Category from '../components/Category'
import View from '../components/View'
import VideoCard from '../components/VideoCard'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  const[uploadvideoStatus,setuploadvideoStatus]=useState({})
  return (
    <div>
      <div className='container mt-5 mb-5 d-flex justify-content-between align-item-center'>
        <div className='add_videos'>
          <Add setuploadvideoStatus={setuploadvideoStatus} ></Add>
        </div>
        <div>
          <h3 style={{fontSize:"30px",cursor:'pointer'}} onClick={()=>{
            navigate('/Watchhistoty')
          }}>watch history</h3>
        </div>
      </div>

      <div className='container mt-5 mb-5 d-flex justify-content-between align-item-center'>
        <div className='col-md-6 mt-5'>
          <h4>All Videos</h4>
          <View uploadvideoStatus={uploadvideoStatus}></View>
        </div>
        <div>
          <Category></Category>
        </div>
      </div>

    </div>
  )
}

export default Home