import Image from "next/image";
import {
  PostCardBannerContainer,
  PostCardBottomContainer,
  PostCardContainer,
  PostCardDateText,
  PostCardFrameContainer,
  PostCardLikeContainer,
  PostCardLikeCount,
  PostCardLikeIconWrap,
  PostCardSummaryText,
  PostCardTitleText,
} from "./style";
import {
  PostCardBannerProps,
  PostCardBottomProps,
  PostCardDateProps,
  PostCardFrameProps,
  PostCardLikeProps,
  PostCardProps,
  PostCardSummaryProps,
  PostCardTitleProps,
} from "./types";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { useRouter } from "next/navigation";

const PostCard = ({ children, id }: PostCardProps) => {
  const Router = useRouter();

  return (
    <PostCardContainer onClick={() => Router.push(`/main/post/read/${id}`)}>
      {children}
    </PostCardContainer>
  );
};

const PostCardBanner = ({ thumbnail_url }: PostCardBannerProps) => {
  return (
    <PostCardBannerContainer>
      <Image
        src={thumbnail_url}
        alt={"PostCard Banner"}
        width={384}
        height={230}
        placeholder="blur"
        blurDataURL={thumbnail_url}
      />
    </PostCardBannerContainer>
  );
};

const PostCardLike = ({ children }: PostCardLikeProps) => {
  return (
    <PostCardLikeContainer>
      <PostCardLikeIconWrap>
        <FaHeart />
      </PostCardLikeIconWrap>
      <PostCardLikeCount>{children}</PostCardLikeCount>
    </PostCardLikeContainer>
  );
};

const PostCardFrame = ({ children }: PostCardFrameProps) => {
  return <PostCardFrameContainer>{children}</PostCardFrameContainer>;
};

const PostCardBottom = ({ children }: PostCardBottomProps) => {
  return <PostCardBottomContainer>{children}</PostCardBottomContainer>;
};

const PostCardDate = ({ children }: PostCardDateProps) => {
  return <PostCardDateText>{children}</PostCardDateText>;
};

const PostCardTitle = ({ children }: PostCardTitleProps) => {
  return <PostCardTitleText>{children}</PostCardTitleText>;
};

const PostCardSummary = ({ children }: PostCardSummaryProps) => {
  return <PostCardSummaryText>{children}</PostCardSummaryText>;
};

export default Object.assign(PostCard, {
  Banner: PostCardBanner,
  Like: PostCardLike,
  Frame: PostCardFrame,
  Bottom: PostCardBottom,
  Date: PostCardDate,
  Title: PostCardTitle,
  Summary: PostCardSummary,
});
