export interface Observacion{
    id: number;
    ph: number;
    oxigeno: number;
    amonio: number;
    nitrato: number;
    nitrito: number;
    temperatura: number;
    fecha: Date;
    zonaId: number;
    usuarioId: number;
}

export interface Zona {
    id: number;
    nombre: string;
    ubicacion: string;
    descripcion: string;
}