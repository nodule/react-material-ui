module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/chrome-reader-mode": require('material-ui/svg-icons/action/chrome-reader-mode')
    }
  },
  name: "ActionChromeReaderMode",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionChromeReaderMode",
        type: "Component"
      }
    }
  }
}