import {Schema,model}  from "mongoose";


const rowSchema = new Schema({
    Factura: Number,
    Serie: Number,
    Exp: Number,
    Fe_Registro: Date,
    Domicilio: String,
    Moneda: Number,
    Ramo: String,
    Indole: String,
    Negocio: String,
    Cedente: String,
    AseguradoAfianzado: String,
    Suscriptor: String,
    Vigdesde:Date,
    Vighasta:Date,
    Estado: String,
    Nuevo: Boolean,
    Usuario: String,
    Poliza: String

},{
    versionKey: false,
    timestamps: true
})

export default model('registros',rowSchema);