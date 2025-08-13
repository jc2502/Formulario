const { sql, poolPromise } = require('../../../sqlserver');

class SolicitudesService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request().query(`SELECT * FROM Solicitudes`);
        return result.recordset;
    }

    static async getById(solicitud_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('solicitud_id', sql.Int, solicitud_id)
            .query(`SELECT * FROM Solicitudes WHERE solicitud_id = @solicitud_id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('brigada_id', sql.Int, data.brigada_id)
            .input('estado', sql.VarChar, data.estado)
            .input('observaciones', sql.Text, data.observaciones)
            .query(`
                INSERT INTO Solicitudes (brigada_id, estado, observaciones)
                VALUES (@brigada_id, @estado, @observaciones)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(solicitud_id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('brigada_id', sql.Int, data.brigada_id)
            .input('estado', sql.VarChar, data.estado)
            .input('observaciones', sql.Text, data.observaciones)
            .input('solicitud_id', sql.Int, solicitud_id)
            .query(`
                UPDATE Solicitudes
                SET brigada_id = @brigada_id,
                    estado = @estado,
                    observaciones = @observaciones
                WHERE solicitud_id = @solicitud_id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(solicitud_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('solicitud_id', sql.Int, solicitud_id)
            .query(`DELETE FROM Solicitudes WHERE solicitud_id = @solicitud_id`);
        return result.rowsAffected[0] > 0;
    }
}
module.exports.SolicitudesService = SolicitudesService;