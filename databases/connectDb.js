const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/notes-app`)
    console.log(`Database connected successfully! :D`)
  } catch (error) {
      console.error(`Database connection unsuccessful. :( `, error)
      process.exit(1)
  }
}

module.exports = connectDb