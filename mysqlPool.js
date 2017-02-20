var mysql=require('mysql');
var pool=mysql.createPool({
	host:'w.rdc.sae.sina.com.cn',
	user:'4wl33134zo',
	password:'3m5l3kxi4xkhyk1ziiyhkmymx2423xmjh544z4zz',
	database:'app_yhqq',
	port:3306
})

// 0、登录访问数据库（）
function logIn (res,data) {
	var select="select * from register where user='"+data.user+"'";
	pool.getConnection(function(err,connection){
		connection.query(select,function(err,rows){
			if(err){
				throw err;
			}else{
				if(rows.length==0){
					res.send('0');
				}else if(rows[0].password==data.password){
					res.send({user:rows[0].user});
				}else{
					res.send('2');
				}
			}
		})
		connection.release();
	})
}
exports.logIn=logIn;
// 0、注册内容插入数据库
function addRegister(data){
	var add="insert into register(user,password) values(?,?)";
	var params=data;
	pool.getConnection(function(err,connection){
		connection.query(add,params,function(err,rows){
			if(err){
				throw err;
			}else{
				console.log(data);
			}
		})
		connection.release();
	})
}
exports.addRegister=addRegister;
// 1、文章内容插入数据库
function addArticle(data){
	var add="insert into article(title,img,content,author,time) values(?,?,?,?,?)";
	var params=data;
	pool.getConnection(function(err,connection){
		connection.query(add,params,function(err,rows){
			if(err){
				throw err;
			} else{
				console.log(data);
			}
		})
		connection.release();
	})	
}
exports.addArticle=addArticle;

// 2、图片内容插入数据库
function addImg(data){
	var add="insert into images(img,content,time) values(?,?,?)";
	var params=data;
	pool.getConnection(function(err,connection){
		connection.query(add,params,function(err,rows){
			if(err){
				throw err;
			} else{
				console.log(data);
			}
		})
		connection.release();
	})	
}
exports.addImg=addImg;

// 3、音乐内容插入数据库
function addMusic(data){
	var add="insert into music(title,music,lyrics,star,time) values(?,?,?,?,?)";
	var params=data;
	pool.getConnection(function(err,connection){
		connection.query(add,params,function(err,rows){
			if(err){
				throw err;
			} else{
				console.log(data);
			}
		})
		connection.release();
	})	
}
exports.addMusic=addMusic;

// 4、电影内容插入数据库
function addMovie(data){
	var add="insert into movie(title,movie,major,time) values(?,?,?,?)";
	var params=data;
	pool.getConnection(function(err,connection){
		connection.query(add,params,function(err,rows){
			if(err){
				throw err;
			} else{
				console.log(data);
			}
		})
		connection.release();
	})	
}
exports.addMovie=addMovie;

//一1、从数据库中获取文章内容信息
//用于首页，只获取4条数据
function selectArticleHome(res){
	var select="select * from article order by time desc limit 0,4";
	pool.getConnection(function(err,connection){
		connection.query(select,function(err,rows){
			if(err){
				throw err;
			} else{
				res.setHeader("Content-Type","text/plain");
        		res.setHeader("Access-Control-Allow-Origin","");
				res.send(rows);
			}
		})
		connection.release();
	})	
}
exports.selectArticleHome=selectArticleHome;
//用于文章列表页
function selectArticle(res){
	var select="select * from article order by time desc";
	pool.getConnection(function(err,connection){
		connection.query(select,function(err,rows){
			if(err){
				throw err;
			} else{
				res.setHeader("Content-Type","text/plain");
        		res.setHeader("Access-Control-Allow-Origin","");
				res.send(rows);
			}
		})
		connection.release();
	})	
}
exports.selectArticle=selectArticle;
//一2、从数据库中获取文章详情内容信息
function selectArticleDetail(req,res){
	var select="select * from article where id=?";
	var params=req.query.id;
	pool.getConnection(function(err,connection){
		connection.query(select,[params],function(err,rows){
			if(err){
				throw err;
			} else{
				res.setHeader("Content-Type","text/plain");
        		res.setHeader("Access-Control-Allow-Origin","");
				res.send(rows);
			}
		})
		connection.release();
	})	
}
exports.selectArticleDetail=selectArticleDetail;


