import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const DeleteBook = () => {
  const [loading, setloading] = useState(false);
  const [title, settitle] = useState()
  
  const navigate = useNavigate();
  const {id} = useParams();

useEffect(() => {
  axios.get(`http://localhost:5000/books/${id}`)
  .then((response)=>{
    setloading(true)
    settitle(response.data.title);
    setloading(false);
  }).catch((error)=>{
    setloading(false);
    alert('An error happend. please Check Console');
    console.log(error);
  })
}, [])

  
  const handleDeleteBook =()=>{
    setloading(true);
    axios.delete(`http://localhost:5000/books/${id}`)
    .then(()=>{
      setloading(false)
      navigate('/'); 
    })
    .catch((error)=>{
      setloading(false);
      alert("error,check console")
      console.log(error);
      
    })
  }
    return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/>:""}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <h3> Are you sure you want to delete {title} book ?</h3>

        <button className=' m-4 bg-red-500 w-[50%]  text-white p-2 rounded ' onClick={handleDeleteBook}>
          Delete 
        </button>
      </div>
    </div>
  )
}

export default DeleteBook
