// =====================================================================
// Central content for the Positive Alignment @ NeurIPS 2026 website.
// Edit the values here to update the site; pages read from this file.
// =====================================================================

export const workshop = {
  shortName: 'PA @ NeurIPS 2026',
  title:
    'Positive Alignment: Evaluating and Building Models That Help Humans Flourish',
  status: 'Active Proposal',
  // Placeholders — update once NeurIPS 2026 confirms the program.
  location: 'NeurIPS 2026 — Location TBA',
  date: 'December 2026 — Date & Time TBA',
  tagline:
    'A NeurIPS workshop on positive alignment — evaluating and building language models that help people through life’s hardest moments, support long-term goals, and strengthen rather than erode human agency.',
  openReviewUrl: '#', // Not live yet.
  abstract: [
    'Language model alignment has focused largely on safety — teaching models to avoid harmful outputs. Positive alignment asks a complementary question: can models genuinely help when people face their most consequential moments (navigating conflict, processing grief, making major decisions), pursue long-term goals, and do so while retaining their own agency and judgment? Today’s models often fall short — retreating into refusals or platitudes, optimizing for a single helpful-sounding turn, and fostering dependence rather than strengthening users’ own judgment.',
    'The field lacks shared language and evaluation methods for this work. This workshop brings together researchers across AI alignment and adjacent fields — positive psychology, social work, philosophy of wellbeing, and HCI — to build a foundation for evaluating and building models that help humans flourish.',
  ],
  pillars: [
    {
      title: 'Helping in consequential moments',
      body:
        'Being genuinely useful when people face the hardest situations in their lives: e.g., navigating conflict, processing grief, making major decisions, or working through moral dilemmas with no easy answer.',
    },
    {
      title: 'Supporting long-term goals',
      body:
        'Optimizing for a person’s longer trajectory (e.g., building lasting habits, learning a difficult skill over months, steadily working toward a degree or career) instead of a single helpful-sounding turn taken in isolation.',
    },
    {
      title: 'Preserving agency and independence',
      body:
        'Strengthening users’ own judgment and skills and knowing when to point people toward other humans, rather than fostering dependence or flattering users at the expense of their autonomy.',
    },
  ],
};

export interface Person {
  name: string;
  affiliation: string;
  role?: string;
  bio?: string;
  confirmed?: boolean;
  photo?: string;
}

// Invited speakers — all invitations are currently tentative.
export const keynoteSpeakers: Person[] = [
  {
    name: 'Yejin Choi',
    affiliation: 'University of Washington (Allen School)',
    confirmed: false,
    photo: '/images/people/yejin-choi.jpg',
  },
  {
    name: 'Sam Bowman',
    affiliation: 'Anthropic (on leave from NYU)',
    confirmed: false,
    photo: '/images/people/sam-bowman.jpg',
  },
  {
    name: 'Noah D. Goodman',
    affiliation: 'Stanford University (Psychology & CS)',
    confirmed: false,
    photo: '/images/people/noah-goodman.jpg',
  },
  {
    name: 'Sydney Levine',
    affiliation: 'NYU & Google DeepMind',
    confirmed: false,
    photo: '/images/people/sydney-levine.jpg',
  },
  {
    name: 'Boaz Barak',
    affiliation: 'Harvard University & OpenAI',
    confirmed: false,
    photo: '/images/people/boaz-barak.jpg',
  },
  {
    name: 'Maarten Sap',
    affiliation: 'Carnegie Mellon University (LTI)',
    confirmed: false,
    photo: '/images/people/maarten-sap.jpg',
  },
];

