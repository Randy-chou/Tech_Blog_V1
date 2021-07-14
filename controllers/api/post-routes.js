const router = require('express').Router();
const { Post } = require('../../models');

//create
router.post('/', async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.userId
        });

        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//update
router.put('/', async (req, res) => {
    try {
        const postData = await Post.update({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.userId
        },{
            where: {id: req.body.post_id}
        });

        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//delete
router.delete('/', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {id: req.body.post_id}
        });

        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;