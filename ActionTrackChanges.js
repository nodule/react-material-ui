module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/track-changes": require('material-ui/svg-icons/action/track-changes')
    }
  },
  name: "ActionTrackChanges",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionTrackChanges",
        type: "Component"
      }
    }
  }
}