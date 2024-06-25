import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import '/imports/ui/signup/signup.js';
import '/imports/ui/layout/layout.js';
import '/imports/ui/users/users.js';

FlowRouter.route('/signup-flow', {
    name: 'signupFlow',
    action() {
        this.render('loggedInLayout', 'signupFlow');
    },
});

FlowRouter.route('/', {
    name: 'sign_up',
    action() {
      this.render('layout', 'sign_up')
    }
});

FlowRouter.route('/signup', {
    name: 'sign_up',
    action() {
      this.render('layout', 'sign_up')
    }
});

FlowRouter.route('/users', {
  name: 'users',
  action() {
    this.render('layout', 'users')
  }
});