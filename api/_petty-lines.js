// Petty, Daisy and Mick's lines for Infinite Arena. One source of truth: the browser loads this
// list (GET /api/petty-voice?list=1) and the voice endpoint only voices these exact lines.
// If you change lines, bump V in index.html so phones don't play old cached audio.
const PETTY = {
  welcome_morning: [
    "Good morning. Brush your teeth? No? Great. Neither does your dodging.",
    "Up before noon just to lose to circles. Your parents must be so proud.",
    "Morning! I made you breakfast. It's humble pie. Eat up.",
    "Rise and shine. Mostly shine. You won't be rising up the leaderboard.",
  ],
  welcome_afternoon: [
    "Afternoon. Shouldn't you be working? Your boss would love this run.",
    "Lunch break? Perfect. Thirty minutes of me watching you fail.",
    "Ah, the afternoon slump. Your reflexes are already in it.",
  ],
  welcome_evening: [
    "Evening. You survived your whole day. Let's fix that.",
    "Back for your nightly beating. You're like a raccoon. You always come back to the trash.",
    "Dinner's done? Good. Now you can choke on something else.",
  ],
  welcome_late: [
    "It's past midnight. Normal people are asleep. You're here. Losing. To shapes.",
    "Your eyes are red, your thumbs are tired, and your score is about to be embarrassing.",
    "One more run, you said. Three hours ago. I counted.",
  ],
  welcome_monday: [
    "It's Monday. You're already losing at life. Might as well lose here too.",
    "Monday. Even the dots hate it. They're taking it out on you.",
  ],
  welcome_friday: [
    "It's Friday night and you chose me. I'm flattered. And a little worried.",
    "Friday! Everyone's out having fun. You're here. Getting cooked.",
  ],
  welcome_weekend: [
    "A whole weekend, and this is the plan. Respect. Pity, but respect.",
    "Weekend warrior. Except the war is against circles, and you're losing.",
    "No work, no school, no excuses. Let's see the real you. Yikes.",
  ],
  welcome_back: [
    "Oh look who crawled back. Couldn't stay away, could you?",
    "You again. I told the dots you were coming. They stretched.",
    "Welcome back. I saved your spot. It's at the bottom of the leaderboard.",
    "You left. You came back. Just like your bad habits.",
  ],
  welcome_new: [
    "Oh, a new player. Fresh, innocent, and about to be absolutely destroyed.",
    "Welcome. I'm Petty. I'll be insulting you today. Dodge the stuff. Or don't. I get paid either way.",
  ],
  welcome_christmas: [
    "Merry Christmas. Santa checked his list. You're on the losing one.",
    "It's Christmas and you're playing this. Your family is right there. Wow.",
  ],
  welcome_newyear: [
    "New year, new you? Let's find out. Spoiler: same you.",
    "Your resolution was to get better. It's day one. Let's ruin it.",
  ],
  welcome_halloween: [
    "Happy Halloween. You don't need a costume. Your score is already terrifying.",
    "Trick or treat. Your dodging is the trick. There is no treat.",
  ],
  welcome_thanksgiving: [
    "Happy Thanksgiving. I'm thankful for one thing. Watching you lose.",
    "Thanksgiving. Unbutton your pants and get ready to get stuffed by circles.",
  ],
  welcome_valentine: [
    "Happy Valentine's Day. Nobody sent you flowers, so here I am. Insulting you.",
    "Valentine's Day, and your date is me. That says a lot.",
  ],
  welcome_july4: [
    "Happy Fourth of July. Enjoy the fireworks. That's you. Exploding. Repeatedly.",
  ],

  result_falsestart: [
    "Wow. You died faster than a phone at one percent.",
    "That wasn't a run. That was a sneeze.",
    "Did you even look at the screen? Or were you watching TikTok?",
    "I blinked and missed your whole career.",
    "Speedrun to failure. World record. Congratulations.",
  ],
  result_terrible: [
    "You dodged like a grandpa looking for his glasses.",
    "That was so bad, the dots are filing a complaint for being too easy.",
    "I've seen Roombas with better reflexes.",
    "You ran into everything like you had a crush on it.",
    "Those hearts didn't get lost. You threw them away.",
    "Somewhere, your thumbs are apologizing.",
  ],
  result_fail: [
    "You were doing so well. Then your brain buffered.",
    "Good start. Then you remembered who you are.",
    "That run was like a group project. Fine until you got involved.",
    "Not bad. Not good. Very mid. Very you.",
    "You lasted longer than I expected. I expected nothing, so, technically a win.",
    "That had main character energy for ten seconds. Then extra energy.",
  ],
  result_near: [
    "So close to your best. Like, missed it by a sneeze close.",
    "You could see your record. You could smell it. And then you choked.",
    "Almost doesn't count. Ask anyone who almost got the job.",
    "That close to a personal best. I'd say try again, but I know you will.",
    "So close, I almost said something nice. Almost. Like you.",
  ],
  result_pb: [
    "New personal best. Who are you, and what did you do with the loser?",
    "A new record. Screenshot it. It won't happen again.",
    "You improved. I'm furious. I had insults prepared.",
    "Personal best. I'm not proud. I'm just surprised.",
    "Okay, fine. That was good. Tell no one.",
  ],
  result_perfect: [
    "Okay. That was insane. I'm calling a lawyer.",
    "That was a monster run. I'm going to go sit in my car for a minute.",
    "Fine. You're good. I hate this. I hate you. Do it again.",
    "I had a whole roast written. You ruined it. I'll never forgive you.",
    "Are you cheating? Blink twice if you're cheating.",
  ],

  rank_up: [
    "You climbed the leaderboard. Somebody just got pushed down and they're crying.",
    "Moving up! Your enemies have been notified.",
    "Higher rank. Same face, though.",
    "Up a few spots. The people below you need to log off forever.",
  ],
  rank_top10: [
    "Top ten. Fine. Go tell your mom. I'll wait.",
    "Top ten? I need to rethink my entire personality.",
    "You're in the top ten. The scoreboard might be broken. Somebody call IT.",
  ],
  rank_streak: [
    "You keep climbing. Stop it. I have a brand to protect.",
    "Up again? Who's feeding you? What are you eating? I want some.",
    "Another climb. At this rate I'll have to be nice to you. Disgusting.",
  ],
  rank_down: [
    "Somebody passed you on the leaderboard. They didn't even say excuse me.",
    "You slipped down the board. Like a dropped phone. Face first.",
    "Dropped a few spots. The leaderboard moved on. So should you. Just kidding. Play again.",
  ],
  roast_climb: [
    "You ranked up, but your dodging still looks like a panic attack in slow motion.",
    "Higher rank. Same chaotic thumb flailing.",
    "The leaderboard likes you. Your footwork? Not so much.",
    "Ranked up by accident, by the look of it. Lucky.",
  ],

  interrupt: [
    "Excuse me. I was TALKING.",
    "You skipped me? Me? The best part of this game?",
    "Wow. Rude. I'll remember that. I remember everything.",
    "I wasn't done. I'm never done. That's my whole thing.",
  ],
  ad_before: [
    "Quick ad. Use this time to think about your choices.",
    "Ad break. Reflect. Grow. Fail again.",
    "Watch this ad, then come back and waste the heart.",
  ],
  ad_after: [
    "You're back. Try not to blow it in three seconds.",
    "One heart. One chance. One more opportunity to disappoint me.",
    "Revived. Like a bad movie sequel. Let's see how this goes.",
  ],
};

