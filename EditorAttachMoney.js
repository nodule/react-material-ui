module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/editor/attach-money": require('material-ui/svg-icons/editor/attach-money')
    }
  },
  name: "EditorAttachMoney",
  ports: {
    input: {},
    output: {
      component: {
        title: "EditorAttachMoney",
        type: "Component"
      }
    }
  }
}