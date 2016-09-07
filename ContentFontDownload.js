module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/font-download": require('material-ui/svg-icons/content/font-download')
    }
  },
  name: "ContentFontDownload",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentFontDownload",
        type: "Component"
      }
    }
  }
}