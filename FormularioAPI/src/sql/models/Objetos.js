const { sql } = require('../../../sqlserver.js');

class Objetos {
    static get tableName() {
        return 'Objetos';
    }

    constructor(data) {
        this.objeto_id = data.objeto_id;
        this.nombre_objeto = data.nombre_objeto;
        this.categoria_id = data.categoria_id;
    }

    static get sqlSchema() {
        return {
            objeto_id: { type: sql.Int },
            nombre_objeto: { type: sql.VarChar },
            categoria_id: { type: sql.Int }
        };
    }
}
module.exports.Objetos = Objetos;