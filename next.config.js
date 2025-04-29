/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      { source: '/info', destination: '/info.json' },
      { source: '/feed', destination: '/feed.json' },
    ]
  }
}
