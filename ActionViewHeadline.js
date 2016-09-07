module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/view-headline": require('material-ui/svg-icons/action/view-headline')
    }
  },
  name: "ActionViewHeadline",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionViewHeadline",
        type: "Component"
      }
    }
  }
}