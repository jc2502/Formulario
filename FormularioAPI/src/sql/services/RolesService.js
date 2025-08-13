const { sql, poolPromise } = require('../../../sqlserver');

class RolesService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request().query(`SELECT * FROM Roles`);
        return result.recordset;
    }

    static async getById(rol_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('rol_id', sql.Int, rol_id)
            .query(`SELECT * FROM Roles WHERE rol_id = @rol_id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre_rol', sql.VarChar, data.nombre_rol)
            .query(`INSERT INTO Roles (nombre_rol) VALUES (@nombre_rol)`);
        return result.rowsAffected[0] > 0;
    }

    static async update(rol_id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre_rol', sql.VarChar, data.nombre_rol)
            .input('rol_id', sql.Int, rol_id)
            .query(`UPDATE Roles SET nombre_rol = @nombre_rol WHERE rol_id = @rol_id`);
        return result.rowsAffected[0] > 0;
    }

    static async delete(rol_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('rol_id', sql.Int, rol_id)
            .query(`DELETE FROM Roles WHERE rol_id = @rol_id`);
        return result.rowsAffected[0] > 0;
    }
}
module.exports.RolesService = RolesService;