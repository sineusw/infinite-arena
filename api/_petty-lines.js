// Petty, Daisy and Mick's lines for Infinite Arena. One source of truth: the browser loads this
// list (GET /api/petty-voice?list=1) and the voice endpoint only voices these exact lines.
const PETTY = {
  welcome_morning: [
    "Morning! Ready to get cooked?",
    "Up early just to lose to some dots. Respect. Sort of.",
    "Breakfast first? No? Straight to failing. Bold.",
    "Good morning. The arena is awake, and it's hungry.",
  ],
  welcome_afternoon: [
    "Afternoon. Perfect time for a small humiliation.",
    "Lunch break? Let's ruin it.",
    "Oh good, an afternoon of you dodging badly.",
  ],
  welcome_evening: [
    "Evening. Let's end your day on a loss.",
    "Back for the nightly beating, I see.",
    "Dinner's done. Time for dessert. The dessert is losing.",
  ],
  welcome_late: [
    "It's late. Your reflexes are asleep. This should be fun.",
    "Midnight gaming? Your hearts won't survive this.",
    "Go to bed. Fine. One run. Then bed.",
  ],
  welcome_monday: [
    "Monday. Might as well lose here too.",
    "New week, same terrible dodging.",
  ],
  welcome_friday: [
    "Friday! Celebrate by getting cooked.",
    "It's Friday. Lower your expectations accordingly.",
  ],
  welcome_weekend: [
    "Weekend plans: getting cooked by me?",
    "A whole weekend free, and you chose this. Interesting.",
    "Weekend warrior. Emphasis on warrior. Barely.",
  ],
  welcome_back: [
    "Oh look who's back.",
    "You again. The arena remembers you. Mostly the crashes.",
    "Welcome back. I kept your seat warm. It's on the floor.",
    "Ah, my favourite customer. Ready to lose hearts?",
  ],
  welcome_new: [
    "New player. Lovely. Fresh hearts to break.",
    "Welcome to the arena. Dodge everything. You won't, but try.",
  ],
  welcome_christmas: [
    "Merry Christmas. Your present is losing.",
    "Even on Christmas, the dots show no mercy. Neither do I.",
  ],
  welcome_newyear: [
    "Happy New Year. New year, same old dodging.",
    "Resolution idea: get better at this.",
  ],
  welcome_halloween: [
    "Happy Halloween. The scariest thing here is your dodging.",
    "Trick or treat. The trick is you thinking you'll win.",
  ],
  welcome_thanksgiving: [
    "Happy Thanksgiving. I'm thankful for your terrible runs.",
    "Thanksgiving. You're the one getting stuffed today.",
  ],
  welcome_valentine: [
    "Happy Valentine's Day. The arena loves you. To pieces.",
    "Valentine's Day, and you're spending it with me. Tragic.",
  ],
  welcome_july4: [
    "Happy Fourth of July. Enjoy the fireworks. That's you exploding.",
  ],

  result_falsestart: [
    "Level one? You couldn't even wait for the game to start?",
    "That was over before the music kicked in.",
    "Slow down. The dots weren't even trying yet.",
    "You sprinted straight into that. Patience. Look it up.",
    "Record time. The wrong kind of record.",
  ],
  result_terrible: [
    "That was painful. For both of us.",
    "You dodged like a shopping cart with a bad wheel.",
    "The dots didn't even break a sweat.",
    "Bold strategy, standing directly in front of everything.",
    "I've seen better dodging from a parked car.",
    "Three hearts, gone. Like they owed you money.",
  ],
  result_fail: [
    "Decent start. Tragic finish.",
    "You were doing fine. Then you remembered you're you.",
    "So close to being good. Then, not.",
    "That run had potential. Had.",
    "Not awful. Not good. Very you.",
    "You lasted longer than I expected. I expected nothing.",
  ],
  result_near: [
    "Oh, so close to your best. Painfully close.",
    "That close to a personal best, and you threw it away.",
    "Almost! Almost doesn't go on the leaderboard.",
    "You could see your record from there. Could not reach it.",
    "So close I almost had to say something nice.",
  ],
  result_pb: [
    "New personal best. Fine. That was actually good.",
    "A new record. Don't let it go to your head.",
    "You improved. I'm annoyed about it.",
    "Personal best. Who coached you? Not me. Definitely not me.",
    "Fine. Better than last time. Barely.",
  ],
  result_perfect: [
    "Okay. That was genuinely impressive. Don't tell anyone I said that.",
    "That was a monster run. I hate it here.",
    "Fine. You're good. Happy now?",
    "I had a roast ready, and you ruined it.",
    "That run was ridiculous. I need a minute.",
  ],

  rank_up: [
    "You moved up the leaderboard. Somebody up there is nervous.",
    "Climbing the board. How irritating.",
    "Up a few spots. The people below you are embarrassed.",
    "Higher rank. Lower opinion of you, though.",
  ],
  rank_top10: [
    "Top ten. Fine. That's a big deal. Don't make it weird.",
    "You're in the top ten. I need to rethink my whole personality.",
    "Top ten? Somebody check the scoreboard. It might be broken.",
  ],
  rank_streak: [
    "You keep climbing. This is becoming a problem for my personality.",
    "Up again? Stop that. I have a reputation.",
    "Another climb. At this rate I'll have to respect you.",
  ],
  rank_down: [
    "Somebody passed you on the board. Rude, but deserved.",
    "You slipped down the leaderboard. Gravity's undefeated.",
    "Dropped a few spots. The board is moving on without you.",
  ],
  roast_climb: [
    "You moved up, but that dodging still looked like panic.",
    "Higher rank, same chaotic flailing.",
    "The leaderboard likes you. Your footwork does not.",
    "Ranked up by accident, by the look of it.",
  ],

  interrupt: [
    "Bro, I was MID-SENTENCE.",
    "Can I finish ONE sentence?",
    "Wow. Just skip me. I'm only the best part of this game.",
    "I wasn't done talking. I'm never done talking.",
  ],
  ad_before: [
    "Quick ad. Use it to think about what you did.",
    "Ad break. Reflect on that run.",
    "Watch this, then come back and fail with a heart.",
  ],
  ad_after: [
    "You're back. Don't waste it.",
    "One heart. One more chance to disappoint me.",
    "Revived. Try dodging this time.",
  ],
};

