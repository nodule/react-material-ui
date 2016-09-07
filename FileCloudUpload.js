module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/file/cloud-upload": require('material-ui/svg-icons/file/cloud-upload')
    }
  },
  name: "FileCloudUpload",
  ports: {
    input: {},
    output: {
      component: {
        title: "FileCloudUpload",
        type: "Component"
      }
    }
  }
}