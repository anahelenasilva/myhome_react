import { Connection } from './Connection';

function onAuthStateChanged(user) {
  // eslint-disable-next-line no-console
  console.log(user);
}

export function login() {
  Connection.firebase().auth.signInWithPopup(Connection.firebase().googleProvider);
  Connection.firebase().auth.onAuthStateChanged(onAuthStateChanged);
}

export function saveUser(user) {
  const newUser = {
    uid: Connection.firebase().auth.currentUser.uid,
    name: user.name,
    surname: user.surname,
    email: user.email
  }
  const newUserKey = Connection.firebase().database.ref().child('users').push().key;
  const updates = {};
  updates['/users/' + newUserKey] = newUser;
  return Connection.firebase().database.ref().update(updates);
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
  query.once('value', (snapshot) =>
    snapshot.forEach(function (childSnapshot) {
      let childKey = childSnapshot.key;
      let childData = childSnapshot.val();
      // eslint-disable-next-line no-console
      console.log(childKey);
      // eslint-disable-next-line no-console
      console.log(childData);
    })
  )
  return query;
}
