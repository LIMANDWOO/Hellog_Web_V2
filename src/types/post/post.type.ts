import { User, UserInfo } from "../user/user.type";

export interface Post {
  comments: PostComment[];
  readonly id: number;
  status: "ACTIVE" | "BANNED";
  like_count: number;
  readonly createdDate: string;
  readonly modifiedDate: string;
  student: UserInfo;
  liked: boolean;
}

export interface PostComment {
  content: string;
  readonly createdDate: string;
  readonly id: number;
  modifiedDate: string;
  user: User;
}
