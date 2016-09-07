module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/filter-vintage": require('material-ui/svg-icons/image/filter-vintage')
    }
  },
  name: "ImageFilterVintage",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageFilterVintage",
        type: "Component"
      }
    }
  }
}