const { sql, poolPromise } = require('../../../sqlserver');

class BrigadasService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request().query(`SELECT * FROM Brigadas`);
        return result.recordset;
    }

    static async getById(brigada_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('brigada_id', sql.Int, brigada_id)
            .query(`SELECT * FROM Brigadas WHERE brigada_id = @brigada_id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.VarChar, data.nombre)
            .input('cant_bomberos', sql.Int, data.cant_bomberos)
            .input('contacto_comandante', sql.VarChar, data.contacto_comandante)
            .input('logistica_encargado', sql.VarChar, data.logistica_encargado)
            .input('contacto_logistica', sql.VarChar, data.contacto_logistica)
            .input('numero_emergencia', sql.VarChar, data.numero_emergencia)
            .input('email', sql.VarChar, data.email)
            .input('usuario_id', sql.Int, data.usuario_id)
            .query(`
                INSERT INTO Brigadas (nombre, cant_bomberos, contacto_comandante, logistica_encargado,
                    contacto_logistica, numero_emergencia, email, usuario_id)
                VALUES (@nombre, @cant_bomberos, @contacto_comandante, @logistica_encargado,
                    @contacto_logistica, @numero_emergencia, @email, @usuario_id)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(brigada_id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre', sql.VarChar, data.nombre)
            .input('cant_bomberos', sql.Int, data.cant_bomberos)
            .input('contacto_comandante', sql.VarChar, data.contacto_comandante)
            .input('logistica_encargado', sql.VarChar, data.logistica_encargado)
            .input('contacto_logistica', sql.VarChar, data.contacto_logistica)
            .input('numero_emergencia', sql.VarChar, data.numero_emergencia)
            .input('email', sql.VarChar, data.email)
            .input('usuario_id', sql.Int, data.usuario_id)
            .input('brigada_id', sql.Int, brigada_id)
            .query(`
                UPDATE Brigadas
                SET nombre = @nombre,
                    cant_bomberos = @cant_bomberos,
                    contacto_comandante = @contacto_comandante,
                    logistica_encargado = @logistica_encargado,
                    contacto_logistica = @contacto_logistica,
                    numero_emergencia = @numero_emergencia,
                    email = @email,
                    usuario_id = @usuario_id
                WHERE brigada_id = @brigada_id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(brigada_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('brigada_id', sql.Int, brigada_id)
            .query(`DELETE FROM Brigadas WHERE brigada_id = @brigada_id`);
        return result.rowsAffected[0] > 0;
    }
}
module.exports.BrigadasService = BrigadasService;