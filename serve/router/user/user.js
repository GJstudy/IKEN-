//引入express模块
const express=require('express')
//引入连接池模块
const pool=require('../../pool.js')
//创建路由器对象
const r=express.Router()

// 登录接口：http://127.0.0.1:3000/v1/user/login
r.post('/login',(req,res,next)=>{
	//获取post传递的参数
	var obj=req.body
	//执行SQL命令
	console.log(obj);
	pool.query('select * from user where uphone=? and upwd=?',[obj.uphone,obj.upwd],(err,r)=>{
		if (err)
		{
			next(err);
			return;
		}
		if(r.length!=0){
			res.send({code:200,msg:"登录成功",data:r})
		}else{
			res.send({code:501,msg:"登陆失败",data:r})
		}
	})
})
/*
// 查找管理员http://127.0.0.1:3000/v1/admin/info?
r.get('/info',(req,res,next)=>{
	var obj=req.query;
	console.log(obj);
	pool.query('select * from admin where aid=? or aname=?',[obj.aid,obj.aname],(err,r)=>{
		if(err){
			next(err);
			return
		}
		if(r.length===0){
			res.send({code:501,msg:'查询失败'});
		}else{
			res.send({code:200,msg:'查询成功',data:r})
		}
		// console.log(r);
	})
})


// 删除管理员http://127.0.0.1:3000/v1/admin/delete/
r.delete('/delete/:aid',(req,res,next)=>{
	var obj = req.params;
	pool.query('delete from admin where aid=?',[obj.aid],(err,r)=>{
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
*/

// 添加管理员http://127.0.0.1:3000/v1/user/info_in
r.post('/info_in',(req,res,next)=>{
	var obj=req.body;
	console.log(obj);
	 if(!obj.uphone){
		res.send({code:402,msg:'uphone不能为空'})
		return;
	}else if(!obj.upwd){
		res.send({code:403,msg:'upwd不能为空'})
		return;
	}
	pool.query('select * from user where uphone=?',[obj.uphone],(err,r)=>{
		if(err){
			throw err;
		}
		if(r.length!=0){
			res.send({code:404,msg:'手机号已占用'});
			return
		}
	})
	//将数据插入到数据库表中
	pool.query('insert into user set?',[obj],(err,r)=>{
		if(err){
			next(err);
			return;
		}
		console.log(r);
		//执行成功再响应
		if(r.affectedRows==0){
			res.send({code:503,msg:'添加失败，请检查信息',data:r})
		}else{
			res.send({code:200,msg:'添加成功'})
		}
	})
})
/*
//修改管理员信息http://127.0.0.1:3000/v1/admin/update
r.put('/update',(req,res,next)=>{
	var obj=req.body;
	console.log(obj);
	//UPDATE 表名 SET 字段名1='a',字段名2='b' WHERE 字段名3='c';
	pool.query('UPDATE admin SET aname=?,apwd=? WHERE aid=?',[obj.aname,obj.apwd,obj.aid],(err,r)=>{
		if(err){
			next(err);
			return;
		}
		if(r.affectedRows===0){
			res.send({code:501,msg:'修改错误'})
		}else{
			res.send({code:200,msg:'修改成功',msg:r})
		}
	})
})
*/
//暴露路由对象
module.exports=r