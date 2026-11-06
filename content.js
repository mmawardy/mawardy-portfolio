// All editable site data lives here: contact details, photo, stats and projects.
window.SITE = {
  // Portrait path, e.g. "assets/img/mohamed.png". Empty shows the logo mark.
  photo: "assets/img/mohamed.webp",

  // International format without "+", e.g. "201000000000".
  whatsapp: "",

  socials: [
    { name: "Behance", url: "https://www.behance.net/mohamedalmawar" },
  ],

  // Download and rating numbers come from Google Play (checked Nov 2026).
  stats: [
    { value: 100, suffix: "K+", label: { ar: "تنزيل للعبة واحدة على Google Play", en: "downloads for a single Google Play game" } },
    { value: 2400, suffix: "+", label: { ar: "تقييم من مستخدمين حقيقيين", en: "ratings from real users" } },
    { value: 3, suffix: "", label: { ar: "تطبيقات وألعاب منشورة", en: "published apps and games" } },
    { value: 4, suffix: "", label: { ar: "مواقع شغالة أونلاين", en: "websites live online" } },
    { value: 58, suffix: "", label: { ar: "فيديو في البورتفوليو", en: "videos in this portfolio" } },
    { value: 8, suffix: "", label: { ar: "قطاعات من العقارات للطب", en: "industries, from real estate to healthcare" } },
  ],

  apps: [
    {
      name: "Guess The Football Player",
      kind: { ar: "لعبة كرة قدم", en: "Football quiz game" },
      desc: {
        ar: "لعبة تخمين لاعبي كرة القدم من الصورة، تخطت 100 ألف تنزيل على Google Play.",
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
        ar: "منصة كاملة لبيع وشراء العقارات والعربيات والدهب في مصر، فيها بحث ومحادثات مع البائعين.",
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
        { title: { ar: "إطلاق تطبيق مواردي", en: "Mawardy App Launch" }, topic: "MOTION", video: "assets/video/MAWARDY-Ad-Motion-v5.mp4", poster: "assets/posters/mawardy-app.jpg" },
        { title: { ar: "السوق كله في مكان واحد", en: "The Whole Market, One Place" }, topic: "PROMO", video: "assets/video/MAWARDY-Ad-v8.mp4", poster: "assets/posters/mawardy-asking.jpg" },
        { title: { ar: "السعر قدامك", en: "Clear Prices, Upfront" }, topic: "AD", video: "assets/video/MAWARDY-Ad-Price-Hook-VO.mp4", poster: "assets/posters/mawardy-price.jpg" },
      ],
    },
    {
      title: { ar: "الإعلانات التجارية", en: "Commercial Ads" },
      desc: { ar: "حملات وإعلانات لعلامات تجارية ومنتجات وخدمات.", en: "Campaigns and spots for brands, products and services." },
      items: [
        { title: { ar: "حملة الوتد الجامعية", en: "Al-Watad University Campaign" }, topic: "CAMPAIGN", video: "assets/video/watad-promo.mp4", poster: "assets/posters/watad-promo.jpg" },
        { title: { ar: "خدمات التسويق الرقمي", en: "Digital Marketing Services" }, topic: "AD", video: "assets/video/v01.mp4", poster: "assets/posters/v01.jpg" },
        { title: { ar: "إعلان لعبة خمن اللاعب", en: "Guess The Player Game Ad" }, topic: "APP AD", video: "assets/video/v02.mp4", poster: "assets/posters/v02.jpg" },
        { title: { ar: "Vivo: لحظات يومية", en: "Vivo: Everyday Moments" }, topic: "PRODUCT", video: "assets/video/v13.mp4", poster: "assets/posters/v13.jpg" },
        { title: { ar: "Vivo: يوم عمل", en: "Vivo: On The Go" }, topic: "PRODUCT", video: "assets/video/v14.mp4", poster: "assets/posters/v14.jpg" },
        { title: { ar: "شوريل التصميم الجرافيكي", en: "Graphic Design Showreel" }, topic: "SHOWREEL", video: "assets/video/v10.mp4", poster: "assets/posters/v10.jpg" },
        { title: { ar: "صيانة طنابير السيارات", en: "Car Brake Drums Explained" }, topic: "AUTOMOTIVE", video: "assets/video/v32.mp4", poster: "assets/posters/v32.jpg" },
      ],
    },
    {
      title: { ar: "الرياضة واللياقة", en: "Sports & Fitness" },
      desc: { ar: "ريلز لصالات الجيم والرياضات القتالية والبطولات.", en: "Reels for gyms, combat sports and championships." },
      items: [
        { title: { ar: "ملاكمة الوزن الثقيل", en: "Heavyweight Boxing" }, topic: "MMA", video: "assets/video/v40.mp4", poster: "assets/posters/v40.jpg" },
        { title: { ar: "عقلية المقاتل", en: "The Fighter's Mindset" }, topic: "MMA", video: "assets/video/v53.mp4", poster: "assets/posters/v53.jpg" },
        { title: { ar: "أساسيات الضربات القتالية", en: "Striking Fundamentals" }, topic: "TRAINING", video: "assets/video/v41.mp4", poster: "assets/posters/v41.jpg" },
        { title: { ar: "عالم الرياضات القتالية", en: "Inside Combat Sports" }, topic: "MMA", video: "assets/video/v36.mp4", poster: "assets/posters/v36.jpg" },
        { title: { ar: "الإحماء قبل القتال", en: "Warm-Up Before The Fight" }, topic: "TRAINING", video: "assets/video/v39.mp4", poster: "assets/posters/v39.jpg" },
        { title: { ar: "خطة التمرين الصحيحة", en: "The Right Training Plan" }, topic: "FITNESS", video: "assets/video/v42.mp4", poster: "assets/posters/v42.jpg" },
        { title: { ar: "التمرين والعافية", en: "Training For Wellness" }, topic: "FITNESS", video: "assets/video/v31.mp4", poster: "assets/posters/v31.jpg" },
        { title: { ar: "تمارين السيدات", en: "Women's Fitness Program" }, topic: "FITNESS", video: "assets/video/v43.mp4", poster: "assets/posters/v43.jpg" },
        { title: { ar: "جولة في متجر المكملات", en: "Supplements Store Tour" }, topic: "RETAIL", video: "assets/video/v11.mp4", poster: "assets/posters/v11.jpg" },
        { title: { ar: "بطولة الكاراتيه", en: "Karate Championship" }, topic: "SPORTS", video: "assets/video/v37.mp4", poster: "assets/posters/v37.jpg" },
        { title: { ar: "أبطال الكاراتيه الصغار", en: "Young Karate Champions" }, topic: "SPORTS", video: "assets/video/v45.mp4", poster: "assets/posters/v45.jpg" },
      ],
    },
    {
      title: { ar: "العقارات", en: "Real Estate" },
      desc: { ar: "محتوى للمطورين والوكلاء والمشاريع السكنية.", en: "Content for developers, brokers and residential projects." },
      items: [
        { title: { ar: "الحي اللاتيني، العلمين الجديدة", en: "The Latin District, New Alamein" }, topic: "PROJECT", video: "assets/video/v58.mp4", poster: "assets/posters/v58.jpg" },
        { title: { ar: "مشروع بالم هيلز الجديد", en: "Palm Hills New Launch" }, topic: "PROJECT", video: "assets/video/v28.mp4", poster: "assets/posters/v28.jpg" },
        { title: { ar: "جميلة سيلفر ساند", en: "Jamila Silver Sands" }, topic: "PROJECT", video: "assets/video/v52.mp4", poster: "assets/posters/v52.jpg" },
        { title: { ar: "أفضل عرض عقاري", en: "Top Property Offer" }, topic: "OFFER", video: "assets/video/v26.mp4", poster: "assets/posters/v26.jpg" },
        { title: { ar: "دليل شراء عقار تحت الإنشاء", en: "Off-Plan Buying Guide" }, topic: "GUIDE", video: "assets/video/v27.mp4", poster: "assets/posters/v27.jpg" },
        { title: { ar: "استثمار المستقبل", en: "Investing In The Future" }, topic: "GUIDE", video: "assets/video/v29.mp4", poster: "assets/posters/v29.jpg" },
        { title: { ar: "شراء العقار الذكي", en: "Smart Property Buying" }, topic: "GUIDE", video: "assets/video/v33.mp4", poster: "assets/posters/v33.jpg" },
        { title: { ar: "حكاية سوق العقار", en: "The Property Market Story" }, topic: "STORY", video: "assets/video/v34.mp4", poster: "assets/posters/v34.jpg" },
        { title: { ar: "حقيقة شركات العقارات", en: "The Truth About Developers" }, topic: "STORY", video: "assets/video/v59.mp4", poster: "assets/posters/v59.jpg" },
      ],
    },
    {
      title: { ar: "القطاع الطبي", en: "Healthcare" },
      desc: { ar: "محتوى توعوي واضح ومقنع للأطباء والصيدليات.", en: "Clear, persuasive awareness content for doctors and pharmacies." },
      items: [
        { title: { ar: "تسكين الألم السريع", en: "Fast Pain Relief" }, topic: "HEALTH", video: "assets/video/v56.mp4", poster: "assets/posters/v56.jpg" },
        { title: { ar: "حلول الإقلاع عن التدخين", en: "Quit Smoking Solutions" }, topic: "HEALTH", video: "assets/video/v50.mp4", poster: "assets/posters/v50.jpg" },
        { title: { ar: "علاج رائحة الفم", en: "Fresh Breath Care" }, topic: "HEALTH", video: "assets/video/v55.mp4", poster: "assets/posters/v55.jpg" },
      ],
    },
    {
      title: { ar: "استشارات الأعمال", en: "Business Consulting" },
      desc: { ar: "سلسلة Unity Consultancy عن المبيعات والتسويق.", en: "The Unity Consultancy series on sales and marketing." },
      items: [
        { title: { ar: "توحيد المبيعات والتسويق", en: "Aligning Sales & Marketing" }, topic: "BUSINESS", video: "assets/video/v21.mp4", poster: "assets/posters/v21.jpg" },
        { title: { ar: "التسويق والمبيعات فريق واحد", en: "Marketing & Sales, One Team" }, topic: "BUSINESS", video: "assets/video/v18.mp4", poster: "assets/posters/v18.jpg" },
        { title: { ar: "رحلة العميل", en: "The Customer Journey" }, topic: "BUSINESS", video: "assets/video/v22.mp4", poster: "assets/posters/v22.jpg" },
        { title: { ar: "قوة فريق التسويق", en: "The Power Of Marketing Teams" }, topic: "BUSINESS", video: "assets/video/v19.mp4", poster: "assets/posters/v19.jpg" },
        { title: { ar: "كيف تنجح الشركات", en: "How Companies Win" }, topic: "BUSINESS", video: "assets/video/v24.mp4", poster: "assets/posters/v24.jpg" },
      ],
    },
    {
      title: { ar: "صناعة المحتوى", en: "Content Creators" },
      desc: { ar: "ريلز تعليمية وقصصية لصناع المحتوى والمتخصصين.", en: "Educational and story-led reels for creators and experts." },
      items: [
        { title: { ar: "ليه النت محدود في مصر؟", en: "Why Is Internet Limited In Egypt?" }, topic: "STORY", video: "assets/video/v60.mp4", poster: "assets/posters/v60.jpg" },
        { title: { ar: "حقيقة التستوستيرون", en: "The Testosterone Truth" }, topic: "EXPLAINER", video: "assets/video/v25.mp4", poster: "assets/posters/v25.jpg" },
        { title: { ar: "فن التحدث أمام الجمهور", en: "Public Speaking Mastery" }, topic: "EDUCATION", video: "assets/video/v44.mp4", poster: "assets/posters/v44.jpg" },
        { title: { ar: "إعلانات السوشيال ميديا", en: "Social Media Advertising" }, topic: "MARKETING", video: "assets/video/v51.mp4", poster: "assets/posters/v51.jpg" },
        { title: { ar: "نصائح التسويق الرقمي", en: "Digital Marketing Tips" }, topic: "MARKETING", video: "assets/video/v35.mp4", poster: "assets/posters/v35.jpg" },
        { title: { ar: "أساسيات الأمان الرقمي", en: "Online Security Essentials" }, topic: "TECH", video: "assets/video/v30.mp4", poster: "assets/posters/v30.jpg" },
        { title: { ar: "حكاية فنية", en: "An Arts & Culture Story" }, topic: "STORY", video: "assets/video/v47.mp4", poster: "assets/posters/v47.jpg" },
        { title: { ar: "حكاية من الثقافة الشعبية", en: "A Pop Culture Story" }, topic: "STORY", video: "assets/video/v46.mp4", poster: "assets/posters/v46.jpg" },
        { title: { ar: "حوار مع صانع محتوى", en: "Creator Talk" }, topic: "TALK", video: "assets/video/v38.mp4", poster: "assets/posters/v38.jpg" },
        { title: { ar: "برومو متجر ديكور", en: "Home Decor Store Promo" }, topic: "PROMO", video: "assets/video/v49.mp4", poster: "assets/posters/v49.jpg" },
      ],
    },
    {
      title: { ar: "الأغذية والمشروبات", en: "Food & Beverage" },
      desc: { ar: "إعلانات منتجات وموشن لعلامات الأكل والمشروبات.", en: "Product ads and motion for food and drink brands." },
      items: [
        { title: { ar: "عصائر Vinut", en: "Vinut Juice Range" }, topic: "MOTION", video: "assets/video/v06.mp4", poster: "assets/posters/v06.jpg" },
        { title: { ar: "موشن إعلان عصير", en: "Fruit Juice Motion Ad" }, topic: "MOTION", video: "assets/video/v09.mp4", poster: "assets/posters/v09.jpg" },
        { title: { ar: "جولة في متجر سناكس", en: "Snack Shop Tour" }, topic: "REELS", video: "assets/video/v17.mp4", poster: "assets/posters/v17.jpg" },
      ],
    },
    {
      title: { ar: "الأزياء", en: "Fashion Retail" },
      desc: { ar: "ريلز تعرض المنتجات وتجذب العميل للمتجر.", en: "Reels that show the product and bring customers in." },
      items: [
        { title: { ar: "متجر الملابس الكاجوال", en: "Streetwear Store Reel" }, topic: "RETAIL", video: "assets/video/v04.mp4", poster: "assets/posters/v04.jpg" },
        { title: { ar: "الكوليكشن الجديد", en: "The New Collection" }, topic: "RETAIL", video: "assets/video/v54.mp4", poster: "assets/posters/v54.jpg" },
      ],
    },
    {
      title: { ar: "السفر والسياحة", en: "Travel & Tourism" },
      desc: { ar: "أفلام قصيرة تبيع الوجهة قبل الرحلة.", en: "Short films that sell the destination before the trip." },
      items: [
        { title: { ar: "Travel Positively: البحرين", en: "Travel Positively: Bahrain" }, topic: "TRAVEL", video: "assets/video/v08.mp4", poster: "assets/posters/v08.jpg" },
        { title: { ar: "Travel Positively: رحلة الطبيعة", en: "Travel Positively: Into Nature" }, topic: "TRAVEL", video: "assets/video/v07.mp4", poster: "assets/posters/v07.jpg" },
      ],
    },
    {
      title: { ar: "التعليم", en: "Education" },
      desc: { ar: "إعلانات لحضانات ومدارس وأنشطة الأطفال.", en: "Ads for preschools, schools and kids' activities." },
      items: [
        { title: { ar: "دريم بريسكول: رحلة التعلم", en: "Dream Preschool: Learning Journey" }, topic: "AD", video: "assets/video/v16.mp4", poster: "assets/posters/v16.jpg" },
        { title: { ar: "دريم بريسكول: التسجيل", en: "Dream Preschool: Enrollment" }, topic: "AD", video: "assets/video/v57.mp4", poster: "assets/posters/v57.jpg" },
        { title: { ar: "ورشة الأطفال", en: "Children's Workshop" }, topic: "EVENT", video: "assets/video/v15.mp4", poster: "assets/posters/v15.jpg" },
      ],
    },
  ],
};
