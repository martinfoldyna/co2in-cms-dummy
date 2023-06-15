'use strict';

/**
 * A set of functions called "actions" for `contact`
 */

module.exports = {
    sendProtected: async ctx => {
        try {
            await strapi.service('api::contact.contact').send(ctx.request.body);

            return { data: { success: true } };
        } catch (err) {
            throw err;
        }
    },
};
