import { Meeting, User, Id } from "../types";

// TODO:

const piotr: User = {
  name: "Piotr Monwid-Olechnowicz",
  slug: "piotr-monwid-olechnowicz",
  email: "piotr@zagraj.my",
};

const tony: User = {
  name: "Ironman",
  slug: "ironman",
  email: "boss@stark.com",
};

export const meetings: Meeting[] = [
  // past meetings
  {
    id: 1,
    author: piotr,
    title: "Dungeon World One-Shot",
    description: "Lorem ipsum dolor sit amet",
    published_at: new Date(1000),
    created_at: new Date(900),
    date: new Date(5000),
    image: "https://source.unsplash.com/random/400x400",
  },
  {
    id: 2,
    author: piotr,
    title: "D&D Tomb of Annihilation: Episode 01",
    description: "",
    published_at: new Date(1400),
    created_at: new Date(1100),
    date: new Date(5000),
    image: "https://source.unsplash.com/random/400x400",
  },
  {
    id: 3,
    author: tony,
    title: "Avengers Weekly Board Games I",
    description: "",
    published_at: new Date(2000),
    created_at: new Date(1800),
    date: new Date(5000),
    image: "https://source.unsplash.com/random/400x400",
  },
  {
    id: 4,
    author: tony,
    title: "Avengers Weekly Board Games II",
    description: "Lorem ipsum dolor sit amet",
    published_at: new Date(2200),
    created_at: new Date(2000),
    date: new Date(5000),
    image: "https://source.unsplash.com/random/400x400",
  },
  // future meetings
  ...new Array(100).fill(0).map(
    (_, i): Meeting => ({
      id: `future-${i}`,
      author: piotr,
      created_at: new Date(Date.now() - i * 1000),
      published_at: new Date(Date.now() - i * 1000),
      date: i % 2 === 0 ? new Date(Date.now() + i * 100000) : undefined,
      title: `Dungeon World One-Shot ${i}`,
      description: "This is a test meeting. We have no backend yet",
      image: i % 5 !== 0 ? "https://source.unsplash.com/random/400x400" : "",
    })
  ),
];

export const meetingsApi = {
  getAll: () => Promise.resolve(meetings),
  get: (meetingId: Id) =>
    Promise.resolve(meetings.find(m => String(m.id) === String(meetingId))),
};
