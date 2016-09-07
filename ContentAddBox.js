module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/add-box": require('material-ui/svg-icons/content/add-box')
    }
  },
  name: "ContentAddBox",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentAddBox",
        type: "Component"
      }
    }
  }
}