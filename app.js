const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Welcome to building Node applications with Express JS!')
})

app.listen(port, () => {
  console.log('Server is running on port ${port}')
})
