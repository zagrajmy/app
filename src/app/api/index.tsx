import { Meeting, User, Id } from "../types";

// TODO:

const piotr: User = {
  name: "Piotr Monwid-Olechnowicz",
  slug: "hasparus",
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
    start_time: new Date(5000),
    image: {
      src: "https://source.unsplash.com/random/2200x400",
      kind: "background",
    },
  },
  {
    id: 2,
    author: piotr,
    title: "D&D Tomb of Annihilation: Episode 01",
    description: "",
    published_at: new Date(1400),
    created_at: new Date(1100),
    start_time: new Date(5000),
    image: {
      src: "https://source.unsplash.com/random/2200x400",
      kind: "banner",
    },
  },
  {
    id: 3,
    author: tony,
    title: "Avengers Weekly Board Games I",
    description: "",
    published_at: new Date(2000),
    created_at: new Date(1800),
    start_time: new Date(5000),
    image: {
      src: "https://source.unsplash.com/random/2200x400",
      kind: "small",
    },
  },
  {
    id: 4,
    author: tony,
    title: "Avengers Weekly Board Games II",
    description: "Lorem ipsum dolor sit amet",
    published_at: new Date(2200),
    created_at: new Date(2000),
    start_time: new Date(5000),
    image: {
      src: "https://source.unsplash.com/random/2200x400",
      kind: "background",
    },
  },
  // future meetings
  ...new Array(100).fill(0).map(
    (_, i): Meeting => ({
      id: `future-${i}`,
      author: piotr,
      created_at: new Date(Date.now() - i * 1000),
      published_at: new Date(Date.now() - i * 1000),
      start_time: i % 2 === 0 ? new Date(Date.now() + i * 100000) : undefined,
      title: `Dungeon World One-Shot ${i}`,
      description: "This is a test meeting. We have no backend yet",
      image: ([
        {
          src: "https://source.unsplash.com/random/2000x2000",
          kind: "background",
        },
        {
          src: "https://source.unsplash.com/random/2000x400",
          kind: "banner",
        },
        {
          src: "https://source.unsplash.com/random/400x400",
          kind: "small",
        },
        undefined,
      ] as const)[i % 4],
    })
  ),
];

export const meetingsApi = {
  getUpcomingMeetings: (n: number) => {
    // TODO: published and close to today
  },
  getAll: () => Promise.resolve(meetings),
  get: (meetingId: Id) =>
    Promise.resolve(meetings.find(m => String(m.id) === String(meetingId))),
  add: (meeting: Omit<Meeting, "id">) => {
    const m: Meeting = { ...meeting, id: Math.floor(Math.random() * 1000) };
    if (Math.random() > 0.1) {
      meetings.push(m);
      return Promise.resolve(m);
    }
    // fake error
    return Promise.reject(new Error("fake cant add meeting"));
  },
  update: (data: Partial<Meeting> & { id: Meeting["id"] }) => {
    const meeting = meetings.find(m => m.id === data.id);
    Object.assign(meeting, data);
    return meeting;
  },
};
