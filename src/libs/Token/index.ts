import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/token";
import Cookies from "js-cookie";

class Token {
  public getToken(key: string): string | undefined {
    return Cookies.get(key);
  }

  public setToken(key: string, token: string): void {
    Cookies.set(key, token);
  }

  public removeToken(key: string): void {
    Cookies.remove(key);
  }

  public removeTokenAll(): void {
    Cookies.remove(ACCESS_TOKEN_KEY);
    Cookies.remove(REFRESH_TOKEN_KEY);
  }
}

export default new Token();
