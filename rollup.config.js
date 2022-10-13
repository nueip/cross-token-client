import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import cleanup from 'rollup-plugin-cleanup';
import path from 'path';

const fileName = 'cross-token-access';
const pluginName = 'TokenInjection';
const entryFile = 'src/index.js';
const pkgVer = require('./package.json').version;

const globalPlugins = [
  eslint({
    parser: '@babel/eslint-parser',
    throwOnError: true,
    include: ['src/**/*.js'],
    exclude: ['node_modules/**', 'dist/**'],
  }),
  json(),
  alias({
    entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
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
  cleanup({ comments: 'istanbul', extensions: ['js'] }),
];

const normalPlugins = [].concat(globalPlugins);
const minifyPlugins = [].concat(globalPlugins).concat([terser()]);

export default [
  {
    input: entryFile,
    output: [
      {
        file: `dist/${fileName}-${pkgVer}.umd.js`,
        format: 'umd',
        name: pluginName,
      },
      {
        file: `dist/${fileName}-${pkgVer}.cjs.js`,
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
        file: `dist/${fileName}-${pkgVer}.umd.min.js`,
        format: 'umd',
        name: pluginName,
      },
      {
        file: `dist/${fileName}-${pkgVer}.cjs.min.js`,
        format: 'cjs',
        name: pluginName,
        exports: 'auto',
      },
    ],
    plugins: minifyPlugins,
  },
];
