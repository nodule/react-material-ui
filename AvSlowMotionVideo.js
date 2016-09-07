module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/slow-motion-video": require('material-ui/svg-icons/av/slow-motion-video')
    }
  },
  name: "AvSlowMotionVideo",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvSlowMotionVideo",
        type: "Component"
      }
    }
  }
}