const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/',async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Comment
                },
                {
                    model: User
                }
            ],
        });

        const posts = postData.map((post) =>
            post.get({ plain: true })
        );

        res.render('all', {posts, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/comment/:id', async (req, res) => {
    try {
        const commentData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    include: [{model: User}]
                },
                {
                    model: User
                }
            ],
        });

        const dataObj = commentData.get({plain:true});

        res.render('comment', {...dataObj, loggedIn: req.session.loggedIn} );
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    res.render('login', {loggedIn: req.session.loggedIn});
});

router.get('/signup', async (req, res) => {
    res.render('signup', {loggedIn: req.session.loggedIn});
});

router.get('/dash', withAuth , async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.userId
            },
            include: [
                {
                    model: Comment
                },
                {
                    model: User
                }
            ],
        });

        const posts = postData.map((post) =>
            post.get({ plain: true })
        );

        res.render('dash', {posts, loggedIn: req.session.loggedIn});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dash/new', withAuth , async (req, res) => {
    res.render('newPost', {loggedIn: req.session.loggedIn});
});

router.get('/dash/edit/:id', withAuth , async (req, res) => {
    try {
        const commentData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User
                }
            ],
        });

        const dataObj = commentData.get({plain:true});

        res.render('editPost', {...dataObj, loggedIn: req.session.loggedIn} );
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;