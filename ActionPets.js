module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/pets": require('material-ui/svg-icons/action/pets')
    }
  },
  name: "ActionPets",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPets",
        type: "Component"
      }
    }
  }
}