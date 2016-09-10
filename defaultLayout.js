module.exports = {
  "type": "flow",
  "nodes": [
    {
      "id": "MuiThemeProvider",
      "title": "MuiThemeProvider",
      "ns": "react-material-ui",
      "name": "MuiThemeProvider"
    },
    {
      "id": "Star",
      "title": "Star",
      "ns": "react-material-ui",
      "name": "ToggleStar"
    },
    {
      "id": "Render",
      "title": "Render",
      "ns": "react",
      "name": "render"
    },
    {
      "id": "Selector",
      "title": "Selector",
      "ns": "dom",
      "name": "querySelector",
      "context": {
        "selector": "#app"
      }
    },
    {
      "id": "Log",
      "title": "Log",
      "ns": "console",
      "name": "log",
      "context": {
        "msg": "Rendered!"
      }
    },
    {
      "id": "Finished",
      "title": "Finished",
      "ns": "console",
      "name": "log",
      "context": {
        "msg": "AutoComplete finished!"
      }
    }
  ],
  "links": [
    {
      "source": {
        "id": "Star",
        "port": "component"
      },
      "target": {
        "id": "MuiThemeProvider",
        "port": "children",
        "setting": {
          "index": 0
        }
      },
      "metadata": {
        "title": "Star component -> children MuiThemeProvider"
      }
    },
    {
      "source": {
        "id": "MuiThemeProvider",
        "port": "component"
      },
      "target": {
        "id": "Render",
        "port": "element"
      },
      "metadata": {
        "title": "MuiThemeProvider component -> element Render"
      }
    },
    {
      "source": {
        "id": "Selector",
        "port": "selection"
      },
      "target": {
        "id": "Render",
        "port": "container"
      },
      "metadata": {
        "title": "Selector selection -> container Render"
      }
    },
    {
      "source": {
        "id": "Selector",
        "port": "selection"
      },
      "target": {
        "id": "Log",
        "port": "msg"
      },
      "metadata": {
        "title": "Selector selection -> msg Log"
      }
    }
  ],
  "title": "AutoComplete Simple",
  "ns": "react-material-ui",
  "name": "defaultLayout",
  "id": "AutoComplete",
  "providers": {
    "@": {
      "url": "https://serve-chix.rhcloud.com/nodes/{ns}/{name}"
    }
  }
}