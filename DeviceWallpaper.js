module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/wallpaper": require('material-ui/svg-icons/device/wallpaper')
    }
  },
  name: "DeviceWallpaper",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceWallpaper",
        type: "Component"
      }
    }
  }
}