import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
    // Assign additional fields directly to the user object
    user.telephone = options.telephone;
    user.company = options.company;
  
    // Ensure the user object includes the email and username
    if (options.email) {
      user.emails = [{ address: options.email, verified: false }];
    }
    if (options.username) {
      user.username = options.username;
    }
  
    // Return the new user object
    return user;
  });