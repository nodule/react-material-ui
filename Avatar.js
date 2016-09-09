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
        name: "backgroundColor"
      },
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      color: {
        type: "string",
        name: "color"
      },
      icon: {
        type: "element",
        name: "icon"
      },
      size: {
        type: "number",
        name: "size",
        "default": 0
      },
      src: {
        type: "string",
        name: "src"
      },
      style: {
        type: "object",
        name: "style"
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