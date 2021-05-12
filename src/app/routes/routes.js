import { Router } from 'express';
import * as registroCtrl from '../controllers/registros.controller';

const router = Router();


// RUTA PARA BUSCAR TODAS LAS TAREAS
router.get('/buscar',registroCtrl.findAllRows)

// RUTA ´PARA GUARDAR TAREAS
router.post('/guardar',registroCtrl.createRow)

// buscar por un parametro en especifico
router.get('/buscar/:id',registroCtrl.finOneRow)

// eliminar un registro 
router.delete('/borrar/:id',registroCtrl.deleteRow)

// actualizar
router.put('/actualizar/:id',registroCtrl.updateRow)

export default router;