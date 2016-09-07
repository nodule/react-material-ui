module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/branding-watermark": require('material-ui/svg-icons/av/branding-watermark')
    }
  },
  name: "AvBrandingWatermark",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvBrandingWatermark",
        type: "Component"
      }
    }
  }
}