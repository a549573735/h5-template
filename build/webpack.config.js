let dev = require('./webpack.development.config');
let prod = require('./webpack.production.config');
let base =require('./webpack.base.config')
let merge=require('webpack-merge');



module.exports=(env)=>{
    if(env.production){  //生产环境
        return merge(base,prod)
    }else{
        return merge(base,dev)
    }
}

