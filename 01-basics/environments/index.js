if(env === 'development'){
    require("./dev")
}else if(env === 'production'){
    require("./prod")
}