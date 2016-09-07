module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/file/cloud-done": require('material-ui/svg-icons/file/cloud-done')
    }
  },
  name: "FileCloudDone",
  ports: {
    input: {},
    output: {
      component: {
        title: "FileCloudDone",
        type: "Component"
      }
    }
  }
}