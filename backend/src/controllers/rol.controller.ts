import { Request, Response } from 'express';
import { Rol, RoleI } from '../models/Rol';

export class RolController {

    public async getAll(req: Request, res: Response) {
        try {
            const rol = req.headers['roleId'];
            if (rol !== '1') {
                res.status(401).json({ message: 'No tienes permiso para realizar esta acción' });
                return;
            }
            const result: RoleI[] = await Rol.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error en servidor', error });
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const rol = req.headers['roleId'];
            if (rol !== '1') {
                res.status(401).json({ message: 'No tienes permiso para realizar esta acción' });
                return;
            }
            const { id } = req.params;
            const result = await Rol.findByPk(id) as RoleI;
            if (result) {
                res.status(200).json(result);
                return;
            }
            res.status(404).json({ message: 'Rol no encontrado' });
        } catch (error) {
            res.status(500).json({ message: 'Error en servidor', error });
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const rol = req.headers['roleId'];
            if (rol !== '1') {
                res.status(401).json({ message: 'No tienes permiso para realizar esta acción' });
                return;
            }
            const data: RoleI = req.body;
            const result = await Rol.create({...data});
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error en servidor', error });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const rol = req.headers['roleId'];
            if (rol !== '1') {
                res.status(401).json({ message: 'No tienes permiso para realizar esta acción' });
                return;
            }
            const { id } = req.params;
            const data: RoleI = req.body;
            const result = await Rol.update({...data}, { where: { id } });
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error en servidor', error });
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const rol = req.headers['roleId'];
            if (rol !== '1') {
                res.status(401).json({ message: 'No tienes permiso para realizar esta acción' });
                return;
            }
            const { id } = req.params;
            const result = await Rol.destroy({ where: { id } });
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error en servidor', error });
        }
    }
}