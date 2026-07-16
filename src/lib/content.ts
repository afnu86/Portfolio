export const profile = {
  name: 'Afifah Nuha',
  role: 'Frontend Developer',
  eyebrow: 'B.Tech Information Technology · 2023 - 2027',
  tagline: 'Responsive web experiences, thoughtfully built.',
  summary: 'Building responsive web applications and solving real-world problems.',
  location: 'Erode, Tamil Nadu',
  email: 'afnuahamed723@gmail.com',
  phone: '+91 80728 37428',
  phoneHref: 'tel:+918072837428',
  linkedin: 'https://www.linkedin.com/in/afifah-nuha-i-0772022a4',
  leetcode: 'https://leetcode.com/u/afifahnuha_003/',
} as const;

export const skills = {
  Languages: ['Java', 'Python', 'C'],
  Frontend: ['HTML', 'CSS', 'JavaScript'],
  Concepts: ['DSA', 'OOP'],
  Database: ['SQL', 'MySQL'],
  Tools: ['Git', 'GitHub', 'Power BI', 'Figma'],
} as const;

export const strengths = ['Problem Solving', 'Communication', 'Teamwork', 'Leadership', 'Adaptability', 'Time Management'] as const;

export const projects = [
  {
    number: '01',
    title: 'AI StudyMate Pro',
    description: 'Developed an AI-powered learning platform using the Google Gemini API.',
    highlight: 'Dashboard, history management, and PDF generation for study material.',
    tech: 'HTML · CSS · JavaScript · Python · Google Gemini API',
  },
  {
    number: '02',
    title: 'IoT Smart Food Spoilage Detecting Gloves',
    description: 'Built an IoT glove to detect food spoilage using sensors.',
    highlight: 'Generated real-time alerts to improve food safety.',
    tech: 'IoT · Embedded Systems',
  },
  {
    number: '03',
    title: 'Crime Hotspot Detection',
    description: 'Perform exploratory data analysis to identify high crime regions and emerging crime rates.',
    highlight: 'Exploratory data analysis and visual pattern interpretation.',
    tech: 'Python · Pandas · Matplotlib · Seaborn',
  },
] as const;

export const experience = [
  {
    dates: 'June 2025',
    role: 'Software Development Intern',
    org: 'Ero Skillup Academy',
    points: [
      'Developed responsive web pages using HTML, CSS, and JavaScript.',
      'Collaborated on UI development and application testing to enhance user experience.',
    ],
  },
  {
    dates: 'Dec 2025 - Jan 2026',
    role: 'Deep Learning Intern',
    org: 'Kio Tech',
    points: [
      'Built and trained basic deep learning models using Python.',
      'Applied machine learning techniques for data preprocessing and model evaluation.',
    ],
  },
] as const;

export const education = {
  degree: 'Bachelor of Technology (Information Technology)',
  institution: 'Nandha Engineering College, Erode',
  meta: '2023 - 2027',
} as const;

export const certificates = [
  { name: 'Programming Fundamentals using Python - Part 1', issuer: 'Infosys Springboard', date: 'June 2024' },
  { name: 'Arduino UNO Basics and Beyond Workshop', issuer: 'Indian InfoTech Research & Training Center', date: 'Sept 2025' },
] as const;
