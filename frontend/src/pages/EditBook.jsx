import React, { useEffect, useState } from 'react'
import { useNavigate , useParams} from 'react-router-dom'
import BackButton from '../components/BackButton'
import axios from 'axios'
import Spinner from '../components/Spinner'

const EditBook = () => {
  const [title, settitle] = useState()
  const [author, setauthor] = useState()
  const [story, setstory] = useState()
  const [publishYear, setpublishYear] = useState()
  const [loading, setloading] = useState(false)
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    setloading(true);
    axios.get(`http://localhost:5000/books/${id}`)
    .then((response)=>{
      setauthor(response.data.author);
      setstory(response.data.story);
      setpublishYear(response.data.publishYear);
      settitle(response.data.title);
      setloading(false);
    }).catch((error)=>{
      setloading(false);
      alert('An error happend. please Check Console');
      console.log(error);
    })
  },[])

  const handleEditBook = ()=>{

    const data = {
      title,
      author,
      story,
      publishYear,
    };
    setloading(true);
    axios.put(`http://localhost:5000/books/${id}`,data)
    .then(()=>{
      setloading(false);
      navigate('/');
    })
    .catch((error)=>{
      setloading(false)
      alert("Error.check console")
      console.log(error);
      
    })

  }

  return (
    <div className='p-4 '>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner/>:""}

      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
          type='text'
          value={title}
          onChange={(e)=>settitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py2 w-full'
          />
        </div>
        <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
          type='text'
          value={author}
          onChange={(e)=>setauthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py2 w-full'
          />
        </div>
        <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Story</label>
          <input
          type='textarea'
          value={story}
          onChange={(e)=>setauthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py2 w-full'
          />
        </div>
        <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Publish year</label>
          <input
          type='number'
          value={publishYear}
          onChange={(e)=>setpublishYear(e.target.value)}
          className='border-2 border-gray-500 px-4 py2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-500 m-8' onClick={handleEditBook}>
          Save
        </button>

      </div>

      </div>
  )
}
export default EditBook