import { Connection } from './Connection';

function onAuthStateChanged(user) {
  // eslint-disable-next-line no-console
  console.log(user);
}

export function logout() {
  Connection.firebase().auth.signOut();
}

export function login() {
  Connection.firebase().auth.signInWithPopup(Connection.firebase().googleProvider);
  Connection.firebase().auth.onAuthStateChanged(onAuthStateChanged);
}

export function saveProperty(property) {
  const newProperty = {
    address: property.address,
    city: property.city,
    country: property.country,
    description: property.description,
    user: property.user
  }

  const newPropertyKey = Connection.firebase()
    .database.ref().child('properties').push().key;

  const updates = {};
  updates['/properties/' + newPropertyKey] = newProperty;
  return Connection.firebase().database.ref().update(updates);
}

export function filterProperties(filter) {
  const query = Connection.firebase().database.ref('properties/')
    .orderByChild('city').equalTo(filter);
  return query.once('value');
}
