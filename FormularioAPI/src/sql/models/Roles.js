const { sql } = require('../../../sqlserver.js');

class Roles {
    static get tableName() {
        return 'Roles';
    }

    constructor(data) {
        this.rol_id = data.rol_id;
        this.nombre_rol = data.nombre_rol;
    }

    static get sqlSchema() {
        return {
            rol_id: { type: sql.Int },
            nombre_rol: { type: sql.VarChar }
        };
    }
}
module.exports.Roles = Roles;