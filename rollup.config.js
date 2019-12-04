// rollup.config.js
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {uglify} from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';

import {version, homepage} from './package.json';

const isProd = process.env.NODE_ENV === 'production';

export default {
    input: 'src/index.js',
    output: {
        name: 'LitterPlayer',
        file: isProd ? 'dist/little-player.js' : 'docs/uncompiled/little-player.js',
        format: 'umd',
        sourcemap: !isProd,
    },
    plugins: [
        postcss({
            plugins: []
        }),
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true
        }),
        isProd && uglify({
            output: {
                preamble:
                    '/*!\n' +
                    ` * little.js v${version}\n` +
                    ` * Github: ${homepage}\n` +
                    ` * (c) 2017-${new Date().getFullYear()} Hanxiaoxin\n` +
                    ' * Released under the MIT License.\n' +
                    ' */\n',
            },
        }),
    ]
};
