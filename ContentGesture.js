module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/gesture": require('material-ui/svg-icons/content/gesture')
    }
  },
  name: "ContentGesture",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentGesture",
        type: "Component"
      }
    }
  }
}