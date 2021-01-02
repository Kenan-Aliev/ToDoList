const mongoose = require('mongoose')

const url = 'mongodb+srv://Kenan:K2VRRTZFQ5QJ@cluster0.lgrbc.mongodb.net/example'

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })

const todosSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String
})

const todosModel = mongoose.model('todos', todosSchema)

exports.getToDoList = async (req, res) => {
  const todos = await todosModel.find({})
  res.json(todos)
}

exports.postToDo = async (req, res) => {
  const { title, description, date } = req.body.newToDo
  if (title !== '' && description !== '') {
    // eslint-disable-next-line new-cap
    await new todosModel({ title, description, date }).save()
    res.json({ message: 'todo is posted' })
  }
  res.json({ message: 'enter title and description' })
}

exports.patchToDo = async (req, res) => {
  const { _id, title, description, date } = req.body.newToDo
  await todosModel.findOneAndUpdate({ _id }, { title, description, date })
  res.json({ message: 'todo is patched' })
}

exports.deleteToDo=async(req,res)=>{
  const {id}=req.params
  await todosModel.findOneAndRemove({_id:id})
  res.json({message:'todo is deleted'})
}
