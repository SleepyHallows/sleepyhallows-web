// Sleepy Hallows site — shared script. Points every Discord link at the invite. No invented data anywhere:
// live standings only appear on the Herald, and only when the game actually has players.
// TODO(owner): replace with the real permanent Sleepy Hallows Discord invite.
const DISCORD_INVITE = "https://discord.gg/sleepyhallows";
for (const a of document.querySelectorAll('a[href="https://discord.gg/sleepyhallows"]')) a.href = DISCORD_INVITE;
