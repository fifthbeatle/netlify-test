const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to building Node applications with Express JS!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
