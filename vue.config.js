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
  const publicPath = process.env["PUBLIC_PATH"];
  console.log(`Compiling with public path: ${publicPath}`);
  return {
    integrity: true,
    publicPath: publicPath,
    crossorigin: "anonymous"
  }
}

if (process.env.NODE_ENV === "production") {
  module.exports = Object.assign({}, baseConfig, getProductionConfig());
} else {
  module.exports = Object.assign({}, baseConfig, getDevConfig());
}