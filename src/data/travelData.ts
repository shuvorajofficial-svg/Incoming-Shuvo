import { TravelArticle, Destination } from '../types/travel';

export const SITE_METADATA = {
  name: "Income Shuvo",
  tagline: "Explore More. Travel Better. Discover the World.",
  leadAuthor: "Income Shuvo",
  authorBio: "Travel writer, documentary photographer, and adventure journalist. Born in Bangladesh and exploring mountains, coastlines, and historic cities worldwide.",
  contactEmail: "shuvorajofficial@gmail.com",
  canonicalUrl: "https://incomeshuvo.com",
  socialLinks: {
    facebook: "https://facebook.com/incomeshuvo",
    youtube: "https://youtube.com/@incomeshuvo",
    instagram: "https://instagram.com/incomeshuvo",
    twitter: "https://twitter.com/incomeshuvo"
  }
};

export const SAMPLE_ARTICLES: TravelArticle[] = [
  {
    id: "sajek-valley-guide",
    slug: "sajek-valley-travel-guide",
    title: "Sajek Valley Travel Guide: Walking Above the Cloud Kingdom of Rangamati",
    subtitle: "A complete step-by-step itinerary, Chander Gari military escort tips, and mountain eco-cottages nestled on the roof of Mizoram border.",
    excerpt: "Perched 1,800 feet above sea level in the Chittagong Hill Tracts, Sajek Valley offers an ethereal spectacle: waking up above a rolling ocean of white clouds from a handcrafted bamboo terrace.",
    coverImage: "/src/assets/images/hero_sajek_bangladesh_1792879435456.jpg",
    imageAlt: "Morning sunrise over Sajek Valley hills in Bangladesh with wooden resorts overlooking a sea of clouds",
    author: "Income Shuvo",
    authorRole: "Founder & Lead Travel Writer",
    publishedDate: "October 18, 2026",
    updatedDate: "October 24, 2026",
    category: "Mountains",
    destination: "Sajek Valley, Rangamati",
    country: "Bangladesh",
    region: "Bangladesh",
    readingTime: "8 min read",
    featured: true,
    trending: true,
    highlights: [
      "Witnessing the early morning 'Meghmala' (cloud sea) from Konglak Para peak",
      "Riding the legendary open-top Chander Gari four-wheel drive jeep through rolling serpentine hill roads",
      "Tasting traditional indigenous bamboo-steamed chicken and fresh hill wild honey",
      "Stargazing into zero-light-pollution Milky Way skies from wooden cliffside eco-cottages"
    ],
    packingEssentials: [
      "Government National ID / Passport photocopy (required for Army checkpoint clearance at Baghaihat)",
      "Power bank (hill electricity runs on local generator scheduled 6:00 PM – 11:00 PM)",
      "Light windbreaker fleece (valley mornings and nights are surprisingly brisk)",
      "High-grip trail shoes for the rocky climb up Konglak Para"
    ],
    estimatedCost: {
      currency: "USD",
      localCurrency: "BDT",
      totalEstimate: "$110 – $160 (BDT 13,000 – 19,000) per traveler",
      stayPerNight: "$25 – $55 (BDT 3,000 – 6,500) for mountain-view wooden eco-resort",
      foodPerDay: "$10 – $15 (BDT 1,200 – 1,800) for hill poultry, rice, and tribal cuisine",
      localTransport: "$50 – $75 (BDT 6,000 – 9,000) roundtrip Chander Gari jeep split among 6–8 travelers",
      activities: "$5 – $10 (BDT 600 – 1,200) local community fees and guide stipends",
      disclaimer: "Estimated based on average traveler expenses (mid-tier comfort) compiled during 2026 field travel. Never fabricated real-time prices; peak weekend rates and festival holidays may vary."
    },
    itinerary: [
      {
        day: 1,
        title: "Khagrachari Arrival & The Scenic Chander Gari Escort",
        recommendedStay: "Meghpunji or Sajek Hill View Resort",
        mealTip: "Traditional bamboo chicken dinner with hilly mashed eggplant (Bhorta)",
        activities: [
          "Arrive early morning in Khagrachari town via overnight sleeper bus from Dhaka.",
          "Hire an authorized Chander Gari (4WD Mahindra jeep) at the Khagrachari jeep stand.",
          "Join the mandatory Bangladesh Army security convoy at Baghaihat Checkpoint (morning convoy departs around 10:30 AM).",
          "Ascend the breathtaking winding mountain roads into Ruilui Para, check into your cliffside cottage, and watch sunset at Helipad 1."
        ]
      },
      {
        day: 2,
        title: "Sunrise at Konglak Para & Indigenous Heritage",
        recommendedStay: "Meghalaya Eco Resort, Ruilui Para",
        mealTip: "Hill tea with fresh papaya juice at the Lushei village canteen",
        activities: [
          "Wake at 5:15 AM to catch the sunrise cloud sea sweeping beneath your cottage balcony.",
          "Trek 35 minutes up to Konglak Para, the highest village in Sajek inhabited by the Lushei and Tripura communities.",
          "Explore the orange orchards and traditional bamboo houses on stilts.",
          "Spend the afternoon relaxing on the wooden decks with slow hill coffee and quiet reading."
        ]
      },
      {
        day: 3,
        title: "Alutila Mystery Cave, Risang Falls & Departure",
        mealTip: "System Restaurant Khagrachari for authentic Chakma indigenous banquet",
        activities: [
          "Join the morning return convoy from Sajek at 10:00 AM back toward Khagrachari valley.",
          "Descend to Alutila Cave; traverse the dark 100-meter mysterious limestone subterranean stream using bamboo flaming torches.",
          "Hike down the forest trail to Risang Waterfall for a refreshing mountain dip.",
          "Board the evening coach back to Dhaka with unforgettable hill memories."
        ]
      }
    ],
    galleryImages: [
      {
        url: "/src/assets/images/hero_sajek_bangladesh_1792879435456.jpg",
        caption: "Sunrise above the clouds from Ruilui Para resort ridge, Sajek Valley"
      },
      {
        url: "/src/assets/images/coxs_bazar_beach_1792879435608.jpg",
        caption: "Coastal contrast: Bangladesh's varied geography from highlands to Bay of Bengal"
      }
    ],
    contentSections: [
      {
        id: "the-roof-of-rangamati",
        heading: "1. The Roof of Rangamati: Where Clouds Become Your Ocean",
        paragraphs: [
          "There are rare places on earth where nature reshapes your perception of scale. Sajek Valley, nestled in the Baghaichhari Upazila of Rangamati district in Bangladesh, is one of those sanctuaries. Positioned right along the international border of the Indian state of Mizoram, the valley feels like a tranquil green world suspended between earth and sky.",
          "Unlike standard hill stations, Sajek's elevation creates a microclimate where thick stratocumulus clouds settle into the deep mountain crevices during early mornings and evenings. When you step out onto the bamboo veranda of your cottage, you aren't looking up at clouds—you are looking down upon them as though gazing over an undulating, snow-white sea."
        ],
        callout: "Traveler's Insight: The cloud phenomenon ('Meghmala') is most dense between late August and early December, right after the monsoon rains wash the hills into an intense emerald green."
      },
      {
        id: "chander-gari-convoy",
        heading: "2. The Chander Gari Convoy Experience",
        paragraphs: [
          "The journey into Sajek is as memorable as the destination. Because of hilly terrain and border proximity, travelers travel in designated convoys escorted by security forces from Baghaihat Army Camp.",
          "You travel aboard open-top 4WD jeeps locally known as 'Chander Gari' (Cars of the Moon). As the powerful engine roars up 45-degree winding gradients through dense teak forests and bamboo groves, wind rushes past and the temperature drops rapidly. The camaraderie among travelers waving between jeeps is contagious."
        ]
      },
      {
        id: "local-culture-respect",
        heading: "3. Indigenous Heritage & Responsible Tourism",
        paragraphs: [
          "Sajek is home to the indigenous Lushei, Tripura, and Pankhua communities who have lived in harmony with these mountains for generations. Their elevated wooden stilt architecture is built with natural bamboo, straw, and reclaimed timber.",
          "As conscious travelers, respecting local customs is paramount. Always ask permission before photographing residents, support local family-run eateries, avoid single-use plastics, and preserve the tranquil silence of the mountain nights."
        ]
      }
    ],
    seo: {
      metaTitle: "Sajek Valley Travel Guide 2026: Itinerary, Cost & Resorts | Income Shuvo",
      metaDescription: "Comprehensive travel guide to Sajek Valley, Rangamati by Income Shuvo. Chander Gari convoy schedule, budget breakdown, resort reviews, and cloud-watching tips.",
      keywords: ["Sajek Valley", "Rangamati Travel", "Bangladesh Tourism", "Income Shuvo", "Chander Gari", "Konglak Para", "Budget Hill Travel"]
    }
  },
  {
    id: "coxs-bazar-inani-guide",
    slug: "coxs-bazar-inani-beach-guide",
    title: "Cox's Bazar & Inani Beach: Beyond the World's Longest Sandy Shoreline",
    subtitle: "Navigating the Marine Drive highway, secluded coral stone beaches, and fresh Bay of Bengal seafood feasts.",
    excerpt: "Stretching for over 120 unbroken kilometers, Cox's Bazar is world-renowned. But the true magic lies south along the Marine Drive, where steep rainforest hills meet turquoise surf at Inani.",
    coverImage: "/src/assets/images/coxs_bazar_beach_1792879435608.jpg",
    imageAlt: "Golden sunset over Cox's Bazar coastline with wooden moon boats on golden sand",
    author: "Income Shuvo",
    authorRole: "Founder & Lead Travel Writer",
    publishedDate: "October 14, 2026",
    updatedDate: "October 22, 2026",
    category: "Beaches",
    destination: "Cox's Bazar & Inani Beach",
    country: "Bangladesh",
    region: "Bangladesh",
    readingTime: "7 min read",
    featured: true,
    trending: false,
    highlights: [
      "Cruising the 80km Marine Drive—flanked by the Bay of Bengal on the right and lush jungle hills on the left",
      "Exploring natural dead coral formations and tidal pools at Inani Beach",
      "Watching artisanal fishermen steer crescent-shaped 'Sampan' boats into golden sunset breakers",
      "Savoring grilled Rupchanda (silver pomfret) with spicy shutki and mustard oil dips"
    ],
    packingEssentials: [
      "UV-protective sunglasses and reef-safe sunscreen (sun reflection off the vast sandflat is intense)",
      "Water-resistant sandals for walking on coral reefs at Inani",
      "Dry bag for camera gear while riding open battery-powered Tom-Toms",
      "Comfortable lightweight linen clothing"
    ],
    estimatedCost: {
      currency: "USD",
      localCurrency: "BDT",
      totalEstimate: "$140 – $220 (BDT 16,500 – 26,000) for 4 days",
      stayPerNight: "$30 – $70 (BDT 3,500 – 8,000) for beachfront resort in Kolatoli or Inani",
      foodPerDay: "$12 – $20 (BDT 1,400 – 2,400) for fresh catch grilled fish and coastal Bengali dishes",
      localTransport: "$20 – $35 (BDT 2,400 – 4,000) for private open CNG / Tom-Tom along Marine Drive",
      activities: "$10 – $15 (BDT 1,200 – 1,800) parasailing, beach quad biking, or boat rides",
      disclaimer: "Estimated based on average traveler expenses (mid-tier comfort) compiled during 2026 field travel. Never fabricated real-time prices; peak weekend rates and festival holidays may vary."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival, Laboni Beach Sunset & Seafood Market",
        recommendedStay: "Long Beach Hotel or Ocean Paradise",
        mealTip: "Jhowbon Restaurant for authentic steamed shrimp with mustard paste",
        activities: [
          "Fly directly into Cox's Bazar airport (CXB) or arrive via scenic morning train over the newly built Dohazari-Cox's Bazar rail link.",
          "Check in and walk toward Laboni Beach to observe the buzzing seaside afternoon life.",
          "Capture golden hour photography of traditional fishing nets and kites in the ocean breeze.",
          "Dine at the nighttime fresh seafood bazaar where you pick live fish weighed and grilled to order."
        ]
      },
      {
        day: 2,
        title: "The Iconic Marine Drive Expedition to Inani & Himchari",
        recommendedStay: "Inani Royal Resort or Sea Pearl Beach Resort",
        mealTip: "Fresh green coconut and hill pineapples from Marine Drive roadside stalls",
        activities: [
          "Rent an open electric auto or private jeep early at 8:30 AM to journey down the scenic Marine Drive.",
          "Stop at Himchari National Park to climb the scenic hill viewpoint overlooking the endless blue horizon.",
          "Continue south to Inani Beach to walk along ancient coral boulder flats uncovered at low tide.",
          "Watch the sunset from secluded rocky outcrops away from the commercial crowds."
        ]
      },
      {
        day: 3,
        title: "Moheshkhali Island & Adinath Temple Expedition",
        mealTip: "Moheshkhali sweet betel leaf and dry fish market treats",
        activities: [
          "Take a high-speed speedboat across the channel from Kasturi Ghat to Moheshkhali Island.",
          "Climb the 69 stairs of Mainak Hill to the centuries-old Adinath Hindu Temple.",
          "Visit the golden Buddhist pagoda (Kyang) and interact with indigenous Rakhine weavers.",
          "Return to the mainland for an evening beach stroll under starlit coastal skies."
        ]
      }
    ],
    galleryImages: [
      {
        url: "/src/assets/images/coxs_bazar_beach_1792879435608.jpg",
        caption: "Moon-shaped wooden fishing boat on the soft sands of Cox's Bazar at sunset"
      }
    ],
    contentSections: [
      {
        id: "the-longest-beach",
        heading: "1. The Grandeur of 120 Kilometers of Ocean Sands",
        paragraphs: [
          "Cox's Bazar holds a special place in the hearts of South Asian travelers. Its unbroken gentle slope into the Bay of Bengal makes it one of the most accessible and mesmerizing coastal stretches on the planet. But many travelers make the mistake of staying only in the crowded hotel strips of Kolatoli.",
          "To experience the raw poetic majesty of this coastline, you must venture further down south along the engineering marvel that is Marine Drive. Here, hills cloaked in dense tropical rainforest drop directly onto pristine sands, and the sound of thunderous breaking waves drowns out the noise of modern life."
        ],
        callout: "Travel Pro-Tip: Schedule your Inani Beach excursion strictly according to tide tables. The ancient coral rocks are submerged during high tide and emerge dramatically during low tide."
      },
      {
        id: "culinary-coastline",
        heading: "2. The Coastal Gastronomy: Mustard, Chilis & Fresh Catch",
        paragraphs: [
          "No journey to Cox's Bazar is complete without delving into its rich coastal cuisine. Bengali food here revolves around the ocean's daily bounty. From Rupchanda (silver pomfret) pan-fried in mustard oil and fresh turmeric to Coral fish curry cooked with raw green bananas, the flavors are bold and deeply satisfying.",
          "For the adventurous palate, tasting 'Loitta Fry' (Bombay duck fish battered in spiced chickpea flour and fried crispy) paired with pungent roasted Shutki (sun-dried fish chutney) is a culinary rite of passage."
        ]
      }
    ],
    seo: {
      metaTitle: "Cox's Bazar & Inani Beach Travel Guide 2026 | Income Shuvo",
      metaDescription: "Ultimate travel guide to Cox's Bazar and Inani Beach by Income Shuvo. Marine Drive itinerary, budget hotel advice, authentic seafood spots, and photography tips.",
      keywords: ["Cox's Bazar", "Inani Beach", "Marine Drive", "Bangladesh Beaches", "Income Shuvo", "Bay of Bengal Travel"]
    }
  },
  {
    id: "kyoto-autumn-guide",
    slug: "kyoto-autumn-solitude-guide",
    title: "Kyoto in Autumn: A Soulful Walk Through Ancient Temples and Crimson Maples",
    subtitle: "Escaping the tourist rush to uncover quiet Zen rock gardens, misty bamboo corridors, and tea master serenity in Japan's cultural heart.",
    excerpt: "When the Japanese maples (Momiji) ignite into vibrant shades of vermilion and copper, Kyoto transforms into a living canvas. Here is how to experience its historic serenity away from the tour buses.",
    coverImage: "/src/assets/images/kyoto_japan_autumn_1792879436474.jpg",
    imageAlt: "Kyoto wooden temple pavilion reflecting in calm pond surrounded by fiery red Japanese autumn foliage",
    author: "Income Shuvo",
    authorRole: "Founder & Lead Travel Writer",
    publishedDate: "October 10, 2026",
    updatedDate: "October 20, 2026",
    category: "Culture & Food",
    destination: "Kyoto & Uji",
    country: "Japan",
    region: "East Asia",
    readingTime: "9 min read",
    featured: true,
    trending: true,
    highlights: [
      "Walking the Philosopher's Path at 6:30 AM before the morning crowds arrive",
      "Contemplating the dry-landscape rock gardens of Ryoan-ji and Daitoku-ji",
      "Sipping ceremonial stone-ground Uji matcha alongside freshly made wagashi sweets",
      "Nighttime temple illuminations at Kiyomizu-dera and Kodai-ji where fiery maples glow against the black sky"
    ],
    packingEssentials: [
      "Comfortable slip-on shoes with clean socks (you will remove shoes dozens of times entering temple tatami halls)",
      "Japan Rail Pass or ICOCA transit card loaded for effortless subway and bus travel",
      "Layered woolen sweater (autumn mornings are crisp, sunny mid-days are mild)",
      "Compact umbrella (gentle misty autumn rain often deepens the maple colors)"
    ],
    estimatedCost: {
      currency: "USD",
      localCurrency: "JPY",
      totalEstimate: "$480 – $750 (¥72,000 – ¥112,000) for 4 days",
      stayPerNight: "$65 – $140 (¥9,800 – ¥21,000) for traditional Machiya guesthouse or business hotel",
      foodPerDay: "$25 – $45 (¥3,800 – ¥6,700) for ramen, bento, and seasonal temple Kaiseki",
      localTransport: "$10 – $18 (¥1,500 – ¥2,700) for Kyoto subway and city bus passes",
      activities: "$15 – $25 (¥2,200 – ¥3,800) temple garden admission fees",
      disclaimer: "Estimated based on average traveler expenses (mid-tier comfort) compiled during 2026 field travel. Never fabricated real-time prices; peak weekend rates and festival holidays may vary."
    },
    itinerary: [
      {
        day: 1,
        title: "Higashiyama Morning & The Historic Gion Alleys",
        recommendedStay: "Gion Ryokan Q-beh or Sotetsu Fresa Inn",
        mealTip: "Seasonal tempura udon near Yasaka Shrine",
        activities: [
          "Begin at Kiyomizu-dera wooden stage at 7:00 AM for sweeping views of Kyoto's skyline shrouded in autumn colors.",
          "Wander the preserved stone alleys of Sannenzaka and Ninenzaka while shops quietly open.",
          "Explore the peaceful gardens of Kodai-ji and Entoku-in.",
          "Evening stroll through Pontocho Alley along the Kamogawa River looking for traditional dining lanterns."
        ]
      },
      {
        day: 2,
        title: "Arashiyama Bamboo Forest & Mountain Retreats",
        recommendedStay: "Traditional Machiya in North Kyoto",
        mealTip: "Shojin Ryori (Buddhist vegetarian dining) at Shigetsu inside Tenryu-ji",
        activities: [
          "Take the early JR train to Arashiyama and walk through the towering green bamboo grove at dawn.",
          "Visit Okochi Sanso Villa for breathtaking panoramic mountain vistas and private garden tea.",
          "Rent a bicycle to explore the quieter northern temples: Gio-ji (moss temple) and Adashino Nenbutsu-ji.",
          "Walk across the historic Togetsukyo Bridge as twilight reflects in the Oi River."
        ]
      },
      {
        day: 3,
        title: "The Zen Enclaves & The Philosopher's Path",
        mealTip: "Matcha parfait and roasted hojicha in Uji green tea district",
        activities: [
          "Walk the 2-kilometer stone path along the cherry-tree canal known as the Philosopher's Path.",
          "Visit Ginkaku-ji (Silver Pavilion) and admire the immaculate dry sand sculpture (Kogetsudai).",
          "Afternoon express train to Uji to visit the UNESCO Byodoin Phoenix Hall.",
          "Attend a traditional tea ceremony guided by a 5th-generation tea master."
        ]
      }
    ],
    galleryImages: [
      {
        url: "/src/assets/images/kyoto_japan_autumn_1792879436474.jpg",
        caption: "A traveler in traditional kimono walks beside a tranquil pavilion surrounded by brilliant scarlet maples in Kyoto"
      }
    ],
    contentSections: [
      {
        id: "momiji-hunting",
        heading: "1. The Philosophy of 'Momijigari' (Maple Leaf Viewing)",
        paragraphs: [
          "In Japan, the arrival of autumn foliage is not simply a change in season; it is an aesthetic contemplation called Momijigari. For centuries, poets and Zen monks have reflected on the fleeting nature of life (Mono no Aware) through the falling of these brilliant scarlet leaves.",
          "Kyoto’s classical wooden architecture acts as the perfect frame. The dark, weathered cedar wood of temple verandas creates an extraordinary contrast against the fiery reds, burnt ambers, and golden yellows outside."
        ],
        callout: "Budget Secret: Purchase the Kyoto Subway & Bus 1-Day Pass for unlimited rides across the city center, saving both transit money and time queuing at ticket machines."
      },
      {
        id: "temple-etiquette",
        heading: "2. Temple Etiquette & Mindful Travel",
        paragraphs: [
          "Kyoto's sacred sites remain active places of spiritual worship. Speaking in quiet tones, bowing gently before passing temple torii gates, and turning off camera shutter sounds are gestures deeply appreciated by local caretakers.",
          "Avoid trailing in large loud groups; instead, sit quietly on the wooden veranda of a temple like Nanzen-ji and listen to the soft rustling of cedar needles and trickling bamboo fountains."
        ]
      }
    ],
    seo: {
      metaTitle: "Kyoto in Autumn Travel Guide: Secret Temples & Itinerary | Income Shuvo",
      metaDescription: "Discover Kyoto's autumn foliage with Income Shuvo. Off-the-beaten-path Zen temples, budget guesthouses, tea ceremonies in Uji, and photo guide.",
      keywords: ["Kyoto Travel", "Kyoto Autumn Foliage", "Japan Itinerary", "Income Shuvo", "Zen Temples", "Matcha Uji"]
    }
  },
  {
    id: "cappadocia-budget-guide",
    slug: "cappadocia-budget-hot-air-balloons",
    title: "Cappadocia on a Budget: Caves, Valleys, and Sunrise Hot Air Balloons",
    subtitle: "How to witness hundreds of floating balloons, hike underground cities, and sleep in ancient volcanic rock caves without spending a fortune.",
    excerpt: "With its surreal fairy chimneys, subterranean troglodyte cities, and dawn skies filled with vibrant hot air balloons, Cappadocia looks like another planet. Here is how to plan an unforgettable adventure responsibly.",
    coverImage: "/src/assets/images/cappadocia_turkey_sky_1792879435873.jpg",
    imageAlt: "Sunrise in Cappadocia Turkey with dozens of hot air balloons floating over volcanic fairy chimney rock valleys",
    author: "Income Shuvo",
    authorRole: "Founder & Lead Travel Writer",
    publishedDate: "October 04, 2026",
    updatedDate: "October 19, 2026",
    category: "Adventure",
    destination: "Göreme & Cappadocia",
    country: "Turkey",
    region: "Middle East",
    readingTime: "8 min read",
    featured: false,
    trending: true,
    highlights: [
      "Waking before dawn to watch 100+ hot air balloons rise simultaneously over Love Valley from panoramic viewpoint ridges",
      "Sleeping in an authentic thousands-year-old carved cave hotel room in Göreme town",
      "Exploring the multi-level underground labyrinth of Derinkuyu or Kaymakli",
      "Hiking through the pink-striped rock formations of Rose and Red Valleys at golden hour"
    ],
    packingEssentials: [
      "Sturdy hiking boots with ankle support (volcanic tuff rock is crumbly and slippery)",
      "Warm fleece jacket and knit beanie for sunrise balloon photography (desert temperatures drop sharply before dawn)",
      "Headlamp or flashlight for exploring subterranean cave passageways",
      "Universal plug adapter and camera with wide-angle lens"
    ],
    estimatedCost: {
      currency: "USD",
      localCurrency: "TRY",
      totalEstimate: "$240 – $420 (₺8,200 – ₺14,300) for 3 days (excluding flight/balloon ticket)",
      stayPerNight: "$35 – $75 (₺1,200 – ₺2,500) for charming authentic cave hotel with rooftop terrace",
      foodPerDay: "$15 – $25 (₺510 – ₺850) for pottery kebab (Testi Kebab), fresh Turkish pide, and mezze",
      localTransport: "$10 – $20 (₺340 – ₺680) local dolmuş (shared minibuses) between Göreme, Avanos, and Ürgüp",
      activities: "$12 – $25 (₺400 – ₺850) museum entry fees; hot air balloon ride itself is optional ($160 – $280)",
      disclaimer: "Estimated based on average traveler expenses (mid-tier comfort) compiled during 2026 field travel. Never fabricated real-time prices; peak weekend rates and festival holidays may vary."
    },
    itinerary: [
      {
        day: 1,
        title: "Cave Check-in, Sunset Point & Göreme Open Air Museum",
        recommendedStay: "Kelebek Special Cave Hotel or Mithra Cave",
        mealTip: "Dibek Traditional Restaurant for clay pot pottery kebab cracked open at your table",
        activities: [
          "Arrive via shuttle from Kayseri (ASR) or Nevşehir (NAV) airport directly into Göreme village.",
          "Check into your carved stone cave room and soak in the surreal topography.",
          "Visit the Göreme Open Air Museum to marvel at Byzantine rock-hewn churches with 1,000-year-old frescoes.",
          "Hike up to Lover's Hill (Sunset Point) to watch the sandstone canyon glow under evening amber light."
        ]
      },
      {
        day: 2,
        title: "Dawn Balloon Watching & The Rose Valley Trek",
        recommendedStay: "Sultan Cave Suites terrace access",
        mealTip: "Traditional Turkish village breakfast (Kahvalti) with fresh honey, olives, and menemen",
        activities: [
          "Wake at 5:00 AM and head to the Love Valley ridge to watch the hot air balloon fleet inflate and launch.",
          "Capture surreal photos of balloons drifting mere meters above the fairy chimney pinnacles.",
          "After breakfast, embark on the 3-hour self-guided hike through Rose Valley (Güllüdere) and Red Valley.",
          "Discover hidden cave chapels carved into the rock cliffs with zero other tourists around."
        ]
      },
      {
        day: 3,
        title: "Subterranean Secrets: Derinkuyu Underground City & Ihlara Canyon",
        mealTip: "Riverside dining on floating wooden platforms at Belisirma inside Ihlara Gorge",
        activities: [
          "Take a day excursion south to Derinkuyu Underground City, carved 85 meters down into the earth with ancient ventilation shafts and stone rolling doors.",
          "Hike the lush riverside trail of the Ihlara Valley gorge, listening to the rushing Melendiz river.",
          "Stop at Selime Monastery—a colossal rock-cut monastery complex perched high on a cliffside.",
          "Sample local Anatolian wines during your farewell dinner in ancient Ürgüp."
        ]
      }
    ],
    galleryImages: [
      {
        url: "/src/assets/images/cappadocia_turkey_sky_1792879435873.jpg",
        caption: "Balloons drifting gently over Cappadocia's honeycombed fairy chimney rocks at dawn"
      }
    ],
    contentSections: [
      {
        id: "balloon-watching-vs-flying",
        heading: "1. Watching the Balloons vs. Flying in Them: The Honest Truth",
        paragraphs: [
          "Hot air balloon flights in Cappadocia have become a global bucket list staple. While the flight itself offers a gentle, breathtaking perspective, many travelers are surprised to learn that watching the balloons from ground level is often even more visually dramatic.",
          "From viewpoints like Love Valley or the elevated ridges of Sword Valley, hundreds of multi-colored spheres float directly overhead against the silhouette of Mount Erciyes. If you are traveling on a strict budget, you do not need to spend $250 on a flight ticket to experience the unforgettable spectacle."
        ],
        callout: "Weather Note: Balloon flights are weather-dependent and regulated strictly by the Turkish Civil Aviation Authority. Always plan at least 3 nights in Cappadocia in case wind or morning fog cancels flights on your first morning."
      },
      {
        id: "hiking-valleys",
        heading: "2. The Magic of Free Hiking Through the Valleys",
        paragraphs: [
          "The greatest treasure of Cappadocia costs virtually nothing: putting on hiking boots and wandering through its labyrinthine valleys. Trail markers can be minimal, but following the well-trodden dust paths through Pigeon Valley, Love Valley, and Rose Valley leads you to abandoned cave dwellings, pigeon lofts carved into cliff faces, and fruit orchards where friendly local elders offer fresh grapes and dried apricots."
        ]
      }
    ],
    seo: {
      metaTitle: "Cappadocia Budget Guide 2026: Cave Hotels & Balloon Views | Income Shuvo",
      metaDescription: "How to explore Cappadocia on a budget by Income Shuvo. Best sunrise balloon viewpoints, cave hotel recommendations, valley hiking routes, and costs.",
      keywords: ["Cappadocia Travel", "Cappadocia Budget", "Hot Air Balloons Turkey", "Income Shuvo", "Göreme Cave Hotels", "Rose Valley Hike"]
    }
  },
  {
    id: "sreemangal-tea-rainforest",
    slug: "sreemangal-tea-gardens-rainforest",
    title: "Sreemangal & Lawachara: Into the Rain-Drenched Tea Trails of Sylhet",
    subtitle: "Cycling through emerald geometric plantations, trekking for Hoolock Gibbons, and tasting the seven-color tea layer phenomenon.",
    excerpt: "Known as the Tea Capital of Bangladesh, Sreemangal is a serene oasis of undulating tea gardens, rubber estates, pineapple groves, and ancient rainforest canopies teeming with wildlife.",
    coverImage: "/src/assets/images/hero_sajek_bangladesh_1792879435456.jpg",
    imageAlt: "Lush green rolling tea gardens and misty canopy in Sreemangal Sylhet",
    author: "Income Shuvo",
    authorRole: "Founder & Lead Travel Writer",
    publishedDate: "September 28, 2026",
    updatedDate: "October 16, 2026",
    category: "Adventure",
    destination: "Sreemangal, Moulvibazar",
    country: "Bangladesh",
    region: "Bangladesh",
    readingTime: "7 min read",
    featured: false,
    trending: false,
    highlights: [
      "Cycling early mornings through the serene, traffic-free Finlay and Zareen tea estates",
      "Trekking inside the Lawachara National Park canopy in search of endangered Hoolock Gibbons",
      "Visiting the indigenous Khasia tribal village of Magurchara perched inside the deep forest",
      "Drinking freshly brewed orthodox single-estate green tea at Nilkantha Tea Cabin"
    ],
    packingEssentials: [
      "Insect repellent / leech socks for deep rainforest trekking in Lawachara",
      "Lightweight rain jacket or umbrella (Sylhet experiences some of the highest rainfall in South Asia)",
      "Binoculars for canopy birdwatching (over 240 avian species reside here)",
      "Bicycle helmet and hydration pack"
    ],
    estimatedCost: {
      currency: "USD",
      localCurrency: "BDT",
      totalEstimate: "$90 – $140 (BDT 10,500 – 16,500) for 3 days",
      stayPerNight: "$20 – $50 (BDT 2,400 – 6,000) for eco-lodge surrounded by lemon orchards",
      foodPerDay: "$8 – $14 (BDT 950 – 1,650) for Sylheti beef with Shatkora (wild citrus) and freshwater fish",
      localTransport: "$15 – $25 (BDT 1,800 – 3,000) for bicycle rentals and local CNG rickshaws",
      activities: "$6 – $12 (BDT 700 – 1,400) forest entry tickets and forest guide stipend",
      disclaimer: "Estimated based on average traveler expenses (mid-tier comfort) compiled during 2026 field travel. Never fabricated real-time prices; peak weekend rates and festival holidays may vary."
    },
    itinerary: [
      {
        day: 1,
        title: "Morning Scenic Train from Dhaka & Tea Garden Cycling",
        recommendedStay: "Novem Eco Resort or Shanti Bari",
        mealTip: "Famous Shatkora beef curry at Kutum Bari Restaurant Sreemangal",
        activities: [
          "Take the morning Parabat Express or Kalani Express train from Dhaka Kamalapur station to Sreemangal.",
          "Arrive by noon, check into a tranquil eco-cottage surrounded by betel nut trees.",
          "Rent a bicycle to meander along the rolling red-dirt roads through the emerald tea gardens.",
          "Stop at Nilkantha Tea Cabin to experience the multi-layer colored tea invention."
        ]
      },
      {
        day: 2,
        title: "Lawachara Rainforest Safari & Khasia Punjee",
        recommendedStay: "Eco-lodge near Bhanugach road",
        mealTip: "Forest tribal fresh bamboo shoot curry and sticky red rice",
        activities: [
          "Enter Lawachara National Park at 6:00 AM with a licensed local forest naturalist.",
          "Listen for the distinctive rhythmic territorial calls of the Western Hoolock Gibbon echoing through tall fig trees.",
          "Walk quietly past the historic Dhaka-Sylhet railway line that cuts through the jungle canopy.",
          "Visit the Khasia Punjee village to learn how betel leaves are cultivated on living forest trees."
        ]
      },
      {
        day: 3,
        title: "Baikka Beel Wetland Sanctuary & Birdwatching",
        mealTip: "Fresh Boal fish curry cooked with mustard paste",
        activities: [
          "Drive early to Baikka Beel, a permanent freshwater wetland sanctuary covering Hail Haor.",
          "Climb the 3-story bird observation watchtower overlooking thousands of migratory winter birds and blooming lotus pads.",
          "Shop for authentic single-estate loose tea leaves directly from the Tea Research Institute counter.",
          "Afternoon train departure back to Dhaka or onward to Sylhet city."
        ]
      }
    ],
    galleryImages: [
      {
        url: "/src/assets/images/hero_sajek_bangladesh_1792879435456.jpg",
        caption: "Lush green rolling hills and mountain canopies in northeastern Bangladesh"
      }
    ],
    contentSections: [
      {
        id: "tea-capital-charm",
        heading: "1. The Rhythm of the Tea Garden Trails",
        paragraphs: [
          "Sreemangal represents a remarkably tranquil side of Bangladesh. Here, the landscape rolls gently into thousands of meticulously manicured tea bushes that resemble green corduroy fabric laid over the earth. Women in bright sarees carry woven bamboo baskets strapped to their heads, expertly plucking the tender 'two leaves and a bud'.",
          "Wandering or cycling these tree-shaded plantation corridors at dawn, when morning mist still clings to the slopes, is an invigorating experience for any soul seeking digital detox."
        ],
        callout: "Biodiversity Note: Lawachara National Park is one of the last remaining primary semi-evergreen rainforest fragments in Bangladesh, providing critical habitat for barking deer, fishing cats, and over 20 endangered primates."
      }
    ],
    seo: {
      metaTitle: "Sreemangal & Lawachara Travel Guide: Tea Gardens & Rainforest | Income Shuvo",
      metaDescription: "Complete travel guide to Sreemangal, Bangladesh by Income Shuvo. Tea plantation cycling routes, Lawachara gibbon trekking, budget eco-resorts, and costs.",
      keywords: ["Sreemangal", "Sylhet Travel", "Lawachara National Park", "Bangladesh Tea Gardens", "Income Shuvo"]
    }
  },
  {
    id: "swiss-alps-train-itinerary",
    slug: "swiss-alps-scenic-train-itinerary",
    title: "Swiss Alps by Train: 7-Day Matterhorn & Glacier Express Itinerary",
    subtitle: "Riding panoramic cogwheel railways, hiking crystal alpine lakes, and budget-saving Swiss Travel Pass strategies.",
    excerpt: "Switzerland is the world standard for railway engineering and alpine splendor. Here is how to experience Zermatt, the Matterhorn, and panoramic mountain passes with crystal clarity.",
    coverImage: "/src/assets/images/cappadocia_turkey_sky_1792879435873.jpg",
    imageAlt: "Iconic alpine peaks and glacial valleys along scenic European rail routes",
    author: "Income Shuvo",
    authorRole: "Founder & Lead Travel Writer",
    publishedDate: "September 15, 2026",
    updatedDate: "October 12, 2026",
    category: "International",
    destination: "Zermatt & Interlaken",
    country: "Switzerland",
    region: "Europe",
    readingTime: "10 min read",
    featured: false,
    trending: true,
    highlights: [
      "Watching the first alpine sun rays illuminate the pyramid peak of the Matterhorn from Stellisee lake",
      "Crossing 291 bridges and 91 tunnels aboard the world-famous Glacier Express panoramic train",
      "Hiking through the Lauterbrunnen Valley beneath 72 roaring waterfalls",
      "Savoring traditional Gruyère cheese fondue and Rösti potatoes in a rustic mountain chalet"
    ],
    packingEssentials: [
      "Swiss Travel Pass (digital QR code on mobile for seamless boarding)",
      "High-SPF alpine sunscreen and polarized sunglasses (snow and glacier glare is extreme)",
      "Waterproof breathable shell jacket with wind protection",
      "Refillable thermal water flask"
    ],
    estimatedCost: {
      currency: "USD",
      localCurrency: "CHF",
      totalEstimate: "$950 – $1,450 (CHF 850 – 1,300) for 7 days (mid-range with Swiss Travel Pass)",
      stayPerNight: "$90 – $180 (CHF 80 – 160) for alpine chalet guesthouse or boutique youth hostel",
      foodPerDay: "$35 – $60 (CHF 30 – 55) utilizing local Coop/Migros supermarket picnics and tavern meals",
      localTransport: "Included in 8-day Swiss Travel Pass (~$420 CHF / ~$470 USD)",
      activities: "$40 – $70 (CHF 35 – 65) for cogwheel trains to Gornergrat and Jungfraujoch discounted tickets",
      disclaimer: "Estimated based on average traveler expenses (mid-tier comfort) compiled during 2026 field travel. Never fabricated real-time prices; peak weekend rates and festival holidays may vary."
    },
    itinerary: [
      {
        day: 1,
        title: "Zurich to Lucerne & Lake Steamer Cruise",
        recommendedStay: "Hotel des Alpes Lucerne",
        mealTip: "Traditional veal Geschnetzeltes with crispy Rösti",
        activities: [
          "Arrive in Zurich Airport and activate your Swiss Travel Pass.",
          "Direct 45-minute train into Lucerne; walk across the 14th-century wooden Chapel Bridge (Kapellbrücke).",
          "Board a historic paddle steamer across Lake Lucerne with dramatic views of Mount Pilatus.",
          "Evening walk through the medieval Old Town."
        ]
      },
      {
        day: 2,
        title: "Into the Lauterbrunnen Valley of 72 Waterfalls",
        recommendedStay: "Valley Hostel Lauterbrunnen or Chalet Murren",
        mealTip: "Alps cheese raclette melted over baby potatoes and gherkins",
        activities: [
          "Scenic train via the Brünig Pass to Interlaken Ost, transferring into Lauterbrunnen.",
          "Marvel at Staubbach Falls plunging 300 meters right behind village timber chalets.",
          "Take the cable car up to the car-free clifftop village of Mürren.",
          "Afternoon hike along the Northface Trail with panoramic views of the Eiger, Mönch, and Jungfrau."
        ]
      },
      {
        day: 3,
        title: "Zermatt & The Majestic Matterhorn Reflection",
        recommendedStay: "Zermatt Youth Hostel or Hotel Butterfly",
        mealTip: "Walliser Trockenfleisch (air-dried cured beef) with crusty rye bread",
        activities: [
          "Ride the scenic Matterhorn Gotthard Bahn into car-free Zermatt.",
          "Take the Gornergrat cogwheel train up to 3,089 meters overlooking the Gorner Glacier.",
          "Hike down to Stellisee lake to photograph the crisp, perfect reflection of the Matterhorn in still alpine water.",
          "Stroll down Bahnhofstrasse admiring historic wooden Valais barns resting on flat stone disks (to deter rodents)."
        ]
      }
    ],
    galleryImages: [
      {
        url: "/src/assets/images/cappadocia_turkey_sky_1792879435873.jpg",
        caption: "Dramatic geological vistas and high altitude horizons experienced along global mountain trails"
      }
    ],
    contentSections: [
      {
        id: "swiss-travel-pass-strategy",
        heading: "1. The Swiss Travel Pass: Is It Worth The Investment?",
        paragraphs: [
          "Switzerland has a reputation for high travel costs, but the Swiss Travel Pass is widely regarded as one of the best value tourist passes on earth if planned smartly. It grants unlimited travel on the entire national network of SBB trains, regional buses, lake ferries, and even city trams, along with free entry to over 500 museums.",
          "Crucially, it also gives 50% discounts on mountain railways and cable cars, turning what would be a complex series of expensive point-to-point tickets into a seamless tap-and-ride experience."
        ],
        callout: "Budget Eating Secret: Dining out in Swiss restaurants easily costs 40–60 CHF per meal. You can dramatically reduce costs by grabbing fresh gourmet sandwiches, roasted chickens, and alpine cheeses from Coop Pronto or Migros grocery markets for scenic trail picnics."
      }
    ],
    seo: {
      metaTitle: "Swiss Alps 7-Day Train Itinerary: Zermatt & Scenic Passes | Income Shuvo",
      metaDescription: "Master Swiss alpine travel by train with Income Shuvo. Complete 7-day itinerary covering Zermatt, Matterhorn, Lauterbrunnen, Swiss Travel Pass tips, and budgets.",
      keywords: ["Swiss Alps", "Switzerland by Train", "Zermatt Itinerary", "Matterhorn", "Swiss Travel Pass", "Income Shuvo"]
    }
  }
];

