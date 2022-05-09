const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app) {
    app.use('/api/token', createProxyMiddleware({
        target: 'https://accounts.spotify.com',
        changeOrigin: true,
    }))
    app.use('/v1', createProxyMiddleware({
        target: 'https://api.spotify.com',
        changeOrigin: true,
    }))
}