'use strict';

/**
 * contact service
 */

module.exports = () => ({
    async send(data) {
        try {
            return await strapi.plugins['email'].services.email.send({
                to: process.env.CONTACT_SENDER_EMAIL,
                ...data,
            });
        } catch (err) {
            throw err;
        }
    },
});
