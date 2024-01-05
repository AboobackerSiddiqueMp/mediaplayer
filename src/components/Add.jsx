import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploaddVideo } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function Add({setuploadvideoStatus}) {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [video, setvideo] = useState({
        id: "",
        caption: "",
        url: "",
        empeddedLink: ""

    });
    const handileSubmit = async () => {
        const { id, caption, url, empeddedLink } = video
        if (!id || !caption || !url || !empeddedLink) {
            toast.warn('pls fill the form completly', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });        }
        else {
            const responce = await uploaddVideo(video)
            console.log(responce)
            if (responce.status == 201) {
                toast.success(`succesfully add the video ${caption} `, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setuploadvideoStatus(responce.data)
                handleClose()
            }
            else {
                toast.error('a error occured'
                    );            }



        }

    }

    const embeddedlink = (e) => {
        const { value } = e.target
        console.log('abu', value)
        let link = `https://www.youtube.com/embed/${value.slice(-11)}`;
        setvideo({ ...video, empeddedLink: link })

    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <h5>Upload new Video</h5>
                <button className='btn' onClick={handleShow}><i class="fa-solid fa-cloud-arrow-up fs-5 " style={{ color: 'white' }}></i></button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><i class="fa-solid fa-film text-warning me-3"></i> Upload video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    plese fill the form
                    <Form className='border border-secondary p-3 rounded'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter video id" onChange={(e) => setvideo({ ...video, id: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Video caption" onChange={(e) => setvideo({ ...video, caption: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter video Image Url" onChange={(e) => setvideo({ ...video, url: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter video Youtue Link" onChange={(e) => embeddedlink(e)} />
                        </Form.Group>
                    </Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" className='btn btn-warning' onClick={handileSubmit}>Upload</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                position="top-center"
                theme="light"
            />

        </div>
    )
}

export default Add

