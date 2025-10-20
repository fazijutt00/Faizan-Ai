module.exports = {
  name: "auto-react",
  description: "Auto react with ❤️ to all messages",
  command: [],

  async before(m, sock) {
    try {
      // ✅ Ignore bot’s own messages
      if (m.key.fromMe) return;

      // ✅ React with ❤️ on every message
      await sock.sendMessage(m.chat, {
        react: {
          text: "❤️",
          key: m.key
        }
      });

      console.log("❤️ Auto-react sent!");

    } catch (err) {
      console.error("❌ Auto-react error:", err);
    }
  }
};
