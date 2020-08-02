const baseConfig = {
  assetsDir: "assets",
}

const getDevConfig = () => {
  return {
    devServer: {
      allowedHosts: [
        '.ws-us02.gitpod.io'
      ]
    }
  }
}

const getProductionConfig = () => {
  return {
    integrity: true,
    publicPath: process.env["PUBLIC_PATH"],
    crossorigin: "anonymous"
  }
}

if (process.env.NODE_ENV === "production") {
  module.exports = Object.assign({}, baseConfig, getProductionConfig());
} else {
  module.exports = Object.assign({}, baseConfig, getDevConfig());
}