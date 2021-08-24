const { Router } = require('express')

const IndustriaController = require('../controllers/IndustriaController')

const router = Router()
router

.get('/industrias', IndustriaController.pegaTodasAsIndustrias)
.get('/industrias/:id',IndustriaController.pegaUmaIndustria)
.post('/industrias',IndustriaController.criarUmaIndustria)
.put('/industrias/:id',IndustriaController.atualizaIndustria)
.delete('/industrias/:id',IndustriaController.apagaIndustria)



module.exports = router