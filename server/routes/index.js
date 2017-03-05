export default async (ctx, next) => {
    if (ctx.path.match(/^\/api/)) {
        return await require('./api').routes()(ctx, next)
    }
     await require('./render').default(ctx, next) 
}