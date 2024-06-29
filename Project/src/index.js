
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import {app} from './app.js';

dotenv.config({ path: './env' });

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    })
})
.catch((err) => { // Make sure to pass 'err' as a parameter to catch any errors
    console.log('MONGO db connection failed !!!', err);
    console.error(err);
    throw err;
});







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