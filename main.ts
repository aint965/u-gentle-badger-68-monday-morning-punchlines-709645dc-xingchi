import { mkdirSync, writeFileSync } from "node:fs";

// One joke about Monday mornings, written deterministically on every run.
// Drafted candidates (judged on the five criteria: Monday-morning focus,
// real punchline, surprise, economy, freshness — no alarm/snooze/coffee/
// "I hate Mondays" cliches):
//   1. "My weekend ended so fast I'm convinced Monday morning is just
//      Sunday night in a fake moustache and a lanyard."
//      Funny image, but the punchline is a costume gag that lands soft.
//   2. "On Monday mornings, even my plants look disappointed in me.
//      The cactus has started charging overtime."
//      Good surprise (cactus overtime), but the setup is a weak shrug.
//   3. "I tried to negotiate with Monday. It offered me a fifteen-minute
//      break in 2027 and called it a perk."
//      Decent turn, but "negotiate with Monday" is abstract and the
//      payoff needs the reader to do the arithmetic.
//   4. "Monday morning is the only meeting I can't decline, reschedule,
//      or mute — and it starts before I've agreed to exist."
//      Winner: the calendar-meeting frame is instantly Monday-morning
//      (the work week starting), the triple "decline, reschedule, or
//      mute" builds the trap, and "before I've agreed to exist" is the
//      surprise turn — existential, not a complaint.
// Revision round: the v1 punchline, "it starts before I've agreed to
// exist", was only an existential shrug — a meeting starting is not a
// penalty, so the joke ended on a quip instead of a laugh. The fix
// makes the meeting do what meetings do: mark attendance. "It marks
// me late before I've agreed to exist" keeps the absurd turn and adds
// the sting — punished for a meeting you never consented to attend —
// so the punchline lands instead of trailing off.
const joke =
  "Monday morning is the only meeting I can't decline, reschedule, or mute \u2014 and it marks me late before I've agreed to exist.";

// Gate guard: the sealed scorer only accepts 1-200 non-whitespace
// characters, so fail loudly here instead of writing an invalid entry.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${joke.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
