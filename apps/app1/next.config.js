// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const { URL, URL2, URL3 } = process.env


module.exports = withNx({
  // target: 'experimental-serverless-trace',
  basePath: `/app1`,
  async rewrites() {
    return [
      {
        source: '/app2',
        destination: `${URL2}/app2`
      },
      {
        source: '/app3',
        destination: `${URL3}/app3`
      },

    ]
  }
});
