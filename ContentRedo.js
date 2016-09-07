module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/redo": require('material-ui/svg-icons/content/redo')
    }
  },
  name: "ContentRedo",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentRedo",
        type: "Component"
      }
    }
  }
}