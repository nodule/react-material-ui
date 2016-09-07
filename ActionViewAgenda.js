module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/view-agenda": require('material-ui/svg-icons/action/view-agenda')
    }
  },
  name: "ActionViewAgenda",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionViewAgenda",
        type: "Component"
      }
    }
  }
}