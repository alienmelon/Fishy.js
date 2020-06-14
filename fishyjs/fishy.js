/*



                f f f
            f f f f
          f f f
          f f
          f f
    f f f f f f f
    f f f f f f f   I S H
        f f
      f f
      f f
  f f f
f f f

~  FISHY.JS IS A MODERN OPEN SOURCE SOLUTION FOR RUNNING FISH ON YOUR WEBSITE  ~

   Features:
       * Option to let users enable Fish on their own
       * Automatically run Fish
       * Fish is cross-platform enabled and works on mobile
       * Fish is entirely written in JavaScript without the need for plugins!

      ( code by @alienmelon, special thanks to mackerelmediafish.com )




*/

///////////NOTES

//all paths and files are bellow
//if you want to change sprites just swap out the filenames with your own

//if the filesize for Fishy.js is too large,
//then remove all audio and set bool_soundEnabled to false
//bool_soundEnabled = false will prevent audio from playing
//(audio is the most filesize intensive)...

///////////AUDIO

//NOTE: IF YOU DO NOT WANT TO HAVE SOUND THEN SET THIS TO FALSE
//SOUNDS WILL NOT LOAD IF FALSE AND YOU DON'T HAVE TO UPLOAD AUDIO TO SERVER
var bool_soundEnabled = true;

var arr_snd_squeak = ["AUD_GIRB_SQUELONG01", "AUD_GIRB_SQUELONG02", "AUD_GIRB_SQUELONG03", "AUD_GIRB_SQUELONG04", "AUD_GIRB_SQUELONG05", "AUD_GIRB_SQUELONG06", "AUD_GIRB_SQUELONG07", "AUD_GIRB_SQUELONG08", "AUD_GIRB_SQUELONG09", "AUD_GIRB_SQUELONG10", "AUD_GIRB_SQUELONG11", "AUD_GIRB_SQUELONG12", "AUD_GIRB_SQUELONG13", "AUD_GIRB_SQUELONG14", "AUD_GIRB_SQUESHORT01", "AUD_GIRB_SQUESHORT02", "AUD_GIRB_SQUESHORT03", "AUD_GIRB_SQUESHORT04", "AUD_GIRB_SQUESHORT05", "AUD_GIRB_SQUESHORT06", "AUD_GIRB_SQUESHORT07", "AUD_GIRB_SQUESHORT08", "AUD_GIRB_SQUESHORT09", "AUD_GIRB_SQUESHORT10"];
var arr_snd_bubble = ["AUD_NOTIFY02"];
var arr_snd_errors = ["XPSYSTEM/AUD_XPSYS_07", "XPSYSTEM/AUD_XPSYS_01", "XPSYSTEM/AUD_XPSYS_02", "XPSYSTEM/AUD_XPSYS_03", "XPSYSTEM/AUD_XPSYS_04", "XPSYSTEM/AUD_XPSYS_05", "XPSYSTEM/AUD_XPSYS_06"];

var snd_click = "XPSYSTEM/AUD_XPSYS_01";
var snd_powerdown = "XPSYSTEM/AUD_XPSYS_POWERDOWN";

var arr_notes_song1 = ["SONG/AUD_FISH_SONGNOTE_36", "SONG/AUD_FISH_SONGNOTE_01", "SONG/AUD_FISH_SONGNOTE_02", "SONG/AUD_FISH_SONGNOTE_03", "SONG/AUD_FISH_SONGNOTE_04", "SONG/AUD_FISH_SONGNOTE_05", "SONG/AUD_FISH_SONGNOTE_06", "SONG/AUD_FISH_SONGNOTE_07", "SONG/AUD_FISH_SONGNOTE_08", "SONG/AUD_FISH_SONGNOTE_09", "SONG/AUD_FISH_SONGNOTE_10", "SONG/AUD_FISH_SONGNOTE_11", "SONG/AUD_FISH_SONGNOTE_12", "SONG/AUD_FISH_SONGNOTE_13", "SONG/AUD_FISH_SONGNOTE_14", "SONG/AUD_FISH_SONGNOTE_15", "SONG/AUD_FISH_SONGNOTE_16", "SONG/AUD_FISH_SONGNOTE_17", "SONG/AUD_FISH_SONGNOTE_18", "SONG/AUD_FISH_SONGNOTE_19", "SONG/AUD_FISH_SONGNOTE_20", "SONG/AUD_FISH_SONGNOTE_21", "SONG/AUD_FISH_SONGNOTE_22", "SONG/AUD_FISH_SONGNOTE_23", "SONG/AUD_FISH_SONGNOTE_24", "SONG/AUD_FISH_SONGNOTE_25", "SONG/AUD_FISH_SONGNOTE_26", "SONG/AUD_FISH_SONGNOTE_27", "SONG/AUD_FISH_SONGNOTE_28", "SONG/AUD_FISH_SONGNOTE_29", "SONG/AUD_FISH_SONGNOTE_30", "SONG/AUD_FISH_SONGNOTE_31", "SONG/AUD_FISH_SONGNOTE_32", "SONG/AUD_FISH_SONGNOTE_33", "SONG/AUD_FISH_SONGNOTE_34", "SONG/AUD_FISH_SONGNOTE_35", "SONG/AUD_FISH_SONGNOTE_37", "SONG/AUD_FISH_SONGNOTE_38", "SONG/AUD_FISH_SONGNOTE_39", "SONG/AUD_FISH_SONGNOTE_40", "SONG/AUD_FISH_SONGNOTE_41", "SONG/AUD_FISH_SONGNOTE_42", "SONG/AUD_FISH_SONGNOTE_43", "SONG/AUD_FISH_SONGNOTE_44", "SONG/AUD_FISH_SONGNOTE_45", "SONG/AUD_FISH_SONGNOTE_46", "SONG/AUD_FISH_SONGNOTE_47", "SONG/AUD_FISH_SONGNOTE_48", "SONG/AUD_FISH_SONGNOTE_49", "SONG/AUD_FISH_SONGNOTE_50", "SONG/AUD_FISH_SONGNOTE_51", "SONG/AUD_FISH_SONGNOTE_52", "SONG/AUD_FISH_SONGNOTE_53", "SONG/AUD_FISH_SONGNOTE_54", "SONG/AUD_FISH_SONGNOTE_55", "SONG/AUD_FISH_SONGNOTE_56", "SONG/AUD_FISH_SONGNOTE_57", "SONG/AUD_FISH_SONGNOTE_58"];
var arr_notesWarmDry = ["SONG_WARMDRY/AUD_WARMDRYNOTE_01", "SONG_WARMDRY/AUD_WARMDRYNOTE_02", "SONG_WARMDRY/AUD_WARMDRYNOTE_03", "SONG_WARMDRY/AUD_WARMDRYNOTE_04", "SONG_WARMDRY/AUD_WARMDRYNOTE_05", "SONG_WARMDRY/AUD_WARMDRYNOTE_06", "SONG_WARMDRY/AUD_WARMDRYNOTE_07"];

