exports.resourceHref_macro = function(tag) {
   var appId = tag.parameters[0];
   var path = tag.parameters[1] || '';
   return ('../resources/' + appId + '/' + path).replace(/\/+/g, '/');
};

exports.ajaxHref_macro = function(tag) {
   var appId = tag.parameters[0];
   var path = tag.parameters[1] || '';
   return ['../server/' + appId + '/' + path].join('/').replace(/\/+/g, '/');
};

exports.random_macro = function() {
   return [Math.random() * Date.now(), Math.random() * Date.now()].join('.');
};
