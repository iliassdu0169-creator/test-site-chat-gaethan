const express = require("express");
const path = require("path");

const app = express();

// Pour servir JSON
app.use(express.json());

// Pour servir les fichiers statiques depuis "public"
app.use(express.static(path.join(__dirname, "public")));

// Route GET "/" pour afficher index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route POST "/chat" pour le chat
app.post("/chat", (req, res) => {
  res.json({ reply: "Bonjour 👋 je fonctionne !" });
});

// Render fournit le port via process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
