'use strict';

var properties = require('../package.json')
//var distance = require('../service/distance');

var controllers = {
    about: function(req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },

    list:  function(req, res){
        var listaTags = {
            id: '1',
            tag: '000011112222333344447777'
        }
        res.json(listaTags);

    }
};

module.exports = controllers;
