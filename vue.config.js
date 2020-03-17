module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: 'http://localhost:8081',
    disableHostCheck: true
  }
}
