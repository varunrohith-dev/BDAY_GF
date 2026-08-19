import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';
import AppleEmoji, { renderWithAppleEmojis } from './AppleEmoji';

/**
 * Letter Component
 * SECTION 2 - LETTER (Main Handwritten Multi-Part Birthday Letter)
 * Renders inside a SINGLE textured parchment paper card (no middle spine lines).
 * Uses authentic 100% iPhone (iOS) Apple style emojis.
 */
export default function Letter({
  date = "20 August 2026",
  recipientName = "Pattani"
}) {
  const [currentPart, setCurrentPart] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  // Multi-Part Letter Content
  const letterParts = [
    {
      id: "intro",
      tabTitle: "Intro",
      tabEmoji: "💌",
      type: "romantic_intro",
      title: "My Heart's Declaration",
      lines: [
        { text: "Hi Pattani.. I am Varun Kannukutty!", emojis: ["👋", "💖", "✨"], highlight: true, color: "text-[#881337]" },
        { text: "Naan itha unkitta solliyae aaganum..", emojis: ["🗣️", "❤️"], highlight: false, color: "text-[#2a2725]" },
        { text: "Nee avlovu azhagu..", emojis: ["🌸", "😍", "✨"], highlight: true, color: "text-[#c9a13b]" },
        { text: "And ivalo azhaga yaarum paathuruka maataanga..", emojis: ["🥺", "💖", "💫"], underline: true, color: "text-[#2a2725]" },
        { text: "And I am in love with you always!", emojis: ["💍", "💌", "🥰"], highlight: true, color: "text-[#be123c]" }
      ]
    },
    {
      id: "ch1",
      tabTitle: "Ch I: Motive",
      tabEmoji: "📖",
      type: "chapter",
      chapterTag: "The Beginning Chapter",
      title: "Motive + Yesterday Happened!",
      paragraphs: [
        "This is ur 22nd Birthday right? Aama unaku 22 vayasu aaiduchu.. You are growing and ur salary is also growned.. Ithey maari nee neraiya vishiyam unnaiya grown pannite irukanum.. 📈✨",
        "And ithu solla maranten, unnoda fitness uhm nee aim panra aana unnoda odambu soozhnilai naala unnala adha reach panna mudila.. Adhu poga poga unaku vandhurum.. Unnoda work life pola.. Epd na starting stage la verutha unaku.. Ipo nee edho unaku puritho puriyalaiyo vela seira uzhaikura.. Poga poga unnoda skills uhm grown aagum.. Unna polaiye. And ipodhiku ivlodhaan unna pathi. 🌸",
        "Varun ku anandhi epd na.. You are doing well everything.. Aana ennoda periya varutham idhu onnu than vera entha koraiyum enaku illa... Naa than sonne unaku mudinja time la pesu.. Unaku kedaikura time la pesu.. Free ah irundha matum pesu nu.. Aana adhu sollumbodhu eh enaku manasuku romba kastama irundhuchu.. Mana azhutham oda than andha vishiyam eh naa sonnen... Adhunalaiye unnoda pechukum, unnoda presence kum naa engunen, engitu irundhen... Nee ennaiya Chennai vandhu paathutu pona apovum enaku apd sollumbothu avlo valichuthu... 🥺❤️",
        "But, several days kelichi naane purinjikitan.. Aprm unnoda time laiyum na konjam gavanam ah irukanum.. Maybe na innum workspace pogathathu naala enaku ipd iruko ennamo therila.. Pona therinjirum pola epd nu.. Pazhagikuren ithuku and ithukaaga.. Ipovum adhaan panren aanalum continue pannuve ipove.. 💭",
        "Nethu na vitta vartha vanthu naane kasta pattu than unaku send eh pannen.. Aana ennoda ekkam apd.. Adhaan posukunu unnaiya apd pesunen eh.. Naa nenaikurathu nerathula unnala eppayume iruka mudiyathu.. Neeya vandhu pesi naa iruken vandhu call pannu nu nee sollavum nee illathathu enaku manasu eh norungiduchu total ah... Yen na ennoda ekkam andha alavuku hard.. And this time of living laiyum un thonai ah thedite irukan... Adhunalaiye idhuvum oru reason nu sollalam.. But unnoda side na yosichhirukanum, paathu pesirukanum, adhu en thappu than sorry for that and Sorry for the whole thing happened yesterday!! 🙇‍♂️",
        "Rendu perukume samam ah enna nadakuthu nu uhm puriyatha stage ah irundhaalum.. Naa varthai ah vitten la adhu enn thappu thaan nu purinji manasaara 'Mannichrunga'. 🙏❤️"
      ]
    },
    {
      id: "ch2",
      tabTitle: "Ch II: Growth",
      tabEmoji: "🚀",
      type: "chapter",
      chapterTag: "The Next Chapter",
      title: "The Changes Of U & Career Growth",
      paragraphs: [
        "Nee ithellam sonna keka mata irundhaalum let me tell u for a change... First thing enna na Unnoda ATM Card adhoda research ah kandupudi adhula enna nadakuthu adhu yen avaru vaangi vachirukaru.. Adhula enna transaction lam poguthu ellame.. And neeyum veetuku pona adhoda card details and account number, IFSC ellame potu Adhu enna bank oh adhula Sign in panni vachiko.. Unaku avarukitta direct ah keka thonala na neeye adha side la sign in panni vachi enna nadakuthu nu paaru... 💳",
        "Veetla evlo nagai iruku, veetla periya selavu na enna paakuranga, Veetla irukura motha Kanaku vazhaku, kadan irundhaalum illa naalum ketu therinji vachika.. Apo apo avarukitta adha pathi uhm pesu.. Amma kittaiyum amma ku therinja alavuku irukura vishiyangal kooda amma kitta kelu... Idhula basic ah therinjikitu vatti na enna, kudukal vaangal, idhulam nee ipove therinjikita romba nallathu.. Unaku future la use aagum.. 💰✨",
        "Next thing is ur planning to something u are going to build or do something... Idhula enna unkitta minus iruku naa.. Edhuva irundhaalum aprm paathukaam, aprm paapom apd ngra oru concept vachikura.... Idhu vandhu nee thidir thidir nu strike aagi apde vitruva.. Sometimes apd kooda adhu nadakum.. Edho sila vishiyangal unaku luck la nadanthu irukalam, nadakamaiyum irundhu irukalam.. Aana inimey aacham adhodha sindhanaigal unaku nadanthaalum, nadakala naalum nee adha pre-planned or pre-book maari neh vachikoyan.. Oru chart maari pottu yoischi vachi adhula this or that maari oru vishiyam ku rendu confirmation maari potu apd kooda adhula achieve panna paaru.. 📊",
        "Your Bond is Going to end soon in 1 year I think.. Idhuku kooda nee mudiyura pora nerathula paathukalam nu irukiya ennanu enaku therila.. Aana next enna pannalam enga apply pannalam.. Illa indha field illama vera polama.. Adhu pathi lam yosikuriya? Location bother pannama enna than veetla neraiya nadandhaalum unaku enga set aagutho anga vela paaru.. If it's out of state naalum.. Unakaana growth oru pakkam thedite iru.. Next enna pannalam nu yosi.. Seniors kitta lam kalandhu pesi idhuku oru next level of employment pathi yosi.. 🚀",
        "Yaaru solra pechu uhm kekatha unnoda carrer vishiyathula.. Unnala ellame mudiyum.. Nee nenacha enga vena polaam unnoda talent ku.. Adhunala olunga idhulaiyum konjam focus pannu, padikanum na padi, next company paakanum naalum paaru.. LinkedIn open pannu adhula photo and profile update pannu, naukuri kooda pannu profile.. Neraiya interviews attend panna strt pannu.. Indha hcl oda bond mudiyurathu kulla.. Illa unaku inga hcl la grow pannikalam naa skill ah padi develop pannu... 🌐✨",
        "Munneri va Pattani!! First of all unga veetla irukura unnoda andha panivu and avangaloda nadamurai la illama adhu ellathaiyum odachi erinjitu, anandhi oda nadamurai epd irukanumo apd change, change it to something!",
        "🔥 GROW - REPEAT - GET SETTLED SOON 🔥"
      ]
    },
    {
      id: "ch3",
      tabTitle: "Ch III: Life",
      tabEmoji: "💖",
      type: "chapter",
      chapterTag: "Your Chapter In Varun's Life",
      title: "Support, Presence & Growing Together",
      paragraphs: [
        "Varun ku ippo vara endha koraiyum illa, Nee enaku kudukura nambikai eh ennaiya need odi vaazha vaikum.. Unnooda nambikai uhm aasirvaadham uhm kooda irundhaalum varun oda life ah super ah pogum... Enaku supportive ah endha nerathulaiyume irundha podhum... Mathapadi enakunu oru thol nikkum nambikai na adhu nee thaan... 🤝❤️",
        "Every place, Every Situations, Every time - presence is enough to survive to the whole life of me... Unkitta na ethir paakurathu eh enakunu chinna chinna vishiyam.. Enaku ooti vidurathu idhu maari vishiyangal lam nee pinnaliyum enaku thodarnthu continue pannite pona nalla irukum, adhulam ennoda ekkam and aasai uhm kooda sollalalm.. 💖",
        "Perusa expectations nu ethum illa... Sonna andha vaarthaigal ah kada pudichi kudunga adhu podhum... Kalangi kondu irukura naanum, kalangi pona Kanneer ah thodaikum neenga enaku thunai ah ninna podhum.. This is enough to live with u.. I know u will do everything nu.. Unexpected things that make me happy is always welcomes you my dear PATTANI! 💫💌",
        "We should starting plan ourself to grow together nga.. Because kalam poite irukum... Nammalum adhuku etha maari porathu vida.. Nammaloda team ah grownup aagurathu ngrathu evlo periya vishiyam.. Adhu namma prove panni kaatanum... Adhukaave we should start our journey to build ourself.. We should plan accordingly for every vishiyams.. Incuding everthing thaan solren.. Adhu namakku save and secure uhhm kooda nu sollalam.. Idhuuvmum oru important role of Gather and prove ourself to achieve anything nu kooda sollalam.. 👫✨"
      ]
    },
    {
      id: "conclusion",
      tabTitle: "Conclusion",
      tabEmoji: "✨",
      type: "chapter",
      chapterTag: "Conclusion of this Envelope",
      title: "Happy Birthday Pattani <3",
      paragraphs: [
        "I Think This letter will be Useful to you nu namburen,, Aana endha alavuku unaku pudikuthu pudikala nu enaku theriyala.. En manasula irundhadhu na ellame sollirukan to change and the habits to change and need to change ur workspace condtions ellame, aana nee enna nenachu idha open panra enaku therila, but en manasula irundhu ivlo uhm nee kondu varanum nu enaku aasa.. Unnaiya na idha vandhu oru change of living kaaga sonnen... But un kaadhuku idhu ellame epd varuthu nu therila...",
        "ANyways Have a nice year, Nice month, and a Nice Birthday.. Happy Birthday Pattani! <3 🎂🎉💖",
        "— With all my love & soul, Varun (Kannukutty) 💍"
      ]
    }
  ];

  const totalParts = letterParts.length;

  const nextPart = () => {
    if (currentPart < totalParts - 1) {
      setDirection(1);
      setCurrentPart((prev) => prev + 1);
    }
  };

  const prevPart = () => {
    if (currentPart > 0) {
      setDirection(-1);
      setCurrentPart((prev) => prev - 1);
    }
  };

  const partVariants = {
    initial: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.5,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.4,
      },
    }),
  };

  const activeData = letterParts[currentPart];

  return (
    <div className="w-full flex justify-center py-6 sm:py-12 px-3 sm:px-6 select-none">
      {/* SINGLE TEXTURED PARCHMENT PAPER CARD FRAME WITH TRANSLUCENT PATTANI BACKDROP */}
      <motion.article
        initial={{ opacity: 0, scale: 0.96, rotate: -0.5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="paper-texture relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl responsive-letter bg-[#f2e9d8]/80 backdrop-blur-md text-[#2a2725] rounded-xl shadow-2xl p-5 xs:p-7 sm:p-12 md:p-14 border border-[#c9a13b]/40 overflow-hidden flex flex-col justify-between"
      >
        {/* TRANSLUCENT PATTANI BACKGROUND PHOTO INSIDE LETTER SQUARE (High Visibility) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src="/pattani.jpg"
            alt="Pattani Letter Backdrop"
            className="w-full h-full object-cover object-center opacity-45 filter brightness-110 contrast-105 saturate-110"
          />
          <div className="absolute inset-0 bg-[#f2e9d8]/45 backdrop-blur-[1px]" />
        </div>

        {/* Top Gold Border Flourish */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#c9a13b]/60 to-transparent z-10" />

        {/* Paper Header - Date & Salutation */}
        <header className="relative z-10 space-y-4 font-sans border-b border-[#c9a13b]/25 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#c9a13b]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#881337]">
                Pattani's Letter
              </span>
            </div>
            <p className="text-right text-xs sm:text-sm font-medium tracking-widest text-[#c9a13b] uppercase">
              {date}
            </p>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#1c1a18]">
            Dear {recipientName},
          </h2>

          {/* Trending Chapter Pill Tabs Navigation */}
          <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 pt-2">
            {letterParts.map((part, idx) => (
              <button
                key={part.id}
                onClick={() => {
                  setDirection(idx > currentPart ? 1 : -1);
                  setCurrentPart(idx);
                }}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  idx === currentPart
                    ? 'bg-[#881337] text-[#fef08a] shadow-md border border-[#f59e0b]/50 scale-105'
                    : 'bg-[#881337]/10 text-[#881337] hover:bg-[#881337]/20 border border-[#881337]/20'
                }`}
              >
                <AppleEmoji symbol={part.tabEmoji} className="w-4 h-4" />
                <span>{part.tabTitle}</span>
              </button>
            ))}
          </div>
        </header>

        {/* Dynamic Letter Body Content Container */}
        <div className="relative z-10 min-h-[360px] sm:min-h-[440px] flex flex-col justify-center py-6">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentPart}
              custom={direction}
              variants={partVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex flex-col justify-center space-y-6"
            >
              {/* TYPE 1: Romantic Declaration (Part 1) */}
              {activeData.type === 'romantic_intro' ? (
                <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 py-2">
                  {activeData.lines.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.12 }}
                      className="flex flex-col items-center"
                    >
                      <p
                        className={`font-handwriting text-2xl sm:text-4xl md:text-5xl ${
                          item.highlight ? 'font-bold' : 'font-semibold'
                        } ${item.color} leading-relaxed flex items-center justify-center flex-wrap gap-2`}
                      >
                        <span>{item.text}</span>
                        <span className="inline-flex items-center gap-1.5 ml-1">
                          {item.emojis.map((emojiSym, eIdx) => (
                            <AppleEmoji key={eIdx} symbol={emojiSym} className="w-7 h-7 sm:w-10 sm:h-10" />
                          ))}
                        </span>
                      </p>

                      {item.underline && (
                        <svg
                          className="w-56 sm:w-80 h-5 text-[#c9a13b] mt-3"
                          viewBox="0 0 250 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 14C50 4 150 18 247 8"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          <path
                            d="M15 16C70 12 180 15 235 14"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            opacity="0.7"
                          />
                        </svg>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* TYPE 2: Full Chapter Content (Parts 2 - 5) */
                <div className="space-y-4">
                  <div className="border-b border-[#c9a13b]/20 pb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#881337] bg-[#881337]/10 px-2.5 py-0.5 rounded-full border border-[#881337]/20">
                      {activeData.chapterTag}
                    </span>
                    <h3 className="font-display text-xl sm:text-3xl font-bold text-[#1c1a18] mt-1">
                      {activeData.title}
                    </h3>
                  </div>

                  <div className="space-y-4 font-sans text-sm sm:text-base md:text-lg text-[#2a2725] leading-relaxed text-justify sm:text-left pt-2">
                    {activeData.paragraphs.map((pText, idx) => (
                      <p
                        key={idx}
                        className={`font-medium ${
                          pText.includes('GROW - REPEAT') || pText.includes('Happy Birthday')
                            ? 'text-center font-bold text-[#881337] text-base sm:text-xl py-2'
                            : ''
                        }`}
                      >
                        {renderWithAppleEmojis(pText, "w-6 h-6 inline-block align-middle mx-1")}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Paper Footer Navigation Controls */}
        <footer className="relative z-10 border-t border-[#c9a13b]/25 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={prevPart}
              disabled={currentPart === 0}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                currentPart === 0
                  ? 'opacity-30 cursor-not-allowed text-gray-500 bg-gray-200'
                  : 'bg-[#881337] text-[#fef08a] hover:bg-[#9f1239] shadow-md cursor-pointer hover:scale-105 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            <button
              onClick={nextPart}
              disabled={currentPart === totalParts - 1}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                currentPart === totalParts - 1
                  ? 'opacity-30 cursor-not-allowed text-gray-500 bg-gray-200'
                  : 'bg-[#881337] text-[#fef08a] hover:bg-[#9f1239] shadow-md cursor-pointer hover:scale-105 active:scale-95'
              }`}
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm font-sans text-[#c9a13b]">
            <span className="font-semibold text-[#881337] flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 fill-[#881337]" /> Part {currentPart + 1} of {totalParts}
            </span>
          </div>
        </footer>

        {/* Paper Corner Flourish Design */}
        <div className="absolute bottom-3 right-3 text-[#c9a13b]/30 pointer-events-none">
          <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
            <path d="M40 0V40H0C20 40 40 20 40 0Z" fill="currentColor" />
          </svg>
        </div>
      </motion.article>
    </div>
  );
}
