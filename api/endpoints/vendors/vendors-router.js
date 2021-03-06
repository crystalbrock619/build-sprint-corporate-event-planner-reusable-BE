const router = require('express').Router()
const dbModel = require('./vendors-model')


router
  .get('/',(req,res)=>{
    dbModel.findAll()
    .then(ven => {
        res.status(200).json(ven)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router
  .get('/:id',(req,res)=>{
    const {id}=req.params

    dbModel.findAllById(id)
    .then(ven => {
        res.status(200).json(ven)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router
  .get('/events/:id',(req,res)=>{
    const {id}=req.params

    dbModel.findAllByEventId(id)
    .then(event => {
        res.status(200).json(event)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message:"this is an error:", err})
    })
})
  
router
  .post('/',(req,res)=>{
    const {body}=req

    dbModel.add(body)
    .then(ven => {
        res.status(201).json(body)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router
  .put('/:id',(req,res)=>{
    const {id}=req.params
    const {body}=req
  
    dbModel.editById(id, body)
    .then(ven => {
        res.status(200).json(body)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router
  .delete('/:id',(req,res)=>{
    const {id}=req.params
    
    dbModel.remove(id)
    .then(() => res.sendStatus(204))
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports=router
