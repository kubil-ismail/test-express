require("dotenv").config();

const Redis = require("ioredis");
let redis;

if (process.env.REDIS) {
  redis = new Redis({
    host: 'redis-15140.c9.us-east-1-4.ec2.cloud.redislabs.com',
    port: 15140,
    password: '33u5L2WZb2zT4PFgPQZ1k9S3IeFTraQV'
  });
}

module.exports = redis;
