/* =========================================================
42 REASONS
Main JavaScript
========================================================= */

/* =========================================================
01. ELEMENT REFERENCES
========================================================= */

// Welcome screen

const welcomeScreen =
document.getElementById(
"welcome-screen"
);

const enterButton =
document.getElementById(
"enter-button"
);

// Main website

const mainContent =
document.getElementById(
"main-content"
);

// Photo card

const lettersCard =
document.getElementById(
"letters-card"
);

// Page sections

const homePage =
document.getElementById(
"home-page"
);

const lettersPage =
document.getElementById(
"letters-page"
);

const favoritesPage =
document.getElementById(
"favorites-page"
);

const letterViewPage =
document.getElementById(
"letter-view-page"
);

// Favorites

const favoritesGrid =
document.getElementById(
"favorites-grid"
);

const favoritesEmpty =
document.getElementById(
"favorites-empty"
);

const favoritesNavButton =
document.getElementById(
"favorites-nav-button"
);

// Individual letter

const individualLetter =
document.getElementById(
"individual-letter"
);

const individualLetterGallery =
document.getElementById(
    "individual-letter-gallery"
);

const backToLettersButton =
document.getElementById(
"back-to-letters"
);

const individualLetterNumber =
document.getElementById(
"individual-letter-number"
);

const individualLetterTitle =
document.getElementById(
"individual-letter-title"
);

const individualLetterEyebrow =
document.getElementById(
"individual-letter-eyebrow"
);


const individualLetterText =
document.getElementById(
"individual-letter-text"
);

// Time locked letter elements

const timeLockedView =
document.getElementById(
"time-locked-view"
);

const countdownDays =
document.getElementById(
"countdown-days"
);

const countdownHours =
document.getElementById(
"countdown-hours"
);

const countdownMinutes =
document.getElementById(
"countdown-minutes"
);

const countdownSeconds =
document.getElementById(
"countdown-seconds"
);

const unlockDateText =
document.getElementById(
"unlock-date-text"
);

// Mobile menu

const mobileMenuToggle =
document.getElementById(
"mobile-menu-toggle"
);

const mobileMenu =
document.getElementById(
"mobile-menu"
);

const mobileNavigationButtons =
document.querySelectorAll(
".mobile-nav-link"
);

// Navigation

const navigationButtons =
document.querySelectorAll(
"[data-page]"
);

/* =========================================================
   02. LETTER DATA
   Central database for all letters
   ========================================================= */

