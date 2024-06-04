import { gql } from 'urql';
import { getClient } from '../framework/getClient';

export const featuredPublicAnimationsQuery = gql`
  {
    featuredPublicAnimations(filters: {}) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          bgColor
          commentsCount
          createdAt
          createdByUserId
          description
          downloads
          gifFileSize
          gifUrl
          id
          imageFileSize
          imageFrame
          imageUrl
          isLiked
          likesCount
          lottieFileSize
          lottieFileType
          lottieUrl
          jsonUrl
          lottieVersion
          name
          publishedAt
          slug
          sourceFileName
          sourceFileSize
          sourceFileType
          sourceFileUrl
          sourceName
          sourceVersion
          speed
          status
          updatedAt
          url
          videoFileSize
          videoUrl
          isCanvaCompatible
        }
      }
    }
  }
`;

type AnimationData = {
  node: {
    id: string;
    name: string;
    imageUrl: string;
    lottieUrl: string;
    jsonUrl: string;
  };
};

export async function getFeaturedPublicAnimations() {
  const result = await getClient().query(featuredPublicAnimationsQuery, {});
  const data = result?.data?.featuredPublicAnimations?.edges;
  return data as Array<AnimationData>;
}
