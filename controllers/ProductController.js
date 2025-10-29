import ProductModel from "../models/ProductModel.js";

//metodos para el CRUD

//Mostrar todos los productos: cada producto esta guardado en un documento
export const getAllProduct = async(req, res) =>{
    try{
      const products = await ProductModel.find();
      res.status(200).json(products);
    }catch(err){
      res.json({message: err.message});
    }
};

//mostrar un producto
export const getProduct = async(req, res)=>{
  try{
    const id = req.params.id;
    const product = await ProductModel.findById({_id:id}).then((product)=>{
      res.status(200).json(product);
    })
  }catch(err){
    res.json({messagge: err.message})
  }
};

  //actualizar producto

  export const updateProduct = async(req, res)=>{
    try{
      const id = req.params.id;
      await ProductModel.updateOne({_id:id}, req.body).then( res => {
        console.log(res);
      })
      res.status(200).json({"message":"Producto actualizado con exito!"});
    }catch(err){
      res.json({messagge: err.message});
    }
  };
  
  // Eliminar un producto
  export const deleteProduct = async(req, res) => {
    try{
      const id = req.params.id;
      await ProductModel.deleteOne({_id:id}).then(res=>{console.log(res)});
    }catch(err){
      res.json({message: err.message});
    }
  };


    //crear un nuevo producto
  export const addproduct =  async (req, res) => {
  try {
    await ProductModel.create(req.body);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: err.message });
  }
};

//Obtener productos populares en lenceria
export const getPopularInLenceria = async (req, res) => {
  try {
    const products = await ProductModel.find({ category: 'popularinlenceria' });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Obtener ids del carrito
export const getProductsInCart = async (req, res) => {
  try {
    const items = await ProductModel.find({ _id: { $in: req.body.items } });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
