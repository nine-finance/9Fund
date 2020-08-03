const routes = require('next-routes')();

routes
  .add('/dashboard/:address', '/dashboard/show')
    .add('/dashboard/:address/requests', '/dashboard/requests/index')
    .add('/dashboard/:address/requests/new', '/dashboard/requests/new');

module.exports = routes;
