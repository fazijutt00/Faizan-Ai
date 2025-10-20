module.exports = {
  name: "auto-react",
  description: "Auto react with ❤️ to all messages",
  command: [],

  async before(m, sock) {
    try {
      if (m.key.fromMe) return;

      await sock.sendMessage(m.chat, {
        react: {
          text: "❤️",
          key: m.key
        }
      });

      console.log("✅ Auto Reacted with ❤️");

    } catch (err) {
      console.error("❌ Auto-react plugin error:", err);
    }
  }
};
