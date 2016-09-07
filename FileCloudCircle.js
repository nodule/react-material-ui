module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/file/cloud-circle": require('material-ui/svg-icons/file/cloud-circle')
    }
  },
  name: "FileCloudCircle",
  ports: {
    input: {},
    output: {
      component: {
        title: "FileCloudCircle",
        type: "Component"
      }
    }
  }
}