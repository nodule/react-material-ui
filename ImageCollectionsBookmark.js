module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/collections-bookmark": require('material-ui/svg-icons/image/collections-bookmark')
    }
  },
  name: "ImageCollectionsBookmark",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageCollectionsBookmark",
        type: "Component"
      }
    }
  }
}