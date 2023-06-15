module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/contact-protected',
            handler: 'contact.sendProtected',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
