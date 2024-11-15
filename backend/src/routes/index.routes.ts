import { Application } from "express";
import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./usuario.routes";
import { ObservacionRoutes } from "./observacion.routes";
import { ZonaRoutes } from "./zona.routes";
import { RolRoutes } from "./rol.routes";

export class Routes {
    private authRoutes = new AuthRoutes();
    private userRoutes = new UserRoutes();
    private observacionRoutes = new ObservacionRoutes();
    private zonaRoutes = new ZonaRoutes();
    private rolRoutes = new RolRoutes();

    routes(app: Application) {
        this.authRoutes.routes(app);
        this.userRoutes.routes(app);
        this.observacionRoutes.routes(app);
        this.zonaRoutes.routes(app);
        this.rolRoutes.routes(app);
    }
}
