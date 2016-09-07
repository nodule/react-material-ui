module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/file/file-upload": require('material-ui/svg-icons/file/file-upload')
    }
  },
  name: "FileFileUpload",
  ports: {
    input: {},
    output: {
      component: {
        title: "FileFileUpload",
        type: "Component"
      }
    }
  }
}