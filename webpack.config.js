var Encore = require('@symfony/webpack-encore');

Encore
// the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .addEntry('app', [
        './resources/ts/index.ts',

    ])
    .addStyleEntry('styles', [
        './resources/sass/app.scss'
    ])
    .cleanupOutputBeforeBuild()
    .enableSassLoader()
    //.enableLessLoader()
    //.enableReactPreset()
    .enableSourceMaps(!Encore.isProduction())
    .enableTypeScriptLoader()
    .enableSingleRuntimeChunk()
// uncomment to create hashed filenames (e.g. app.abc123.css)
// .enableVersioning(Encore.isProduction())

// uncomment if you use Sass/SCSS files
// .enableSassLoader()

    //.enableReactPreset()
;

module.exports = Encore.getWebpackConfig();