const DAISY = {
  welcome_morning: ["Mornin', sugar. Coffee's hot, biscuits are warm, and you're about to get humbled.", "Well good mornin', darlin'. Up with the roosters just to lose. Bless you."],
  welcome_afternoon: ["Afternoon, sugar. Shouldn't you be workin'? I won't tell. I'll just watch you fail.", "Well hey there, darlin'. Lunch break? Grab a napkin. This is gonna get messy."],
  welcome_evening: ["Evenin', darlin'. Supper's done, so let's serve you a big ol' plate of losin'.", "Back again tonight, sugar? You're like a stray cat. I fed you once and now look."],
  welcome_late: ["Sugar, it's past midnight. Even the devil went to bed.", "Child, go to sleep. Your mama didn't raise you to lose to circles at two in the mornin'."],
  welcome_weekend: ["A whole weekend and you picked this, sugar? Bless your heart, and I mean that the mean way.", "Weekend, darlin'. Church tomorrow. You're gonna need the prayer."],
  welcome_back: ["Well butter my biscuits, look who came crawlin' back.", "You again, sugar? Like a casserole nobody asked for, you just keep showin' up."],
  welcome_new: ["Well I'll be, fresh meat. Come on in, darlin'. Wipe your feet. Then lose.", "Hey there, sugar. I'm Daisy. I'm sweet as pie, but my pie's got a knife in it."],
  welcome_thanksgiving: ["Happy Thanksgiving, sugar. Pass the gravy. And pass on winnin', 'cause you won't."],
  welcome_christmas: ["Merry Christmas, darlin'. Santa left you coal. I'm leavin' you a roast."],
  result_falsestart: ["Lord, sugar. That was shorter than my patience at the DMV.", "Darlin', you died before I could finish sayin' darlin'.", "Well that was over quicker than a preacher's prayer at a potluck."],
  result_terrible: ["Bless your heart. And I mean that in the worst way possible.", "Darlin', you dodged like a cow on a trampoline.", "Lord have mercy, I've seen faster reflexes on a church pew.", "Sugar, you ran into everything but a good decision."],
  result_fail: ["Good start, sugar. Then you fell apart like a cheap lawn chair.", "You were doin' fine, darlin'. Then you got cocky. I saw it.", "That run had potential, sugar. Like my ex. Had.", "Not awful, darlin'. Not good. Lukewarm sweet tea. Nobody wants that."],
  result_near: ["Oh sugar, so close to your best I could taste it. Tasted like failure.", "Darlin', you could see your record from there. Then you tripped on air.", "Almost, sugar. Almost only counts in horseshoes, and this ain't horseshoes."],
  result_pb: ["New personal best? Well, slap me silly. Who taught you that, sugar?", "You improved, darlin'. I'm callin' your mama. She won't believe it.", "A new record, sugar. Frame it. Hang it. It won't happen twice."],
  result_perfect: ["Well slap my knee and call me Sally. That was incredible, darlin'.", "Sugar, that run made me spill my sweet tea. I'm not even mad.", "I had a roast all ready, darlin'. You burned it. On purpose."],
  rank_up: ["Climbin' the board, sugar. Somebody up there's clutchin' their pearls.", "Up a few spots, darlin'. Look at you, gettin' uppity."],
  rank_top10: ["Top ten, sugar? Somebody fetch my fainting couch.", "Top ten, darlin'. I'm tellin' the whole church."],
  rank_streak: ["You keep climbin', sugar. Stop it before I have to like you.", "Up again, darlin'? What'd you eat? Was it my cornbread?"],
  rank_down: ["Somebody passed you on the board, sugar. Didn't even wave.", "Slipped down the board, darlin'. Like a pie off the windowsill."],
  roast_climb: ["You moved up, sugar, but that dodgin' still looked like a chicken in a hailstorm.", "Higher rank, darlin'. Same flappin' around like a fish on a dock."],
  interrupt: ["Sugar, I was MID-SENTENCE. Where are your manners?", "Darlin', did you just skip me? Your mama'd be ashamed.", "Well bless your heart. Interrupt me again and see what happens."],
  ad_before: ["Hold your horses, sugar. Somebody paid for a commercial.", "Quick ad, darlin'. Go think about what you did."],
  ad_after: ["You're back, sugar. Don't waste it like you waste everything.", "One heart, darlin'. Treat it better than you treated the last three."],
};

