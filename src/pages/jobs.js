import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { CardDeck } from "reactstrap";

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            description
            author
            path
          }
        }
      }
    }
  }
`;
const Blog = ({ data }) => {
  return (
    <Layout>
      <h1 className="text-center">Avaiable Jobs</h1>
      <CardDeck>
        {data.allMarkdownRemark.edges.map((post) => {
          const {
            title,
            author,
            date,
            description,
            path
          } = post.node.frontmatter;

          return (
            <Post
              title={title}
              author={author}
              date={date}
              description={description}
              key={`${date}__${title}`}
              path={path}
            />
          );
        })}
      </CardDeck>
    </Layout>
  );
};

export default Blog;
