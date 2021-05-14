import koa from 'koa'
import Router from 'koa-router'
// import bodyParser from 'koa-bodyparser'
import body from 'koa-better-body'
const app = new koa()
const router = new Router()
// app.use(bodyParser())
app.use(body())

//bodyparser
// router.get('/form',async ctx => {
//     ctx.body = ctx.query
// })
// router.post('/form',async ctx => {
//     ctx.body = ctx.request.body //request.body 是bodyparser帮助拿到的body
// })

//better-body
router.post('/form',async ctx =>{
    ctx.body=ctx.request.fields
})
router.get('/form',async ctx =>{
    ctx.body = ctx.query
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)