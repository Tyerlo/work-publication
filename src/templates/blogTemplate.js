import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import ApplyJob from "../components/ApplyJob";
export const postQuery = graphql`
  query JobsPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        author
        date
        title
        path
      }
      html
    }
  }
`;

const blogTemplate = ({ data }) => {
  const post = data.markdownRemark;

  const { title, author, date, description } = post.frontmatter;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>
        Posted by {author} on {date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <ApplyJob />
    </Layout>
  );
};
export default blogTemplate;
