const { sql } = require('../../../sqlserver.js');

class Categorias {
    static get tableName() {
        return 'Categorias';
    }

    constructor(data) {
        this.categoria_id = data.categoria_id;
        this.nombre_categoria = data.nombre_categoria;
    }

    static get sqlSchema() {
        return {
            categoria_id: { type: sql.Int },
            nombre_categoria: { type: sql.VarChar }
        };
    }
}
module.exports.Categorias = Categorias;