const { sql, poolPromise } = require('../../../sqlserver');

class InventarioService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request().query(`SELECT * FROM Inventario`);
        return result.recordset;
    }

    static async getById(inventario_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('inventario_id', sql.Int, inventario_id)
            .query(`SELECT * FROM Inventario WHERE inventario_id = @inventario_id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('brigada_id', sql.Int, data.brigada_id)
            .input('objeto_id', sql.Int, data.objeto_id)
            .input('talla', sql.VarChar, data.talla)
            .input('cantidad', sql.Int, data.cantidad)
            .input('es_prioritario', sql.Bit, data.es_prioritario)
            .query(`
                INSERT INTO Inventario (brigada_id, objeto_id, talla, cantidad, es_prioritario)
                VALUES (@brigada_id, @objeto_id, @talla, @cantidad, @es_prioritario)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(inventario_id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('brigada_id', sql.Int, data.brigada_id)
            .input('objeto_id', sql.Int, data.objeto_id)
            .input('talla', sql.VarChar, data.talla)
            .input('cantidad', sql.Int, data.cantidad)
            .input('es_prioritario', sql.Bit, data.es_prioritario)
            .input('inventario_id', sql.Int, inventario_id)
            .query(`
                UPDATE Inventario
                SET brigada_id = @brigada_id,
                    objeto_id = @objeto_id,
                    talla = @talla,
                    cantidad = @cantidad,
                    es_prioritario = @es_prioritario
                WHERE inventario_id = @inventario_id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(inventario_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('inventario_id', sql.Int, inventario_id)
            .query(`DELETE FROM Inventario WHERE inventario_id = @inventario_id`);
        return result.rowsAffected[0] > 0;
    }
}
module.exports.InventarioService = InventarioService;