export const organizers: Person[] = [
  {
    name: 'Maty Bohacek',
    affiliation: 'Stanford University',
    photo: '/images/people/maty-bohacek.jpg',
    bio: 'Student researcher at Stanford University and previously Google DeepMind, focused on building AI systems that are trustworthy, interpretable, and beneficial. Recognized on Forbes 30 Under 30 and co-organizer of the ICCV 2025 and CVPR 2026 workshops on Authenticity & Provenance in the Age of Generative AI.',
  },
  {
    name: 'Max Lamparth',
    affiliation: 'Stanford University',
    photo: '/images/people/max-lamparth.webp',
    bio: 'Research fellow at Stanford working with the Hoover Institution, the Stanford Intelligent Systems Laboratory, and the Stanford Center for AI Safety. His research focuses on robust abstractions of human preferences via mechanistic interpretability, reward modeling, and robust evaluations. PhD from the Technical University of Munich.',
  },
  {
    name: 'Arun Rao',
    affiliation: 'Meta Superintelligence Lab',
    photo: '/images/people/arun-rao.jpg',
    bio: 'Builds advanced agent systems at Meta and set up the evaluations organization in what is now the Meta Superintelligence Lab. Adjunct professor at UCLA Anderson; previously product leadership at Meta and Amazon and co-founder & CEO of Starbutter AI.',
  },
  {
    name: 'Roma Patel',
    affiliation: 'Google DeepMind',
    photo: '/images/people/roma-patel.jpg',
    bio: 'Senior researcher at Google DeepMind working on understanding and improving the capabilities of language models, with a focus on safety. Her work combines NLP and reinforcement learning with linguistics, philosophy, and cognitive science. PhD from Brown University.',
  },
  {
    name: 'Matija Franklin',
    affiliation: 'Google DeepMind',
    photo: '/images/people/matija-franklin.jpg',
    bio: 'Research Scientist on the Humanity, Ethics and Alignment Research Team (HEART) at Google DeepMind. His research focuses on AI alignment and safety, with particular attention to AI manipulation and influence. PhD from University College London.',
  },
  {
    name: 'Chloé Bakalar',
    affiliation: 'OpenAI & UCL',
    photo: '/images/people/chloe-bakalar.webp',
    bio: 'AI Ethics Lead and Member of Technical Staff at OpenAI, focused on responsible, ethics-informed AI development and deployment; previously Chief Ethicist at Meta. Her work bridges philosophy and practice across governance and decision-support, and she is a Senior Research Associate at UCL.',
  },
];

// Program Committee is being assembled; names listed once invitations confirm.
export const programCommittee = {
  description:
    'We are assembling a Program Committee spanning machine learning and adjacent fields (including positive psychology, social work, philosophy of wellbeing, and human–computer interaction) to review submissions through an anonymized, double-blind process.',
  note: 'The named Program Committee will be listed here once invitations are confirmed.',
};

export interface ScheduleItem {
  time: string;
  title: string;
  detail?: string;
  tba?: boolean;
}

export const schedule: ScheduleItem[] = [
  { time: '09:00 – 09:10', title: 'Opening remarks', detail: 'Organizers' },
  { time: '09:10 – 09:55', title: 'Keynote 1', tba: true },
  { time: '09:55 – 10:40', title: 'Keynote 2', tba: true },
  { time: '10:40 – 11:10', title: 'Coffee break & poster session I' },
  {
    time: '11:10 – 12:10',
    title: 'Contributed & spotlight talks',
    detail: '4 × 15 min',
  },
  { time: '12:10 – 13:10', title: 'Lunch' },
  { time: '13:10 – 13:55', title: 'Keynote 3', tba: true },
  {
    time: '13:55 – 14:40',
    title: 'Contributed & spotlight talks',
    detail: '3 × 15 min',
  },
  { time: '14:40 – 15:10', title: 'Coffee break & poster session II' },
  {
    time: '15:10 – 16:00',
    title: 'Panel discussion',
    detail: 'Organizer-moderated',
  },
  {
    time: '16:00 – 16:50',
    title: 'Open-problems & community working session',
    detail:
      'Structured discussion on operationalizing flourishing across cultures, preventing benchmark overfitting, and training models that support autonomy rather than dependency',
  },
  { time: '16:50 – 17:00', title: 'Closing remarks', detail: 'Organizers' },
];

export const cfp = {
  topics: [
    'Benchmarks for positive alignment and human flourishing',
    'Long-horizon support across many sessions rather than single-turn helpfulness',
    'Preference learning and reward modeling for flourishing-oriented objectives',
    'Post-training for ambiguous, high-stakes situations like conflict, grief, and major life decisions',
    'Sycophancy, learned helplessness, and cognitive dependency',
    'Human autonomy, coaching, and non-directive assistance',
    'Eliciting and aggregating preferences about flourishing beyond social-choice aggregation',
    'Pluralistic and multicultural evaluation',
    'Cross-disciplinary perspectives from positive psychology, social work, philosophy of wellbeing, ethics, and HCI',
    'Case studies of LLM behavior in sensitive personal domains',
  ],
  importantDates: [
    { label: 'Submission deadline', value: 'TBA' },
    { label: 'Author notification', value: 'TBA' },
    { label: 'Camera-ready deadline', value: 'TBA' },
    { label: 'Workshop date', value: 'December 2026' },
  ],
  details: [
    'We solicit extended abstracts (up to 4 pages) and short papers (up to 8 pages), including position papers, following the NeurIPS 2026 style template with unlimited references and appendices.',
    'Submissions are non-archival and reviewed through OpenReview via an anonymized, double-blind process.',
    'We welcome work from diverse AI research communities as well as adjacent fields (positive psychology, social work, philosophy of wellbeing, and HCI) whose perspectives are essential to this direction.',
  ],
};
