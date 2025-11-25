export default function handler(req, res){
  res.status(200).send(`
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Secret Santa Étape 1</title>
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
      width: 360px;
      padding: 28px;
      background: #000000;
      border-radius: 14px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      text-align: center;
      margin-bottom: 20px;
    }

    input[type=text] {
      width: 100%;
      padding: 12px;
      border-radius: 10px;
      border: 1px solid #ccc;
      background: #fff;
      color: #000;
      font-size: 16px;
      box-sizing: border-box;
      margin-bottom: 12px;
    }

    button {
      width: 100%;
      padding: 12px;
      border-radius: 6px;
      border: 2px solid #00ffcc;
      background: #111111;
      color: #00ffcc;
      font-weight: 600;
      cursor: pointer;
      font-size: 16px;
      font-family: 'Courier New', monospace;
      box-shadow: 0 0 10px #00ffcc inset, 0 0 10px #00ffcc;
      transition: 0.2s ease;
    }
    button:hover {
      background: #00ffcc;
      color: #000000;
      box-shadow: 0 0 16px #00ffcc inset, 0 0 20px #00ffcc;
    }

    .msg {
      height: 20px;
      margin-top: 10px;
      font-size: 14px;
      color: red;
    }

    /* Texte invisible sauf si surligné */
    .invisible-hint {
      color: #000000;          /* invisible sur fond noir */
      user-select: text;       /* important pour pouvoir le surligner */
      font-size: 14px;
      width: 360px;
      text-align: center;
      white-space: pre-line;   /* pour respecter les retours à la ligne */
    }
</style>
</head>
<body>

<div class="card" id="container">
  <input type="text" id="password" placeholder="">
  <br>
  <button id="checkBtn">Valider</button>
  <div class="msg" id="msg"></div>
</div>

<div class="invisible-hint">
Bvb, hg vaxkvax et kxihglx. Wx lxl ikxwxvxllxnkxl, hg gx ztkwxkt jnx ex vhffxgvxfxgm. Jnxe xlm lhg ikhwnbm iatkx ?
</div>

<script>
const checkBtn = document.getElementById('checkBtn');
const passwordInput = document.getElementById('password');
const msgDiv = document.getElementById('msg');
const container = document.getElementById('container');

async function verify(step) {
  const password = passwordInput.value;
  const res = await fetch('/api/check', {
    method:'POST',
    headers:{ 'Content-Type':'application/json' },
    body: JSON.stringify({ password, step })
  });
  const data = await res.json();

  if(data.ok){
    window.location.href = data.nextStepUrl;
  } else {
    msgDiv.textContent = data.error;
  }
}

checkBtn.addEventListener('click', ()=>verify(4));
passwordInput.addEventListener('keyup', e => { if(e.key==='Enter') verify(4); });
</script>
</body>
</html>
  `);
}
