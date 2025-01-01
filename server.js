const express = require('express')
const path = require('path')
const PORT = 5000

// Get filename from command line, default to analyze.html
const filename = process.argv[2] || 'analyze.html'

const app = express()

app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, filename)

  // Check if file exists
  if (!require('fs').existsSync(filePath)) {
    return res.status(404).send(`File ${filename} not found`)
  }

  res.sendFile(filePath)
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
  console.log(`Serving file: ${filename}`)
})
