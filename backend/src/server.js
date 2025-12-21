const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// API routes
app.use("/api", require("./routes")); // adjust if needed

// Serve frontend
const frontendPath = path.join(__dirname, "../public");
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
