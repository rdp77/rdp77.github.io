const production = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
    disable: !production,
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