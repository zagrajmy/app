export const requestedMeetingFields = {
  id: true,
  name: true,
  description: true,
  publication_time: true,
  start_time: true,
  end_time: true,
  image: true,
  guild: {
    id: true,
    name: true,
  },
  sphere_id: true,
  organizer: {
    username: true,
    email: true,
  },
} as const;
