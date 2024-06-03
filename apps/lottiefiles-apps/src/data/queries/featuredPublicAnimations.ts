import { gql } from 'urql';

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
