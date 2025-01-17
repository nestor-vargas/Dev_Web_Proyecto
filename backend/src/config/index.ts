import express, { Application } from 'express';
import morgan from 'morgan';
import { Routes } from '../routes/index.routes';
import cors from 'cors';
import { ApiErrorHandlerMiddleware } from '../middlewares/errorHandler.middleware';

export class App {
    app: Application;
    public routePrv: Routes = new Routes();
    private apiHandler = new ApiErrorHandlerMiddleware();

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(this.apiHandler.errorHandler);
    }

   async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

    private routes() {
        this.routePrv.routes(this.app);
    }
}
