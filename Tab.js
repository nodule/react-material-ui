module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Tabs/Tab": require('material-ui/Tabs/Tab')
    }
  },
  name: "Tab",
  ports: {
    input: {
      className: {
        type: "string",
        name: "className"
      },
      icon: {
        type: "node",
        name: "icon"
      },
      index: {
        type: "any",
        name: "index"
      },
      label: {
        type: "node",
        name: "label"
      },
      onActive: {
        title: "Enable onActive",
        type: "boolean",
        name: "onActive"
      },
      onTouchTap: {
        title: "Enable onTouchTap",
        type: "boolean",
        name: "onTouchTap"
      },
      selected: {
        type: "boolean",
        name: "selected"
      },
      style: {
        type: "object",
        name: "style"
      },
      value: {
        type: "any",
        name: "value"
      },
      width: {
        type: "string",
        name: "width"
      }
    },
    output: {
      component: {
        title: "Tab",
        type: "Component"
      },
      onActive: {
        type: "any"
      },
      onTouchTap: {
        type: "any"
      }
    }
  }
}