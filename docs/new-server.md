Jeff-411: How can I modify this server so the name of the file to be served can be set from the terminal

GitHub Copilot: Let's create a solution that allows passing the filename as a command line argument.

Steps:

1. Get filename from command line arguments
2. Add validation for the filename
3. Update the route to use the dynamic filename
4. Add error handling for file not found

```javascript
const express = require('express')
const path = require('path')

// Get filename from command line, default to index.html
const filename = process.argv[2] || 'index.html'

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

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
  console.log(`Serving file: ${filename}`)
})
```

To run the server with a specific file:

```bash
node appServer.js myfile.html
```

Or use default index.html:

```bash
node appServer.js
```
