module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/low-priority": require('material-ui/svg-icons/content/low-priority')
    }
  },
  name: "ContentLowPriority",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentLowPriority",
        type: "Component"
      }
    }
  }
}