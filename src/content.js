export default [
  {
    title: "How to write funny code",
    heading: "A 10 step programme in whimsy, hilarity and shameless puns",
    type: "TITLE"
  },
  {
    hide: true,
    title: "Congratulate the bold and brave",
    examples: [
      `
/**
 * For the brave souls who get this far: You are the chosen ones,
 * the valiant knights of programming who toil away, without rest,
 * fixing our most awful code. To you, true saviors, kings of men,
 * I say this: never gonna give you up, never gonna let you down,
 * never gonna run around and desert you. Never gonna make you cry,
 * never gonna say goodbye. Never gonna tell a lie and hurt you.
 */
    `
    ]
  },
  {
    title: "Apologise",
    examples: [
      //       `
      // // I'm sorry.
      //   `,
      `
//Dear future me. Please forgive me.
//I can't even begin to express how sorry I am.  
  `
    ]
  },
  {
    title: "Honesty",
    examples: [
      `
// drunk, fix later
    `,
      `
Catch (Exception e) {
  //who cares?
}
    `,
      `
//This code sucks, you know it and I know it.  
//Move on and call me an idiot later.
    `,
      `
// I am not sure if we need this, but too scared to delete.
    `,
      `
// I am not responsible of this code.
// They made me write it, against my will.
    `,
      `
/*
This isn't the right way to deal with this, but today is my last day, Ron
just spilled coffee on my desk, and I'm hungry, so this will have to do...
*/

return 12; // 12 is my lucky number
    `,
      `
try {

}
catch (SQLException ex) {
    // Basically, without saying too much, you're screwed. Royally and totally.
}
catch(Exception ex)
{
    //If you thought you were screwed before, boy have I news for you!!!
}
    `,
      `
// The following strings are meant to be funny.  Do not edit these strings
// unless you are funny, too.  If you don't know if you're funny, you're
// not funny.  If fewer than 2 people unrelated to you have told you that
// you're funny, you're not funny.
    `
    ]
  },
  {
    title: "Artwork",
    examples: [
      `
#Christmas tree initializer  
toConnect = []  
toRead =   [  ]  
toWrite = [    ]
primes = [      ]  
responses = {}  
remaining = {}  
  `,
      `
def format_ticket_content(text, recursive = true)
if text.is_a?(TicketNote)
  note = text
  text = note.content
else
  note = nil
end

## Safety pig has arrived!
text = h(text)
##                               _
##  _._ _..._ .-',     _.._(\`))
## '-. \`     '  /-._.-'    ',/
##    )         \\            '.
##   / _    _    |             \\
##  |  a    a    /              |
##  \\   .-.                     ;  
##   '-('' ).-'       ,'       ;
##      '-;           |      .'
##         \\           \\    /
##         | 7  .__  _.-\\   \\
##         | |  |  \`\`/  /\`  /
##        /,_|  |   /,_/   /
##           /,_/      '\`-'
##
  `
    ]
  },
  {
    title: "Puns and word play",
    examples: [
      `
stop(); // Hammertime!
  `,
      `
// Replaces with spaces the braces in cases where braces in places cause stasis
$str = str_replace(array("\{","\}")," ",$str);
  `,
      `
doRun.run();  // ... "a doo run run".
  `,
      `
class Act //That's me!!!
{

}
  `,
      `
if (/*you*/ $_GET['action']) { //celebrate
  `
    ]
  },
  {
    hide: true,
    title: "Mr Obvious",
    examples: [
      `
  return 1; # returns 1
  `
    ]
  },
  {
    title: "Complaints",
    examples: [
      `
/// <summary>
/// Class used to work around Richard being a fucking idiot
/// </summary>
/// <remarks>
/// The point of this is to work around his poor design so that paging will
/// work on a mobile control. The main problem is the BindCompany() method,
/// which he hoped would be able to do everything. I hope he dies.
/// </remarks>
public abstract class RichardIsAFuckingIdiotControl : MobileBaseControl, ICompanyProfileControl
{
  `,
      `
/// <summary>
/// This returns true if this control is supposed to be doing anything
/// at all for this request. Richard thought it was a good idea to load
/// the entire website during every request and have things turn themselves
/// off. He also thought bandanas and aviator sunglasses were "fuckin'
/// gnarly, dude."
/// </summary>
protected bool IsThisTheRightPageImNotSureBecauseRichardIsDumb()
  `
    ]
  },
  {
    hide: true,
    title: "References",
    examples: [
      `
// hack for ie browser (assuming that ie is a browser)
  `
    ]
  },
  {
    title: "Arguments",
    examples: [
      `
// somedev1 -  6/7/02 Adding temporary tracking of Login screen
// somedev2 -  5/22/07 Temporary my ass
    `
    ]
  },
  {
    hide: true,
    title: "Factual randomness",
    examples: [
      `
/* Emits a 7-Hz tone for 10 seconds.
True story: 7 Hz is the resonant frequency of a
chicken's skull cavity. This was determined
empirically in Australia, where a new factory
generating 7-Hz tones was located too close to a
chicken ranch: When the factory started up, all the
chickens died.
Your PC may not be able to emit a 7-Hz tone. */

main()
{
    sound(7);
    delay(10000);
    nosound();
}
  `
    ]
  },
  {
    title: "Notes for future explorerers",
    examples: [
      `
//
// Dear maintainer:
//
// Once you are done trying to 'optimize' this routine,
// and have realized what a terrible mistake that was,
// please increment the following counter as a warning
// to the next guy:
//
// total_hours_wasted_here = 42
//
  `,
      `
/*
 * You may think you know what the following code does.
 * But you dont. Trust me.
 * Fiddle with it, and youll spend many a sleepless
 * night cursing the moment you thought youd be clever
 * enough to "optimize" the code below.
 * Now close this file and go play with something else.
 */
  `,
      `
/* You are not meant to understand this */
  `,
      `
// no comments for you
// it was hard to write
// so it should be hard to read
  `,
      `
//Abandon all hope ye who enter beyond this point
  `
    ]
  },
  {
    title: "Preventatives and threats",
    examples: [
      `
// Autogenerated, do not edit. All changes will be undone.
    `,
      `
// If this comment is removed the program will blow up
    `,
      `
/* We will NOT put a fucking timestamp in the header here. Every
time you put it back, I will come in and take it out again. */
    `
    ]
  },
  {
    title: "Mapping",
    examples: [
      `
// I dedicate all this code, all my work, to my wife, Darlene, who will
// have to support me and our three children and the dog once it gets
// released into the public.
      `
    ]
  },
  {
    title: "Confusion",
    examples: [
      `
// I don't know why I need this, but it stops the people being upside-down

x = -x;
  `,
      `
/*
after hours of consulting the tome of google
i have discovered that by the will of unknown forces
without the below line, IE7 believes that 6px = 12px
*/
font-size: 0px;
  `
    ]
  }
];
