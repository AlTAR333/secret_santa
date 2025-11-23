export default function handler(req, res){
  res.status(200).send(`
    <html>
      <body style="background:black;color:#0ff;font-family:monospace;text-align:center;padding-top:50px;">
        <h1>Félicitations !</h1>
        <p>Tu as trouvé le secret Santa ! 🎁</p>
        <a href="/" style="color:#0ff;text-decoration:underline;">Recommencer</a>
      </body>
    </html>
  `);
}
