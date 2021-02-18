module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "/node_modules/scss-media-queries-system/media-queries.scss";
        @import "/node_modules/scss-flexbox-grid-system/flexbox-grid.scss";
        `,
      },
    },
  },
};
