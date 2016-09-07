module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/camera-enhance": require('material-ui/svg-icons/action/camera-enhance')
    }
  },
  name: "ActionCameraEnhance",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionCameraEnhance",
        type: "Component"
      }
    }
  }
}