//导入路由器
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

/*引入路由模块*/
// const index=require("./routes/index")
// const details= require("./routes/details");
// const users=require("./routes/users");
// const products=require("./routes/products");

//创建web服务器
var app = express();
app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到travel目录下
/*app.use(express.static('public'));*/
app.use(cors({
  origin:"http://127.0.0.1:3000"
}))

/*使用路由器来管理路由*/
// app.use("/public/index",index);
// app.use("/public/header",header);
// app.use("/public/login",login);
// app.use("/public/footer",footer);