var arr_snd_trouble = ["TROUBLE/AUD_FISH_TROUBLE_06", "TROUBLE/AUD_FISH_TROUBLE_01", "TROUBLE/AUD_FISH_TROUBLE_02", "TROUBLE/AUD_FISH_TROUBLE_03", "TROUBLE/AUD_FISH_TROUBLE_04", "TROUBLE/AUD_FISH_TROUBLE_05", "TROUBLE/AUD_FISH_TROUBLE_07", "TROUBLE/AUD_FISH_TROUBLE_08", "TROUBLE/AUD_FISH_TROUBLE_09", "TROUBLE/AUD_FISH_TROUBLE_10", "TROUBLE/AUD_FISH_TROUBLE_11", "TROUBLE/AUD_FISH_TROUBLE_12", "TROUBLE/AUD_FISH_TROUBLE_13", "TROUBLE/AUD_FISH_TROUBLE_14", "TROUBLE/AUD_FISH_TROUBLE_15", "TROUBLE/AUD_FISH_TROUBLE_16", "TROUBLE/AUD_FISH_TROUBLE_17", "TROUBLE/AUD_FISH_TROUBLE_18", "TROUBLE/AUD_FISH_TROUBLE_19", "TROUBLE/AUD_FISH_TROUBLE_20", "TROUBLE/AUD_FISH_TROUBLE_21", "TROUBLE/AUD_FISH_TROUBLE_22", "TROUBLE/AUD_FISH_TROUBLE_23", "TROUBLE/AUD_FISH_TROUBLE_24", "TROUBLE/AUD_FISH_TROUBLE_25", "TROUBLE/AUD_FISH_TROUBLE_26", "TROUBLE/AUD_FISH_TROUBLE_27", "TROUBLE/AUD_FISH_TROUBLE_28", "TROUBLE/AUD_FISH_TROUBLE_29", "TROUBLE/AUD_FISH_TROUBLE_30", "TROUBLE/AUD_FISH_TROUBLE_31", "TROUBLE/AUD_FISH_TROUBLE_32", "TROUBLE/AUD_FISH_TROUBLE_33", "TROUBLE/AUD_FISH_TROUBLE_34", "TROUBLE/AUD_FISH_TROUBLE_35", "TROUBLE/AUD_FISH_TROUBLE_36", "TROUBLE/AUD_FISH_TROUBLE_37", "TROUBLE/AUD_FISH_TROUBLE_38", "TROUBLE/AUD_FISH_TROUBLE_39", "TROUBLE/AUD_FISH_TROUBLE_40", "TROUBLE/AUD_FISH_TROUBLE_41", "TROUBLE/AUD_FISH_TROUBLE_42", "TROUBLE/AUD_FISH_TROUBLE_43", "TROUBLE/AUD_FISH_TROUBLE_44", "TROUBLE/AUD_FISH_TROUBLE_45", "TROUBLE/AUD_FISH_TROUBLE_46", "TROUBLE/AUD_FISH_TROUBLE_47", "TROUBLE/AUD_FISH_TROUBLE_48"];
var arr_snd_ok = ["OK/AUD_FISH_OK_6", "OK/AUD_FISH_OK_1", "OK/AUD_FISH_OK_2", "OK/AUD_FISH_OK_3", "OK/AUD_FISH_OK_4", "OK/AUD_FISH_OK_5", "OK/AUD_FISH_OK_7", "OK/AUD_FISH_OK_8", "OK/AUD_FISH_OK_9", "OK/AUD_FISH_OK_10", "OK/AUD_FISH_OK_11", "OK/AUD_FISH_OK_12", "OK/AUD_FISH_OK_13", "OK/AUD_FISH_OK_14", "OK/AUD_FISH_OK_15", "OK/AUD_FISH_OK_16", "OK/AUD_FISH_OK_17", "OK/AUD_FISH_OK_18", "OK/AUD_FISH_OK_19", "OK/AUD_FISH_OK_20", "OK/AUD_FISH_OK_21", "OK/AUD_FISH_OK_22", "OK/AUD_FISH_OK_23", "OK/AUD_FISH_OK_24", "OK/AUD_FISH_OK_25", "OK/AUD_FISH_OK_26", "OK/AUD_FISH_OK_27", "OK/AUD_FISH_OK_28", "OK/AUD_FISH_OK_29", "OK/AUD_FISH_OK_30", "OK/AUD_FISH_OK_31", "OK/AUD_FISH_OK_32", "OK/AUD_FISH_OK_33", "OK/AUD_FISH_OK_34", "OK/AUD_FISH_OK_35"];
var arr_snd_curious  = ["SURPRISE/AUD_FISH_SURPRISE_5", "SURPRISE/AUD_FISH_SURPRISE_1", "SURPRISE/AUD_FISH_SURPRISE_2", "SURPRISE/AUD_FISH_SURPRISE_3", "SURPRISE/AUD_FISH_SURPRISE_4", "SURPRISE/AUD_FISH_SURPRISE_6", "SURPRISE/AUD_FISH_SURPRISE_7", "SURPRISE/AUD_FISH_SURPRISE_8", "SURPRISE/AUD_FISH_SURPRISE_9", "SURPRISE/AUD_FISH_SURPRISE_10", "SURPRISE/AUD_FISH_SURPRISE_11", "SURPRISE/AUD_FISH_SURPRISE_12", "SURPRISE/AUD_FISH_SURPRISE_13", "SURPRISE/AUD_FISH_SURPRISE_14", "SURPRISE/AUD_FISH_SURPRISE_15", "SURPRISE/AUD_FISH_SURPRISE_16", "SURPRISE/AUD_FISH_SURPRISE_17", "SURPRISE/AUD_FISH_SURPRISE_18", "SURPRISE/AUD_FISH_SURPRISE_19", "SURPRISE/AUD_FISH_SURPRISE_20", "SURPRISE/AUD_FISH_SURPRISE_21", "SURPRISE/AUD_FISH_SURPRISE_22", "SURPRISE/AUD_FISH_SURPRISE_23", "SURPRISE/AUD_FISH_SURPRISE_24", "SURPRISE/AUD_FISH_SURPRISE_25", "SURPRISE/AUD_FISH_SURPRISE_26", "SURPRISE/AUD_FISH_SURPRISE_27", "SURPRISE/AUD_FISH_SURPRISE_28", "SURPRISE/AUD_FISH_SURPRISE_29", "SURPRISE/AUD_FISH_SURPRISE_30", "SURPRISE/AUD_FISH_SURPRISE_31", "SURPRISE/AUD_FISH_SURPRISE_32", "SURPRISE/AUD_FISH_SURPRISE_33", "SURPRISE/AUD_FISH_SURPRISE_34", "SURPRISE/AUD_FISH_SURPRISE_35", "SURPRISE/AUD_FISH_SURPRISE_36", "SURPRISE/AUD_FISH_SURPRISE_37", "SURPRISE/AUD_FISH_SURPRISE_38", "SURPRISE/AUD_FISH_SURPRISE_39", "SURPRISE/AUD_FISH_SURPRISE_40", "SURPRISE/AUD_FISH_SURPRISE_41", "SURPRISE/AUD_FISH_SURPRISE_42"];
var arr_snd_sleep = ["SLEEP/AUD_FISH_SLEEP_7", "SLEEP/AUD_FISH_SLEEP_1", "SLEEP/AUD_FISH_SLEEP_2", "SLEEP/AUD_FISH_SLEEP_3", "SLEEP/AUD_FISH_SLEEP_4", "SLEEP/AUD_FISH_SLEEP_5", "SLEEP/AUD_FISH_SLEEP_6", "SLEEP/AUD_FISH_SLEEP_8", "SLEEP/AUD_FISH_SLEEP_9", "SLEEP/AUD_FISH_SLEEP_10", "SLEEP/AUD_FISH_SLEEP_11", "SLEEP/AUD_FISH_SLEEP_12", "SLEEP/AUD_FISH_SLEEP_13", "SLEEP/AUD_FISH_SLEEP_14", "SLEEP/AUD_FISH_SLEEP_15", "SLEEP/AUD_FISH_SLEEP_16", "SLEEP/AUD_FISH_SLEEP_17", "SLEEP/AUD_FISH_SLEEP_18", "SLEEP/AUD_FISH_SLEEP_19", "SLEEP/AUD_FISH_SLEEP_20", "SLEEP/AUD_FISH_SLEEP_21"];
var arr_snd_bye = ["BYE/AUD_FISH_BYE_19", "BYE/AUD_FISH_BYE_18", "BYE/AUD_FISH_BYE_16", "BYE/AUD_FISH_BYE_17", "BYE/AUD_FISH_BYE_14", "BYE/AUD_FISH_BYE_15", "BYE/AUD_FISH_BYE_12", "BYE/AUD_FISH_BYE_13", "BYE/AUD_FISH_BYE_9", "BYE/AUD_FISH_BYE_10", "BYE/AUD_FISH_BYE_11", "BYE/AUD_FISH_BYE_7", "BYE/AUD_FISH_BYE_8", "BYE/AUD_FISH_BYE_5", "BYE/AUD_FISH_BYE_6", "BYE/AUD_FISH_BYE_3", "BYE/AUD_FISH_BYE_4", "BYE/AUD_FISH_BYE_1", "BYE/AUD_FISH_BYE_2"];
var arr_snd_talking = ["TALKING1/AUD_FISH_TALKING01_6", "TALKING1/AUD_FISH_TALKING01_1", "TALKING1/AUD_FISH_TALKING01_2", "TALKING1/AUD_FISH_TALKING01_3", "TALKING1/AUD_FISH_TALKING01_4", "TALKING1/AUD_FISH_TALKING01_5", "TALKING1/AUD_FISH_TALKING01_7", "TALKING1/AUD_FISH_TALKING01_8", "TALKING1/AUD_FISH_TALKING01_9", "TALKING1/AUD_FISH_TALKING01_10", "TALKING1/AUD_FISH_TALKING01_11", "TALKING1/AUD_FISH_TALKING01_12", "TALKING1/AUD_FISH_TALKING01_13", "TALKING1/AUD_FISH_TALKING01_14", "TALKING1/AUD_FISH_TALKING01_15", "TALKING1/AUD_FISH_TALKING01_16", "TALKING1/AUD_FISH_TALKING01_17", "TALKING1/AUD_FISH_TALKING01_18", "TALKING1/AUD_FISH_TALKING01_19", "TALKING1/AUD_FISH_TALKING01_20", "TALKING1/AUD_FISH_TALKING01_21", "TALKING1/AUD_FISH_TALKING01_22", "TALKING1/AUD_FISH_TALKING01_23", "TALKING1/AUD_FISH_TALKING01_24", "TALKING1/AUD_FISH_TALKING01_25", "TALKING1/AUD_FISH_TALKING01_26", "TALKING1/AUD_FISH_TALKING01_27", "TALKING1/AUD_FISH_TALKING01_28", "TALKING1/AUD_FISH_TALKING01_29", "TALKING1/AUD_FISH_TALKING01_30", "TALKING1/AUD_FISH_TALKING01_31", "TALKING1/AUD_FISH_TALKING01_32", "TALKING1/AUD_FISH_TALKING01_33", "TALKING1/AUD_FISH_TALKING01_34", "TALKING1/AUD_FISH_TALKING01_35", "TALKING1/AUD_FISH_TALKING01_36", "TALKING1/AUD_FISH_TALKING01_37", "TALKING1/AUD_FISH_TALKING01_38", "TALKING1/AUD_FISH_TALKING01_39", "TALKING1/AUD_FISH_TALKING01_40", "TALKING1/AUD_FISH_TALKING01_41", "TALKING1/AUD_FISH_TALKING01_42", "TALKING1/AUD_FISH_TALKING01_43", "TALKING1/AUD_FISH_TALKING01_44", "TALKING1/AUD_FISH_TALKING01_45", "TALKING1/AUD_FISH_TALKING01_46", "TALKING1/AUD_FISH_TALKING01_47", "TALKING1/AUD_FISH_TALKING01_48", "TALKING1/AUD_FISH_TALKING01_49", "TALKING1/AUD_FISH_TALKING01_50", "TALKING1/AUD_FISH_TALKING01_51", "TALKING1/AUD_FISH_TALKING01_52", "TALKING1/AUD_FISH_TALKING01_53", "TALKING1/AUD_FISH_TALKING01_54", "TALKING1/AUD_FISH_TALKING01_55", "TALKING1/AUD_FISH_TALKING01_56", "TALKING1/AUD_FISH_TALKING01_57", "TALKING1/AUD_FISH_TALKING01_58", "TALKING1/AUD_FISH_TALKING01_59", "TALKING1/AUD_FISH_TALKING01_60", "TALKING1/AUD_FISH_TALKING01_61", "TALKING1/AUD_FISH_TALKING01_62", "TALKING1/AUD_FISH_TALKING01_63", "TALKING1/AUD_FISH_TALKING01_64", "TALKING1/AUD_FISH_TALKING01_65", "TALKING1/AUD_FISH_TALKING01_66", "TALKING1/AUD_FISH_TALKING01_67", "TALKING1/AUD_FISH_TALKING01_68", "TALKING1/AUD_FISH_TALKING01_69", "TALKING1/AUD_FISH_TALKING01_70", "TALKING1/AUD_FISH_TALKING01_71"];
var arr_snd_singing = ["SING/AUD_FISH_SING_13", "SING/AUD_FISH_SING_01", "SING/AUD_FISH_SING_02", "SING/AUD_FISH_SING_03", "SING/AUD_FISH_SING_04", "SING/AUD_FISH_SING_05", "SING/AUD_FISH_SING_06", "SING/AUD_FISH_SING_07", "SING/AUD_FISH_SING_08", "SING/AUD_FISH_SING_09", "SING/AUD_FISH_SING_10", "SING/AUD_FISH_SING_11", "SING/AUD_FISH_SING_12", "SING/AUD_FISH_SING_14", "SING/AUD_FISH_SING_15", "SING/AUD_FISH_SING_16", "SING/AUD_FISH_SING_17", "SING/AUD_FISH_SING_18", "SING/AUD_FISH_SING_19", "SING/AUD_FISH_SING_20", "SING/AUD_FISH_SING_21", "SING/AUD_FISH_SING_22", "SING/AUD_FISH_SING_23", "SING/AUD_FISH_SING_24", "SING/AUD_FISH_SING_25", "SING/AUD_FISH_SING_26", "SING/AUD_FISH_SING_27", "SING/AUD_FISH_SING_28", "SING/AUD_FISH_SING_29", "SING/AUD_FISH_SING_30", "SING/AUD_FISH_SING_31", "SING/AUD_FISH_SING_32", "SING/AUD_FISH_SING_33", "SING/AUD_FISH_SING_34", "SING/AUD_FISH_SING_35", "SING/AUD_FISH_SING_36", "SING/AUD_FISH_SING_37", "SING/AUD_FISH_SING_38", "SING/AUD_FISH_SING_39", "SING/AUD_FISH_SING_40", "SING/AUD_FISH_SING_41"];
var arr_snd_giggle = ["GIGGLE/AUD_FISH_GIGGLE_3", "GIGGLE/AUD_FISH_GIGGLE_1", "GIGGLE/AUD_FISH_GIGGLE_2", "GIGGLE/AUD_FISH_GIGGLE_4", "GIGGLE/AUD_FISH_GIGGLE_5", "GIGGLE/AUD_FISH_GIGGLE_6", "GIGGLE/AUD_FISH_GIGGLE_7", "GIGGLE/AUD_FISH_GIGGLE_8", "GIGGLE/AUD_FISH_GIGGLE_9", "GIGGLE/AUD_FISH_GIGGLE_10", "GIGGLE/AUD_FISH_GIGGLE_11", "GIGGLE/AUD_FISH_GIGGLE_12", "GIGGLE/AUD_FISH_GIGGLE_13", "GIGGLE/AUD_FISH_GIGGLE_14", "GIGGLE/AUD_FISH_GIGGLE_15", "GIGGLE/AUD_FISH_GIGGLE_16", "GIGGLE/AUD_FISH_GIGGLE_17", "GIGGLE/AUD_FISH_GIGGLE_18", "GIGGLE/AUD_FISH_GIGGLE_19", "GIGGLE/AUD_FISH_GIGGLE_20", "GIGGLE/AUD_FISH_GIGGLE_21", "GIGGLE/AUD_FISH_GIGGLE_22", "GIGGLE/AUD_FISH_GIGGLE_23", "GIGGLE/AUD_FISH_GIGGLE_24", "GIGGLE/AUD_FISH_GIGGLE_25", "GIGGLE/AUD_FISH_GIGGLE_26", "GIGGLE/AUD_FISH_GIGGLE_27", "GIGGLE/AUD_FISH_GIGGLE_28", "GIGGLE/AUD_FISH_GIGGLE_29", "GIGGLE/AUD_FISH_GIGGLE_30", "GIGGLE/AUD_FISH_GIGGLE_31", "GIGGLE/AUD_FISH_GIGGLE_32", "GIGGLE/AUD_FISH_GIGGLE_33", "GIGGLE/AUD_FISH_GIGGLE_34", "GIGGLE/AUD_FISH_GIGGLE_35", "GIGGLE/AUD_FISH_GIGGLE_36", "GIGGLE/AUD_FISH_GIGGLE_37", "GIGGLE/AUD_FISH_GIGGLE_38", "GIGGLE/AUD_FISH_GIGGLE_39", "GIGGLE/AUD_FISH_GIGGLE_40", "GIGGLE/AUD_FISH_GIGGLE_41", "GIGGLE/AUD_FISH_GIGGLE_42", "GIGGLE/AUD_FISH_GIGGLE_43", "GIGGLE/AUD_FISH_GIGGLE_44", "GIGGLE/AUD_FISH_GIGGLE_45", "GIGGLE/AUD_FISH_GIGGLE_46", "GIGGLE/AUD_FISH_GIGGLE_47", "GIGGLE/AUD_FISH_GIGGLE_48"];

