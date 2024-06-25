import {Session} from 'meteor/session';

import './users.html';
import './edit-user-modal/edit-user-modal.js';
import './add-user/add-user.js';

Template.users.events({
    'click .edit-button': function(event, template) {
        const userId = $(event.currentTarget).data('id');
        Session.set('userId', userId)
        $('#editUserModal').modal('show');
    },
    'click .delete-button': function(event, template) {
        const userId = $(event.currentTarget).data('id');
        
        Meteor.call('users.remove', userId, function(error) {
            if (error) {
            alert("Error: " + error.reason);
            } else {
            console.log("User deleted successfully.");
            }
        });
    }
});