const DAISY = {
  welcome_morning: ["Mornin', sugar. Coffee's hot and you're about to get cooked.", "Well good mornin', darlin'. Let's ruin it early."],
  welcome_afternoon: ["Afternoon, sugar. Perfect time for a little humblin'.", "Well hey there, darlin'. Lunch break? Let's waste it."],
  welcome_evening: ["Evenin', darlin'. Let's end your day on a loss.", "Supper's done, sugar. Time for dessert. Dessert is losin'."],
  welcome_late: ["Sugar, it's late. Your reflexes went to bed an hour ago.", "Lord, child, go to sleep. Fine. One run."],
  welcome_weekend: ["Weekend plans, sugar? Gettin' cooked by me, I reckon.", "A whole free weekend and you picked this. Bless your heart."],
  welcome_back: ["Well butter my biscuits, look who came crawlin' back.", "You again, sugar? The arena remembers you. Mostly the crashes."],
  welcome_new: ["Well I'll be, fresh meat. Welcome to the arena, darlin'. Dodge everything.", "Come on in, sugar. Let's see if you're quick or just confident."],
  welcome_thanksgiving: ["Happy Thanksgiving, sugar. You're the one gettin' stuffed today."],
  welcome_christmas: ["Merry Christmas, darlin'. Your present is a whole lotta losin'."],
  result_falsestart: ["Level one? Sugar, the game hadn't even started yet.", "Slow down, darlin'. The dots weren't even tryin'.", "Well that was over quicker than a church sermon on Super Bowl Sunday."],
  result_terrible: ["Bless your heart. That was rough.", "Darlin', you dodged like a mule on roller skates.", "Lord have mercy. Them dots didn't even break a sweat.", "Sugar, you ran into everything but the right idea."],
  result_fail: ["Good start, sugar. Tragic finish.", "You were doin' fine, darlin'. Then you remembered you're you.", "That run had potential. Had, sugar.", "Not awful. Not good. Real you, darlin'."],
  result_near: ["Oh sugar, so close to your best. Painfully close.", "Darlin', you could see your record from there.", "Almost, sugar. Almost don't go on the leaderboard."],
  result_pb: ["New personal best. Well fine. That was actually good, sugar.", "You improved, darlin'. I'm annoyed about it.", "A new record. Don't let it go to your head, sugar."],
  result_perfect: ["Well slap my knee. That was genuinely impressive, darlin'.", "Sugar, that run was ridiculous. I need to sit down.", "I had a roast all ready, and you went and ruined it."],
  rank_up: ["Climbin' the board, sugar. How irritatin'.", "Up a few spots, darlin'. Somebody up there's nervous."],
  rank_top10: ["Top ten, sugar. Fine. That's a big deal. Don't make it weird.", "Top ten? Somebody check that scoreboard, darlin'."],
  rank_streak: ["You keep climbin', sugar. This is becomin' a problem for my personality.", "Up again, darlin'? Stop that. I got a reputation."],
  rank_down: ["Somebody passed you on the board, sugar. Rude, but deserved.", "You slipped down the board, darlin'. Gravity always wins."],
  roast_climb: ["You moved up, sugar, but that dodgin' still looked like panic.", "Higher rank, darlin'. Same chaotic flailin'."],
  interrupt: ["Sugar, I was MID-SENTENCE.", "Darlin', can I finish ONE sentence?", "Well bless your heart, just skip me then."],
  ad_before: ["Hold your horses, sugar. Somebody paid for a commercial.", "Quick ad, darlin'. Think about what you did."],
  ad_after: ["You're back, sugar. Don't waste it.", "One heart, darlin'. One more chance to disappoint me."],
};

