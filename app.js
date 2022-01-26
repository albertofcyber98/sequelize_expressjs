const express = require('express');
const path = require('path');
const app = express();
const productV1 = require('./app/product_v1/routes');
const productV2 = require('./app/product_v2/routes');
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public',express.static(path.join(__dirname, 'upload')));
app.use('/api/v1', productV1);
app.use('/api/v2', productV2);
app.use((req, res, next) =>{
    res.send({
        status:'failed',
        message:'Resouce '+ req.originalUrl + 'not found'
    })
});
app.listen(3000, () => console.log('Server: http://localhost:3000'));