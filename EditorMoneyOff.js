module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/money-off": require('material-ui/svg-icons/editor/money-off')
    }
  },
  name: "EditorMoneyOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorMoneyOff",
        type: "Component"
      }
    }
  }
}