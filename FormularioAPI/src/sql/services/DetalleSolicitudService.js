const { sql, poolPromise } = require('../../../sqlserver');

class DetalleSolicitudService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request().query(`SELECT * FROM Detalle_Solicitud`);
        return result.recordset;
    }

    static async getById(detalle_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('detalle_id', sql.Int, detalle_id)
            .query(`SELECT * FROM Detalle_Solicitud WHERE detalle_id = @detalle_id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('solicitud_id', sql.Int, data.solicitud_id)
            .input('objeto_id', sql.Int, data.objeto_id)
            .input('talla', sql.VarChar, data.talla)
            .input('cantidad', sql.Int, data.cantidad)
            .input('es_prioritario', sql.Bit, data.es_prioritario)
            .query(`
                INSERT INTO Detalle_Solicitud (solicitud_id, objeto_id, talla, cantidad, es_prioritario)
                VALUES (@solicitud_id, @objeto_id, @talla, @cantidad, @es_prioritario)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(detalle_id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('solicitud_id', sql.Int, data.solicitud_id)
            .input('objeto_id', sql.Int, data.objeto_id)
            .input('talla', sql.VarChar, data.talla)
            .input('cantidad', sql.Int, data.cantidad)
            .input('es_prioritario', sql.Bit, data.es_prioritario)
            .input('detalle_id', sql.Int, detalle_id)
            .query(`
                UPDATE Detalle_Solicitud
                SET solicitud_id = @solicitud_id,
                    objeto_id = @objeto_id,
                    talla = @talla,
                    cantidad = @cantidad,
                    es_prioritario = @es_prioritario
                WHERE detalle_id = @detalle_id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(detalle_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('detalle_id', sql.Int, detalle_id)
            .query(`DELETE FROM Detalle_Solicitud WHERE detalle_id = @detalle_id`);
        return result.rowsAffected[0] > 0;
    }
}
module.exports.DetalleSolicitudService = DetalleSolicitudService;