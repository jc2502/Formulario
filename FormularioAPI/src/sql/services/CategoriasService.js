const { sql, poolPromise } = require('../../../sqlserver');

class CategoriasService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request().query(`SELECT * FROM Categorias`);
        return result.recordset;
    }

    static async getById(categoria_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('categoria_id', sql.Int, categoria_id)
            .query(`SELECT * FROM Categorias WHERE categoria_id = @categoria_id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre_categoria', sql.VarChar, data.nombre_categoria)
            .query(`INSERT INTO Categorias (nombre_categoria) VALUES (@nombre_categoria)`);
        return result.rowsAffected[0] > 0;
    }

    static async update(categoria_id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre_categoria', sql.VarChar, data.nombre_categoria)
            .input('categoria_id', sql.Int, categoria_id)
            .query(`UPDATE Categorias SET nombre_categoria = @nombre_categoria WHERE categoria_id = @categoria_id`);
        return result.rowsAffected[0] > 0;
    }

    static async delete(categoria_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('categoria_id', sql.Int, categoria_id)
            .query(`DELETE FROM Categorias WHERE categoria_id = @categoria_id`);
        return result.rowsAffected[0] > 0;
    }
}
module.exports.CategoriasService = CategoriasService;