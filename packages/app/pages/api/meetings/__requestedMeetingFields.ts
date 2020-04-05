export const requestedMeetingFields = {
  id: true,
  title: true,
  description: true,
  publication_time: true,
  start_time: true,
  end_time: true,
  guild: {
    id: true,
    name: true,
  },
  sphere_id: true,
  organizer: {
    name: true,
    email: true,
  },
} as const;
