import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  owner: DS.attr(),
  ownerEmail: DS.attr(),
  isbn: DS.attr(),
  image: DS.attr(),
  publisher: DS.attr(),
});
