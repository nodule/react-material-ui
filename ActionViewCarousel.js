module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/view-carousel": require('material-ui/svg-icons/action/view-carousel')
    }
  },
  name: "ActionViewCarousel",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionViewCarousel",
        type: "Component"
      }
    }
  }
}