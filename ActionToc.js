module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/toc": require('material-ui/svg-icons/action/toc')
    }
  },
  name: "ActionToc",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionToc",
        type: "Component"
      }
    }
  }
}