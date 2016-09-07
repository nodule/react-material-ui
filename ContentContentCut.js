module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/content-cut": require('material-ui/svg-icons/content/content-cut')
    }
  },
  name: "ContentContentCut",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentContentCut",
        type: "Component"
      }
    }
  }
}