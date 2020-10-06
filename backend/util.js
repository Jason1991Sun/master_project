import jsonwebtoken from "jsonwebtoken";
import config from "./config";

export const getToken = (user) => {
  // generate login token which will expire after 60 seconds
  return jsonwebtoken.sign(user.toJSON(), config.JWT_SECRET, {
    expiresIn: 60000,
  });
};
