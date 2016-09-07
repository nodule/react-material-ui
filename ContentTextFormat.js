module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/text-format": require('material-ui/svg-icons/content/text-format')
    }
  },
  name: "ContentTextFormat",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentTextFormat",
        type: "Component"
      }
    }
  }
}