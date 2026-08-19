import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Heart, Sparkles } from 'lucide-react';

/**
 * VintageBooklet Component
 * Interactive Vintage Storybook featuring full chaptered letter for Pattani
 * with 3D vintage page-turning animations, aged paper aesthetics, and gold filigree accents.
 */
export default function Book({ onComplete }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const shouldReduceMotion = useReducedMotion();

  // Full Chapter Booklet Pages
  const bookletPages = [
    {
      type: "cover",
      title: "Pattani's Vintage Storybook",
      subtitle: "A Chapter of Growth, Life & Endless Love 📖✨",
      intro: "Tap 'Next Page' below or use arrow keys to turn the vintage pages...",
      tag: "22nd Birthday Special Edition"
    },
    {
      chapter: "Chapter I",
      title: "The Beginning Chapter",
      subtitle: "Motive + Yesterday Happened!",
      content: [
        "This is ur 22nd Birthday right? Aama unaku 22 vayasu aaiduchu.. You are growing and ur salary is also growned.. Ithey maari nee neraiya vishiyam unnaiya grown pannite irukanum.. 📈✨",
        "And ithu solla maranten, unnoda fitness uhm nee aim panra aana unnoda odambu soozhnilai naala unnala adha reach panna mudila.. Adhu poga poga unaku vandhurum.. Unnoda work life pola.. 🌿💪",
        "Epd na starting stage la verutha unaku.. Ipo nee edho unaku puritho puriyalaiyo vela seira uzhaikura.. Poga poga unnoda skills uhm grown aagum.. Unna polaiye. And ipodhiku ivlodhaan unna pathi. 🌸"
      ]
    },
    {
      chapter: "Chapter I (Contd)",
      title: "Sincere Heartfelt Note",
      subtitle: "Understanding Each Other",
      content: [
        "Varun ku anandhi epd na.. You are doing well everything.. Aana ennoda periya varutham idhu onnu than vera entha koraiyum enaku illa... Naa than sonne unaku mudinja time la pesu.. Unaku kedaikura time la pesu.. Free ah irundha matum pesu nu.. 🥺❤️",
        "Aana adhu sollumbodhu eh enaku manasuku romba kastama irundhuchu.. Mana azhutham oda than andha vishiyam eh naa sonnen... Adhunalaiye unnoda pechukum, unnoda presence kum naa engunen, engitu irundhen... Nee ennaiya Chennai vandhu paathutu pona apovum enaku apd sollumbothu avlo valichuthu...",
        "But, several days kelichi naane purinjikitan.. Aprm unnoda time laiyum na konjam gavanam ah irukanum.. Maybe na innum workspace pogathathu naala enaku ipd iruko ennamo therila.. Pona therinjirum pola epd nu.. Pazhagikuren ithuku and ithukaaga.. Ipovum adhaan panren aanalum continue pannuve ipove.. 💭"
      ]
    },
    {
      chapter: "Chapter I (Apology)",
      title: "From The Bottom Of My Heart",
      subtitle: "Mannichrunga",
      content: [
        "Nethu na vitta vartha vanthu naane kasta pattu than unaku send eh pannen.. Aana ennoda ekkam apd.. Adhaan posukunu unnaiya apd pesunen eh.. Naa nenaikurathu nerathula unnala eppayume iruka mudiyathu.. Neeya vandhu pesi naa iruken vandhu call pannu nu nee sollavum nee illathathu enaku manasu eh norungiduchu total ah... 💔",
        "Yen na ennoda ekkam andha alavuku hard.. And this time of living laiyum un thonai ah thedite irukan... Adhunalaiye idhuvum oru reason nu sollalam.. But unnoda side na yosichhirukanum, paathu pesirukanum, adhu en thappu than sorry for that and Sorry for the whole thing happened yesterday!! 🙇‍♂️",
        "Rendu perukume samam ah enna nadakuthu nu uhm puriyatha stage ah irundhaalum.. Naa varthai ah vitten la adhu enn thappu thaan nu purinji manasaara 'Mannichrunga'. 🙏❤️"
      ]
    },
    {
      chapter: "Chapter II",
      title: "The Next Chapter",
      subtitle: "Financial Awareness & Knowledge",
      content: [
        "Nee ithellam sonna keka mata irundhaalum let me tell u for a change... First thing enna na Unnoda ATM Card adhoda research ah kandupudi adhula enna nadakuthu adhu yen avaru vaangi vachirukaru.. Adhula enna transaction lam poguthu ellame.. 💳",
        "And neeyum veetuku pona adhoda card details and account number, IFSC ellame potu Adhu enna bank oh adhula Sign in panni vachiko.. Unaku avarukitta direct ah keka thonala na neeye adha side la sign in panni vachi enna nadakuthu nu paaru...",
        "Veetla evlo nagai iruku, veetla periya selavu na enna paakuranga, Veetla irukura motha Kanaku vazhaku, kadan irundhaalum illa naalum ketu therinji vachika.. Apo apo avarukitta adha pathi uhm pesu.. Amma kittaiyum amma ku therinja alavuku irukura vishiyangal kooda amma kitta kelu... 🏡",
        "Idhula basic ah therinjikitu vatti na enna, kudukal vaangal, idhulam nee ipove therinjikita romba nallathu.. Unaku future la use aagum.. Neraiya idhulaiye ideas and knowledges gain aagum.. Unakunu edhacham selavu adhu maari vandha solren... Idhulam Panam, Nagai, Seetu sambandham ah nee therinjika vendiyathu. 💰✨"
      ]
    },
    {
      chapter: "Chapter II (Contd)",
      title: "Planning & Execution",
      subtitle: "Overcoming Procrastination",
      content: [
        "Next thing is ur planning to something u are going to build or do something... Idhula enna unkitta minus iruku naa.. Edhuva irundhaalum aprm paathukaam, aprm paapom apd ngra oru concept vachikura.... Idhu vandhu nee thidir thidir nu strike aagi apde vitruva.. 🎯",
        "Sometimes apd kooda adhu nadakum.. Edho sila vishiyangal unaku luck la nadanthu irukalam, nadakamaiyum irundhu irukalam.. Aana inimey aacham adhodha sindhanaigal unaku nadanthaalum, nadakala naalum nee adha pre-planned or pre-book maari neh vachikoyan.. Oru chart maari pottu yoischi vachi adhula this or that maari oru vishiyam ku rendu confirmation maari potu apd kooda adhula achieve panna paaru.. 📊",
        "Adhulam sonna udane enna solluva na adhu apo paathupom ngra maari pesura.. Adhoda value unaku nadakum bodhu purihyum nu nenaikuran... Idhulam unaku kasappu ah thaan irukumm.. But nenachi senji paaru unake pudikum... You should change this attire.. Idhu unakum pudikala na skip panniko indha vishiyatha edho enaku sollanum nu thonuchu... ✨"
      ]
    },
    {
      chapter: "Chapter II (Contd)",
      title: "Career & Employment Growth",
      subtitle: "Munneri Va Pattani!",
      content: [
        "Your Bond is Going to end soon in 1 year I think.. Idhuku kooda nee mudiyura pora nerathula paathukalam nu irukiya ennanu enaku therila.. Aana next enna pannalam enga apply pannalam.. Illa indha field illama vera polama.. Adhu pathi lam yosikuriya? 💼",
        "Location bother pannama enna than veetla neraiya nadandhaalum unaku enga set aagutho anga vela paaru.. If it's out of state naalum.. Unakaana growth oru pakkam thedite iru.. Next enna pannalam nu yosi.. Seniors kitta lam kalandhu pesi idhuku oru next level of employment pathi yosi.. 🚀",
        "Yaaru solra pechu uhm kekatha unnoda carrer vishiyathula.. Yaaracham sonnanga na adhu oru idea va gather panniko.. Unnala ellame mudiyum.. Nee nenacha enga vena polaam unnoda talent ku.. Adhunala olunga idhulaiyum konjam focus pannu, padikanum na padi, next company paakanum naalum paaru.. LinkedIn open pannu adhula photo and profile update pannu, naukuri kooda pannu profile.. Neraiya interviews attend panna strt pannu.. Indha hcl oda bond mudiyurathu kulla.. Illa unaku inga hcl la grow pannikalam naa skill ah padi develop pannu... 🌐✨",
        "Munneri va Pattani!! First of all unga veetla irukura unnoda andha panivu and avangaloda nadamurai la illama adhu ellathaiyum odachi erinjitu, anandhi oda nadamurai epd irukanumo apd change, change it to something!",
        "🔥 GROW - REPEAT - GET SETTLED SOON 🔥"
      ]
    },
    {
      chapter: "Chapter III",
      title: "Your Chapter in Varun's Life",
      subtitle: "Support & Unwavering Trust",
      content: [
        "Varun ku ippo vara endha koraiyum illa, Nee enaku kudukura nambikai eh ennaiya need odi vaazha vaikum.. Unnooda nambikai uhm aasirvaadham uhm kooda irundhaalum varun oda life ah super ah pogum... Enaku supportive ah endha nerathulaiyume irundha podhum... Mathapadi enakunu oru thol nikkum nambikai na adhu nee thaan... 🤝❤️",
        "Every place, Every Situations, Every time - presence is enough to survive to the whole life of me... Unkitta na ethir paakurathu eh enakunu chinna chinna vishiyam.. Enaku ooti vidurathu idhu maari vishiyangal lam nee pinnaliyum enaku thodarnthu continue pannite pona nalla irukum, adhulam ennoda ekkam and aasai uhm kooda sollalalm.. 💖",
        "Perusa expectations nu ethum illa... Sonna andha vaarthaigal ah kada pudichi kudunga adhu podhum... Kalangi kondu irukura naanum, kalangi pona Kanneer ah thodaikum neenga enaku thunai ah ninna podhum.. This is enough to live with u.. I know u will do everything nu.. Unexpected things that make me happy is always welcomes you my dear PATTANI! 💫💌"
      ]
    },
    {
      chapter: "Chapter III (Contd)",
      title: "Growing Together As A Team",
      subtitle: "Our Shared Journey",
      content: [
        "We should starting plan ourself to grow together nga.. Because kalam poite irukum... Nammalum adhuku etha maari porathu vida.. Nammaloda team ah grownup aagurathu ngrathu evlo periya vishiyam.. Adhu namma prove panni kaatanum... 👫✨",
        "Adhukaave we should start our journey to build ourself.. We should plan accordingly for every vishiyams.. Incuding everthing thaan solren.. Adhu namakku save and secure uhhm kooda nu sollalam.. Idhuuvmum oru important role of Gather and prove ourself to achieve anything nu kooda sollalam.. 🛡️🌟"
      ]
    },
    {
      chapter: "Conclusion",
      title: "Conclusion of this Envelope",
      subtitle: "Happy Birthday Pattani <3",
      content: [
        "I Think This letter will be Useful to you nu namburen,, Aana endha alavuku unaku pudikuthu pudikala nu enaku theriyala.. En manasula irundhadhu na ellame sollirukan to change and the habits to change and need to change ur workspace condtions ellame, aana nee enna nenachu idha open panra enaku therila, but en manasula irundhu ivlo uhm nee kondu varanum nu enaku aasa.. Unnaiya na idha vandhu oru change of living kaaga sonnen...",
        "ANyways Have a nice year, Nice month, and a Nice Birthday.. Happy Birthday Pattani! <3 🎂🎉💖",
        "— With all my love & soul, Varun (Kannukutty) 💍"
      ]
    }
  ];

  const totalPages = bookletPages.length;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextPage();
    if (e.key === 'ArrowLeft') prevPage();
  };

  const pageVariants = {
    enter: (dir) => ({
      rotateY: dir > 0 ? 85 : -85,
      opacity: 0,
      scale: 0.95,
      transformOrigin: dir > 0 ? 'left center' : 'right center',
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.65,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (dir) => ({
      rotateY: dir > 0 ? -85 : 85,
      opacity: 0,
      scale: 0.95,
      transformOrigin: dir > 0 ? 'right center' : 'left center',
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.55,
      },
    }),
  };

  const currentPageData = bookletPages[currentPage];

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="w-full flex flex-col items-center py-6 sm:py-12 px-3 sm:px-6 outline-none select-none"
    >
      {/* Vintage Header Tag */}
      <div className="flex items-center gap-2 mb-6 text-[#dfb857] bg-black/60 backdrop-blur-md px-5 py-2 rounded-full border border-[#c9a13b]/50 shadow-xl">
        <BookOpen className="w-4 h-4 text-[#f59e0b] animate-pulse" />
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#fef08a]">
          Vintage Birthday Booklet 📜
        </span>
      </div>

      {/* VINTAGE 3D BOOKLET CONTAINER */}
      <div className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl min-h-[440px] sm:min-h-[540px] md:min-h-[600px] perspective-1000 flex flex-col items-center justify-center">
        
        {/* Leather & Gold Filigree Vintage Book Frame */}
        <div className="relative w-full h-full bg-gradient-to-r from-[#2d1208] via-[#4a2111] to-[#2d1208] rounded-2xl p-4 sm:p-7 shadow-2xl border-2 border-[#d97706]/60">
          
          {/* Spine Center Shadow & Line Decor */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-5 sm:w-8 bg-gradient-to-r from-black/60 via-[#5c1c08]/70 to-black/60 z-20 pointer-events-none border-x border-[#dfb857]/30" />

          {/* Vintage Gold Filigree Corner Ornaments */}
          <div className="absolute top-3 left-3 z-30 w-7 h-7 border-t-2 border-l-2 border-[#dfb857]" />
          <div className="absolute top-3 right-3 z-30 w-7 h-7 border-t-2 border-r-2 border-[#dfb857]" />
          <div className="absolute bottom-3 left-3 z-30 w-7 h-7 border-b-2 border-l-2 border-[#dfb857]" />
          <div className="absolute bottom-3 right-3 z-30 w-7 h-7 border-b-2 border-r-2 border-[#dfb857]" />

          {/* Crimson Ribbon Bookmark Accent */}
          <div className="absolute top-0 left-14 sm:left-20 w-3.5 sm:w-5 h-28 sm:h-36 bg-gradient-to-b from-[#881337] via-[#9f1239] to-[#be123c] shadow-lg z-30 border-b-2 border-[#fef08a]" />

          {/* AGED PARCHMENT PAPER SHEET */}
          <div className="relative w-full min-h-[390px] sm:min-h-[480px] md:min-h-[530px] bg-[#f4ebd0] paper-texture rounded-lg p-5 sm:p-10 md:p-12 shadow-inner border border-[#c9a13b]/40 overflow-hidden transform-style-3d flex flex-col justify-between">
            
            {/* Subtle Aged Vignette & Gold Header Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#c9a13b]/60 to-transparent" />
            
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentPage}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full flex flex-col justify-between space-y-4 sm:space-y-6"
              >
                {/* COVER PAGE LAYOUT */}
                {currentPageData.type === 'cover' ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-6 border-2 border-dashed border-[#c9a13b]/40 rounded-lg p-6 bg-[#f4ebd0]/60">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#881337]/10 border-2 border-[#c9a13b] flex items-center justify-center text-3xl sm:text-4xl text-[#881337] shadow-inner mb-2">
                      👑
                    </div>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#881337] bg-[#881337]/10 px-3 py-1 rounded-full border border-[#881337]/20">
                      {currentPageData.tag}
                    </span>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#1c1a18] drop-shadow-xs">
                      {currentPageData.title}
                    </h2>
                    <p className="font-handwriting text-xl sm:text-3xl text-[#881337] font-bold">
                      {currentPageData.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm font-sans italic text-[#451a03]/80 pt-4 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#c9a13b]" />
                      {currentPageData.intro}
                    </p>
                  </div>
                ) : (
                  /* CONTENT PAGE LAYOUT */
                  <>
                    {/* Chapter & Page Title Header */}
                    <div className="border-b border-[#c9a13b]/40 pb-3 text-center">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#881337] bg-[#881337]/10 px-2.5 py-0.5 rounded-full border border-[#881337]/20">
                        {currentPageData.chapter}
                      </span>
                      <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#1c1a18] mt-1">
                        {currentPageData.title}
                      </h3>
                      {currentPageData.subtitle && (
                        <p className="text-xs sm:text-sm font-sans uppercase tracking-wider text-[#c9a13b] mt-0.5 font-medium">
                          {currentPageData.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Paragraph Content */}
                    <div className="flex-1 flex flex-col justify-center space-y-3 sm:space-y-4 py-2 font-sans text-sm sm:text-base md:text-lg text-[#2a2725] leading-relaxed text-justify sm:text-left">
                      {Array.isArray(currentPageData.content) ? (
                        currentPageData.content.map((paragraph, idx) => (
                          <p
                            key={idx}
                            className={`font-medium leading-relaxed ${
                              paragraph.includes('GROW - REPEAT') || paragraph.includes('Happy Birthday')
                                ? 'text-center font-bold text-[#881337] text-base sm:text-xl py-2'
                                : ''
                            }`}
                          >
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <p className="font-medium">{currentPageData.content}</p>
                      )}
                    </div>
                  </>
                )}

                {/* Vintage Page Footer */}
                <div className="border-t border-[#c9a13b]/30 pt-3 flex justify-between items-center text-xs sm:text-sm font-sans text-[#451a03]">
                  <span className="font-semibold flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#be123c] fill-[#be123c]" /> For Pattani
                  </span>
                  <span className="font-bold text-[#881337]">
                    Page {currentPage + 1} of {totalPages}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* VINTAGE NAVIGATION CONTROLS */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
            currentPage === 0
              ? 'opacity-30 cursor-not-allowed border-gray-700 text-gray-500 bg-black/20'
              : 'border-[#f59e0b]/70 text-[#fef08a] bg-[#881337]/90 hover:bg-[#881337] hover:scale-105 active:scale-95 shadow-xl cursor-pointer'
          }`}
        >
          <ChevronLeft className="w-4 h-4" /> Previous Page
        </button>

        {/* Vintage Page Indicator Dots */}
        <div className="flex items-center gap-1.5 max-w-[140px] sm:max-w-none overflow-x-auto py-1">
          {bookletPages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentPage ? 1 : -1);
                setCurrentPage(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentPage
                  ? 'bg-[#fef08a] w-6 border border-[#f59e0b]'
                  : 'bg-[#c9a13b]/40 hover:bg-[#c9a13b] w-2.5'
              }`}
              title={`Turn to Page ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
            currentPage === totalPages - 1
              ? 'opacity-30 cursor-not-allowed border-gray-700 text-gray-500 bg-black/20'
              : 'border-[#f59e0b]/70 text-[#fef08a] bg-[#881337]/90 hover:bg-[#881337] hover:scale-105 active:scale-95 shadow-xl cursor-pointer'
          }`}
        >
          Next Page <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
