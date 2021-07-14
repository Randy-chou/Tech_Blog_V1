const router = require('express').Router();
const { Comment } = require('../../models');

//create
router.post('/', async (req, res) => {
    try {
        const postData = await Comment.create({
            content: req.body.content,
            user_id: req.session.userId,
            post_id: req.body.post_id,
        });

        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;