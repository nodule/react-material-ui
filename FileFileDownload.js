module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/file/file-download": require('material-ui/svg-icons/file/file-download')
    }
  },
  name: "FileFileDownload",
  ports: {
    input: {},
    output: {
      component: {
        title: "FileFileDownload",
        type: "Component"
      }
    }
  }
}