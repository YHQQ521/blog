var express=require('express');
var ejs=require('ejs');
var bodyParser = require('body-parser');//没啥用啊目前
var util=require('util');
// var mysql=require('./mysql');//这个是直连数据库，现在都用连接池了
var user=require('./router/user');
var admin=require('./router/admin');
var app=express();
app.use(bodyParser.json());//没啥用啊目前
app.use(bodyParser.urlencoded({ extended: false }));//没啥用啊目前
app.use(express.static('./public'));
app.set('views','./views');
app.engine('html',ejs.__express);
app.set('view engine','html');

port=process.env.PORT||3000;
app.listen(port);

//返回页面
app.get('/',user);
app.get('/articleList',user);
app.get('/articleDetail',user);
app.get('/imgList',user);
app.get('/musicList',user);
app.get('/musicDetail',user);
app.get('/movieList',user);
app.get('/movieDetail',user);
app.get('/message',user);
app.get('/admin',user);

//操作数据库
app.post('/logIn',admin);
app.get('/register',admin);
app.post('/article_upload',admin);
app.post('/image_upload',admin);
app.post('/music_upload',admin);
app.post('/movie_upload',admin);
app.get('/homeArticle',admin);
app.get('/homeimages',admin);
app.get('/homemusic',admin);
app.get('/homemovie',admin);
app.get('/articleTitle',admin);
app.get('/articleDetaildata',admin);
app.get('/ImgTitle',admin);
app.get('/musicTitle',admin);
app.get('/musicDetaildata',admin);
app.get('/movieTitle',admin);
app.get('/movieDetaildata',admin);