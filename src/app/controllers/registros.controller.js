import rowSchema from '../models/Registros';

// buscar todos los registros 
export const findAllRows = async (req,res)=>{
    const rowsel = await rowSchema.find();
     res.json(rowsel);
 }


//  guardar los registros
export const createRow = async (req,res)=>{
    
    // console.log(req.body)

    const newrow = new rowSchema({
        Factura:        req.body.factura,
        Serie:          req.body.serie,
        Exp:            req.body.exp,
        Fe_Registro:    req.body.Fe_registro,
        Domicilio:      req.body.Domicilio,
        Moneda:         req.body.Moneda,
        Ramo:           req.body.Ramo,
        Indole:         req.body.Indole,
        Negocio:        req.body.Negocio,
        Cedente:        req.body.Cedente,
        AseguradoAfianzado: req.body.AsegAfian,
        Suscriptor:     req.body.Suscriptor,
        Vigdesde:       req.body.vigdesde,
        Vighasta:       req.body.Vighasta,
        Estado:         req.body.factura,
        Nuevo:          req.body.Nuevo,
        Usuario:        req.body.Usuario,
        Poliza:         req.body.Poliza
        
    })

    // console.log(newrow)

    const rowsave = await newrow.save();

    if(rowsave){
        res.json({message:"save success"})
    }
}

//BUSQUEDAS ESPECIFICAS Y GENERALES
export const finOneRow = async (req,res) =>{
    
    // console.log(req.params.id)
    const row = await rowSchema.find(req.params.id)
    // const row = await rowSchema.find({},{"Negocio":1,"_id":0})
    res.json(row);
}

// ELIMINAR TAREAS 
export const deleteRow = async(req,res) =>{

    const rowdelete = await rowSchema.findByIdAndDelete(req.params.id)

    if(rowdelete){
        res.json({message: 'delete successful'})
    }
}

// ACTUALIZAR 

export const updateRow = async(req,res) =>{
    const rowupdate = await rowSchema.findByIdAndUpdate()

    res.json({message: 'row updated successfully'})
}