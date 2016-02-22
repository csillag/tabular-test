Users = new Mongo.Collection("users");

TabularTables = {};

TabularTables.Users = new Tabular.Table({
    name: "Users",
    collection: Users,
    columns: [
        {data: 'firstName', title: 'First name'},
        {data: 'lastName', title: 'Last name'},
        {data: 'email', title: 'E-Mail'},
        {tmpl: Meteor.isClient && Template.userActionsCell, title:'Actions'}
    ]
});

if (Meteor.isClient) {

  Template.userActionsCell.events({
    'click .delete': function () {
      if (window.confirm("Should we really delete this user?")) {
        Users.remove(this._id);
      }
    }
  });

}

