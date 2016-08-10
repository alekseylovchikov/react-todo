module.exports = {
    entry: './src/App.jsx',
    output: {
        path: __dirname + '/public/js/',
        filename: 'bundle.js',
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx'],
        alias: {
        }
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                },
                test: /\.jsx?$/,
                exlcude: /node_modules/,
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map',
};