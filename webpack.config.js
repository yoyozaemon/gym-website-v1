module.exports = {
  // Other configuration options...
  ignoreWarnings: [
    {
      module: /html2pdf\.js/,
      message: /Failed to parse source map/,
    },
  ],
};
