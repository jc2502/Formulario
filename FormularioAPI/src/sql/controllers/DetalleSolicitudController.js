const { DetalleSolicitudService } = require('../services/DetalleSolicitudService');

class DetalleSolicitudController {
    static async getAll(req, res) {
        try {
            const data = await DetalleSolicitudService.getAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const item = await DetalleSolicitudService.getById(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'Detalle de solicitud no encontrado' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const newItem = await DetalleSolicitudService.create(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updated = await DetalleSolicitudService.update(req.params.id, req.body);
            if (!updated) {
                return res.status(404).json({ message: 'Detalle de solicitud no encontrado' });
            }
            res.json(updated);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const result = await DetalleSolicitudService.delete(req.params.id);
            if (!result) {
                return res.status(404).json({ message: 'Detalle de solicitud no encontrado' });
            }
            res.json({ message: 'Detalle de solicitud eliminado' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
module.exports = DetalleSolicitudController;