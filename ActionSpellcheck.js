module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/spellcheck": require('material-ui/svg-icons/action/spellcheck')
    }
  },
  name: "ActionSpellcheck",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSpellcheck",
        type: "Component"
      }
    }
  }
}