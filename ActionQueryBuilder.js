module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/query-builder": require('material-ui/svg-icons/action/query-builder')
    }
  },
  name: "ActionQueryBuilder",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionQueryBuilder",
        type: "Component"
      }
    }
  }
}