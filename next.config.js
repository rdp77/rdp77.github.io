const withPWA = require('next-pwa')({
    dest: 'public'
})

const nextConfig = {
    i18n: {
        locales: ["en", "id"],
        defaultLocale: "en",
    },
    env: {
        APP_URL: process.env.APP_URL,
        APP_EMAIL: process.env.APP_EMAIL,
    }
}

module.exports = withPWA(nextConfig)