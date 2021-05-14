import koa from "koa"

const app = new koa()

app.use(async ctx =>{
    if(ctx.req.url === '/'){
        ctx.body="hello world"
    }
    if(ctx.req.url === '/text'){
        ctx.body = {
            code : 0
        }
    }
})
app.listen(3000)