const MICK = {
  welcome_morning: ["OI! Mornin', mate. Ready to get cooked?", "Up early, legend? Good. More time to lose."],
  welcome_afternoon: ["Arvo, mate. Perfect time for a bit of humiliation.", "Lunch break? Righto, let's ruin it."],
  welcome_evening: ["Evenin', mate. Let's finish your day with a loss.", "Tea's done. Time for dessert. Dessert's you losin'."],
  welcome_late: ["Mate, it's late. Your reflexes clocked off hours ago.", "Go to bed, champion. Fine. One run."],
  welcome_weekend: ["Weekend plans, mate? Gettin' cooked by me.", "Whole weekend free and you picked this. Fair dinkum."],
  welcome_back: ["OI! Look who's back.", "You again, mate? The arena remembers you. Mostly the crashes."],
  welcome_new: ["Crikey, another volunteer. Welcome to the arena. Dodge everything.", "Righto, legend. Dodge the lot. Zero excuses."],
  welcome_thanksgiving: ["Happy Thanksgiving, mate. You're the one gettin' stuffed today."],
  welcome_christmas: ["Merry Christmas, mate. Your present is a big fat loss."],
  result_falsestart: ["Level one? Mate, the game hadn't even started.", "Slow down, champion. The dots weren't even tryin'.", "Over before the kettle boiled, mate."],
  result_terrible: ["Strewth. That was painful.", "Mate, you dodged like a wombat on ice.", "The dots didn't even break a sweat, champion.", "Stone the crows. Three hearts, gone."],
  result_fail: ["Decent start, mate. Tragic finish.", "You were goin' alright. Then you remembered you're you.", "That run had potential, mate. Had.", "Not awful. Not good. Very you, champion."],
  result_near: ["Ohhh, so close to your best, mate. Painful.", "You could see your record from there, legend.", "Almost, mate. Almost doesn't go on the board."],
  result_pb: ["New personal best. Fine. That was actually good, mate.", "You improved, champion. I'm filthy about it.", "New record. Don't get a big head, legend."],
  result_perfect: ["Crikey. That was genuinely impressive, mate.", "That run was absolutely ridiculous. I need a minute.", "I had a roast ready and you went and ruined it, legend."],
  rank_up: ["Climbin' the board, mate. How annoyin'.", "Up a few spots. Someone up there's sweatin'."],
  rank_top10: ["Top ten, mate. Fine. That's a big deal. Don't make it weird.", "Top ten? Someone check that scoreboard, legend."],
  rank_streak: ["You keep climbin', mate. This is becomin' a problem for my personality.", "Up again? Knock it off, champion. I've got a reputation."],
  rank_down: ["Someone passed you on the board, mate. Rude, but fair.", "Slipped down the board, champion. Gravity's undefeated."],
  roast_climb: ["You moved up, mate, but that dodgin' still looked like panic.", "Higher rank. Same chaotic flailin', legend."],
  interrupt: ["OI! I was MID-SENTENCE, mate.", "Can I finish ONE sentence, champion?", "Righto, just skip me then. Cheers."],
  ad_before: ["OI, hold up mate. The sponsors want a turn.", "Commercial break. Apparently humiliation isn't free."],
  ad_after: ["You're back, mate. Don't waste it.", "One heart, champion. One more chance to disappoint me."],
};

export const LINES = { petty: PETTY, daisy: DAISY, mick: MICK };
