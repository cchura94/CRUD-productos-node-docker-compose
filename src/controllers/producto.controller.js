const Producto = require("./../models/Producto");

async function listar(req, res){

    const productos = await Producto.findAll();

    return res.json(productos);
}

async function guardar(req, res){

    const producto = await Producto.create(req.body);

    return res.status(201).json(producto);
}

async function mostrar(req, res){

    const producto = await Producto.findByPk(req.params.id);

    if (!producto) {
        return res.status(404).json({mensaje: "Producto no encontrado"});
    }

    return res.json(producto);
}

async function modificar(req, res){

    const producto = await Producto.findByPk(req.params.id);

    if (!producto) {
        return res.status(404).json({mensaje: "Producto no encontrado"});
    }

    await producto.update(req.body);

    return res.json(producto);
}

async function eliminar(req, res){

    const producto = await Producto.findByPk(req.params.id);

    if (!producto) {
        return res.status(404).json({mensaje: "Producto no encontrado"});
    }

    await producto.destroy();

    return res.json({mensaje: "Producto eliminado"});
}

module.exports = {
    listar,
    guardar,
    mostrar,
    modificar,
    eliminar,
}
