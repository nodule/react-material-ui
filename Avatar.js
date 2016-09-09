module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Avatar/Avatar": require('material-ui/Avatar/Avatar')
    }
  },
  name: "Avatar",
  ports: {
    input: {
      backgroundColor: {
        type: "string",
        name: "backgroundColor",
        required: false
      },
      children: {
        type: "node",
        name: "children",
        required: false
      },
      className: {
        type: "string",
        name: "className",
        required: false
      },
      color: {
        type: "string",
        name: "color",
        required: false
      },
      icon: {
        type: "element",
        name: "icon",
        required: false
      },
      size: {
        type: "number",
        name: "size",
        "default": 0
      },
      src: {
        type: "string",
        name: "src",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      }
    },
    output: {
      component: {
        title: "Avatar",
        type: "Component"
      }
    }
  }
}