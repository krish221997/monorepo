// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const { URL } = process.env


module.exports = withNx({
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  async rewrites() {
    console.log(`${URL}/app2`,"inside Rewrites =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ")
    return [
      {
        source: '/app2',
        destination: `${URL}/app2`,
      },
      {
        source: '/app3',
        destination: `${URL}/app3`,
      },
    ]
  },
  
});
