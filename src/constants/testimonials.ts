interface Testimonial {
  message: string;
  name: string;
  role: string;
  avatar: string;
}

export const TESTIMONIALS = [
  {
    message:
      "Incredible tool. For everyone who wants to keep everything in one place, this is a HUGE HELP to stay organized and land a job faster.",
    name: "Alin Florea",
    role: "Director of Operations",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
  },
  {
    message:
      "This tool makes it so easy for me to track my applications, write cover letters, and align all of my resumes to the specific keywords in the job descriptions. A must-have for the job hunt!",
    name: "Brittany Archard",
    role: "Manager II, Enablement",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  },
  {
    message:
      "Amazing resource for organizing your job search and doing both easy and advanced customization of your resume. It even drafts cover letters for you.",
    name: "Meg Thomas",
    role: "Business Strategy & Operations",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
  },
  {
    message:
      "Being able to build an incredibly relevant resume for every job has been a pipe dream until Teal. Its AI-enabled cover letters are excellent too (and that's coming a comms person).",
    name: "Therese Sollars",
    role: "Director, Internal Communications",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
  },
  {
    message:
      "This has been a really valuable tool for job research and resume/cover letter writing! It's use of AI is really forward-thinking and speeds up the job application process.",
    name: "Billy Lechert",
    role: "Head of Workplace",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  },
  {
    message:
      "Teal is absolutely amazing! I can customize resumes and cover letters in no time that look highly professional and specific to the job. Teal is a must to install as a Chrome Extension.",
    name: "Janice Simpson",
    role: "Treatment Specialist",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
  },
  {
    message:
      "Very helpful to be able to save jobs across different job board sites! It makes it so much easier to tailor a resume to a job when you can see both side by side.",
    name: "Allie Jacobs",
    role: "Senior Product Designer",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=faces",
  },
  {
    message:
      "A great tool for creating targeted resumes that align well with the job posting. The app within job search sites works great. I can quickly save, capture key information, and rate a job.",
    name: "Roger McClung",
    role: "Director, Global Operations",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  },
] as const satisfies readonly Testimonial[];
