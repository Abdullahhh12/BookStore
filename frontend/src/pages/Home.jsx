import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox , MdOutlineDelete} from 'react-icons/md'
import BooksCard from '../components/home/BooksCard'
import BooksTable from '../components/home/BooksTable'



const Home = () => {
    const [books, setbooks] = useState([])
    const [loading, setloading] = useState(false)
    const [showType, setshowType] = useState('card')
    

    useEffect(() => {
    axios.get('http://localhost:5000/books')
  .then(response => {
    setbooks(response.data.data)
    setloading(false);
  })
  .catch(error => {
    console.log(error);
    setloading(false);
  });
     
    }, [])
    
  return (
    <div className='p-4'>

      <div className='flex justify-center'>
        <button
        className=' bg-sky-300 border-2 border-black px-2 mx-2 rounded ' 
        onClick={()=>setshowType('table')}
        >Table</button>

        <button
        className=' bg-sky-300 border-2 border-black px-2 mx-2 rounded ' 
        onClick={()=>setshowType('cards')}
        >Card</button>
      </div>

      <div className='flex justify-between items-center'>
        <h1 className='text-3xl  my-8 '>Books List</h1>
        <Link to='/books/create'>
         <MdOutlineAddBox className='text-sky-800 text-4xl'/>
        </Link>
      </div>
      {loading ?  <Spinner/>: showType ==='table'?( <BooksTable books={books}/>):( <BooksCard books={books}/>) }

    </div>
  )
}

export default Home