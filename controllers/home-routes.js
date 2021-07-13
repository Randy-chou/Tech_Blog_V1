const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Comment
                },
            ],
        });

        const posts = postData.map((post) =>
            post.get({ plain: true })
        );

        res.render('all', {posts});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/dash', async (req, res) => {
    res.render('dash');
});

router.get('/comment', async (req, res) => {
    res.render('dash');
});

module.exports = router;