/////////////DIALOGUE
//fish dialogue arrays (things said in the small div at the bottom)
var arr_txt_happy = ["Your Fish is so happy!", "Your Fish loves you!", "Fish loves you!", "Fish is so happy right now!!", "Your Fish is happy to be here.", "Your Fish loves you!!", "Your Fish is happy about this friendship.", "Your Fish is a good fish!", "Your Fish thinks you're the best.", "Your Fish thinks highly of you!", "Your Fish is very happy...", "Your Fish expresses joy.", "Your Fish expresses feelings of joy.", "Your Fish expresses feelings of love.", "Your Fish is expressing happy emotions.", "Your Fish thinks this place is pretty great.", "Your Fish thinks that you're pretty great.", "Your Fish is so happy right now...", "Fish is happy to be here.", "Fish is overjoyed to be open!", "Fish is full of joy right now!", "Fish is full of joy!"];
var arr_txt_talking = ["Fish is saying something about what you just did...", "Fish is communicating strong emotions about a thought it just had!", "Fish is saying insightful things!", "Fish has strong opinions about that.", "Fish is telling you a bunch of things!", "Your Fish is telling you a bunch of things...", "Fish is voicing strong opinions about that!", "Fish is giving you important feedback...", "Fish is giving you feedback. You better listen.", "Fish has very strong opinions about that...", "Fish is telling you how happy it is.", "Fish is telling you all about how happy it is.", "Your Fish is telling you a story.", "Your Fish is telling you about what happened the other day.", "Your Fish is bearing its heart and soul to you.", "Fish is bearing its heart and soul to you!", "Your Fish is telling you something important.", ":D", ":)", ":3", ":o", ":O", "(o_o;)", "(._.)", "(._.')", "Your Fish is telling you things!", "Your Fish is telling you things...", "Your Fish is saying things...", "Fish is telling you things...", "Fish has some strong insights about that...", "Your Fish is sharing insights.", "Your Fish has a lot to talk about...", "Fish is telling you some things...", "Your Fish has a lot to talk about right now...", "Your Fish is sharing things.", "Your Fish is sharing its feelings with you.", "Your Fish is sharing some feelings.", "Your Fish is sharing how it feels about this.", "Fish is sharing how it feels.", "Your Fish is sharing feelings...", "Your Fish just had a thought that it wants to share with you!", "Your Fish had a thought and is sharing it with you!", "Your Fish is telling you a bunch of things!", "Your Fish has an opinion about that...", "Your Fish has an opinion...", "Your Fish is sharing an opinion...", "Your Fish just had a thought!", "Your Fish just had a thought it wants to share!", "Your Fish is sharing a thought it just had...", "Your Fish shares deep and profound things with you..."];
var arr_txt_singing = ["Fish is singing a song for you!", "Your Fish is singing you a song!", "Your Fish shares a song with you...", "Fish is singing a ballad!", "Your Fish is singing to you!", "Fish is singing...", "Your Fish is singing a tune!", "Your Fish is serenading you.", "Fish serenades you with a tune...", "Fish serenades you with a fishy tune...", "Your Fish is singing a song to you!", "Your Fish is singing!", "Fish is singing!", "Your Fish sings you a song!", "Your Fish is improvising a melody.", "Your Fish is improvising a new song!", "Your Fish is sharing a new song it just made!", "Your Fish is improvising music!"];
var arr_txt_bellyUp = ["Your Fish has gone belly up...", "Fish has gone belly up...", "Your Fish has gone belly up!", ":o Fish goes belly up!!", ":O Fish has gone belly up.", "Fish has gone belly up??", "Your Fish has gone belly up."];
var arr_txt_hiding = ["Your Fish is hiding...", "Your Fish is hiding? Where is Fish??", "Where is Fish???", "Can you find them??", "Where is your Fish?", "Your Fish is hiding!", "Can you find your Fish?", "Your Fish is hiding from you.", "Your Fish is hiding somewhere.", "Your Fish is hiding somewhere here...", "Your Fish decided to hide.", "Your Fish has gone into hiding.", "Where did Fish go?", "Your Fish has vanished.", "Your Fish vanished.", "Fish has vanished mysteriously.", "Fish has mysteriously gone into hiding...", "Fish has gone into hiding and might return one day...", "Your Fish is hiding... but where?", "Fish has mysteriously vanished without a trace.", "Your Fish has mysteriously vanished without a trace..."];
var arr_txt_scared = ["Your Fish froze! Please click Fish to restart...", "Your Fish found unsettling file information! It needs to restart...", "Your Fish found an error on line 13 and froze! Click Fish to reassure it.", "Your Fish stared into the void and can no longer move. Please click Fish to restart.", "No more space for Fish! Please click on Fish to reassure it that everything is OK.", "Fish error! Fish saw something scary and needs a reassuring click!", "Fish saw something very scary on your desktop and needs a reassuring click...", "Fish was frightened by something on your desktop and needs your click!", "Fish is scared and needs a reassuring click...", "Your Fish broke! It needs your love and a click to return to normal...", "Critical error on line 38! Fish needs a reassuring click to return to normal.", "Your Fish saw something! It's scared now.", "Your Fish saw something truly terrifying and is scared. Gently click Fish to reassure it.", "Your Fish is mortified by something it saw. Please click on Fish to reassure it.", "Your Fish saw something truly mortifying and cannot move. Please click on Fish to reassure it.", "Fish is mortified. Please click on Fish to reassure it.", "Fish is scared and needs reassurance...", "Error! Fish needs a reassuring click in order to return back to normal."];
var arr_txt_surprise = ["Something surprised Fish!", "Something surprised your Fish!", "Whoa! Fish got surprised!", "Your Fish was surprised by that!", "That surprised your Fish!", "Your Fish is pleasantly surprised by that!", "That surprised your Fish!", "Your Fish is bemused!", "Your Fish was bewildered!", "Your Fish is slightly taken aback by that...", "That amused your Fish!", "Fish was amused by that!", "Your Fish found that amusing!", "Fish was amused by that...", "Your Fish was delighted by that...", "That made your Fish curious...", "Your Fish got curious...", "Your Fish is curious at something...", "Your Fish is amused.", "Your Fish saw something amusing!", "Something surprised your Fish!"];
//click on
var arr_txt_clickSleep = ["Whoa! Fish was tired!", "Wow your Fish was tired.", "Your Fish was very tired...", "Your Fish was very tired and needed that...", "Wow your Fish was very tired!", "A nap was necessary!", "Your Fish really needed that nap.", "Fish really needed a nap.", "That nap was necessary!", "That nap was a necessary feature!", "Your Fish needed that nap.", "Naps are a necessary feature!", "Your Fish is glad it got some sleep...", "Your Fish is happy it got some shut eye...", "Your Fish is happy to have gotten some rest.", "Your Fish needed some rest!", "Your Fish was very tired and needed that!", "That nap was very necessary!", "That nap was a very necessary feature...", "Fish really needed that nap.", "Your Fish really needed the sleep.", "Fish needed the sleep..."];
var arr_txt_clickFroze = ["Thank you for helping Fish.", "Fish is grateful for your help.", "Fish is thankful for that help.", "Fish thanks you for the help.", "Your Fish thanks you for helping.", "Your Fish is glad that you have its back.", "Your Fish is lucky that you have its back!", "Your Fish is lucky to have you.", "Your Fish is grateful for the help.", "Your Fish is happy that you unconfused it.", "Your Fish is happy that you reset it.", "Your Fish is grateful for the reset.", "Your Fish is lucky to have you!", "Your Fish is lucky to have you...", "Fish is very lucky to have you.", "Fish expresses gratitude for the help.", "Your Fish expresses gratitude for the help."];
var arr_txt_clickHide = ["Haha! You found Fish!", "You found your Fish!", "Haha! You found your Fish!", "Your fish was found!", "You found your Fish...", "Your Fish is glad that you found it.", "Fish is happy that you found it!", "Fish is glad that you found it again.", "Your Fish is glad you found it.", "Fish is glad to be back!", "Fish is glad to be visible again...", "Fish is happy to be visible again!"];
var arr_txt_goodbye = ["Goodbye!", "C u later!", "See you later!", "Bye!", "Ok bye!", "Thank you bye!!", "See you later!!", "Till next time!", "Bye bye!!", "Ok thanks bye!"];

