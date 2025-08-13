const { sql } = require('../../../sqlserver.js');

class Usuarios {
    static get tableName() {
        return 'Usuarios';
    }

    constructor(data) {
        this.usuario_id = data.usuario_id;
        this.nombre_usuario = data.nombre_usuario;
        this.contrasena_hash = data.contrasena_hash;
        this.rol_id = data.rol_id;
        this.fecha_creacion = data.fecha_creacion;
    }

    static get sqlSchema() {
        return {
            usuario_id: { type: sql.Int },
            nombre_usuario: { type: sql.VarChar },
            contrasena_hash: { type: sql.VarChar },
            rol_id: { type: sql.Int },
            fecha_creacion: { type: sql.DateTime2 }
        };
    }
}
module.exports.Usuarios = Usuarios;