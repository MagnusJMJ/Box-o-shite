/*
  TODO:
    * write ad spam script
    * write image handler
    * make sure scripts have necessary assets
    * supporting CSS
*/

var pages   = []; // Empty host array for site objects/structure
var person  = {}; // Empty host object for information storage
var curPage = 0; // value that represents currently shown category/page (e.g. 'Location')
var curSub  = 0; // value that represents currently shown sub-category (i.e. 'Country'/'City')

function setup() {
  generateSite();
  pages[0][0].all.show();
}

function keyPressed() {
  if (keyCode == 13) {
    moveOn(false);
  }
}
