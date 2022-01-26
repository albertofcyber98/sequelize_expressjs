const router = require('express').Router();
const Product = require('./model');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { send } = require('process');
const upload = multer({dest: 'upload'});

router.post('/product', upload.single('image'), async (req, res) => {
    const {name, price, stock, status} = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname,'../../upload', image.originalname);
        fs.renameSync(image.path, target);
        try{
            await Product.sync();
            const result = await Product.create({name_product: name, price_product: price, stock_product: stock, status_product: status, image_product: `http://localhost:3000/public/${image.originalname}`});
            res.send(result);
        }catch(e){
            res.send(e);
        }
    }
});

router.put('/product/:id', upload.single('image'), async (req, res) => {
    const {name, price, stock, status} = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname,'../../upload', image.originalname);
        fs.renameSync(image.path, target);
        try{
            await Product.sync();
            const result = await Product.update({name_product: name, price_product: price, stock_product: stock, status_product: status, image_product: `http://localhost:3000/public/${image.originalname}`}, {
                where:{
                    id: req.params.id
                }
            });
            res.status(200).json(result);
        }catch(e){
            res.send(e);
        }
    }else{
        try{
            await Product.sync();
            const result = await Product.update({name_product: name, price_product: price, stock_product: stock, status_product: status},{
                where:{
                    id: req.params.id
                }
            });
            res.status(200).json(result);
        }catch(e){
            res.send(e);
        }
    }
});

router.get('/product', async (req, res) =>{
    try{
    const result = await Product.findAll();
    res.send(result);
    }catch(e){
        res.send(e)
    }
});
router.get('/product/:id', async (req, res) =>{
    try{
    const result = await Product.findAll({
        where:{
            id: req.params.id
        }
    });
    res.send(result);
    }catch(e){
        res.send(e)
    }
});
router.delete('/product/:id', upload.single('image'), async (req, res) =>{
    try{
    const result = await Product.destroy({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json(result);
    }catch(e){
        res.send(e)
    }
});

module.exports = router;