/////////////IMAGES
//emojis
var arr_img_emoji_happy = ["IMG_EMOJI_HAPPY01.gif", "IMG_EMOJI_HAPPY02.gif", "IMG_EMOJI_HAPPY03.gif", "IMG_EMOJI_HAPPY04.gif", "IMG_EMOJI_HAPPY05.gif", "IMG_EMOJI_HAPPY06.gif", "IMG_EMOJI_HAPPY07.gif"];
var arr_img_emoji_heart = ["IMG_EMOJI_HEART01.gif", "IMG_EMOJI_HEART02.gif", "IMG_EMOJI_HEART03.gif", "IMG_EMOJI_HEART04.gif", "IMG_EMOJI_HEART05.gif", "IMG_EMOJI_HEART06.gif"];
var arr_img_emoji_shock = ["IMG_EMOJI_SHOCK01.gif", "IMG_EMOJI_SHOCK02.gif", "IMG_EMOJI_SHOCK03.gif", "IMG_EMOJI_SHOCK04.gif", "IMG_EMOJI_SHOCK05.gif", "IMG_EMOJI_SHOCK06.gif", "IMG_EMOJI_SHOCK07.gif"];
var arr_img_emoji_sing = ["IMG_EMOJI_SING01.gif", "IMG_EMOJI_SING02.gif", "IMG_EMOJI_SING03.gif", "IMG_EMOJI_SING04.gif", "IMG_EMOJI_SING05.gif"];

