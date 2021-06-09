
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const { URL, URL2, URL3 } = process.env


module.exports = withNx({
  // target: 'experimental-serverless-trace',
  // assetPrefix: "/app1",
  basePath: "/app1",
  async redirects() {
    return [
      {
        source: '/app2',
        destination: `${URL2}`,
        permanent: true
      },
      {
        source: '/app3',
        destination: `${URL3}`,
        permanent: true
      },

    ]
  }
});