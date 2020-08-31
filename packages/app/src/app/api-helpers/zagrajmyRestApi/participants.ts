import { zagrajmyRestApi } from "./index";

export const deleteParticipant = (meetingId: string) =>
  zagrajmyRestApi(`notice_board/meeting/${meetingId}/participants`, {
    method: "DELETE",
  });

export const postParticipant = (meetingId: string) =>
  zagrajmyRestApi(`notice_board/meeting/${meetingId}/add_participant`, {
    // body: TODO
  });
