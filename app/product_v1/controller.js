const connection = require('../../config/mysql');
const path = require('path');
const fs = require('fs');

const index = (req, res) =>{
    const {search} = req.query;
    let exec = {};
    if(search){
        exec = {
            sql: 'SELECT * FROM product WHERE name_product LIKE ?',
            values: [`%${search}%`]
        }
    }else{
        exec = {
            sql: 'SELECT * FROM product'
        }
    }
    connection.query(exec, _response(res));
}

const view = (req,res) => {
    connection.query({
        sql: 'SELECT * FROM product WHERE id = ?',
        values: [req.params.id]
    }, _response(res));
}
const destroy = (req,res) => {
    connection.query({
        sql: 'DELETE FROM product WHERE id = ?',
        values: [req.params.id]
    }, _response(res));
}

const store = (req,res) => {
    const {name, price, stock} = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname,'../../upload', image.originalname);
        fs.renameSync(image.path, target);
        connection.query({
            sql: 'INSERT INTO product (name_product, price_product, stock_product, image_product) VALUES (?, ?, ?, ?)',
            values: [name, price, stock, `http://localhost:3000/public/${image.originalname}`]
        }, _response(res));
    }
}

const update = (req,res) => {
    const {name, price, stock} = req.body;
    const image = req.file;
    let sql = '';
    let values = [];
    if(image){
        const target = path.join(__dirname,'../../upload', image.originalname);
        fs.renameSync(image.path, target);
        sql = 'UPDATE product SET name_product=?, price_product=?, stock_product=?, image_product=? WHERE id=?',
        values = [name, price, stock, `http://localhost:3000/public/${image.originalname}`, req.params.id]
    }else{
        sql = 'UPDATE product SET name_product=?, price_product=?, stock_product=? WHERE id=?',
        values = [name, price, stock, req.params.id]
    }
    connection.query({sql,values}, _response(res));
}

const _response = (res) => {
    return (error, result)=>{
        if(error){
            res.send({
                status: 'Failed',
                response: error
            });
        }else{
            res.send({
                status: 'Success',
                response: result
            });
        }
    }
}

module.exports = {
    index,
    view,
    store,
    update,
    destroy
}