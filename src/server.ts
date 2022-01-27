import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/bracket'

const router: Express = express();

// Logging
router.use(morgan('dev'));

// Parse the request
router.use(express.urlencoded({ extended: false }));

// Takes care of JSON data
router.use(express.json());

// Rules of our API
router.use((req, res, next) => {
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
router.use('/', routes);

// Error handling
router.use((req, res, next) => {
    const error = new Error('Not Found');
    return res.status(404).json({
        message: error.message
    })
})

// Server
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6161;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));