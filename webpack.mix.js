// webpack.mix.js
let mix = require('laravel-mix');

mix
.sass('src/app.scss', 'dist/')
.sass('src/app-bonus.scss', 'dist/');
