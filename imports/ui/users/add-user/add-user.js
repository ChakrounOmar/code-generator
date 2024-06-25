import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';

import {SignupSchema} from '/imports/common/api/accounts/schemas.js';

import './add-user.html';

Template.addUser.helpers({
    signupSchema() {
        return SignupSchema;
    }
});

Template.addUser.events({
    'click .openModalAddUser' () {
        $('#addUser').modal('show');
    },
    'click #signupButton'(event, template){
        template.$('#insertClient').trigger('submit');
    },
})

AutoForm.addHooks('insertClient', {
    onSubmit() {
        this.event.preventDefault();

        const button = document.getElementById('signupButton');
        button.disabled = true;

        const formData = AutoForm.getFormValues('insertClient').insertDoc;

        const { firstName, lastName, telephone, birthday, emailAddress, password } = formData;

        Meteor.call('users.insert', { firstName, lastName, telephone, birthday, emailAddress, password }, (error, result) => {
            button.disabled = false;

            if (error) {
                console.error(error.reason, emailAddress);
            } else {
                AutoForm.resetForm('insertClient');
                $('#addUser').modal('hide');
            }
        });
    },
});