import express from 'express'
import mongoose from 'mongoose'

const app = express()

const PORT = 8000
const MONGODB_URI = 'mongodb://127.0.0.1:27017/octofit-tracker'

app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

const start = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    app.listen(PORT, () => {
      console.log(`Backend running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start backend:', error)
    process.exit(1)
  }
}

void start()
