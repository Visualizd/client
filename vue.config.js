const baseConfig = {
  assetsDir: "assets",
  chainWebpack: webpackConfig => {
    webpackConfig.plugin("define").tap(defineConfig => {
      const runtimeEnv = defineConfig[0]["process.env"];
      const routerMode = JSON.stringify(process.env["ROUTER_MODE"] || "history");
      runtimeEnv["ROUTER_MODE"] = routerMode;
      console.log(`using router mode: ${routerMode}`);
      return defineConfig;
    })
  }
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
  const assetPath = process.env["ASSET_PATH"];
  const deployPublicPath = process.env["PUBLIC_PATH"];
  console.log(`Compiling with asset path: ${assetPath}, public path: ${deployPublicPath}`);

  // files referenced in HTML template, is placed under the /public folder
  // all files inside this folder will be copied over to deploy public path

  // this piece of code overrides the BASE_URL template in the index.html template
  // so that files referenced in the HTML template but not processed in the webpack system
  // will have a correct reference url
  const overrideBaseURLTemplate = {
    chainWebpack: config => {
      config.plugin("html").tap(args => {
        const original = args[0].templateParameters;
        args[0].templateParameters = (compilation, assets, pluginOptions) => {
          return Object.assign(original(compilation, assets, pluginOptions), {
            BASE_URL: deployPublicPath
          })
        }
        return args;
      })
    }
  };

  return Object.assign({
        integrity: true,
        publicPath: assetPath,
        crossorigin: "anonymous",
      },
      overrideBaseURLTemplate
  )
}

if (process.env.NODE_ENV === "production") {
  module.exports = Object.assign({}, baseConfig, getProductionConfig());
} else {
  module.exports = Object.assign({}, baseConfig, getDevConfig());
}