import 'dotenv/config';
import 'reflect-metadata';
import { createServer } from 'node:http';
import app from './app';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://lucamercante_db_user:ciaociao999...@cluster0.6hwwica.mongodb.net/calcio_backend?appName=Cluster0';

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB Atlas");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });