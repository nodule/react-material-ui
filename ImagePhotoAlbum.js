module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/photo-album": require('material-ui/svg-icons/image/photo-album')
    }
  },
  name: "ImagePhotoAlbum",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImagePhotoAlbum",
        type: "Component"
      }
    }
  }
}