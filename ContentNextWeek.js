module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/next-week": require('material-ui/svg-icons/content/next-week')
    }
  },
  name: "ContentNextWeek",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentNextWeek",
        type: "Component"
      }
    }
  }
}