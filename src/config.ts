import dotenv from 'dotenv';

dotenv.config();

export default {
    server: {
        port: parseInt(process.env.SERVER_PORT || '3000'),
        hostname: process.env.SERVER_HOSTNAME || 'localhost',
    },
    default: {
        adminUsername: process.env.ADMIN_DEFAULT_USERNAME || 'admin',
        adminPassword: process.env.ADMIN_DEFAULT_PASSWORD || 'admin',
    },
    db: {},
    constants: {
        siteTitle: 'LLAMaaS',
        tagline: 'Llama Loot and Merchandise as a Service',
        author: process.env.npm_package_author,
        bugReportUrl: process.env.npm_package_bugs_url,
    },
};
