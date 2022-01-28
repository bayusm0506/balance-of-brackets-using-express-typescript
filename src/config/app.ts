import express, { Express } from 'express';
import morgan from 'morgan';
import routes from '../routes/bracket'

const app: Express = express();

// Logging
app.use(morgan('dev'));

// Parse the request
app.use(express.urlencoded({ extended: false }));

// Takes care of JSON data
app.use(express.json());

// Rules of our API
app.use((req, res, next) => {
    // Set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // Set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Accept, Authorization');
    // Set the CORS method headers
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET PATCH POST DELETE')
        return res.status(200).json({});
    }
    next();
})

// Routes
app.use('/api', routes);

// Error handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    return res.status(404).json({
        message: error.message
    })
});

export = app