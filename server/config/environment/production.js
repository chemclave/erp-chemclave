'use strict';

// Production specific configuration
// =================================

var conf = JSON.parse(process.env.APP_CONFIG);

var mongoPassword = 'y7uy7uy7u';

module.exports = {
        // Server IP
        ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined,

        // Server port
        port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080,

        // MongoDB connection options
        mongo: {
                uri: process.env.MONGODB_URI || process.env.MONGOHQ_URL || process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME || "mongodb://" + conf.mongo.user + ":" + mongoPassword + "@" + conf.mongo.hostString
        }
};
//# sourceMappingURL=production.js.map
