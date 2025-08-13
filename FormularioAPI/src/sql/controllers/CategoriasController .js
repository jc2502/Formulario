const CategoriasService = require('../services/categoriasservice');

class CategoriasController {
    static async getAll(req, res) {
        try {
            const data = await CategoriasService.getAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const item = await CategoriasService.getById(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const newItem = await CategoriasService.create(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updated = await CategoriasService.update(req.params.id, req.body);
            if (!updated) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
            res.json(updated);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const result = await CategoriasService.delete(req.params.id);
            if (!result) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
            res.json({ message: 'Categoría eliminada' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
module.exports = CategoriasController;