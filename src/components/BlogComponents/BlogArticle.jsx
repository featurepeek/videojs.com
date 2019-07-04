import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';
import { H1 } from '../Typography';

const getAvatarLink = githubUsername =>
  `https://github.com/${githubUsername}.png?size=50`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 6em;
`;

const AvatarCol = styled.div`
  flex-grow: 0;
  margin-right: 1.25em;
`;

const Avatar = styled.img`
  border-radius: 50%;
  display: block;
  width: 3.125em;
  height: 3.125em;
  min-width: 3.125em;
  min-height: 3.125em;
`;

const TextCol = styled.div`
  flex-grow: 1;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #424242;
  font-size: 18px;
  font-weight: 300;
  height: 2.78em;
  margin-bottom: 1.5em;
`;

const Text = styled.div`
  h1 {
    font-size: 28px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1em;
  }

  p {
    color: #424242;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.78;
    margin-bottom: 2em;
  }

  .gatsby-highlight {
    margin-bottom: 2.25em;
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    margin-bottom: 4em;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const BlogArticle = ({ article }) => (
  <Wrapper>
    {console.log('article', article)}
    <AvatarCol>
      <Avatar src={getAvatarLink(article.frontmatter.author.github)} />
    </AvatarCol>
    <TextCol>
      <Meta>
        <span>{article.frontmatter.author.name}</span>
        <span>{article.frontmatter.date}</span>
      </Meta>
      <Text>
        <h1>{article.frontmatter.title}</h1>
        <MDXRenderer>{article.code.body}</MDXRenderer>
      </Text>
    </TextCol>
  </Wrapper>
);

export default BlogArticle;
