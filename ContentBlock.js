module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/block": require('material-ui/svg-icons/content/block')
    }
  },
  name: "ContentBlock",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentBlock",
        type: "Component"
      }
    }
  }
}