//fish sprites (for all the fish states)
var str_sing = "IMG_FISHY_SING01.gif";
var str_bubbles = "IMG_FISHY_BUBBLES01.gif";
var str_error = "IMG_FISHY_ERROR01.gif";
var str_hide = "IMG_FISHY_HIDE02.gif";
var str_idle = "IMG_FISHY_IDLE01.gif";
var str_bellyup = "IMG_FISHY_BELLYUP02.gif";
var str_sleep = "IMG_FISHY_SLEEPING01.gif";
var str_surprise = "IMG_FISHY_SURPRISE01.gif";
var str_swim = "IMG_FISHY_SWIM01.gif";
var str_swimfast = "IMG_FISHY_SWIMFAST01.gif";
var str_talking = "IMG_FISHY_TALKING02.gif";

var str_bootup = "IMG_BOOTUP.png";

/////////////PATHS
var str_path_aud = "fishyjs/audio/"; //path to audio folder
var str_type_aud = ".mp3"; //audio file format (can be changed)
var str_path_img = "fishyjs/images"; //path to image folder

////////////FISHY

var snd_fish; //the sound object

//the fish divs
var div_fish; //the fish div (parent container)

//the fish states, fish animations (within div_fish)
//array with all the above so it can be looped through and everything hidden when a state changes...
var arr_div_fishStates = ["div_fish_sing", "div_fish_bellyup", "div_fish_bubbles", "div_fish_error", "div_fish_hide", "div_fish_idle", "div_fish_sleep", "div_fish_surprise", "div_fish_swim", "div_fish_swimfast", "div_fish_talking"];
var arr_div_fishImages = [str_sing, str_bellyup, str_bubbles, str_error, str_hide, str_idle, str_sleep, str_surprise, str_swim, str_swimfast, str_talking];

//the actual states that get chosen (fish gets set to these)
var arr_fishStates = ["swim", "idle", "idle", "swim", "swim", "swim", "swim", "happy", "happy", "talking", "talking", "singing", "singing", "froze", "curious", "sleep", "hide", "bellyup"];
//the currently selected state
var str_currState = "idle";

//the emoji divs
var div_emoji_happy;
var div_emoji_heart;
var div_emoji_shock;
var div_emoji_sing;

//the bootup div
var div_bootup;

//the dialogue divs
var div_dialogue; //text goes here

//button divs
var div_btnCloseFish;//the button for closing
var div_btnBootupFish;//the button for booting fish up (if alternate init was called)

var num_fish_width = 179;
var num_fish_height = 152;

var num_framerate = 30; //interval call speed for ALL animation (frame rate of everything)
var int_fish; //fish interval (handle state and animation)
var num_stateCount; //the number to count down to till changing the next state

//movement vars
var org_x;//the original x position (for flipping) //TODO: FISHY NEEDS TO FLIP IF CHANGING DIRECTION??
var num_distX;//distance traveled in x
var num_distY;//distance traveled in y
var num_targ_x; //target x position (to move to)
var num_targ_y; //target y position (to move to)

//if fish is closing (stop all, walk fish off screen, THEN close)
var bool_isClosing = false;

