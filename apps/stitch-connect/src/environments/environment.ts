export const environment = {
  production: false,
  stitchConnectDB: process.env.STITCH_CONNECT_DB,
  minio: {
    endpoint: process.env.MINIO_ENDPOINT,
    port: process.env.MINIO_PORT,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY,
    useSSL: process.env.MINIO_USE_SSL,
    bucket: process.env.MINIO_BUCKET,
  },
};
