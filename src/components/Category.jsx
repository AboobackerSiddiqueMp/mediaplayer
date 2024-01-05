import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createCategory, deleteCategory, getAllCategory } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Category() {
  const [show, setShow] = useState(false);
  const [allcategorys,setallcategorys]=useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryName,setcategoryName]=useState()
  console.log('==category===',categoryName)
  const handilecategory=async()=>{
    if(categoryName){
        let body = {
            categoryName:categoryName,
            allVideos:[]

        }
        const response=await createCategory(body)
        if(response.status==201){
            toast.success(`succesfully add the video  `, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        handleClose()
        }
    

    }
    else{
        toast.warn('pls fill the form completly', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });       


    }
    

  }
  const deleteCat=(id)=>{
    const response=deleteCategory(id)
    getAllCategorydata()


  }
  const getAllCategorydata=async()=>{
    const response=await getAllCategory()
    const {data}= response
    setallcategorys(data)


  }
  useEffect(()=>{
    getAllCategorydata()
  },[])
  return (
    <div>
      <div>
      <button className='btn btn-warning' onClick={handleShow}>add new category</button>

      </div>
      <div className='ms-1'>
    

        {
            allcategorys.length>0?
            allcategorys.map((data)=>(
                <div className='m-5 border border-secondary rounded p-3'>
                <div className='d-flex justify-content-center align-items-center '>
                    <h6>{data.categoryName}</h6>
                    <button className='btn btn-danger ms-2' onClick={()=>{deleteCat(data.id)}}><i class="fa-solid fa-trash "></i></button>
                </div>
    
            </div>


            ))
 :<h2>no data to show</h2>

        }
        
      </div>
      <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><i class="fa-solid fa-layer-group text-warning me-3"></i> add category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    plese fill the form
                    <Form className='border border-secondary p-3 rounded'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Category name" onChange={(e)=>setcategoryName(e.target.value)} />
                        </Form.Group>
                    </Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" className='btn btn-warning' onClick={handilecategory}>add</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                position="top-center"
                theme="light"
            />



    </div>
  )
}

export default Category