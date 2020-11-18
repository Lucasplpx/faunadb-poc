import { createContact, getAllContacts } from '../../services/contact';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const contact = await createContact(req.body);
    return res.json(contact);
  }

  const contacts = await getAllContacts();
  return res.json(contacts);
}
