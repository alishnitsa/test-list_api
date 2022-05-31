const express = require('express');
const { Data, Theme, Test, Question, Answer } = require('../models/model');

const router = express.Router()

// Theme
router.post('/theme', async (req, res) => {
  const theme = new Theme({
    name: req.body.name
  })

  try {
    const themeToSave = await theme.save()
    res.status(200).json(themeToSave)
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
})

router.get('/themes', async (req, res) => {
  try{
    const data = await Theme.find();
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

router.get('/themes/:id', async (req, res) => {
  try {
    const data = await Theme.findById(req.params.id);
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

router.patch('/themes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    console.log(id, updatedData)

    const result = await Theme.findByIdAndUpdate(
      id, updatedData, options
    )

    res.send(result)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete('/themes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Theme.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Test
router.post('/tests', async (req, res) => {
  const test = new Test({
    name: req.body.name,
    theme_id: req.body.theme_id
  })

  try {
    const testToSave = await test.save()
    res.status(200).json(testToSave)
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
})

router.get('/tests', async (req, res) => {
  try{
    const data = await Test.find();
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

router.get('/tests/:id', async (req, res) => {
  try {
    const data = await Test.findById(req.params.id);
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

router.patch('/tests/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    console.log(id, updatedData)

    const result = await Test.findByIdAndUpdate(
      id, updatedData, options
    )

    res.status(200).json(result)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete('/tests/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Test.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Question
router.post('/questions', async (req, res) => {
  const question = new Question({
    title: req.body.title,
    test_id: req.body.test_id,
    comment: req.body.comment
  })

  try {
    const questionToSave = await question.save()
    res.status(200).json(questionToSave)
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
})

router.get('/questions', async (req, res) => {
  try{
    const data = await Question.find();
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

router.get('/questions/:id', async (req, res) => {
  try {
    const data = await Question.findById(req.params.id);
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

router.patch('/questions/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    console.log(id, updatedData)

    const result = await Question.findByIdAndUpdate(
      id, updatedData, options
    )

    res.status(200).json(result)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete('/questions/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Question.findByIdAndDelete(id)
    res.send(`Document with ${data.title} has been deleted..`)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Answer
router.post('/answers', async (req, res) => {
  const answer = new Answer({
    text: req.body.text,
    question_id: req.body.question_id,
    right: req.body.right
  })

  try {
    const answerToSave = await answer.save()
    res.status(200).json(answerToSave)
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
})

router.get('/answers', async (req, res) => {
  try{
    const data = await Answer.find();
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

router.get('/answers/:id', async (req, res) => {
  try {
    const data = await Answer.findById(req.params.id);
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

router.patch('/answers/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    console.log(id, updatedData)

    const result = await Answer.findByIdAndUpdate(
      id, updatedData, options
    )

    res.status(200).json(result)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete('/answers/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Answer.findByIdAndDelete(id)
    res.send(`Document with ${data.text} has been deleted..`)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Data
router.post('/post', async (req, res) => {
  const data = new Data({
    name: req.body.name,
    age: req.body.age
  })

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
})

router.get('/getAll', async (req, res) => {
  try{
    const data = await Data.find();
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

router.get('/getOne/:id', async (req, res) => {
  try{
    console.log(typeof req.params.id)
    const data = await Data.findById(req.params.id);
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

router.patch('/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Data.findByIdAndUpdate(
            id, updatedData, options
    )

    res.send(result)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Data.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router;