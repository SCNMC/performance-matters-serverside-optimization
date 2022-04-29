const postcss = require('postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

// Wrapped in a function so we can use async/await
const minifyCss = async () => {
  // This CSS might be imported from a file, or anywhere else
  const css = `
    * {
      font-family: system-ui;
    }
  `

  // We pass in an array of the plugins we want to use: `cssnano` and `autoprefixer`
  const output = await postcss([cssnano, autoprefixer])
    .process(css)

  // The `css` property of `output` is the minified CSS as a string
  const minifiedCss = output.css

  console.log(minifiedCss);
}

minifyCss()