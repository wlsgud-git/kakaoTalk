import axios from "axios";
import { config } from "../config.js";

export class Oauth {
  constructor() {}

  async naverToken(code, state) {
    try {
      let api_url = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${config.naver.client_id}&client_secret=${config.naver.client_secret}&code=${code}&state=${state}`;
      const result = await axios(api_url, { method: "get" });
      return result.data;
    } catch (err) {
      throw err;
    }
  }

  async naverRenewToken(refresh_token) {
    try {
      let api_url = `https://nid.naver.com/oauth2.0/token?grant_type=refresh_token&client_id=${config.naver.client_id}&client_secret=${config.naver.client_secret}&refresh_token=${refresh_token}`;
      const result = await axios(api_url, { method: "get" });
      return result.data;
    } catch (err) {
      throw err;
    }
  }

  async naverUserinfo(access_token) {
    try {
      let api_url = "https://openapi.naver.com/v1/nid/me";
      const result = await axios(api_url, {
        method: "get",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      return result.data;
    } catch (err) {
      throw err;
    }
  }
}
