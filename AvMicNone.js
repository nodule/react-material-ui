module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/mic-none": require('material-ui/svg-icons/av/mic-none')
    }
  },
  name: "AvMicNone",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvMicNone",
        type: "Component"
      }
    }
  }
}