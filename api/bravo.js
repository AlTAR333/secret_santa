export default function handler(req, res){
  res.status(200).send(`
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Bravo !</title>
<style>
  body {
    margin: 0;
    background: #000000;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: system-ui;
    flex-direction: column;
  }

  .card {
    width: 480px;
    padding: 32px;
    background: #000000;
    border-radius: 14px;
    text-align: center;
    box-shadow: 0 8px 30px rgba(0,0,0,0.6),
                inset 0 1px 0 rgba(255,255,255,0.04);
  }

  h1 {
    color: #00ffcc;
    font-family: "Courier New", monospace;
    font-size: 28px;
    margin-bottom: 10px;
    text-shadow: 0 0 10px #00ffcc;
  }

  p {
    color: #ddd;
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 24px;
  }

  .gift {
    width: 280px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 0 16px #00ffcc;
    margin-top: 10px;
  }
</style>
</head>
<body>

<div class="card">
  <h1>Félicitations !</h1>
  <p>
    Tu as brillamment résolu toutes les énigmes.<br>
    Voici ta récompense...
  </p>

  <!-- PLACEHOLDER POUR L'IMAGE FINALE -->
  <img src="/rubikscube.jpg" alt="Cadeau" class="gift">
</div>

</body>
</html>
      `);
}