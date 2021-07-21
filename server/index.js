import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRouter from './routes/post.route.js'
import userRouter from './routes/user.route.js'
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send("Hello to Tuong memories apps")
})
const CONNECTION_URL = process.env.CONNECTION_URL;
// const CONNECTION_URL = 'mongodb+srv://huykiengabc9:huykiengabc9123@cluster0.qe11u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

