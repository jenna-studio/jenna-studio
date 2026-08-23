export const education = [
  { school: "Kookmin University", program: "Software Engineering", period: "2024 – Present", logo: "/media/kookmin-logo.webp" },
  { school: "University of London, World Campus", program: "Marketing", period: "2022 – 2023", logo: "/media/uol-logo.png" },
  { school: "University of Utah, Asia Campus", program: "Film and Media Arts", period: "2020 – 2021", logo: "/media/uou-logo.png" },
  { school: "Kookmin University", program: "Chinese", period: "2019", logo: "/media/kookmin-logo.webp" },
  { school: "Hanyoung Foreign Language High School", program: "Chinese", period: "2015 – 2018", logo: "/media/hyfl-logo.png" },
];

export const experience = [
  {
    role: "Intern",
    company: "Seoul National University Hospital (SNUH)",
    period: "Sep 2025 – Present",
    location: "Seoul, South Korea",
    logo: "/media/snuh-logo.png",
    bullets: [
      "Lead developer of a medical device usability engineering AI automation platform. (https://glue-snuh.web.app)",
      "[HFES] RAG-Enhanced LLM System with Decision Tree for Medical Device Usability Engineering Process",
    ],
    link: "https://hfeshcs2026.conference-program.com/presentation/?id=POST270&sess=sess106",
  },
  {
    role: "Webmaster",
    company: "삶은여행 (Life is a Journey)",
    period: "Nov 2022 – Aug 2026",
    location: "South Korea · Hybrid",
    logo: "/media/lifejourney-logo.png",
    bullets: [
      "Built a company website with Django and deployed it on AWS Lightsail.",
      "Maintain and iterate on the live website, shipping feature additions and performance improvements on a regular cadence.",
    ],
  },
  {
    role: "Intern",
    company: "Mirinae, Inc.",
    period: "Jul 2024 – Aug 2024",
    location: "Seoul, South Korea · On-site",
    logo: "/media/mirinae-logo.png",
    bullets: [
      "Completed an internship program in the role of Marketing; recognized with a Certificate of Internship.",
      "Performed competitor research and translated findings into actionable feature recommendations through direct collaboration with the senior developer.",
    ],
    certificate: {
      image: "/media/certificates/mirinae-certificate-of-internship.png",
      label: "Certificate of Internship",
      issuer: "Mirinae Technologies, Inc. · 2024",
      alt: "Certificate of Internship awarded to Jinseon Yoo by Mirinae Technologies, Inc.",
    },
  },
];

export const stories = [
  { title: "Creative Beginnings", text: "My journey started with a love for web development. I discovered that it was the perfect blend of creativity and logic, allowing me to bring beautiful designs to life through code. This is where I found my true talent and passion, which became a turning point for me." },
  { title: "Technical Growth", text: "Over the years, I've expanded my expertise beyond web technologies, maintaining an insatiable curiosity for emerging tools, frameworks, and industry best practices. This continuous learning mindset keeps me at the forefront of the rapidly evolving tech landscape." },
  { title: "Current Focus", text: "I focus on pursuing diverse projects both independently and collaboratively. As an undergraduate student at Kookmin University majoring in Software Engineering, I strive to balance theoretical knowledge with practical skills, creating meaningful digital experiences." },
];

export const skillGroups = [
  { title: "Programming", items: [
    { name: "HTML, CSS, React", level: 90 },
    { name: "Java, Python, C++", level: 85 },
    { name: "JavaScript, SQL", level: 95 },
    { name: "Android Studio, XML, Etc.", level: 80 },
  ] },
  { title: "Design & Tools", items: [
    { name: "Adobe PS, AI, PR, AE", level: 85 },
    { name: "Figma, Canva", level: 90 },
    { name: "Final Cut Pro, Motion, Capcut", level: 75 },
    { name: "Fusion, C4D, 3D Printing", level: 95 },
  ] },
  { title: "Development Tools", items: [
    { name: "Git & GitHub, Sourcetree", level: 90 },
    { name: "VS Code, Eclipse, Xcode", level: 80 },
    { name: "AWS, Google Cloud, Firebase", level: 75 },
    { name: "Netlify, GitHub Pages, Railway", level: 70 },
  ] },
];

