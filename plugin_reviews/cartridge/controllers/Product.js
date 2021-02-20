'use strict'

var server = require('server');
server.extend(module.superModule);

server.append('Show', function(req, res, next) {
    var viewData = res.getViewData();
    viewData.product.reviews = [{
        text: 'A great product - go to buy it',
        rating: 3.5
    }, {
        text: 'Very short review',
        rating: 5
    }, {
        text: 'Amazing, highliy recommended product, go now to shop it',
        rating: 4
    }];
    res.setViewData(viewData);
    next();
});
//
module.exports = server.exports();