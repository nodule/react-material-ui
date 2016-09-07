module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/view-array": require('material-ui/svg-icons/action/view-array')
    }
  },
  name: "ActionViewArray",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionViewArray",
        type: "Component"
      }
    }
  }
}