module.exports = {
  config: {
    name: 'credits',
    aliases: ['author', 'creator'],
    description: 'Show bot credits and author information',
    usage: 'credits',
    cooldown: 5,
    role: 0,
    author: 'NeoKEX',
    category: 'system'
  },

  async run({ api, event, logger, config }) {
    try {
      const creditsText =
`╔═══════════════════════════════════════════╗
║               InstaBOT                   ║
║        Advanced Instagram Bot            ║
╚═══════════════════════════════════════════╝

👑 Created by: NeoKEX
🔗 GitHub: github.com/NeoKEX
📦 Version: ${config.BOT_VERSION}
⚙️  Prefix: ${config.PREFIX}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 About InstaBOT:
  InstaBOT is a powerful, modular Instagram
  bot built for automation and fun. Fully
  open-source and crafted with care by NeoKEX.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌟 Like this bot? Star it on GitHub!
🐛 Found a bug? Open an issue on GitHub
💬 github.com/NeoKEX

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ Credits must not be removed or modified.`;

      return api.sendMessage(creditsText, event.threadId);
    } catch (error) {
      logger.error('Error in credits command', { error: error.message });
      return api.sendMessage('Error displaying credits.', event.threadId);
    }
  }
};
