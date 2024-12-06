import express from 'express'
import { Book } from '../models/booksModel.js';

const router = express.Router();


//get all books
router.get('/',async (req,res)=>{
    
    try {
        const books = await Book.find({})
        return res.status(200).json({
            count:books.length,
            data: books
        });
       
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message})      
    }
    
})

//get a single book
router.get('/:id',async (req,res)=>{
    
    try {

        const {id} = req.params;    
        const book = await Book.findById(id);
        return res.status(200).json(book);
       
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message})      
    }
    
})

//create books
router.post("/",async (req,res)=>{
    try {
        const newBook ={
            title:req.body.title,
            author:req.body.author,
            story:req.body.story,
            publishYear:req.body.publishYear
        };

        const book = await Book.create(newBook);
        res.send(newBook)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message})
        
    }
})


//update a book
router.put("/:id",async (req,res)=>{
    try {

        const {id}= req.params;
        const result = await Book.findByIdAndUpdate(id,req.body);

        if(!result){
            return res.status(404).send({message:"Book not found"})
        }
 
        return res.status(200).send({message:"Book updated"})
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message})
 
    }
})

//delete a book
router.delete("/:id",async (req,res)=>{
    try {

        const {id}= req.params;
        const result = await Book.findByIdAndDelete(id,req.body);

        if(!result){
            return res.status(404).send({message:"Book not found"})
        }
 
        return res.status(200).send({message:"Book Deleted"})
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message})
 
    }
})


export default router;