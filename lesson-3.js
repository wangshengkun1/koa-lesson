import koa from 'koa'
import Router from 'koa-router'
import views from 'koa-views'
import source from 'koa-static'
const app = new koa()
const router = new Router()
//多种
// app.use(views('./views',{
//     map: {
//         ejs: 'ejs',
//         html:'underscore'
//     }
// }))
//一种
app.use(views('./views', {
    extension:'ejs' //找到文件后缀名的文件
}))
app.use(source('./static'))
router.get('/',async ctx => {
    //多种
    // await ctx.render('./index.ejs',{
    // await ctx.render('./index.html',{
    //一种
    await ctx.render('index',{
        user: {
            name: '小坤同学'
        }
    }) //render为异步函数
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)