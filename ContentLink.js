module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/link": require('material-ui/svg-icons/content/link')
    }
  },
  name: "ContentLink",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentLink",
        type: "Component"
      }
    }
  }
}