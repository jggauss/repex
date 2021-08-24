const { Router } = require('express')

const VendedorController = require('../controllers/VendedorController')

const router = Router()
router

.get('/vendedores',VendedorController.pegaTodosOsVendedores)
.get('/vendedores/:id',VendedorController.pegaUmVendedor)
.post('/vendedores',VendedorController.criarUmVendedor)
.put('/vendedores/:id',VendedorController.atualizaVendedor)
.delete('/vendedores/:id',VendedorController.apagaVendedor)



module.exports = router