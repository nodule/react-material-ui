module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/nature-people": require('material-ui/svg-icons/image/nature-people')
    }
  },
  name: "ImageNaturePeople",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageNaturePeople",
        type: "Component"
      }
    }
  }
}