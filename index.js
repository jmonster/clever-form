/* jshint node: true */
'use strict';

const path = require('path');

module.exports = {
  name: 'clever-form',

  included: function(app) {
    app.import(path.join('vendor', 'animate.css'));
    app.import(path.join('vendor', 'grid.css'));
    app.import(path.join('vendor', 'app.css'));
  }
};
