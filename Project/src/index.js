
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';

dotenv.config({ path: './env' });

connectDB(DB_NAME)







// const app = express();
// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on('error', (error) => {
//             console.log('ERROR:', error);
//             throw error
//         })

//         app.listern(process.env.PORT, () => {
//             console.log(`Server is listening on ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.error('ERROR', error)
//         throw error
//     }
// } )()