import Tabular from 'meteor/aldeed:tabular';

TabularTables = {};

TabularTables.Users = new Tabular.Table({
  name: "ClientsList",
  collection: Meteor.users,
  columns: [
    {
        data: 'firstName',
        title: 'First Name',
        className: 'all',
        render(val) {
            return val;
        }
    }, {
        data: 'lastName',
        title: 'Last Name',
        className: 'all',
        render(val) {
            return val;
        }
    }, {
      data: "telephone",
      title: "Telephone",
      render(val) {
        return val;
        }
    }, {
        title: 'Actions',
        orderable: false,
        searchable: false,
        width: '25%',
        render(val, type, doc) {
            return `<button data-id="${doc._id}" class="edit-button btn btn-primary btn-sm">Edit</button>
            <button data-id="${doc._id}" class="delete-button btn btn-danger btn-sm">Delete</button>`
        }
    }]
})