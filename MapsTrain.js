module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/train": require('material-ui/svg-icons/maps/train')
    }
  },
  name: "MapsTrain",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsTrain",
        type: "Component"
      }
    }
  }
}