const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const purgecssWebpackPlugin = require('purgecss-webpack-plugin');
// const glob=require('glob');
module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash:6].js',
        chunkFilename:"[name].[contenthash:6].min.js",
        publicPath: '/'
    },
    devtool:'none',
    module: {
        rules: [
            // {
            //     test:/\.(js)$/,
            //     loader:'eslint-loader',
            //     include:path.join(__dirname, '../public'),
            //     enforce:'pre',
            //     exclude: /node_modules/
            // },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                            sourceMap: false
                        },
                    }
                    , 'postcss-loader', 'sass-loader'
                ],
                include: path.join(__dirname, '../public'),
                exclude: /node_modules/
            },
            {   // 处理图片压缩
                test: /\.(png|svg|jpg|gif|jpeg|ico)$/,
                use: [
                    {
                      loader:'file-loader',
                      options:{
                        outputPath:'assets/images/',
                        publicPath:'/assets/images',
                        name:"[name][hash].[ext]"
                      }  
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            }
                        },
                    }
                ],
                include: path.join(__dirname, '../public'),
                
                exclude: /node_modules/
            },
        
            
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:6].css',
            chunkFilename: '[id].css'
        }),
        // new purgecssWebpackPlugin({
        //     paths:glob.sync(`${path.join(__dirname,'../public')}/**/*.scss`,{nodir:true})
        // })
    ],

}