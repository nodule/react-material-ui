module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/radio": require('material-ui/svg-icons/av/radio')
    }
  },
  name: "AvRadio",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvRadio",
        type: "Component"
      }
    }
  }
}