module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/view-stream": require('material-ui/svg-icons/action/view-stream')
    }
  },
  name: "ActionViewStream",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionViewStream",
        type: "Component"
      }
    }
  }
}