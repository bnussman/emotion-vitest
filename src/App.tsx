import './App.css'
import { useState } from 'react'
import { Box, Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      This is a test {count}
      <Button onClick={() => setCount(count => count + 1)}>add</Button>
    </Box>
  )
}

export default App
