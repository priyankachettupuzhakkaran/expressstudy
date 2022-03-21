const readline=require('readline')
const fs=require('fs')
var path=require('path')
const express = require('express')
const app = express()
const port = 3000
app.use('/static', express.static(path.join('F:','Desktop Backup','priyanka')))
app.get('/questions', (req, res) => {
  console.log("hello world")
  console.log(path.join('F:','Desktop Backup','priyanka','objectout.txt'))
  res.sendFile(path.join('F:','Desktop Backup','priyanka','objectout.txt'))

})
app.get('/questions/1', (req, res) => {
  console.log("hello world")
  console.log(path.join('F:','Desktop Backup','priyanka','objectout.txt'))
  res.readFile(path.join('F:','Desktop Backup','priyanka','objectout.txt'))

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})