export const SAMPLE_DESTINATIONS: Destination[] = [
  {
    id: "dest-sajek",
    slug: "sajek-valley",
    name: "Sajek Valley",
    country: "Bangladesh",
    region: "Bangladesh",
    style: "Mountains & Clouds",
    coverImage: "/src/assets/images/hero_sajek_bangladesh_1792879435456.jpg",
    bestTimeToVisit: "September to February (Dense clouds & cool breezes)",
    typicalDailyBudget: "$35 – $55 (BDT 4,200 – 6,500) per day",
    highlights: ["Sea of clouds (Meghmala)", "Konglak Para peak", "Chander Gari convoy", "Cliffside bamboo eco-cottages"],
    summary: "Perched 1,800 feet above sea level on the Mizoram border, Sajek is Bangladesh's premier cloud kingdom with jaw-dropping sunrise vistas and indigenous tribal warmth.",
    articleSlug: "sajek-valley-travel-guide"
  },
  {
    id: "dest-coxs-bazar",
    slug: "coxs-bazar",
    name: "Cox's Bazar & Inani",
    country: "Bangladesh",
    region: "Bangladesh",
    style: "Beaches & Islands",
    coverImage: "/src/assets/images/coxs_bazar_beach_1792879435608.jpg",
    bestTimeToVisit: "November to March (Calm seas & pleasant temperatures)",
    typicalDailyBudget: "$40 – $70 (BDT 4,800 – 8,200) per day",
    highlights: ["120km unbroken beach", "Marine Drive highway", "Coral reef flats at Inani", "Artisanal Moon boats"],
    summary: "The longest natural sea beach in the world, combining expansive sandy shores, fresh Bay of Bengal seafood, and the scenic beauty of Marine Drive.",
    articleSlug: "coxs-bazar-inani-beach-guide"
  },
  {
    id: "dest-kyoto",
    slug: "kyoto",
    name: "Kyoto & Uji",
    country: "Japan",
    region: "East Asia",
    style: "Ancient Heritage",
    coverImage: "/src/assets/images/kyoto_japan_autumn_1792879436474.jpg",
    bestTimeToVisit: "Mid-October to Early December (Momiji Autumn Foliage) & April (Sakura)",
    typicalDailyBudget: "$110 – $180 (¥16,500 – 27,000) per day",
    highlights: ["Zen stone gardens", "Kiyomizu-dera & Gion", "Stone-ground Uji matcha", "Historic wooden Machiya"],
    summary: "The cultural soul of Japan, preserving thousands of classical Buddhist temples, serene Zen rock gardens, and traditional tea ceremony rituals.",
    articleSlug: "kyoto-autumn-solitude-guide"
  },
  {
    id: "dest-cappadocia",
    slug: "cappadocia",
    name: "Cappadocia",
    country: "Turkey",
    region: "Middle East",
    style: "Mountains & Clouds",
    coverImage: "/src/assets/images/cappadocia_turkey_sky_1792879435873.jpg",
    bestTimeToVisit: "April to June & September to November (Mild weather, consistent balloon flights)",
    typicalDailyBudget: "$70 – $130 (₺2,400 – 4,400) per day",
    highlights: ["Hot air balloon dawn displays", "Carved volcanic cave hotels", "Derinkuyu underground city", "Red & Rose Valley treks"],
    summary: "A geological wonderland of fairy chimneys, honeycombed volcanic hills, and dawn skies alive with dozens of colorful hot air balloons.",
    articleSlug: "cappadocia-budget-hot-air-balloons"
  },
  {
    id: "dest-sreemangal",
    slug: "sreemangal",
    name: "Sreemangal & Lawachara",
    country: "Bangladesh",
    region: "Bangladesh",
    style: "Rainforest & Tea Gardens",
    coverImage: "/src/assets/images/hero_sajek_bangladesh_1792879435456.jpg",
    bestTimeToVisit: "October to March (Pleasant hiking weather & bird migration)",
    typicalDailyBudget: "$25 – $45 (BDT 3,000 – 5,400) per day",
    highlights: ["Rolling emerald tea estates", "Hoolock Gibbons in Lawachara", "Baikka Beel bird sanctuary", "Khasia tribal villages"],
    summary: "The tranquil tea capital of Bangladesh featuring misty rainforest canopies, rare primate sanctuaries, and endless cycling trails.",
    articleSlug: "sreemangal-tea-gardens-rainforest"
  },
  {
    id: "dest-swiss-alps",
    slug: "swiss-alps",
    name: "Zermatt & Swiss Alps",
    country: "Switzerland",
    region: "Europe",
    style: "Scenic Train Journeys",
    coverImage: "/src/assets/images/cappadocia_turkey_sky_1792879435873.jpg",
    bestTimeToVisit: "June to September (Alpine hiking) or December to April (Snow skiing)",
    typicalDailyBudget: "$140 – $220 (CHF 125 – 195) per day",
    highlights: ["The iconic Matterhorn", "Glacier Express train", "Lauterbrunnen 72 waterfalls", "Alpine cheese fondue"],
    summary: "World-class alpine peaks, car-free mountain villages, and precision cogwheel railways traversing glaciers and crystal-clear lakes.",
    articleSlug: "swiss-alps-scenic-train-itinerary"
  }
];

export const CATEGORIES = [
  { name: "Bangladesh", count: 3, description: "Hidden hill tracts, mangrove jungles, and unending coastlines." },
  { name: "Mountains", count: 2, description: "High-altitude cloud kingdoms, alpine ridges, and hiking trails." },
  { name: "Beaches", count: 1, description: "Turquoise surf, golden sandbars, and coastal fishing culture." },
  { name: "Adventure", count: 3, description: "Rainforest safaris, 4WD convoys, and off-grid exploration." },
  { name: "Culture & Food", count: 2, description: "Ancient heritage, tea masters, and authentic local cuisine." },
  { name: "Budget Travel", count: 3, description: "Practical strategies to explore more while spending responsibly." },
  { name: "International", count: 3, description: "Curated guides to Asia, Europe, and the Middle East." },
  { name: "Travel Tips", count: 4, description: "Packing essentials, gear guides, transit passes, and photography." }
];
