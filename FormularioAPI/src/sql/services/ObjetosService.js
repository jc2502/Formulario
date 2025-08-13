const { sql, poolPromise } = require('../../../sqlserver');

class ObjetosService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request().query(`SELECT * FROM Objetos`);
        return result.recordset;
    }

    static async getById(objeto_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('objeto_id', sql.Int, objeto_id)
            .query(`SELECT * FROM Objetos WHERE objeto_id = @objeto_id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre_objeto', sql.VarChar, data.nombre_objeto)
            .input('categoria_id', sql.Int, data.categoria_id)
            .query(`
                INSERT INTO Objetos (nombre_objeto, categoria_id)
                VALUES (@nombre_objeto, @categoria_id)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(objeto_id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre_objeto', sql.VarChar, data.nombre_objeto)
            .input('categoria_id', sql.Int, data.categoria_id)
            .input('objeto_id', sql.Int, objeto_id)
            .query(`
                UPDATE Objetos
                SET nombre_objeto = @nombre_objeto,
                    categoria_id = @categoria_id
                WHERE objeto_id = @objeto_id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(objeto_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('objeto_id', sql.Int, objeto_id)
            .query(`DELETE FROM Objetos WHERE objeto_id = @objeto_id`);
        return result.rowsAffected[0] > 0;
    }
}
module.exports.ObjetosService = ObjetosService;