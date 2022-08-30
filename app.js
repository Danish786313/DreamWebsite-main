const path = require('path');
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config()
const { sequelize } = require('./models');
global.__basedir = __dirname + "/";
``
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// app.use(cors())

const cmsrout = require('./routes/cmsrout')
const gallerycategory = require('./routes/gallerycategRoutes');
const gallery = require('./routes/galleryRoutes');
const productType = require('./routes/productType');
const productroute = require('./routes/productsroute')
app.use(bodyParser.json())
app.use(cookieParser());



app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello GanjBasoda"
    })
})


app.use("/api",gallerycategory);
app.use("/api",gallery);
app.use("/api",productType);
app.use('/api', cmsrout)
app.use('/api', productroute)

const port = (process.env.PORT || 4000)

//Starting a server
app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`)
    try {
        await sequelize.sync();
        console.log('DATABASE SYNCED!');
    } catch (error) {
        console.log(error);
    }
})
