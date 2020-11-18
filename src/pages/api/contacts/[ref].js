import { deleteContact } from '../../services/contact';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { ref } = req.query;

    await deleteContact(ref);

    return res.json({ ok: true });
  }
}
