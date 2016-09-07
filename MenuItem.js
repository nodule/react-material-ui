module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/MenuItem/MenuItem": require('material-ui/MenuItem/MenuItem')
    }
  },
  name: "MenuItem",
  ports: {
    input: {
      animation: {
        title: "Enable animation",
        type: "boolean",
        name: "animation"
      },
      checked: {
        type: "boolean",
        name: "checked",
        "default": false
      },
      children: {
        type: "node",
        name: "children"
      },
      desktop: {
        type: "boolean",
        name: "desktop",
        "default": false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      focusState: {
        type: "enum",
        name: "focusState",
        "default": ""
      },
      innerDivStyle: {
        type: "object",
        name: "innerDivStyle"
      },
      insetChildren: {
        type: "boolean",
        name: "insetChildren",
        "default": false
      },
      leftIcon: {
        type: "element",
        name: "leftIcon"
      },
      menuItems: {
        type: "node",
        name: "menuItems"
      },
      onTouchTap: {
        title: "Enable onTouchTap",
        type: "boolean",
        name: "onTouchTap"
      },
      primaryText: {
        type: "node",
        name: "primaryText"
      },
      rightIcon: {
        type: "element",
        name: "rightIcon"
      },
      secondaryText: {
        type: "node",
        name: "secondaryText"
      },
      style: {
        type: "object",
        name: "style"
      },
      value: {
        type: "any",
        name: "value"
      }
    },
    output: {
      component: {
        title: "MenuItem",
        type: "Component"
      },
      animation: {
        type: "any"
      },
      onTouchTap: {
        type: "any"
      }
    }
  }
}