export const values = [
  { icon: "💯", title: "Attention to Detail", text: "I believe that the smallest details make the biggest difference. Every pixel, every animation, every interaction is carefully crafted to create a cohesive and polished experience. I always try my best to make my work perfect." },
  { icon: "💭", title: "Creative Ideas", text: "I start each project whenever I come up with a creative idea. I turn them into real web apps and share them on GitHub Pages. I love sharing my projects with lots of people and feel a great sense of pride and fulfillment through this process." },
  { icon: "🤝🏻", title: "Collaboration", text: "Great projects are built by great teams. I value open communication, constructive feedback, and collaborative problem-solving. I'm eager to expand my teamwork experience through upcoming collaborative projects." },
];

export const journey = [
  { date: "2025.09 - present", title: "Internship at SNUH", text: "Currently an intern at SNUH Institute of Convergence Medicine with Innovative Technology, contributing to developing cutting-edge AI automation platform development." },
  { date: "2025 - present", title: "Continuous Learning", text: "Learning the expertise of my major is so fun and practical. I'm incredibly excited about everything I'll learn ahead and the amazing opportunities that await me in this field." },
  { date: "2025.03", title: "Changed Major", text: "I changed my major from Chinese Language and Literature to Software Engineering. Currently so happy with my major 😊!" },
  { date: "2024.03", title: "Back to Kookmin University", text: "As the world emerged from the COVID-19 pandemic, I made the pivotal decision to re-enter Kookmin University, this time pursuing what truly ignited my passion and aligned with my newfound sense of purpose." },
  { date: "2023", title: "Turning Point", text: "Started by self-learning HTML & CSS, which sparked my passion for programming. Developed my first website, SeonyWorld." },
  { date: "2019 - 2023", title: "Exploration Period", text: "A period to find my desired university and discover my true career path. Time spent searching for direction and understanding what I truly wanted to pursue." },
];

