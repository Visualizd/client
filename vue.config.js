// inject ROUTER_MODE from build environment variable to runtime
// see: https://github.com/wusatosi/client/blob/1b15c03d4f50d59fbeec6e8397b68d40320e5b1b/.env#L23-L29
function injectRouterModeEnvToRuntime(webpackConfig) {
  webpackConfig.plugin("define").tap(defineConfig => {
    const runtimeEnv = defineConfig[0]["process.env"];
    const routerMode = JSON.stringify(process.env["ROUTER_MODE"] || "history");
    runtimeEnv["ROUTER_MODE"] = routerMode;
    console.log(`using router mode: ${routerMode}`);
    return defineConfig;
  })
}

const baseConfig = {
  assetsDir: "assets",
  chainWebpack: webpackConfig => {
    injectRouterModeEnvToRuntime(webpackConfig);
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
  // this is where assets will be deployed, normally on jsdelivr's cdn
  const assetPath = process.env["ASSET_PATH"];
  // this is the main domain our site is hosted on, for example visualizd.github.io
  const deployPublicPath = process.env["PUBLIC_PATH"];
  console.log(`Compiling with asset path: ${assetPath}, public path: ${deployPublicPath}`);

  // Files referenced directly in HTML template should be placed under the /public folder
  // all files inside the /public/ directory will be copied over to deploy public path,
  // on the same domain and prefix as index.html.
  //          (ex: visualizd.github.io/client/ instead of cdn.jsdelivr.net)
  // This following piece of code overrides the BASE_URL template in the index.html template
  // so that files referenced in the HTML template but not processed in the webpack system
  // will have a correct reference url
  const overrideBaseURLTemplate = {
    chainWebpack: config => {
      config.plugin("html").tap(args => {
        // vue-cli has this config set to a special function,
        // to make sure build will work, this function is
        // reserved
        const original = args[0].templateParameters;
        args[0].templateParameters = (compilation, assets, pluginOptions) => Object.assign(
            // ensure the original function is reserved
            original(compilation, assets, pluginOptions),
            // overrides the base url to that of the deployment path instead of asset path
            {
              BASE_URL: deployPublicPath
            }
        )
        return args;
      })
    }
  };

  return Object.assign({
    // enable sub-resource integrity check as our executables are deployed on other's infra
    // there were records where jsdelivr was poisoned
    // see: https://github.com/jsdelivr/jsdelivr/issues/18049
        integrity: true,
        publicPath: assetPath,
    // necessary for assests hosted by jsdelivr cdn to work as it counts as cors
        crossorigin: "anonymous",
      },
      overrideBaseURLTemplate
  )
}

if (process.env.NODE_ENV === "production") {
  module.exports = Object.assign(baseConfig, getProductionConfig());
} else {
  module.exports = Object.assign(baseConfig, getDevConfig());
}