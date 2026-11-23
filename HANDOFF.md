# Infinite Arena handoff notes
- Single file index.html; leaderboard/profile use claude.ai artifact `db` + `user` capabilities (collections: scores, survival, bossrush, daily, weekly; profile at data/users/<id>/profile). Off claude.ai these need a real backend.
- Touch controls: touchpad (default, relative, gain 1.5), joystick (JOY_R=66), finger. Mouse follows cursor. Speed was tuned many times—don't change without asking.
- Ice & wind arenas removed so controls stay identical every level. ARENAS=['normal','lava','shrink'].
- Real-money buttons + video revive are demo placeholders.
- Daily mode uses seeded RNG (mulberry32/hashStr). LOWFX disables glow on touch devices.
- 2026-11-22: Challenge links. Share now sends ?vs=name&m=mode&s=score&utm_source=challenge (native share sheet on phones). Opening one shows a '⚔️ X challenges you' menu banner, an in-game 'Beat X in N' target, a beat/short line on game over and a 'Send a challenge back' button. Track virality via utm_source=challenge in Vercel Analytics.
- 2026-11-22: Score card. Game over has a '🖼️ Score card' button: draws a 1080x1350 PNG (mode, big score, best close-call chain, player name, a Petty/Daisy/Mick taunt, 'Think you can beat it?', site URL). Phones share the image + challenge link via the share sheet (utm_source=card); desktop downloads it. Built for Stories/TikTok/group chats.
- 2026-11-23: Personal-best chase. When no leaderboard rival/challenge target is shown, the HUD shows 'Beat your best in N pts' (also when your best is closer than the next rival; all modes; Daily/Weekly use that period's best). Crossing your best mid-run fires once: fanfare, gold burst, flash, 'NEW BEST!' pop and banner. Game over adds '🏆 New personal best! +N over your old one.'
