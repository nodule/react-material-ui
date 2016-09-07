module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/select-all": require('material-ui/svg-icons/content/select-all')
    }
  },
  name: "ContentSelectAll",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentSelectAll",
        type: "Component"
      }
    }
  }
}