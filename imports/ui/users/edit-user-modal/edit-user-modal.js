import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';

import {EditSchema} from '/imports/common/api/accounts/schemas.js';

import './edit-user-modal.html';

Template.editUserModal.onCreated(function () {
     this.subscribe('Clients.list');
})

Template.editUserModal.helpers({
     editSchema() {
         return EditSchema;
     },
     client(){
          const userId = Session.get('userId')
          const client = Meteor.users.findOne(userId)
          if (client) {
               const firstName = client.firstName;
               const lastName = client.lastName;
               const telephone = client.telephone;
               const birthday = client.birthday
               return {firstName, lastName, telephone, birthday}
          }
     }
 });

 Template.editUserModal.events({
     'click .openModalAddUser' () {
         $('#addUser').modal('show');
     },
     'click #editClientButton'(event, template){
         template.$('#editClient').trigger('submit');
     },
 })
 
 AutoForm.addHooks('editClient', {
     onSubmit: function(insertDoc, updateDoc, currentDoc) {
          this.event.preventDefault();
          
          const button = document.getElementById('editClientButton');
          button.disabled = true;
    
          const userId = Session.get('userId')
          const { firstName, lastName, telephone, birthday } = insertDoc;
  
          Meteor.call('users.update', {userId, firstName, lastName, telephone, birthday }, (error, result) => {
              if (error) {
                  alert(error.reason);
                  button.disabled = false;
              } else {
                  AutoForm.resetForm('editClient');
                  button.disabled = false;
                  $('#editUserModal').modal('hide');
              }
          });
      }
 });