const lettersData = {

    "letter-01": {

        id: "letter-01",

        number: "01",

        title:
            "Open me when you first enter this website",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L01.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Hiiii Kiara, 
            </p>

            <p>
                I’m so excited you are finally reading this broh. I already finished the webpage and now i start writting the 42 letters. I hope i finish soon and you can read everything I have for u omggagagaga.
            </p>

            <p>
                Okay, actually i don’t want you to rush it pls. I know ur curiosity will get the worse of you, but try to follow the rules. And not only the rules, there are some cards you can open whenever (specially in the end). But wait a little while for those ones, u will enjoy it more.
            </p>

            <p>
                I tried to make an order, the first ones are more generic and less ‘deep?’ ajajsdja i feel so pssy. 

            </p>
            <p>
                In order u arrive to the end, the cards will get less generic (open when u feeling this emotion), so in theory u can open them whenever but no. Take it easy
            </p>
            <p>
                Okay the actual rules!!!
            </p>
            <p>
                1. MAXIMUM ONE LETTER A DAY
                Unless you really, really need another one. Don’t binge them. Let each letter stay with u for a while.

            </p>
            <p>
                2. OPEN THEM WHEN THE TITLE TRULY MATCHES HOW YOU FEEL
                Don’t read the title, and just because you are feeling curious. Save it for the day you actually need it

            </p>
            <p>
                3. READ SOMEWHERE QUIET
                No rush. No distractions. Just you.

            </p>
            <p>
                5. DON'T SKIP TO THE LAST LETTERS
                I promise it’s worth waiting

            </p>
            <p>
                6. TAKE YOUR TIME
                Some letters will make you smile, some might make you cry, and some might not mean much unit some time passed.

            </p>
            <p>
                This is probably the cringiest thing I've ever done. But for you it is worth it.
            </p>
            <p>
                Pd: The webpage in laptop looks better, ik u will use the phone but I wanted you to know :)
            </p>
            <p>
                Let’s get started
            </p>
            
            <p>
                J
            </p>

        `

    },
    "letter-02": {

        id: "letter-02",

        number: "02",

        title:
            "Open me when are having a great day",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L1.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Hiiiii Kiara, I'm so happy you're having a fantastic day. I'd love to be there with you so you could share a little of your happiness and give me one of those beautiful smiles. I know you'll have lots and lots of super fun days like this one in the US, I love that you're happy, it makes me happy.

            </p>

            <p>
                 I’d like you to write down in a notebook or something how you’re feeling and what happened today to make it such a great day, so that when you have a bad day, you can read it and smile a little. Keep enjoying your day, days like these make life amazinnn.
            </p>

            <p>
                 I love you SOOOOOMUCH ♡
            </p>

            <p>
                J
            </p>

        `

    },


    "letter-03": {

        id: "letter-03",

        number: "03",

        title:
            "Open me when something amazing happens",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L2.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Before you read this, I want you to stop for a second and really think about what just happened…
            </p>

            <p>
                HOLYYYYY, honestly I have no clue what happened but it has to be so fkin amazing. I'm so happy and I can't wait to know what it is.
            </p>

            <p>
                I would like you to text me and tell me what was so amazing!!!! I wanna know EVERYTHING, even the smallest details, so don't you dare give me some boring shi explanation. I want the whole story.
            </p>

            <p>
                Whatever happened, I'm genuinely so happy for you. I hope you're reading this with the biggest smile on your face, because I can already imagine it. I wish I could be there with you right now so you could tell me everything in person and we could celebrate together.
            </p>

            <p>
                So go ENJOYYY this moment!! You deserve it. And now, seriously, text me. I NEED TO KNOW WHAT HAPPENED
            </p>

            <p>
                I love UUU KIARA ♡
            </p>

            <p>
                J
            </p>

        `

    },

        "letter-04": {

        id: "letter-04",

        number: "04",

        title:
            "Open me when you are feeling sad",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L3.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Hi bebe, I see that u are feeling sad… I’m so sorry, Kiara.

            </p>

            <p>
                I don't know exactly what happened. Whatever it is, you are allowed to feel this way. Don't be ashamed of it, and don't pretend that you're not sad
            </p>

            <p>
                I wish I could be there with you right now, to give you one of those big hugs, hold you for hours and keep you company during this bad moment.
            </p>

            <p>
                The good thing is that this feeling won’t last forever. I know it feels heavy right now, but I know you've had bad and worse days before, and somehow, the warrior always makes it through them :)
            </p>

            <p>
                So for now, don't worry about fixing everything. Just take a breath. Let yourself be sad for a little while. And when you’re ready, take one tiny step forward.
            </p>

            <p>
                Life isn't just wonderful days and amazing experiences. There’s this part too. Don't rush or feel anxious to get rid of the sadness. It's not a comfortable feeling, but you don't have to fight it. Just wait. It will slowly vanish, and happiness will find its way back to u.
            </p>

            <p>
                I love you, my warrior ♡
            </p>

            <p>
                J
            </p>

        `

    },
        "letter-05": {

        id: "letter-05",

        number: "05",

        title:
            "Open me when you are overthinking",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L4.webp",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Hey, sweetie, let’s take a deep breath.

            </p>

            <p>
                I know your head is a mess right now. I don’t know why, maybe something embarrassing happened, maybe you're worried about something bad that could happen in the future, or maybe you're trying to figure someone out. I have no idea.

            </p>

            <p>
                The only thing I know is that right now, you need to turn down the volume in your head. Sometimes, so much of our suffering comes from the stories our minds create. It might have been a misunderstanding, something embarrassing that no one will remember in the blink of an eye, or something that will never even happen. And i am sure that, in the end, everything will turn out just fine.

            </p>

            <p>
                Overthinking isn't good. Try to look at things objectively, without letting your fear decide what's true. Your feelings are real, but that doesn't always mean that what you're afraid of is going to happen.

            </p>

            <p>
                U will probably come to the conclusion that theres no answer you can know for sure right now. And that is okay. You don't have to solve everything tonight.
            </p>

            <p>
                So focus on what's important: u are here, today, right now, reading this. And thats all you have to worry about for the moment.

            </p>

            <p>
                No one knows if you'll get hit by a truck tomorrow, so pause for a moment and pay attention to the present. It's called "the present" because it's a gift, and it's the only moment you can actually live.
            </p>

            <p>
                Whenever you find yourself suffering over something that already happened, or something that hasn't happened yet, take a deep breath and come back here. Right now. This moment.
            </p>
            <p>
                Whatever happens tomorrow, you'll deal with it tomorrow. And whatever happened yesterday, you can't change it now.
            </p>
            <p>
                So bebe, lest try to turn down the volume for a little while. You don't need to figure everything out right now.
            </p>
            <p>
                You're here. You're okay. You're breathing.
            </p>
            <p>
                And that's enough for tonight ♡
            </p>
            <p>
                J
            </p>

        `

    },
        "letter-06": {

        id: "letter-06",

        number: "06",

        title:
            "Open me when you are travelling",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L5.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Hey cutie, soooo you're traveling, huh???

            </p>

            <p>
                I'm dying to know where, but I'm even more dying to be able to go with you, unfortunately, we can't.
            </p>

            <p>
                I would love for you to pay attention to all the little things on this trip, the things you normally do on autopilot, or that most people dont even notice. I don’t know where you’re going, but I’m sure there are tons of little things waiting for you to discover and lots of fun to be had.

            </p>

            <p>
                Take pictures of everything, shoot some cringey videos on the street, have a great time, but also remember to put your phone down and enjoy the view with your own eyes. Stop at a spot you find beautiful, breathe, feel the air on your face, and be grateful. Enjoy every moment because every trip is unique, and you'll never experience that exact moment again.

            </p>

            <p>
                When you see something you know I’d like, think of me jeje, okay? I’m going to give you a mission xd
            </p>

            <p>
                When you see the most random thing on the street, something that would make us laugh, u have to take a picture of it and send it to me :P

            </p>

            <p>
                Have so much fuuuuuuuun 
            </p>

            <p>
                I love you Kiara ♡
            </p>
            <p>
                J
            </p>

        `

    },
        "letter-07": {

        id: "letter-07",

        number: "07",

        title:
            "Open me when everything is wrong",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L6.webp",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Hey, how is the most beautiful, cool, funny, smart girl in the world doing? I guess the universe decided to fuck with you for a while.

            </p>

            <p>
                I'm sorry, we'll survive this disaster.

            </p>

            <p>
                First, I need to know what happened. Did u wake up late? Spill something on yourself? Get into an argument? Did ur wifi die? Or was it a combination of all of those? Because then we are COOKED

            </p>

            <p>
                Whatever happened today, remember that today is just one fuckin day. It doesn't define your week, your month, your life, or you. Don't let a bunch of unlucky shit pile up and make you feel like something is wrong with you.

            </p>

            <p>
                You are going to have a lot of days like this, because right now you are basically a superhuman. You're working, you're studying, you're getting your drivers licence, you're studying Spanish, you have friends to deal with, family to deal with, and a bunch of other shit going on. It's completely fine if not everything goes well all the time. You're doing a lot, and you don't have to be perfect at everything.
            </p>

            <p>
                So when this happens, fuck everything. Fuck everyone. You have to enter your "I'm a warrior, not a worrier" mood (peak plate btw), get into bed, watch MHA, my little pony, or whatever the fuck makes you feel better, get yourself some good snacks, and just relax.

            </p>

            <p>
                Tomorrow will be a better day. Or maybe tomorrow will also be shit, and that's okay too. Then next week will be better. A bad day doesn't mean a bad week, and a bad streak doesn't mean a bad life.
            </p>

            <p>
                And if none of this works, you can always imagine me next to you, equally pissed off, blaming everything that got in our path today. We'll complain together until we run out of things to complain about.
            </p>
            <p>
                So for now, just breathe, eat something, get comfortable, and let today be over.
            </p>
            <p>
                I love you, cutie ♡
            </p>
            <p>
                J
            </p>

        `

    },
        "letter-08": {

        id: "letter-08",

        number: "08",

        title:
            "Open me when you are angry",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L6.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Heloui Kiara,

            </p>

            <p>
                I can tell you’re fucking pissed. I have no clue what happend but I'm sure that u have a good reason.

            </p>

            <p>
                If you need to scream, scream. If you need to cry, cry. If you need to complain about someone for three hours, call me and I’ll listen. But don’t let your anger make important decisions for you. That’s the worst you can do, because now u might see it clear asfuck, but maybe when the anger goes down u probably regret. And replacing a bad emotion with another bad emotion its not cool. 

            </p>

            <p>
                Before you do anything you’ll regret, wait a couple hours or the time u need. Dont try to think about it right now. Just distract urself with something else. Take a shower, drink some water, watch something, go to the beach. Anything.

            </p>

            <p>
                And when you don't have all that anger inside you anymore, you'll be able to think about everything more clearly. And if u get mad again, then beat the crap out of whoever is making u mad. And if u can't, call me and I will come swimming across the ocean in 8 minutes to beat that person. 
            </p>

            <p>
                U can be 100% right and have every reason in the world to be mad in that moment, but that doesn't mean you have to act on it right away. That's not what a smart person like you does. Just deal with your boiling blood for a while, and later, when you're calm, you will make a decision. 

            </p>

            <p>
                And remember that there are things, that dont deserve your energy. A braindead person, a random stupid comment, whatever. You just have to say fuck this shi and dont give another second of your time or your peace to it.            </p>

            <p>
                Don’t kill anybody pls
            </p>
            <p>
                I love you bebe ♡
            </p>

            <p>
                J
            </p>

        `

    },
        "letter-09": {

        id: "letter-09",

        number: "09",

        title:
            "Open me when you acccomplishing something you are so proud of",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L9.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Heyyyyy, look at uuuuu.
            </p>

            <p>
                You did it.
            </p>

            <p>
                I don't even know what it is, but I'm already so fucking proud of you. It could be something huge, or maybe something that only means a lot to you. Either way... YOU DID ITTTT.
            </p>

            <p>
                First of all, stop for a second. Don't just close this letter and move on to the next thing on your list.
            </p>

            <p>
                Celebrate.
            </p>

            <p>
                Seriously
            </p>

            <p>
                Go get your favorite snack, dance around your room like an idiot, scream, call someone, do whatever makes you happy. Just don't let this become another thing you did and forgot about five minutes later.

            <p>
                You know what I think you do a little too often?
            </p>

            <p>
                You achieve something you've been working for weeks or months... and after like three minutes you're already thinking about something else. ADHD is evil huh?
            </p>

            <p>
                Not today. Today I want you to look back for a second and realize how far you've come.
            </p>
            <p>
                Maybe a few months ago or weeks, you were stressed, doubting yourself, wondering if you could even do it.
            </p>
            <p>
                And look at you now. You made it.
            </p>
            <p>
                I'm proud of the achievement, of course. But I'm even more proud of the person you became while chasing it.
            </p>
            <p>
                Mission time jejej:
            </p>
            <p>
                Take one picture today. I don't care if it's your beautiful smile, the place you're in, your food, or literally your ceiling. And draw a little purple heart in the middle.
            </p>
            <p>
                And everytime u feel like you can’t do something or that you are not enough, watch this picture.
            </p>
            <p>
                Congratulations my bebe!!!
            </p>
            <p>
                Now enjoy this moment before your brain starts to lose the dopamine bru.
            </p>
            <p>
                I love you Kiara, you are something else ♡
            </p>
            <p>
                J
            </p>

        `

    },
        "letter-10": {

        id: "letter-10",

        number: "10",

        title:
            "Open me when you are feeling lonely",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L10.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Hiiii bebe,
            </p>

            <p>
                So you're feeling lonely huh :( I'm sorry. I know that feeling fucking sucks, and I know you're probably thinking "broh, I'm literally surrounded by people, how can I be lonely?" But that's exactly the thing. U can be surrounded by 100 people and still feel completely alone. Sometimes u just want to be with someone who actually knows you, someone you don't have to explain yourself to, and I think that's probably even harder right now. 
            </p>

            <p>
                You're in a completely different country, knowing new people or knowing them again, new places, new routines, new everything. You're building a whole new life there, and sometimes you're gonna feel like you don't really belong yet. And that's okay.
            </p>

            <p>
                Don't force urself to be happy all the time just because you're having an amazing time. U can have the time of your life and still have one of those nights where you just feel fucking lonely. Both things can exist at the same time. But don't let loneliness convince u that you're actually alone. You have people who love you, your family, your friends, people you've met there, and people you haven't even met yet. Give them time. You don't build a real connection with someone in one day.
            </p>

            <p>
                So I have the little mission for jejej i hope u don’t find the little missions annoying af.
            </p>

            <p>
                Text someone you haven't talked to in a while. Literally anyone. Just send a "heyyy, how are u?" or ask someone to hang out, go get some food, go outside and smoke one of those peak cigs, do something stupid. You don't have to wait until you feel better to start being around people. Sometimes u have to move first and the feeling comes later.
            </p>

            <p>
                And if you do all of that and you're still feeling lonely..., you have unlocked the easiest option. Text me by sending me the image in the top. I'll probably answer with something stupid and make everything 10% worse. And if that doesn't work, I'll obviously swim across the ocean in 8 minutes, like always.

            <p>
                But seriously Kiara, feeling lonely is a feeling, not a fact. You're not alone, u just feel alone right now. There's a difference.
            </p>

            <p>
                I love you, my warrior ♡
            </p>
            <p>
                J
            </p>

        `

    },


    "letter-27": {

        id: "letter-27",

        number: "27",

        title:
            "Open me when it's been 6 months",

        eyebrow:
            "A letter waiting for the right moment",

        type:
            "time-locked",

        unlockDate:
            "2027-01-08",

        image:
            "assets/images/LK.png",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Hello Kiara,
            </p>

            <p>
                It had already been six months there. From 8 july to 8 january.
            </p>

            <p>
                I hope you are doing super well, I know you will get used to there although you are having a bad time now. You will get used to and have soososososo much fun. 
            </p>

            <p>
                Think about the day you left Spain. 
            </p>
            <p>
                Think about how you felt. What you were scared about, what you were excited about, what you thought your life was gonna look like, the people you thought you were gonna miss the most, and all the things you had absolutely no idea were coming.
            </p>
            <p>
                And all that fear, and now you are here, 6 months in. It’s crazy how quick time runs huhh

            </p>
            <p>
                I hope you take a second to be proud of yourself. You literally started another chapter of your life in a completely different country. That's not a small thing. 
            </p>
            <p>
                And I wonder what you think about Spain now. Maybe you miss it more than you thought you would. Maybe you don't miss it as much as you expected. Maybe you miss certain people but not certain things. Maybe you've found things in the US that you would never want to leave behind now. 
            </p>
            <p>
                Whatever the answer is, don't feel guilty about it.
            </p>
            <p>
                U are allowed to change.
            </p>
            <p>
                U are allowed to miss something and still be happy somewhere else.
            </p>
            <p>
                U are allowed to love your new life without loving your old one less
            </p>
            <p>
                And honestly, I hope you have changed. I hope these six months have made you discover new things about yourself, even if some of them were difficult. 
            </p>
            <p>
                Write a little letter to yourself of six months ago, the one who left. The things she shouldn’t be fearing, the things she should, the things she will learn, and everything  that comes into your mind.
            </p>
            <p>
                In theory you should have come to visit, you told me you would come during this January. I don’t know if we still talk, I know that is not the same, we probably talk once in a while. And it’s fine. I hope we are not mad at each other or something like that. If sometime you think I hate you, don’t believe it. Because I’d never be able to hate someone that I loved so much.
            </p>
            <p>
               I don’t know what I will be doing, we were together for 7 months. And now I have to wait 6 months 5 months until you visit, if you visit, and if we get along well. I hope so. I can’t wait to see you again. 

            </p>
            <p>
                Go have fuuuuunnnn you are right in the middle, u just have 5 months more in your SENIORRR GRADE (with advanced classes YEYEEEEEEE)

            </p>
            <p>
                I still love you Kiara, and I always will ♡

            </p>
            <p>
                J
            </p>

        `
    },




    "letter-11": {

        id: "letter-11",

        number: "11",

        title:
            "Open me when you rewatch Titanic",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L11.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Hiiii bebe,
            </p>

            <p>
                YOU ARE WATCHING TITANIC AGAIN???? 
            </p>

            <p>
                I honestly don't know why but knowing you are watching this movie again feels so fucking weird. The last time we watched it, we were together on Sant Jordi, and now you r somewhere in the world, probably US, rewatching it. Get ready to cry jejej.
            </p>

            <p>
                I don't know if you remember everything from that day, but I do. And that's probably the weirdest thing about memories. That movie has attached so many memories of you, i remember going, getting kinda high and you feeling bad before entering, i remember you stupid little laugh when Rose spit, I remember all the smoke from the vape going away and the smell spreading around the room.
            </p>

            <p>
                Honestly I find the movie really good, but what makes it perfect is the situation, if i watched it alone in my house i would gave it a 4 or a 4,5. But since i was with you, and it was our first time to the theater together, it has so many emotions attached, and when i rewatch the movie, those emotions come again like if you were invisible watching the movie next to me.
            </p>

            <p>
                Anyway, since u are watching it again, I have some very important instructions.
            </p>

            <p>
                When the third class party starts, enjoy it properly. This is objectively one of the best parts of the movie and I will not accept any disagreement.

            <p>
                When you arrive where they are floating, and Jack keeps saying that everything will be okay, and she kinda complains. Think about us, that shi remembered me about us so much.
            </p>

            <p>
                I still think that Jack could have fitted on the fucking door, and it pisses me off.
            </p>
            <p>
                I don't care what science says. I don't care what anyone says. Ive seen like 200 tik toks and I KNOW there was space. This debate is over.
            </p>
            <p>
                It's kinda crazy that the when we watched the movie, we were so in love and at least in my head, the fact of you leaving was so far. We were just there, watching Titanic together on Sant Jordi, and look now, completely separated paths, life is beautiful.
            </p>
            <p>
                And now you are watching it again
            </p>
            <p>
                I hope you enjoy it, bebe. I hope it also give you so many memories about us. 
            </p>
            <p>
                I love you, my dawson ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-12": {

        id: "letter-12",

        number: "12",

        title:
            "Open me when you feel lost",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L12.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Heloui Kiara,

            </p>

            <p>
                I don't know exactly what you are lost about. Maybe your future, university, friends, what you want to do with your life, or maybe you just woke up one day and thought "what the fuck am I doing?" I don't know, but whatever it is, I want you to remember something.

            </p>

            <p>
                You don't need to know where u are going right now.
            </p>

            <p>
I think we sometimes expect ourselves to have everything figured out. Like we're supposed to know what we want, where we r gonna live, who we r gonna be with, what we r gonna study, what job we are gonna have, and what our life is gonna look like in 5 years. And then when we don't know, we have the fear we might be doing something wrong.
            </p>

            <p>
Who knows?
            </p>

            <p>
You are literally living one of the biggest changes of your life right now for the second time. ‘new country’ again, new people again, new routines again, university coming, first time working, probably a million different things happening at the same time. Of course you're gonna feel lost sometimes. And honestly, I think everyone is fucking lost sometime. Feeling lost it can be useful to stop for a second, get out of the loop mentally and think about what you are actually doing and if it’s what YOU want to do with YOUR life, where it leads you it’s not important.
            </p>

            <p>
Maybe everyone around you looks like they know exactly what they're doing. They don't. Some are just better at pretending they do, everyone has the fear of ‘what if I am wrong?’

            <p>
And you don't have to make a huge decision today. You don't have to figure out your entire life tonight. Just figure out the next little thing. What do you want to do tomorrow? What do you need to do this week? That's enough
            </p>

            <p>
Sometimes you can only see a few meters of the road, and that's okay. You don't need to see the whole road to keep going forward
            </p>
            <p>
And please don't compare your life with other people's. Someone might already know what they want to study, like you do. Someone might already have their dream job, like you do. Someone might already know who they want to spend their life with. But nobody has insurance for time.
            </p>
            <p>
And remember, if you r wrong, it's not lost time. Everything you've lived is never lost time. Those experiences will teach you something. Experience is life.
            </p>
            <p>
And if you genuinely have no idea what to do, then try things. Make mistakes. Change your mind. Start something and realize you hate it. Start again. That's literally how you are supposed to figure yourself out.
            </p>
            <p>
You've already done things that probably felt impossible before. You left US, you left spain, started building a new life 2 times in you teens. So don't look at yourself like you're some lost little girl who has no idea what she's doing.
            </p>
            <p>
You're figuring it out. Take it easy bebe
            </p>
            <p>
                I love you sweetie ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-13": {

        id: "letter-13",

        number: "13",

        title:
            "Open me when you feel sick",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L13.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Hiiii Kiara,


            </p>

            <p>
NOOOOOO, you're feeling sick. What happened this time? Are u dizzy? Feeling like you're gonna throw up? Your head is gonna explode??

            </p>

            <p>
I know how much u hate that feeling, so I'm sorry :( I wish I could teleport there for a bit. I’d probably sit next to you, bring you some water, ask you every 5 minutes if u r feeling better even though I already know the answer is no, probably making you a bit annoyed jejej sorry.
            </p>

            <p>
Actually, knowing you, you are probably feeling like shit but still trying to do something instead of just lying down. STOP. No studying, no worrying about things you have to do, no trying to be productive. Just get comfy, put My hero academia or My little pony or something that keeps u a bit entertained, drink some water, a bit cold better. And soon, the feeling will fade away and you will be super energetic again. Letsgooo
            </p>

            <p>
Anyway, I hope this is just one of those random moments where your body decides to fuck with you for a few hours and then everything goes back to normal, and its not a actual 3 days sickness, the thing is that now it sucks so much, but its temporal,
            </p>

            <p>
And if you r still feeling horrible while reading this, imagine me sitting next to you saying "are u okay, im sorry bebe?" for the 47th time.
            </p>

            
            <p>
                I love you my warrior, get better soon ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-14": {

        id: "letter-14",

        number: "14",

        title:
            "Open me when you are missing me",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L14.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Hiiii bebe,


            </p>

            <p>
So u are missing me huh? :(

            </p>

            <p>
Well, I'm sorry to inform you that there is currently no myself delivery service available in the US sorry. I've checked. Very disappointing
            </p>

            <p>
But honestly, don’t doubt that at this moment, I'm missing you too. And I think the weirdest part about missing someone is that you don't always miss the big things. Sometimes it's the stupidest little things.            </p>

            <p>
Maybe you miss having someone next to you while doing absolutely nothing. Maybe you miss watching random movies with me, maybe you miss me annoying you for no reason, maybe you miss our talks in stairs with champagne, maybe you miss our 24ths, maybe you miss our cigarettes in random benches. Or maybe you miss everything, like I do.
            </p>

            <p>
I think that's what I miss the most. Not necessarily one specific memory, but having you there. Being able to look at you, touch you, hug you, tell you random shit, laugh with you.
            </p>

            <p>
And I know sometimes you might get this weird feeling of "bro he should be here now" I get it. I have those moments too. Sometimes something happens and my first thought is how would you react, imagine ur cute laugh, and then I remember you r fucking across the ocean

            <p>
But don't stay there for too long. Missing someone can be beautiful, but don't let it stop you from enjoying where u are. Go outside, be cringe, meet new people, make a new memories. You have a whole life happening around you right now
            </p>

            <p>
And maybe one day you'll read this and realize you don't miss me anymore. Maybe you'll read it and laugh because you can't believe you used to miss me this much. Who knows? At some point we will stop missing each other, but our memories will always get a little smile in our faces. 
            </p>
            <p>
For now, if you are missing me, just know that somewhere in Spain there's a stupid guy who misses you too.
            </p>
            <p>
And if it gets really bad you can text me
            </p>
            <p>
I will be there.
            </p>

            <p>
                I love you Kiara ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-15": {

        id: "letter-15",

        number: "15",

        title:
            "Open me when you need to feel like a kid again",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L15.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Hiiii Kiara,

            </p>

            <p>
Okay, today you are not allowed to be an adult.

            </p>

            <p>
No university, no work, no future, no responsibilities, no thinking about what you are gonna do with your life. Nothing. You're 6 years old again
            </p>

            <p>
I want you to forget about everything for a little while and do something that you would normally think is stupid or childish. Watch something you used to watch when you were a kid, not my little pony, something else. Eat your favourite childhood snack, drop pair of backflips on da couch, idk anything stupid. Just do something because it's fun, not because it's useful.
            </p>

            <p>
I think growing up makes us forget how easy it used to be to have fun. When you're a kid, you don't need a reason to get excited. You can spend 3 hours playing the same game, get excited because you found a cool rock, watch the 20 hours of mlp, and nobody gives a shit.
            </p>

            <p>
And honestly, I don't think we should completely lose that.
            </p>

            <p>
I wish I could see the little kiara, she was probably super cool and cute, a bit bossy for sure jejeej

            <p>
Maybe growing up means learning how to deal with responsibilities, but I don't think it means you have to stop being that little girl who gets excited about stupid little things.
            </p>

            <p>
So go be a kid again for a few hours.
            </p>
            <p>
And if you build a blanket fort or break the couch with the backflips, I want pictures.
            </p>

            <p>
                I love you cutie ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-16": {

        id: "letter-16",

        number: "16",

        title:
            "Open me when you have had a nightmare",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L16.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
                Hiiii bebe,

            </p>

            <p>
You had a nightmare? :(

            </p>

            <p>
First of all, u are safe. Whatever the fuck your brain created while you were sleeping, it wasn't real. You are awake now, u r in ur bed, and nothing from that stupid dream can hurt you.
            </p>

            <p>
I know sometimes nightmares can feel way too real. You wake up and for a few seconds you don't even know where you are, your heart is beating like crazy and you are just there thinking "what the fuck was that". So take a deep breath, look around your room and remind yourself that u are here, right now.
            </p>

            <p>
And please don't start thinking about the dream for the next 40 minutes trying to understand what it means. That’s work for tomorrow morning (in case its not already morning xd)
            </p>

            <p>
If it was a really bad one, turn on a light, drink some water and put something stupid on. Watch a dumbass brainrot video that makes you, if not laugh, distract you a little bit.
            </p>

            <p>
Actually, if the dream was about me, I'm mad to u :( 

            <p>
Anyway, close your eyes again when u r ready. It's just a dream, bebe. You are okay.
            </p>

            <p>
And if you have another nightmare tonight, then u are cooked, go scroll on tiktok 5 hours.
            </p>
            <p>
                I love you brave ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-17": {

        id: "letter-17",

        number: "17",

        title:
            "Open me when you need someone to listen to you",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L17.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Hiiii kiara,

            </p>

            <p>
Okay, I'm listening.

            </p>

            <p>
I don't know what happened, but if you need to tell someone everything, text me. You can send me a 30 minutes voice message since u opened this letter.
            </p>

            <p>
You don't have to make sense, you don't have to explain everything perfectly, and you don't have to worry about bothering me. If something is on your mind, get it out.
            </p>

            <p>
And if you don't want to talk to me or you can’t, that's okay too. Sometimes you just need to get everything out of your head without actually talking to someone. Write it down, cry, do one of those debate tiktoks so you see the opinion of people too.
            </p>

            <p>
Just don't keep everything inside because you think you have to deal with it alone.
            </p>

            <p>
And if u are reading this because you really need someone right now and for some reason we don’t talk that often, text me anyway with the number of this letter. I don’t care about the reason, friends, boys, girls, future, anything, even if it's not that deep. I wish I could be there. But whatever you r going through, do anything to take it out.

            <p>
You'll figure it out bebe.
            </p>

            <p>
If you need someone, text me pls
            </p>
            
            <p>
                I love you guapa ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-18": {

        id: "letter-18",

        number: "18",

        title:
            "Open me when you miss Spain",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L18.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Heloui bebe,

            </p>

            <p>
Somebody is nostalgic.
            </p>

            <p>
I know there's probably a million things you miss. The food, the streets, your friends, your family, the weather, the stupid little things you didn't even paid attention to that you didn’t realize you loved until you left.
            </p>

            <p>
But if u r missing Spain right now, I want you to remember that you didn't leave everything behind. A little part of your life is still here.
            </p>

            <p>
Im still here, and when I walk around and see fub, see the bench next to the chinese, muak, the benches next to fub, stairs, our first spot. I get drown in memories with you, it makes me so happy remembering how fun we used to have.
            </p>

            <p>
You can do the classic, if you haven’t yet, scroll through your gallery, and remember so many good moments you had here.
            </p>

            <p>
Spain isn’t disappearing in the ocean bebe, i hope xd

            <p>
You will be back someday.
            </p>

            <p>
And who knows what u will find when you come back :)
            </p>
            
            <p>
                I love you beautiful ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-19": {

        id: "letter-19",

        number: "19",

        title:
            "Open me when you haven't eaten properly",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L19.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Holi bebe,

            </p>

            <p>
Hey, take a second.

            </p>

            <p>
If u are reading this because you realized you haven't really eaten today, I just want you to be kind to yourself. I don't know what happened today, maybe you have been busy, maybe you forgot, maybe the adhd medication, maybe you haven't felt like eating, or maybe it's been a difficult day. Whatever it is, don't be angry at yourself for it.
            </p>

            <p>
You deserve to take care of yourself, even on the days when taking care of yourself feels difficult.
            </p>

            <p>
So if you can, go get yourself something. It doesn't have to be perfect, it doesn't have to be healthy, and it doesn't have to be a lot. Just something that feels okay for you right now. Sit somewhere comfortable, take your time, and don't turn it into another thing you have to stress about. I know there’s no shops nearby but dumplings sound REALLYYY GOOD.
            </p>

            <p>
And please remember that your body isn't something you have to earn the right to take care of. You don't have to deserve food. You don't have to compensate for anything. You don't have to be productive enough, good enough, or anything enough
            </p>

            <p>
And if today is one of those days where this feels harder than usual, that's okay too. Be patient with yourself. You might feel like nothing can go down your throat now, but try to think about something, without stressing about. It can be a simple yogurt, a fruit, dumpling, rice, anything.

            <p>
I wish I could be there, steal a bite from whatever you are eating and annoy you until you smile a little.
            </p>

            <p>
If you need someone, text me pls
            </p>
            
            <p>
Take care of yourself bebe pls. You deserve to have energy to enjoy all the things u are doing.
            </p>
            <p>
                I love you my warrior ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-20": {

        id: "letter-20",

        number: "20",

        title:
            "Open me when you need reassurance",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L20.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Holaaa beautifuuul,

            </p>

            <p>
I don't know what is worrying you right now, maybe you are overthinking something, maybe you are scared you made the wrong decision, maybe you need to know that someone is not mad at you, remind you how worth you are, how beautiful you are or maybe you just need someone to tell you that everything is gonna be okay.

            </p>

            <p>
So here I am
            </p>

            <p>
U are doing better than you think. You are not behind. You haven't ruined everything because of one mistake. You don't need to have everything figured out right now, and you don't need everyone to understand you.
            </p>

            <p>
If you are scared you made the wrong decision, remember that you can change your mind. If you are scared someone is mad at you, talk to them. If you are worried about what everyone thinks about you, remember that most people are too busy thinking about themselves anyway.
            </p>

            <p>
And if what you need to hear is that someone is proud of you, I am.
            </p>

            <p>
If you need to hear that you are loved, you are.

            <p>
If you need to hear that you are enough, you are waaay more than enough.
            </p>

            <p>
And if you need me to tell you everything is gonna be okay, I can't promise you that everything will always be perfect. But you will figure it out, and make everything be okay. LIke you always do.
            </p>
            <p>
So try to distract yourself, watch something, scroll, play brawlstars. And if u are so worried text me pls.
            </p>
            
            <p>
You got this my warrior.
            </p>
            <p>
                I love you so much preciosa ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-21": {

        id: "letter-21",

        number: "21",

        title:
            "Open me when you are having an awful period",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L21.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Hiiii beautifuuul,

            </p>

            <p>
You are seeing crime scenes everytime u go to the bath for 1 WEEK BRO

            </p>

            <p>
I'm sorry, I know you probably feel like shit right now. Cramps, feeling tired, bad mood, wanting to cry for absolutely no reason... the whole fucking package.
            </p>

            <p>
I hope you already finished everything in your day and now you can atleast ‘chill’ lie in bed and do absolutely nothing. I can’t imagine how bad has to be having a bad period and have to go to school, work, baaahhhh so zzz.
            </p>

            <p>
And if u are angry at everyone for no reason, that's okay too. Don’t start world war 3 pls that would be super duper nice of you.
            </p>

            <p>
If I was you I would get that plushi you can warm and smells good, and don’t forget about drinkin some water
            </p>

            <p>
And if you feel like crying, fucking cry. If you feel like complaining, complain. If you want to hate everyone, text me and we hate them together.

            <p>
I wish I could be there to take care of you. I'd bring you water and cuddle you for so long and tata your back and annoy you a little bit too jejaj.
            </p>

            <p>
If you need someone, text me pls
            </p>
            
            <p>
So your mission for this letter is…
            </p>
            <p>
Survive.
            </p>
            <p>
That's it. No productivity. No expectations. Just survive this stupid fukin week.
            </p>
            <p>
And remember, this will pass. You are used to it cuz u are a warrioooorrrrrrrr
            </p>
            <p>
                I love you somuchhh bebe ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-22": {

        id: "letter-22",

        number: "22",

        title:
            "Open me when you feel like giving up",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L22.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Heloui my warrior, I hope u never have to open this letter

            </p>

            <p>
I don't know what happened, maybe everything has been going wrong for a while, maybe you are exhausted, maybe something didn't work even after trying really hard, or maybe you just don't have energy anymore.

            </p>

            <p>
Whatever it is, I know you are tired.
            </p>

            <p>
But please don't make a permanent decision because of a temporary feeling. You don't have to decide what you are gonna do with your life tonight. You don't have to fix everything today. You don't even have to be okay today.
            </p>

            <p>
Sometimes the only thing you need to do is survive the day.
            </p>

            <p>
Forget about tomorrow for a little while. Forget about next month, university, work, everything. Get into bed, watch something stupid, eat something, take a shower, sleep, cry if you need to. I don't care. Just give yourself a break.
            </p>

            <p>
And if you tried something and it didn't work, that doesn't mean you are not capable of doing it. Maybe you need more time, maybe you need to try something different, maybe you need help, maybe you just need to rest.

            <p>
Failing at something doesn't mean you are a failure. You are definitely not a failure Kiara.
            </p>

            <p>
And please remember how many times you have already thought you couldn't do something and somehow you did. You have started over so many times already. You moved countries, built new lives, met new people, learned new things... nd u are still here.
            </p>
            
            <p>
So don't fucking give up on urself now
            </p>
            <p>
I know warriors need to rest to, but you are a really strong one, and you make me the most proud dude in the universe bebe.
            </p>
            <p>
And if you really feel like you can't do it alone, text someone. Me, a friend, your family, anyone you trust. You don't have to carry everything by yourself. I know sometimes it feels like nobody will listen, or understand, or you will sound dramatic. Who cares, the important first, share it with someone plis. I won’t judge you bebe, text me beautiful.
            </p>
            <p>
Tomorrow doesn't have to be amazing
            </p>
            <p>
It just has to be another day.
            </p>
            <p>
And sometimes another day is enough
            </p>
            <p>
I love you so much, and im so proud of you my warrior ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-23": {

        id: "letter-23",

        number: "23",

        title:
            "Open me when you need to hear something you already know",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L23.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Holi guapa,

            </p>

            <p>
You already know all of this, but sometimes knowing something and actually feeling it are two completely different things.

            </p>

            <p>
So let me remind you.
            </p>

            <p>
You are loved.
            </p>

            <p>
You are doing better than you think.
            </p>

            <p>
You don't have to be perfect to be enough.
            </p>

            <p>
You don't have to have your whole life figured out.

            <p>
You are allowed to change your mind.
            </p>

            <p>
You are allowed to rest.
            </p>
            
            <p>
You are allowed to have bad days.
            </p>
            <p>
You are allowed to miss people, to move on, to start again, to be scared, to be excited, to not know what the fuck you're doing
            </p>
            <p>
You don't have to make everyone happy.
            </p>
            <p>
You don't have to prove anything to anyone.
            </p>
            <p>
You are allowed to fail that exam.
            </p>
            <p>
You are the most beautiful girl in the universe.
            </p>
            <p>
My hero academia is the best anime of all time.
            </p>
            <p>
You are allowed to have an opinion
            </p>
            <p>
You are allowed to talk as much as others.
            </p>
            <p>
I will love you always and forever till stardust.
            </p>
            <p>
There are so many more things that you already know, but maybe you don't remind yourself of them everyday. Maybe sometimes you're not good enough to yourself, and you don't even respect these facts.
            </p>
            <p>
Try to think about the things you are a bit too harsh with yourself about, and ask yourself if you would say the same things to someone you love. 
            </p>
            <p>
Spoiler: you wouldn't            
            </p>
            <p>
                So maybe be a little kinder to yourself, okay? ♡

            </p>
            <p>
                J
            </p>

        `

    },
    "letter-24": {

        id: "letter-24",

        number: "24",

        title:
            "Open me when you are scared to start over",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L24.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Hola Kiaraa,


            </p>

            <p>
So u are starting over

            </p>

            <p>
I don't know what u re starting over from. Maybe a relationship, maybe a grade, maybe a friendship, maybe a new job, maybe you are just trying to become a different version of yourself.
            </p>

            <p>
First of all you have to understand that starting over doesn't mean starting from zero.
            </p>

            <p>
Everything you've lived before is still part of you. The people you've loved, the mistakes you've made, the things that didn't work, the good memories, the bad ones, all of it taught you something. You don't have to erase your past to start something new.
            </p>

            <p>
And I know starting over can be scary as fuck. You don't know what is gonna happen, if you are making the right decision, if you are gonna regret it, if you are gonna be happy again. But you will never know if you don't take the first step.
            </p>

            <p>
And if this letter is about a relationship lemme say something :)

            <p>
