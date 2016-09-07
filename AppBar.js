module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/AppBar/AppBar": require('material-ui/AppBar/AppBar')
    }
  },
  name: "AppBar",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      iconClassNameLeft: {
        type: "string",
        name: "iconClassNameLeft"
      },
      iconClassNameRight: {
        type: "string",
        name: "iconClassNameRight"
      },
      iconElementLeft: {
        type: "element",
        name: "iconElementLeft"
      },
      iconElementRight: {
        type: "element",
        name: "iconElementRight"
      },
      iconStyleLeft: {
        type: "object",
        name: "iconStyleLeft"
      },
      iconStyleRight: {
        type: "object",
        name: "iconStyleRight"
      },
      onLeftIconButtonTouchTap: {
        title: "Enable onLeftIconButtonTouchTap",
        type: "boolean",
        name: "onLeftIconButtonTouchTap"
      },
      onRightIconButtonTouchTap: {
        title: "Enable onRightIconButtonTouchTap",
        type: "boolean",
        name: "onRightIconButtonTouchTap"
      },
      onTitleTouchTap: {
        title: "Enable onTitleTouchTap",
        type: "boolean",
        name: "onTitleTouchTap"
      },
      showMenuIconButton: {
        type: "boolean",
        name: "showMenuIconButton",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
      },
      title: {
        type: "node",
        name: "title",
        "default": null
      },
      titleStyle: {
        type: "object",
        name: "titleStyle"
      },
      zDepth: {
        type: "custom",
        name: "zDepth",
        "default": null
      }
    },
    output: {
      component: {
        title: "AppBar",
        type: "Component"
      },
      onLeftIconButtonTouchTap: {
        type: "any"
      },
      onRightIconButtonTouchTap: {
        type: "any"
      },
      onTitleTouchTap: {
        type: "any"
      }
    }
  }
}