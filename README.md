# webpack整合bootstrap
## 安装
+ 第1步安装bootstrap-loader  
`npm install bootstrap-loader --save`
    + 如果安装完毕，提示有些依赖的loader没有安装，要把它们装上。
+ 第2步安装bootstrap
    * 如果你使用的是Bootstrap3  
` npm install bootstrap-sass --save `
+ 如果你使用的是Bootstrap4，注意上官网检查一下最新的版本。  
`npm install bootstrap@v4.0.0-alpha.5 --save`
+ 第3步 安装其他样式处理loader  
`npm install css-loader node-sass resolve-url-loader sass-loader style-loader url-loader --save`
+ 如果你使用的是Bootstrap 4,可能会需要安装个loader  
`npm install postcss-loader --save`

## 使用
+ 在JS中的引入
`require('bootstrap-loader');`
+ webpack.config.js的加载器
```
{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,use: ['url-loader']},
{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,use: ['url-loader']},
{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,use: ['url-loader']},
{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,use: ['url-loader']}
```
+ webpack.config.js插件的安装
`var webpack = require('webpack')`

```
plugins: [
      new webpack.ProvidePlugin({
          "$": "jquery",
          "jQuery": "jquery",
          "window.jQuery": "jquery"
      })
  ]
  ```

