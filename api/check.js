// api/check.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Méthode non autorisée' });
  }

  const { password, step } = req.body;

  if (!password || !step) {
    return res.status(400).json({ ok: false, error: 'Paramètres manquants' });
  }

  // Mots de passe en clair
  const passwords = {
    1: "Kitsu",
    2: "",
    3: "Cesar7",
    4: "Poulet"
  };

  const nextStepUrls = {
    1: "/api/cube",
    2: "/api/rhinoceros",
    3: "/api/finale",
    4: "/api/bravo"
  };

  if (passwords[step] && passwords[step] === password) {
    return res.status(200).json({
      ok: true,
      nextStepUrl: nextStepUrls[step]
    });
  } else {
    return res.status(200).json({ ok: false, error: "Mot de passe incorrect" });
  }
}
