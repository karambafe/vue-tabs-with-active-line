import vue from 'rollup-plugin-vue';
import hash from 'rollup-plugin-hash';
import uglify from 'rollup-plugin-uglify-es';
import copy from 'rollup-plugin-copy';
import html from 'rollup-plugin-fill-html';

// export default {
//   input: 'demo-src/main.js',
//   output: {
//     file: 'demo/build.js',
//     format: 'iife',
//   },
//   plugins: [
//     vue({
//       css: true,
//       compileTemplate: true,
//     }),
//     uglify(),
//     hash({
//       dest: 'demo/main.[hash:8].js',
//     }),
//     copy({
//       "demo-src/index.html": "demo/index.html",
//     }),
//   ],
// };

export default {
  input: 'demo-src/main.js',
  dest: 'demo/bundle-[hash].js',
  plugins: [
    vue({
      css: true,
      compileTemplate: true,
    }),
    uglify(),
    html({
      template: 'demo-src/index.html',
      filename: 'index.html',
    }),
  ],
};
