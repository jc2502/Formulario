const { sql } = require('../../../sqlserver.js');

class Solicitudes {
    static get tableName() {
        return 'Solicitudes';
    }

    constructor(data) {
        this.solicitud_id = data.solicitud_id;
        this.brigada_id = data.brigada_id;
        this.fecha_solicitud = data.fecha_solicitud;
        this.estado = data.estado;
        this.observaciones = data.observaciones;
    }

    static get sqlSchema() {
        return {
            solicitud_id: { type: sql.Int },
            brigada_id: { type: sql.Int },
            fecha_solicitud: { type: sql.DateTime2 },
            estado: { type: sql.VarChar },
            observaciones: { type: sql.Text }
        };
    }
}
module.exports.Solicitudes = Solicitudes;