import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        {posts.map(({ node: post }) => (
          <section className="shadow mb-3 bg-white rounded" style={{backgroundImage: "url(http://placeimg.com/726/250/animals)", height: "250px", position: "relative" }}>
            <Link to={post.fields.slug} style={{display: "block", height: "100%"}} >
              <div className="p-2" style={{color: "#fff", position: "absolute", bottom: '0', left: '0'}}>
                <time datetime={post.frontmatter.date}>{post.frontmatter.date}</time>
                <h2>{post.frontmatter.title}</h2>
                <div className="tags">
                {
                  post.frontmatter.tags.map(tag => (
                    <span key={tag + `tag`} className="badge badge-pill badge-primary mr-1">{tag}</span>
                  ))
                }
                </div>
            </div>    
            </Link >
          </section>
        ))}
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            templateKey
            date(formatString: "YYYY.MM.DD")
          }
        }
      }
    }
  }
`
