module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/timeline": require('material-ui/svg-icons/action/timeline')
    }
  },
  name: "ActionTimeline",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionTimeline",
        type: "Component"
      }
    }
  }
}