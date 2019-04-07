export const FETCH_ARTICLES_QUERY = `{
    articles {
      author
      excerpt
      id
      title
    }
  }`;

export const FIND_ARTICLE_QUERY = (id) => `{
    article(id: "${id}") {
      author
      content
      id
      title
      published
      tags
    }
  }`;

export const REMOVE_ARTICLE_QUERY = (id) => `mutation RemoveArticle {
  removeArticle(id: "${id}") {
    id
    }
  }
  `;
