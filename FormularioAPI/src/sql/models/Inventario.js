const { sql } = require('../../../sqlserver.js');

class Inventario {
    static get tableName() {
        return 'Inventario';
    }

    constructor(data) {
        this.inventario_id = data.inventario_id;
        this.brigada_id = data.brigada_id;
        this.objeto_id = data.objeto_id;
        this.talla = data.talla;
        this.cantidad = data.cantidad;
        this.es_prioritario = data.es_prioritario;
    }

    static get sqlSchema() {
        return {
            inventario_id: { type: sql.Int },
            brigada_id: { type: sql.Int },
            objeto_id: { type: sql.Int },
            talla: { type: sql.VarChar },
            cantidad: { type: sql.Int },
            es_prioritario: { type: sql.Bit }
        };
    }
}
module.exports.Inventario = Inventario;