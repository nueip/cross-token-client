import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import { terser } from "rollup-plugin-terser";
import path from "path";
import obfuscator from "rollup-plugin-obfuscator";


const fileName = "cross-token-access";
const pluginName = "TokenInjection";
const entryFile = "src/index.js";
const pathResolve = (p) => path.resolve(__dirname, p);
const pkgVersion = require('./package.json').version;

const globalPlugins = [
    json(),
    alias({
        entries: [{ find: "@", replacement: pathResolve("src") }],
    }),
    nodeResolve({ mainFields: ["jsnext", "preferBuiltins", "browser"] }),
    commonjs({
        transformMixedEsModules: true,
        include: ["node_modules/**", "src/**"],
        extensions: [".js"],
    }),
    babel({
        babelHelpers: "bundled",
        exclude: "**/node_modules/**",
        presets: ["@babel/preset-env"],
        extensions: [".js"],
    }),
];

const normalPlugins = [].concat(globalPlugins);
const obfuscatorPlugins = [].concat(globalPlugins).concat([
    obfuscator({
        include: ["**/*.js"],
        exclude: ["node_modules/**"],
        obfuscator: require("javascript-obfuscator"),
    }),
]);

module.exports = [{
        input: entryFile,
        output: [{
            file: `dist/${fileName}.umd.js`,
            format: "umd",
            name: pluginName,
        }, ],
        plugins: normalPlugins,
    },
    {
        input: entryFile,
        output: [{
            file: `dist/${fileName}.umd.min.js`,
            format: "umd",
            name: pluginName,
            plugins: [terser()],
        }, ],
        plugins: obfuscatorPlugins,
    },
];