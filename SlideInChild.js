module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/SlideInChild": require('material-ui/internal/SlideInChild')
    }
  },
  name: "SlideInChild",
  ports: {
    input: {
      children: {
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      direction: {
        type: "string",
        name: "direction",
        required: false
      },
      enterDelay: {
        type: "number",
        name: "enterDelay",
        "default": 0
      },
      getLeaveDirection: {
        title: "Enable getLeaveDirection",
        type: "boolean",
        name: "getLeaveDirection",
        required: true
      },
      style: {
        type: "object",
        name: "style",
        required: false
      }
    },
    output: {
      component: {
        title: "SlideInChild",
        type: "Component"
      },
      getLeaveDirection: {
        type: "any"
      }
    }
  }
}