export type Project = {
  title: string;
  category: "web-app" | "mobile-app" | "tools" | "other";
  description: string;
  tags: string[];
  type: string;
  year: string;
  image: string;
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    title: "GLUE",
    category: "web-app",
    description: "An AI-assisted workspace for medical-device human factors engineering. It brings together use specifications, UI safety characteristics, hazard analysis, use scenarios, and evaluation documentation in an IEC 62366-1-aligned workflow.",
    tags: ["Medical Devices", "IEC 62366-1"], type: "Web Application", year: "2026", image: "/media/glue-screenshot.png",
    links: [{ label: "Visit Site", url: "https://glue-snuh.web.app" }, { label: "Start for Free", url: "https://glue-snuh.web.app/signup.html" }],
  },
  {
    title: "CS UniVerse", category: "web-app",
    description: "An all-in-one workspace for computer science students to code, study, and collaborate. Features Monaco code editor, terminal, calendar integration, assignment tracking, progress analytics, and Baekjoon competitive programming integration.",
    tags: ["Next.js", "React"], type: "Web Application", year: "2026", image: "/media/csuniverse-thumbnail.png",
    links: [{ label: "Visit Site", url: "https://csuniverse.org" }, { label: "Learn More", url: "https://csuniverse.org" }],
  },
  {
    title: "Agent Track Dashboard", category: "tools",
    description: "A comprehensive kanban-based monitoring system for AI agents. Features real-time activity tracking, code change visibility, task lifecycle management, and agent performance insights including token usage and completion metrics.",
    tags: ["TypeScript", "React", "MCP"], type: "MCP Tool", year: "2026", image: "/media/agent-track-dashboard-thumbnail.png",
    links: [{ label: "View Docs", url: "https://github.com/jenna-studio/agent-track-dashboard#readme" }, { label: "Code", url: "https://github.com/jenna-studio/agent-track-dashboard" }],
  },
  {
    title: "Connect Mate", category: "mobile-app",
    description: "A Korean social platform for discovering activity companions. Features map-based matching via Kakao Maps, activity creation across dining, fitness, and hobby categories, real-time group chat, and friend management with mutual ratings.",
    tags: ["Android Studio", "XML", "Java"], type: "Android Application", year: "2025", image: "/media/connectmate-thumbnail.png",
    links: [{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=app.connectmate&hl=en-US&ah=6VRx7YfYYsD3bb5iCsjCRK7JuaM" }, { label: "Code", url: "https://github.com/jenna-studio/ConnectMate" }],
  },
  {
    title: "Photo Album Maker", category: "web-app",
    description: "A web app for creating digital photo albums. Features intelligent photo organization by date, book-style interface, and export options including PDF, JPEG, and interactive HTML albums. 100% client-side processing ensures privacy. Select and view favorite photos separately.",
    tags: ["React", "TypeScript", "Vite"], type: "Web Application", year: "2025", image: "/media/photo-album-maker-thumbnail.png",
    links: [{ label: "Live Demo", url: "https://jenna-studio.github.io/photo-album-maker" }, { label: "Code", url: "https://github.com/jenna-studio/photo-album-maker" }],
  },
  {
    title: "Cotton Candy Dodge", category: "web-app",
    description: "A browser-based arcade survival game where players navigate through falling obstacles while collecting experience points and leveling up. Features dynamic difficulty levels, shield power-ups, sound effects, and a leaderboard system with vibrant pixel art aesthetic.",
    tags: ["HTML5", "CSS3", "JavaScript"], type: "Retro Game", year: "2025", image: "/media/cotton-candy-dodge-thumbnail.png",
    links: [{ label: "Play Game", url: "https://jenna-studio.github.io/cotton-candy-dodge" }, { label: "Code", url: "https://github.com/jenna-studio/cotton-candy-dodge" }],
  },
  {
    title: "Cotton Candy Editor", category: "web-app",
    description: "A web-based code editor built with CodeMirror 6 featuring multiple themes. Supports 12+ languages with smart features like auto-completion, syntax highlighting, code copying, and saving. Easy website embedding. Perfect for quick code testing and sharing.",
    tags: ["JavaScript", "CSS3", "HTML5"], type: "Web Code Editor", year: "2025", image: "/media/cotton-candy-editor-thumbnail.png",
    links: [{ label: "Live Website", url: "https://jenna-studio.github.io/cotton-candy-editor" }, { label: "Code", url: "https://github.com/jenna-studio/cotton-candy-editor" }],
  },
  {
    title: "Terminal Snake Game", category: "other",
    description: "A terminal-based Snake game implemented in C++ using ncurses library. Features stage-based gameplay with 4 unique stages. Includes growth and poison items, teleportation gates, and mission-based progression with scoring and ranking system.",
    tags: ["C++", "ncurses", "Terminal"], type: "Console Game", year: "2025", image: "/media/snake-game-thumbnail.png",
    links: [{ label: "How to Play", url: "https://github.com/jenna-studio/terminal-snake-game#how-to-play" }, { label: "Code", url: "https://github.com/jenna-studio/terminal-snake-game" }],
  },
  {
    title: "Alfred - Color to Hex", category: "other",
    description: "A simple Alfred workflow that allows you to search CSS color names and copy their HEX values with a circular color preview icon. Perfect for designers and developers who need quick access to color codes with visual previews to aid selection. Supports clipboard copying.",
    tags: ["Python", "Alfred", "CSS Colors"], type: "Productivity Tool", year: "2025", image: "/media/color-to-hex-thumbnail.png",
    links: [{ label: "Installation", url: "https://github.com/jenna-studio/alfred-colortohex#installation" }, { label: "Code", url: "https://github.com/jenna-studio/alfred-colortohex" }],
  },
  {
    title: "Monaco Editor Web", category: "web-app",
    description: "A web-based code editor with a beautiful pastel-themed interface. Features 18+ programming languages, syntax highlighting, auto-language detection, code formatting, and auto-complete. Glass-morphism UI with smooth animations for an aesthetic coding experience.",
    tags: ["Code Editor", "JS", "HTML", "CSS"], type: "Web Application", year: "2025", image: "/media/monaco-editor-web-thumbnail.png",
    links: [{ label: "Live Website", url: "https://jenna-studio.github.io/monaco-editor-web" }, { label: "Code", url: "https://github.com/jenna-studio/monaco-editor-web" }],
  },
];

export const featuredGlue = {
  title: "GLUE",
  subtitle: "Guideline-based Usability Engineering",
  description: "GLUE turns the fragmented work of medical-device usability engineering into one connected, evidence-led workflow. From the first device context and use specification through UI safety characteristics, hazards, scenarios, formative and summative evaluation, each step carries its context forward. AI helps teams shape and refine their documents while GLUE keeps the supporting rationale visible, reviewable, and ready to bring together in a final 5.10 usability engineering file and Word deliverable.",
  tags: ["Medical Devices", "IEC 62366-1", "AI-assisted", "Documentation", "Workflow"],
};

export const shortcuts = [
  ["Convert Image Format", "https://www.icloud.com/shortcuts/9ce2d62e06424d0cbd360f6aa45f10cb"],
  ["CSS Gradient", "https://www.icloud.com/shortcuts/b56c2f1cfc384412ac096d556a20b1b8"],
  ["English Dictionary", "https://www.icloud.com/shortcuts/75e2c5ec76f14b15a6913d4931e2049c"],
  ["Extract Text from PDF", "https://www.icloud.com/shortcuts/1076a9c16a584958b29b1e316a16a086"],
  ["Get Current IP Address", "https://www.icloud.com/shortcuts/9bc0a2a810e348cfb2236a07edd5050c"],
  ["Image Edit - Mac OS", "https://www.icloud.com/shortcuts/ccea7234bdd84cd6a6aa0da10ffaa7fe"],
  ["Image Edit - iOS", "https://www.icloud.com/shortcuts/19e91781e68445aa987f5eeaf11b0ae2"],
  ["Korean Grammar", "https://www.icloud.com/shortcuts/0d44636a5f304af2af2b1f4a407bcc7e"],
  ["Open VS Code Workspace", "https://www.icloud.com/shortcuts/a628af99720447abb286d42e8ce81afa"],
  ["PDF to PNG", "https://www.icloud.com/shortcuts/78b718117f1e4ccfae99d0b4fef34f12"],
  ["Rename Photo", "https://www.icloud.com/shortcuts/b9781c063d744e7193b12e01f8ac4546"],
  ["Shorten URL", "https://www.icloud.com/shortcuts/2efa0ce4985c42c6a8ddfa42106178c8"],
  ["Speak Weather - Korean", "https://www.icloud.com/shortcuts/b9ba553040a640019255a1b15e8ad888"],
  ["Split PDF Into PNGs", "https://www.icloud.com/shortcuts/a7a05ceb15414f1c93c55ebc155c1819"],
  ["Summarize PDF", "https://www.icloud.com/shortcuts/7812b16da351473ba2f302f575a83409"],
  ["Wifi Analysis", "https://www.icloud.com/shortcuts/919838c297774aa0b9f56b4b2520d992"],
  ["GitHub Repository", "https://www.icloud.com/shortcuts/8aa09d5017a5465a8700f0d0f2b7fc67"],
] as const;

export const chromeThemes = [
  ["Pink Workspace Theme", "pinkworks-screenshot.png", "https://chromewebstore.google.com/detail/pink-workspace/kaedikmphlfjdjhodnigpmacidjkjlbl"],
  ["Blue Workspace Theme", "blue-workspace-screenshot.png", "https://chromewebstore.google.com/detail/blue-workspace/jmmmdffgaelkkilmpamphmhddgjchkpn"],
  ["Green Workspace Theme", "green-workspace-screenshot.png", "https://chrome.google.com/webstore/detail/ahiamedbidnpddfnehmjnahbjcdjpofl"],
  ["Grey Workspace Theme", "grey-workspace-screenshot.jpg", "https://chromewebstore.google.com/detail/grey-workspace/mbagehcboonlnlnjjlcmhhdbpkaipejm"],
  ["Purple Workspace Theme", "purple-workspace-screenshot.png", "https://chrome.google.com/webstore/detail/mjjclblgefkgngfkaeoegiloamaoobnk"],
  ["Yellow Workspace Theme", "yellow-workspace-screenshot.jpg", "https://chromewebstore.google.com/detail/yellow-workspace/jpafjjakfmejaefokgboiidcmhhfombn"],
  ["Sky with Clouds Theme", "skyclouds-screenshot.jpg", "https://chromewebstore.google.com/detail/sky-with-clouds/hkecnmgmjibfhcohhobhlehkepciddhn"],
  ["Black Pink Inspiration Theme", "blackpink-screenshot.jpg", "https://chromewebstore.google.com/detail/black-pink-inspiration/gaccfmbgljmoglaecfbgdihjmmjolnki"],
  ["Bled Lake Theme", "bledlake-screenshot.jpg", "https://chromewebstore.google.com/detail/bled-lake/adcjnpbgcjeonclmknnbncjkchbndchc"],
  ["Denim Rose Theme", "denimrose-screenshot.jpg", "https://chromewebstore.google.com/detail/denim-rose/gnbamdkobiaciiidhhglbejgoakdgcic"],
  ["Dreamy Pastel Clouds Theme", "dreamy-pastel-clouds-screenshot.png", "https://chromewebstore.google.com/detail/dreamy-pastel-clouds/nncjdihloloicmgnakndpbfmenijnppg"],
  ["Dubrovnik Night Theme", "dubrovniknight-screenshot.jpg", "https://chromewebstore.google.com/detail/dubrovnik-night/bfbafimgbcncoliinlokaphcflkmhhnn"],
  ["Frozen Castle Theme", "frozen-castle-screenshot.png", "https://chromewebstore.google.com/detail/frozen-castle/imnnoglioopghbhcoelbkdgemnneohnn"],
  ["Luminescent Love Theme", "luminescentlove-screenshot.jpg", "https://chromewebstore.google.com/detail/luminescent-love/gipmkpjpjpendaldcmdbpbffecdbjnhi"],
  ["Milky Way Galaxy Theme", "milkyway-galaxy-screenshot.jpg", "https://chromewebstore.google.com/detail/milky-way-galaxy/hnlbcaohoogbfakdnepkcadeagejkhkd"],
  ["North Miracle Theme", "northmiracle-screenshot.jpg", "https://chromewebstore.google.com/detail/north-miracle/fnocimdfbbckhbnejikmilmfhfeeniil"],
  ["Pink Green Theme", "pinkgreen-screenshot.png", "https://chromewebstore.google.com/detail/pink-green/alckjkejfeekolloegjdcgpoicllkhfb"],
  ["Prague Sunset Theme", "prague-screenshot.png", "https://chromewebstore.google.com/detail/prague-sunset/bghpmnhknhagilmjobfcfebfmfnmgdgl"],
  ["Purple Green Gradient Theme", "purple-green-screenshot.jpg", "https://chromewebstore.google.com/detail/purple-green-gradient/bieanadeicepnfhlajaiogbgmmbpfben"],
  ["Pastel Pixel Desktop Theme", "pastel-pixel-desktop-screenshot.png", "https://chromewebstore.google.com/detail/pastel-pixel-desktop/cfdpffdjahhcnimbjoeeogomchmhijbj"],
  ["Sky Dream Theme", "sky-dream-screenshot.png", "https://chromewebstore.google.com/detail/sky-dream/cfmfhpjiankdlcpknbnglfghdieoopfn"],
  ["Mushroom Cottage Meadow Theme", "mushroom-cottage-meadow-screenshot.png", "https://chromewebstore.google.com/detail/mushroom-cottage-meadow/fhkochmhiabfjkjdbbepabgaifkdlcpn"],
] as const;

export type CertificationGroup = {
  id: string;
  issuer: string;
  title: string;
  badge: string;
  badgeAlt: string;
  badgeStyle?: "document";
  description: string;
  items: { name: string; date: string; href: string }[];
};

export const certificationGroups: CertificationGroup[] = [
  {
    id: "aws-certifications",
    issuer: "AWS Training & Certification",
    title: "AWS Certifications",
    badge: "/media/aws-certifications/aws-knowledge-cloud-essentials-training-badge.png",
    badgeAlt: "AWS Knowledge: Cloud Essentials training badge",
    description: "Completion certificates earned through AWS Training & Certification in 2025, working from cloud fundamentals and job roles through the core services (EC2, S3, VPC, IAM, CloudFront) plus billing, cloud acquisition, and generative AI on Amazon Bedrock, finishing with the Cloud Essentials Knowledge Badge readiness path.",
    items: [
      { name: "Cloud Essentials: Knowledge Badge Readiness Path (includes Labs)", date: "2025.12.07", href: "/media/aws-certifications/cloud-essentials-knowledge-badge-readiness-path.png" },
      { name: "Introduction to Amazon CloudFront", date: "2025.12.07", href: "/media/aws-certifications/introduction-to-amazon-cloudfront.png" },
      { name: "Introduction to Amazon Simple Storage Service (S3)", date: "2025.11.19", href: "/media/aws-certifications/introduction-to-amazon-s3.png" },
      { name: "Introduction to AWS Identity and Access Management (IAM)", date: "2025.11.19", href: "/media/aws-certifications/introduction-to-aws-iam.png" },
      { name: "Introduction to Amazon Virtual Private Cloud (VPC)", date: "2025.11.19", href: "/media/aws-certifications/introduction-to-amazon-vpc.png" },
      { name: "AWS Billing and Cost Management", date: "2025.11.04", href: "/media/aws-certifications/aws-billing-and-cost-management.png" },
      { name: "AWS Foundations: Getting Started with the AWS Cloud Essentials", date: "2025.11.04", href: "/media/aws-certifications/aws-foundations-getting-started-with-the-aws-cloud-essentials.png" },
      { name: "Introduction to Amazon EC2", date: "2025.11.04", href: "/media/aws-certifications/introduction-to-amazon-ec2.png" },
      { name: "AWS Cloud Practitioner Essentials", date: "2025.10.26", href: "/media/aws-certifications/aws-cloud-practitioner-essentials.png" },
      { name: "Getting Started with Cloud Acquisition", date: "2025.10.26", href: "/media/aws-certifications/getting-started-with-cloud-acquisition.png" },
      { name: "Amazon Bedrock Getting Started", date: "2025.09.14", href: "/media/aws-certifications/amazon-bedrock-getting-started.png" },
      { name: "AWS Technical Essentials", date: "2025.07.31", href: "/media/aws-certifications/aws-technical-essentials.png" },
      { name: "Job Roles in the Cloud", date: "2025.07.31", href: "/media/aws-certifications/job-roles-in-the-cloud.png" },
    ],
  },
  {
    id: "microsoft-certifications",
    issuer: "Microsoft · Certiport",
    title: "Microsoft Certifications",
    badge: "/media/certificates/MS-AI-900-Certificate.png",
    badgeAlt: "Certiport authenticated digital transcript: Microsoft Azure AI Fundamentals",
    badgeStyle: "document",
    description: "Microsoft Certified Fundamentals credential, verified through a Certiport authenticated digital transcript. The AI-900 exam covers core machine learning concepts and the Azure services behind computer vision, natural language processing, and generative AI workloads.",
    items: [
      { name: "Microsoft Certified: Azure AI Fundamentals (AI-900)", date: "2024.11.19", href: "/media/certificates/MS-AI-900-Certificate.png" },
    ],
  },
];

export const travelMaps = [
  ["map1.JPG", "Mediterranean Cruise Map"], ["map2.jpg", "Northern Europe Cruise Route"],
  ["map3.jpg", "Western Mediterranean Europe Journey"], ["map4.jpg", "Balkan Peninsula Cruise Destination"],
  ["map5.jpg", "Arabian Cruise Destination"], ["map6.jpg", "Western Mediterranean Cruise Destination"],
] as const;

export const travelPosts = [
  { title: "CRUISE D0 · 슬로베니아", url: "https://seonyisland.tistory.com/2", date: "2023-11-10", excerpt: "새벽 5시, 칼바람을 맞으며 공항버스를 탔다. 밤을 샜지만 아직 피곤하진 않다. 슬로베니아로 향하는 여행의 시작.", image: "/media/travel-journal/day-0.jpg" },
  { title: "CRUISE D1 · 류블랴나 & 트리에스테", url: "https://seonyisland.tistory.com/3", date: "2023-11-11", excerpt: "류블랴나 시내 투어를 마치고 잠시 숨 고르는 시간. 호텔 조식이 내가 먹어본 중 거의 최고였다. 맛없는 메뉴가 하나도 없었다.", image: "/media/travel-journal/day-1.jpg" },
  { title: "CRUISE D2 · 스플리트", url: "https://seonyisland.tistory.com/4", date: "2023-11-12", excerpt: "아침 조식 먹고 급하게 커피 한 잔. 평소 아이스만 마시는 내가 여행 내내 따뜻한 커피만. 그래도 얼음컵 받아 에스프레소를 부어 만들어 마셨다.", image: "/media/travel-journal/day-2.jpg" },
  { title: "CRUISE D3 · 코토르", url: "https://seonyisland.tistory.com/5", date: "2023-11-13", excerpt: "아침에 발코니로 나서자마자 깜짝 놀랐다. 구름인 줄 알았던 거대 바위가 마을을 둘러싸고 있었다. 여태까지 본 풍경 중 가장 놀라운 장면.", image: "/media/travel-journal/day-3.jpg" },
  { title: "CRUISE D4 · 카타콜론 & 올림피아", url: "https://seonyisland.tistory.com/6", date: "2023-11-14", excerpt: "오늘은 늦게 일어났다. 선내 햄버거는 의외로 맛있었고, 아침부터 먹는 초코 케이크가 여태 먹은 디저트 중 단연 최고.", image: "/media/travel-journal/day-4.jpg" },
  { title: "CRUISE D5 · 코르푸", url: "https://seonyisland.tistory.com/7", date: "2023-11-15", excerpt: "그리스 코르푸. 2층 시내버스 투어 중이다. 16–21도, 햇살 좋은 날씨. 바닷가에선 정말로 수영하는 사람들도 보였다.", image: "/media/travel-journal/day-5.jpg" },
  { title: "CRUISE D6 · 두브로브닉", url: "https://seonyisland.tistory.com/8", date: "2023-11-16", excerpt: "드디어 크로아티아 두브로브닉 기항지 관광. 엄청 기대했던 곳이라 설레는 마음으로 발을 내디딘 아침.", image: "/media/travel-journal/day-6.jpg" },
  { title: "CRUISE D7 · 알베르벨로", url: "https://seonyisland.tistory.com/9", date: "2023-11-17", excerpt: "다시 이탈리아. 알베르벨로의 스머프 마을로 가는 길. Trulli가 빼곡. 꼬깔콘 같기도 하고, 보면 볼수록 진짜 스머프 마을 같기도 하다.", image: "/media/travel-journal/day-7.jpg" },
  { title: "CRUISE D8 · 블레드", url: "https://seonyisland.tistory.com/10", date: "2023-11-18", excerpt: "마지막 날이다 ㅠㅠ 아침에 짐 정리를 끝내고 평소엔 안 마시는 뜨거운 아메리카노 한 잔. 사람은 정말 적응의 동물이군. 동화 같은 블레드를 향해.", image: "/media/travel-journal/day-8.jpg" },
];
