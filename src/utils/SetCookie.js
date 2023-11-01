import { CreateToken } from "./JWTHelper";

export async function SetCookie(id, username, email) {
  const token = await CreateToken(id, username, email);
  const cookie = {
    "SeT-Cookie": `token=${token}; Max-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict;`,
  };

  return cookie;
}
