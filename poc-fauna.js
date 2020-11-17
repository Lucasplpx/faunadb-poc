const faunadb = require('faunadb');

const q = faunadb.query;

const client = new faunadb.Client({
  secret: 'chave-secreta',
});

const createContact = (data) => {
  return client.query(q.Create(q.Collection('contacts'), { data }));
};

const getContactByRef = (ref) => {
  return client.query(q.Get(q.Ref(q.Collection('contacts'), ref)));
};

const getAllContacts = () => {
  return client.query(
    q.Map(
      q.Paginate(q.Match('allContacts'), { size: 2 }),
      q.Lambda((x) => q.Get(x))
    )
  );
};

const getContactByEmail = (email) => {
  return client.query(q.Get(q.Match(q.Index('contactByEmail'), [email])));
};

getContactByEmail('contato@gmail.com').then(console.log);
// getAllContacts().then((all) => {
//   console.log(all);
// });

// getContactByRef('282465863727055362').then((ret) => console.log(ret));

// createContact({
//   name: 'Joao',
//   email: 'joao@joao.com',
//   title: 'jxo',
// }).then((ret) => {
//   console.log(ret);
// });
