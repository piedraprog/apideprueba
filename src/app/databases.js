import mongoose from 'mongoose';
import config from './config';

(async () =>{
    const db = await mongoose.connect( config.mongoURL,
    {
        useNewUrlParser:true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("database is conected to: ", db.connection.name);
})();