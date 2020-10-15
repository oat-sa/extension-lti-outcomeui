// Licensed under Gnu Public Licence version 2
// Copyright (c) 2020 (original work) Open Assessment Technologies SA ;

define(['taoItems/previewer/factory'], function(previewerFactory) {
    'use strict';

    const plugins = [
        {
            module: 'ltiOutcomeUi/previewer/plugins/content/scoringHighlighter',
            bundle: 'ltiOutcomeUi/loader/ltiOutcomeUi.min',
            category: 'content'
        }
    ];

    return {
        start: function(config) {
            var uri = config.uri;
            var resultIdentifier = config.resultIdentifier;
            var itemDefinition = config.itemDefinition;
            var deliveryUri = config.deliveryIdentifier;

            var uri = {
                uri: uri,
                resultId: resultIdentifier,
                itemDefinition: itemDefinition,
                deliveryUri: deliveryUri
            };

            var type = config.type;
            var state = config.state;

            previewerFactory(type, uri, state, {
                view: 'scorer',
                fullPage: true,
                hideActionBars: true,
                plugins
            });
        }
    };
});
