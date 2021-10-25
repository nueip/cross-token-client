'use strict';

import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import path from 'path';
import obfuscator from 'rollup-plugin-obfuscator';
import { optimizeLodashImports } from '@optimize-lodash/rollup-plugin';

const fileName = 'cross-token-access';
const pluginName = 'TokenInjection';
const entryFile = 'src/index.js';
const pathResolve = (p) => path.resolve(__dirname, p);
const pkg = require('./package.json');

const globalPlugins = [
  eslint({
    parser: '@babel/eslint-parser',
    throwOnError: true,
    include: ['src/**/*.js'],
    exclude: ['node_modules/**', 'dist/**'],
  }),
  json(),
  alias({
    entries: [{ find: '@', replacement: pathResolve('src') }],
  }),
  nodeResolve({ mainFields: ['jsnext', 'preferBuiltins', 'browser'] }),
  commonjs({
    transformMixedEsModules: true,
    include: ['node_modules/**', 'src/**'],
    extensions: ['.js'],
  }),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          // 按需轉譯
          useBuiltIns: 'usage',
          corejs: 3,
          targets: {
            ie: '11',
          },
        },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 3,
        },
      ],
    ],
    extensions: ['.js'],
  }),
  optimizeLodashImports(),
];

const normalPlugins = [].concat(globalPlugins);
const obfuscatorPlugins = [].concat(globalPlugins).concat([
  terser(),
  obfuscator({
    include: ['**/*.js'],
    exclude: ['node_modules/**'],
    obfuscator: require('javascript-obfuscator'),
  }),
]);

module.exports = [
  {
    input: entryFile,
    output: [
      {
        file: `dist/${fileName}.umd.js`,
        format: 'umd',
        name: pluginName,
      },
      {
        file: `dist/${fileName}.cjs.js`,
        format: 'cjs',
        name: pluginName,
        exports: 'auto',
      },
    ],
    plugins: normalPlugins,
  },
  {
    input: entryFile,
    output: [
      {
        file: `dist/${fileName}.umd.min.js`,
        format: 'umd',
        name: pluginName,
      },
      {
        file: `dist/${fileName}.cjs.min.js`,
        format: 'cjs',
        name: pluginName,
        exports: 'auto',
      },
    ],
    plugins: obfuscatorPlugins,
  },
];
