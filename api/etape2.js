export default function handler(req, res){
  res.status(200).send(`
    <html>
      <body style="background:black;color:#0ff;font-family:monospace;text-align:center;padding-top:50px;">
        <h1>Étape 2</h1>
        <p>Voici ta deuxième énigme !</p>
        <a href="/" style="color:#0ff;text-decoration:underline;">Retour à l'accueil</a>
      </body>
    </html>
  `);
}
