import { Application } from "express";
import { RolController } from "../controllers/rol.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class RolRoutes {
    private rolController: RolController = new RolController();
    private auth: AuthMiddleware = new AuthMiddleware();

    routes(app: Application){
        app.route('/rol')
            .get(this.auth.verifyToken, this.rolController.getAll)
            .post(this.auth.verifyToken, this.rolController.create);

        app.route('/rol/:id')
            .get(this.auth.verifyToken, this.rolController.getOne)
            .put(this.auth.verifyToken, this.rolController.update)
            .delete(this.auth.verifyToken, this.rolController.delete);
    }
}