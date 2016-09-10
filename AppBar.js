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
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      className: {
        type: "string",
        name: "className",
        required: false
      },
      iconClassNameLeft: {
        type: "string",
        name: "iconClassNameLeft",
        required: false
      },
      iconClassNameRight: {
        type: "string",
        name: "iconClassNameRight",
        required: false
      },
      iconElementLeft: {
        type: "element",
        name: "iconElementLeft",
        required: false
      },
      iconElementRight: {
        type: "element",
        name: "iconElementRight",
        required: false
      },
      iconStyleLeft: {
        type: "object",
        name: "iconStyleLeft",
        required: false
      },
      iconStyleRight: {
        type: "object",
        name: "iconStyleRight",
        required: false
      },
      onLeftIconButtonTouchTap: {
        title: "Enable onLeftIconButtonTouchTap",
        type: "boolean",
        name: "onLeftIconButtonTouchTap",
        required: false
      },
      onRightIconButtonTouchTap: {
        title: "Enable onRightIconButtonTouchTap",
        type: "boolean",
        name: "onRightIconButtonTouchTap",
        required: false
      },
      onTitleTouchTap: {
        title: "Enable onTitleTouchTap",
        type: "boolean",
        name: "onTitleTouchTap",
        required: false
      },
      showMenuIconButton: {
        type: "boolean",
        name: "showMenuIconButton",
        "default": false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      title: {
        type: "node",
        name: "title",
        "default": null
      },
      titleStyle: {
        type: "object",
        name: "titleStyle",
        required: false
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