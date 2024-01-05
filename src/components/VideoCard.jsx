import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoHistory, deletevideo } from '../services/AllApi';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';



function VideoCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    const { caption, url, empeddedLink } = props.videodata
    const Today = new Date;
    let timestamp = new Intl.DateTimeFormat('en-us', {
      year: 'numeric',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(Today)
    console.log('jjjjjjjjjjjjjjjjjj', timestamp)
    let videoDetails={
      caption:caption,
      empeddedLink:empeddedLink,
      url:url,
      timestamp:timestamp
    }
    await addtoHistory(videoDetails)


  }

  console.log('ccc', props)
  const removeVideo = async (id) => {
    const response = await deletevideo(id)
    props.setdeletadVideos(true)
  }
  return (
    <div >
      <Card style={{ width: '18rem' }} onClick={handleShow}>
        <Card.Img
          variant="top"
          style={{ objectFit: 'cover', height: '250px', width: '100%' }}
          src={props.videodata.url} />
        <Card.Body >
          <div className='d-flex  align-items-center justify-content-evenly'>
            <h6>{props.videodata.caption}</h6>
            <Button variant="danger" className='ms-5' onClick={() => removeVideo(props.videodata.id)}><i class="fa-solid fa-trash"></i></Button>



          </div>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.videodata.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="1045" height="366" src={props.videodata.empeddedLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ width: '468px' }}></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default VideoCard