module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/perm-camera-mic": require('material-ui/svg-icons/action/perm-camera-mic')
    }
  },
  name: "ActionPermCameraMic",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPermCameraMic",
        type: "Component"
      }
    }
  }
}