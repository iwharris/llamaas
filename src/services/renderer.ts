import config from '../config';

export const getPageMetadata = () => ({
    siteInfo: {
        title: config.constants.siteTitle,
        tagline: config.constants.tagline,
        copyright: `Copyright © ${new Date().getFullYear()}`,
    },
});
