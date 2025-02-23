import dotenv from "dotenv";
dotenv.config();

function requires(key) {
  let info = process.env[key] || undefined;
  return info;
}

export const config = {
  http: {
    port: requires("PORT"),
  },

  database: {
    user: requires("DB_USER"),
    password: requires("DB_PASSWORD"),
    host: requires("DB_HOST"),
    database: requires("DB_DATABASE"),
    port: requires("DB_PORT"),
  },

  naver: {
    client_id: requires("NAVER_CLIENT"),
    client_secret: requires("NAVER_CLIENT_SECRET"),
  },

  //   aws: {
  //     region: requires("REGION"),
  //     access_key: requires("ACCESS_KEY"),
  //     secret_key: requires("SECRET_KEY"),

  //     bucket: {
  //       memo_img: requires("IMG_BUCKET"),
  //     },
  //   },
};
