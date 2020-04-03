/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["guild"]: AliasType<{
	created_at?:true,
	description?:true,
guild_members?: [{	distinct_on?:ValueTypes["guild_member_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["guild_member_order_by"][],	where?:ValueTypes["guild_member_bool_exp"]},ValueTypes["guild_member"]],
guild_members_aggregate?: [{	distinct_on?:ValueTypes["guild_member_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["guild_member_order_by"][],	where?:ValueTypes["guild_member_bool_exp"]},ValueTypes["guild_member_aggregate"]],
	id?:true,
meetings?: [{	distinct_on?:ValueTypes["meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_order_by"][],	where?:ValueTypes["meeting_bool_exp"]},ValueTypes["meeting"]],
meetings_aggregate?: [{	distinct_on?:ValueTypes["meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_order_by"][],	where?:ValueTypes["meeting_bool_exp"]},ValueTypes["meeting_aggregate"]],
	name?:true,
	updated_at?:true
		__typename?: true
}>;
	["guild_aggregate"]: AliasType<{
	aggregate?:ValueTypes["guild_aggregate_fields"],
	nodes?:ValueTypes["guild"]
		__typename?: true
}>;
	["guild_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["guild_avg_fields"],
count?: [{	columns?:ValueTypes["guild_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["guild_max_fields"],
	min?:ValueTypes["guild_min_fields"],
	stddev?:ValueTypes["guild_stddev_fields"],
	stddev_pop?:ValueTypes["guild_stddev_pop_fields"],
	stddev_samp?:ValueTypes["guild_stddev_samp_fields"],
	sum?:ValueTypes["guild_sum_fields"],
	var_pop?:ValueTypes["guild_var_pop_fields"],
	var_samp?:ValueTypes["guild_var_samp_fields"],
	variance?:ValueTypes["guild_variance_fields"]
		__typename?: true
}>;
	["guild_aggregate_order_by"]: {
	avg?:ValueTypes["guild_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["guild_max_order_by"],
	min?:ValueTypes["guild_min_order_by"],
	stddev?:ValueTypes["guild_stddev_order_by"],
	stddev_pop?:ValueTypes["guild_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["guild_stddev_samp_order_by"],
	sum?:ValueTypes["guild_sum_order_by"],
	var_pop?:ValueTypes["guild_var_pop_order_by"],
	var_samp?:ValueTypes["guild_var_samp_order_by"],
	variance?:ValueTypes["guild_variance_order_by"]
};
	["guild_arr_rel_insert_input"]: {
	data:ValueTypes["guild_insert_input"][],
	on_conflict?:ValueTypes["guild_on_conflict"]
};
	["guild_avg_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["guild_avg_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["guild_bool_exp"]: {
	_and?:(ValueTypes["guild_bool_exp"] | undefined)[],
	_not?:ValueTypes["guild_bool_exp"],
	_or?:(ValueTypes["guild_bool_exp"] | undefined)[],
	created_at?:ValueTypes["timestamptz_comparison_exp"],
	description?:ValueTypes["String_comparison_exp"],
	guild_members?:ValueTypes["guild_member_bool_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	meetings?:ValueTypes["meeting_bool_exp"],
	name?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["timestamptz_comparison_exp"]
};
	["guild_constraint"]:guild_constraint;
	["guild_inc_input"]: {
	id?:number
};
	["guild_insert_input"]: {
	created_at?:ValueTypes["timestamptz"],
	description?:string,
	guild_members?:ValueTypes["guild_member_arr_rel_insert_input"],
	id?:number,
	meetings?:ValueTypes["meeting_arr_rel_insert_input"],
	name?:string,
	updated_at?:ValueTypes["timestamptz"]
};
	["guild_max_fields"]: AliasType<{
	created_at?:true,
	description?:true,
	id?:true,
	name?:true,
	updated_at?:true
		__typename?: true
}>;
	["guild_max_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	["guild_member"]: AliasType<{
	guild?:ValueTypes["guild"],
	guild_id?:true,
	member_id?:true,
	user?:ValueTypes["user"]
		__typename?: true
}>;
	["guild_member_aggregate"]: AliasType<{
	aggregate?:ValueTypes["guild_member_aggregate_fields"],
	nodes?:ValueTypes["guild_member"]
		__typename?: true
}>;
	["guild_member_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["guild_member_avg_fields"],
count?: [{	columns?:ValueTypes["guild_member_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["guild_member_max_fields"],
	min?:ValueTypes["guild_member_min_fields"],
	stddev?:ValueTypes["guild_member_stddev_fields"],
	stddev_pop?:ValueTypes["guild_member_stddev_pop_fields"],
	stddev_samp?:ValueTypes["guild_member_stddev_samp_fields"],
	sum?:ValueTypes["guild_member_sum_fields"],
	var_pop?:ValueTypes["guild_member_var_pop_fields"],
	var_samp?:ValueTypes["guild_member_var_samp_fields"],
	variance?:ValueTypes["guild_member_variance_fields"]
		__typename?: true
}>;
	["guild_member_aggregate_order_by"]: {
	avg?:ValueTypes["guild_member_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["guild_member_max_order_by"],
	min?:ValueTypes["guild_member_min_order_by"],
	stddev?:ValueTypes["guild_member_stddev_order_by"],
	stddev_pop?:ValueTypes["guild_member_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["guild_member_stddev_samp_order_by"],
	sum?:ValueTypes["guild_member_sum_order_by"],
	var_pop?:ValueTypes["guild_member_var_pop_order_by"],
	var_samp?:ValueTypes["guild_member_var_samp_order_by"],
	variance?:ValueTypes["guild_member_variance_order_by"]
};
	["guild_member_arr_rel_insert_input"]: {
	data:ValueTypes["guild_member_insert_input"][],
	on_conflict?:ValueTypes["guild_member_on_conflict"]
};
	["guild_member_avg_fields"]: AliasType<{
	guild_id?:true
		__typename?: true
}>;
	["guild_member_avg_order_by"]: {
	guild_id?:ValueTypes["order_by"]
};
	["guild_member_bool_exp"]: {
	_and?:(ValueTypes["guild_member_bool_exp"] | undefined)[],
	_not?:ValueTypes["guild_member_bool_exp"],
	_or?:(ValueTypes["guild_member_bool_exp"] | undefined)[],
	guild?:ValueTypes["guild_bool_exp"],
	guild_id?:ValueTypes["Int_comparison_exp"],
	member_id?:ValueTypes["uuid_comparison_exp"],
	user?:ValueTypes["user_bool_exp"]
};
	["guild_member_constraint"]:guild_member_constraint;
	["guild_member_inc_input"]: {
	guild_id?:number
};
	["guild_member_insert_input"]: {
	guild?:ValueTypes["guild_obj_rel_insert_input"],
	guild_id?:number,
	member_id?:ValueTypes["uuid"],
	user?:ValueTypes["user_obj_rel_insert_input"]
};
	["guild_member_max_fields"]: AliasType<{
	guild_id?:true,
	member_id?:true
		__typename?: true
}>;
	["guild_member_max_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	member_id?:ValueTypes["order_by"]
};
	["guild_member_min_fields"]: AliasType<{
	guild_id?:true,
	member_id?:true
		__typename?: true
}>;
	["guild_member_min_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	member_id?:ValueTypes["order_by"]
};
	["guild_member_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["guild_member"]
		__typename?: true
}>;
	["guild_member_obj_rel_insert_input"]: {
	data:ValueTypes["guild_member_insert_input"],
	on_conflict?:ValueTypes["guild_member_on_conflict"]
};
	["guild_member_on_conflict"]: {
	constraint:ValueTypes["guild_member_constraint"],
	update_columns:ValueTypes["guild_member_update_column"][],
	where?:ValueTypes["guild_member_bool_exp"]
};
	["guild_member_order_by"]: {
	guild?:ValueTypes["guild_order_by"],
	guild_id?:ValueTypes["order_by"],
	member_id?:ValueTypes["order_by"],
	user?:ValueTypes["user_order_by"]
};
	["guild_member_pk_columns_input"]: {
	guild_id:number,
	member_id:ValueTypes["uuid"]
};
	["guild_member_select_column"]:guild_member_select_column;
	["guild_member_set_input"]: {
	guild_id?:number,
	member_id?:ValueTypes["uuid"]
};
	["guild_member_stddev_fields"]: AliasType<{
	guild_id?:true
		__typename?: true
}>;
	["guild_member_stddev_order_by"]: {
	guild_id?:ValueTypes["order_by"]
};
	["guild_member_stddev_pop_fields"]: AliasType<{
	guild_id?:true
		__typename?: true
}>;
	["guild_member_stddev_pop_order_by"]: {
	guild_id?:ValueTypes["order_by"]
};
	["guild_member_stddev_samp_fields"]: AliasType<{
	guild_id?:true
		__typename?: true
}>;
	["guild_member_stddev_samp_order_by"]: {
	guild_id?:ValueTypes["order_by"]
};
	["guild_member_sum_fields"]: AliasType<{
	guild_id?:true
		__typename?: true
}>;
	["guild_member_sum_order_by"]: {
	guild_id?:ValueTypes["order_by"]
};
	["guild_member_update_column"]:guild_member_update_column;
	["guild_member_var_pop_fields"]: AliasType<{
	guild_id?:true
		__typename?: true
}>;
	["guild_member_var_pop_order_by"]: {
	guild_id?:ValueTypes["order_by"]
};
	["guild_member_var_samp_fields"]: AliasType<{
	guild_id?:true
		__typename?: true
}>;
	["guild_member_var_samp_order_by"]: {
	guild_id?:ValueTypes["order_by"]
};
	["guild_member_variance_fields"]: AliasType<{
	guild_id?:true
		__typename?: true
}>;
	["guild_member_variance_order_by"]: {
	guild_id?:ValueTypes["order_by"]
};
	["guild_min_fields"]: AliasType<{
	created_at?:true,
	description?:true,
	id?:true,
	name?:true,
	updated_at?:true
		__typename?: true
}>;
	["guild_min_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	["guild_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["guild"]
		__typename?: true
}>;
	["guild_obj_rel_insert_input"]: {
	data:ValueTypes["guild_insert_input"],
	on_conflict?:ValueTypes["guild_on_conflict"]
};
	["guild_on_conflict"]: {
	constraint:ValueTypes["guild_constraint"],
	update_columns:ValueTypes["guild_update_column"][],
	where?:ValueTypes["guild_bool_exp"]
};
	["guild_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	guild_members_aggregate?:ValueTypes["guild_member_aggregate_order_by"],
	id?:ValueTypes["order_by"],
	meetings_aggregate?:ValueTypes["meeting_aggregate_order_by"],
	name?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	["guild_pk_columns_input"]: {
	id:number
};
	["guild_select_column"]:guild_select_column;
	["guild_set_input"]: {
	created_at?:ValueTypes["timestamptz"],
	description?:string,
	id?:number,
	name?:string,
	updated_at?:ValueTypes["timestamptz"]
};
	["guild_stddev_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["guild_stddev_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["guild_stddev_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["guild_stddev_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["guild_stddev_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["guild_stddev_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["guild_sum_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["guild_sum_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["guild_update_column"]:guild_update_column;
	["guild_var_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["guild_var_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["guild_var_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["guild_var_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["guild_variance_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["guild_variance_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["Int_comparison_exp"]: {
	_eq?:number,
	_gt?:number,
	_gte?:number,
	_in?:number[],
	_is_null?:boolean,
	_lt?:number,
	_lte?:number,
	_neq?:number,
	_nin?:number[]
};
	["meeting"]: AliasType<{
	created_at?:true,
	description?:true,
	end_time?:true,
	guild?:ValueTypes["guild"],
	guild_id?:true,
	id?:true,
	location?:true,
	organizer?:ValueTypes["user"],
	organizer_id?:true,
participants?: [{	distinct_on?:ValueTypes["meeting_participant_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_participant_order_by"][],	where?:ValueTypes["meeting_participant_bool_exp"]},ValueTypes["meeting_participant"]],
participants_aggregate?: [{	distinct_on?:ValueTypes["meeting_participant_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_participant_order_by"][],	where?:ValueTypes["meeting_participant_bool_exp"]},ValueTypes["meeting_participant_aggregate"]],
	publication_time?:true,
	sphere_id?:true,
	start_time?:true,
	title?:true,
	updated_at?:true
		__typename?: true
}>;
	["meeting_aggregate"]: AliasType<{
	aggregate?:ValueTypes["meeting_aggregate_fields"],
	nodes?:ValueTypes["meeting"]
		__typename?: true
}>;
	["meeting_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["meeting_avg_fields"],
count?: [{	columns?:ValueTypes["meeting_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["meeting_max_fields"],
	min?:ValueTypes["meeting_min_fields"],
	stddev?:ValueTypes["meeting_stddev_fields"],
	stddev_pop?:ValueTypes["meeting_stddev_pop_fields"],
	stddev_samp?:ValueTypes["meeting_stddev_samp_fields"],
	sum?:ValueTypes["meeting_sum_fields"],
	var_pop?:ValueTypes["meeting_var_pop_fields"],
	var_samp?:ValueTypes["meeting_var_samp_fields"],
	variance?:ValueTypes["meeting_variance_fields"]
		__typename?: true
}>;
	["meeting_aggregate_order_by"]: {
	avg?:ValueTypes["meeting_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["meeting_max_order_by"],
	min?:ValueTypes["meeting_min_order_by"],
	stddev?:ValueTypes["meeting_stddev_order_by"],
	stddev_pop?:ValueTypes["meeting_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["meeting_stddev_samp_order_by"],
	sum?:ValueTypes["meeting_sum_order_by"],
	var_pop?:ValueTypes["meeting_var_pop_order_by"],
	var_samp?:ValueTypes["meeting_var_samp_order_by"],
	variance?:ValueTypes["meeting_variance_order_by"]
};
	["meeting_arr_rel_insert_input"]: {
	data:ValueTypes["meeting_insert_input"][],
	on_conflict?:ValueTypes["meeting_on_conflict"]
};
	["meeting_avg_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meeting_avg_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meeting_bool_exp"]: {
	_and?:(ValueTypes["meeting_bool_exp"] | undefined)[],
	_not?:ValueTypes["meeting_bool_exp"],
	_or?:(ValueTypes["meeting_bool_exp"] | undefined)[],
	created_at?:ValueTypes["timestamptz_comparison_exp"],
	description?:ValueTypes["String_comparison_exp"],
	end_time?:ValueTypes["timestamptz_comparison_exp"],
	guild?:ValueTypes["guild_bool_exp"],
	guild_id?:ValueTypes["Int_comparison_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	location?:ValueTypes["String_comparison_exp"],
	organizer?:ValueTypes["user_bool_exp"],
	organizer_id?:ValueTypes["uuid_comparison_exp"],
	participants?:ValueTypes["meeting_participant_bool_exp"],
	publication_time?:ValueTypes["timestamptz_comparison_exp"],
	sphere_id?:ValueTypes["Int_comparison_exp"],
	start_time?:ValueTypes["timestamptz_comparison_exp"],
	title?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["timestamptz_comparison_exp"]
};
	["meeting_constraint"]:meeting_constraint;
	["meeting_inc_input"]: {
	guild_id?:number,
	id?:number,
	sphere_id?:number
};
	["meeting_insert_input"]: {
	created_at?:ValueTypes["timestamptz"],
	description?:string,
	end_time?:ValueTypes["timestamptz"],
	guild?:ValueTypes["guild_obj_rel_insert_input"],
	guild_id?:number,
	id?:number,
	location?:string,
	organizer?:ValueTypes["user_obj_rel_insert_input"],
	organizer_id?:ValueTypes["uuid"],
	participants?:ValueTypes["meeting_participant_arr_rel_insert_input"],
	publication_time?:ValueTypes["timestamptz"],
	sphere_id?:number,
	start_time?:ValueTypes["timestamptz"],
	title?:string,
	updated_at?:ValueTypes["timestamptz"]
};
	["meeting_max_fields"]: AliasType<{
	created_at?:true,
	description?:true,
	end_time?:true,
	guild_id?:true,
	id?:true,
	location?:true,
	organizer_id?:true,
	publication_time?:true,
	sphere_id?:true,
	start_time?:true,
	title?:true,
	updated_at?:true
		__typename?: true
}>;
	["meeting_max_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	end_time?:ValueTypes["order_by"],
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	location?:ValueTypes["order_by"],
	organizer_id?:ValueTypes["order_by"],
	publication_time?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"],
	start_time?:ValueTypes["order_by"],
	title?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	["meeting_min_fields"]: AliasType<{
	created_at?:true,
	description?:true,
	end_time?:true,
	guild_id?:true,
	id?:true,
	location?:true,
	organizer_id?:true,
	publication_time?:true,
	sphere_id?:true,
	start_time?:true,
	title?:true,
	updated_at?:true
		__typename?: true
}>;
	["meeting_min_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	end_time?:ValueTypes["order_by"],
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	location?:ValueTypes["order_by"],
	organizer_id?:ValueTypes["order_by"],
	publication_time?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"],
	start_time?:ValueTypes["order_by"],
	title?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	["meeting_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["meeting"]
		__typename?: true
}>;
	["meeting_obj_rel_insert_input"]: {
	data:ValueTypes["meeting_insert_input"],
	on_conflict?:ValueTypes["meeting_on_conflict"]
};
	["meeting_on_conflict"]: {
	constraint:ValueTypes["meeting_constraint"],
	update_columns:ValueTypes["meeting_update_column"][],
	where?:ValueTypes["meeting_bool_exp"]
};
	["meeting_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	end_time?:ValueTypes["order_by"],
	guild?:ValueTypes["guild_order_by"],
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	location?:ValueTypes["order_by"],
	organizer?:ValueTypes["user_order_by"],
	organizer_id?:ValueTypes["order_by"],
	participants_aggregate?:ValueTypes["meeting_participant_aggregate_order_by"],
	publication_time?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"],
	start_time?:ValueTypes["order_by"],
	title?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	["meeting_participant"]: AliasType<{
	meeting?:ValueTypes["meeting"],
	meeting_id?:true,
	participant?:ValueTypes["user"],
	participant_id?:true
		__typename?: true
}>;
	["meeting_participant_aggregate"]: AliasType<{
	aggregate?:ValueTypes["meeting_participant_aggregate_fields"],
	nodes?:ValueTypes["meeting_participant"]
		__typename?: true
}>;
	["meeting_participant_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["meeting_participant_avg_fields"],
count?: [{	columns?:ValueTypes["meeting_participant_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["meeting_participant_max_fields"],
	min?:ValueTypes["meeting_participant_min_fields"],
	stddev?:ValueTypes["meeting_participant_stddev_fields"],
	stddev_pop?:ValueTypes["meeting_participant_stddev_pop_fields"],
	stddev_samp?:ValueTypes["meeting_participant_stddev_samp_fields"],
	sum?:ValueTypes["meeting_participant_sum_fields"],
	var_pop?:ValueTypes["meeting_participant_var_pop_fields"],
	var_samp?:ValueTypes["meeting_participant_var_samp_fields"],
	variance?:ValueTypes["meeting_participant_variance_fields"]
		__typename?: true
}>;
	["meeting_participant_aggregate_order_by"]: {
	avg?:ValueTypes["meeting_participant_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["meeting_participant_max_order_by"],
	min?:ValueTypes["meeting_participant_min_order_by"],
	stddev?:ValueTypes["meeting_participant_stddev_order_by"],
	stddev_pop?:ValueTypes["meeting_participant_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["meeting_participant_stddev_samp_order_by"],
	sum?:ValueTypes["meeting_participant_sum_order_by"],
	var_pop?:ValueTypes["meeting_participant_var_pop_order_by"],
	var_samp?:ValueTypes["meeting_participant_var_samp_order_by"],
	variance?:ValueTypes["meeting_participant_variance_order_by"]
};
	["meeting_participant_arr_rel_insert_input"]: {
	data:ValueTypes["meeting_participant_insert_input"][],
	on_conflict?:ValueTypes["meeting_participant_on_conflict"]
};
	["meeting_participant_avg_fields"]: AliasType<{
	meeting_id?:true
		__typename?: true
}>;
	["meeting_participant_avg_order_by"]: {
	meeting_id?:ValueTypes["order_by"]
};
	["meeting_participant_bool_exp"]: {
	_and?:(ValueTypes["meeting_participant_bool_exp"] | undefined)[],
	_not?:ValueTypes["meeting_participant_bool_exp"],
	_or?:(ValueTypes["meeting_participant_bool_exp"] | undefined)[],
	meeting?:ValueTypes["meeting_bool_exp"],
	meeting_id?:ValueTypes["Int_comparison_exp"],
	participant?:ValueTypes["user_bool_exp"],
	participant_id?:ValueTypes["uuid_comparison_exp"]
};
	["meeting_participant_constraint"]:meeting_participant_constraint;
	["meeting_participant_inc_input"]: {
	meeting_id?:number
};
	["meeting_participant_insert_input"]: {
	meeting?:ValueTypes["meeting_obj_rel_insert_input"],
	meeting_id?:number,
	participant?:ValueTypes["user_obj_rel_insert_input"],
	participant_id?:ValueTypes["uuid"]
};
	["meeting_participant_max_fields"]: AliasType<{
	meeting_id?:true,
	participant_id?:true
		__typename?: true
}>;
	["meeting_participant_max_order_by"]: {
	meeting_id?:ValueTypes["order_by"],
	participant_id?:ValueTypes["order_by"]
};
	["meeting_participant_min_fields"]: AliasType<{
	meeting_id?:true,
	participant_id?:true
		__typename?: true
}>;
	["meeting_participant_min_order_by"]: {
	meeting_id?:ValueTypes["order_by"],
	participant_id?:ValueTypes["order_by"]
};
	["meeting_participant_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["meeting_participant"]
		__typename?: true
}>;
	["meeting_participant_obj_rel_insert_input"]: {
	data:ValueTypes["meeting_participant_insert_input"],
	on_conflict?:ValueTypes["meeting_participant_on_conflict"]
};
	["meeting_participant_on_conflict"]: {
	constraint:ValueTypes["meeting_participant_constraint"],
	update_columns:ValueTypes["meeting_participant_update_column"][],
	where?:ValueTypes["meeting_participant_bool_exp"]
};
	["meeting_participant_order_by"]: {
	meeting?:ValueTypes["meeting_order_by"],
	meeting_id?:ValueTypes["order_by"],
	participant?:ValueTypes["user_order_by"],
	participant_id?:ValueTypes["order_by"]
};
	["meeting_participant_pk_columns_input"]: {
	meeting_id:number,
	participant_id:ValueTypes["uuid"]
};
	["meeting_participant_select_column"]:meeting_participant_select_column;
	["meeting_participant_set_input"]: {
	meeting_id?:number,
	participant_id?:ValueTypes["uuid"]
};
	["meeting_participant_stddev_fields"]: AliasType<{
	meeting_id?:true
		__typename?: true
}>;
	["meeting_participant_stddev_order_by"]: {
	meeting_id?:ValueTypes["order_by"]
};
	["meeting_participant_stddev_pop_fields"]: AliasType<{
	meeting_id?:true
		__typename?: true
}>;
	["meeting_participant_stddev_pop_order_by"]: {
	meeting_id?:ValueTypes["order_by"]
};
	["meeting_participant_stddev_samp_fields"]: AliasType<{
	meeting_id?:true
		__typename?: true
}>;
	["meeting_participant_stddev_samp_order_by"]: {
	meeting_id?:ValueTypes["order_by"]
};
	["meeting_participant_sum_fields"]: AliasType<{
	meeting_id?:true
		__typename?: true
}>;
	["meeting_participant_sum_order_by"]: {
	meeting_id?:ValueTypes["order_by"]
};
	["meeting_participant_update_column"]:meeting_participant_update_column;
	["meeting_participant_var_pop_fields"]: AliasType<{
	meeting_id?:true
		__typename?: true
}>;
	["meeting_participant_var_pop_order_by"]: {
	meeting_id?:ValueTypes["order_by"]
};
	["meeting_participant_var_samp_fields"]: AliasType<{
	meeting_id?:true
		__typename?: true
}>;
	["meeting_participant_var_samp_order_by"]: {
	meeting_id?:ValueTypes["order_by"]
};
	["meeting_participant_variance_fields"]: AliasType<{
	meeting_id?:true
		__typename?: true
}>;
	["meeting_participant_variance_order_by"]: {
	meeting_id?:ValueTypes["order_by"]
};
	["meeting_pk_columns_input"]: {
	id:number
};
	["meeting_select_column"]:meeting_select_column;
	["meeting_set_input"]: {
	created_at?:ValueTypes["timestamptz"],
	description?:string,
	end_time?:ValueTypes["timestamptz"],
	guild_id?:number,
	id?:number,
	location?:string,
	organizer_id?:ValueTypes["uuid"],
	publication_time?:ValueTypes["timestamptz"],
	sphere_id?:number,
	start_time?:ValueTypes["timestamptz"],
	title?:string,
	updated_at?:ValueTypes["timestamptz"]
};
	["meeting_stddev_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meeting_stddev_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meeting_stddev_pop_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meeting_stddev_pop_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meeting_stddev_samp_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meeting_stddev_samp_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meeting_sum_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meeting_sum_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meeting_update_column"]:meeting_update_column;
	["meeting_var_pop_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meeting_var_pop_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meeting_var_samp_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meeting_var_samp_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meeting_variance_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meeting_variance_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["mutation_root"]: AliasType<{
delete_guild?: [{	where:ValueTypes["guild_bool_exp"]},ValueTypes["guild_mutation_response"]],
delete_guild_by_pk?: [{	id:number},ValueTypes["guild"]],
delete_guild_member?: [{	where:ValueTypes["guild_member_bool_exp"]},ValueTypes["guild_member_mutation_response"]],
delete_guild_member_by_pk?: [{	guild_id:number,	member_id:ValueTypes["uuid"]},ValueTypes["guild_member"]],
delete_meeting?: [{	where:ValueTypes["meeting_bool_exp"]},ValueTypes["meeting_mutation_response"]],
delete_meeting_by_pk?: [{	id:number},ValueTypes["meeting"]],
delete_meeting_participant?: [{	where:ValueTypes["meeting_participant_bool_exp"]},ValueTypes["meeting_participant_mutation_response"]],
delete_meeting_participant_by_pk?: [{	meeting_id:number,	participant_id:ValueTypes["uuid"]},ValueTypes["meeting_participant"]],
delete_sphere?: [{	where:ValueTypes["sphere_bool_exp"]},ValueTypes["sphere_mutation_response"]],
delete_sphere_by_pk?: [{	id:number},ValueTypes["sphere"]],
delete_user?: [{	where:ValueTypes["user_bool_exp"]},ValueTypes["user_mutation_response"]],
delete_user_by_pk?: [{	uuid:ValueTypes["uuid"]},ValueTypes["user"]],
insert_guild?: [{	objects:ValueTypes["guild_insert_input"][],	on_conflict?:ValueTypes["guild_on_conflict"]},ValueTypes["guild_mutation_response"]],
insert_guild_member?: [{	objects:ValueTypes["guild_member_insert_input"][],	on_conflict?:ValueTypes["guild_member_on_conflict"]},ValueTypes["guild_member_mutation_response"]],
insert_guild_member_one?: [{	object:ValueTypes["guild_member_insert_input"],	on_conflict?:ValueTypes["guild_member_on_conflict"]},ValueTypes["guild_member"]],
insert_guild_one?: [{	object:ValueTypes["guild_insert_input"],	on_conflict?:ValueTypes["guild_on_conflict"]},ValueTypes["guild"]],
insert_meeting?: [{	objects:ValueTypes["meeting_insert_input"][],	on_conflict?:ValueTypes["meeting_on_conflict"]},ValueTypes["meeting_mutation_response"]],
insert_meeting_one?: [{	object:ValueTypes["meeting_insert_input"],	on_conflict?:ValueTypes["meeting_on_conflict"]},ValueTypes["meeting"]],
insert_meeting_participant?: [{	objects:ValueTypes["meeting_participant_insert_input"][],	on_conflict?:ValueTypes["meeting_participant_on_conflict"]},ValueTypes["meeting_participant_mutation_response"]],
insert_meeting_participant_one?: [{	object:ValueTypes["meeting_participant_insert_input"],	on_conflict?:ValueTypes["meeting_participant_on_conflict"]},ValueTypes["meeting_participant"]],
insert_sphere?: [{	objects:ValueTypes["sphere_insert_input"][],	on_conflict?:ValueTypes["sphere_on_conflict"]},ValueTypes["sphere_mutation_response"]],
insert_sphere_one?: [{	object:ValueTypes["sphere_insert_input"],	on_conflict?:ValueTypes["sphere_on_conflict"]},ValueTypes["sphere"]],
insert_user?: [{	objects:ValueTypes["user_insert_input"][],	on_conflict?:ValueTypes["user_on_conflict"]},ValueTypes["user_mutation_response"]],
insert_user_one?: [{	object:ValueTypes["user_insert_input"],	on_conflict?:ValueTypes["user_on_conflict"]},ValueTypes["user"]],
update_guild?: [{	_inc?:ValueTypes["guild_inc_input"],	_set?:ValueTypes["guild_set_input"],	where:ValueTypes["guild_bool_exp"]},ValueTypes["guild_mutation_response"]],
update_guild_by_pk?: [{	_inc?:ValueTypes["guild_inc_input"],	_set?:ValueTypes["guild_set_input"],	pk_columns:ValueTypes["guild_pk_columns_input"]},ValueTypes["guild"]],
update_guild_member?: [{	_inc?:ValueTypes["guild_member_inc_input"],	_set?:ValueTypes["guild_member_set_input"],	where:ValueTypes["guild_member_bool_exp"]},ValueTypes["guild_member_mutation_response"]],
update_guild_member_by_pk?: [{	_inc?:ValueTypes["guild_member_inc_input"],	_set?:ValueTypes["guild_member_set_input"],	pk_columns:ValueTypes["guild_member_pk_columns_input"]},ValueTypes["guild_member"]],
update_meeting?: [{	_inc?:ValueTypes["meeting_inc_input"],	_set?:ValueTypes["meeting_set_input"],	where:ValueTypes["meeting_bool_exp"]},ValueTypes["meeting_mutation_response"]],
update_meeting_by_pk?: [{	_inc?:ValueTypes["meeting_inc_input"],	_set?:ValueTypes["meeting_set_input"],	pk_columns:ValueTypes["meeting_pk_columns_input"]},ValueTypes["meeting"]],
update_meeting_participant?: [{	_inc?:ValueTypes["meeting_participant_inc_input"],	_set?:ValueTypes["meeting_participant_set_input"],	where:ValueTypes["meeting_participant_bool_exp"]},ValueTypes["meeting_participant_mutation_response"]],
update_meeting_participant_by_pk?: [{	_inc?:ValueTypes["meeting_participant_inc_input"],	_set?:ValueTypes["meeting_participant_set_input"],	pk_columns:ValueTypes["meeting_participant_pk_columns_input"]},ValueTypes["meeting_participant"]],
update_sphere?: [{	_inc?:ValueTypes["sphere_inc_input"],	_set?:ValueTypes["sphere_set_input"],	where:ValueTypes["sphere_bool_exp"]},ValueTypes["sphere_mutation_response"]],
update_sphere_by_pk?: [{	_inc?:ValueTypes["sphere_inc_input"],	_set?:ValueTypes["sphere_set_input"],	pk_columns:ValueTypes["sphere_pk_columns_input"]},ValueTypes["sphere"]],
update_user?: [{	_set?:ValueTypes["user_set_input"],	where:ValueTypes["user_bool_exp"]},ValueTypes["user_mutation_response"]],
update_user_by_pk?: [{	_set?:ValueTypes["user_set_input"],	pk_columns:ValueTypes["user_pk_columns_input"]},ValueTypes["user"]]
		__typename?: true
}>;
	["order_by"]:order_by;
	["query_root"]: AliasType<{
guild?: [{	distinct_on?:ValueTypes["guild_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["guild_order_by"][],	where?:ValueTypes["guild_bool_exp"]},ValueTypes["guild"]],
guild_aggregate?: [{	distinct_on?:ValueTypes["guild_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["guild_order_by"][],	where?:ValueTypes["guild_bool_exp"]},ValueTypes["guild_aggregate"]],
guild_by_pk?: [{	id:number},ValueTypes["guild"]],
guild_member?: [{	distinct_on?:ValueTypes["guild_member_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["guild_member_order_by"][],	where?:ValueTypes["guild_member_bool_exp"]},ValueTypes["guild_member"]],
guild_member_aggregate?: [{	distinct_on?:ValueTypes["guild_member_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["guild_member_order_by"][],	where?:ValueTypes["guild_member_bool_exp"]},ValueTypes["guild_member_aggregate"]],
guild_member_by_pk?: [{	guild_id:number,	member_id:ValueTypes["uuid"]},ValueTypes["guild_member"]],
meeting?: [{	distinct_on?:ValueTypes["meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_order_by"][],	where?:ValueTypes["meeting_bool_exp"]},ValueTypes["meeting"]],
meeting_aggregate?: [{	distinct_on?:ValueTypes["meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_order_by"][],	where?:ValueTypes["meeting_bool_exp"]},ValueTypes["meeting_aggregate"]],
meeting_by_pk?: [{	id:number},ValueTypes["meeting"]],
meeting_participant?: [{	distinct_on?:ValueTypes["meeting_participant_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_participant_order_by"][],	where?:ValueTypes["meeting_participant_bool_exp"]},ValueTypes["meeting_participant"]],
meeting_participant_aggregate?: [{	distinct_on?:ValueTypes["meeting_participant_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_participant_order_by"][],	where?:ValueTypes["meeting_participant_bool_exp"]},ValueTypes["meeting_participant_aggregate"]],
meeting_participant_by_pk?: [{	meeting_id:number,	participant_id:ValueTypes["uuid"]},ValueTypes["meeting_participant"]],
sphere?: [{	distinct_on?:ValueTypes["sphere_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["sphere_order_by"][],	where?:ValueTypes["sphere_bool_exp"]},ValueTypes["sphere"]],
sphere_aggregate?: [{	distinct_on?:ValueTypes["sphere_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["sphere_order_by"][],	where?:ValueTypes["sphere_bool_exp"]},ValueTypes["sphere_aggregate"]],
sphere_by_pk?: [{	id:number},ValueTypes["sphere"]],
user?: [{	distinct_on?:ValueTypes["user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["user_order_by"][],	where?:ValueTypes["user_bool_exp"]},ValueTypes["user"]],
user_aggregate?: [{	distinct_on?:ValueTypes["user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["user_order_by"][],	where?:ValueTypes["user_bool_exp"]},ValueTypes["user_aggregate"]],
user_by_pk?: [{	uuid:ValueTypes["uuid"]},ValueTypes["user"]]
		__typename?: true
}>;
	["sphere"]: AliasType<{
	domain?:true,
	id?:true,
	name?:true
		__typename?: true
}>;
	["sphere_aggregate"]: AliasType<{
	aggregate?:ValueTypes["sphere_aggregate_fields"],
	nodes?:ValueTypes["sphere"]
		__typename?: true
}>;
	["sphere_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["sphere_avg_fields"],
count?: [{	columns?:ValueTypes["sphere_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["sphere_max_fields"],
	min?:ValueTypes["sphere_min_fields"],
	stddev?:ValueTypes["sphere_stddev_fields"],
	stddev_pop?:ValueTypes["sphere_stddev_pop_fields"],
	stddev_samp?:ValueTypes["sphere_stddev_samp_fields"],
	sum?:ValueTypes["sphere_sum_fields"],
	var_pop?:ValueTypes["sphere_var_pop_fields"],
	var_samp?:ValueTypes["sphere_var_samp_fields"],
	variance?:ValueTypes["sphere_variance_fields"]
		__typename?: true
}>;
	["sphere_aggregate_order_by"]: {
	avg?:ValueTypes["sphere_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["sphere_max_order_by"],
	min?:ValueTypes["sphere_min_order_by"],
	stddev?:ValueTypes["sphere_stddev_order_by"],
	stddev_pop?:ValueTypes["sphere_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["sphere_stddev_samp_order_by"],
	sum?:ValueTypes["sphere_sum_order_by"],
	var_pop?:ValueTypes["sphere_var_pop_order_by"],
	var_samp?:ValueTypes["sphere_var_samp_order_by"],
	variance?:ValueTypes["sphere_variance_order_by"]
};
	["sphere_arr_rel_insert_input"]: {
	data:ValueTypes["sphere_insert_input"][],
	on_conflict?:ValueTypes["sphere_on_conflict"]
};
	["sphere_avg_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["sphere_avg_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["sphere_bool_exp"]: {
	_and?:(ValueTypes["sphere_bool_exp"] | undefined)[],
	_not?:ValueTypes["sphere_bool_exp"],
	_or?:(ValueTypes["sphere_bool_exp"] | undefined)[],
	domain?:ValueTypes["String_comparison_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	name?:ValueTypes["String_comparison_exp"]
};
	["sphere_constraint"]:sphere_constraint;
	["sphere_inc_input"]: {
	id?:number
};
	["sphere_insert_input"]: {
	domain?:string,
	id?:number,
	name?:string
};
	["sphere_max_fields"]: AliasType<{
	domain?:true,
	id?:true,
	name?:true
		__typename?: true
}>;
	["sphere_max_order_by"]: {
	domain?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"]
};
	["sphere_min_fields"]: AliasType<{
	domain?:true,
	id?:true,
	name?:true
		__typename?: true
}>;
	["sphere_min_order_by"]: {
	domain?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"]
};
	["sphere_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["sphere"]
		__typename?: true
}>;
	["sphere_obj_rel_insert_input"]: {
	data:ValueTypes["sphere_insert_input"],
	on_conflict?:ValueTypes["sphere_on_conflict"]
};
	["sphere_on_conflict"]: {
	constraint:ValueTypes["sphere_constraint"],
	update_columns:ValueTypes["sphere_update_column"][],
	where?:ValueTypes["sphere_bool_exp"]
};
	["sphere_order_by"]: {
	domain?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"]
};
	["sphere_pk_columns_input"]: {
	id:number
};
	["sphere_select_column"]:sphere_select_column;
	["sphere_set_input"]: {
	domain?:string,
	id?:number,
	name?:string
};
	["sphere_stddev_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["sphere_stddev_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["sphere_stddev_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["sphere_stddev_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["sphere_stddev_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["sphere_stddev_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["sphere_sum_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["sphere_sum_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["sphere_update_column"]:sphere_update_column;
	["sphere_var_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["sphere_var_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["sphere_var_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["sphere_var_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["sphere_variance_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["sphere_variance_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["String_comparison_exp"]: {
	_eq?:string,
	_gt?:string,
	_gte?:string,
	_ilike?:string,
	_in?:string[],
	_is_null?:boolean,
	_like?:string,
	_lt?:string,
	_lte?:string,
	_neq?:string,
	_nilike?:string,
	_nin?:string[],
	_nlike?:string,
	_nsimilar?:string,
	_similar?:string
};
	["subscription_root"]: AliasType<{
guild?: [{	distinct_on?:ValueTypes["guild_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["guild_order_by"][],	where?:ValueTypes["guild_bool_exp"]},ValueTypes["guild"]],
guild_aggregate?: [{	distinct_on?:ValueTypes["guild_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["guild_order_by"][],	where?:ValueTypes["guild_bool_exp"]},ValueTypes["guild_aggregate"]],
guild_by_pk?: [{	id:number},ValueTypes["guild"]],
guild_member?: [{	distinct_on?:ValueTypes["guild_member_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["guild_member_order_by"][],	where?:ValueTypes["guild_member_bool_exp"]},ValueTypes["guild_member"]],
guild_member_aggregate?: [{	distinct_on?:ValueTypes["guild_member_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["guild_member_order_by"][],	where?:ValueTypes["guild_member_bool_exp"]},ValueTypes["guild_member_aggregate"]],
guild_member_by_pk?: [{	guild_id:number,	member_id:ValueTypes["uuid"]},ValueTypes["guild_member"]],
meeting?: [{	distinct_on?:ValueTypes["meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_order_by"][],	where?:ValueTypes["meeting_bool_exp"]},ValueTypes["meeting"]],
meeting_aggregate?: [{	distinct_on?:ValueTypes["meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_order_by"][],	where?:ValueTypes["meeting_bool_exp"]},ValueTypes["meeting_aggregate"]],
meeting_by_pk?: [{	id:number},ValueTypes["meeting"]],
meeting_participant?: [{	distinct_on?:ValueTypes["meeting_participant_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_participant_order_by"][],	where?:ValueTypes["meeting_participant_bool_exp"]},ValueTypes["meeting_participant"]],
meeting_participant_aggregate?: [{	distinct_on?:ValueTypes["meeting_participant_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_participant_order_by"][],	where?:ValueTypes["meeting_participant_bool_exp"]},ValueTypes["meeting_participant_aggregate"]],
meeting_participant_by_pk?: [{	meeting_id:number,	participant_id:ValueTypes["uuid"]},ValueTypes["meeting_participant"]],
sphere?: [{	distinct_on?:ValueTypes["sphere_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["sphere_order_by"][],	where?:ValueTypes["sphere_bool_exp"]},ValueTypes["sphere"]],
sphere_aggregate?: [{	distinct_on?:ValueTypes["sphere_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["sphere_order_by"][],	where?:ValueTypes["sphere_bool_exp"]},ValueTypes["sphere_aggregate"]],
sphere_by_pk?: [{	id:number},ValueTypes["sphere"]],
user?: [{	distinct_on?:ValueTypes["user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["user_order_by"][],	where?:ValueTypes["user_bool_exp"]},ValueTypes["user"]],
user_aggregate?: [{	distinct_on?:ValueTypes["user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["user_order_by"][],	where?:ValueTypes["user_bool_exp"]},ValueTypes["user_aggregate"]],
user_by_pk?: [{	uuid:ValueTypes["uuid"]},ValueTypes["user"]]
		__typename?: true
}>;
	["timestamptz"]:unknown;
	["timestamptz_comparison_exp"]: {
	_eq?:ValueTypes["timestamptz"],
	_gt?:ValueTypes["timestamptz"],
	_gte?:ValueTypes["timestamptz"],
	_in?:ValueTypes["timestamptz"][],
	_is_null?:boolean,
	_lt?:ValueTypes["timestamptz"],
	_lte?:ValueTypes["timestamptz"],
	_neq?:ValueTypes["timestamptz"],
	_nin?:ValueTypes["timestamptz"][]
};
	["user"]: AliasType<{
	auth0_id?:true,
	created_at?:true,
	email?:true,
guilds?: [{	distinct_on?:ValueTypes["guild_member_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["guild_member_order_by"][],	where?:ValueTypes["guild_member_bool_exp"]},ValueTypes["guild_member"]],
guilds_aggregate?: [{	distinct_on?:ValueTypes["guild_member_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["guild_member_order_by"][],	where?:ValueTypes["guild_member_bool_exp"]},ValueTypes["guild_member_aggregate"]],
	last_login?:true,
meetings?: [{	distinct_on?:ValueTypes["meeting_participant_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_participant_order_by"][],	where?:ValueTypes["meeting_participant_bool_exp"]},ValueTypes["meeting_participant"]],
meetings_aggregate?: [{	distinct_on?:ValueTypes["meeting_participant_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_participant_order_by"][],	where?:ValueTypes["meeting_participant_bool_exp"]},ValueTypes["meeting_participant_aggregate"]],
	name?:true,
organized_meetings?: [{	distinct_on?:ValueTypes["meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_order_by"][],	where?:ValueTypes["meeting_bool_exp"]},ValueTypes["meeting"]],
organized_meetings_aggregate?: [{	distinct_on?:ValueTypes["meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meeting_order_by"][],	where?:ValueTypes["meeting_bool_exp"]},ValueTypes["meeting_aggregate"]],
	uuid?:true
		__typename?: true
}>;
	["user_aggregate"]: AliasType<{
	aggregate?:ValueTypes["user_aggregate_fields"],
	nodes?:ValueTypes["user"]
		__typename?: true
}>;
	["user_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["user_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["user_max_fields"],
	min?:ValueTypes["user_min_fields"]
		__typename?: true
}>;
	["user_aggregate_order_by"]: {
	count?:ValueTypes["order_by"],
	max?:ValueTypes["user_max_order_by"],
	min?:ValueTypes["user_min_order_by"]
};
	["user_arr_rel_insert_input"]: {
	data:ValueTypes["user_insert_input"][],
	on_conflict?:ValueTypes["user_on_conflict"]
};
	["user_bool_exp"]: {
	_and?:(ValueTypes["user_bool_exp"] | undefined)[],
	_not?:ValueTypes["user_bool_exp"],
	_or?:(ValueTypes["user_bool_exp"] | undefined)[],
	auth0_id?:ValueTypes["String_comparison_exp"],
	created_at?:ValueTypes["timestamptz_comparison_exp"],
	email?:ValueTypes["String_comparison_exp"],
	guilds?:ValueTypes["guild_member_bool_exp"],
	last_login?:ValueTypes["timestamptz_comparison_exp"],
	meetings?:ValueTypes["meeting_participant_bool_exp"],
	name?:ValueTypes["String_comparison_exp"],
	organized_meetings?:ValueTypes["meeting_bool_exp"],
	uuid?:ValueTypes["uuid_comparison_exp"]
};
	["user_constraint"]:user_constraint;
	["user_insert_input"]: {
	auth0_id?:string,
	created_at?:ValueTypes["timestamptz"],
	email?:string,
	guilds?:ValueTypes["guild_member_arr_rel_insert_input"],
	last_login?:ValueTypes["timestamptz"],
	meetings?:ValueTypes["meeting_participant_arr_rel_insert_input"],
	name?:string,
	organized_meetings?:ValueTypes["meeting_arr_rel_insert_input"],
	uuid?:ValueTypes["uuid"]
};
	["user_max_fields"]: AliasType<{
	auth0_id?:true,
	created_at?:true,
	email?:true,
	last_login?:true,
	name?:true,
	uuid?:true
		__typename?: true
}>;
	["user_max_order_by"]: {
	auth0_id?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	email?:ValueTypes["order_by"],
	last_login?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"],
	uuid?:ValueTypes["order_by"]
};
	["user_min_fields"]: AliasType<{
	auth0_id?:true,
	created_at?:true,
	email?:true,
	last_login?:true,
	name?:true,
	uuid?:true
		__typename?: true
}>;
	["user_min_order_by"]: {
	auth0_id?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	email?:ValueTypes["order_by"],
	last_login?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"],
	uuid?:ValueTypes["order_by"]
};
	["user_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["user"]
		__typename?: true
}>;
	["user_obj_rel_insert_input"]: {
	data:ValueTypes["user_insert_input"],
	on_conflict?:ValueTypes["user_on_conflict"]
};
	["user_on_conflict"]: {
	constraint:ValueTypes["user_constraint"],
	update_columns:ValueTypes["user_update_column"][],
	where?:ValueTypes["user_bool_exp"]
};
	["user_order_by"]: {
	auth0_id?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	email?:ValueTypes["order_by"],
	guilds_aggregate?:ValueTypes["guild_member_aggregate_order_by"],
	last_login?:ValueTypes["order_by"],
	meetings_aggregate?:ValueTypes["meeting_participant_aggregate_order_by"],
	name?:ValueTypes["order_by"],
	organized_meetings_aggregate?:ValueTypes["meeting_aggregate_order_by"],
	uuid?:ValueTypes["order_by"]
};
	["user_pk_columns_input"]: {
	uuid:ValueTypes["uuid"]
};
	["user_select_column"]:user_select_column;
	["user_set_input"]: {
	auth0_id?:string,
	created_at?:ValueTypes["timestamptz"],
	email?:string,
	last_login?:ValueTypes["timestamptz"],
	name?:string,
	uuid?:ValueTypes["uuid"]
};
	["user_update_column"]:user_update_column;
	["uuid"]:unknown;
	["uuid_comparison_exp"]: {
	_eq?:ValueTypes["uuid"],
	_gt?:ValueTypes["uuid"],
	_gte?:ValueTypes["uuid"],
	_in?:ValueTypes["uuid"][],
	_is_null?:boolean,
	_lt?:ValueTypes["uuid"],
	_lte?:ValueTypes["uuid"],
	_neq?:ValueTypes["uuid"],
	_nin?:ValueTypes["uuid"][]
}
  }

export type PartialObjects = {
    ["guild"]: {
		__typename?: "guild";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			guild_members?:PartialObjects["guild_member"][],
			guild_members_aggregate?:PartialObjects["guild_member_aggregate"],
			id?:number,
			meetings?:PartialObjects["meeting"][],
			meetings_aggregate?:PartialObjects["meeting_aggregate"],
			name?:string,
			updated_at?:PartialObjects["timestamptz"]
	},
	["guild_aggregate"]: {
		__typename?: "guild_aggregate";
			aggregate?:PartialObjects["guild_aggregate_fields"],
			nodes?:PartialObjects["guild"][]
	},
	["guild_aggregate_fields"]: {
		__typename?: "guild_aggregate_fields";
			avg?:PartialObjects["guild_avg_fields"],
			count?:number,
			max?:PartialObjects["guild_max_fields"],
			min?:PartialObjects["guild_min_fields"],
			stddev?:PartialObjects["guild_stddev_fields"],
			stddev_pop?:PartialObjects["guild_stddev_pop_fields"],
			stddev_samp?:PartialObjects["guild_stddev_samp_fields"],
			sum?:PartialObjects["guild_sum_fields"],
			var_pop?:PartialObjects["guild_var_pop_fields"],
			var_samp?:PartialObjects["guild_var_samp_fields"],
			variance?:PartialObjects["guild_variance_fields"]
	},
	["guild_aggregate_order_by"]: {
	avg?:PartialObjects["guild_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["guild_max_order_by"],
	min?:PartialObjects["guild_min_order_by"],
	stddev?:PartialObjects["guild_stddev_order_by"],
	stddev_pop?:PartialObjects["guild_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["guild_stddev_samp_order_by"],
	sum?:PartialObjects["guild_sum_order_by"],
	var_pop?:PartialObjects["guild_var_pop_order_by"],
	var_samp?:PartialObjects["guild_var_samp_order_by"],
	variance?:PartialObjects["guild_variance_order_by"]
},
	["guild_arr_rel_insert_input"]: {
	data:PartialObjects["guild_insert_input"][],
	on_conflict?:PartialObjects["guild_on_conflict"]
},
	["guild_avg_fields"]: {
		__typename?: "guild_avg_fields";
			id?:number
	},
	["guild_avg_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["guild_bool_exp"]: {
	_and?:(PartialObjects["guild_bool_exp"] | undefined)[],
	_not?:PartialObjects["guild_bool_exp"],
	_or?:(PartialObjects["guild_bool_exp"] | undefined)[],
	created_at?:PartialObjects["timestamptz_comparison_exp"],
	description?:PartialObjects["String_comparison_exp"],
	guild_members?:PartialObjects["guild_member_bool_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	meetings?:PartialObjects["meeting_bool_exp"],
	name?:PartialObjects["String_comparison_exp"],
	updated_at?:PartialObjects["timestamptz_comparison_exp"]
},
	["guild_constraint"]:guild_constraint,
	["guild_inc_input"]: {
	id?:number
},
	["guild_insert_input"]: {
	created_at?:PartialObjects["timestamptz"],
	description?:string,
	guild_members?:PartialObjects["guild_member_arr_rel_insert_input"],
	id?:number,
	meetings?:PartialObjects["meeting_arr_rel_insert_input"],
	name?:string,
	updated_at?:PartialObjects["timestamptz"]
},
	["guild_max_fields"]: {
		__typename?: "guild_max_fields";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			id?:number,
			name?:string,
			updated_at?:PartialObjects["timestamptz"]
	},
	["guild_max_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"],
	updated_at?:PartialObjects["order_by"]
},
	["guild_member"]: {
		__typename?: "guild_member";
			guild?:PartialObjects["guild"],
			guild_id?:number,
			member_id?:PartialObjects["uuid"],
			user?:PartialObjects["user"]
	},
	["guild_member_aggregate"]: {
		__typename?: "guild_member_aggregate";
			aggregate?:PartialObjects["guild_member_aggregate_fields"],
			nodes?:PartialObjects["guild_member"][]
	},
	["guild_member_aggregate_fields"]: {
		__typename?: "guild_member_aggregate_fields";
			avg?:PartialObjects["guild_member_avg_fields"],
			count?:number,
			max?:PartialObjects["guild_member_max_fields"],
			min?:PartialObjects["guild_member_min_fields"],
			stddev?:PartialObjects["guild_member_stddev_fields"],
			stddev_pop?:PartialObjects["guild_member_stddev_pop_fields"],
			stddev_samp?:PartialObjects["guild_member_stddev_samp_fields"],
			sum?:PartialObjects["guild_member_sum_fields"],
			var_pop?:PartialObjects["guild_member_var_pop_fields"],
			var_samp?:PartialObjects["guild_member_var_samp_fields"],
			variance?:PartialObjects["guild_member_variance_fields"]
	},
	["guild_member_aggregate_order_by"]: {
	avg?:PartialObjects["guild_member_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["guild_member_max_order_by"],
	min?:PartialObjects["guild_member_min_order_by"],
	stddev?:PartialObjects["guild_member_stddev_order_by"],
	stddev_pop?:PartialObjects["guild_member_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["guild_member_stddev_samp_order_by"],
	sum?:PartialObjects["guild_member_sum_order_by"],
	var_pop?:PartialObjects["guild_member_var_pop_order_by"],
	var_samp?:PartialObjects["guild_member_var_samp_order_by"],
	variance?:PartialObjects["guild_member_variance_order_by"]
},
	["guild_member_arr_rel_insert_input"]: {
	data:PartialObjects["guild_member_insert_input"][],
	on_conflict?:PartialObjects["guild_member_on_conflict"]
},
	["guild_member_avg_fields"]: {
		__typename?: "guild_member_avg_fields";
			guild_id?:number
	},
	["guild_member_avg_order_by"]: {
	guild_id?:PartialObjects["order_by"]
},
	["guild_member_bool_exp"]: {
	_and?:(PartialObjects["guild_member_bool_exp"] | undefined)[],
	_not?:PartialObjects["guild_member_bool_exp"],
	_or?:(PartialObjects["guild_member_bool_exp"] | undefined)[],
	guild?:PartialObjects["guild_bool_exp"],
	guild_id?:PartialObjects["Int_comparison_exp"],
	member_id?:PartialObjects["uuid_comparison_exp"],
	user?:PartialObjects["user_bool_exp"]
},
	["guild_member_constraint"]:guild_member_constraint,
	["guild_member_inc_input"]: {
	guild_id?:number
},
	["guild_member_insert_input"]: {
	guild?:PartialObjects["guild_obj_rel_insert_input"],
	guild_id?:number,
	member_id?:PartialObjects["uuid"],
	user?:PartialObjects["user_obj_rel_insert_input"]
},
	["guild_member_max_fields"]: {
		__typename?: "guild_member_max_fields";
			guild_id?:number,
			member_id?:PartialObjects["uuid"]
	},
	["guild_member_max_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	member_id?:PartialObjects["order_by"]
},
	["guild_member_min_fields"]: {
		__typename?: "guild_member_min_fields";
			guild_id?:number,
			member_id?:PartialObjects["uuid"]
	},
	["guild_member_min_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	member_id?:PartialObjects["order_by"]
},
	["guild_member_mutation_response"]: {
		__typename?: "guild_member_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["guild_member"][]
	},
	["guild_member_obj_rel_insert_input"]: {
	data:PartialObjects["guild_member_insert_input"],
	on_conflict?:PartialObjects["guild_member_on_conflict"]
},
	["guild_member_on_conflict"]: {
	constraint:PartialObjects["guild_member_constraint"],
	update_columns:PartialObjects["guild_member_update_column"][],
	where?:PartialObjects["guild_member_bool_exp"]
},
	["guild_member_order_by"]: {
	guild?:PartialObjects["guild_order_by"],
	guild_id?:PartialObjects["order_by"],
	member_id?:PartialObjects["order_by"],
	user?:PartialObjects["user_order_by"]
},
	["guild_member_pk_columns_input"]: {
	guild_id:number,
	member_id:PartialObjects["uuid"]
},
	["guild_member_select_column"]:guild_member_select_column,
	["guild_member_set_input"]: {
	guild_id?:number,
	member_id?:PartialObjects["uuid"]
},
	["guild_member_stddev_fields"]: {
		__typename?: "guild_member_stddev_fields";
			guild_id?:number
	},
	["guild_member_stddev_order_by"]: {
	guild_id?:PartialObjects["order_by"]
},
	["guild_member_stddev_pop_fields"]: {
		__typename?: "guild_member_stddev_pop_fields";
			guild_id?:number
	},
	["guild_member_stddev_pop_order_by"]: {
	guild_id?:PartialObjects["order_by"]
},
	["guild_member_stddev_samp_fields"]: {
		__typename?: "guild_member_stddev_samp_fields";
			guild_id?:number
	},
	["guild_member_stddev_samp_order_by"]: {
	guild_id?:PartialObjects["order_by"]
},
	["guild_member_sum_fields"]: {
		__typename?: "guild_member_sum_fields";
			guild_id?:number
	},
	["guild_member_sum_order_by"]: {
	guild_id?:PartialObjects["order_by"]
},
	["guild_member_update_column"]:guild_member_update_column,
	["guild_member_var_pop_fields"]: {
		__typename?: "guild_member_var_pop_fields";
			guild_id?:number
	},
	["guild_member_var_pop_order_by"]: {
	guild_id?:PartialObjects["order_by"]
},
	["guild_member_var_samp_fields"]: {
		__typename?: "guild_member_var_samp_fields";
			guild_id?:number
	},
	["guild_member_var_samp_order_by"]: {
	guild_id?:PartialObjects["order_by"]
},
	["guild_member_variance_fields"]: {
		__typename?: "guild_member_variance_fields";
			guild_id?:number
	},
	["guild_member_variance_order_by"]: {
	guild_id?:PartialObjects["order_by"]
},
	["guild_min_fields"]: {
		__typename?: "guild_min_fields";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			id?:number,
			name?:string,
			updated_at?:PartialObjects["timestamptz"]
	},
	["guild_min_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"],
	updated_at?:PartialObjects["order_by"]
},
	["guild_mutation_response"]: {
		__typename?: "guild_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["guild"][]
	},
	["guild_obj_rel_insert_input"]: {
	data:PartialObjects["guild_insert_input"],
	on_conflict?:PartialObjects["guild_on_conflict"]
},
	["guild_on_conflict"]: {
	constraint:PartialObjects["guild_constraint"],
	update_columns:PartialObjects["guild_update_column"][],
	where?:PartialObjects["guild_bool_exp"]
},
	["guild_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	guild_members_aggregate?:PartialObjects["guild_member_aggregate_order_by"],
	id?:PartialObjects["order_by"],
	meetings_aggregate?:PartialObjects["meeting_aggregate_order_by"],
	name?:PartialObjects["order_by"],
	updated_at?:PartialObjects["order_by"]
},
	["guild_pk_columns_input"]: {
	id:number
},
	["guild_select_column"]:guild_select_column,
	["guild_set_input"]: {
	created_at?:PartialObjects["timestamptz"],
	description?:string,
	id?:number,
	name?:string,
	updated_at?:PartialObjects["timestamptz"]
},
	["guild_stddev_fields"]: {
		__typename?: "guild_stddev_fields";
			id?:number
	},
	["guild_stddev_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["guild_stddev_pop_fields"]: {
		__typename?: "guild_stddev_pop_fields";
			id?:number
	},
	["guild_stddev_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["guild_stddev_samp_fields"]: {
		__typename?: "guild_stddev_samp_fields";
			id?:number
	},
	["guild_stddev_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["guild_sum_fields"]: {
		__typename?: "guild_sum_fields";
			id?:number
	},
	["guild_sum_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["guild_update_column"]:guild_update_column,
	["guild_var_pop_fields"]: {
		__typename?: "guild_var_pop_fields";
			id?:number
	},
	["guild_var_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["guild_var_samp_fields"]: {
		__typename?: "guild_var_samp_fields";
			id?:number
	},
	["guild_var_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["guild_variance_fields"]: {
		__typename?: "guild_variance_fields";
			id?:number
	},
	["guild_variance_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["Int_comparison_exp"]: {
	_eq?:number,
	_gt?:number,
	_gte?:number,
	_in?:number[],
	_is_null?:boolean,
	_lt?:number,
	_lte?:number,
	_neq?:number,
	_nin?:number[]
},
	["meeting"]: {
		__typename?: "meeting";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			end_time?:PartialObjects["timestamptz"],
			guild?:PartialObjects["guild"],
			guild_id?:number,
			id?:number,
			location?:string,
			organizer?:PartialObjects["user"],
			organizer_id?:PartialObjects["uuid"],
			participants?:PartialObjects["meeting_participant"][],
			participants_aggregate?:PartialObjects["meeting_participant_aggregate"],
			publication_time?:PartialObjects["timestamptz"],
			sphere_id?:number,
			start_time?:PartialObjects["timestamptz"],
			title?:string,
			updated_at?:PartialObjects["timestamptz"]
	},
	["meeting_aggregate"]: {
		__typename?: "meeting_aggregate";
			aggregate?:PartialObjects["meeting_aggregate_fields"],
			nodes?:PartialObjects["meeting"][]
	},
	["meeting_aggregate_fields"]: {
		__typename?: "meeting_aggregate_fields";
			avg?:PartialObjects["meeting_avg_fields"],
			count?:number,
			max?:PartialObjects["meeting_max_fields"],
			min?:PartialObjects["meeting_min_fields"],
			stddev?:PartialObjects["meeting_stddev_fields"],
			stddev_pop?:PartialObjects["meeting_stddev_pop_fields"],
			stddev_samp?:PartialObjects["meeting_stddev_samp_fields"],
			sum?:PartialObjects["meeting_sum_fields"],
			var_pop?:PartialObjects["meeting_var_pop_fields"],
			var_samp?:PartialObjects["meeting_var_samp_fields"],
			variance?:PartialObjects["meeting_variance_fields"]
	},
	["meeting_aggregate_order_by"]: {
	avg?:PartialObjects["meeting_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["meeting_max_order_by"],
	min?:PartialObjects["meeting_min_order_by"],
	stddev?:PartialObjects["meeting_stddev_order_by"],
	stddev_pop?:PartialObjects["meeting_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["meeting_stddev_samp_order_by"],
	sum?:PartialObjects["meeting_sum_order_by"],
	var_pop?:PartialObjects["meeting_var_pop_order_by"],
	var_samp?:PartialObjects["meeting_var_samp_order_by"],
	variance?:PartialObjects["meeting_variance_order_by"]
},
	["meeting_arr_rel_insert_input"]: {
	data:PartialObjects["meeting_insert_input"][],
	on_conflict?:PartialObjects["meeting_on_conflict"]
},
	["meeting_avg_fields"]: {
		__typename?: "meeting_avg_fields";
			guild_id?:number,
			id?:number,
			sphere_id?:number
	},
	["meeting_avg_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meeting_bool_exp"]: {
	_and?:(PartialObjects["meeting_bool_exp"] | undefined)[],
	_not?:PartialObjects["meeting_bool_exp"],
	_or?:(PartialObjects["meeting_bool_exp"] | undefined)[],
	created_at?:PartialObjects["timestamptz_comparison_exp"],
	description?:PartialObjects["String_comparison_exp"],
	end_time?:PartialObjects["timestamptz_comparison_exp"],
	guild?:PartialObjects["guild_bool_exp"],
	guild_id?:PartialObjects["Int_comparison_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	location?:PartialObjects["String_comparison_exp"],
	organizer?:PartialObjects["user_bool_exp"],
	organizer_id?:PartialObjects["uuid_comparison_exp"],
	participants?:PartialObjects["meeting_participant_bool_exp"],
	publication_time?:PartialObjects["timestamptz_comparison_exp"],
	sphere_id?:PartialObjects["Int_comparison_exp"],
	start_time?:PartialObjects["timestamptz_comparison_exp"],
	title?:PartialObjects["String_comparison_exp"],
	updated_at?:PartialObjects["timestamptz_comparison_exp"]
},
	["meeting_constraint"]:meeting_constraint,
	["meeting_inc_input"]: {
	guild_id?:number,
	id?:number,
	sphere_id?:number
},
	["meeting_insert_input"]: {
	created_at?:PartialObjects["timestamptz"],
	description?:string,
	end_time?:PartialObjects["timestamptz"],
	guild?:PartialObjects["guild_obj_rel_insert_input"],
	guild_id?:number,
	id?:number,
	location?:string,
	organizer?:PartialObjects["user_obj_rel_insert_input"],
	organizer_id?:PartialObjects["uuid"],
	participants?:PartialObjects["meeting_participant_arr_rel_insert_input"],
	publication_time?:PartialObjects["timestamptz"],
	sphere_id?:number,
	start_time?:PartialObjects["timestamptz"],
	title?:string,
	updated_at?:PartialObjects["timestamptz"]
},
	["meeting_max_fields"]: {
		__typename?: "meeting_max_fields";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			end_time?:PartialObjects["timestamptz"],
			guild_id?:number,
			id?:number,
			location?:string,
			organizer_id?:PartialObjects["uuid"],
			publication_time?:PartialObjects["timestamptz"],
			sphere_id?:number,
			start_time?:PartialObjects["timestamptz"],
			title?:string,
			updated_at?:PartialObjects["timestamptz"]
	},
	["meeting_max_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	end_time?:PartialObjects["order_by"],
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	location?:PartialObjects["order_by"],
	organizer_id?:PartialObjects["order_by"],
	publication_time?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"],
	start_time?:PartialObjects["order_by"],
	title?:PartialObjects["order_by"],
	updated_at?:PartialObjects["order_by"]
},
	["meeting_min_fields"]: {
		__typename?: "meeting_min_fields";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			end_time?:PartialObjects["timestamptz"],
			guild_id?:number,
			id?:number,
			location?:string,
			organizer_id?:PartialObjects["uuid"],
			publication_time?:PartialObjects["timestamptz"],
			sphere_id?:number,
			start_time?:PartialObjects["timestamptz"],
			title?:string,
			updated_at?:PartialObjects["timestamptz"]
	},
	["meeting_min_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	end_time?:PartialObjects["order_by"],
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	location?:PartialObjects["order_by"],
	organizer_id?:PartialObjects["order_by"],
	publication_time?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"],
	start_time?:PartialObjects["order_by"],
	title?:PartialObjects["order_by"],
	updated_at?:PartialObjects["order_by"]
},
	["meeting_mutation_response"]: {
		__typename?: "meeting_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["meeting"][]
	},
	["meeting_obj_rel_insert_input"]: {
	data:PartialObjects["meeting_insert_input"],
	on_conflict?:PartialObjects["meeting_on_conflict"]
},
	["meeting_on_conflict"]: {
	constraint:PartialObjects["meeting_constraint"],
	update_columns:PartialObjects["meeting_update_column"][],
	where?:PartialObjects["meeting_bool_exp"]
},
	["meeting_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	end_time?:PartialObjects["order_by"],
	guild?:PartialObjects["guild_order_by"],
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	location?:PartialObjects["order_by"],
	organizer?:PartialObjects["user_order_by"],
	organizer_id?:PartialObjects["order_by"],
	participants_aggregate?:PartialObjects["meeting_participant_aggregate_order_by"],
	publication_time?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"],
	start_time?:PartialObjects["order_by"],
	title?:PartialObjects["order_by"],
	updated_at?:PartialObjects["order_by"]
},
	["meeting_participant"]: {
		__typename?: "meeting_participant";
			meeting?:PartialObjects["meeting"],
			meeting_id?:number,
			participant?:PartialObjects["user"],
			participant_id?:PartialObjects["uuid"]
	},
	["meeting_participant_aggregate"]: {
		__typename?: "meeting_participant_aggregate";
			aggregate?:PartialObjects["meeting_participant_aggregate_fields"],
			nodes?:PartialObjects["meeting_participant"][]
	},
	["meeting_participant_aggregate_fields"]: {
		__typename?: "meeting_participant_aggregate_fields";
			avg?:PartialObjects["meeting_participant_avg_fields"],
			count?:number,
			max?:PartialObjects["meeting_participant_max_fields"],
			min?:PartialObjects["meeting_participant_min_fields"],
			stddev?:PartialObjects["meeting_participant_stddev_fields"],
			stddev_pop?:PartialObjects["meeting_participant_stddev_pop_fields"],
			stddev_samp?:PartialObjects["meeting_participant_stddev_samp_fields"],
			sum?:PartialObjects["meeting_participant_sum_fields"],
			var_pop?:PartialObjects["meeting_participant_var_pop_fields"],
			var_samp?:PartialObjects["meeting_participant_var_samp_fields"],
			variance?:PartialObjects["meeting_participant_variance_fields"]
	},
	["meeting_participant_aggregate_order_by"]: {
	avg?:PartialObjects["meeting_participant_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["meeting_participant_max_order_by"],
	min?:PartialObjects["meeting_participant_min_order_by"],
	stddev?:PartialObjects["meeting_participant_stddev_order_by"],
	stddev_pop?:PartialObjects["meeting_participant_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["meeting_participant_stddev_samp_order_by"],
	sum?:PartialObjects["meeting_participant_sum_order_by"],
	var_pop?:PartialObjects["meeting_participant_var_pop_order_by"],
	var_samp?:PartialObjects["meeting_participant_var_samp_order_by"],
	variance?:PartialObjects["meeting_participant_variance_order_by"]
},
	["meeting_participant_arr_rel_insert_input"]: {
	data:PartialObjects["meeting_participant_insert_input"][],
	on_conflict?:PartialObjects["meeting_participant_on_conflict"]
},
	["meeting_participant_avg_fields"]: {
		__typename?: "meeting_participant_avg_fields";
			meeting_id?:number
	},
	["meeting_participant_avg_order_by"]: {
	meeting_id?:PartialObjects["order_by"]
},
	["meeting_participant_bool_exp"]: {
	_and?:(PartialObjects["meeting_participant_bool_exp"] | undefined)[],
	_not?:PartialObjects["meeting_participant_bool_exp"],
	_or?:(PartialObjects["meeting_participant_bool_exp"] | undefined)[],
	meeting?:PartialObjects["meeting_bool_exp"],
	meeting_id?:PartialObjects["Int_comparison_exp"],
	participant?:PartialObjects["user_bool_exp"],
	participant_id?:PartialObjects["uuid_comparison_exp"]
},
	["meeting_participant_constraint"]:meeting_participant_constraint,
	["meeting_participant_inc_input"]: {
	meeting_id?:number
},
	["meeting_participant_insert_input"]: {
	meeting?:PartialObjects["meeting_obj_rel_insert_input"],
	meeting_id?:number,
	participant?:PartialObjects["user_obj_rel_insert_input"],
	participant_id?:PartialObjects["uuid"]
},
	["meeting_participant_max_fields"]: {
		__typename?: "meeting_participant_max_fields";
			meeting_id?:number,
			participant_id?:PartialObjects["uuid"]
	},
	["meeting_participant_max_order_by"]: {
	meeting_id?:PartialObjects["order_by"],
	participant_id?:PartialObjects["order_by"]
},
	["meeting_participant_min_fields"]: {
		__typename?: "meeting_participant_min_fields";
			meeting_id?:number,
			participant_id?:PartialObjects["uuid"]
	},
	["meeting_participant_min_order_by"]: {
	meeting_id?:PartialObjects["order_by"],
	participant_id?:PartialObjects["order_by"]
},
	["meeting_participant_mutation_response"]: {
		__typename?: "meeting_participant_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["meeting_participant"][]
	},
	["meeting_participant_obj_rel_insert_input"]: {
	data:PartialObjects["meeting_participant_insert_input"],
	on_conflict?:PartialObjects["meeting_participant_on_conflict"]
},
	["meeting_participant_on_conflict"]: {
	constraint:PartialObjects["meeting_participant_constraint"],
	update_columns:PartialObjects["meeting_participant_update_column"][],
	where?:PartialObjects["meeting_participant_bool_exp"]
},
	["meeting_participant_order_by"]: {
	meeting?:PartialObjects["meeting_order_by"],
	meeting_id?:PartialObjects["order_by"],
	participant?:PartialObjects["user_order_by"],
	participant_id?:PartialObjects["order_by"]
},
	["meeting_participant_pk_columns_input"]: {
	meeting_id:number,
	participant_id:PartialObjects["uuid"]
},
	["meeting_participant_select_column"]:meeting_participant_select_column,
	["meeting_participant_set_input"]: {
	meeting_id?:number,
	participant_id?:PartialObjects["uuid"]
},
	["meeting_participant_stddev_fields"]: {
		__typename?: "meeting_participant_stddev_fields";
			meeting_id?:number
	},
	["meeting_participant_stddev_order_by"]: {
	meeting_id?:PartialObjects["order_by"]
},
	["meeting_participant_stddev_pop_fields"]: {
		__typename?: "meeting_participant_stddev_pop_fields";
			meeting_id?:number
	},
	["meeting_participant_stddev_pop_order_by"]: {
	meeting_id?:PartialObjects["order_by"]
},
	["meeting_participant_stddev_samp_fields"]: {
		__typename?: "meeting_participant_stddev_samp_fields";
			meeting_id?:number
	},
	["meeting_participant_stddev_samp_order_by"]: {
	meeting_id?:PartialObjects["order_by"]
},
	["meeting_participant_sum_fields"]: {
		__typename?: "meeting_participant_sum_fields";
			meeting_id?:number
	},
	["meeting_participant_sum_order_by"]: {
	meeting_id?:PartialObjects["order_by"]
},
	["meeting_participant_update_column"]:meeting_participant_update_column,
	["meeting_participant_var_pop_fields"]: {
		__typename?: "meeting_participant_var_pop_fields";
			meeting_id?:number
	},
	["meeting_participant_var_pop_order_by"]: {
	meeting_id?:PartialObjects["order_by"]
},
	["meeting_participant_var_samp_fields"]: {
		__typename?: "meeting_participant_var_samp_fields";
			meeting_id?:number
	},
	["meeting_participant_var_samp_order_by"]: {
	meeting_id?:PartialObjects["order_by"]
},
	["meeting_participant_variance_fields"]: {
		__typename?: "meeting_participant_variance_fields";
			meeting_id?:number
	},
	["meeting_participant_variance_order_by"]: {
	meeting_id?:PartialObjects["order_by"]
},
	["meeting_pk_columns_input"]: {
	id:number
},
	["meeting_select_column"]:meeting_select_column,
	["meeting_set_input"]: {
	created_at?:PartialObjects["timestamptz"],
	description?:string,
	end_time?:PartialObjects["timestamptz"],
	guild_id?:number,
	id?:number,
	location?:string,
	organizer_id?:PartialObjects["uuid"],
	publication_time?:PartialObjects["timestamptz"],
	sphere_id?:number,
	start_time?:PartialObjects["timestamptz"],
	title?:string,
	updated_at?:PartialObjects["timestamptz"]
},
	["meeting_stddev_fields"]: {
		__typename?: "meeting_stddev_fields";
			guild_id?:number,
			id?:number,
			sphere_id?:number
	},
	["meeting_stddev_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meeting_stddev_pop_fields"]: {
		__typename?: "meeting_stddev_pop_fields";
			guild_id?:number,
			id?:number,
			sphere_id?:number
	},
	["meeting_stddev_pop_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meeting_stddev_samp_fields"]: {
		__typename?: "meeting_stddev_samp_fields";
			guild_id?:number,
			id?:number,
			sphere_id?:number
	},
	["meeting_stddev_samp_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meeting_sum_fields"]: {
		__typename?: "meeting_sum_fields";
			guild_id?:number,
			id?:number,
			sphere_id?:number
	},
	["meeting_sum_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meeting_update_column"]:meeting_update_column,
	["meeting_var_pop_fields"]: {
		__typename?: "meeting_var_pop_fields";
			guild_id?:number,
			id?:number,
			sphere_id?:number
	},
	["meeting_var_pop_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meeting_var_samp_fields"]: {
		__typename?: "meeting_var_samp_fields";
			guild_id?:number,
			id?:number,
			sphere_id?:number
	},
	["meeting_var_samp_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meeting_variance_fields"]: {
		__typename?: "meeting_variance_fields";
			guild_id?:number,
			id?:number,
			sphere_id?:number
	},
	["meeting_variance_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["mutation_root"]: {
		__typename?: "mutation_root";
			delete_guild?:PartialObjects["guild_mutation_response"],
			delete_guild_by_pk?:PartialObjects["guild"],
			delete_guild_member?:PartialObjects["guild_member_mutation_response"],
			delete_guild_member_by_pk?:PartialObjects["guild_member"],
			delete_meeting?:PartialObjects["meeting_mutation_response"],
			delete_meeting_by_pk?:PartialObjects["meeting"],
			delete_meeting_participant?:PartialObjects["meeting_participant_mutation_response"],
			delete_meeting_participant_by_pk?:PartialObjects["meeting_participant"],
			delete_sphere?:PartialObjects["sphere_mutation_response"],
			delete_sphere_by_pk?:PartialObjects["sphere"],
			delete_user?:PartialObjects["user_mutation_response"],
			delete_user_by_pk?:PartialObjects["user"],
			insert_guild?:PartialObjects["guild_mutation_response"],
			insert_guild_member?:PartialObjects["guild_member_mutation_response"],
			insert_guild_member_one?:PartialObjects["guild_member"],
			insert_guild_one?:PartialObjects["guild"],
			insert_meeting?:PartialObjects["meeting_mutation_response"],
			insert_meeting_one?:PartialObjects["meeting"],
			insert_meeting_participant?:PartialObjects["meeting_participant_mutation_response"],
			insert_meeting_participant_one?:PartialObjects["meeting_participant"],
			insert_sphere?:PartialObjects["sphere_mutation_response"],
			insert_sphere_one?:PartialObjects["sphere"],
			insert_user?:PartialObjects["user_mutation_response"],
			insert_user_one?:PartialObjects["user"],
			update_guild?:PartialObjects["guild_mutation_response"],
			update_guild_by_pk?:PartialObjects["guild"],
			update_guild_member?:PartialObjects["guild_member_mutation_response"],
			update_guild_member_by_pk?:PartialObjects["guild_member"],
			update_meeting?:PartialObjects["meeting_mutation_response"],
			update_meeting_by_pk?:PartialObjects["meeting"],
			update_meeting_participant?:PartialObjects["meeting_participant_mutation_response"],
			update_meeting_participant_by_pk?:PartialObjects["meeting_participant"],
			update_sphere?:PartialObjects["sphere_mutation_response"],
			update_sphere_by_pk?:PartialObjects["sphere"],
			update_user?:PartialObjects["user_mutation_response"],
			update_user_by_pk?:PartialObjects["user"]
	},
	["order_by"]:order_by,
	["query_root"]: {
		__typename?: "query_root";
			guild?:PartialObjects["guild"][],
			guild_aggregate?:PartialObjects["guild_aggregate"],
			guild_by_pk?:PartialObjects["guild"],
			guild_member?:PartialObjects["guild_member"][],
			guild_member_aggregate?:PartialObjects["guild_member_aggregate"],
			guild_member_by_pk?:PartialObjects["guild_member"],
			meeting?:PartialObjects["meeting"][],
			meeting_aggregate?:PartialObjects["meeting_aggregate"],
			meeting_by_pk?:PartialObjects["meeting"],
			meeting_participant?:PartialObjects["meeting_participant"][],
			meeting_participant_aggregate?:PartialObjects["meeting_participant_aggregate"],
			meeting_participant_by_pk?:PartialObjects["meeting_participant"],
			sphere?:PartialObjects["sphere"][],
			sphere_aggregate?:PartialObjects["sphere_aggregate"],
			sphere_by_pk?:PartialObjects["sphere"],
			user?:PartialObjects["user"][],
			user_aggregate?:PartialObjects["user_aggregate"],
			user_by_pk?:PartialObjects["user"]
	},
	["sphere"]: {
		__typename?: "sphere";
			domain?:string,
			id?:number,
			name?:string
	},
	["sphere_aggregate"]: {
		__typename?: "sphere_aggregate";
			aggregate?:PartialObjects["sphere_aggregate_fields"],
			nodes?:PartialObjects["sphere"][]
	},
	["sphere_aggregate_fields"]: {
		__typename?: "sphere_aggregate_fields";
			avg?:PartialObjects["sphere_avg_fields"],
			count?:number,
			max?:PartialObjects["sphere_max_fields"],
			min?:PartialObjects["sphere_min_fields"],
			stddev?:PartialObjects["sphere_stddev_fields"],
			stddev_pop?:PartialObjects["sphere_stddev_pop_fields"],
			stddev_samp?:PartialObjects["sphere_stddev_samp_fields"],
			sum?:PartialObjects["sphere_sum_fields"],
			var_pop?:PartialObjects["sphere_var_pop_fields"],
			var_samp?:PartialObjects["sphere_var_samp_fields"],
			variance?:PartialObjects["sphere_variance_fields"]
	},
	["sphere_aggregate_order_by"]: {
	avg?:PartialObjects["sphere_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["sphere_max_order_by"],
	min?:PartialObjects["sphere_min_order_by"],
	stddev?:PartialObjects["sphere_stddev_order_by"],
	stddev_pop?:PartialObjects["sphere_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["sphere_stddev_samp_order_by"],
	sum?:PartialObjects["sphere_sum_order_by"],
	var_pop?:PartialObjects["sphere_var_pop_order_by"],
	var_samp?:PartialObjects["sphere_var_samp_order_by"],
	variance?:PartialObjects["sphere_variance_order_by"]
},
	["sphere_arr_rel_insert_input"]: {
	data:PartialObjects["sphere_insert_input"][],
	on_conflict?:PartialObjects["sphere_on_conflict"]
},
	["sphere_avg_fields"]: {
		__typename?: "sphere_avg_fields";
			id?:number
	},
	["sphere_avg_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["sphere_bool_exp"]: {
	_and?:(PartialObjects["sphere_bool_exp"] | undefined)[],
	_not?:PartialObjects["sphere_bool_exp"],
	_or?:(PartialObjects["sphere_bool_exp"] | undefined)[],
	domain?:PartialObjects["String_comparison_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	name?:PartialObjects["String_comparison_exp"]
},
	["sphere_constraint"]:sphere_constraint,
	["sphere_inc_input"]: {
	id?:number
},
	["sphere_insert_input"]: {
	domain?:string,
	id?:number,
	name?:string
},
	["sphere_max_fields"]: {
		__typename?: "sphere_max_fields";
			domain?:string,
			id?:number,
			name?:string
	},
	["sphere_max_order_by"]: {
	domain?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"]
},
	["sphere_min_fields"]: {
		__typename?: "sphere_min_fields";
			domain?:string,
			id?:number,
			name?:string
	},
	["sphere_min_order_by"]: {
	domain?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"]
},
	["sphere_mutation_response"]: {
		__typename?: "sphere_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["sphere"][]
	},
	["sphere_obj_rel_insert_input"]: {
	data:PartialObjects["sphere_insert_input"],
	on_conflict?:PartialObjects["sphere_on_conflict"]
},
	["sphere_on_conflict"]: {
	constraint:PartialObjects["sphere_constraint"],
	update_columns:PartialObjects["sphere_update_column"][],
	where?:PartialObjects["sphere_bool_exp"]
},
	["sphere_order_by"]: {
	domain?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"]
},
	["sphere_pk_columns_input"]: {
	id:number
},
	["sphere_select_column"]:sphere_select_column,
	["sphere_set_input"]: {
	domain?:string,
	id?:number,
	name?:string
},
	["sphere_stddev_fields"]: {
		__typename?: "sphere_stddev_fields";
			id?:number
	},
	["sphere_stddev_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["sphere_stddev_pop_fields"]: {
		__typename?: "sphere_stddev_pop_fields";
			id?:number
	},
	["sphere_stddev_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["sphere_stddev_samp_fields"]: {
		__typename?: "sphere_stddev_samp_fields";
			id?:number
	},
	["sphere_stddev_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["sphere_sum_fields"]: {
		__typename?: "sphere_sum_fields";
			id?:number
	},
	["sphere_sum_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["sphere_update_column"]:sphere_update_column,
	["sphere_var_pop_fields"]: {
		__typename?: "sphere_var_pop_fields";
			id?:number
	},
	["sphere_var_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["sphere_var_samp_fields"]: {
		__typename?: "sphere_var_samp_fields";
			id?:number
	},
	["sphere_var_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["sphere_variance_fields"]: {
		__typename?: "sphere_variance_fields";
			id?:number
	},
	["sphere_variance_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["String_comparison_exp"]: {
	_eq?:string,
	_gt?:string,
	_gte?:string,
	_ilike?:string,
	_in?:string[],
	_is_null?:boolean,
	_like?:string,
	_lt?:string,
	_lte?:string,
	_neq?:string,
	_nilike?:string,
	_nin?:string[],
	_nlike?:string,
	_nsimilar?:string,
	_similar?:string
},
	["subscription_root"]: {
		__typename?: "subscription_root";
			guild?:PartialObjects["guild"][],
			guild_aggregate?:PartialObjects["guild_aggregate"],
			guild_by_pk?:PartialObjects["guild"],
			guild_member?:PartialObjects["guild_member"][],
			guild_member_aggregate?:PartialObjects["guild_member_aggregate"],
			guild_member_by_pk?:PartialObjects["guild_member"],
			meeting?:PartialObjects["meeting"][],
			meeting_aggregate?:PartialObjects["meeting_aggregate"],
			meeting_by_pk?:PartialObjects["meeting"],
			meeting_participant?:PartialObjects["meeting_participant"][],
			meeting_participant_aggregate?:PartialObjects["meeting_participant_aggregate"],
			meeting_participant_by_pk?:PartialObjects["meeting_participant"],
			sphere?:PartialObjects["sphere"][],
			sphere_aggregate?:PartialObjects["sphere_aggregate"],
			sphere_by_pk?:PartialObjects["sphere"],
			user?:PartialObjects["user"][],
			user_aggregate?:PartialObjects["user_aggregate"],
			user_by_pk?:PartialObjects["user"]
	},
	["timestamptz"]:any,
	["timestamptz_comparison_exp"]: {
	_eq?:PartialObjects["timestamptz"],
	_gt?:PartialObjects["timestamptz"],
	_gte?:PartialObjects["timestamptz"],
	_in?:PartialObjects["timestamptz"][],
	_is_null?:boolean,
	_lt?:PartialObjects["timestamptz"],
	_lte?:PartialObjects["timestamptz"],
	_neq?:PartialObjects["timestamptz"],
	_nin?:PartialObjects["timestamptz"][]
},
	["user"]: {
		__typename?: "user";
			auth0_id?:string,
			created_at?:PartialObjects["timestamptz"],
			email?:string,
			guilds?:PartialObjects["guild_member"][],
			guilds_aggregate?:PartialObjects["guild_member_aggregate"],
			last_login?:PartialObjects["timestamptz"],
			meetings?:PartialObjects["meeting_participant"][],
			meetings_aggregate?:PartialObjects["meeting_participant_aggregate"],
			name?:string,
			organized_meetings?:PartialObjects["meeting"][],
			organized_meetings_aggregate?:PartialObjects["meeting_aggregate"],
			uuid?:PartialObjects["uuid"]
	},
	["user_aggregate"]: {
		__typename?: "user_aggregate";
			aggregate?:PartialObjects["user_aggregate_fields"],
			nodes?:PartialObjects["user"][]
	},
	["user_aggregate_fields"]: {
		__typename?: "user_aggregate_fields";
			count?:number,
			max?:PartialObjects["user_max_fields"],
			min?:PartialObjects["user_min_fields"]
	},
	["user_aggregate_order_by"]: {
	count?:PartialObjects["order_by"],
	max?:PartialObjects["user_max_order_by"],
	min?:PartialObjects["user_min_order_by"]
},
	["user_arr_rel_insert_input"]: {
	data:PartialObjects["user_insert_input"][],
	on_conflict?:PartialObjects["user_on_conflict"]
},
	["user_bool_exp"]: {
	_and?:(PartialObjects["user_bool_exp"] | undefined)[],
	_not?:PartialObjects["user_bool_exp"],
	_or?:(PartialObjects["user_bool_exp"] | undefined)[],
	auth0_id?:PartialObjects["String_comparison_exp"],
	created_at?:PartialObjects["timestamptz_comparison_exp"],
	email?:PartialObjects["String_comparison_exp"],
	guilds?:PartialObjects["guild_member_bool_exp"],
	last_login?:PartialObjects["timestamptz_comparison_exp"],
	meetings?:PartialObjects["meeting_participant_bool_exp"],
	name?:PartialObjects["String_comparison_exp"],
	organized_meetings?:PartialObjects["meeting_bool_exp"],
	uuid?:PartialObjects["uuid_comparison_exp"]
},
	["user_constraint"]:user_constraint,
	["user_insert_input"]: {
	auth0_id?:string,
	created_at?:PartialObjects["timestamptz"],
	email?:string,
	guilds?:PartialObjects["guild_member_arr_rel_insert_input"],
	last_login?:PartialObjects["timestamptz"],
	meetings?:PartialObjects["meeting_participant_arr_rel_insert_input"],
	name?:string,
	organized_meetings?:PartialObjects["meeting_arr_rel_insert_input"],
	uuid?:PartialObjects["uuid"]
},
	["user_max_fields"]: {
		__typename?: "user_max_fields";
			auth0_id?:string,
			created_at?:PartialObjects["timestamptz"],
			email?:string,
			last_login?:PartialObjects["timestamptz"],
			name?:string,
			uuid?:PartialObjects["uuid"]
	},
	["user_max_order_by"]: {
	auth0_id?:PartialObjects["order_by"],
	created_at?:PartialObjects["order_by"],
	email?:PartialObjects["order_by"],
	last_login?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"],
	uuid?:PartialObjects["order_by"]
},
	["user_min_fields"]: {
		__typename?: "user_min_fields";
			auth0_id?:string,
			created_at?:PartialObjects["timestamptz"],
			email?:string,
			last_login?:PartialObjects["timestamptz"],
			name?:string,
			uuid?:PartialObjects["uuid"]
	},
	["user_min_order_by"]: {
	auth0_id?:PartialObjects["order_by"],
	created_at?:PartialObjects["order_by"],
	email?:PartialObjects["order_by"],
	last_login?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"],
	uuid?:PartialObjects["order_by"]
},
	["user_mutation_response"]: {
		__typename?: "user_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["user"][]
	},
	["user_obj_rel_insert_input"]: {
	data:PartialObjects["user_insert_input"],
	on_conflict?:PartialObjects["user_on_conflict"]
},
	["user_on_conflict"]: {
	constraint:PartialObjects["user_constraint"],
	update_columns:PartialObjects["user_update_column"][],
	where?:PartialObjects["user_bool_exp"]
},
	["user_order_by"]: {
	auth0_id?:PartialObjects["order_by"],
	created_at?:PartialObjects["order_by"],
	email?:PartialObjects["order_by"],
	guilds_aggregate?:PartialObjects["guild_member_aggregate_order_by"],
	last_login?:PartialObjects["order_by"],
	meetings_aggregate?:PartialObjects["meeting_participant_aggregate_order_by"],
	name?:PartialObjects["order_by"],
	organized_meetings_aggregate?:PartialObjects["meeting_aggregate_order_by"],
	uuid?:PartialObjects["order_by"]
},
	["user_pk_columns_input"]: {
	uuid:PartialObjects["uuid"]
},
	["user_select_column"]:user_select_column,
	["user_set_input"]: {
	auth0_id?:string,
	created_at?:PartialObjects["timestamptz"],
	email?:string,
	last_login?:PartialObjects["timestamptz"],
	name?:string,
	uuid?:PartialObjects["uuid"]
},
	["user_update_column"]:user_update_column,
	["uuid"]:any,
	["uuid_comparison_exp"]: {
	_eq?:PartialObjects["uuid"],
	_gt?:PartialObjects["uuid"],
	_gte?:PartialObjects["uuid"],
	_in?:PartialObjects["uuid"][],
	_is_null?:boolean,
	_lt?:PartialObjects["uuid"],
	_lte?:PartialObjects["uuid"],
	_neq?:PartialObjects["uuid"],
	_nin?:PartialObjects["uuid"][]
}
  }

// columns and relationships of "guild"

// aggregated selection of "guild"

// aggregate fields of "guild"

// order by aggregate values of table "guild"

// input type for inserting array relation for remote table "guild"

// aggregate avg on columns

// order by avg() on columns of table "guild"

// Boolean expression to filter rows from the table "guild". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "guild"

// input type for incrementing integer columne in table "guild"

// input type for inserting data into table "guild"

// aggregate max on columns

// order by max() on columns of table "guild"

// columns and relationships of "guild_member"

// aggregated selection of "guild_member"

// aggregate fields of "guild_member"

// order by aggregate values of table "guild_member"

// input type for inserting array relation for remote table "guild_member"

// aggregate avg on columns

// order by avg() on columns of table "guild_member"

// Boolean expression to filter rows from the table "guild_member". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "guild_member"

// input type for incrementing integer columne in table "guild_member"

// input type for inserting data into table "guild_member"

// aggregate max on columns

// order by max() on columns of table "guild_member"

// aggregate min on columns

// order by min() on columns of table "guild_member"

// response of any mutation on the table "guild_member"

// input type for inserting object relation for remote table "guild_member"

// on conflict condition type for table "guild_member"

// ordering options when selecting data from "guild_member"

// primary key columns input for table: "guild_member"

// select columns of table "guild_member"

// input type for updating data in table "guild_member"

// aggregate stddev on columns

// order by stddev() on columns of table "guild_member"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "guild_member"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "guild_member"

// aggregate sum on columns

// order by sum() on columns of table "guild_member"

// update columns of table "guild_member"

// aggregate var_pop on columns

// order by var_pop() on columns of table "guild_member"

// aggregate var_samp on columns

// order by var_samp() on columns of table "guild_member"

// aggregate variance on columns

// order by variance() on columns of table "guild_member"

// aggregate min on columns

// order by min() on columns of table "guild"

// response of any mutation on the table "guild"

// input type for inserting object relation for remote table "guild"

// on conflict condition type for table "guild"

// ordering options when selecting data from "guild"

// primary key columns input for table: "guild"

// select columns of table "guild"

// input type for updating data in table "guild"

// aggregate stddev on columns

// order by stddev() on columns of table "guild"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "guild"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "guild"

// aggregate sum on columns

// order by sum() on columns of table "guild"

// update columns of table "guild"

// aggregate var_pop on columns

// order by var_pop() on columns of table "guild"

// aggregate var_samp on columns

// order by var_samp() on columns of table "guild"

// aggregate variance on columns

// order by variance() on columns of table "guild"

// expression to compare columns of type Int. All fields are combined with logical 'AND'.

// columns and relationships of "meeting"

// aggregated selection of "meeting"

// aggregate fields of "meeting"

// order by aggregate values of table "meeting"

// input type for inserting array relation for remote table "meeting"

// aggregate avg on columns

// order by avg() on columns of table "meeting"

// Boolean expression to filter rows from the table "meeting". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "meeting"

// input type for incrementing integer columne in table "meeting"

// input type for inserting data into table "meeting"

// aggregate max on columns

// order by max() on columns of table "meeting"

// aggregate min on columns

// order by min() on columns of table "meeting"

// response of any mutation on the table "meeting"

// input type for inserting object relation for remote table "meeting"

// on conflict condition type for table "meeting"

// ordering options when selecting data from "meeting"

// columns and relationships of "meeting_participant"

// aggregated selection of "meeting_participant"

// aggregate fields of "meeting_participant"

// order by aggregate values of table "meeting_participant"

// input type for inserting array relation for remote table "meeting_participant"

// aggregate avg on columns

// order by avg() on columns of table "meeting_participant"

// Boolean expression to filter rows from the table "meeting_participant". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "meeting_participant"

// input type for incrementing integer columne in table "meeting_participant"

// input type for inserting data into table "meeting_participant"

// aggregate max on columns

// order by max() on columns of table "meeting_participant"

// aggregate min on columns

// order by min() on columns of table "meeting_participant"

// response of any mutation on the table "meeting_participant"

// input type for inserting object relation for remote table "meeting_participant"

// on conflict condition type for table "meeting_participant"

// ordering options when selecting data from "meeting_participant"

// primary key columns input for table: "meeting_participant"

// select columns of table "meeting_participant"

// input type for updating data in table "meeting_participant"

// aggregate stddev on columns

// order by stddev() on columns of table "meeting_participant"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "meeting_participant"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "meeting_participant"

// aggregate sum on columns

// order by sum() on columns of table "meeting_participant"

// update columns of table "meeting_participant"

// aggregate var_pop on columns

// order by var_pop() on columns of table "meeting_participant"

// aggregate var_samp on columns

// order by var_samp() on columns of table "meeting_participant"

// aggregate variance on columns

// order by variance() on columns of table "meeting_participant"

// primary key columns input for table: "meeting"

// select columns of table "meeting"

// input type for updating data in table "meeting"

// aggregate stddev on columns

// order by stddev() on columns of table "meeting"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "meeting"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "meeting"

// aggregate sum on columns

// order by sum() on columns of table "meeting"

// update columns of table "meeting"

// aggregate var_pop on columns

// order by var_pop() on columns of table "meeting"

// aggregate var_samp on columns

// order by var_samp() on columns of table "meeting"

// aggregate variance on columns

// order by variance() on columns of table "meeting"

// mutation root

// column ordering options

// query root

// columns and relationships of "sphere"

// aggregated selection of "sphere"

// aggregate fields of "sphere"

// order by aggregate values of table "sphere"

// input type for inserting array relation for remote table "sphere"

// aggregate avg on columns

// order by avg() on columns of table "sphere"

// Boolean expression to filter rows from the table "sphere". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "sphere"

// input type for incrementing integer columne in table "sphere"

// input type for inserting data into table "sphere"

// aggregate max on columns

// order by max() on columns of table "sphere"

// aggregate min on columns

// order by min() on columns of table "sphere"

// response of any mutation on the table "sphere"

// input type for inserting object relation for remote table "sphere"

// on conflict condition type for table "sphere"

// ordering options when selecting data from "sphere"

// primary key columns input for table: "sphere"

// select columns of table "sphere"

// input type for updating data in table "sphere"

// aggregate stddev on columns

// order by stddev() on columns of table "sphere"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "sphere"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "sphere"

// aggregate sum on columns

// order by sum() on columns of table "sphere"

// update columns of table "sphere"

// aggregate var_pop on columns

// order by var_pop() on columns of table "sphere"

// aggregate var_samp on columns

// order by var_samp() on columns of table "sphere"

// aggregate variance on columns

// order by variance() on columns of table "sphere"

// expression to compare columns of type String. All fields are combined with logical 'AND'.

// subscription root

// expression to compare columns of type timestamptz. All fields are combined with logical 'AND'.

// columns and relationships of "user"

// aggregated selection of "user"

// aggregate fields of "user"

// order by aggregate values of table "user"

// input type for inserting array relation for remote table "user"

// Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "user"

// input type for inserting data into table "user"

// aggregate max on columns

// order by max() on columns of table "user"

// aggregate min on columns

// order by min() on columns of table "user"

// response of any mutation on the table "user"

// input type for inserting object relation for remote table "user"

// on conflict condition type for table "user"

// ordering options when selecting data from "user"

// primary key columns input for table: "user"

// select columns of table "user"

// input type for updating data in table "user"

// update columns of table "user"

// expression to compare columns of type uuid. All fields are combined with logical 'AND'.

export type guild = {
	__typename?: "guild",
	created_at:timestamptz,
	description?:string,
	guild_members:guild_member[],
	guild_members_aggregate:guild_member_aggregate,
	id:number,
	meetings:meeting[],
	meetings_aggregate:meeting_aggregate,
	name:string,
	updated_at:timestamptz
}

export type guild_aggregate = {
	__typename?: "guild_aggregate",
	aggregate?:guild_aggregate_fields,
	nodes:guild[]
}

export type guild_aggregate_fields = {
	__typename?: "guild_aggregate_fields",
	avg?:guild_avg_fields,
	count?:number,
	max?:guild_max_fields,
	min?:guild_min_fields,
	stddev?:guild_stddev_fields,
	stddev_pop?:guild_stddev_pop_fields,
	stddev_samp?:guild_stddev_samp_fields,
	sum?:guild_sum_fields,
	var_pop?:guild_var_pop_fields,
	var_samp?:guild_var_samp_fields,
	variance?:guild_variance_fields
}

export type guild_aggregate_order_by = {
		avg?:guild_avg_order_by,
	count?:order_by,
	max?:guild_max_order_by,
	min?:guild_min_order_by,
	stddev?:guild_stddev_order_by,
	stddev_pop?:guild_stddev_pop_order_by,
	stddev_samp?:guild_stddev_samp_order_by,
	sum?:guild_sum_order_by,
	var_pop?:guild_var_pop_order_by,
	var_samp?:guild_var_samp_order_by,
	variance?:guild_variance_order_by
}

export type guild_arr_rel_insert_input = {
		data:guild_insert_input[],
	on_conflict?:guild_on_conflict
}

export type guild_avg_fields = {
	__typename?: "guild_avg_fields",
	id?:number
}

export type guild_avg_order_by = {
		id?:order_by
}

export type guild_bool_exp = {
		_and?:(guild_bool_exp | undefined)[],
	_not?:guild_bool_exp,
	_or?:(guild_bool_exp | undefined)[],
	created_at?:timestamptz_comparison_exp,
	description?:String_comparison_exp,
	guild_members?:guild_member_bool_exp,
	id?:Int_comparison_exp,
	meetings?:meeting_bool_exp,
	name?:String_comparison_exp,
	updated_at?:timestamptz_comparison_exp
}

export enum guild_constraint {
	guild_pkey = "guild_pkey"
}

export type guild_inc_input = {
		id?:number
}

export type guild_insert_input = {
		created_at?:timestamptz,
	description?:string,
	guild_members?:guild_member_arr_rel_insert_input,
	id?:number,
	meetings?:meeting_arr_rel_insert_input,
	name?:string,
	updated_at?:timestamptz
}

export type guild_max_fields = {
	__typename?: "guild_max_fields",
	created_at?:timestamptz,
	description?:string,
	id?:number,
	name?:string,
	updated_at?:timestamptz
}

export type guild_max_order_by = {
		created_at?:order_by,
	description?:order_by,
	id?:order_by,
	name?:order_by,
	updated_at?:order_by
}

export type guild_member = {
	__typename?: "guild_member",
	guild:guild,
	guild_id:number,
	member_id:uuid,
	user:user
}

export type guild_member_aggregate = {
	__typename?: "guild_member_aggregate",
	aggregate?:guild_member_aggregate_fields,
	nodes:guild_member[]
}

export type guild_member_aggregate_fields = {
	__typename?: "guild_member_aggregate_fields",
	avg?:guild_member_avg_fields,
	count?:number,
	max?:guild_member_max_fields,
	min?:guild_member_min_fields,
	stddev?:guild_member_stddev_fields,
	stddev_pop?:guild_member_stddev_pop_fields,
	stddev_samp?:guild_member_stddev_samp_fields,
	sum?:guild_member_sum_fields,
	var_pop?:guild_member_var_pop_fields,
	var_samp?:guild_member_var_samp_fields,
	variance?:guild_member_variance_fields
}

export type guild_member_aggregate_order_by = {
		avg?:guild_member_avg_order_by,
	count?:order_by,
	max?:guild_member_max_order_by,
	min?:guild_member_min_order_by,
	stddev?:guild_member_stddev_order_by,
	stddev_pop?:guild_member_stddev_pop_order_by,
	stddev_samp?:guild_member_stddev_samp_order_by,
	sum?:guild_member_sum_order_by,
	var_pop?:guild_member_var_pop_order_by,
	var_samp?:guild_member_var_samp_order_by,
	variance?:guild_member_variance_order_by
}

export type guild_member_arr_rel_insert_input = {
		data:guild_member_insert_input[],
	on_conflict?:guild_member_on_conflict
}

export type guild_member_avg_fields = {
	__typename?: "guild_member_avg_fields",
	guild_id?:number
}

export type guild_member_avg_order_by = {
		guild_id?:order_by
}

export type guild_member_bool_exp = {
		_and?:(guild_member_bool_exp | undefined)[],
	_not?:guild_member_bool_exp,
	_or?:(guild_member_bool_exp | undefined)[],
	guild?:guild_bool_exp,
	guild_id?:Int_comparison_exp,
	member_id?:uuid_comparison_exp,
	user?:user_bool_exp
}

export enum guild_member_constraint {
	guild_member_pkey = "guild_member_pkey"
}

export type guild_member_inc_input = {
		guild_id?:number
}

export type guild_member_insert_input = {
		guild?:guild_obj_rel_insert_input,
	guild_id?:number,
	member_id?:uuid,
	user?:user_obj_rel_insert_input
}

export type guild_member_max_fields = {
	__typename?: "guild_member_max_fields",
	guild_id?:number,
	member_id?:uuid
}

export type guild_member_max_order_by = {
		guild_id?:order_by,
	member_id?:order_by
}

export type guild_member_min_fields = {
	__typename?: "guild_member_min_fields",
	guild_id?:number,
	member_id?:uuid
}

export type guild_member_min_order_by = {
		guild_id?:order_by,
	member_id?:order_by
}

export type guild_member_mutation_response = {
	__typename?: "guild_member_mutation_response",
	affected_rows:number,
	returning:guild_member[]
}

export type guild_member_obj_rel_insert_input = {
		data:guild_member_insert_input,
	on_conflict?:guild_member_on_conflict
}

export type guild_member_on_conflict = {
		constraint:guild_member_constraint,
	update_columns:guild_member_update_column[],
	where?:guild_member_bool_exp
}

export type guild_member_order_by = {
		guild?:guild_order_by,
	guild_id?:order_by,
	member_id?:order_by,
	user?:user_order_by
}

export type guild_member_pk_columns_input = {
		guild_id:number,
	member_id:uuid
}

export enum guild_member_select_column {
	guild_id = "guild_id",
	member_id = "member_id"
}

export type guild_member_set_input = {
		guild_id?:number,
	member_id?:uuid
}

export type guild_member_stddev_fields = {
	__typename?: "guild_member_stddev_fields",
	guild_id?:number
}

export type guild_member_stddev_order_by = {
		guild_id?:order_by
}

export type guild_member_stddev_pop_fields = {
	__typename?: "guild_member_stddev_pop_fields",
	guild_id?:number
}

export type guild_member_stddev_pop_order_by = {
		guild_id?:order_by
}

export type guild_member_stddev_samp_fields = {
	__typename?: "guild_member_stddev_samp_fields",
	guild_id?:number
}

export type guild_member_stddev_samp_order_by = {
		guild_id?:order_by
}

export type guild_member_sum_fields = {
	__typename?: "guild_member_sum_fields",
	guild_id?:number
}

export type guild_member_sum_order_by = {
		guild_id?:order_by
}

export enum guild_member_update_column {
	guild_id = "guild_id",
	member_id = "member_id"
}

export type guild_member_var_pop_fields = {
	__typename?: "guild_member_var_pop_fields",
	guild_id?:number
}

export type guild_member_var_pop_order_by = {
		guild_id?:order_by
}

export type guild_member_var_samp_fields = {
	__typename?: "guild_member_var_samp_fields",
	guild_id?:number
}

export type guild_member_var_samp_order_by = {
		guild_id?:order_by
}

export type guild_member_variance_fields = {
	__typename?: "guild_member_variance_fields",
	guild_id?:number
}

export type guild_member_variance_order_by = {
		guild_id?:order_by
}

export type guild_min_fields = {
	__typename?: "guild_min_fields",
	created_at?:timestamptz,
	description?:string,
	id?:number,
	name?:string,
	updated_at?:timestamptz
}

export type guild_min_order_by = {
		created_at?:order_by,
	description?:order_by,
	id?:order_by,
	name?:order_by,
	updated_at?:order_by
}

export type guild_mutation_response = {
	__typename?: "guild_mutation_response",
	affected_rows:number,
	returning:guild[]
}

export type guild_obj_rel_insert_input = {
		data:guild_insert_input,
	on_conflict?:guild_on_conflict
}

export type guild_on_conflict = {
		constraint:guild_constraint,
	update_columns:guild_update_column[],
	where?:guild_bool_exp
}

export type guild_order_by = {
		created_at?:order_by,
	description?:order_by,
	guild_members_aggregate?:guild_member_aggregate_order_by,
	id?:order_by,
	meetings_aggregate?:meeting_aggregate_order_by,
	name?:order_by,
	updated_at?:order_by
}

export type guild_pk_columns_input = {
		id:number
}

export enum guild_select_column {
	created_at = "created_at",
	description = "description",
	id = "id",
	name = "name",
	updated_at = "updated_at"
}

export type guild_set_input = {
		created_at?:timestamptz,
	description?:string,
	id?:number,
	name?:string,
	updated_at?:timestamptz
}

export type guild_stddev_fields = {
	__typename?: "guild_stddev_fields",
	id?:number
}

export type guild_stddev_order_by = {
		id?:order_by
}

export type guild_stddev_pop_fields = {
	__typename?: "guild_stddev_pop_fields",
	id?:number
}

export type guild_stddev_pop_order_by = {
		id?:order_by
}

export type guild_stddev_samp_fields = {
	__typename?: "guild_stddev_samp_fields",
	id?:number
}

export type guild_stddev_samp_order_by = {
		id?:order_by
}

export type guild_sum_fields = {
	__typename?: "guild_sum_fields",
	id?:number
}

export type guild_sum_order_by = {
		id?:order_by
}

export enum guild_update_column {
	created_at = "created_at",
	description = "description",
	id = "id",
	name = "name",
	updated_at = "updated_at"
}

export type guild_var_pop_fields = {
	__typename?: "guild_var_pop_fields",
	id?:number
}

export type guild_var_pop_order_by = {
		id?:order_by
}

export type guild_var_samp_fields = {
	__typename?: "guild_var_samp_fields",
	id?:number
}

export type guild_var_samp_order_by = {
		id?:order_by
}

export type guild_variance_fields = {
	__typename?: "guild_variance_fields",
	id?:number
}

export type guild_variance_order_by = {
		id?:order_by
}

export type Int_comparison_exp = {
		_eq?:number,
	_gt?:number,
	_gte?:number,
	_in?:number[],
	_is_null?:boolean,
	_lt?:number,
	_lte?:number,
	_neq?:number,
	_nin?:number[]
}

export type meeting = {
	__typename?: "meeting",
	created_at:timestamptz,
	description:string,
	end_time?:timestamptz,
	guild?:guild,
	guild_id?:number,
	id:number,
	location?:string,
	organizer:user,
	organizer_id:uuid,
	participants:meeting_participant[],
	participants_aggregate:meeting_participant_aggregate,
	publication_time?:timestamptz,
	sphere_id:number,
	start_time?:timestamptz,
	title:string,
	updated_at:timestamptz
}

export type meeting_aggregate = {
	__typename?: "meeting_aggregate",
	aggregate?:meeting_aggregate_fields,
	nodes:meeting[]
}

export type meeting_aggregate_fields = {
	__typename?: "meeting_aggregate_fields",
	avg?:meeting_avg_fields,
	count?:number,
	max?:meeting_max_fields,
	min?:meeting_min_fields,
	stddev?:meeting_stddev_fields,
	stddev_pop?:meeting_stddev_pop_fields,
	stddev_samp?:meeting_stddev_samp_fields,
	sum?:meeting_sum_fields,
	var_pop?:meeting_var_pop_fields,
	var_samp?:meeting_var_samp_fields,
	variance?:meeting_variance_fields
}

export type meeting_aggregate_order_by = {
		avg?:meeting_avg_order_by,
	count?:order_by,
	max?:meeting_max_order_by,
	min?:meeting_min_order_by,
	stddev?:meeting_stddev_order_by,
	stddev_pop?:meeting_stddev_pop_order_by,
	stddev_samp?:meeting_stddev_samp_order_by,
	sum?:meeting_sum_order_by,
	var_pop?:meeting_var_pop_order_by,
	var_samp?:meeting_var_samp_order_by,
	variance?:meeting_variance_order_by
}

export type meeting_arr_rel_insert_input = {
		data:meeting_insert_input[],
	on_conflict?:meeting_on_conflict
}

export type meeting_avg_fields = {
	__typename?: "meeting_avg_fields",
	guild_id?:number,
	id?:number,
	sphere_id?:number
}

export type meeting_avg_order_by = {
		guild_id?:order_by,
	id?:order_by,
	sphere_id?:order_by
}

export type meeting_bool_exp = {
		_and?:(meeting_bool_exp | undefined)[],
	_not?:meeting_bool_exp,
	_or?:(meeting_bool_exp | undefined)[],
	created_at?:timestamptz_comparison_exp,
	description?:String_comparison_exp,
	end_time?:timestamptz_comparison_exp,
	guild?:guild_bool_exp,
	guild_id?:Int_comparison_exp,
	id?:Int_comparison_exp,
	location?:String_comparison_exp,
	organizer?:user_bool_exp,
	organizer_id?:uuid_comparison_exp,
	participants?:meeting_participant_bool_exp,
	publication_time?:timestamptz_comparison_exp,
	sphere_id?:Int_comparison_exp,
	start_time?:timestamptz_comparison_exp,
	title?:String_comparison_exp,
	updated_at?:timestamptz_comparison_exp
}

export enum meeting_constraint {
	meeting_pkey = "meeting_pkey"
}

export type meeting_inc_input = {
		guild_id?:number,
	id?:number,
	sphere_id?:number
}

export type meeting_insert_input = {
		created_at?:timestamptz,
	description?:string,
	end_time?:timestamptz,
	guild?:guild_obj_rel_insert_input,
	guild_id?:number,
	id?:number,
	location?:string,
	organizer?:user_obj_rel_insert_input,
	organizer_id?:uuid,
	participants?:meeting_participant_arr_rel_insert_input,
	publication_time?:timestamptz,
	sphere_id?:number,
	start_time?:timestamptz,
	title?:string,
	updated_at?:timestamptz
}

export type meeting_max_fields = {
	__typename?: "meeting_max_fields",
	created_at?:timestamptz,
	description?:string,
	end_time?:timestamptz,
	guild_id?:number,
	id?:number,
	location?:string,
	organizer_id?:uuid,
	publication_time?:timestamptz,
	sphere_id?:number,
	start_time?:timestamptz,
	title?:string,
	updated_at?:timestamptz
}

export type meeting_max_order_by = {
		created_at?:order_by,
	description?:order_by,
	end_time?:order_by,
	guild_id?:order_by,
	id?:order_by,
	location?:order_by,
	organizer_id?:order_by,
	publication_time?:order_by,
	sphere_id?:order_by,
	start_time?:order_by,
	title?:order_by,
	updated_at?:order_by
}

export type meeting_min_fields = {
	__typename?: "meeting_min_fields",
	created_at?:timestamptz,
	description?:string,
	end_time?:timestamptz,
	guild_id?:number,
	id?:number,
	location?:string,
	organizer_id?:uuid,
	publication_time?:timestamptz,
	sphere_id?:number,
	start_time?:timestamptz,
	title?:string,
	updated_at?:timestamptz
}

export type meeting_min_order_by = {
		created_at?:order_by,
	description?:order_by,
	end_time?:order_by,
	guild_id?:order_by,
	id?:order_by,
	location?:order_by,
	organizer_id?:order_by,
	publication_time?:order_by,
	sphere_id?:order_by,
	start_time?:order_by,
	title?:order_by,
	updated_at?:order_by
}

export type meeting_mutation_response = {
	__typename?: "meeting_mutation_response",
	affected_rows:number,
	returning:meeting[]
}

export type meeting_obj_rel_insert_input = {
		data:meeting_insert_input,
	on_conflict?:meeting_on_conflict
}

export type meeting_on_conflict = {
		constraint:meeting_constraint,
	update_columns:meeting_update_column[],
	where?:meeting_bool_exp
}

export type meeting_order_by = {
		created_at?:order_by,
	description?:order_by,
	end_time?:order_by,
	guild?:guild_order_by,
	guild_id?:order_by,
	id?:order_by,
	location?:order_by,
	organizer?:user_order_by,
	organizer_id?:order_by,
	participants_aggregate?:meeting_participant_aggregate_order_by,
	publication_time?:order_by,
	sphere_id?:order_by,
	start_time?:order_by,
	title?:order_by,
	updated_at?:order_by
}

export type meeting_participant = {
	__typename?: "meeting_participant",
	meeting:meeting,
	meeting_id:number,
	participant:user,
	participant_id:uuid
}

export type meeting_participant_aggregate = {
	__typename?: "meeting_participant_aggregate",
	aggregate?:meeting_participant_aggregate_fields,
	nodes:meeting_participant[]
}

export type meeting_participant_aggregate_fields = {
	__typename?: "meeting_participant_aggregate_fields",
	avg?:meeting_participant_avg_fields,
	count?:number,
	max?:meeting_participant_max_fields,
	min?:meeting_participant_min_fields,
	stddev?:meeting_participant_stddev_fields,
	stddev_pop?:meeting_participant_stddev_pop_fields,
	stddev_samp?:meeting_participant_stddev_samp_fields,
	sum?:meeting_participant_sum_fields,
	var_pop?:meeting_participant_var_pop_fields,
	var_samp?:meeting_participant_var_samp_fields,
	variance?:meeting_participant_variance_fields
}

export type meeting_participant_aggregate_order_by = {
		avg?:meeting_participant_avg_order_by,
	count?:order_by,
	max?:meeting_participant_max_order_by,
	min?:meeting_participant_min_order_by,
	stddev?:meeting_participant_stddev_order_by,
	stddev_pop?:meeting_participant_stddev_pop_order_by,
	stddev_samp?:meeting_participant_stddev_samp_order_by,
	sum?:meeting_participant_sum_order_by,
	var_pop?:meeting_participant_var_pop_order_by,
	var_samp?:meeting_participant_var_samp_order_by,
	variance?:meeting_participant_variance_order_by
}

export type meeting_participant_arr_rel_insert_input = {
		data:meeting_participant_insert_input[],
	on_conflict?:meeting_participant_on_conflict
}

export type meeting_participant_avg_fields = {
	__typename?: "meeting_participant_avg_fields",
	meeting_id?:number
}

export type meeting_participant_avg_order_by = {
		meeting_id?:order_by
}

export type meeting_participant_bool_exp = {
		_and?:(meeting_participant_bool_exp | undefined)[],
	_not?:meeting_participant_bool_exp,
	_or?:(meeting_participant_bool_exp | undefined)[],
	meeting?:meeting_bool_exp,
	meeting_id?:Int_comparison_exp,
	participant?:user_bool_exp,
	participant_id?:uuid_comparison_exp
}

export enum meeting_participant_constraint {
	meeting_participant_pkey = "meeting_participant_pkey"
}

export type meeting_participant_inc_input = {
		meeting_id?:number
}

export type meeting_participant_insert_input = {
		meeting?:meeting_obj_rel_insert_input,
	meeting_id?:number,
	participant?:user_obj_rel_insert_input,
	participant_id?:uuid
}

export type meeting_participant_max_fields = {
	__typename?: "meeting_participant_max_fields",
	meeting_id?:number,
	participant_id?:uuid
}

export type meeting_participant_max_order_by = {
		meeting_id?:order_by,
	participant_id?:order_by
}

export type meeting_participant_min_fields = {
	__typename?: "meeting_participant_min_fields",
	meeting_id?:number,
	participant_id?:uuid
}

export type meeting_participant_min_order_by = {
		meeting_id?:order_by,
	participant_id?:order_by
}

export type meeting_participant_mutation_response = {
	__typename?: "meeting_participant_mutation_response",
	affected_rows:number,
	returning:meeting_participant[]
}

export type meeting_participant_obj_rel_insert_input = {
		data:meeting_participant_insert_input,
	on_conflict?:meeting_participant_on_conflict
}

export type meeting_participant_on_conflict = {
		constraint:meeting_participant_constraint,
	update_columns:meeting_participant_update_column[],
	where?:meeting_participant_bool_exp
}

export type meeting_participant_order_by = {
		meeting?:meeting_order_by,
	meeting_id?:order_by,
	participant?:user_order_by,
	participant_id?:order_by
}

export type meeting_participant_pk_columns_input = {
		meeting_id:number,
	participant_id:uuid
}

export enum meeting_participant_select_column {
	meeting_id = "meeting_id",
	participant_id = "participant_id"
}

export type meeting_participant_set_input = {
		meeting_id?:number,
	participant_id?:uuid
}

export type meeting_participant_stddev_fields = {
	__typename?: "meeting_participant_stddev_fields",
	meeting_id?:number
}

export type meeting_participant_stddev_order_by = {
		meeting_id?:order_by
}

export type meeting_participant_stddev_pop_fields = {
	__typename?: "meeting_participant_stddev_pop_fields",
	meeting_id?:number
}

export type meeting_participant_stddev_pop_order_by = {
		meeting_id?:order_by
}

export type meeting_participant_stddev_samp_fields = {
	__typename?: "meeting_participant_stddev_samp_fields",
	meeting_id?:number
}

export type meeting_participant_stddev_samp_order_by = {
		meeting_id?:order_by
}

export type meeting_participant_sum_fields = {
	__typename?: "meeting_participant_sum_fields",
	meeting_id?:number
}

export type meeting_participant_sum_order_by = {
		meeting_id?:order_by
}

export enum meeting_participant_update_column {
	meeting_id = "meeting_id",
	participant_id = "participant_id"
}

export type meeting_participant_var_pop_fields = {
	__typename?: "meeting_participant_var_pop_fields",
	meeting_id?:number
}

export type meeting_participant_var_pop_order_by = {
		meeting_id?:order_by
}

export type meeting_participant_var_samp_fields = {
	__typename?: "meeting_participant_var_samp_fields",
	meeting_id?:number
}

export type meeting_participant_var_samp_order_by = {
		meeting_id?:order_by
}

export type meeting_participant_variance_fields = {
	__typename?: "meeting_participant_variance_fields",
	meeting_id?:number
}

export type meeting_participant_variance_order_by = {
		meeting_id?:order_by
}

export type meeting_pk_columns_input = {
		id:number
}

export enum meeting_select_column {
	created_at = "created_at",
	description = "description",
	end_time = "end_time",
	guild_id = "guild_id",
	id = "id",
	location = "location",
	organizer_id = "organizer_id",
	publication_time = "publication_time",
	sphere_id = "sphere_id",
	start_time = "start_time",
	title = "title",
	updated_at = "updated_at"
}

export type meeting_set_input = {
		created_at?:timestamptz,
	description?:string,
	end_time?:timestamptz,
	guild_id?:number,
	id?:number,
	location?:string,
	organizer_id?:uuid,
	publication_time?:timestamptz,
	sphere_id?:number,
	start_time?:timestamptz,
	title?:string,
	updated_at?:timestamptz
}

export type meeting_stddev_fields = {
	__typename?: "meeting_stddev_fields",
	guild_id?:number,
	id?:number,
	sphere_id?:number
}

export type meeting_stddev_order_by = {
		guild_id?:order_by,
	id?:order_by,
	sphere_id?:order_by
}

export type meeting_stddev_pop_fields = {
	__typename?: "meeting_stddev_pop_fields",
	guild_id?:number,
	id?:number,
	sphere_id?:number
}

export type meeting_stddev_pop_order_by = {
		guild_id?:order_by,
	id?:order_by,
	sphere_id?:order_by
}

export type meeting_stddev_samp_fields = {
	__typename?: "meeting_stddev_samp_fields",
	guild_id?:number,
	id?:number,
	sphere_id?:number
}

export type meeting_stddev_samp_order_by = {
		guild_id?:order_by,
	id?:order_by,
	sphere_id?:order_by
}

export type meeting_sum_fields = {
	__typename?: "meeting_sum_fields",
	guild_id?:number,
	id?:number,
	sphere_id?:number
}

export type meeting_sum_order_by = {
		guild_id?:order_by,
	id?:order_by,
	sphere_id?:order_by
}

export enum meeting_update_column {
	created_at = "created_at",
	description = "description",
	end_time = "end_time",
	guild_id = "guild_id",
	id = "id",
	location = "location",
	organizer_id = "organizer_id",
	publication_time = "publication_time",
	sphere_id = "sphere_id",
	start_time = "start_time",
	title = "title",
	updated_at = "updated_at"
}

export type meeting_var_pop_fields = {
	__typename?: "meeting_var_pop_fields",
	guild_id?:number,
	id?:number,
	sphere_id?:number
}

export type meeting_var_pop_order_by = {
		guild_id?:order_by,
	id?:order_by,
	sphere_id?:order_by
}

export type meeting_var_samp_fields = {
	__typename?: "meeting_var_samp_fields",
	guild_id?:number,
	id?:number,
	sphere_id?:number
}

export type meeting_var_samp_order_by = {
		guild_id?:order_by,
	id?:order_by,
	sphere_id?:order_by
}

export type meeting_variance_fields = {
	__typename?: "meeting_variance_fields",
	guild_id?:number,
	id?:number,
	sphere_id?:number
}

export type meeting_variance_order_by = {
		guild_id?:order_by,
	id?:order_by,
	sphere_id?:order_by
}

export type mutation_root = {
	__typename?: "mutation_root",
	delete_guild?:guild_mutation_response,
	delete_guild_by_pk?:guild,
	delete_guild_member?:guild_member_mutation_response,
	delete_guild_member_by_pk?:guild_member,
	delete_meeting?:meeting_mutation_response,
	delete_meeting_by_pk?:meeting,
	delete_meeting_participant?:meeting_participant_mutation_response,
	delete_meeting_participant_by_pk?:meeting_participant,
	delete_sphere?:sphere_mutation_response,
	delete_sphere_by_pk?:sphere,
	delete_user?:user_mutation_response,
	delete_user_by_pk?:user,
	insert_guild?:guild_mutation_response,
	insert_guild_member?:guild_member_mutation_response,
	insert_guild_member_one?:guild_member,
	insert_guild_one?:guild,
	insert_meeting?:meeting_mutation_response,
	insert_meeting_one?:meeting,
	insert_meeting_participant?:meeting_participant_mutation_response,
	insert_meeting_participant_one?:meeting_participant,
	insert_sphere?:sphere_mutation_response,
	insert_sphere_one?:sphere,
	insert_user?:user_mutation_response,
	insert_user_one?:user,
	update_guild?:guild_mutation_response,
	update_guild_by_pk?:guild,
	update_guild_member?:guild_member_mutation_response,
	update_guild_member_by_pk?:guild_member,
	update_meeting?:meeting_mutation_response,
	update_meeting_by_pk?:meeting,
	update_meeting_participant?:meeting_participant_mutation_response,
	update_meeting_participant_by_pk?:meeting_participant,
	update_sphere?:sphere_mutation_response,
	update_sphere_by_pk?:sphere,
	update_user?:user_mutation_response,
	update_user_by_pk?:user
}

export enum order_by {
	asc = "asc",
	asc_nulls_first = "asc_nulls_first",
	asc_nulls_last = "asc_nulls_last",
	desc = "desc",
	desc_nulls_first = "desc_nulls_first",
	desc_nulls_last = "desc_nulls_last"
}

export type query_root = {
	__typename?: "query_root",
	guild:guild[],
	guild_aggregate:guild_aggregate,
	guild_by_pk?:guild,
	guild_member:guild_member[],
	guild_member_aggregate:guild_member_aggregate,
	guild_member_by_pk?:guild_member,
	meeting:meeting[],
	meeting_aggregate:meeting_aggregate,
	meeting_by_pk?:meeting,
	meeting_participant:meeting_participant[],
	meeting_participant_aggregate:meeting_participant_aggregate,
	meeting_participant_by_pk?:meeting_participant,
	sphere:sphere[],
	sphere_aggregate:sphere_aggregate,
	sphere_by_pk?:sphere,
	user:user[],
	user_aggregate:user_aggregate,
	user_by_pk?:user
}

export type sphere = {
	__typename?: "sphere",
	domain?:string,
	id:number,
	name:string
}

export type sphere_aggregate = {
	__typename?: "sphere_aggregate",
	aggregate?:sphere_aggregate_fields,
	nodes:sphere[]
}

export type sphere_aggregate_fields = {
	__typename?: "sphere_aggregate_fields",
	avg?:sphere_avg_fields,
	count?:number,
	max?:sphere_max_fields,
	min?:sphere_min_fields,
	stddev?:sphere_stddev_fields,
	stddev_pop?:sphere_stddev_pop_fields,
	stddev_samp?:sphere_stddev_samp_fields,
	sum?:sphere_sum_fields,
	var_pop?:sphere_var_pop_fields,
	var_samp?:sphere_var_samp_fields,
	variance?:sphere_variance_fields
}

export type sphere_aggregate_order_by = {
		avg?:sphere_avg_order_by,
	count?:order_by,
	max?:sphere_max_order_by,
	min?:sphere_min_order_by,
	stddev?:sphere_stddev_order_by,
	stddev_pop?:sphere_stddev_pop_order_by,
	stddev_samp?:sphere_stddev_samp_order_by,
	sum?:sphere_sum_order_by,
	var_pop?:sphere_var_pop_order_by,
	var_samp?:sphere_var_samp_order_by,
	variance?:sphere_variance_order_by
}

export type sphere_arr_rel_insert_input = {
		data:sphere_insert_input[],
	on_conflict?:sphere_on_conflict
}

export type sphere_avg_fields = {
	__typename?: "sphere_avg_fields",
	id?:number
}

export type sphere_avg_order_by = {
		id?:order_by
}

export type sphere_bool_exp = {
		_and?:(sphere_bool_exp | undefined)[],
	_not?:sphere_bool_exp,
	_or?:(sphere_bool_exp | undefined)[],
	domain?:String_comparison_exp,
	id?:Int_comparison_exp,
	name?:String_comparison_exp
}

export enum sphere_constraint {
	sphere_pkey = "sphere_pkey"
}

export type sphere_inc_input = {
		id?:number
}

export type sphere_insert_input = {
		domain?:string,
	id?:number,
	name?:string
}

export type sphere_max_fields = {
	__typename?: "sphere_max_fields",
	domain?:string,
	id?:number,
	name?:string
}

export type sphere_max_order_by = {
		domain?:order_by,
	id?:order_by,
	name?:order_by
}

export type sphere_min_fields = {
	__typename?: "sphere_min_fields",
	domain?:string,
	id?:number,
	name?:string
}

export type sphere_min_order_by = {
		domain?:order_by,
	id?:order_by,
	name?:order_by
}

export type sphere_mutation_response = {
	__typename?: "sphere_mutation_response",
	affected_rows:number,
	returning:sphere[]
}

export type sphere_obj_rel_insert_input = {
		data:sphere_insert_input,
	on_conflict?:sphere_on_conflict
}

export type sphere_on_conflict = {
		constraint:sphere_constraint,
	update_columns:sphere_update_column[],
	where?:sphere_bool_exp
}

export type sphere_order_by = {
		domain?:order_by,
	id?:order_by,
	name?:order_by
}

export type sphere_pk_columns_input = {
		id:number
}

export enum sphere_select_column {
	domain = "domain",
	id = "id",
	name = "name"
}

export type sphere_set_input = {
		domain?:string,
	id?:number,
	name?:string
}

export type sphere_stddev_fields = {
	__typename?: "sphere_stddev_fields",
	id?:number
}

export type sphere_stddev_order_by = {
		id?:order_by
}

export type sphere_stddev_pop_fields = {
	__typename?: "sphere_stddev_pop_fields",
	id?:number
}

export type sphere_stddev_pop_order_by = {
		id?:order_by
}

export type sphere_stddev_samp_fields = {
	__typename?: "sphere_stddev_samp_fields",
	id?:number
}

export type sphere_stddev_samp_order_by = {
		id?:order_by
}

export type sphere_sum_fields = {
	__typename?: "sphere_sum_fields",
	id?:number
}

export type sphere_sum_order_by = {
		id?:order_by
}

export enum sphere_update_column {
	domain = "domain",
	id = "id",
	name = "name"
}

export type sphere_var_pop_fields = {
	__typename?: "sphere_var_pop_fields",
	id?:number
}

export type sphere_var_pop_order_by = {
		id?:order_by
}

export type sphere_var_samp_fields = {
	__typename?: "sphere_var_samp_fields",
	id?:number
}

export type sphere_var_samp_order_by = {
		id?:order_by
}

export type sphere_variance_fields = {
	__typename?: "sphere_variance_fields",
	id?:number
}

export type sphere_variance_order_by = {
		id?:order_by
}

export type String_comparison_exp = {
		_eq?:string,
	_gt?:string,
	_gte?:string,
	_ilike?:string,
	_in?:string[],
	_is_null?:boolean,
	_like?:string,
	_lt?:string,
	_lte?:string,
	_neq?:string,
	_nilike?:string,
	_nin?:string[],
	_nlike?:string,
	_nsimilar?:string,
	_similar?:string
}

export type subscription_root = {
	__typename?: "subscription_root",
	guild:guild[],
	guild_aggregate:guild_aggregate,
	guild_by_pk?:guild,
	guild_member:guild_member[],
	guild_member_aggregate:guild_member_aggregate,
	guild_member_by_pk?:guild_member,
	meeting:meeting[],
	meeting_aggregate:meeting_aggregate,
	meeting_by_pk?:meeting,
	meeting_participant:meeting_participant[],
	meeting_participant_aggregate:meeting_participant_aggregate,
	meeting_participant_by_pk?:meeting_participant,
	sphere:sphere[],
	sphere_aggregate:sphere_aggregate,
	sphere_by_pk?:sphere,
	user:user[],
	user_aggregate:user_aggregate,
	user_by_pk?:user
}

export type timestamptz = any

export type timestamptz_comparison_exp = {
		_eq?:timestamptz,
	_gt?:timestamptz,
	_gte?:timestamptz,
	_in?:timestamptz[],
	_is_null?:boolean,
	_lt?:timestamptz,
	_lte?:timestamptz,
	_neq?:timestamptz,
	_nin?:timestamptz[]
}

export type user = {
	__typename?: "user",
	auth0_id?:string,
	created_at:timestamptz,
	email:string,
	guilds:guild_member[],
	guilds_aggregate:guild_member_aggregate,
	last_login?:timestamptz,
	meetings:meeting_participant[],
	meetings_aggregate:meeting_participant_aggregate,
	name:string,
	organized_meetings:meeting[],
	organized_meetings_aggregate:meeting_aggregate,
	uuid:uuid
}

export type user_aggregate = {
	__typename?: "user_aggregate",
	aggregate?:user_aggregate_fields,
	nodes:user[]
}

export type user_aggregate_fields = {
	__typename?: "user_aggregate_fields",
	count?:number,
	max?:user_max_fields,
	min?:user_min_fields
}

export type user_aggregate_order_by = {
		count?:order_by,
	max?:user_max_order_by,
	min?:user_min_order_by
}

export type user_arr_rel_insert_input = {
		data:user_insert_input[],
	on_conflict?:user_on_conflict
}

export type user_bool_exp = {
		_and?:(user_bool_exp | undefined)[],
	_not?:user_bool_exp,
	_or?:(user_bool_exp | undefined)[],
	auth0_id?:String_comparison_exp,
	created_at?:timestamptz_comparison_exp,
	email?:String_comparison_exp,
	guilds?:guild_member_bool_exp,
	last_login?:timestamptz_comparison_exp,
	meetings?:meeting_participant_bool_exp,
	name?:String_comparison_exp,
	organized_meetings?:meeting_bool_exp,
	uuid?:uuid_comparison_exp
}

export enum user_constraint {
	user_email_key = "user_email_key",
	user_pkey = "user_pkey"
}

export type user_insert_input = {
		auth0_id?:string,
	created_at?:timestamptz,
	email?:string,
	guilds?:guild_member_arr_rel_insert_input,
	last_login?:timestamptz,
	meetings?:meeting_participant_arr_rel_insert_input,
	name?:string,
	organized_meetings?:meeting_arr_rel_insert_input,
	uuid?:uuid
}

export type user_max_fields = {
	__typename?: "user_max_fields",
	auth0_id?:string,
	created_at?:timestamptz,
	email?:string,
	last_login?:timestamptz,
	name?:string,
	uuid?:uuid
}

export type user_max_order_by = {
		auth0_id?:order_by,
	created_at?:order_by,
	email?:order_by,
	last_login?:order_by,
	name?:order_by,
	uuid?:order_by
}

export type user_min_fields = {
	__typename?: "user_min_fields",
	auth0_id?:string,
	created_at?:timestamptz,
	email?:string,
	last_login?:timestamptz,
	name?:string,
	uuid?:uuid
}

export type user_min_order_by = {
		auth0_id?:order_by,
	created_at?:order_by,
	email?:order_by,
	last_login?:order_by,
	name?:order_by,
	uuid?:order_by
}

export type user_mutation_response = {
	__typename?: "user_mutation_response",
	affected_rows:number,
	returning:user[]
}

export type user_obj_rel_insert_input = {
		data:user_insert_input,
	on_conflict?:user_on_conflict
}

export type user_on_conflict = {
		constraint:user_constraint,
	update_columns:user_update_column[],
	where?:user_bool_exp
}

export type user_order_by = {
		auth0_id?:order_by,
	created_at?:order_by,
	email?:order_by,
	guilds_aggregate?:guild_member_aggregate_order_by,
	last_login?:order_by,
	meetings_aggregate?:meeting_participant_aggregate_order_by,
	name?:order_by,
	organized_meetings_aggregate?:meeting_aggregate_order_by,
	uuid?:order_by
}

export type user_pk_columns_input = {
		uuid:uuid
}

export enum user_select_column {
	auth0_id = "auth0_id",
	created_at = "created_at",
	email = "email",
	last_login = "last_login",
	name = "name",
	uuid = "uuid"
}

export type user_set_input = {
		auth0_id?:string,
	created_at?:timestamptz,
	email?:string,
	last_login?:timestamptz,
	name?:string,
	uuid?:uuid
}

export enum user_update_column {
	auth0_id = "auth0_id",
	created_at = "created_at",
	email = "email",
	last_login = "last_login",
	name = "name",
	uuid = "uuid"
}

export type uuid = any

export type uuid_comparison_exp = {
		_eq?:uuid,
	_gt?:uuid,
	_gte?:uuid,
	_in?:uuid[],
	_is_null?:boolean,
	_lt?:uuid,
	_lte?:uuid,
	_neq?:uuid,
	_nin?:uuid[]
}

export const AllTypesProps: Record<string,any> = {
	guild:{
		guild_members:{
			distinct_on:{
				type:"guild_member_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"guild_member_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"guild_member_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		guild_members_aggregate:{
			distinct_on:{
				type:"guild_member_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"guild_member_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"guild_member_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings:{
			distinct_on:{
				type:"meeting_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_aggregate:{
			distinct_on:{
				type:"meeting_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	guild_aggregate_fields:{
		count:{
			columns:{
				type:"guild_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			distinct:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	guild_aggregate_order_by:{
		avg:{
			type:"guild_avg_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		count:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		max:{
			type:"guild_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"guild_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"guild_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"guild_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"guild_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"guild_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"guild_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"guild_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"guild_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_arr_rel_insert_input:{
		data:{
			type:"guild_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"guild_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_avg_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_bool_exp:{
		_and:{
			type:"guild_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"guild_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"guild_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		created_at:{
			type:"timestamptz_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild_members:{
			type:"guild_member_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings:{
			type:"meeting_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		updated_at:{
			type:"timestamptz_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_constraint: "enum",
	guild_inc_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_insert_input:{
		created_at:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild_members:{
			type:"guild_member_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings:{
			type:"meeting_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		updated_at:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_max_order_by:{
		created_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		updated_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_aggregate_fields:{
		count:{
			columns:{
				type:"guild_member_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			distinct:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	guild_member_aggregate_order_by:{
		avg:{
			type:"guild_member_avg_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		count:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		max:{
			type:"guild_member_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"guild_member_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"guild_member_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"guild_member_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"guild_member_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"guild_member_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"guild_member_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"guild_member_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"guild_member_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_arr_rel_insert_input:{
		data:{
			type:"guild_member_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"guild_member_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_avg_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_bool_exp:{
		_and:{
			type:"guild_member_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"guild_member_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"guild_member_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		guild:{
			type:"guild_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild_id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		member_id:{
			type:"uuid_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_constraint: "enum",
	guild_member_inc_input:{
		guild_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_insert_input:{
		guild:{
			type:"guild_obj_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		member_id:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"user_obj_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_max_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		member_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_min_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		member_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_obj_rel_insert_input:{
		data:{
			type:"guild_member_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"guild_member_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_on_conflict:{
		constraint:{
			type:"guild_member_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"guild_member_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"guild_member_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_order_by:{
		guild:{
			type:"guild_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		member_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"user_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_pk_columns_input:{
		guild_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		member_id:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	guild_member_select_column: "enum",
	guild_member_set_input:{
		guild_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		member_id:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_stddev_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_stddev_pop_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_stddev_samp_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_sum_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_update_column: "enum",
	guild_member_var_pop_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_var_samp_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_member_variance_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_min_order_by:{
		created_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		updated_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_obj_rel_insert_input:{
		data:{
			type:"guild_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"guild_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_on_conflict:{
		constraint:{
			type:"guild_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"guild_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"guild_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_order_by:{
		created_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild_members_aggregate:{
			type:"guild_member_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_aggregate:{
			type:"meeting_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		updated_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_pk_columns_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	guild_select_column: "enum",
	guild_set_input:{
		created_at:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		updated_at:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_stddev_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_stddev_pop_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_stddev_samp_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_sum_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_update_column: "enum",
	guild_var_pop_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_var_samp_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	guild_variance_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Int_comparison_exp:{
		_eq:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gt:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gte:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		_in:{
			type:"Int",
			array:true,
			arrayRequired:false,
			required:true
		},
		_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lt:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lte:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		_neq:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		_nin:{
			type:"Int",
			array:true,
			arrayRequired:false,
			required:true
		}
	},
	meeting:{
		participants:{
			distinct_on:{
				type:"meeting_participant_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_participant_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_participant_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		participants_aggregate:{
			distinct_on:{
				type:"meeting_participant_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_participant_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_participant_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	meeting_aggregate_fields:{
		count:{
			columns:{
				type:"meeting_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			distinct:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	meeting_aggregate_order_by:{
		avg:{
			type:"meeting_avg_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		count:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		max:{
			type:"meeting_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"meeting_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"meeting_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"meeting_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"meeting_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"meeting_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"meeting_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"meeting_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"meeting_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_arr_rel_insert_input:{
		data:{
			type:"meeting_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"meeting_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_avg_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_bool_exp:{
		_and:{
			type:"meeting_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"meeting_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"meeting_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		created_at:{
			type:"timestamptz_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		end_time:{
			type:"timestamptz_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild:{
			type:"guild_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild_id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		location:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		organizer:{
			type:"user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		organizer_id:{
			type:"uuid_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		participants:{
			type:"meeting_participant_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		publication_time:{
			type:"timestamptz_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		start_time:{
			type:"timestamptz_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		updated_at:{
			type:"timestamptz_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_constraint: "enum",
	meeting_inc_input:{
		guild_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_insert_input:{
		created_at:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		end_time:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild:{
			type:"guild_obj_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		location:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		organizer:{
			type:"user_obj_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		organizer_id:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		},
		participants:{
			type:"meeting_participant_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		publication_time:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		start_time:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		updated_at:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_max_order_by:{
		created_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		end_time:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		location:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		organizer_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		publication_time:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		start_time:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		updated_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_min_order_by:{
		created_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		end_time:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		location:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		organizer_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		publication_time:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		start_time:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		updated_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_obj_rel_insert_input:{
		data:{
			type:"meeting_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"meeting_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_on_conflict:{
		constraint:{
			type:"meeting_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"meeting_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"meeting_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_order_by:{
		created_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		end_time:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild:{
			type:"guild_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		location:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		organizer:{
			type:"user_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		organizer_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		participants_aggregate:{
			type:"meeting_participant_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		publication_time:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		start_time:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		updated_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_aggregate_fields:{
		count:{
			columns:{
				type:"meeting_participant_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			distinct:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	meeting_participant_aggregate_order_by:{
		avg:{
			type:"meeting_participant_avg_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		count:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		max:{
			type:"meeting_participant_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"meeting_participant_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"meeting_participant_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"meeting_participant_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"meeting_participant_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"meeting_participant_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"meeting_participant_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"meeting_participant_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"meeting_participant_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_arr_rel_insert_input:{
		data:{
			type:"meeting_participant_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"meeting_participant_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_avg_order_by:{
		meeting_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_bool_exp:{
		_and:{
			type:"meeting_participant_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"meeting_participant_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"meeting_participant_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		meeting:{
			type:"meeting_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		meeting_id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		participant:{
			type:"user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		participant_id:{
			type:"uuid_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_constraint: "enum",
	meeting_participant_inc_input:{
		meeting_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_insert_input:{
		meeting:{
			type:"meeting_obj_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		meeting_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		participant:{
			type:"user_obj_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		participant_id:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_max_order_by:{
		meeting_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		participant_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_min_order_by:{
		meeting_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		participant_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_obj_rel_insert_input:{
		data:{
			type:"meeting_participant_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"meeting_participant_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_on_conflict:{
		constraint:{
			type:"meeting_participant_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"meeting_participant_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"meeting_participant_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_order_by:{
		meeting:{
			type:"meeting_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		meeting_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		participant:{
			type:"user_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		participant_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_pk_columns_input:{
		meeting_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		participant_id:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	meeting_participant_select_column: "enum",
	meeting_participant_set_input:{
		meeting_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		participant_id:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_stddev_order_by:{
		meeting_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_stddev_pop_order_by:{
		meeting_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_stddev_samp_order_by:{
		meeting_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_sum_order_by:{
		meeting_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_update_column: "enum",
	meeting_participant_var_pop_order_by:{
		meeting_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_var_samp_order_by:{
		meeting_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_participant_variance_order_by:{
		meeting_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_pk_columns_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	meeting_select_column: "enum",
	meeting_set_input:{
		created_at:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		end_time:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		guild_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		location:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		organizer_id:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		},
		publication_time:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		start_time:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		updated_at:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_stddev_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_stddev_pop_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_stddev_samp_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_sum_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_update_column: "enum",
	meeting_var_pop_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_var_samp_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meeting_variance_order_by:{
		guild_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	mutation_root:{
		delete_guild:{
			where:{
				type:"guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_guild_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_guild_member:{
			where:{
				type:"guild_member_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_guild_member_by_pk:{
			guild_id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			member_id:{
				type:"uuid",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_meeting:{
			where:{
				type:"meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_meeting_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_meeting_participant:{
			where:{
				type:"meeting_participant_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_meeting_participant_by_pk:{
			meeting_id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			participant_id:{
				type:"uuid",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_sphere:{
			where:{
				type:"sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_sphere_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_user:{
			where:{
				type:"user_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_user_by_pk:{
			uuid:{
				type:"uuid",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		insert_guild:{
			objects:{
				type:"guild_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"guild_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_guild_member:{
			objects:{
				type:"guild_member_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"guild_member_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_guild_member_one:{
			object:{
				type:"guild_member_insert_input",
				array:false,
				arrayRequired:false,
				required:true
			},
			on_conflict:{
				type:"guild_member_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_guild_one:{
			object:{
				type:"guild_insert_input",
				array:false,
				arrayRequired:false,
				required:true
			},
			on_conflict:{
				type:"guild_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_meeting:{
			objects:{
				type:"meeting_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"meeting_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_meeting_one:{
			object:{
				type:"meeting_insert_input",
				array:false,
				arrayRequired:false,
				required:true
			},
			on_conflict:{
				type:"meeting_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_meeting_participant:{
			objects:{
				type:"meeting_participant_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"meeting_participant_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_meeting_participant_one:{
			object:{
				type:"meeting_participant_insert_input",
				array:false,
				arrayRequired:false,
				required:true
			},
			on_conflict:{
				type:"meeting_participant_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_sphere:{
			objects:{
				type:"sphere_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"sphere_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_sphere_one:{
			object:{
				type:"sphere_insert_input",
				array:false,
				arrayRequired:false,
				required:true
			},
			on_conflict:{
				type:"sphere_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_user:{
			objects:{
				type:"user_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"user_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_user_one:{
			object:{
				type:"user_insert_input",
				array:false,
				arrayRequired:false,
				required:true
			},
			on_conflict:{
				type:"user_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		update_guild:{
			_inc:{
				type:"guild_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"guild_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_guild_by_pk:{
			_inc:{
				type:"guild_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"guild_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			pk_columns:{
				type:"guild_pk_columns_input",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_guild_member:{
			_inc:{
				type:"guild_member_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"guild_member_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"guild_member_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_guild_member_by_pk:{
			_inc:{
				type:"guild_member_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"guild_member_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			pk_columns:{
				type:"guild_member_pk_columns_input",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_meeting:{
			_inc:{
				type:"meeting_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"meeting_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_meeting_by_pk:{
			_inc:{
				type:"meeting_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"meeting_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			pk_columns:{
				type:"meeting_pk_columns_input",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_meeting_participant:{
			_inc:{
				type:"meeting_participant_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"meeting_participant_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"meeting_participant_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_meeting_participant_by_pk:{
			_inc:{
				type:"meeting_participant_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"meeting_participant_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			pk_columns:{
				type:"meeting_participant_pk_columns_input",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_sphere:{
			_inc:{
				type:"sphere_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"sphere_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_sphere_by_pk:{
			_inc:{
				type:"sphere_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"sphere_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			pk_columns:{
				type:"sphere_pk_columns_input",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_user:{
			_set:{
				type:"user_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"user_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_user_by_pk:{
			_set:{
				type:"user_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			pk_columns:{
				type:"user_pk_columns_input",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	order_by: "enum",
	query_root:{
		guild:{
			distinct_on:{
				type:"guild_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"guild_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		guild_aggregate:{
			distinct_on:{
				type:"guild_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"guild_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		guild_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		guild_member:{
			distinct_on:{
				type:"guild_member_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"guild_member_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"guild_member_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		guild_member_aggregate:{
			distinct_on:{
				type:"guild_member_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"guild_member_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"guild_member_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		guild_member_by_pk:{
			guild_id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			member_id:{
				type:"uuid",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meeting:{
			distinct_on:{
				type:"meeting_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meeting_aggregate:{
			distinct_on:{
				type:"meeting_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meeting_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meeting_participant:{
			distinct_on:{
				type:"meeting_participant_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_participant_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_participant_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meeting_participant_aggregate:{
			distinct_on:{
				type:"meeting_participant_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_participant_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_participant_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meeting_participant_by_pk:{
			meeting_id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			participant_id:{
				type:"uuid",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		sphere:{
			distinct_on:{
				type:"sphere_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"sphere_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		sphere_aggregate:{
			distinct_on:{
				type:"sphere_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"sphere_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		sphere_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		user:{
			distinct_on:{
				type:"user_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user_aggregate:{
			distinct_on:{
				type:"user_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user_by_pk:{
			uuid:{
				type:"uuid",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	sphere_aggregate_fields:{
		count:{
			columns:{
				type:"sphere_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			distinct:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	sphere_aggregate_order_by:{
		avg:{
			type:"sphere_avg_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		count:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		max:{
			type:"sphere_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"sphere_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"sphere_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"sphere_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"sphere_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"sphere_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"sphere_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"sphere_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"sphere_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_arr_rel_insert_input:{
		data:{
			type:"sphere_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"sphere_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_avg_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_bool_exp:{
		_and:{
			type:"sphere_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"sphere_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"sphere_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		domain:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_constraint: "enum",
	sphere_inc_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_insert_input:{
		domain:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_max_order_by:{
		domain:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_min_order_by:{
		domain:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_obj_rel_insert_input:{
		data:{
			type:"sphere_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"sphere_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_on_conflict:{
		constraint:{
			type:"sphere_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"sphere_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"sphere_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_order_by:{
		domain:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_pk_columns_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	sphere_select_column: "enum",
	sphere_set_input:{
		domain:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_stddev_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_stddev_pop_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_stddev_samp_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_sum_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_update_column: "enum",
	sphere_var_pop_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_var_samp_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	sphere_variance_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	String_comparison_exp:{
		_eq:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gte:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_ilike:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_like:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lte:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_neq:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_nilike:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_nin:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_nlike:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_nsimilar:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_similar:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	subscription_root:{
		guild:{
			distinct_on:{
				type:"guild_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"guild_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		guild_aggregate:{
			distinct_on:{
				type:"guild_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"guild_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		guild_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		guild_member:{
			distinct_on:{
				type:"guild_member_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"guild_member_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"guild_member_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		guild_member_aggregate:{
			distinct_on:{
				type:"guild_member_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"guild_member_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"guild_member_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		guild_member_by_pk:{
			guild_id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			member_id:{
				type:"uuid",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meeting:{
			distinct_on:{
				type:"meeting_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meeting_aggregate:{
			distinct_on:{
				type:"meeting_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meeting_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meeting_participant:{
			distinct_on:{
				type:"meeting_participant_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_participant_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_participant_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meeting_participant_aggregate:{
			distinct_on:{
				type:"meeting_participant_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_participant_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_participant_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meeting_participant_by_pk:{
			meeting_id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			participant_id:{
				type:"uuid",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		sphere:{
			distinct_on:{
				type:"sphere_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"sphere_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		sphere_aggregate:{
			distinct_on:{
				type:"sphere_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"sphere_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		sphere_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		user:{
			distinct_on:{
				type:"user_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user_aggregate:{
			distinct_on:{
				type:"user_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user_by_pk:{
			uuid:{
				type:"uuid",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	timestamptz: "String",
	timestamptz_comparison_exp:{
		_eq:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gt:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gte:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		_in:{
			type:"timestamptz",
			array:true,
			arrayRequired:false,
			required:true
		},
		_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lt:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lte:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		_neq:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		_nin:{
			type:"timestamptz",
			array:true,
			arrayRequired:false,
			required:true
		}
	},
	user:{
		guilds:{
			distinct_on:{
				type:"guild_member_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"guild_member_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"guild_member_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		guilds_aggregate:{
			distinct_on:{
				type:"guild_member_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"guild_member_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"guild_member_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings:{
			distinct_on:{
				type:"meeting_participant_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_participant_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_participant_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_aggregate:{
			distinct_on:{
				type:"meeting_participant_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_participant_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_participant_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		organized_meetings:{
			distinct_on:{
				type:"meeting_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		organized_meetings_aggregate:{
			distinct_on:{
				type:"meeting_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	user_aggregate_fields:{
		count:{
			columns:{
				type:"user_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			distinct:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	user_aggregate_order_by:{
		count:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		max:{
			type:"user_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"user_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_arr_rel_insert_input:{
		data:{
			type:"user_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"user_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_bool_exp:{
		_and:{
			type:"user_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"user_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		auth0_id:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		created_at:{
			type:"timestamptz_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		email:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		guilds:{
			type:"guild_member_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		last_login:{
			type:"timestamptz_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings:{
			type:"meeting_participant_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		organized_meetings:{
			type:"meeting_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		uuid:{
			type:"uuid_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_constraint: "enum",
	user_insert_input:{
		auth0_id:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		created_at:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		email:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		guilds:{
			type:"guild_member_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		last_login:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings:{
			type:"meeting_participant_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		organized_meetings:{
			type:"meeting_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		uuid:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_max_order_by:{
		auth0_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		created_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		email:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		last_login:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		uuid:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_min_order_by:{
		auth0_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		created_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		email:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		last_login:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		uuid:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_obj_rel_insert_input:{
		data:{
			type:"user_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"user_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_on_conflict:{
		constraint:{
			type:"user_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"user_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_order_by:{
		auth0_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		created_at:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		email:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		guilds_aggregate:{
			type:"guild_member_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		last_login:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_aggregate:{
			type:"meeting_participant_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		organized_meetings_aggregate:{
			type:"meeting_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		uuid:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_pk_columns_input:{
		uuid:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	user_select_column: "enum",
	user_set_input:{
		auth0_id:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		created_at:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		email:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		last_login:{
			type:"timestamptz",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		uuid:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_update_column: "enum",
	uuid: "String",
	uuid_comparison_exp:{
		_eq:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gt:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gte:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		},
		_in:{
			type:"uuid",
			array:true,
			arrayRequired:false,
			required:true
		},
		_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lt:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lte:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		},
		_neq:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		},
		_nin:{
			type:"uuid",
			array:true,
			arrayRequired:false,
			required:true
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	guild:{
		created_at:"timestamptz",
		description:"String",
		guild_members:"guild_member",
		guild_members_aggregate:"guild_member_aggregate",
		id:"Int",
		meetings:"meeting",
		meetings_aggregate:"meeting_aggregate",
		name:"String",
		updated_at:"timestamptz"
	},
	guild_aggregate:{
		aggregate:"guild_aggregate_fields",
		nodes:"guild"
	},
	guild_aggregate_fields:{
		avg:"guild_avg_fields",
		count:"Int",
		max:"guild_max_fields",
		min:"guild_min_fields",
		stddev:"guild_stddev_fields",
		stddev_pop:"guild_stddev_pop_fields",
		stddev_samp:"guild_stddev_samp_fields",
		sum:"guild_sum_fields",
		var_pop:"guild_var_pop_fields",
		var_samp:"guild_var_samp_fields",
		variance:"guild_variance_fields"
	},
	guild_avg_fields:{
		id:"Float"
	},
	guild_max_fields:{
		created_at:"timestamptz",
		description:"String",
		id:"Int",
		name:"String",
		updated_at:"timestamptz"
	},
	guild_member:{
		guild:"guild",
		guild_id:"Int",
		member_id:"uuid",
		user:"user"
	},
	guild_member_aggregate:{
		aggregate:"guild_member_aggregate_fields",
		nodes:"guild_member"
	},
	guild_member_aggregate_fields:{
		avg:"guild_member_avg_fields",
		count:"Int",
		max:"guild_member_max_fields",
		min:"guild_member_min_fields",
		stddev:"guild_member_stddev_fields",
		stddev_pop:"guild_member_stddev_pop_fields",
		stddev_samp:"guild_member_stddev_samp_fields",
		sum:"guild_member_sum_fields",
		var_pop:"guild_member_var_pop_fields",
		var_samp:"guild_member_var_samp_fields",
		variance:"guild_member_variance_fields"
	},
	guild_member_avg_fields:{
		guild_id:"Float"
	},
	guild_member_max_fields:{
		guild_id:"Int",
		member_id:"uuid"
	},
	guild_member_min_fields:{
		guild_id:"Int",
		member_id:"uuid"
	},
	guild_member_mutation_response:{
		affected_rows:"Int",
		returning:"guild_member"
	},
	guild_member_stddev_fields:{
		guild_id:"Float"
	},
	guild_member_stddev_pop_fields:{
		guild_id:"Float"
	},
	guild_member_stddev_samp_fields:{
		guild_id:"Float"
	},
	guild_member_sum_fields:{
		guild_id:"Int"
	},
	guild_member_var_pop_fields:{
		guild_id:"Float"
	},
	guild_member_var_samp_fields:{
		guild_id:"Float"
	},
	guild_member_variance_fields:{
		guild_id:"Float"
	},
	guild_min_fields:{
		created_at:"timestamptz",
		description:"String",
		id:"Int",
		name:"String",
		updated_at:"timestamptz"
	},
	guild_mutation_response:{
		affected_rows:"Int",
		returning:"guild"
	},
	guild_stddev_fields:{
		id:"Float"
	},
	guild_stddev_pop_fields:{
		id:"Float"
	},
	guild_stddev_samp_fields:{
		id:"Float"
	},
	guild_sum_fields:{
		id:"Int"
	},
	guild_var_pop_fields:{
		id:"Float"
	},
	guild_var_samp_fields:{
		id:"Float"
	},
	guild_variance_fields:{
		id:"Float"
	},
	meeting:{
		created_at:"timestamptz",
		description:"String",
		end_time:"timestamptz",
		guild:"guild",
		guild_id:"Int",
		id:"Int",
		location:"String",
		organizer:"user",
		organizer_id:"uuid",
		participants:"meeting_participant",
		participants_aggregate:"meeting_participant_aggregate",
		publication_time:"timestamptz",
		sphere_id:"Int",
		start_time:"timestamptz",
		title:"String",
		updated_at:"timestamptz"
	},
	meeting_aggregate:{
		aggregate:"meeting_aggregate_fields",
		nodes:"meeting"
	},
	meeting_aggregate_fields:{
		avg:"meeting_avg_fields",
		count:"Int",
		max:"meeting_max_fields",
		min:"meeting_min_fields",
		stddev:"meeting_stddev_fields",
		stddev_pop:"meeting_stddev_pop_fields",
		stddev_samp:"meeting_stddev_samp_fields",
		sum:"meeting_sum_fields",
		var_pop:"meeting_var_pop_fields",
		var_samp:"meeting_var_samp_fields",
		variance:"meeting_variance_fields"
	},
	meeting_avg_fields:{
		guild_id:"Float",
		id:"Float",
		sphere_id:"Float"
	},
	meeting_max_fields:{
		created_at:"timestamptz",
		description:"String",
		end_time:"timestamptz",
		guild_id:"Int",
		id:"Int",
		location:"String",
		organizer_id:"uuid",
		publication_time:"timestamptz",
		sphere_id:"Int",
		start_time:"timestamptz",
		title:"String",
		updated_at:"timestamptz"
	},
	meeting_min_fields:{
		created_at:"timestamptz",
		description:"String",
		end_time:"timestamptz",
		guild_id:"Int",
		id:"Int",
		location:"String",
		organizer_id:"uuid",
		publication_time:"timestamptz",
		sphere_id:"Int",
		start_time:"timestamptz",
		title:"String",
		updated_at:"timestamptz"
	},
	meeting_mutation_response:{
		affected_rows:"Int",
		returning:"meeting"
	},
	meeting_participant:{
		meeting:"meeting",
		meeting_id:"Int",
		participant:"user",
		participant_id:"uuid"
	},
	meeting_participant_aggregate:{
		aggregate:"meeting_participant_aggregate_fields",
		nodes:"meeting_participant"
	},
	meeting_participant_aggregate_fields:{
		avg:"meeting_participant_avg_fields",
		count:"Int",
		max:"meeting_participant_max_fields",
		min:"meeting_participant_min_fields",
		stddev:"meeting_participant_stddev_fields",
		stddev_pop:"meeting_participant_stddev_pop_fields",
		stddev_samp:"meeting_participant_stddev_samp_fields",
		sum:"meeting_participant_sum_fields",
		var_pop:"meeting_participant_var_pop_fields",
		var_samp:"meeting_participant_var_samp_fields",
		variance:"meeting_participant_variance_fields"
	},
	meeting_participant_avg_fields:{
		meeting_id:"Float"
	},
	meeting_participant_max_fields:{
		meeting_id:"Int",
		participant_id:"uuid"
	},
	meeting_participant_min_fields:{
		meeting_id:"Int",
		participant_id:"uuid"
	},
	meeting_participant_mutation_response:{
		affected_rows:"Int",
		returning:"meeting_participant"
	},
	meeting_participant_stddev_fields:{
		meeting_id:"Float"
	},
	meeting_participant_stddev_pop_fields:{
		meeting_id:"Float"
	},
	meeting_participant_stddev_samp_fields:{
		meeting_id:"Float"
	},
	meeting_participant_sum_fields:{
		meeting_id:"Int"
	},
	meeting_participant_var_pop_fields:{
		meeting_id:"Float"
	},
	meeting_participant_var_samp_fields:{
		meeting_id:"Float"
	},
	meeting_participant_variance_fields:{
		meeting_id:"Float"
	},
	meeting_stddev_fields:{
		guild_id:"Float",
		id:"Float",
		sphere_id:"Float"
	},
	meeting_stddev_pop_fields:{
		guild_id:"Float",
		id:"Float",
		sphere_id:"Float"
	},
	meeting_stddev_samp_fields:{
		guild_id:"Float",
		id:"Float",
		sphere_id:"Float"
	},
	meeting_sum_fields:{
		guild_id:"Int",
		id:"Int",
		sphere_id:"Int"
	},
	meeting_var_pop_fields:{
		guild_id:"Float",
		id:"Float",
		sphere_id:"Float"
	},
	meeting_var_samp_fields:{
		guild_id:"Float",
		id:"Float",
		sphere_id:"Float"
	},
	meeting_variance_fields:{
		guild_id:"Float",
		id:"Float",
		sphere_id:"Float"
	},
	mutation_root:{
		delete_guild:"guild_mutation_response",
		delete_guild_by_pk:"guild",
		delete_guild_member:"guild_member_mutation_response",
		delete_guild_member_by_pk:"guild_member",
		delete_meeting:"meeting_mutation_response",
		delete_meeting_by_pk:"meeting",
		delete_meeting_participant:"meeting_participant_mutation_response",
		delete_meeting_participant_by_pk:"meeting_participant",
		delete_sphere:"sphere_mutation_response",
		delete_sphere_by_pk:"sphere",
		delete_user:"user_mutation_response",
		delete_user_by_pk:"user",
		insert_guild:"guild_mutation_response",
		insert_guild_member:"guild_member_mutation_response",
		insert_guild_member_one:"guild_member",
		insert_guild_one:"guild",
		insert_meeting:"meeting_mutation_response",
		insert_meeting_one:"meeting",
		insert_meeting_participant:"meeting_participant_mutation_response",
		insert_meeting_participant_one:"meeting_participant",
		insert_sphere:"sphere_mutation_response",
		insert_sphere_one:"sphere",
		insert_user:"user_mutation_response",
		insert_user_one:"user",
		update_guild:"guild_mutation_response",
		update_guild_by_pk:"guild",
		update_guild_member:"guild_member_mutation_response",
		update_guild_member_by_pk:"guild_member",
		update_meeting:"meeting_mutation_response",
		update_meeting_by_pk:"meeting",
		update_meeting_participant:"meeting_participant_mutation_response",
		update_meeting_participant_by_pk:"meeting_participant",
		update_sphere:"sphere_mutation_response",
		update_sphere_by_pk:"sphere",
		update_user:"user_mutation_response",
		update_user_by_pk:"user"
	},
	query_root:{
		guild:"guild",
		guild_aggregate:"guild_aggregate",
		guild_by_pk:"guild",
		guild_member:"guild_member",
		guild_member_aggregate:"guild_member_aggregate",
		guild_member_by_pk:"guild_member",
		meeting:"meeting",
		meeting_aggregate:"meeting_aggregate",
		meeting_by_pk:"meeting",
		meeting_participant:"meeting_participant",
		meeting_participant_aggregate:"meeting_participant_aggregate",
		meeting_participant_by_pk:"meeting_participant",
		sphere:"sphere",
		sphere_aggregate:"sphere_aggregate",
		sphere_by_pk:"sphere",
		user:"user",
		user_aggregate:"user_aggregate",
		user_by_pk:"user"
	},
	sphere:{
		domain:"String",
		id:"Int",
		name:"String"
	},
	sphere_aggregate:{
		aggregate:"sphere_aggregate_fields",
		nodes:"sphere"
	},
	sphere_aggregate_fields:{
		avg:"sphere_avg_fields",
		count:"Int",
		max:"sphere_max_fields",
		min:"sphere_min_fields",
		stddev:"sphere_stddev_fields",
		stddev_pop:"sphere_stddev_pop_fields",
		stddev_samp:"sphere_stddev_samp_fields",
		sum:"sphere_sum_fields",
		var_pop:"sphere_var_pop_fields",
		var_samp:"sphere_var_samp_fields",
		variance:"sphere_variance_fields"
	},
	sphere_avg_fields:{
		id:"Float"
	},
	sphere_max_fields:{
		domain:"String",
		id:"Int",
		name:"String"
	},
	sphere_min_fields:{
		domain:"String",
		id:"Int",
		name:"String"
	},
	sphere_mutation_response:{
		affected_rows:"Int",
		returning:"sphere"
	},
	sphere_stddev_fields:{
		id:"Float"
	},
	sphere_stddev_pop_fields:{
		id:"Float"
	},
	sphere_stddev_samp_fields:{
		id:"Float"
	},
	sphere_sum_fields:{
		id:"Int"
	},
	sphere_var_pop_fields:{
		id:"Float"
	},
	sphere_var_samp_fields:{
		id:"Float"
	},
	sphere_variance_fields:{
		id:"Float"
	},
	subscription_root:{
		guild:"guild",
		guild_aggregate:"guild_aggregate",
		guild_by_pk:"guild",
		guild_member:"guild_member",
		guild_member_aggregate:"guild_member_aggregate",
		guild_member_by_pk:"guild_member",
		meeting:"meeting",
		meeting_aggregate:"meeting_aggregate",
		meeting_by_pk:"meeting",
		meeting_participant:"meeting_participant",
		meeting_participant_aggregate:"meeting_participant_aggregate",
		meeting_participant_by_pk:"meeting_participant",
		sphere:"sphere",
		sphere_aggregate:"sphere_aggregate",
		sphere_by_pk:"sphere",
		user:"user",
		user_aggregate:"user_aggregate",
		user_by_pk:"user"
	},
	user:{
		auth0_id:"String",
		created_at:"timestamptz",
		email:"String",
		guilds:"guild_member",
		guilds_aggregate:"guild_member_aggregate",
		last_login:"timestamptz",
		meetings:"meeting_participant",
		meetings_aggregate:"meeting_participant_aggregate",
		name:"String",
		organized_meetings:"meeting",
		organized_meetings_aggregate:"meeting_aggregate",
		uuid:"uuid"
	},
	user_aggregate:{
		aggregate:"user_aggregate_fields",
		nodes:"user"
	},
	user_aggregate_fields:{
		count:"Int",
		max:"user_max_fields",
		min:"user_min_fields"
	},
	user_max_fields:{
		auth0_id:"String",
		created_at:"timestamptz",
		email:"String",
		last_login:"timestamptz",
		name:"String",
		uuid:"uuid"
	},
	user_min_fields:{
		auth0_id:"String",
		created_at:"timestamptz",
		email:"String",
		last_login:"timestamptz",
		name:"String",
		uuid:"uuid"
	},
	user_mutation_response:{
		affected_rows:"Int",
		returning:"user"
	}
}

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

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

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
          [Key in keyof Omit<DST, keyof INTERFACE | '__typename'>]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                Omit<
                  {
                    [Key in keyof Omit<
                      DST,
                      keyof IMPLEMENTORS | '__typename'
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
        keyof INTERFACE | '__typename'
      >
    >
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
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

type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (query: string, variables?: Record<string, any>) => any;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `"${value.replace(/"/g, '\\\"')}"`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
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
  blockArrays
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
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
  if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
    const isRequired = resolvedValue.required ? '!' : ''
    return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${typeResolved}${isRequired}`;
  }
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
      .join(',')}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
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
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
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
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a).map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) => traverseToSeekArrays([type], a);

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
    filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};

const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  
const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables);

const seekForAliases = (o: any) => {
  if (typeof o === 'object' && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = o[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        o[alias] = {
          [operation]: value
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === 'object') {
            seekForAliases(value);
          }
        }
      }
    });
  }
};

export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((resolve, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
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
    fullChainConstruct(fn)('query', 'query_root')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["query_root"],query_root>,
mutation: ((o: any, variables) =>
    fullChainConstruct(fn)('mutation', 'mutation_root')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["mutation_root"],mutation_root>,
subscription: ((o: any, variables) =>
    fullChainConstruct(fn)('subscription', 'subscription_root')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["subscription_root"],subscription_root>
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'query_root')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["query_root"],query_root>,
mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('mutation', 'mutation_root')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["mutation_root"],mutation_root>,
subscription: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('subscription', 'subscription_root')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["subscription_root"],subscription_root>
});
export const Zeus = {
  query: (o:ValueTypes["query_root"]) => queryConstruct('query', 'query_root')(o),
mutation: (o:ValueTypes["mutation_root"]) => queryConstruct('mutation', 'mutation_root')(o),
subscription: (o:ValueTypes["subscription_root"]) => queryConstruct('subscription', 'subscription_root')(o)
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
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["query_root"]>(),
mutation: ZeusSelect<ValueTypes["mutation_root"]>(),
subscription: ZeusSelect<ValueTypes["subscription_root"]>()
};
  