If you have met someone new, and u are excited about them, don't feel guilty
            </p>

            <p>
You are allowed to like someone again. You are allowed to get butterflies again. You are allowed to be excited when they text you, to think they are beautiful, to want to see them again, to fall in love.
            </p>
            
            <p>
Loving someone new doesn't erase the love you had before.
            </p>
            <p>
You don't have to compare them with the person you were with before. They don't have to be better, they don't have to be worse, and they don't have to fill the same place. You told me it will be hard finding someone better than me, but it will be a completely different person, and you will be a different version of yourself too, and if you fall in love, don’t compare them pls, everyone is beautiful because everyone is different.
            </p>
            <p>
If you want to be alone, becaus you want that time for you, that’s amazing, but, please don't stay alone just because you are scared that moving on means you didn't care enough about the person before.
            </p>
            <p>
You don't owe your past your future.
            </p>
            <p>
And if you are scared because you are starting over after something that hurt you, take it slowly. You don't need to trust someone immediately. You don't need to know if it's going to last forever. Just see where it goes.
            </p>
            <p>
Maybe it works. Maybe it doesn't. That's life. And for me, it’s the funniest thing of living, to experience new things, get to know people, share, love, and although it can be sad sometimes, there are always new experiences waiting for you. ALWAYS. New people, new places, new things to love, new things to learn. Do what you do, this things will keep happening, isn’t that superhyper exciting??
            </p>
            <p>
