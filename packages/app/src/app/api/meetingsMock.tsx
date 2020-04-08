import { Id, Meeting, User } from "../../../data/types";

// TODO:

const piotr: User = {
  uuid: "1",
  name: "Piotr Monwid-Olechnowicz",
  slug: "hasparus",
  email: "piotr@zagraj.my",
};

const tony: User = {
  uuid: "2",
  name: "Ironman",
  slug: "ironman",
  email: "boss@stark.com",
};

export const meetings: Meeting[] = [
  // past meetings
  {
    id: 1,
    sphere_id: 1,
    organizer: piotr,
    title: "Dungeon World One-Shot",
    description: "Lorem ipsum dolor sit amet",
    publication_time: new Date(1000),
    created_at: new Date(900),
    updated_at: new Date(900),
    start_time: new Date(5000),
    image: {
      src: "https://source.unsplash.com/random/2200x400",
      kind: "background",
    },
    participants: [],
  },
  {
    id: 2,
    sphere_id: 1,
    organizer: piotr,
    title: "D&D Tomb of Annihilation: Episode 01",
    description: "",
    publication_time: new Date(1400),
    created_at: new Date(1100),
    updated_at: new Date(1100),
    start_time: new Date(5000),
    image: {
      src: "https://source.unsplash.com/random/2200x400",
      kind: "banner",
    },
    participants: [],
  },
  {
    id: 3,
    sphere_id: 1,
    organizer: tony,
    title: "Avengers Weekly Board Games I",
    description: "",
    publication_time: new Date(2000),
    created_at: new Date(1800),
    updated_at: new Date(1800),
    start_time: new Date(5000),
    image: {
      src: "https://source.unsplash.com/random/2200x400",
      kind: "small",
    },
    participants: [],
  },
  {
    id: 4,
    sphere_id: 1,
    organizer: tony,
    title: "Avengers Weekly Board Games II",
    description: "Lorem ipsum dolor sit amet",
    publication_time: new Date(2200),
    created_at: new Date(2000),
    updated_at: new Date(2000),
    start_time: new Date(5000),
    image: {
      src: "https://source.unsplash.com/random/2200x400",
      kind: "background",
    },
    participants: [],
  },
  // future meetings
  ...new Array(100).fill(0).map(
    (_, i): Meeting => ({
      id: `future-${i}`,
      sphere_id: 1,
      organizer: piotr,
      created_at: new Date(Date.now() - i * 1000),
      updated_at: new Date(Date.now() - i * Math.random() * 200),
      publication_time: new Date(Date.now() - i * 1000),
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
      participants: [],
    })
  ),
];

export const meetingsApi = {
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
