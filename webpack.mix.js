const mix = require('laravel-mix');
const isAnalyze = process.argv.join('').includes('--analyze');
if(isAnalyze){
    require('laravel-mix-bundle-analyzer');
    mix.bundleAnalyzer();
}
mix.webpackConfig({
    externals: {
        jquery: 'jQuery'
    },
    resolve: {
        alias: {
            '@': path.resolve('./source/js'),
            '@assets': path.resolve('./source'),
            '@images': path.resolve('./source/images'),
        },
    },
    module: {
        rules: [

            {
                test: /\.jsx?$/,
                exclude: [/\.test\.jsx?$/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: Config.babel()
                    }
                ]
            },
        ]
    }
});
// Turn off default autoload setup for jQuery
// mix.autoload({});
mix.setPublicPath('assets/')
    .setResourceRoot('/assets/')
    .sass('source/scss/style.scss', 'css')
    .options({processCssUrls: false})
    .js('source/js/main.js', 'js')
    .extract()
    .copyDirectory('source/images', 'assets/images')
    .copyDirectory('source/fonts', 'assets/fonts')
    .version();