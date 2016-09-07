module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/file/cloud-off": require('material-ui/svg-icons/file/cloud-off')
    }
  },
  name: "FileCloudOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "FileCloudOff",
        type: "Component"
      }
    }
  }
}