import { api } from "@/services/index.ts";
import {type User} from "@/types/user.ts";

interface BodyRegister {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}
interface BodyLogin {
  email: string;
  password: string;
}

export const serviceAuth = {
  register: async (body: BodyRegister) => await api.post<User>("/register", body).data,
  login: async (body: BodyLogin) => await api.post<User>("/login", body).data,
};