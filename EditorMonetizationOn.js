module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/monetization-on": require('material-ui/svg-icons/editor/monetization-on')
    }
  },
  name: "EditorMonetizationOn",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorMonetizationOn",
        type: "Component"
      }
    }
  }
}