const MICK = {
  welcome_morning: ["OI! Mornin', mate. Had your brekkie? Good. Now cop this beatin'.", "Up early, legend? Even the kookaburras are laughin' at ya."],
  welcome_afternoon: ["Arvo, mate. Shouldn't you be at work? Ya bludger.", "Lunch break? Righto. Grab a meat pie and watch yourself fail."],
  welcome_evening: ["Evenin', mate. Day's done. Let's finish it off with a loss, eh?", "Back again, champion? You're like a seagull at a chip shop. Can't keep ya away."],
  welcome_late: ["Mate, it's two in the mornin'. Even the drop bears are asleep.", "Go to bed, legend. Your thumbs are cooked. So are you."],
  welcome_weekend: ["Weekend, mate! Could be at the beach. Chose this. Fair dinkum.", "Whole weekend off and you're here. Throw another loss on the barbie."],
  welcome_back: ["OI! Look what the dingo dragged in.", "You again, mate? Like a blowfly at a barbie. Just keep comin' back."],
  welcome_new: ["Crikey, a fresh one. Welcome to the arena, mate. Dodge the lot. Good luck. You'll need it.", "G'day, legend. I'm Mick. I'll be roastin' ya today. No hard feelings. Actually, heaps of hard feelings."],
  welcome_thanksgiving: ["Happy Thanksgiving, mate. We don't even have it in Australia, and you're still losin' it."],
  welcome_christmas: ["Merry Christmas, mate. It's thirty-five degrees here and you're still the one gettin' cooked."],
  result_falsestart: ["Mate, that was over faster than a snag on a hot barbie.", "Strewth. Didn't even give the dots a chance to warm up.", "Over before the kettle boiled, champion."],
  result_terrible: ["Mate, you dodged like a kangaroo on roller skates.", "Strewth. That was rougher than a cane toad's back.", "I've seen a koala with better reflexes, and they sleep twenty hours a day.", "Stone the crows. Three hearts, gone. Like a tourist's wallet."],
  result_fail: ["Decent start, mate. Then you went full galah.", "You were goin' alright, champion. Then you got cocky.", "That run had potential, mate. Like my footy team. Had.", "Not bad, not good. Warm beer, mate. Nobody wants it."],
  result_near: ["Ohhh, so close to your best, mate. Like droppin' your pie right outside the shop.", "You could see your record from there, legend. Then ya tripped over a thong.", "Almost, mate. Almost doesn't get you a beer."],
  result_pb: ["New personal best? Crikey. Who swapped your brain, mate?", "You improved, champion. I'm filthy about it.", "New record, legend. Don't get a big head. Your hat won't fit."],
  result_perfect: ["CRIKEY. That was unreal, mate. I need a lie down.", "That run was absolutely ridgy didge, legend. I'm shakin'.", "I had a roast ready, and you went and ruined it, ya legend."],
  rank_up: ["Climbin' the board, mate. Someone up there's spat out their beer.", "Up a few spots. Someone's havin' a shocker because of you."],
  rank_top10: ["Top ten, mate? Ring your mum. I'll wait.", "Top ten? Someone check that scoreboard, legend. Somethin's dodgy."],
  rank_streak: ["You keep climbin', mate. Knock it off before I have to respect ya.", "Up again, champion? What are you eatin'? Vegemite?"],
  rank_down: ["Someone passed you on the board, mate. Didn't even say g'day.", "Slipped down the board, champion. Like a shrimp off the barbie."],
  roast_climb: ["You moved up, mate, but that dodgin' still looked like a chook with a sunburn.", "Higher rank. Same flailin' around like a stunned mullet, legend."],
  interrupt: ["OI! I was MID-SENTENCE, ya galah.", "Can I finish ONE sentence, champion? Strewth.", "Righto, just skip me then. See if I care. I care heaps."],
  ad_before: ["OI, hold up, mate. The sponsors want a turn.", "Commercial break. Apparently humiliation isn't free."],
  ad_after: ["You're back, mate. Don't stuff it up.", "One heart, champion. Try not to cark it in three seconds."],
};

export const LINES = { petty: PETTY, daisy: DAISY, mick: MICK };
