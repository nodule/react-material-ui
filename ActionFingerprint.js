module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/fingerprint": require('material-ui/svg-icons/action/fingerprint')
    }
  },
  name: "ActionFingerprint",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionFingerprint",
        type: "Component"
      }
    }
  }
}