// server/config.js
module.exports = {
  AUTH0_DOMAIN: 'rmazza.auth0.com', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://rsvpDbAdmin:!amL3g3nd@ds117093.mlab.com:17093/rsvp',
  NAMESPACE: 'http://myapp.com/roles'
};