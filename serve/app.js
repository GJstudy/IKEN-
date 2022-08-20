const express=require('express')
const app=express()
const userRouter=require('./router/user/user.js')
const ProRouter=require('./router/product/product.js')
//引入cors模块，解决跨域问题
const cors=require('cors')
app.use(cors())



//设置端口
app.listen(3000,()=>{
	console.log('web服务器启动成功')
})

//将post传递的参数转为对象
app.use(express.urlencoded({
	extended:true
}))

//挂载到web服务器，并添加前缀
app.use('/v1/user',userRouter);
app.use('/v1/product',ProRouter);

//添加错误处理中间件，拦截所有的错误
app.use( (err,req,res,next)=>{
	//err 接收到的路由传递过来的错误
	console.log(err)
	//响应给前端
	res.send({code:500,msg:'服务器端错误'})
} )