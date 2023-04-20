const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // TODO: is it necessary to include getSingleUser? It's in user-controller.js but don't know what the API is for.
        // TODO: is { user } argument correct?
        user: async(parent, { user }) => {
            return User.findOne({ _id: user._id });
        },
        me: async (parent, args, context) => {
            if(context.user) {
                return User.findOne({ _id: context.user._id});
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }, context) => {
            const newUser = await User.create({username, email, password});
            const token = signToken(newUser)

            return { token, newUser }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!email) {
                throw new AuthenticationError('No user account with this email is found.');
            };

            const verifiedPw = await User.isCorrectPassword(password)

            if(!verifiedPw) {
                throw new AuthenticationError('Incorrect password!');
            };

            const token = signToken(user);
            return { token, user };
        },

        saveBook: async(parent, {authors=null, description, bookId, image=null, link=null, title}, context) => {
            
            // authors = authors === undefined ? null : authors;
            // image = image === undefined ? null : image;
            // link = link === undefined ? null : link;

            if(context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    {
                        $addToSet: { savedBooks: {
                            authors: authors, // TODO: how to make sure that values passed from client is in array format?
                            description: description,
                            bookId: bookId,
                            image: image,
                            link: link,
                            title: title
                            }
                        }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }

            throw new AuthenticationError('You must be logged in to be able to save your book selections.')
        },
        removeBook: async(parent, { bookId }, context) => {
            if(context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: bookId }},
                    { new: true }
                );
            }
            throw new AuthenticationError('You must be logged in to update your saved books.');
        },
    },
}

module.exports = resolvers;