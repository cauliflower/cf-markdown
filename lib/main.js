var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var selection = require("sdk/selection");

pageMod.PageMod({
  include: "*",
  contentScriptFile: data.url("selection-manager.js")
  //,
  // onAttach: function(worker) {
  //   worker.port.on('element-url', function(imageURL) {
  //     tabs.open("https://www.google.com/searchbyimage?image_url="
  //       + encodeURIComponent(imageURL));
  //   });
  // }
});
