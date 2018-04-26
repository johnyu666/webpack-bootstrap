const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require("webpack");
module.exports={
	mode:'development',
	entry:'./src/index.js',
	output:{

		filename:'main.js',
		path:__dirname+"/dist"
	},
	devServer:{
		contentBase:'./dist'
	},
	plugins:[
		new HtmlWebpackPlugin({template:'./src/template.html'}),
		new webpack.ProvidePlugin({
          "$": "jquery",
          "jQuery": "jquery",
          "window.jQuery": "jquery"
      })
	],
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.(jpg|jpeg|gif|)$/,use:['file-loader']}	,
			{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,use: ['url-loader']},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,use: ['url-loader']},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,use: ['url-loader']},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,use: ['url-loader']}
		]
	}
}