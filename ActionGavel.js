module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/gavel": require('material-ui/svg-icons/action/gavel')
    }
  },
  name: "ActionGavel",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionGavel",
        type: "Component"
      }
    }
  }
}