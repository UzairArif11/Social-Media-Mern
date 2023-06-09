const express = require('express');
const app = express();
const mongoose =require('mongoose');
const helmet =require('helmet')
const dotenv =require('dotenv');
const morgan = require('morgan');
const cors = require('cors'); // Import the cors package
dotenv.config();
const userRoute=require('./routes/users')
const authRoute=require('./routes/auth')
const postRoute=require('./routes/post')
const port = process.env.port;
 
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("Connection Successful with MongoDB");
})
.catch((err) => console.log("no connection",err));

//middleware
app.use(cors()); // Enable CORS
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use('/api/users',userRoute)
app.use('/api/auth',authRoute)
app.use('/api/posts',postRoute)


app.listen(8000,()=>{
    console.log(`Backend server is running! at port ${port}`)
});