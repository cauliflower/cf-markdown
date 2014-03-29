var data = require("sdk/self").data;
var selection = require("sdk/selection");
var widgets = require("sdk/widget");

var widget = widgets.Widget({
  id: "cf-markdown",
  label: "Markdown",
  contentURL: data.url("icon.png"),
  onClick: function() {
    alert("ELO");
  }
});
