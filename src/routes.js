const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController')


routes.post("/boxes", BoxController.store);
routes.post("/box/:id/files", multer(multerConfig).single('file'), FileController.store);
routes.get("/boxes/:id", BoxController.show);

module.exports = routes;