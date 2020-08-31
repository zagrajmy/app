/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
  ["Boolean_comparison_exp"]: {
    _eq?: boolean;
    _gt?: boolean;
    _gte?: boolean;
    _in?: boolean[];
    _is_null?: boolean;
    _lt?: boolean;
    _lte?: boolean;
    _neq?: boolean;
    _nin?: boolean[];
  };
  ["ch_agenda_item"]: AliasType<{
    ch_helper?: ValueTypes["ch_helper"];
    ch_room?: ValueTypes["ch_room"];
    helper_confirmed?: true;
    helper_id?: true;
    id?: true;
    meeting_confirmed?: true;
    meeting_id?: true;
    nb_meeting?: ValueTypes["nb_meeting"];
    room_id?: true;
    status?: true;
    __typename?: true;
  }>;
  ["ch_agenda_item_aggregate"]: AliasType<{
    aggregate?: ValueTypes["ch_agenda_item_aggregate_fields"];
    nodes?: ValueTypes["ch_agenda_item"];
    __typename?: true;
  }>;
  ["ch_agenda_item_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["ch_agenda_item_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["ch_agenda_item_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["ch_agenda_item_max_fields"];
    min?: ValueTypes["ch_agenda_item_min_fields"];
    stddev?: ValueTypes["ch_agenda_item_stddev_fields"];
    stddev_pop?: ValueTypes["ch_agenda_item_stddev_pop_fields"];
    stddev_samp?: ValueTypes["ch_agenda_item_stddev_samp_fields"];
    sum?: ValueTypes["ch_agenda_item_sum_fields"];
    var_pop?: ValueTypes["ch_agenda_item_var_pop_fields"];
    var_samp?: ValueTypes["ch_agenda_item_var_samp_fields"];
    variance?: ValueTypes["ch_agenda_item_variance_fields"];
    __typename?: true;
  }>;
  ["ch_agenda_item_aggregate_order_by"]: {
    avg?: ValueTypes["ch_agenda_item_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["ch_agenda_item_max_order_by"];
    min?: ValueTypes["ch_agenda_item_min_order_by"];
    stddev?: ValueTypes["ch_agenda_item_stddev_order_by"];
    stddev_pop?: ValueTypes["ch_agenda_item_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["ch_agenda_item_stddev_samp_order_by"];
    sum?: ValueTypes["ch_agenda_item_sum_order_by"];
    var_pop?: ValueTypes["ch_agenda_item_var_pop_order_by"];
    var_samp?: ValueTypes["ch_agenda_item_var_samp_order_by"];
    variance?: ValueTypes["ch_agenda_item_variance_order_by"];
  };
  ["ch_agenda_item_arr_rel_insert_input"]: {
    data: ValueTypes["ch_agenda_item_insert_input"][];
    on_conflict?: ValueTypes["ch_agenda_item_on_conflict"];
  };
  ["ch_agenda_item_avg_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    meeting_id?: true;
    room_id?: true;
    __typename?: true;
  }>;
  ["ch_agenda_item_avg_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    room_id?: ValueTypes["order_by"];
  };
  ["ch_agenda_item_bool_exp"]: {
    _and?: (ValueTypes["ch_agenda_item_bool_exp"] | undefined)[];
    _not?: ValueTypes["ch_agenda_item_bool_exp"];
    _or?: (ValueTypes["ch_agenda_item_bool_exp"] | undefined)[];
    ch_helper?: ValueTypes["ch_helper_bool_exp"];
    ch_room?: ValueTypes["ch_room_bool_exp"];
    helper_confirmed?: ValueTypes["Boolean_comparison_exp"];
    helper_id?: ValueTypes["Int_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    meeting_confirmed?: ValueTypes["Boolean_comparison_exp"];
    meeting_id?: ValueTypes["Int_comparison_exp"];
    nb_meeting?: ValueTypes["nb_meeting_bool_exp"];
    room_id?: ValueTypes["Int_comparison_exp"];
    status?: ValueTypes["String_comparison_exp"];
  };
  ["ch_agenda_item_constraint"]: ch_agenda_item_constraint;
  ["ch_agenda_item_inc_input"]: {
    helper_id?: number;
    id?: number;
    meeting_id?: number;
    room_id?: number;
  };
  ["ch_agenda_item_insert_input"]: {
    ch_helper?: ValueTypes["ch_helper_obj_rel_insert_input"];
    ch_room?: ValueTypes["ch_room_obj_rel_insert_input"];
    helper_confirmed?: boolean;
    helper_id?: number;
    id?: number;
    meeting_confirmed?: boolean;
    meeting_id?: number;
    nb_meeting?: ValueTypes["nb_meeting_obj_rel_insert_input"];
    room_id?: number;
    status?: string;
  };
  ["ch_agenda_item_max_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    meeting_id?: true;
    room_id?: true;
    status?: true;
    __typename?: true;
  }>;
  ["ch_agenda_item_max_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    room_id?: ValueTypes["order_by"];
    status?: ValueTypes["order_by"];
  };
  ["ch_agenda_item_min_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    meeting_id?: true;
    room_id?: true;
    status?: true;
    __typename?: true;
  }>;
  ["ch_agenda_item_min_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    room_id?: ValueTypes["order_by"];
    status?: ValueTypes["order_by"];
  };
  ["ch_agenda_item_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["ch_agenda_item"];
    __typename?: true;
  }>;
  ["ch_agenda_item_obj_rel_insert_input"]: {
    data: ValueTypes["ch_agenda_item_insert_input"];
    on_conflict?: ValueTypes["ch_agenda_item_on_conflict"];
  };
  ["ch_agenda_item_on_conflict"]: {
    constraint: ValueTypes["ch_agenda_item_constraint"];
    update_columns: ValueTypes["ch_agenda_item_update_column"][];
    where?: ValueTypes["ch_agenda_item_bool_exp"];
  };
  ["ch_agenda_item_order_by"]: {
    ch_helper?: ValueTypes["ch_helper_order_by"];
    ch_room?: ValueTypes["ch_room_order_by"];
    helper_confirmed?: ValueTypes["order_by"];
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_confirmed?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    nb_meeting?: ValueTypes["nb_meeting_order_by"];
    room_id?: ValueTypes["order_by"];
    status?: ValueTypes["order_by"];
  };
  ["ch_agenda_item_pk_columns_input"]: {
    id: number;
  };
  ["ch_agenda_item_select_column"]: ch_agenda_item_select_column;
  ["ch_agenda_item_set_input"]: {
    helper_confirmed?: boolean;
    helper_id?: number;
    id?: number;
    meeting_confirmed?: boolean;
    meeting_id?: number;
    room_id?: number;
    status?: string;
  };
  ["ch_agenda_item_stddev_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    meeting_id?: true;
    room_id?: true;
    __typename?: true;
  }>;
  ["ch_agenda_item_stddev_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    room_id?: ValueTypes["order_by"];
  };
  ["ch_agenda_item_stddev_pop_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    meeting_id?: true;
    room_id?: true;
    __typename?: true;
  }>;
  ["ch_agenda_item_stddev_pop_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    room_id?: ValueTypes["order_by"];
  };
  ["ch_agenda_item_stddev_samp_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    meeting_id?: true;
    room_id?: true;
    __typename?: true;
  }>;
  ["ch_agenda_item_stddev_samp_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    room_id?: ValueTypes["order_by"];
  };
  ["ch_agenda_item_sum_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    meeting_id?: true;
    room_id?: true;
    __typename?: true;
  }>;
  ["ch_agenda_item_sum_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    room_id?: ValueTypes["order_by"];
  };
  ["ch_agenda_item_update_column"]: ch_agenda_item_update_column;
  ["ch_agenda_item_var_pop_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    meeting_id?: true;
    room_id?: true;
    __typename?: true;
  }>;
  ["ch_agenda_item_var_pop_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    room_id?: ValueTypes["order_by"];
  };
  ["ch_agenda_item_var_samp_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    meeting_id?: true;
    room_id?: true;
    __typename?: true;
  }>;
  ["ch_agenda_item_var_samp_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    room_id?: ValueTypes["order_by"];
  };
  ["ch_agenda_item_variance_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    meeting_id?: true;
    room_id?: true;
    __typename?: true;
  }>;
  ["ch_agenda_item_variance_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    room_id?: ValueTypes["order_by"];
  };
  ["ch_festival"]: AliasType<{
    ch_helpers?: [
      {
        distinct_on?: ValueTypes["ch_helper_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_order_by"][];
        where?: ValueTypes["ch_helper_bool_exp"];
      },
      ValueTypes["ch_helper"]
    ];
    ch_helpers_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_helper_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_order_by"][];
        where?: ValueTypes["ch_helper_bool_exp"];
      },
      ValueTypes["ch_helper_aggregate"]
    ];
    ch_rooms?: [
      {
        distinct_on?: ValueTypes["ch_room_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_room_order_by"][];
        where?: ValueTypes["ch_room_bool_exp"];
      },
      ValueTypes["ch_room"]
    ];
    ch_rooms_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_room_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_room_order_by"][];
        where?: ValueTypes["ch_room_bool_exp"];
      },
      ValueTypes["ch_room_aggregate"]
    ];
    ch_wait_lists?: [
      {
        distinct_on?: ValueTypes["ch_wait_list_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_wait_list_order_by"][];
        where?: ValueTypes["ch_wait_list_bool_exp"];
      },
      ValueTypes["ch_wait_list"]
    ];
    ch_wait_lists_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_wait_list_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_wait_list_order_by"][];
        where?: ValueTypes["ch_wait_list_bool_exp"];
      },
      ValueTypes["ch_wait_list_aggregate"]
    ];
    end_proposal?: true;
    end_time?: true;
    id?: true;
    name?: true;
    nb_sphere?: ValueTypes["nb_sphere"];
    settings?: [{ path?: string }, true];
    slug?: true;
    sphere_id?: true;
    start_proposal?: true;
    start_publication?: true;
    start_time?: true;
    status?: true;
    __typename?: true;
  }>;
  ["ch_festival_aggregate"]: AliasType<{
    aggregate?: ValueTypes["ch_festival_aggregate_fields"];
    nodes?: ValueTypes["ch_festival"];
    __typename?: true;
  }>;
  ["ch_festival_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["ch_festival_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["ch_festival_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["ch_festival_max_fields"];
    min?: ValueTypes["ch_festival_min_fields"];
    stddev?: ValueTypes["ch_festival_stddev_fields"];
    stddev_pop?: ValueTypes["ch_festival_stddev_pop_fields"];
    stddev_samp?: ValueTypes["ch_festival_stddev_samp_fields"];
    sum?: ValueTypes["ch_festival_sum_fields"];
    var_pop?: ValueTypes["ch_festival_var_pop_fields"];
    var_samp?: ValueTypes["ch_festival_var_samp_fields"];
    variance?: ValueTypes["ch_festival_variance_fields"];
    __typename?: true;
  }>;
  ["ch_festival_aggregate_order_by"]: {
    avg?: ValueTypes["ch_festival_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["ch_festival_max_order_by"];
    min?: ValueTypes["ch_festival_min_order_by"];
    stddev?: ValueTypes["ch_festival_stddev_order_by"];
    stddev_pop?: ValueTypes["ch_festival_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["ch_festival_stddev_samp_order_by"];
    sum?: ValueTypes["ch_festival_sum_order_by"];
    var_pop?: ValueTypes["ch_festival_var_pop_order_by"];
    var_samp?: ValueTypes["ch_festival_var_samp_order_by"];
    variance?: ValueTypes["ch_festival_variance_order_by"];
  };
  ["ch_festival_append_input"]: {
    settings?: ValueTypes["jsonb"];
  };
  ["ch_festival_arr_rel_insert_input"]: {
    data: ValueTypes["ch_festival_insert_input"][];
    on_conflict?: ValueTypes["ch_festival_on_conflict"];
  };
  ["ch_festival_avg_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["ch_festival_avg_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["ch_festival_bool_exp"]: {
    _and?: (ValueTypes["ch_festival_bool_exp"] | undefined)[];
    _not?: ValueTypes["ch_festival_bool_exp"];
    _or?: (ValueTypes["ch_festival_bool_exp"] | undefined)[];
    ch_helpers?: ValueTypes["ch_helper_bool_exp"];
    ch_rooms?: ValueTypes["ch_room_bool_exp"];
    ch_wait_lists?: ValueTypes["ch_wait_list_bool_exp"];
    end_proposal?: ValueTypes["timestamptz_comparison_exp"];
    end_time?: ValueTypes["timestamptz_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    name?: ValueTypes["String_comparison_exp"];
    nb_sphere?: ValueTypes["nb_sphere_bool_exp"];
    settings?: ValueTypes["jsonb_comparison_exp"];
    slug?: ValueTypes["String_comparison_exp"];
    sphere_id?: ValueTypes["Int_comparison_exp"];
    start_proposal?: ValueTypes["timestamptz_comparison_exp"];
    start_publication?: ValueTypes["timestamptz_comparison_exp"];
    start_time?: ValueTypes["timestamptz_comparison_exp"];
    status?: ValueTypes["String_comparison_exp"];
  };
  ["ch_festival_constraint"]: ch_festival_constraint;
  ["ch_festival_delete_at_path_input"]: {
    settings?: (string | undefined)[];
  };
  ["ch_festival_delete_elem_input"]: {
    settings?: number;
  };
  ["ch_festival_delete_key_input"]: {
    settings?: string;
  };
  ["ch_festival_inc_input"]: {
    id?: number;
    sphere_id?: number;
  };
  ["ch_festival_insert_input"]: {
    ch_helpers?: ValueTypes["ch_helper_arr_rel_insert_input"];
    ch_rooms?: ValueTypes["ch_room_arr_rel_insert_input"];
    ch_wait_lists?: ValueTypes["ch_wait_list_arr_rel_insert_input"];
    end_proposal?: ValueTypes["timestamptz"];
    end_time?: ValueTypes["timestamptz"];
    id?: number;
    name?: string;
    nb_sphere?: ValueTypes["nb_sphere_obj_rel_insert_input"];
    settings?: ValueTypes["jsonb"];
    slug?: string;
    sphere_id?: number;
    start_proposal?: ValueTypes["timestamptz"];
    start_publication?: ValueTypes["timestamptz"];
    start_time?: ValueTypes["timestamptz"];
    status?: string;
  };
  ["ch_festival_max_fields"]: AliasType<{
    end_proposal?: true;
    end_time?: true;
    id?: true;
    name?: true;
    slug?: true;
    sphere_id?: true;
    start_proposal?: true;
    start_publication?: true;
    start_time?: true;
    status?: true;
    __typename?: true;
  }>;
  ["ch_festival_max_order_by"]: {
    end_proposal?: ValueTypes["order_by"];
    end_time?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    slug?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
    start_proposal?: ValueTypes["order_by"];
    start_publication?: ValueTypes["order_by"];
    start_time?: ValueTypes["order_by"];
    status?: ValueTypes["order_by"];
  };
  ["ch_festival_min_fields"]: AliasType<{
    end_proposal?: true;
    end_time?: true;
    id?: true;
    name?: true;
    slug?: true;
    sphere_id?: true;
    start_proposal?: true;
    start_publication?: true;
    start_time?: true;
    status?: true;
    __typename?: true;
  }>;
  ["ch_festival_min_order_by"]: {
    end_proposal?: ValueTypes["order_by"];
    end_time?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    slug?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
    start_proposal?: ValueTypes["order_by"];
    start_publication?: ValueTypes["order_by"];
    start_time?: ValueTypes["order_by"];
    status?: ValueTypes["order_by"];
  };
  ["ch_festival_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["ch_festival"];
    __typename?: true;
  }>;
  ["ch_festival_obj_rel_insert_input"]: {
    data: ValueTypes["ch_festival_insert_input"];
    on_conflict?: ValueTypes["ch_festival_on_conflict"];
  };
  ["ch_festival_on_conflict"]: {
    constraint: ValueTypes["ch_festival_constraint"];
    update_columns: ValueTypes["ch_festival_update_column"][];
    where?: ValueTypes["ch_festival_bool_exp"];
  };
  ["ch_festival_order_by"]: {
    ch_helpers_aggregate?: ValueTypes["ch_helper_aggregate_order_by"];
    ch_rooms_aggregate?: ValueTypes["ch_room_aggregate_order_by"];
    ch_wait_lists_aggregate?: ValueTypes["ch_wait_list_aggregate_order_by"];
    end_proposal?: ValueTypes["order_by"];
    end_time?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    nb_sphere?: ValueTypes["nb_sphere_order_by"];
    settings?: ValueTypes["order_by"];
    slug?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
    start_proposal?: ValueTypes["order_by"];
    start_publication?: ValueTypes["order_by"];
    start_time?: ValueTypes["order_by"];
    status?: ValueTypes["order_by"];
  };
  ["ch_festival_pk_columns_input"]: {
    id: number;
  };
  ["ch_festival_prepend_input"]: {
    settings?: ValueTypes["jsonb"];
  };
  ["ch_festival_select_column"]: ch_festival_select_column;
  ["ch_festival_set_input"]: {
    end_proposal?: ValueTypes["timestamptz"];
    end_time?: ValueTypes["timestamptz"];
    id?: number;
    name?: string;
    settings?: ValueTypes["jsonb"];
    slug?: string;
    sphere_id?: number;
    start_proposal?: ValueTypes["timestamptz"];
    start_publication?: ValueTypes["timestamptz"];
    start_time?: ValueTypes["timestamptz"];
    status?: string;
  };
  ["ch_festival_stddev_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["ch_festival_stddev_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["ch_festival_stddev_pop_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["ch_festival_stddev_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["ch_festival_stddev_samp_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["ch_festival_stddev_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["ch_festival_sum_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["ch_festival_sum_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["ch_festival_update_column"]: ch_festival_update_column;
  ["ch_festival_var_pop_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["ch_festival_var_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["ch_festival_var_samp_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["ch_festival_var_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["ch_festival_variance_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["ch_festival_variance_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["ch_helper"]: AliasType<{
    ch_agenda_items?: [
      {
        distinct_on?: ValueTypes["ch_agenda_item_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_agenda_item_order_by"][];
        where?: ValueTypes["ch_agenda_item_bool_exp"];
      },
      ValueTypes["ch_agenda_item"]
    ];
    ch_agenda_items_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_agenda_item_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_agenda_item_order_by"][];
        where?: ValueTypes["ch_agenda_item_bool_exp"];
      },
      ValueTypes["ch_agenda_item_aggregate"]
    ];
    ch_festival?: ValueTypes["ch_festival"];
    ch_helper_time_slots?: [
      {
        distinct_on?: ValueTypes["ch_helper_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_time_slots_order_by"][];
        where?: ValueTypes["ch_helper_time_slots_bool_exp"];
      },
      ValueTypes["ch_helper_time_slots"]
    ];
    ch_helper_time_slots_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_helper_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_time_slots_order_by"][];
        where?: ValueTypes["ch_helper_time_slots_bool_exp"];
      },
      ValueTypes["ch_helper_time_slots_aggregate"]
    ];
    cr_user?: ValueTypes["cr_user"];
    festival_id?: true;
    id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  ["ch_helper_aggregate"]: AliasType<{
    aggregate?: ValueTypes["ch_helper_aggregate_fields"];
    nodes?: ValueTypes["ch_helper"];
    __typename?: true;
  }>;
  ["ch_helper_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["ch_helper_avg_fields"];
    count?: [
      { columns?: ValueTypes["ch_helper_select_column"][]; distinct?: boolean },
      true
    ];
    max?: ValueTypes["ch_helper_max_fields"];
    min?: ValueTypes["ch_helper_min_fields"];
    stddev?: ValueTypes["ch_helper_stddev_fields"];
    stddev_pop?: ValueTypes["ch_helper_stddev_pop_fields"];
    stddev_samp?: ValueTypes["ch_helper_stddev_samp_fields"];
    sum?: ValueTypes["ch_helper_sum_fields"];
    var_pop?: ValueTypes["ch_helper_var_pop_fields"];
    var_samp?: ValueTypes["ch_helper_var_samp_fields"];
    variance?: ValueTypes["ch_helper_variance_fields"];
    __typename?: true;
  }>;
  ["ch_helper_aggregate_order_by"]: {
    avg?: ValueTypes["ch_helper_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["ch_helper_max_order_by"];
    min?: ValueTypes["ch_helper_min_order_by"];
    stddev?: ValueTypes["ch_helper_stddev_order_by"];
    stddev_pop?: ValueTypes["ch_helper_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["ch_helper_stddev_samp_order_by"];
    sum?: ValueTypes["ch_helper_sum_order_by"];
    var_pop?: ValueTypes["ch_helper_var_pop_order_by"];
    var_samp?: ValueTypes["ch_helper_var_samp_order_by"];
    variance?: ValueTypes["ch_helper_variance_order_by"];
  };
  ["ch_helper_arr_rel_insert_input"]: {
    data: ValueTypes["ch_helper_insert_input"][];
    on_conflict?: ValueTypes["ch_helper_on_conflict"];
  };
  ["ch_helper_avg_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_helper_avg_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_helper_bool_exp"]: {
    _and?: (ValueTypes["ch_helper_bool_exp"] | undefined)[];
    _not?: ValueTypes["ch_helper_bool_exp"];
    _or?: (ValueTypes["ch_helper_bool_exp"] | undefined)[];
    ch_agenda_items?: ValueTypes["ch_agenda_item_bool_exp"];
    ch_festival?: ValueTypes["ch_festival_bool_exp"];
    ch_helper_time_slots?: ValueTypes["ch_helper_time_slots_bool_exp"];
    cr_user?: ValueTypes["cr_user_bool_exp"];
    festival_id?: ValueTypes["Int_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    user_id?: ValueTypes["uuid_comparison_exp"];
  };
  ["ch_helper_constraint"]: ch_helper_constraint;
  ["ch_helper_inc_input"]: {
    festival_id?: number;
    id?: number;
  };
  ["ch_helper_insert_input"]: {
    ch_agenda_items?: ValueTypes["ch_agenda_item_arr_rel_insert_input"];
    ch_festival?: ValueTypes["ch_festival_obj_rel_insert_input"];
    ch_helper_time_slots?: ValueTypes["ch_helper_time_slots_arr_rel_insert_input"];
    cr_user?: ValueTypes["cr_user_obj_rel_insert_input"];
    festival_id?: number;
    id?: number;
    user_id?: ValueTypes["uuid"];
  };
  ["ch_helper_max_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  ["ch_helper_max_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  ["ch_helper_min_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  ["ch_helper_min_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  ["ch_helper_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["ch_helper"];
    __typename?: true;
  }>;
  ["ch_helper_obj_rel_insert_input"]: {
    data: ValueTypes["ch_helper_insert_input"];
    on_conflict?: ValueTypes["ch_helper_on_conflict"];
  };
  ["ch_helper_on_conflict"]: {
    constraint: ValueTypes["ch_helper_constraint"];
    update_columns: ValueTypes["ch_helper_update_column"][];
    where?: ValueTypes["ch_helper_bool_exp"];
  };
  ["ch_helper_order_by"]: {
    ch_agenda_items_aggregate?: ValueTypes["ch_agenda_item_aggregate_order_by"];
    ch_festival?: ValueTypes["ch_festival_order_by"];
    ch_helper_time_slots_aggregate?: ValueTypes["ch_helper_time_slots_aggregate_order_by"];
    cr_user?: ValueTypes["cr_user_order_by"];
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  ["ch_helper_pk_columns_input"]: {
    id: number;
  };
  ["ch_helper_select_column"]: ch_helper_select_column;
  ["ch_helper_set_input"]: {
    festival_id?: number;
    id?: number;
    user_id?: ValueTypes["uuid"];
  };
  ["ch_helper_stddev_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_helper_stddev_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_helper_stddev_pop_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_helper_stddev_pop_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_helper_stddev_samp_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_helper_stddev_samp_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_helper_sum_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_helper_sum_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_helper_time_slots"]: AliasType<{
    ch_helper?: ValueTypes["ch_helper"];
    ch_time_slot?: ValueTypes["ch_time_slot"];
    helper_id?: true;
    id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_helper_time_slots_aggregate"]: AliasType<{
    aggregate?: ValueTypes["ch_helper_time_slots_aggregate_fields"];
    nodes?: ValueTypes["ch_helper_time_slots"];
    __typename?: true;
  }>;
  ["ch_helper_time_slots_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["ch_helper_time_slots_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["ch_helper_time_slots_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["ch_helper_time_slots_max_fields"];
    min?: ValueTypes["ch_helper_time_slots_min_fields"];
    stddev?: ValueTypes["ch_helper_time_slots_stddev_fields"];
    stddev_pop?: ValueTypes["ch_helper_time_slots_stddev_pop_fields"];
    stddev_samp?: ValueTypes["ch_helper_time_slots_stddev_samp_fields"];
    sum?: ValueTypes["ch_helper_time_slots_sum_fields"];
    var_pop?: ValueTypes["ch_helper_time_slots_var_pop_fields"];
    var_samp?: ValueTypes["ch_helper_time_slots_var_samp_fields"];
    variance?: ValueTypes["ch_helper_time_slots_variance_fields"];
    __typename?: true;
  }>;
  ["ch_helper_time_slots_aggregate_order_by"]: {
    avg?: ValueTypes["ch_helper_time_slots_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["ch_helper_time_slots_max_order_by"];
    min?: ValueTypes["ch_helper_time_slots_min_order_by"];
    stddev?: ValueTypes["ch_helper_time_slots_stddev_order_by"];
    stddev_pop?: ValueTypes["ch_helper_time_slots_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["ch_helper_time_slots_stddev_samp_order_by"];
    sum?: ValueTypes["ch_helper_time_slots_sum_order_by"];
    var_pop?: ValueTypes["ch_helper_time_slots_var_pop_order_by"];
    var_samp?: ValueTypes["ch_helper_time_slots_var_samp_order_by"];
    variance?: ValueTypes["ch_helper_time_slots_variance_order_by"];
  };
  ["ch_helper_time_slots_arr_rel_insert_input"]: {
    data: ValueTypes["ch_helper_time_slots_insert_input"][];
    on_conflict?: ValueTypes["ch_helper_time_slots_on_conflict"];
  };
  ["ch_helper_time_slots_avg_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_helper_time_slots_avg_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_helper_time_slots_bool_exp"]: {
    _and?: (ValueTypes["ch_helper_time_slots_bool_exp"] | undefined)[];
    _not?: ValueTypes["ch_helper_time_slots_bool_exp"];
    _or?: (ValueTypes["ch_helper_time_slots_bool_exp"] | undefined)[];
    ch_helper?: ValueTypes["ch_helper_bool_exp"];
    ch_time_slot?: ValueTypes["ch_time_slot_bool_exp"];
    helper_id?: ValueTypes["Int_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    timeslot_id?: ValueTypes["Int_comparison_exp"];
  };
  ["ch_helper_time_slots_constraint"]: ch_helper_time_slots_constraint;
  ["ch_helper_time_slots_inc_input"]: {
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_insert_input"]: {
    ch_helper?: ValueTypes["ch_helper_obj_rel_insert_input"];
    ch_time_slot?: ValueTypes["ch_time_slot_obj_rel_insert_input"];
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_max_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_helper_time_slots_max_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_helper_time_slots_min_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_helper_time_slots_min_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_helper_time_slots_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["ch_helper_time_slots"];
    __typename?: true;
  }>;
  ["ch_helper_time_slots_obj_rel_insert_input"]: {
    data: ValueTypes["ch_helper_time_slots_insert_input"];
    on_conflict?: ValueTypes["ch_helper_time_slots_on_conflict"];
  };
  ["ch_helper_time_slots_on_conflict"]: {
    constraint: ValueTypes["ch_helper_time_slots_constraint"];
    update_columns: ValueTypes["ch_helper_time_slots_update_column"][];
    where?: ValueTypes["ch_helper_time_slots_bool_exp"];
  };
  ["ch_helper_time_slots_order_by"]: {
    ch_helper?: ValueTypes["ch_helper_order_by"];
    ch_time_slot?: ValueTypes["ch_time_slot_order_by"];
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_helper_time_slots_pk_columns_input"]: {
    id: number;
  };
  ["ch_helper_time_slots_select_column"]: ch_helper_time_slots_select_column;
  ["ch_helper_time_slots_set_input"]: {
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_stddev_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_helper_time_slots_stddev_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_helper_time_slots_stddev_pop_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_helper_time_slots_stddev_pop_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_helper_time_slots_stddev_samp_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_helper_time_slots_stddev_samp_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_helper_time_slots_sum_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_helper_time_slots_sum_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_helper_time_slots_update_column"]: ch_helper_time_slots_update_column;
  ["ch_helper_time_slots_var_pop_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_helper_time_slots_var_pop_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_helper_time_slots_var_samp_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_helper_time_slots_var_samp_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_helper_time_slots_variance_fields"]: AliasType<{
    helper_id?: true;
    id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_helper_time_slots_variance_order_by"]: {
    helper_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_helper_update_column"]: ch_helper_update_column;
  ["ch_helper_var_pop_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_helper_var_pop_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_helper_var_samp_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_helper_var_samp_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_helper_variance_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_helper_variance_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_proposal"]: AliasType<{
    ch_proposal_time_slots?: [
      {
        distinct_on?: ValueTypes["ch_proposal_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_proposal_time_slots_order_by"][];
        where?: ValueTypes["ch_proposal_time_slots_bool_exp"];
      },
      ValueTypes["ch_proposal_time_slots"]
    ];
    ch_proposal_time_slots_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_proposal_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_proposal_time_slots_order_by"][];
        where?: ValueTypes["ch_proposal_time_slots_bool_exp"];
      },
      ValueTypes["ch_proposal_time_slots_aggregate"]
    ];
    ch_wait_list?: ValueTypes["ch_wait_list"];
    city?: true;
    club?: true;
    created_at?: true;
    description?: true;
    duration_minutes?: true;
    id?: true;
    meeting?: ValueTypes["nb_meeting"];
    meeting_id?: true;
    name?: true;
    needs?: true;
    other_contact?: [{ path?: string }, true];
    other_data?: [{ path?: string }, true];
    phone?: true;
    speaker?: ValueTypes["cr_user"];
    speaker_name?: true;
    speaker_user_id?: true;
    status?: true;
    topic?: true;
    waitlist_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_aggregate"]: AliasType<{
    aggregate?: ValueTypes["ch_proposal_aggregate_fields"];
    nodes?: ValueTypes["ch_proposal"];
    __typename?: true;
  }>;
  ["ch_proposal_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["ch_proposal_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["ch_proposal_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["ch_proposal_max_fields"];
    min?: ValueTypes["ch_proposal_min_fields"];
    stddev?: ValueTypes["ch_proposal_stddev_fields"];
    stddev_pop?: ValueTypes["ch_proposal_stddev_pop_fields"];
    stddev_samp?: ValueTypes["ch_proposal_stddev_samp_fields"];
    sum?: ValueTypes["ch_proposal_sum_fields"];
    var_pop?: ValueTypes["ch_proposal_var_pop_fields"];
    var_samp?: ValueTypes["ch_proposal_var_samp_fields"];
    variance?: ValueTypes["ch_proposal_variance_fields"];
    __typename?: true;
  }>;
  ["ch_proposal_aggregate_order_by"]: {
    avg?: ValueTypes["ch_proposal_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["ch_proposal_max_order_by"];
    min?: ValueTypes["ch_proposal_min_order_by"];
    stddev?: ValueTypes["ch_proposal_stddev_order_by"];
    stddev_pop?: ValueTypes["ch_proposal_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["ch_proposal_stddev_samp_order_by"];
    sum?: ValueTypes["ch_proposal_sum_order_by"];
    var_pop?: ValueTypes["ch_proposal_var_pop_order_by"];
    var_samp?: ValueTypes["ch_proposal_var_samp_order_by"];
    variance?: ValueTypes["ch_proposal_variance_order_by"];
  };
  ["ch_proposal_append_input"]: {
    other_contact?: ValueTypes["jsonb"];
    other_data?: ValueTypes["jsonb"];
  };
  ["ch_proposal_arr_rel_insert_input"]: {
    data: ValueTypes["ch_proposal_insert_input"][];
    on_conflict?: ValueTypes["ch_proposal_on_conflict"];
  };
  ["ch_proposal_avg_fields"]: AliasType<{
    duration_minutes?: true;
    id?: true;
    meeting_id?: true;
    waitlist_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_avg_order_by"]: {
    duration_minutes?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    waitlist_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_bool_exp"]: {
    _and?: (ValueTypes["ch_proposal_bool_exp"] | undefined)[];
    _not?: ValueTypes["ch_proposal_bool_exp"];
    _or?: (ValueTypes["ch_proposal_bool_exp"] | undefined)[];
    ch_proposal_time_slots?: ValueTypes["ch_proposal_time_slots_bool_exp"];
    ch_wait_list?: ValueTypes["ch_wait_list_bool_exp"];
    city?: ValueTypes["String_comparison_exp"];
    club?: ValueTypes["String_comparison_exp"];
    created_at?: ValueTypes["timestamptz_comparison_exp"];
    description?: ValueTypes["String_comparison_exp"];
    duration_minutes?: ValueTypes["Int_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    meeting?: ValueTypes["nb_meeting_bool_exp"];
    meeting_id?: ValueTypes["Int_comparison_exp"];
    name?: ValueTypes["String_comparison_exp"];
    needs?: ValueTypes["String_comparison_exp"];
    other_contact?: ValueTypes["jsonb_comparison_exp"];
    other_data?: ValueTypes["jsonb_comparison_exp"];
    phone?: ValueTypes["String_comparison_exp"];
    speaker?: ValueTypes["cr_user_bool_exp"];
    speaker_name?: ValueTypes["String_comparison_exp"];
    speaker_user_id?: ValueTypes["uuid_comparison_exp"];
    status?: ValueTypes["String_comparison_exp"];
    topic?: ValueTypes["String_comparison_exp"];
    waitlist_id?: ValueTypes["Int_comparison_exp"];
  };
  ["ch_proposal_constraint"]: ch_proposal_constraint;
  ["ch_proposal_delete_at_path_input"]: {
    other_contact?: (string | undefined)[];
    other_data?: (string | undefined)[];
  };
  ["ch_proposal_delete_elem_input"]: {
    other_contact?: number;
    other_data?: number;
  };
  ["ch_proposal_delete_key_input"]: {
    other_contact?: string;
    other_data?: string;
  };
  ["ch_proposal_inc_input"]: {
    duration_minutes?: number;
    id?: number;
    meeting_id?: number;
    waitlist_id?: number;
  };
  ["ch_proposal_insert_input"]: {
    ch_proposal_time_slots?: ValueTypes["ch_proposal_time_slots_arr_rel_insert_input"];
    ch_wait_list?: ValueTypes["ch_wait_list_obj_rel_insert_input"];
    city?: string;
    club?: string;
    created_at?: ValueTypes["timestamptz"];
    description?: string;
    duration_minutes?: number;
    id?: number;
    meeting?: ValueTypes["nb_meeting_obj_rel_insert_input"];
    meeting_id?: number;
    name?: string;
    needs?: string;
    other_contact?: ValueTypes["jsonb"];
    other_data?: ValueTypes["jsonb"];
    phone?: string;
    speaker?: ValueTypes["cr_user_obj_rel_insert_input"];
    speaker_name?: string;
    speaker_user_id?: ValueTypes["uuid"];
    status?: string;
    topic?: string;
    waitlist_id?: number;
  };
  ["ch_proposal_max_fields"]: AliasType<{
    city?: true;
    club?: true;
    created_at?: true;
    description?: true;
    duration_minutes?: true;
    id?: true;
    meeting_id?: true;
    name?: true;
    needs?: true;
    phone?: true;
    speaker_name?: true;
    speaker_user_id?: true;
    status?: true;
    topic?: true;
    waitlist_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_max_order_by"]: {
    city?: ValueTypes["order_by"];
    club?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    description?: ValueTypes["order_by"];
    duration_minutes?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    needs?: ValueTypes["order_by"];
    phone?: ValueTypes["order_by"];
    speaker_name?: ValueTypes["order_by"];
    speaker_user_id?: ValueTypes["order_by"];
    status?: ValueTypes["order_by"];
    topic?: ValueTypes["order_by"];
    waitlist_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_min_fields"]: AliasType<{
    city?: true;
    club?: true;
    created_at?: true;
    description?: true;
    duration_minutes?: true;
    id?: true;
    meeting_id?: true;
    name?: true;
    needs?: true;
    phone?: true;
    speaker_name?: true;
    speaker_user_id?: true;
    status?: true;
    topic?: true;
    waitlist_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_min_order_by"]: {
    city?: ValueTypes["order_by"];
    club?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    description?: ValueTypes["order_by"];
    duration_minutes?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    needs?: ValueTypes["order_by"];
    phone?: ValueTypes["order_by"];
    speaker_name?: ValueTypes["order_by"];
    speaker_user_id?: ValueTypes["order_by"];
    status?: ValueTypes["order_by"];
    topic?: ValueTypes["order_by"];
    waitlist_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["ch_proposal"];
    __typename?: true;
  }>;
  ["ch_proposal_obj_rel_insert_input"]: {
    data: ValueTypes["ch_proposal_insert_input"];
    on_conflict?: ValueTypes["ch_proposal_on_conflict"];
  };
  ["ch_proposal_on_conflict"]: {
    constraint: ValueTypes["ch_proposal_constraint"];
    update_columns: ValueTypes["ch_proposal_update_column"][];
    where?: ValueTypes["ch_proposal_bool_exp"];
  };
  ["ch_proposal_order_by"]: {
    ch_proposal_time_slots_aggregate?: ValueTypes["ch_proposal_time_slots_aggregate_order_by"];
    ch_wait_list?: ValueTypes["ch_wait_list_order_by"];
    city?: ValueTypes["order_by"];
    club?: ValueTypes["order_by"];
    created_at?: ValueTypes["order_by"];
    description?: ValueTypes["order_by"];
    duration_minutes?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting?: ValueTypes["nb_meeting_order_by"];
    meeting_id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    needs?: ValueTypes["order_by"];
    other_contact?: ValueTypes["order_by"];
    other_data?: ValueTypes["order_by"];
    phone?: ValueTypes["order_by"];
    speaker?: ValueTypes["cr_user_order_by"];
    speaker_name?: ValueTypes["order_by"];
    speaker_user_id?: ValueTypes["order_by"];
    status?: ValueTypes["order_by"];
    topic?: ValueTypes["order_by"];
    waitlist_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_pk_columns_input"]: {
    id: number;
  };
  ["ch_proposal_prepend_input"]: {
    other_contact?: ValueTypes["jsonb"];
    other_data?: ValueTypes["jsonb"];
  };
  ["ch_proposal_select_column"]: ch_proposal_select_column;
  ["ch_proposal_set_input"]: {
    city?: string;
    club?: string;
    created_at?: ValueTypes["timestamptz"];
    description?: string;
    duration_minutes?: number;
    id?: number;
    meeting_id?: number;
    name?: string;
    needs?: string;
    other_contact?: ValueTypes["jsonb"];
    other_data?: ValueTypes["jsonb"];
    phone?: string;
    speaker_name?: string;
    speaker_user_id?: ValueTypes["uuid"];
    status?: string;
    topic?: string;
    waitlist_id?: number;
  };
  ["ch_proposal_stddev_fields"]: AliasType<{
    duration_minutes?: true;
    id?: true;
    meeting_id?: true;
    waitlist_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_stddev_order_by"]: {
    duration_minutes?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    waitlist_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_stddev_pop_fields"]: AliasType<{
    duration_minutes?: true;
    id?: true;
    meeting_id?: true;
    waitlist_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_stddev_pop_order_by"]: {
    duration_minutes?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    waitlist_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_stddev_samp_fields"]: AliasType<{
    duration_minutes?: true;
    id?: true;
    meeting_id?: true;
    waitlist_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_stddev_samp_order_by"]: {
    duration_minutes?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    waitlist_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_sum_fields"]: AliasType<{
    duration_minutes?: true;
    id?: true;
    meeting_id?: true;
    waitlist_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_sum_order_by"]: {
    duration_minutes?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    waitlist_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_time_slots"]: AliasType<{
    ch_proposal?: ValueTypes["ch_proposal"];
    ch_time_slot?: ValueTypes["ch_time_slot"];
    id?: true;
    proposal_id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_time_slots_aggregate"]: AliasType<{
    aggregate?: ValueTypes["ch_proposal_time_slots_aggregate_fields"];
    nodes?: ValueTypes["ch_proposal_time_slots"];
    __typename?: true;
  }>;
  ["ch_proposal_time_slots_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["ch_proposal_time_slots_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["ch_proposal_time_slots_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["ch_proposal_time_slots_max_fields"];
    min?: ValueTypes["ch_proposal_time_slots_min_fields"];
    stddev?: ValueTypes["ch_proposal_time_slots_stddev_fields"];
    stddev_pop?: ValueTypes["ch_proposal_time_slots_stddev_pop_fields"];
    stddev_samp?: ValueTypes["ch_proposal_time_slots_stddev_samp_fields"];
    sum?: ValueTypes["ch_proposal_time_slots_sum_fields"];
    var_pop?: ValueTypes["ch_proposal_time_slots_var_pop_fields"];
    var_samp?: ValueTypes["ch_proposal_time_slots_var_samp_fields"];
    variance?: ValueTypes["ch_proposal_time_slots_variance_fields"];
    __typename?: true;
  }>;
  ["ch_proposal_time_slots_aggregate_order_by"]: {
    avg?: ValueTypes["ch_proposal_time_slots_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["ch_proposal_time_slots_max_order_by"];
    min?: ValueTypes["ch_proposal_time_slots_min_order_by"];
    stddev?: ValueTypes["ch_proposal_time_slots_stddev_order_by"];
    stddev_pop?: ValueTypes["ch_proposal_time_slots_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["ch_proposal_time_slots_stddev_samp_order_by"];
    sum?: ValueTypes["ch_proposal_time_slots_sum_order_by"];
    var_pop?: ValueTypes["ch_proposal_time_slots_var_pop_order_by"];
    var_samp?: ValueTypes["ch_proposal_time_slots_var_samp_order_by"];
    variance?: ValueTypes["ch_proposal_time_slots_variance_order_by"];
  };
  ["ch_proposal_time_slots_arr_rel_insert_input"]: {
    data: ValueTypes["ch_proposal_time_slots_insert_input"][];
    on_conflict?: ValueTypes["ch_proposal_time_slots_on_conflict"];
  };
  ["ch_proposal_time_slots_avg_fields"]: AliasType<{
    id?: true;
    proposal_id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_time_slots_avg_order_by"]: {
    id?: ValueTypes["order_by"];
    proposal_id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_time_slots_bool_exp"]: {
    _and?: (ValueTypes["ch_proposal_time_slots_bool_exp"] | undefined)[];
    _not?: ValueTypes["ch_proposal_time_slots_bool_exp"];
    _or?: (ValueTypes["ch_proposal_time_slots_bool_exp"] | undefined)[];
    ch_proposal?: ValueTypes["ch_proposal_bool_exp"];
    ch_time_slot?: ValueTypes["ch_time_slot_bool_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    proposal_id?: ValueTypes["Int_comparison_exp"];
    timeslot_id?: ValueTypes["Int_comparison_exp"];
  };
  ["ch_proposal_time_slots_constraint"]: ch_proposal_time_slots_constraint;
  ["ch_proposal_time_slots_inc_input"]: {
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_insert_input"]: {
    ch_proposal?: ValueTypes["ch_proposal_obj_rel_insert_input"];
    ch_time_slot?: ValueTypes["ch_time_slot_obj_rel_insert_input"];
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_max_fields"]: AliasType<{
    id?: true;
    proposal_id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_time_slots_max_order_by"]: {
    id?: ValueTypes["order_by"];
    proposal_id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_time_slots_min_fields"]: AliasType<{
    id?: true;
    proposal_id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_time_slots_min_order_by"]: {
    id?: ValueTypes["order_by"];
    proposal_id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_time_slots_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["ch_proposal_time_slots"];
    __typename?: true;
  }>;
  ["ch_proposal_time_slots_obj_rel_insert_input"]: {
    data: ValueTypes["ch_proposal_time_slots_insert_input"];
    on_conflict?: ValueTypes["ch_proposal_time_slots_on_conflict"];
  };
  ["ch_proposal_time_slots_on_conflict"]: {
    constraint: ValueTypes["ch_proposal_time_slots_constraint"];
    update_columns: ValueTypes["ch_proposal_time_slots_update_column"][];
    where?: ValueTypes["ch_proposal_time_slots_bool_exp"];
  };
  ["ch_proposal_time_slots_order_by"]: {
    ch_proposal?: ValueTypes["ch_proposal_order_by"];
    ch_time_slot?: ValueTypes["ch_time_slot_order_by"];
    id?: ValueTypes["order_by"];
    proposal_id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_time_slots_pk_columns_input"]: {
    id: number;
  };
  ["ch_proposal_time_slots_select_column"]: ch_proposal_time_slots_select_column;
  ["ch_proposal_time_slots_set_input"]: {
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_stddev_fields"]: AliasType<{
    id?: true;
    proposal_id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_time_slots_stddev_order_by"]: {
    id?: ValueTypes["order_by"];
    proposal_id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_time_slots_stddev_pop_fields"]: AliasType<{
    id?: true;
    proposal_id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_time_slots_stddev_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    proposal_id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_time_slots_stddev_samp_fields"]: AliasType<{
    id?: true;
    proposal_id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_time_slots_stddev_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    proposal_id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_time_slots_sum_fields"]: AliasType<{
    id?: true;
    proposal_id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_time_slots_sum_order_by"]: {
    id?: ValueTypes["order_by"];
    proposal_id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_time_slots_update_column"]: ch_proposal_time_slots_update_column;
  ["ch_proposal_time_slots_var_pop_fields"]: AliasType<{
    id?: true;
    proposal_id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_time_slots_var_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    proposal_id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_time_slots_var_samp_fields"]: AliasType<{
    id?: true;
    proposal_id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_time_slots_var_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    proposal_id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_time_slots_variance_fields"]: AliasType<{
    id?: true;
    proposal_id?: true;
    timeslot_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_time_slots_variance_order_by"]: {
    id?: ValueTypes["order_by"];
    proposal_id?: ValueTypes["order_by"];
    timeslot_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_update_column"]: ch_proposal_update_column;
  ["ch_proposal_var_pop_fields"]: AliasType<{
    duration_minutes?: true;
    id?: true;
    meeting_id?: true;
    waitlist_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_var_pop_order_by"]: {
    duration_minutes?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    waitlist_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_var_samp_fields"]: AliasType<{
    duration_minutes?: true;
    id?: true;
    meeting_id?: true;
    waitlist_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_var_samp_order_by"]: {
    duration_minutes?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    waitlist_id?: ValueTypes["order_by"];
  };
  ["ch_proposal_variance_fields"]: AliasType<{
    duration_minutes?: true;
    id?: true;
    meeting_id?: true;
    waitlist_id?: true;
    __typename?: true;
  }>;
  ["ch_proposal_variance_order_by"]: {
    duration_minutes?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    waitlist_id?: ValueTypes["order_by"];
  };
  ["ch_room"]: AliasType<{
    ch_agenda_items?: [
      {
        distinct_on?: ValueTypes["ch_agenda_item_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_agenda_item_order_by"][];
        where?: ValueTypes["ch_agenda_item_bool_exp"];
      },
      ValueTypes["ch_agenda_item"]
    ];
    ch_agenda_items_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_agenda_item_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_agenda_item_order_by"][];
        where?: ValueTypes["ch_agenda_item_bool_exp"];
      },
      ValueTypes["ch_agenda_item_aggregate"]
    ];
    ch_festival?: ValueTypes["ch_festival"];
    festival_id?: true;
    id?: true;
    name?: true;
    slug?: true;
    __typename?: true;
  }>;
  ["ch_room_aggregate"]: AliasType<{
    aggregate?: ValueTypes["ch_room_aggregate_fields"];
    nodes?: ValueTypes["ch_room"];
    __typename?: true;
  }>;
  ["ch_room_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["ch_room_avg_fields"];
    count?: [
      { columns?: ValueTypes["ch_room_select_column"][]; distinct?: boolean },
      true
    ];
    max?: ValueTypes["ch_room_max_fields"];
    min?: ValueTypes["ch_room_min_fields"];
    stddev?: ValueTypes["ch_room_stddev_fields"];
    stddev_pop?: ValueTypes["ch_room_stddev_pop_fields"];
    stddev_samp?: ValueTypes["ch_room_stddev_samp_fields"];
    sum?: ValueTypes["ch_room_sum_fields"];
    var_pop?: ValueTypes["ch_room_var_pop_fields"];
    var_samp?: ValueTypes["ch_room_var_samp_fields"];
    variance?: ValueTypes["ch_room_variance_fields"];
    __typename?: true;
  }>;
  ["ch_room_aggregate_order_by"]: {
    avg?: ValueTypes["ch_room_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["ch_room_max_order_by"];
    min?: ValueTypes["ch_room_min_order_by"];
    stddev?: ValueTypes["ch_room_stddev_order_by"];
    stddev_pop?: ValueTypes["ch_room_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["ch_room_stddev_samp_order_by"];
    sum?: ValueTypes["ch_room_sum_order_by"];
    var_pop?: ValueTypes["ch_room_var_pop_order_by"];
    var_samp?: ValueTypes["ch_room_var_samp_order_by"];
    variance?: ValueTypes["ch_room_variance_order_by"];
  };
  ["ch_room_arr_rel_insert_input"]: {
    data: ValueTypes["ch_room_insert_input"][];
    on_conflict?: ValueTypes["ch_room_on_conflict"];
  };
  ["ch_room_avg_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_room_avg_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_room_bool_exp"]: {
    _and?: (ValueTypes["ch_room_bool_exp"] | undefined)[];
    _not?: ValueTypes["ch_room_bool_exp"];
    _or?: (ValueTypes["ch_room_bool_exp"] | undefined)[];
    ch_agenda_items?: ValueTypes["ch_agenda_item_bool_exp"];
    ch_festival?: ValueTypes["ch_festival_bool_exp"];
    festival_id?: ValueTypes["Int_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    name?: ValueTypes["String_comparison_exp"];
    slug?: ValueTypes["String_comparison_exp"];
  };
  ["ch_room_constraint"]: ch_room_constraint;
  ["ch_room_inc_input"]: {
    festival_id?: number;
    id?: number;
  };
  ["ch_room_insert_input"]: {
    ch_agenda_items?: ValueTypes["ch_agenda_item_arr_rel_insert_input"];
    ch_festival?: ValueTypes["ch_festival_obj_rel_insert_input"];
    festival_id?: number;
    id?: number;
    name?: string;
    slug?: string;
  };
  ["ch_room_max_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    name?: true;
    slug?: true;
    __typename?: true;
  }>;
  ["ch_room_max_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    slug?: ValueTypes["order_by"];
  };
  ["ch_room_min_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    name?: true;
    slug?: true;
    __typename?: true;
  }>;
  ["ch_room_min_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    slug?: ValueTypes["order_by"];
  };
  ["ch_room_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["ch_room"];
    __typename?: true;
  }>;
  ["ch_room_obj_rel_insert_input"]: {
    data: ValueTypes["ch_room_insert_input"];
    on_conflict?: ValueTypes["ch_room_on_conflict"];
  };
  ["ch_room_on_conflict"]: {
    constraint: ValueTypes["ch_room_constraint"];
    update_columns: ValueTypes["ch_room_update_column"][];
    where?: ValueTypes["ch_room_bool_exp"];
  };
  ["ch_room_order_by"]: {
    ch_agenda_items_aggregate?: ValueTypes["ch_agenda_item_aggregate_order_by"];
    ch_festival?: ValueTypes["ch_festival_order_by"];
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    slug?: ValueTypes["order_by"];
  };
  ["ch_room_pk_columns_input"]: {
    id: number;
  };
  ["ch_room_select_column"]: ch_room_select_column;
  ["ch_room_set_input"]: {
    festival_id?: number;
    id?: number;
    name?: string;
    slug?: string;
  };
  ["ch_room_stddev_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_room_stddev_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_room_stddev_pop_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_room_stddev_pop_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_room_stddev_samp_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_room_stddev_samp_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_room_sum_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_room_sum_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_room_update_column"]: ch_room_update_column;
  ["ch_room_var_pop_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_room_var_pop_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_room_var_samp_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_room_var_samp_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_room_variance_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_room_variance_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_time_slot"]: AliasType<{
    ch_helper_time_slots?: [
      {
        distinct_on?: ValueTypes["ch_helper_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_time_slots_order_by"][];
        where?: ValueTypes["ch_helper_time_slots_bool_exp"];
      },
      ValueTypes["ch_helper_time_slots"]
    ];
    ch_helper_time_slots_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_helper_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_time_slots_order_by"][];
        where?: ValueTypes["ch_helper_time_slots_bool_exp"];
      },
      ValueTypes["ch_helper_time_slots_aggregate"]
    ];
    ch_proposal_time_slots?: [
      {
        distinct_on?: ValueTypes["ch_proposal_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_proposal_time_slots_order_by"][];
        where?: ValueTypes["ch_proposal_time_slots_bool_exp"];
      },
      ValueTypes["ch_proposal_time_slots"]
    ];
    ch_proposal_time_slots_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_proposal_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_proposal_time_slots_order_by"][];
        where?: ValueTypes["ch_proposal_time_slots_bool_exp"];
      },
      ValueTypes["ch_proposal_time_slots_aggregate"]
    ];
    end_time?: true;
    festival_id?: true;
    id?: true;
    start_time?: true;
    __typename?: true;
  }>;
  ["ch_time_slot_aggregate"]: AliasType<{
    aggregate?: ValueTypes["ch_time_slot_aggregate_fields"];
    nodes?: ValueTypes["ch_time_slot"];
    __typename?: true;
  }>;
  ["ch_time_slot_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["ch_time_slot_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["ch_time_slot_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["ch_time_slot_max_fields"];
    min?: ValueTypes["ch_time_slot_min_fields"];
    stddev?: ValueTypes["ch_time_slot_stddev_fields"];
    stddev_pop?: ValueTypes["ch_time_slot_stddev_pop_fields"];
    stddev_samp?: ValueTypes["ch_time_slot_stddev_samp_fields"];
    sum?: ValueTypes["ch_time_slot_sum_fields"];
    var_pop?: ValueTypes["ch_time_slot_var_pop_fields"];
    var_samp?: ValueTypes["ch_time_slot_var_samp_fields"];
    variance?: ValueTypes["ch_time_slot_variance_fields"];
    __typename?: true;
  }>;
  ["ch_time_slot_aggregate_order_by"]: {
    avg?: ValueTypes["ch_time_slot_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["ch_time_slot_max_order_by"];
    min?: ValueTypes["ch_time_slot_min_order_by"];
    stddev?: ValueTypes["ch_time_slot_stddev_order_by"];
    stddev_pop?: ValueTypes["ch_time_slot_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["ch_time_slot_stddev_samp_order_by"];
    sum?: ValueTypes["ch_time_slot_sum_order_by"];
    var_pop?: ValueTypes["ch_time_slot_var_pop_order_by"];
    var_samp?: ValueTypes["ch_time_slot_var_samp_order_by"];
    variance?: ValueTypes["ch_time_slot_variance_order_by"];
  };
  ["ch_time_slot_arr_rel_insert_input"]: {
    data: ValueTypes["ch_time_slot_insert_input"][];
    on_conflict?: ValueTypes["ch_time_slot_on_conflict"];
  };
  ["ch_time_slot_avg_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_time_slot_avg_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_time_slot_bool_exp"]: {
    _and?: (ValueTypes["ch_time_slot_bool_exp"] | undefined)[];
    _not?: ValueTypes["ch_time_slot_bool_exp"];
    _or?: (ValueTypes["ch_time_slot_bool_exp"] | undefined)[];
    ch_helper_time_slots?: ValueTypes["ch_helper_time_slots_bool_exp"];
    ch_proposal_time_slots?: ValueTypes["ch_proposal_time_slots_bool_exp"];
    end_time?: ValueTypes["timestamptz_comparison_exp"];
    festival_id?: ValueTypes["Int_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    start_time?: ValueTypes["timestamptz_comparison_exp"];
  };
  ["ch_time_slot_constraint"]: ch_time_slot_constraint;
  ["ch_time_slot_inc_input"]: {
    festival_id?: number;
    id?: number;
  };
  ["ch_time_slot_insert_input"]: {
    ch_helper_time_slots?: ValueTypes["ch_helper_time_slots_arr_rel_insert_input"];
    ch_proposal_time_slots?: ValueTypes["ch_proposal_time_slots_arr_rel_insert_input"];
    end_time?: ValueTypes["timestamptz"];
    festival_id?: number;
    id?: number;
    start_time?: ValueTypes["timestamptz"];
  };
  ["ch_time_slot_max_fields"]: AliasType<{
    end_time?: true;
    festival_id?: true;
    id?: true;
    start_time?: true;
    __typename?: true;
  }>;
  ["ch_time_slot_max_order_by"]: {
    end_time?: ValueTypes["order_by"];
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    start_time?: ValueTypes["order_by"];
  };
  ["ch_time_slot_min_fields"]: AliasType<{
    end_time?: true;
    festival_id?: true;
    id?: true;
    start_time?: true;
    __typename?: true;
  }>;
  ["ch_time_slot_min_order_by"]: {
    end_time?: ValueTypes["order_by"];
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    start_time?: ValueTypes["order_by"];
  };
  ["ch_time_slot_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["ch_time_slot"];
    __typename?: true;
  }>;
  ["ch_time_slot_obj_rel_insert_input"]: {
    data: ValueTypes["ch_time_slot_insert_input"];
    on_conflict?: ValueTypes["ch_time_slot_on_conflict"];
  };
  ["ch_time_slot_on_conflict"]: {
    constraint: ValueTypes["ch_time_slot_constraint"];
    update_columns: ValueTypes["ch_time_slot_update_column"][];
    where?: ValueTypes["ch_time_slot_bool_exp"];
  };
  ["ch_time_slot_order_by"]: {
    ch_helper_time_slots_aggregate?: ValueTypes["ch_helper_time_slots_aggregate_order_by"];
    ch_proposal_time_slots_aggregate?: ValueTypes["ch_proposal_time_slots_aggregate_order_by"];
    end_time?: ValueTypes["order_by"];
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    start_time?: ValueTypes["order_by"];
  };
  ["ch_time_slot_pk_columns_input"]: {
    id: number;
  };
  ["ch_time_slot_select_column"]: ch_time_slot_select_column;
  ["ch_time_slot_set_input"]: {
    end_time?: ValueTypes["timestamptz"];
    festival_id?: number;
    id?: number;
    start_time?: ValueTypes["timestamptz"];
  };
  ["ch_time_slot_stddev_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_time_slot_stddev_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_time_slot_stddev_pop_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_time_slot_stddev_pop_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_time_slot_stddev_samp_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_time_slot_stddev_samp_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_time_slot_sum_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_time_slot_sum_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_time_slot_update_column"]: ch_time_slot_update_column;
  ["ch_time_slot_var_pop_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_time_slot_var_pop_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_time_slot_var_samp_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_time_slot_var_samp_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_time_slot_variance_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_time_slot_variance_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_wait_list"]: AliasType<{
    ch_festival?: ValueTypes["ch_festival"];
    ch_proposals?: [
      {
        distinct_on?: ValueTypes["ch_proposal_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_proposal_order_by"][];
        where?: ValueTypes["ch_proposal_bool_exp"];
      },
      ValueTypes["ch_proposal"]
    ];
    ch_proposals_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_proposal_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_proposal_order_by"][];
        where?: ValueTypes["ch_proposal_bool_exp"];
      },
      ValueTypes["ch_proposal_aggregate"]
    ];
    festival_id?: true;
    id?: true;
    name?: true;
    slug?: true;
    __typename?: true;
  }>;
  ["ch_wait_list_aggregate"]: AliasType<{
    aggregate?: ValueTypes["ch_wait_list_aggregate_fields"];
    nodes?: ValueTypes["ch_wait_list"];
    __typename?: true;
  }>;
  ["ch_wait_list_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["ch_wait_list_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["ch_wait_list_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["ch_wait_list_max_fields"];
    min?: ValueTypes["ch_wait_list_min_fields"];
    stddev?: ValueTypes["ch_wait_list_stddev_fields"];
    stddev_pop?: ValueTypes["ch_wait_list_stddev_pop_fields"];
    stddev_samp?: ValueTypes["ch_wait_list_stddev_samp_fields"];
    sum?: ValueTypes["ch_wait_list_sum_fields"];
    var_pop?: ValueTypes["ch_wait_list_var_pop_fields"];
    var_samp?: ValueTypes["ch_wait_list_var_samp_fields"];
    variance?: ValueTypes["ch_wait_list_variance_fields"];
    __typename?: true;
  }>;
  ["ch_wait_list_aggregate_order_by"]: {
    avg?: ValueTypes["ch_wait_list_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["ch_wait_list_max_order_by"];
    min?: ValueTypes["ch_wait_list_min_order_by"];
    stddev?: ValueTypes["ch_wait_list_stddev_order_by"];
    stddev_pop?: ValueTypes["ch_wait_list_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["ch_wait_list_stddev_samp_order_by"];
    sum?: ValueTypes["ch_wait_list_sum_order_by"];
    var_pop?: ValueTypes["ch_wait_list_var_pop_order_by"];
    var_samp?: ValueTypes["ch_wait_list_var_samp_order_by"];
    variance?: ValueTypes["ch_wait_list_variance_order_by"];
  };
  ["ch_wait_list_arr_rel_insert_input"]: {
    data: ValueTypes["ch_wait_list_insert_input"][];
    on_conflict?: ValueTypes["ch_wait_list_on_conflict"];
  };
  ["ch_wait_list_avg_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_wait_list_avg_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_wait_list_bool_exp"]: {
    _and?: (ValueTypes["ch_wait_list_bool_exp"] | undefined)[];
    _not?: ValueTypes["ch_wait_list_bool_exp"];
    _or?: (ValueTypes["ch_wait_list_bool_exp"] | undefined)[];
    ch_festival?: ValueTypes["ch_festival_bool_exp"];
    ch_proposals?: ValueTypes["ch_proposal_bool_exp"];
    festival_id?: ValueTypes["Int_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    name?: ValueTypes["String_comparison_exp"];
    slug?: ValueTypes["String_comparison_exp"];
  };
  ["ch_wait_list_constraint"]: ch_wait_list_constraint;
  ["ch_wait_list_inc_input"]: {
    festival_id?: number;
    id?: number;
  };
  ["ch_wait_list_insert_input"]: {
    ch_festival?: ValueTypes["ch_festival_obj_rel_insert_input"];
    ch_proposals?: ValueTypes["ch_proposal_arr_rel_insert_input"];
    festival_id?: number;
    id?: number;
    name?: string;
    slug?: string;
  };
  ["ch_wait_list_max_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    name?: true;
    slug?: true;
    __typename?: true;
  }>;
  ["ch_wait_list_max_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    slug?: ValueTypes["order_by"];
  };
  ["ch_wait_list_min_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    name?: true;
    slug?: true;
    __typename?: true;
  }>;
  ["ch_wait_list_min_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    slug?: ValueTypes["order_by"];
  };
  ["ch_wait_list_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["ch_wait_list"];
    __typename?: true;
  }>;
  ["ch_wait_list_obj_rel_insert_input"]: {
    data: ValueTypes["ch_wait_list_insert_input"];
    on_conflict?: ValueTypes["ch_wait_list_on_conflict"];
  };
  ["ch_wait_list_on_conflict"]: {
    constraint: ValueTypes["ch_wait_list_constraint"];
    update_columns: ValueTypes["ch_wait_list_update_column"][];
    where?: ValueTypes["ch_wait_list_bool_exp"];
  };
  ["ch_wait_list_order_by"]: {
    ch_festival?: ValueTypes["ch_festival_order_by"];
    ch_proposals_aggregate?: ValueTypes["ch_proposal_aggregate_order_by"];
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    slug?: ValueTypes["order_by"];
  };
  ["ch_wait_list_pk_columns_input"]: {
    id: number;
  };
  ["ch_wait_list_select_column"]: ch_wait_list_select_column;
  ["ch_wait_list_set_input"]: {
    festival_id?: number;
    id?: number;
    name?: string;
    slug?: string;
  };
  ["ch_wait_list_stddev_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_wait_list_stddev_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_wait_list_stddev_pop_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_wait_list_stddev_pop_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_wait_list_stddev_samp_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_wait_list_stddev_samp_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_wait_list_sum_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_wait_list_sum_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_wait_list_update_column"]: ch_wait_list_update_column;
  ["ch_wait_list_var_pop_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_wait_list_var_pop_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_wait_list_var_samp_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_wait_list_var_samp_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["ch_wait_list_variance_fields"]: AliasType<{
    festival_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["ch_wait_list_variance_order_by"]: {
    festival_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["cr_user"]: AliasType<{
    auth0_id?: true;
    ch_helpers?: [
      {
        distinct_on?: ValueTypes["ch_helper_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_order_by"][];
        where?: ValueTypes["ch_helper_bool_exp"];
      },
      ValueTypes["ch_helper"]
    ];
    ch_helpers_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_helper_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_order_by"][];
        where?: ValueTypes["ch_helper_bool_exp"];
      },
      ValueTypes["ch_helper_aggregate"]
    ];
    date_joined?: true;
    email?: true;
    first_name?: true;
    guilds?: [
      {
        distinct_on?: ValueTypes["nb_guild_member_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_guild_member_order_by"][];
        where?: ValueTypes["nb_guild_member_bool_exp"];
      },
      ValueTypes["nb_guild_member"]
    ];
    guilds_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_guild_member_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_guild_member_order_by"][];
        where?: ValueTypes["nb_guild_member_bool_exp"];
      },
      ValueTypes["nb_guild_member_aggregate"]
    ];
    is_active?: true;
    is_staff?: true;
    is_superuser?: true;
    last_login?: true;
    last_name?: true;
    locale?: true;
    managed_spheres?: [
      {
        distinct_on?: ValueTypes["nb_sphere_managers_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_sphere_managers_order_by"][];
        where?: ValueTypes["nb_sphere_managers_bool_exp"];
      },
      ValueTypes["nb_sphere_managers"]
    ];
    managed_spheres_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_sphere_managers_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_sphere_managers_order_by"][];
        where?: ValueTypes["nb_sphere_managers_bool_exp"];
      },
      ValueTypes["nb_sphere_managers_aggregate"]
    ];
    meetings?: [
      {
        distinct_on?: ValueTypes["nb_meeting_participants_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_participants_order_by"][];
        where?: ValueTypes["nb_meeting_participants_bool_exp"];
      },
      ValueTypes["nb_meeting_participants"]
    ];
    meetings_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_meeting_participants_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_participants_order_by"][];
        where?: ValueTypes["nb_meeting_participants_bool_exp"];
      },
      ValueTypes["nb_meeting_participants_aggregate"]
    ];
    organized_meetings?: [
      {
        distinct_on?: ValueTypes["nb_meeting_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_order_by"][];
        where?: ValueTypes["nb_meeting_bool_exp"];
      },
      ValueTypes["nb_meeting"]
    ];
    organized_meetings_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_meeting_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_order_by"][];
        where?: ValueTypes["nb_meeting_bool_exp"];
      },
      ValueTypes["nb_meeting_aggregate"]
    ];
    password?: true;
    username?: true;
    uuid?: true;
    __typename?: true;
  }>;
  ["cr_user_aggregate"]: AliasType<{
    aggregate?: ValueTypes["cr_user_aggregate_fields"];
    nodes?: ValueTypes["cr_user"];
    __typename?: true;
  }>;
  ["cr_user_aggregate_fields"]: AliasType<{
    count?: [
      { columns?: ValueTypes["cr_user_select_column"][]; distinct?: boolean },
      true
    ];
    max?: ValueTypes["cr_user_max_fields"];
    min?: ValueTypes["cr_user_min_fields"];
    __typename?: true;
  }>;
  ["cr_user_aggregate_order_by"]: {
    count?: ValueTypes["order_by"];
    max?: ValueTypes["cr_user_max_order_by"];
    min?: ValueTypes["cr_user_min_order_by"];
  };
  ["cr_user_arr_rel_insert_input"]: {
    data: ValueTypes["cr_user_insert_input"][];
    on_conflict?: ValueTypes["cr_user_on_conflict"];
  };
  ["cr_user_bool_exp"]: {
    _and?: (ValueTypes["cr_user_bool_exp"] | undefined)[];
    _not?: ValueTypes["cr_user_bool_exp"];
    _or?: (ValueTypes["cr_user_bool_exp"] | undefined)[];
    auth0_id?: ValueTypes["String_comparison_exp"];
    ch_helpers?: ValueTypes["ch_helper_bool_exp"];
    date_joined?: ValueTypes["timestamptz_comparison_exp"];
    email?: ValueTypes["String_comparison_exp"];
    first_name?: ValueTypes["String_comparison_exp"];
    guilds?: ValueTypes["nb_guild_member_bool_exp"];
    is_active?: ValueTypes["Boolean_comparison_exp"];
    is_staff?: ValueTypes["Boolean_comparison_exp"];
    is_superuser?: ValueTypes["Boolean_comparison_exp"];
    last_login?: ValueTypes["timestamptz_comparison_exp"];
    last_name?: ValueTypes["String_comparison_exp"];
    locale?: ValueTypes["String_comparison_exp"];
    managed_spheres?: ValueTypes["nb_sphere_managers_bool_exp"];
    meetings?: ValueTypes["nb_meeting_participants_bool_exp"];
    organized_meetings?: ValueTypes["nb_meeting_bool_exp"];
    password?: ValueTypes["String_comparison_exp"];
    username?: ValueTypes["String_comparison_exp"];
    uuid?: ValueTypes["uuid_comparison_exp"];
  };
  ["cr_user_constraint"]: cr_user_constraint;
  ["cr_user_insert_input"]: {
    auth0_id?: string;
    ch_helpers?: ValueTypes["ch_helper_arr_rel_insert_input"];
    date_joined?: ValueTypes["timestamptz"];
    email?: string;
    first_name?: string;
    guilds?: ValueTypes["nb_guild_member_arr_rel_insert_input"];
    is_active?: boolean;
    is_staff?: boolean;
    is_superuser?: boolean;
    last_login?: ValueTypes["timestamptz"];
    last_name?: string;
    locale?: string;
    managed_spheres?: ValueTypes["nb_sphere_managers_arr_rel_insert_input"];
    meetings?: ValueTypes["nb_meeting_participants_arr_rel_insert_input"];
    organized_meetings?: ValueTypes["nb_meeting_arr_rel_insert_input"];
    password?: string;
    username?: string;
    uuid?: ValueTypes["uuid"];
  };
  ["cr_user_max_fields"]: AliasType<{
    auth0_id?: true;
    date_joined?: true;
    email?: true;
    first_name?: true;
    last_login?: true;
    last_name?: true;
    locale?: true;
    password?: true;
    username?: true;
    uuid?: true;
    __typename?: true;
  }>;
  ["cr_user_max_order_by"]: {
    auth0_id?: ValueTypes["order_by"];
    date_joined?: ValueTypes["order_by"];
    email?: ValueTypes["order_by"];
    first_name?: ValueTypes["order_by"];
    last_login?: ValueTypes["order_by"];
    last_name?: ValueTypes["order_by"];
    locale?: ValueTypes["order_by"];
    password?: ValueTypes["order_by"];
    username?: ValueTypes["order_by"];
    uuid?: ValueTypes["order_by"];
  };
  ["cr_user_min_fields"]: AliasType<{
    auth0_id?: true;
    date_joined?: true;
    email?: true;
    first_name?: true;
    last_login?: true;
    last_name?: true;
    locale?: true;
    password?: true;
    username?: true;
    uuid?: true;
    __typename?: true;
  }>;
  ["cr_user_min_order_by"]: {
    auth0_id?: ValueTypes["order_by"];
    date_joined?: ValueTypes["order_by"];
    email?: ValueTypes["order_by"];
    first_name?: ValueTypes["order_by"];
    last_login?: ValueTypes["order_by"];
    last_name?: ValueTypes["order_by"];
    locale?: ValueTypes["order_by"];
    password?: ValueTypes["order_by"];
    username?: ValueTypes["order_by"];
    uuid?: ValueTypes["order_by"];
  };
  ["cr_user_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["cr_user"];
    __typename?: true;
  }>;
  ["cr_user_obj_rel_insert_input"]: {
    data: ValueTypes["cr_user_insert_input"];
    on_conflict?: ValueTypes["cr_user_on_conflict"];
  };
  ["cr_user_on_conflict"]: {
    constraint: ValueTypes["cr_user_constraint"];
    update_columns: ValueTypes["cr_user_update_column"][];
    where?: ValueTypes["cr_user_bool_exp"];
  };
  ["cr_user_order_by"]: {
    auth0_id?: ValueTypes["order_by"];
    ch_helpers_aggregate?: ValueTypes["ch_helper_aggregate_order_by"];
    date_joined?: ValueTypes["order_by"];
    email?: ValueTypes["order_by"];
    first_name?: ValueTypes["order_by"];
    guilds_aggregate?: ValueTypes["nb_guild_member_aggregate_order_by"];
    is_active?: ValueTypes["order_by"];
    is_staff?: ValueTypes["order_by"];
    is_superuser?: ValueTypes["order_by"];
    last_login?: ValueTypes["order_by"];
    last_name?: ValueTypes["order_by"];
    locale?: ValueTypes["order_by"];
    managed_spheres_aggregate?: ValueTypes["nb_sphere_managers_aggregate_order_by"];
    meetings_aggregate?: ValueTypes["nb_meeting_participants_aggregate_order_by"];
    organized_meetings_aggregate?: ValueTypes["nb_meeting_aggregate_order_by"];
    password?: ValueTypes["order_by"];
    username?: ValueTypes["order_by"];
    uuid?: ValueTypes["order_by"];
  };
  ["cr_user_pk_columns_input"]: {
    uuid: ValueTypes["uuid"];
  };
  ["cr_user_select_column"]: cr_user_select_column;
  ["cr_user_set_input"]: {
    auth0_id?: string;
    date_joined?: ValueTypes["timestamptz"];
    email?: string;
    first_name?: string;
    is_active?: boolean;
    is_staff?: boolean;
    is_superuser?: boolean;
    last_login?: ValueTypes["timestamptz"];
    last_name?: string;
    locale?: string;
    password?: string;
    username?: string;
    uuid?: ValueTypes["uuid"];
  };
  ["cr_user_update_column"]: cr_user_update_column;
  ["django_site"]: AliasType<{
    domain?: true;
    id?: true;
    name?: true;
    nb_sphere?: ValueTypes["nb_sphere"];
    __typename?: true;
  }>;
  ["django_site_aggregate"]: AliasType<{
    aggregate?: ValueTypes["django_site_aggregate_fields"];
    nodes?: ValueTypes["django_site"];
    __typename?: true;
  }>;
  ["django_site_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["django_site_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["django_site_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["django_site_max_fields"];
    min?: ValueTypes["django_site_min_fields"];
    stddev?: ValueTypes["django_site_stddev_fields"];
    stddev_pop?: ValueTypes["django_site_stddev_pop_fields"];
    stddev_samp?: ValueTypes["django_site_stddev_samp_fields"];
    sum?: ValueTypes["django_site_sum_fields"];
    var_pop?: ValueTypes["django_site_var_pop_fields"];
    var_samp?: ValueTypes["django_site_var_samp_fields"];
    variance?: ValueTypes["django_site_variance_fields"];
    __typename?: true;
  }>;
  ["django_site_aggregate_order_by"]: {
    avg?: ValueTypes["django_site_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["django_site_max_order_by"];
    min?: ValueTypes["django_site_min_order_by"];
    stddev?: ValueTypes["django_site_stddev_order_by"];
    stddev_pop?: ValueTypes["django_site_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["django_site_stddev_samp_order_by"];
    sum?: ValueTypes["django_site_sum_order_by"];
    var_pop?: ValueTypes["django_site_var_pop_order_by"];
    var_samp?: ValueTypes["django_site_var_samp_order_by"];
    variance?: ValueTypes["django_site_variance_order_by"];
  };
  ["django_site_arr_rel_insert_input"]: {
    data: ValueTypes["django_site_insert_input"][];
    on_conflict?: ValueTypes["django_site_on_conflict"];
  };
  ["django_site_avg_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["django_site_avg_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["django_site_bool_exp"]: {
    _and?: (ValueTypes["django_site_bool_exp"] | undefined)[];
    _not?: ValueTypes["django_site_bool_exp"];
    _or?: (ValueTypes["django_site_bool_exp"] | undefined)[];
    domain?: ValueTypes["String_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    name?: ValueTypes["String_comparison_exp"];
    nb_sphere?: ValueTypes["nb_sphere_bool_exp"];
  };
  ["django_site_constraint"]: django_site_constraint;
  ["django_site_inc_input"]: {
    id?: number;
  };
  ["django_site_insert_input"]: {
    domain?: string;
    id?: number;
    name?: string;
    nb_sphere?: ValueTypes["nb_sphere_obj_rel_insert_input"];
  };
  ["django_site_max_fields"]: AliasType<{
    domain?: true;
    id?: true;
    name?: true;
    __typename?: true;
  }>;
  ["django_site_max_order_by"]: {
    domain?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
  };
  ["django_site_min_fields"]: AliasType<{
    domain?: true;
    id?: true;
    name?: true;
    __typename?: true;
  }>;
  ["django_site_min_order_by"]: {
    domain?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
  };
  ["django_site_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["django_site"];
    __typename?: true;
  }>;
  ["django_site_obj_rel_insert_input"]: {
    data: ValueTypes["django_site_insert_input"];
    on_conflict?: ValueTypes["django_site_on_conflict"];
  };
  ["django_site_on_conflict"]: {
    constraint: ValueTypes["django_site_constraint"];
    update_columns: ValueTypes["django_site_update_column"][];
    where?: ValueTypes["django_site_bool_exp"];
  };
  ["django_site_order_by"]: {
    domain?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    nb_sphere?: ValueTypes["nb_sphere_order_by"];
  };
  ["django_site_pk_columns_input"]: {
    id: number;
  };
  ["django_site_select_column"]: django_site_select_column;
  ["django_site_set_input"]: {
    domain?: string;
    id?: number;
    name?: string;
  };
  ["django_site_stddev_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["django_site_stddev_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["django_site_stddev_pop_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["django_site_stddev_pop_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["django_site_stddev_samp_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["django_site_stddev_samp_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["django_site_sum_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["django_site_sum_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["django_site_update_column"]: django_site_update_column;
  ["django_site_var_pop_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["django_site_var_pop_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["django_site_var_samp_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["django_site_var_samp_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["django_site_variance_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["django_site_variance_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["Int_comparison_exp"]: {
    _eq?: number;
    _gt?: number;
    _gte?: number;
    _in?: number[];
    _is_null?: boolean;
    _lt?: number;
    _lte?: number;
    _neq?: number;
    _nin?: number[];
  };
  ["jsonb"]: unknown;
  ["jsonb_comparison_exp"]: {
    _contained_in?: ValueTypes["jsonb"];
    _contains?: ValueTypes["jsonb"];
    _eq?: ValueTypes["jsonb"];
    _gt?: ValueTypes["jsonb"];
    _gte?: ValueTypes["jsonb"];
    _has_key?: string;
    _has_keys_all?: string[];
    _has_keys_any?: string[];
    _in?: ValueTypes["jsonb"][];
    _is_null?: boolean;
    _lt?: ValueTypes["jsonb"];
    _lte?: ValueTypes["jsonb"];
    _neq?: ValueTypes["jsonb"];
    _nin?: ValueTypes["jsonb"][];
  };
  ["mutation_root"]: AliasType<{
    delete_ch_agenda_item?: [
      { where: ValueTypes["ch_agenda_item_bool_exp"] },
      ValueTypes["ch_agenda_item_mutation_response"]
    ];
    delete_ch_agenda_item_by_pk?: [
      { id: number },
      ValueTypes["ch_agenda_item"]
    ];
    delete_ch_festival?: [
      { where: ValueTypes["ch_festival_bool_exp"] },
      ValueTypes["ch_festival_mutation_response"]
    ];
    delete_ch_festival_by_pk?: [{ id: number }, ValueTypes["ch_festival"]];
    delete_ch_helper?: [
      { where: ValueTypes["ch_helper_bool_exp"] },
      ValueTypes["ch_helper_mutation_response"]
    ];
    delete_ch_helper_by_pk?: [{ id: number }, ValueTypes["ch_helper"]];
    delete_ch_helper_time_slots?: [
      { where: ValueTypes["ch_helper_time_slots_bool_exp"] },
      ValueTypes["ch_helper_time_slots_mutation_response"]
    ];
    delete_ch_helper_time_slots_by_pk?: [
      { id: number },
      ValueTypes["ch_helper_time_slots"]
    ];
    delete_ch_proposal?: [
      { where: ValueTypes["ch_proposal_bool_exp"] },
      ValueTypes["ch_proposal_mutation_response"]
    ];
    delete_ch_proposal_by_pk?: [{ id: number }, ValueTypes["ch_proposal"]];
    delete_ch_proposal_time_slots?: [
      { where: ValueTypes["ch_proposal_time_slots_bool_exp"] },
      ValueTypes["ch_proposal_time_slots_mutation_response"]
    ];
    delete_ch_proposal_time_slots_by_pk?: [
      { id: number },
      ValueTypes["ch_proposal_time_slots"]
    ];
    delete_ch_room?: [
      { where: ValueTypes["ch_room_bool_exp"] },
      ValueTypes["ch_room_mutation_response"]
    ];
    delete_ch_room_by_pk?: [{ id: number }, ValueTypes["ch_room"]];
    delete_ch_time_slot?: [
      { where: ValueTypes["ch_time_slot_bool_exp"] },
      ValueTypes["ch_time_slot_mutation_response"]
    ];
    delete_ch_time_slot_by_pk?: [{ id: number }, ValueTypes["ch_time_slot"]];
    delete_ch_wait_list?: [
      { where: ValueTypes["ch_wait_list_bool_exp"] },
      ValueTypes["ch_wait_list_mutation_response"]
    ];
    delete_ch_wait_list_by_pk?: [{ id: number }, ValueTypes["ch_wait_list"]];
    delete_cr_user?: [
      { where: ValueTypes["cr_user_bool_exp"] },
      ValueTypes["cr_user_mutation_response"]
    ];
    delete_cr_user_by_pk?: [
      { uuid: ValueTypes["uuid"] },
      ValueTypes["cr_user"]
    ];
    delete_django_site?: [
      { where: ValueTypes["django_site_bool_exp"] },
      ValueTypes["django_site_mutation_response"]
    ];
    delete_django_site_by_pk?: [{ id: number }, ValueTypes["django_site"]];
    delete_nb_guild?: [
      { where: ValueTypes["nb_guild_bool_exp"] },
      ValueTypes["nb_guild_mutation_response"]
    ];
    delete_nb_guild_by_pk?: [{ id: number }, ValueTypes["nb_guild"]];
    delete_nb_guild_member?: [
      { where: ValueTypes["nb_guild_member_bool_exp"] },
      ValueTypes["nb_guild_member_mutation_response"]
    ];
    delete_nb_guild_member_by_pk?: [
      { id: number },
      ValueTypes["nb_guild_member"]
    ];
    delete_nb_meeting?: [
      { where: ValueTypes["nb_meeting_bool_exp"] },
      ValueTypes["nb_meeting_mutation_response"]
    ];
    delete_nb_meeting_by_pk?: [{ id: number }, ValueTypes["nb_meeting"]];
    delete_nb_meeting_participants?: [
      { where: ValueTypes["nb_meeting_participants_bool_exp"] },
      ValueTypes["nb_meeting_participants_mutation_response"]
    ];
    delete_nb_meeting_participants_by_pk?: [
      { id: number },
      ValueTypes["nb_meeting_participants"]
    ];
    delete_nb_sphere?: [
      { where: ValueTypes["nb_sphere_bool_exp"] },
      ValueTypes["nb_sphere_mutation_response"]
    ];
    delete_nb_sphere_by_pk?: [{ id: number }, ValueTypes["nb_sphere"]];
    delete_nb_sphere_managers?: [
      { where: ValueTypes["nb_sphere_managers_bool_exp"] },
      ValueTypes["nb_sphere_managers_mutation_response"]
    ];
    delete_nb_sphere_managers_by_pk?: [
      { id: number },
      ValueTypes["nb_sphere_managers"]
    ];
    insert_ch_agenda_item?: [
      {
        objects: ValueTypes["ch_agenda_item_insert_input"][];
        on_conflict?: ValueTypes["ch_agenda_item_on_conflict"];
      },
      ValueTypes["ch_agenda_item_mutation_response"]
    ];
    insert_ch_agenda_item_one?: [
      {
        object: ValueTypes["ch_agenda_item_insert_input"];
        on_conflict?: ValueTypes["ch_agenda_item_on_conflict"];
      },
      ValueTypes["ch_agenda_item"]
    ];
    insert_ch_festival?: [
      {
        objects: ValueTypes["ch_festival_insert_input"][];
        on_conflict?: ValueTypes["ch_festival_on_conflict"];
      },
      ValueTypes["ch_festival_mutation_response"]
    ];
    insert_ch_festival_one?: [
      {
        object: ValueTypes["ch_festival_insert_input"];
        on_conflict?: ValueTypes["ch_festival_on_conflict"];
      },
      ValueTypes["ch_festival"]
    ];
    insert_ch_helper?: [
      {
        objects: ValueTypes["ch_helper_insert_input"][];
        on_conflict?: ValueTypes["ch_helper_on_conflict"];
      },
      ValueTypes["ch_helper_mutation_response"]
    ];
    insert_ch_helper_one?: [
      {
        object: ValueTypes["ch_helper_insert_input"];
        on_conflict?: ValueTypes["ch_helper_on_conflict"];
      },
      ValueTypes["ch_helper"]
    ];
    insert_ch_helper_time_slots?: [
      {
        objects: ValueTypes["ch_helper_time_slots_insert_input"][];
        on_conflict?: ValueTypes["ch_helper_time_slots_on_conflict"];
      },
      ValueTypes["ch_helper_time_slots_mutation_response"]
    ];
    insert_ch_helper_time_slots_one?: [
      {
        object: ValueTypes["ch_helper_time_slots_insert_input"];
        on_conflict?: ValueTypes["ch_helper_time_slots_on_conflict"];
      },
      ValueTypes["ch_helper_time_slots"]
    ];
    insert_ch_proposal?: [
      {
        objects: ValueTypes["ch_proposal_insert_input"][];
        on_conflict?: ValueTypes["ch_proposal_on_conflict"];
      },
      ValueTypes["ch_proposal_mutation_response"]
    ];
    insert_ch_proposal_one?: [
      {
        object: ValueTypes["ch_proposal_insert_input"];
        on_conflict?: ValueTypes["ch_proposal_on_conflict"];
      },
      ValueTypes["ch_proposal"]
    ];
    insert_ch_proposal_time_slots?: [
      {
        objects: ValueTypes["ch_proposal_time_slots_insert_input"][];
        on_conflict?: ValueTypes["ch_proposal_time_slots_on_conflict"];
      },
      ValueTypes["ch_proposal_time_slots_mutation_response"]
    ];
    insert_ch_proposal_time_slots_one?: [
      {
        object: ValueTypes["ch_proposal_time_slots_insert_input"];
        on_conflict?: ValueTypes["ch_proposal_time_slots_on_conflict"];
      },
      ValueTypes["ch_proposal_time_slots"]
    ];
    insert_ch_room?: [
      {
        objects: ValueTypes["ch_room_insert_input"][];
        on_conflict?: ValueTypes["ch_room_on_conflict"];
      },
      ValueTypes["ch_room_mutation_response"]
    ];
    insert_ch_room_one?: [
      {
        object: ValueTypes["ch_room_insert_input"];
        on_conflict?: ValueTypes["ch_room_on_conflict"];
      },
      ValueTypes["ch_room"]
    ];
    insert_ch_time_slot?: [
      {
        objects: ValueTypes["ch_time_slot_insert_input"][];
        on_conflict?: ValueTypes["ch_time_slot_on_conflict"];
      },
      ValueTypes["ch_time_slot_mutation_response"]
    ];
    insert_ch_time_slot_one?: [
      {
        object: ValueTypes["ch_time_slot_insert_input"];
        on_conflict?: ValueTypes["ch_time_slot_on_conflict"];
      },
      ValueTypes["ch_time_slot"]
    ];
    insert_ch_wait_list?: [
      {
        objects: ValueTypes["ch_wait_list_insert_input"][];
        on_conflict?: ValueTypes["ch_wait_list_on_conflict"];
      },
      ValueTypes["ch_wait_list_mutation_response"]
    ];
    insert_ch_wait_list_one?: [
      {
        object: ValueTypes["ch_wait_list_insert_input"];
        on_conflict?: ValueTypes["ch_wait_list_on_conflict"];
      },
      ValueTypes["ch_wait_list"]
    ];
    insert_cr_user?: [
      {
        objects: ValueTypes["cr_user_insert_input"][];
        on_conflict?: ValueTypes["cr_user_on_conflict"];
      },
      ValueTypes["cr_user_mutation_response"]
    ];
    insert_cr_user_one?: [
      {
        object: ValueTypes["cr_user_insert_input"];
        on_conflict?: ValueTypes["cr_user_on_conflict"];
      },
      ValueTypes["cr_user"]
    ];
    insert_django_site?: [
      {
        objects: ValueTypes["django_site_insert_input"][];
        on_conflict?: ValueTypes["django_site_on_conflict"];
      },
      ValueTypes["django_site_mutation_response"]
    ];
    insert_django_site_one?: [
      {
        object: ValueTypes["django_site_insert_input"];
        on_conflict?: ValueTypes["django_site_on_conflict"];
      },
      ValueTypes["django_site"]
    ];
    insert_nb_guild?: [
      {
        objects: ValueTypes["nb_guild_insert_input"][];
        on_conflict?: ValueTypes["nb_guild_on_conflict"];
      },
      ValueTypes["nb_guild_mutation_response"]
    ];
    insert_nb_guild_member?: [
      {
        objects: ValueTypes["nb_guild_member_insert_input"][];
        on_conflict?: ValueTypes["nb_guild_member_on_conflict"];
      },
      ValueTypes["nb_guild_member_mutation_response"]
    ];
    insert_nb_guild_member_one?: [
      {
        object: ValueTypes["nb_guild_member_insert_input"];
        on_conflict?: ValueTypes["nb_guild_member_on_conflict"];
      },
      ValueTypes["nb_guild_member"]
    ];
    insert_nb_guild_one?: [
      {
        object: ValueTypes["nb_guild_insert_input"];
        on_conflict?: ValueTypes["nb_guild_on_conflict"];
      },
      ValueTypes["nb_guild"]
    ];
    insert_nb_meeting?: [
      {
        objects: ValueTypes["nb_meeting_insert_input"][];
        on_conflict?: ValueTypes["nb_meeting_on_conflict"];
      },
      ValueTypes["nb_meeting_mutation_response"]
    ];
    insert_nb_meeting_one?: [
      {
        object: ValueTypes["nb_meeting_insert_input"];
        on_conflict?: ValueTypes["nb_meeting_on_conflict"];
      },
      ValueTypes["nb_meeting"]
    ];
    insert_nb_meeting_participants?: [
      {
        objects: ValueTypes["nb_meeting_participants_insert_input"][];
        on_conflict?: ValueTypes["nb_meeting_participants_on_conflict"];
      },
      ValueTypes["nb_meeting_participants_mutation_response"]
    ];
    insert_nb_meeting_participants_one?: [
      {
        object: ValueTypes["nb_meeting_participants_insert_input"];
        on_conflict?: ValueTypes["nb_meeting_participants_on_conflict"];
      },
      ValueTypes["nb_meeting_participants"]
    ];
    insert_nb_sphere?: [
      {
        objects: ValueTypes["nb_sphere_insert_input"][];
        on_conflict?: ValueTypes["nb_sphere_on_conflict"];
      },
      ValueTypes["nb_sphere_mutation_response"]
    ];
    insert_nb_sphere_managers?: [
      {
        objects: ValueTypes["nb_sphere_managers_insert_input"][];
        on_conflict?: ValueTypes["nb_sphere_managers_on_conflict"];
      },
      ValueTypes["nb_sphere_managers_mutation_response"]
    ];
    insert_nb_sphere_managers_one?: [
      {
        object: ValueTypes["nb_sphere_managers_insert_input"];
        on_conflict?: ValueTypes["nb_sphere_managers_on_conflict"];
      },
      ValueTypes["nb_sphere_managers"]
    ];
    insert_nb_sphere_one?: [
      {
        object: ValueTypes["nb_sphere_insert_input"];
        on_conflict?: ValueTypes["nb_sphere_on_conflict"];
      },
      ValueTypes["nb_sphere"]
    ];
    update_ch_agenda_item?: [
      {
        _inc?: ValueTypes["ch_agenda_item_inc_input"];
        _set?: ValueTypes["ch_agenda_item_set_input"];
        where: ValueTypes["ch_agenda_item_bool_exp"];
      },
      ValueTypes["ch_agenda_item_mutation_response"]
    ];
    update_ch_agenda_item_by_pk?: [
      {
        _inc?: ValueTypes["ch_agenda_item_inc_input"];
        _set?: ValueTypes["ch_agenda_item_set_input"];
        pk_columns: ValueTypes["ch_agenda_item_pk_columns_input"];
      },
      ValueTypes["ch_agenda_item"]
    ];
    update_ch_festival?: [
      {
        _append?: ValueTypes["ch_festival_append_input"];
        _delete_at_path?: ValueTypes["ch_festival_delete_at_path_input"];
        _delete_elem?: ValueTypes["ch_festival_delete_elem_input"];
        _delete_key?: ValueTypes["ch_festival_delete_key_input"];
        _inc?: ValueTypes["ch_festival_inc_input"];
        _prepend?: ValueTypes["ch_festival_prepend_input"];
        _set?: ValueTypes["ch_festival_set_input"];
        where: ValueTypes["ch_festival_bool_exp"];
      },
      ValueTypes["ch_festival_mutation_response"]
    ];
    update_ch_festival_by_pk?: [
      {
        _append?: ValueTypes["ch_festival_append_input"];
        _delete_at_path?: ValueTypes["ch_festival_delete_at_path_input"];
        _delete_elem?: ValueTypes["ch_festival_delete_elem_input"];
        _delete_key?: ValueTypes["ch_festival_delete_key_input"];
        _inc?: ValueTypes["ch_festival_inc_input"];
        _prepend?: ValueTypes["ch_festival_prepend_input"];
        _set?: ValueTypes["ch_festival_set_input"];
        pk_columns: ValueTypes["ch_festival_pk_columns_input"];
      },
      ValueTypes["ch_festival"]
    ];
    update_ch_helper?: [
      {
        _inc?: ValueTypes["ch_helper_inc_input"];
        _set?: ValueTypes["ch_helper_set_input"];
        where: ValueTypes["ch_helper_bool_exp"];
      },
      ValueTypes["ch_helper_mutation_response"]
    ];
    update_ch_helper_by_pk?: [
      {
        _inc?: ValueTypes["ch_helper_inc_input"];
        _set?: ValueTypes["ch_helper_set_input"];
        pk_columns: ValueTypes["ch_helper_pk_columns_input"];
      },
      ValueTypes["ch_helper"]
    ];
    update_ch_helper_time_slots?: [
      {
        _inc?: ValueTypes["ch_helper_time_slots_inc_input"];
        _set?: ValueTypes["ch_helper_time_slots_set_input"];
        where: ValueTypes["ch_helper_time_slots_bool_exp"];
      },
      ValueTypes["ch_helper_time_slots_mutation_response"]
    ];
    update_ch_helper_time_slots_by_pk?: [
      {
        _inc?: ValueTypes["ch_helper_time_slots_inc_input"];
        _set?: ValueTypes["ch_helper_time_slots_set_input"];
        pk_columns: ValueTypes["ch_helper_time_slots_pk_columns_input"];
      },
      ValueTypes["ch_helper_time_slots"]
    ];
    update_ch_proposal?: [
      {
        _append?: ValueTypes["ch_proposal_append_input"];
        _delete_at_path?: ValueTypes["ch_proposal_delete_at_path_input"];
        _delete_elem?: ValueTypes["ch_proposal_delete_elem_input"];
        _delete_key?: ValueTypes["ch_proposal_delete_key_input"];
        _inc?: ValueTypes["ch_proposal_inc_input"];
        _prepend?: ValueTypes["ch_proposal_prepend_input"];
        _set?: ValueTypes["ch_proposal_set_input"];
        where: ValueTypes["ch_proposal_bool_exp"];
      },
      ValueTypes["ch_proposal_mutation_response"]
    ];
    update_ch_proposal_by_pk?: [
      {
        _append?: ValueTypes["ch_proposal_append_input"];
        _delete_at_path?: ValueTypes["ch_proposal_delete_at_path_input"];
        _delete_elem?: ValueTypes["ch_proposal_delete_elem_input"];
        _delete_key?: ValueTypes["ch_proposal_delete_key_input"];
        _inc?: ValueTypes["ch_proposal_inc_input"];
        _prepend?: ValueTypes["ch_proposal_prepend_input"];
        _set?: ValueTypes["ch_proposal_set_input"];
        pk_columns: ValueTypes["ch_proposal_pk_columns_input"];
      },
      ValueTypes["ch_proposal"]
    ];
    update_ch_proposal_time_slots?: [
      {
        _inc?: ValueTypes["ch_proposal_time_slots_inc_input"];
        _set?: ValueTypes["ch_proposal_time_slots_set_input"];
        where: ValueTypes["ch_proposal_time_slots_bool_exp"];
      },
      ValueTypes["ch_proposal_time_slots_mutation_response"]
    ];
    update_ch_proposal_time_slots_by_pk?: [
      {
        _inc?: ValueTypes["ch_proposal_time_slots_inc_input"];
        _set?: ValueTypes["ch_proposal_time_slots_set_input"];
        pk_columns: ValueTypes["ch_proposal_time_slots_pk_columns_input"];
      },
      ValueTypes["ch_proposal_time_slots"]
    ];
    update_ch_room?: [
      {
        _inc?: ValueTypes["ch_room_inc_input"];
        _set?: ValueTypes["ch_room_set_input"];
        where: ValueTypes["ch_room_bool_exp"];
      },
      ValueTypes["ch_room_mutation_response"]
    ];
    update_ch_room_by_pk?: [
      {
        _inc?: ValueTypes["ch_room_inc_input"];
        _set?: ValueTypes["ch_room_set_input"];
        pk_columns: ValueTypes["ch_room_pk_columns_input"];
      },
      ValueTypes["ch_room"]
    ];
    update_ch_time_slot?: [
      {
        _inc?: ValueTypes["ch_time_slot_inc_input"];
        _set?: ValueTypes["ch_time_slot_set_input"];
        where: ValueTypes["ch_time_slot_bool_exp"];
      },
      ValueTypes["ch_time_slot_mutation_response"]
    ];
    update_ch_time_slot_by_pk?: [
      {
        _inc?: ValueTypes["ch_time_slot_inc_input"];
        _set?: ValueTypes["ch_time_slot_set_input"];
        pk_columns: ValueTypes["ch_time_slot_pk_columns_input"];
      },
      ValueTypes["ch_time_slot"]
    ];
    update_ch_wait_list?: [
      {
        _inc?: ValueTypes["ch_wait_list_inc_input"];
        _set?: ValueTypes["ch_wait_list_set_input"];
        where: ValueTypes["ch_wait_list_bool_exp"];
      },
      ValueTypes["ch_wait_list_mutation_response"]
    ];
    update_ch_wait_list_by_pk?: [
      {
        _inc?: ValueTypes["ch_wait_list_inc_input"];
        _set?: ValueTypes["ch_wait_list_set_input"];
        pk_columns: ValueTypes["ch_wait_list_pk_columns_input"];
      },
      ValueTypes["ch_wait_list"]
    ];
    update_cr_user?: [
      {
        _set?: ValueTypes["cr_user_set_input"];
        where: ValueTypes["cr_user_bool_exp"];
      },
      ValueTypes["cr_user_mutation_response"]
    ];
    update_cr_user_by_pk?: [
      {
        _set?: ValueTypes["cr_user_set_input"];
        pk_columns: ValueTypes["cr_user_pk_columns_input"];
      },
      ValueTypes["cr_user"]
    ];
    update_django_site?: [
      {
        _inc?: ValueTypes["django_site_inc_input"];
        _set?: ValueTypes["django_site_set_input"];
        where: ValueTypes["django_site_bool_exp"];
      },
      ValueTypes["django_site_mutation_response"]
    ];
    update_django_site_by_pk?: [
      {
        _inc?: ValueTypes["django_site_inc_input"];
        _set?: ValueTypes["django_site_set_input"];
        pk_columns: ValueTypes["django_site_pk_columns_input"];
      },
      ValueTypes["django_site"]
    ];
    update_nb_guild?: [
      {
        _inc?: ValueTypes["nb_guild_inc_input"];
        _set?: ValueTypes["nb_guild_set_input"];
        where: ValueTypes["nb_guild_bool_exp"];
      },
      ValueTypes["nb_guild_mutation_response"]
    ];
    update_nb_guild_by_pk?: [
      {
        _inc?: ValueTypes["nb_guild_inc_input"];
        _set?: ValueTypes["nb_guild_set_input"];
        pk_columns: ValueTypes["nb_guild_pk_columns_input"];
      },
      ValueTypes["nb_guild"]
    ];
    update_nb_guild_member?: [
      {
        _inc?: ValueTypes["nb_guild_member_inc_input"];
        _set?: ValueTypes["nb_guild_member_set_input"];
        where: ValueTypes["nb_guild_member_bool_exp"];
      },
      ValueTypes["nb_guild_member_mutation_response"]
    ];
    update_nb_guild_member_by_pk?: [
      {
        _inc?: ValueTypes["nb_guild_member_inc_input"];
        _set?: ValueTypes["nb_guild_member_set_input"];
        pk_columns: ValueTypes["nb_guild_member_pk_columns_input"];
      },
      ValueTypes["nb_guild_member"]
    ];
    update_nb_meeting?: [
      {
        _inc?: ValueTypes["nb_meeting_inc_input"];
        _set?: ValueTypes["nb_meeting_set_input"];
        where: ValueTypes["nb_meeting_bool_exp"];
      },
      ValueTypes["nb_meeting_mutation_response"]
    ];
    update_nb_meeting_by_pk?: [
      {
        _inc?: ValueTypes["nb_meeting_inc_input"];
        _set?: ValueTypes["nb_meeting_set_input"];
        pk_columns: ValueTypes["nb_meeting_pk_columns_input"];
      },
      ValueTypes["nb_meeting"]
    ];
    update_nb_meeting_participants?: [
      {
        _inc?: ValueTypes["nb_meeting_participants_inc_input"];
        _set?: ValueTypes["nb_meeting_participants_set_input"];
        where: ValueTypes["nb_meeting_participants_bool_exp"];
      },
      ValueTypes["nb_meeting_participants_mutation_response"]
    ];
    update_nb_meeting_participants_by_pk?: [
      {
        _inc?: ValueTypes["nb_meeting_participants_inc_input"];
        _set?: ValueTypes["nb_meeting_participants_set_input"];
        pk_columns: ValueTypes["nb_meeting_participants_pk_columns_input"];
      },
      ValueTypes["nb_meeting_participants"]
    ];
    update_nb_sphere?: [
      {
        _append?: ValueTypes["nb_sphere_append_input"];
        _delete_at_path?: ValueTypes["nb_sphere_delete_at_path_input"];
        _delete_elem?: ValueTypes["nb_sphere_delete_elem_input"];
        _delete_key?: ValueTypes["nb_sphere_delete_key_input"];
        _inc?: ValueTypes["nb_sphere_inc_input"];
        _prepend?: ValueTypes["nb_sphere_prepend_input"];
        _set?: ValueTypes["nb_sphere_set_input"];
        where: ValueTypes["nb_sphere_bool_exp"];
      },
      ValueTypes["nb_sphere_mutation_response"]
    ];
    update_nb_sphere_by_pk?: [
      {
        _append?: ValueTypes["nb_sphere_append_input"];
        _delete_at_path?: ValueTypes["nb_sphere_delete_at_path_input"];
        _delete_elem?: ValueTypes["nb_sphere_delete_elem_input"];
        _delete_key?: ValueTypes["nb_sphere_delete_key_input"];
        _inc?: ValueTypes["nb_sphere_inc_input"];
        _prepend?: ValueTypes["nb_sphere_prepend_input"];
        _set?: ValueTypes["nb_sphere_set_input"];
        pk_columns: ValueTypes["nb_sphere_pk_columns_input"];
      },
      ValueTypes["nb_sphere"]
    ];
    update_nb_sphere_managers?: [
      {
        _inc?: ValueTypes["nb_sphere_managers_inc_input"];
        _set?: ValueTypes["nb_sphere_managers_set_input"];
        where: ValueTypes["nb_sphere_managers_bool_exp"];
      },
      ValueTypes["nb_sphere_managers_mutation_response"]
    ];
    update_nb_sphere_managers_by_pk?: [
      {
        _inc?: ValueTypes["nb_sphere_managers_inc_input"];
        _set?: ValueTypes["nb_sphere_managers_set_input"];
        pk_columns: ValueTypes["nb_sphere_managers_pk_columns_input"];
      },
      ValueTypes["nb_sphere_managers"]
    ];
    __typename?: true;
  }>;
  ["nb_guild"]: AliasType<{
    created_at?: true;
    description?: true;
    id?: true;
    is_public?: true;
    name?: true;
    nb_guild_members?: [
      {
        distinct_on?: ValueTypes["nb_guild_member_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_guild_member_order_by"][];
        where?: ValueTypes["nb_guild_member_bool_exp"];
      },
      ValueTypes["nb_guild_member"]
    ];
    nb_guild_members_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_guild_member_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_guild_member_order_by"][];
        where?: ValueTypes["nb_guild_member_bool_exp"];
      },
      ValueTypes["nb_guild_member_aggregate"]
    ];
    nb_meetings?: [
      {
        distinct_on?: ValueTypes["nb_meeting_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_order_by"][];
        where?: ValueTypes["nb_meeting_bool_exp"];
      },
      ValueTypes["nb_meeting"]
    ];
    nb_meetings_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_meeting_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_order_by"][];
        where?: ValueTypes["nb_meeting_bool_exp"];
      },
      ValueTypes["nb_meeting_aggregate"]
    ];
    slug?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  ["nb_guild_aggregate"]: AliasType<{
    aggregate?: ValueTypes["nb_guild_aggregate_fields"];
    nodes?: ValueTypes["nb_guild"];
    __typename?: true;
  }>;
  ["nb_guild_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["nb_guild_avg_fields"];
    count?: [
      { columns?: ValueTypes["nb_guild_select_column"][]; distinct?: boolean },
      true
    ];
    max?: ValueTypes["nb_guild_max_fields"];
    min?: ValueTypes["nb_guild_min_fields"];
    stddev?: ValueTypes["nb_guild_stddev_fields"];
    stddev_pop?: ValueTypes["nb_guild_stddev_pop_fields"];
    stddev_samp?: ValueTypes["nb_guild_stddev_samp_fields"];
    sum?: ValueTypes["nb_guild_sum_fields"];
    var_pop?: ValueTypes["nb_guild_var_pop_fields"];
    var_samp?: ValueTypes["nb_guild_var_samp_fields"];
    variance?: ValueTypes["nb_guild_variance_fields"];
    __typename?: true;
  }>;
  ["nb_guild_aggregate_order_by"]: {
    avg?: ValueTypes["nb_guild_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["nb_guild_max_order_by"];
    min?: ValueTypes["nb_guild_min_order_by"];
    stddev?: ValueTypes["nb_guild_stddev_order_by"];
    stddev_pop?: ValueTypes["nb_guild_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["nb_guild_stddev_samp_order_by"];
    sum?: ValueTypes["nb_guild_sum_order_by"];
    var_pop?: ValueTypes["nb_guild_var_pop_order_by"];
    var_samp?: ValueTypes["nb_guild_var_samp_order_by"];
    variance?: ValueTypes["nb_guild_variance_order_by"];
  };
  ["nb_guild_arr_rel_insert_input"]: {
    data: ValueTypes["nb_guild_insert_input"][];
    on_conflict?: ValueTypes["nb_guild_on_conflict"];
  };
  ["nb_guild_avg_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_avg_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_bool_exp"]: {
    _and?: (ValueTypes["nb_guild_bool_exp"] | undefined)[];
    _not?: ValueTypes["nb_guild_bool_exp"];
    _or?: (ValueTypes["nb_guild_bool_exp"] | undefined)[];
    created_at?: ValueTypes["timestamptz_comparison_exp"];
    description?: ValueTypes["String_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    is_public?: ValueTypes["Boolean_comparison_exp"];
    name?: ValueTypes["String_comparison_exp"];
    nb_guild_members?: ValueTypes["nb_guild_member_bool_exp"];
    nb_meetings?: ValueTypes["nb_meeting_bool_exp"];
    slug?: ValueTypes["String_comparison_exp"];
    updated_at?: ValueTypes["timestamptz_comparison_exp"];
  };
  ["nb_guild_constraint"]: nb_guild_constraint;
  ["nb_guild_inc_input"]: {
    id?: number;
  };
  ["nb_guild_insert_input"]: {
    created_at?: ValueTypes["timestamptz"];
    description?: string;
    id?: number;
    is_public?: boolean;
    name?: string;
    nb_guild_members?: ValueTypes["nb_guild_member_arr_rel_insert_input"];
    nb_meetings?: ValueTypes["nb_meeting_arr_rel_insert_input"];
    slug?: string;
    updated_at?: ValueTypes["timestamptz"];
  };
  ["nb_guild_max_fields"]: AliasType<{
    created_at?: true;
    description?: true;
    id?: true;
    name?: true;
    slug?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  ["nb_guild_max_order_by"]: {
    created_at?: ValueTypes["order_by"];
    description?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    slug?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  ["nb_guild_member"]: AliasType<{
    cr_user?: ValueTypes["cr_user"];
    guild_id?: true;
    id?: true;
    membership_type?: true;
    nb_guild?: ValueTypes["nb_guild"];
    user_id?: true;
    __typename?: true;
  }>;
  ["nb_guild_member_aggregate"]: AliasType<{
    aggregate?: ValueTypes["nb_guild_member_aggregate_fields"];
    nodes?: ValueTypes["nb_guild_member"];
    __typename?: true;
  }>;
  ["nb_guild_member_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["nb_guild_member_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["nb_guild_member_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["nb_guild_member_max_fields"];
    min?: ValueTypes["nb_guild_member_min_fields"];
    stddev?: ValueTypes["nb_guild_member_stddev_fields"];
    stddev_pop?: ValueTypes["nb_guild_member_stddev_pop_fields"];
    stddev_samp?: ValueTypes["nb_guild_member_stddev_samp_fields"];
    sum?: ValueTypes["nb_guild_member_sum_fields"];
    var_pop?: ValueTypes["nb_guild_member_var_pop_fields"];
    var_samp?: ValueTypes["nb_guild_member_var_samp_fields"];
    variance?: ValueTypes["nb_guild_member_variance_fields"];
    __typename?: true;
  }>;
  ["nb_guild_member_aggregate_order_by"]: {
    avg?: ValueTypes["nb_guild_member_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["nb_guild_member_max_order_by"];
    min?: ValueTypes["nb_guild_member_min_order_by"];
    stddev?: ValueTypes["nb_guild_member_stddev_order_by"];
    stddev_pop?: ValueTypes["nb_guild_member_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["nb_guild_member_stddev_samp_order_by"];
    sum?: ValueTypes["nb_guild_member_sum_order_by"];
    var_pop?: ValueTypes["nb_guild_member_var_pop_order_by"];
    var_samp?: ValueTypes["nb_guild_member_var_samp_order_by"];
    variance?: ValueTypes["nb_guild_member_variance_order_by"];
  };
  ["nb_guild_member_arr_rel_insert_input"]: {
    data: ValueTypes["nb_guild_member_insert_input"][];
    on_conflict?: ValueTypes["nb_guild_member_on_conflict"];
  };
  ["nb_guild_member_avg_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_member_avg_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_member_bool_exp"]: {
    _and?: (ValueTypes["nb_guild_member_bool_exp"] | undefined)[];
    _not?: ValueTypes["nb_guild_member_bool_exp"];
    _or?: (ValueTypes["nb_guild_member_bool_exp"] | undefined)[];
    cr_user?: ValueTypes["cr_user_bool_exp"];
    guild_id?: ValueTypes["Int_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    membership_type?: ValueTypes["String_comparison_exp"];
    nb_guild?: ValueTypes["nb_guild_bool_exp"];
    user_id?: ValueTypes["uuid_comparison_exp"];
  };
  ["nb_guild_member_constraint"]: nb_guild_member_constraint;
  ["nb_guild_member_inc_input"]: {
    guild_id?: number;
    id?: number;
  };
  ["nb_guild_member_insert_input"]: {
    cr_user?: ValueTypes["cr_user_obj_rel_insert_input"];
    guild_id?: number;
    id?: number;
    membership_type?: string;
    nb_guild?: ValueTypes["nb_guild_obj_rel_insert_input"];
    user_id?: ValueTypes["uuid"];
  };
  ["nb_guild_member_max_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    membership_type?: true;
    user_id?: true;
    __typename?: true;
  }>;
  ["nb_guild_member_max_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    membership_type?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  ["nb_guild_member_min_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    membership_type?: true;
    user_id?: true;
    __typename?: true;
  }>;
  ["nb_guild_member_min_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    membership_type?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  ["nb_guild_member_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["nb_guild_member"];
    __typename?: true;
  }>;
  ["nb_guild_member_obj_rel_insert_input"]: {
    data: ValueTypes["nb_guild_member_insert_input"];
    on_conflict?: ValueTypes["nb_guild_member_on_conflict"];
  };
  ["nb_guild_member_on_conflict"]: {
    constraint: ValueTypes["nb_guild_member_constraint"];
    update_columns: ValueTypes["nb_guild_member_update_column"][];
    where?: ValueTypes["nb_guild_member_bool_exp"];
  };
  ["nb_guild_member_order_by"]: {
    cr_user?: ValueTypes["cr_user_order_by"];
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    membership_type?: ValueTypes["order_by"];
    nb_guild?: ValueTypes["nb_guild_order_by"];
    user_id?: ValueTypes["order_by"];
  };
  ["nb_guild_member_pk_columns_input"]: {
    id: number;
  };
  ["nb_guild_member_select_column"]: nb_guild_member_select_column;
  ["nb_guild_member_set_input"]: {
    guild_id?: number;
    id?: number;
    membership_type?: string;
    user_id?: ValueTypes["uuid"];
  };
  ["nb_guild_member_stddev_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_member_stddev_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_member_stddev_pop_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_member_stddev_pop_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_member_stddev_samp_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_member_stddev_samp_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_member_sum_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_member_sum_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_member_update_column"]: nb_guild_member_update_column;
  ["nb_guild_member_var_pop_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_member_var_pop_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_member_var_samp_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_member_var_samp_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_member_variance_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_member_variance_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_min_fields"]: AliasType<{
    created_at?: true;
    description?: true;
    id?: true;
    name?: true;
    slug?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  ["nb_guild_min_order_by"]: {
    created_at?: ValueTypes["order_by"];
    description?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    slug?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  ["nb_guild_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["nb_guild"];
    __typename?: true;
  }>;
  ["nb_guild_obj_rel_insert_input"]: {
    data: ValueTypes["nb_guild_insert_input"];
    on_conflict?: ValueTypes["nb_guild_on_conflict"];
  };
  ["nb_guild_on_conflict"]: {
    constraint: ValueTypes["nb_guild_constraint"];
    update_columns: ValueTypes["nb_guild_update_column"][];
    where?: ValueTypes["nb_guild_bool_exp"];
  };
  ["nb_guild_order_by"]: {
    created_at?: ValueTypes["order_by"];
    description?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    is_public?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    nb_guild_members_aggregate?: ValueTypes["nb_guild_member_aggregate_order_by"];
    nb_meetings_aggregate?: ValueTypes["nb_meeting_aggregate_order_by"];
    slug?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  ["nb_guild_pk_columns_input"]: {
    id: number;
  };
  ["nb_guild_select_column"]: nb_guild_select_column;
  ["nb_guild_set_input"]: {
    created_at?: ValueTypes["timestamptz"];
    description?: string;
    id?: number;
    is_public?: boolean;
    name?: string;
    slug?: string;
    updated_at?: ValueTypes["timestamptz"];
  };
  ["nb_guild_stddev_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_stddev_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_stddev_pop_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_stddev_pop_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_stddev_samp_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_stddev_samp_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_sum_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_sum_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_update_column"]: nb_guild_update_column;
  ["nb_guild_var_pop_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_var_pop_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_var_samp_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_var_samp_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["nb_guild_variance_fields"]: AliasType<{
    id?: true;
    __typename?: true;
  }>;
  ["nb_guild_variance_order_by"]: {
    id?: ValueTypes["order_by"];
  };
  ["nb_meeting"]: AliasType<{
    created_at?: true;
    description?: true;
    end_time?: true;
    guild?: ValueTypes["nb_guild"];
    guild_id?: true;
    id?: true;
    image?: true;
    location?: true;
    meeting_url?: true;
    name?: true;
    organizer?: ValueTypes["cr_user"];
    organizer_id?: true;
    participants?: [
      {
        distinct_on?: ValueTypes["nb_meeting_participants_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_participants_order_by"][];
        where?: ValueTypes["nb_meeting_participants_bool_exp"];
      },
      ValueTypes["nb_meeting_participants"]
    ];
    participants_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_meeting_participants_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_participants_order_by"][];
        where?: ValueTypes["nb_meeting_participants_bool_exp"];
      },
      ValueTypes["nb_meeting_participants_aggregate"]
    ];
    proposal?: ValueTypes["ch_proposal"];
    publication_time?: true;
    slug?: true;
    sphere?: ValueTypes["nb_sphere"];
    sphere_id?: true;
    start_time?: true;
    status?: true;
    time_table?: ValueTypes["ch_agenda_item"];
    updated_at?: true;
    __typename?: true;
  }>;
  ["nb_meeting_aggregate"]: AliasType<{
    aggregate?: ValueTypes["nb_meeting_aggregate_fields"];
    nodes?: ValueTypes["nb_meeting"];
    __typename?: true;
  }>;
  ["nb_meeting_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["nb_meeting_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["nb_meeting_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["nb_meeting_max_fields"];
    min?: ValueTypes["nb_meeting_min_fields"];
    stddev?: ValueTypes["nb_meeting_stddev_fields"];
    stddev_pop?: ValueTypes["nb_meeting_stddev_pop_fields"];
    stddev_samp?: ValueTypes["nb_meeting_stddev_samp_fields"];
    sum?: ValueTypes["nb_meeting_sum_fields"];
    var_pop?: ValueTypes["nb_meeting_var_pop_fields"];
    var_samp?: ValueTypes["nb_meeting_var_samp_fields"];
    variance?: ValueTypes["nb_meeting_variance_fields"];
    __typename?: true;
  }>;
  ["nb_meeting_aggregate_order_by"]: {
    avg?: ValueTypes["nb_meeting_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["nb_meeting_max_order_by"];
    min?: ValueTypes["nb_meeting_min_order_by"];
    stddev?: ValueTypes["nb_meeting_stddev_order_by"];
    stddev_pop?: ValueTypes["nb_meeting_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["nb_meeting_stddev_samp_order_by"];
    sum?: ValueTypes["nb_meeting_sum_order_by"];
    var_pop?: ValueTypes["nb_meeting_var_pop_order_by"];
    var_samp?: ValueTypes["nb_meeting_var_samp_order_by"];
    variance?: ValueTypes["nb_meeting_variance_order_by"];
  };
  ["nb_meeting_arr_rel_insert_input"]: {
    data: ValueTypes["nb_meeting_insert_input"][];
    on_conflict?: ValueTypes["nb_meeting_on_conflict"];
  };
  ["nb_meeting_avg_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_avg_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_bool_exp"]: {
    _and?: (ValueTypes["nb_meeting_bool_exp"] | undefined)[];
    _not?: ValueTypes["nb_meeting_bool_exp"];
    _or?: (ValueTypes["nb_meeting_bool_exp"] | undefined)[];
    created_at?: ValueTypes["timestamptz_comparison_exp"];
    description?: ValueTypes["String_comparison_exp"];
    end_time?: ValueTypes["timestamptz_comparison_exp"];
    guild?: ValueTypes["nb_guild_bool_exp"];
    guild_id?: ValueTypes["Int_comparison_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    image?: ValueTypes["String_comparison_exp"];
    location?: ValueTypes["String_comparison_exp"];
    meeting_url?: ValueTypes["String_comparison_exp"];
    name?: ValueTypes["String_comparison_exp"];
    organizer?: ValueTypes["cr_user_bool_exp"];
    organizer_id?: ValueTypes["uuid_comparison_exp"];
    participants?: ValueTypes["nb_meeting_participants_bool_exp"];
    proposal?: ValueTypes["ch_proposal_bool_exp"];
    publication_time?: ValueTypes["timestamptz_comparison_exp"];
    slug?: ValueTypes["String_comparison_exp"];
    sphere?: ValueTypes["nb_sphere_bool_exp"];
    sphere_id?: ValueTypes["Int_comparison_exp"];
    start_time?: ValueTypes["timestamptz_comparison_exp"];
    status?: ValueTypes["String_comparison_exp"];
    time_table?: ValueTypes["ch_agenda_item_bool_exp"];
    updated_at?: ValueTypes["timestamptz_comparison_exp"];
  };
  ["nb_meeting_constraint"]: nb_meeting_constraint;
  ["nb_meeting_inc_input"]: {
    guild_id?: number;
    id?: number;
    sphere_id?: number;
  };
  ["nb_meeting_insert_input"]: {
    created_at?: ValueTypes["timestamptz"];
    description?: string;
    end_time?: ValueTypes["timestamptz"];
    guild?: ValueTypes["nb_guild_obj_rel_insert_input"];
    guild_id?: number;
    id?: number;
    image?: string;
    location?: string;
    meeting_url?: string;
    name?: string;
    organizer?: ValueTypes["cr_user_obj_rel_insert_input"];
    organizer_id?: ValueTypes["uuid"];
    participants?: ValueTypes["nb_meeting_participants_arr_rel_insert_input"];
    proposal?: ValueTypes["ch_proposal_obj_rel_insert_input"];
    publication_time?: ValueTypes["timestamptz"];
    slug?: string;
    sphere?: ValueTypes["nb_sphere_obj_rel_insert_input"];
    sphere_id?: number;
    start_time?: ValueTypes["timestamptz"];
    status?: string;
    time_table?: ValueTypes["ch_agenda_item_obj_rel_insert_input"];
    updated_at?: ValueTypes["timestamptz"];
  };
  ["nb_meeting_max_fields"]: AliasType<{
    created_at?: true;
    description?: true;
    end_time?: true;
    guild_id?: true;
    id?: true;
    image?: true;
    location?: true;
    meeting_url?: true;
    name?: true;
    organizer_id?: true;
    publication_time?: true;
    slug?: true;
    sphere_id?: true;
    start_time?: true;
    status?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  ["nb_meeting_max_order_by"]: {
    created_at?: ValueTypes["order_by"];
    description?: ValueTypes["order_by"];
    end_time?: ValueTypes["order_by"];
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    image?: ValueTypes["order_by"];
    location?: ValueTypes["order_by"];
    meeting_url?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    organizer_id?: ValueTypes["order_by"];
    publication_time?: ValueTypes["order_by"];
    slug?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
    start_time?: ValueTypes["order_by"];
    status?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  ["nb_meeting_min_fields"]: AliasType<{
    created_at?: true;
    description?: true;
    end_time?: true;
    guild_id?: true;
    id?: true;
    image?: true;
    location?: true;
    meeting_url?: true;
    name?: true;
    organizer_id?: true;
    publication_time?: true;
    slug?: true;
    sphere_id?: true;
    start_time?: true;
    status?: true;
    updated_at?: true;
    __typename?: true;
  }>;
  ["nb_meeting_min_order_by"]: {
    created_at?: ValueTypes["order_by"];
    description?: ValueTypes["order_by"];
    end_time?: ValueTypes["order_by"];
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    image?: ValueTypes["order_by"];
    location?: ValueTypes["order_by"];
    meeting_url?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    organizer_id?: ValueTypes["order_by"];
    publication_time?: ValueTypes["order_by"];
    slug?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
    start_time?: ValueTypes["order_by"];
    status?: ValueTypes["order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  ["nb_meeting_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["nb_meeting"];
    __typename?: true;
  }>;
  ["nb_meeting_obj_rel_insert_input"]: {
    data: ValueTypes["nb_meeting_insert_input"];
    on_conflict?: ValueTypes["nb_meeting_on_conflict"];
  };
  ["nb_meeting_on_conflict"]: {
    constraint: ValueTypes["nb_meeting_constraint"];
    update_columns: ValueTypes["nb_meeting_update_column"][];
    where?: ValueTypes["nb_meeting_bool_exp"];
  };
  ["nb_meeting_order_by"]: {
    created_at?: ValueTypes["order_by"];
    description?: ValueTypes["order_by"];
    end_time?: ValueTypes["order_by"];
    guild?: ValueTypes["nb_guild_order_by"];
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    image?: ValueTypes["order_by"];
    location?: ValueTypes["order_by"];
    meeting_url?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    organizer?: ValueTypes["cr_user_order_by"];
    organizer_id?: ValueTypes["order_by"];
    participants_aggregate?: ValueTypes["nb_meeting_participants_aggregate_order_by"];
    proposal?: ValueTypes["ch_proposal_order_by"];
    publication_time?: ValueTypes["order_by"];
    slug?: ValueTypes["order_by"];
    sphere?: ValueTypes["nb_sphere_order_by"];
    sphere_id?: ValueTypes["order_by"];
    start_time?: ValueTypes["order_by"];
    status?: ValueTypes["order_by"];
    time_table?: ValueTypes["ch_agenda_item_order_by"];
    updated_at?: ValueTypes["order_by"];
  };
  ["nb_meeting_participants"]: AliasType<{
    cr_user?: ValueTypes["cr_user"];
    id?: true;
    meeting_id?: true;
    nb_meeting?: ValueTypes["nb_meeting"];
    user_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_participants_aggregate"]: AliasType<{
    aggregate?: ValueTypes["nb_meeting_participants_aggregate_fields"];
    nodes?: ValueTypes["nb_meeting_participants"];
    __typename?: true;
  }>;
  ["nb_meeting_participants_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["nb_meeting_participants_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["nb_meeting_participants_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["nb_meeting_participants_max_fields"];
    min?: ValueTypes["nb_meeting_participants_min_fields"];
    stddev?: ValueTypes["nb_meeting_participants_stddev_fields"];
    stddev_pop?: ValueTypes["nb_meeting_participants_stddev_pop_fields"];
    stddev_samp?: ValueTypes["nb_meeting_participants_stddev_samp_fields"];
    sum?: ValueTypes["nb_meeting_participants_sum_fields"];
    var_pop?: ValueTypes["nb_meeting_participants_var_pop_fields"];
    var_samp?: ValueTypes["nb_meeting_participants_var_samp_fields"];
    variance?: ValueTypes["nb_meeting_participants_variance_fields"];
    __typename?: true;
  }>;
  ["nb_meeting_participants_aggregate_order_by"]: {
    avg?: ValueTypes["nb_meeting_participants_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["nb_meeting_participants_max_order_by"];
    min?: ValueTypes["nb_meeting_participants_min_order_by"];
    stddev?: ValueTypes["nb_meeting_participants_stddev_order_by"];
    stddev_pop?: ValueTypes["nb_meeting_participants_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["nb_meeting_participants_stddev_samp_order_by"];
    sum?: ValueTypes["nb_meeting_participants_sum_order_by"];
    var_pop?: ValueTypes["nb_meeting_participants_var_pop_order_by"];
    var_samp?: ValueTypes["nb_meeting_participants_var_samp_order_by"];
    variance?: ValueTypes["nb_meeting_participants_variance_order_by"];
  };
  ["nb_meeting_participants_arr_rel_insert_input"]: {
    data: ValueTypes["nb_meeting_participants_insert_input"][];
    on_conflict?: ValueTypes["nb_meeting_participants_on_conflict"];
  };
  ["nb_meeting_participants_avg_fields"]: AliasType<{
    id?: true;
    meeting_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_participants_avg_order_by"]: {
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_participants_bool_exp"]: {
    _and?: (ValueTypes["nb_meeting_participants_bool_exp"] | undefined)[];
    _not?: ValueTypes["nb_meeting_participants_bool_exp"];
    _or?: (ValueTypes["nb_meeting_participants_bool_exp"] | undefined)[];
    cr_user?: ValueTypes["cr_user_bool_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    meeting_id?: ValueTypes["Int_comparison_exp"];
    nb_meeting?: ValueTypes["nb_meeting_bool_exp"];
    user_id?: ValueTypes["uuid_comparison_exp"];
  };
  ["nb_meeting_participants_constraint"]: nb_meeting_participants_constraint;
  ["nb_meeting_participants_inc_input"]: {
    id?: number;
    meeting_id?: number;
  };
  ["nb_meeting_participants_insert_input"]: {
    cr_user?: ValueTypes["cr_user_obj_rel_insert_input"];
    id?: number;
    meeting_id?: number;
    nb_meeting?: ValueTypes["nb_meeting_obj_rel_insert_input"];
    user_id?: ValueTypes["uuid"];
  };
  ["nb_meeting_participants_max_fields"]: AliasType<{
    id?: true;
    meeting_id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_participants_max_order_by"]: {
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_participants_min_fields"]: AliasType<{
    id?: true;
    meeting_id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_participants_min_order_by"]: {
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_participants_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["nb_meeting_participants"];
    __typename?: true;
  }>;
  ["nb_meeting_participants_obj_rel_insert_input"]: {
    data: ValueTypes["nb_meeting_participants_insert_input"];
    on_conflict?: ValueTypes["nb_meeting_participants_on_conflict"];
  };
  ["nb_meeting_participants_on_conflict"]: {
    constraint: ValueTypes["nb_meeting_participants_constraint"];
    update_columns: ValueTypes["nb_meeting_participants_update_column"][];
    where?: ValueTypes["nb_meeting_participants_bool_exp"];
  };
  ["nb_meeting_participants_order_by"]: {
    cr_user?: ValueTypes["cr_user_order_by"];
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
    nb_meeting?: ValueTypes["nb_meeting_order_by"];
    user_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_participants_pk_columns_input"]: {
    id: number;
  };
  ["nb_meeting_participants_select_column"]: nb_meeting_participants_select_column;
  ["nb_meeting_participants_set_input"]: {
    id?: number;
    meeting_id?: number;
    user_id?: ValueTypes["uuid"];
  };
  ["nb_meeting_participants_stddev_fields"]: AliasType<{
    id?: true;
    meeting_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_participants_stddev_order_by"]: {
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_participants_stddev_pop_fields"]: AliasType<{
    id?: true;
    meeting_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_participants_stddev_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_participants_stddev_samp_fields"]: AliasType<{
    id?: true;
    meeting_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_participants_stddev_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_participants_sum_fields"]: AliasType<{
    id?: true;
    meeting_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_participants_sum_order_by"]: {
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_participants_update_column"]: nb_meeting_participants_update_column;
  ["nb_meeting_participants_var_pop_fields"]: AliasType<{
    id?: true;
    meeting_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_participants_var_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_participants_var_samp_fields"]: AliasType<{
    id?: true;
    meeting_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_participants_var_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_participants_variance_fields"]: AliasType<{
    id?: true;
    meeting_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_participants_variance_order_by"]: {
    id?: ValueTypes["order_by"];
    meeting_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_pk_columns_input"]: {
    id: number;
  };
  ["nb_meeting_select_column"]: nb_meeting_select_column;
  ["nb_meeting_set_input"]: {
    created_at?: ValueTypes["timestamptz"];
    description?: string;
    end_time?: ValueTypes["timestamptz"];
    guild_id?: number;
    id?: number;
    image?: string;
    location?: string;
    meeting_url?: string;
    name?: string;
    organizer_id?: ValueTypes["uuid"];
    publication_time?: ValueTypes["timestamptz"];
    slug?: string;
    sphere_id?: number;
    start_time?: ValueTypes["timestamptz"];
    status?: string;
    updated_at?: ValueTypes["timestamptz"];
  };
  ["nb_meeting_stddev_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_stddev_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_stddev_pop_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_stddev_pop_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_stddev_samp_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_stddev_samp_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_sum_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_sum_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_update_column"]: nb_meeting_update_column;
  ["nb_meeting_var_pop_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_var_pop_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_var_samp_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_var_samp_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_meeting_variance_fields"]: AliasType<{
    guild_id?: true;
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_meeting_variance_order_by"]: {
    guild_id?: ValueTypes["order_by"];
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_sphere"]: AliasType<{
    ch_festivals?: [
      {
        distinct_on?: ValueTypes["ch_festival_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_festival_order_by"][];
        where?: ValueTypes["ch_festival_bool_exp"];
      },
      ValueTypes["ch_festival"]
    ];
    ch_festivals_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_festival_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_festival_order_by"][];
        where?: ValueTypes["ch_festival_bool_exp"];
      },
      ValueTypes["ch_festival_aggregate"]
    ];
    django_site?: ValueTypes["django_site"];
    id?: true;
    is_open?: true;
    name?: true;
    nb_meetings?: [
      {
        distinct_on?: ValueTypes["nb_meeting_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_order_by"][];
        where?: ValueTypes["nb_meeting_bool_exp"];
      },
      ValueTypes["nb_meeting"]
    ];
    nb_meetings_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_meeting_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_order_by"][];
        where?: ValueTypes["nb_meeting_bool_exp"];
      },
      ValueTypes["nb_meeting_aggregate"]
    ];
    nb_sphere_managers?: [
      {
        distinct_on?: ValueTypes["nb_sphere_managers_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_sphere_managers_order_by"][];
        where?: ValueTypes["nb_sphere_managers_bool_exp"];
      },
      ValueTypes["nb_sphere_managers"]
    ];
    nb_sphere_managers_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_sphere_managers_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_sphere_managers_order_by"][];
        where?: ValueTypes["nb_sphere_managers_bool_exp"];
      },
      ValueTypes["nb_sphere_managers_aggregate"]
    ];
    settings?: [{ path?: string }, true];
    site_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_aggregate"]: AliasType<{
    aggregate?: ValueTypes["nb_sphere_aggregate_fields"];
    nodes?: ValueTypes["nb_sphere"];
    __typename?: true;
  }>;
  ["nb_sphere_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["nb_sphere_avg_fields"];
    count?: [
      { columns?: ValueTypes["nb_sphere_select_column"][]; distinct?: boolean },
      true
    ];
    max?: ValueTypes["nb_sphere_max_fields"];
    min?: ValueTypes["nb_sphere_min_fields"];
    stddev?: ValueTypes["nb_sphere_stddev_fields"];
    stddev_pop?: ValueTypes["nb_sphere_stddev_pop_fields"];
    stddev_samp?: ValueTypes["nb_sphere_stddev_samp_fields"];
    sum?: ValueTypes["nb_sphere_sum_fields"];
    var_pop?: ValueTypes["nb_sphere_var_pop_fields"];
    var_samp?: ValueTypes["nb_sphere_var_samp_fields"];
    variance?: ValueTypes["nb_sphere_variance_fields"];
    __typename?: true;
  }>;
  ["nb_sphere_aggregate_order_by"]: {
    avg?: ValueTypes["nb_sphere_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["nb_sphere_max_order_by"];
    min?: ValueTypes["nb_sphere_min_order_by"];
    stddev?: ValueTypes["nb_sphere_stddev_order_by"];
    stddev_pop?: ValueTypes["nb_sphere_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["nb_sphere_stddev_samp_order_by"];
    sum?: ValueTypes["nb_sphere_sum_order_by"];
    var_pop?: ValueTypes["nb_sphere_var_pop_order_by"];
    var_samp?: ValueTypes["nb_sphere_var_samp_order_by"];
    variance?: ValueTypes["nb_sphere_variance_order_by"];
  };
  ["nb_sphere_append_input"]: {
    settings?: ValueTypes["jsonb"];
  };
  ["nb_sphere_arr_rel_insert_input"]: {
    data: ValueTypes["nb_sphere_insert_input"][];
    on_conflict?: ValueTypes["nb_sphere_on_conflict"];
  };
  ["nb_sphere_avg_fields"]: AliasType<{
    id?: true;
    site_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_avg_order_by"]: {
    id?: ValueTypes["order_by"];
    site_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_bool_exp"]: {
    _and?: (ValueTypes["nb_sphere_bool_exp"] | undefined)[];
    _not?: ValueTypes["nb_sphere_bool_exp"];
    _or?: (ValueTypes["nb_sphere_bool_exp"] | undefined)[];
    ch_festivals?: ValueTypes["ch_festival_bool_exp"];
    django_site?: ValueTypes["django_site_bool_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    is_open?: ValueTypes["Boolean_comparison_exp"];
    name?: ValueTypes["String_comparison_exp"];
    nb_meetings?: ValueTypes["nb_meeting_bool_exp"];
    nb_sphere_managers?: ValueTypes["nb_sphere_managers_bool_exp"];
    settings?: ValueTypes["jsonb_comparison_exp"];
    site_id?: ValueTypes["Int_comparison_exp"];
  };
  ["nb_sphere_constraint"]: nb_sphere_constraint;
  ["nb_sphere_delete_at_path_input"]: {
    settings?: (string | undefined)[];
  };
  ["nb_sphere_delete_elem_input"]: {
    settings?: number;
  };
  ["nb_sphere_delete_key_input"]: {
    settings?: string;
  };
  ["nb_sphere_inc_input"]: {
    id?: number;
    site_id?: number;
  };
  ["nb_sphere_insert_input"]: {
    ch_festivals?: ValueTypes["ch_festival_arr_rel_insert_input"];
    django_site?: ValueTypes["django_site_obj_rel_insert_input"];
    id?: number;
    is_open?: boolean;
    name?: string;
    nb_meetings?: ValueTypes["nb_meeting_arr_rel_insert_input"];
    nb_sphere_managers?: ValueTypes["nb_sphere_managers_arr_rel_insert_input"];
    settings?: ValueTypes["jsonb"];
    site_id?: number;
  };
  ["nb_sphere_managers"]: AliasType<{
    cr_user?: ValueTypes["cr_user"];
    id?: true;
    nb_sphere?: ValueTypes["nb_sphere"];
    sphere_id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_managers_aggregate"]: AliasType<{
    aggregate?: ValueTypes["nb_sphere_managers_aggregate_fields"];
    nodes?: ValueTypes["nb_sphere_managers"];
    __typename?: true;
  }>;
  ["nb_sphere_managers_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["nb_sphere_managers_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["nb_sphere_managers_select_column"][];
        distinct?: boolean;
      },
      true
    ];
    max?: ValueTypes["nb_sphere_managers_max_fields"];
    min?: ValueTypes["nb_sphere_managers_min_fields"];
    stddev?: ValueTypes["nb_sphere_managers_stddev_fields"];
    stddev_pop?: ValueTypes["nb_sphere_managers_stddev_pop_fields"];
    stddev_samp?: ValueTypes["nb_sphere_managers_stddev_samp_fields"];
    sum?: ValueTypes["nb_sphere_managers_sum_fields"];
    var_pop?: ValueTypes["nb_sphere_managers_var_pop_fields"];
    var_samp?: ValueTypes["nb_sphere_managers_var_samp_fields"];
    variance?: ValueTypes["nb_sphere_managers_variance_fields"];
    __typename?: true;
  }>;
  ["nb_sphere_managers_aggregate_order_by"]: {
    avg?: ValueTypes["nb_sphere_managers_avg_order_by"];
    count?: ValueTypes["order_by"];
    max?: ValueTypes["nb_sphere_managers_max_order_by"];
    min?: ValueTypes["nb_sphere_managers_min_order_by"];
    stddev?: ValueTypes["nb_sphere_managers_stddev_order_by"];
    stddev_pop?: ValueTypes["nb_sphere_managers_stddev_pop_order_by"];
    stddev_samp?: ValueTypes["nb_sphere_managers_stddev_samp_order_by"];
    sum?: ValueTypes["nb_sphere_managers_sum_order_by"];
    var_pop?: ValueTypes["nb_sphere_managers_var_pop_order_by"];
    var_samp?: ValueTypes["nb_sphere_managers_var_samp_order_by"];
    variance?: ValueTypes["nb_sphere_managers_variance_order_by"];
  };
  ["nb_sphere_managers_arr_rel_insert_input"]: {
    data: ValueTypes["nb_sphere_managers_insert_input"][];
    on_conflict?: ValueTypes["nb_sphere_managers_on_conflict"];
  };
  ["nb_sphere_managers_avg_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_managers_avg_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_managers_bool_exp"]: {
    _and?: (ValueTypes["nb_sphere_managers_bool_exp"] | undefined)[];
    _not?: ValueTypes["nb_sphere_managers_bool_exp"];
    _or?: (ValueTypes["nb_sphere_managers_bool_exp"] | undefined)[];
    cr_user?: ValueTypes["cr_user_bool_exp"];
    id?: ValueTypes["Int_comparison_exp"];
    nb_sphere?: ValueTypes["nb_sphere_bool_exp"];
    sphere_id?: ValueTypes["Int_comparison_exp"];
    user_id?: ValueTypes["uuid_comparison_exp"];
  };
  ["nb_sphere_managers_constraint"]: nb_sphere_managers_constraint;
  ["nb_sphere_managers_inc_input"]: {
    id?: number;
    sphere_id?: number;
  };
  ["nb_sphere_managers_insert_input"]: {
    cr_user?: ValueTypes["cr_user_obj_rel_insert_input"];
    id?: number;
    nb_sphere?: ValueTypes["nb_sphere_obj_rel_insert_input"];
    sphere_id?: number;
    user_id?: ValueTypes["uuid"];
  };
  ["nb_sphere_managers_max_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_managers_max_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_managers_min_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    user_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_managers_min_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_managers_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["nb_sphere_managers"];
    __typename?: true;
  }>;
  ["nb_sphere_managers_obj_rel_insert_input"]: {
    data: ValueTypes["nb_sphere_managers_insert_input"];
    on_conflict?: ValueTypes["nb_sphere_managers_on_conflict"];
  };
  ["nb_sphere_managers_on_conflict"]: {
    constraint: ValueTypes["nb_sphere_managers_constraint"];
    update_columns: ValueTypes["nb_sphere_managers_update_column"][];
    where?: ValueTypes["nb_sphere_managers_bool_exp"];
  };
  ["nb_sphere_managers_order_by"]: {
    cr_user?: ValueTypes["cr_user_order_by"];
    id?: ValueTypes["order_by"];
    nb_sphere?: ValueTypes["nb_sphere_order_by"];
    sphere_id?: ValueTypes["order_by"];
    user_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_managers_pk_columns_input"]: {
    id: number;
  };
  ["nb_sphere_managers_select_column"]: nb_sphere_managers_select_column;
  ["nb_sphere_managers_set_input"]: {
    id?: number;
    sphere_id?: number;
    user_id?: ValueTypes["uuid"];
  };
  ["nb_sphere_managers_stddev_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_managers_stddev_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_managers_stddev_pop_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_managers_stddev_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_managers_stddev_samp_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_managers_stddev_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_managers_sum_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_managers_sum_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_managers_update_column"]: nb_sphere_managers_update_column;
  ["nb_sphere_managers_var_pop_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_managers_var_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_managers_var_samp_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_managers_var_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_managers_variance_fields"]: AliasType<{
    id?: true;
    sphere_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_managers_variance_order_by"]: {
    id?: ValueTypes["order_by"];
    sphere_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_max_fields"]: AliasType<{
    id?: true;
    name?: true;
    site_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_max_order_by"]: {
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    site_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_min_fields"]: AliasType<{
    id?: true;
    name?: true;
    site_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_min_order_by"]: {
    id?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    site_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_mutation_response"]: AliasType<{
    affected_rows?: true;
    returning?: ValueTypes["nb_sphere"];
    __typename?: true;
  }>;
  ["nb_sphere_obj_rel_insert_input"]: {
    data: ValueTypes["nb_sphere_insert_input"];
    on_conflict?: ValueTypes["nb_sphere_on_conflict"];
  };
  ["nb_sphere_on_conflict"]: {
    constraint: ValueTypes["nb_sphere_constraint"];
    update_columns: ValueTypes["nb_sphere_update_column"][];
    where?: ValueTypes["nb_sphere_bool_exp"];
  };
  ["nb_sphere_order_by"]: {
    ch_festivals_aggregate?: ValueTypes["ch_festival_aggregate_order_by"];
    django_site?: ValueTypes["django_site_order_by"];
    id?: ValueTypes["order_by"];
    is_open?: ValueTypes["order_by"];
    name?: ValueTypes["order_by"];
    nb_meetings_aggregate?: ValueTypes["nb_meeting_aggregate_order_by"];
    nb_sphere_managers_aggregate?: ValueTypes["nb_sphere_managers_aggregate_order_by"];
    settings?: ValueTypes["order_by"];
    site_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_pk_columns_input"]: {
    id: number;
  };
  ["nb_sphere_prepend_input"]: {
    settings?: ValueTypes["jsonb"];
  };
  ["nb_sphere_select_column"]: nb_sphere_select_column;
  ["nb_sphere_set_input"]: {
    id?: number;
    is_open?: boolean;
    name?: string;
    settings?: ValueTypes["jsonb"];
    site_id?: number;
  };
  ["nb_sphere_stddev_fields"]: AliasType<{
    id?: true;
    site_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_stddev_order_by"]: {
    id?: ValueTypes["order_by"];
    site_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_stddev_pop_fields"]: AliasType<{
    id?: true;
    site_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_stddev_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    site_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_stddev_samp_fields"]: AliasType<{
    id?: true;
    site_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_stddev_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    site_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_sum_fields"]: AliasType<{
    id?: true;
    site_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_sum_order_by"]: {
    id?: ValueTypes["order_by"];
    site_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_update_column"]: nb_sphere_update_column;
  ["nb_sphere_var_pop_fields"]: AliasType<{
    id?: true;
    site_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_var_pop_order_by"]: {
    id?: ValueTypes["order_by"];
    site_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_var_samp_fields"]: AliasType<{
    id?: true;
    site_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_var_samp_order_by"]: {
    id?: ValueTypes["order_by"];
    site_id?: ValueTypes["order_by"];
  };
  ["nb_sphere_variance_fields"]: AliasType<{
    id?: true;
    site_id?: true;
    __typename?: true;
  }>;
  ["nb_sphere_variance_order_by"]: {
    id?: ValueTypes["order_by"];
    site_id?: ValueTypes["order_by"];
  };
  ["order_by"]: order_by;
  ["query_root"]: AliasType<{
    ch_agenda_item?: [
      {
        distinct_on?: ValueTypes["ch_agenda_item_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_agenda_item_order_by"][];
        where?: ValueTypes["ch_agenda_item_bool_exp"];
      },
      ValueTypes["ch_agenda_item"]
    ];
    ch_agenda_item_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_agenda_item_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_agenda_item_order_by"][];
        where?: ValueTypes["ch_agenda_item_bool_exp"];
      },
      ValueTypes["ch_agenda_item_aggregate"]
    ];
    ch_agenda_item_by_pk?: [{ id: number }, ValueTypes["ch_agenda_item"]];
    ch_festival?: [
      {
        distinct_on?: ValueTypes["ch_festival_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_festival_order_by"][];
        where?: ValueTypes["ch_festival_bool_exp"];
      },
      ValueTypes["ch_festival"]
    ];
    ch_festival_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_festival_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_festival_order_by"][];
        where?: ValueTypes["ch_festival_bool_exp"];
      },
      ValueTypes["ch_festival_aggregate"]
    ];
    ch_festival_by_pk?: [{ id: number }, ValueTypes["ch_festival"]];
    ch_helper?: [
      {
        distinct_on?: ValueTypes["ch_helper_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_order_by"][];
        where?: ValueTypes["ch_helper_bool_exp"];
      },
      ValueTypes["ch_helper"]
    ];
    ch_helper_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_helper_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_order_by"][];
        where?: ValueTypes["ch_helper_bool_exp"];
      },
      ValueTypes["ch_helper_aggregate"]
    ];
    ch_helper_by_pk?: [{ id: number }, ValueTypes["ch_helper"]];
    ch_helper_time_slots?: [
      {
        distinct_on?: ValueTypes["ch_helper_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_time_slots_order_by"][];
        where?: ValueTypes["ch_helper_time_slots_bool_exp"];
      },
      ValueTypes["ch_helper_time_slots"]
    ];
    ch_helper_time_slots_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_helper_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_time_slots_order_by"][];
        where?: ValueTypes["ch_helper_time_slots_bool_exp"];
      },
      ValueTypes["ch_helper_time_slots_aggregate"]
    ];
    ch_helper_time_slots_by_pk?: [
      { id: number },
      ValueTypes["ch_helper_time_slots"]
    ];
    ch_proposal?: [
      {
        distinct_on?: ValueTypes["ch_proposal_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_proposal_order_by"][];
        where?: ValueTypes["ch_proposal_bool_exp"];
      },
      ValueTypes["ch_proposal"]
    ];
    ch_proposal_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_proposal_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_proposal_order_by"][];
        where?: ValueTypes["ch_proposal_bool_exp"];
      },
      ValueTypes["ch_proposal_aggregate"]
    ];
    ch_proposal_by_pk?: [{ id: number }, ValueTypes["ch_proposal"]];
    ch_proposal_time_slots?: [
      {
        distinct_on?: ValueTypes["ch_proposal_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_proposal_time_slots_order_by"][];
        where?: ValueTypes["ch_proposal_time_slots_bool_exp"];
      },
      ValueTypes["ch_proposal_time_slots"]
    ];
    ch_proposal_time_slots_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_proposal_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_proposal_time_slots_order_by"][];
        where?: ValueTypes["ch_proposal_time_slots_bool_exp"];
      },
      ValueTypes["ch_proposal_time_slots_aggregate"]
    ];
    ch_proposal_time_slots_by_pk?: [
      { id: number },
      ValueTypes["ch_proposal_time_slots"]
    ];
    ch_room?: [
      {
        distinct_on?: ValueTypes["ch_room_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_room_order_by"][];
        where?: ValueTypes["ch_room_bool_exp"];
      },
      ValueTypes["ch_room"]
    ];
    ch_room_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_room_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_room_order_by"][];
        where?: ValueTypes["ch_room_bool_exp"];
      },
      ValueTypes["ch_room_aggregate"]
    ];
    ch_room_by_pk?: [{ id: number }, ValueTypes["ch_room"]];
    ch_time_slot?: [
      {
        distinct_on?: ValueTypes["ch_time_slot_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_time_slot_order_by"][];
        where?: ValueTypes["ch_time_slot_bool_exp"];
      },
      ValueTypes["ch_time_slot"]
    ];
    ch_time_slot_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_time_slot_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_time_slot_order_by"][];
        where?: ValueTypes["ch_time_slot_bool_exp"];
      },
      ValueTypes["ch_time_slot_aggregate"]
    ];
    ch_time_slot_by_pk?: [{ id: number }, ValueTypes["ch_time_slot"]];
    ch_wait_list?: [
      {
        distinct_on?: ValueTypes["ch_wait_list_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_wait_list_order_by"][];
        where?: ValueTypes["ch_wait_list_bool_exp"];
      },
      ValueTypes["ch_wait_list"]
    ];
    ch_wait_list_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_wait_list_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_wait_list_order_by"][];
        where?: ValueTypes["ch_wait_list_bool_exp"];
      },
      ValueTypes["ch_wait_list_aggregate"]
    ];
    ch_wait_list_by_pk?: [{ id: number }, ValueTypes["ch_wait_list"]];
    cr_user?: [
      {
        distinct_on?: ValueTypes["cr_user_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["cr_user_order_by"][];
        where?: ValueTypes["cr_user_bool_exp"];
      },
      ValueTypes["cr_user"]
    ];
    cr_user_aggregate?: [
      {
        distinct_on?: ValueTypes["cr_user_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["cr_user_order_by"][];
        where?: ValueTypes["cr_user_bool_exp"];
      },
      ValueTypes["cr_user_aggregate"]
    ];
    cr_user_by_pk?: [{ uuid: ValueTypes["uuid"] }, ValueTypes["cr_user"]];
    django_site?: [
      {
        distinct_on?: ValueTypes["django_site_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["django_site_order_by"][];
        where?: ValueTypes["django_site_bool_exp"];
      },
      ValueTypes["django_site"]
    ];
    django_site_aggregate?: [
      {
        distinct_on?: ValueTypes["django_site_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["django_site_order_by"][];
        where?: ValueTypes["django_site_bool_exp"];
      },
      ValueTypes["django_site_aggregate"]
    ];
    django_site_by_pk?: [{ id: number }, ValueTypes["django_site"]];
    nb_guild?: [
      {
        distinct_on?: ValueTypes["nb_guild_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_guild_order_by"][];
        where?: ValueTypes["nb_guild_bool_exp"];
      },
      ValueTypes["nb_guild"]
    ];
    nb_guild_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_guild_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_guild_order_by"][];
        where?: ValueTypes["nb_guild_bool_exp"];
      },
      ValueTypes["nb_guild_aggregate"]
    ];
    nb_guild_by_pk?: [{ id: number }, ValueTypes["nb_guild"]];
    nb_guild_member?: [
      {
        distinct_on?: ValueTypes["nb_guild_member_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_guild_member_order_by"][];
        where?: ValueTypes["nb_guild_member_bool_exp"];
      },
      ValueTypes["nb_guild_member"]
    ];
    nb_guild_member_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_guild_member_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_guild_member_order_by"][];
        where?: ValueTypes["nb_guild_member_bool_exp"];
      },
      ValueTypes["nb_guild_member_aggregate"]
    ];
    nb_guild_member_by_pk?: [{ id: number }, ValueTypes["nb_guild_member"]];
    nb_meeting?: [
      {
        distinct_on?: ValueTypes["nb_meeting_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_order_by"][];
        where?: ValueTypes["nb_meeting_bool_exp"];
      },
      ValueTypes["nb_meeting"]
    ];
    nb_meeting_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_meeting_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_order_by"][];
        where?: ValueTypes["nb_meeting_bool_exp"];
      },
      ValueTypes["nb_meeting_aggregate"]
    ];
    nb_meeting_by_pk?: [{ id: number }, ValueTypes["nb_meeting"]];
    nb_meeting_participants?: [
      {
        distinct_on?: ValueTypes["nb_meeting_participants_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_participants_order_by"][];
        where?: ValueTypes["nb_meeting_participants_bool_exp"];
      },
      ValueTypes["nb_meeting_participants"]
    ];
    nb_meeting_participants_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_meeting_participants_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_participants_order_by"][];
        where?: ValueTypes["nb_meeting_participants_bool_exp"];
      },
      ValueTypes["nb_meeting_participants_aggregate"]
    ];
    nb_meeting_participants_by_pk?: [
      { id: number },
      ValueTypes["nb_meeting_participants"]
    ];
    nb_sphere?: [
      {
        distinct_on?: ValueTypes["nb_sphere_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_sphere_order_by"][];
        where?: ValueTypes["nb_sphere_bool_exp"];
      },
      ValueTypes["nb_sphere"]
    ];
    nb_sphere_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_sphere_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_sphere_order_by"][];
        where?: ValueTypes["nb_sphere_bool_exp"];
      },
      ValueTypes["nb_sphere_aggregate"]
    ];
    nb_sphere_by_pk?: [{ id: number }, ValueTypes["nb_sphere"]];
    nb_sphere_managers?: [
      {
        distinct_on?: ValueTypes["nb_sphere_managers_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_sphere_managers_order_by"][];
        where?: ValueTypes["nb_sphere_managers_bool_exp"];
      },
      ValueTypes["nb_sphere_managers"]
    ];
    nb_sphere_managers_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_sphere_managers_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_sphere_managers_order_by"][];
        where?: ValueTypes["nb_sphere_managers_bool_exp"];
      },
      ValueTypes["nb_sphere_managers_aggregate"]
    ];
    nb_sphere_managers_by_pk?: [
      { id: number },
      ValueTypes["nb_sphere_managers"]
    ];
    __typename?: true;
  }>;
  ["String_comparison_exp"]: {
    _eq?: string;
    _gt?: string;
    _gte?: string;
    _ilike?: string;
    _in?: string[];
    _is_null?: boolean;
    _like?: string;
    _lt?: string;
    _lte?: string;
    _neq?: string;
    _nilike?: string;
    _nin?: string[];
    _nlike?: string;
    _nsimilar?: string;
    _similar?: string;
  };
  ["subscription_root"]: AliasType<{
    ch_agenda_item?: [
      {
        distinct_on?: ValueTypes["ch_agenda_item_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_agenda_item_order_by"][];
        where?: ValueTypes["ch_agenda_item_bool_exp"];
      },
      ValueTypes["ch_agenda_item"]
    ];
    ch_agenda_item_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_agenda_item_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_agenda_item_order_by"][];
        where?: ValueTypes["ch_agenda_item_bool_exp"];
      },
      ValueTypes["ch_agenda_item_aggregate"]
    ];
    ch_agenda_item_by_pk?: [{ id: number }, ValueTypes["ch_agenda_item"]];
    ch_festival?: [
      {
        distinct_on?: ValueTypes["ch_festival_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_festival_order_by"][];
        where?: ValueTypes["ch_festival_bool_exp"];
      },
      ValueTypes["ch_festival"]
    ];
    ch_festival_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_festival_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_festival_order_by"][];
        where?: ValueTypes["ch_festival_bool_exp"];
      },
      ValueTypes["ch_festival_aggregate"]
    ];
    ch_festival_by_pk?: [{ id: number }, ValueTypes["ch_festival"]];
    ch_helper?: [
      {
        distinct_on?: ValueTypes["ch_helper_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_order_by"][];
        where?: ValueTypes["ch_helper_bool_exp"];
      },
      ValueTypes["ch_helper"]
    ];
    ch_helper_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_helper_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_order_by"][];
        where?: ValueTypes["ch_helper_bool_exp"];
      },
      ValueTypes["ch_helper_aggregate"]
    ];
    ch_helper_by_pk?: [{ id: number }, ValueTypes["ch_helper"]];
    ch_helper_time_slots?: [
      {
        distinct_on?: ValueTypes["ch_helper_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_time_slots_order_by"][];
        where?: ValueTypes["ch_helper_time_slots_bool_exp"];
      },
      ValueTypes["ch_helper_time_slots"]
    ];
    ch_helper_time_slots_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_helper_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_helper_time_slots_order_by"][];
        where?: ValueTypes["ch_helper_time_slots_bool_exp"];
      },
      ValueTypes["ch_helper_time_slots_aggregate"]
    ];
    ch_helper_time_slots_by_pk?: [
      { id: number },
      ValueTypes["ch_helper_time_slots"]
    ];
    ch_proposal?: [
      {
        distinct_on?: ValueTypes["ch_proposal_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_proposal_order_by"][];
        where?: ValueTypes["ch_proposal_bool_exp"];
      },
      ValueTypes["ch_proposal"]
    ];
    ch_proposal_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_proposal_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_proposal_order_by"][];
        where?: ValueTypes["ch_proposal_bool_exp"];
      },
      ValueTypes["ch_proposal_aggregate"]
    ];
    ch_proposal_by_pk?: [{ id: number }, ValueTypes["ch_proposal"]];
    ch_proposal_time_slots?: [
      {
        distinct_on?: ValueTypes["ch_proposal_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_proposal_time_slots_order_by"][];
        where?: ValueTypes["ch_proposal_time_slots_bool_exp"];
      },
      ValueTypes["ch_proposal_time_slots"]
    ];
    ch_proposal_time_slots_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_proposal_time_slots_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_proposal_time_slots_order_by"][];
        where?: ValueTypes["ch_proposal_time_slots_bool_exp"];
      },
      ValueTypes["ch_proposal_time_slots_aggregate"]
    ];
    ch_proposal_time_slots_by_pk?: [
      { id: number },
      ValueTypes["ch_proposal_time_slots"]
    ];
    ch_room?: [
      {
        distinct_on?: ValueTypes["ch_room_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_room_order_by"][];
        where?: ValueTypes["ch_room_bool_exp"];
      },
      ValueTypes["ch_room"]
    ];
    ch_room_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_room_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_room_order_by"][];
        where?: ValueTypes["ch_room_bool_exp"];
      },
      ValueTypes["ch_room_aggregate"]
    ];
    ch_room_by_pk?: [{ id: number }, ValueTypes["ch_room"]];
    ch_time_slot?: [
      {
        distinct_on?: ValueTypes["ch_time_slot_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_time_slot_order_by"][];
        where?: ValueTypes["ch_time_slot_bool_exp"];
      },
      ValueTypes["ch_time_slot"]
    ];
    ch_time_slot_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_time_slot_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_time_slot_order_by"][];
        where?: ValueTypes["ch_time_slot_bool_exp"];
      },
      ValueTypes["ch_time_slot_aggregate"]
    ];
    ch_time_slot_by_pk?: [{ id: number }, ValueTypes["ch_time_slot"]];
    ch_wait_list?: [
      {
        distinct_on?: ValueTypes["ch_wait_list_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_wait_list_order_by"][];
        where?: ValueTypes["ch_wait_list_bool_exp"];
      },
      ValueTypes["ch_wait_list"]
    ];
    ch_wait_list_aggregate?: [
      {
        distinct_on?: ValueTypes["ch_wait_list_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["ch_wait_list_order_by"][];
        where?: ValueTypes["ch_wait_list_bool_exp"];
      },
      ValueTypes["ch_wait_list_aggregate"]
    ];
    ch_wait_list_by_pk?: [{ id: number }, ValueTypes["ch_wait_list"]];
    cr_user?: [
      {
        distinct_on?: ValueTypes["cr_user_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["cr_user_order_by"][];
        where?: ValueTypes["cr_user_bool_exp"];
      },
      ValueTypes["cr_user"]
    ];
    cr_user_aggregate?: [
      {
        distinct_on?: ValueTypes["cr_user_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["cr_user_order_by"][];
        where?: ValueTypes["cr_user_bool_exp"];
      },
      ValueTypes["cr_user_aggregate"]
    ];
    cr_user_by_pk?: [{ uuid: ValueTypes["uuid"] }, ValueTypes["cr_user"]];
    django_site?: [
      {
        distinct_on?: ValueTypes["django_site_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["django_site_order_by"][];
        where?: ValueTypes["django_site_bool_exp"];
      },
      ValueTypes["django_site"]
    ];
    django_site_aggregate?: [
      {
        distinct_on?: ValueTypes["django_site_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["django_site_order_by"][];
        where?: ValueTypes["django_site_bool_exp"];
      },
      ValueTypes["django_site_aggregate"]
    ];
    django_site_by_pk?: [{ id: number }, ValueTypes["django_site"]];
    nb_guild?: [
      {
        distinct_on?: ValueTypes["nb_guild_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_guild_order_by"][];
        where?: ValueTypes["nb_guild_bool_exp"];
      },
      ValueTypes["nb_guild"]
    ];
    nb_guild_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_guild_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_guild_order_by"][];
        where?: ValueTypes["nb_guild_bool_exp"];
      },
      ValueTypes["nb_guild_aggregate"]
    ];
    nb_guild_by_pk?: [{ id: number }, ValueTypes["nb_guild"]];
    nb_guild_member?: [
      {
        distinct_on?: ValueTypes["nb_guild_member_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_guild_member_order_by"][];
        where?: ValueTypes["nb_guild_member_bool_exp"];
      },
      ValueTypes["nb_guild_member"]
    ];
    nb_guild_member_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_guild_member_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_guild_member_order_by"][];
        where?: ValueTypes["nb_guild_member_bool_exp"];
      },
      ValueTypes["nb_guild_member_aggregate"]
    ];
    nb_guild_member_by_pk?: [{ id: number }, ValueTypes["nb_guild_member"]];
    nb_meeting?: [
      {
        distinct_on?: ValueTypes["nb_meeting_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_order_by"][];
        where?: ValueTypes["nb_meeting_bool_exp"];
      },
      ValueTypes["nb_meeting"]
    ];
    nb_meeting_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_meeting_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_order_by"][];
        where?: ValueTypes["nb_meeting_bool_exp"];
      },
      ValueTypes["nb_meeting_aggregate"]
    ];
    nb_meeting_by_pk?: [{ id: number }, ValueTypes["nb_meeting"]];
    nb_meeting_participants?: [
      {
        distinct_on?: ValueTypes["nb_meeting_participants_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_participants_order_by"][];
        where?: ValueTypes["nb_meeting_participants_bool_exp"];
      },
      ValueTypes["nb_meeting_participants"]
    ];
    nb_meeting_participants_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_meeting_participants_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_meeting_participants_order_by"][];
        where?: ValueTypes["nb_meeting_participants_bool_exp"];
      },
      ValueTypes["nb_meeting_participants_aggregate"]
    ];
    nb_meeting_participants_by_pk?: [
      { id: number },
      ValueTypes["nb_meeting_participants"]
    ];
    nb_sphere?: [
      {
        distinct_on?: ValueTypes["nb_sphere_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_sphere_order_by"][];
        where?: ValueTypes["nb_sphere_bool_exp"];
      },
      ValueTypes["nb_sphere"]
    ];
    nb_sphere_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_sphere_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_sphere_order_by"][];
        where?: ValueTypes["nb_sphere_bool_exp"];
      },
      ValueTypes["nb_sphere_aggregate"]
    ];
    nb_sphere_by_pk?: [{ id: number }, ValueTypes["nb_sphere"]];
    nb_sphere_managers?: [
      {
        distinct_on?: ValueTypes["nb_sphere_managers_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_sphere_managers_order_by"][];
        where?: ValueTypes["nb_sphere_managers_bool_exp"];
      },
      ValueTypes["nb_sphere_managers"]
    ];
    nb_sphere_managers_aggregate?: [
      {
        distinct_on?: ValueTypes["nb_sphere_managers_select_column"][];
        limit?: number;
        offset?: number;
        order_by?: ValueTypes["nb_sphere_managers_order_by"][];
        where?: ValueTypes["nb_sphere_managers_bool_exp"];
      },
      ValueTypes["nb_sphere_managers_aggregate"]
    ];
    nb_sphere_managers_by_pk?: [
      { id: number },
      ValueTypes["nb_sphere_managers"]
    ];
    __typename?: true;
  }>;
  ["timestamptz"]: unknown;
  ["timestamptz_comparison_exp"]: {
    _eq?: ValueTypes["timestamptz"];
    _gt?: ValueTypes["timestamptz"];
    _gte?: ValueTypes["timestamptz"];
    _in?: ValueTypes["timestamptz"][];
    _is_null?: boolean;
    _lt?: ValueTypes["timestamptz"];
    _lte?: ValueTypes["timestamptz"];
    _neq?: ValueTypes["timestamptz"];
    _nin?: ValueTypes["timestamptz"][];
  };
  ["uuid"]: unknown;
  ["uuid_comparison_exp"]: {
    _eq?: ValueTypes["uuid"];
    _gt?: ValueTypes["uuid"];
    _gte?: ValueTypes["uuid"];
    _in?: ValueTypes["uuid"][];
    _is_null?: boolean;
    _lt?: ValueTypes["uuid"];
    _lte?: ValueTypes["uuid"];
    _neq?: ValueTypes["uuid"];
    _nin?: ValueTypes["uuid"][];
  };
};

export type PartialObjects = {
  ["Boolean_comparison_exp"]: {
    _eq?: boolean;
    _gt?: boolean;
    _gte?: boolean;
    _in?: boolean[];
    _is_null?: boolean;
    _lt?: boolean;
    _lte?: boolean;
    _neq?: boolean;
    _nin?: boolean[];
  };
  ["ch_agenda_item"]: {
    __typename?: "ch_agenda_item";
    ch_helper?: PartialObjects["ch_helper"];
    ch_room?: PartialObjects["ch_room"];
    helper_confirmed?: boolean;
    helper_id?: number;
    id?: number;
    meeting_confirmed?: boolean;
    meeting_id?: number;
    nb_meeting?: PartialObjects["nb_meeting"];
    room_id?: number;
    status?: string;
  };
  ["ch_agenda_item_aggregate"]: {
    __typename?: "ch_agenda_item_aggregate";
    aggregate?: PartialObjects["ch_agenda_item_aggregate_fields"];
    nodes?: PartialObjects["ch_agenda_item"][];
  };
  ["ch_agenda_item_aggregate_fields"]: {
    __typename?: "ch_agenda_item_aggregate_fields";
    avg?: PartialObjects["ch_agenda_item_avg_fields"];
    count?: number;
    max?: PartialObjects["ch_agenda_item_max_fields"];
    min?: PartialObjects["ch_agenda_item_min_fields"];
    stddev?: PartialObjects["ch_agenda_item_stddev_fields"];
    stddev_pop?: PartialObjects["ch_agenda_item_stddev_pop_fields"];
    stddev_samp?: PartialObjects["ch_agenda_item_stddev_samp_fields"];
    sum?: PartialObjects["ch_agenda_item_sum_fields"];
    var_pop?: PartialObjects["ch_agenda_item_var_pop_fields"];
    var_samp?: PartialObjects["ch_agenda_item_var_samp_fields"];
    variance?: PartialObjects["ch_agenda_item_variance_fields"];
  };
  ["ch_agenda_item_aggregate_order_by"]: {
    avg?: PartialObjects["ch_agenda_item_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["ch_agenda_item_max_order_by"];
    min?: PartialObjects["ch_agenda_item_min_order_by"];
    stddev?: PartialObjects["ch_agenda_item_stddev_order_by"];
    stddev_pop?: PartialObjects["ch_agenda_item_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["ch_agenda_item_stddev_samp_order_by"];
    sum?: PartialObjects["ch_agenda_item_sum_order_by"];
    var_pop?: PartialObjects["ch_agenda_item_var_pop_order_by"];
    var_samp?: PartialObjects["ch_agenda_item_var_samp_order_by"];
    variance?: PartialObjects["ch_agenda_item_variance_order_by"];
  };
  ["ch_agenda_item_arr_rel_insert_input"]: {
    data: PartialObjects["ch_agenda_item_insert_input"][];
    on_conflict?: PartialObjects["ch_agenda_item_on_conflict"];
  };
  ["ch_agenda_item_avg_fields"]: {
    __typename?: "ch_agenda_item_avg_fields";
    helper_id?: number;
    id?: number;
    meeting_id?: number;
    room_id?: number;
  };
  ["ch_agenda_item_avg_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    room_id?: PartialObjects["order_by"];
  };
  ["ch_agenda_item_bool_exp"]: {
    _and?: (PartialObjects["ch_agenda_item_bool_exp"] | undefined)[];
    _not?: PartialObjects["ch_agenda_item_bool_exp"];
    _or?: (PartialObjects["ch_agenda_item_bool_exp"] | undefined)[];
    ch_helper?: PartialObjects["ch_helper_bool_exp"];
    ch_room?: PartialObjects["ch_room_bool_exp"];
    helper_confirmed?: PartialObjects["Boolean_comparison_exp"];
    helper_id?: PartialObjects["Int_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    meeting_confirmed?: PartialObjects["Boolean_comparison_exp"];
    meeting_id?: PartialObjects["Int_comparison_exp"];
    nb_meeting?: PartialObjects["nb_meeting_bool_exp"];
    room_id?: PartialObjects["Int_comparison_exp"];
    status?: PartialObjects["String_comparison_exp"];
  };
  ["ch_agenda_item_constraint"]: ch_agenda_item_constraint;
  ["ch_agenda_item_inc_input"]: {
    helper_id?: number;
    id?: number;
    meeting_id?: number;
    room_id?: number;
  };
  ["ch_agenda_item_insert_input"]: {
    ch_helper?: PartialObjects["ch_helper_obj_rel_insert_input"];
    ch_room?: PartialObjects["ch_room_obj_rel_insert_input"];
    helper_confirmed?: boolean;
    helper_id?: number;
    id?: number;
    meeting_confirmed?: boolean;
    meeting_id?: number;
    nb_meeting?: PartialObjects["nb_meeting_obj_rel_insert_input"];
    room_id?: number;
    status?: string;
  };
  ["ch_agenda_item_max_fields"]: {
    __typename?: "ch_agenda_item_max_fields";
    helper_id?: number;
    id?: number;
    meeting_id?: number;
    room_id?: number;
    status?: string;
  };
  ["ch_agenda_item_max_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    room_id?: PartialObjects["order_by"];
    status?: PartialObjects["order_by"];
  };
  ["ch_agenda_item_min_fields"]: {
    __typename?: "ch_agenda_item_min_fields";
    helper_id?: number;
    id?: number;
    meeting_id?: number;
    room_id?: number;
    status?: string;
  };
  ["ch_agenda_item_min_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    room_id?: PartialObjects["order_by"];
    status?: PartialObjects["order_by"];
  };
  ["ch_agenda_item_mutation_response"]: {
    __typename?: "ch_agenda_item_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["ch_agenda_item"][];
  };
  ["ch_agenda_item_obj_rel_insert_input"]: {
    data: PartialObjects["ch_agenda_item_insert_input"];
    on_conflict?: PartialObjects["ch_agenda_item_on_conflict"];
  };
  ["ch_agenda_item_on_conflict"]: {
    constraint: PartialObjects["ch_agenda_item_constraint"];
    update_columns: PartialObjects["ch_agenda_item_update_column"][];
    where?: PartialObjects["ch_agenda_item_bool_exp"];
  };
  ["ch_agenda_item_order_by"]: {
    ch_helper?: PartialObjects["ch_helper_order_by"];
    ch_room?: PartialObjects["ch_room_order_by"];
    helper_confirmed?: PartialObjects["order_by"];
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_confirmed?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    nb_meeting?: PartialObjects["nb_meeting_order_by"];
    room_id?: PartialObjects["order_by"];
    status?: PartialObjects["order_by"];
  };
  ["ch_agenda_item_pk_columns_input"]: {
    id: number;
  };
  ["ch_agenda_item_select_column"]: ch_agenda_item_select_column;
  ["ch_agenda_item_set_input"]: {
    helper_confirmed?: boolean;
    helper_id?: number;
    id?: number;
    meeting_confirmed?: boolean;
    meeting_id?: number;
    room_id?: number;
    status?: string;
  };
  ["ch_agenda_item_stddev_fields"]: {
    __typename?: "ch_agenda_item_stddev_fields";
    helper_id?: number;
    id?: number;
    meeting_id?: number;
    room_id?: number;
  };
  ["ch_agenda_item_stddev_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    room_id?: PartialObjects["order_by"];
  };
  ["ch_agenda_item_stddev_pop_fields"]: {
    __typename?: "ch_agenda_item_stddev_pop_fields";
    helper_id?: number;
    id?: number;
    meeting_id?: number;
    room_id?: number;
  };
  ["ch_agenda_item_stddev_pop_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    room_id?: PartialObjects["order_by"];
  };
  ["ch_agenda_item_stddev_samp_fields"]: {
    __typename?: "ch_agenda_item_stddev_samp_fields";
    helper_id?: number;
    id?: number;
    meeting_id?: number;
    room_id?: number;
  };
  ["ch_agenda_item_stddev_samp_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    room_id?: PartialObjects["order_by"];
  };
  ["ch_agenda_item_sum_fields"]: {
    __typename?: "ch_agenda_item_sum_fields";
    helper_id?: number;
    id?: number;
    meeting_id?: number;
    room_id?: number;
  };
  ["ch_agenda_item_sum_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    room_id?: PartialObjects["order_by"];
  };
  ["ch_agenda_item_update_column"]: ch_agenda_item_update_column;
  ["ch_agenda_item_var_pop_fields"]: {
    __typename?: "ch_agenda_item_var_pop_fields";
    helper_id?: number;
    id?: number;
    meeting_id?: number;
    room_id?: number;
  };
  ["ch_agenda_item_var_pop_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    room_id?: PartialObjects["order_by"];
  };
  ["ch_agenda_item_var_samp_fields"]: {
    __typename?: "ch_agenda_item_var_samp_fields";
    helper_id?: number;
    id?: number;
    meeting_id?: number;
    room_id?: number;
  };
  ["ch_agenda_item_var_samp_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    room_id?: PartialObjects["order_by"];
  };
  ["ch_agenda_item_variance_fields"]: {
    __typename?: "ch_agenda_item_variance_fields";
    helper_id?: number;
    id?: number;
    meeting_id?: number;
    room_id?: number;
  };
  ["ch_agenda_item_variance_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    room_id?: PartialObjects["order_by"];
  };
  ["ch_festival"]: {
    __typename?: "ch_festival";
    ch_helpers?: PartialObjects["ch_helper"][];
    ch_helpers_aggregate?: PartialObjects["ch_helper_aggregate"];
    ch_rooms?: PartialObjects["ch_room"][];
    ch_rooms_aggregate?: PartialObjects["ch_room_aggregate"];
    ch_wait_lists?: PartialObjects["ch_wait_list"][];
    ch_wait_lists_aggregate?: PartialObjects["ch_wait_list_aggregate"];
    end_proposal?: PartialObjects["timestamptz"];
    end_time?: PartialObjects["timestamptz"];
    id?: number;
    name?: string;
    nb_sphere?: PartialObjects["nb_sphere"];
    settings?: PartialObjects["jsonb"];
    slug?: string;
    sphere_id?: number;
    start_proposal?: PartialObjects["timestamptz"];
    start_publication?: PartialObjects["timestamptz"];
    start_time?: PartialObjects["timestamptz"];
    status?: string;
  };
  ["ch_festival_aggregate"]: {
    __typename?: "ch_festival_aggregate";
    aggregate?: PartialObjects["ch_festival_aggregate_fields"];
    nodes?: PartialObjects["ch_festival"][];
  };
  ["ch_festival_aggregate_fields"]: {
    __typename?: "ch_festival_aggregate_fields";
    avg?: PartialObjects["ch_festival_avg_fields"];
    count?: number;
    max?: PartialObjects["ch_festival_max_fields"];
    min?: PartialObjects["ch_festival_min_fields"];
    stddev?: PartialObjects["ch_festival_stddev_fields"];
    stddev_pop?: PartialObjects["ch_festival_stddev_pop_fields"];
    stddev_samp?: PartialObjects["ch_festival_stddev_samp_fields"];
    sum?: PartialObjects["ch_festival_sum_fields"];
    var_pop?: PartialObjects["ch_festival_var_pop_fields"];
    var_samp?: PartialObjects["ch_festival_var_samp_fields"];
    variance?: PartialObjects["ch_festival_variance_fields"];
  };
  ["ch_festival_aggregate_order_by"]: {
    avg?: PartialObjects["ch_festival_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["ch_festival_max_order_by"];
    min?: PartialObjects["ch_festival_min_order_by"];
    stddev?: PartialObjects["ch_festival_stddev_order_by"];
    stddev_pop?: PartialObjects["ch_festival_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["ch_festival_stddev_samp_order_by"];
    sum?: PartialObjects["ch_festival_sum_order_by"];
    var_pop?: PartialObjects["ch_festival_var_pop_order_by"];
    var_samp?: PartialObjects["ch_festival_var_samp_order_by"];
    variance?: PartialObjects["ch_festival_variance_order_by"];
  };
  ["ch_festival_append_input"]: {
    settings?: PartialObjects["jsonb"];
  };
  ["ch_festival_arr_rel_insert_input"]: {
    data: PartialObjects["ch_festival_insert_input"][];
    on_conflict?: PartialObjects["ch_festival_on_conflict"];
  };
  ["ch_festival_avg_fields"]: {
    __typename?: "ch_festival_avg_fields";
    id?: number;
    sphere_id?: number;
  };
  ["ch_festival_avg_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["ch_festival_bool_exp"]: {
    _and?: (PartialObjects["ch_festival_bool_exp"] | undefined)[];
    _not?: PartialObjects["ch_festival_bool_exp"];
    _or?: (PartialObjects["ch_festival_bool_exp"] | undefined)[];
    ch_helpers?: PartialObjects["ch_helper_bool_exp"];
    ch_rooms?: PartialObjects["ch_room_bool_exp"];
    ch_wait_lists?: PartialObjects["ch_wait_list_bool_exp"];
    end_proposal?: PartialObjects["timestamptz_comparison_exp"];
    end_time?: PartialObjects["timestamptz_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    name?: PartialObjects["String_comparison_exp"];
    nb_sphere?: PartialObjects["nb_sphere_bool_exp"];
    settings?: PartialObjects["jsonb_comparison_exp"];
    slug?: PartialObjects["String_comparison_exp"];
    sphere_id?: PartialObjects["Int_comparison_exp"];
    start_proposal?: PartialObjects["timestamptz_comparison_exp"];
    start_publication?: PartialObjects["timestamptz_comparison_exp"];
    start_time?: PartialObjects["timestamptz_comparison_exp"];
    status?: PartialObjects["String_comparison_exp"];
  };
  ["ch_festival_constraint"]: ch_festival_constraint;
  ["ch_festival_delete_at_path_input"]: {
    settings?: (string | undefined)[];
  };
  ["ch_festival_delete_elem_input"]: {
    settings?: number;
  };
  ["ch_festival_delete_key_input"]: {
    settings?: string;
  };
  ["ch_festival_inc_input"]: {
    id?: number;
    sphere_id?: number;
  };
  ["ch_festival_insert_input"]: {
    ch_helpers?: PartialObjects["ch_helper_arr_rel_insert_input"];
    ch_rooms?: PartialObjects["ch_room_arr_rel_insert_input"];
    ch_wait_lists?: PartialObjects["ch_wait_list_arr_rel_insert_input"];
    end_proposal?: PartialObjects["timestamptz"];
    end_time?: PartialObjects["timestamptz"];
    id?: number;
    name?: string;
    nb_sphere?: PartialObjects["nb_sphere_obj_rel_insert_input"];
    settings?: PartialObjects["jsonb"];
    slug?: string;
    sphere_id?: number;
    start_proposal?: PartialObjects["timestamptz"];
    start_publication?: PartialObjects["timestamptz"];
    start_time?: PartialObjects["timestamptz"];
    status?: string;
  };
  ["ch_festival_max_fields"]: {
    __typename?: "ch_festival_max_fields";
    end_proposal?: PartialObjects["timestamptz"];
    end_time?: PartialObjects["timestamptz"];
    id?: number;
    name?: string;
    slug?: string;
    sphere_id?: number;
    start_proposal?: PartialObjects["timestamptz"];
    start_publication?: PartialObjects["timestamptz"];
    start_time?: PartialObjects["timestamptz"];
    status?: string;
  };
  ["ch_festival_max_order_by"]: {
    end_proposal?: PartialObjects["order_by"];
    end_time?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    slug?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
    start_proposal?: PartialObjects["order_by"];
    start_publication?: PartialObjects["order_by"];
    start_time?: PartialObjects["order_by"];
    status?: PartialObjects["order_by"];
  };
  ["ch_festival_min_fields"]: {
    __typename?: "ch_festival_min_fields";
    end_proposal?: PartialObjects["timestamptz"];
    end_time?: PartialObjects["timestamptz"];
    id?: number;
    name?: string;
    slug?: string;
    sphere_id?: number;
    start_proposal?: PartialObjects["timestamptz"];
    start_publication?: PartialObjects["timestamptz"];
    start_time?: PartialObjects["timestamptz"];
    status?: string;
  };
  ["ch_festival_min_order_by"]: {
    end_proposal?: PartialObjects["order_by"];
    end_time?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    slug?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
    start_proposal?: PartialObjects["order_by"];
    start_publication?: PartialObjects["order_by"];
    start_time?: PartialObjects["order_by"];
    status?: PartialObjects["order_by"];
  };
  ["ch_festival_mutation_response"]: {
    __typename?: "ch_festival_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["ch_festival"][];
  };
  ["ch_festival_obj_rel_insert_input"]: {
    data: PartialObjects["ch_festival_insert_input"];
    on_conflict?: PartialObjects["ch_festival_on_conflict"];
  };
  ["ch_festival_on_conflict"]: {
    constraint: PartialObjects["ch_festival_constraint"];
    update_columns: PartialObjects["ch_festival_update_column"][];
    where?: PartialObjects["ch_festival_bool_exp"];
  };
  ["ch_festival_order_by"]: {
    ch_helpers_aggregate?: PartialObjects["ch_helper_aggregate_order_by"];
    ch_rooms_aggregate?: PartialObjects["ch_room_aggregate_order_by"];
    ch_wait_lists_aggregate?: PartialObjects["ch_wait_list_aggregate_order_by"];
    end_proposal?: PartialObjects["order_by"];
    end_time?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    nb_sphere?: PartialObjects["nb_sphere_order_by"];
    settings?: PartialObjects["order_by"];
    slug?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
    start_proposal?: PartialObjects["order_by"];
    start_publication?: PartialObjects["order_by"];
    start_time?: PartialObjects["order_by"];
    status?: PartialObjects["order_by"];
  };
  ["ch_festival_pk_columns_input"]: {
    id: number;
  };
  ["ch_festival_prepend_input"]: {
    settings?: PartialObjects["jsonb"];
  };
  ["ch_festival_select_column"]: ch_festival_select_column;
  ["ch_festival_set_input"]: {
    end_proposal?: PartialObjects["timestamptz"];
    end_time?: PartialObjects["timestamptz"];
    id?: number;
    name?: string;
    settings?: PartialObjects["jsonb"];
    slug?: string;
    sphere_id?: number;
    start_proposal?: PartialObjects["timestamptz"];
    start_publication?: PartialObjects["timestamptz"];
    start_time?: PartialObjects["timestamptz"];
    status?: string;
  };
  ["ch_festival_stddev_fields"]: {
    __typename?: "ch_festival_stddev_fields";
    id?: number;
    sphere_id?: number;
  };
  ["ch_festival_stddev_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["ch_festival_stddev_pop_fields"]: {
    __typename?: "ch_festival_stddev_pop_fields";
    id?: number;
    sphere_id?: number;
  };
  ["ch_festival_stddev_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["ch_festival_stddev_samp_fields"]: {
    __typename?: "ch_festival_stddev_samp_fields";
    id?: number;
    sphere_id?: number;
  };
  ["ch_festival_stddev_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["ch_festival_sum_fields"]: {
    __typename?: "ch_festival_sum_fields";
    id?: number;
    sphere_id?: number;
  };
  ["ch_festival_sum_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["ch_festival_update_column"]: ch_festival_update_column;
  ["ch_festival_var_pop_fields"]: {
    __typename?: "ch_festival_var_pop_fields";
    id?: number;
    sphere_id?: number;
  };
  ["ch_festival_var_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["ch_festival_var_samp_fields"]: {
    __typename?: "ch_festival_var_samp_fields";
    id?: number;
    sphere_id?: number;
  };
  ["ch_festival_var_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["ch_festival_variance_fields"]: {
    __typename?: "ch_festival_variance_fields";
    id?: number;
    sphere_id?: number;
  };
  ["ch_festival_variance_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["ch_helper"]: {
    __typename?: "ch_helper";
    ch_agenda_items?: PartialObjects["ch_agenda_item"][];
    ch_agenda_items_aggregate?: PartialObjects["ch_agenda_item_aggregate"];
    ch_festival?: PartialObjects["ch_festival"];
    ch_helper_time_slots?: PartialObjects["ch_helper_time_slots"][];
    ch_helper_time_slots_aggregate?: PartialObjects["ch_helper_time_slots_aggregate"];
    cr_user?: PartialObjects["cr_user"];
    festival_id?: number;
    id?: number;
    user_id?: PartialObjects["uuid"];
  };
  ["ch_helper_aggregate"]: {
    __typename?: "ch_helper_aggregate";
    aggregate?: PartialObjects["ch_helper_aggregate_fields"];
    nodes?: PartialObjects["ch_helper"][];
  };
  ["ch_helper_aggregate_fields"]: {
    __typename?: "ch_helper_aggregate_fields";
    avg?: PartialObjects["ch_helper_avg_fields"];
    count?: number;
    max?: PartialObjects["ch_helper_max_fields"];
    min?: PartialObjects["ch_helper_min_fields"];
    stddev?: PartialObjects["ch_helper_stddev_fields"];
    stddev_pop?: PartialObjects["ch_helper_stddev_pop_fields"];
    stddev_samp?: PartialObjects["ch_helper_stddev_samp_fields"];
    sum?: PartialObjects["ch_helper_sum_fields"];
    var_pop?: PartialObjects["ch_helper_var_pop_fields"];
    var_samp?: PartialObjects["ch_helper_var_samp_fields"];
    variance?: PartialObjects["ch_helper_variance_fields"];
  };
  ["ch_helper_aggregate_order_by"]: {
    avg?: PartialObjects["ch_helper_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["ch_helper_max_order_by"];
    min?: PartialObjects["ch_helper_min_order_by"];
    stddev?: PartialObjects["ch_helper_stddev_order_by"];
    stddev_pop?: PartialObjects["ch_helper_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["ch_helper_stddev_samp_order_by"];
    sum?: PartialObjects["ch_helper_sum_order_by"];
    var_pop?: PartialObjects["ch_helper_var_pop_order_by"];
    var_samp?: PartialObjects["ch_helper_var_samp_order_by"];
    variance?: PartialObjects["ch_helper_variance_order_by"];
  };
  ["ch_helper_arr_rel_insert_input"]: {
    data: PartialObjects["ch_helper_insert_input"][];
    on_conflict?: PartialObjects["ch_helper_on_conflict"];
  };
  ["ch_helper_avg_fields"]: {
    __typename?: "ch_helper_avg_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_helper_avg_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_helper_bool_exp"]: {
    _and?: (PartialObjects["ch_helper_bool_exp"] | undefined)[];
    _not?: PartialObjects["ch_helper_bool_exp"];
    _or?: (PartialObjects["ch_helper_bool_exp"] | undefined)[];
    ch_agenda_items?: PartialObjects["ch_agenda_item_bool_exp"];
    ch_festival?: PartialObjects["ch_festival_bool_exp"];
    ch_helper_time_slots?: PartialObjects["ch_helper_time_slots_bool_exp"];
    cr_user?: PartialObjects["cr_user_bool_exp"];
    festival_id?: PartialObjects["Int_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    user_id?: PartialObjects["uuid_comparison_exp"];
  };
  ["ch_helper_constraint"]: ch_helper_constraint;
  ["ch_helper_inc_input"]: {
    festival_id?: number;
    id?: number;
  };
  ["ch_helper_insert_input"]: {
    ch_agenda_items?: PartialObjects["ch_agenda_item_arr_rel_insert_input"];
    ch_festival?: PartialObjects["ch_festival_obj_rel_insert_input"];
    ch_helper_time_slots?: PartialObjects["ch_helper_time_slots_arr_rel_insert_input"];
    cr_user?: PartialObjects["cr_user_obj_rel_insert_input"];
    festival_id?: number;
    id?: number;
    user_id?: PartialObjects["uuid"];
  };
  ["ch_helper_max_fields"]: {
    __typename?: "ch_helper_max_fields";
    festival_id?: number;
    id?: number;
    user_id?: PartialObjects["uuid"];
  };
  ["ch_helper_max_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  ["ch_helper_min_fields"]: {
    __typename?: "ch_helper_min_fields";
    festival_id?: number;
    id?: number;
    user_id?: PartialObjects["uuid"];
  };
  ["ch_helper_min_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  ["ch_helper_mutation_response"]: {
    __typename?: "ch_helper_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["ch_helper"][];
  };
  ["ch_helper_obj_rel_insert_input"]: {
    data: PartialObjects["ch_helper_insert_input"];
    on_conflict?: PartialObjects["ch_helper_on_conflict"];
  };
  ["ch_helper_on_conflict"]: {
    constraint: PartialObjects["ch_helper_constraint"];
    update_columns: PartialObjects["ch_helper_update_column"][];
    where?: PartialObjects["ch_helper_bool_exp"];
  };
  ["ch_helper_order_by"]: {
    ch_agenda_items_aggregate?: PartialObjects["ch_agenda_item_aggregate_order_by"];
    ch_festival?: PartialObjects["ch_festival_order_by"];
    ch_helper_time_slots_aggregate?: PartialObjects["ch_helper_time_slots_aggregate_order_by"];
    cr_user?: PartialObjects["cr_user_order_by"];
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  ["ch_helper_pk_columns_input"]: {
    id: number;
  };
  ["ch_helper_select_column"]: ch_helper_select_column;
  ["ch_helper_set_input"]: {
    festival_id?: number;
    id?: number;
    user_id?: PartialObjects["uuid"];
  };
  ["ch_helper_stddev_fields"]: {
    __typename?: "ch_helper_stddev_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_helper_stddev_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_helper_stddev_pop_fields"]: {
    __typename?: "ch_helper_stddev_pop_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_helper_stddev_pop_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_helper_stddev_samp_fields"]: {
    __typename?: "ch_helper_stddev_samp_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_helper_stddev_samp_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_helper_sum_fields"]: {
    __typename?: "ch_helper_sum_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_helper_sum_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_helper_time_slots"]: {
    __typename?: "ch_helper_time_slots";
    ch_helper?: PartialObjects["ch_helper"];
    ch_time_slot?: PartialObjects["ch_time_slot"];
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_aggregate"]: {
    __typename?: "ch_helper_time_slots_aggregate";
    aggregate?: PartialObjects["ch_helper_time_slots_aggregate_fields"];
    nodes?: PartialObjects["ch_helper_time_slots"][];
  };
  ["ch_helper_time_slots_aggregate_fields"]: {
    __typename?: "ch_helper_time_slots_aggregate_fields";
    avg?: PartialObjects["ch_helper_time_slots_avg_fields"];
    count?: number;
    max?: PartialObjects["ch_helper_time_slots_max_fields"];
    min?: PartialObjects["ch_helper_time_slots_min_fields"];
    stddev?: PartialObjects["ch_helper_time_slots_stddev_fields"];
    stddev_pop?: PartialObjects["ch_helper_time_slots_stddev_pop_fields"];
    stddev_samp?: PartialObjects["ch_helper_time_slots_stddev_samp_fields"];
    sum?: PartialObjects["ch_helper_time_slots_sum_fields"];
    var_pop?: PartialObjects["ch_helper_time_slots_var_pop_fields"];
    var_samp?: PartialObjects["ch_helper_time_slots_var_samp_fields"];
    variance?: PartialObjects["ch_helper_time_slots_variance_fields"];
  };
  ["ch_helper_time_slots_aggregate_order_by"]: {
    avg?: PartialObjects["ch_helper_time_slots_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["ch_helper_time_slots_max_order_by"];
    min?: PartialObjects["ch_helper_time_slots_min_order_by"];
    stddev?: PartialObjects["ch_helper_time_slots_stddev_order_by"];
    stddev_pop?: PartialObjects["ch_helper_time_slots_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["ch_helper_time_slots_stddev_samp_order_by"];
    sum?: PartialObjects["ch_helper_time_slots_sum_order_by"];
    var_pop?: PartialObjects["ch_helper_time_slots_var_pop_order_by"];
    var_samp?: PartialObjects["ch_helper_time_slots_var_samp_order_by"];
    variance?: PartialObjects["ch_helper_time_slots_variance_order_by"];
  };
  ["ch_helper_time_slots_arr_rel_insert_input"]: {
    data: PartialObjects["ch_helper_time_slots_insert_input"][];
    on_conflict?: PartialObjects["ch_helper_time_slots_on_conflict"];
  };
  ["ch_helper_time_slots_avg_fields"]: {
    __typename?: "ch_helper_time_slots_avg_fields";
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_avg_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_helper_time_slots_bool_exp"]: {
    _and?: (PartialObjects["ch_helper_time_slots_bool_exp"] | undefined)[];
    _not?: PartialObjects["ch_helper_time_slots_bool_exp"];
    _or?: (PartialObjects["ch_helper_time_slots_bool_exp"] | undefined)[];
    ch_helper?: PartialObjects["ch_helper_bool_exp"];
    ch_time_slot?: PartialObjects["ch_time_slot_bool_exp"];
    helper_id?: PartialObjects["Int_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    timeslot_id?: PartialObjects["Int_comparison_exp"];
  };
  ["ch_helper_time_slots_constraint"]: ch_helper_time_slots_constraint;
  ["ch_helper_time_slots_inc_input"]: {
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_insert_input"]: {
    ch_helper?: PartialObjects["ch_helper_obj_rel_insert_input"];
    ch_time_slot?: PartialObjects["ch_time_slot_obj_rel_insert_input"];
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_max_fields"]: {
    __typename?: "ch_helper_time_slots_max_fields";
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_max_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_helper_time_slots_min_fields"]: {
    __typename?: "ch_helper_time_slots_min_fields";
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_min_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_helper_time_slots_mutation_response"]: {
    __typename?: "ch_helper_time_slots_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["ch_helper_time_slots"][];
  };
  ["ch_helper_time_slots_obj_rel_insert_input"]: {
    data: PartialObjects["ch_helper_time_slots_insert_input"];
    on_conflict?: PartialObjects["ch_helper_time_slots_on_conflict"];
  };
  ["ch_helper_time_slots_on_conflict"]: {
    constraint: PartialObjects["ch_helper_time_slots_constraint"];
    update_columns: PartialObjects["ch_helper_time_slots_update_column"][];
    where?: PartialObjects["ch_helper_time_slots_bool_exp"];
  };
  ["ch_helper_time_slots_order_by"]: {
    ch_helper?: PartialObjects["ch_helper_order_by"];
    ch_time_slot?: PartialObjects["ch_time_slot_order_by"];
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_helper_time_slots_pk_columns_input"]: {
    id: number;
  };
  ["ch_helper_time_slots_select_column"]: ch_helper_time_slots_select_column;
  ["ch_helper_time_slots_set_input"]: {
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_stddev_fields"]: {
    __typename?: "ch_helper_time_slots_stddev_fields";
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_stddev_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_helper_time_slots_stddev_pop_fields"]: {
    __typename?: "ch_helper_time_slots_stddev_pop_fields";
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_stddev_pop_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_helper_time_slots_stddev_samp_fields"]: {
    __typename?: "ch_helper_time_slots_stddev_samp_fields";
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_stddev_samp_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_helper_time_slots_sum_fields"]: {
    __typename?: "ch_helper_time_slots_sum_fields";
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_sum_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_helper_time_slots_update_column"]: ch_helper_time_slots_update_column;
  ["ch_helper_time_slots_var_pop_fields"]: {
    __typename?: "ch_helper_time_slots_var_pop_fields";
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_var_pop_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_helper_time_slots_var_samp_fields"]: {
    __typename?: "ch_helper_time_slots_var_samp_fields";
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_var_samp_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_helper_time_slots_variance_fields"]: {
    __typename?: "ch_helper_time_slots_variance_fields";
    helper_id?: number;
    id?: number;
    timeslot_id?: number;
  };
  ["ch_helper_time_slots_variance_order_by"]: {
    helper_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_helper_update_column"]: ch_helper_update_column;
  ["ch_helper_var_pop_fields"]: {
    __typename?: "ch_helper_var_pop_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_helper_var_pop_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_helper_var_samp_fields"]: {
    __typename?: "ch_helper_var_samp_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_helper_var_samp_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_helper_variance_fields"]: {
    __typename?: "ch_helper_variance_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_helper_variance_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_proposal"]: {
    __typename?: "ch_proposal";
    ch_proposal_time_slots?: PartialObjects["ch_proposal_time_slots"][];
    ch_proposal_time_slots_aggregate?: PartialObjects["ch_proposal_time_slots_aggregate"];
    ch_wait_list?: PartialObjects["ch_wait_list"];
    city?: string;
    club?: string;
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    duration_minutes?: number;
    id?: number;
    meeting?: PartialObjects["nb_meeting"];
    meeting_id?: number;
    name?: string;
    needs?: string;
    other_contact?: PartialObjects["jsonb"];
    other_data?: PartialObjects["jsonb"];
    phone?: string;
    speaker?: PartialObjects["cr_user"];
    speaker_name?: string;
    speaker_user_id?: PartialObjects["uuid"];
    status?: string;
    topic?: string;
    waitlist_id?: number;
  };
  ["ch_proposal_aggregate"]: {
    __typename?: "ch_proposal_aggregate";
    aggregate?: PartialObjects["ch_proposal_aggregate_fields"];
    nodes?: PartialObjects["ch_proposal"][];
  };
  ["ch_proposal_aggregate_fields"]: {
    __typename?: "ch_proposal_aggregate_fields";
    avg?: PartialObjects["ch_proposal_avg_fields"];
    count?: number;
    max?: PartialObjects["ch_proposal_max_fields"];
    min?: PartialObjects["ch_proposal_min_fields"];
    stddev?: PartialObjects["ch_proposal_stddev_fields"];
    stddev_pop?: PartialObjects["ch_proposal_stddev_pop_fields"];
    stddev_samp?: PartialObjects["ch_proposal_stddev_samp_fields"];
    sum?: PartialObjects["ch_proposal_sum_fields"];
    var_pop?: PartialObjects["ch_proposal_var_pop_fields"];
    var_samp?: PartialObjects["ch_proposal_var_samp_fields"];
    variance?: PartialObjects["ch_proposal_variance_fields"];
  };
  ["ch_proposal_aggregate_order_by"]: {
    avg?: PartialObjects["ch_proposal_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["ch_proposal_max_order_by"];
    min?: PartialObjects["ch_proposal_min_order_by"];
    stddev?: PartialObjects["ch_proposal_stddev_order_by"];
    stddev_pop?: PartialObjects["ch_proposal_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["ch_proposal_stddev_samp_order_by"];
    sum?: PartialObjects["ch_proposal_sum_order_by"];
    var_pop?: PartialObjects["ch_proposal_var_pop_order_by"];
    var_samp?: PartialObjects["ch_proposal_var_samp_order_by"];
    variance?: PartialObjects["ch_proposal_variance_order_by"];
  };
  ["ch_proposal_append_input"]: {
    other_contact?: PartialObjects["jsonb"];
    other_data?: PartialObjects["jsonb"];
  };
  ["ch_proposal_arr_rel_insert_input"]: {
    data: PartialObjects["ch_proposal_insert_input"][];
    on_conflict?: PartialObjects["ch_proposal_on_conflict"];
  };
  ["ch_proposal_avg_fields"]: {
    __typename?: "ch_proposal_avg_fields";
    duration_minutes?: number;
    id?: number;
    meeting_id?: number;
    waitlist_id?: number;
  };
  ["ch_proposal_avg_order_by"]: {
    duration_minutes?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    waitlist_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_bool_exp"]: {
    _and?: (PartialObjects["ch_proposal_bool_exp"] | undefined)[];
    _not?: PartialObjects["ch_proposal_bool_exp"];
    _or?: (PartialObjects["ch_proposal_bool_exp"] | undefined)[];
    ch_proposal_time_slots?: PartialObjects["ch_proposal_time_slots_bool_exp"];
    ch_wait_list?: PartialObjects["ch_wait_list_bool_exp"];
    city?: PartialObjects["String_comparison_exp"];
    club?: PartialObjects["String_comparison_exp"];
    created_at?: PartialObjects["timestamptz_comparison_exp"];
    description?: PartialObjects["String_comparison_exp"];
    duration_minutes?: PartialObjects["Int_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    meeting?: PartialObjects["nb_meeting_bool_exp"];
    meeting_id?: PartialObjects["Int_comparison_exp"];
    name?: PartialObjects["String_comparison_exp"];
    needs?: PartialObjects["String_comparison_exp"];
    other_contact?: PartialObjects["jsonb_comparison_exp"];
    other_data?: PartialObjects["jsonb_comparison_exp"];
    phone?: PartialObjects["String_comparison_exp"];
    speaker?: PartialObjects["cr_user_bool_exp"];
    speaker_name?: PartialObjects["String_comparison_exp"];
    speaker_user_id?: PartialObjects["uuid_comparison_exp"];
    status?: PartialObjects["String_comparison_exp"];
    topic?: PartialObjects["String_comparison_exp"];
    waitlist_id?: PartialObjects["Int_comparison_exp"];
  };
  ["ch_proposal_constraint"]: ch_proposal_constraint;
  ["ch_proposal_delete_at_path_input"]: {
    other_contact?: (string | undefined)[];
    other_data?: (string | undefined)[];
  };
  ["ch_proposal_delete_elem_input"]: {
    other_contact?: number;
    other_data?: number;
  };
  ["ch_proposal_delete_key_input"]: {
    other_contact?: string;
    other_data?: string;
  };
  ["ch_proposal_inc_input"]: {
    duration_minutes?: number;
    id?: number;
    meeting_id?: number;
    waitlist_id?: number;
  };
  ["ch_proposal_insert_input"]: {
    ch_proposal_time_slots?: PartialObjects["ch_proposal_time_slots_arr_rel_insert_input"];
    ch_wait_list?: PartialObjects["ch_wait_list_obj_rel_insert_input"];
    city?: string;
    club?: string;
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    duration_minutes?: number;
    id?: number;
    meeting?: PartialObjects["nb_meeting_obj_rel_insert_input"];
    meeting_id?: number;
    name?: string;
    needs?: string;
    other_contact?: PartialObjects["jsonb"];
    other_data?: PartialObjects["jsonb"];
    phone?: string;
    speaker?: PartialObjects["cr_user_obj_rel_insert_input"];
    speaker_name?: string;
    speaker_user_id?: PartialObjects["uuid"];
    status?: string;
    topic?: string;
    waitlist_id?: number;
  };
  ["ch_proposal_max_fields"]: {
    __typename?: "ch_proposal_max_fields";
    city?: string;
    club?: string;
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    duration_minutes?: number;
    id?: number;
    meeting_id?: number;
    name?: string;
    needs?: string;
    phone?: string;
    speaker_name?: string;
    speaker_user_id?: PartialObjects["uuid"];
    status?: string;
    topic?: string;
    waitlist_id?: number;
  };
  ["ch_proposal_max_order_by"]: {
    city?: PartialObjects["order_by"];
    club?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    description?: PartialObjects["order_by"];
    duration_minutes?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    needs?: PartialObjects["order_by"];
    phone?: PartialObjects["order_by"];
    speaker_name?: PartialObjects["order_by"];
    speaker_user_id?: PartialObjects["order_by"];
    status?: PartialObjects["order_by"];
    topic?: PartialObjects["order_by"];
    waitlist_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_min_fields"]: {
    __typename?: "ch_proposal_min_fields";
    city?: string;
    club?: string;
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    duration_minutes?: number;
    id?: number;
    meeting_id?: number;
    name?: string;
    needs?: string;
    phone?: string;
    speaker_name?: string;
    speaker_user_id?: PartialObjects["uuid"];
    status?: string;
    topic?: string;
    waitlist_id?: number;
  };
  ["ch_proposal_min_order_by"]: {
    city?: PartialObjects["order_by"];
    club?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    description?: PartialObjects["order_by"];
    duration_minutes?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    needs?: PartialObjects["order_by"];
    phone?: PartialObjects["order_by"];
    speaker_name?: PartialObjects["order_by"];
    speaker_user_id?: PartialObjects["order_by"];
    status?: PartialObjects["order_by"];
    topic?: PartialObjects["order_by"];
    waitlist_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_mutation_response"]: {
    __typename?: "ch_proposal_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["ch_proposal"][];
  };
  ["ch_proposal_obj_rel_insert_input"]: {
    data: PartialObjects["ch_proposal_insert_input"];
    on_conflict?: PartialObjects["ch_proposal_on_conflict"];
  };
  ["ch_proposal_on_conflict"]: {
    constraint: PartialObjects["ch_proposal_constraint"];
    update_columns: PartialObjects["ch_proposal_update_column"][];
    where?: PartialObjects["ch_proposal_bool_exp"];
  };
  ["ch_proposal_order_by"]: {
    ch_proposal_time_slots_aggregate?: PartialObjects["ch_proposal_time_slots_aggregate_order_by"];
    ch_wait_list?: PartialObjects["ch_wait_list_order_by"];
    city?: PartialObjects["order_by"];
    club?: PartialObjects["order_by"];
    created_at?: PartialObjects["order_by"];
    description?: PartialObjects["order_by"];
    duration_minutes?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting?: PartialObjects["nb_meeting_order_by"];
    meeting_id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    needs?: PartialObjects["order_by"];
    other_contact?: PartialObjects["order_by"];
    other_data?: PartialObjects["order_by"];
    phone?: PartialObjects["order_by"];
    speaker?: PartialObjects["cr_user_order_by"];
    speaker_name?: PartialObjects["order_by"];
    speaker_user_id?: PartialObjects["order_by"];
    status?: PartialObjects["order_by"];
    topic?: PartialObjects["order_by"];
    waitlist_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_pk_columns_input"]: {
    id: number;
  };
  ["ch_proposal_prepend_input"]: {
    other_contact?: PartialObjects["jsonb"];
    other_data?: PartialObjects["jsonb"];
  };
  ["ch_proposal_select_column"]: ch_proposal_select_column;
  ["ch_proposal_set_input"]: {
    city?: string;
    club?: string;
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    duration_minutes?: number;
    id?: number;
    meeting_id?: number;
    name?: string;
    needs?: string;
    other_contact?: PartialObjects["jsonb"];
    other_data?: PartialObjects["jsonb"];
    phone?: string;
    speaker_name?: string;
    speaker_user_id?: PartialObjects["uuid"];
    status?: string;
    topic?: string;
    waitlist_id?: number;
  };
  ["ch_proposal_stddev_fields"]: {
    __typename?: "ch_proposal_stddev_fields";
    duration_minutes?: number;
    id?: number;
    meeting_id?: number;
    waitlist_id?: number;
  };
  ["ch_proposal_stddev_order_by"]: {
    duration_minutes?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    waitlist_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_stddev_pop_fields"]: {
    __typename?: "ch_proposal_stddev_pop_fields";
    duration_minutes?: number;
    id?: number;
    meeting_id?: number;
    waitlist_id?: number;
  };
  ["ch_proposal_stddev_pop_order_by"]: {
    duration_minutes?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    waitlist_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_stddev_samp_fields"]: {
    __typename?: "ch_proposal_stddev_samp_fields";
    duration_minutes?: number;
    id?: number;
    meeting_id?: number;
    waitlist_id?: number;
  };
  ["ch_proposal_stddev_samp_order_by"]: {
    duration_minutes?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    waitlist_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_sum_fields"]: {
    __typename?: "ch_proposal_sum_fields";
    duration_minutes?: number;
    id?: number;
    meeting_id?: number;
    waitlist_id?: number;
  };
  ["ch_proposal_sum_order_by"]: {
    duration_minutes?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    waitlist_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_time_slots"]: {
    __typename?: "ch_proposal_time_slots";
    ch_proposal?: PartialObjects["ch_proposal"];
    ch_time_slot?: PartialObjects["ch_time_slot"];
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_aggregate"]: {
    __typename?: "ch_proposal_time_slots_aggregate";
    aggregate?: PartialObjects["ch_proposal_time_slots_aggregate_fields"];
    nodes?: PartialObjects["ch_proposal_time_slots"][];
  };
  ["ch_proposal_time_slots_aggregate_fields"]: {
    __typename?: "ch_proposal_time_slots_aggregate_fields";
    avg?: PartialObjects["ch_proposal_time_slots_avg_fields"];
    count?: number;
    max?: PartialObjects["ch_proposal_time_slots_max_fields"];
    min?: PartialObjects["ch_proposal_time_slots_min_fields"];
    stddev?: PartialObjects["ch_proposal_time_slots_stddev_fields"];
    stddev_pop?: PartialObjects["ch_proposal_time_slots_stddev_pop_fields"];
    stddev_samp?: PartialObjects["ch_proposal_time_slots_stddev_samp_fields"];
    sum?: PartialObjects["ch_proposal_time_slots_sum_fields"];
    var_pop?: PartialObjects["ch_proposal_time_slots_var_pop_fields"];
    var_samp?: PartialObjects["ch_proposal_time_slots_var_samp_fields"];
    variance?: PartialObjects["ch_proposal_time_slots_variance_fields"];
  };
  ["ch_proposal_time_slots_aggregate_order_by"]: {
    avg?: PartialObjects["ch_proposal_time_slots_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["ch_proposal_time_slots_max_order_by"];
    min?: PartialObjects["ch_proposal_time_slots_min_order_by"];
    stddev?: PartialObjects["ch_proposal_time_slots_stddev_order_by"];
    stddev_pop?: PartialObjects["ch_proposal_time_slots_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["ch_proposal_time_slots_stddev_samp_order_by"];
    sum?: PartialObjects["ch_proposal_time_slots_sum_order_by"];
    var_pop?: PartialObjects["ch_proposal_time_slots_var_pop_order_by"];
    var_samp?: PartialObjects["ch_proposal_time_slots_var_samp_order_by"];
    variance?: PartialObjects["ch_proposal_time_slots_variance_order_by"];
  };
  ["ch_proposal_time_slots_arr_rel_insert_input"]: {
    data: PartialObjects["ch_proposal_time_slots_insert_input"][];
    on_conflict?: PartialObjects["ch_proposal_time_slots_on_conflict"];
  };
  ["ch_proposal_time_slots_avg_fields"]: {
    __typename?: "ch_proposal_time_slots_avg_fields";
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_avg_order_by"]: {
    id?: PartialObjects["order_by"];
    proposal_id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_time_slots_bool_exp"]: {
    _and?: (PartialObjects["ch_proposal_time_slots_bool_exp"] | undefined)[];
    _not?: PartialObjects["ch_proposal_time_slots_bool_exp"];
    _or?: (PartialObjects["ch_proposal_time_slots_bool_exp"] | undefined)[];
    ch_proposal?: PartialObjects["ch_proposal_bool_exp"];
    ch_time_slot?: PartialObjects["ch_time_slot_bool_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    proposal_id?: PartialObjects["Int_comparison_exp"];
    timeslot_id?: PartialObjects["Int_comparison_exp"];
  };
  ["ch_proposal_time_slots_constraint"]: ch_proposal_time_slots_constraint;
  ["ch_proposal_time_slots_inc_input"]: {
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_insert_input"]: {
    ch_proposal?: PartialObjects["ch_proposal_obj_rel_insert_input"];
    ch_time_slot?: PartialObjects["ch_time_slot_obj_rel_insert_input"];
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_max_fields"]: {
    __typename?: "ch_proposal_time_slots_max_fields";
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_max_order_by"]: {
    id?: PartialObjects["order_by"];
    proposal_id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_time_slots_min_fields"]: {
    __typename?: "ch_proposal_time_slots_min_fields";
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_min_order_by"]: {
    id?: PartialObjects["order_by"];
    proposal_id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_time_slots_mutation_response"]: {
    __typename?: "ch_proposal_time_slots_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["ch_proposal_time_slots"][];
  };
  ["ch_proposal_time_slots_obj_rel_insert_input"]: {
    data: PartialObjects["ch_proposal_time_slots_insert_input"];
    on_conflict?: PartialObjects["ch_proposal_time_slots_on_conflict"];
  };
  ["ch_proposal_time_slots_on_conflict"]: {
    constraint: PartialObjects["ch_proposal_time_slots_constraint"];
    update_columns: PartialObjects["ch_proposal_time_slots_update_column"][];
    where?: PartialObjects["ch_proposal_time_slots_bool_exp"];
  };
  ["ch_proposal_time_slots_order_by"]: {
    ch_proposal?: PartialObjects["ch_proposal_order_by"];
    ch_time_slot?: PartialObjects["ch_time_slot_order_by"];
    id?: PartialObjects["order_by"];
    proposal_id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_time_slots_pk_columns_input"]: {
    id: number;
  };
  ["ch_proposal_time_slots_select_column"]: ch_proposal_time_slots_select_column;
  ["ch_proposal_time_slots_set_input"]: {
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_stddev_fields"]: {
    __typename?: "ch_proposal_time_slots_stddev_fields";
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_stddev_order_by"]: {
    id?: PartialObjects["order_by"];
    proposal_id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_time_slots_stddev_pop_fields"]: {
    __typename?: "ch_proposal_time_slots_stddev_pop_fields";
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_stddev_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    proposal_id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_time_slots_stddev_samp_fields"]: {
    __typename?: "ch_proposal_time_slots_stddev_samp_fields";
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_stddev_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    proposal_id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_time_slots_sum_fields"]: {
    __typename?: "ch_proposal_time_slots_sum_fields";
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_sum_order_by"]: {
    id?: PartialObjects["order_by"];
    proposal_id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_time_slots_update_column"]: ch_proposal_time_slots_update_column;
  ["ch_proposal_time_slots_var_pop_fields"]: {
    __typename?: "ch_proposal_time_slots_var_pop_fields";
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_var_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    proposal_id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_time_slots_var_samp_fields"]: {
    __typename?: "ch_proposal_time_slots_var_samp_fields";
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_var_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    proposal_id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_time_slots_variance_fields"]: {
    __typename?: "ch_proposal_time_slots_variance_fields";
    id?: number;
    proposal_id?: number;
    timeslot_id?: number;
  };
  ["ch_proposal_time_slots_variance_order_by"]: {
    id?: PartialObjects["order_by"];
    proposal_id?: PartialObjects["order_by"];
    timeslot_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_update_column"]: ch_proposal_update_column;
  ["ch_proposal_var_pop_fields"]: {
    __typename?: "ch_proposal_var_pop_fields";
    duration_minutes?: number;
    id?: number;
    meeting_id?: number;
    waitlist_id?: number;
  };
  ["ch_proposal_var_pop_order_by"]: {
    duration_minutes?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    waitlist_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_var_samp_fields"]: {
    __typename?: "ch_proposal_var_samp_fields";
    duration_minutes?: number;
    id?: number;
    meeting_id?: number;
    waitlist_id?: number;
  };
  ["ch_proposal_var_samp_order_by"]: {
    duration_minutes?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    waitlist_id?: PartialObjects["order_by"];
  };
  ["ch_proposal_variance_fields"]: {
    __typename?: "ch_proposal_variance_fields";
    duration_minutes?: number;
    id?: number;
    meeting_id?: number;
    waitlist_id?: number;
  };
  ["ch_proposal_variance_order_by"]: {
    duration_minutes?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    waitlist_id?: PartialObjects["order_by"];
  };
  ["ch_room"]: {
    __typename?: "ch_room";
    ch_agenda_items?: PartialObjects["ch_agenda_item"][];
    ch_agenda_items_aggregate?: PartialObjects["ch_agenda_item_aggregate"];
    ch_festival?: PartialObjects["ch_festival"];
    festival_id?: number;
    id?: number;
    name?: string;
    slug?: string;
  };
  ["ch_room_aggregate"]: {
    __typename?: "ch_room_aggregate";
    aggregate?: PartialObjects["ch_room_aggregate_fields"];
    nodes?: PartialObjects["ch_room"][];
  };
  ["ch_room_aggregate_fields"]: {
    __typename?: "ch_room_aggregate_fields";
    avg?: PartialObjects["ch_room_avg_fields"];
    count?: number;
    max?: PartialObjects["ch_room_max_fields"];
    min?: PartialObjects["ch_room_min_fields"];
    stddev?: PartialObjects["ch_room_stddev_fields"];
    stddev_pop?: PartialObjects["ch_room_stddev_pop_fields"];
    stddev_samp?: PartialObjects["ch_room_stddev_samp_fields"];
    sum?: PartialObjects["ch_room_sum_fields"];
    var_pop?: PartialObjects["ch_room_var_pop_fields"];
    var_samp?: PartialObjects["ch_room_var_samp_fields"];
    variance?: PartialObjects["ch_room_variance_fields"];
  };
  ["ch_room_aggregate_order_by"]: {
    avg?: PartialObjects["ch_room_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["ch_room_max_order_by"];
    min?: PartialObjects["ch_room_min_order_by"];
    stddev?: PartialObjects["ch_room_stddev_order_by"];
    stddev_pop?: PartialObjects["ch_room_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["ch_room_stddev_samp_order_by"];
    sum?: PartialObjects["ch_room_sum_order_by"];
    var_pop?: PartialObjects["ch_room_var_pop_order_by"];
    var_samp?: PartialObjects["ch_room_var_samp_order_by"];
    variance?: PartialObjects["ch_room_variance_order_by"];
  };
  ["ch_room_arr_rel_insert_input"]: {
    data: PartialObjects["ch_room_insert_input"][];
    on_conflict?: PartialObjects["ch_room_on_conflict"];
  };
  ["ch_room_avg_fields"]: {
    __typename?: "ch_room_avg_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_room_avg_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_room_bool_exp"]: {
    _and?: (PartialObjects["ch_room_bool_exp"] | undefined)[];
    _not?: PartialObjects["ch_room_bool_exp"];
    _or?: (PartialObjects["ch_room_bool_exp"] | undefined)[];
    ch_agenda_items?: PartialObjects["ch_agenda_item_bool_exp"];
    ch_festival?: PartialObjects["ch_festival_bool_exp"];
    festival_id?: PartialObjects["Int_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    name?: PartialObjects["String_comparison_exp"];
    slug?: PartialObjects["String_comparison_exp"];
  };
  ["ch_room_constraint"]: ch_room_constraint;
  ["ch_room_inc_input"]: {
    festival_id?: number;
    id?: number;
  };
  ["ch_room_insert_input"]: {
    ch_agenda_items?: PartialObjects["ch_agenda_item_arr_rel_insert_input"];
    ch_festival?: PartialObjects["ch_festival_obj_rel_insert_input"];
    festival_id?: number;
    id?: number;
    name?: string;
    slug?: string;
  };
  ["ch_room_max_fields"]: {
    __typename?: "ch_room_max_fields";
    festival_id?: number;
    id?: number;
    name?: string;
    slug?: string;
  };
  ["ch_room_max_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    slug?: PartialObjects["order_by"];
  };
  ["ch_room_min_fields"]: {
    __typename?: "ch_room_min_fields";
    festival_id?: number;
    id?: number;
    name?: string;
    slug?: string;
  };
  ["ch_room_min_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    slug?: PartialObjects["order_by"];
  };
  ["ch_room_mutation_response"]: {
    __typename?: "ch_room_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["ch_room"][];
  };
  ["ch_room_obj_rel_insert_input"]: {
    data: PartialObjects["ch_room_insert_input"];
    on_conflict?: PartialObjects["ch_room_on_conflict"];
  };
  ["ch_room_on_conflict"]: {
    constraint: PartialObjects["ch_room_constraint"];
    update_columns: PartialObjects["ch_room_update_column"][];
    where?: PartialObjects["ch_room_bool_exp"];
  };
  ["ch_room_order_by"]: {
    ch_agenda_items_aggregate?: PartialObjects["ch_agenda_item_aggregate_order_by"];
    ch_festival?: PartialObjects["ch_festival_order_by"];
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    slug?: PartialObjects["order_by"];
  };
  ["ch_room_pk_columns_input"]: {
    id: number;
  };
  ["ch_room_select_column"]: ch_room_select_column;
  ["ch_room_set_input"]: {
    festival_id?: number;
    id?: number;
    name?: string;
    slug?: string;
  };
  ["ch_room_stddev_fields"]: {
    __typename?: "ch_room_stddev_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_room_stddev_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_room_stddev_pop_fields"]: {
    __typename?: "ch_room_stddev_pop_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_room_stddev_pop_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_room_stddev_samp_fields"]: {
    __typename?: "ch_room_stddev_samp_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_room_stddev_samp_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_room_sum_fields"]: {
    __typename?: "ch_room_sum_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_room_sum_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_room_update_column"]: ch_room_update_column;
  ["ch_room_var_pop_fields"]: {
    __typename?: "ch_room_var_pop_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_room_var_pop_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_room_var_samp_fields"]: {
    __typename?: "ch_room_var_samp_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_room_var_samp_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_room_variance_fields"]: {
    __typename?: "ch_room_variance_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_room_variance_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_time_slot"]: {
    __typename?: "ch_time_slot";
    ch_helper_time_slots?: PartialObjects["ch_helper_time_slots"][];
    ch_helper_time_slots_aggregate?: PartialObjects["ch_helper_time_slots_aggregate"];
    ch_proposal_time_slots?: PartialObjects["ch_proposal_time_slots"][];
    ch_proposal_time_slots_aggregate?: PartialObjects["ch_proposal_time_slots_aggregate"];
    end_time?: PartialObjects["timestamptz"];
    festival_id?: number;
    id?: number;
    start_time?: PartialObjects["timestamptz"];
  };
  ["ch_time_slot_aggregate"]: {
    __typename?: "ch_time_slot_aggregate";
    aggregate?: PartialObjects["ch_time_slot_aggregate_fields"];
    nodes?: PartialObjects["ch_time_slot"][];
  };
  ["ch_time_slot_aggregate_fields"]: {
    __typename?: "ch_time_slot_aggregate_fields";
    avg?: PartialObjects["ch_time_slot_avg_fields"];
    count?: number;
    max?: PartialObjects["ch_time_slot_max_fields"];
    min?: PartialObjects["ch_time_slot_min_fields"];
    stddev?: PartialObjects["ch_time_slot_stddev_fields"];
    stddev_pop?: PartialObjects["ch_time_slot_stddev_pop_fields"];
    stddev_samp?: PartialObjects["ch_time_slot_stddev_samp_fields"];
    sum?: PartialObjects["ch_time_slot_sum_fields"];
    var_pop?: PartialObjects["ch_time_slot_var_pop_fields"];
    var_samp?: PartialObjects["ch_time_slot_var_samp_fields"];
    variance?: PartialObjects["ch_time_slot_variance_fields"];
  };
  ["ch_time_slot_aggregate_order_by"]: {
    avg?: PartialObjects["ch_time_slot_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["ch_time_slot_max_order_by"];
    min?: PartialObjects["ch_time_slot_min_order_by"];
    stddev?: PartialObjects["ch_time_slot_stddev_order_by"];
    stddev_pop?: PartialObjects["ch_time_slot_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["ch_time_slot_stddev_samp_order_by"];
    sum?: PartialObjects["ch_time_slot_sum_order_by"];
    var_pop?: PartialObjects["ch_time_slot_var_pop_order_by"];
    var_samp?: PartialObjects["ch_time_slot_var_samp_order_by"];
    variance?: PartialObjects["ch_time_slot_variance_order_by"];
  };
  ["ch_time_slot_arr_rel_insert_input"]: {
    data: PartialObjects["ch_time_slot_insert_input"][];
    on_conflict?: PartialObjects["ch_time_slot_on_conflict"];
  };
  ["ch_time_slot_avg_fields"]: {
    __typename?: "ch_time_slot_avg_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_time_slot_avg_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_time_slot_bool_exp"]: {
    _and?: (PartialObjects["ch_time_slot_bool_exp"] | undefined)[];
    _not?: PartialObjects["ch_time_slot_bool_exp"];
    _or?: (PartialObjects["ch_time_slot_bool_exp"] | undefined)[];
    ch_helper_time_slots?: PartialObjects["ch_helper_time_slots_bool_exp"];
    ch_proposal_time_slots?: PartialObjects["ch_proposal_time_slots_bool_exp"];
    end_time?: PartialObjects["timestamptz_comparison_exp"];
    festival_id?: PartialObjects["Int_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    start_time?: PartialObjects["timestamptz_comparison_exp"];
  };
  ["ch_time_slot_constraint"]: ch_time_slot_constraint;
  ["ch_time_slot_inc_input"]: {
    festival_id?: number;
    id?: number;
  };
  ["ch_time_slot_insert_input"]: {
    ch_helper_time_slots?: PartialObjects["ch_helper_time_slots_arr_rel_insert_input"];
    ch_proposal_time_slots?: PartialObjects["ch_proposal_time_slots_arr_rel_insert_input"];
    end_time?: PartialObjects["timestamptz"];
    festival_id?: number;
    id?: number;
    start_time?: PartialObjects["timestamptz"];
  };
  ["ch_time_slot_max_fields"]: {
    __typename?: "ch_time_slot_max_fields";
    end_time?: PartialObjects["timestamptz"];
    festival_id?: number;
    id?: number;
    start_time?: PartialObjects["timestamptz"];
  };
  ["ch_time_slot_max_order_by"]: {
    end_time?: PartialObjects["order_by"];
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    start_time?: PartialObjects["order_by"];
  };
  ["ch_time_slot_min_fields"]: {
    __typename?: "ch_time_slot_min_fields";
    end_time?: PartialObjects["timestamptz"];
    festival_id?: number;
    id?: number;
    start_time?: PartialObjects["timestamptz"];
  };
  ["ch_time_slot_min_order_by"]: {
    end_time?: PartialObjects["order_by"];
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    start_time?: PartialObjects["order_by"];
  };
  ["ch_time_slot_mutation_response"]: {
    __typename?: "ch_time_slot_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["ch_time_slot"][];
  };
  ["ch_time_slot_obj_rel_insert_input"]: {
    data: PartialObjects["ch_time_slot_insert_input"];
    on_conflict?: PartialObjects["ch_time_slot_on_conflict"];
  };
  ["ch_time_slot_on_conflict"]: {
    constraint: PartialObjects["ch_time_slot_constraint"];
    update_columns: PartialObjects["ch_time_slot_update_column"][];
    where?: PartialObjects["ch_time_slot_bool_exp"];
  };
  ["ch_time_slot_order_by"]: {
    ch_helper_time_slots_aggregate?: PartialObjects["ch_helper_time_slots_aggregate_order_by"];
    ch_proposal_time_slots_aggregate?: PartialObjects["ch_proposal_time_slots_aggregate_order_by"];
    end_time?: PartialObjects["order_by"];
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    start_time?: PartialObjects["order_by"];
  };
  ["ch_time_slot_pk_columns_input"]: {
    id: number;
  };
  ["ch_time_slot_select_column"]: ch_time_slot_select_column;
  ["ch_time_slot_set_input"]: {
    end_time?: PartialObjects["timestamptz"];
    festival_id?: number;
    id?: number;
    start_time?: PartialObjects["timestamptz"];
  };
  ["ch_time_slot_stddev_fields"]: {
    __typename?: "ch_time_slot_stddev_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_time_slot_stddev_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_time_slot_stddev_pop_fields"]: {
    __typename?: "ch_time_slot_stddev_pop_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_time_slot_stddev_pop_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_time_slot_stddev_samp_fields"]: {
    __typename?: "ch_time_slot_stddev_samp_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_time_slot_stddev_samp_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_time_slot_sum_fields"]: {
    __typename?: "ch_time_slot_sum_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_time_slot_sum_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_time_slot_update_column"]: ch_time_slot_update_column;
  ["ch_time_slot_var_pop_fields"]: {
    __typename?: "ch_time_slot_var_pop_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_time_slot_var_pop_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_time_slot_var_samp_fields"]: {
    __typename?: "ch_time_slot_var_samp_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_time_slot_var_samp_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_time_slot_variance_fields"]: {
    __typename?: "ch_time_slot_variance_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_time_slot_variance_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_wait_list"]: {
    __typename?: "ch_wait_list";
    ch_festival?: PartialObjects["ch_festival"];
    ch_proposals?: PartialObjects["ch_proposal"][];
    ch_proposals_aggregate?: PartialObjects["ch_proposal_aggregate"];
    festival_id?: number;
    id?: number;
    name?: string;
    slug?: string;
  };
  ["ch_wait_list_aggregate"]: {
    __typename?: "ch_wait_list_aggregate";
    aggregate?: PartialObjects["ch_wait_list_aggregate_fields"];
    nodes?: PartialObjects["ch_wait_list"][];
  };
  ["ch_wait_list_aggregate_fields"]: {
    __typename?: "ch_wait_list_aggregate_fields";
    avg?: PartialObjects["ch_wait_list_avg_fields"];
    count?: number;
    max?: PartialObjects["ch_wait_list_max_fields"];
    min?: PartialObjects["ch_wait_list_min_fields"];
    stddev?: PartialObjects["ch_wait_list_stddev_fields"];
    stddev_pop?: PartialObjects["ch_wait_list_stddev_pop_fields"];
    stddev_samp?: PartialObjects["ch_wait_list_stddev_samp_fields"];
    sum?: PartialObjects["ch_wait_list_sum_fields"];
    var_pop?: PartialObjects["ch_wait_list_var_pop_fields"];
    var_samp?: PartialObjects["ch_wait_list_var_samp_fields"];
    variance?: PartialObjects["ch_wait_list_variance_fields"];
  };
  ["ch_wait_list_aggregate_order_by"]: {
    avg?: PartialObjects["ch_wait_list_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["ch_wait_list_max_order_by"];
    min?: PartialObjects["ch_wait_list_min_order_by"];
    stddev?: PartialObjects["ch_wait_list_stddev_order_by"];
    stddev_pop?: PartialObjects["ch_wait_list_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["ch_wait_list_stddev_samp_order_by"];
    sum?: PartialObjects["ch_wait_list_sum_order_by"];
    var_pop?: PartialObjects["ch_wait_list_var_pop_order_by"];
    var_samp?: PartialObjects["ch_wait_list_var_samp_order_by"];
    variance?: PartialObjects["ch_wait_list_variance_order_by"];
  };
  ["ch_wait_list_arr_rel_insert_input"]: {
    data: PartialObjects["ch_wait_list_insert_input"][];
    on_conflict?: PartialObjects["ch_wait_list_on_conflict"];
  };
  ["ch_wait_list_avg_fields"]: {
    __typename?: "ch_wait_list_avg_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_wait_list_avg_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_wait_list_bool_exp"]: {
    _and?: (PartialObjects["ch_wait_list_bool_exp"] | undefined)[];
    _not?: PartialObjects["ch_wait_list_bool_exp"];
    _or?: (PartialObjects["ch_wait_list_bool_exp"] | undefined)[];
    ch_festival?: PartialObjects["ch_festival_bool_exp"];
    ch_proposals?: PartialObjects["ch_proposal_bool_exp"];
    festival_id?: PartialObjects["Int_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    name?: PartialObjects["String_comparison_exp"];
    slug?: PartialObjects["String_comparison_exp"];
  };
  ["ch_wait_list_constraint"]: ch_wait_list_constraint;
  ["ch_wait_list_inc_input"]: {
    festival_id?: number;
    id?: number;
  };
  ["ch_wait_list_insert_input"]: {
    ch_festival?: PartialObjects["ch_festival_obj_rel_insert_input"];
    ch_proposals?: PartialObjects["ch_proposal_arr_rel_insert_input"];
    festival_id?: number;
    id?: number;
    name?: string;
    slug?: string;
  };
  ["ch_wait_list_max_fields"]: {
    __typename?: "ch_wait_list_max_fields";
    festival_id?: number;
    id?: number;
    name?: string;
    slug?: string;
  };
  ["ch_wait_list_max_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    slug?: PartialObjects["order_by"];
  };
  ["ch_wait_list_min_fields"]: {
    __typename?: "ch_wait_list_min_fields";
    festival_id?: number;
    id?: number;
    name?: string;
    slug?: string;
  };
  ["ch_wait_list_min_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    slug?: PartialObjects["order_by"];
  };
  ["ch_wait_list_mutation_response"]: {
    __typename?: "ch_wait_list_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["ch_wait_list"][];
  };
  ["ch_wait_list_obj_rel_insert_input"]: {
    data: PartialObjects["ch_wait_list_insert_input"];
    on_conflict?: PartialObjects["ch_wait_list_on_conflict"];
  };
  ["ch_wait_list_on_conflict"]: {
    constraint: PartialObjects["ch_wait_list_constraint"];
    update_columns: PartialObjects["ch_wait_list_update_column"][];
    where?: PartialObjects["ch_wait_list_bool_exp"];
  };
  ["ch_wait_list_order_by"]: {
    ch_festival?: PartialObjects["ch_festival_order_by"];
    ch_proposals_aggregate?: PartialObjects["ch_proposal_aggregate_order_by"];
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    slug?: PartialObjects["order_by"];
  };
  ["ch_wait_list_pk_columns_input"]: {
    id: number;
  };
  ["ch_wait_list_select_column"]: ch_wait_list_select_column;
  ["ch_wait_list_set_input"]: {
    festival_id?: number;
    id?: number;
    name?: string;
    slug?: string;
  };
  ["ch_wait_list_stddev_fields"]: {
    __typename?: "ch_wait_list_stddev_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_wait_list_stddev_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_wait_list_stddev_pop_fields"]: {
    __typename?: "ch_wait_list_stddev_pop_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_wait_list_stddev_pop_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_wait_list_stddev_samp_fields"]: {
    __typename?: "ch_wait_list_stddev_samp_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_wait_list_stddev_samp_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_wait_list_sum_fields"]: {
    __typename?: "ch_wait_list_sum_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_wait_list_sum_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_wait_list_update_column"]: ch_wait_list_update_column;
  ["ch_wait_list_var_pop_fields"]: {
    __typename?: "ch_wait_list_var_pop_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_wait_list_var_pop_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_wait_list_var_samp_fields"]: {
    __typename?: "ch_wait_list_var_samp_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_wait_list_var_samp_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["ch_wait_list_variance_fields"]: {
    __typename?: "ch_wait_list_variance_fields";
    festival_id?: number;
    id?: number;
  };
  ["ch_wait_list_variance_order_by"]: {
    festival_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["cr_user"]: {
    __typename?: "cr_user";
    auth0_id?: string;
    ch_helpers?: PartialObjects["ch_helper"][];
    ch_helpers_aggregate?: PartialObjects["ch_helper_aggregate"];
    date_joined?: PartialObjects["timestamptz"];
    email?: string;
    first_name?: string;
    guilds?: PartialObjects["nb_guild_member"][];
    guilds_aggregate?: PartialObjects["nb_guild_member_aggregate"];
    is_active?: boolean;
    is_staff?: boolean;
    is_superuser?: boolean;
    last_login?: PartialObjects["timestamptz"];
    last_name?: string;
    locale?: string;
    managed_spheres?: PartialObjects["nb_sphere_managers"][];
    managed_spheres_aggregate?: PartialObjects["nb_sphere_managers_aggregate"];
    meetings?: PartialObjects["nb_meeting_participants"][];
    meetings_aggregate?: PartialObjects["nb_meeting_participants_aggregate"];
    organized_meetings?: PartialObjects["nb_meeting"][];
    organized_meetings_aggregate?: PartialObjects["nb_meeting_aggregate"];
    password?: string;
    username?: string;
    uuid?: PartialObjects["uuid"];
  };
  ["cr_user_aggregate"]: {
    __typename?: "cr_user_aggregate";
    aggregate?: PartialObjects["cr_user_aggregate_fields"];
    nodes?: PartialObjects["cr_user"][];
  };
  ["cr_user_aggregate_fields"]: {
    __typename?: "cr_user_aggregate_fields";
    count?: number;
    max?: PartialObjects["cr_user_max_fields"];
    min?: PartialObjects["cr_user_min_fields"];
  };
  ["cr_user_aggregate_order_by"]: {
    count?: PartialObjects["order_by"];
    max?: PartialObjects["cr_user_max_order_by"];
    min?: PartialObjects["cr_user_min_order_by"];
  };
  ["cr_user_arr_rel_insert_input"]: {
    data: PartialObjects["cr_user_insert_input"][];
    on_conflict?: PartialObjects["cr_user_on_conflict"];
  };
  ["cr_user_bool_exp"]: {
    _and?: (PartialObjects["cr_user_bool_exp"] | undefined)[];
    _not?: PartialObjects["cr_user_bool_exp"];
    _or?: (PartialObjects["cr_user_bool_exp"] | undefined)[];
    auth0_id?: PartialObjects["String_comparison_exp"];
    ch_helpers?: PartialObjects["ch_helper_bool_exp"];
    date_joined?: PartialObjects["timestamptz_comparison_exp"];
    email?: PartialObjects["String_comparison_exp"];
    first_name?: PartialObjects["String_comparison_exp"];
    guilds?: PartialObjects["nb_guild_member_bool_exp"];
    is_active?: PartialObjects["Boolean_comparison_exp"];
    is_staff?: PartialObjects["Boolean_comparison_exp"];
    is_superuser?: PartialObjects["Boolean_comparison_exp"];
    last_login?: PartialObjects["timestamptz_comparison_exp"];
    last_name?: PartialObjects["String_comparison_exp"];
    locale?: PartialObjects["String_comparison_exp"];
    managed_spheres?: PartialObjects["nb_sphere_managers_bool_exp"];
    meetings?: PartialObjects["nb_meeting_participants_bool_exp"];
    organized_meetings?: PartialObjects["nb_meeting_bool_exp"];
    password?: PartialObjects["String_comparison_exp"];
    username?: PartialObjects["String_comparison_exp"];
    uuid?: PartialObjects["uuid_comparison_exp"];
  };
  ["cr_user_constraint"]: cr_user_constraint;
  ["cr_user_insert_input"]: {
    auth0_id?: string;
    ch_helpers?: PartialObjects["ch_helper_arr_rel_insert_input"];
    date_joined?: PartialObjects["timestamptz"];
    email?: string;
    first_name?: string;
    guilds?: PartialObjects["nb_guild_member_arr_rel_insert_input"];
    is_active?: boolean;
    is_staff?: boolean;
    is_superuser?: boolean;
    last_login?: PartialObjects["timestamptz"];
    last_name?: string;
    locale?: string;
    managed_spheres?: PartialObjects["nb_sphere_managers_arr_rel_insert_input"];
    meetings?: PartialObjects["nb_meeting_participants_arr_rel_insert_input"];
    organized_meetings?: PartialObjects["nb_meeting_arr_rel_insert_input"];
    password?: string;
    username?: string;
    uuid?: PartialObjects["uuid"];
  };
  ["cr_user_max_fields"]: {
    __typename?: "cr_user_max_fields";
    auth0_id?: string;
    date_joined?: PartialObjects["timestamptz"];
    email?: string;
    first_name?: string;
    last_login?: PartialObjects["timestamptz"];
    last_name?: string;
    locale?: string;
    password?: string;
    username?: string;
    uuid?: PartialObjects["uuid"];
  };
  ["cr_user_max_order_by"]: {
    auth0_id?: PartialObjects["order_by"];
    date_joined?: PartialObjects["order_by"];
    email?: PartialObjects["order_by"];
    first_name?: PartialObjects["order_by"];
    last_login?: PartialObjects["order_by"];
    last_name?: PartialObjects["order_by"];
    locale?: PartialObjects["order_by"];
    password?: PartialObjects["order_by"];
    username?: PartialObjects["order_by"];
    uuid?: PartialObjects["order_by"];
  };
  ["cr_user_min_fields"]: {
    __typename?: "cr_user_min_fields";
    auth0_id?: string;
    date_joined?: PartialObjects["timestamptz"];
    email?: string;
    first_name?: string;
    last_login?: PartialObjects["timestamptz"];
    last_name?: string;
    locale?: string;
    password?: string;
    username?: string;
    uuid?: PartialObjects["uuid"];
  };
  ["cr_user_min_order_by"]: {
    auth0_id?: PartialObjects["order_by"];
    date_joined?: PartialObjects["order_by"];
    email?: PartialObjects["order_by"];
    first_name?: PartialObjects["order_by"];
    last_login?: PartialObjects["order_by"];
    last_name?: PartialObjects["order_by"];
    locale?: PartialObjects["order_by"];
    password?: PartialObjects["order_by"];
    username?: PartialObjects["order_by"];
    uuid?: PartialObjects["order_by"];
  };
  ["cr_user_mutation_response"]: {
    __typename?: "cr_user_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["cr_user"][];
  };
  ["cr_user_obj_rel_insert_input"]: {
    data: PartialObjects["cr_user_insert_input"];
    on_conflict?: PartialObjects["cr_user_on_conflict"];
  };
  ["cr_user_on_conflict"]: {
    constraint: PartialObjects["cr_user_constraint"];
    update_columns: PartialObjects["cr_user_update_column"][];
    where?: PartialObjects["cr_user_bool_exp"];
  };
  ["cr_user_order_by"]: {
    auth0_id?: PartialObjects["order_by"];
    ch_helpers_aggregate?: PartialObjects["ch_helper_aggregate_order_by"];
    date_joined?: PartialObjects["order_by"];
    email?: PartialObjects["order_by"];
    first_name?: PartialObjects["order_by"];
    guilds_aggregate?: PartialObjects["nb_guild_member_aggregate_order_by"];
    is_active?: PartialObjects["order_by"];
    is_staff?: PartialObjects["order_by"];
    is_superuser?: PartialObjects["order_by"];
    last_login?: PartialObjects["order_by"];
    last_name?: PartialObjects["order_by"];
    locale?: PartialObjects["order_by"];
    managed_spheres_aggregate?: PartialObjects["nb_sphere_managers_aggregate_order_by"];
    meetings_aggregate?: PartialObjects["nb_meeting_participants_aggregate_order_by"];
    organized_meetings_aggregate?: PartialObjects["nb_meeting_aggregate_order_by"];
    password?: PartialObjects["order_by"];
    username?: PartialObjects["order_by"];
    uuid?: PartialObjects["order_by"];
  };
  ["cr_user_pk_columns_input"]: {
    uuid: PartialObjects["uuid"];
  };
  ["cr_user_select_column"]: cr_user_select_column;
  ["cr_user_set_input"]: {
    auth0_id?: string;
    date_joined?: PartialObjects["timestamptz"];
    email?: string;
    first_name?: string;
    is_active?: boolean;
    is_staff?: boolean;
    is_superuser?: boolean;
    last_login?: PartialObjects["timestamptz"];
    last_name?: string;
    locale?: string;
    password?: string;
    username?: string;
    uuid?: PartialObjects["uuid"];
  };
  ["cr_user_update_column"]: cr_user_update_column;
  ["django_site"]: {
    __typename?: "django_site";
    domain?: string;
    id?: number;
    name?: string;
    nb_sphere?: PartialObjects["nb_sphere"];
  };
  ["django_site_aggregate"]: {
    __typename?: "django_site_aggregate";
    aggregate?: PartialObjects["django_site_aggregate_fields"];
    nodes?: PartialObjects["django_site"][];
  };
  ["django_site_aggregate_fields"]: {
    __typename?: "django_site_aggregate_fields";
    avg?: PartialObjects["django_site_avg_fields"];
    count?: number;
    max?: PartialObjects["django_site_max_fields"];
    min?: PartialObjects["django_site_min_fields"];
    stddev?: PartialObjects["django_site_stddev_fields"];
    stddev_pop?: PartialObjects["django_site_stddev_pop_fields"];
    stddev_samp?: PartialObjects["django_site_stddev_samp_fields"];
    sum?: PartialObjects["django_site_sum_fields"];
    var_pop?: PartialObjects["django_site_var_pop_fields"];
    var_samp?: PartialObjects["django_site_var_samp_fields"];
    variance?: PartialObjects["django_site_variance_fields"];
  };
  ["django_site_aggregate_order_by"]: {
    avg?: PartialObjects["django_site_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["django_site_max_order_by"];
    min?: PartialObjects["django_site_min_order_by"];
    stddev?: PartialObjects["django_site_stddev_order_by"];
    stddev_pop?: PartialObjects["django_site_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["django_site_stddev_samp_order_by"];
    sum?: PartialObjects["django_site_sum_order_by"];
    var_pop?: PartialObjects["django_site_var_pop_order_by"];
    var_samp?: PartialObjects["django_site_var_samp_order_by"];
    variance?: PartialObjects["django_site_variance_order_by"];
  };
  ["django_site_arr_rel_insert_input"]: {
    data: PartialObjects["django_site_insert_input"][];
    on_conflict?: PartialObjects["django_site_on_conflict"];
  };
  ["django_site_avg_fields"]: {
    __typename?: "django_site_avg_fields";
    id?: number;
  };
  ["django_site_avg_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["django_site_bool_exp"]: {
    _and?: (PartialObjects["django_site_bool_exp"] | undefined)[];
    _not?: PartialObjects["django_site_bool_exp"];
    _or?: (PartialObjects["django_site_bool_exp"] | undefined)[];
    domain?: PartialObjects["String_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    name?: PartialObjects["String_comparison_exp"];
    nb_sphere?: PartialObjects["nb_sphere_bool_exp"];
  };
  ["django_site_constraint"]: django_site_constraint;
  ["django_site_inc_input"]: {
    id?: number;
  };
  ["django_site_insert_input"]: {
    domain?: string;
    id?: number;
    name?: string;
    nb_sphere?: PartialObjects["nb_sphere_obj_rel_insert_input"];
  };
  ["django_site_max_fields"]: {
    __typename?: "django_site_max_fields";
    domain?: string;
    id?: number;
    name?: string;
  };
  ["django_site_max_order_by"]: {
    domain?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
  };
  ["django_site_min_fields"]: {
    __typename?: "django_site_min_fields";
    domain?: string;
    id?: number;
    name?: string;
  };
  ["django_site_min_order_by"]: {
    domain?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
  };
  ["django_site_mutation_response"]: {
    __typename?: "django_site_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["django_site"][];
  };
  ["django_site_obj_rel_insert_input"]: {
    data: PartialObjects["django_site_insert_input"];
    on_conflict?: PartialObjects["django_site_on_conflict"];
  };
  ["django_site_on_conflict"]: {
    constraint: PartialObjects["django_site_constraint"];
    update_columns: PartialObjects["django_site_update_column"][];
    where?: PartialObjects["django_site_bool_exp"];
  };
  ["django_site_order_by"]: {
    domain?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    nb_sphere?: PartialObjects["nb_sphere_order_by"];
  };
  ["django_site_pk_columns_input"]: {
    id: number;
  };
  ["django_site_select_column"]: django_site_select_column;
  ["django_site_set_input"]: {
    domain?: string;
    id?: number;
    name?: string;
  };
  ["django_site_stddev_fields"]: {
    __typename?: "django_site_stddev_fields";
    id?: number;
  };
  ["django_site_stddev_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["django_site_stddev_pop_fields"]: {
    __typename?: "django_site_stddev_pop_fields";
    id?: number;
  };
  ["django_site_stddev_pop_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["django_site_stddev_samp_fields"]: {
    __typename?: "django_site_stddev_samp_fields";
    id?: number;
  };
  ["django_site_stddev_samp_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["django_site_sum_fields"]: {
    __typename?: "django_site_sum_fields";
    id?: number;
  };
  ["django_site_sum_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["django_site_update_column"]: django_site_update_column;
  ["django_site_var_pop_fields"]: {
    __typename?: "django_site_var_pop_fields";
    id?: number;
  };
  ["django_site_var_pop_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["django_site_var_samp_fields"]: {
    __typename?: "django_site_var_samp_fields";
    id?: number;
  };
  ["django_site_var_samp_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["django_site_variance_fields"]: {
    __typename?: "django_site_variance_fields";
    id?: number;
  };
  ["django_site_variance_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["Int_comparison_exp"]: {
    _eq?: number;
    _gt?: number;
    _gte?: number;
    _in?: number[];
    _is_null?: boolean;
    _lt?: number;
    _lte?: number;
    _neq?: number;
    _nin?: number[];
  };
  ["jsonb"]: any;
  ["jsonb_comparison_exp"]: {
    _contained_in?: PartialObjects["jsonb"];
    _contains?: PartialObjects["jsonb"];
    _eq?: PartialObjects["jsonb"];
    _gt?: PartialObjects["jsonb"];
    _gte?: PartialObjects["jsonb"];
    _has_key?: string;
    _has_keys_all?: string[];
    _has_keys_any?: string[];
    _in?: PartialObjects["jsonb"][];
    _is_null?: boolean;
    _lt?: PartialObjects["jsonb"];
    _lte?: PartialObjects["jsonb"];
    _neq?: PartialObjects["jsonb"];
    _nin?: PartialObjects["jsonb"][];
  };
  ["mutation_root"]: {
    __typename?: "mutation_root";
    delete_ch_agenda_item?: PartialObjects["ch_agenda_item_mutation_response"];
    delete_ch_agenda_item_by_pk?: PartialObjects["ch_agenda_item"];
    delete_ch_festival?: PartialObjects["ch_festival_mutation_response"];
    delete_ch_festival_by_pk?: PartialObjects["ch_festival"];
    delete_ch_helper?: PartialObjects["ch_helper_mutation_response"];
    delete_ch_helper_by_pk?: PartialObjects["ch_helper"];
    delete_ch_helper_time_slots?: PartialObjects["ch_helper_time_slots_mutation_response"];
    delete_ch_helper_time_slots_by_pk?: PartialObjects["ch_helper_time_slots"];
    delete_ch_proposal?: PartialObjects["ch_proposal_mutation_response"];
    delete_ch_proposal_by_pk?: PartialObjects["ch_proposal"];
    delete_ch_proposal_time_slots?: PartialObjects["ch_proposal_time_slots_mutation_response"];
    delete_ch_proposal_time_slots_by_pk?: PartialObjects["ch_proposal_time_slots"];
    delete_ch_room?: PartialObjects["ch_room_mutation_response"];
    delete_ch_room_by_pk?: PartialObjects["ch_room"];
    delete_ch_time_slot?: PartialObjects["ch_time_slot_mutation_response"];
    delete_ch_time_slot_by_pk?: PartialObjects["ch_time_slot"];
    delete_ch_wait_list?: PartialObjects["ch_wait_list_mutation_response"];
    delete_ch_wait_list_by_pk?: PartialObjects["ch_wait_list"];
    delete_cr_user?: PartialObjects["cr_user_mutation_response"];
    delete_cr_user_by_pk?: PartialObjects["cr_user"];
    delete_django_site?: PartialObjects["django_site_mutation_response"];
    delete_django_site_by_pk?: PartialObjects["django_site"];
    delete_nb_guild?: PartialObjects["nb_guild_mutation_response"];
    delete_nb_guild_by_pk?: PartialObjects["nb_guild"];
    delete_nb_guild_member?: PartialObjects["nb_guild_member_mutation_response"];
    delete_nb_guild_member_by_pk?: PartialObjects["nb_guild_member"];
    delete_nb_meeting?: PartialObjects["nb_meeting_mutation_response"];
    delete_nb_meeting_by_pk?: PartialObjects["nb_meeting"];
    delete_nb_meeting_participants?: PartialObjects["nb_meeting_participants_mutation_response"];
    delete_nb_meeting_participants_by_pk?: PartialObjects["nb_meeting_participants"];
    delete_nb_sphere?: PartialObjects["nb_sphere_mutation_response"];
    delete_nb_sphere_by_pk?: PartialObjects["nb_sphere"];
    delete_nb_sphere_managers?: PartialObjects["nb_sphere_managers_mutation_response"];
    delete_nb_sphere_managers_by_pk?: PartialObjects["nb_sphere_managers"];
    insert_ch_agenda_item?: PartialObjects["ch_agenda_item_mutation_response"];
    insert_ch_agenda_item_one?: PartialObjects["ch_agenda_item"];
    insert_ch_festival?: PartialObjects["ch_festival_mutation_response"];
    insert_ch_festival_one?: PartialObjects["ch_festival"];
    insert_ch_helper?: PartialObjects["ch_helper_mutation_response"];
    insert_ch_helper_one?: PartialObjects["ch_helper"];
    insert_ch_helper_time_slots?: PartialObjects["ch_helper_time_slots_mutation_response"];
    insert_ch_helper_time_slots_one?: PartialObjects["ch_helper_time_slots"];
    insert_ch_proposal?: PartialObjects["ch_proposal_mutation_response"];
    insert_ch_proposal_one?: PartialObjects["ch_proposal"];
    insert_ch_proposal_time_slots?: PartialObjects["ch_proposal_time_slots_mutation_response"];
    insert_ch_proposal_time_slots_one?: PartialObjects["ch_proposal_time_slots"];
    insert_ch_room?: PartialObjects["ch_room_mutation_response"];
    insert_ch_room_one?: PartialObjects["ch_room"];
    insert_ch_time_slot?: PartialObjects["ch_time_slot_mutation_response"];
    insert_ch_time_slot_one?: PartialObjects["ch_time_slot"];
    insert_ch_wait_list?: PartialObjects["ch_wait_list_mutation_response"];
    insert_ch_wait_list_one?: PartialObjects["ch_wait_list"];
    insert_cr_user?: PartialObjects["cr_user_mutation_response"];
    insert_cr_user_one?: PartialObjects["cr_user"];
    insert_django_site?: PartialObjects["django_site_mutation_response"];
    insert_django_site_one?: PartialObjects["django_site"];
    insert_nb_guild?: PartialObjects["nb_guild_mutation_response"];
    insert_nb_guild_member?: PartialObjects["nb_guild_member_mutation_response"];
    insert_nb_guild_member_one?: PartialObjects["nb_guild_member"];
    insert_nb_guild_one?: PartialObjects["nb_guild"];
    insert_nb_meeting?: PartialObjects["nb_meeting_mutation_response"];
    insert_nb_meeting_one?: PartialObjects["nb_meeting"];
    insert_nb_meeting_participants?: PartialObjects["nb_meeting_participants_mutation_response"];
    insert_nb_meeting_participants_one?: PartialObjects["nb_meeting_participants"];
    insert_nb_sphere?: PartialObjects["nb_sphere_mutation_response"];
    insert_nb_sphere_managers?: PartialObjects["nb_sphere_managers_mutation_response"];
    insert_nb_sphere_managers_one?: PartialObjects["nb_sphere_managers"];
    insert_nb_sphere_one?: PartialObjects["nb_sphere"];
    update_ch_agenda_item?: PartialObjects["ch_agenda_item_mutation_response"];
    update_ch_agenda_item_by_pk?: PartialObjects["ch_agenda_item"];
    update_ch_festival?: PartialObjects["ch_festival_mutation_response"];
    update_ch_festival_by_pk?: PartialObjects["ch_festival"];
    update_ch_helper?: PartialObjects["ch_helper_mutation_response"];
    update_ch_helper_by_pk?: PartialObjects["ch_helper"];
    update_ch_helper_time_slots?: PartialObjects["ch_helper_time_slots_mutation_response"];
    update_ch_helper_time_slots_by_pk?: PartialObjects["ch_helper_time_slots"];
    update_ch_proposal?: PartialObjects["ch_proposal_mutation_response"];
    update_ch_proposal_by_pk?: PartialObjects["ch_proposal"];
    update_ch_proposal_time_slots?: PartialObjects["ch_proposal_time_slots_mutation_response"];
    update_ch_proposal_time_slots_by_pk?: PartialObjects["ch_proposal_time_slots"];
    update_ch_room?: PartialObjects["ch_room_mutation_response"];
    update_ch_room_by_pk?: PartialObjects["ch_room"];
    update_ch_time_slot?: PartialObjects["ch_time_slot_mutation_response"];
    update_ch_time_slot_by_pk?: PartialObjects["ch_time_slot"];
    update_ch_wait_list?: PartialObjects["ch_wait_list_mutation_response"];
    update_ch_wait_list_by_pk?: PartialObjects["ch_wait_list"];
    update_cr_user?: PartialObjects["cr_user_mutation_response"];
    update_cr_user_by_pk?: PartialObjects["cr_user"];
    update_django_site?: PartialObjects["django_site_mutation_response"];
    update_django_site_by_pk?: PartialObjects["django_site"];
    update_nb_guild?: PartialObjects["nb_guild_mutation_response"];
    update_nb_guild_by_pk?: PartialObjects["nb_guild"];
    update_nb_guild_member?: PartialObjects["nb_guild_member_mutation_response"];
    update_nb_guild_member_by_pk?: PartialObjects["nb_guild_member"];
    update_nb_meeting?: PartialObjects["nb_meeting_mutation_response"];
    update_nb_meeting_by_pk?: PartialObjects["nb_meeting"];
    update_nb_meeting_participants?: PartialObjects["nb_meeting_participants_mutation_response"];
    update_nb_meeting_participants_by_pk?: PartialObjects["nb_meeting_participants"];
    update_nb_sphere?: PartialObjects["nb_sphere_mutation_response"];
    update_nb_sphere_by_pk?: PartialObjects["nb_sphere"];
    update_nb_sphere_managers?: PartialObjects["nb_sphere_managers_mutation_response"];
    update_nb_sphere_managers_by_pk?: PartialObjects["nb_sphere_managers"];
  };
  ["nb_guild"]: {
    __typename?: "nb_guild";
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    id?: number;
    is_public?: boolean;
    name?: string;
    nb_guild_members?: PartialObjects["nb_guild_member"][];
    nb_guild_members_aggregate?: PartialObjects["nb_guild_member_aggregate"];
    nb_meetings?: PartialObjects["nb_meeting"][];
    nb_meetings_aggregate?: PartialObjects["nb_meeting_aggregate"];
    slug?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  ["nb_guild_aggregate"]: {
    __typename?: "nb_guild_aggregate";
    aggregate?: PartialObjects["nb_guild_aggregate_fields"];
    nodes?: PartialObjects["nb_guild"][];
  };
  ["nb_guild_aggregate_fields"]: {
    __typename?: "nb_guild_aggregate_fields";
    avg?: PartialObjects["nb_guild_avg_fields"];
    count?: number;
    max?: PartialObjects["nb_guild_max_fields"];
    min?: PartialObjects["nb_guild_min_fields"];
    stddev?: PartialObjects["nb_guild_stddev_fields"];
    stddev_pop?: PartialObjects["nb_guild_stddev_pop_fields"];
    stddev_samp?: PartialObjects["nb_guild_stddev_samp_fields"];
    sum?: PartialObjects["nb_guild_sum_fields"];
    var_pop?: PartialObjects["nb_guild_var_pop_fields"];
    var_samp?: PartialObjects["nb_guild_var_samp_fields"];
    variance?: PartialObjects["nb_guild_variance_fields"];
  };
  ["nb_guild_aggregate_order_by"]: {
    avg?: PartialObjects["nb_guild_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["nb_guild_max_order_by"];
    min?: PartialObjects["nb_guild_min_order_by"];
    stddev?: PartialObjects["nb_guild_stddev_order_by"];
    stddev_pop?: PartialObjects["nb_guild_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["nb_guild_stddev_samp_order_by"];
    sum?: PartialObjects["nb_guild_sum_order_by"];
    var_pop?: PartialObjects["nb_guild_var_pop_order_by"];
    var_samp?: PartialObjects["nb_guild_var_samp_order_by"];
    variance?: PartialObjects["nb_guild_variance_order_by"];
  };
  ["nb_guild_arr_rel_insert_input"]: {
    data: PartialObjects["nb_guild_insert_input"][];
    on_conflict?: PartialObjects["nb_guild_on_conflict"];
  };
  ["nb_guild_avg_fields"]: {
    __typename?: "nb_guild_avg_fields";
    id?: number;
  };
  ["nb_guild_avg_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_bool_exp"]: {
    _and?: (PartialObjects["nb_guild_bool_exp"] | undefined)[];
    _not?: PartialObjects["nb_guild_bool_exp"];
    _or?: (PartialObjects["nb_guild_bool_exp"] | undefined)[];
    created_at?: PartialObjects["timestamptz_comparison_exp"];
    description?: PartialObjects["String_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    is_public?: PartialObjects["Boolean_comparison_exp"];
    name?: PartialObjects["String_comparison_exp"];
    nb_guild_members?: PartialObjects["nb_guild_member_bool_exp"];
    nb_meetings?: PartialObjects["nb_meeting_bool_exp"];
    slug?: PartialObjects["String_comparison_exp"];
    updated_at?: PartialObjects["timestamptz_comparison_exp"];
  };
  ["nb_guild_constraint"]: nb_guild_constraint;
  ["nb_guild_inc_input"]: {
    id?: number;
  };
  ["nb_guild_insert_input"]: {
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    id?: number;
    is_public?: boolean;
    name?: string;
    nb_guild_members?: PartialObjects["nb_guild_member_arr_rel_insert_input"];
    nb_meetings?: PartialObjects["nb_meeting_arr_rel_insert_input"];
    slug?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  ["nb_guild_max_fields"]: {
    __typename?: "nb_guild_max_fields";
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    id?: number;
    name?: string;
    slug?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  ["nb_guild_max_order_by"]: {
    created_at?: PartialObjects["order_by"];
    description?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    slug?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  ["nb_guild_member"]: {
    __typename?: "nb_guild_member";
    cr_user?: PartialObjects["cr_user"];
    guild_id?: number;
    id?: number;
    membership_type?: string;
    nb_guild?: PartialObjects["nb_guild"];
    user_id?: PartialObjects["uuid"];
  };
  ["nb_guild_member_aggregate"]: {
    __typename?: "nb_guild_member_aggregate";
    aggregate?: PartialObjects["nb_guild_member_aggregate_fields"];
    nodes?: PartialObjects["nb_guild_member"][];
  };
  ["nb_guild_member_aggregate_fields"]: {
    __typename?: "nb_guild_member_aggregate_fields";
    avg?: PartialObjects["nb_guild_member_avg_fields"];
    count?: number;
    max?: PartialObjects["nb_guild_member_max_fields"];
    min?: PartialObjects["nb_guild_member_min_fields"];
    stddev?: PartialObjects["nb_guild_member_stddev_fields"];
    stddev_pop?: PartialObjects["nb_guild_member_stddev_pop_fields"];
    stddev_samp?: PartialObjects["nb_guild_member_stddev_samp_fields"];
    sum?: PartialObjects["nb_guild_member_sum_fields"];
    var_pop?: PartialObjects["nb_guild_member_var_pop_fields"];
    var_samp?: PartialObjects["nb_guild_member_var_samp_fields"];
    variance?: PartialObjects["nb_guild_member_variance_fields"];
  };
  ["nb_guild_member_aggregate_order_by"]: {
    avg?: PartialObjects["nb_guild_member_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["nb_guild_member_max_order_by"];
    min?: PartialObjects["nb_guild_member_min_order_by"];
    stddev?: PartialObjects["nb_guild_member_stddev_order_by"];
    stddev_pop?: PartialObjects["nb_guild_member_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["nb_guild_member_stddev_samp_order_by"];
    sum?: PartialObjects["nb_guild_member_sum_order_by"];
    var_pop?: PartialObjects["nb_guild_member_var_pop_order_by"];
    var_samp?: PartialObjects["nb_guild_member_var_samp_order_by"];
    variance?: PartialObjects["nb_guild_member_variance_order_by"];
  };
  ["nb_guild_member_arr_rel_insert_input"]: {
    data: PartialObjects["nb_guild_member_insert_input"][];
    on_conflict?: PartialObjects["nb_guild_member_on_conflict"];
  };
  ["nb_guild_member_avg_fields"]: {
    __typename?: "nb_guild_member_avg_fields";
    guild_id?: number;
    id?: number;
  };
  ["nb_guild_member_avg_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_member_bool_exp"]: {
    _and?: (PartialObjects["nb_guild_member_bool_exp"] | undefined)[];
    _not?: PartialObjects["nb_guild_member_bool_exp"];
    _or?: (PartialObjects["nb_guild_member_bool_exp"] | undefined)[];
    cr_user?: PartialObjects["cr_user_bool_exp"];
    guild_id?: PartialObjects["Int_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    membership_type?: PartialObjects["String_comparison_exp"];
    nb_guild?: PartialObjects["nb_guild_bool_exp"];
    user_id?: PartialObjects["uuid_comparison_exp"];
  };
  ["nb_guild_member_constraint"]: nb_guild_member_constraint;
  ["nb_guild_member_inc_input"]: {
    guild_id?: number;
    id?: number;
  };
  ["nb_guild_member_insert_input"]: {
    cr_user?: PartialObjects["cr_user_obj_rel_insert_input"];
    guild_id?: number;
    id?: number;
    membership_type?: string;
    nb_guild?: PartialObjects["nb_guild_obj_rel_insert_input"];
    user_id?: PartialObjects["uuid"];
  };
  ["nb_guild_member_max_fields"]: {
    __typename?: "nb_guild_member_max_fields";
    guild_id?: number;
    id?: number;
    membership_type?: string;
    user_id?: PartialObjects["uuid"];
  };
  ["nb_guild_member_max_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    membership_type?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  ["nb_guild_member_min_fields"]: {
    __typename?: "nb_guild_member_min_fields";
    guild_id?: number;
    id?: number;
    membership_type?: string;
    user_id?: PartialObjects["uuid"];
  };
  ["nb_guild_member_min_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    membership_type?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  ["nb_guild_member_mutation_response"]: {
    __typename?: "nb_guild_member_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["nb_guild_member"][];
  };
  ["nb_guild_member_obj_rel_insert_input"]: {
    data: PartialObjects["nb_guild_member_insert_input"];
    on_conflict?: PartialObjects["nb_guild_member_on_conflict"];
  };
  ["nb_guild_member_on_conflict"]: {
    constraint: PartialObjects["nb_guild_member_constraint"];
    update_columns: PartialObjects["nb_guild_member_update_column"][];
    where?: PartialObjects["nb_guild_member_bool_exp"];
  };
  ["nb_guild_member_order_by"]: {
    cr_user?: PartialObjects["cr_user_order_by"];
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    membership_type?: PartialObjects["order_by"];
    nb_guild?: PartialObjects["nb_guild_order_by"];
    user_id?: PartialObjects["order_by"];
  };
  ["nb_guild_member_pk_columns_input"]: {
    id: number;
  };
  ["nb_guild_member_select_column"]: nb_guild_member_select_column;
  ["nb_guild_member_set_input"]: {
    guild_id?: number;
    id?: number;
    membership_type?: string;
    user_id?: PartialObjects["uuid"];
  };
  ["nb_guild_member_stddev_fields"]: {
    __typename?: "nb_guild_member_stddev_fields";
    guild_id?: number;
    id?: number;
  };
  ["nb_guild_member_stddev_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_member_stddev_pop_fields"]: {
    __typename?: "nb_guild_member_stddev_pop_fields";
    guild_id?: number;
    id?: number;
  };
  ["nb_guild_member_stddev_pop_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_member_stddev_samp_fields"]: {
    __typename?: "nb_guild_member_stddev_samp_fields";
    guild_id?: number;
    id?: number;
  };
  ["nb_guild_member_stddev_samp_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_member_sum_fields"]: {
    __typename?: "nb_guild_member_sum_fields";
    guild_id?: number;
    id?: number;
  };
  ["nb_guild_member_sum_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_member_update_column"]: nb_guild_member_update_column;
  ["nb_guild_member_var_pop_fields"]: {
    __typename?: "nb_guild_member_var_pop_fields";
    guild_id?: number;
    id?: number;
  };
  ["nb_guild_member_var_pop_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_member_var_samp_fields"]: {
    __typename?: "nb_guild_member_var_samp_fields";
    guild_id?: number;
    id?: number;
  };
  ["nb_guild_member_var_samp_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_member_variance_fields"]: {
    __typename?: "nb_guild_member_variance_fields";
    guild_id?: number;
    id?: number;
  };
  ["nb_guild_member_variance_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_min_fields"]: {
    __typename?: "nb_guild_min_fields";
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    id?: number;
    name?: string;
    slug?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  ["nb_guild_min_order_by"]: {
    created_at?: PartialObjects["order_by"];
    description?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    slug?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  ["nb_guild_mutation_response"]: {
    __typename?: "nb_guild_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["nb_guild"][];
  };
  ["nb_guild_obj_rel_insert_input"]: {
    data: PartialObjects["nb_guild_insert_input"];
    on_conflict?: PartialObjects["nb_guild_on_conflict"];
  };
  ["nb_guild_on_conflict"]: {
    constraint: PartialObjects["nb_guild_constraint"];
    update_columns: PartialObjects["nb_guild_update_column"][];
    where?: PartialObjects["nb_guild_bool_exp"];
  };
  ["nb_guild_order_by"]: {
    created_at?: PartialObjects["order_by"];
    description?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    is_public?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    nb_guild_members_aggregate?: PartialObjects["nb_guild_member_aggregate_order_by"];
    nb_meetings_aggregate?: PartialObjects["nb_meeting_aggregate_order_by"];
    slug?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  ["nb_guild_pk_columns_input"]: {
    id: number;
  };
  ["nb_guild_select_column"]: nb_guild_select_column;
  ["nb_guild_set_input"]: {
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    id?: number;
    is_public?: boolean;
    name?: string;
    slug?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  ["nb_guild_stddev_fields"]: {
    __typename?: "nb_guild_stddev_fields";
    id?: number;
  };
  ["nb_guild_stddev_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_stddev_pop_fields"]: {
    __typename?: "nb_guild_stddev_pop_fields";
    id?: number;
  };
  ["nb_guild_stddev_pop_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_stddev_samp_fields"]: {
    __typename?: "nb_guild_stddev_samp_fields";
    id?: number;
  };
  ["nb_guild_stddev_samp_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_sum_fields"]: {
    __typename?: "nb_guild_sum_fields";
    id?: number;
  };
  ["nb_guild_sum_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_update_column"]: nb_guild_update_column;
  ["nb_guild_var_pop_fields"]: {
    __typename?: "nb_guild_var_pop_fields";
    id?: number;
  };
  ["nb_guild_var_pop_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_var_samp_fields"]: {
    __typename?: "nb_guild_var_samp_fields";
    id?: number;
  };
  ["nb_guild_var_samp_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["nb_guild_variance_fields"]: {
    __typename?: "nb_guild_variance_fields";
    id?: number;
  };
  ["nb_guild_variance_order_by"]: {
    id?: PartialObjects["order_by"];
  };
  ["nb_meeting"]: {
    __typename?: "nb_meeting";
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    end_time?: PartialObjects["timestamptz"];
    guild?: PartialObjects["nb_guild"];
    guild_id?: number;
    id?: number;
    image?: string;
    location?: string;
    meeting_url?: string;
    name?: string;
    organizer?: PartialObjects["cr_user"];
    organizer_id?: PartialObjects["uuid"];
    participants?: PartialObjects["nb_meeting_participants"][];
    participants_aggregate?: PartialObjects["nb_meeting_participants_aggregate"];
    proposal?: PartialObjects["ch_proposal"];
    publication_time?: PartialObjects["timestamptz"];
    slug?: string;
    sphere?: PartialObjects["nb_sphere"];
    sphere_id?: number;
    start_time?: PartialObjects["timestamptz"];
    status?: string;
    time_table?: PartialObjects["ch_agenda_item"];
    updated_at?: PartialObjects["timestamptz"];
  };
  ["nb_meeting_aggregate"]: {
    __typename?: "nb_meeting_aggregate";
    aggregate?: PartialObjects["nb_meeting_aggregate_fields"];
    nodes?: PartialObjects["nb_meeting"][];
  };
  ["nb_meeting_aggregate_fields"]: {
    __typename?: "nb_meeting_aggregate_fields";
    avg?: PartialObjects["nb_meeting_avg_fields"];
    count?: number;
    max?: PartialObjects["nb_meeting_max_fields"];
    min?: PartialObjects["nb_meeting_min_fields"];
    stddev?: PartialObjects["nb_meeting_stddev_fields"];
    stddev_pop?: PartialObjects["nb_meeting_stddev_pop_fields"];
    stddev_samp?: PartialObjects["nb_meeting_stddev_samp_fields"];
    sum?: PartialObjects["nb_meeting_sum_fields"];
    var_pop?: PartialObjects["nb_meeting_var_pop_fields"];
    var_samp?: PartialObjects["nb_meeting_var_samp_fields"];
    variance?: PartialObjects["nb_meeting_variance_fields"];
  };
  ["nb_meeting_aggregate_order_by"]: {
    avg?: PartialObjects["nb_meeting_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["nb_meeting_max_order_by"];
    min?: PartialObjects["nb_meeting_min_order_by"];
    stddev?: PartialObjects["nb_meeting_stddev_order_by"];
    stddev_pop?: PartialObjects["nb_meeting_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["nb_meeting_stddev_samp_order_by"];
    sum?: PartialObjects["nb_meeting_sum_order_by"];
    var_pop?: PartialObjects["nb_meeting_var_pop_order_by"];
    var_samp?: PartialObjects["nb_meeting_var_samp_order_by"];
    variance?: PartialObjects["nb_meeting_variance_order_by"];
  };
  ["nb_meeting_arr_rel_insert_input"]: {
    data: PartialObjects["nb_meeting_insert_input"][];
    on_conflict?: PartialObjects["nb_meeting_on_conflict"];
  };
  ["nb_meeting_avg_fields"]: {
    __typename?: "nb_meeting_avg_fields";
    guild_id?: number;
    id?: number;
    sphere_id?: number;
  };
  ["nb_meeting_avg_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_bool_exp"]: {
    _and?: (PartialObjects["nb_meeting_bool_exp"] | undefined)[];
    _not?: PartialObjects["nb_meeting_bool_exp"];
    _or?: (PartialObjects["nb_meeting_bool_exp"] | undefined)[];
    created_at?: PartialObjects["timestamptz_comparison_exp"];
    description?: PartialObjects["String_comparison_exp"];
    end_time?: PartialObjects["timestamptz_comparison_exp"];
    guild?: PartialObjects["nb_guild_bool_exp"];
    guild_id?: PartialObjects["Int_comparison_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    image?: PartialObjects["String_comparison_exp"];
    location?: PartialObjects["String_comparison_exp"];
    meeting_url?: PartialObjects["String_comparison_exp"];
    name?: PartialObjects["String_comparison_exp"];
    organizer?: PartialObjects["cr_user_bool_exp"];
    organizer_id?: PartialObjects["uuid_comparison_exp"];
    participants?: PartialObjects["nb_meeting_participants_bool_exp"];
    proposal?: PartialObjects["ch_proposal_bool_exp"];
    publication_time?: PartialObjects["timestamptz_comparison_exp"];
    slug?: PartialObjects["String_comparison_exp"];
    sphere?: PartialObjects["nb_sphere_bool_exp"];
    sphere_id?: PartialObjects["Int_comparison_exp"];
    start_time?: PartialObjects["timestamptz_comparison_exp"];
    status?: PartialObjects["String_comparison_exp"];
    time_table?: PartialObjects["ch_agenda_item_bool_exp"];
    updated_at?: PartialObjects["timestamptz_comparison_exp"];
  };
  ["nb_meeting_constraint"]: nb_meeting_constraint;
  ["nb_meeting_inc_input"]: {
    guild_id?: number;
    id?: number;
    sphere_id?: number;
  };
  ["nb_meeting_insert_input"]: {
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    end_time?: PartialObjects["timestamptz"];
    guild?: PartialObjects["nb_guild_obj_rel_insert_input"];
    guild_id?: number;
    id?: number;
    image?: string;
    location?: string;
    meeting_url?: string;
    name?: string;
    organizer?: PartialObjects["cr_user_obj_rel_insert_input"];
    organizer_id?: PartialObjects["uuid"];
    participants?: PartialObjects["nb_meeting_participants_arr_rel_insert_input"];
    proposal?: PartialObjects["ch_proposal_obj_rel_insert_input"];
    publication_time?: PartialObjects["timestamptz"];
    slug?: string;
    sphere?: PartialObjects["nb_sphere_obj_rel_insert_input"];
    sphere_id?: number;
    start_time?: PartialObjects["timestamptz"];
    status?: string;
    time_table?: PartialObjects["ch_agenda_item_obj_rel_insert_input"];
    updated_at?: PartialObjects["timestamptz"];
  };
  ["nb_meeting_max_fields"]: {
    __typename?: "nb_meeting_max_fields";
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    end_time?: PartialObjects["timestamptz"];
    guild_id?: number;
    id?: number;
    image?: string;
    location?: string;
    meeting_url?: string;
    name?: string;
    organizer_id?: PartialObjects["uuid"];
    publication_time?: PartialObjects["timestamptz"];
    slug?: string;
    sphere_id?: number;
    start_time?: PartialObjects["timestamptz"];
    status?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  ["nb_meeting_max_order_by"]: {
    created_at?: PartialObjects["order_by"];
    description?: PartialObjects["order_by"];
    end_time?: PartialObjects["order_by"];
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    image?: PartialObjects["order_by"];
    location?: PartialObjects["order_by"];
    meeting_url?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    organizer_id?: PartialObjects["order_by"];
    publication_time?: PartialObjects["order_by"];
    slug?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
    start_time?: PartialObjects["order_by"];
    status?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  ["nb_meeting_min_fields"]: {
    __typename?: "nb_meeting_min_fields";
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    end_time?: PartialObjects["timestamptz"];
    guild_id?: number;
    id?: number;
    image?: string;
    location?: string;
    meeting_url?: string;
    name?: string;
    organizer_id?: PartialObjects["uuid"];
    publication_time?: PartialObjects["timestamptz"];
    slug?: string;
    sphere_id?: number;
    start_time?: PartialObjects["timestamptz"];
    status?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  ["nb_meeting_min_order_by"]: {
    created_at?: PartialObjects["order_by"];
    description?: PartialObjects["order_by"];
    end_time?: PartialObjects["order_by"];
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    image?: PartialObjects["order_by"];
    location?: PartialObjects["order_by"];
    meeting_url?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    organizer_id?: PartialObjects["order_by"];
    publication_time?: PartialObjects["order_by"];
    slug?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
    start_time?: PartialObjects["order_by"];
    status?: PartialObjects["order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  ["nb_meeting_mutation_response"]: {
    __typename?: "nb_meeting_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["nb_meeting"][];
  };
  ["nb_meeting_obj_rel_insert_input"]: {
    data: PartialObjects["nb_meeting_insert_input"];
    on_conflict?: PartialObjects["nb_meeting_on_conflict"];
  };
  ["nb_meeting_on_conflict"]: {
    constraint: PartialObjects["nb_meeting_constraint"];
    update_columns: PartialObjects["nb_meeting_update_column"][];
    where?: PartialObjects["nb_meeting_bool_exp"];
  };
  ["nb_meeting_order_by"]: {
    created_at?: PartialObjects["order_by"];
    description?: PartialObjects["order_by"];
    end_time?: PartialObjects["order_by"];
    guild?: PartialObjects["nb_guild_order_by"];
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    image?: PartialObjects["order_by"];
    location?: PartialObjects["order_by"];
    meeting_url?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    organizer?: PartialObjects["cr_user_order_by"];
    organizer_id?: PartialObjects["order_by"];
    participants_aggregate?: PartialObjects["nb_meeting_participants_aggregate_order_by"];
    proposal?: PartialObjects["ch_proposal_order_by"];
    publication_time?: PartialObjects["order_by"];
    slug?: PartialObjects["order_by"];
    sphere?: PartialObjects["nb_sphere_order_by"];
    sphere_id?: PartialObjects["order_by"];
    start_time?: PartialObjects["order_by"];
    status?: PartialObjects["order_by"];
    time_table?: PartialObjects["ch_agenda_item_order_by"];
    updated_at?: PartialObjects["order_by"];
  };
  ["nb_meeting_participants"]: {
    __typename?: "nb_meeting_participants";
    cr_user?: PartialObjects["cr_user"];
    id?: number;
    meeting_id?: number;
    nb_meeting?: PartialObjects["nb_meeting"];
    user_id?: PartialObjects["uuid"];
  };
  ["nb_meeting_participants_aggregate"]: {
    __typename?: "nb_meeting_participants_aggregate";
    aggregate?: PartialObjects["nb_meeting_participants_aggregate_fields"];
    nodes?: PartialObjects["nb_meeting_participants"][];
  };
  ["nb_meeting_participants_aggregate_fields"]: {
    __typename?: "nb_meeting_participants_aggregate_fields";
    avg?: PartialObjects["nb_meeting_participants_avg_fields"];
    count?: number;
    max?: PartialObjects["nb_meeting_participants_max_fields"];
    min?: PartialObjects["nb_meeting_participants_min_fields"];
    stddev?: PartialObjects["nb_meeting_participants_stddev_fields"];
    stddev_pop?: PartialObjects["nb_meeting_participants_stddev_pop_fields"];
    stddev_samp?: PartialObjects["nb_meeting_participants_stddev_samp_fields"];
    sum?: PartialObjects["nb_meeting_participants_sum_fields"];
    var_pop?: PartialObjects["nb_meeting_participants_var_pop_fields"];
    var_samp?: PartialObjects["nb_meeting_participants_var_samp_fields"];
    variance?: PartialObjects["nb_meeting_participants_variance_fields"];
  };
  ["nb_meeting_participants_aggregate_order_by"]: {
    avg?: PartialObjects["nb_meeting_participants_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["nb_meeting_participants_max_order_by"];
    min?: PartialObjects["nb_meeting_participants_min_order_by"];
    stddev?: PartialObjects["nb_meeting_participants_stddev_order_by"];
    stddev_pop?: PartialObjects["nb_meeting_participants_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["nb_meeting_participants_stddev_samp_order_by"];
    sum?: PartialObjects["nb_meeting_participants_sum_order_by"];
    var_pop?: PartialObjects["nb_meeting_participants_var_pop_order_by"];
    var_samp?: PartialObjects["nb_meeting_participants_var_samp_order_by"];
    variance?: PartialObjects["nb_meeting_participants_variance_order_by"];
  };
  ["nb_meeting_participants_arr_rel_insert_input"]: {
    data: PartialObjects["nb_meeting_participants_insert_input"][];
    on_conflict?: PartialObjects["nb_meeting_participants_on_conflict"];
  };
  ["nb_meeting_participants_avg_fields"]: {
    __typename?: "nb_meeting_participants_avg_fields";
    id?: number;
    meeting_id?: number;
  };
  ["nb_meeting_participants_avg_order_by"]: {
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_participants_bool_exp"]: {
    _and?: (PartialObjects["nb_meeting_participants_bool_exp"] | undefined)[];
    _not?: PartialObjects["nb_meeting_participants_bool_exp"];
    _or?: (PartialObjects["nb_meeting_participants_bool_exp"] | undefined)[];
    cr_user?: PartialObjects["cr_user_bool_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    meeting_id?: PartialObjects["Int_comparison_exp"];
    nb_meeting?: PartialObjects["nb_meeting_bool_exp"];
    user_id?: PartialObjects["uuid_comparison_exp"];
  };
  ["nb_meeting_participants_constraint"]: nb_meeting_participants_constraint;
  ["nb_meeting_participants_inc_input"]: {
    id?: number;
    meeting_id?: number;
  };
  ["nb_meeting_participants_insert_input"]: {
    cr_user?: PartialObjects["cr_user_obj_rel_insert_input"];
    id?: number;
    meeting_id?: number;
    nb_meeting?: PartialObjects["nb_meeting_obj_rel_insert_input"];
    user_id?: PartialObjects["uuid"];
  };
  ["nb_meeting_participants_max_fields"]: {
    __typename?: "nb_meeting_participants_max_fields";
    id?: number;
    meeting_id?: number;
    user_id?: PartialObjects["uuid"];
  };
  ["nb_meeting_participants_max_order_by"]: {
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_participants_min_fields"]: {
    __typename?: "nb_meeting_participants_min_fields";
    id?: number;
    meeting_id?: number;
    user_id?: PartialObjects["uuid"];
  };
  ["nb_meeting_participants_min_order_by"]: {
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_participants_mutation_response"]: {
    __typename?: "nb_meeting_participants_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["nb_meeting_participants"][];
  };
  ["nb_meeting_participants_obj_rel_insert_input"]: {
    data: PartialObjects["nb_meeting_participants_insert_input"];
    on_conflict?: PartialObjects["nb_meeting_participants_on_conflict"];
  };
  ["nb_meeting_participants_on_conflict"]: {
    constraint: PartialObjects["nb_meeting_participants_constraint"];
    update_columns: PartialObjects["nb_meeting_participants_update_column"][];
    where?: PartialObjects["nb_meeting_participants_bool_exp"];
  };
  ["nb_meeting_participants_order_by"]: {
    cr_user?: PartialObjects["cr_user_order_by"];
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
    nb_meeting?: PartialObjects["nb_meeting_order_by"];
    user_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_participants_pk_columns_input"]: {
    id: number;
  };
  ["nb_meeting_participants_select_column"]: nb_meeting_participants_select_column;
  ["nb_meeting_participants_set_input"]: {
    id?: number;
    meeting_id?: number;
    user_id?: PartialObjects["uuid"];
  };
  ["nb_meeting_participants_stddev_fields"]: {
    __typename?: "nb_meeting_participants_stddev_fields";
    id?: number;
    meeting_id?: number;
  };
  ["nb_meeting_participants_stddev_order_by"]: {
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_participants_stddev_pop_fields"]: {
    __typename?: "nb_meeting_participants_stddev_pop_fields";
    id?: number;
    meeting_id?: number;
  };
  ["nb_meeting_participants_stddev_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_participants_stddev_samp_fields"]: {
    __typename?: "nb_meeting_participants_stddev_samp_fields";
    id?: number;
    meeting_id?: number;
  };
  ["nb_meeting_participants_stddev_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_participants_sum_fields"]: {
    __typename?: "nb_meeting_participants_sum_fields";
    id?: number;
    meeting_id?: number;
  };
  ["nb_meeting_participants_sum_order_by"]: {
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_participants_update_column"]: nb_meeting_participants_update_column;
  ["nb_meeting_participants_var_pop_fields"]: {
    __typename?: "nb_meeting_participants_var_pop_fields";
    id?: number;
    meeting_id?: number;
  };
  ["nb_meeting_participants_var_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_participants_var_samp_fields"]: {
    __typename?: "nb_meeting_participants_var_samp_fields";
    id?: number;
    meeting_id?: number;
  };
  ["nb_meeting_participants_var_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_participants_variance_fields"]: {
    __typename?: "nb_meeting_participants_variance_fields";
    id?: number;
    meeting_id?: number;
  };
  ["nb_meeting_participants_variance_order_by"]: {
    id?: PartialObjects["order_by"];
    meeting_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_pk_columns_input"]: {
    id: number;
  };
  ["nb_meeting_select_column"]: nb_meeting_select_column;
  ["nb_meeting_set_input"]: {
    created_at?: PartialObjects["timestamptz"];
    description?: string;
    end_time?: PartialObjects["timestamptz"];
    guild_id?: number;
    id?: number;
    image?: string;
    location?: string;
    meeting_url?: string;
    name?: string;
    organizer_id?: PartialObjects["uuid"];
    publication_time?: PartialObjects["timestamptz"];
    slug?: string;
    sphere_id?: number;
    start_time?: PartialObjects["timestamptz"];
    status?: string;
    updated_at?: PartialObjects["timestamptz"];
  };
  ["nb_meeting_stddev_fields"]: {
    __typename?: "nb_meeting_stddev_fields";
    guild_id?: number;
    id?: number;
    sphere_id?: number;
  };
  ["nb_meeting_stddev_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_stddev_pop_fields"]: {
    __typename?: "nb_meeting_stddev_pop_fields";
    guild_id?: number;
    id?: number;
    sphere_id?: number;
  };
  ["nb_meeting_stddev_pop_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_stddev_samp_fields"]: {
    __typename?: "nb_meeting_stddev_samp_fields";
    guild_id?: number;
    id?: number;
    sphere_id?: number;
  };
  ["nb_meeting_stddev_samp_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_sum_fields"]: {
    __typename?: "nb_meeting_sum_fields";
    guild_id?: number;
    id?: number;
    sphere_id?: number;
  };
  ["nb_meeting_sum_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_update_column"]: nb_meeting_update_column;
  ["nb_meeting_var_pop_fields"]: {
    __typename?: "nb_meeting_var_pop_fields";
    guild_id?: number;
    id?: number;
    sphere_id?: number;
  };
  ["nb_meeting_var_pop_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_var_samp_fields"]: {
    __typename?: "nb_meeting_var_samp_fields";
    guild_id?: number;
    id?: number;
    sphere_id?: number;
  };
  ["nb_meeting_var_samp_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_meeting_variance_fields"]: {
    __typename?: "nb_meeting_variance_fields";
    guild_id?: number;
    id?: number;
    sphere_id?: number;
  };
  ["nb_meeting_variance_order_by"]: {
    guild_id?: PartialObjects["order_by"];
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_sphere"]: {
    __typename?: "nb_sphere";
    ch_festivals?: PartialObjects["ch_festival"][];
    ch_festivals_aggregate?: PartialObjects["ch_festival_aggregate"];
    django_site?: PartialObjects["django_site"];
    id?: number;
    is_open?: boolean;
    name?: string;
    nb_meetings?: PartialObjects["nb_meeting"][];
    nb_meetings_aggregate?: PartialObjects["nb_meeting_aggregate"];
    nb_sphere_managers?: PartialObjects["nb_sphere_managers"][];
    nb_sphere_managers_aggregate?: PartialObjects["nb_sphere_managers_aggregate"];
    settings?: PartialObjects["jsonb"];
    site_id?: number;
  };
  ["nb_sphere_aggregate"]: {
    __typename?: "nb_sphere_aggregate";
    aggregate?: PartialObjects["nb_sphere_aggregate_fields"];
    nodes?: PartialObjects["nb_sphere"][];
  };
  ["nb_sphere_aggregate_fields"]: {
    __typename?: "nb_sphere_aggregate_fields";
    avg?: PartialObjects["nb_sphere_avg_fields"];
    count?: number;
    max?: PartialObjects["nb_sphere_max_fields"];
    min?: PartialObjects["nb_sphere_min_fields"];
    stddev?: PartialObjects["nb_sphere_stddev_fields"];
    stddev_pop?: PartialObjects["nb_sphere_stddev_pop_fields"];
    stddev_samp?: PartialObjects["nb_sphere_stddev_samp_fields"];
    sum?: PartialObjects["nb_sphere_sum_fields"];
    var_pop?: PartialObjects["nb_sphere_var_pop_fields"];
    var_samp?: PartialObjects["nb_sphere_var_samp_fields"];
    variance?: PartialObjects["nb_sphere_variance_fields"];
  };
  ["nb_sphere_aggregate_order_by"]: {
    avg?: PartialObjects["nb_sphere_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["nb_sphere_max_order_by"];
    min?: PartialObjects["nb_sphere_min_order_by"];
    stddev?: PartialObjects["nb_sphere_stddev_order_by"];
    stddev_pop?: PartialObjects["nb_sphere_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["nb_sphere_stddev_samp_order_by"];
    sum?: PartialObjects["nb_sphere_sum_order_by"];
    var_pop?: PartialObjects["nb_sphere_var_pop_order_by"];
    var_samp?: PartialObjects["nb_sphere_var_samp_order_by"];
    variance?: PartialObjects["nb_sphere_variance_order_by"];
  };
  ["nb_sphere_append_input"]: {
    settings?: PartialObjects["jsonb"];
  };
  ["nb_sphere_arr_rel_insert_input"]: {
    data: PartialObjects["nb_sphere_insert_input"][];
    on_conflict?: PartialObjects["nb_sphere_on_conflict"];
  };
  ["nb_sphere_avg_fields"]: {
    __typename?: "nb_sphere_avg_fields";
    id?: number;
    site_id?: number;
  };
  ["nb_sphere_avg_order_by"]: {
    id?: PartialObjects["order_by"];
    site_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_bool_exp"]: {
    _and?: (PartialObjects["nb_sphere_bool_exp"] | undefined)[];
    _not?: PartialObjects["nb_sphere_bool_exp"];
    _or?: (PartialObjects["nb_sphere_bool_exp"] | undefined)[];
    ch_festivals?: PartialObjects["ch_festival_bool_exp"];
    django_site?: PartialObjects["django_site_bool_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    is_open?: PartialObjects["Boolean_comparison_exp"];
    name?: PartialObjects["String_comparison_exp"];
    nb_meetings?: PartialObjects["nb_meeting_bool_exp"];
    nb_sphere_managers?: PartialObjects["nb_sphere_managers_bool_exp"];
    settings?: PartialObjects["jsonb_comparison_exp"];
    site_id?: PartialObjects["Int_comparison_exp"];
  };
  ["nb_sphere_constraint"]: nb_sphere_constraint;
  ["nb_sphere_delete_at_path_input"]: {
    settings?: (string | undefined)[];
  };
  ["nb_sphere_delete_elem_input"]: {
    settings?: number;
  };
  ["nb_sphere_delete_key_input"]: {
    settings?: string;
  };
  ["nb_sphere_inc_input"]: {
    id?: number;
    site_id?: number;
  };
  ["nb_sphere_insert_input"]: {
    ch_festivals?: PartialObjects["ch_festival_arr_rel_insert_input"];
    django_site?: PartialObjects["django_site_obj_rel_insert_input"];
    id?: number;
    is_open?: boolean;
    name?: string;
    nb_meetings?: PartialObjects["nb_meeting_arr_rel_insert_input"];
    nb_sphere_managers?: PartialObjects["nb_sphere_managers_arr_rel_insert_input"];
    settings?: PartialObjects["jsonb"];
    site_id?: number;
  };
  ["nb_sphere_managers"]: {
    __typename?: "nb_sphere_managers";
    cr_user?: PartialObjects["cr_user"];
    id?: number;
    nb_sphere?: PartialObjects["nb_sphere"];
    sphere_id?: number;
    user_id?: PartialObjects["uuid"];
  };
  ["nb_sphere_managers_aggregate"]: {
    __typename?: "nb_sphere_managers_aggregate";
    aggregate?: PartialObjects["nb_sphere_managers_aggregate_fields"];
    nodes?: PartialObjects["nb_sphere_managers"][];
  };
  ["nb_sphere_managers_aggregate_fields"]: {
    __typename?: "nb_sphere_managers_aggregate_fields";
    avg?: PartialObjects["nb_sphere_managers_avg_fields"];
    count?: number;
    max?: PartialObjects["nb_sphere_managers_max_fields"];
    min?: PartialObjects["nb_sphere_managers_min_fields"];
    stddev?: PartialObjects["nb_sphere_managers_stddev_fields"];
    stddev_pop?: PartialObjects["nb_sphere_managers_stddev_pop_fields"];
    stddev_samp?: PartialObjects["nb_sphere_managers_stddev_samp_fields"];
    sum?: PartialObjects["nb_sphere_managers_sum_fields"];
    var_pop?: PartialObjects["nb_sphere_managers_var_pop_fields"];
    var_samp?: PartialObjects["nb_sphere_managers_var_samp_fields"];
    variance?: PartialObjects["nb_sphere_managers_variance_fields"];
  };
  ["nb_sphere_managers_aggregate_order_by"]: {
    avg?: PartialObjects["nb_sphere_managers_avg_order_by"];
    count?: PartialObjects["order_by"];
    max?: PartialObjects["nb_sphere_managers_max_order_by"];
    min?: PartialObjects["nb_sphere_managers_min_order_by"];
    stddev?: PartialObjects["nb_sphere_managers_stddev_order_by"];
    stddev_pop?: PartialObjects["nb_sphere_managers_stddev_pop_order_by"];
    stddev_samp?: PartialObjects["nb_sphere_managers_stddev_samp_order_by"];
    sum?: PartialObjects["nb_sphere_managers_sum_order_by"];
    var_pop?: PartialObjects["nb_sphere_managers_var_pop_order_by"];
    var_samp?: PartialObjects["nb_sphere_managers_var_samp_order_by"];
    variance?: PartialObjects["nb_sphere_managers_variance_order_by"];
  };
  ["nb_sphere_managers_arr_rel_insert_input"]: {
    data: PartialObjects["nb_sphere_managers_insert_input"][];
    on_conflict?: PartialObjects["nb_sphere_managers_on_conflict"];
  };
  ["nb_sphere_managers_avg_fields"]: {
    __typename?: "nb_sphere_managers_avg_fields";
    id?: number;
    sphere_id?: number;
  };
  ["nb_sphere_managers_avg_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_managers_bool_exp"]: {
    _and?: (PartialObjects["nb_sphere_managers_bool_exp"] | undefined)[];
    _not?: PartialObjects["nb_sphere_managers_bool_exp"];
    _or?: (PartialObjects["nb_sphere_managers_bool_exp"] | undefined)[];
    cr_user?: PartialObjects["cr_user_bool_exp"];
    id?: PartialObjects["Int_comparison_exp"];
    nb_sphere?: PartialObjects["nb_sphere_bool_exp"];
    sphere_id?: PartialObjects["Int_comparison_exp"];
    user_id?: PartialObjects["uuid_comparison_exp"];
  };
  ["nb_sphere_managers_constraint"]: nb_sphere_managers_constraint;
  ["nb_sphere_managers_inc_input"]: {
    id?: number;
    sphere_id?: number;
  };
  ["nb_sphere_managers_insert_input"]: {
    cr_user?: PartialObjects["cr_user_obj_rel_insert_input"];
    id?: number;
    nb_sphere?: PartialObjects["nb_sphere_obj_rel_insert_input"];
    sphere_id?: number;
    user_id?: PartialObjects["uuid"];
  };
  ["nb_sphere_managers_max_fields"]: {
    __typename?: "nb_sphere_managers_max_fields";
    id?: number;
    sphere_id?: number;
    user_id?: PartialObjects["uuid"];
  };
  ["nb_sphere_managers_max_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_managers_min_fields"]: {
    __typename?: "nb_sphere_managers_min_fields";
    id?: number;
    sphere_id?: number;
    user_id?: PartialObjects["uuid"];
  };
  ["nb_sphere_managers_min_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_managers_mutation_response"]: {
    __typename?: "nb_sphere_managers_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["nb_sphere_managers"][];
  };
  ["nb_sphere_managers_obj_rel_insert_input"]: {
    data: PartialObjects["nb_sphere_managers_insert_input"];
    on_conflict?: PartialObjects["nb_sphere_managers_on_conflict"];
  };
  ["nb_sphere_managers_on_conflict"]: {
    constraint: PartialObjects["nb_sphere_managers_constraint"];
    update_columns: PartialObjects["nb_sphere_managers_update_column"][];
    where?: PartialObjects["nb_sphere_managers_bool_exp"];
  };
  ["nb_sphere_managers_order_by"]: {
    cr_user?: PartialObjects["cr_user_order_by"];
    id?: PartialObjects["order_by"];
    nb_sphere?: PartialObjects["nb_sphere_order_by"];
    sphere_id?: PartialObjects["order_by"];
    user_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_managers_pk_columns_input"]: {
    id: number;
  };
  ["nb_sphere_managers_select_column"]: nb_sphere_managers_select_column;
  ["nb_sphere_managers_set_input"]: {
    id?: number;
    sphere_id?: number;
    user_id?: PartialObjects["uuid"];
  };
  ["nb_sphere_managers_stddev_fields"]: {
    __typename?: "nb_sphere_managers_stddev_fields";
    id?: number;
    sphere_id?: number;
  };
  ["nb_sphere_managers_stddev_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_managers_stddev_pop_fields"]: {
    __typename?: "nb_sphere_managers_stddev_pop_fields";
    id?: number;
    sphere_id?: number;
  };
  ["nb_sphere_managers_stddev_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_managers_stddev_samp_fields"]: {
    __typename?: "nb_sphere_managers_stddev_samp_fields";
    id?: number;
    sphere_id?: number;
  };
  ["nb_sphere_managers_stddev_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_managers_sum_fields"]: {
    __typename?: "nb_sphere_managers_sum_fields";
    id?: number;
    sphere_id?: number;
  };
  ["nb_sphere_managers_sum_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_managers_update_column"]: nb_sphere_managers_update_column;
  ["nb_sphere_managers_var_pop_fields"]: {
    __typename?: "nb_sphere_managers_var_pop_fields";
    id?: number;
    sphere_id?: number;
  };
  ["nb_sphere_managers_var_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_managers_var_samp_fields"]: {
    __typename?: "nb_sphere_managers_var_samp_fields";
    id?: number;
    sphere_id?: number;
  };
  ["nb_sphere_managers_var_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_managers_variance_fields"]: {
    __typename?: "nb_sphere_managers_variance_fields";
    id?: number;
    sphere_id?: number;
  };
  ["nb_sphere_managers_variance_order_by"]: {
    id?: PartialObjects["order_by"];
    sphere_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_max_fields"]: {
    __typename?: "nb_sphere_max_fields";
    id?: number;
    name?: string;
    site_id?: number;
  };
  ["nb_sphere_max_order_by"]: {
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    site_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_min_fields"]: {
    __typename?: "nb_sphere_min_fields";
    id?: number;
    name?: string;
    site_id?: number;
  };
  ["nb_sphere_min_order_by"]: {
    id?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    site_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_mutation_response"]: {
    __typename?: "nb_sphere_mutation_response";
    affected_rows?: number;
    returning?: PartialObjects["nb_sphere"][];
  };
  ["nb_sphere_obj_rel_insert_input"]: {
    data: PartialObjects["nb_sphere_insert_input"];
    on_conflict?: PartialObjects["nb_sphere_on_conflict"];
  };
  ["nb_sphere_on_conflict"]: {
    constraint: PartialObjects["nb_sphere_constraint"];
    update_columns: PartialObjects["nb_sphere_update_column"][];
    where?: PartialObjects["nb_sphere_bool_exp"];
  };
  ["nb_sphere_order_by"]: {
    ch_festivals_aggregate?: PartialObjects["ch_festival_aggregate_order_by"];
    django_site?: PartialObjects["django_site_order_by"];
    id?: PartialObjects["order_by"];
    is_open?: PartialObjects["order_by"];
    name?: PartialObjects["order_by"];
    nb_meetings_aggregate?: PartialObjects["nb_meeting_aggregate_order_by"];
    nb_sphere_managers_aggregate?: PartialObjects["nb_sphere_managers_aggregate_order_by"];
    settings?: PartialObjects["order_by"];
    site_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_pk_columns_input"]: {
    id: number;
  };
  ["nb_sphere_prepend_input"]: {
    settings?: PartialObjects["jsonb"];
  };
  ["nb_sphere_select_column"]: nb_sphere_select_column;
  ["nb_sphere_set_input"]: {
    id?: number;
    is_open?: boolean;
    name?: string;
    settings?: PartialObjects["jsonb"];
    site_id?: number;
  };
  ["nb_sphere_stddev_fields"]: {
    __typename?: "nb_sphere_stddev_fields";
    id?: number;
    site_id?: number;
  };
  ["nb_sphere_stddev_order_by"]: {
    id?: PartialObjects["order_by"];
    site_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_stddev_pop_fields"]: {
    __typename?: "nb_sphere_stddev_pop_fields";
    id?: number;
    site_id?: number;
  };
  ["nb_sphere_stddev_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    site_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_stddev_samp_fields"]: {
    __typename?: "nb_sphere_stddev_samp_fields";
    id?: number;
    site_id?: number;
  };
  ["nb_sphere_stddev_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    site_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_sum_fields"]: {
    __typename?: "nb_sphere_sum_fields";
    id?: number;
    site_id?: number;
  };
  ["nb_sphere_sum_order_by"]: {
    id?: PartialObjects["order_by"];
    site_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_update_column"]: nb_sphere_update_column;
  ["nb_sphere_var_pop_fields"]: {
    __typename?: "nb_sphere_var_pop_fields";
    id?: number;
    site_id?: number;
  };
  ["nb_sphere_var_pop_order_by"]: {
    id?: PartialObjects["order_by"];
    site_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_var_samp_fields"]: {
    __typename?: "nb_sphere_var_samp_fields";
    id?: number;
    site_id?: number;
  };
  ["nb_sphere_var_samp_order_by"]: {
    id?: PartialObjects["order_by"];
    site_id?: PartialObjects["order_by"];
  };
  ["nb_sphere_variance_fields"]: {
    __typename?: "nb_sphere_variance_fields";
    id?: number;
    site_id?: number;
  };
  ["nb_sphere_variance_order_by"]: {
    id?: PartialObjects["order_by"];
    site_id?: PartialObjects["order_by"];
  };
  ["order_by"]: order_by;
  ["query_root"]: {
    __typename?: "query_root";
    ch_agenda_item?: PartialObjects["ch_agenda_item"][];
    ch_agenda_item_aggregate?: PartialObjects["ch_agenda_item_aggregate"];
    ch_agenda_item_by_pk?: PartialObjects["ch_agenda_item"];
    ch_festival?: PartialObjects["ch_festival"][];
    ch_festival_aggregate?: PartialObjects["ch_festival_aggregate"];
    ch_festival_by_pk?: PartialObjects["ch_festival"];
    ch_helper?: PartialObjects["ch_helper"][];
    ch_helper_aggregate?: PartialObjects["ch_helper_aggregate"];
    ch_helper_by_pk?: PartialObjects["ch_helper"];
    ch_helper_time_slots?: PartialObjects["ch_helper_time_slots"][];
    ch_helper_time_slots_aggregate?: PartialObjects["ch_helper_time_slots_aggregate"];
    ch_helper_time_slots_by_pk?: PartialObjects["ch_helper_time_slots"];
    ch_proposal?: PartialObjects["ch_proposal"][];
    ch_proposal_aggregate?: PartialObjects["ch_proposal_aggregate"];
    ch_proposal_by_pk?: PartialObjects["ch_proposal"];
    ch_proposal_time_slots?: PartialObjects["ch_proposal_time_slots"][];
    ch_proposal_time_slots_aggregate?: PartialObjects["ch_proposal_time_slots_aggregate"];
    ch_proposal_time_slots_by_pk?: PartialObjects["ch_proposal_time_slots"];
    ch_room?: PartialObjects["ch_room"][];
    ch_room_aggregate?: PartialObjects["ch_room_aggregate"];
    ch_room_by_pk?: PartialObjects["ch_room"];
    ch_time_slot?: PartialObjects["ch_time_slot"][];
    ch_time_slot_aggregate?: PartialObjects["ch_time_slot_aggregate"];
    ch_time_slot_by_pk?: PartialObjects["ch_time_slot"];
    ch_wait_list?: PartialObjects["ch_wait_list"][];
    ch_wait_list_aggregate?: PartialObjects["ch_wait_list_aggregate"];
    ch_wait_list_by_pk?: PartialObjects["ch_wait_list"];
    cr_user?: PartialObjects["cr_user"][];
    cr_user_aggregate?: PartialObjects["cr_user_aggregate"];
    cr_user_by_pk?: PartialObjects["cr_user"];
    django_site?: PartialObjects["django_site"][];
    django_site_aggregate?: PartialObjects["django_site_aggregate"];
    django_site_by_pk?: PartialObjects["django_site"];
    nb_guild?: PartialObjects["nb_guild"][];
    nb_guild_aggregate?: PartialObjects["nb_guild_aggregate"];
    nb_guild_by_pk?: PartialObjects["nb_guild"];
    nb_guild_member?: PartialObjects["nb_guild_member"][];
    nb_guild_member_aggregate?: PartialObjects["nb_guild_member_aggregate"];
    nb_guild_member_by_pk?: PartialObjects["nb_guild_member"];
    nb_meeting?: PartialObjects["nb_meeting"][];
    nb_meeting_aggregate?: PartialObjects["nb_meeting_aggregate"];
    nb_meeting_by_pk?: PartialObjects["nb_meeting"];
    nb_meeting_participants?: PartialObjects["nb_meeting_participants"][];
    nb_meeting_participants_aggregate?: PartialObjects["nb_meeting_participants_aggregate"];
    nb_meeting_participants_by_pk?: PartialObjects["nb_meeting_participants"];
    nb_sphere?: PartialObjects["nb_sphere"][];
    nb_sphere_aggregate?: PartialObjects["nb_sphere_aggregate"];
    nb_sphere_by_pk?: PartialObjects["nb_sphere"];
    nb_sphere_managers?: PartialObjects["nb_sphere_managers"][];
    nb_sphere_managers_aggregate?: PartialObjects["nb_sphere_managers_aggregate"];
    nb_sphere_managers_by_pk?: PartialObjects["nb_sphere_managers"];
  };
  ["String_comparison_exp"]: {
    _eq?: string;
    _gt?: string;
    _gte?: string;
    _ilike?: string;
    _in?: string[];
    _is_null?: boolean;
    _like?: string;
    _lt?: string;
    _lte?: string;
    _neq?: string;
    _nilike?: string;
    _nin?: string[];
    _nlike?: string;
    _nsimilar?: string;
    _similar?: string;
  };
  ["subscription_root"]: {
    __typename?: "subscription_root";
    ch_agenda_item?: PartialObjects["ch_agenda_item"][];
    ch_agenda_item_aggregate?: PartialObjects["ch_agenda_item_aggregate"];
    ch_agenda_item_by_pk?: PartialObjects["ch_agenda_item"];
    ch_festival?: PartialObjects["ch_festival"][];
    ch_festival_aggregate?: PartialObjects["ch_festival_aggregate"];
    ch_festival_by_pk?: PartialObjects["ch_festival"];
    ch_helper?: PartialObjects["ch_helper"][];
    ch_helper_aggregate?: PartialObjects["ch_helper_aggregate"];
    ch_helper_by_pk?: PartialObjects["ch_helper"];
    ch_helper_time_slots?: PartialObjects["ch_helper_time_slots"][];
    ch_helper_time_slots_aggregate?: PartialObjects["ch_helper_time_slots_aggregate"];
    ch_helper_time_slots_by_pk?: PartialObjects["ch_helper_time_slots"];
    ch_proposal?: PartialObjects["ch_proposal"][];
    ch_proposal_aggregate?: PartialObjects["ch_proposal_aggregate"];
    ch_proposal_by_pk?: PartialObjects["ch_proposal"];
    ch_proposal_time_slots?: PartialObjects["ch_proposal_time_slots"][];
    ch_proposal_time_slots_aggregate?: PartialObjects["ch_proposal_time_slots_aggregate"];
    ch_proposal_time_slots_by_pk?: PartialObjects["ch_proposal_time_slots"];
    ch_room?: PartialObjects["ch_room"][];
    ch_room_aggregate?: PartialObjects["ch_room_aggregate"];
    ch_room_by_pk?: PartialObjects["ch_room"];
    ch_time_slot?: PartialObjects["ch_time_slot"][];
    ch_time_slot_aggregate?: PartialObjects["ch_time_slot_aggregate"];
    ch_time_slot_by_pk?: PartialObjects["ch_time_slot"];
    ch_wait_list?: PartialObjects["ch_wait_list"][];
    ch_wait_list_aggregate?: PartialObjects["ch_wait_list_aggregate"];
    ch_wait_list_by_pk?: PartialObjects["ch_wait_list"];
    cr_user?: PartialObjects["cr_user"][];
    cr_user_aggregate?: PartialObjects["cr_user_aggregate"];
    cr_user_by_pk?: PartialObjects["cr_user"];
    django_site?: PartialObjects["django_site"][];
    django_site_aggregate?: PartialObjects["django_site_aggregate"];
    django_site_by_pk?: PartialObjects["django_site"];
    nb_guild?: PartialObjects["nb_guild"][];
    nb_guild_aggregate?: PartialObjects["nb_guild_aggregate"];
    nb_guild_by_pk?: PartialObjects["nb_guild"];
    nb_guild_member?: PartialObjects["nb_guild_member"][];
    nb_guild_member_aggregate?: PartialObjects["nb_guild_member_aggregate"];
    nb_guild_member_by_pk?: PartialObjects["nb_guild_member"];
    nb_meeting?: PartialObjects["nb_meeting"][];
    nb_meeting_aggregate?: PartialObjects["nb_meeting_aggregate"];
    nb_meeting_by_pk?: PartialObjects["nb_meeting"];
    nb_meeting_participants?: PartialObjects["nb_meeting_participants"][];
    nb_meeting_participants_aggregate?: PartialObjects["nb_meeting_participants_aggregate"];
    nb_meeting_participants_by_pk?: PartialObjects["nb_meeting_participants"];
    nb_sphere?: PartialObjects["nb_sphere"][];
    nb_sphere_aggregate?: PartialObjects["nb_sphere_aggregate"];
    nb_sphere_by_pk?: PartialObjects["nb_sphere"];
    nb_sphere_managers?: PartialObjects["nb_sphere_managers"][];
    nb_sphere_managers_aggregate?: PartialObjects["nb_sphere_managers_aggregate"];
    nb_sphere_managers_by_pk?: PartialObjects["nb_sphere_managers"];
  };
  ["timestamptz"]: any;
  ["timestamptz_comparison_exp"]: {
    _eq?: PartialObjects["timestamptz"];
    _gt?: PartialObjects["timestamptz"];
    _gte?: PartialObjects["timestamptz"];
    _in?: PartialObjects["timestamptz"][];
    _is_null?: boolean;
    _lt?: PartialObjects["timestamptz"];
    _lte?: PartialObjects["timestamptz"];
    _neq?: PartialObjects["timestamptz"];
    _nin?: PartialObjects["timestamptz"][];
  };
  ["uuid"]: any;
  ["uuid_comparison_exp"]: {
    _eq?: PartialObjects["uuid"];
    _gt?: PartialObjects["uuid"];
    _gte?: PartialObjects["uuid"];
    _in?: PartialObjects["uuid"][];
    _is_null?: boolean;
    _lt?: PartialObjects["uuid"];
    _lte?: PartialObjects["uuid"];
    _neq?: PartialObjects["uuid"];
    _nin?: PartialObjects["uuid"][];
  };
};

// expression to compare columns of type Boolean. All fields are combined with logical 'AND'.

// columns and relationships of "ch_agenda_item"

// aggregated selection of "ch_agenda_item"

// aggregate fields of "ch_agenda_item"

// order by aggregate values of table "ch_agenda_item"

// input type for inserting array relation for remote table "ch_agenda_item"

// aggregate avg on columns

// order by avg() on columns of table "ch_agenda_item"

// Boolean expression to filter rows from the table "ch_agenda_item". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "ch_agenda_item"

// input type for incrementing integer column in table "ch_agenda_item"

// input type for inserting data into table "ch_agenda_item"

// aggregate max on columns

// order by max() on columns of table "ch_agenda_item"

// aggregate min on columns

// order by min() on columns of table "ch_agenda_item"

// response of any mutation on the table "ch_agenda_item"

// input type for inserting object relation for remote table "ch_agenda_item"

// on conflict condition type for table "ch_agenda_item"

// ordering options when selecting data from "ch_agenda_item"

// primary key columns input for table: "ch_agenda_item"

// select columns of table "ch_agenda_item"

// input type for updating data in table "ch_agenda_item"

// aggregate stddev on columns

// order by stddev() on columns of table "ch_agenda_item"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "ch_agenda_item"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "ch_agenda_item"

// aggregate sum on columns

// order by sum() on columns of table "ch_agenda_item"

// update columns of table "ch_agenda_item"

// aggregate var_pop on columns

// order by var_pop() on columns of table "ch_agenda_item"

// aggregate var_samp on columns

// order by var_samp() on columns of table "ch_agenda_item"

// aggregate variance on columns

// order by variance() on columns of table "ch_agenda_item"

// columns and relationships of "ch_festival"

// aggregated selection of "ch_festival"

// aggregate fields of "ch_festival"

// order by aggregate values of table "ch_festival"

// append existing jsonb value of filtered columns with new jsonb value

// input type for inserting array relation for remote table "ch_festival"

// aggregate avg on columns

// order by avg() on columns of table "ch_festival"

// Boolean expression to filter rows from the table "ch_festival". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "ch_festival"

// delete the field or element with specified path (for JSON arrays, negative integers count from the end)

// delete the array element with specified index (negative integers count from the

// end). throws an error if top level container is not an array

// delete key/value pair or string element. key/value pairs are matched based on their key value

// input type for incrementing integer column in table "ch_festival"

// input type for inserting data into table "ch_festival"

// aggregate max on columns

// order by max() on columns of table "ch_festival"

// aggregate min on columns

// order by min() on columns of table "ch_festival"

// response of any mutation on the table "ch_festival"

// input type for inserting object relation for remote table "ch_festival"

// on conflict condition type for table "ch_festival"

// ordering options when selecting data from "ch_festival"

// primary key columns input for table: "ch_festival"

// prepend existing jsonb value of filtered columns with new jsonb value

// select columns of table "ch_festival"

// input type for updating data in table "ch_festival"

// aggregate stddev on columns

// order by stddev() on columns of table "ch_festival"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "ch_festival"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "ch_festival"

// aggregate sum on columns

// order by sum() on columns of table "ch_festival"

// update columns of table "ch_festival"

// aggregate var_pop on columns

// order by var_pop() on columns of table "ch_festival"

// aggregate var_samp on columns

// order by var_samp() on columns of table "ch_festival"

// aggregate variance on columns

// order by variance() on columns of table "ch_festival"

// columns and relationships of "ch_helper"

// aggregated selection of "ch_helper"

// aggregate fields of "ch_helper"

// order by aggregate values of table "ch_helper"

// input type for inserting array relation for remote table "ch_helper"

// aggregate avg on columns

// order by avg() on columns of table "ch_helper"

// Boolean expression to filter rows from the table "ch_helper". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "ch_helper"

// input type for incrementing integer column in table "ch_helper"

// input type for inserting data into table "ch_helper"

// aggregate max on columns

// order by max() on columns of table "ch_helper"

// aggregate min on columns

// order by min() on columns of table "ch_helper"

// response of any mutation on the table "ch_helper"

// input type for inserting object relation for remote table "ch_helper"

// on conflict condition type for table "ch_helper"

// ordering options when selecting data from "ch_helper"

// primary key columns input for table: "ch_helper"

// select columns of table "ch_helper"

// input type for updating data in table "ch_helper"

// aggregate stddev on columns

// order by stddev() on columns of table "ch_helper"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "ch_helper"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "ch_helper"

// aggregate sum on columns

// order by sum() on columns of table "ch_helper"

// columns and relationships of "ch_helper_time_slots"

// aggregated selection of "ch_helper_time_slots"

// aggregate fields of "ch_helper_time_slots"

// order by aggregate values of table "ch_helper_time_slots"

// input type for inserting array relation for remote table "ch_helper_time_slots"

// aggregate avg on columns

// order by avg() on columns of table "ch_helper_time_slots"

// Boolean expression to filter rows from the table "ch_helper_time_slots". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "ch_helper_time_slots"

// input type for incrementing integer column in table "ch_helper_time_slots"

// input type for inserting data into table "ch_helper_time_slots"

// aggregate max on columns

// order by max() on columns of table "ch_helper_time_slots"

// aggregate min on columns

// order by min() on columns of table "ch_helper_time_slots"

// response of any mutation on the table "ch_helper_time_slots"

// input type for inserting object relation for remote table "ch_helper_time_slots"

// on conflict condition type for table "ch_helper_time_slots"

// ordering options when selecting data from "ch_helper_time_slots"

// primary key columns input for table: "ch_helper_time_slots"

// select columns of table "ch_helper_time_slots"

// input type for updating data in table "ch_helper_time_slots"

// aggregate stddev on columns

// order by stddev() on columns of table "ch_helper_time_slots"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "ch_helper_time_slots"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "ch_helper_time_slots"

// aggregate sum on columns

// order by sum() on columns of table "ch_helper_time_slots"

// update columns of table "ch_helper_time_slots"

// aggregate var_pop on columns

// order by var_pop() on columns of table "ch_helper_time_slots"

// aggregate var_samp on columns

// order by var_samp() on columns of table "ch_helper_time_slots"

// aggregate variance on columns

// order by variance() on columns of table "ch_helper_time_slots"

// update columns of table "ch_helper"

// aggregate var_pop on columns

// order by var_pop() on columns of table "ch_helper"

// aggregate var_samp on columns

// order by var_samp() on columns of table "ch_helper"

// aggregate variance on columns

// order by variance() on columns of table "ch_helper"

// columns and relationships of "ch_proposal"

// aggregated selection of "ch_proposal"

// aggregate fields of "ch_proposal"

// order by aggregate values of table "ch_proposal"

// append existing jsonb value of filtered columns with new jsonb value

// input type for inserting array relation for remote table "ch_proposal"

// aggregate avg on columns

// order by avg() on columns of table "ch_proposal"

// Boolean expression to filter rows from the table "ch_proposal". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "ch_proposal"

// delete the field or element with specified path (for JSON arrays, negative integers count from the end)

// delete the array element with specified index (negative integers count from the

// end). throws an error if top level container is not an array

// delete key/value pair or string element. key/value pairs are matched based on their key value

// input type for incrementing integer column in table "ch_proposal"

// input type for inserting data into table "ch_proposal"

// aggregate max on columns

// order by max() on columns of table "ch_proposal"

// aggregate min on columns

// order by min() on columns of table "ch_proposal"

// response of any mutation on the table "ch_proposal"

// input type for inserting object relation for remote table "ch_proposal"

// on conflict condition type for table "ch_proposal"

// ordering options when selecting data from "ch_proposal"

// primary key columns input for table: "ch_proposal"

// prepend existing jsonb value of filtered columns with new jsonb value

// select columns of table "ch_proposal"

// input type for updating data in table "ch_proposal"

// aggregate stddev on columns

// order by stddev() on columns of table "ch_proposal"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "ch_proposal"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "ch_proposal"

// aggregate sum on columns

// order by sum() on columns of table "ch_proposal"

// columns and relationships of "ch_proposal_time_slots"

// aggregated selection of "ch_proposal_time_slots"

// aggregate fields of "ch_proposal_time_slots"

// order by aggregate values of table "ch_proposal_time_slots"

// input type for inserting array relation for remote table "ch_proposal_time_slots"

// aggregate avg on columns

// order by avg() on columns of table "ch_proposal_time_slots"

// Boolean expression to filter rows from the table "ch_proposal_time_slots". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "ch_proposal_time_slots"

// input type for incrementing integer column in table "ch_proposal_time_slots"

// input type for inserting data into table "ch_proposal_time_slots"

// aggregate max on columns

// order by max() on columns of table "ch_proposal_time_slots"

// aggregate min on columns

// order by min() on columns of table "ch_proposal_time_slots"

// response of any mutation on the table "ch_proposal_time_slots"

// input type for inserting object relation for remote table "ch_proposal_time_slots"

// on conflict condition type for table "ch_proposal_time_slots"

// ordering options when selecting data from "ch_proposal_time_slots"

// primary key columns input for table: "ch_proposal_time_slots"

// select columns of table "ch_proposal_time_slots"

// input type for updating data in table "ch_proposal_time_slots"

// aggregate stddev on columns

// order by stddev() on columns of table "ch_proposal_time_slots"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "ch_proposal_time_slots"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "ch_proposal_time_slots"

// aggregate sum on columns

// order by sum() on columns of table "ch_proposal_time_slots"

// update columns of table "ch_proposal_time_slots"

// aggregate var_pop on columns

// order by var_pop() on columns of table "ch_proposal_time_slots"

// aggregate var_samp on columns

// order by var_samp() on columns of table "ch_proposal_time_slots"

// aggregate variance on columns

// order by variance() on columns of table "ch_proposal_time_slots"

// update columns of table "ch_proposal"

// aggregate var_pop on columns

// order by var_pop() on columns of table "ch_proposal"

// aggregate var_samp on columns

// order by var_samp() on columns of table "ch_proposal"

// aggregate variance on columns

// order by variance() on columns of table "ch_proposal"

// columns and relationships of "ch_room"

// aggregated selection of "ch_room"

// aggregate fields of "ch_room"

// order by aggregate values of table "ch_room"

// input type for inserting array relation for remote table "ch_room"

// aggregate avg on columns

// order by avg() on columns of table "ch_room"

// Boolean expression to filter rows from the table "ch_room". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "ch_room"

// input type for incrementing integer column in table "ch_room"

// input type for inserting data into table "ch_room"

// aggregate max on columns

// order by max() on columns of table "ch_room"

// aggregate min on columns

// order by min() on columns of table "ch_room"

// response of any mutation on the table "ch_room"

// input type for inserting object relation for remote table "ch_room"

// on conflict condition type for table "ch_room"

// ordering options when selecting data from "ch_room"

// primary key columns input for table: "ch_room"

// select columns of table "ch_room"

// input type for updating data in table "ch_room"

// aggregate stddev on columns

// order by stddev() on columns of table "ch_room"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "ch_room"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "ch_room"

// aggregate sum on columns

// order by sum() on columns of table "ch_room"

// update columns of table "ch_room"

// aggregate var_pop on columns

// order by var_pop() on columns of table "ch_room"

// aggregate var_samp on columns

// order by var_samp() on columns of table "ch_room"

// aggregate variance on columns

// order by variance() on columns of table "ch_room"

// columns and relationships of "ch_time_slot"

// aggregated selection of "ch_time_slot"

// aggregate fields of "ch_time_slot"

// order by aggregate values of table "ch_time_slot"

// input type for inserting array relation for remote table "ch_time_slot"

// aggregate avg on columns

// order by avg() on columns of table "ch_time_slot"

// Boolean expression to filter rows from the table "ch_time_slot". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "ch_time_slot"

// input type for incrementing integer column in table "ch_time_slot"

// input type for inserting data into table "ch_time_slot"

// aggregate max on columns

// order by max() on columns of table "ch_time_slot"

// aggregate min on columns

// order by min() on columns of table "ch_time_slot"

// response of any mutation on the table "ch_time_slot"

// input type for inserting object relation for remote table "ch_time_slot"

// on conflict condition type for table "ch_time_slot"

// ordering options when selecting data from "ch_time_slot"

// primary key columns input for table: "ch_time_slot"

// select columns of table "ch_time_slot"

// input type for updating data in table "ch_time_slot"

// aggregate stddev on columns

// order by stddev() on columns of table "ch_time_slot"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "ch_time_slot"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "ch_time_slot"

// aggregate sum on columns

// order by sum() on columns of table "ch_time_slot"

// update columns of table "ch_time_slot"

// aggregate var_pop on columns

// order by var_pop() on columns of table "ch_time_slot"

// aggregate var_samp on columns

// order by var_samp() on columns of table "ch_time_slot"

// aggregate variance on columns

// order by variance() on columns of table "ch_time_slot"

// columns and relationships of "ch_wait_list"

// aggregated selection of "ch_wait_list"

// aggregate fields of "ch_wait_list"

// order by aggregate values of table "ch_wait_list"

// input type for inserting array relation for remote table "ch_wait_list"

// aggregate avg on columns

// order by avg() on columns of table "ch_wait_list"

// Boolean expression to filter rows from the table "ch_wait_list". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "ch_wait_list"

// input type for incrementing integer column in table "ch_wait_list"

// input type for inserting data into table "ch_wait_list"

// aggregate max on columns

// order by max() on columns of table "ch_wait_list"

// aggregate min on columns

// order by min() on columns of table "ch_wait_list"

// response of any mutation on the table "ch_wait_list"

// input type for inserting object relation for remote table "ch_wait_list"

// on conflict condition type for table "ch_wait_list"

// ordering options when selecting data from "ch_wait_list"

// primary key columns input for table: "ch_wait_list"

// select columns of table "ch_wait_list"

// input type for updating data in table "ch_wait_list"

// aggregate stddev on columns

// order by stddev() on columns of table "ch_wait_list"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "ch_wait_list"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "ch_wait_list"

// aggregate sum on columns

// order by sum() on columns of table "ch_wait_list"

// update columns of table "ch_wait_list"

// aggregate var_pop on columns

// order by var_pop() on columns of table "ch_wait_list"

// aggregate var_samp on columns

// order by var_samp() on columns of table "ch_wait_list"

// aggregate variance on columns

// order by variance() on columns of table "ch_wait_list"

// columns and relationships of "cr_user"

// aggregated selection of "cr_user"

// aggregate fields of "cr_user"

// order by aggregate values of table "cr_user"

// input type for inserting array relation for remote table "cr_user"

// Boolean expression to filter rows from the table "cr_user". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "cr_user"

// input type for inserting data into table "cr_user"

// aggregate max on columns

// order by max() on columns of table "cr_user"

// aggregate min on columns

// order by min() on columns of table "cr_user"

// response of any mutation on the table "cr_user"

// input type for inserting object relation for remote table "cr_user"

// on conflict condition type for table "cr_user"

// ordering options when selecting data from "cr_user"

// primary key columns input for table: "cr_user"

// select columns of table "cr_user"

// input type for updating data in table "cr_user"

// update columns of table "cr_user"

// columns and relationships of "django_site"

// aggregated selection of "django_site"

// aggregate fields of "django_site"

// order by aggregate values of table "django_site"

// input type for inserting array relation for remote table "django_site"

// aggregate avg on columns

// order by avg() on columns of table "django_site"

// Boolean expression to filter rows from the table "django_site". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "django_site"

// input type for incrementing integer column in table "django_site"

// input type for inserting data into table "django_site"

// aggregate max on columns

// order by max() on columns of table "django_site"

// aggregate min on columns

// order by min() on columns of table "django_site"

// response of any mutation on the table "django_site"

// input type for inserting object relation for remote table "django_site"

// on conflict condition type for table "django_site"

// ordering options when selecting data from "django_site"

// primary key columns input for table: "django_site"

// select columns of table "django_site"

// input type for updating data in table "django_site"

// aggregate stddev on columns

// order by stddev() on columns of table "django_site"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "django_site"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "django_site"

// aggregate sum on columns

// order by sum() on columns of table "django_site"

// update columns of table "django_site"

// aggregate var_pop on columns

// order by var_pop() on columns of table "django_site"

// aggregate var_samp on columns

// order by var_samp() on columns of table "django_site"

// aggregate variance on columns

// order by variance() on columns of table "django_site"

// expression to compare columns of type Int. All fields are combined with logical 'AND'.

// expression to compare columns of type jsonb. All fields are combined with logical 'AND'.

// mutation root

// columns and relationships of "nb_guild"

// aggregated selection of "nb_guild"

// aggregate fields of "nb_guild"

// order by aggregate values of table "nb_guild"

// input type for inserting array relation for remote table "nb_guild"

// aggregate avg on columns

// order by avg() on columns of table "nb_guild"

// Boolean expression to filter rows from the table "nb_guild". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "nb_guild"

// input type for incrementing integer column in table "nb_guild"

// input type for inserting data into table "nb_guild"

// aggregate max on columns

// order by max() on columns of table "nb_guild"

// columns and relationships of "nb_guild_member"

// aggregated selection of "nb_guild_member"

// aggregate fields of "nb_guild_member"

// order by aggregate values of table "nb_guild_member"

// input type for inserting array relation for remote table "nb_guild_member"

// aggregate avg on columns

// order by avg() on columns of table "nb_guild_member"

// Boolean expression to filter rows from the table "nb_guild_member". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "nb_guild_member"

// input type for incrementing integer column in table "nb_guild_member"

// input type for inserting data into table "nb_guild_member"

// aggregate max on columns

// order by max() on columns of table "nb_guild_member"

// aggregate min on columns

// order by min() on columns of table "nb_guild_member"

// response of any mutation on the table "nb_guild_member"

// input type for inserting object relation for remote table "nb_guild_member"

// on conflict condition type for table "nb_guild_member"

// ordering options when selecting data from "nb_guild_member"

// primary key columns input for table: "nb_guild_member"

// select columns of table "nb_guild_member"

// input type for updating data in table "nb_guild_member"

// aggregate stddev on columns

// order by stddev() on columns of table "nb_guild_member"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "nb_guild_member"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "nb_guild_member"

// aggregate sum on columns

// order by sum() on columns of table "nb_guild_member"

// update columns of table "nb_guild_member"

// aggregate var_pop on columns

// order by var_pop() on columns of table "nb_guild_member"

// aggregate var_samp on columns

// order by var_samp() on columns of table "nb_guild_member"

// aggregate variance on columns

// order by variance() on columns of table "nb_guild_member"

// aggregate min on columns

// order by min() on columns of table "nb_guild"

// response of any mutation on the table "nb_guild"

// input type for inserting object relation for remote table "nb_guild"

// on conflict condition type for table "nb_guild"

// ordering options when selecting data from "nb_guild"

// primary key columns input for table: "nb_guild"

// select columns of table "nb_guild"

// input type for updating data in table "nb_guild"

// aggregate stddev on columns

// order by stddev() on columns of table "nb_guild"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "nb_guild"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "nb_guild"

// aggregate sum on columns

// order by sum() on columns of table "nb_guild"

// update columns of table "nb_guild"

// aggregate var_pop on columns

// order by var_pop() on columns of table "nb_guild"

// aggregate var_samp on columns

// order by var_samp() on columns of table "nb_guild"

// aggregate variance on columns

// order by variance() on columns of table "nb_guild"

// columns and relationships of "nb_meeting"

// aggregated selection of "nb_meeting"

// aggregate fields of "nb_meeting"

// order by aggregate values of table "nb_meeting"

// input type for inserting array relation for remote table "nb_meeting"

// aggregate avg on columns

// order by avg() on columns of table "nb_meeting"

// Boolean expression to filter rows from the table "nb_meeting". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "nb_meeting"

// input type for incrementing integer column in table "nb_meeting"

// input type for inserting data into table "nb_meeting"

// aggregate max on columns

// order by max() on columns of table "nb_meeting"

// aggregate min on columns

// order by min() on columns of table "nb_meeting"

// response of any mutation on the table "nb_meeting"

// input type for inserting object relation for remote table "nb_meeting"

// on conflict condition type for table "nb_meeting"

// ordering options when selecting data from "nb_meeting"

// columns and relationships of "nb_meeting_participants"

// aggregated selection of "nb_meeting_participants"

// aggregate fields of "nb_meeting_participants"

// order by aggregate values of table "nb_meeting_participants"

// input type for inserting array relation for remote table "nb_meeting_participants"

// aggregate avg on columns

// order by avg() on columns of table "nb_meeting_participants"

// Boolean expression to filter rows from the table "nb_meeting_participants". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "nb_meeting_participants"

// input type for incrementing integer column in table "nb_meeting_participants"

// input type for inserting data into table "nb_meeting_participants"

// aggregate max on columns

// order by max() on columns of table "nb_meeting_participants"

// aggregate min on columns

// order by min() on columns of table "nb_meeting_participants"

// response of any mutation on the table "nb_meeting_participants"

// input type for inserting object relation for remote table "nb_meeting_participants"

// on conflict condition type for table "nb_meeting_participants"

// ordering options when selecting data from "nb_meeting_participants"

// primary key columns input for table: "nb_meeting_participants"

// select columns of table "nb_meeting_participants"

// input type for updating data in table "nb_meeting_participants"

// aggregate stddev on columns

// order by stddev() on columns of table "nb_meeting_participants"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "nb_meeting_participants"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "nb_meeting_participants"

// aggregate sum on columns

// order by sum() on columns of table "nb_meeting_participants"

// update columns of table "nb_meeting_participants"

// aggregate var_pop on columns

// order by var_pop() on columns of table "nb_meeting_participants"

// aggregate var_samp on columns

// order by var_samp() on columns of table "nb_meeting_participants"

// aggregate variance on columns

// order by variance() on columns of table "nb_meeting_participants"

// primary key columns input for table: "nb_meeting"

// select columns of table "nb_meeting"

// input type for updating data in table "nb_meeting"

// aggregate stddev on columns

// order by stddev() on columns of table "nb_meeting"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "nb_meeting"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "nb_meeting"

// aggregate sum on columns

// order by sum() on columns of table "nb_meeting"

// update columns of table "nb_meeting"

// aggregate var_pop on columns

// order by var_pop() on columns of table "nb_meeting"

// aggregate var_samp on columns

// order by var_samp() on columns of table "nb_meeting"

// aggregate variance on columns

// order by variance() on columns of table "nb_meeting"

// columns and relationships of "nb_sphere"

// aggregated selection of "nb_sphere"

// aggregate fields of "nb_sphere"

// order by aggregate values of table "nb_sphere"

// append existing jsonb value of filtered columns with new jsonb value

// input type for inserting array relation for remote table "nb_sphere"

// aggregate avg on columns

// order by avg() on columns of table "nb_sphere"

// Boolean expression to filter rows from the table "nb_sphere". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "nb_sphere"

// delete the field or element with specified path (for JSON arrays, negative integers count from the end)

// delete the array element with specified index (negative integers count from the

// end). throws an error if top level container is not an array

// delete key/value pair or string element. key/value pairs are matched based on their key value

// input type for incrementing integer column in table "nb_sphere"

// input type for inserting data into table "nb_sphere"

// columns and relationships of "nb_sphere_managers"

// aggregated selection of "nb_sphere_managers"

// aggregate fields of "nb_sphere_managers"

// order by aggregate values of table "nb_sphere_managers"

// input type for inserting array relation for remote table "nb_sphere_managers"

// aggregate avg on columns

// order by avg() on columns of table "nb_sphere_managers"

// Boolean expression to filter rows from the table "nb_sphere_managers". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "nb_sphere_managers"

// input type for incrementing integer column in table "nb_sphere_managers"

// input type for inserting data into table "nb_sphere_managers"

// aggregate max on columns

// order by max() on columns of table "nb_sphere_managers"

// aggregate min on columns

// order by min() on columns of table "nb_sphere_managers"

// response of any mutation on the table "nb_sphere_managers"

// input type for inserting object relation for remote table "nb_sphere_managers"

// on conflict condition type for table "nb_sphere_managers"

// ordering options when selecting data from "nb_sphere_managers"

// primary key columns input for table: "nb_sphere_managers"

// select columns of table "nb_sphere_managers"

// input type for updating data in table "nb_sphere_managers"

// aggregate stddev on columns

// order by stddev() on columns of table "nb_sphere_managers"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "nb_sphere_managers"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "nb_sphere_managers"

// aggregate sum on columns

// order by sum() on columns of table "nb_sphere_managers"

// update columns of table "nb_sphere_managers"

// aggregate var_pop on columns

// order by var_pop() on columns of table "nb_sphere_managers"

// aggregate var_samp on columns

// order by var_samp() on columns of table "nb_sphere_managers"

// aggregate variance on columns

// order by variance() on columns of table "nb_sphere_managers"

// aggregate max on columns

// order by max() on columns of table "nb_sphere"

// aggregate min on columns

// order by min() on columns of table "nb_sphere"

// response of any mutation on the table "nb_sphere"

// input type for inserting object relation for remote table "nb_sphere"

// on conflict condition type for table "nb_sphere"

// ordering options when selecting data from "nb_sphere"

// primary key columns input for table: "nb_sphere"

// prepend existing jsonb value of filtered columns with new jsonb value

// select columns of table "nb_sphere"

// input type for updating data in table "nb_sphere"

// aggregate stddev on columns

// order by stddev() on columns of table "nb_sphere"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "nb_sphere"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "nb_sphere"

// aggregate sum on columns

// order by sum() on columns of table "nb_sphere"

// update columns of table "nb_sphere"

// aggregate var_pop on columns

// order by var_pop() on columns of table "nb_sphere"

// aggregate var_samp on columns

// order by var_samp() on columns of table "nb_sphere"

// aggregate variance on columns

// order by variance() on columns of table "nb_sphere"

// column ordering options

// query root

// expression to compare columns of type String. All fields are combined with logical 'AND'.

// subscription root

// expression to compare columns of type timestamptz. All fields are combined with logical 'AND'.

// expression to compare columns of type uuid. All fields are combined with logical 'AND'.

export type Boolean_comparison_exp = {
  _eq?: boolean;
  _gt?: boolean;
  _gte?: boolean;
  _in?: boolean[];
  _is_null?: boolean;
  _lt?: boolean;
  _lte?: boolean;
  _neq?: boolean;
  _nin?: boolean[];
};

export type ch_agenda_item = {
  __typename?: "ch_agenda_item";
  ch_helper?: ch_helper;
  ch_room?: ch_room;
  helper_confirmed: boolean;
  helper_id?: number;
  id: number;
  meeting_confirmed: boolean;
  meeting_id?: number;
  nb_meeting?: nb_meeting;
  room_id?: number;
  status: string;
};

export type ch_agenda_item_aggregate = {
  __typename?: "ch_agenda_item_aggregate";
  aggregate?: ch_agenda_item_aggregate_fields;
  nodes: ch_agenda_item[];
};

export type ch_agenda_item_aggregate_fields = {
  __typename?: "ch_agenda_item_aggregate_fields";
  avg?: ch_agenda_item_avg_fields;
  count?: number;
  max?: ch_agenda_item_max_fields;
  min?: ch_agenda_item_min_fields;
  stddev?: ch_agenda_item_stddev_fields;
  stddev_pop?: ch_agenda_item_stddev_pop_fields;
  stddev_samp?: ch_agenda_item_stddev_samp_fields;
  sum?: ch_agenda_item_sum_fields;
  var_pop?: ch_agenda_item_var_pop_fields;
  var_samp?: ch_agenda_item_var_samp_fields;
  variance?: ch_agenda_item_variance_fields;
};

export type ch_agenda_item_aggregate_order_by = {
  avg?: ch_agenda_item_avg_order_by;
  count?: order_by;
  max?: ch_agenda_item_max_order_by;
  min?: ch_agenda_item_min_order_by;
  stddev?: ch_agenda_item_stddev_order_by;
  stddev_pop?: ch_agenda_item_stddev_pop_order_by;
  stddev_samp?: ch_agenda_item_stddev_samp_order_by;
  sum?: ch_agenda_item_sum_order_by;
  var_pop?: ch_agenda_item_var_pop_order_by;
  var_samp?: ch_agenda_item_var_samp_order_by;
  variance?: ch_agenda_item_variance_order_by;
};

export type ch_agenda_item_arr_rel_insert_input = {
  data: ch_agenda_item_insert_input[];
  on_conflict?: ch_agenda_item_on_conflict;
};

export type ch_agenda_item_avg_fields = {
  __typename?: "ch_agenda_item_avg_fields";
  helper_id?: number;
  id?: number;
  meeting_id?: number;
  room_id?: number;
};

export type ch_agenda_item_avg_order_by = {
  helper_id?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  room_id?: order_by;
};

export type ch_agenda_item_bool_exp = {
  _and?: (ch_agenda_item_bool_exp | undefined)[];
  _not?: ch_agenda_item_bool_exp;
  _or?: (ch_agenda_item_bool_exp | undefined)[];
  ch_helper?: ch_helper_bool_exp;
  ch_room?: ch_room_bool_exp;
  helper_confirmed?: Boolean_comparison_exp;
  helper_id?: Int_comparison_exp;
  id?: Int_comparison_exp;
  meeting_confirmed?: Boolean_comparison_exp;
  meeting_id?: Int_comparison_exp;
  nb_meeting?: nb_meeting_bool_exp;
  room_id?: Int_comparison_exp;
  status?: String_comparison_exp;
};

export enum ch_agenda_item_constraint {
  ch_time_table_meeting_id_key = "ch_time_table_meeting_id_key",
  ch_time_table_pkey = "ch_time_table_pkey",
}

export type ch_agenda_item_inc_input = {
  helper_id?: number;
  id?: number;
  meeting_id?: number;
  room_id?: number;
};

export type ch_agenda_item_insert_input = {
  ch_helper?: ch_helper_obj_rel_insert_input;
  ch_room?: ch_room_obj_rel_insert_input;
  helper_confirmed?: boolean;
  helper_id?: number;
  id?: number;
  meeting_confirmed?: boolean;
  meeting_id?: number;
  nb_meeting?: nb_meeting_obj_rel_insert_input;
  room_id?: number;
  status?: string;
};

export type ch_agenda_item_max_fields = {
  __typename?: "ch_agenda_item_max_fields";
  helper_id?: number;
  id?: number;
  meeting_id?: number;
  room_id?: number;
  status?: string;
};

export type ch_agenda_item_max_order_by = {
  helper_id?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  room_id?: order_by;
  status?: order_by;
};

export type ch_agenda_item_min_fields = {
  __typename?: "ch_agenda_item_min_fields";
  helper_id?: number;
  id?: number;
  meeting_id?: number;
  room_id?: number;
  status?: string;
};

export type ch_agenda_item_min_order_by = {
  helper_id?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  room_id?: order_by;
  status?: order_by;
};

export type ch_agenda_item_mutation_response = {
  __typename?: "ch_agenda_item_mutation_response";
  affected_rows: number;
  returning: ch_agenda_item[];
};

export type ch_agenda_item_obj_rel_insert_input = {
  data: ch_agenda_item_insert_input;
  on_conflict?: ch_agenda_item_on_conflict;
};

export type ch_agenda_item_on_conflict = {
  constraint: ch_agenda_item_constraint;
  update_columns: ch_agenda_item_update_column[];
  where?: ch_agenda_item_bool_exp;
};

export type ch_agenda_item_order_by = {
  ch_helper?: ch_helper_order_by;
  ch_room?: ch_room_order_by;
  helper_confirmed?: order_by;
  helper_id?: order_by;
  id?: order_by;
  meeting_confirmed?: order_by;
  meeting_id?: order_by;
  nb_meeting?: nb_meeting_order_by;
  room_id?: order_by;
  status?: order_by;
};

export type ch_agenda_item_pk_columns_input = {
  id: number;
};

export enum ch_agenda_item_select_column {
  helper_confirmed = "helper_confirmed",
  helper_id = "helper_id",
  id = "id",
  meeting_confirmed = "meeting_confirmed",
  meeting_id = "meeting_id",
  room_id = "room_id",
  status = "status",
}

export type ch_agenda_item_set_input = {
  helper_confirmed?: boolean;
  helper_id?: number;
  id?: number;
  meeting_confirmed?: boolean;
  meeting_id?: number;
  room_id?: number;
  status?: string;
};

export type ch_agenda_item_stddev_fields = {
  __typename?: "ch_agenda_item_stddev_fields";
  helper_id?: number;
  id?: number;
  meeting_id?: number;
  room_id?: number;
};

export type ch_agenda_item_stddev_order_by = {
  helper_id?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  room_id?: order_by;
};

export type ch_agenda_item_stddev_pop_fields = {
  __typename?: "ch_agenda_item_stddev_pop_fields";
  helper_id?: number;
  id?: number;
  meeting_id?: number;
  room_id?: number;
};

export type ch_agenda_item_stddev_pop_order_by = {
  helper_id?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  room_id?: order_by;
};

export type ch_agenda_item_stddev_samp_fields = {
  __typename?: "ch_agenda_item_stddev_samp_fields";
  helper_id?: number;
  id?: number;
  meeting_id?: number;
  room_id?: number;
};

export type ch_agenda_item_stddev_samp_order_by = {
  helper_id?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  room_id?: order_by;
};

export type ch_agenda_item_sum_fields = {
  __typename?: "ch_agenda_item_sum_fields";
  helper_id?: number;
  id?: number;
  meeting_id?: number;
  room_id?: number;
};

export type ch_agenda_item_sum_order_by = {
  helper_id?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  room_id?: order_by;
};

export enum ch_agenda_item_update_column {
  helper_confirmed = "helper_confirmed",
  helper_id = "helper_id",
  id = "id",
  meeting_confirmed = "meeting_confirmed",
  meeting_id = "meeting_id",
  room_id = "room_id",
  status = "status",
}

export type ch_agenda_item_var_pop_fields = {
  __typename?: "ch_agenda_item_var_pop_fields";
  helper_id?: number;
  id?: number;
  meeting_id?: number;
  room_id?: number;
};

export type ch_agenda_item_var_pop_order_by = {
  helper_id?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  room_id?: order_by;
};

export type ch_agenda_item_var_samp_fields = {
  __typename?: "ch_agenda_item_var_samp_fields";
  helper_id?: number;
  id?: number;
  meeting_id?: number;
  room_id?: number;
};

export type ch_agenda_item_var_samp_order_by = {
  helper_id?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  room_id?: order_by;
};

export type ch_agenda_item_variance_fields = {
  __typename?: "ch_agenda_item_variance_fields";
  helper_id?: number;
  id?: number;
  meeting_id?: number;
  room_id?: number;
};

export type ch_agenda_item_variance_order_by = {
  helper_id?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  room_id?: order_by;
};

export type ch_festival = {
  __typename?: "ch_festival";
  ch_helpers: ch_helper[];
  ch_helpers_aggregate: ch_helper_aggregate;
  ch_rooms: ch_room[];
  ch_rooms_aggregate: ch_room_aggregate;
  ch_wait_lists: ch_wait_list[];
  ch_wait_lists_aggregate: ch_wait_list_aggregate;
  end_proposal?: timestamptz;
  end_time?: timestamptz;
  id: number;
  name: string;
  nb_sphere: nb_sphere;
  settings: jsonb;
  slug: string;
  sphere_id: number;
  start_proposal?: timestamptz;
  start_publication?: timestamptz;
  start_time?: timestamptz;
  status: string;
};

export type ch_festival_aggregate = {
  __typename?: "ch_festival_aggregate";
  aggregate?: ch_festival_aggregate_fields;
  nodes: ch_festival[];
};

export type ch_festival_aggregate_fields = {
  __typename?: "ch_festival_aggregate_fields";
  avg?: ch_festival_avg_fields;
  count?: number;
  max?: ch_festival_max_fields;
  min?: ch_festival_min_fields;
  stddev?: ch_festival_stddev_fields;
  stddev_pop?: ch_festival_stddev_pop_fields;
  stddev_samp?: ch_festival_stddev_samp_fields;
  sum?: ch_festival_sum_fields;
  var_pop?: ch_festival_var_pop_fields;
  var_samp?: ch_festival_var_samp_fields;
  variance?: ch_festival_variance_fields;
};

export type ch_festival_aggregate_order_by = {
  avg?: ch_festival_avg_order_by;
  count?: order_by;
  max?: ch_festival_max_order_by;
  min?: ch_festival_min_order_by;
  stddev?: ch_festival_stddev_order_by;
  stddev_pop?: ch_festival_stddev_pop_order_by;
  stddev_samp?: ch_festival_stddev_samp_order_by;
  sum?: ch_festival_sum_order_by;
  var_pop?: ch_festival_var_pop_order_by;
  var_samp?: ch_festival_var_samp_order_by;
  variance?: ch_festival_variance_order_by;
};

export type ch_festival_append_input = {
  settings?: jsonb;
};

export type ch_festival_arr_rel_insert_input = {
  data: ch_festival_insert_input[];
  on_conflict?: ch_festival_on_conflict;
};

export type ch_festival_avg_fields = {
  __typename?: "ch_festival_avg_fields";
  id?: number;
  sphere_id?: number;
};

export type ch_festival_avg_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export type ch_festival_bool_exp = {
  _and?: (ch_festival_bool_exp | undefined)[];
  _not?: ch_festival_bool_exp;
  _or?: (ch_festival_bool_exp | undefined)[];
  ch_helpers?: ch_helper_bool_exp;
  ch_rooms?: ch_room_bool_exp;
  ch_wait_lists?: ch_wait_list_bool_exp;
  end_proposal?: timestamptz_comparison_exp;
  end_time?: timestamptz_comparison_exp;
  id?: Int_comparison_exp;
  name?: String_comparison_exp;
  nb_sphere?: nb_sphere_bool_exp;
  settings?: jsonb_comparison_exp;
  slug?: String_comparison_exp;
  sphere_id?: Int_comparison_exp;
  start_proposal?: timestamptz_comparison_exp;
  start_publication?: timestamptz_comparison_exp;
  start_time?: timestamptz_comparison_exp;
  status?: String_comparison_exp;
};

export enum ch_festival_constraint {
  ch_festival_pkey = "ch_festival_pkey",
  festival_has_unique_slug_and_sphere = "festival_has_unique_slug_and_sphere",
}

export type ch_festival_delete_at_path_input = {
  settings?: (string | undefined)[];
};

export type ch_festival_delete_elem_input = {
  settings?: number;
};

export type ch_festival_delete_key_input = {
  settings?: string;
};

export type ch_festival_inc_input = {
  id?: number;
  sphere_id?: number;
};

export type ch_festival_insert_input = {
  ch_helpers?: ch_helper_arr_rel_insert_input;
  ch_rooms?: ch_room_arr_rel_insert_input;
  ch_wait_lists?: ch_wait_list_arr_rel_insert_input;
  end_proposal?: timestamptz;
  end_time?: timestamptz;
  id?: number;
  name?: string;
  nb_sphere?: nb_sphere_obj_rel_insert_input;
  settings?: jsonb;
  slug?: string;
  sphere_id?: number;
  start_proposal?: timestamptz;
  start_publication?: timestamptz;
  start_time?: timestamptz;
  status?: string;
};

export type ch_festival_max_fields = {
  __typename?: "ch_festival_max_fields";
  end_proposal?: timestamptz;
  end_time?: timestamptz;
  id?: number;
  name?: string;
  slug?: string;
  sphere_id?: number;
  start_proposal?: timestamptz;
  start_publication?: timestamptz;
  start_time?: timestamptz;
  status?: string;
};

export type ch_festival_max_order_by = {
  end_proposal?: order_by;
  end_time?: order_by;
  id?: order_by;
  name?: order_by;
  slug?: order_by;
  sphere_id?: order_by;
  start_proposal?: order_by;
  start_publication?: order_by;
  start_time?: order_by;
  status?: order_by;
};

export type ch_festival_min_fields = {
  __typename?: "ch_festival_min_fields";
  end_proposal?: timestamptz;
  end_time?: timestamptz;
  id?: number;
  name?: string;
  slug?: string;
  sphere_id?: number;
  start_proposal?: timestamptz;
  start_publication?: timestamptz;
  start_time?: timestamptz;
  status?: string;
};

export type ch_festival_min_order_by = {
  end_proposal?: order_by;
  end_time?: order_by;
  id?: order_by;
  name?: order_by;
  slug?: order_by;
  sphere_id?: order_by;
  start_proposal?: order_by;
  start_publication?: order_by;
  start_time?: order_by;
  status?: order_by;
};

export type ch_festival_mutation_response = {
  __typename?: "ch_festival_mutation_response";
  affected_rows: number;
  returning: ch_festival[];
};

export type ch_festival_obj_rel_insert_input = {
  data: ch_festival_insert_input;
  on_conflict?: ch_festival_on_conflict;
};

export type ch_festival_on_conflict = {
  constraint: ch_festival_constraint;
  update_columns: ch_festival_update_column[];
  where?: ch_festival_bool_exp;
};

export type ch_festival_order_by = {
  ch_helpers_aggregate?: ch_helper_aggregate_order_by;
  ch_rooms_aggregate?: ch_room_aggregate_order_by;
  ch_wait_lists_aggregate?: ch_wait_list_aggregate_order_by;
  end_proposal?: order_by;
  end_time?: order_by;
  id?: order_by;
  name?: order_by;
  nb_sphere?: nb_sphere_order_by;
  settings?: order_by;
  slug?: order_by;
  sphere_id?: order_by;
  start_proposal?: order_by;
  start_publication?: order_by;
  start_time?: order_by;
  status?: order_by;
};

export type ch_festival_pk_columns_input = {
  id: number;
};

export type ch_festival_prepend_input = {
  settings?: jsonb;
};

export enum ch_festival_select_column {
  end_proposal = "end_proposal",
  end_time = "end_time",
  id = "id",
  name = "name",
  settings = "settings",
  slug = "slug",
  sphere_id = "sphere_id",
  start_proposal = "start_proposal",
  start_publication = "start_publication",
  start_time = "start_time",
  status = "status",
}

export type ch_festival_set_input = {
  end_proposal?: timestamptz;
  end_time?: timestamptz;
  id?: number;
  name?: string;
  settings?: jsonb;
  slug?: string;
  sphere_id?: number;
  start_proposal?: timestamptz;
  start_publication?: timestamptz;
  start_time?: timestamptz;
  status?: string;
};

export type ch_festival_stddev_fields = {
  __typename?: "ch_festival_stddev_fields";
  id?: number;
  sphere_id?: number;
};

export type ch_festival_stddev_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export type ch_festival_stddev_pop_fields = {
  __typename?: "ch_festival_stddev_pop_fields";
  id?: number;
  sphere_id?: number;
};

export type ch_festival_stddev_pop_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export type ch_festival_stddev_samp_fields = {
  __typename?: "ch_festival_stddev_samp_fields";
  id?: number;
  sphere_id?: number;
};

export type ch_festival_stddev_samp_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export type ch_festival_sum_fields = {
  __typename?: "ch_festival_sum_fields";
  id?: number;
  sphere_id?: number;
};

export type ch_festival_sum_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export enum ch_festival_update_column {
  end_proposal = "end_proposal",
  end_time = "end_time",
  id = "id",
  name = "name",
  settings = "settings",
  slug = "slug",
  sphere_id = "sphere_id",
  start_proposal = "start_proposal",
  start_publication = "start_publication",
  start_time = "start_time",
  status = "status",
}

export type ch_festival_var_pop_fields = {
  __typename?: "ch_festival_var_pop_fields";
  id?: number;
  sphere_id?: number;
};

export type ch_festival_var_pop_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export type ch_festival_var_samp_fields = {
  __typename?: "ch_festival_var_samp_fields";
  id?: number;
  sphere_id?: number;
};

export type ch_festival_var_samp_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export type ch_festival_variance_fields = {
  __typename?: "ch_festival_variance_fields";
  id?: number;
  sphere_id?: number;
};

export type ch_festival_variance_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export type ch_helper = {
  __typename?: "ch_helper";
  ch_agenda_items: ch_agenda_item[];
  ch_agenda_items_aggregate: ch_agenda_item_aggregate;
  ch_festival: ch_festival;
  ch_helper_time_slots: ch_helper_time_slots[];
  ch_helper_time_slots_aggregate: ch_helper_time_slots_aggregate;
  cr_user: cr_user;
  festival_id: number;
  id: number;
  user_id: uuid;
};

export type ch_helper_aggregate = {
  __typename?: "ch_helper_aggregate";
  aggregate?: ch_helper_aggregate_fields;
  nodes: ch_helper[];
};

export type ch_helper_aggregate_fields = {
  __typename?: "ch_helper_aggregate_fields";
  avg?: ch_helper_avg_fields;
  count?: number;
  max?: ch_helper_max_fields;
  min?: ch_helper_min_fields;
  stddev?: ch_helper_stddev_fields;
  stddev_pop?: ch_helper_stddev_pop_fields;
  stddev_samp?: ch_helper_stddev_samp_fields;
  sum?: ch_helper_sum_fields;
  var_pop?: ch_helper_var_pop_fields;
  var_samp?: ch_helper_var_samp_fields;
  variance?: ch_helper_variance_fields;
};

export type ch_helper_aggregate_order_by = {
  avg?: ch_helper_avg_order_by;
  count?: order_by;
  max?: ch_helper_max_order_by;
  min?: ch_helper_min_order_by;
  stddev?: ch_helper_stddev_order_by;
  stddev_pop?: ch_helper_stddev_pop_order_by;
  stddev_samp?: ch_helper_stddev_samp_order_by;
  sum?: ch_helper_sum_order_by;
  var_pop?: ch_helper_var_pop_order_by;
  var_samp?: ch_helper_var_samp_order_by;
  variance?: ch_helper_variance_order_by;
};

export type ch_helper_arr_rel_insert_input = {
  data: ch_helper_insert_input[];
  on_conflict?: ch_helper_on_conflict;
};

export type ch_helper_avg_fields = {
  __typename?: "ch_helper_avg_fields";
  festival_id?: number;
  id?: number;
};

export type ch_helper_avg_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_helper_bool_exp = {
  _and?: (ch_helper_bool_exp | undefined)[];
  _not?: ch_helper_bool_exp;
  _or?: (ch_helper_bool_exp | undefined)[];
  ch_agenda_items?: ch_agenda_item_bool_exp;
  ch_festival?: ch_festival_bool_exp;
  ch_helper_time_slots?: ch_helper_time_slots_bool_exp;
  cr_user?: cr_user_bool_exp;
  festival_id?: Int_comparison_exp;
  id?: Int_comparison_exp;
  user_id?: uuid_comparison_exp;
};

export enum ch_helper_constraint {
  ch_helper_pkey = "ch_helper_pkey",
  helper_has_unique_user_and_festival = "helper_has_unique_user_and_festival",
}

export type ch_helper_inc_input = {
  festival_id?: number;
  id?: number;
};

export type ch_helper_insert_input = {
  ch_agenda_items?: ch_agenda_item_arr_rel_insert_input;
  ch_festival?: ch_festival_obj_rel_insert_input;
  ch_helper_time_slots?: ch_helper_time_slots_arr_rel_insert_input;
  cr_user?: cr_user_obj_rel_insert_input;
  festival_id?: number;
  id?: number;
  user_id?: uuid;
};

export type ch_helper_max_fields = {
  __typename?: "ch_helper_max_fields";
  festival_id?: number;
  id?: number;
  user_id?: uuid;
};

export type ch_helper_max_order_by = {
  festival_id?: order_by;
  id?: order_by;
  user_id?: order_by;
};

export type ch_helper_min_fields = {
  __typename?: "ch_helper_min_fields";
  festival_id?: number;
  id?: number;
  user_id?: uuid;
};

export type ch_helper_min_order_by = {
  festival_id?: order_by;
  id?: order_by;
  user_id?: order_by;
};

export type ch_helper_mutation_response = {
  __typename?: "ch_helper_mutation_response";
  affected_rows: number;
  returning: ch_helper[];
};

export type ch_helper_obj_rel_insert_input = {
  data: ch_helper_insert_input;
  on_conflict?: ch_helper_on_conflict;
};

export type ch_helper_on_conflict = {
  constraint: ch_helper_constraint;
  update_columns: ch_helper_update_column[];
  where?: ch_helper_bool_exp;
};

export type ch_helper_order_by = {
  ch_agenda_items_aggregate?: ch_agenda_item_aggregate_order_by;
  ch_festival?: ch_festival_order_by;
  ch_helper_time_slots_aggregate?: ch_helper_time_slots_aggregate_order_by;
  cr_user?: cr_user_order_by;
  festival_id?: order_by;
  id?: order_by;
  user_id?: order_by;
};

export type ch_helper_pk_columns_input = {
  id: number;
};

export enum ch_helper_select_column {
  festival_id = "festival_id",
  id = "id",
  user_id = "user_id",
}

export type ch_helper_set_input = {
  festival_id?: number;
  id?: number;
  user_id?: uuid;
};

export type ch_helper_stddev_fields = {
  __typename?: "ch_helper_stddev_fields";
  festival_id?: number;
  id?: number;
};

export type ch_helper_stddev_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_helper_stddev_pop_fields = {
  __typename?: "ch_helper_stddev_pop_fields";
  festival_id?: number;
  id?: number;
};

export type ch_helper_stddev_pop_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_helper_stddev_samp_fields = {
  __typename?: "ch_helper_stddev_samp_fields";
  festival_id?: number;
  id?: number;
};

export type ch_helper_stddev_samp_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_helper_sum_fields = {
  __typename?: "ch_helper_sum_fields";
  festival_id?: number;
  id?: number;
};

export type ch_helper_sum_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_helper_time_slots = {
  __typename?: "ch_helper_time_slots";
  ch_helper: ch_helper;
  ch_time_slot: ch_time_slot;
  helper_id: number;
  id: number;
  timeslot_id: number;
};

export type ch_helper_time_slots_aggregate = {
  __typename?: "ch_helper_time_slots_aggregate";
  aggregate?: ch_helper_time_slots_aggregate_fields;
  nodes: ch_helper_time_slots[];
};

export type ch_helper_time_slots_aggregate_fields = {
  __typename?: "ch_helper_time_slots_aggregate_fields";
  avg?: ch_helper_time_slots_avg_fields;
  count?: number;
  max?: ch_helper_time_slots_max_fields;
  min?: ch_helper_time_slots_min_fields;
  stddev?: ch_helper_time_slots_stddev_fields;
  stddev_pop?: ch_helper_time_slots_stddev_pop_fields;
  stddev_samp?: ch_helper_time_slots_stddev_samp_fields;
  sum?: ch_helper_time_slots_sum_fields;
  var_pop?: ch_helper_time_slots_var_pop_fields;
  var_samp?: ch_helper_time_slots_var_samp_fields;
  variance?: ch_helper_time_slots_variance_fields;
};

export type ch_helper_time_slots_aggregate_order_by = {
  avg?: ch_helper_time_slots_avg_order_by;
  count?: order_by;
  max?: ch_helper_time_slots_max_order_by;
  min?: ch_helper_time_slots_min_order_by;
  stddev?: ch_helper_time_slots_stddev_order_by;
  stddev_pop?: ch_helper_time_slots_stddev_pop_order_by;
  stddev_samp?: ch_helper_time_slots_stddev_samp_order_by;
  sum?: ch_helper_time_slots_sum_order_by;
  var_pop?: ch_helper_time_slots_var_pop_order_by;
  var_samp?: ch_helper_time_slots_var_samp_order_by;
  variance?: ch_helper_time_slots_variance_order_by;
};

export type ch_helper_time_slots_arr_rel_insert_input = {
  data: ch_helper_time_slots_insert_input[];
  on_conflict?: ch_helper_time_slots_on_conflict;
};

export type ch_helper_time_slots_avg_fields = {
  __typename?: "ch_helper_time_slots_avg_fields";
  helper_id?: number;
  id?: number;
  timeslot_id?: number;
};

export type ch_helper_time_slots_avg_order_by = {
  helper_id?: order_by;
  id?: order_by;
  timeslot_id?: order_by;
};

export type ch_helper_time_slots_bool_exp = {
  _and?: (ch_helper_time_slots_bool_exp | undefined)[];
  _not?: ch_helper_time_slots_bool_exp;
  _or?: (ch_helper_time_slots_bool_exp | undefined)[];
  ch_helper?: ch_helper_bool_exp;
  ch_time_slot?: ch_time_slot_bool_exp;
  helper_id?: Int_comparison_exp;
  id?: Int_comparison_exp;
  timeslot_id?: Int_comparison_exp;
};

export enum ch_helper_time_slots_constraint {
  ch_helper_time_slots_helper_id_timeslot_id_d9474b92_uniq = "ch_helper_time_slots_helper_id_timeslot_id_d9474b92_uniq",
  ch_helper_time_slots_pkey = "ch_helper_time_slots_pkey",
}

export type ch_helper_time_slots_inc_input = {
  helper_id?: number;
  id?: number;
  timeslot_id?: number;
};

export type ch_helper_time_slots_insert_input = {
  ch_helper?: ch_helper_obj_rel_insert_input;
  ch_time_slot?: ch_time_slot_obj_rel_insert_input;
  helper_id?: number;
  id?: number;
  timeslot_id?: number;
};

export type ch_helper_time_slots_max_fields = {
  __typename?: "ch_helper_time_slots_max_fields";
  helper_id?: number;
  id?: number;
  timeslot_id?: number;
};

export type ch_helper_time_slots_max_order_by = {
  helper_id?: order_by;
  id?: order_by;
  timeslot_id?: order_by;
};

export type ch_helper_time_slots_min_fields = {
  __typename?: "ch_helper_time_slots_min_fields";
  helper_id?: number;
  id?: number;
  timeslot_id?: number;
};

export type ch_helper_time_slots_min_order_by = {
  helper_id?: order_by;
  id?: order_by;
  timeslot_id?: order_by;
};

export type ch_helper_time_slots_mutation_response = {
  __typename?: "ch_helper_time_slots_mutation_response";
  affected_rows: number;
  returning: ch_helper_time_slots[];
};

export type ch_helper_time_slots_obj_rel_insert_input = {
  data: ch_helper_time_slots_insert_input;
  on_conflict?: ch_helper_time_slots_on_conflict;
};

export type ch_helper_time_slots_on_conflict = {
  constraint: ch_helper_time_slots_constraint;
  update_columns: ch_helper_time_slots_update_column[];
  where?: ch_helper_time_slots_bool_exp;
};

export type ch_helper_time_slots_order_by = {
  ch_helper?: ch_helper_order_by;
  ch_time_slot?: ch_time_slot_order_by;
  helper_id?: order_by;
  id?: order_by;
  timeslot_id?: order_by;
};

export type ch_helper_time_slots_pk_columns_input = {
  id: number;
};

export enum ch_helper_time_slots_select_column {
  helper_id = "helper_id",
  id = "id",
  timeslot_id = "timeslot_id",
}

export type ch_helper_time_slots_set_input = {
  helper_id?: number;
  id?: number;
  timeslot_id?: number;
};

export type ch_helper_time_slots_stddev_fields = {
  __typename?: "ch_helper_time_slots_stddev_fields";
  helper_id?: number;
  id?: number;
  timeslot_id?: number;
};

export type ch_helper_time_slots_stddev_order_by = {
  helper_id?: order_by;
  id?: order_by;
  timeslot_id?: order_by;
};

export type ch_helper_time_slots_stddev_pop_fields = {
  __typename?: "ch_helper_time_slots_stddev_pop_fields";
  helper_id?: number;
  id?: number;
  timeslot_id?: number;
};

export type ch_helper_time_slots_stddev_pop_order_by = {
  helper_id?: order_by;
  id?: order_by;
  timeslot_id?: order_by;
};

export type ch_helper_time_slots_stddev_samp_fields = {
  __typename?: "ch_helper_time_slots_stddev_samp_fields";
  helper_id?: number;
  id?: number;
  timeslot_id?: number;
};

export type ch_helper_time_slots_stddev_samp_order_by = {
  helper_id?: order_by;
  id?: order_by;
  timeslot_id?: order_by;
};

export type ch_helper_time_slots_sum_fields = {
  __typename?: "ch_helper_time_slots_sum_fields";
  helper_id?: number;
  id?: number;
  timeslot_id?: number;
};

export type ch_helper_time_slots_sum_order_by = {
  helper_id?: order_by;
  id?: order_by;
  timeslot_id?: order_by;
};

export enum ch_helper_time_slots_update_column {
  helper_id = "helper_id",
  id = "id",
  timeslot_id = "timeslot_id",
}

export type ch_helper_time_slots_var_pop_fields = {
  __typename?: "ch_helper_time_slots_var_pop_fields";
  helper_id?: number;
  id?: number;
  timeslot_id?: number;
};

export type ch_helper_time_slots_var_pop_order_by = {
  helper_id?: order_by;
  id?: order_by;
  timeslot_id?: order_by;
};

export type ch_helper_time_slots_var_samp_fields = {
  __typename?: "ch_helper_time_slots_var_samp_fields";
  helper_id?: number;
  id?: number;
  timeslot_id?: number;
};

export type ch_helper_time_slots_var_samp_order_by = {
  helper_id?: order_by;
  id?: order_by;
  timeslot_id?: order_by;
};

export type ch_helper_time_slots_variance_fields = {
  __typename?: "ch_helper_time_slots_variance_fields";
  helper_id?: number;
  id?: number;
  timeslot_id?: number;
};

export type ch_helper_time_slots_variance_order_by = {
  helper_id?: order_by;
  id?: order_by;
  timeslot_id?: order_by;
};

export enum ch_helper_update_column {
  festival_id = "festival_id",
  id = "id",
  user_id = "user_id",
}

export type ch_helper_var_pop_fields = {
  __typename?: "ch_helper_var_pop_fields";
  festival_id?: number;
  id?: number;
};

export type ch_helper_var_pop_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_helper_var_samp_fields = {
  __typename?: "ch_helper_var_samp_fields";
  festival_id?: number;
  id?: number;
};

export type ch_helper_var_samp_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_helper_variance_fields = {
  __typename?: "ch_helper_variance_fields";
  festival_id?: number;
  id?: number;
};

export type ch_helper_variance_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_proposal = {
  __typename?: "ch_proposal";
  ch_proposal_time_slots: ch_proposal_time_slots[];
  ch_proposal_time_slots_aggregate: ch_proposal_time_slots_aggregate;
  ch_wait_list: ch_wait_list;
  city: string;
  club: string;
  created_at: timestamptz;
  description: string;
  duration_minutes: number;
  id: number;
  meeting?: nb_meeting;
  meeting_id?: number;
  name: string;
  needs: string;
  other_contact: jsonb;
  other_data: jsonb;
  phone: string;
  speaker?: cr_user;
  speaker_name: string;
  speaker_user_id?: uuid;
  status: string;
  topic: string;
  waitlist_id: number;
};

export type ch_proposal_aggregate = {
  __typename?: "ch_proposal_aggregate";
  aggregate?: ch_proposal_aggregate_fields;
  nodes: ch_proposal[];
};

export type ch_proposal_aggregate_fields = {
  __typename?: "ch_proposal_aggregate_fields";
  avg?: ch_proposal_avg_fields;
  count?: number;
  max?: ch_proposal_max_fields;
  min?: ch_proposal_min_fields;
  stddev?: ch_proposal_stddev_fields;
  stddev_pop?: ch_proposal_stddev_pop_fields;
  stddev_samp?: ch_proposal_stddev_samp_fields;
  sum?: ch_proposal_sum_fields;
  var_pop?: ch_proposal_var_pop_fields;
  var_samp?: ch_proposal_var_samp_fields;
  variance?: ch_proposal_variance_fields;
};

export type ch_proposal_aggregate_order_by = {
  avg?: ch_proposal_avg_order_by;
  count?: order_by;
  max?: ch_proposal_max_order_by;
  min?: ch_proposal_min_order_by;
  stddev?: ch_proposal_stddev_order_by;
  stddev_pop?: ch_proposal_stddev_pop_order_by;
  stddev_samp?: ch_proposal_stddev_samp_order_by;
  sum?: ch_proposal_sum_order_by;
  var_pop?: ch_proposal_var_pop_order_by;
  var_samp?: ch_proposal_var_samp_order_by;
  variance?: ch_proposal_variance_order_by;
};

export type ch_proposal_append_input = {
  other_contact?: jsonb;
  other_data?: jsonb;
};

export type ch_proposal_arr_rel_insert_input = {
  data: ch_proposal_insert_input[];
  on_conflict?: ch_proposal_on_conflict;
};

export type ch_proposal_avg_fields = {
  __typename?: "ch_proposal_avg_fields";
  duration_minutes?: number;
  id?: number;
  meeting_id?: number;
  waitlist_id?: number;
};

export type ch_proposal_avg_order_by = {
  duration_minutes?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  waitlist_id?: order_by;
};

export type ch_proposal_bool_exp = {
  _and?: (ch_proposal_bool_exp | undefined)[];
  _not?: ch_proposal_bool_exp;
  _or?: (ch_proposal_bool_exp | undefined)[];
  ch_proposal_time_slots?: ch_proposal_time_slots_bool_exp;
  ch_wait_list?: ch_wait_list_bool_exp;
  city?: String_comparison_exp;
  club?: String_comparison_exp;
  created_at?: timestamptz_comparison_exp;
  description?: String_comparison_exp;
  duration_minutes?: Int_comparison_exp;
  id?: Int_comparison_exp;
  meeting?: nb_meeting_bool_exp;
  meeting_id?: Int_comparison_exp;
  name?: String_comparison_exp;
  needs?: String_comparison_exp;
  other_contact?: jsonb_comparison_exp;
  other_data?: jsonb_comparison_exp;
  phone?: String_comparison_exp;
  speaker?: cr_user_bool_exp;
  speaker_name?: String_comparison_exp;
  speaker_user_id?: uuid_comparison_exp;
  status?: String_comparison_exp;
  topic?: String_comparison_exp;
  waitlist_id?: Int_comparison_exp;
};

export enum ch_proposal_constraint {
  ch_proposal_meeting_id_key = "ch_proposal_meeting_id_key",
  ch_proposal_pkey = "ch_proposal_pkey",
}

export type ch_proposal_delete_at_path_input = {
  other_contact?: (string | undefined)[];
  other_data?: (string | undefined)[];
};

export type ch_proposal_delete_elem_input = {
  other_contact?: number;
  other_data?: number;
};

export type ch_proposal_delete_key_input = {
  other_contact?: string;
  other_data?: string;
};

export type ch_proposal_inc_input = {
  duration_minutes?: number;
  id?: number;
  meeting_id?: number;
  waitlist_id?: number;
};

export type ch_proposal_insert_input = {
  ch_proposal_time_slots?: ch_proposal_time_slots_arr_rel_insert_input;
  ch_wait_list?: ch_wait_list_obj_rel_insert_input;
  city?: string;
  club?: string;
  created_at?: timestamptz;
  description?: string;
  duration_minutes?: number;
  id?: number;
  meeting?: nb_meeting_obj_rel_insert_input;
  meeting_id?: number;
  name?: string;
  needs?: string;
  other_contact?: jsonb;
  other_data?: jsonb;
  phone?: string;
  speaker?: cr_user_obj_rel_insert_input;
  speaker_name?: string;
  speaker_user_id?: uuid;
  status?: string;
  topic?: string;
  waitlist_id?: number;
};

export type ch_proposal_max_fields = {
  __typename?: "ch_proposal_max_fields";
  city?: string;
  club?: string;
  created_at?: timestamptz;
  description?: string;
  duration_minutes?: number;
  id?: number;
  meeting_id?: number;
  name?: string;
  needs?: string;
  phone?: string;
  speaker_name?: string;
  speaker_user_id?: uuid;
  status?: string;
  topic?: string;
  waitlist_id?: number;
};

export type ch_proposal_max_order_by = {
  city?: order_by;
  club?: order_by;
  created_at?: order_by;
  description?: order_by;
  duration_minutes?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  name?: order_by;
  needs?: order_by;
  phone?: order_by;
  speaker_name?: order_by;
  speaker_user_id?: order_by;
  status?: order_by;
  topic?: order_by;
  waitlist_id?: order_by;
};

export type ch_proposal_min_fields = {
  __typename?: "ch_proposal_min_fields";
  city?: string;
  club?: string;
  created_at?: timestamptz;
  description?: string;
  duration_minutes?: number;
  id?: number;
  meeting_id?: number;
  name?: string;
  needs?: string;
  phone?: string;
  speaker_name?: string;
  speaker_user_id?: uuid;
  status?: string;
  topic?: string;
  waitlist_id?: number;
};

export type ch_proposal_min_order_by = {
  city?: order_by;
  club?: order_by;
  created_at?: order_by;
  description?: order_by;
  duration_minutes?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  name?: order_by;
  needs?: order_by;
  phone?: order_by;
  speaker_name?: order_by;
  speaker_user_id?: order_by;
  status?: order_by;
  topic?: order_by;
  waitlist_id?: order_by;
};

export type ch_proposal_mutation_response = {
  __typename?: "ch_proposal_mutation_response";
  affected_rows: number;
  returning: ch_proposal[];
};

export type ch_proposal_obj_rel_insert_input = {
  data: ch_proposal_insert_input;
  on_conflict?: ch_proposal_on_conflict;
};

export type ch_proposal_on_conflict = {
  constraint: ch_proposal_constraint;
  update_columns: ch_proposal_update_column[];
  where?: ch_proposal_bool_exp;
};

export type ch_proposal_order_by = {
  ch_proposal_time_slots_aggregate?: ch_proposal_time_slots_aggregate_order_by;
  ch_wait_list?: ch_wait_list_order_by;
  city?: order_by;
  club?: order_by;
  created_at?: order_by;
  description?: order_by;
  duration_minutes?: order_by;
  id?: order_by;
  meeting?: nb_meeting_order_by;
  meeting_id?: order_by;
  name?: order_by;
  needs?: order_by;
  other_contact?: order_by;
  other_data?: order_by;
  phone?: order_by;
  speaker?: cr_user_order_by;
  speaker_name?: order_by;
  speaker_user_id?: order_by;
  status?: order_by;
  topic?: order_by;
  waitlist_id?: order_by;
};

export type ch_proposal_pk_columns_input = {
  id: number;
};

export type ch_proposal_prepend_input = {
  other_contact?: jsonb;
  other_data?: jsonb;
};

export enum ch_proposal_select_column {
  city = "city",
  club = "club",
  created_at = "created_at",
  description = "description",
  duration_minutes = "duration_minutes",
  id = "id",
  meeting_id = "meeting_id",
  name = "name",
  needs = "needs",
  other_contact = "other_contact",
  other_data = "other_data",
  phone = "phone",
  speaker_name = "speaker_name",
  speaker_user_id = "speaker_user_id",
  status = "status",
  topic = "topic",
  waitlist_id = "waitlist_id",
}

export type ch_proposal_set_input = {
  city?: string;
  club?: string;
  created_at?: timestamptz;
  description?: string;
  duration_minutes?: number;
  id?: number;
  meeting_id?: number;
  name?: string;
  needs?: string;
  other_contact?: jsonb;
  other_data?: jsonb;
  phone?: string;
  speaker_name?: string;
  speaker_user_id?: uuid;
  status?: string;
  topic?: string;
  waitlist_id?: number;
};

export type ch_proposal_stddev_fields = {
  __typename?: "ch_proposal_stddev_fields";
  duration_minutes?: number;
  id?: number;
  meeting_id?: number;
  waitlist_id?: number;
};

export type ch_proposal_stddev_order_by = {
  duration_minutes?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  waitlist_id?: order_by;
};

export type ch_proposal_stddev_pop_fields = {
  __typename?: "ch_proposal_stddev_pop_fields";
  duration_minutes?: number;
  id?: number;
  meeting_id?: number;
  waitlist_id?: number;
};

export type ch_proposal_stddev_pop_order_by = {
  duration_minutes?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  waitlist_id?: order_by;
};

export type ch_proposal_stddev_samp_fields = {
  __typename?: "ch_proposal_stddev_samp_fields";
  duration_minutes?: number;
  id?: number;
  meeting_id?: number;
  waitlist_id?: number;
};

export type ch_proposal_stddev_samp_order_by = {
  duration_minutes?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  waitlist_id?: order_by;
};

export type ch_proposal_sum_fields = {
  __typename?: "ch_proposal_sum_fields";
  duration_minutes?: number;
  id?: number;
  meeting_id?: number;
  waitlist_id?: number;
};

export type ch_proposal_sum_order_by = {
  duration_minutes?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  waitlist_id?: order_by;
};

export type ch_proposal_time_slots = {
  __typename?: "ch_proposal_time_slots";
  ch_proposal: ch_proposal;
  ch_time_slot: ch_time_slot;
  id: number;
  proposal_id: number;
  timeslot_id: number;
};

export type ch_proposal_time_slots_aggregate = {
  __typename?: "ch_proposal_time_slots_aggregate";
  aggregate?: ch_proposal_time_slots_aggregate_fields;
  nodes: ch_proposal_time_slots[];
};

export type ch_proposal_time_slots_aggregate_fields = {
  __typename?: "ch_proposal_time_slots_aggregate_fields";
  avg?: ch_proposal_time_slots_avg_fields;
  count?: number;
  max?: ch_proposal_time_slots_max_fields;
  min?: ch_proposal_time_slots_min_fields;
  stddev?: ch_proposal_time_slots_stddev_fields;
  stddev_pop?: ch_proposal_time_slots_stddev_pop_fields;
  stddev_samp?: ch_proposal_time_slots_stddev_samp_fields;
  sum?: ch_proposal_time_slots_sum_fields;
  var_pop?: ch_proposal_time_slots_var_pop_fields;
  var_samp?: ch_proposal_time_slots_var_samp_fields;
  variance?: ch_proposal_time_slots_variance_fields;
};

export type ch_proposal_time_slots_aggregate_order_by = {
  avg?: ch_proposal_time_slots_avg_order_by;
  count?: order_by;
  max?: ch_proposal_time_slots_max_order_by;
  min?: ch_proposal_time_slots_min_order_by;
  stddev?: ch_proposal_time_slots_stddev_order_by;
  stddev_pop?: ch_proposal_time_slots_stddev_pop_order_by;
  stddev_samp?: ch_proposal_time_slots_stddev_samp_order_by;
  sum?: ch_proposal_time_slots_sum_order_by;
  var_pop?: ch_proposal_time_slots_var_pop_order_by;
  var_samp?: ch_proposal_time_slots_var_samp_order_by;
  variance?: ch_proposal_time_slots_variance_order_by;
};

export type ch_proposal_time_slots_arr_rel_insert_input = {
  data: ch_proposal_time_slots_insert_input[];
  on_conflict?: ch_proposal_time_slots_on_conflict;
};

export type ch_proposal_time_slots_avg_fields = {
  __typename?: "ch_proposal_time_slots_avg_fields";
  id?: number;
  proposal_id?: number;
  timeslot_id?: number;
};

export type ch_proposal_time_slots_avg_order_by = {
  id?: order_by;
  proposal_id?: order_by;
  timeslot_id?: order_by;
};

export type ch_proposal_time_slots_bool_exp = {
  _and?: (ch_proposal_time_slots_bool_exp | undefined)[];
  _not?: ch_proposal_time_slots_bool_exp;
  _or?: (ch_proposal_time_slots_bool_exp | undefined)[];
  ch_proposal?: ch_proposal_bool_exp;
  ch_time_slot?: ch_time_slot_bool_exp;
  id?: Int_comparison_exp;
  proposal_id?: Int_comparison_exp;
  timeslot_id?: Int_comparison_exp;
};

export enum ch_proposal_time_slots_constraint {
  ch_proposal_time_slots_pkey = "ch_proposal_time_slots_pkey",
  ch_proposal_time_slots_proposal_id_timeslot_id_9e97c03e_uniq = "ch_proposal_time_slots_proposal_id_timeslot_id_9e97c03e_uniq",
}

export type ch_proposal_time_slots_inc_input = {
  id?: number;
  proposal_id?: number;
  timeslot_id?: number;
};

export type ch_proposal_time_slots_insert_input = {
  ch_proposal?: ch_proposal_obj_rel_insert_input;
  ch_time_slot?: ch_time_slot_obj_rel_insert_input;
  id?: number;
  proposal_id?: number;
  timeslot_id?: number;
};

export type ch_proposal_time_slots_max_fields = {
  __typename?: "ch_proposal_time_slots_max_fields";
  id?: number;
  proposal_id?: number;
  timeslot_id?: number;
};

export type ch_proposal_time_slots_max_order_by = {
  id?: order_by;
  proposal_id?: order_by;
  timeslot_id?: order_by;
};

export type ch_proposal_time_slots_min_fields = {
  __typename?: "ch_proposal_time_slots_min_fields";
  id?: number;
  proposal_id?: number;
  timeslot_id?: number;
};

export type ch_proposal_time_slots_min_order_by = {
  id?: order_by;
  proposal_id?: order_by;
  timeslot_id?: order_by;
};

export type ch_proposal_time_slots_mutation_response = {
  __typename?: "ch_proposal_time_slots_mutation_response";
  affected_rows: number;
  returning: ch_proposal_time_slots[];
};

export type ch_proposal_time_slots_obj_rel_insert_input = {
  data: ch_proposal_time_slots_insert_input;
  on_conflict?: ch_proposal_time_slots_on_conflict;
};

export type ch_proposal_time_slots_on_conflict = {
  constraint: ch_proposal_time_slots_constraint;
  update_columns: ch_proposal_time_slots_update_column[];
  where?: ch_proposal_time_slots_bool_exp;
};

export type ch_proposal_time_slots_order_by = {
  ch_proposal?: ch_proposal_order_by;
  ch_time_slot?: ch_time_slot_order_by;
  id?: order_by;
  proposal_id?: order_by;
  timeslot_id?: order_by;
};

export type ch_proposal_time_slots_pk_columns_input = {
  id: number;
};

export enum ch_proposal_time_slots_select_column {
  id = "id",
  proposal_id = "proposal_id",
  timeslot_id = "timeslot_id",
}

export type ch_proposal_time_slots_set_input = {
  id?: number;
  proposal_id?: number;
  timeslot_id?: number;
};

export type ch_proposal_time_slots_stddev_fields = {
  __typename?: "ch_proposal_time_slots_stddev_fields";
  id?: number;
  proposal_id?: number;
  timeslot_id?: number;
};

export type ch_proposal_time_slots_stddev_order_by = {
  id?: order_by;
  proposal_id?: order_by;
  timeslot_id?: order_by;
};

export type ch_proposal_time_slots_stddev_pop_fields = {
  __typename?: "ch_proposal_time_slots_stddev_pop_fields";
  id?: number;
  proposal_id?: number;
  timeslot_id?: number;
};

export type ch_proposal_time_slots_stddev_pop_order_by = {
  id?: order_by;
  proposal_id?: order_by;
  timeslot_id?: order_by;
};

export type ch_proposal_time_slots_stddev_samp_fields = {
  __typename?: "ch_proposal_time_slots_stddev_samp_fields";
  id?: number;
  proposal_id?: number;
  timeslot_id?: number;
};

export type ch_proposal_time_slots_stddev_samp_order_by = {
  id?: order_by;
  proposal_id?: order_by;
  timeslot_id?: order_by;
};

export type ch_proposal_time_slots_sum_fields = {
  __typename?: "ch_proposal_time_slots_sum_fields";
  id?: number;
  proposal_id?: number;
  timeslot_id?: number;
};

export type ch_proposal_time_slots_sum_order_by = {
  id?: order_by;
  proposal_id?: order_by;
  timeslot_id?: order_by;
};

export enum ch_proposal_time_slots_update_column {
  id = "id",
  proposal_id = "proposal_id",
  timeslot_id = "timeslot_id",
}

export type ch_proposal_time_slots_var_pop_fields = {
  __typename?: "ch_proposal_time_slots_var_pop_fields";
  id?: number;
  proposal_id?: number;
  timeslot_id?: number;
};

export type ch_proposal_time_slots_var_pop_order_by = {
  id?: order_by;
  proposal_id?: order_by;
  timeslot_id?: order_by;
};

export type ch_proposal_time_slots_var_samp_fields = {
  __typename?: "ch_proposal_time_slots_var_samp_fields";
  id?: number;
  proposal_id?: number;
  timeslot_id?: number;
};

export type ch_proposal_time_slots_var_samp_order_by = {
  id?: order_by;
  proposal_id?: order_by;
  timeslot_id?: order_by;
};

export type ch_proposal_time_slots_variance_fields = {
  __typename?: "ch_proposal_time_slots_variance_fields";
  id?: number;
  proposal_id?: number;
  timeslot_id?: number;
};

export type ch_proposal_time_slots_variance_order_by = {
  id?: order_by;
  proposal_id?: order_by;
  timeslot_id?: order_by;
};

export enum ch_proposal_update_column {
  city = "city",
  club = "club",
  created_at = "created_at",
  description = "description",
  duration_minutes = "duration_minutes",
  id = "id",
  meeting_id = "meeting_id",
  name = "name",
  needs = "needs",
  other_contact = "other_contact",
  other_data = "other_data",
  phone = "phone",
  speaker_name = "speaker_name",
  speaker_user_id = "speaker_user_id",
  status = "status",
  topic = "topic",
  waitlist_id = "waitlist_id",
}

export type ch_proposal_var_pop_fields = {
  __typename?: "ch_proposal_var_pop_fields";
  duration_minutes?: number;
  id?: number;
  meeting_id?: number;
  waitlist_id?: number;
};

export type ch_proposal_var_pop_order_by = {
  duration_minutes?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  waitlist_id?: order_by;
};

export type ch_proposal_var_samp_fields = {
  __typename?: "ch_proposal_var_samp_fields";
  duration_minutes?: number;
  id?: number;
  meeting_id?: number;
  waitlist_id?: number;
};

export type ch_proposal_var_samp_order_by = {
  duration_minutes?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  waitlist_id?: order_by;
};

export type ch_proposal_variance_fields = {
  __typename?: "ch_proposal_variance_fields";
  duration_minutes?: number;
  id?: number;
  meeting_id?: number;
  waitlist_id?: number;
};

export type ch_proposal_variance_order_by = {
  duration_minutes?: order_by;
  id?: order_by;
  meeting_id?: order_by;
  waitlist_id?: order_by;
};

export type ch_room = {
  __typename?: "ch_room";
  ch_agenda_items: ch_agenda_item[];
  ch_agenda_items_aggregate: ch_agenda_item_aggregate;
  ch_festival: ch_festival;
  festival_id: number;
  id: number;
  name: string;
  slug: string;
};

export type ch_room_aggregate = {
  __typename?: "ch_room_aggregate";
  aggregate?: ch_room_aggregate_fields;
  nodes: ch_room[];
};

export type ch_room_aggregate_fields = {
  __typename?: "ch_room_aggregate_fields";
  avg?: ch_room_avg_fields;
  count?: number;
  max?: ch_room_max_fields;
  min?: ch_room_min_fields;
  stddev?: ch_room_stddev_fields;
  stddev_pop?: ch_room_stddev_pop_fields;
  stddev_samp?: ch_room_stddev_samp_fields;
  sum?: ch_room_sum_fields;
  var_pop?: ch_room_var_pop_fields;
  var_samp?: ch_room_var_samp_fields;
  variance?: ch_room_variance_fields;
};

export type ch_room_aggregate_order_by = {
  avg?: ch_room_avg_order_by;
  count?: order_by;
  max?: ch_room_max_order_by;
  min?: ch_room_min_order_by;
  stddev?: ch_room_stddev_order_by;
  stddev_pop?: ch_room_stddev_pop_order_by;
  stddev_samp?: ch_room_stddev_samp_order_by;
  sum?: ch_room_sum_order_by;
  var_pop?: ch_room_var_pop_order_by;
  var_samp?: ch_room_var_samp_order_by;
  variance?: ch_room_variance_order_by;
};

export type ch_room_arr_rel_insert_input = {
  data: ch_room_insert_input[];
  on_conflict?: ch_room_on_conflict;
};

export type ch_room_avg_fields = {
  __typename?: "ch_room_avg_fields";
  festival_id?: number;
  id?: number;
};

export type ch_room_avg_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_room_bool_exp = {
  _and?: (ch_room_bool_exp | undefined)[];
  _not?: ch_room_bool_exp;
  _or?: (ch_room_bool_exp | undefined)[];
  ch_agenda_items?: ch_agenda_item_bool_exp;
  ch_festival?: ch_festival_bool_exp;
  festival_id?: Int_comparison_exp;
  id?: Int_comparison_exp;
  name?: String_comparison_exp;
  slug?: String_comparison_exp;
};

export enum ch_room_constraint {
  ch_room_pkey = "ch_room_pkey",
  room_has_unique_slug_and_festival = "room_has_unique_slug_and_festival",
}

export type ch_room_inc_input = {
  festival_id?: number;
  id?: number;
};

export type ch_room_insert_input = {
  ch_agenda_items?: ch_agenda_item_arr_rel_insert_input;
  ch_festival?: ch_festival_obj_rel_insert_input;
  festival_id?: number;
  id?: number;
  name?: string;
  slug?: string;
};

export type ch_room_max_fields = {
  __typename?: "ch_room_max_fields";
  festival_id?: number;
  id?: number;
  name?: string;
  slug?: string;
};

export type ch_room_max_order_by = {
  festival_id?: order_by;
  id?: order_by;
  name?: order_by;
  slug?: order_by;
};

export type ch_room_min_fields = {
  __typename?: "ch_room_min_fields";
  festival_id?: number;
  id?: number;
  name?: string;
  slug?: string;
};

export type ch_room_min_order_by = {
  festival_id?: order_by;
  id?: order_by;
  name?: order_by;
  slug?: order_by;
};

export type ch_room_mutation_response = {
  __typename?: "ch_room_mutation_response";
  affected_rows: number;
  returning: ch_room[];
};

export type ch_room_obj_rel_insert_input = {
  data: ch_room_insert_input;
  on_conflict?: ch_room_on_conflict;
};

export type ch_room_on_conflict = {
  constraint: ch_room_constraint;
  update_columns: ch_room_update_column[];
  where?: ch_room_bool_exp;
};

export type ch_room_order_by = {
  ch_agenda_items_aggregate?: ch_agenda_item_aggregate_order_by;
  ch_festival?: ch_festival_order_by;
  festival_id?: order_by;
  id?: order_by;
  name?: order_by;
  slug?: order_by;
};

export type ch_room_pk_columns_input = {
  id: number;
};

export enum ch_room_select_column {
  festival_id = "festival_id",
  id = "id",
  name = "name",
  slug = "slug",
}

export type ch_room_set_input = {
  festival_id?: number;
  id?: number;
  name?: string;
  slug?: string;
};

export type ch_room_stddev_fields = {
  __typename?: "ch_room_stddev_fields";
  festival_id?: number;
  id?: number;
};

export type ch_room_stddev_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_room_stddev_pop_fields = {
  __typename?: "ch_room_stddev_pop_fields";
  festival_id?: number;
  id?: number;
};

export type ch_room_stddev_pop_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_room_stddev_samp_fields = {
  __typename?: "ch_room_stddev_samp_fields";
  festival_id?: number;
  id?: number;
};

export type ch_room_stddev_samp_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_room_sum_fields = {
  __typename?: "ch_room_sum_fields";
  festival_id?: number;
  id?: number;
};

export type ch_room_sum_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export enum ch_room_update_column {
  festival_id = "festival_id",
  id = "id",
  name = "name",
  slug = "slug",
}

export type ch_room_var_pop_fields = {
  __typename?: "ch_room_var_pop_fields";
  festival_id?: number;
  id?: number;
};

export type ch_room_var_pop_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_room_var_samp_fields = {
  __typename?: "ch_room_var_samp_fields";
  festival_id?: number;
  id?: number;
};

export type ch_room_var_samp_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_room_variance_fields = {
  __typename?: "ch_room_variance_fields";
  festival_id?: number;
  id?: number;
};

export type ch_room_variance_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_time_slot = {
  __typename?: "ch_time_slot";
  ch_helper_time_slots: ch_helper_time_slots[];
  ch_helper_time_slots_aggregate: ch_helper_time_slots_aggregate;
  ch_proposal_time_slots: ch_proposal_time_slots[];
  ch_proposal_time_slots_aggregate: ch_proposal_time_slots_aggregate;
  end_time: timestamptz;
  festival_id: number;
  id: number;
  start_time: timestamptz;
};

export type ch_time_slot_aggregate = {
  __typename?: "ch_time_slot_aggregate";
  aggregate?: ch_time_slot_aggregate_fields;
  nodes: ch_time_slot[];
};

export type ch_time_slot_aggregate_fields = {
  __typename?: "ch_time_slot_aggregate_fields";
  avg?: ch_time_slot_avg_fields;
  count?: number;
  max?: ch_time_slot_max_fields;
  min?: ch_time_slot_min_fields;
  stddev?: ch_time_slot_stddev_fields;
  stddev_pop?: ch_time_slot_stddev_pop_fields;
  stddev_samp?: ch_time_slot_stddev_samp_fields;
  sum?: ch_time_slot_sum_fields;
  var_pop?: ch_time_slot_var_pop_fields;
  var_samp?: ch_time_slot_var_samp_fields;
  variance?: ch_time_slot_variance_fields;
};

export type ch_time_slot_aggregate_order_by = {
  avg?: ch_time_slot_avg_order_by;
  count?: order_by;
  max?: ch_time_slot_max_order_by;
  min?: ch_time_slot_min_order_by;
  stddev?: ch_time_slot_stddev_order_by;
  stddev_pop?: ch_time_slot_stddev_pop_order_by;
  stddev_samp?: ch_time_slot_stddev_samp_order_by;
  sum?: ch_time_slot_sum_order_by;
  var_pop?: ch_time_slot_var_pop_order_by;
  var_samp?: ch_time_slot_var_samp_order_by;
  variance?: ch_time_slot_variance_order_by;
};

export type ch_time_slot_arr_rel_insert_input = {
  data: ch_time_slot_insert_input[];
  on_conflict?: ch_time_slot_on_conflict;
};

export type ch_time_slot_avg_fields = {
  __typename?: "ch_time_slot_avg_fields";
  festival_id?: number;
  id?: number;
};

export type ch_time_slot_avg_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_time_slot_bool_exp = {
  _and?: (ch_time_slot_bool_exp | undefined)[];
  _not?: ch_time_slot_bool_exp;
  _or?: (ch_time_slot_bool_exp | undefined)[];
  ch_helper_time_slots?: ch_helper_time_slots_bool_exp;
  ch_proposal_time_slots?: ch_proposal_time_slots_bool_exp;
  end_time?: timestamptz_comparison_exp;
  festival_id?: Int_comparison_exp;
  id?: Int_comparison_exp;
  start_time?: timestamptz_comparison_exp;
};

export enum ch_time_slot_constraint {
  ch_time_slot_pkey = "ch_time_slot_pkey",
  timeslot_has_unique_times_for_festival = "timeslot_has_unique_times_for_festival",
}

export type ch_time_slot_inc_input = {
  festival_id?: number;
  id?: number;
};

export type ch_time_slot_insert_input = {
  ch_helper_time_slots?: ch_helper_time_slots_arr_rel_insert_input;
  ch_proposal_time_slots?: ch_proposal_time_slots_arr_rel_insert_input;
  end_time?: timestamptz;
  festival_id?: number;
  id?: number;
  start_time?: timestamptz;
};

export type ch_time_slot_max_fields = {
  __typename?: "ch_time_slot_max_fields";
  end_time?: timestamptz;
  festival_id?: number;
  id?: number;
  start_time?: timestamptz;
};

export type ch_time_slot_max_order_by = {
  end_time?: order_by;
  festival_id?: order_by;
  id?: order_by;
  start_time?: order_by;
};

export type ch_time_slot_min_fields = {
  __typename?: "ch_time_slot_min_fields";
  end_time?: timestamptz;
  festival_id?: number;
  id?: number;
  start_time?: timestamptz;
};

export type ch_time_slot_min_order_by = {
  end_time?: order_by;
  festival_id?: order_by;
  id?: order_by;
  start_time?: order_by;
};

export type ch_time_slot_mutation_response = {
  __typename?: "ch_time_slot_mutation_response";
  affected_rows: number;
  returning: ch_time_slot[];
};

export type ch_time_slot_obj_rel_insert_input = {
  data: ch_time_slot_insert_input;
  on_conflict?: ch_time_slot_on_conflict;
};

export type ch_time_slot_on_conflict = {
  constraint: ch_time_slot_constraint;
  update_columns: ch_time_slot_update_column[];
  where?: ch_time_slot_bool_exp;
};

export type ch_time_slot_order_by = {
  ch_helper_time_slots_aggregate?: ch_helper_time_slots_aggregate_order_by;
  ch_proposal_time_slots_aggregate?: ch_proposal_time_slots_aggregate_order_by;
  end_time?: order_by;
  festival_id?: order_by;
  id?: order_by;
  start_time?: order_by;
};

export type ch_time_slot_pk_columns_input = {
  id: number;
};

export enum ch_time_slot_select_column {
  end_time = "end_time",
  festival_id = "festival_id",
  id = "id",
  start_time = "start_time",
}

export type ch_time_slot_set_input = {
  end_time?: timestamptz;
  festival_id?: number;
  id?: number;
  start_time?: timestamptz;
};

export type ch_time_slot_stddev_fields = {
  __typename?: "ch_time_slot_stddev_fields";
  festival_id?: number;
  id?: number;
};

export type ch_time_slot_stddev_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_time_slot_stddev_pop_fields = {
  __typename?: "ch_time_slot_stddev_pop_fields";
  festival_id?: number;
  id?: number;
};

export type ch_time_slot_stddev_pop_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_time_slot_stddev_samp_fields = {
  __typename?: "ch_time_slot_stddev_samp_fields";
  festival_id?: number;
  id?: number;
};

export type ch_time_slot_stddev_samp_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_time_slot_sum_fields = {
  __typename?: "ch_time_slot_sum_fields";
  festival_id?: number;
  id?: number;
};

export type ch_time_slot_sum_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export enum ch_time_slot_update_column {
  end_time = "end_time",
  festival_id = "festival_id",
  id = "id",
  start_time = "start_time",
}

export type ch_time_slot_var_pop_fields = {
  __typename?: "ch_time_slot_var_pop_fields";
  festival_id?: number;
  id?: number;
};

export type ch_time_slot_var_pop_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_time_slot_var_samp_fields = {
  __typename?: "ch_time_slot_var_samp_fields";
  festival_id?: number;
  id?: number;
};

export type ch_time_slot_var_samp_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_time_slot_variance_fields = {
  __typename?: "ch_time_slot_variance_fields";
  festival_id?: number;
  id?: number;
};

export type ch_time_slot_variance_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_wait_list = {
  __typename?: "ch_wait_list";
  ch_festival: ch_festival;
  ch_proposals: ch_proposal[];
  ch_proposals_aggregate: ch_proposal_aggregate;
  festival_id: number;
  id: number;
  name: string;
  slug: string;
};

export type ch_wait_list_aggregate = {
  __typename?: "ch_wait_list_aggregate";
  aggregate?: ch_wait_list_aggregate_fields;
  nodes: ch_wait_list[];
};

export type ch_wait_list_aggregate_fields = {
  __typename?: "ch_wait_list_aggregate_fields";
  avg?: ch_wait_list_avg_fields;
  count?: number;
  max?: ch_wait_list_max_fields;
  min?: ch_wait_list_min_fields;
  stddev?: ch_wait_list_stddev_fields;
  stddev_pop?: ch_wait_list_stddev_pop_fields;
  stddev_samp?: ch_wait_list_stddev_samp_fields;
  sum?: ch_wait_list_sum_fields;
  var_pop?: ch_wait_list_var_pop_fields;
  var_samp?: ch_wait_list_var_samp_fields;
  variance?: ch_wait_list_variance_fields;
};

export type ch_wait_list_aggregate_order_by = {
  avg?: ch_wait_list_avg_order_by;
  count?: order_by;
  max?: ch_wait_list_max_order_by;
  min?: ch_wait_list_min_order_by;
  stddev?: ch_wait_list_stddev_order_by;
  stddev_pop?: ch_wait_list_stddev_pop_order_by;
  stddev_samp?: ch_wait_list_stddev_samp_order_by;
  sum?: ch_wait_list_sum_order_by;
  var_pop?: ch_wait_list_var_pop_order_by;
  var_samp?: ch_wait_list_var_samp_order_by;
  variance?: ch_wait_list_variance_order_by;
};

export type ch_wait_list_arr_rel_insert_input = {
  data: ch_wait_list_insert_input[];
  on_conflict?: ch_wait_list_on_conflict;
};

export type ch_wait_list_avg_fields = {
  __typename?: "ch_wait_list_avg_fields";
  festival_id?: number;
  id?: number;
};

export type ch_wait_list_avg_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_wait_list_bool_exp = {
  _and?: (ch_wait_list_bool_exp | undefined)[];
  _not?: ch_wait_list_bool_exp;
  _or?: (ch_wait_list_bool_exp | undefined)[];
  ch_festival?: ch_festival_bool_exp;
  ch_proposals?: ch_proposal_bool_exp;
  festival_id?: Int_comparison_exp;
  id?: Int_comparison_exp;
  name?: String_comparison_exp;
  slug?: String_comparison_exp;
};

export enum ch_wait_list_constraint {
  ch_wait_list_pkey = "ch_wait_list_pkey",
  waitlist_has_unique_slug_and_festival = "waitlist_has_unique_slug_and_festival",
}

export type ch_wait_list_inc_input = {
  festival_id?: number;
  id?: number;
};

export type ch_wait_list_insert_input = {
  ch_festival?: ch_festival_obj_rel_insert_input;
  ch_proposals?: ch_proposal_arr_rel_insert_input;
  festival_id?: number;
  id?: number;
  name?: string;
  slug?: string;
};

export type ch_wait_list_max_fields = {
  __typename?: "ch_wait_list_max_fields";
  festival_id?: number;
  id?: number;
  name?: string;
  slug?: string;
};

export type ch_wait_list_max_order_by = {
  festival_id?: order_by;
  id?: order_by;
  name?: order_by;
  slug?: order_by;
};

export type ch_wait_list_min_fields = {
  __typename?: "ch_wait_list_min_fields";
  festival_id?: number;
  id?: number;
  name?: string;
  slug?: string;
};

export type ch_wait_list_min_order_by = {
  festival_id?: order_by;
  id?: order_by;
  name?: order_by;
  slug?: order_by;
};

export type ch_wait_list_mutation_response = {
  __typename?: "ch_wait_list_mutation_response";
  affected_rows: number;
  returning: ch_wait_list[];
};

export type ch_wait_list_obj_rel_insert_input = {
  data: ch_wait_list_insert_input;
  on_conflict?: ch_wait_list_on_conflict;
};

export type ch_wait_list_on_conflict = {
  constraint: ch_wait_list_constraint;
  update_columns: ch_wait_list_update_column[];
  where?: ch_wait_list_bool_exp;
};

export type ch_wait_list_order_by = {
  ch_festival?: ch_festival_order_by;
  ch_proposals_aggregate?: ch_proposal_aggregate_order_by;
  festival_id?: order_by;
  id?: order_by;
  name?: order_by;
  slug?: order_by;
};

export type ch_wait_list_pk_columns_input = {
  id: number;
};

export enum ch_wait_list_select_column {
  festival_id = "festival_id",
  id = "id",
  name = "name",
  slug = "slug",
}

export type ch_wait_list_set_input = {
  festival_id?: number;
  id?: number;
  name?: string;
  slug?: string;
};

export type ch_wait_list_stddev_fields = {
  __typename?: "ch_wait_list_stddev_fields";
  festival_id?: number;
  id?: number;
};

export type ch_wait_list_stddev_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_wait_list_stddev_pop_fields = {
  __typename?: "ch_wait_list_stddev_pop_fields";
  festival_id?: number;
  id?: number;
};

export type ch_wait_list_stddev_pop_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_wait_list_stddev_samp_fields = {
  __typename?: "ch_wait_list_stddev_samp_fields";
  festival_id?: number;
  id?: number;
};

export type ch_wait_list_stddev_samp_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_wait_list_sum_fields = {
  __typename?: "ch_wait_list_sum_fields";
  festival_id?: number;
  id?: number;
};

export type ch_wait_list_sum_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export enum ch_wait_list_update_column {
  festival_id = "festival_id",
  id = "id",
  name = "name",
  slug = "slug",
}

export type ch_wait_list_var_pop_fields = {
  __typename?: "ch_wait_list_var_pop_fields";
  festival_id?: number;
  id?: number;
};

export type ch_wait_list_var_pop_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_wait_list_var_samp_fields = {
  __typename?: "ch_wait_list_var_samp_fields";
  festival_id?: number;
  id?: number;
};

export type ch_wait_list_var_samp_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type ch_wait_list_variance_fields = {
  __typename?: "ch_wait_list_variance_fields";
  festival_id?: number;
  id?: number;
};

export type ch_wait_list_variance_order_by = {
  festival_id?: order_by;
  id?: order_by;
};

export type cr_user = {
  __typename?: "cr_user";
  auth0_id: string;
  ch_helpers: ch_helper[];
  ch_helpers_aggregate: ch_helper_aggregate;
  date_joined: timestamptz;
  email: string;
  first_name: string;
  guilds: nb_guild_member[];
  guilds_aggregate: nb_guild_member_aggregate;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  last_login?: timestamptz;
  last_name: string;
  locale: string;
  managed_spheres: nb_sphere_managers[];
  managed_spheres_aggregate: nb_sphere_managers_aggregate;
  meetings: nb_meeting_participants[];
  meetings_aggregate: nb_meeting_participants_aggregate;
  organized_meetings: nb_meeting[];
  organized_meetings_aggregate: nb_meeting_aggregate;
  password: string;
  username: string;
  uuid: uuid;
};

export type cr_user_aggregate = {
  __typename?: "cr_user_aggregate";
  aggregate?: cr_user_aggregate_fields;
  nodes: cr_user[];
};

export type cr_user_aggregate_fields = {
  __typename?: "cr_user_aggregate_fields";
  count?: number;
  max?: cr_user_max_fields;
  min?: cr_user_min_fields;
};

export type cr_user_aggregate_order_by = {
  count?: order_by;
  max?: cr_user_max_order_by;
  min?: cr_user_min_order_by;
};

export type cr_user_arr_rel_insert_input = {
  data: cr_user_insert_input[];
  on_conflict?: cr_user_on_conflict;
};

export type cr_user_bool_exp = {
  _and?: (cr_user_bool_exp | undefined)[];
  _not?: cr_user_bool_exp;
  _or?: (cr_user_bool_exp | undefined)[];
  auth0_id?: String_comparison_exp;
  ch_helpers?: ch_helper_bool_exp;
  date_joined?: timestamptz_comparison_exp;
  email?: String_comparison_exp;
  first_name?: String_comparison_exp;
  guilds?: nb_guild_member_bool_exp;
  is_active?: Boolean_comparison_exp;
  is_staff?: Boolean_comparison_exp;
  is_superuser?: Boolean_comparison_exp;
  last_login?: timestamptz_comparison_exp;
  last_name?: String_comparison_exp;
  locale?: String_comparison_exp;
  managed_spheres?: nb_sphere_managers_bool_exp;
  meetings?: nb_meeting_participants_bool_exp;
  organized_meetings?: nb_meeting_bool_exp;
  password?: String_comparison_exp;
  username?: String_comparison_exp;
  uuid?: uuid_comparison_exp;
};

export enum cr_user_constraint {
  cr_user_pkey = "cr_user_pkey",
  cr_user_username_key = "cr_user_username_key",
  unique_nonempty_auth0_id = "unique_nonempty_auth0_id",
}

export type cr_user_insert_input = {
  auth0_id?: string;
  ch_helpers?: ch_helper_arr_rel_insert_input;
  date_joined?: timestamptz;
  email?: string;
  first_name?: string;
  guilds?: nb_guild_member_arr_rel_insert_input;
  is_active?: boolean;
  is_staff?: boolean;
  is_superuser?: boolean;
  last_login?: timestamptz;
  last_name?: string;
  locale?: string;
  managed_spheres?: nb_sphere_managers_arr_rel_insert_input;
  meetings?: nb_meeting_participants_arr_rel_insert_input;
  organized_meetings?: nb_meeting_arr_rel_insert_input;
  password?: string;
  username?: string;
  uuid?: uuid;
};

export type cr_user_max_fields = {
  __typename?: "cr_user_max_fields";
  auth0_id?: string;
  date_joined?: timestamptz;
  email?: string;
  first_name?: string;
  last_login?: timestamptz;
  last_name?: string;
  locale?: string;
  password?: string;
  username?: string;
  uuid?: uuid;
};

export type cr_user_max_order_by = {
  auth0_id?: order_by;
  date_joined?: order_by;
  email?: order_by;
  first_name?: order_by;
  last_login?: order_by;
  last_name?: order_by;
  locale?: order_by;
  password?: order_by;
  username?: order_by;
  uuid?: order_by;
};

export type cr_user_min_fields = {
  __typename?: "cr_user_min_fields";
  auth0_id?: string;
  date_joined?: timestamptz;
  email?: string;
  first_name?: string;
  last_login?: timestamptz;
  last_name?: string;
  locale?: string;
  password?: string;
  username?: string;
  uuid?: uuid;
};

export type cr_user_min_order_by = {
  auth0_id?: order_by;
  date_joined?: order_by;
  email?: order_by;
  first_name?: order_by;
  last_login?: order_by;
  last_name?: order_by;
  locale?: order_by;
  password?: order_by;
  username?: order_by;
  uuid?: order_by;
};

export type cr_user_mutation_response = {
  __typename?: "cr_user_mutation_response";
  affected_rows: number;
  returning: cr_user[];
};

export type cr_user_obj_rel_insert_input = {
  data: cr_user_insert_input;
  on_conflict?: cr_user_on_conflict;
};

export type cr_user_on_conflict = {
  constraint: cr_user_constraint;
  update_columns: cr_user_update_column[];
  where?: cr_user_bool_exp;
};

export type cr_user_order_by = {
  auth0_id?: order_by;
  ch_helpers_aggregate?: ch_helper_aggregate_order_by;
  date_joined?: order_by;
  email?: order_by;
  first_name?: order_by;
  guilds_aggregate?: nb_guild_member_aggregate_order_by;
  is_active?: order_by;
  is_staff?: order_by;
  is_superuser?: order_by;
  last_login?: order_by;
  last_name?: order_by;
  locale?: order_by;
  managed_spheres_aggregate?: nb_sphere_managers_aggregate_order_by;
  meetings_aggregate?: nb_meeting_participants_aggregate_order_by;
  organized_meetings_aggregate?: nb_meeting_aggregate_order_by;
  password?: order_by;
  username?: order_by;
  uuid?: order_by;
};

export type cr_user_pk_columns_input = {
  uuid: uuid;
};

export enum cr_user_select_column {
  auth0_id = "auth0_id",
  date_joined = "date_joined",
  email = "email",
  first_name = "first_name",
  is_active = "is_active",
  is_staff = "is_staff",
  is_superuser = "is_superuser",
  last_login = "last_login",
  last_name = "last_name",
  locale = "locale",
  password = "password",
  username = "username",
  uuid = "uuid",
}

export type cr_user_set_input = {
  auth0_id?: string;
  date_joined?: timestamptz;
  email?: string;
  first_name?: string;
  is_active?: boolean;
  is_staff?: boolean;
  is_superuser?: boolean;
  last_login?: timestamptz;
  last_name?: string;
  locale?: string;
  password?: string;
  username?: string;
  uuid?: uuid;
};

export enum cr_user_update_column {
  auth0_id = "auth0_id",
  date_joined = "date_joined",
  email = "email",
  first_name = "first_name",
  is_active = "is_active",
  is_staff = "is_staff",
  is_superuser = "is_superuser",
  last_login = "last_login",
  last_name = "last_name",
  locale = "locale",
  password = "password",
  username = "username",
  uuid = "uuid",
}

export type django_site = {
  __typename?: "django_site";
  domain: string;
  id: number;
  name: string;
  nb_sphere?: nb_sphere;
};

export type django_site_aggregate = {
  __typename?: "django_site_aggregate";
  aggregate?: django_site_aggregate_fields;
  nodes: django_site[];
};

export type django_site_aggregate_fields = {
  __typename?: "django_site_aggregate_fields";
  avg?: django_site_avg_fields;
  count?: number;
  max?: django_site_max_fields;
  min?: django_site_min_fields;
  stddev?: django_site_stddev_fields;
  stddev_pop?: django_site_stddev_pop_fields;
  stddev_samp?: django_site_stddev_samp_fields;
  sum?: django_site_sum_fields;
  var_pop?: django_site_var_pop_fields;
  var_samp?: django_site_var_samp_fields;
  variance?: django_site_variance_fields;
};

export type django_site_aggregate_order_by = {
  avg?: django_site_avg_order_by;
  count?: order_by;
  max?: django_site_max_order_by;
  min?: django_site_min_order_by;
  stddev?: django_site_stddev_order_by;
  stddev_pop?: django_site_stddev_pop_order_by;
  stddev_samp?: django_site_stddev_samp_order_by;
  sum?: django_site_sum_order_by;
  var_pop?: django_site_var_pop_order_by;
  var_samp?: django_site_var_samp_order_by;
  variance?: django_site_variance_order_by;
};

export type django_site_arr_rel_insert_input = {
  data: django_site_insert_input[];
  on_conflict?: django_site_on_conflict;
};

export type django_site_avg_fields = {
  __typename?: "django_site_avg_fields";
  id?: number;
};

export type django_site_avg_order_by = {
  id?: order_by;
};

export type django_site_bool_exp = {
  _and?: (django_site_bool_exp | undefined)[];
  _not?: django_site_bool_exp;
  _or?: (django_site_bool_exp | undefined)[];
  domain?: String_comparison_exp;
  id?: Int_comparison_exp;
  name?: String_comparison_exp;
  nb_sphere?: nb_sphere_bool_exp;
};

export enum django_site_constraint {
  django_site_domain_key = "django_site_domain_key",
  django_site_pkey = "django_site_pkey",
}

export type django_site_inc_input = {
  id?: number;
};

export type django_site_insert_input = {
  domain?: string;
  id?: number;
  name?: string;
  nb_sphere?: nb_sphere_obj_rel_insert_input;
};

export type django_site_max_fields = {
  __typename?: "django_site_max_fields";
  domain?: string;
  id?: number;
  name?: string;
};

export type django_site_max_order_by = {
  domain?: order_by;
  id?: order_by;
  name?: order_by;
};

export type django_site_min_fields = {
  __typename?: "django_site_min_fields";
  domain?: string;
  id?: number;
  name?: string;
};

export type django_site_min_order_by = {
  domain?: order_by;
  id?: order_by;
  name?: order_by;
};

export type django_site_mutation_response = {
  __typename?: "django_site_mutation_response";
  affected_rows: number;
  returning: django_site[];
};

export type django_site_obj_rel_insert_input = {
  data: django_site_insert_input;
  on_conflict?: django_site_on_conflict;
};

export type django_site_on_conflict = {
  constraint: django_site_constraint;
  update_columns: django_site_update_column[];
  where?: django_site_bool_exp;
};

export type django_site_order_by = {
  domain?: order_by;
  id?: order_by;
  name?: order_by;
  nb_sphere?: nb_sphere_order_by;
};

export type django_site_pk_columns_input = {
  id: number;
};

export enum django_site_select_column {
  domain = "domain",
  id = "id",
  name = "name",
}

export type django_site_set_input = {
  domain?: string;
  id?: number;
  name?: string;
};

export type django_site_stddev_fields = {
  __typename?: "django_site_stddev_fields";
  id?: number;
};

export type django_site_stddev_order_by = {
  id?: order_by;
};

export type django_site_stddev_pop_fields = {
  __typename?: "django_site_stddev_pop_fields";
  id?: number;
};

export type django_site_stddev_pop_order_by = {
  id?: order_by;
};

export type django_site_stddev_samp_fields = {
  __typename?: "django_site_stddev_samp_fields";
  id?: number;
};

export type django_site_stddev_samp_order_by = {
  id?: order_by;
};

export type django_site_sum_fields = {
  __typename?: "django_site_sum_fields";
  id?: number;
};

export type django_site_sum_order_by = {
  id?: order_by;
};

export enum django_site_update_column {
  domain = "domain",
  id = "id",
  name = "name",
}

export type django_site_var_pop_fields = {
  __typename?: "django_site_var_pop_fields";
  id?: number;
};

export type django_site_var_pop_order_by = {
  id?: order_by;
};

export type django_site_var_samp_fields = {
  __typename?: "django_site_var_samp_fields";
  id?: number;
};

export type django_site_var_samp_order_by = {
  id?: order_by;
};

export type django_site_variance_fields = {
  __typename?: "django_site_variance_fields";
  id?: number;
};

export type django_site_variance_order_by = {
  id?: order_by;
};

export type Int_comparison_exp = {
  _eq?: number;
  _gt?: number;
  _gte?: number;
  _in?: number[];
  _is_null?: boolean;
  _lt?: number;
  _lte?: number;
  _neq?: number;
  _nin?: number[];
};

export type jsonb = any;

export type jsonb_comparison_exp = {
  _contained_in?: jsonb;
  _contains?: jsonb;
  _eq?: jsonb;
  _gt?: jsonb;
  _gte?: jsonb;
  _has_key?: string;
  _has_keys_all?: string[];
  _has_keys_any?: string[];
  _in?: jsonb[];
  _is_null?: boolean;
  _lt?: jsonb;
  _lte?: jsonb;
  _neq?: jsonb;
  _nin?: jsonb[];
};

export type mutation_root = {
  __typename?: "mutation_root";
  delete_ch_agenda_item?: ch_agenda_item_mutation_response;
  delete_ch_agenda_item_by_pk?: ch_agenda_item;
  delete_ch_festival?: ch_festival_mutation_response;
  delete_ch_festival_by_pk?: ch_festival;
  delete_ch_helper?: ch_helper_mutation_response;
  delete_ch_helper_by_pk?: ch_helper;
  delete_ch_helper_time_slots?: ch_helper_time_slots_mutation_response;
  delete_ch_helper_time_slots_by_pk?: ch_helper_time_slots;
  delete_ch_proposal?: ch_proposal_mutation_response;
  delete_ch_proposal_by_pk?: ch_proposal;
  delete_ch_proposal_time_slots?: ch_proposal_time_slots_mutation_response;
  delete_ch_proposal_time_slots_by_pk?: ch_proposal_time_slots;
  delete_ch_room?: ch_room_mutation_response;
  delete_ch_room_by_pk?: ch_room;
  delete_ch_time_slot?: ch_time_slot_mutation_response;
  delete_ch_time_slot_by_pk?: ch_time_slot;
  delete_ch_wait_list?: ch_wait_list_mutation_response;
  delete_ch_wait_list_by_pk?: ch_wait_list;
  delete_cr_user?: cr_user_mutation_response;
  delete_cr_user_by_pk?: cr_user;
  delete_django_site?: django_site_mutation_response;
  delete_django_site_by_pk?: django_site;
  delete_nb_guild?: nb_guild_mutation_response;
  delete_nb_guild_by_pk?: nb_guild;
  delete_nb_guild_member?: nb_guild_member_mutation_response;
  delete_nb_guild_member_by_pk?: nb_guild_member;
  delete_nb_meeting?: nb_meeting_mutation_response;
  delete_nb_meeting_by_pk?: nb_meeting;
  delete_nb_meeting_participants?: nb_meeting_participants_mutation_response;
  delete_nb_meeting_participants_by_pk?: nb_meeting_participants;
  delete_nb_sphere?: nb_sphere_mutation_response;
  delete_nb_sphere_by_pk?: nb_sphere;
  delete_nb_sphere_managers?: nb_sphere_managers_mutation_response;
  delete_nb_sphere_managers_by_pk?: nb_sphere_managers;
  insert_ch_agenda_item?: ch_agenda_item_mutation_response;
  insert_ch_agenda_item_one?: ch_agenda_item;
  insert_ch_festival?: ch_festival_mutation_response;
  insert_ch_festival_one?: ch_festival;
  insert_ch_helper?: ch_helper_mutation_response;
  insert_ch_helper_one?: ch_helper;
  insert_ch_helper_time_slots?: ch_helper_time_slots_mutation_response;
  insert_ch_helper_time_slots_one?: ch_helper_time_slots;
  insert_ch_proposal?: ch_proposal_mutation_response;
  insert_ch_proposal_one?: ch_proposal;
  insert_ch_proposal_time_slots?: ch_proposal_time_slots_mutation_response;
  insert_ch_proposal_time_slots_one?: ch_proposal_time_slots;
  insert_ch_room?: ch_room_mutation_response;
  insert_ch_room_one?: ch_room;
  insert_ch_time_slot?: ch_time_slot_mutation_response;
  insert_ch_time_slot_one?: ch_time_slot;
  insert_ch_wait_list?: ch_wait_list_mutation_response;
  insert_ch_wait_list_one?: ch_wait_list;
  insert_cr_user?: cr_user_mutation_response;
  insert_cr_user_one?: cr_user;
  insert_django_site?: django_site_mutation_response;
  insert_django_site_one?: django_site;
  insert_nb_guild?: nb_guild_mutation_response;
  insert_nb_guild_member?: nb_guild_member_mutation_response;
  insert_nb_guild_member_one?: nb_guild_member;
  insert_nb_guild_one?: nb_guild;
  insert_nb_meeting?: nb_meeting_mutation_response;
  insert_nb_meeting_one?: nb_meeting;
  insert_nb_meeting_participants?: nb_meeting_participants_mutation_response;
  insert_nb_meeting_participants_one?: nb_meeting_participants;
  insert_nb_sphere?: nb_sphere_mutation_response;
  insert_nb_sphere_managers?: nb_sphere_managers_mutation_response;
  insert_nb_sphere_managers_one?: nb_sphere_managers;
  insert_nb_sphere_one?: nb_sphere;
  update_ch_agenda_item?: ch_agenda_item_mutation_response;
  update_ch_agenda_item_by_pk?: ch_agenda_item;
  update_ch_festival?: ch_festival_mutation_response;
  update_ch_festival_by_pk?: ch_festival;
  update_ch_helper?: ch_helper_mutation_response;
  update_ch_helper_by_pk?: ch_helper;
  update_ch_helper_time_slots?: ch_helper_time_slots_mutation_response;
  update_ch_helper_time_slots_by_pk?: ch_helper_time_slots;
  update_ch_proposal?: ch_proposal_mutation_response;
  update_ch_proposal_by_pk?: ch_proposal;
  update_ch_proposal_time_slots?: ch_proposal_time_slots_mutation_response;
  update_ch_proposal_time_slots_by_pk?: ch_proposal_time_slots;
  update_ch_room?: ch_room_mutation_response;
  update_ch_room_by_pk?: ch_room;
  update_ch_time_slot?: ch_time_slot_mutation_response;
  update_ch_time_slot_by_pk?: ch_time_slot;
  update_ch_wait_list?: ch_wait_list_mutation_response;
  update_ch_wait_list_by_pk?: ch_wait_list;
  update_cr_user?: cr_user_mutation_response;
  update_cr_user_by_pk?: cr_user;
  update_django_site?: django_site_mutation_response;
  update_django_site_by_pk?: django_site;
  update_nb_guild?: nb_guild_mutation_response;
  update_nb_guild_by_pk?: nb_guild;
  update_nb_guild_member?: nb_guild_member_mutation_response;
  update_nb_guild_member_by_pk?: nb_guild_member;
  update_nb_meeting?: nb_meeting_mutation_response;
  update_nb_meeting_by_pk?: nb_meeting;
  update_nb_meeting_participants?: nb_meeting_participants_mutation_response;
  update_nb_meeting_participants_by_pk?: nb_meeting_participants;
  update_nb_sphere?: nb_sphere_mutation_response;
  update_nb_sphere_by_pk?: nb_sphere;
  update_nb_sphere_managers?: nb_sphere_managers_mutation_response;
  update_nb_sphere_managers_by_pk?: nb_sphere_managers;
};

export type nb_guild = {
  __typename?: "nb_guild";
  created_at: timestamptz;
  description: string;
  id: number;
  is_public: boolean;
  name: string;
  nb_guild_members: nb_guild_member[];
  nb_guild_members_aggregate: nb_guild_member_aggregate;
  nb_meetings: nb_meeting[];
  nb_meetings_aggregate: nb_meeting_aggregate;
  slug: string;
  updated_at: timestamptz;
};

export type nb_guild_aggregate = {
  __typename?: "nb_guild_aggregate";
  aggregate?: nb_guild_aggregate_fields;
  nodes: nb_guild[];
};

export type nb_guild_aggregate_fields = {
  __typename?: "nb_guild_aggregate_fields";
  avg?: nb_guild_avg_fields;
  count?: number;
  max?: nb_guild_max_fields;
  min?: nb_guild_min_fields;
  stddev?: nb_guild_stddev_fields;
  stddev_pop?: nb_guild_stddev_pop_fields;
  stddev_samp?: nb_guild_stddev_samp_fields;
  sum?: nb_guild_sum_fields;
  var_pop?: nb_guild_var_pop_fields;
  var_samp?: nb_guild_var_samp_fields;
  variance?: nb_guild_variance_fields;
};

export type nb_guild_aggregate_order_by = {
  avg?: nb_guild_avg_order_by;
  count?: order_by;
  max?: nb_guild_max_order_by;
  min?: nb_guild_min_order_by;
  stddev?: nb_guild_stddev_order_by;
  stddev_pop?: nb_guild_stddev_pop_order_by;
  stddev_samp?: nb_guild_stddev_samp_order_by;
  sum?: nb_guild_sum_order_by;
  var_pop?: nb_guild_var_pop_order_by;
  var_samp?: nb_guild_var_samp_order_by;
  variance?: nb_guild_variance_order_by;
};

export type nb_guild_arr_rel_insert_input = {
  data: nb_guild_insert_input[];
  on_conflict?: nb_guild_on_conflict;
};

export type nb_guild_avg_fields = {
  __typename?: "nb_guild_avg_fields";
  id?: number;
};

export type nb_guild_avg_order_by = {
  id?: order_by;
};

export type nb_guild_bool_exp = {
  _and?: (nb_guild_bool_exp | undefined)[];
  _not?: nb_guild_bool_exp;
  _or?: (nb_guild_bool_exp | undefined)[];
  created_at?: timestamptz_comparison_exp;
  description?: String_comparison_exp;
  id?: Int_comparison_exp;
  is_public?: Boolean_comparison_exp;
  name?: String_comparison_exp;
  nb_guild_members?: nb_guild_member_bool_exp;
  nb_meetings?: nb_meeting_bool_exp;
  slug?: String_comparison_exp;
  updated_at?: timestamptz_comparison_exp;
};

export enum nb_guild_constraint {
  nb_guild_pkey = "nb_guild_pkey",
}

export type nb_guild_inc_input = {
  id?: number;
};

export type nb_guild_insert_input = {
  created_at?: timestamptz;
  description?: string;
  id?: number;
  is_public?: boolean;
  name?: string;
  nb_guild_members?: nb_guild_member_arr_rel_insert_input;
  nb_meetings?: nb_meeting_arr_rel_insert_input;
  slug?: string;
  updated_at?: timestamptz;
};

export type nb_guild_max_fields = {
  __typename?: "nb_guild_max_fields";
  created_at?: timestamptz;
  description?: string;
  id?: number;
  name?: string;
  slug?: string;
  updated_at?: timestamptz;
};

export type nb_guild_max_order_by = {
  created_at?: order_by;
  description?: order_by;
  id?: order_by;
  name?: order_by;
  slug?: order_by;
  updated_at?: order_by;
};

export type nb_guild_member = {
  __typename?: "nb_guild_member";
  cr_user: cr_user;
  guild_id: number;
  id: number;
  membership_type: string;
  nb_guild: nb_guild;
  user_id: uuid;
};

export type nb_guild_member_aggregate = {
  __typename?: "nb_guild_member_aggregate";
  aggregate?: nb_guild_member_aggregate_fields;
  nodes: nb_guild_member[];
};

export type nb_guild_member_aggregate_fields = {
  __typename?: "nb_guild_member_aggregate_fields";
  avg?: nb_guild_member_avg_fields;
  count?: number;
  max?: nb_guild_member_max_fields;
  min?: nb_guild_member_min_fields;
  stddev?: nb_guild_member_stddev_fields;
  stddev_pop?: nb_guild_member_stddev_pop_fields;
  stddev_samp?: nb_guild_member_stddev_samp_fields;
  sum?: nb_guild_member_sum_fields;
  var_pop?: nb_guild_member_var_pop_fields;
  var_samp?: nb_guild_member_var_samp_fields;
  variance?: nb_guild_member_variance_fields;
};

export type nb_guild_member_aggregate_order_by = {
  avg?: nb_guild_member_avg_order_by;
  count?: order_by;
  max?: nb_guild_member_max_order_by;
  min?: nb_guild_member_min_order_by;
  stddev?: nb_guild_member_stddev_order_by;
  stddev_pop?: nb_guild_member_stddev_pop_order_by;
  stddev_samp?: nb_guild_member_stddev_samp_order_by;
  sum?: nb_guild_member_sum_order_by;
  var_pop?: nb_guild_member_var_pop_order_by;
  var_samp?: nb_guild_member_var_samp_order_by;
  variance?: nb_guild_member_variance_order_by;
};

export type nb_guild_member_arr_rel_insert_input = {
  data: nb_guild_member_insert_input[];
  on_conflict?: nb_guild_member_on_conflict;
};

export type nb_guild_member_avg_fields = {
  __typename?: "nb_guild_member_avg_fields";
  guild_id?: number;
  id?: number;
};

export type nb_guild_member_avg_order_by = {
  guild_id?: order_by;
  id?: order_by;
};

export type nb_guild_member_bool_exp = {
  _and?: (nb_guild_member_bool_exp | undefined)[];
  _not?: nb_guild_member_bool_exp;
  _or?: (nb_guild_member_bool_exp | undefined)[];
  cr_user?: cr_user_bool_exp;
  guild_id?: Int_comparison_exp;
  id?: Int_comparison_exp;
  membership_type?: String_comparison_exp;
  nb_guild?: nb_guild_bool_exp;
  user_id?: uuid_comparison_exp;
};

export enum nb_guild_member_constraint {
  nb_guild_member_pkey = "nb_guild_member_pkey",
}

export type nb_guild_member_inc_input = {
  guild_id?: number;
  id?: number;
};

export type nb_guild_member_insert_input = {
  cr_user?: cr_user_obj_rel_insert_input;
  guild_id?: number;
  id?: number;
  membership_type?: string;
  nb_guild?: nb_guild_obj_rel_insert_input;
  user_id?: uuid;
};

export type nb_guild_member_max_fields = {
  __typename?: "nb_guild_member_max_fields";
  guild_id?: number;
  id?: number;
  membership_type?: string;
  user_id?: uuid;
};

export type nb_guild_member_max_order_by = {
  guild_id?: order_by;
  id?: order_by;
  membership_type?: order_by;
  user_id?: order_by;
};

export type nb_guild_member_min_fields = {
  __typename?: "nb_guild_member_min_fields";
  guild_id?: number;
  id?: number;
  membership_type?: string;
  user_id?: uuid;
};

export type nb_guild_member_min_order_by = {
  guild_id?: order_by;
  id?: order_by;
  membership_type?: order_by;
  user_id?: order_by;
};

export type nb_guild_member_mutation_response = {
  __typename?: "nb_guild_member_mutation_response";
  affected_rows: number;
  returning: nb_guild_member[];
};

export type nb_guild_member_obj_rel_insert_input = {
  data: nb_guild_member_insert_input;
  on_conflict?: nb_guild_member_on_conflict;
};

export type nb_guild_member_on_conflict = {
  constraint: nb_guild_member_constraint;
  update_columns: nb_guild_member_update_column[];
  where?: nb_guild_member_bool_exp;
};

export type nb_guild_member_order_by = {
  cr_user?: cr_user_order_by;
  guild_id?: order_by;
  id?: order_by;
  membership_type?: order_by;
  nb_guild?: nb_guild_order_by;
  user_id?: order_by;
};

export type nb_guild_member_pk_columns_input = {
  id: number;
};

export enum nb_guild_member_select_column {
  guild_id = "guild_id",
  id = "id",
  membership_type = "membership_type",
  user_id = "user_id",
}

export type nb_guild_member_set_input = {
  guild_id?: number;
  id?: number;
  membership_type?: string;
  user_id?: uuid;
};

export type nb_guild_member_stddev_fields = {
  __typename?: "nb_guild_member_stddev_fields";
  guild_id?: number;
  id?: number;
};

export type nb_guild_member_stddev_order_by = {
  guild_id?: order_by;
  id?: order_by;
};

export type nb_guild_member_stddev_pop_fields = {
  __typename?: "nb_guild_member_stddev_pop_fields";
  guild_id?: number;
  id?: number;
};

export type nb_guild_member_stddev_pop_order_by = {
  guild_id?: order_by;
  id?: order_by;
};

export type nb_guild_member_stddev_samp_fields = {
  __typename?: "nb_guild_member_stddev_samp_fields";
  guild_id?: number;
  id?: number;
};

export type nb_guild_member_stddev_samp_order_by = {
  guild_id?: order_by;
  id?: order_by;
};

export type nb_guild_member_sum_fields = {
  __typename?: "nb_guild_member_sum_fields";
  guild_id?: number;
  id?: number;
};

export type nb_guild_member_sum_order_by = {
  guild_id?: order_by;
  id?: order_by;
};

export enum nb_guild_member_update_column {
  guild_id = "guild_id",
  id = "id",
  membership_type = "membership_type",
  user_id = "user_id",
}

export type nb_guild_member_var_pop_fields = {
  __typename?: "nb_guild_member_var_pop_fields";
  guild_id?: number;
  id?: number;
};

export type nb_guild_member_var_pop_order_by = {
  guild_id?: order_by;
  id?: order_by;
};

export type nb_guild_member_var_samp_fields = {
  __typename?: "nb_guild_member_var_samp_fields";
  guild_id?: number;
  id?: number;
};

export type nb_guild_member_var_samp_order_by = {
  guild_id?: order_by;
  id?: order_by;
};

export type nb_guild_member_variance_fields = {
  __typename?: "nb_guild_member_variance_fields";
  guild_id?: number;
  id?: number;
};

export type nb_guild_member_variance_order_by = {
  guild_id?: order_by;
  id?: order_by;
};

export type nb_guild_min_fields = {
  __typename?: "nb_guild_min_fields";
  created_at?: timestamptz;
  description?: string;
  id?: number;
  name?: string;
  slug?: string;
  updated_at?: timestamptz;
};

export type nb_guild_min_order_by = {
  created_at?: order_by;
  description?: order_by;
  id?: order_by;
  name?: order_by;
  slug?: order_by;
  updated_at?: order_by;
};

export type nb_guild_mutation_response = {
  __typename?: "nb_guild_mutation_response";
  affected_rows: number;
  returning: nb_guild[];
};

export type nb_guild_obj_rel_insert_input = {
  data: nb_guild_insert_input;
  on_conflict?: nb_guild_on_conflict;
};

export type nb_guild_on_conflict = {
  constraint: nb_guild_constraint;
  update_columns: nb_guild_update_column[];
  where?: nb_guild_bool_exp;
};

export type nb_guild_order_by = {
  created_at?: order_by;
  description?: order_by;
  id?: order_by;
  is_public?: order_by;
  name?: order_by;
  nb_guild_members_aggregate?: nb_guild_member_aggregate_order_by;
  nb_meetings_aggregate?: nb_meeting_aggregate_order_by;
  slug?: order_by;
  updated_at?: order_by;
};

export type nb_guild_pk_columns_input = {
  id: number;
};

export enum nb_guild_select_column {
  created_at = "created_at",
  description = "description",
  id = "id",
  is_public = "is_public",
  name = "name",
  slug = "slug",
  updated_at = "updated_at",
}

export type nb_guild_set_input = {
  created_at?: timestamptz;
  description?: string;
  id?: number;
  is_public?: boolean;
  name?: string;
  slug?: string;
  updated_at?: timestamptz;
};

export type nb_guild_stddev_fields = {
  __typename?: "nb_guild_stddev_fields";
  id?: number;
};

export type nb_guild_stddev_order_by = {
  id?: order_by;
};

export type nb_guild_stddev_pop_fields = {
  __typename?: "nb_guild_stddev_pop_fields";
  id?: number;
};

export type nb_guild_stddev_pop_order_by = {
  id?: order_by;
};

export type nb_guild_stddev_samp_fields = {
  __typename?: "nb_guild_stddev_samp_fields";
  id?: number;
};

export type nb_guild_stddev_samp_order_by = {
  id?: order_by;
};

export type nb_guild_sum_fields = {
  __typename?: "nb_guild_sum_fields";
  id?: number;
};

export type nb_guild_sum_order_by = {
  id?: order_by;
};

export enum nb_guild_update_column {
  created_at = "created_at",
  description = "description",
  id = "id",
  is_public = "is_public",
  name = "name",
  slug = "slug",
  updated_at = "updated_at",
}

export type nb_guild_var_pop_fields = {
  __typename?: "nb_guild_var_pop_fields";
  id?: number;
};

export type nb_guild_var_pop_order_by = {
  id?: order_by;
};

export type nb_guild_var_samp_fields = {
  __typename?: "nb_guild_var_samp_fields";
  id?: number;
};

export type nb_guild_var_samp_order_by = {
  id?: order_by;
};

export type nb_guild_variance_fields = {
  __typename?: "nb_guild_variance_fields";
  id?: number;
};

export type nb_guild_variance_order_by = {
  id?: order_by;
};

export type nb_meeting = {
  __typename?: "nb_meeting";
  created_at: timestamptz;
  description: string;
  end_time?: timestamptz;
  guild?: nb_guild;
  guild_id?: number;
  id: number;
  image?: string;
  location: string;
  meeting_url: string;
  name: string;
  organizer: cr_user;
  organizer_id: uuid;
  participants: nb_meeting_participants[];
  participants_aggregate: nb_meeting_participants_aggregate;
  proposal?: ch_proposal;
  publication_time?: timestamptz;
  slug: string;
  sphere: nb_sphere;
  sphere_id: number;
  start_time?: timestamptz;
  status: string;
  time_table?: ch_agenda_item;
  updated_at: timestamptz;
};

export type nb_meeting_aggregate = {
  __typename?: "nb_meeting_aggregate";
  aggregate?: nb_meeting_aggregate_fields;
  nodes: nb_meeting[];
};

export type nb_meeting_aggregate_fields = {
  __typename?: "nb_meeting_aggregate_fields";
  avg?: nb_meeting_avg_fields;
  count?: number;
  max?: nb_meeting_max_fields;
  min?: nb_meeting_min_fields;
  stddev?: nb_meeting_stddev_fields;
  stddev_pop?: nb_meeting_stddev_pop_fields;
  stddev_samp?: nb_meeting_stddev_samp_fields;
  sum?: nb_meeting_sum_fields;
  var_pop?: nb_meeting_var_pop_fields;
  var_samp?: nb_meeting_var_samp_fields;
  variance?: nb_meeting_variance_fields;
};

export type nb_meeting_aggregate_order_by = {
  avg?: nb_meeting_avg_order_by;
  count?: order_by;
  max?: nb_meeting_max_order_by;
  min?: nb_meeting_min_order_by;
  stddev?: nb_meeting_stddev_order_by;
  stddev_pop?: nb_meeting_stddev_pop_order_by;
  stddev_samp?: nb_meeting_stddev_samp_order_by;
  sum?: nb_meeting_sum_order_by;
  var_pop?: nb_meeting_var_pop_order_by;
  var_samp?: nb_meeting_var_samp_order_by;
  variance?: nb_meeting_variance_order_by;
};

export type nb_meeting_arr_rel_insert_input = {
  data: nb_meeting_insert_input[];
  on_conflict?: nb_meeting_on_conflict;
};

export type nb_meeting_avg_fields = {
  __typename?: "nb_meeting_avg_fields";
  guild_id?: number;
  id?: number;
  sphere_id?: number;
};

export type nb_meeting_avg_order_by = {
  guild_id?: order_by;
  id?: order_by;
  sphere_id?: order_by;
};

export type nb_meeting_bool_exp = {
  _and?: (nb_meeting_bool_exp | undefined)[];
  _not?: nb_meeting_bool_exp;
  _or?: (nb_meeting_bool_exp | undefined)[];
  created_at?: timestamptz_comparison_exp;
  description?: String_comparison_exp;
  end_time?: timestamptz_comparison_exp;
  guild?: nb_guild_bool_exp;
  guild_id?: Int_comparison_exp;
  id?: Int_comparison_exp;
  image?: String_comparison_exp;
  location?: String_comparison_exp;
  meeting_url?: String_comparison_exp;
  name?: String_comparison_exp;
  organizer?: cr_user_bool_exp;
  organizer_id?: uuid_comparison_exp;
  participants?: nb_meeting_participants_bool_exp;
  proposal?: ch_proposal_bool_exp;
  publication_time?: timestamptz_comparison_exp;
  slug?: String_comparison_exp;
  sphere?: nb_sphere_bool_exp;
  sphere_id?: Int_comparison_exp;
  start_time?: timestamptz_comparison_exp;
  status?: String_comparison_exp;
  time_table?: ch_agenda_item_bool_exp;
  updated_at?: timestamptz_comparison_exp;
};

export enum nb_meeting_constraint {
  nb_meeting_pkey = "nb_meeting_pkey",
}

export type nb_meeting_inc_input = {
  guild_id?: number;
  id?: number;
  sphere_id?: number;
};

export type nb_meeting_insert_input = {
  created_at?: timestamptz;
  description?: string;
  end_time?: timestamptz;
  guild?: nb_guild_obj_rel_insert_input;
  guild_id?: number;
  id?: number;
  image?: string;
  location?: string;
  meeting_url?: string;
  name?: string;
  organizer?: cr_user_obj_rel_insert_input;
  organizer_id?: uuid;
  participants?: nb_meeting_participants_arr_rel_insert_input;
  proposal?: ch_proposal_obj_rel_insert_input;
  publication_time?: timestamptz;
  slug?: string;
  sphere?: nb_sphere_obj_rel_insert_input;
  sphere_id?: number;
  start_time?: timestamptz;
  status?: string;
  time_table?: ch_agenda_item_obj_rel_insert_input;
  updated_at?: timestamptz;
};

export type nb_meeting_max_fields = {
  __typename?: "nb_meeting_max_fields";
  created_at?: timestamptz;
  description?: string;
  end_time?: timestamptz;
  guild_id?: number;
  id?: number;
  image?: string;
  location?: string;
  meeting_url?: string;
  name?: string;
  organizer_id?: uuid;
  publication_time?: timestamptz;
  slug?: string;
  sphere_id?: number;
  start_time?: timestamptz;
  status?: string;
  updated_at?: timestamptz;
};

export type nb_meeting_max_order_by = {
  created_at?: order_by;
  description?: order_by;
  end_time?: order_by;
  guild_id?: order_by;
  id?: order_by;
  image?: order_by;
  location?: order_by;
  meeting_url?: order_by;
  name?: order_by;
  organizer_id?: order_by;
  publication_time?: order_by;
  slug?: order_by;
  sphere_id?: order_by;
  start_time?: order_by;
  status?: order_by;
  updated_at?: order_by;
};

export type nb_meeting_min_fields = {
  __typename?: "nb_meeting_min_fields";
  created_at?: timestamptz;
  description?: string;
  end_time?: timestamptz;
  guild_id?: number;
  id?: number;
  image?: string;
  location?: string;
  meeting_url?: string;
  name?: string;
  organizer_id?: uuid;
  publication_time?: timestamptz;
  slug?: string;
  sphere_id?: number;
  start_time?: timestamptz;
  status?: string;
  updated_at?: timestamptz;
};

export type nb_meeting_min_order_by = {
  created_at?: order_by;
  description?: order_by;
  end_time?: order_by;
  guild_id?: order_by;
  id?: order_by;
  image?: order_by;
  location?: order_by;
  meeting_url?: order_by;
  name?: order_by;
  organizer_id?: order_by;
  publication_time?: order_by;
  slug?: order_by;
  sphere_id?: order_by;
  start_time?: order_by;
  status?: order_by;
  updated_at?: order_by;
};

export type nb_meeting_mutation_response = {
  __typename?: "nb_meeting_mutation_response";
  affected_rows: number;
  returning: nb_meeting[];
};

export type nb_meeting_obj_rel_insert_input = {
  data: nb_meeting_insert_input;
  on_conflict?: nb_meeting_on_conflict;
};

export type nb_meeting_on_conflict = {
  constraint: nb_meeting_constraint;
  update_columns: nb_meeting_update_column[];
  where?: nb_meeting_bool_exp;
};

export type nb_meeting_order_by = {
  created_at?: order_by;
  description?: order_by;
  end_time?: order_by;
  guild?: nb_guild_order_by;
  guild_id?: order_by;
  id?: order_by;
  image?: order_by;
  location?: order_by;
  meeting_url?: order_by;
  name?: order_by;
  organizer?: cr_user_order_by;
  organizer_id?: order_by;
  participants_aggregate?: nb_meeting_participants_aggregate_order_by;
  proposal?: ch_proposal_order_by;
  publication_time?: order_by;
  slug?: order_by;
  sphere?: nb_sphere_order_by;
  sphere_id?: order_by;
  start_time?: order_by;
  status?: order_by;
  time_table?: ch_agenda_item_order_by;
  updated_at?: order_by;
};

export type nb_meeting_participants = {
  __typename?: "nb_meeting_participants";
  cr_user: cr_user;
  id: number;
  meeting_id: number;
  nb_meeting: nb_meeting;
  user_id: uuid;
};

export type nb_meeting_participants_aggregate = {
  __typename?: "nb_meeting_participants_aggregate";
  aggregate?: nb_meeting_participants_aggregate_fields;
  nodes: nb_meeting_participants[];
};

export type nb_meeting_participants_aggregate_fields = {
  __typename?: "nb_meeting_participants_aggregate_fields";
  avg?: nb_meeting_participants_avg_fields;
  count?: number;
  max?: nb_meeting_participants_max_fields;
  min?: nb_meeting_participants_min_fields;
  stddev?: nb_meeting_participants_stddev_fields;
  stddev_pop?: nb_meeting_participants_stddev_pop_fields;
  stddev_samp?: nb_meeting_participants_stddev_samp_fields;
  sum?: nb_meeting_participants_sum_fields;
  var_pop?: nb_meeting_participants_var_pop_fields;
  var_samp?: nb_meeting_participants_var_samp_fields;
  variance?: nb_meeting_participants_variance_fields;
};

export type nb_meeting_participants_aggregate_order_by = {
  avg?: nb_meeting_participants_avg_order_by;
  count?: order_by;
  max?: nb_meeting_participants_max_order_by;
  min?: nb_meeting_participants_min_order_by;
  stddev?: nb_meeting_participants_stddev_order_by;
  stddev_pop?: nb_meeting_participants_stddev_pop_order_by;
  stddev_samp?: nb_meeting_participants_stddev_samp_order_by;
  sum?: nb_meeting_participants_sum_order_by;
  var_pop?: nb_meeting_participants_var_pop_order_by;
  var_samp?: nb_meeting_participants_var_samp_order_by;
  variance?: nb_meeting_participants_variance_order_by;
};

export type nb_meeting_participants_arr_rel_insert_input = {
  data: nb_meeting_participants_insert_input[];
  on_conflict?: nb_meeting_participants_on_conflict;
};

export type nb_meeting_participants_avg_fields = {
  __typename?: "nb_meeting_participants_avg_fields";
  id?: number;
  meeting_id?: number;
};

export type nb_meeting_participants_avg_order_by = {
  id?: order_by;
  meeting_id?: order_by;
};

export type nb_meeting_participants_bool_exp = {
  _and?: (nb_meeting_participants_bool_exp | undefined)[];
  _not?: nb_meeting_participants_bool_exp;
  _or?: (nb_meeting_participants_bool_exp | undefined)[];
  cr_user?: cr_user_bool_exp;
  id?: Int_comparison_exp;
  meeting_id?: Int_comparison_exp;
  nb_meeting?: nb_meeting_bool_exp;
  user_id?: uuid_comparison_exp;
};

export enum nb_meeting_participants_constraint {
  nb_meeting_participants_meeting_id_user_id_5e7feeb9_uniq = "nb_meeting_participants_meeting_id_user_id_5e7feeb9_uniq",
  nb_meeting_participants_pkey = "nb_meeting_participants_pkey",
}

export type nb_meeting_participants_inc_input = {
  id?: number;
  meeting_id?: number;
};

export type nb_meeting_participants_insert_input = {
  cr_user?: cr_user_obj_rel_insert_input;
  id?: number;
  meeting_id?: number;
  nb_meeting?: nb_meeting_obj_rel_insert_input;
  user_id?: uuid;
};

export type nb_meeting_participants_max_fields = {
  __typename?: "nb_meeting_participants_max_fields";
  id?: number;
  meeting_id?: number;
  user_id?: uuid;
};

export type nb_meeting_participants_max_order_by = {
  id?: order_by;
  meeting_id?: order_by;
  user_id?: order_by;
};

export type nb_meeting_participants_min_fields = {
  __typename?: "nb_meeting_participants_min_fields";
  id?: number;
  meeting_id?: number;
  user_id?: uuid;
};

export type nb_meeting_participants_min_order_by = {
  id?: order_by;
  meeting_id?: order_by;
  user_id?: order_by;
};

export type nb_meeting_participants_mutation_response = {
  __typename?: "nb_meeting_participants_mutation_response";
  affected_rows: number;
  returning: nb_meeting_participants[];
};

export type nb_meeting_participants_obj_rel_insert_input = {
  data: nb_meeting_participants_insert_input;
  on_conflict?: nb_meeting_participants_on_conflict;
};

export type nb_meeting_participants_on_conflict = {
  constraint: nb_meeting_participants_constraint;
  update_columns: nb_meeting_participants_update_column[];
  where?: nb_meeting_participants_bool_exp;
};

export type nb_meeting_participants_order_by = {
  cr_user?: cr_user_order_by;
  id?: order_by;
  meeting_id?: order_by;
  nb_meeting?: nb_meeting_order_by;
  user_id?: order_by;
};

export type nb_meeting_participants_pk_columns_input = {
  id: number;
};

export enum nb_meeting_participants_select_column {
  id = "id",
  meeting_id = "meeting_id",
  user_id = "user_id",
}

export type nb_meeting_participants_set_input = {
  id?: number;
  meeting_id?: number;
  user_id?: uuid;
};

export type nb_meeting_participants_stddev_fields = {
  __typename?: "nb_meeting_participants_stddev_fields";
  id?: number;
  meeting_id?: number;
};

export type nb_meeting_participants_stddev_order_by = {
  id?: order_by;
  meeting_id?: order_by;
};

export type nb_meeting_participants_stddev_pop_fields = {
  __typename?: "nb_meeting_participants_stddev_pop_fields";
  id?: number;
  meeting_id?: number;
};

export type nb_meeting_participants_stddev_pop_order_by = {
  id?: order_by;
  meeting_id?: order_by;
};

export type nb_meeting_participants_stddev_samp_fields = {
  __typename?: "nb_meeting_participants_stddev_samp_fields";
  id?: number;
  meeting_id?: number;
};

export type nb_meeting_participants_stddev_samp_order_by = {
  id?: order_by;
  meeting_id?: order_by;
};

export type nb_meeting_participants_sum_fields = {
  __typename?: "nb_meeting_participants_sum_fields";
  id?: number;
  meeting_id?: number;
};

export type nb_meeting_participants_sum_order_by = {
  id?: order_by;
  meeting_id?: order_by;
};

export enum nb_meeting_participants_update_column {
  id = "id",
  meeting_id = "meeting_id",
  user_id = "user_id",
}

export type nb_meeting_participants_var_pop_fields = {
  __typename?: "nb_meeting_participants_var_pop_fields";
  id?: number;
  meeting_id?: number;
};

export type nb_meeting_participants_var_pop_order_by = {
  id?: order_by;
  meeting_id?: order_by;
};

export type nb_meeting_participants_var_samp_fields = {
  __typename?: "nb_meeting_participants_var_samp_fields";
  id?: number;
  meeting_id?: number;
};

export type nb_meeting_participants_var_samp_order_by = {
  id?: order_by;
  meeting_id?: order_by;
};

export type nb_meeting_participants_variance_fields = {
  __typename?: "nb_meeting_participants_variance_fields";
  id?: number;
  meeting_id?: number;
};

export type nb_meeting_participants_variance_order_by = {
  id?: order_by;
  meeting_id?: order_by;
};

export type nb_meeting_pk_columns_input = {
  id: number;
};

export enum nb_meeting_select_column {
  created_at = "created_at",
  description = "description",
  end_time = "end_time",
  guild_id = "guild_id",
  id = "id",
  image = "image",
  location = "location",
  meeting_url = "meeting_url",
  name = "name",
  organizer_id = "organizer_id",
  publication_time = "publication_time",
  slug = "slug",
  sphere_id = "sphere_id",
  start_time = "start_time",
  status = "status",
  updated_at = "updated_at",
}

export type nb_meeting_set_input = {
  created_at?: timestamptz;
  description?: string;
  end_time?: timestamptz;
  guild_id?: number;
  id?: number;
  image?: string;
  location?: string;
  meeting_url?: string;
  name?: string;
  organizer_id?: uuid;
  publication_time?: timestamptz;
  slug?: string;
  sphere_id?: number;
  start_time?: timestamptz;
  status?: string;
  updated_at?: timestamptz;
};

export type nb_meeting_stddev_fields = {
  __typename?: "nb_meeting_stddev_fields";
  guild_id?: number;
  id?: number;
  sphere_id?: number;
};

export type nb_meeting_stddev_order_by = {
  guild_id?: order_by;
  id?: order_by;
  sphere_id?: order_by;
};

export type nb_meeting_stddev_pop_fields = {
  __typename?: "nb_meeting_stddev_pop_fields";
  guild_id?: number;
  id?: number;
  sphere_id?: number;
};

export type nb_meeting_stddev_pop_order_by = {
  guild_id?: order_by;
  id?: order_by;
  sphere_id?: order_by;
};

export type nb_meeting_stddev_samp_fields = {
  __typename?: "nb_meeting_stddev_samp_fields";
  guild_id?: number;
  id?: number;
  sphere_id?: number;
};

export type nb_meeting_stddev_samp_order_by = {
  guild_id?: order_by;
  id?: order_by;
  sphere_id?: order_by;
};

export type nb_meeting_sum_fields = {
  __typename?: "nb_meeting_sum_fields";
  guild_id?: number;
  id?: number;
  sphere_id?: number;
};

export type nb_meeting_sum_order_by = {
  guild_id?: order_by;
  id?: order_by;
  sphere_id?: order_by;
};

export enum nb_meeting_update_column {
  created_at = "created_at",
  description = "description",
  end_time = "end_time",
  guild_id = "guild_id",
  id = "id",
  image = "image",
  location = "location",
  meeting_url = "meeting_url",
  name = "name",
  organizer_id = "organizer_id",
  publication_time = "publication_time",
  slug = "slug",
  sphere_id = "sphere_id",
  start_time = "start_time",
  status = "status",
  updated_at = "updated_at",
}

export type nb_meeting_var_pop_fields = {
  __typename?: "nb_meeting_var_pop_fields";
  guild_id?: number;
  id?: number;
  sphere_id?: number;
};

export type nb_meeting_var_pop_order_by = {
  guild_id?: order_by;
  id?: order_by;
  sphere_id?: order_by;
};

export type nb_meeting_var_samp_fields = {
  __typename?: "nb_meeting_var_samp_fields";
  guild_id?: number;
  id?: number;
  sphere_id?: number;
};

export type nb_meeting_var_samp_order_by = {
  guild_id?: order_by;
  id?: order_by;
  sphere_id?: order_by;
};

export type nb_meeting_variance_fields = {
  __typename?: "nb_meeting_variance_fields";
  guild_id?: number;
  id?: number;
  sphere_id?: number;
};

export type nb_meeting_variance_order_by = {
  guild_id?: order_by;
  id?: order_by;
  sphere_id?: order_by;
};

export type nb_sphere = {
  __typename?: "nb_sphere";
  ch_festivals: ch_festival[];
  ch_festivals_aggregate: ch_festival_aggregate;
  django_site: django_site;
  id: number;
  is_open: boolean;
  name: string;
  nb_meetings: nb_meeting[];
  nb_meetings_aggregate: nb_meeting_aggregate;
  nb_sphere_managers: nb_sphere_managers[];
  nb_sphere_managers_aggregate: nb_sphere_managers_aggregate;
  settings: jsonb;
  site_id: number;
};

export type nb_sphere_aggregate = {
  __typename?: "nb_sphere_aggregate";
  aggregate?: nb_sphere_aggregate_fields;
  nodes: nb_sphere[];
};

export type nb_sphere_aggregate_fields = {
  __typename?: "nb_sphere_aggregate_fields";
  avg?: nb_sphere_avg_fields;
  count?: number;
  max?: nb_sphere_max_fields;
  min?: nb_sphere_min_fields;
  stddev?: nb_sphere_stddev_fields;
  stddev_pop?: nb_sphere_stddev_pop_fields;
  stddev_samp?: nb_sphere_stddev_samp_fields;
  sum?: nb_sphere_sum_fields;
  var_pop?: nb_sphere_var_pop_fields;
  var_samp?: nb_sphere_var_samp_fields;
  variance?: nb_sphere_variance_fields;
};

export type nb_sphere_aggregate_order_by = {
  avg?: nb_sphere_avg_order_by;
  count?: order_by;
  max?: nb_sphere_max_order_by;
  min?: nb_sphere_min_order_by;
  stddev?: nb_sphere_stddev_order_by;
  stddev_pop?: nb_sphere_stddev_pop_order_by;
  stddev_samp?: nb_sphere_stddev_samp_order_by;
  sum?: nb_sphere_sum_order_by;
  var_pop?: nb_sphere_var_pop_order_by;
  var_samp?: nb_sphere_var_samp_order_by;
  variance?: nb_sphere_variance_order_by;
};

export type nb_sphere_append_input = {
  settings?: jsonb;
};

export type nb_sphere_arr_rel_insert_input = {
  data: nb_sphere_insert_input[];
  on_conflict?: nb_sphere_on_conflict;
};

export type nb_sphere_avg_fields = {
  __typename?: "nb_sphere_avg_fields";
  id?: number;
  site_id?: number;
};

export type nb_sphere_avg_order_by = {
  id?: order_by;
  site_id?: order_by;
};

export type nb_sphere_bool_exp = {
  _and?: (nb_sphere_bool_exp | undefined)[];
  _not?: nb_sphere_bool_exp;
  _or?: (nb_sphere_bool_exp | undefined)[];
  ch_festivals?: ch_festival_bool_exp;
  django_site?: django_site_bool_exp;
  id?: Int_comparison_exp;
  is_open?: Boolean_comparison_exp;
  name?: String_comparison_exp;
  nb_meetings?: nb_meeting_bool_exp;
  nb_sphere_managers?: nb_sphere_managers_bool_exp;
  settings?: jsonb_comparison_exp;
  site_id?: Int_comparison_exp;
};

export enum nb_sphere_constraint {
  nb_sphere_pkey = "nb_sphere_pkey",
  nb_sphere_site_id_key = "nb_sphere_site_id_key",
}

export type nb_sphere_delete_at_path_input = {
  settings?: (string | undefined)[];
};

export type nb_sphere_delete_elem_input = {
  settings?: number;
};

export type nb_sphere_delete_key_input = {
  settings?: string;
};

export type nb_sphere_inc_input = {
  id?: number;
  site_id?: number;
};

export type nb_sphere_insert_input = {
  ch_festivals?: ch_festival_arr_rel_insert_input;
  django_site?: django_site_obj_rel_insert_input;
  id?: number;
  is_open?: boolean;
  name?: string;
  nb_meetings?: nb_meeting_arr_rel_insert_input;
  nb_sphere_managers?: nb_sphere_managers_arr_rel_insert_input;
  settings?: jsonb;
  site_id?: number;
};

export type nb_sphere_managers = {
  __typename?: "nb_sphere_managers";
  cr_user: cr_user;
  id: number;
  nb_sphere: nb_sphere;
  sphere_id: number;
  user_id: uuid;
};

export type nb_sphere_managers_aggregate = {
  __typename?: "nb_sphere_managers_aggregate";
  aggregate?: nb_sphere_managers_aggregate_fields;
  nodes: nb_sphere_managers[];
};

export type nb_sphere_managers_aggregate_fields = {
  __typename?: "nb_sphere_managers_aggregate_fields";
  avg?: nb_sphere_managers_avg_fields;
  count?: number;
  max?: nb_sphere_managers_max_fields;
  min?: nb_sphere_managers_min_fields;
  stddev?: nb_sphere_managers_stddev_fields;
  stddev_pop?: nb_sphere_managers_stddev_pop_fields;
  stddev_samp?: nb_sphere_managers_stddev_samp_fields;
  sum?: nb_sphere_managers_sum_fields;
  var_pop?: nb_sphere_managers_var_pop_fields;
  var_samp?: nb_sphere_managers_var_samp_fields;
  variance?: nb_sphere_managers_variance_fields;
};

export type nb_sphere_managers_aggregate_order_by = {
  avg?: nb_sphere_managers_avg_order_by;
  count?: order_by;
  max?: nb_sphere_managers_max_order_by;
  min?: nb_sphere_managers_min_order_by;
  stddev?: nb_sphere_managers_stddev_order_by;
  stddev_pop?: nb_sphere_managers_stddev_pop_order_by;
  stddev_samp?: nb_sphere_managers_stddev_samp_order_by;
  sum?: nb_sphere_managers_sum_order_by;
  var_pop?: nb_sphere_managers_var_pop_order_by;
  var_samp?: nb_sphere_managers_var_samp_order_by;
  variance?: nb_sphere_managers_variance_order_by;
};

export type nb_sphere_managers_arr_rel_insert_input = {
  data: nb_sphere_managers_insert_input[];
  on_conflict?: nb_sphere_managers_on_conflict;
};

export type nb_sphere_managers_avg_fields = {
  __typename?: "nb_sphere_managers_avg_fields";
  id?: number;
  sphere_id?: number;
};

export type nb_sphere_managers_avg_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export type nb_sphere_managers_bool_exp = {
  _and?: (nb_sphere_managers_bool_exp | undefined)[];
  _not?: nb_sphere_managers_bool_exp;
  _or?: (nb_sphere_managers_bool_exp | undefined)[];
  cr_user?: cr_user_bool_exp;
  id?: Int_comparison_exp;
  nb_sphere?: nb_sphere_bool_exp;
  sphere_id?: Int_comparison_exp;
  user_id?: uuid_comparison_exp;
};

export enum nb_sphere_managers_constraint {
  nb_sphere_managers_pkey = "nb_sphere_managers_pkey",
  nb_sphere_managers_sphere_id_user_id_9c2cd3a3_uniq = "nb_sphere_managers_sphere_id_user_id_9c2cd3a3_uniq",
}

export type nb_sphere_managers_inc_input = {
  id?: number;
  sphere_id?: number;
};

export type nb_sphere_managers_insert_input = {
  cr_user?: cr_user_obj_rel_insert_input;
  id?: number;
  nb_sphere?: nb_sphere_obj_rel_insert_input;
  sphere_id?: number;
  user_id?: uuid;
};

export type nb_sphere_managers_max_fields = {
  __typename?: "nb_sphere_managers_max_fields";
  id?: number;
  sphere_id?: number;
  user_id?: uuid;
};

export type nb_sphere_managers_max_order_by = {
  id?: order_by;
  sphere_id?: order_by;
  user_id?: order_by;
};

export type nb_sphere_managers_min_fields = {
  __typename?: "nb_sphere_managers_min_fields";
  id?: number;
  sphere_id?: number;
  user_id?: uuid;
};

export type nb_sphere_managers_min_order_by = {
  id?: order_by;
  sphere_id?: order_by;
  user_id?: order_by;
};

export type nb_sphere_managers_mutation_response = {
  __typename?: "nb_sphere_managers_mutation_response";
  affected_rows: number;
  returning: nb_sphere_managers[];
};

export type nb_sphere_managers_obj_rel_insert_input = {
  data: nb_sphere_managers_insert_input;
  on_conflict?: nb_sphere_managers_on_conflict;
};

export type nb_sphere_managers_on_conflict = {
  constraint: nb_sphere_managers_constraint;
  update_columns: nb_sphere_managers_update_column[];
  where?: nb_sphere_managers_bool_exp;
};

export type nb_sphere_managers_order_by = {
  cr_user?: cr_user_order_by;
  id?: order_by;
  nb_sphere?: nb_sphere_order_by;
  sphere_id?: order_by;
  user_id?: order_by;
};

export type nb_sphere_managers_pk_columns_input = {
  id: number;
};

export enum nb_sphere_managers_select_column {
  id = "id",
  sphere_id = "sphere_id",
  user_id = "user_id",
}

export type nb_sphere_managers_set_input = {
  id?: number;
  sphere_id?: number;
  user_id?: uuid;
};

export type nb_sphere_managers_stddev_fields = {
  __typename?: "nb_sphere_managers_stddev_fields";
  id?: number;
  sphere_id?: number;
};

export type nb_sphere_managers_stddev_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export type nb_sphere_managers_stddev_pop_fields = {
  __typename?: "nb_sphere_managers_stddev_pop_fields";
  id?: number;
  sphere_id?: number;
};

export type nb_sphere_managers_stddev_pop_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export type nb_sphere_managers_stddev_samp_fields = {
  __typename?: "nb_sphere_managers_stddev_samp_fields";
  id?: number;
  sphere_id?: number;
};

export type nb_sphere_managers_stddev_samp_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export type nb_sphere_managers_sum_fields = {
  __typename?: "nb_sphere_managers_sum_fields";
  id?: number;
  sphere_id?: number;
};

export type nb_sphere_managers_sum_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export enum nb_sphere_managers_update_column {
  id = "id",
  sphere_id = "sphere_id",
  user_id = "user_id",
}

export type nb_sphere_managers_var_pop_fields = {
  __typename?: "nb_sphere_managers_var_pop_fields";
  id?: number;
  sphere_id?: number;
};

export type nb_sphere_managers_var_pop_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export type nb_sphere_managers_var_samp_fields = {
  __typename?: "nb_sphere_managers_var_samp_fields";
  id?: number;
  sphere_id?: number;
};

export type nb_sphere_managers_var_samp_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export type nb_sphere_managers_variance_fields = {
  __typename?: "nb_sphere_managers_variance_fields";
  id?: number;
  sphere_id?: number;
};

export type nb_sphere_managers_variance_order_by = {
  id?: order_by;
  sphere_id?: order_by;
};

export type nb_sphere_max_fields = {
  __typename?: "nb_sphere_max_fields";
  id?: number;
  name?: string;
  site_id?: number;
};

export type nb_sphere_max_order_by = {
  id?: order_by;
  name?: order_by;
  site_id?: order_by;
};

export type nb_sphere_min_fields = {
  __typename?: "nb_sphere_min_fields";
  id?: number;
  name?: string;
  site_id?: number;
};

export type nb_sphere_min_order_by = {
  id?: order_by;
  name?: order_by;
  site_id?: order_by;
};

export type nb_sphere_mutation_response = {
  __typename?: "nb_sphere_mutation_response";
  affected_rows: number;
  returning: nb_sphere[];
};

export type nb_sphere_obj_rel_insert_input = {
  data: nb_sphere_insert_input;
  on_conflict?: nb_sphere_on_conflict;
};

export type nb_sphere_on_conflict = {
  constraint: nb_sphere_constraint;
  update_columns: nb_sphere_update_column[];
  where?: nb_sphere_bool_exp;
};

export type nb_sphere_order_by = {
  ch_festivals_aggregate?: ch_festival_aggregate_order_by;
  django_site?: django_site_order_by;
  id?: order_by;
  is_open?: order_by;
  name?: order_by;
  nb_meetings_aggregate?: nb_meeting_aggregate_order_by;
  nb_sphere_managers_aggregate?: nb_sphere_managers_aggregate_order_by;
  settings?: order_by;
  site_id?: order_by;
};

export type nb_sphere_pk_columns_input = {
  id: number;
};

export type nb_sphere_prepend_input = {
  settings?: jsonb;
};

export enum nb_sphere_select_column {
  id = "id",
  is_open = "is_open",
  name = "name",
  settings = "settings",
  site_id = "site_id",
}

export type nb_sphere_set_input = {
  id?: number;
  is_open?: boolean;
  name?: string;
  settings?: jsonb;
  site_id?: number;
};

export type nb_sphere_stddev_fields = {
  __typename?: "nb_sphere_stddev_fields";
  id?: number;
  site_id?: number;
};

export type nb_sphere_stddev_order_by = {
  id?: order_by;
  site_id?: order_by;
};

export type nb_sphere_stddev_pop_fields = {
  __typename?: "nb_sphere_stddev_pop_fields";
  id?: number;
  site_id?: number;
};

export type nb_sphere_stddev_pop_order_by = {
  id?: order_by;
  site_id?: order_by;
};

export type nb_sphere_stddev_samp_fields = {
  __typename?: "nb_sphere_stddev_samp_fields";
  id?: number;
  site_id?: number;
};

export type nb_sphere_stddev_samp_order_by = {
  id?: order_by;
  site_id?: order_by;
};

export type nb_sphere_sum_fields = {
  __typename?: "nb_sphere_sum_fields";
  id?: number;
  site_id?: number;
};

export type nb_sphere_sum_order_by = {
  id?: order_by;
  site_id?: order_by;
};

export enum nb_sphere_update_column {
  id = "id",
  is_open = "is_open",
  name = "name",
  settings = "settings",
  site_id = "site_id",
}

export type nb_sphere_var_pop_fields = {
  __typename?: "nb_sphere_var_pop_fields";
  id?: number;
  site_id?: number;
};

export type nb_sphere_var_pop_order_by = {
  id?: order_by;
  site_id?: order_by;
};

export type nb_sphere_var_samp_fields = {
  __typename?: "nb_sphere_var_samp_fields";
  id?: number;
  site_id?: number;
};

export type nb_sphere_var_samp_order_by = {
  id?: order_by;
  site_id?: order_by;
};

export type nb_sphere_variance_fields = {
  __typename?: "nb_sphere_variance_fields";
  id?: number;
  site_id?: number;
};

export type nb_sphere_variance_order_by = {
  id?: order_by;
  site_id?: order_by;
};

export enum order_by {
  asc = "asc",
  asc_nulls_first = "asc_nulls_first",
  asc_nulls_last = "asc_nulls_last",
  desc = "desc",
  desc_nulls_first = "desc_nulls_first",
  desc_nulls_last = "desc_nulls_last",
}

export type query_root = {
  __typename?: "query_root";
  ch_agenda_item: ch_agenda_item[];
  ch_agenda_item_aggregate: ch_agenda_item_aggregate;
  ch_agenda_item_by_pk?: ch_agenda_item;
  ch_festival: ch_festival[];
  ch_festival_aggregate: ch_festival_aggregate;
  ch_festival_by_pk?: ch_festival;
  ch_helper: ch_helper[];
  ch_helper_aggregate: ch_helper_aggregate;
  ch_helper_by_pk?: ch_helper;
  ch_helper_time_slots: ch_helper_time_slots[];
  ch_helper_time_slots_aggregate: ch_helper_time_slots_aggregate;
  ch_helper_time_slots_by_pk?: ch_helper_time_slots;
  ch_proposal: ch_proposal[];
  ch_proposal_aggregate: ch_proposal_aggregate;
  ch_proposal_by_pk?: ch_proposal;
  ch_proposal_time_slots: ch_proposal_time_slots[];
  ch_proposal_time_slots_aggregate: ch_proposal_time_slots_aggregate;
  ch_proposal_time_slots_by_pk?: ch_proposal_time_slots;
  ch_room: ch_room[];
  ch_room_aggregate: ch_room_aggregate;
  ch_room_by_pk?: ch_room;
  ch_time_slot: ch_time_slot[];
  ch_time_slot_aggregate: ch_time_slot_aggregate;
  ch_time_slot_by_pk?: ch_time_slot;
  ch_wait_list: ch_wait_list[];
  ch_wait_list_aggregate: ch_wait_list_aggregate;
  ch_wait_list_by_pk?: ch_wait_list;
  cr_user: cr_user[];
  cr_user_aggregate: cr_user_aggregate;
  cr_user_by_pk?: cr_user;
  django_site: django_site[];
  django_site_aggregate: django_site_aggregate;
  django_site_by_pk?: django_site;
  nb_guild: nb_guild[];
  nb_guild_aggregate: nb_guild_aggregate;
  nb_guild_by_pk?: nb_guild;
  nb_guild_member: nb_guild_member[];
  nb_guild_member_aggregate: nb_guild_member_aggregate;
  nb_guild_member_by_pk?: nb_guild_member;
  nb_meeting: nb_meeting[];
  nb_meeting_aggregate: nb_meeting_aggregate;
  nb_meeting_by_pk?: nb_meeting;
  nb_meeting_participants: nb_meeting_participants[];
  nb_meeting_participants_aggregate: nb_meeting_participants_aggregate;
  nb_meeting_participants_by_pk?: nb_meeting_participants;
  nb_sphere: nb_sphere[];
  nb_sphere_aggregate: nb_sphere_aggregate;
  nb_sphere_by_pk?: nb_sphere;
  nb_sphere_managers: nb_sphere_managers[];
  nb_sphere_managers_aggregate: nb_sphere_managers_aggregate;
  nb_sphere_managers_by_pk?: nb_sphere_managers;
};

export type String_comparison_exp = {
  _eq?: string;
  _gt?: string;
  _gte?: string;
  _ilike?: string;
  _in?: string[];
  _is_null?: boolean;
  _like?: string;
  _lt?: string;
  _lte?: string;
  _neq?: string;
  _nilike?: string;
  _nin?: string[];
  _nlike?: string;
  _nsimilar?: string;
  _similar?: string;
};

export type subscription_root = {
  __typename?: "subscription_root";
  ch_agenda_item: ch_agenda_item[];
  ch_agenda_item_aggregate: ch_agenda_item_aggregate;
  ch_agenda_item_by_pk?: ch_agenda_item;
  ch_festival: ch_festival[];
  ch_festival_aggregate: ch_festival_aggregate;
  ch_festival_by_pk?: ch_festival;
  ch_helper: ch_helper[];
  ch_helper_aggregate: ch_helper_aggregate;
  ch_helper_by_pk?: ch_helper;
  ch_helper_time_slots: ch_helper_time_slots[];
  ch_helper_time_slots_aggregate: ch_helper_time_slots_aggregate;
  ch_helper_time_slots_by_pk?: ch_helper_time_slots;
  ch_proposal: ch_proposal[];
  ch_proposal_aggregate: ch_proposal_aggregate;
  ch_proposal_by_pk?: ch_proposal;
  ch_proposal_time_slots: ch_proposal_time_slots[];
  ch_proposal_time_slots_aggregate: ch_proposal_time_slots_aggregate;
  ch_proposal_time_slots_by_pk?: ch_proposal_time_slots;
  ch_room: ch_room[];
  ch_room_aggregate: ch_room_aggregate;
  ch_room_by_pk?: ch_room;
  ch_time_slot: ch_time_slot[];
  ch_time_slot_aggregate: ch_time_slot_aggregate;
  ch_time_slot_by_pk?: ch_time_slot;
  ch_wait_list: ch_wait_list[];
  ch_wait_list_aggregate: ch_wait_list_aggregate;
  ch_wait_list_by_pk?: ch_wait_list;
  cr_user: cr_user[];
  cr_user_aggregate: cr_user_aggregate;
  cr_user_by_pk?: cr_user;
  django_site: django_site[];
  django_site_aggregate: django_site_aggregate;
  django_site_by_pk?: django_site;
  nb_guild: nb_guild[];
  nb_guild_aggregate: nb_guild_aggregate;
  nb_guild_by_pk?: nb_guild;
  nb_guild_member: nb_guild_member[];
  nb_guild_member_aggregate: nb_guild_member_aggregate;
  nb_guild_member_by_pk?: nb_guild_member;
  nb_meeting: nb_meeting[];
  nb_meeting_aggregate: nb_meeting_aggregate;
  nb_meeting_by_pk?: nb_meeting;
  nb_meeting_participants: nb_meeting_participants[];
  nb_meeting_participants_aggregate: nb_meeting_participants_aggregate;
  nb_meeting_participants_by_pk?: nb_meeting_participants;
  nb_sphere: nb_sphere[];
  nb_sphere_aggregate: nb_sphere_aggregate;
  nb_sphere_by_pk?: nb_sphere;
  nb_sphere_managers: nb_sphere_managers[];
  nb_sphere_managers_aggregate: nb_sphere_managers_aggregate;
  nb_sphere_managers_by_pk?: nb_sphere_managers;
};

export type timestamptz = any;

export type timestamptz_comparison_exp = {
  _eq?: timestamptz;
  _gt?: timestamptz;
  _gte?: timestamptz;
  _in?: timestamptz[];
  _is_null?: boolean;
  _lt?: timestamptz;
  _lte?: timestamptz;
  _neq?: timestamptz;
  _nin?: timestamptz[];
};

export type uuid = any;

export type uuid_comparison_exp = {
  _eq?: uuid;
  _gt?: uuid;
  _gte?: uuid;
  _in?: uuid[];
  _is_null?: boolean;
  _lt?: uuid;
  _lte?: uuid;
  _neq?: uuid;
  _nin?: uuid[];
};

export const AllTypesProps: Record<string, any> = {
  Boolean_comparison_exp: {
    _eq: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _in: {
      type: "Boolean",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "Boolean",
      array: true,
      arrayRequired: false,
      required: true,
    },
  },
  ch_agenda_item_aggregate_fields: {
    count: {
      columns: {
        type: "ch_agenda_item_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_agenda_item_aggregate_order_by: {
    avg: {
      type: "ch_agenda_item_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "ch_agenda_item_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "ch_agenda_item_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "ch_agenda_item_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "ch_agenda_item_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "ch_agenda_item_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "ch_agenda_item_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "ch_agenda_item_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "ch_agenda_item_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "ch_agenda_item_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_arr_rel_insert_input: {
    data: {
      type: "ch_agenda_item_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "ch_agenda_item_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_avg_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_bool_exp: {
    _and: {
      type: "ch_agenda_item_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "ch_agenda_item_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "ch_agenda_item_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    ch_helper: {
      type: "ch_helper_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_room: {
      type: "ch_room_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    helper_confirmed: {
      type: "Boolean_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    helper_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_confirmed: {
      type: "Boolean_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_meeting: {
      type: "nb_meeting_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_constraint: "enum",
  ch_agenda_item_inc_input: {
    helper_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_insert_input: {
    ch_helper: {
      type: "ch_helper_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_room: {
      type: "ch_room_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    helper_confirmed: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    helper_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_confirmed: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_meeting: {
      type: "nb_meeting_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_max_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_min_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_obj_rel_insert_input: {
    data: {
      type: "ch_agenda_item_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "ch_agenda_item_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_on_conflict: {
    constraint: {
      type: "ch_agenda_item_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "ch_agenda_item_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "ch_agenda_item_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_order_by: {
    ch_helper: {
      type: "ch_helper_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_room: {
      type: "ch_room_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    helper_confirmed: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_confirmed: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_meeting: {
      type: "nb_meeting_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  ch_agenda_item_select_column: "enum",
  ch_agenda_item_set_input: {
    helper_confirmed: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    helper_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_confirmed: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_stddev_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_stddev_pop_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_stddev_samp_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_sum_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_update_column: "enum",
  ch_agenda_item_var_pop_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_var_samp_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_agenda_item_variance_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    room_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival: {
    ch_helpers: {
      distinct_on: {
        type: "ch_helper_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_helpers_aggregate: {
      distinct_on: {
        type: "ch_helper_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_rooms: {
      distinct_on: {
        type: "ch_room_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_room_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_room_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_rooms_aggregate: {
      distinct_on: {
        type: "ch_room_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_room_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_room_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_wait_lists: {
      distinct_on: {
        type: "ch_wait_list_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_wait_list_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_wait_list_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_wait_lists_aggregate: {
      distinct_on: {
        type: "ch_wait_list_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_wait_list_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_wait_list_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    settings: {
      path: {
        type: "String",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_festival_aggregate_fields: {
    count: {
      columns: {
        type: "ch_festival_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_festival_aggregate_order_by: {
    avg: {
      type: "ch_festival_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "ch_festival_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "ch_festival_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "ch_festival_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "ch_festival_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "ch_festival_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "ch_festival_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "ch_festival_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "ch_festival_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "ch_festival_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_append_input: {
    settings: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_arr_rel_insert_input: {
    data: {
      type: "ch_festival_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "ch_festival_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_bool_exp: {
    _and: {
      type: "ch_festival_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "ch_festival_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "ch_festival_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    ch_helpers: {
      type: "ch_helper_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_rooms: {
      type: "ch_room_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_wait_lists: {
      type: "ch_wait_list_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_proposal: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_sphere: {
      type: "nb_sphere_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    settings: {
      type: "jsonb_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_proposal: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_publication: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_constraint: "enum",
  ch_festival_delete_at_path_input: {
    settings: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_delete_elem_input: {
    settings: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_delete_key_input: {
    settings: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_insert_input: {
    ch_helpers: {
      type: "ch_helper_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_rooms: {
      type: "ch_room_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_wait_lists: {
      type: "ch_wait_list_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_proposal: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_sphere: {
      type: "nb_sphere_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    settings: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_proposal: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_publication: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_max_order_by: {
    end_proposal: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_proposal: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_publication: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_min_order_by: {
    end_proposal: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_proposal: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_publication: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_obj_rel_insert_input: {
    data: {
      type: "ch_festival_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "ch_festival_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_on_conflict: {
    constraint: {
      type: "ch_festival_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "ch_festival_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "ch_festival_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_order_by: {
    ch_helpers_aggregate: {
      type: "ch_helper_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_rooms_aggregate: {
      type: "ch_room_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_wait_lists_aggregate: {
      type: "ch_wait_list_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_proposal: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_sphere: {
      type: "nb_sphere_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    settings: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_proposal: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_publication: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  ch_festival_prepend_input: {
    settings: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_select_column: "enum",
  ch_festival_set_input: {
    end_proposal: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    settings: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_proposal: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_publication: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_update_column: "enum",
  ch_festival_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_festival_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper: {
    ch_agenda_items: {
      distinct_on: {
        type: "ch_agenda_item_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_agenda_item_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_agenda_item_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_agenda_items_aggregate: {
      distinct_on: {
        type: "ch_agenda_item_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_agenda_item_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_agenda_item_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_helper_time_slots: {
      distinct_on: {
        type: "ch_helper_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_helper_time_slots_aggregate: {
      distinct_on: {
        type: "ch_helper_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_helper_aggregate_fields: {
    count: {
      columns: {
        type: "ch_helper_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_helper_aggregate_order_by: {
    avg: {
      type: "ch_helper_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "ch_helper_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "ch_helper_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "ch_helper_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "ch_helper_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "ch_helper_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "ch_helper_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "ch_helper_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "ch_helper_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "ch_helper_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_arr_rel_insert_input: {
    data: {
      type: "ch_helper_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "ch_helper_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_avg_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_bool_exp: {
    _and: {
      type: "ch_helper_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "ch_helper_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "ch_helper_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    ch_agenda_items: {
      type: "ch_agenda_item_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_festival: {
      type: "ch_festival_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_helper_time_slots: {
      type: "ch_helper_time_slots_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    cr_user: {
      type: "cr_user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "uuid_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_constraint: "enum",
  ch_helper_inc_input: {
    festival_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_insert_input: {
    ch_agenda_items: {
      type: "ch_agenda_item_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_festival: {
      type: "ch_festival_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_helper_time_slots: {
      type: "ch_helper_time_slots_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    cr_user: {
      type: "cr_user_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_max_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_min_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_obj_rel_insert_input: {
    data: {
      type: "ch_helper_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "ch_helper_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_on_conflict: {
    constraint: {
      type: "ch_helper_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "ch_helper_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "ch_helper_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_order_by: {
    ch_agenda_items_aggregate: {
      type: "ch_agenda_item_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_festival: {
      type: "ch_festival_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_helper_time_slots_aggregate: {
      type: "ch_helper_time_slots_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    cr_user: {
      type: "cr_user_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  ch_helper_select_column: "enum",
  ch_helper_set_input: {
    festival_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_stddev_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_stddev_pop_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_stddev_samp_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_sum_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_aggregate_fields: {
    count: {
      columns: {
        type: "ch_helper_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_helper_time_slots_aggregate_order_by: {
    avg: {
      type: "ch_helper_time_slots_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "ch_helper_time_slots_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "ch_helper_time_slots_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "ch_helper_time_slots_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "ch_helper_time_slots_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "ch_helper_time_slots_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "ch_helper_time_slots_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "ch_helper_time_slots_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "ch_helper_time_slots_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "ch_helper_time_slots_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_arr_rel_insert_input: {
    data: {
      type: "ch_helper_time_slots_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "ch_helper_time_slots_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_avg_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_bool_exp: {
    _and: {
      type: "ch_helper_time_slots_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "ch_helper_time_slots_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "ch_helper_time_slots_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    ch_helper: {
      type: "ch_helper_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_time_slot: {
      type: "ch_time_slot_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    helper_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_constraint: "enum",
  ch_helper_time_slots_inc_input: {
    helper_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_insert_input: {
    ch_helper: {
      type: "ch_helper_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_time_slot: {
      type: "ch_time_slot_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    helper_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_max_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_min_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_obj_rel_insert_input: {
    data: {
      type: "ch_helper_time_slots_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "ch_helper_time_slots_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_on_conflict: {
    constraint: {
      type: "ch_helper_time_slots_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "ch_helper_time_slots_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "ch_helper_time_slots_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_order_by: {
    ch_helper: {
      type: "ch_helper_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_time_slot: {
      type: "ch_time_slot_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  ch_helper_time_slots_select_column: "enum",
  ch_helper_time_slots_set_input: {
    helper_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_stddev_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_stddev_pop_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_stddev_samp_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_sum_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_update_column: "enum",
  ch_helper_time_slots_var_pop_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_var_samp_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_time_slots_variance_order_by: {
    helper_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_update_column: "enum",
  ch_helper_var_pop_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_var_samp_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_helper_variance_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal: {
    ch_proposal_time_slots: {
      distinct_on: {
        type: "ch_proposal_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_proposal_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_proposal_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_proposal_time_slots_aggregate: {
      distinct_on: {
        type: "ch_proposal_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_proposal_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_proposal_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    other_contact: {
      path: {
        type: "String",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    other_data: {
      path: {
        type: "String",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_proposal_aggregate_fields: {
    count: {
      columns: {
        type: "ch_proposal_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_proposal_aggregate_order_by: {
    avg: {
      type: "ch_proposal_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "ch_proposal_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "ch_proposal_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "ch_proposal_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "ch_proposal_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "ch_proposal_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "ch_proposal_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "ch_proposal_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "ch_proposal_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "ch_proposal_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_append_input: {
    other_contact: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    other_data: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_arr_rel_insert_input: {
    data: {
      type: "ch_proposal_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "ch_proposal_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_avg_order_by: {
    duration_minutes: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_bool_exp: {
    _and: {
      type: "ch_proposal_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "ch_proposal_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "ch_proposal_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    ch_proposal_time_slots: {
      type: "ch_proposal_time_slots_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_wait_list: {
      type: "ch_wait_list_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    city: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    club: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    duration_minutes: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting: {
      type: "nb_meeting_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    needs: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    other_contact: {
      type: "jsonb_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    other_data: {
      type: "jsonb_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    phone: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker: {
      type: "cr_user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker_name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker_user_id: {
      type: "uuid_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    topic: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_constraint: "enum",
  ch_proposal_delete_at_path_input: {
    other_contact: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: false,
    },
    other_data: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_delete_elem_input: {
    other_contact: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    other_data: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_delete_key_input: {
    other_contact: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    other_data: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_inc_input: {
    duration_minutes: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_insert_input: {
    ch_proposal_time_slots: {
      type: "ch_proposal_time_slots_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_wait_list: {
      type: "ch_wait_list_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    city: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    club: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    duration_minutes: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting: {
      type: "nb_meeting_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    needs: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    other_contact: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    other_data: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    phone: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker: {
      type: "cr_user_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker_name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker_user_id: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    topic: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_max_order_by: {
    city: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    club: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    duration_minutes: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    needs: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    phone: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker_user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    topic: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_min_order_by: {
    city: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    club: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    duration_minutes: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    needs: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    phone: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker_user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    topic: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_obj_rel_insert_input: {
    data: {
      type: "ch_proposal_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "ch_proposal_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_on_conflict: {
    constraint: {
      type: "ch_proposal_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "ch_proposal_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "ch_proposal_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_order_by: {
    ch_proposal_time_slots_aggregate: {
      type: "ch_proposal_time_slots_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_wait_list: {
      type: "ch_wait_list_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    city: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    club: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    duration_minutes: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting: {
      type: "nb_meeting_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    needs: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    other_contact: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    other_data: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    phone: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker: {
      type: "cr_user_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker_user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    topic: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  ch_proposal_prepend_input: {
    other_contact: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    other_data: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_select_column: "enum",
  ch_proposal_set_input: {
    city: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    club: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    duration_minutes: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    needs: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    other_contact: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    other_data: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    phone: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker_name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    speaker_user_id: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    topic: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_stddev_order_by: {
    duration_minutes: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_stddev_pop_order_by: {
    duration_minutes: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_stddev_samp_order_by: {
    duration_minutes: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_sum_order_by: {
    duration_minutes: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_aggregate_fields: {
    count: {
      columns: {
        type: "ch_proposal_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_proposal_time_slots_aggregate_order_by: {
    avg: {
      type: "ch_proposal_time_slots_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "ch_proposal_time_slots_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "ch_proposal_time_slots_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "ch_proposal_time_slots_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "ch_proposal_time_slots_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "ch_proposal_time_slots_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "ch_proposal_time_slots_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "ch_proposal_time_slots_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "ch_proposal_time_slots_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "ch_proposal_time_slots_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_arr_rel_insert_input: {
    data: {
      type: "ch_proposal_time_slots_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "ch_proposal_time_slots_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_bool_exp: {
    _and: {
      type: "ch_proposal_time_slots_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "ch_proposal_time_slots_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "ch_proposal_time_slots_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    ch_proposal: {
      type: "ch_proposal_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_time_slot: {
      type: "ch_time_slot_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_constraint: "enum",
  ch_proposal_time_slots_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_insert_input: {
    ch_proposal: {
      type: "ch_proposal_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_time_slot: {
      type: "ch_time_slot_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_max_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_min_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_obj_rel_insert_input: {
    data: {
      type: "ch_proposal_time_slots_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "ch_proposal_time_slots_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_on_conflict: {
    constraint: {
      type: "ch_proposal_time_slots_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "ch_proposal_time_slots_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "ch_proposal_time_slots_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_order_by: {
    ch_proposal: {
      type: "ch_proposal_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_time_slot: {
      type: "ch_time_slot_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  ch_proposal_time_slots_select_column: "enum",
  ch_proposal_time_slots_set_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_update_column: "enum",
  ch_proposal_time_slots_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_time_slots_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    timeslot_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_update_column: "enum",
  ch_proposal_var_pop_order_by: {
    duration_minutes: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_var_samp_order_by: {
    duration_minutes: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_proposal_variance_order_by: {
    duration_minutes: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    waitlist_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room: {
    ch_agenda_items: {
      distinct_on: {
        type: "ch_agenda_item_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_agenda_item_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_agenda_item_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_agenda_items_aggregate: {
      distinct_on: {
        type: "ch_agenda_item_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_agenda_item_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_agenda_item_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_room_aggregate_fields: {
    count: {
      columns: {
        type: "ch_room_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_room_aggregate_order_by: {
    avg: {
      type: "ch_room_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "ch_room_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "ch_room_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "ch_room_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "ch_room_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "ch_room_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "ch_room_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "ch_room_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "ch_room_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "ch_room_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_arr_rel_insert_input: {
    data: {
      type: "ch_room_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "ch_room_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_avg_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_bool_exp: {
    _and: {
      type: "ch_room_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "ch_room_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "ch_room_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    ch_agenda_items: {
      type: "ch_agenda_item_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_festival: {
      type: "ch_festival_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_constraint: "enum",
  ch_room_inc_input: {
    festival_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_insert_input: {
    ch_agenda_items: {
      type: "ch_agenda_item_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_festival: {
      type: "ch_festival_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_max_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_min_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_obj_rel_insert_input: {
    data: {
      type: "ch_room_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "ch_room_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_on_conflict: {
    constraint: {
      type: "ch_room_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "ch_room_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "ch_room_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_order_by: {
    ch_agenda_items_aggregate: {
      type: "ch_agenda_item_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_festival: {
      type: "ch_festival_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  ch_room_select_column: "enum",
  ch_room_set_input: {
    festival_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_stddev_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_stddev_pop_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_stddev_samp_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_sum_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_update_column: "enum",
  ch_room_var_pop_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_var_samp_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_room_variance_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot: {
    ch_helper_time_slots: {
      distinct_on: {
        type: "ch_helper_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_helper_time_slots_aggregate: {
      distinct_on: {
        type: "ch_helper_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_proposal_time_slots: {
      distinct_on: {
        type: "ch_proposal_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_proposal_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_proposal_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_proposal_time_slots_aggregate: {
      distinct_on: {
        type: "ch_proposal_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_proposal_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_proposal_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_time_slot_aggregate_fields: {
    count: {
      columns: {
        type: "ch_time_slot_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_time_slot_aggregate_order_by: {
    avg: {
      type: "ch_time_slot_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "ch_time_slot_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "ch_time_slot_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "ch_time_slot_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "ch_time_slot_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "ch_time_slot_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "ch_time_slot_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "ch_time_slot_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "ch_time_slot_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "ch_time_slot_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_arr_rel_insert_input: {
    data: {
      type: "ch_time_slot_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "ch_time_slot_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_avg_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_bool_exp: {
    _and: {
      type: "ch_time_slot_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "ch_time_slot_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "ch_time_slot_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    ch_helper_time_slots: {
      type: "ch_helper_time_slots_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_proposal_time_slots: {
      type: "ch_proposal_time_slots_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_constraint: "enum",
  ch_time_slot_inc_input: {
    festival_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_insert_input: {
    ch_helper_time_slots: {
      type: "ch_helper_time_slots_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_proposal_time_slots: {
      type: "ch_proposal_time_slots_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_max_order_by: {
    end_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_min_order_by: {
    end_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_obj_rel_insert_input: {
    data: {
      type: "ch_time_slot_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "ch_time_slot_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_on_conflict: {
    constraint: {
      type: "ch_time_slot_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "ch_time_slot_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "ch_time_slot_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_order_by: {
    ch_helper_time_slots_aggregate: {
      type: "ch_helper_time_slots_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_proposal_time_slots_aggregate: {
      type: "ch_proposal_time_slots_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  ch_time_slot_select_column: "enum",
  ch_time_slot_set_input: {
    end_time: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_stddev_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_stddev_pop_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_stddev_samp_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_sum_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_update_column: "enum",
  ch_time_slot_var_pop_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_var_samp_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_time_slot_variance_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list: {
    ch_proposals: {
      distinct_on: {
        type: "ch_proposal_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_proposal_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_proposal_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_proposals_aggregate: {
      distinct_on: {
        type: "ch_proposal_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_proposal_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_proposal_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_wait_list_aggregate_fields: {
    count: {
      columns: {
        type: "ch_wait_list_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  ch_wait_list_aggregate_order_by: {
    avg: {
      type: "ch_wait_list_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "ch_wait_list_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "ch_wait_list_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "ch_wait_list_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "ch_wait_list_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "ch_wait_list_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "ch_wait_list_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "ch_wait_list_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "ch_wait_list_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "ch_wait_list_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_arr_rel_insert_input: {
    data: {
      type: "ch_wait_list_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "ch_wait_list_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_avg_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_bool_exp: {
    _and: {
      type: "ch_wait_list_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "ch_wait_list_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "ch_wait_list_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    ch_festival: {
      type: "ch_festival_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_proposals: {
      type: "ch_proposal_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_constraint: "enum",
  ch_wait_list_inc_input: {
    festival_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_insert_input: {
    ch_festival: {
      type: "ch_festival_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_proposals: {
      type: "ch_proposal_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_max_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_min_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_obj_rel_insert_input: {
    data: {
      type: "ch_wait_list_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "ch_wait_list_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_on_conflict: {
    constraint: {
      type: "ch_wait_list_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "ch_wait_list_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "ch_wait_list_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_order_by: {
    ch_festival: {
      type: "ch_festival_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_proposals_aggregate: {
      type: "ch_proposal_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  ch_wait_list_select_column: "enum",
  ch_wait_list_set_input: {
    festival_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_stddev_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_stddev_pop_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_stddev_samp_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_sum_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_update_column: "enum",
  ch_wait_list_var_pop_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_var_samp_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  ch_wait_list_variance_order_by: {
    festival_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  cr_user: {
    ch_helpers: {
      distinct_on: {
        type: "ch_helper_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_helpers_aggregate: {
      distinct_on: {
        type: "ch_helper_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    guilds: {
      distinct_on: {
        type: "nb_guild_member_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_guild_member_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_guild_member_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    guilds_aggregate: {
      distinct_on: {
        type: "nb_guild_member_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_guild_member_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_guild_member_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    managed_spheres: {
      distinct_on: {
        type: "nb_sphere_managers_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_sphere_managers_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_sphere_managers_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    managed_spheres_aggregate: {
      distinct_on: {
        type: "nb_sphere_managers_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_sphere_managers_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_sphere_managers_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    meetings: {
      distinct_on: {
        type: "nb_meeting_participants_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_participants_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_participants_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    meetings_aggregate: {
      distinct_on: {
        type: "nb_meeting_participants_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_participants_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_participants_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    organized_meetings: {
      distinct_on: {
        type: "nb_meeting_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    organized_meetings_aggregate: {
      distinct_on: {
        type: "nb_meeting_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  cr_user_aggregate_fields: {
    count: {
      columns: {
        type: "cr_user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  cr_user_aggregate_order_by: {
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "cr_user_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "cr_user_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  cr_user_arr_rel_insert_input: {
    data: {
      type: "cr_user_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "cr_user_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  cr_user_bool_exp: {
    _and: {
      type: "cr_user_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "cr_user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "cr_user_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    auth0_id: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_helpers: {
      type: "ch_helper_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    date_joined: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    first_name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guilds: {
      type: "nb_guild_member_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_active: {
      type: "Boolean_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_staff: {
      type: "Boolean_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_superuser: {
      type: "Boolean_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    last_login: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    last_name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    locale: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    managed_spheres: {
      type: "nb_sphere_managers_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meetings: {
      type: "nb_meeting_participants_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    organized_meetings: {
      type: "nb_meeting_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    username: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    uuid: {
      type: "uuid_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  cr_user_constraint: "enum",
  cr_user_insert_input: {
    auth0_id: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_helpers: {
      type: "ch_helper_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    date_joined: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    first_name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guilds: {
      type: "nb_guild_member_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_active: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_staff: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_superuser: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    last_login: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    last_name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    locale: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    managed_spheres: {
      type: "nb_sphere_managers_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meetings: {
      type: "nb_meeting_participants_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    organized_meetings: {
      type: "nb_meeting_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    username: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    uuid: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  cr_user_max_order_by: {
    auth0_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    date_joined: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    first_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    last_login: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    last_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    locale: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    username: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    uuid: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  cr_user_min_order_by: {
    auth0_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    date_joined: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    first_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    last_login: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    last_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    locale: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    username: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    uuid: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  cr_user_obj_rel_insert_input: {
    data: {
      type: "cr_user_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "cr_user_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  cr_user_on_conflict: {
    constraint: {
      type: "cr_user_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "cr_user_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "cr_user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  cr_user_order_by: {
    auth0_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    ch_helpers_aggregate: {
      type: "ch_helper_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    date_joined: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    first_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guilds_aggregate: {
      type: "nb_guild_member_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_active: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_staff: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_superuser: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    last_login: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    last_name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    locale: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    managed_spheres_aggregate: {
      type: "nb_sphere_managers_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meetings_aggregate: {
      type: "nb_meeting_participants_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    organized_meetings_aggregate: {
      type: "nb_meeting_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    username: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    uuid: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  cr_user_pk_columns_input: {
    uuid: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  cr_user_select_column: "enum",
  cr_user_set_input: {
    auth0_id: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    date_joined: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    first_name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_active: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_staff: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_superuser: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    last_login: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    last_name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    locale: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    username: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    uuid: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  cr_user_update_column: "enum",
  django_site_aggregate_fields: {
    count: {
      columns: {
        type: "django_site_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  django_site_aggregate_order_by: {
    avg: {
      type: "django_site_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "django_site_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "django_site_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "django_site_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "django_site_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "django_site_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "django_site_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "django_site_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "django_site_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "django_site_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_arr_rel_insert_input: {
    data: {
      type: "django_site_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "django_site_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_bool_exp: {
    _and: {
      type: "django_site_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "django_site_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "django_site_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    domain: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_sphere: {
      type: "nb_sphere_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_constraint: "enum",
  django_site_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_insert_input: {
    domain: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_sphere: {
      type: "nb_sphere_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_max_order_by: {
    domain: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_min_order_by: {
    domain: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_obj_rel_insert_input: {
    data: {
      type: "django_site_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "django_site_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_on_conflict: {
    constraint: {
      type: "django_site_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "django_site_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "django_site_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_order_by: {
    domain: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_sphere: {
      type: "nb_sphere_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  django_site_select_column: "enum",
  django_site_set_input: {
    domain: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_update_column: "enum",
  django_site_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  django_site_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  Int_comparison_exp: {
    _eq: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _in: {
      type: "Int",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "Int",
      array: true,
      arrayRequired: false,
      required: true,
    },
  },
  jsonb: "String",
  jsonb_comparison_exp: {
    _contained_in: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _contains: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _eq: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _has_key: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _has_keys_all: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _has_keys_any: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _in: {
      type: "jsonb",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "jsonb",
      array: true,
      arrayRequired: false,
      required: true,
    },
  },
  mutation_root: {
    delete_ch_agenda_item: {
      where: {
        type: "ch_agenda_item_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_agenda_item_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_festival: {
      where: {
        type: "ch_festival_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_festival_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_helper: {
      where: {
        type: "ch_helper_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_helper_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_helper_time_slots: {
      where: {
        type: "ch_helper_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_helper_time_slots_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_proposal: {
      where: {
        type: "ch_proposal_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_proposal_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_proposal_time_slots: {
      where: {
        type: "ch_proposal_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_proposal_time_slots_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_room: {
      where: {
        type: "ch_room_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_room_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_time_slot: {
      where: {
        type: "ch_time_slot_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_time_slot_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_wait_list: {
      where: {
        type: "ch_wait_list_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_ch_wait_list_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_cr_user: {
      where: {
        type: "cr_user_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_cr_user_by_pk: {
      uuid: {
        type: "uuid",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_django_site: {
      where: {
        type: "django_site_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_django_site_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_nb_guild: {
      where: {
        type: "nb_guild_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_nb_guild_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_nb_guild_member: {
      where: {
        type: "nb_guild_member_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_nb_guild_member_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_nb_meeting: {
      where: {
        type: "nb_meeting_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_nb_meeting_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_nb_meeting_participants: {
      where: {
        type: "nb_meeting_participants_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_nb_meeting_participants_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_nb_sphere: {
      where: {
        type: "nb_sphere_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_nb_sphere_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_nb_sphere_managers: {
      where: {
        type: "nb_sphere_managers_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_nb_sphere_managers_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    insert_ch_agenda_item: {
      objects: {
        type: "ch_agenda_item_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "ch_agenda_item_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_agenda_item_one: {
      object: {
        type: "ch_agenda_item_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "ch_agenda_item_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_festival: {
      objects: {
        type: "ch_festival_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "ch_festival_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_festival_one: {
      object: {
        type: "ch_festival_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "ch_festival_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_helper: {
      objects: {
        type: "ch_helper_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "ch_helper_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_helper_one: {
      object: {
        type: "ch_helper_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "ch_helper_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_helper_time_slots: {
      objects: {
        type: "ch_helper_time_slots_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "ch_helper_time_slots_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_helper_time_slots_one: {
      object: {
        type: "ch_helper_time_slots_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "ch_helper_time_slots_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_proposal: {
      objects: {
        type: "ch_proposal_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "ch_proposal_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_proposal_one: {
      object: {
        type: "ch_proposal_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "ch_proposal_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_proposal_time_slots: {
      objects: {
        type: "ch_proposal_time_slots_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "ch_proposal_time_slots_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_proposal_time_slots_one: {
      object: {
        type: "ch_proposal_time_slots_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "ch_proposal_time_slots_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_room: {
      objects: {
        type: "ch_room_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "ch_room_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_room_one: {
      object: {
        type: "ch_room_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "ch_room_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_time_slot: {
      objects: {
        type: "ch_time_slot_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "ch_time_slot_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_time_slot_one: {
      object: {
        type: "ch_time_slot_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "ch_time_slot_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_wait_list: {
      objects: {
        type: "ch_wait_list_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "ch_wait_list_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_ch_wait_list_one: {
      object: {
        type: "ch_wait_list_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "ch_wait_list_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_cr_user: {
      objects: {
        type: "cr_user_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "cr_user_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_cr_user_one: {
      object: {
        type: "cr_user_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "cr_user_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_django_site: {
      objects: {
        type: "django_site_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "django_site_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_django_site_one: {
      object: {
        type: "django_site_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "django_site_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_nb_guild: {
      objects: {
        type: "nb_guild_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "nb_guild_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_nb_guild_member: {
      objects: {
        type: "nb_guild_member_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "nb_guild_member_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_nb_guild_member_one: {
      object: {
        type: "nb_guild_member_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "nb_guild_member_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_nb_guild_one: {
      object: {
        type: "nb_guild_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "nb_guild_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_nb_meeting: {
      objects: {
        type: "nb_meeting_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "nb_meeting_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_nb_meeting_one: {
      object: {
        type: "nb_meeting_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "nb_meeting_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_nb_meeting_participants: {
      objects: {
        type: "nb_meeting_participants_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "nb_meeting_participants_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_nb_meeting_participants_one: {
      object: {
        type: "nb_meeting_participants_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "nb_meeting_participants_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_nb_sphere: {
      objects: {
        type: "nb_sphere_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "nb_sphere_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_nb_sphere_managers: {
      objects: {
        type: "nb_sphere_managers_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "nb_sphere_managers_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_nb_sphere_managers_one: {
      object: {
        type: "nb_sphere_managers_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "nb_sphere_managers_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_nb_sphere_one: {
      object: {
        type: "nb_sphere_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "nb_sphere_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    update_ch_agenda_item: {
      _inc: {
        type: "ch_agenda_item_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_agenda_item_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "ch_agenda_item_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_agenda_item_by_pk: {
      _inc: {
        type: "ch_agenda_item_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_agenda_item_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "ch_agenda_item_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_festival: {
      _append: {
        type: "ch_festival_append_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_at_path: {
        type: "ch_festival_delete_at_path_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_elem: {
        type: "ch_festival_delete_elem_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_key: {
        type: "ch_festival_delete_key_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _inc: {
        type: "ch_festival_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _prepend: {
        type: "ch_festival_prepend_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_festival_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "ch_festival_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_festival_by_pk: {
      _append: {
        type: "ch_festival_append_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_at_path: {
        type: "ch_festival_delete_at_path_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_elem: {
        type: "ch_festival_delete_elem_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_key: {
        type: "ch_festival_delete_key_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _inc: {
        type: "ch_festival_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _prepend: {
        type: "ch_festival_prepend_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_festival_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "ch_festival_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_helper: {
      _inc: {
        type: "ch_helper_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_helper_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "ch_helper_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_helper_by_pk: {
      _inc: {
        type: "ch_helper_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_helper_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "ch_helper_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_helper_time_slots: {
      _inc: {
        type: "ch_helper_time_slots_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_helper_time_slots_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "ch_helper_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_helper_time_slots_by_pk: {
      _inc: {
        type: "ch_helper_time_slots_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_helper_time_slots_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "ch_helper_time_slots_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_proposal: {
      _append: {
        type: "ch_proposal_append_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_at_path: {
        type: "ch_proposal_delete_at_path_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_elem: {
        type: "ch_proposal_delete_elem_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_key: {
        type: "ch_proposal_delete_key_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _inc: {
        type: "ch_proposal_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _prepend: {
        type: "ch_proposal_prepend_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_proposal_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "ch_proposal_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_proposal_by_pk: {
      _append: {
        type: "ch_proposal_append_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_at_path: {
        type: "ch_proposal_delete_at_path_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_elem: {
        type: "ch_proposal_delete_elem_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_key: {
        type: "ch_proposal_delete_key_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _inc: {
        type: "ch_proposal_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _prepend: {
        type: "ch_proposal_prepend_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_proposal_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "ch_proposal_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_proposal_time_slots: {
      _inc: {
        type: "ch_proposal_time_slots_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_proposal_time_slots_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "ch_proposal_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_proposal_time_slots_by_pk: {
      _inc: {
        type: "ch_proposal_time_slots_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_proposal_time_slots_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "ch_proposal_time_slots_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_room: {
      _inc: {
        type: "ch_room_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_room_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "ch_room_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_room_by_pk: {
      _inc: {
        type: "ch_room_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_room_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "ch_room_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_time_slot: {
      _inc: {
        type: "ch_time_slot_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_time_slot_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "ch_time_slot_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_time_slot_by_pk: {
      _inc: {
        type: "ch_time_slot_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_time_slot_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "ch_time_slot_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_wait_list: {
      _inc: {
        type: "ch_wait_list_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_wait_list_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "ch_wait_list_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_ch_wait_list_by_pk: {
      _inc: {
        type: "ch_wait_list_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "ch_wait_list_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "ch_wait_list_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_cr_user: {
      _set: {
        type: "cr_user_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "cr_user_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_cr_user_by_pk: {
      _set: {
        type: "cr_user_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "cr_user_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_django_site: {
      _inc: {
        type: "django_site_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "django_site_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "django_site_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_django_site_by_pk: {
      _inc: {
        type: "django_site_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "django_site_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "django_site_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_nb_guild: {
      _inc: {
        type: "nb_guild_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "nb_guild_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "nb_guild_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_nb_guild_by_pk: {
      _inc: {
        type: "nb_guild_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "nb_guild_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "nb_guild_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_nb_guild_member: {
      _inc: {
        type: "nb_guild_member_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "nb_guild_member_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "nb_guild_member_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_nb_guild_member_by_pk: {
      _inc: {
        type: "nb_guild_member_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "nb_guild_member_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "nb_guild_member_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_nb_meeting: {
      _inc: {
        type: "nb_meeting_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "nb_meeting_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "nb_meeting_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_nb_meeting_by_pk: {
      _inc: {
        type: "nb_meeting_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "nb_meeting_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "nb_meeting_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_nb_meeting_participants: {
      _inc: {
        type: "nb_meeting_participants_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "nb_meeting_participants_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "nb_meeting_participants_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_nb_meeting_participants_by_pk: {
      _inc: {
        type: "nb_meeting_participants_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "nb_meeting_participants_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "nb_meeting_participants_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_nb_sphere: {
      _append: {
        type: "nb_sphere_append_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_at_path: {
        type: "nb_sphere_delete_at_path_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_elem: {
        type: "nb_sphere_delete_elem_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_key: {
        type: "nb_sphere_delete_key_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _inc: {
        type: "nb_sphere_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _prepend: {
        type: "nb_sphere_prepend_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "nb_sphere_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "nb_sphere_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_nb_sphere_by_pk: {
      _append: {
        type: "nb_sphere_append_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_at_path: {
        type: "nb_sphere_delete_at_path_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_elem: {
        type: "nb_sphere_delete_elem_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _delete_key: {
        type: "nb_sphere_delete_key_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _inc: {
        type: "nb_sphere_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _prepend: {
        type: "nb_sphere_prepend_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "nb_sphere_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "nb_sphere_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_nb_sphere_managers: {
      _inc: {
        type: "nb_sphere_managers_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "nb_sphere_managers_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "nb_sphere_managers_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_nb_sphere_managers_by_pk: {
      _inc: {
        type: "nb_sphere_managers_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "nb_sphere_managers_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "nb_sphere_managers_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
  nb_guild: {
    nb_guild_members: {
      distinct_on: {
        type: "nb_guild_member_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_guild_member_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_guild_member_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_guild_members_aggregate: {
      distinct_on: {
        type: "nb_guild_member_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_guild_member_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_guild_member_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_meetings: {
      distinct_on: {
        type: "nb_meeting_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_meetings_aggregate: {
      distinct_on: {
        type: "nb_meeting_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  nb_guild_aggregate_fields: {
    count: {
      columns: {
        type: "nb_guild_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  nb_guild_aggregate_order_by: {
    avg: {
      type: "nb_guild_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "nb_guild_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "nb_guild_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "nb_guild_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "nb_guild_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "nb_guild_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "nb_guild_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "nb_guild_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "nb_guild_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "nb_guild_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_arr_rel_insert_input: {
    data: {
      type: "nb_guild_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "nb_guild_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_bool_exp: {
    _and: {
      type: "nb_guild_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "nb_guild_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "nb_guild_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_public: {
      type: "Boolean_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_guild_members: {
      type: "nb_guild_member_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_meetings: {
      type: "nb_meeting_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_constraint: "enum",
  nb_guild_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_insert_input: {
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_public: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_guild_members: {
      type: "nb_guild_member_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_meetings: {
      type: "nb_meeting_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_max_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_aggregate_fields: {
    count: {
      columns: {
        type: "nb_guild_member_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  nb_guild_member_aggregate_order_by: {
    avg: {
      type: "nb_guild_member_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "nb_guild_member_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "nb_guild_member_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "nb_guild_member_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "nb_guild_member_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "nb_guild_member_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "nb_guild_member_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "nb_guild_member_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "nb_guild_member_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "nb_guild_member_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_arr_rel_insert_input: {
    data: {
      type: "nb_guild_member_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "nb_guild_member_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_avg_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_bool_exp: {
    _and: {
      type: "nb_guild_member_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "nb_guild_member_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "nb_guild_member_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    cr_user: {
      type: "cr_user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guild_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    membership_type: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_guild: {
      type: "nb_guild_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "uuid_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_constraint: "enum",
  nb_guild_member_inc_input: {
    guild_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_insert_input: {
    cr_user: {
      type: "cr_user_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guild_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    membership_type: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_guild: {
      type: "nb_guild_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_max_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    membership_type: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_min_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    membership_type: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_obj_rel_insert_input: {
    data: {
      type: "nb_guild_member_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "nb_guild_member_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_on_conflict: {
    constraint: {
      type: "nb_guild_member_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "nb_guild_member_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "nb_guild_member_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_order_by: {
    cr_user: {
      type: "cr_user_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    membership_type: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_guild: {
      type: "nb_guild_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  nb_guild_member_select_column: "enum",
  nb_guild_member_set_input: {
    guild_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    membership_type: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_stddev_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_stddev_pop_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_stddev_samp_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_sum_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_update_column: "enum",
  nb_guild_member_var_pop_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_var_samp_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_member_variance_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_min_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_obj_rel_insert_input: {
    data: {
      type: "nb_guild_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "nb_guild_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_on_conflict: {
    constraint: {
      type: "nb_guild_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "nb_guild_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "nb_guild_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_public: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_guild_members_aggregate: {
      type: "nb_guild_member_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_meetings_aggregate: {
      type: "nb_meeting_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  nb_guild_select_column: "enum",
  nb_guild_set_input: {
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_public: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_update_column: "enum",
  nb_guild_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_guild_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting: {
    participants: {
      distinct_on: {
        type: "nb_meeting_participants_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_participants_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_participants_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    participants_aggregate: {
      distinct_on: {
        type: "nb_meeting_participants_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_participants_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_participants_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  nb_meeting_aggregate_fields: {
    count: {
      columns: {
        type: "nb_meeting_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  nb_meeting_aggregate_order_by: {
    avg: {
      type: "nb_meeting_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "nb_meeting_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "nb_meeting_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "nb_meeting_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "nb_meeting_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "nb_meeting_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "nb_meeting_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "nb_meeting_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "nb_meeting_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "nb_meeting_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_arr_rel_insert_input: {
    data: {
      type: "nb_meeting_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "nb_meeting_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_avg_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_bool_exp: {
    _and: {
      type: "nb_meeting_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "nb_meeting_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "nb_meeting_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    created_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guild: {
      type: "nb_guild_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guild_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    image: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    location: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_url: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    organizer: {
      type: "cr_user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    organizer_id: {
      type: "uuid_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    participants: {
      type: "nb_meeting_participants_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal: {
      type: "ch_proposal_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    publication_time: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere: {
      type: "nb_sphere_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    time_table: {
      type: "ch_agenda_item_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_constraint: "enum",
  nb_meeting_inc_input: {
    guild_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_insert_input: {
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guild: {
      type: "nb_guild_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guild_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    image: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    location: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_url: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    organizer: {
      type: "cr_user_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    organizer_id: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
    participants: {
      type: "nb_meeting_participants_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal: {
      type: "ch_proposal_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    publication_time: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere: {
      type: "nb_sphere_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    time_table: {
      type: "ch_agenda_item_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_max_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    image: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    location: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_url: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    organizer_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    publication_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_min_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    image: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    location: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_url: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    organizer_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    publication_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_obj_rel_insert_input: {
    data: {
      type: "nb_meeting_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "nb_meeting_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_on_conflict: {
    constraint: {
      type: "nb_meeting_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "nb_meeting_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "nb_meeting_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guild: {
      type: "nb_guild_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    image: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    location: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_url: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    organizer: {
      type: "cr_user_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    organizer_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    participants_aggregate: {
      type: "nb_meeting_participants_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    proposal: {
      type: "ch_proposal_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    publication_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere: {
      type: "nb_sphere_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    time_table: {
      type: "ch_agenda_item_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_aggregate_fields: {
    count: {
      columns: {
        type: "nb_meeting_participants_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  nb_meeting_participants_aggregate_order_by: {
    avg: {
      type: "nb_meeting_participants_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "nb_meeting_participants_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "nb_meeting_participants_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "nb_meeting_participants_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "nb_meeting_participants_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "nb_meeting_participants_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "nb_meeting_participants_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "nb_meeting_participants_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "nb_meeting_participants_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "nb_meeting_participants_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_arr_rel_insert_input: {
    data: {
      type: "nb_meeting_participants_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "nb_meeting_participants_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_bool_exp: {
    _and: {
      type: "nb_meeting_participants_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "nb_meeting_participants_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "nb_meeting_participants_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    cr_user: {
      type: "cr_user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_meeting: {
      type: "nb_meeting_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "uuid_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_constraint: "enum",
  nb_meeting_participants_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_insert_input: {
    cr_user: {
      type: "cr_user_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_meeting: {
      type: "nb_meeting_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_max_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_min_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_obj_rel_insert_input: {
    data: {
      type: "nb_meeting_participants_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "nb_meeting_participants_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_on_conflict: {
    constraint: {
      type: "nb_meeting_participants_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "nb_meeting_participants_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "nb_meeting_participants_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_order_by: {
    cr_user: {
      type: "cr_user_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_meeting: {
      type: "nb_meeting_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  nb_meeting_participants_select_column: "enum",
  nb_meeting_participants_set_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_update_column: "enum",
  nb_meeting_participants_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_participants_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  nb_meeting_select_column: "enum",
  nb_meeting_set_input: {
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    description: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    end_time: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    guild_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    image: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    location: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    meeting_url: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    organizer_id: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
    publication_time: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    slug: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    start_time: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    status: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_stddev_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_stddev_pop_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_stddev_samp_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_sum_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_update_column: "enum",
  nb_meeting_var_pop_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_var_samp_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_meeting_variance_order_by: {
    guild_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere: {
    ch_festivals: {
      distinct_on: {
        type: "ch_festival_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_festival_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_festival_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_festivals_aggregate: {
      distinct_on: {
        type: "ch_festival_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_festival_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_festival_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_meetings: {
      distinct_on: {
        type: "nb_meeting_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_meetings_aggregate: {
      distinct_on: {
        type: "nb_meeting_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_sphere_managers: {
      distinct_on: {
        type: "nb_sphere_managers_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_sphere_managers_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_sphere_managers_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_sphere_managers_aggregate: {
      distinct_on: {
        type: "nb_sphere_managers_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_sphere_managers_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_sphere_managers_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    settings: {
      path: {
        type: "String",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  nb_sphere_aggregate_fields: {
    count: {
      columns: {
        type: "nb_sphere_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  nb_sphere_aggregate_order_by: {
    avg: {
      type: "nb_sphere_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "nb_sphere_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "nb_sphere_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "nb_sphere_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "nb_sphere_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "nb_sphere_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "nb_sphere_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "nb_sphere_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "nb_sphere_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "nb_sphere_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_append_input: {
    settings: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_arr_rel_insert_input: {
    data: {
      type: "nb_sphere_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "nb_sphere_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_bool_exp: {
    _and: {
      type: "nb_sphere_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "nb_sphere_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "nb_sphere_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    ch_festivals: {
      type: "ch_festival_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    django_site: {
      type: "django_site_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_open: {
      type: "Boolean_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_meetings: {
      type: "nb_meeting_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_sphere_managers: {
      type: "nb_sphere_managers_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    settings: {
      type: "jsonb_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_constraint: "enum",
  nb_sphere_delete_at_path_input: {
    settings: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_delete_elem_input: {
    settings: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_delete_key_input: {
    settings: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_insert_input: {
    ch_festivals: {
      type: "ch_festival_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    django_site: {
      type: "django_site_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_open: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_meetings: {
      type: "nb_meeting_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_sphere_managers: {
      type: "nb_sphere_managers_arr_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    settings: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_aggregate_fields: {
    count: {
      columns: {
        type: "nb_sphere_managers_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  nb_sphere_managers_aggregate_order_by: {
    avg: {
      type: "nb_sphere_managers_avg_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    count: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    max: {
      type: "nb_sphere_managers_max_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    min: {
      type: "nb_sphere_managers_min_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev: {
      type: "nb_sphere_managers_stddev_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_pop: {
      type: "nb_sphere_managers_stddev_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    stddev_samp: {
      type: "nb_sphere_managers_stddev_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sum: {
      type: "nb_sphere_managers_sum_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_pop: {
      type: "nb_sphere_managers_var_pop_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    var_samp: {
      type: "nb_sphere_managers_var_samp_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    variance: {
      type: "nb_sphere_managers_variance_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_arr_rel_insert_input: {
    data: {
      type: "nb_sphere_managers_insert_input",
      array: true,
      arrayRequired: true,
      required: true,
    },
    on_conflict: {
      type: "nb_sphere_managers_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_avg_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_bool_exp: {
    _and: {
      type: "nb_sphere_managers_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    _not: {
      type: "nb_sphere_managers_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "nb_sphere_managers_bool_exp",
      array: true,
      arrayRequired: false,
      required: false,
    },
    cr_user: {
      type: "cr_user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_sphere: {
      type: "nb_sphere_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "uuid_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_constraint: "enum",
  nb_sphere_managers_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_insert_input: {
    cr_user: {
      type: "cr_user_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_sphere: {
      type: "nb_sphere_obj_rel_insert_input",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_max_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_min_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_obj_rel_insert_input: {
    data: {
      type: "nb_sphere_managers_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "nb_sphere_managers_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_on_conflict: {
    constraint: {
      type: "nb_sphere_managers_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "nb_sphere_managers_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "nb_sphere_managers_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_order_by: {
    cr_user: {
      type: "cr_user_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_sphere: {
      type: "nb_sphere_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  nb_sphere_managers_select_column: "enum",
  nb_sphere_managers_set_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    user_id: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_update_column: "enum",
  nb_sphere_managers_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_managers_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    sphere_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_max_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_min_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_obj_rel_insert_input: {
    data: {
      type: "nb_sphere_insert_input",
      array: false,
      arrayRequired: false,
      required: true,
    },
    on_conflict: {
      type: "nb_sphere_on_conflict",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_on_conflict: {
    constraint: {
      type: "nb_sphere_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "nb_sphere_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "nb_sphere_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_order_by: {
    ch_festivals_aggregate: {
      type: "ch_festival_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    django_site: {
      type: "django_site_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_open: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_meetings_aggregate: {
      type: "nb_meeting_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    nb_sphere_managers_aggregate: {
      type: "nb_sphere_managers_aggregate_order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    settings: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  nb_sphere_prepend_input: {
    settings: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_select_column: "enum",
  nb_sphere_set_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    is_open: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    settings: {
      type: "jsonb",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_stddev_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_stddev_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_stddev_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_sum_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_update_column: "enum",
  nb_sphere_var_pop_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_var_samp_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  nb_sphere_variance_order_by: {
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    site_id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  order_by: "enum",
  query_root: {
    ch_agenda_item: {
      distinct_on: {
        type: "ch_agenda_item_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_agenda_item_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_agenda_item_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_agenda_item_aggregate: {
      distinct_on: {
        type: "ch_agenda_item_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_agenda_item_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_agenda_item_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_agenda_item_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_festival: {
      distinct_on: {
        type: "ch_festival_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_festival_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_festival_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_festival_aggregate: {
      distinct_on: {
        type: "ch_festival_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_festival_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_festival_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_festival_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_helper: {
      distinct_on: {
        type: "ch_helper_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_helper_aggregate: {
      distinct_on: {
        type: "ch_helper_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_helper_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_helper_time_slots: {
      distinct_on: {
        type: "ch_helper_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_helper_time_slots_aggregate: {
      distinct_on: {
        type: "ch_helper_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_helper_time_slots_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_proposal: {
      distinct_on: {
        type: "ch_proposal_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_proposal_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_proposal_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_proposal_aggregate: {
      distinct_on: {
        type: "ch_proposal_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_proposal_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_proposal_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_proposal_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_proposal_time_slots: {
      distinct_on: {
        type: "ch_proposal_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_proposal_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_proposal_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_proposal_time_slots_aggregate: {
      distinct_on: {
        type: "ch_proposal_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_proposal_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_proposal_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_proposal_time_slots_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_room: {
      distinct_on: {
        type: "ch_room_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_room_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_room_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_room_aggregate: {
      distinct_on: {
        type: "ch_room_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_room_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_room_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_room_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_time_slot: {
      distinct_on: {
        type: "ch_time_slot_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_time_slot_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_time_slot_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_time_slot_aggregate: {
      distinct_on: {
        type: "ch_time_slot_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_time_slot_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_time_slot_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_time_slot_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_wait_list: {
      distinct_on: {
        type: "ch_wait_list_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_wait_list_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_wait_list_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_wait_list_aggregate: {
      distinct_on: {
        type: "ch_wait_list_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_wait_list_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_wait_list_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_wait_list_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    cr_user: {
      distinct_on: {
        type: "cr_user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "cr_user_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "cr_user_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    cr_user_aggregate: {
      distinct_on: {
        type: "cr_user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "cr_user_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "cr_user_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    cr_user_by_pk: {
      uuid: {
        type: "uuid",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    django_site: {
      distinct_on: {
        type: "django_site_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "django_site_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "django_site_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    django_site_aggregate: {
      distinct_on: {
        type: "django_site_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "django_site_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "django_site_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    django_site_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    nb_guild: {
      distinct_on: {
        type: "nb_guild_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_guild_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_guild_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_guild_aggregate: {
      distinct_on: {
        type: "nb_guild_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_guild_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_guild_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_guild_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    nb_guild_member: {
      distinct_on: {
        type: "nb_guild_member_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_guild_member_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_guild_member_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_guild_member_aggregate: {
      distinct_on: {
        type: "nb_guild_member_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_guild_member_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_guild_member_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_guild_member_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    nb_meeting: {
      distinct_on: {
        type: "nb_meeting_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_meeting_aggregate: {
      distinct_on: {
        type: "nb_meeting_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_meeting_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    nb_meeting_participants: {
      distinct_on: {
        type: "nb_meeting_participants_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_participants_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_participants_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_meeting_participants_aggregate: {
      distinct_on: {
        type: "nb_meeting_participants_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_participants_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_participants_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_meeting_participants_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    nb_sphere: {
      distinct_on: {
        type: "nb_sphere_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_sphere_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_sphere_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_sphere_aggregate: {
      distinct_on: {
        type: "nb_sphere_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_sphere_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_sphere_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_sphere_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    nb_sphere_managers: {
      distinct_on: {
        type: "nb_sphere_managers_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_sphere_managers_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_sphere_managers_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_sphere_managers_aggregate: {
      distinct_on: {
        type: "nb_sphere_managers_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_sphere_managers_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_sphere_managers_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_sphere_managers_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
  String_comparison_exp: {
    _eq: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _ilike: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _in: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _like: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nilike: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _nlike: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nsimilar: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _similar: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  subscription_root: {
    ch_agenda_item: {
      distinct_on: {
        type: "ch_agenda_item_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_agenda_item_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_agenda_item_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_agenda_item_aggregate: {
      distinct_on: {
        type: "ch_agenda_item_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_agenda_item_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_agenda_item_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_agenda_item_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_festival: {
      distinct_on: {
        type: "ch_festival_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_festival_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_festival_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_festival_aggregate: {
      distinct_on: {
        type: "ch_festival_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_festival_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_festival_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_festival_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_helper: {
      distinct_on: {
        type: "ch_helper_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_helper_aggregate: {
      distinct_on: {
        type: "ch_helper_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_helper_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_helper_time_slots: {
      distinct_on: {
        type: "ch_helper_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_helper_time_slots_aggregate: {
      distinct_on: {
        type: "ch_helper_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_helper_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_helper_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_helper_time_slots_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_proposal: {
      distinct_on: {
        type: "ch_proposal_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_proposal_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_proposal_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_proposal_aggregate: {
      distinct_on: {
        type: "ch_proposal_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_proposal_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_proposal_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_proposal_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_proposal_time_slots: {
      distinct_on: {
        type: "ch_proposal_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_proposal_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_proposal_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_proposal_time_slots_aggregate: {
      distinct_on: {
        type: "ch_proposal_time_slots_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_proposal_time_slots_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_proposal_time_slots_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_proposal_time_slots_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_room: {
      distinct_on: {
        type: "ch_room_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_room_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_room_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_room_aggregate: {
      distinct_on: {
        type: "ch_room_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_room_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_room_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_room_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_time_slot: {
      distinct_on: {
        type: "ch_time_slot_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_time_slot_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_time_slot_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_time_slot_aggregate: {
      distinct_on: {
        type: "ch_time_slot_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_time_slot_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_time_slot_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_time_slot_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    ch_wait_list: {
      distinct_on: {
        type: "ch_wait_list_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_wait_list_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_wait_list_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_wait_list_aggregate: {
      distinct_on: {
        type: "ch_wait_list_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "ch_wait_list_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "ch_wait_list_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    ch_wait_list_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    cr_user: {
      distinct_on: {
        type: "cr_user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "cr_user_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "cr_user_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    cr_user_aggregate: {
      distinct_on: {
        type: "cr_user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "cr_user_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "cr_user_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    cr_user_by_pk: {
      uuid: {
        type: "uuid",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    django_site: {
      distinct_on: {
        type: "django_site_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "django_site_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "django_site_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    django_site_aggregate: {
      distinct_on: {
        type: "django_site_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "django_site_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "django_site_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    django_site_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    nb_guild: {
      distinct_on: {
        type: "nb_guild_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_guild_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_guild_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_guild_aggregate: {
      distinct_on: {
        type: "nb_guild_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_guild_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_guild_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_guild_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    nb_guild_member: {
      distinct_on: {
        type: "nb_guild_member_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_guild_member_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_guild_member_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_guild_member_aggregate: {
      distinct_on: {
        type: "nb_guild_member_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_guild_member_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_guild_member_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_guild_member_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    nb_meeting: {
      distinct_on: {
        type: "nb_meeting_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_meeting_aggregate: {
      distinct_on: {
        type: "nb_meeting_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_meeting_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    nb_meeting_participants: {
      distinct_on: {
        type: "nb_meeting_participants_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_participants_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_participants_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_meeting_participants_aggregate: {
      distinct_on: {
        type: "nb_meeting_participants_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_meeting_participants_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_meeting_participants_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_meeting_participants_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    nb_sphere: {
      distinct_on: {
        type: "nb_sphere_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_sphere_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_sphere_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_sphere_aggregate: {
      distinct_on: {
        type: "nb_sphere_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_sphere_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_sphere_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_sphere_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    nb_sphere_managers: {
      distinct_on: {
        type: "nb_sphere_managers_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_sphere_managers_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_sphere_managers_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_sphere_managers_aggregate: {
      distinct_on: {
        type: "nb_sphere_managers_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "nb_sphere_managers_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "nb_sphere_managers_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    nb_sphere_managers_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
  timestamptz: "String",
  timestamptz_comparison_exp: {
    _eq: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _in: {
      type: "timestamptz",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "timestamptz",
      array: true,
      arrayRequired: false,
      required: true,
    },
  },
  uuid: "String",
  uuid_comparison_exp: {
    _eq: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _in: {
      type: "uuid",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "uuid",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "uuid",
      array: true,
      arrayRequired: false,
      required: true,
    },
  },
};

export const ReturnTypes: Record<string, any> = {
  ch_agenda_item: {
    ch_helper: "ch_helper",
    ch_room: "ch_room",
    helper_confirmed: "Boolean",
    helper_id: "Int",
    id: "Int",
    meeting_confirmed: "Boolean",
    meeting_id: "Int",
    nb_meeting: "nb_meeting",
    room_id: "Int",
    status: "String",
  },
  ch_agenda_item_aggregate: {
    aggregate: "ch_agenda_item_aggregate_fields",
    nodes: "ch_agenda_item",
  },
  ch_agenda_item_aggregate_fields: {
    avg: "ch_agenda_item_avg_fields",
    count: "Int",
    max: "ch_agenda_item_max_fields",
    min: "ch_agenda_item_min_fields",
    stddev: "ch_agenda_item_stddev_fields",
    stddev_pop: "ch_agenda_item_stddev_pop_fields",
    stddev_samp: "ch_agenda_item_stddev_samp_fields",
    sum: "ch_agenda_item_sum_fields",
    var_pop: "ch_agenda_item_var_pop_fields",
    var_samp: "ch_agenda_item_var_samp_fields",
    variance: "ch_agenda_item_variance_fields",
  },
  ch_agenda_item_avg_fields: {
    helper_id: "Float",
    id: "Float",
    meeting_id: "Float",
    room_id: "Float",
  },
  ch_agenda_item_max_fields: {
    helper_id: "Int",
    id: "Int",
    meeting_id: "Int",
    room_id: "Int",
    status: "String",
  },
  ch_agenda_item_min_fields: {
    helper_id: "Int",
    id: "Int",
    meeting_id: "Int",
    room_id: "Int",
    status: "String",
  },
  ch_agenda_item_mutation_response: {
    affected_rows: "Int",
    returning: "ch_agenda_item",
  },
  ch_agenda_item_stddev_fields: {
    helper_id: "Float",
    id: "Float",
    meeting_id: "Float",
    room_id: "Float",
  },
  ch_agenda_item_stddev_pop_fields: {
    helper_id: "Float",
    id: "Float",
    meeting_id: "Float",
    room_id: "Float",
  },
  ch_agenda_item_stddev_samp_fields: {
    helper_id: "Float",
    id: "Float",
    meeting_id: "Float",
    room_id: "Float",
  },
  ch_agenda_item_sum_fields: {
    helper_id: "Int",
    id: "Int",
    meeting_id: "Int",
    room_id: "Int",
  },
  ch_agenda_item_var_pop_fields: {
    helper_id: "Float",
    id: "Float",
    meeting_id: "Float",
    room_id: "Float",
  },
  ch_agenda_item_var_samp_fields: {
    helper_id: "Float",
    id: "Float",
    meeting_id: "Float",
    room_id: "Float",
  },
  ch_agenda_item_variance_fields: {
    helper_id: "Float",
    id: "Float",
    meeting_id: "Float",
    room_id: "Float",
  },
  ch_festival: {
    ch_helpers: "ch_helper",
    ch_helpers_aggregate: "ch_helper_aggregate",
    ch_rooms: "ch_room",
    ch_rooms_aggregate: "ch_room_aggregate",
    ch_wait_lists: "ch_wait_list",
    ch_wait_lists_aggregate: "ch_wait_list_aggregate",
    end_proposal: "timestamptz",
    end_time: "timestamptz",
    id: "Int",
    name: "String",
    nb_sphere: "nb_sphere",
    settings: "jsonb",
    slug: "String",
    sphere_id: "Int",
    start_proposal: "timestamptz",
    start_publication: "timestamptz",
    start_time: "timestamptz",
    status: "String",
  },
  ch_festival_aggregate: {
    aggregate: "ch_festival_aggregate_fields",
    nodes: "ch_festival",
  },
  ch_festival_aggregate_fields: {
    avg: "ch_festival_avg_fields",
    count: "Int",
    max: "ch_festival_max_fields",
    min: "ch_festival_min_fields",
    stddev: "ch_festival_stddev_fields",
    stddev_pop: "ch_festival_stddev_pop_fields",
    stddev_samp: "ch_festival_stddev_samp_fields",
    sum: "ch_festival_sum_fields",
    var_pop: "ch_festival_var_pop_fields",
    var_samp: "ch_festival_var_samp_fields",
    variance: "ch_festival_variance_fields",
  },
  ch_festival_avg_fields: {
    id: "Float",
    sphere_id: "Float",
  },
  ch_festival_max_fields: {
    end_proposal: "timestamptz",
    end_time: "timestamptz",
    id: "Int",
    name: "String",
    slug: "String",
    sphere_id: "Int",
    start_proposal: "timestamptz",
    start_publication: "timestamptz",
    start_time: "timestamptz",
    status: "String",
  },
  ch_festival_min_fields: {
    end_proposal: "timestamptz",
    end_time: "timestamptz",
    id: "Int",
    name: "String",
    slug: "String",
    sphere_id: "Int",
    start_proposal: "timestamptz",
    start_publication: "timestamptz",
    start_time: "timestamptz",
    status: "String",
  },
  ch_festival_mutation_response: {
    affected_rows: "Int",
    returning: "ch_festival",
  },
  ch_festival_stddev_fields: {
    id: "Float",
    sphere_id: "Float",
  },
  ch_festival_stddev_pop_fields: {
    id: "Float",
    sphere_id: "Float",
  },
  ch_festival_stddev_samp_fields: {
    id: "Float",
    sphere_id: "Float",
  },
  ch_festival_sum_fields: {
    id: "Int",
    sphere_id: "Int",
  },
  ch_festival_var_pop_fields: {
    id: "Float",
    sphere_id: "Float",
  },
  ch_festival_var_samp_fields: {
    id: "Float",
    sphere_id: "Float",
  },
  ch_festival_variance_fields: {
    id: "Float",
    sphere_id: "Float",
  },
  ch_helper: {
    ch_agenda_items: "ch_agenda_item",
    ch_agenda_items_aggregate: "ch_agenda_item_aggregate",
    ch_festival: "ch_festival",
    ch_helper_time_slots: "ch_helper_time_slots",
    ch_helper_time_slots_aggregate: "ch_helper_time_slots_aggregate",
    cr_user: "cr_user",
    festival_id: "Int",
    id: "Int",
    user_id: "uuid",
  },
  ch_helper_aggregate: {
    aggregate: "ch_helper_aggregate_fields",
    nodes: "ch_helper",
  },
  ch_helper_aggregate_fields: {
    avg: "ch_helper_avg_fields",
    count: "Int",
    max: "ch_helper_max_fields",
    min: "ch_helper_min_fields",
    stddev: "ch_helper_stddev_fields",
    stddev_pop: "ch_helper_stddev_pop_fields",
    stddev_samp: "ch_helper_stddev_samp_fields",
    sum: "ch_helper_sum_fields",
    var_pop: "ch_helper_var_pop_fields",
    var_samp: "ch_helper_var_samp_fields",
    variance: "ch_helper_variance_fields",
  },
  ch_helper_avg_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_helper_max_fields: {
    festival_id: "Int",
    id: "Int",
    user_id: "uuid",
  },
  ch_helper_min_fields: {
    festival_id: "Int",
    id: "Int",
    user_id: "uuid",
  },
  ch_helper_mutation_response: {
    affected_rows: "Int",
    returning: "ch_helper",
  },
  ch_helper_stddev_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_helper_stddev_pop_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_helper_stddev_samp_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_helper_sum_fields: {
    festival_id: "Int",
    id: "Int",
  },
  ch_helper_time_slots: {
    ch_helper: "ch_helper",
    ch_time_slot: "ch_time_slot",
    helper_id: "Int",
    id: "Int",
    timeslot_id: "Int",
  },
  ch_helper_time_slots_aggregate: {
    aggregate: "ch_helper_time_slots_aggregate_fields",
    nodes: "ch_helper_time_slots",
  },
  ch_helper_time_slots_aggregate_fields: {
    avg: "ch_helper_time_slots_avg_fields",
    count: "Int",
    max: "ch_helper_time_slots_max_fields",
    min: "ch_helper_time_slots_min_fields",
    stddev: "ch_helper_time_slots_stddev_fields",
    stddev_pop: "ch_helper_time_slots_stddev_pop_fields",
    stddev_samp: "ch_helper_time_slots_stddev_samp_fields",
    sum: "ch_helper_time_slots_sum_fields",
    var_pop: "ch_helper_time_slots_var_pop_fields",
    var_samp: "ch_helper_time_slots_var_samp_fields",
    variance: "ch_helper_time_slots_variance_fields",
  },
  ch_helper_time_slots_avg_fields: {
    helper_id: "Float",
    id: "Float",
    timeslot_id: "Float",
  },
  ch_helper_time_slots_max_fields: {
    helper_id: "Int",
    id: "Int",
    timeslot_id: "Int",
  },
  ch_helper_time_slots_min_fields: {
    helper_id: "Int",
    id: "Int",
    timeslot_id: "Int",
  },
  ch_helper_time_slots_mutation_response: {
    affected_rows: "Int",
    returning: "ch_helper_time_slots",
  },
  ch_helper_time_slots_stddev_fields: {
    helper_id: "Float",
    id: "Float",
    timeslot_id: "Float",
  },
  ch_helper_time_slots_stddev_pop_fields: {
    helper_id: "Float",
    id: "Float",
    timeslot_id: "Float",
  },
  ch_helper_time_slots_stddev_samp_fields: {
    helper_id: "Float",
    id: "Float",
    timeslot_id: "Float",
  },
  ch_helper_time_slots_sum_fields: {
    helper_id: "Int",
    id: "Int",
    timeslot_id: "Int",
  },
  ch_helper_time_slots_var_pop_fields: {
    helper_id: "Float",
    id: "Float",
    timeslot_id: "Float",
  },
  ch_helper_time_slots_var_samp_fields: {
    helper_id: "Float",
    id: "Float",
    timeslot_id: "Float",
  },
  ch_helper_time_slots_variance_fields: {
    helper_id: "Float",
    id: "Float",
    timeslot_id: "Float",
  },
  ch_helper_var_pop_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_helper_var_samp_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_helper_variance_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_proposal: {
    ch_proposal_time_slots: "ch_proposal_time_slots",
    ch_proposal_time_slots_aggregate: "ch_proposal_time_slots_aggregate",
    ch_wait_list: "ch_wait_list",
    city: "String",
    club: "String",
    created_at: "timestamptz",
    description: "String",
    duration_minutes: "Int",
    id: "Int",
    meeting: "nb_meeting",
    meeting_id: "Int",
    name: "String",
    needs: "String",
    other_contact: "jsonb",
    other_data: "jsonb",
    phone: "String",
    speaker: "cr_user",
    speaker_name: "String",
    speaker_user_id: "uuid",
    status: "String",
    topic: "String",
    waitlist_id: "Int",
  },
  ch_proposal_aggregate: {
    aggregate: "ch_proposal_aggregate_fields",
    nodes: "ch_proposal",
  },
  ch_proposal_aggregate_fields: {
    avg: "ch_proposal_avg_fields",
    count: "Int",
    max: "ch_proposal_max_fields",
    min: "ch_proposal_min_fields",
    stddev: "ch_proposal_stddev_fields",
    stddev_pop: "ch_proposal_stddev_pop_fields",
    stddev_samp: "ch_proposal_stddev_samp_fields",
    sum: "ch_proposal_sum_fields",
    var_pop: "ch_proposal_var_pop_fields",
    var_samp: "ch_proposal_var_samp_fields",
    variance: "ch_proposal_variance_fields",
  },
  ch_proposal_avg_fields: {
    duration_minutes: "Float",
    id: "Float",
    meeting_id: "Float",
    waitlist_id: "Float",
  },
  ch_proposal_max_fields: {
    city: "String",
    club: "String",
    created_at: "timestamptz",
    description: "String",
    duration_minutes: "Int",
    id: "Int",
    meeting_id: "Int",
    name: "String",
    needs: "String",
    phone: "String",
    speaker_name: "String",
    speaker_user_id: "uuid",
    status: "String",
    topic: "String",
    waitlist_id: "Int",
  },
  ch_proposal_min_fields: {
    city: "String",
    club: "String",
    created_at: "timestamptz",
    description: "String",
    duration_minutes: "Int",
    id: "Int",
    meeting_id: "Int",
    name: "String",
    needs: "String",
    phone: "String",
    speaker_name: "String",
    speaker_user_id: "uuid",
    status: "String",
    topic: "String",
    waitlist_id: "Int",
  },
  ch_proposal_mutation_response: {
    affected_rows: "Int",
    returning: "ch_proposal",
  },
  ch_proposal_stddev_fields: {
    duration_minutes: "Float",
    id: "Float",
    meeting_id: "Float",
    waitlist_id: "Float",
  },
  ch_proposal_stddev_pop_fields: {
    duration_minutes: "Float",
    id: "Float",
    meeting_id: "Float",
    waitlist_id: "Float",
  },
  ch_proposal_stddev_samp_fields: {
    duration_minutes: "Float",
    id: "Float",
    meeting_id: "Float",
    waitlist_id: "Float",
  },
  ch_proposal_sum_fields: {
    duration_minutes: "Int",
    id: "Int",
    meeting_id: "Int",
    waitlist_id: "Int",
  },
  ch_proposal_time_slots: {
    ch_proposal: "ch_proposal",
    ch_time_slot: "ch_time_slot",
    id: "Int",
    proposal_id: "Int",
    timeslot_id: "Int",
  },
  ch_proposal_time_slots_aggregate: {
    aggregate: "ch_proposal_time_slots_aggregate_fields",
    nodes: "ch_proposal_time_slots",
  },
  ch_proposal_time_slots_aggregate_fields: {
    avg: "ch_proposal_time_slots_avg_fields",
    count: "Int",
    max: "ch_proposal_time_slots_max_fields",
    min: "ch_proposal_time_slots_min_fields",
    stddev: "ch_proposal_time_slots_stddev_fields",
    stddev_pop: "ch_proposal_time_slots_stddev_pop_fields",
    stddev_samp: "ch_proposal_time_slots_stddev_samp_fields",
    sum: "ch_proposal_time_slots_sum_fields",
    var_pop: "ch_proposal_time_slots_var_pop_fields",
    var_samp: "ch_proposal_time_slots_var_samp_fields",
    variance: "ch_proposal_time_slots_variance_fields",
  },
  ch_proposal_time_slots_avg_fields: {
    id: "Float",
    proposal_id: "Float",
    timeslot_id: "Float",
  },
  ch_proposal_time_slots_max_fields: {
    id: "Int",
    proposal_id: "Int",
    timeslot_id: "Int",
  },
  ch_proposal_time_slots_min_fields: {
    id: "Int",
    proposal_id: "Int",
    timeslot_id: "Int",
  },
  ch_proposal_time_slots_mutation_response: {
    affected_rows: "Int",
    returning: "ch_proposal_time_slots",
  },
  ch_proposal_time_slots_stddev_fields: {
    id: "Float",
    proposal_id: "Float",
    timeslot_id: "Float",
  },
  ch_proposal_time_slots_stddev_pop_fields: {
    id: "Float",
    proposal_id: "Float",
    timeslot_id: "Float",
  },
  ch_proposal_time_slots_stddev_samp_fields: {
    id: "Float",
    proposal_id: "Float",
    timeslot_id: "Float",
  },
  ch_proposal_time_slots_sum_fields: {
    id: "Int",
    proposal_id: "Int",
    timeslot_id: "Int",
  },
  ch_proposal_time_slots_var_pop_fields: {
    id: "Float",
    proposal_id: "Float",
    timeslot_id: "Float",
  },
  ch_proposal_time_slots_var_samp_fields: {
    id: "Float",
    proposal_id: "Float",
    timeslot_id: "Float",
  },
  ch_proposal_time_slots_variance_fields: {
    id: "Float",
    proposal_id: "Float",
    timeslot_id: "Float",
  },
  ch_proposal_var_pop_fields: {
    duration_minutes: "Float",
    id: "Float",
    meeting_id: "Float",
    waitlist_id: "Float",
  },
  ch_proposal_var_samp_fields: {
    duration_minutes: "Float",
    id: "Float",
    meeting_id: "Float",
    waitlist_id: "Float",
  },
  ch_proposal_variance_fields: {
    duration_minutes: "Float",
    id: "Float",
    meeting_id: "Float",
    waitlist_id: "Float",
  },
  ch_room: {
    ch_agenda_items: "ch_agenda_item",
    ch_agenda_items_aggregate: "ch_agenda_item_aggregate",
    ch_festival: "ch_festival",
    festival_id: "Int",
    id: "Int",
    name: "String",
    slug: "String",
  },
  ch_room_aggregate: {
    aggregate: "ch_room_aggregate_fields",
    nodes: "ch_room",
  },
  ch_room_aggregate_fields: {
    avg: "ch_room_avg_fields",
    count: "Int",
    max: "ch_room_max_fields",
    min: "ch_room_min_fields",
    stddev: "ch_room_stddev_fields",
    stddev_pop: "ch_room_stddev_pop_fields",
    stddev_samp: "ch_room_stddev_samp_fields",
    sum: "ch_room_sum_fields",
    var_pop: "ch_room_var_pop_fields",
    var_samp: "ch_room_var_samp_fields",
    variance: "ch_room_variance_fields",
  },
  ch_room_avg_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_room_max_fields: {
    festival_id: "Int",
    id: "Int",
    name: "String",
    slug: "String",
  },
  ch_room_min_fields: {
    festival_id: "Int",
    id: "Int",
    name: "String",
    slug: "String",
  },
  ch_room_mutation_response: {
    affected_rows: "Int",
    returning: "ch_room",
  },
  ch_room_stddev_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_room_stddev_pop_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_room_stddev_samp_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_room_sum_fields: {
    festival_id: "Int",
    id: "Int",
  },
  ch_room_var_pop_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_room_var_samp_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_room_variance_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_time_slot: {
    ch_helper_time_slots: "ch_helper_time_slots",
    ch_helper_time_slots_aggregate: "ch_helper_time_slots_aggregate",
    ch_proposal_time_slots: "ch_proposal_time_slots",
    ch_proposal_time_slots_aggregate: "ch_proposal_time_slots_aggregate",
    end_time: "timestamptz",
    festival_id: "Int",
    id: "Int",
    start_time: "timestamptz",
  },
  ch_time_slot_aggregate: {
    aggregate: "ch_time_slot_aggregate_fields",
    nodes: "ch_time_slot",
  },
  ch_time_slot_aggregate_fields: {
    avg: "ch_time_slot_avg_fields",
    count: "Int",
    max: "ch_time_slot_max_fields",
    min: "ch_time_slot_min_fields",
    stddev: "ch_time_slot_stddev_fields",
    stddev_pop: "ch_time_slot_stddev_pop_fields",
    stddev_samp: "ch_time_slot_stddev_samp_fields",
    sum: "ch_time_slot_sum_fields",
    var_pop: "ch_time_slot_var_pop_fields",
    var_samp: "ch_time_slot_var_samp_fields",
    variance: "ch_time_slot_variance_fields",
  },
  ch_time_slot_avg_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_time_slot_max_fields: {
    end_time: "timestamptz",
    festival_id: "Int",
    id: "Int",
    start_time: "timestamptz",
  },
  ch_time_slot_min_fields: {
    end_time: "timestamptz",
    festival_id: "Int",
    id: "Int",
    start_time: "timestamptz",
  },
  ch_time_slot_mutation_response: {
    affected_rows: "Int",
    returning: "ch_time_slot",
  },
  ch_time_slot_stddev_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_time_slot_stddev_pop_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_time_slot_stddev_samp_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_time_slot_sum_fields: {
    festival_id: "Int",
    id: "Int",
  },
  ch_time_slot_var_pop_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_time_slot_var_samp_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_time_slot_variance_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_wait_list: {
    ch_festival: "ch_festival",
    ch_proposals: "ch_proposal",
    ch_proposals_aggregate: "ch_proposal_aggregate",
    festival_id: "Int",
    id: "Int",
    name: "String",
    slug: "String",
  },
  ch_wait_list_aggregate: {
    aggregate: "ch_wait_list_aggregate_fields",
    nodes: "ch_wait_list",
  },
  ch_wait_list_aggregate_fields: {
    avg: "ch_wait_list_avg_fields",
    count: "Int",
    max: "ch_wait_list_max_fields",
    min: "ch_wait_list_min_fields",
    stddev: "ch_wait_list_stddev_fields",
    stddev_pop: "ch_wait_list_stddev_pop_fields",
    stddev_samp: "ch_wait_list_stddev_samp_fields",
    sum: "ch_wait_list_sum_fields",
    var_pop: "ch_wait_list_var_pop_fields",
    var_samp: "ch_wait_list_var_samp_fields",
    variance: "ch_wait_list_variance_fields",
  },
  ch_wait_list_avg_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_wait_list_max_fields: {
    festival_id: "Int",
    id: "Int",
    name: "String",
    slug: "String",
  },
  ch_wait_list_min_fields: {
    festival_id: "Int",
    id: "Int",
    name: "String",
    slug: "String",
  },
  ch_wait_list_mutation_response: {
    affected_rows: "Int",
    returning: "ch_wait_list",
  },
  ch_wait_list_stddev_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_wait_list_stddev_pop_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_wait_list_stddev_samp_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_wait_list_sum_fields: {
    festival_id: "Int",
    id: "Int",
  },
  ch_wait_list_var_pop_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_wait_list_var_samp_fields: {
    festival_id: "Float",
    id: "Float",
  },
  ch_wait_list_variance_fields: {
    festival_id: "Float",
    id: "Float",
  },
  cr_user: {
    auth0_id: "String",
    ch_helpers: "ch_helper",
    ch_helpers_aggregate: "ch_helper_aggregate",
    date_joined: "timestamptz",
    email: "String",
    first_name: "String",
    guilds: "nb_guild_member",
    guilds_aggregate: "nb_guild_member_aggregate",
    is_active: "Boolean",
    is_staff: "Boolean",
    is_superuser: "Boolean",
    last_login: "timestamptz",
    last_name: "String",
    locale: "String",
    managed_spheres: "nb_sphere_managers",
    managed_spheres_aggregate: "nb_sphere_managers_aggregate",
    meetings: "nb_meeting_participants",
    meetings_aggregate: "nb_meeting_participants_aggregate",
    organized_meetings: "nb_meeting",
    organized_meetings_aggregate: "nb_meeting_aggregate",
    password: "String",
    username: "String",
    uuid: "uuid",
  },
  cr_user_aggregate: {
    aggregate: "cr_user_aggregate_fields",
    nodes: "cr_user",
  },
  cr_user_aggregate_fields: {
    count: "Int",
    max: "cr_user_max_fields",
    min: "cr_user_min_fields",
  },
  cr_user_max_fields: {
    auth0_id: "String",
    date_joined: "timestamptz",
    email: "String",
    first_name: "String",
    last_login: "timestamptz",
    last_name: "String",
    locale: "String",
    password: "String",
    username: "String",
    uuid: "uuid",
  },
  cr_user_min_fields: {
    auth0_id: "String",
    date_joined: "timestamptz",
    email: "String",
    first_name: "String",
    last_login: "timestamptz",
    last_name: "String",
    locale: "String",
    password: "String",
    username: "String",
    uuid: "uuid",
  },
  cr_user_mutation_response: {
    affected_rows: "Int",
    returning: "cr_user",
  },
  django_site: {
    domain: "String",
    id: "Int",
    name: "String",
    nb_sphere: "nb_sphere",
  },
  django_site_aggregate: {
    aggregate: "django_site_aggregate_fields",
    nodes: "django_site",
  },
  django_site_aggregate_fields: {
    avg: "django_site_avg_fields",
    count: "Int",
    max: "django_site_max_fields",
    min: "django_site_min_fields",
    stddev: "django_site_stddev_fields",
    stddev_pop: "django_site_stddev_pop_fields",
    stddev_samp: "django_site_stddev_samp_fields",
    sum: "django_site_sum_fields",
    var_pop: "django_site_var_pop_fields",
    var_samp: "django_site_var_samp_fields",
    variance: "django_site_variance_fields",
  },
  django_site_avg_fields: {
    id: "Float",
  },
  django_site_max_fields: {
    domain: "String",
    id: "Int",
    name: "String",
  },
  django_site_min_fields: {
    domain: "String",
    id: "Int",
    name: "String",
  },
  django_site_mutation_response: {
    affected_rows: "Int",
    returning: "django_site",
  },
  django_site_stddev_fields: {
    id: "Float",
  },
  django_site_stddev_pop_fields: {
    id: "Float",
  },
  django_site_stddev_samp_fields: {
    id: "Float",
  },
  django_site_sum_fields: {
    id: "Int",
  },
  django_site_var_pop_fields: {
    id: "Float",
  },
  django_site_var_samp_fields: {
    id: "Float",
  },
  django_site_variance_fields: {
    id: "Float",
  },
  mutation_root: {
    delete_ch_agenda_item: "ch_agenda_item_mutation_response",
    delete_ch_agenda_item_by_pk: "ch_agenda_item",
    delete_ch_festival: "ch_festival_mutation_response",
    delete_ch_festival_by_pk: "ch_festival",
    delete_ch_helper: "ch_helper_mutation_response",
    delete_ch_helper_by_pk: "ch_helper",
    delete_ch_helper_time_slots: "ch_helper_time_slots_mutation_response",
    delete_ch_helper_time_slots_by_pk: "ch_helper_time_slots",
    delete_ch_proposal: "ch_proposal_mutation_response",
    delete_ch_proposal_by_pk: "ch_proposal",
    delete_ch_proposal_time_slots: "ch_proposal_time_slots_mutation_response",
    delete_ch_proposal_time_slots_by_pk: "ch_proposal_time_slots",
    delete_ch_room: "ch_room_mutation_response",
    delete_ch_room_by_pk: "ch_room",
    delete_ch_time_slot: "ch_time_slot_mutation_response",
    delete_ch_time_slot_by_pk: "ch_time_slot",
    delete_ch_wait_list: "ch_wait_list_mutation_response",
    delete_ch_wait_list_by_pk: "ch_wait_list",
    delete_cr_user: "cr_user_mutation_response",
    delete_cr_user_by_pk: "cr_user",
    delete_django_site: "django_site_mutation_response",
    delete_django_site_by_pk: "django_site",
    delete_nb_guild: "nb_guild_mutation_response",
    delete_nb_guild_by_pk: "nb_guild",
    delete_nb_guild_member: "nb_guild_member_mutation_response",
    delete_nb_guild_member_by_pk: "nb_guild_member",
    delete_nb_meeting: "nb_meeting_mutation_response",
    delete_nb_meeting_by_pk: "nb_meeting",
    delete_nb_meeting_participants: "nb_meeting_participants_mutation_response",
    delete_nb_meeting_participants_by_pk: "nb_meeting_participants",
    delete_nb_sphere: "nb_sphere_mutation_response",
    delete_nb_sphere_by_pk: "nb_sphere",
    delete_nb_sphere_managers: "nb_sphere_managers_mutation_response",
    delete_nb_sphere_managers_by_pk: "nb_sphere_managers",
    insert_ch_agenda_item: "ch_agenda_item_mutation_response",
    insert_ch_agenda_item_one: "ch_agenda_item",
    insert_ch_festival: "ch_festival_mutation_response",
    insert_ch_festival_one: "ch_festival",
    insert_ch_helper: "ch_helper_mutation_response",
    insert_ch_helper_one: "ch_helper",
    insert_ch_helper_time_slots: "ch_helper_time_slots_mutation_response",
    insert_ch_helper_time_slots_one: "ch_helper_time_slots",
    insert_ch_proposal: "ch_proposal_mutation_response",
    insert_ch_proposal_one: "ch_proposal",
    insert_ch_proposal_time_slots: "ch_proposal_time_slots_mutation_response",
    insert_ch_proposal_time_slots_one: "ch_proposal_time_slots",
    insert_ch_room: "ch_room_mutation_response",
    insert_ch_room_one: "ch_room",
    insert_ch_time_slot: "ch_time_slot_mutation_response",
    insert_ch_time_slot_one: "ch_time_slot",
    insert_ch_wait_list: "ch_wait_list_mutation_response",
    insert_ch_wait_list_one: "ch_wait_list",
    insert_cr_user: "cr_user_mutation_response",
    insert_cr_user_one: "cr_user",
    insert_django_site: "django_site_mutation_response",
    insert_django_site_one: "django_site",
    insert_nb_guild: "nb_guild_mutation_response",
    insert_nb_guild_member: "nb_guild_member_mutation_response",
    insert_nb_guild_member_one: "nb_guild_member",
    insert_nb_guild_one: "nb_guild",
    insert_nb_meeting: "nb_meeting_mutation_response",
    insert_nb_meeting_one: "nb_meeting",
    insert_nb_meeting_participants: "nb_meeting_participants_mutation_response",
    insert_nb_meeting_participants_one: "nb_meeting_participants",
    insert_nb_sphere: "nb_sphere_mutation_response",
    insert_nb_sphere_managers: "nb_sphere_managers_mutation_response",
    insert_nb_sphere_managers_one: "nb_sphere_managers",
    insert_nb_sphere_one: "nb_sphere",
    update_ch_agenda_item: "ch_agenda_item_mutation_response",
    update_ch_agenda_item_by_pk: "ch_agenda_item",
    update_ch_festival: "ch_festival_mutation_response",
    update_ch_festival_by_pk: "ch_festival",
    update_ch_helper: "ch_helper_mutation_response",
    update_ch_helper_by_pk: "ch_helper",
    update_ch_helper_time_slots: "ch_helper_time_slots_mutation_response",
    update_ch_helper_time_slots_by_pk: "ch_helper_time_slots",
    update_ch_proposal: "ch_proposal_mutation_response",
    update_ch_proposal_by_pk: "ch_proposal",
    update_ch_proposal_time_slots: "ch_proposal_time_slots_mutation_response",
    update_ch_proposal_time_slots_by_pk: "ch_proposal_time_slots",
    update_ch_room: "ch_room_mutation_response",
    update_ch_room_by_pk: "ch_room",
    update_ch_time_slot: "ch_time_slot_mutation_response",
    update_ch_time_slot_by_pk: "ch_time_slot",
    update_ch_wait_list: "ch_wait_list_mutation_response",
    update_ch_wait_list_by_pk: "ch_wait_list",
    update_cr_user: "cr_user_mutation_response",
    update_cr_user_by_pk: "cr_user",
    update_django_site: "django_site_mutation_response",
    update_django_site_by_pk: "django_site",
    update_nb_guild: "nb_guild_mutation_response",
    update_nb_guild_by_pk: "nb_guild",
    update_nb_guild_member: "nb_guild_member_mutation_response",
    update_nb_guild_member_by_pk: "nb_guild_member",
    update_nb_meeting: "nb_meeting_mutation_response",
    update_nb_meeting_by_pk: "nb_meeting",
    update_nb_meeting_participants: "nb_meeting_participants_mutation_response",
    update_nb_meeting_participants_by_pk: "nb_meeting_participants",
    update_nb_sphere: "nb_sphere_mutation_response",
    update_nb_sphere_by_pk: "nb_sphere",
    update_nb_sphere_managers: "nb_sphere_managers_mutation_response",
    update_nb_sphere_managers_by_pk: "nb_sphere_managers",
  },
  nb_guild: {
    created_at: "timestamptz",
    description: "String",
    id: "Int",
    is_public: "Boolean",
    name: "String",
    nb_guild_members: "nb_guild_member",
    nb_guild_members_aggregate: "nb_guild_member_aggregate",
    nb_meetings: "nb_meeting",
    nb_meetings_aggregate: "nb_meeting_aggregate",
    slug: "String",
    updated_at: "timestamptz",
  },
  nb_guild_aggregate: {
    aggregate: "nb_guild_aggregate_fields",
    nodes: "nb_guild",
  },
  nb_guild_aggregate_fields: {
    avg: "nb_guild_avg_fields",
    count: "Int",
    max: "nb_guild_max_fields",
    min: "nb_guild_min_fields",
    stddev: "nb_guild_stddev_fields",
    stddev_pop: "nb_guild_stddev_pop_fields",
    stddev_samp: "nb_guild_stddev_samp_fields",
    sum: "nb_guild_sum_fields",
    var_pop: "nb_guild_var_pop_fields",
    var_samp: "nb_guild_var_samp_fields",
    variance: "nb_guild_variance_fields",
  },
  nb_guild_avg_fields: {
    id: "Float",
  },
  nb_guild_max_fields: {
    created_at: "timestamptz",
    description: "String",
    id: "Int",
    name: "String",
    slug: "String",
    updated_at: "timestamptz",
  },
  nb_guild_member: {
    cr_user: "cr_user",
    guild_id: "Int",
    id: "Int",
    membership_type: "String",
    nb_guild: "nb_guild",
    user_id: "uuid",
  },
  nb_guild_member_aggregate: {
    aggregate: "nb_guild_member_aggregate_fields",
    nodes: "nb_guild_member",
  },
  nb_guild_member_aggregate_fields: {
    avg: "nb_guild_member_avg_fields",
    count: "Int",
    max: "nb_guild_member_max_fields",
    min: "nb_guild_member_min_fields",
    stddev: "nb_guild_member_stddev_fields",
    stddev_pop: "nb_guild_member_stddev_pop_fields",
    stddev_samp: "nb_guild_member_stddev_samp_fields",
    sum: "nb_guild_member_sum_fields",
    var_pop: "nb_guild_member_var_pop_fields",
    var_samp: "nb_guild_member_var_samp_fields",
    variance: "nb_guild_member_variance_fields",
  },
  nb_guild_member_avg_fields: {
    guild_id: "Float",
    id: "Float",
  },
  nb_guild_member_max_fields: {
    guild_id: "Int",
    id: "Int",
    membership_type: "String",
    user_id: "uuid",
  },
  nb_guild_member_min_fields: {
    guild_id: "Int",
    id: "Int",
    membership_type: "String",
    user_id: "uuid",
  },
  nb_guild_member_mutation_response: {
    affected_rows: "Int",
    returning: "nb_guild_member",
  },
  nb_guild_member_stddev_fields: {
    guild_id: "Float",
    id: "Float",
  },
  nb_guild_member_stddev_pop_fields: {
    guild_id: "Float",
    id: "Float",
  },
  nb_guild_member_stddev_samp_fields: {
    guild_id: "Float",
    id: "Float",
  },
  nb_guild_member_sum_fields: {
    guild_id: "Int",
    id: "Int",
  },
  nb_guild_member_var_pop_fields: {
    guild_id: "Float",
    id: "Float",
  },
  nb_guild_member_var_samp_fields: {
    guild_id: "Float",
    id: "Float",
  },
  nb_guild_member_variance_fields: {
    guild_id: "Float",
    id: "Float",
  },
  nb_guild_min_fields: {
    created_at: "timestamptz",
    description: "String",
    id: "Int",
    name: "String",
    slug: "String",
    updated_at: "timestamptz",
  },
  nb_guild_mutation_response: {
    affected_rows: "Int",
    returning: "nb_guild",
  },
  nb_guild_stddev_fields: {
    id: "Float",
  },
  nb_guild_stddev_pop_fields: {
    id: "Float",
  },
  nb_guild_stddev_samp_fields: {
    id: "Float",
  },
  nb_guild_sum_fields: {
    id: "Int",
  },
  nb_guild_var_pop_fields: {
    id: "Float",
  },
  nb_guild_var_samp_fields: {
    id: "Float",
  },
  nb_guild_variance_fields: {
    id: "Float",
  },
  nb_meeting: {
    created_at: "timestamptz",
    description: "String",
    end_time: "timestamptz",
    guild: "nb_guild",
    guild_id: "Int",
    id: "Int",
    image: "String",
    location: "String",
    meeting_url: "String",
    name: "String",
    organizer: "cr_user",
    organizer_id: "uuid",
    participants: "nb_meeting_participants",
    participants_aggregate: "nb_meeting_participants_aggregate",
    proposal: "ch_proposal",
    publication_time: "timestamptz",
    slug: "String",
    sphere: "nb_sphere",
    sphere_id: "Int",
    start_time: "timestamptz",
    status: "String",
    time_table: "ch_agenda_item",
    updated_at: "timestamptz",
  },
  nb_meeting_aggregate: {
    aggregate: "nb_meeting_aggregate_fields",
    nodes: "nb_meeting",
  },
  nb_meeting_aggregate_fields: {
    avg: "nb_meeting_avg_fields",
    count: "Int",
    max: "nb_meeting_max_fields",
    min: "nb_meeting_min_fields",
    stddev: "nb_meeting_stddev_fields",
    stddev_pop: "nb_meeting_stddev_pop_fields",
    stddev_samp: "nb_meeting_stddev_samp_fields",
    sum: "nb_meeting_sum_fields",
    var_pop: "nb_meeting_var_pop_fields",
    var_samp: "nb_meeting_var_samp_fields",
    variance: "nb_meeting_variance_fields",
  },
  nb_meeting_avg_fields: {
    guild_id: "Float",
    id: "Float",
    sphere_id: "Float",
  },
  nb_meeting_max_fields: {
    created_at: "timestamptz",
    description: "String",
    end_time: "timestamptz",
    guild_id: "Int",
    id: "Int",
    image: "String",
    location: "String",
    meeting_url: "String",
    name: "String",
    organizer_id: "uuid",
    publication_time: "timestamptz",
    slug: "String",
    sphere_id: "Int",
    start_time: "timestamptz",
    status: "String",
    updated_at: "timestamptz",
  },
  nb_meeting_min_fields: {
    created_at: "timestamptz",
    description: "String",
    end_time: "timestamptz",
    guild_id: "Int",
    id: "Int",
    image: "String",
    location: "String",
    meeting_url: "String",
    name: "String",
    organizer_id: "uuid",
    publication_time: "timestamptz",
    slug: "String",
    sphere_id: "Int",
    start_time: "timestamptz",
    status: "String",
    updated_at: "timestamptz",
  },
  nb_meeting_mutation_response: {
    affected_rows: "Int",
    returning: "nb_meeting",
  },
  nb_meeting_participants: {
    cr_user: "cr_user",
    id: "Int",
    meeting_id: "Int",
    nb_meeting: "nb_meeting",
    user_id: "uuid",
  },
  nb_meeting_participants_aggregate: {
    aggregate: "nb_meeting_participants_aggregate_fields",
    nodes: "nb_meeting_participants",
  },
  nb_meeting_participants_aggregate_fields: {
    avg: "nb_meeting_participants_avg_fields",
    count: "Int",
    max: "nb_meeting_participants_max_fields",
    min: "nb_meeting_participants_min_fields",
    stddev: "nb_meeting_participants_stddev_fields",
    stddev_pop: "nb_meeting_participants_stddev_pop_fields",
    stddev_samp: "nb_meeting_participants_stddev_samp_fields",
    sum: "nb_meeting_participants_sum_fields",
    var_pop: "nb_meeting_participants_var_pop_fields",
    var_samp: "nb_meeting_participants_var_samp_fields",
    variance: "nb_meeting_participants_variance_fields",
  },
  nb_meeting_participants_avg_fields: {
    id: "Float",
    meeting_id: "Float",
  },
  nb_meeting_participants_max_fields: {
    id: "Int",
    meeting_id: "Int",
    user_id: "uuid",
  },
  nb_meeting_participants_min_fields: {
    id: "Int",
    meeting_id: "Int",
    user_id: "uuid",
  },
  nb_meeting_participants_mutation_response: {
    affected_rows: "Int",
    returning: "nb_meeting_participants",
  },
  nb_meeting_participants_stddev_fields: {
    id: "Float",
    meeting_id: "Float",
  },
  nb_meeting_participants_stddev_pop_fields: {
    id: "Float",
    meeting_id: "Float",
  },
  nb_meeting_participants_stddev_samp_fields: {
    id: "Float",
    meeting_id: "Float",
  },
  nb_meeting_participants_sum_fields: {
    id: "Int",
    meeting_id: "Int",
  },
  nb_meeting_participants_var_pop_fields: {
    id: "Float",
    meeting_id: "Float",
  },
  nb_meeting_participants_var_samp_fields: {
    id: "Float",
    meeting_id: "Float",
  },
  nb_meeting_participants_variance_fields: {
    id: "Float",
    meeting_id: "Float",
  },
  nb_meeting_stddev_fields: {
    guild_id: "Float",
    id: "Float",
    sphere_id: "Float",
  },
  nb_meeting_stddev_pop_fields: {
    guild_id: "Float",
    id: "Float",
    sphere_id: "Float",
  },
  nb_meeting_stddev_samp_fields: {
    guild_id: "Float",
    id: "Float",
    sphere_id: "Float",
  },
  nb_meeting_sum_fields: {
    guild_id: "Int",
    id: "Int",
    sphere_id: "Int",
  },
  nb_meeting_var_pop_fields: {
    guild_id: "Float",
    id: "Float",
    sphere_id: "Float",
  },
  nb_meeting_var_samp_fields: {
    guild_id: "Float",
    id: "Float",
    sphere_id: "Float",
  },
  nb_meeting_variance_fields: {
    guild_id: "Float",
    id: "Float",
    sphere_id: "Float",
  },
  nb_sphere: {
    ch_festivals: "ch_festival",
    ch_festivals_aggregate: "ch_festival_aggregate",
    django_site: "django_site",
    id: "Int",
    is_open: "Boolean",
    name: "String",
    nb_meetings: "nb_meeting",
    nb_meetings_aggregate: "nb_meeting_aggregate",
    nb_sphere_managers: "nb_sphere_managers",
    nb_sphere_managers_aggregate: "nb_sphere_managers_aggregate",
    settings: "jsonb",
    site_id: "Int",
  },
  nb_sphere_aggregate: {
    aggregate: "nb_sphere_aggregate_fields",
    nodes: "nb_sphere",
  },
  nb_sphere_aggregate_fields: {
    avg: "nb_sphere_avg_fields",
    count: "Int",
    max: "nb_sphere_max_fields",
    min: "nb_sphere_min_fields",
    stddev: "nb_sphere_stddev_fields",
    stddev_pop: "nb_sphere_stddev_pop_fields",
    stddev_samp: "nb_sphere_stddev_samp_fields",
    sum: "nb_sphere_sum_fields",
    var_pop: "nb_sphere_var_pop_fields",
    var_samp: "nb_sphere_var_samp_fields",
    variance: "nb_sphere_variance_fields",
  },
  nb_sphere_avg_fields: {
    id: "Float",
    site_id: "Float",
  },
  nb_sphere_managers: {
    cr_user: "cr_user",
    id: "Int",
    nb_sphere: "nb_sphere",
    sphere_id: "Int",
    user_id: "uuid",
  },
  nb_sphere_managers_aggregate: {
    aggregate: "nb_sphere_managers_aggregate_fields",
    nodes: "nb_sphere_managers",
  },
  nb_sphere_managers_aggregate_fields: {
    avg: "nb_sphere_managers_avg_fields",
    count: "Int",
    max: "nb_sphere_managers_max_fields",
    min: "nb_sphere_managers_min_fields",
    stddev: "nb_sphere_managers_stddev_fields",
    stddev_pop: "nb_sphere_managers_stddev_pop_fields",
    stddev_samp: "nb_sphere_managers_stddev_samp_fields",
    sum: "nb_sphere_managers_sum_fields",
    var_pop: "nb_sphere_managers_var_pop_fields",
    var_samp: "nb_sphere_managers_var_samp_fields",
    variance: "nb_sphere_managers_variance_fields",
  },
  nb_sphere_managers_avg_fields: {
    id: "Float",
    sphere_id: "Float",
  },
  nb_sphere_managers_max_fields: {
    id: "Int",
    sphere_id: "Int",
    user_id: "uuid",
  },
  nb_sphere_managers_min_fields: {
    id: "Int",
    sphere_id: "Int",
    user_id: "uuid",
  },
  nb_sphere_managers_mutation_response: {
    affected_rows: "Int",
    returning: "nb_sphere_managers",
  },
  nb_sphere_managers_stddev_fields: {
    id: "Float",
    sphere_id: "Float",
  },
  nb_sphere_managers_stddev_pop_fields: {
    id: "Float",
    sphere_id: "Float",
  },
  nb_sphere_managers_stddev_samp_fields: {
    id: "Float",
    sphere_id: "Float",
  },
  nb_sphere_managers_sum_fields: {
    id: "Int",
    sphere_id: "Int",
  },
  nb_sphere_managers_var_pop_fields: {
    id: "Float",
    sphere_id: "Float",
  },
  nb_sphere_managers_var_samp_fields: {
    id: "Float",
    sphere_id: "Float",
  },
  nb_sphere_managers_variance_fields: {
    id: "Float",
    sphere_id: "Float",
  },
  nb_sphere_max_fields: {
    id: "Int",
    name: "String",
    site_id: "Int",
  },
  nb_sphere_min_fields: {
    id: "Int",
    name: "String",
    site_id: "Int",
  },
  nb_sphere_mutation_response: {
    affected_rows: "Int",
    returning: "nb_sphere",
  },
  nb_sphere_stddev_fields: {
    id: "Float",
    site_id: "Float",
  },
  nb_sphere_stddev_pop_fields: {
    id: "Float",
    site_id: "Float",
  },
  nb_sphere_stddev_samp_fields: {
    id: "Float",
    site_id: "Float",
  },
  nb_sphere_sum_fields: {
    id: "Int",
    site_id: "Int",
  },
  nb_sphere_var_pop_fields: {
    id: "Float",
    site_id: "Float",
  },
  nb_sphere_var_samp_fields: {
    id: "Float",
    site_id: "Float",
  },
  nb_sphere_variance_fields: {
    id: "Float",
    site_id: "Float",
  },
  query_root: {
    ch_agenda_item: "ch_agenda_item",
    ch_agenda_item_aggregate: "ch_agenda_item_aggregate",
    ch_agenda_item_by_pk: "ch_agenda_item",
    ch_festival: "ch_festival",
    ch_festival_aggregate: "ch_festival_aggregate",
    ch_festival_by_pk: "ch_festival",
    ch_helper: "ch_helper",
    ch_helper_aggregate: "ch_helper_aggregate",
    ch_helper_by_pk: "ch_helper",
    ch_helper_time_slots: "ch_helper_time_slots",
    ch_helper_time_slots_aggregate: "ch_helper_time_slots_aggregate",
    ch_helper_time_slots_by_pk: "ch_helper_time_slots",
    ch_proposal: "ch_proposal",
    ch_proposal_aggregate: "ch_proposal_aggregate",
    ch_proposal_by_pk: "ch_proposal",
    ch_proposal_time_slots: "ch_proposal_time_slots",
    ch_proposal_time_slots_aggregate: "ch_proposal_time_slots_aggregate",
    ch_proposal_time_slots_by_pk: "ch_proposal_time_slots",
    ch_room: "ch_room",
    ch_room_aggregate: "ch_room_aggregate",
    ch_room_by_pk: "ch_room",
    ch_time_slot: "ch_time_slot",
    ch_time_slot_aggregate: "ch_time_slot_aggregate",
    ch_time_slot_by_pk: "ch_time_slot",
    ch_wait_list: "ch_wait_list",
    ch_wait_list_aggregate: "ch_wait_list_aggregate",
    ch_wait_list_by_pk: "ch_wait_list",
    cr_user: "cr_user",
    cr_user_aggregate: "cr_user_aggregate",
    cr_user_by_pk: "cr_user",
    django_site: "django_site",
    django_site_aggregate: "django_site_aggregate",
    django_site_by_pk: "django_site",
    nb_guild: "nb_guild",
    nb_guild_aggregate: "nb_guild_aggregate",
    nb_guild_by_pk: "nb_guild",
    nb_guild_member: "nb_guild_member",
    nb_guild_member_aggregate: "nb_guild_member_aggregate",
    nb_guild_member_by_pk: "nb_guild_member",
    nb_meeting: "nb_meeting",
    nb_meeting_aggregate: "nb_meeting_aggregate",
    nb_meeting_by_pk: "nb_meeting",
    nb_meeting_participants: "nb_meeting_participants",
    nb_meeting_participants_aggregate: "nb_meeting_participants_aggregate",
    nb_meeting_participants_by_pk: "nb_meeting_participants",
    nb_sphere: "nb_sphere",
    nb_sphere_aggregate: "nb_sphere_aggregate",
    nb_sphere_by_pk: "nb_sphere",
    nb_sphere_managers: "nb_sphere_managers",
    nb_sphere_managers_aggregate: "nb_sphere_managers_aggregate",
    nb_sphere_managers_by_pk: "nb_sphere_managers",
  },
  subscription_root: {
    ch_agenda_item: "ch_agenda_item",
    ch_agenda_item_aggregate: "ch_agenda_item_aggregate",
    ch_agenda_item_by_pk: "ch_agenda_item",
    ch_festival: "ch_festival",
    ch_festival_aggregate: "ch_festival_aggregate",
    ch_festival_by_pk: "ch_festival",
    ch_helper: "ch_helper",
    ch_helper_aggregate: "ch_helper_aggregate",
    ch_helper_by_pk: "ch_helper",
    ch_helper_time_slots: "ch_helper_time_slots",
    ch_helper_time_slots_aggregate: "ch_helper_time_slots_aggregate",
    ch_helper_time_slots_by_pk: "ch_helper_time_slots",
    ch_proposal: "ch_proposal",
    ch_proposal_aggregate: "ch_proposal_aggregate",
    ch_proposal_by_pk: "ch_proposal",
    ch_proposal_time_slots: "ch_proposal_time_slots",
    ch_proposal_time_slots_aggregate: "ch_proposal_time_slots_aggregate",
    ch_proposal_time_slots_by_pk: "ch_proposal_time_slots",
    ch_room: "ch_room",
    ch_room_aggregate: "ch_room_aggregate",
    ch_room_by_pk: "ch_room",
    ch_time_slot: "ch_time_slot",
    ch_time_slot_aggregate: "ch_time_slot_aggregate",
    ch_time_slot_by_pk: "ch_time_slot",
    ch_wait_list: "ch_wait_list",
    ch_wait_list_aggregate: "ch_wait_list_aggregate",
    ch_wait_list_by_pk: "ch_wait_list",
    cr_user: "cr_user",
    cr_user_aggregate: "cr_user_aggregate",
    cr_user_by_pk: "cr_user",
    django_site: "django_site",
    django_site_aggregate: "django_site_aggregate",
    django_site_by_pk: "django_site",
    nb_guild: "nb_guild",
    nb_guild_aggregate: "nb_guild_aggregate",
    nb_guild_by_pk: "nb_guild",
    nb_guild_member: "nb_guild_member",
    nb_guild_member_aggregate: "nb_guild_member_aggregate",
    nb_guild_member_by_pk: "nb_guild_member",
    nb_meeting: "nb_meeting",
    nb_meeting_aggregate: "nb_meeting_aggregate",
    nb_meeting_by_pk: "nb_meeting",
    nb_meeting_participants: "nb_meeting_participants",
    nb_meeting_participants_aggregate: "nb_meeting_participants_aggregate",
    nb_meeting_participants_by_pk: "nb_meeting_participants",
    nb_sphere: "nb_sphere",
    nb_sphere_aggregate: "nb_sphere_aggregate",
    nb_sphere_by_pk: "nb_sphere",
    nb_sphere_managers: "nb_sphere_managers",
    nb_sphere_managers_aggregate: "nb_sphere_managers_aggregate",
    nb_sphere_managers_by_pk: "nb_sphere_managers",
  },
};

export class GraphQLError extends Error {
  constructor(public response: GraphQLResponse) {
    super("");
    console.error(response);
  }
  toString() {
    return "GraphQL Response Error";
  }
}

type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<
  F extends [infer ARGS, any] ? ARGS : undefined
>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any>
  ? P
  : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: infer IMPLEMENTORS;
}
  ? ObjectToUnion<
      Omit<
        {
          [Key in keyof Omit<
            DST,
            keyof INTERFACE | "__typename"
          >]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                Omit<
                  {
                    [Key in keyof Omit<
                      DST,
                      keyof IMPLEMENTORS | "__typename"
                    >]: Key extends keyof INTERFACE
                      ? LastMapTypeSRCResolver<INTERFACE[Key], DST[Key]>
                      : never;
                  },
                  keyof IMPLEMENTORS
                > &
                (DST extends { __typename: any }
                  ? MapType<IMPLEMENTORS[Key], { __typename: true }>
                  : {})
            : never;
        },
        keyof INTERFACE | "__typename"
      >
    >
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, "__typename">]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };

type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(
  o: Z | V,
  variables?: Record<string, any>
) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (query: string, variables?: Record<string, any>) => any;

export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case "String":
      return `"${value.replace(/"/g, '\\"')}"`;
    case "Int":
      return `${value}`;
    case "Float":
      return `${value}`;
    case "Boolean":
      return `${value}`;
    case "ID":
      return `"${value}"`;
    case "enum":
      return `${value}`;
    case "scalar":
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays,
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ""}`);
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
  if (typeof value === "string" && value.startsWith(`ZEUS_VAR$`)) {
    const isRequired = resolvedValue.required ? "!" : "";
    return `\$${
      value.split(`ZEUS_VAR$`)[1]
    }__ZEUS_VAR__${typeResolved}${isRequired}`;
  }
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) =>
        TypesPropsResolver({ value: v, type, name, key, blockArrays: true })
      )
      .join(",")}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === "object") {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) =>
            `${ak}:${TypesPropsResolver({
              value: value[ak],
              type: typeResolved,
              name: ak,
            })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (parent: string[], a: any[]) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values);

  if (!keys.length) {
    return keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: mainKey,
                name: key,
                key: v,
              })}`
          )
          .join(",")})${r ? traverseToSeekArrays(parent, r) : ""}`
      : traverseToSeekArrays(parent, r);
  }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v,
              })}`
          )
          .join(",")})${r ? traverseToSeekArrays(parent, r) : ""}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (
  k: string,
  v: boolean | string | { [x: string]: boolean | string }
) =>
  typeof v === "boolean"
    ? k
    : typeof v === "object"
    ? `${k}{${objectToTree(v)}}`
    : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o)
    .map((k) => `${resolveKV(k, o[k])}`)
    .join(" ")}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return "";
  if (Object.keys(a).length === 0) {
    return "";
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === "object") {
      Object.keys(a).map((k) => {
        if (k === "__alias") {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays(
              [...parent, aliasOperationName],
              aliasOperation
            );
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return "";
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) =>
  traverseToSeekArrays([type], a);

const inspectVariables = (query: string) => {
  const regex = /\$\b\w*ZEUS_VAR\w*\b[!]?/g;
  let result;
  const AllVariables = [];
  while ((result = regex.exec(query))) {
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    filteredQuery = filteredQuery.replace(
      variable,
      variable.split("__ZEUS_VAR__")[0]
    );
  });
  return `(${AllVariables.map((a) => a.split("__ZEUS_VAR__"))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(", ")})${filteredQuery}`;
};

const queryConstruct = (
  t: "query" | "mutation" | "subscription",
  tName: string
) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;

const fullChainConstruct = (fn: FetchFunction) => (
  t: "query" | "mutation" | "subscription",
  tName: string
) => (o: Record<any, any>, variables?: Record<string, any>) =>
  fn(queryConstruct(t, tName)(o), variables);

const seekForAliases = (o: any) => {
  if (typeof o === "object" && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = o[k];
      if (k.indexOf("__alias__") !== -1) {
        const [operation, alias] = k.split("__alias__");
        o[alias] = {
          [operation]: value,
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === "object") {
            seekForAliases(value);
          }
        }
      }
    });
  }
};

export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join("")}`;

const handleFetchResponse = (
  response: Parameters<
    Extract<Parameters<ReturnType<typeof fetch>["then"]>[0], Function>
  >[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((resolve, reject) => {
      response
        .text()
        .then((text) => {
          try {
            reject(JSON.parse(text));
          } catch (err) {
            reject(text);
          }
        })
        .catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions) => (
  query: string,
  variables: Record<string, any> = {}
) => {
  let fetchFunction = fetch;
  let queryString = query;
  let fetchOptions = options[1] || {};
  if (fetchOptions.method && fetchOptions.method === "GET") {
    queryString = encodeURIComponent(query);
    return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        seekForAliases(response.data);
        return response.data;
      });
  }
  return fetchFunction(`${options[0]}`, {
    body: JSON.stringify({ query: queryString, variables }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    ...fetchOptions,
  })
    .then(handleFetchResponse)
    .then((response: GraphQLResponse) => {
      if (response.errors) {
        throw new GraphQLError(response);
      }
      seekForAliases(response.data);
      return response.data;
    });
};

export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)("query", "query_root")(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["query_root"], query_root>,
  mutation: ((o: any, variables) =>
    fullChainConstruct(fn)("mutation", "mutation_root")(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["mutation_root"], mutation_root>,
  subscription: ((o: any, variables) =>
    fullChainConstruct(fn)("subscription", "subscription_root")(
      o,
      variables
    ).then((response: any) => response)) as OperationToGraphQL<
    ValueTypes["subscription_root"],
    subscription_root
  >,
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))("query", "query_root")(
      o,
      variables
    ).then((response: any) => response)) as OperationToGraphQL<
    ValueTypes["query_root"],
    query_root
  >,
  mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))("mutation", "mutation_root")(
      o,
      variables
    ).then((response: any) => response)) as OperationToGraphQL<
    ValueTypes["mutation_root"],
    mutation_root
  >,
  subscription: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))("subscription", "subscription_root")(
      o,
      variables
    ).then((response: any) => response)) as OperationToGraphQL<
    ValueTypes["subscription_root"],
    subscription_root
  >,
});
export const Zeus = {
  query: (o: ValueTypes["query_root"]) =>
    queryConstruct("query", "query_root")(o),
  mutation: (o: ValueTypes["mutation_root"]) =>
    queryConstruct("mutation", "mutation_root")(o),
  subscription: (o: ValueTypes["subscription_root"]) =>
    queryConstruct("subscription", "subscription_root")(o),
};
export const Cast = {
  query: ((o: any) => (b: any) => o) as CastToGraphQL<
    ValueTypes["query_root"],
    query_root
  >,
  mutation: ((o: any) => (b: any) => o) as CastToGraphQL<
    ValueTypes["mutation_root"],
    mutation_root
  >,
  subscription: ((o: any) => (b: any) => o) as CastToGraphQL<
    ValueTypes["subscription_root"],
    subscription_root
  >,
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["query_root"]>(),
  mutation: ZeusSelect<ValueTypes["mutation_root"]>(),
  subscription: ZeusSelect<ValueTypes["subscription_root"]>(),
};
