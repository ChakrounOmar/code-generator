import {Meteor} from 'meteor/meteor';
import {ValidatedPublish} from 'meteor/ziedmahdi:validated-publication';

new ValidatedPublish({
    name: 'Clients.list',
    validate: null,
    run() {
        return Meteor.users.find();
    }
});