//二1、从数据库中获取图片内容信息
//用于首页，只获取4条数据
function selectimagesHome(res){
	var select="select * from images order by time desc limit 0,4";
	pool.getConnection(function(err,connection){
		connection.query(select,function(err,rows){
			if(err){
				throw err;
			} else{
				res.setHeader("Content-Type","text/plain");
        		res.setHeader("Access-Control-Allow-Origin","");
				res.send(rows);
			}
		})
		connection.release();
	})	
}
exports.selectimagesHome=selectimagesHome;

//用于图片列表页
function selectimages(res){
	var select="select * from images order by time desc";
	pool.getConnection(function(err,connection){
		connection.query(select,function(err,rows){
			if(err){
				throw err;
			} else{
				res.setHeader("Content-Type","text/plain");
        		res.setHeader("Access-Control-Allow-Origin","");
				res.send(rows);
			}
		})
		connection.release();
	})	
}
exports.selectimages=selectimages;

//三1、从数据库中获取音乐内容信息
//用于首页
function selectMusicHome(res){
	var select="select * from music order by time desc limit 0,16";
	pool.getConnection(function(err,connection){
		connection.query(select,function(err,rows){
			if(err){
				throw err;
			} else{
				res.setHeader("Content-Type","text/plain");
        		res.setHeader("Access-Control-Allow-Origin","");
				res.send(rows);
			}
		})
		connection.release();
	})	
}
exports.selectMusicHome=selectMusicHome;
//用于音乐列表页
function selectMusic(res){
	var select="select * from music order by time desc";
	pool.getConnection(function(err,connection){
		connection.query(select,function(err,rows){
			if(err){
				throw err;
			} else{
				res.setHeader("Content-Type","text/plain");
        		res.setHeader("Access-Control-Allow-Origin","");
				res.send(rows);
			}
		})
		connection.release();
	})	
}
exports.selectMusic=selectMusic;
//三2、从数据库中获取音乐详情内容信息
function selectMusicDetail(req,res){
	var select="select * from music where id=?";
	var params=req.query.id;
	pool.getConnection(function(err,connection){
		connection.query(select,[params],function(err,rows){
			if(err){
				throw err;
			} else{
				res.setHeader("Content-Type","text/plain");
        		res.setHeader("Access-Control-Allow-Origin","");
				res.send(rows);
			}
		})
		connection.release();
	})	
}
exports.selectMusicDetail=selectMusicDetail;

//四1、从数据库中获取电影内容信息
//用于首页
function selectMovieHome(res){
	var select="select * from movie order by time desc limit 0,16";
	pool.getConnection(function(err,connection){
		connection.query(select,function(err,rows){
			if(err){
				throw err;
			} else{
				res.setHeader("Content-Type","text/plain");
        		res.setHeader("Access-Control-Allow-Origin","");
				res.send(rows);
			}
		})
		connection.release();
	})	
}
exports.selectMovieHome=selectMovieHome;

//用于电影列表页
function selectMovie(res){
	var select="select * from movie order by time desc";
	pool.getConnection(function(err,connection){
		connection.query(select,function(err,rows){
			if(err){
				throw err;
			} else{
				res.setHeader("Content-Type","text/plain");
        		res.setHeader("Access-Control-Allow-Origin","");
				res.send(rows);
			}
		})
		connection.release();
	})	
}
exports.selectMovie=selectMovie;
//四2、从数据库中获取电影详情内容信息
function selectMovieDetail(req,res){
	var select="select * from movie where id=?";
	var params=req.query.id;
	pool.getConnection(function(err,connection){
		connection.query(select,[params],function(err,rows){
			if(err){
				throw err;
			} else{
				res.setHeader("Content-Type","text/plain");
        		res.setHeader("Access-Control-Allow-Origin","");
				res.send(rows);
			}
		})
		connection.release();
	})	
}
exports.selectMovieDetail=selectMovieDetail;
