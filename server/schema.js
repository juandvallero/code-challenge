import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInputObjectType,
} from 'graphql';
import db from './db';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const articleInputType = new GraphQLInputObjectType({
  name: 'ArticleInput',
  description: 'This represents a Article input',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find();
      },
    },
    article: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(article, args) {
        return db.Article.findOne({ _id: args.id });
      },
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addArticle: {
      type: articleType,
      args: {
        article: {
          type: new GraphQLNonNull(articleInputType),
        },
      },
      resolve: async (rootValue, args) => {
        args.article.excerpt = args.article.content.slice(0, 350);
        return db.Article.create(args.article);
      },
    },
    updateArticle: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
        article: {
          type: new GraphQLNonNull(articleInputType),
        },
      },
      resolve: async (rootValue, args) => db.Article.findOne({ _id: args.id }).update(args.article),
    },
    removeArticle: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (rootValue, args) => {
        const res = await db.Article.findOne({ _id: args.id }).remove();
        return { id: args.id };
      },
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
