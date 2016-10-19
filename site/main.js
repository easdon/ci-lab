/*
This module bootstraps the application.
*/
const controller = require('./controller');
const model = require('./model').createModel();
const view = require('./view');

controller.init(model, view);
