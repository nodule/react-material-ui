module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/closed-caption": require('material-ui/svg-icons/av/closed-caption')
    }
  },
  name: "AvClosedCaption",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvClosedCaption",
        type: "Component"
      }
    }
  }
}