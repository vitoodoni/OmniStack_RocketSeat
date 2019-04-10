const Box = require('../models/box');

class BoxController {
    async store(req, res){
        const box = await Box.create({ title: "rocketseat" });
        return res.json(box);
    }
}

module.exports = new BoxController();