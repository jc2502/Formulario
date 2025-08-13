const { sql } = require('../../../sqlserver.js');

class Detalle_Solicitud {
    static get tableName() {
        return 'Detalle_Solicitud';
    }

    constructor(data) {
        this.detalle_id = data.detalle_id;
        this.solicitud_id = data.solicitud_id;
        this.objeto_id = data.objeto_id;
        this.talla = data.talla;
        this.cantidad = data.cantidad;
        this.es_prioritario = data.es_prioritario;
    }

    static get sqlSchema() {
        return {
            detalle_id: { type: sql.Int },
            solicitud_id: { type: sql.Int },
            objeto_id: { type: sql.Int },
            talla: { type: sql.VarChar },
            cantidad: { type: sql.Int },
            es_prioritario: { type: sql.Bit }
        };
    }
}
module.exports.Detalle_Solicitud = Detalle_Solicitud;