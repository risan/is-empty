import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    output: {
      file: pkg.main,
      format: "cjs"
    },
    external: ["@risan/is-plain-obj"],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        babelrc: false,
        presets: [
          [
            "@babel/env",
            {
              modules: false,
              useBuiltIns: "usage",
              targets: "node 8"
            }
          ]
        ]
      })
    ]
  },
  {
    input: "src/index.js",
    output: {
      name: "isEmpty",
      file: pkg.browser,
      format: "umd"
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: "node_modules/**"
      })
    ]
  },
  {
    input: "src/index.js",
    output: {
      name: "isEmpty",
      file: pkg.browser.replace(/\.js$/i, ".min.js"),
      format: "umd"
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: "node_modules/**"
      }),
      terser()
    ]
  }
];