var num_particleCount = Math.ceil(Math.random()*(10)+5);//how many particle windows to spawn
var num_particleSpawn = 0;//how many particles have been spawned (used to give name and keep track...)
var num_fishSpeedBurst = 0; //fish "runs" when you click on it... count down and set back to normal speed
var num_songCount = 0;//the note count of the song (array)
var num_bootupCount = 100;//how long the "you have found a friend" bootup image shows

/////NUMBERS & RETURNS

function returnDocWidth(){
	var num_width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	
	return num_width;
}

function returnDocHeight(){
	var num_height = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	
	return num_height;
}

//return a random number within a range
function returnRandRange(num_min, num_max){
    return (Math.floor(Math.random() * (num_max - num_min + 1)) + num_min);
}

function returnRandTarg(){
	num_targ_x = returnRandRange(0, returnDocWidth() - num_fish_width);
	num_targ_y = returnRandRange(0, returnDocHeight() - num_fish_height);
}

//random array
function randArr(arr){
	return arr[Math.ceil(Math.random()*arr.length-1)];
}

/////SOUND
//note: if file size is too large, set bool_soundEnabled (above) to false
//this will prevent sounds from being loaded
//if bool_soundEnabled is false you do not need to upload audio to the server

function playSound(snd){
	if(bool_soundEnabled){
		//stop if playing... (to avoid overlap)
		if(snd_fish != undefined){
			snd_fish.pause();
		}
		snd_fish = new Audio(str_path_aud + snd + str_type_aud);
		snd_fish.play();
	}
}

//play a basic sound effect that DOES NOT stop the sound object
//sound object is not accessible
function playSoundFX(snd){
	if(bool_soundEnabled){
		snd_fx = new Audio(str_path_aud + snd + str_type_aud);
		snd_fx.play();
	}
}

//loop play through the song array
//when you click on an emoji it plays a note from the song
//click them fast enough and you get the song!
//(on loop)
function playSong(){
	if(bool_soundEnabled){
		//manage count...
		if(num_songCount < arr_notes_song1.length - 1){
			num_songCount += 1;
		}else{
			num_songCount = 0;
		}
		//play it
		playSoundFX(arr_notes_song1[num_songCount]);
	}
}

/////SPRITES

//control the visibility of elements
function hideThis(str_element){
	document.getElementById(str_element).style.visibility = "hidden";
}
function showThis(str_element){
	document.getElementById(str_element).style.visibility = "visible";
}

function checkVisible(str_element){
	var _div = document.getElementById(str_element);
	var style = window.getComputedStyle(_div);	
	return style.visibility!== 'hidden';
}

//remove element (used mainly for clearing emojis)
function removeThis(_div){
	var _this = _div;
	if(_this != null){
		_this.parentNode.removeChild(_this);
	}
}

//get the current x/y position (for movement, etc...)
function getX(_div){
	var num_x = parseInt(_div.style.left);
	return num_x;
}
function getY(_div){
	var num_y = parseInt(_div.style.top);
	return num_y;
}

//control the x/y position (for movement)
function setX(_div, num_x){
	_div.style.left = String(num_x) + 'px';
}
function setY(_div, num_y){
	_div.style.top = String(num_y) + 'px';
}

//flip the fish (depending on direction being traveled...)
function flipLeft(_div){
	_div.style.transform = "translate(-100%, 0%) scaleX(1)";
}
function flipRight(_div){
	_div.style.transform = "translate(-100%, 0%) scaleX(-1)";
}

//hide all (called before showing the desired state)
function hideAllFishAnimations(){
	for(var i = 0; i<arr_div_fishStates.length; ++i){
		hideThis(arr_div_fishStates[i]);
	}	
}

//set the fish animation
function fish_gotoAnimation(str_div){
	hideAllFishAnimations();
	showThis(str_div);
}

function makeFishAnimations(str_id, str_image, appendTo){
	
	var fishDiv = document.createElement("div");
	fishDiv.id = str_id;
	fishDiv.className = "fishyjs";
	appendTo.appendChild(fishDiv);
		
	fishDiv.innerHTML = '<img src="' + str_path_img + "/" + str_image + '" alt="Fishy">';
		
	fishDiv.style.position = "absolute";
}

/////STATES

//set the countdown vars
function set_stateCountdown(numMin, numMax){
	num_stateCount = returnRandRange(numMin, numMax);
	num_particleCount = returnRandRange(5, 10);
}

function set_state(bool_shouldSwim){

	//bool_shouldSwim = default to swimming
	//set the new state...
	var str_state = randArr(arr_fishStates);
	
	//DUPLICATE STATE
	//catch if it's the same state again (keep from being repetitive)
	if(str_state == str_currState || bool_shouldSwim){
		//set to swim again if it's a double same state (swim is default)
		str_state = "swim";
		
	}
		
	//set
	str_currState = str_state;
	//
	returnRandTarg();
	set_stateCountdown(50, 200);
	org_x = getX(div_fish);//set original y (for flipping)
	
}

//SETING ALL THE STATES (calling the associating sounds and the associating dialogue...)

function fish_talking(){
	
	fish_gotoAnimation("div_fish_talking");
	playSound(randArr(arr_snd_talking));
	set_dialogue(randArr(arr_txt_talking));
	
}

function fish_talking_event(str){
	//unique call to talking that's user set
	//when "froze" or "hiding" and you click on fish
	//fish makes a comment for a moment, then resumes
	str_currState = "talking";
	playSound(randArr(arr_snd_talking));
	fish_gotoAnimation("div_fish_talking");
	set_stateCountdown(50, 200);
	set_dialogue(str);
}

function fish_singing(){
	//singing repeatedly triggers audio
	//so checking visibility is separate here...
	
	//don't repeatedly trigger
	if(!checkVisible("div_fish_sing")){
		fish_gotoAnimation("div_fish_sing");
		set_dialogue(randArr(arr_txt_singing));
		flipLeft(div_fish);
	}
	
	//keep blowing bubbles & play sound...
	if(num_particleCount > 0 && Math.random()*100 > 80){
		
		makeEmoji(arr_img_emoji_sing);
		playSound(randArr(arr_snd_singing));
		num_particleCount -= 1;
		
	}
}

function fish_idle(){
	fish_gotoAnimation("div_fish_idle");
}

function fish_curious(){
	
	fish_gotoAnimation("div_fish_surprise");
	set_dialogue(randArr(arr_txt_surprise));
	playSound(randArr(arr_snd_curious));
	
}

function fish_hiding(){
	
	fish_gotoAnimation("div_fish_hide");
	set_dialogue(randArr(arr_txt_hiding));
	playSound(randArr(arr_snd_ok));
	
	set_stateCountdown(300, 500);
	
}

function fish_happy(){
	
	//blow happy bubbles
	//first run...
	if(!checkVisible("div_fish_bubbles")){
		
		fish_gotoAnimation("div_fish_bubbles");
		flipLeft(div_fish);
		
		set_dialogue(randArr(arr_txt_happy));
		
	}
	
	//keep blowing bubbles & play sound...
	if(num_particleCount > 0 && Math.random()*100 > 80){
		
		makeEmoji(arr_img_emoji_happy);
		playSound(randArr(arr_snd_squeak));
		num_particleCount -= 1;
		
	}
	
}

function fish_bellyup(){
	//
	if(!checkVisible("div_fish_bellyup")){
		fish_gotoAnimation("div_fish_bellyup");
		set_stateCountdown(500, 800);
		set_dialogue(randArr(arr_txt_bellyUp));
		playSound(randArr(arr_snd_giggle));
	}
}

function fish_sleeping(){
	if(!checkVisible("div_fish_sleep")){
		set_stateCountdown(500, 800);
		playSound(randArr(arr_snd_sleep));
		fish_gotoAnimation("div_fish_sleep");
	}
}

