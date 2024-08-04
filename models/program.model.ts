import { Program } from "../program.types";

const programs: Program[] = [
  {
    id: 1,
    title: "Agile Innovation for Business Growth",
    topic: "change-and-culture",
    learningFormats: ["virtual", "residential", "blended", "self-study"],
    bestseller: false,
    startDate: "2023-05-05T00:00:00+0000",
  },
  {
    id: 2,
    title:
      "Developing an Entrepreneurial Mindset: Speed, Creativity and Growth",
    topic: "change-and-culture",
    learningFormats: ["self-study"],
    bestseller: false,
    startDate: "2023-05-08T00:00:00+0000",
  },
  {
    id: 3,
    title: "Leading Across Cultures",
    topic: "change-and-culture",
    learningFormats: ["virtual", "residential", "blended"],
    bestseller: true,
    startDate: "2023-07-08T00:00:00+0000",
  },
  {
    id: 4,
    title: "Leading Digital Transformation",
    topic: "innovation-and-digital-information",
    learningFormats: ["virtual"],
    bestseller: false,
    startDate: "2023-05-08T00:00:00+0000",
  },
  {
    id: 5,
    title: "Translating Strategy into Action",
    topic: "change-and-culture",
    learningFormats: ["self-study"],
    bestseller: false,
    startDate: "2023-05-01T00:00:00+0000",
  },
  {
    id: 6,
    title: "Finance for Non-Financial Managers",
    topic: "business-strategy",
    learningFormats: ["online", "residential", "blended"],
    bestseller: false,
    startDate: "2023-07-18T00:00:00+0000",
  },
  {
    id: 7,
    title: "Resilient Leadership: For You, Your Team and Your Organization",
    topic: "personal-leadership-and-team-development",
    learningFormats: ["online"],
    bestseller: false,
    startDate: "2023-04-20T00:00:00+0000",
  },
  {
    id: 8,
    title: "Leading Culture Change",
    topic: "business-strategy",
    learningFormats: ["self-study", "residential", "blended"],
    bestseller: true,
    startDate: "2023-04-30T00:00:00+0000",
  },
  {
    id: 9,
    title: "Advanced Organization Design",
    topic: "innovation-and-digital-information",
    learningFormats: ["self-study"],
    bestseller: false,
    startDate: "2023-09-11T00:00:00+0000",
  },
  {
    id: 10,
    title: "Fundamentals of Organization Design",
    topic: "change-and-culture",
    learningFormats: ["blended"],
    bestseller: true,
    startDate: "2023-08-13T00:00:00+0000",
  },
  {
    id: 11,
    title: "Coaching Skills for Leaders",
    topic: "business-strategy",
    learningFormats: ["residential"],
    bestseller: true,
    startDate: "2024-01-12T00:00:00+0000",
  },
];

export function fetchPrograms(): Promise<Program[]> {
  return Promise.resolve(programs);
}

export function addProgram(newProgram: Program): Promise<Program> {
  programs.push(newProgram);
  return Promise.resolve(newProgram);
}
