const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        proxy({
            target: "https://52.78.133.52",
            changeOrigin: true,
        })
    );
};