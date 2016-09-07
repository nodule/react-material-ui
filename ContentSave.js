module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/save": require('material-ui/svg-icons/content/save')
    }
  },
  name: "ContentSave",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentSave",
        type: "Component"
      }
    }
  }
}