import koa from 'koa'
import Router from 'koa-router'
import mid1 from './middleware/mid1'

const app = new koa()
const router = new Router()

app.use(mid1())
router.get('/',async ctx =>{
    ctx.body = 'hello'
})
router.get('/list',mid1(),async ctx =>{
    ctx.body = [1,2,3]
})

app.use(router.routes()).use(router.allowedMethods)
app.listen(3000)