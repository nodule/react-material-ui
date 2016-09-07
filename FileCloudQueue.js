module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/file/cloud-queue": require('material-ui/svg-icons/file/cloud-queue')
    }
  },
  name: "FileCloudQueue",
  ports: {
    input: {},
    output: {
      component: {
        title: "FileCloudQueue",
        type: "Component"
      }
    }
  }
}