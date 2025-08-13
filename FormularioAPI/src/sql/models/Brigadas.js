const { sql } = require('../../../sqlserver.js');

class Brigadas {
    static get tableName() {
        return 'Brigadas';
    }

    constructor(data) {
        this.brigada_id = data.brigada_id;
        this.nombre = data.nombre;
        this.cant_bomberos = data.cant_bomberos;
        this.contacto_comandante = data.contacto_comandante;
        this.logistica_encargado = data.logistica_encargado;
        this.contacto_logistica = data.contacto_logistica;
        this.numero_emergencia = data.numero_emergencia;
        this.email = data.email;
        this.usuario_id = data.usuario_id;
    }

    static get sqlSchema() {
        return {
            brigada_id: { type: sql.Int },
            nombre: { type: sql.VarChar },
            cant_bomberos: { type: sql.Int },
            contacto_comandante: { type: sql.VarChar },
            logistica_encargado: { type: sql.VarChar },
            contacto_logistica: { type: sql.VarChar },
            numero_emergencia: { type: sql.VarChar },
            email: { type: sql.VarChar },
            usuario_id: { type: sql.Int }
        };
    }
}
module.exports.Brigadas = Brigadas;