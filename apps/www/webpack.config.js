const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.tsx",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
		publicPath: "/",
	},
	devtool: "source-map",
	devServer: {
		static: "./dist",
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.((m?js)|jsx|tsx)$/,
				exclude: /(node_modules)/,
				use: {
					// `.swcrc` can be used to configure swc
					loader: "swc-loader"
				}
			},
			{
				test: /\.(s[ca]ss|css)$/,
				exclude: /(node_modules)/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader"
					}
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "Development",
			template: path.resolve(__dirname, "./public/index.html")
		}),
		// new ESLintPlugin()
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				minify: TerserPlugin.swcMinify,
				// `terserOptions` options will be passed to `swc` (`@swc/core`)
				// Link to options - https://swc.rs/docs/config-js-minify
				terserOptions: {},
			}),
		],
	},
};