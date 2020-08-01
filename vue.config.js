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
  module.exports = getProductionConfig();
} else {
  module.exports = getDevConfig();
}