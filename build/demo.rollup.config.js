import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import html from 'rollup-plugin-fill-html';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'demo-src/main.js',
  output: {
    file: 'docs/bundle-[hash].js',
    globals: {
      vue: 'Vue',
    },
  },
  plugins: [
    resolve(),
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
    }),
    terser(),
    html({
      template: 'demo-src/index.html',
      filename: 'index.html',
    }),
  ],
};