function fish_froze(){
	//shock emojis
	//first run...
	if(!checkVisible("div_fish_error")){
		fish_gotoAnimation("div_fish_error");
		flipLeft(div_fish);
		set_dialogue(randArr(arr_txt_scared));
		set_stateCountdown(500, 700);
		playSoundFX(randArr(arr_snd_errors));
	}
	
	//keep blowing shock emojis & play sound...
	if(num_particleCount > 0 && Math.random()*100 > 95){
		makeEmoji(arr_img_emoji_shock);
		playSound(randArr(arr_snd_trouble));
	}
	
}

function fish_close(){
	
	if(!checkVisible("div_fish_swimfast")){
		flipRight(div_fish);
		set_dialogue(randArr(arr_txt_goodbye));
		playSound(randArr(arr_snd_bye));
		fish_gotoAnimation("div_fish_swimfast");
	}
	
}

//////TEXT

function set_dialogue(str_txt){
	div_dialogue.innerHTML = str_txt;
	showThis("txt_fishy_message");
}

function hide_dialogue(){
	div_dialogue.innerHTML = "";
	hideThis("txt_fishy_message");
}

/////ANIMATION

function fish_move(){
	//current fish x and y position
	var num_fishX = getX(div_fish);
	var num_fishY = getY(div_fish);
	//move to x/y
	num_distX = num_targ_x - num_fishX;
	num_distY = num_targ_y - num_fishY;
	//
	if(num_fishSpeedBurst <= 0){
		//normal speed
		setX(div_fish, Math.ceil(num_fishX + num_distX * 0.005));
		setY(div_fish, Math.ceil(num_fishY + num_distY * 0.005));
		fish_gotoAnimation("div_fish_swim");
	}else{
		//burst of energy
		num_fishSpeedBurst -= 1;
		setX(div_fish, Math.ceil(num_fishX + num_distX * 0.03));
		setY(div_fish, Math.ceil(num_fishY + num_distY * 0.03));
		fish_gotoAnimation("div_fish_swimfast");
	}
	//
	//face direction that it is going
	//face direction / flip
	if(getX(div_fish) > org_x){
		flipLeft(div_fish);
		
	}else{
		flipRight(div_fish);
	}
	//arrived at target OR timed out -- reset
	if(num_fishX == num_targ_x || num_fishY == num_targ_y || num_stateCount < 0){
		set_state(false);
	};
	
}


//MAKING THE BELLY UP AND RESET PART

//just float up and stay there once the top is reached... (sleeping)
function fish_floatUp(){
	var num_fishY = getY(div_fish);
	if(num_fishY >= -num_fish_height/2){
		setY(div_fish, num_fishY -= 2);
	}else{
		//stop, reached the top... just stay there
	}
}

//float up and then reset once the top is reached (bellyup)
function fish_floatUpReset(){
	var num_fishY = getY(div_fish);
	//move up
	if(num_fishY >= -num_fish_height/2){
		setY(div_fish, num_fishY -= 3);
	}else{
		//stop, reached the top...
		playSound(randArr(arr_snd_giggle));
		set_state(false);
	}
}

function fish_leaveScreen(){
	var num_fishX = getX(div_fish);
	//(goodbye) move off screen...
	if(num_fishX > -num_fish_width/2){
		setX(div_fish, num_fishX -= 10);
	}else{
		//fish is off screen, close it now
		_closeFish();
	}
}

///////EVENTS

//this is the actual timer event
//this is what's called to control and animate everything
function event_event(){
	
	//call a new one
	if(num_stateCount <= 0){
		set_state(false);	
	}
	
	//if not closing the fish, run normal
	if(!bool_isClosing){
		
		//note: visibility is checked so events only fire once (for sound and dialogue)
		//some states take care of visibility checking individually to repeatedly trigger sounds...
		
		//TALKING
		if(str_currState == "talking" && !checkVisible("div_fish_talking")){
			fish_talking();
		}
		
		//SINGING
		if(str_currState == "singing"){
			fish_singing();
		}
		
		//IDLE
		if(str_currState == "idle" && !checkVisible("div_fish_idle")){
			fish_idle();
		}
		
		//CURIOUS
		if(str_currState == "curious" && !checkVisible("div_fish_surprise")){
			fish_curious();
		}
		
		//HIDING
		if(str_currState == "hide" && !checkVisible("div_fish_hide")){
			fish_hiding();
		}
		
		//HAPPY
		if(str_currState == "happy"){
			fish_happy();
		}
		
		//BELLY UP (FLOAT UP WITH ONE GIGGLE)
		if(str_currState == "bellyup"){
			fish_floatUpReset();
			fish_bellyup();
		}
		
		//SLEEP (FLOAT UP)
		if(str_currState == "sleep"){
			fish_sleeping();
			fish_floatUp();
		}
		
		//FROZE
		if(str_currState == "froze"){
			fish_froze();
		}
		
		//SWIM
		if(str_currState == "swim"){
			fish_move();
			hide_dialogue();
		}
		if(str_currState == "swimFast"){
			fish_move();
		}
		
		num_stateCount-=1;
		
	}else{
		//fish is closing
		//say goodbye and leave the screen
		fish_close();
		fish_leaveScreen();
	}
	
	num_stateCount -= 1;

}

function event_interact(event){
	//interact with fish
	//events like FROZE or SLEEPING or HIDING let you click and you can snap fish out of it
	//else clicking will give fish a small speed boost + cute sound
	if(str_currState == "froze"){
		
		fish_talking_event(randArr(arr_txt_clickFroze));
		
	}else if(str_currState == "hide"){
		
		fish_talking_event(randArr(arr_txt_clickHide));
		
	}else if(str_currState == "sleep"){
		
		fish_talking_event(randArr(arr_txt_clickSleep));
		
	}else if(str_currState == "bellyup"){
		
		playSound(randArr(arr_snd_giggle));
		
	}else{
		//SPEED BURST
		num_fishSpeedBurst = 20;
		set_state(true);
		playSound(randArr(arr_snd_giggle));
		playSoundFX(randArr(arr_snd_squeak));
		makeEmoji(arr_img_emoji_heart);
	}
}

/////CLOSE FISH (QUIT SEQUENCE)

//when fish closes the fish says goodbye and goes off screen
//once reaching the left of window fish gets removed
function event_close(event){
	
	bool_isClosing = true;
	
	playSoundFX(snd_click);
	
	//clear
	div_fish.removeEventListener("click", event_interact);
	div_btnCloseFish.removeEventListener("click", event_close);
	
	//remove
	removeThis(div_btnCloseFish);
	
		
}

//the last thing called (after fish has left screen, completely remove fish and clear int)
function _closeFish(){
	
	clearInterval(int_fish);
	
	removeThis(div_dialogue);
	removeThis(div_fish);
	
	playSoundFX(snd_powerdown);
}

/////ALTERNATE BOOTUP SEQUENCE

//count down for showing message
//after done showing message, start fish
function event_bootupInterval(){
	
	//close image and start...
	if(num_bootupCount <= 0){
		//stop the bootup...  
		removeThis(div_bootup);
		clearInterval(int_fish);
		//////////////////////////
		//NOW START THE ACTUAL FISH
		setupFish();
		//////////////////////////
	}
	
	num_bootupCount -= 1;
}

//button event
//start the interval for counting down event_bootupInterval
function event_bootup(event){
	
	int_fish = setInterval(event_bootupInterval, num_framerate);
	
	//show bootup message
	showThis("div_bootup");
	
	//bootup sound
	playSoundFX(snd_click);
	playSoundFX(randArr(arr_snd_bubble));
	
	//remove start button...
	div_btnBootupFish.removeEventListener("click", event_bootup);
	removeThis(div_btnBootupFish);
}


