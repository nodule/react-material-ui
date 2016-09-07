module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/face": require('material-ui/svg-icons/action/face')
    }
  },
  name: "ActionFace",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionFace",
        type: "Component"
      }
    }
  }
}