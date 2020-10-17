import { ZagrajmyRestApi, zagrajmyRestApi } from "./index";

export const deleteParticipant = (meetingId: string) =>
  zagrajmyRestApi(`notice_board/meeting/${meetingId}/participants`, {
    method: "DELETE",
  });

export const postParticipant = (
  meetingId: ZagrajmyRestApi.AddParticipantMeeting.PathParameters["id"],
  json: ZagrajmyRestApi.AddParticipantMeeting.RequestBody
) => {
  return zagrajmyRestApi(`notice_board/meeting/${meetingId}/add_participant`, {
    json: { ...json },
  });
};
