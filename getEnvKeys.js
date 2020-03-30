const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

module.exports = env => {
  const basePath = path.join(__dirname, '.env');
  const envPath = `${basePath}.${env.NODE_ENV}`;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  const { parsed: fileEnv } = dotenv.config({ path: finalPath });

  return Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});
};
