module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/List/ListItem": require('material-ui/List/ListItem')
    }
  },
  name: "ListItem",
  ports: {
    input: {
      autoGenerateNestedIndicator: {
        type: "boolean",
        name: "autoGenerateNestedIndicator",
        "default": false
      },
      children: {
        type: "node",
        name: "children"
      },
      disableKeyboardFocus: {
        type: "boolean",
        name: "disableKeyboardFocus",
        "default": false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      initiallyOpen: {
        type: "boolean",
        name: "initiallyOpen",
        "default": false
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
      leftAvatar: {
        type: "element",
        name: "leftAvatar"
      },
      leftCheckbox: {
        type: "element",
        name: "leftCheckbox"
      },
      leftIcon: {
        type: "element",
        name: "leftIcon"
      },
      nestedItems: {
        type: "arrayOf",
        name: "nestedItems",
        "default": null
      },
      nestedLevel: {
        type: "number",
        name: "nestedLevel",
        "default": 0
      },
      nestedListStyle: {
        type: "object",
        name: "nestedListStyle"
      },
      onKeyboardFocus: {
        title: "Enable onKeyboardFocus",
        type: "boolean",
        name: "onKeyboardFocus",
        "default": false
      },
      onMouseEnter: {
        title: "Enable onMouseEnter",
        type: "boolean",
        name: "onMouseEnter",
        "default": false
      },
      onMouseLeave: {
        title: "Enable onMouseLeave",
        type: "boolean",
        name: "onMouseLeave",
        "default": false
      },
      onNestedListToggle: {
        title: "Enable onNestedListToggle",
        type: "boolean",
        name: "onNestedListToggle",
        "default": false
      },
      onTouchStart: {
        title: "Enable onTouchStart",
        type: "boolean",
        name: "onTouchStart",
        "default": false
      },
      onTouchTap: {
        title: "Enable onTouchTap",
        type: "boolean",
        name: "onTouchTap"
      },
      open: {
        type: "boolean",
        name: "open",
        "default": false
      },
      primaryText: {
        type: "node",
        name: "primaryText"
      },
      primaryTogglesNestedList: {
        type: "boolean",
        name: "primaryTogglesNestedList",
        "default": false
      },
      rightAvatar: {
        type: "element",
        name: "rightAvatar"
      },
      rightIcon: {
        type: "element",
        name: "rightIcon"
      },
      rightIconButton: {
        type: "element",
        name: "rightIconButton"
      },
      rightToggle: {
        type: "element",
        name: "rightToggle"
      },
      secondaryText: {
        type: "node",
        name: "secondaryText"
      },
      secondaryTextLines: {
        type: "enum",
        name: "secondaryTextLines",
        "default": ""
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "ListItem",
        type: "Component"
      },
      onKeyboardFocus: {
        type: "any"
      },
      onMouseEnter: {
        type: "any"
      },
      onMouseLeave: {
        type: "any"
      },
      onNestedListToggle: {
        type: "any"
      },
      onTouchStart: {
        type: "any"
      },
      onTouchTap: {
        type: "any"
      }
    }
  }
}