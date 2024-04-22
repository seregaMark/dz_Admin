function cors(req, res, next) {
    const { origin } = req.headers;
    res.header('Access-Control-Allow-Origin', 'localhost:3005');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    next();
}

module.exports = {
    cors
}