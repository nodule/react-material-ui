module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/loop": require('material-ui/svg-icons/av/loop')
    }
  },
  name: "AvLoop",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvLoop",
        type: "Component"
      }
    }
  }
}