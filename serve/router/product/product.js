//引入express模块
const express=require('express')
//引入连接池模块
const pool=require('../../pool.js')
//创建路由器对象
const r=express.Router()
// 首页最近推荐
r.get('/recommend',(req,res,next)=>{
  var obj=req.query
  pool.query('select * from recommend',[obj],(err,r)=>{
		if(err){
			next(err);
			return
		}
		if(r.length===0){
			res.send({code:501,msg:'查询失败'});
		}else{
			res.send({code:200,msg:'查询成功',data:r})
		}
	})
})
// 首页家装
r.get('/home',(req,res,next)=>{
  var obj=req.query
  pool.query('select * from home_example',[obj],(err,r)=>{
		if(err){
			next(err);
			return
		}
		if(r.length===0){
			res.send({code:501,msg:'查询失败'});
		}else{
			res.send({code:200,msg:'查询成功',data:r})
		}
	})
})

// 首页点击最近推荐后，进去后的大内容
r.get('/new',(req,res,next)=>{
	var obj=req.query
	console.log(obj);
	pool.query('select * from proitem where recid=?',[obj.rid],(err,r)=>{
		if(err){
			next(err);
			return
		}
		res.send({data:r})
	})
})
// 各类点进去后商品展示
r.get('/new_pro',(req,res,next)=>{
	var obj=req.query
	console.log(obj);
	pool.query(`select * from products where classifyid=?`,[obj.cid],(err,r)=>{
		if(err){
			next(err);
			return
		}
		res.send({data:r})
	})
})

// 收藏、购物车前查id
r.get('/select',(req,res,next)=>{
	var obj=req.query
	console.log(obj);
	pool.query(`select * from products where pid=?`,[obj.pid],(err,r)=>{
		if(err){
			next(err);
			return
		}
		res.send({data:r})
	})
})
// 添加到收藏夹
r.post('/collect',(req,res,next)=>{
	var obj=req.body
	console.log(obj);
	pool.query(`insert into collect set ?`,[obj],(err,r)=>{
		if(err){
			next(err);
			return
		}
		res.send({data:r})
	})
})
// 查询收藏夹中的内容
r.post('/list',(req,res,next)=>{
	var obj=req.body
	pool.query('select * from collect where uphone=?',[obj.uphone],(err,r)=>{
		if(err){
			next(err);
			return
		}
		if(r.length===0){
			res.send({code:501,msg:'查询失败'});
		}else{
			res.send({code:200,msg:'查询成功',data:r})
		}
	})
})
// 删除收藏夹内容
r.delete('/delectList',(req,res,next)=>{
	var obj=req.query
	pool.query('delete from collect where coid=?',[obj.coid],(err,r)=>{
		if(err){
			next(err);
			return;
		}
		if(r.affectedRows===0){
			res.send({code:501,msg:'删除失败'});
		}else{
			res.send({code:200,msg:'删除成功'});
		}
	})
})

// ------------------------
// 添加到购物车
r.post('/car',(req,res,next)=>{
	var obj=req.body
	console.log(obj);
	pool.query(`insert into car set ?`,[obj],(err,r)=>{
		if(err){
			next(err);
			return
		}
		res.send({data:r})
	})
})
// 查询购物车中的内容
r.post('/carlist',(req,res,next)=>{
	var obj=req.body
	pool.query('select * from car where uphone=?',[obj.uphone],(err,r)=>{
		if(err){
			next(err);
			return
		}
		if(r.length===0){
			res.send({code:501,msg:'查询失败'});
		}else{
			res.send({code:200,msg:'查询成功',data:r})
		}
	})
})
// 删除购物车内容
r.delete('/delectcarList',(req,res,next)=>{
	var obj=req.query
	pool.query('delete from car where carid=?',[obj.carid],(err,r)=>{
		if(err){
			next(err);
			return;
		}
		if(r.affectedRows===0){
			res.send({code:501,msg:'删除失败'});
		}else{
			res.send({code:200,msg:'删除成功'});
		}
	})
})
//批量删除
r.delete('/deletes',(req,res,next)=>{
	var obj=req.query
	pool.query('delete from car where in ?',[obj.carid],(err,r)=>{
		if(err){
			next(err);
			return;
		}
		if(r.affectedRows===0){
			res.send({code:501,msg:'删除失败'});
		}else{
			res.send({code:200,msg:'删除成功'});
		}
	})
})

// 所有商品
r.get('/products',(req,res,next)=>{
	var obj=req.query
	pool.query('select * from products',[obj],(err,r)=>{
		if(err){
			next(err);
			return
		}
		if(r.length===0){
			res.send({code:501,msg:'查询失败'});
		}else{
			res.send({code:200,msg:'查询成功',data:r})
		}
	})
})
// 模糊查询
r.get('/searchpro',(req,res,next)=>{
	var obj=req.query.cname
	var cname='%'+obj+'%'
	pool.query('select * from products inner join classify on classifyid=cid and cname like ?',[cname],(err,r)=>{
		if(err){
			next(err);
			return
		}
		if(r.length===0){
			res.send({code:501,msg:'查询失败'});
		}else{
			res.send({code:200,msg:'查询成功',data:r})
		}
	})
})


//暴露路由对象
module.exports=r