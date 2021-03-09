const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// Para adicionar o campo slug a cada postagem
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // Garante que estamos processando apenas arquivos de remarcação
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` para transformar arquivos de marcação no diretório` data / faqs` em `/ faqs / slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Cria um novo campo query'able com o nome 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 1000) {
        edges {
          node {
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
              image
            }
            timeToRead
            fields {
              slug
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
    `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Os dados passados para o contexto estão disponíveis
          // nas consultas de página como variáveis do GraphQL.
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous,
        },
      })
    })

    // Páginação de Posts
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: path.resolve(`./src/templates/blog-list.js`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })
  })
}