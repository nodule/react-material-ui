module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/three-d-rotation": require('material-ui/svg-icons/action/three-d-rotation')
    }
  },
  name: "ActionThreeDRotation",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionThreeDRotation",
        type: "Component"
      }
    }
  }
}