import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Landing() {
  return (
    <div>
      <Container className='mt-5 mb-5 d-flex '>
        <Row>
          <Col>
            <h3> Welocome to <span style={{ color: 'orange' }}>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius delectus ab provident suscipit ratione sint, maxime magni voluptas minus numquam
              doloremque fugit quis, magnam aperiam illo tempore officiis labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo deserunt fugiat adipisci unde dolore sit omnis ipsa, commodi error nulla eveniet laboriosam nostrum, aliquam nam quo! Est, optio minus!
            </p>
            <Link to='/Home'>
            <button className='btn btn-warning mt-3'>Get Started <i class="fa-solid fa-arrow-right ms-2"></i></button>

            </Link>
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" height={'400px'} alt="" className='ms-5' />
          </Col>
        </Row>
      </Container>
      <div className='container mb-4'>
        <h3>Features</h3>
        <div className='cards d-flex align-items-center justify-content-evenly'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

        </div>
      </div>
      <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5'>
        <Row>
          <Col>
            <h3 className='text-warning mt-5 mb-5'>simple and Powerfull</h3>
            <p ><span className='fs-5 fw-bolder'>Play everything</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam beatae, dolor nobis molestias nostrum velit, fugit cumque nisi in iure perferendis veritatis eligendi similique
              praesentium error architecto debitis porro quibusdam.</p>
            <p ><span className='fs-5 fw-bolder'>Play everything</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam beatae, dolor nobis molestias nostrum velit, fugit cumque nisi in iure perferendis veritatis eligendi similique
              praesentium error architecto debitis porro quibusdam.</p>
            <p ><span className='fs-5 fw-bolder'>Play everything</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam beatae, dolor nobis molestias nostrum velit, fugit cumque nisi in iure perferendis veritatis eligendi similique
              praesentium error architecto debitis porro quibusdam.</p>



          </Col>
          <Col>
          <div className='mt-5'>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/kUVBKmGwie0?list=RDkUVBKmGwie0" title="Darajapoo slowed reverb | Darajapoo | Mappila song slowed reverb | Musikova🩶 |" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


          </div>


          </Col>

        </Row>


      </div>

    </div>
  )
}

export default Landing