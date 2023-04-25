// used to make call to APIs and and database, operations on the type defs will be done through this file.

// you can check the working of queries by going to the https://studio.apollographql.com/sandbox/explorer from http://localhost:4000
// and inside users add the data you want to fetch
// eg
// query getAllUsers {
//   users {
//   id
//   name
//   }
// }
const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");
const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();

const resolvers = {
  Query: {
    // USER RESOLVERS
    users: () => {
      return UserList;
    },
    // args contains the data that we passed from typeDefs to the user.(check typeDefs here we passed ID)
    // just pass the id of any user into variables
    user: (parent, args) => {
      const id = args.id;
      //convert to number because when the id comes to resolvers it becomes string
      const user = _.find(UserList, { id: Number(id) }); // lodash will help in array operations will help tp find the particular data from userList
      return user;
    },

    // MOVIE RESOLVERS
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      );
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
       // Publish the user to the "userAdded" topic
       pubsub.publish("userAdded", { userAdded: user });
      return user;
    },

    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });

      return userUpdated;
    },

    deleteUser: (parent, args) => {
      const id = args.id;
      _.remove(UserList, (user) => user.id === Number(id));
      return null;
    },
  },
  Subscription: {
    userAdded: {
      subscribe: () => pubsub.asyncIterator("userAdded"),
      resolve: (payload) => payload.userAdded,
    },
  },
};

module.exports = { resolvers };
