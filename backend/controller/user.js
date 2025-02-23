import { Cookie } from "../util/cookie.js";
import { Oauth } from "../util/oauth.js";

export const LoginCallback = async (req, res) => {
  let code = req.query["code"];
  let state = req.query["state"];

  let oauth = new Oauth();
  let cookie = new Cookie();

  try {
    const { access_token, refresh_token, token_type, expires_in } =
      await oauth.naverToken(code, state);
    let user_info = await oauth.naverUserinfo(access_token);
    cookie.setCookie(res, { access_token, refresh_token });
    return res.redirect("http://localhost:3000");
  } catch (err) {
    throw err;
  }
};
