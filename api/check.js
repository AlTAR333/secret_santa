// api/check.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { password, step } = req.body;

  if (!password || !step) {
    return res.status(400).json({ ok: false, error: 'Missing params' });
  }

  // Liste des hash SHA-256 pour chaque étape
  const hashes = {
    1: '7943242e4f409a4a47f3cb8b184170e0b16b989858191d67a47fdb066ead2dc1', // rododindron
    2: '2a5e3b0d3ee31f6c4b9b2f246c8f1b7a6f0e5a0d5c2b5f1e9a6d7f5b3c4a1e8d', // mot de passe étape 2
    3: '3b2f1c0d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b'  // mot de passe finale
  };

  const crypto = require('crypto');
  const hash = crypto.createHash('sha256').update(password).digest('hex');

  if (hashes[step] && hashes[step] === hash) {
    return res.status(200).json({ ok: true });
  } else {
    return res.status(200).json({ ok: false, error: 'Mot de passe incorrect' });
  }
}
