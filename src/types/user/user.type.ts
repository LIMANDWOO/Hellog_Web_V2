import { Post } from "../post/post.type";

export type UserStatus = "ACTIVE" | "BANNED";

export type UserRole = "ADMIN" | "STUDENT" | "GUEST";

export interface User {
  createdDate: string;
  email: string;
  id: number;
  modifiedDate: string;
  profileImage: string;
  role: UserRole;
  status: UserStatus;
}

export interface UserInfo {
  description: string;
  generation: number;
  id: number;
  name: string;
  user: User;
  postings: Post[];
}
