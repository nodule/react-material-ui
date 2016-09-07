module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/repeat-one": require('material-ui/svg-icons/av/repeat-one')
    }
  },
  name: "AvRepeatOne",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvRepeatOne",
        type: "Component"
      }
    }
  }
}