const SolicitudesService = require('../services/SolicitudesService');

class SolicitudesController {
    static async getAll(req, res) {
        try {
            const data = await SolicitudesService.getAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const item = await SolicitudesService.getById(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'Solicitud no encontrada' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const newItem = await SolicitudesService.create(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updated = await SolicitudesService.update(req.params.id, req.body);
            if (!updated) {
                return res.status(404).json({ message: 'Solicitud no encontrada' });
            }
            res.json(updated);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const result = await SolicitudesService.delete(req.params.id);
            if (!result) {
                return res.status(404).json({ message: 'Solicitud no encontrada' });
            }
            res.json({ message: 'Solicitud eliminada' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
module.exports = SolicitudesController;