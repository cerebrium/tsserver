import * as dotenv from 'dotenv';
dotenv.config();
import * as mongoose from 'mongoose'

// mongodb atlass url
const url = process.env.MONGO_STRING;

mongoose.connect(url, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log(`Connected to mongo Atlas`));

