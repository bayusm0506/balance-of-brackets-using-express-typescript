import http from 'http';
import app from './config/app';

// Server
const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 2022;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));