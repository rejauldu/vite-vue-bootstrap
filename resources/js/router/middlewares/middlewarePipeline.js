function middlewarePipeline (context, middleware, index) {
    const nextMiddleware = middleware[index]
    if(!nextMiddleware){
        return;
    }
    middlewarePipeline(context, middleware, index + 1)
    return nextMiddleware(context)
}

export default middlewarePipeline
