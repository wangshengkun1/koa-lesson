import koa from 'koa'
import Router from 'koa-router'


const app = new koa()
const router = new Router()
const proxy = new Router()

router.get('/',async ctx =>{  //中间件
    ctx.body = 'hello world!'
})
router.get('/list',async ctx =>{
    ctx.body = [1,2,30]
})
router.get('/list/:name',async ctx =>{ //动态接口 :name
    ctx.body = {
        name : ctx.params.name,
        time : Date.now()
    }
})
router.post('/list2',async ctx =>{
    ctx.body = {
        code:0,
        list:[1,2,5]
    }
})
proxy.get('/find',async ctx =>{
    ctx.redirect('/list')  //重定向
})

const group = new Router({
    prefix:'/group'
})
group.get('/',async ctx =>{
    ctx.body = "abc"
})
group.get('/list',async ctx =>{
    ctx.body = [1,2,3]
})
//嵌套路由
const sub = new Router({
    prefix: '/sub'
})
sub.get('/froms/:uid', async ctx =>{
    ctx.body = {
        code: 0,
        time: Date.now(),
        uid: ctx.params.uid 
    }
})
sub.get('/froms',async ctx =>{
    ctx.body = {
        code: 0,
        froms:true
    }
})
//定义nest
const nest = new Router()
//把sub嵌套进nest等待挂载
nest.use('/nest', sub.routes())
//挂载nest
app.use(nest.routes())

app.use(router.routes()).use(router.allowedMethods()) //挂载
app.use(proxy.routes()).use(proxy.allowedMethods()) //allowedMethods预检
app.use(group.routes())
app.listen(3000)