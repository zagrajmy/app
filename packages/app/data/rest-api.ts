export declare namespace ZagrajmyRestApi {
    namespace Schemas {
        export interface Meeting {
            readonly id?: number;
            readonly created_at?: string; // date-time
            description?: string;
            name: string;
            slug: string; // ^[-a-zA-Z0-9_]+$
            readonly updated_at?: string; // date-time
            end_time?: string | null; // date-time
            image?: string | null; // binary
            location?: string;
            meeting_url?: string; // uri ^(?:[a-z0-9.+-]*)://(?:[^\s:@/]+(?::[^\s:@/]*)?@)?(?:(?:25[0-5]|2[0-4]\d|[0-1]?\d?\d)(?:\.(?:25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}|\[[0-9a-f:.]+\]|([a-z¡-￿0-9](?:[a-z¡-￿0-9-]{0,61}[a-z¡-￿0-9])?(?:\.(?!-)[a-z¡-￿0-9-]{1,63}(?<!-))*\.(?!-)(?:[a-z¡-￿-]{2,63}|xn--[a-z0-9]{1,59})(?<!-)\.?|localhost))(?::\d{2,5})?(?:[/?#][^\s]*)?\z
            participants_limit?: null | number;
            publication_time?: string | null; // date-time
            start_time?: string | null; // date-time
            readonly status?: string;
            guild?: null | number;
            organizer: string;
            sphere: number;
            readonly participants?: string[];
        }
        export interface Proposal {
            readonly id?: number;
            speaker_name?: string;
            name: string;
            description?: string;
            duration_minutes: number;
            city?: string;
            club?: string;
            status?: "CREATED" | "ACCEPTED" | "REJECTED";
            needs?: string;
            other_contact?: unknown;
            other_data?: unknown;
            phone?: string;
            topic?: string;
            meeting?: null | number;
            waitlist: number;
            speaker_user?: string | null;
            time_slots: number[];
        }
        export interface User {
            first_name?: string;
            last_name?: string;
            locale?: string;
            auth0_id?: string;
            /**
             * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
             */
            username: string; // ^[\w.@+-]+\z
            readonly uuid?: string; // uuid
            readonly email?: string; // email
            readonly date_joined?: string; // date-time
            readonly last_login?: string; // date-time
        }
    }
}
export declare namespace ZagrajmyRestApi {
    namespace AddParticipantMeeting {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = ZagrajmyRestApi.Schemas.Meeting;
        namespace Responses {
            export type $201 = ZagrajmyRestApi.Schemas.Meeting;
        }
    }
    namespace CreateMeeting {
        export type RequestBody = ZagrajmyRestApi.Schemas.Meeting;
        namespace Responses {
            export type $201 = ZagrajmyRestApi.Schemas.Meeting;
        }
    }
    namespace CreateProposal {
        export type RequestBody = ZagrajmyRestApi.Schemas.Proposal;
        namespace Responses {
            export type $201 = ZagrajmyRestApi.Schemas.Proposal;
        }
    }
    namespace CreateUser {
        export type RequestBody = ZagrajmyRestApi.Schemas.User;
        namespace Responses {
            export type $201 = ZagrajmyRestApi.Schemas.User;
        }
    }
    namespace DestroyMeeting {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace DestroyUser {
        namespace Parameters {
            export type Uuid = string;
        }
        export interface PathParameters {
            uuid: Parameters.Uuid;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ListMeetings {
        namespace Responses {
            export type $200 = ZagrajmyRestApi.Schemas.Meeting[];
        }
    }
    namespace ListUsers {
        namespace Responses {
            export type $200 = ZagrajmyRestApi.Schemas.User[];
        }
    }
    namespace PartialUpdateMeeting {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = ZagrajmyRestApi.Schemas.Meeting;
        namespace Responses {
            export type $200 = ZagrajmyRestApi.Schemas.Meeting;
        }
    }
    namespace PartialUpdateProposal {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = ZagrajmyRestApi.Schemas.Proposal;
        namespace Responses {
            export type $200 = ZagrajmyRestApi.Schemas.Proposal;
        }
    }
    namespace PartialUpdateUser {
        namespace Parameters {
            export type Uuid = string;
        }
        export interface PathParameters {
            uuid: Parameters.Uuid;
        }
        export type RequestBody = ZagrajmyRestApi.Schemas.User;
        namespace Responses {
            export type $200 = ZagrajmyRestApi.Schemas.User;
        }
    }
    namespace RemoveParticipantMeeting {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = ZagrajmyRestApi.Schemas.Meeting;
        namespace Responses {
            export type $201 = ZagrajmyRestApi.Schemas.Meeting;
        }
    }
    namespace RetrieveMeeting {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = ZagrajmyRestApi.Schemas.Meeting;
        }
    }
    namespace RetrieveUser {
        namespace Parameters {
            export type Uuid = string;
        }
        export interface PathParameters {
            uuid: Parameters.Uuid;
        }
        namespace Responses {
            export type $200 = ZagrajmyRestApi.Schemas.User;
        }
    }
    namespace UpdateMeeting {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = ZagrajmyRestApi.Schemas.Meeting;
        namespace Responses {
            export type $200 = ZagrajmyRestApi.Schemas.Meeting;
        }
    }
    namespace UpdateProposal {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = ZagrajmyRestApi.Schemas.Proposal;
        namespace Responses {
            export type $200 = ZagrajmyRestApi.Schemas.Proposal;
        }
    }
    namespace UpdateUser {
        namespace Parameters {
            export type Uuid = string;
        }
        export interface PathParameters {
            uuid: Parameters.Uuid;
        }
        export type RequestBody = ZagrajmyRestApi.Schemas.User;
        namespace Responses {
            export type $200 = ZagrajmyRestApi.Schemas.User;
        }
    }
}
