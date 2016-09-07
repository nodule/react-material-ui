module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/file/cloud-download": require('material-ui/svg-icons/file/cloud-download')
    }
  },
  name: "FileCloudDownload",
  ports: {
    input: {},
    output: {
      component: {
        title: "FileCloudDownload",
        type: "Component"
      }
    }
  }
}