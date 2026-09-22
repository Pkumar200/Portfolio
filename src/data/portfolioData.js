

export const projects = [
  {
    featured: true,
    index: "00",
    tag: "FEATURED FULL STACK COMMERCE PLATFORM",
    badge: "Featured",
    title: "BombayGrocer — Full Stack Commerce Platform",
    desc: "A production-grade e-commerce platform built by scraping 612 products across 63 categories from a live Shopify store using Playwright with retry logic, rate limiting, and crash recovery. Product data flows through a Dagster pipeline into PostgreSQL and Elasticsearch, powering a NextJS 14 storefront with search autocomplete, filtering, and cart persistence.",
    extra: "Dagster pipeline with 4 idempotent assets loading into a normalized, indexed PostgreSQL schema and an Elasticsearch full-text search index. Stripe Connect marketplace payments with programmatic Custom account creation and dynamic revenue sharing (<$50 = 20%, $50–$100 = 15%, >$100 = 10%) via Destination Charges. Infrastructure containerized with Docker Compose (PostgreSQL + Elasticsearch with health checks).",
    tags: ["Next.js 14", "Node.js", "PostgreSQL", "Elasticsearch", "Dagster", "Stripe Connect", "Docker", "Playwright"],
    github: "https://github.com/Pkumar200/afto-commerce",
    image: "https://opengraph.githubassets.com/1/Pkumar200/afto-commerce",
    stats: [
      { value: "612", label: "Products Scraped" },
      { value: "63", label: "Categories" },
      { value: "4", label: "Dagster Assets" }
    ]
  },
  {
    featured: false,
    index: "01",
    badge: "AI Audio",
    title: "Voice Attribute AI",
    desc: "A FastAPI-based AI service that analyzes short audio clips and infers voice attributes such as gender, age bracket, and language, along with confidence scores. Includes audio quality validation, asynchronous processing, and WebSocket-based real-time inference.",
    role: "Built the inference service end-to-end: API design, audio validation, async processing pipeline, and containerized deployment with automated testing.",
    tags: ["Python", "FastAPI", "WebSockets", "Docker", "PyTorch", "SpeechBrain"],
    github: "https://github.com/Pkumar200/Voice-attribute",
    image: "https://opengraph.githubassets.com/1/Pkumar200/Voice-attribute",
    stats: [
      { value: "Real-Time", label: "WebSocket Inference" },
      { value: "pytest", label: "Automated Tests" },
      { value: "Dockerized", label: "Deployment" }
    ]
  },
  {
    featured: false,
    index: "02",
    badge: "Deep Learning",
    title: "Water Resource Detection Using Satellite Images",
    desc: "A deep learning model combining CNN and GCN for hyperspectral image classification to detect water bodies, incorporating NDWI and MNDWI indices to enhance feature extraction and classification accuracy. Published in IJIRT Journal.",
    tags: ["CNN", "GCN", "Python", "Deep Learning"],
    stats: [
      { value: "93%", label: "Accuracy" },
      { value: "IJIRT", label: "Published Journal" },
      { value: "NDWI/MNDWI", label: "Feature Indices" }
    ]
  },
  {
    featured: false,
    index: "03",
    badge: "Machine Learning",
    title: "Stroke Prediction Using Machine Learning",
    desc: "A predictive model that estimates stroke risk from patient health data, using a full ML workflow of preprocessing, feature encoding, scaling, and Random Forest classification. Trained on a Kaggle dataset with a focus on explainable, reproducible results.",
    tags: ["Python", "Scikit-learn", "Random Forest"],
    github: "https://github.com/Pkumar200/Stroke-Prediction-using-ML",
    image: "https://opengraph.githubassets.com/1/Pkumar200/Stroke-Prediction-using-ML",
    stats: [
      { value: "95%", label: "Accuracy" },
      { value: "Kaggle", label: "Dataset" },
      { value: "Random Forest", label: "Model" }
    ]
  },
  {
    featured: false,
    index: "04",
    badge: "Mobile",
    title: "TouristFinder",
    desc: "A React Native (Expo) app that requests location permission, fetches the user's current location, and surfaces the 5 nearest tourist attractions via OpenTripMap — with search-by-city, tap-to-open-in-Maps, and graceful handling of denied/blocked permissions.",
    extra: "Debounced city/place autocomplete backed by OpenStreetMap's Nominatim API, a local photo-caching layer to work around Wikimedia's CDN blocking mobile clients, and a themed category-icon fallback so cards never look broken when a place has no photo.",
    tags: ["React Native", "Expo", "JavaScript", "OpenTripMap API", "Nominatim API"],
    github: "https://github.com/Pkumar200/Tourist-finder",
    image: "https://opengraph.githubassets.com/1/Pkumar200/Tourist-finder",
    stats: [
      { value: "5", label: "Nearby Attractions" },
      { value: "Expo", label: "Cross-Platform" },
      { value: "Cached", label: "Photo Loading" }
    ]
  }
];

