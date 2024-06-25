import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

Meteor.methods({
    "users.insert"(user) {
        check(user, {
            firstName: String,
            lastName: String,
            telephone: String,
            birthday: Date,
            emailAddress: String,
            password: String,
        });

        // Create the user
        const userId = Accounts.createUser({
            email: user.emailAddress,
            password: user.password,
        });

        // Update user with additional fields
        Meteor.users.update(userId, {
            $set: {
                firstName: user.firstName,
                lastName: user.lastName,
                telephone: user.telephone,
                birthday: user.birthday,
            },
        });
    },
    'users.remove'(userId) {
        Meteor.users.remove(userId);
    },
    'users.update'({userId, firstName, lastName, telephone, birthday}) {
        Meteor.users.update(userId, { $set: { firstName, lastName, telephone, birthday } });
    },
});