Starting over isn't failure. Sometimes it's just life giving you another fuckin page
            </p>
            <p>
                So whatever u are starting over from, don't be afraid of the blank page.

            </p>
            <p>
                You already know how to write.

            </p>
            <p>
                I love you bebe ♡

            </p>
            <p>
                J
            </p>

        `

    },
    "letter-25": {

        id: "letter-25",

        number: "25",

        title:
            "Open me when you are afraid of what comes next",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L25.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Heloui Kiara,

            </p>

            <p>
Honestly, I get it. Sometimes not knowing what is gonna happen is fucking terrifying. You can spend hours imagining every possible scenario, trying to predict what your life is gonna look like, and somehow your brain always chooses the worst one, 80% of our suffering is in our imagination.

            </p>

            <p>
But we don't know what's gonna happen. And that's actually kinda exciting.
            </p>

            <p>
Maybe u are scared because you are leaving something comfortable. Maybe you are about to meet new people, start something new, make a big decision, or just feel like your life is changing way faster than you can process.
            </p>

            <p>
You don't have to know if it's gonna be good yet.
            </p>

            <p>
Just give it a chance. To have something good you have to risk it.
            </p>

            <p>
I know sometimes you want to know exactly where you are going before taking the first step, but that's not how life works. You take the step, then you see what's next. And if you don't like where you ended up, you can change your destination, and you will have learnt and lived experiences, that’s what it's all about.

            <p>
U have already done things that probably scared the shit out of you before. Moving to Spain, leaving Spain, starting over, meeting new people, doing things you've never done before... and you are here, with a bunch of memories and experiences, laughs nd tears.
            </p>

            <p>
So whatever is waiting for you, don't imagine it as something you have to survive. Think about all the things you might discover, open up and go for it without fear. I know it’s not easy, but you have to try
            </p>
            
            <p>
New people you haven't met yet. Places you haven't seen. Random memories you don't even know you r gonna make. Things that will probably become some of your favourite memories without you even realizing it at the time.
            </p>
            <p>
And maybe something you are terrified of right now will become something you look back at in a few years and think "why the fuck was I so scared?"
            </p>
            <p>
You don't need to know what's coming.
            </p>
            <p>
Just go find out.
            </p>
            <p>
I love you my overthinker ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-26": {

        id: "letter-26",

        number: "26",

        title:
            "Open me when you feel like nobody understands you",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L26.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Holaaa guapissima

            </p>

            <p>
I'm sorry about that, because if nobody understands you, I’m probably included in that nobody. So im so sorry bebe

            </p>

            <p>
I know how fucking frustrating that can be. You try to explain what u re thinking, why u are feeling something, or why something matters so much to you, and somehow the other person just doesn't get it.
            </p>

            <p>
And then you start thinking maybe you are being dramatic, maybe u are overreacting, maybe u are just weird for caring so much about something that other people don't understand, it’s a weird feeling.
            </p>

            <p>
But no, there’s nothing wrong with you bebe, you told me this once, feeling is valid and you are not guilty for feeling a certain way and trying to talk it out
            </p>

            <p>
Sometimes people just don't have the same way of seeing things as you. That doesn't mean you r wrong.
            </p>

            <p>
You don't need everyone to understand every part of you. Some things are complicated, some feelings are difficult to explain, and sometimes even you don't fucking understand yourself. How is someone else supposed to understand everything immediately?

            <p>
And please don't change yourself just to become easier to understand.   
        </p>

            <p>
The right people won't always understand you immediately, but they will be curious. They will ask questions. They will listen. They will try.
            </p>
            
            <p>
And if someone doesn't understand you, that doesn't automatically mean they don't care about you either. Sometimes two people can love each other and still see the same thing completely differently.
            </p>
            <p>
So if u are feeling misunderstood right now, don't start questioning everything about yourself because of it
            </p>
            <p>
You know yourself better than anyone else.
            </p>
            <p>
Most of times some feelings come from the way you are, deep down, and to understand, you should explain a lore from the past super long, which depending on the moment is not easy. You can always try to explain it to chatgpt or some shi like that, but I’d like to understand :(
            </p>
            <p>
Just don’t think something is wrong with you
            </p>
            <p>
Just be you.
            </p>
            <p>
I love you so much, and im so proud of you my warrior
            </p>
            <p>
                I love you Kiara ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-28": {

        id: "letter-28",

        number: "28",

        title:
            "Open me when you start university",

        eyebrow:
            "A letter waiting for the right moment",

        type:
            "time-locked",

        unlockDate:
            "2027-09-02",

        image:
            "assets/images/L28.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Hii Kiara,

            </p>

            <p>
YOU ARE STARTING UNIVERSITYYYYY!!!!!!!!!

            </p>

            <p>
Okay, first of all, I have no fucking idea where u are right now.
            </p>

            <p>
Maybe u are in the US, doing vet school or whatever the fuck you decided to study. Maybe you came back to Spain and you are studying here. Maybe you are somewhere completely different, because knowing you, you could randomly decide to move to another country.
            </p>

            <p>
I genuinely don't know.
            </p>

            <p>
And that's kinda crazy because right now, while I'm writing this, I can still imagine what I think you are gonna do. But u r reading this from the future, so you already know the answer.            </p>

            <p>
So let me make some predictions

            <p>
I think you r probably nervous. Maybe you are excited as fuck, maybe you are terrified, maybe both at the same time. You probably spent weeks thinking about what your new life was gonna be like, who your friends were gonna be, where you were gonna live, what your classes were gonna be like...
            </p>

            <p>
And now you are actually there.
            </p>
            
            <p>
Maybe you already have your little group of friends. Maybe you have found your favourite place to eat. Maybe there's already that one professor you absolutely fucking hate. Maybe you are completely lost in the first weeks. The important is that you are doing what you always wanted, save animals. SOCUTE
            </p>
            <p>
University is not just about what you study. You are gonna meet people who might completely change your life. Some will stay for years, some for a few months, and some you will never talk to again. You will probably discover new things about yourself, change your mind about some things, and maybe even realize that the life you imagined at 17 isn't the life you actually want
            </p>
            <p>
And that's okay.
            </p>
            <p>
I hope you don't put too much pressure on yourself to make these years perfect. You r gonna fuck up sometimes. You r gonna have exams that make you want to throw yourself out of a window, you are gonna have days where you don't wanna do anything, and you are probably gonna question if u are doing the right thing
            </p>
            <p>
And I'm actually really curious about something.
            </p>
            <p>
I'm curious about what you did Kiara, today we kinda argued about it so I don’t wanna think that you are going to do x or y.
            </p>
            <p>
Did you stay in the US? Did you come back to Spain? Did you move somewhere completely random? Are you studying veterinarian right? Are you with dafnny?
            </p>
            <p>
I have absolutely no idea. And ngl, I love that.

            </p>
            Because that's what makes the future so fucking cool. Right now I can imagine a hundred different versions of your life, and you are already living one of them.

            <p>
            </p>
            I don’t know if we still talk sometimes, but I wish we do, to know what u did in the end. But I want to choose to believe, and your objectives can change with the time, but for now if you think you are coming back to Spain, I know you are coming back to Spain for college.

            <p>
So congratulations bebe. You made it to another chapter.
            </p>
            <p>
Go make some memories. Meet people. Get lost. Fuck up. Learn. Laugh a lot. Cry. And please don't forget to actually enjoy because these might be the funniest years in ur lifeeeeee.
            </p>
            <p>
U have all the time in da world Kiara
            </p>
            <p>
I love you beautiful ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-29": {

        id: "letter-29",

        number: "29",

        title:
            "Open me when you feel like you have changed",

       eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L29.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Helouii Kiara

            </p>

            <p>
So you feel like u have changed

            </p>

            <p>
Maybe you have.
            </p>

            <p>
Maybe u are not the same person who left Spain. Maybe you are not the same person who went to pius, maybe you are not the same person who used to be my bebe.
            </p>

            <p>
And honestly, I hope you r not.
            </p>

            <p>
I think we sometimes think we have to protect the person we used to be, like changing means losing something. But you are supposed to change. You are supposed to discover things about yourself, change your opinions, make mistakes, meet people who change the way you think, and realize that some things you wanted years ago aren't what you want anymore.
            </p>

            <p>
Maybe some things about you changed that you don't like. Maybe some things changed that you love. I think you are more confident, more sassy, you learnt to say no. More mature, you respect yourself finally? Maybe you are still in progress, but that's amazing.

            <p>
Don't look at the old you and think she was stupid for not knowing what you know now. She didn't know. She was just doing the best she could with what she had at the time.            </p>

            <p>
I think that's one of the coolest things about being alive. You get to become someone new without completely losing who you were before. It’s one of the things I most like
            </p>
            
            <p>
The little girl you were is still somewhere inside you. The teenager who left the United States and Spain is still part of you. Every version of you that existed before is still there, hidden in your memories, your habits, the things you love, the way you think.
            </p>
            <p>
So if you feel like you have changed, don't panic. Look at yourself and ask:
            </p>
            <p>
Do I like who I'm becoming?
            </p>
            <p>
And if the answer is yes, keep goin and be super proud of urself bebe.
            </p>
            <p>
And if the answer is no, that's okay too. You can change it.
            </p>
            <p>
You are not a finished person. You are still crafting your adult personality.

            </p>
            <p>
Take it easy bebe. I hope you know to say no and now u are a KILLEEER
            </p>
            <p>
I love you Kiara ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-30": {

        id: "letter-30",

        number: "30",

        title:
            "Open me when you wonder what you taught me",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L30.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Holi Kiara,

            </p>

            <p>
So you wanna know what you taught me huh??? Curious little rat, so cute.

            </p>

            <p>
I’m joking, beautiful. I don’t know where to start. You taught me so many things, and you helped me improving sosososo much, even without being here now. Not just you, the situation of our relationship in general, something we can learn so much from.
            </p>

            <p>
You taught me I can open up, although I don’t do it so fully, it’s not because of you. But I feel I can open up.
            </p>

            <p>
You taught me what love is, what is to be loved, to love somebody with all you have.
            </p>

            <p>
You taught me that I have so many things to improve.
            </p>

            <p>
You taught me that there’s good people in the world, so worth, so beautiful soul.

            <p>
You taught me that love isn’t just romantic moments, it’s stupid things too like if we were broskis.
            </p>

            <p>
I wasn’t perfect with you. I know that. There are things I would do differently now, things I should have said, things I should have understood earlier. But that’s part of what you taught me too. 
            </p>
            
            <p>
You taught me to appreciate good things.
            </p>
            <p>
I remember a big discussion we had, the day we were going to the movies. Over something not relevant. We broke up cuz of that. And it’s crazy how a few months later, I can think about it and not understand how I could be so retarded. Like if it happened now it would end really quick. Because you realize how good is what you have when you lose it, and I would never lose you because a stupid discussion. I feel like I improved and I wish I had you to give you my improved version. Maybe if you come back you will have it, I hope so.
            </p>
            <p>
I want you to keep teaching me things, I want to improve and grow next to you, I want to love you, I want to be with you.
            </p>
            <p>
You know how I am, and this learning things and improving myself is my reason to live, and having someone that taught me so many good things, and not just taught, it’s not like if I read a book and I just learn things, it was sweet, it was beautiful, if heaven exists it can’t be far from this experience.
            </p>
            <p>
You taught me a lot more than you probably realize. And I hate I just can say thank you, because it’s not enough
            </p>
            <p>
You taught me how beautiful life can be Kiara, thank you.
            </p>
            <p>
I love you so much bebe ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-31": {

        id: "letter-31",

        number: "31",

        title:
            "Open me when you wonder what would have happened if you had never left",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L31.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Hello Kiara,

            </p>

            <p>
So you want to know what would have happened if you never left?

            </p>

            <p>
I guess we will never know
            </p>

            <p>
Maybe it would have worked, maybe it wouldn't. Maybe we would have ended up as friends, maybe we would have ended up hating each other. Who knows?
            </p>

            <p>
I've been thinking about when you told me that your mom said you could come back to Spain and do batxi here
            </p>

            <p>
Because honestly, I really wanted you to be here with me. You could have learned Catalan, gone to college here, and we would have had so much more time together. But at the same time, I didn't want you to come back just for me, because I love you more than romantically. The first thing I want is for you to be happy, even if that happiness isn't with me.
            </p>

            <p>
So I think you did the right thing staying in the US. We both know how happy you are there. And even though you are homesick rn, you will get used to it. You are gonna have so much fun, and maybe you'll end up wanting to stay there and do college there. But we don't know.

            <p>
That's the objective part, and what I genuinely want for you
            </p>

            <p>
But something hurt. Definitely not your fault. It was the fact that you chose to stay there because you knew you could be happier there than you could be with me
            </p>
            
            <p>
And right now I'm kinda lost about how I feel about that. I think that made my romantic feelings for you die way faster than I thought they would. But I still love you. And I'm sosososoooo happy u re there, because I know u are gonna have so much fun.
            </p>
            <p>
It's so weird ngl. It's like I'm kinda sad that I don't love you the same way anymore, but at the same time I genuinely feel happy, and I'm even excited knowing u are gonna have such a good time there brooooooofsdjkfjfasl.
            </p>
            <p>
Maybe it’s fine, and we are supposed to be far friends. The kind that talk once every few months, but still trust each other, and every time they talk it feels comforting, genuine and beautiful.
            </p>
            <p>
We wiill see :)
            </p>
         
            <p>
I love you so much Kiara ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-32": {

        id: "letter-32",

        number: "32",

        title:
            "Open me when you wonder if I remember",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L32.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Hiiii bebebeee,

            </p>

            <p>
So you are wondering if I still remember u? Seriously???

            </p>

            <p>
The question offends. How would I forget bruh
            </p>

            <p>
I remember the stupid little things you probably don't even remember doing
            </p>

            <p>
I remember your noise, like the prrrrrrrrr, I don’t know how to text it hjeejs, but I think you know which noise I mean, the one I tried to repeat sometimes.
            </p>

            <p>
I remember the metallic flavor of the water when I started going to your house, with the taste of chicken yatekomo, the smell in your house.
            </p>

            <p>
I remember the vibe when we went doing slime, nice fail btw, I remember it so so nostalgic, it’s like if I think about it I can be there.

            <p>
I remember the little dead bird that you moved from the path in collbaix.
            </p>

            <p>
I remember your excited expressions when you were going to eat cinnamon roll.
            </p>
            
            <p>
I remember how nervous I was on our first date.
            </p>
            <p>
I remember all the movies we watched together.
            </p>
            <p>
I remember the first day we got high together.
            </p>
            <p>
I remember how my heart stopped when you asked me if I was going to wow the 26th, it was a friday, 18:18pm, I was working, I remember it like it was yesterday.
            </p>
            <p>
I remember so many things.
            </p>
            <p>
And fuck you don’t undersant how much I miss it, I miss doing the walk from my house to yours, I miss your house, I miss you, I miss your smile, I miss your jokes, I miss cuddling with you, I miss our 24ths, I miss our champagnes, I miss you so much Kiara. You don’t understand. Maybe I don’t show it enough because I feel I'm being so dramatic and I hate it. But I miss you so much bro, I’d give everything to have more time with you.            </p>
            <p>
When I think about all those things, and I remember specific situations, I smile, I’m happy and grateful for having all those memories next to you. But also I feel something pressing my chest, a big sadness that I will never live those moments again, and I might never be able to build new moments next to you. And it destroys me. You made me genuinely happy Kiara, being next to you is all I needed, I need, and I will need. 

            </p>
            <p>
After this little crybaby stuff. I hope it’s pretty clear that I didn’t forget you, I think about you all the fucking time, trust me. I’m writing this letter one of the last, so you probably think I don’t love you anymore or I’m moving on. 

            </p>
            <p>
I am not.
            </p>
            <p>
I miss you like the first day. I cuddle with jacky all the nights, although he lost your smell. I woke up and the first thing I see is your paint, and it’s followed by the thought of you, how happy you made me.
            </p>
            <p>
I will never forget you, not because of the relationship, because it was the happiest 7 months in my life, and I will never forget
            </p>
            <p>
You probably don't remember everything. And it’s fine, you probably have other memories.
            </p>
            <p>
I remember enough for both of us.
            </p>
            <p>
I love you A&Ft’S my bebe ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-33": {

        id: "letter-33",

        number: "33",

        title:
            "Open me when is your birthday",

         eyebrow:
            "A letter waiting for the right moment",

        type:
            "time-locked",

        unlockDate:
            "2027-01-04",

        image:
            "assets/images/L33.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
HAPPY BIRTHDAYYYYY KIARAAAA

            </p>

            <p>
YOU ARE FUCKING OLD NOW BROOOOO 

            </p>

            <p>
Another year, another birthday, another year of being the most beautiful girl in the universe. holy moly pepsicoli
            </p>

            <p>
I hope u are having an amazing day. I hope u are surrounded by people who love you, eating something really good, laughing a lot and doing something that makes you genuinely happy.
            </p>

            <p>
I wish I could be there to annoy you in person, give you a big fucking hug and probably make some stupid birthday joke that you pretend is funny but a funeral might be way funnier.
            </p>

            <p>
I don't know where u r gonna be when you open this. Maybe u are in the US, maybe Spain, maybe somewhere completely random. Maybe u are reading this alone at night, maybe u are surrounded by everyone you love. I have no fucking idea.
            </p>

            <p>
But wherever you are, I hope you stop for a second today and realize how much has happened since your last birthday. You are growing, changing, meeting people, doing new things, you should be super proud of yourself.

            <p>
Today is YOUR day
            </p>

            <p>
Eat cake. Get presents. Take stupid pictures. Laugh too much. Do whatever the fuck you want
            </p>
            
            <p>
And maybe think about the fact that somewhere in the world, there is a stupid spanish dude who is throwing backflips and is so happy that you were born.
            </p>
            <p>
You are 18, u can get bunch of hoes now ejjeje
            </p>
            <p>
Happy birthday my STRAWBERRY CUPCAKEEEE.
            </p>
            <p>
I love you so friking much ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-34": {

        id: "letter-34",

        number: "34",

        title:
            "Open me when it's our anniversary",

         eyebrow:
            "A letter waiting for the right moment",

        type:
            "time-locked",

        unlockDate:
            "2027-04-10",

        image:
            "assets/images/L34.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Holaaa cutie potato,

            </p>

            <p>
HAPPY ANNIVERSARY

            </p>

            <p>
I don't even know what this day means to you anymore, or what we are doing right now, but somehow this date came back again
            </p>

            <p>
It's kinda crazy. At some point this was just another day. Then it became our day. And now u are reading this, wherever you are, probably living a completely different version of your life.
            </p>

            <p>
I wonder if you remembered before opening this. I wonder if you saw the date and thought about us for a second. I hope you did
            </p>

            <p>
Not because I want you to be sad, or because I want you to miss me. I just hope that somewhere in your head there's still a little corner where this date means something.
            </p>

            <p>
Because it means something to me. I don't want to make this a sad letter. Actually, I want you to smile

            <p>
I want to remember that solsona, how we painted, and I have the video. You were so happy, or at least you looked, I was kinda nervous ngl. Those 2 days were so goood. I remember when we smoked the joint, and after I asked you, u went quickly to ur little game, and changed the name from boyfriend to jaume, and you started acting psycho ahahdjfasjsd, it was so funny. I can’t stop smiling when I remember how happy we were.
            </p>

            <p>
We probably didn't realize how special it was while we were living it. That's something I learned way too late. You never really know you are living a memory while you are inside it.
            </p>
            
            <p>
And now I have so many of them. So wherever we are now, whatever happened between then and now, thank you for making that date ours.
            </p>
            <p>
If we are still in each other's lives, I'm glad.
            </p>
            <p>
If we r not, I hope you are so happy
            </p>
            <p>
Happy anniversary Kiara.
            </p>
            <p>
I love you infinitely ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-35": {

        id: "letter-35",

        number: "35",

        title:
            "Open me when you realize you are happy",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L35.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Hiii bebee,

            </p>

            <p>
So U ARE happy. Like GENUINELY happy.

            </p>

            <p>
I don't know where you are, who you are with, what happened today or what your life looks like right now, but if you r reading this because you suddenly realized that right now, in this instant, you are genuinely happy, I want you to stop for a second.
            </p>

            <p>
Don't fucking rush past it
            </p>

            <p>
I think we spend so much time worrying about becoming happy that when it actually happens, we don't even notice. We are always waiting for the next thing. When I finish this, when I get there, when I meet this person, when I have this job, when everything is finally perfect, and that day never arrives, you are probably so happy now, and something will ruin it soon, it doesn't mean you will not be happy anymore, you can be happy with your life but have a sad day, or get mad. To be happy with your life u just have to be healthy, have things that truly fullfill u and make living worth, and enjoy the present, and laugh, laugh so much. 
            </p>

            <p>
It’s funny how at some point u can think life is bad, or not worth to be lived, and a few weeks later, maybe months, maybe completely different point in your life, one random day you r walking somewhere, laughing with someone, listening to music, eating something stupid, or doing absolutely nothing, and you realize that you don't actually want anything else in that moment.
            </p>

            <p>
You are just happy. And I hope you appreciate that, because I love you, and you being happy makes me genuinely happy.
            <p>
Think about everything you were worried about a few years ago. Things you thought would destroy you. Things you thought you would never get over. Things you thought you needed so badly.            </p>

            <p>
Look at you now. You made it through all of that.
            </p>
            
            <p>
And probably your life isn't perfect. It’s what I said before, there are still things you want, things u r scared about, things that hurt sometimes. But happiness doesn't mean that everything is perfect. It just means that for a moment, life feels good enough.
            </p>
            <p>
So don't ruin it by wondering how long it's gonna last. Don't start thinking "what if this disappears?".
            </p>
            <p>
Laugh. Smile. Hug whoever you r with, show your love. Look around you. Take a picture if you want, or don't. Just remember how this feels.
            </p>
            <p>
And if you ever have another horrible day in the future, remember that this version of you existed too.
            </p>
            <p>
You were happy. You will be happy again. And I'm really, really happy that you got to this point.
            </p>
            <p>
Enjoy it bebe.
            </p>
            <p>
You deserve it Kiara
            </p>
            <p>
I love you so much YOU DON'T UNDERSTAND ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-36": {

        id: "letter-36",

        number: "36",

        title:
            "Open me when you need to forgive yourself",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L36.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Helou Kiara,

            </p>

            <p>
I don't know what you did. Maybe you fucked something up, maybe you hurt someone, maybe you made a decision you regret, maybe you weren't the person you wanted to be in a certain situation.

            </p>

            <p>
Whatever it is, I know how easy it is to keep replaying it in your head. Thinking about what you should have said, what you should have done, how things could have been different if you had just done one thing differently.
            </p>

            <p>
But you can't go back. And I know that's probably the worst part.
            </p>

            <p>
You can regret something without hating yourself for it. You can admit that you fucked up without deciding that you are a bad person. Those two things aren't the same.
            </p>

            <p>
You were making decisions with the knowledge, emotions and experience you had at that moment. You know more now because you lived through it. Of course you would do some things differently today.
            </p>

            <p>
That's literally what growing up is and is really really good

            <p>
So if you hurt someone, apologize if you can. If you need to fix something, fix it. If you learned something, remember it
            </p>

            <p>
But don't spend the rest of your life punishing yourself for something that already happened.
            </p>
            
            <p>
You deserve to move forward too.
            </p>
            <p>
And maybe forgiving yourself doesn't mean saying "what I did was okay." Maybe it just means saying "I know I fucked up, I wish I hadn't, but I'm not going to let that mistake decide who I am forever." I always say that you have to be so sad about and regret it so much that it changes you, and you learn and it won’t happen again. But don’t be mean to yourself pls, you are not a bad person, maybe you acted like it or maybe you didn’t, idk, but what I know is that you are not a bad person Kiara.
            </p>
            <p>
You are allowed to grow past your mistakes   
         </p>
            <p>
Forgive urself bebe.
            </p>
            <p>
You still have so much life left to live.
            </p>
            <p>
I love you so much, my sweet person ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-37": {

        id: "letter-37",

        number: "37",

        title:
            "Open me you want to know how I see you",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L37.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Heloui my strawberry cupcake.
            </p>

            <p>
You already know how wonderful I think you are. I will try not to make this letter about compliments, but it’s going to be so complicated. You probably see yourself different from how I see you, and since you said that ‘you don’t know yourself, and you base who you are in how people think you are’ here you have an accurate one, if you are not a psycho jeje.

            </p>

            <p>
The start was smooth, I felt it was pretty normal, kinda shy, but with lot of things that made me curious and wanted to know you better. Like the bird you put away in collbaix, that showed you had a good heart, how excited you were to see the goats, that stuff made me like you so quick, because it shows a warm and loving heart.
            </p>

            <p>
When I get to know you better I realized you were so smart, specially when we did those first debates about trans people, and morals. That made me fall so much, seeing how smart you were and how good you were at debating made me freak out.             </p>

            <p>
At this point I already knew you were funny as fuck, so I was like not beliving it. A smart girl, funny, with a warm soul, super cute, physically I already told u that u are like my top 1 prototype like you are perfect, but that letter is not about that.
            </p>

            <p>
I love you sense of humor, I already told you this but those moments where you become in the mood of ‘mean’ like not mean bad, but like with humour, that was sososo funny.            </p>

            <p>
I really like your good heart, but here it comes something bad, that might be a consequence. How you don’t know saying no, how you are scared of make the other people uncomfortable because you empathize with them. And in some way you disrespect yourself then, while you let the other people cross the line with you.

            <p>
This comes from insecurity, and from feeling not enough, which is sad, because for me you are literally perfect. And I tried to always told you how amazing you are to help, but the line between security and ego boost is thin. I know you will be able to work on it in US, and I really hope you gain that security you deserve. Because you are worth it, you are smart, you are funny, you are cool, you are so beautiful, you are hot af. Like how can you be insecure.
            </p>

            <p>
That’s why I say I will never be able to hate you, I guess everyone has their own thing, and everyone has their own reasons to be how they are. But with you, I feel like you are so good, so warm, so big hearted, and the problems you have and had, most comes from that, because you have a big heart.             </p>
            
            <p>
So how can I hate you, you have been through hell, and still you are the most lovely person I know, which shows how worth, how strong, how full of life you are. And it’s so beautiful, so rhetoric and so beautiful.
            </p>
            <p>
You still have so much work to do, so much things to improve, you know it, we both do. But who doesn’t have things to improve? Nobody, so don’t blame yourself for not being perfect, nobody is. Keep working on improving. Be more sassy, learn to say no, don’t give a fuck about what people say, LOVE YOURSELF BEBE, U ARE WORTH            </p>
            <p>
One of the things I love most about you is how you are when you are excited, I think I told you this 200 times, for example when you were excited to eat the cinnamon roll, you did a little expression, and the first thought I had was, I am so happy. I was so happy of being able to enjoy your company, enjoy such a beautiful person, passionate, you feel x5, and it can be bad, but it’s really good too, you can be sadder, but you are happier too, and more excited too. How excited you got when we were watching mha, so you kept doing little spoilers because you couldn’t hold the excitement. I’m smiling like a dumbass, I don’t know how I could get mad at you for that, you are so cute and so beautiful.
            </p>
            <p>
You don’t deserve the bad things you have been through, it makes me sad. If you think about all my ideas, you will see that I hate so much injustice, why somebody like you, has to be through all that shit. It makes me so mad no joke, and I’m so sorry Kiara, you really don’t deserve any of that.
            </p>
            <p>
I think I could keep writing about you forever, but I think you already get the idea.
            </p>
            <p>
I don't see you as perfect. I see the good things, the bad things, the insecurities, the stupid decisions, the things you still have to improve, the things that make you difficult sometimes. I see all of it. And somehow, when I put everything together, I still see someone incredibly special.
            </p>
            <p>
I don't know how you see yourself right now, and I don't know how much of this you'll believe. Maybe you will read this and think I was completely fucking delusional. Maybe some things about you will have changed so much that you won't even recognize yourself in this letter
            </p>
            <p>
But this is how I see u
            </p>
            <p>
And I loved and will love all of those versions of you
            </p>
            <p>
So if one day you forget who you are, or you start believing all the bad things your brain tells you, come back to this letter. Not because everything I said is objectively true, but because I really thing you are wonderful, with all the bad and the good. Wonderful
            </p>
            <p>
I hope one day you can see yourself a little bit more like I saw you.
            </p>
            <p>
U are the real art mamasita
            </p>
            <p>
I love you so infinitely Kiara ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-38": {

        id: "letter-38",

        number: "38",

        title:
            "Open me you have been away for one year",

        eyebrow:
            "For my Strawberry Cupcake",

         eyebrow:
            "A letter waiting for the right moment",

        type:
            "time-locked",

        unlockDate:
            "2027-07-08",


        image:
            "assets/images/L38.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Holaa Kiara,
            </p>

            <p>
ONE FUCKIN YEAR

            </p>

            <p>
I genuinely don't know how the fuck that happened. One year ago you left Spain. One year ago everything was still so fresh. I remember thinking about how long a year sounded. It felt like an insane amount of time.
            </p>

            <p>
And now you are here. I wonder what happened during this year.

            <p>
How many people did you meet? How many places did you discover? How many times did you cry? How many times did you laugh until your stomach hurt? How many things happened that you would have never imagined when you left?
            </p>

            <p>
I wonder if you still miss Spain.

            <p>
Maybe you do. Maybe you don't. Maybe you miss certain people, certain places, certain food, certain stupid little things, but you also built something there that you don't want to leave anymore.

            <p>
And that's okay. I have no clue what you did in the end, at this point if you are coming back, you will do it soon. If you decided to stay there, or go another place, it makes me kinda sad knowing that I will never get to be with you again, but it’s fine. I just want you to be the happiest girl in the world, so at least, try to be plis.
            </p>

            <p>
Bueno let’s not be sad, a year is fucking long. You shouldn't spend it thinking about what your life used to be. You should have new memories, new people, new stories, new inside jokes, new places that feel like home.
            
            <p>
And if you look back at the girl who left Spain one year ago and she feels like a different person, that's normal, I know it will. You probably changed more than you realize. Maybe u r stronger. Maybe more confident. Maybe you learnt to put limits to people and say no. Maybe you have completely changed your mind about what you want to do with your life.
            </p>
            <p>
I hope you are proud of yourself. I am proud of you Kiara, of all you accomplished, of who you became
            <p>
And I want you to remember something. You don't have to choose between loving where you came from and loving where you are now
            </p>
            <p>
Spain can still be home
            </p>
            <p>
The US can still be home.
            </p>
            <p>
Maybe another place will become home too. You can have more than one.
            </p>
            <p>
And what about us? I don't know
            </p>
            <p>
Maybe we are still talking all the time. Maybe we are friends. Maybe we haven't spoken in months. Maybe we r completely strangers now. Whatever it is, I hope there's no anger from your part.
            </p>
            <p>
I hope when you think about me, you smile at least a little. And I hope when I think about this year, wherever I am, I can smile too.
            </p>
            <p>
So if one day you forget who you are, or you start believing all the bad things your brain tells you, come back to this letter. Not because everything I said is objectively true, but because I really thing you are wonderful, with all the bad and the good. Wonderful
            </p>
            <p>
I hope one day you can see yourself a little bit more like I saw you.
            </p>
            <p>
One year, Kiara. You fucking did it. Now go see what the next one brings you.
            </p>
            <p>
I love you bebe ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-39": {

        id: "letter-39",

        number: "39",

        title:
            "Open me you find this website years from now",

        eyebrow:
            "For my Strawberry Cupcake",

         eyebrow:
            "A letter waiting for the right moment",

        type:
            "time-locked",

        unlockDate:
            "2029-07-08",

        image:
            "assets/images/L39.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Hi Kiara
            </p>

            <p>
I don’t think you will never read this.

            </p>

            <p>
I don't know how many years have passed. Maybe two, maybe five, maybe fucking twenty. I don't know where you are, who you are with, what you do, what your life looks like, or if you even remember all the things that happened around the time I made this.
            </p>

            <p>
And honestly, that's kinda beautiful.

            <p>
Right now, while I'm writing this, I can still remember everything so clearly. I remember you leaving Spain. I remember how much it hurt. I remember making this website and thinking about what you might be doing when you eventually read each letter.
            </p>

            <p>
But if you are reading this now, I have absolutely no idea who you are anymore.

            <p>
Maybe you are studying. Maybe you are working. Maybe you are a veterinarian like you always wanted. Maybe you changed your mind completely. Maybe you are living in Spain again. Maybe you are still in the US. Maybe you are somewhere we never would have imagined.

            <p>
Maybe you have a boyfriend or a girlfriend. Maybe you are married. Maybe you are completely alone and loving it. Maybe you are travelling the world. Maybe you are doing absolutely nothing that I would have predicted.
            </p>

            <p>
And that's okay. I hope you are happy.
            
            <p>
That's probably the only thing I really want from the future version of you reading this. I hope you look at your life and think "yup, I'm happy here"

            </p>
            <p>
I hope you have met people who love you properly. I hope you have done stupid cringe things, travelled, laughed until your stomach hurt, cried, failed, tried again, and experienced a million things I don't know anything about.
            <p>
And I hope you don't look back at your younger self and feel ashamed of her. She was trying. She was figuring everything out.
            </p>
            <p>
She loved deeply, sometimes too deeply. She made mistakes. She was scared. She was excited. She had no fucking idea what was coming. But she was alive, and she was experiencing everything for the first time like all of us.

            </p>
            <p>
And I hope you remember me too.
            </p>
            <p>
Not necessarily romantically. Not necessarily with sadness. Just as someone who was there for one chapter of your life and loved you veryveryveyryyy very much.
            </p>
            <p>
Maybe by the time you read this, you barely remember what it felt like to be with me. Maybe you remember everything. Maybe you had forgotten this website existed completely.
            </p>
            <p>
Whatever the case, I'm glad you found it. Because this little website is basically a time capsule of who I was when I loved you.       
         </p>
            <p>
I know this might be the most cringe shi I ever did, the most beautiful too. And reading this when we are older it’s going to be between cringe and nostalgic, but whatever.
            </p>
            <p>
And if u are reading this with someone next to you, show them. Tell them about the delulu spanish dude who made 42 fucking cringe letters for you xdd.
            </p>
            <p>
Maybe we are together, maybe life crossed our paths again, if that’s the case I know we will make fun of this shit. If we are not together, it’s never late to text me asking to go to collbaix jejeje.
            </p>
            <p>
And if you u r alone, that's okay too. Just smile for a second. You made it this far. I hope life has been kind to you.

            </p>
            <p>
And if it hasn't, I hope you became strong enough to be kind to urself.
            </p>
            <p>
I love you, wherever you are Kiara ♡
            </p>
            <p>
                J
            </p>

        `

    },
    "letter-40": {

    id: "letter-40",

    number: "40",

    title:
        "Open me when you want to remember us",

    eyebrow:
        "A little collection of our memories",

    type:
        "gallery",

    images: [

        "assets/images/gallery/002.webp",
        
        "assets/images/gallery/001.webp",
        
        "assets/images/gallery/1.webp",
        
        "assets/images/gallery/2.webp",
        
        "assets/images/gallery/3.webp",

        "assets/images/gallery/4.webp",

        "assets/images/gallery/5.webp",

        "assets/images/gallery/6.webp",

        "assets/images/gallery/7.webp",

        "assets/images/gallery/77.webp",

        "assets/images/gallery/8.webp",

        "assets/images/gallery/9.webp",
       
        "assets/images/gallery/10.webp",
       
        "assets/images/gallery/11.webp",
       
        "assets/images/gallery/12.webp",
       
        "assets/images/gallery/13.webp",
       
        "assets/images/gallery/14.webp",
       
        "assets/images/gallery/15.webp",
       
        "assets/images/gallery/155.webp",
        
        "assets/images/gallery/16.webp",
        
        "assets/images/gallery/17.webp",
        
        "assets/images/gallery/18.webp",
        
        "assets/images/gallery/19.webp",
        
        "assets/images/gallery/20.webp",
        
        "assets/images/gallery/21.webp",
        
        "assets/images/gallery/22.webp",
       
        "assets/images/gallery/23.webp",

    ],

    audio:
        null,

    music:
        null

},
    "letter-41": {

        id: "letter-41",

        number: "41",

        title:
            "Open me when you want to blow my ear",

        eyebrow:
            "For my Strawberry Cupcake",

        type:
            "normal",

        image:
            "assets/images/L41.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Hi beautiful,
            </p>

            <p>
Soo u want to blow my hear huh???
            </p>

            <p>
JAJSJDASSJDAHAJASHFAS

            <p>
It was so funny, it’s a memory that I have that makes me laugh every time I think about it.

            <p>
I remember that most of times you were being super sweet saying things to my ear, and then it came. The super turbo extrem blow with lil spit right to my ear fdkfjkasflsja.
            </p>
            <p>
                It was so funny not gonna lie.

            </p>
            <p>
                Since the letters here are pretty more intense I wanted to write a funny memory.

            </p>
            <p>
                I wish i could feel u blowing my ear another time. I keep laughing alone. I look pretty retarded right now.

            </p>
            <p>
                You are so funny bebe

            </p>
            <p>
                I love you so much Kiara ♡

            </p>
            <p>
                J
            </p>

        `

    },
    "letter-42": {

        id: "letter-42",

        number: "42",

        title:
            "Open me when you need to remember that someone once loved you deeply",

          eyebrow:
            "A letter waiting for the right moment",

        type:
            "time-locked",

        unlockDate:
            "2026-12-01",

        image:
            "assets/images/L39.jpg",

        audio:
            null,

        music:
            null,

        content: `

            <p>
Hello Kiara,
            </p>

            <p>
I lied, this is the first letter I'm writing. This is going to be long and dense, so make sure you have time and you are in a quiet place.

            </p>

            <p>
This letter is going to be about how I feel, it’s messy. It’s not about remembering I was a good bf, it’s about writing down the mess in my head. It has a lot of grammatical mistakes and some of them can lead to misunderstandings, but it’s not meant to be read so I don't mind.
            </p>

            <p>
I don't know where to start. Today it has been 16 days since you left ( 08/07/2026). We were on facetime a few ago, and you said ‘I can’t believe it has already been 2 weeks, it feels like 3 days’

            <p>
I was really happy of seeing you happy, but something hurt inside of me. Maybe fear of getting forgotten or over? I still love you, so much. I don’t know how long I will be feeling like this, but I don’t feel it will get better soon.            </p>

            <p>
For me you were something incredible, before meeting you, I used to talk with chatGPT every night because I’ve felt lonely, and I wanted to talked so many things with somebody that I didn’t have. In fact I did, but I was so scared to open up to my friends or family.

            <p>
I met you, started talking with you, so excited to finally be able to open up to someone. But it wasn’t easy, and I'm so sorry. This is why im doing this whole 42 pathetic letters. Because I regret so much not opening up with you fully. There’s so much things I’ve never told you that would have made our time infinitely better.

            <p>
I feel like that’s the purpose of love, opening up to the point that two souls become one. I know its needed much more than 7 months, but I think we had a really good connection
            </p>

            <p>
Now it has been at least three years since our paths crossed. I know you’ll never open this letter, to be honest, it’s not meant to be read, it’s just a letter I want to write, for myself.
            
            <p>
You’re probably incredibly busy studying to become a veterinarian. You’ve probably fallen in love again, it gives me chills just to think about it. But then I think of your beautiful smile and of you being happy, and the sadness fades away.
            </p>
            <p>
I know I love you, because I can’t stop thinking about you, and i get sad when you tell me that you are having so much fun there, i think about you being happy and i get so happy. But inside theres still some sadness. Not because I don’t want you to be happy, trust me that i would give my life for you to be happy. It’s because im scared of you getting over me quickly, which would mean that you were not as much in love with me as I was with you. That has been my biggest fear since the start, because I truly wanted to make you the most happy girl in the world, and knowing that I missed, makes me sad.
            <p>
I know there’s something wrong with me, i watch tiktok and I scroll into a womans video, a influencer, and i feel a disgusting weight in my chest, because I see so many likes, so many comments, of people that probably loved before, but they still find her super attractive. But I see her, I imagine myself with her for a second and I swear I feel that void in my chest, and when I think about you i feel good again, I love you so much, I can’t help it.
            </p>
            <p>
I don’t want to make this letter saying how amazing you are, how smart you are and this stuff cuz you already have a letter of how i see you. But it’s complicated.
            </p>
            <p>
I feel bad, I feel like something is missing, I think about forgetting you, about time passing, about you forgetting me. About start again and again and again, and again.That’s not what I want, I just want to be with you, forever, travel, laugh, go to expensive restaurants. And it makes me so sad knowing that it will never happen. Because time will run, and I will forget about you, and you about me. And you will find the love of your life, a person that makes you infinitely more happier than me, and i swear it destroys me. Because I don’t want any other smile. I just want to be with you, and I know at some point I will not feel like this anymore, because I will love another woman, maybe even more than this. But now, I can’t imagine any other woman next to me, not anytime soon.
            </p>
            <p>
It can’t be, I wish our paths cross again, maybe you are reading this and you decide to text me, maybe in 5 years we cross randomly again and we don’t recognize each other. We never know. This is the worst feeling ever, losing something this good, and knowing I will never experience it again.
            </p>
            <p>
I think i have good memory with moments, because i use to tell me, remember this because this is being happy. And I think about us, and the breath goes away. I can smell the slime first time I came to your house, I can still can smell the chicken yatekomo while watching a movie, I can taste the water with metallic flavor because that big cup. I can feel nervous, my heart going out my mouth while saying hello to you for the first time. And my english fading away when I was trying to translate ‘croissant’. I think about you and I don’t need anything else.
            </p>
            <p>
That’s one thing that throw me off a bit, and where my fear of not being loved was bornt. We were in the stairs. And I asked you if you would let everything behind for me. Leave to another country together, or some shit like that. And you said no, that ur friends were so important, and some stuff more. And it makes sense, I love my friends, I love my family. But I felt that with you, I didn’t need anything else. I just wanted to be with you, forever, in that stairs, forever. I just said yeah ofcourse, because I was scared, I knew you came out from a really dependent relationship that ended bad, so your brain associates it with something really bad. There was nothing i could do, I understood you, that was my first time loving, so maybe I was crazy and I sounded so intense or so immature. So I chose to die.
            </p>
            <p>
One day I will not be able to remember your voice anymore, your face, your laugh. That’s okay, memories fade. Maybe I won’t think about you at all. Because that’s what times does, we move on because life is so hard to be pinned with something from the past. But I want you to know that something of me will die here, I don’t want to meet anybody new, I’m not excited to find the loml if it’s not you, I know saying it now will sound stupid in few years. I will move on, like everyone does, but I wish I could stay here, with you, with your memories, with your smile, with your laugh, with you. I’d die to wake up one day more with you. Stupid things we don’t appreciate. I would slap the shi out of myself if I go back to one of those days when I would wake up giving you the back, and not cuddling you. 
            </p>
            <p>
I don’t know what else to say. I want to explain how big is the regret for not coming to your graduation. This is probably the thing that will take more time to fade away when I think about you, the regret. I wish I haven’t been that stupid, I think about it and I can’t help but cry. I really wanted to see you on one of the happiest days of the year, I really wanted to see your genuine smile from ear to ear. But in the moment I was so retarded, immature retarded guy who was pissed off. Im so sorry, I know sorry means nothing because everyone knows apologizing, but I truly do. I will regret it so much time.
            </p>
            <p>
I don’t want to boost your ego with this 42 letters or someshi, making you a worse person is not my objective. But I won’t say what you did wrong, I mentioned in the relationship, I haven’t opened up about it fully, but I don’t mind. I know you are so smart and you will know what you did wrong and in fact improve it.
            </p>
            <p>
If you see that my mood between paragraphs changes, it’s not that I'm bipolar, it's that I'm not writing it all the same day.
            </p>
            <p>
Although I will forget you, and not think about you everyday. I am so happy that you have been here, because love shapes you. You can forget, but that person shaped you for all your life, remember it or not. It’s like books, you don’t remember everything you read, but you are everything you read. And I am so happy you will be a part of me forever. 
            </p>
            <p>
I don’t wanna be delulu, I always try to be realistic, and I don’t like lying to myself. The chances of us getting again together, they are low af. But, I want to believe that if it’s meant to be it will be. It hurts, I just want you Kiara, you are everything I need.
            </p>
            <p>
I know you will never read this, if you do, I probably seem the immature yearning final boss, whatever. You are a part of me and you will always be, you were a refreshing water stop in the shadow in the middle of the fucking sahara. Although we forget about each other, we shaped each other, so we will be A&Ft’S
            </p>
            <p>
(From the future, I finished all the letters, everything, and i wrote this with the idea of never getting read, just to write down how i felt, i was going to lock it 3 years thats why i talk so to the future some paragraphs, but since i wrote everything already, and theres already one letter locked a couple years, i will put this one a few months. Its pretty cringe I know im sorry)
            </p>
            <p>
Be happy Marie ♡
            </p>
            <p>
                J
            </p>

        `

    },


};

/* =========================================================
   03. FAVORITES
========================================================= */

const FAVORITES_STORAGE_KEY =
    "42-reasons-favorites";


function getFavorites() {

    const saved =
        localStorage.getItem(
            FAVORITES_STORAGE_KEY
        );

    if (!saved) {
        return [];
    }

    try {

        const parsed =
            JSON.parse(saved);

        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        console.warn(
            "Could not load favorites:",
            error
        );

        return [];

    }

}


function saveFavorites(favorites) {

    localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(favorites)
    );

}


function toggleFavorite(letterId) {

    let favorites =
        getFavorites();

    if (
        favorites.includes(letterId)
    ) {

        favorites =
            favorites.filter(
                id => id !== letterId
            );

    } else {

        favorites.push(letterId);

    }

    saveFavorites(favorites);

    updateFavoriteButtons();

    renderFavorites();

}


/* =========================================================
   04. OPENED LETTERS
========================================================= */

const OPENED_STORAGE_KEY =
    "42-reasons-opened";


function getOpenedLetters() {

    const saved =
        localStorage.getItem(
            OPENED_STORAGE_KEY
        );

    if (!saved) {
        return [];
    }

    try {

        const parsed =
            JSON.parse(saved);

        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        console.warn(
            "Could not load opened letters:",
            error
        );

        return [];

    }

}


function saveOpenedLetters(openedLetters) {

    localStorage.setItem(
        OPENED_STORAGE_KEY,
        JSON.stringify(openedLetters)
    );

}


function isLetterOpened(letterId) {

    return getOpenedLetters().includes(
        letterId
    );

}


function markLetterAsOpened(letterId) {

    const opened =
        getOpenedLetters();

    if (
        !opened.includes(letterId)
    ) {

        opened.push(letterId);

        saveOpenedLetters(opened);

    }

    updateOpenedLetterCards();

}


/* =========================================================
   05. 20 HOUR COOLDOWN
========================================================= */

const LETTER_COOLDOWN_KEY =
    "42-reasons-last-letter-opened";


const LETTER_COOLDOWN_DURATION =
    20 *
    60 *
    60 *
    1000;


function getLastLetterOpenedTime() {

    const saved =
        localStorage.getItem(
            LETTER_COOLDOWN_KEY
        );

    if (!saved) {
        return null;
    }

    const timestamp =
        Number(saved);

    if (
        Number.isNaN(timestamp)
    ) {

        return null;

    }

    return timestamp;

}


function saveLastLetterOpenedTime() {

    localStorage.setItem(
        LETTER_COOLDOWN_KEY,
        String(Date.now())
    );

}


function canOpenLetter() {

    const lastOpened =
        getLastLetterOpenedTime();

    if (
        lastOpened === null
    ) {

        return true;

    }

    return (
        Date.now() -
        lastOpened
    ) >=
    LETTER_COOLDOWN_DURATION;

}


function getRemainingCooldown() {

    const lastOpened =
        getLastLetterOpenedTime();

    if (
        lastOpened === null
    ) {

        return 0;

    }

    return Math.max(
        0,
        LETTER_COOLDOWN_DURATION -
        (
            Date.now() -
            lastOpened
        )
    );

}


function formatCooldown(milliseconds) {

    const totalSeconds =
        Math.ceil(
            milliseconds / 1000
        );

    const hours =
        Math.floor(
            totalSeconds / 3600
        );

    const minutes =
        Math.floor(
            (
                totalSeconds % 3600
            ) / 60
        );

    const seconds =
        totalSeconds % 60;

    return (
        String(hours).padStart(2, "0") +
        ":" +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0")
    );

}


/* =========================================================
   06. COOLDOWN MODAL
========================================================= */

const cooldownModal =
    document.getElementById(
        "cooldown-modal"
    );

const cooldownModalClose =
    document.getElementById(
        "cooldown-modal-close"
    );

const cooldownModalOk =
    document.getElementById(
        "cooldown-modal-ok"
    );

const cooldownModalCountdown =
    document.getElementById(
        "cooldown-modal-countdown"
    );

let cooldownModalInterval =
    null;


function updateCooldownModal() {

    if (
        !cooldownModalCountdown
    ) {

        return;

    }

    cooldownModalCountdown.textContent =
        formatCooldown(
            getRemainingCooldown()
        );

}


function closeCooldownModal() {

    if (!cooldownModal) {
        return;
    }

    cooldownModal.classList.remove(
        "is-visible"
    );

    cooldownModal.setAttribute(
        "aria-hidden",
        "true"
    );

    clearInterval(
        cooldownModalInterval
    );

    cooldownModalInterval =
        null;

}


function showCooldownModal() {

    if (!cooldownModal) {

        alert(
            "You already opened a new letter recently. Give it some time before opening another one."
        );

        return;

    }

    updateCooldownModal();

    cooldownModal.classList.add(
        "is-visible"
    );

    cooldownModal.setAttribute(
        "aria-hidden",
        "false"
    );

    clearInterval(
        cooldownModalInterval
    );

    cooldownModalInterval =
        setInterval(
            () => {

                const remaining =
                    getRemainingCooldown();

                if (
                    remaining <= 0
                ) {

                    closeCooldownModal();

                    return;

                }

                updateCooldownModal();

            },
            1000
        );

}


if (cooldownModalClose) {

    cooldownModalClose.addEventListener(
        "click",
        closeCooldownModal
    );

}


if (cooldownModalOk) {

    cooldownModalOk.addEventListener(
        "click",
        closeCooldownModal
    );

}


if (cooldownModal) {

    cooldownModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                cooldownModal
            ) {

                closeCooldownModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            cooldownModal &&
            cooldownModal.classList.contains(
                "is-visible"
            )
        ) {

            closeCooldownModal();

        }

    }
);


/* =========================================================
   06B. IMAGE LIGHTBOX
   Click any letter photo to view it full size
========================================================= */

const imageLightbox =
    document.getElementById(
        "image-lightbox"
    );

const imageLightboxBackdrop =
    document.querySelector(
        "#image-lightbox .image-lightbox-backdrop"
    );

const imageLightboxImg =
    document.getElementById(
        "image-lightbox-img"
    );

const imageLightboxClose =
    document.getElementById(
        "image-lightbox-close"
    );


function openImageLightbox(
    src,
    alt
) {

    if (
        !imageLightbox ||
        !imageLightboxImg
    ) {

        return;

    }

    imageLightboxImg.src =
        src;

    imageLightboxImg.alt =
        alt || "";

    imageLightbox.classList.add(
        "is-visible"
    );

    imageLightbox.setAttribute(
        "aria-hidden",
        "false"
    );

}


function closeImageLightbox() {

    if (!imageLightbox) {

        return;

    }

    imageLightbox.classList.remove(
        "is-visible"
    );

    imageLightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    if (imageLightboxImg) {

        imageLightboxImg.src =
            "";

    }

}


/*
 * Open the lightbox whenever a gallery
 * photo inside a letter is clicked.
 */

document.addEventListener(
    "click",
    event => {

        const clickedImage =
            event.target.closest(
                ".gallery-image"
            );

        if (!clickedImage) {

            return;

        }

        openImageLightbox(
            clickedImage.src,
            clickedImage.alt
        );

    }
);


if (imageLightboxClose) {

    imageLightboxClose.addEventListener(
        "click",
        closeImageLightbox
    );

}


if (imageLightboxBackdrop) {

    imageLightboxBackdrop.addEventListener(
        "click",
        closeImageLightbox
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            imageLightbox &&
            imageLightbox.classList.contains(
                "is-visible"
            )
        ) {

            closeImageLightbox();

        }

    }
);


/* =========================================================
   07. OPENED CARD VISUALS
========================================================= */

function updateOpenedLetterCards() {

    const opened =
        getOpenedLetters();

    document
        .querySelectorAll(
            ".letter-card"
        )
        .forEach(
            card => {

                const id =
                    card.dataset.letterId;

                const isOpened =
                    opened.includes(id);

                card.classList.toggle(
                    "is-opened",
                    isOpened
                );

                const icon =
                    card.querySelector(
                        ".letter-icon"
                    );

                if (icon) {

                    icon.textContent =
                        isOpened
                            ? "♥"
                            : "♡";

                }

                const status =
                    card.querySelector(
                        ".letter-status"
                    );

                if (
                    status &&
                    isOpened
                ) {

                    status.textContent =
                        "Opened · Ready whenever you need me";

                }

                const openButton =
                    card.querySelector(
                        ".letter-open-button"
                    );

                if (
                    openButton &&
                    isOpened
                ) {

                    openButton.textContent =
                        "Open again";

                }

            }
        );

}


/* =========================================================
   08. FAVORITE BUTTON VISUALS
========================================================= */

function updateFavoriteButtons() {

    const favorites =
        getFavorites();

    document
        .querySelectorAll(
            ".letter-card"
        )
        .forEach(
            card => {

                const id =
                    card.dataset.letterId;

                const button =
                    card.querySelector(
                        ".letter-favorite"
                    );

                if (!button) {
                    return;
                }

                const isFavorite =
                    favorites.includes(id);

                button.classList.toggle(
                    "is-favorite",
                    isFavorite
                );

                button.setAttribute(
                    "aria-label",
                    isFavorite
                        ? "Remove letter from favorites"
                        : "Add letter to favorites"
                );

                const icon =
                    button.querySelector(
                        "span"
                    );

                if (icon) {

                    icon.textContent =
                        isFavorite
                            ? "♥"
                            : "♡";

                }

            }
        );

}


/* =========================================================
   09. CURRENT LETTER
========================================================= */

let currentLetterId =
    null;

let countdownInterval =
    null;


/* =========================================================
   10. TIME LOCK
========================================================= */

function isLetterUnlocked(letter) {

    if (
        letter.type !==
        "time-locked"
    ) {

        return true;

    }

    const unlockTime =
        new Date(
            letter.unlockDate +
            "T00:00:00"
        ).getTime();

    return Date.now() >= unlockTime;

}


function stopCountdown() {

    if (
        countdownInterval !== null
    ) {

        clearInterval(
            countdownInterval
        );

        countdownInterval =
            null;

    }

}


function startCountdown(letter) {

    stopCountdown();

    const unlockTime =
        new Date(
            letter.unlockDate +
            "T00:00:00"
        ).getTime();


    function updateCountdown() {

        const difference =
            unlockTime -
            Date.now();


        if (
            difference <= 0
        ) {

            stopCountdown();

            openLetter(
                letter.id
            );

            return;

        }


        const days =
            Math.floor(
                difference /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );


        const hours =
            Math.floor(
                (
                    difference %
                    (
                        1000 *
                        60 *
                        60 *
                        24
                    )
                ) /
                (
                    1000 *
                    60 *
                    60
                )
            );


        const minutes =
            Math.floor(
                (
                    difference %
                    (
                        1000 *
                        60 *
                        60
                    )
                ) /
                (
                    1000 *
                    60
                )
            );


        const seconds =
            Math.floor(
                (
                    difference %
                    (
                        1000 *
                        60
                    )
                ) /
                1000
            );


        if (countdownDays) {

            countdownDays.textContent =
                String(days).padStart(
                    2,
                    "0"
                );

        }

        if (countdownHours) {

            countdownHours.textContent =
                String(hours).padStart(
                    2,
                    "0"
                );

        }

        if (countdownMinutes) {

            countdownMinutes.textContent =
                String(minutes).padStart(
                    2,
                    "0"
                );

        }

        if (countdownSeconds) {

            countdownSeconds.textContent =
                String(seconds).padStart(
                    2,
                    "0"
                );

        }

    }


    updateCountdown();

    countdownInterval =
        setInterval(
            updateCountdown,
            1000
        );

}


/* =========================================================
   11. OPEN LETTER
========================================================= */

function openLetter(letterId) {

    const letter =
        lettersData[letterId];


    /* =====================================================
       CHECK LETTER EXISTS
       ===================================================== */

    if (!letter) {

        console.warn(
            "42 REASONS: Letter not found:",
            letterId
        );

        return;
    }


    /* =====================================================
       TIME-LOCKED LETTERS
       ===================================================== */

    if (
        letter.type === "time-locked" &&
        !isLetterUnlocked(letter)
    ) {

        currentLetterId =
            letterId;


        individualLetterNumber.textContent =
            letter.number;


        individualLetterTitle.textContent =
            letter.title;


        individualLetterEyebrow.textContent =
            letter.eyebrow;


        /*
         * Hide normal letter
         */

        individualLetter.style.display =
            "none";


        /*
         * Show countdown
         */

        timeLockedView.style.display =
            "flex";


        const unlockDate =
            new Date(
                letter.unlockDate +
                "T00:00:00"
            );


        const formattedDate =
            unlockDate.toLocaleDateString(
                "en-US",
                {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            );


        unlockDateText.textContent =
            `This letter will open on ${formattedDate}.`;


        startCountdown(letter);


        showPage(
            "letter-view"
        );


        window.scrollTo({
            top: 0,
            behavior: "instant"
        });


        return;
    }


    /* =====================================================
       COOLDOWN
       Only applies to NEW letters
       ===================================================== */

    const alreadyOpened =
        isLetterOpened(
            letter.id
        );


    if (
        !alreadyOpened &&
        !canOpenLetter()
    ) {

        showCooldownModal();

        return;
    }


    /* =====================================================
       OPEN LETTER
       ===================================================== */

    currentLetterId =
        letterId;


    stopCountdown();


    /*
     * Basic information
     */

    individualLetterNumber.textContent =
        letter.number;


    individualLetterTitle.textContent =
        letter.title;


    individualLetterEyebrow.textContent =
        letter.eyebrow;


    /* =====================================================
       LETTER TEXT
       ===================================================== */

    if (
        individualLetterText
    ) {

        individualLetterText.innerHTML =
            letter.content || "";

    }


    /* =====================================================
       GALLERY
       ===================================================== */

    const gallery =
        document.getElementById(
            "individual-letter-gallery"
        );


    if (gallery) {

        gallery.innerHTML =
            "";


        /*
         * Multiple images
         * type: "gallery"
         */

        if (
            letter.type === "gallery" &&
            Array.isArray(letter.images)
        ) {

            letter.images.forEach(
                imagePath => {

                    const image =
                        document.createElement(
                            "img"
                        );


                    image.src =
                        imagePath;


                    image.alt =
                        letter.title;


                    image.loading =
                        "lazy";


                    image.className =
                        "gallery-image";


                    /*
                     * If the file is missing or the
                     * path is wrong, hide it instead
                     * of showing a broken icon.
                     */

                    image.addEventListener(
                        "error",
                        () => {

                            console.warn(
                                "42 REASONS: Could not load gallery image:",
                                imagePath
                            );

                            image.remove();

                        }
                    );


                    gallery.appendChild(
                        image
                    );

                }
            );

        }


        /*
         * Single image
         * normal letters
         */

        else if (
            letter.image
        ) {

            const image =
                document.createElement(
                    "img"
                );


            image.src =
                letter.image;


            image.alt =
                letter.title;


            image.className =
                "gallery-image";


            /*
             * If the file is missing or the
             * path is wrong, hide it instead
             * of showing a broken icon.
             */

            image.addEventListener(
                "error",
                () => {

                    console.warn(
                        "42 REASONS: Could not load letter image:",
                        letter.image
                    );

                    image.remove();

                }
            );


            gallery.appendChild(
                image
            );

        }

    }


    /* =====================================================
       SHOW NORMAL LETTER
       ===================================================== */

    timeLockedView.style.display =
        "none";


    individualLetter.style.display =
        "block";


    /* =====================================================
       MARK AS OPENED
       ===================================================== */

    if (
        !alreadyOpened
    ) {

        markLetterAsOpened(
            letter.id
        );


        saveLastLetterOpenedTime();

    }


    /* =====================================================
       SHOW LETTER PAGE
       ===================================================== */

    showPage(
        "letter-view"
    );


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* =========================================================
   12. EVENT DELEGATION
   THIS IS IMPORTANT
========================================================= */

document.addEventListener(
    "click",
    event => {

        const openButton =
            event.target.closest(
                ".letter-open-button"
            );


        if (openButton) {

            event.preventDefault();

            event.stopPropagation();


            const card =
                openButton.closest(
                    ".letter-card"
                );


            if (!card) {
                return;
            }


            const letterId =
                card.dataset.letterId;


            if (!letterId) {

                console.error(
                    "42 REASONS: Card has no data-letter-id",
                    card
                );

                return;

            }


            openLetter(
                letterId
            );

            return;

        }


        const favoriteButton =
            event.target.closest(
                ".letter-favorite"
            );


        if (favoriteButton) {

            event.preventDefault();

            event.stopPropagation();


            const card =
                favoriteButton.closest(
                    ".letter-card"
                );


            if (!card) {
                return;
            }


            const letterId =
                card.dataset.letterId;


            if (!letterId) {
                return;
            }


            toggleFavorite(
                letterId
            );

        }

    }
);


/* =========================================================
   13. RENDER FAVORITES
========================================================= */

function renderFavorites() {

    if (
        !favoritesGrid ||
        !favoritesEmpty
    ) {

        return;

    }


    const favorites =
        getFavorites();


    favoritesGrid.innerHTML =
        "";


    if (
        favorites.length === 0
    ) {

        favoritesGrid.style.display =
            "none";

        favoritesEmpty.style.display =
            "block";

        return;

    }


    favoritesGrid.style.display =
        "grid";

    favoritesEmpty.style.display =
        "none";


    favorites.forEach(
        letterId => {

            const letter =
                lettersData[
                    letterId
                ];


            if (!letter) {
                return;
            }


            const opened =
                isLetterOpened(
                    letter.id
                );


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "letter-card";


            card.dataset.letterId =
                letter.id;


            if (opened) {

                card.classList.add(
                    "is-opened"
                );

            }


            card.innerHTML = `

                <button
                    class="letter-favorite is-favorite"
                    type="button"
                    aria-label="Remove letter from favorites"
                >
                    <span aria-hidden="true">
                        ♥
                    </span>
                </button>


                <div class="letter-card-content">

                    <span class="letter-number">
                        ${letter.number}
                    </span>

                    <span class="letter-icon">
                        ${opened ? "♥" : "♡"}
                    </span>

                    <h3 class="letter-title">
                        ${letter.title}
                    </h3>

                    <p class="letter-status">
                        ${
                            opened
                                ? "Opened · Ready whenever you need me"
                                : letter.type === "time-locked"
                                    ? "Waiting for you"
                                    : "Whenever you need me"
                        }
                    </p>

                </div>

                <button
                    class="letter-open-button"
                    type="button"
                >
                    ${
                        opened
                            ? "Open again"
                            : letter.type === "time-locked"
                                ? "See countdown"
                                : "Open letter"
                    }
                </button>

            `;


            favoritesGrid.appendChild(
                card
            );

        }
    );


    updateFavoriteButtons();

    updateOpenedLetterCards();

}


/* =========================================================
   14. PAGE NAVIGATION
========================================================= */

function showPage(pageName) {

    let targetPage =
        null;


    if (
        pageName === "home"
    ) {

        targetPage =
            homePage;

    }

    else if (
        pageName === "letters"
    ) {

        targetPage =
            lettersPage;

    }

    else if (
        pageName === "favorites"
    ) {

        targetPage =
            favoritesPage;

    }

    else if (
        pageName === "letter-view"
    ) {

        targetPage =
            letterViewPage;

    }


    if (!targetPage) {

        console.error(
            "42 REASONS: Page not found:",
            pageName
        );

        return;

    }


    document
        .querySelectorAll(
            ".page-section"
        )
        .forEach(
            page => {

                page.classList.remove(
                    "is-active"
                );

            }
        );


    targetPage.classList.add(
        "is-active"
    );


    navigationButtons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.page ===
                pageName
            );

        }
    );


    mobileNavigationButtons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.page ===
                pageName
            );

        }
    );


    closeMobileMenu();


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* =========================================================
   15. MOBILE MENU
========================================================= */

function closeMobileMenu() {

    if (mobileMenu) {

        mobileMenu.classList.remove(
            "is-open"
        );

    }

    if (mobileMenuToggle) {

        mobileMenuToggle.classList.remove(
            "is-open"
        );

        mobileMenuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}


if (
    mobileMenuToggle &&
    mobileMenu
) {

    mobileMenuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileMenu.classList.toggle(
                    "is-open"
                );

            mobileMenuToggle.classList.toggle(
                "is-open",
                isOpen
            );

            mobileMenuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );

}


/* =========================================================
   16. NAVIGATION
========================================================= */

navigationButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                showPage(
                    button.dataset.page
                );

            }
        );

    }
);


mobileNavigationButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                showPage(
                    button.dataset.page
                );

            }
        );

    }
);


/* =========================================================
   17. PHOTO CARD
========================================================= */

if (lettersCard) {

    lettersCard.addEventListener(
        "click",
        () => {

            showPage(
                "letters"
            );

        }
    );

}


/* =========================================================
   18. FAVORITES NAVIGATION
========================================================= */

if (favoritesNavButton) {

    favoritesNavButton.addEventListener(
        "click",
        () => {

            renderFavorites();

            showPage(
                "favorites"
            );

        }
    );

}


/* =========================================================
   19. BACK BUTTON
========================================================= */

if (backToLettersButton) {

    backToLettersButton.addEventListener(
        "click",
        () => {

            stopCountdown();

            if (timeLockedView) {

                timeLockedView.style.display =
                    "none";

            }

            if (individualLetter) {

                individualLetter.style.display =
                    "block";

            }

            showPage(
                "letters"
            );

        }
    );

}


/* =========================================================
   20. ENTER WEBSITE
========================================================= */

if (mainContent) {

    mainContent.style.opacity =
        "0";

    mainContent.style.visibility =
        "hidden";

}


if (enterButton) {

    enterButton.addEventListener(
        "click",
        () => {

            enterButton.disabled =
                true;

            if (mainContent) {

                mainContent.style.transition =
                    "opacity 900ms ease";

                mainContent.style.opacity =
                    "1";

                mainContent.style.visibility =
                    "visible";

            }

            if (welcomeScreen) {

                welcomeScreen.classList.add(
                    "is-hidden"
                );

            }

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }
    );

}


/* =========================================================
   21. INITIALIZATION
========================================================= */

updateFavoriteButtons();

updateOpenedLetterCards();

renderFavorites();

console.log(
    "42 REASONS loaded successfully."
);