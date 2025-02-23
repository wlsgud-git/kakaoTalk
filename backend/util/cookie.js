export class Cookie {
  constructor() {}

  setCookie(res, info) {
    let token_option = {
      httpOnly: true,
      secure: true,
      maxAge: 3600 * 1000,
      sameSite: "none",
    };

    for (let [key, value] of Object.entries(info)) {
      res.cookie(key, value, token_option);
    }
  }

  deleteCookie(res, info) {
    info.map((key) => res.clearCookie(key));
  }
}
