import mongoose from 'mongoose'

mongoose.Promise = global.Promise

mongoose.connect(config.mongoUri, { useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true } )
 
mongoose.connection.on('error', () => {
 throw new Error(`unable to connect to database: ${mongoUri}`)
})
