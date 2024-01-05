import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';
import { getAllvideo } from '../services/AllApi';


function View({uploadvideoStatus}) {
  const [allvideos, setAllvideos] = useState('')
  const [deletadVideos,setdeletadVideos]=useState(false)

  const getuplodedVideos = async () => {
    const responce = await getAllvideo()
    console.log('getvideodata', responce)
    const { data } = responce
    setAllvideos(data)
  }
  useEffect(() => {
    getuplodedVideos()
    setdeletadVideos(false)
  }, [uploadvideoStatus,deletadVideos])
  return (
    <div >
      <Row >
        {
          allvideos.length > 0 ? 
          allvideos.map((video)=>(
            <Col sm={12} md={6} lg={4} xl={4} className='d-flex abu ' style={{marginRight:'94px'}}>
            <VideoCard setdeletadVideos={setdeletadVideos} videodata={video}></VideoCard>


          </Col>

          ))
 : <p>no vodeos to show</p>


        }
      </Row>
    </div>
  )
}

export default View