export const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "Python", icon: "/icons/Python-Light.svg" },
      { name: "JavaScript", icon: "/icons/JavaScript.svg" },
    ]
  },
  {
    label: "Frontend",
    items: [
      { name: "HTML5", icon: "/icons/HTML.svg" },
      { name: "CSS3", icon: "/icons/CSS.svg" },
      { name: "Next.js 14", icon: "/icons/NextJS-Light.svg" },
      { name: "React", icon: "/icons/React-Light.svg" },
      { name: "Tailwind CSS", icon: "/icons/TailwindCSS-Light.svg" },
    ]
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "/icons/NodeJS-Light.svg" },
      { name: "Express.js", icon: "/icons/ExpressJS-Light.svg" },
      { name: "REST APIs", icon: "/icons/Postman.svg" },
      { name: "FastAPI", icon: "/icons/FastAPI.svg" },
    ]
  },
  {
    label: "SQL & Databases",
    items: [
      { name: "SQL", icon: "/icons/SQLite.svg" },
      { name: "MySQL", icon: "/icons/MySQL-Light.svg" },
      { name: "PostgreSQL", icon: "/icons/PostgreSQL-Light.svg" },
      { name: "Elasticsearch", icon: "/icons/Elasticsearch-Light.svg" },
      { name: "Supabase", icon: "/icons/Supabase-Light.svg" },
    ]
  },
  {
    label: "Data Analysis",
    items: [
      { name: "Pandas", icon: "/icons/Python-Light.svg" },
      { name: "NumPy", icon: "/icons/Python-Light.svg" },
      { name: "Exploratory Data Analysis", icon: "/icons/Anaconda-Light.svg" },
      { name: "Data Cleaning", icon: "/icons/Anaconda-Light.svg" },
      { name: "Data Preprocessing", icon: "/icons/Anaconda-Light.svg" },
      { name: "Statistical Analysis", icon: "/icons/R-Light.svg" },
    ]
  },
  {
    label: "Data Visualization",
    items: [
      { name: "Matplotlib", icon: "/icons/Python-Light.svg" },
      { name: "Seaborn", icon: "/icons/Python-Light.svg" },
      { name: "Power BI", icon: "/icons/Grafana-Light.svg" },
    ]
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "/icons/AWS-Light.svg" },
      { name: "Docker", icon: "/icons/Docker.svg" },
      { name: "CI/CD", icon: "/icons/GithubActions-Light.svg" },
    ]
  },
  {
    label: "Tools",
    items: [
      { name: "Git", icon: "/icons/Git.svg" },
      { name: "GitHub", icon: "/icons/Github-Light.svg" },
      { name: "WhatsApp Business API", icon: "/icons/Gmail-Light.svg" },
      { name: "Claude Code", icon: "/icons/Claude-Light.svg" },
      { name: "Cursor IDE", icon: "/icons/VSCode-Light.svg" },
      { name: "Jupyter Notebook", icon: "/icons/Anaconda-Light.svg" },
    ]
  }
];
