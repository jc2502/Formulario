const BrigadasService  = require('../services/brigadasservice');

class BrigadasController {
    static async getAll(req, res) {
        try {
            const data = await BrigadasService.getAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const item = await BrigadasService.getById(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'Brigada no encontrada' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const newItem = await BrigadasService.create(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updated = await BrigadasService.update(req.params.id, req.body);
            if (!updated) {
                return res.status(404).json({ message: 'Brigada no encontrada' });
            }
            res.json(updated);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const result = await BrigadasService.delete(req.params.id);
            if (!result) {
                return res.status(404).json({ message: 'Brigada no encontrada' });
            }
            res.json({ message: 'Brigada eliminada' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
module.exports = BrigadasController;