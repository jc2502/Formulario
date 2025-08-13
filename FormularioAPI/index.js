require('dotenv').config();
const express = require("express");
const { sql, poolPromise } = require("./sqlserver.js");
const cors = require("cors");

const PORT = 3000;
const app = express();

const allowedOrigins = ['http://localhost:5173', 'http://localhost:3001'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Origen no permitido por CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

const routes = {
  'roles': 'roles',
  'usuarios': 'usuarios',
  'brigadas': 'brigadas',
  'categorias': 'categorias',
  'objetos': 'objetos',
  'inventario': 'inventario',
  'solicitudes': 'solicitudes',
  'detalle_solicitud': 'detalle_solicitud'
};

Object.entries(routes).forEach(([endpoint, filename]) => {
  const route = require(`./src/sql/routes/${filename}.routes.js`);
  app.use(`/api/${endpoint}`, route);
});

poolPromise.then(pool => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error("Error en la conexión a la base de datos:", err);
});

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Mi API REST',
      version: '1.0.0',
    },
  },
  apis: ['./sql/routes/*.routes.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));