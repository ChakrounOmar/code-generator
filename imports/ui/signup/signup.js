import { Template } from "meteor/templating";

import {SignupSchema} from '/imports/common/api/accounts/schemas.js';

import "./signup.html";
import "./signup.scss"; 

Template.sign_up.helpers({
    signupSchema() {
        return SignupSchema;
    }
});

AutoForm.addHooks('insertClientSignup', {
    onSubmit() {
        this.event.preventDefault();   

        const button = document.getElementById('createClientButton');
        button.disabled = true;

        const formData = AutoForm.getFormValues('insertClientSignup').insertDoc;

        const { firstName, lastName, telephone, birthday, emailAddress, password } = formData;

        Meteor.call('users.insert', { firstName, lastName, telephone, birthday, emailAddress, password }, (error, result) => {
            button.disabled = false;

            if (error) {
                console.error(error.reason, emailAddress);
            } else {
                AutoForm.resetForm('insertClientSignup');
                $('#addUser').modal('hide');
            }
        });
    },
});