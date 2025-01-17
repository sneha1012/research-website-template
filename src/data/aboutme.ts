export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Sneha Maurya",
  title: "M.S. Data Science Candidate",
  institution: "Columbia University",
  // Note that links work in the description
  description:
    "I'm a first year <a href='https://www.engineering.columbia.edu'> Master's candidate</a> working at the intersection of NLP and HCI. My interests broadly span Machine learning, Systems, Natural Language Procesing, and Computer Vision. I focus on developing robust, interpretable systems that can leverage Large Distributed Models to help humans improve their efficiency.",
  email: "sm5755@columbia.edu",
  imageUrl:
    "https://github.com/sneha1012/sneha1012.github.io/blob/main/images/IMG_2223_2.jpg#:~:text=IMG_2223_2.jpg",
  githubUsername: "https://github.com/sneha1012",
  linkedinUsername: "https://www.linkedin.com/in/snehamaurya10/",
  bluesky: "https://bsky.app/profile/snehamaurya.bsky.social",
  blogUrl: "https://",
  cvUrl: "https://drive.google.com/file/d/1ArFpet7W6KPQ73Px_HMNPvpaIWT-KRzp/view?usp=sharing",
  institutionUrl: "https://www.engineering.columbia.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
