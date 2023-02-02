import { Post } from "@/types/post/post.type";

export interface PostCardProps extends Pick<Post, "id"> {
  children: React.ReactNode;
}

export interface PostCardBannerProps extends Pick<Post, "thumbnail_url"> {}

export interface PostCardLikeProps {
  children: React.ReactNode;
}

export interface PostCardFrameProps {
  children: React.ReactNode;
}

export interface PostCardBottomProps {
  children: React.ReactNode;
}

export interface PostCardDateProps {
  children: React.ReactNode;
}

export interface PostCardTitleProps {
  children: React.ReactNode;
}

export interface PostCardSummaryProps {
  children: React.ReactNode;
}
