import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import { MdOutlineAddBox , MdOutlineDelete} from 'react-icons/md'

const BooksTable = ({books}) => {
  return(
    <div className="w-full">
       
    <div className="flex border-b border-slate-600 font-bold">
      <div className="flex-1 border border-slate-600 rounded-md text-center">No</div>
      <div className="flex-1 border border-slate-600 rounded-md text-center">Title</div>
      <div className="flex-1 border border-slate-600 rounded-md text-center max-md:hidden">Author</div>
      <div className="flex-1 border border-slate-600 rounded-md text-center max-md:hidden">Publish Year</div>
      <div className="flex-1 border border-slate-600 rounded-md text-center">Operations</div>
    </div>
  

    {books.map((book, index) => (
      <div key={book._id} className="flex h-8 border-b border-slate-700">
        <div className="flex-1 border p-2 border-slate-700 rounded-md text-center">{index + 1}</div>
        <div className="flex-1 border p-2 border-slate-700 rounded-md text-center">{book.title}</div>
        <div className="flex-1 border p-2 border-slate-700 rounded-md text-center max-md:hidden">{book.author}</div>
        <div className="flex-1 border p-2 border-slate-700 rounded-md text-center max-md:hidden">{book.publishYear}</div>
        <div className="flex-1 border border-slate-700 rounded-md text-center">
          <div className="flex justify-center gap-x-4">
            <Link to={`/books/details/${book._id}`}>
              <BsInfoCircle className="text-2xl text-green-800" />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className="text-2xl text-yellow-600" />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className="text-2xl text-red-600" />
            </Link>
          </div>
        </div>
      </div>
    ))}

  </div>
  

  )


}

export default BooksTable
