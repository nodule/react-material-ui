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
        type: "node",
        name: "children"
      },
      direction: {
        type: "string",
        name: "direction"
      },
      enterDelay: {
        type: "number",
        name: "enterDelay",
        "default": 0
      },
      getLeaveDirection: {
        title: "Enable getLeaveDirection",
        type: "boolean",
        name: "getLeaveDirection"
      },
      style: {
        type: "object",
        name: "style"
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