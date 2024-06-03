
module.exports = {
  output: 'export',
  pageExtensions: [ 'jsx' ],
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/404.html': { page: '/404' }
    }
  }
}

