const { sql, poolPromise } = require('../../../sqlserver');

class UsuariosService {
    static async getAll() {
        const pool = await poolPromise;
        const result = await pool.request().query(`SELECT * FROM Usuarios`);
        return result.recordset;
    }

    static async getById(usuario_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('usuario_id', sql.Int, usuario_id)
            .query(`SELECT * FROM Usuarios WHERE usuario_id = @usuario_id`);
        return result.recordset[0];
    }

    static async create(data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre_usuario', sql.VarChar, data.nombre_usuario)
            .input('contrasena_hash', sql.VarChar, data.contrasena_hash)
            .input('rol_id', sql.Int, data.rol_id)
            .query(`
                INSERT INTO Usuarios (nombre_usuario, contrasena_hash, rol_id)
                VALUES (@nombre_usuario, @contrasena_hash, @rol_id)
            `);
        return result.rowsAffected[0] > 0;
    }

    static async update(usuario_id, data) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('nombre_usuario', sql.VarChar, data.nombre_usuario)
            .input('contrasena_hash', sql.VarChar, data.contrasena_hash)
            .input('rol_id', sql.Int, data.rol_id)
            .input('usuario_id', sql.Int, usuario_id)
            .query(`
                UPDATE Usuarios
                SET nombre_usuario = @nombre_usuario,
                    contrasena_hash = @contrasena_hash,
                    rol_id = @rol_id
                WHERE usuario_id = @usuario_id
            `);
        return result.rowsAffected[0] > 0;
    }

    static async delete(usuario_id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('usuario_id', sql.Int, usuario_id)
            .query(`DELETE FROM Usuarios WHERE usuario_id = @usuario_id`);
        return result.rowsAffected[0] > 0;
    }
}
module.exports.UsuariosService = UsuariosService;