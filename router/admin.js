var express=require('express');
var mysql=require('../mysqlPool');
var formidable = require('formidable');
var fs = require('fs');
var router=express.Router();

//零、登录访问数据库
router.post('/logIn',function(req,res){
  var params=req.body;
  mysql.logIn(res,params);
})
//零、接收注册内容插入数据库
router.get('/register',function(req,res){
  mysql.addRegister([req.query.user,req.query.password]);
})
//一、接收文章内容插入数据库
router.post('/article_upload', function(req,res){
  var title='';
  var content='';
  var author='';
  var time=new Date();
  var message = '';
  var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';        //设置编辑
    form.uploadDir = './public/images/uploadImg/WZ/'; //设置上传目录
    form.keepExtensions = true;     //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
  
  form.parse(req, function(err, fields, files) {
    if (err) {
      console.log(err);
    } else{
      title=fields.title;
      content=fields.content;
      author=fields.author;
      console.log("fields:"+fields.title);
      console.log("fields:"+fields.content);
      console.log("fields:"+fields.author);
    }
    var filename = files.resource.name;

    // 对文件名进行处理，以应对上传同名文件的情况
      var nameArray = filename.split('.');
      var type = nameArray[nameArray.length-1];
      var name = '';
      for(var i=0; i<nameArray.length-1; i++){
          name = name + nameArray[i];
      }
      var rand = Math.random()*100 + 900;
      var num = parseInt(rand, 10);

      var avatarName = name + num +  '.' + type;

    var newPath = form.uploadDir + avatarName ;
    fs.renameSync(files.resource.path, newPath);  //重命名
    NewPath=newPath.substring(9,newPath.length);
    console.log(NewPath);
    //向数据库中插入文章标题、图片路径、内容、作者、时间
    mysql.addArticle([title,NewPath,content,author,time]);
  });
});

//二、接收图片内容插入数据库
router.post('/image_upload', function(req,res){
  var content='';
  var time=new Date();

  var message = '';
  var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';        //设置编辑
    form.uploadDir = './public/images/uploadImg/TP/'; //设置上传目录
    form.keepExtensions = true;     //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
  
  form.parse(req, function(err, fields, files) {
    if (err) {
      console.log(err);
    } else{
      content=fields.content;
    }
    var filename = files.resource.name;

    // 对文件名进行处理，以应对上传同名文件的情况
      var nameArray = filename.split('.');
      var type = nameArray[nameArray.length-1];
      var name = '';
      for(var i=0; i<nameArray.length-1; i++){
          name = name + nameArray[i];
      }
      var rand = Math.random()*100 + 900;
      var num = parseInt(rand, 10);

      var avatarName = name + num +  '.' + type;

    var newPath = form.uploadDir + avatarName ;
    fs.renameSync(files.resource.path, newPath);  //重命名
    NewPath=newPath.substring(9,newPath.length);
    console.log(NewPath);
    //向数据库中插入文章标题、图片路径、内容、作者、时间
    mysql.addImg([NewPath,content,time]);
  });
});

//三、接收音乐内容插入数据库
router.post('/music_upload', function(req,res){
  var title='';
  var lyrics='';
  var star='';
  var time=new Date();

  var message = '';
  var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';        //设置编辑
    form.uploadDir = './public/uploadMusic/'; //设置上传目录
    form.keepExtensions = true;     //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
  
  form.parse(req, function(err, fields, files) {
    if (err) {
      console.log(err);
    } else{
      title=fields.title;
      lyrics=fields.lyrics;
      star=fields.star;
    }
    var filename = files.resource.name;

    // 对文件名进行处理，以应对上传同名文件的情况
      var nameArray = filename.split('.');
      var type = nameArray[nameArray.length-1];
      var name = '';
      for(var i=0; i<nameArray.length-1; i++){
          name = name + nameArray[i];
      }
      var rand = Math.random()*100 + 900;
      var num = parseInt(rand, 10);

      var avatarName = name + num +  '.' + type;

    var newPath = form.uploadDir + avatarName ;
    fs.renameSync(files.resource.path, newPath);  //重命名
    NewPath=newPath.substring(9,newPath.length);
    console.log(NewPath);
    //向数据库中插入音乐标题、路径、歌词、明星、时间
    mysql.addMusic([title,NewPath,lyrics,star,time]);
  });
});

//四、接收音乐内容插入数据库
router.post('/movie_upload', function(req,res){
  var title='';
  var major='';
  var time=new Date();

  var message = '';
  var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';        //设置编辑
    form.uploadDir = './public/uploadMovie/'; //设置上传目录
    form.keepExtensions = true;     //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
  
  form.parse(req, function(err, fields, files) {
    if (err) {
      console.log(err);
    } else{
      title=fields.title;
      major=fields.major;
    }
    var filename = files.resource.name;

    // 对文件名进行处理，以应对上传同名文件的情况
      var nameArray = filename.split('.');
      var type = nameArray[nameArray.length-1];
      var name = '';
      for(var i=0; i<nameArray.length-1; i++){
          name = name + nameArray[i];
      }
      var rand = Math.random()*100 + 900;
      var num = parseInt(rand, 10);

      var avatarName = name + num +  '.' + type;

    var newPath = form.uploadDir + avatarName ;
    fs.renameSync(files.resource.path, newPath);  //重命名
    NewPath=newPath.substring(9,newPath.length);
    console.log(NewPath);
    //向数据库中插入音乐标题、路径、主演、时间
    mysql.addMovie([title,NewPath,major,time]);
  });
});

//首页 从数据库中获取数据
router.get('/homeArticle',function(req,res){
  mysql.selectArticleHome(res);
})
router.get('/homeimages',function(req,res){
  mysql.selectimagesHome(res);
})
router.get('/homemusic',function(req,res){
  mysql.selectMusicHome(res);
})
router.get('/homemovie',function(req,res){
  mysql.selectMovieHome(res);
})

//文章列表页 从数据库中获取数据
router.get('/articleTitle',function(req,res){
  mysql.selectArticle(res);
})
//文章详情页 从数据库中获取数据
router.get('/articleDetaildata',function(req,res){
  mysql.selectArticleDetail(req,res);
})

//图片列表页 从数据库中获取数据
router.get('/ImgTitle',function(req,res){
  mysql.selectimages(res);
})

//音乐列表页 从数据库中获取数据
router.get('/musicTitle',function(req,res){
  mysql.selectMusic(res);
})
//音乐详情页 从数据库中获取数据
router.get('/musicDetaildata',function(req,res){
  mysql.selectMusicDetail(req,res);
})

//电影列表页 从数据库中获取数据
router.get('/movieTitle',function(req,res){
  mysql.selectMovie(res);
})
//电影详情页 从数据库中获取数据
router.get('/movieDetaildata',function(req,res){
  mysql.selectMovieDetail(req,res);
})

module.exports=router;