/////PARTICLES
//some fish events generate emojis
//you can click on an emoji to play part of a song
//click on them fast enough, you get the entire song

function event_clickEmoji(event){
	//play sound and toggle alpha to being faint
	//should not remove
	var clip = event.currentTarget;
	clip.style.opacity = ".2";
	clip.style.pointerEvents = "none"; //disable
	//when you click on an emoji you get a note from the song
	//click fast enough and you get the whole song (it loops)
	playSong();
}

function moveEmoji(img, intID){
		
	var num_speed = returnRandRange(1, 10);
	var num_y = getY(img);

	num_y -=  num_speed;
	setY(img, num_y);

	//if higher than...
	//clear interval & remove
	//play piano sound
	
	if(getY(img) <= 10){
		clearInterval(window[intID]);
		img.removeEventListener("click", event_clickEmoji);
		removeThis(img);
		//play sfx...
		playSoundFX(randArr(arr_notesWarmDry));
	}
}

function makeEmoji(arr_emoji){
	
	num_particleSpawn += 1;
	
	var img_intID;
	var img = document.createElement("img");
	
	var img_src = str_path_img + "/" + randArr(arr_emoji);
	
	img.src = img_src;
	//style
	img.class = "fishyjs";
	
	img.id = "_fishyEmoji_" + String(num_particleSpawn);
	img_intID = String("int_" + img.id);//unique interval id for moving
	
	img.style.position = "fixed";
	//place (by mouth)
	img.style.left = String(getX(div_fish) + num_fish_width / 2 + returnRandRange(-8, 8)) + "px";
	img.style.top = String(getY(div_fish) + num_fish_height / 2) + "px";
	img.style.cursor = "pointer";
	//
	document.getElementsByTagName("body")[0].appendChild(img);
	
	img.addEventListener("click", event_clickEmoji);
	window[img_intID] = setInterval(moveEmoji, num_framerate*2, img, img_intID);
	
}

/////SETUP

//the CLOSE FISH button allows users to close the fish (quit)
//this initiates the shutdown (event_close) sequence 
function setupCloseButtion(){
	
	div_btnCloseFish = document.createElement("button");
	div_btnCloseFish.class = "fishyjs";
	div_btnCloseFish.style.position = "fixed";
	div_btnCloseFish.style.bottom = "5px";
	div_btnCloseFish.style.left = "5px";
	div_btnCloseFish.style.padding = "5px";
	div_btnCloseFish.style.backgroundColor = "lightblue";
	div_btnCloseFish.style.fontWeight = "bold";
	
	document.getElementsByTagName("body")[0].appendChild(div_btnCloseFish);
	
	div_btnCloseFish.innerHTML = "DISABLE FISH";
	div_btnCloseFish.addEventListener("click", event_close);
}

//the optional BOOTUP button that allows people to open the fish
//this initiates the fish on user interaction
//it places a button at the bottom right of the screen
function setupBootupButton(str_buttonMessage){
		
	//the bootup graphic (hidden until the bootup sequence is triggered)
	div_bootup = document.createElement("img");
	div_bootup.src = str_path_img + "/" + str_bootup;
	div_bootup.class = "fishyjs";
	div_bootup.id = "div_bootup";
	div_bootup.style.position = "fixed";
	div_bootup.style.top = String(returnDocHeight() / 2) + 'px';
	div_bootup.style.left = String(returnDocWidth() / 2 - 100) + 'px';
	
	//the button
	div_btnBootupFish = document.createElement("button");
	div_btnBootupFish.class = "fishyjs";
	div_btnBootupFish.style.position = "fixed";
	div_btnBootupFish.style.bottom = "5px";
	div_btnBootupFish.style.left = "5px";
	div_btnBootupFish.style.padding = "5px";
	div_btnBootupFish.style.backgroundColor = "lightblue";
	div_btnBootupFish.style.fontWeight = "bold";
	
	document.getElementsByTagName("body")[0].appendChild(div_btnBootupFish);
	div_btnBootupFish.innerHTML = str_buttonMessage;
	
	document.getElementsByTagName("body")[0].appendChild(div_bootup);
	hideThis("div_bootup");
	
	div_btnBootupFish.addEventListener("click", event_bootup);
	
}

function setupDialogue(){
	
	div_dialogue = document.createElement("div");
	div_dialogue.id = "txt_fishy_message";
	div_dialogue.className = "fishyjs";
	
	div_dialogue.style.position = 'fixed';
	div_dialogue.style.color = "white";
	div_dialogue.style.font = "17px Comic Sans MS, Helvetica, sans-serif";
	div_dialogue.style.textShadow = "1px 2px 3px #66CCCC";
	div_dialogue.style.textAlign = 'center';
	
	div_dialogue.style.width = '460px';
	div_dialogue.style.height = '80px';
	
	div_dialogue.style.background = '#FFCCCC';
	div_dialogue.style.color = '#006699';
	div_dialogue.style.boxShadow = "0 10px 7px -5px #66CCCC";
	
	div_dialogue.style.top = String(returnDocHeight() - 90) + 'px';
	div_dialogue.style.left = String(returnDocWidth() / 2 - 460 / 2) + 'px';
	
	//hide as default
	div_dialogue.style.visibility = "hidden";
	
	document.getElementsByTagName("body")[0].appendChild(div_dialogue);
	
}

function setupFish(){
	
	div_fish = document.createElement("div");
	div_fish.id = "Fishy";
	div_fish.className = "fishyjs";
	//style
	div_fish.style.position = "fixed";
	div_fish.style.cursor = "pointer";
	//center fish (if you want fish to appear somewhere else, change these  values...)
	div_fish.style.left = String(returnDocWidth() / 2) + "px";
	div_fish.style.top = String(returnDocHeight() / 2) + "px";
	//
	div_fish.style.bottom = String(num_fish_height + "px");
	
	//add states (animations)
	for(var i = 0; i<arr_div_fishStates.length; ++i){
		makeFishAnimations(arr_div_fishStates[i], arr_div_fishImages[i], div_fish);
	}
	
	//add the fish now...
	document.getElementsByTagName("body")[0].appendChild(div_fish);
	
	//hide all here except for default
	fish_gotoAnimation("div_fish_idle");
	
	//setup dialogue (small window with messages)
	setupDialogue();
	
	//setup the "close fish" button
	//COMMENT THIS OUT IF YOU DON'T WANT TO LET USERS CLOSE FISH
	setupCloseButtion();
	
	//setup vars
	returnRandTarg();
	set_state(true);
	
	//listener (interacting with the fish)
	div_fish.addEventListener("click", event_interact);
	
	//START THE FISH!!!GOGOGOGO
	int_fish = setInterval(event_event, num_framerate);
	
}

//////////////////////////////CALL THESE TO START///////////////////////////////////

//<body onload="fishlet_init()">
function fishlet_init(){
	
	console.log("This website is Fish enabled!");
	
	setupFish();
	
}

//<body onload="fishlet_bootup('CLICK HERE TO ENABLE FISH')">
function fishlet_bootup(str_buttonMessage){
	
	//the alternate init call that lets the user enable fish
	//it places a button in the bottom left of the page
	//if the user clicks on it, then a bootup sequence is triggered
	//once the sequence is complete, then fishlet_init is called...
	
	//str_buttonMessage = the custom message to show on the button
	//num_bootupCount = how long the bootup message shows (look for it above, default is 100)
	
	setupBootupButton(str_buttonMessage);
}

///////////////////////////////////////////////////////////////////////////////////