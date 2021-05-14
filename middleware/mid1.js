//中间件
export default () => {
    return async (ctx,next) => {
        //todo
        // console.log('mid1');
        await next()
        //todo
    }
}