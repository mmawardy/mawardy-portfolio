// All editable site data lives here: contact details, photo, stats and projects.
// Videos live in the repository but outside the published folder, which keeps deployments small.
const VIDEO_BASE = "https://raw.githubusercontent.com/mmawardy/mawardy-portfolio/main/assets/video/";

window.SITE = {
  // Portrait path, e.g. "assets/img/mohamed.png". Empty shows the logo mark.
  photo: "assets/img/hero-tv.webp",

  // Lit TV screens laid over the photo: image plus left, top, width, height as % of the photo.
  tvScreens: [
    { name: "top", src: "assets/img/tv-top.webp", box: [34.45, 60.606, 25.678, 16.507] },
    { name: "left", src: "assets/img/tv-left.webp", box: [2.632, 75.04, 20.096, 17.145] },
    { name: "bottom", src: "assets/img/tv-bottom.webp", box: [34.928, 79.585, 25.997, 16.108] },
    { name: "right", src: "assets/img/tv-right.webp", box: [75.997, 75.04, 21.292, 17.065] },
  ],

  // International format without "+", e.g. "201000000000".
  whatsapp: "201065295984",

  socials: [
    { name: "Instagram", url: "https://www.instagram.com/justmo222" },
    { name: "Facebook", url: "https://www.facebook.com/mawardy11" },
    { name: "Behance", url: "https://www.behance.net/mohamedalmawar" },
  ],

  // Download and rating numbers come from Google Play (checked Nov 2026).
  stats: [
    { value: 100, suffix: "K+", label: { ar: "تنزيل للعبة واحدة على Google Play", en: "downloads for a single Google Play game" }, short: { ar: "تنزيل للعبة واحدة", en: "game downloads" } },
    { value: 2400, suffix: "+", label: { ar: "تقييم من المستخدمين", en: "user ratings" } },
    { value: 3, suffix: "", label: { ar: "تطبيقات وألعاب منشورة", en: "published apps and games" } },
    { value: 4, suffix: "", label: { ar: "مواقع منشورة", en: "published websites" } },
    { value: 57, suffix: "", label: { ar: "فيديو في البورتفوليو", en: "videos in this portfolio" } },
    { value: 8, suffix: "", label: { ar: "قطاعات من العقارات للطب", en: "industries, from real estate to healthcare" } },
  ],

  apps: [
    {
      name: "Guess The Football Player",
      kind: { ar: "لعبة كرة قدم", en: "Football quiz game" },
      desc: {
        ar: "لعبة لتخمين لاعبي كرة القدم من الصورة، تجاوزت 100 ألف تنزيل على Google Play.",
        en: "A football quiz where you guess the player from the photo, past 100,000 downloads on Google Play.",
      },
      badges: [
        { ar: "+100K تنزيل", en: "100K+ downloads" },
        { ar: "2,427 تقييم", en: "2,427 ratings" },
      ],
      icon: "assets/apps/guess-icon.webp",
      shots: ["assets/apps/guess-1.webp", "assets/apps/guess-3.webp", "assets/apps/guess-4.webp"],
      url: "https://play.google.com/store/apps/details?id=com.midofathyalmawardy.tkhmynlbbnkrlqdm",
    },
    {
      name: "TOT",
      kind: { ar: "لعبة بازل Match-3", en: "Match-3 puzzle game" },
      desc: {
        ar: "لعبة فواكه Match-3 بمراحل وتحديات وكومبوهات ولوحة متصدرين.",
        en: "A fruit Match-3 game with levels, challenges, combos and a leaderboard.",
      },
      badges: [
        { ar: "+1K تنزيل", en: "1K+ downloads" },
        { ar: "★ 4.5 تقييم", en: "★ 4.5 rating" },
      ],
      icon: "assets/apps/tot-icon.webp",
      shots: ["assets/apps/tot-2.webp", "assets/apps/tot-1.webp", "assets/apps/tot-4.webp"],
      url: "https://play.google.com/store/apps/details?id=com.almawardy.tot",
    },
    {
      name: "MAWARDY",
      kind: { ar: "منصة بيع وشراء", en: "Classifieds platform" },
      desc: {
        ar: "منصة متكاملة لبيع وشراء العقارات والسيارات والذهب في مصر، تتضمن البحث والمحادثة مع البائعين.",
        en: "A full platform for buying and selling properties, cars and gold in Egypt, with search and seller chat.",
      },
      badges: [{ ar: "أحدث إطلاق", en: "Latest launch" }],
      icon: "assets/apps/mawardy-icon.webp",
      shots: ["assets/apps/mawardy-4.webp", "assets/apps/mawardy-3.webp", "assets/apps/mawardy-2.webp"],
      url: "https://play.google.com/store/apps/details?id=eg.mawardy.app",
    },
  ],

  sites: [
    {
      name: { ar: "د. فتحي المواردي", en: "Dr. Fathy Almawardy" },
      kind: { ar: "موقع عيادة جلدية مع حجز", en: "Dermatology clinic site with booking" },
      image: "assets/shots/drfathyalmawardy.jpg",
      domain: "drfathyalmawardy.online",
      url: "https://drfathyalmawardy.online",
    },
    {
      name: { ar: "أحمد الجوهري", en: "Ahmed Elgohary" },
      kind: { ar: "بورتفوليو مصمم جرافيك", en: "Graphic designer portfolio" },
      image: "assets/shots/gohary.jpg",
      domain: "gohary.online",
      url: "https://gohary.online",
    },
    {
      name: { ar: "يوسف ناشي", en: "Youssif M. Nashy" },
      kind: { ar: "بورتفوليو تصميم داخلي", en: "Interior design portfolio" },
      image: "assets/shots/nashy.jpg",
      domain: "nashy.art",
      url: "https://www.nashy.art",
    },
    {
      name: { ar: "مواردي", en: "Mawardy" },
      kind: { ar: "موقع منصة بيع وشراء", en: "Classifieds platform site" },
      image: "assets/shots/mawardy.jpg",
      domain: "mawardy.online",
      url: "https://mawardy.online",
    },
  ],

  // Video Editing section: each group is one folder card that opens its videos.
  // The first item supplies the folder cover.
  // `poster` is the still shown in the thumbnail until the video plays.
  videoGroups: [
    {
      title: { ar: "حملة مواردي", en: "Mawardy Campaign" },
      desc: { ar: "المنصة التي تجمع العقارات والسيارات والذهب في مكان واحد.", en: "The platform that brings properties, cars and gold into one place." },
      items: [
        { title: { ar: "إطلاق تطبيق مواردي", en: "Mawardy App Launch" }, topic: "MOTION", video: `${VIDEO_BASE}MAWARDY-Ad-Motion-v5.mp4`, poster: "assets/posters/mawardy-app.jpg" },
        { title: { ar: "السوق كله في مكان واحد", en: "The Whole Market, One Place" }, topic: "PROMO", video: `${VIDEO_BASE}MAWARDY-Ad-v8.mp4`, poster: "assets/posters/mawardy-asking.jpg" },
        { title: { ar: "السعر قدامك", en: "Clear Prices, Upfront" }, topic: "AD", video: `${VIDEO_BASE}MAWARDY-Ad-Price-Hook-VO.mp4`, poster: "assets/posters/mawardy-price.jpg" },
      ],
    },
    {
      title: { ar: "أدوات وتقنية", en: "Tech & Tools" },
      desc: { ar: "ريلز قصيرة بهوية مواردي عن أدوات بتوفر وقتك وفلوسك.", en: "Short Mawardy-branded reels on tools that save you time and money." },
      items: [
        { title: { ar: "أداة الرد التلقائي المجانية", en: "Free Auto-DM Tool" }, topic: "TOOLS", video: `${VIDEO_BASE}mawardy-autodm.mp4`, poster: "assets/posters/mawardy-autodm.jpg" },
        { title: { ar: "ادفع اشتراكك من غير كريديت كارد", en: "Pay For AI Without A Credit Card" }, topic: "FINTECH", video: `${VIDEO_BASE}mawardy-redotpay.mp4`, poster: "assets/posters/mawardy-redotpay.jpg" },
        { title: { ar: "خلّي Claude يكتبلك بوستات لينكد إن", en: "LinkedIn Skills For Claude Code" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-linkedin.mp4`, poster: "assets/posters/mawardy-linkedin.jpg" },
        { title: { ar: "صوتك بالذكاء الاصطناعي", en: "AI Voice With ElevenLabs" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-elevenlabs.mp4`, poster: "assets/posters/mawardy-elevenlabs.jpg" },
        { title: { ar: "كل ملفات المونتاج في اشتراك واحد", en: "Envato Elements For Editors" }, topic: "TOOLS", video: `${VIDEO_BASE}mawardy-envato.mp4`, poster: "assets/posters/mawardy-envato.jpg" },
        { title: { ar: "موقع باسمك في دقايق", en: "Portfolio Website In Minutes" }, topic: "WEB", video: `${VIDEO_BASE}mawardy-hostinger.mp4`, poster: "assets/posters/mawardy-hostinger.jpg" },
        { title: { ar: "فيديو كامل بالذكاء الاصطناعي", en: "AI Video With Revid" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-revid.mp4`, poster: "assets/posters/mawardy-revid.jpg" },
        { title: { ar: "كابشن متحركة في دقيقة", en: "Auto Captions With Submagic" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-submagic.mp4`, poster: "assets/posters/mawardy-submagic.jpg" },
        { title: { ar: "فيديو طويل يبقى ٣٠ ريل", en: "Vizard AI Clips" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-vizard.mp4`, poster: "assets/posters/mawardy-vizard.jpg" },
        { title: { ar: "موقع وإيميلات وكورس في مكان واحد", en: "All In One With Systeme.io" }, topic: "TOOLS", video: `${VIDEO_BASE}mawardy-systeme.mp4`, poster: "assets/posters/mawardy-systeme.jpg" },
        { title: { ar: "كتابة وتصميم وفيديو من مكان واحد", en: "AI Marketing With Simplified" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-simplified.mp4`, poster: "assets/posters/mawardy-simplified.jpg" },
        { title: { ar: "السكريبت يبقى فيديو", en: "Text To Video With Fliki" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-fliki.mp4`, poster: "assets/posters/mawardy-fliki.jpg" },
        { title: { ar: "فيديوهاتك مش بتتشاف؟", en: "YouTube Growth With vidIQ" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-vidiq.mp4`, poster: "assets/posters/mawardy-vidiq.jpg" },
        { title: { ar: "جدول بوستاتك وتابع أرقامك", en: "Scheduling With Metricool" }, topic: "TOOLS", video: `${VIDEO_BASE}mawardy-metricool.mp4`, poster: "assets/posters/mawardy-metricool.jpg" },
        { title: { ar: "الشغل المتكرر يتعمل لوحده", en: "Automation With Make" }, topic: "TOOLS", video: `${VIDEO_BASE}mawardy-make.mp4`, poster: "assets/posters/mawardy-make.jpg" },
        { title: { ar: "ريلز من فيديو طويل", en: "AI Clips With OpusClip" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-opusclip.mp4`, poster: "assets/posters/mawardy-opusclip.jpg" },
        { title: { ar: "قايمة إيميلات بتاعتك إنت", en: "Email List With Kit" }, topic: "TOOLS", video: `${VIDEO_BASE}mawardy-kit.mp4`, poster: "assets/posters/mawardy-kit.jpg" },
        { title: { ar: "عرض تقديمي من جملة واحدة", en: "AI Decks With Gamma" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-gamma.mp4`, poster: "assets/posters/mawardy-gamma.jpg" },
        { title: { ar: "اكتب كلمة واللينك يوصل لوحده", en: "Auto DMs With ManyChat" }, topic: "TOOLS", video: `${VIDEO_BASE}mawardy-manychat.mp4`, poster: "assets/posters/mawardy-manychat.jpg" },
        { title: { ar: "موقع باللي في دماغك من غير كود", en: "No Code Sites With Webflow" }, topic: "TOOLS", video: `${VIDEO_BASE}mawardy-webflow.mp4`, poster: "assets/posters/mawardy-webflow.jpg" },
        { title: { ar: "تصاميم إعلانك في ثواني", en: "AI Ad Design With AdCreative.ai" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-adcreative.mp4`, poster: "assets/posters/mawardy-adcreative.jpg" },
        { title: { ar: "سينما من غير كاميرا", en: "Cinematic AI Video With Higgsfield" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-higgsfield.mp4`, poster: "assets/posters/mawardy-higgsfield.jpg" },
        { title: { ar: "ملخص الميتنج جاهز لوحده", en: "AI Meeting Notes With Fireflies" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-fireflies.mp4`, poster: "assets/posters/mawardy-fireflies.jpg" },
        { title: { ar: "مقالك يطلع أول نتيجة", en: "SEO Articles With Frase" }, topic: "TOOLS", video: `${VIDEO_BASE}mawardy-frase.mp4`, poster: "assets/posters/mawardy-frase.jpg" },
        { title: { ar: "محتوى جاهز في ثواني", en: "AI Writing With Rytr" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-rytr.mp4`, poster: "assets/posters/mawardy-rytr.jpg" },
        { title: { ar: "اكشف الكتابة بالذكاء الاصطناعي", en: "AI Content Check With Originality.ai" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-originality.mp4`, poster: "assets/posters/mawardy-originality.jpg" },
        { title: { ar: "بوستات لينكدإن بالذكاء الاصطناعي", en: "LinkedIn Growth With Taplio" }, topic: "TOOLS", video: `${VIDEO_BASE}mawardy-taplio.mp4`, poster: "assets/posters/mawardy-taplio.jpg" },
        { title: { ar: "بوت يرد على عملاءك", en: "AI Support Agent With Quickchat" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-quickchat.mp4`, poster: "assets/posters/mawardy-quickchat.jpg" },
        { title: { ar: "شات بوت من معلوماتك", en: "Your Own Chatbot With CustomGPT.ai" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-customgpt.mp4`, poster: "assets/posters/mawardy-customgpt.jpg" },
        { title: { ar: "أفكار وفيديو من غير وشك", en: "Faceless Videos With Syllaby" }, topic: "AI VIDEO", video: `${VIDEO_BASE}mawardy-syllaby.mp4`, poster: "assets/posters/mawardy-syllaby.jpg" },
        { title: { ar: "جملة تبقى فيديو كامل", en: "Text To Video With Zebracat" }, topic: "AI VIDEO", video: `${VIDEO_BASE}mawardy-zebracat.mp4`, poster: "assets/posters/mawardy-zebracat.jpg" },
        { title: { ar: "كلام طبيعي زي كلامك", en: "Human-Sounding Text With Undetectable AI" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-undetectable.mp4`, poster: "assets/posters/mawardy-undetectable.jpg" },
        { title: { ar: "بحث بمصادر حقيقية", en: "Cited AI Research With AI-Writer" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-aiwriter.mp4`, poster: "assets/posters/mawardy-aiwriter.jpg" },
        { title: { ar: "صور منتجات وإعلانات", en: "AI Product Photos With Phot.AI" }, topic: "AI DESIGN", video: `${VIDEO_BASE}mawardy-photai.mp4`, poster: "assets/posters/mawardy-photai.jpg" },
        { title: { ar: "رسالة لكل عميل", en: "Personalized Outreach With RepliQ" }, topic: "TOOLS", video: `${VIDEO_BASE}mawardy-repliq.mp4`, poster: "assets/posters/mawardy-repliq.jpg" },
        { title: { ar: "موقع وتطبيق بالكلام", en: "Apps From A Prompt With Kleap" }, topic: "NO-CODE", video: `${VIDEO_BASE}mawardy-kleap.mp4`, poster: "assets/posters/mawardy-kleap.jpg" },
        { title: { ar: "شورتس من غير تصوير", en: "Daily Shorts With Short AI" }, topic: "AI VIDEO", video: `${VIDEO_BASE}mawardy-shortai.mp4`, poster: "assets/posters/mawardy-shortai.jpg" },
        { title: { ar: "مراجع بحثك حقيقية", en: "Real Citations With Koke AI" }, topic: "AI TOOLS", video: `${VIDEO_BASE}mawardy-koke.mp4`, poster: "assets/posters/mawardy-koke.jpg" },
        { title: { ar: "مانجا من غير رسم", en: "AI Manga Maker With Anifusion" }, topic: "AI ART", video: `${VIDEO_BASE}mawardy-anifusion.mp4`, poster: "assets/posters/mawardy-anifusion.jpg" },
      ],
    },
    {
      title: { ar: "الإعلانات التجارية", en: "Commercial Ads" },
      desc: { ar: "حملات وإعلانات لعلامات تجارية ومنتجات وخدمات.", en: "Campaigns and spots for brands, products and services." },
      items: [
        { title: { ar: "حملة الوتد الجامعية", en: "Al-Watad University Campaign" }, topic: "CAMPAIGN", video: `${VIDEO_BASE}watad-promo.mp4`, poster: "assets/posters/watad-promo.jpg" },
        { title: { ar: "خدمات التسويق الرقمي", en: "Digital Marketing Services" }, topic: "AD", video: `${VIDEO_BASE}v01.mp4`, poster: "assets/posters/v01.jpg" },
        { title: { ar: "إعلان لعبة خمن اللاعب", en: "Guess The Player Game Ad" }, topic: "APP AD", video: `${VIDEO_BASE}v02.mp4`, poster: "assets/posters/v02.jpg" },
        { title: { ar: "Vivo: لحظات يومية", en: "Vivo: Everyday Moments" }, topic: "PRODUCT", video: `${VIDEO_BASE}v13.mp4`, poster: "assets/posters/v13.jpg" },
        { title: { ar: "Vivo: يوم عمل", en: "Vivo: On The Go" }, topic: "PRODUCT", video: `${VIDEO_BASE}v14.mp4`, poster: "assets/posters/v14.jpg" },
        { title: { ar: "صيانة طنابير السيارات", en: "Car Brake Drums Explained" }, topic: "AUTOMOTIVE", video: `${VIDEO_BASE}v32.mp4`, poster: "assets/posters/v32.jpg" },
      ],
    },
    {
      title: { ar: "الرياضة واللياقة", en: "Sports & Fitness" },
      desc: { ar: "ريلز لصالات الجيم والرياضات القتالية والبطولات.", en: "Reels for gyms, combat sports and championships." },
      items: [
        { title: { ar: "ملاكمة الوزن الثقيل", en: "Heavyweight Boxing" }, topic: "MMA", video: `${VIDEO_BASE}v40.mp4`, poster: "assets/posters/v40.jpg" },
        { title: { ar: "عقلية المقاتل", en: "The Fighter's Mindset" }, topic: "MMA", video: `${VIDEO_BASE}v53.mp4`, poster: "assets/posters/v53.jpg" },
        { title: { ar: "أساسيات الضربات القتالية", en: "Striking Fundamentals" }, topic: "TRAINING", video: `${VIDEO_BASE}v41.mp4`, poster: "assets/posters/v41.jpg" },
        { title: { ar: "عالم الرياضات القتالية", en: "Inside Combat Sports" }, topic: "MMA", video: `${VIDEO_BASE}v36.mp4`, poster: "assets/posters/v36.jpg" },
        { title: { ar: "الإحماء قبل القتال", en: "Warm-Up Before The Fight" }, topic: "TRAINING", video: `${VIDEO_BASE}v39.mp4`, poster: "assets/posters/v39.jpg" },
        { title: { ar: "خطة التمرين الصحيحة", en: "The Right Training Plan" }, topic: "FITNESS", video: `${VIDEO_BASE}v42.mp4`, poster: "assets/posters/v42.jpg" },
        { title: { ar: "التمرين والعافية", en: "Training For Wellness" }, topic: "FITNESS", video: `${VIDEO_BASE}v31.mp4`, poster: "assets/posters/v31.jpg" },
        { title: { ar: "تمارين السيدات", en: "Women's Fitness Program" }, topic: "FITNESS", video: `${VIDEO_BASE}v43.mp4`, poster: "assets/posters/v43.jpg" },
        { title: { ar: "جولة في متجر المكملات", en: "Supplements Store Tour" }, topic: "RETAIL", video: `${VIDEO_BASE}v11.mp4`, poster: "assets/posters/v11.jpg" },
        { title: { ar: "بطولة الكاراتيه", en: "Karate Championship" }, topic: "SPORTS", video: `${VIDEO_BASE}v37.mp4`, poster: "assets/posters/v37.jpg" },
        { title: { ar: "أبطال الكاراتيه الصغار", en: "Young Karate Champions" }, topic: "SPORTS", video: `${VIDEO_BASE}v45.mp4`, poster: "assets/posters/v45.jpg" },
      ],
    },
    {
      title: { ar: "العقارات", en: "Real Estate" },
      desc: { ar: "محتوى للمطورين والوكلاء والمشاريع السكنية.", en: "Content for developers, brokers and residential projects." },
      items: [
        { title: { ar: "الحي اللاتيني، العلمين الجديدة", en: "The Latin District, New Alamein" }, topic: "PROJECT", video: `${VIDEO_BASE}v58.mp4`, poster: "assets/posters/v58.jpg" },
        { title: { ar: "مشروع بالم هيلز الجديد", en: "Palm Hills New Launch" }, topic: "PROJECT", video: `${VIDEO_BASE}v28.mp4`, poster: "assets/posters/v28.jpg" },
        { title: { ar: "جميلة سيلفر ساند", en: "Jamila Silver Sands" }, topic: "PROJECT", video: `${VIDEO_BASE}v52.mp4`, poster: "assets/posters/v52.jpg" },
        { title: { ar: "أفضل عرض عقاري", en: "Top Property Offer" }, topic: "OFFER", video: `${VIDEO_BASE}v26.mp4`, poster: "assets/posters/v26.jpg" },
        { title: { ar: "دليل شراء عقار تحت الإنشاء", en: "Off-Plan Buying Guide" }, topic: "GUIDE", video: `${VIDEO_BASE}v27.mp4`, poster: "assets/posters/v27.jpg" },
        { title: { ar: "استثمار المستقبل", en: "Investing In The Future" }, topic: "GUIDE", video: `${VIDEO_BASE}v29.mp4`, poster: "assets/posters/v29.jpg" },
        { title: { ar: "شراء العقار الذكي", en: "Smart Property Buying" }, topic: "GUIDE", video: `${VIDEO_BASE}v33.mp4`, poster: "assets/posters/v33.jpg" },
        { title: { ar: "حكاية سوق العقار", en: "The Property Market Story" }, topic: "STORY", video: `${VIDEO_BASE}v34.mp4`, poster: "assets/posters/v34.jpg" },
        { title: { ar: "حقيقة شركات العقارات", en: "The Truth About Developers" }, topic: "STORY", video: `${VIDEO_BASE}v59.mp4`, poster: "assets/posters/v59.jpg" },
      ],
    },
    {
      title: { ar: "القطاع الطبي", en: "Healthcare" },
      desc: { ar: "محتوى توعوي واضح ومقنع للأطباء والصيدليات.", en: "Clear, persuasive awareness content for doctors and pharmacies." },
      items: [
        { title: { ar: "تسكين الألم السريع", en: "Fast Pain Relief" }, topic: "HEALTH", video: `${VIDEO_BASE}v56.mp4`, poster: "assets/posters/v56.jpg" },
        { title: { ar: "حلول الإقلاع عن التدخين", en: "Quit Smoking Solutions" }, topic: "HEALTH", video: `${VIDEO_BASE}v50.mp4`, poster: "assets/posters/v50.jpg" },
        { title: { ar: "علاج رائحة الفم", en: "Fresh Breath Care" }, topic: "HEALTH", video: `${VIDEO_BASE}v55.mp4`, poster: "assets/posters/v55.jpg" },
      ],
    },
    {
      title: { ar: "استشارات الأعمال", en: "Business Consulting" },
      desc: { ar: "سلسلة Unity Consultancy عن المبيعات والتسويق.", en: "The Unity Consultancy series on sales and marketing." },
      items: [
        { title: { ar: "توحيد المبيعات والتسويق", en: "Aligning Sales & Marketing" }, topic: "BUSINESS", video: `${VIDEO_BASE}v21.mp4`, poster: "assets/posters/v21.jpg" },
        { title: { ar: "التسويق والمبيعات فريق واحد", en: "Marketing & Sales, One Team" }, topic: "BUSINESS", video: `${VIDEO_BASE}v18.mp4`, poster: "assets/posters/v18.jpg" },
        { title: { ar: "رحلة العميل", en: "The Customer Journey" }, topic: "BUSINESS", video: `${VIDEO_BASE}v22.mp4`, poster: "assets/posters/v22.jpg" },
        { title: { ar: "قوة فريق التسويق", en: "The Power Of Marketing Teams" }, topic: "BUSINESS", video: `${VIDEO_BASE}v19.mp4`, poster: "assets/posters/v19.jpg" },
        { title: { ar: "كيف تنجح الشركات", en: "How Companies Win" }, topic: "BUSINESS", video: `${VIDEO_BASE}v24.mp4`, poster: "assets/posters/v24.jpg" },
      ],
    },
    {
      title: { ar: "صناعة المحتوى", en: "Content Creators" },
      desc: { ar: "ريلز تعليمية وقصصية لصناع المحتوى والمتخصصين.", en: "Educational and story-led reels for creators and experts." },
      items: [
        { title: { ar: "ليه النت محدود في مصر؟", en: "Why Is Internet Limited In Egypt?" }, topic: "STORY", video: `${VIDEO_BASE}v60.mp4`, poster: "assets/posters/v60.jpg" },
        { title: { ar: "حقيقة التستوستيرون", en: "The Testosterone Truth" }, topic: "EXPLAINER", video: `${VIDEO_BASE}v25.mp4`, poster: "assets/posters/v25.jpg" },
        { title: { ar: "فن التحدث أمام الجمهور", en: "Public Speaking Mastery" }, topic: "EDUCATION", video: `${VIDEO_BASE}v44.mp4`, poster: "assets/posters/v44.jpg" },
        { title: { ar: "إعلانات السوشيال ميديا", en: "Social Media Advertising" }, topic: "MARKETING", video: `${VIDEO_BASE}v51.mp4`, poster: "assets/posters/v51.jpg" },
        { title: { ar: "نصائح التسويق الرقمي", en: "Digital Marketing Tips" }, topic: "MARKETING", video: `${VIDEO_BASE}v35.mp4`, poster: "assets/posters/v35.jpg" },
        { title: { ar: "حكاية فنية", en: "An Arts & Culture Story" }, topic: "STORY", video: `${VIDEO_BASE}v47.mp4`, poster: "assets/posters/v47.jpg" },
        { title: { ar: "حكاية من الثقافة الشعبية", en: "A Pop Culture Story" }, topic: "STORY", video: `${VIDEO_BASE}v46.mp4`, poster: "assets/posters/v46.jpg" },
        { title: { ar: "حوار مع صانع محتوى", en: "Creator Talk" }, topic: "TALK", video: `${VIDEO_BASE}v38.mp4`, poster: "assets/posters/v38.jpg" },
      ],
    },
    {
      title: { ar: "الأغذية والمشروبات", en: "Food & Beverage" },
      desc: { ar: "إعلانات منتجات وموشن لعلامات الأكل والمشروبات.", en: "Product ads and motion for food and drink brands." },
      items: [
        { title: { ar: "عصائر Vinut", en: "Vinut Juice Range" }, topic: "MOTION", video: `${VIDEO_BASE}v06.mp4`, poster: "assets/posters/v06.jpg" },
        { title: { ar: "موشن إعلان عصير", en: "Fruit Juice Motion Ad" }, topic: "MOTION", video: `${VIDEO_BASE}v09.mp4`, poster: "assets/posters/v09.jpg" },
        { title: { ar: "جولة في متجر سناكس", en: "Snack Shop Tour" }, topic: "REELS", video: `${VIDEO_BASE}v17.mp4`, poster: "assets/posters/v17.jpg" },
      ],
    },
    {
      title: { ar: "الأزياء", en: "Fashion Retail" },
      desc: { ar: "ريلز تعرض المنتجات وتجذب العميل للمتجر.", en: "Reels that show the product and bring customers in." },
      items: [
        { title: { ar: "متجر الملابس الكاجوال", en: "Streetwear Store Reel" }, topic: "RETAIL", video: `${VIDEO_BASE}v04.mp4`, poster: "assets/posters/v04.jpg" },
        { title: { ar: "الكوليكشن الجديد", en: "The New Collection" }, topic: "RETAIL", video: `${VIDEO_BASE}v54.mp4`, poster: "assets/posters/v54.jpg" },
      ],
    },
    {
      title: { ar: "السفر والسياحة", en: "Travel & Tourism" },
      desc: { ar: "أفلام قصيرة تبيع الوجهة قبل الرحلة.", en: "Short films that sell the destination before the trip." },
      items: [
        { title: { ar: "Travel Positively: البحرين", en: "Travel Positively: Bahrain" }, topic: "TRAVEL", video: `${VIDEO_BASE}v08.mp4`, poster: "assets/posters/v08.jpg" },
        { title: { ar: "Travel Positively: رحلة الطبيعة", en: "Travel Positively: Into Nature" }, topic: "TRAVEL", video: `${VIDEO_BASE}v07.mp4`, poster: "assets/posters/v07.jpg" },
      ],
    },
    {
      title: { ar: "التعليم", en: "Education" },
      desc: { ar: "إعلانات لحضانات ومدارس وأنشطة الأطفال.", en: "Ads for preschools, schools and kids' activities." },
      items: [
        { title: { ar: "دريم بريسكول: رحلة التعلم", en: "Dream Preschool: Learning Journey" }, topic: "AD", video: `${VIDEO_BASE}v16.mp4`, poster: "assets/posters/v16.jpg" },
        { title: { ar: "دريم بريسكول: التسجيل", en: "Dream Preschool: Enrollment" }, topic: "AD", video: `${VIDEO_BASE}v57.mp4`, poster: "assets/posters/v57.jpg" },
        { title: { ar: "ورشة الأطفال", en: "Children's Workshop" }, topic: "EVENT", video: `${VIDEO_BASE}v15.mp4`, poster: "assets/posters/v15.jpg" },
      ],
    },
  ],
};
