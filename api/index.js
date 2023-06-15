const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');
const multer = require('multer');
const path = require('path');

dotenv.config();

const port = process.env.PORT || 8000;
const mongodbURI = process.env.MONGODB_URI;

mongoose
  .connect(mongodbURI)
  .then(() => {
    console.log("Connection Successful with MongoDB");
  })
  .catch((err) => console.log("Connection error:", err));

app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File upload successfully");
  } catch (error) {
    console.log(error);
  }
});

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

app.listen(port, () => {
  console.log(`Backend server is running at port ${port}`);
});
