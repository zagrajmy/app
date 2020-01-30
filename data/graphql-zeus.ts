/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["auth_user"]: AliasType<{
	date_joined?:true,
	email?:true,
	first_name?:true,
	id?:true,
	is_active?:true,
	is_staff?:true,
	is_superuser?:true,
	last_login?:true,
	last_name?:true,
meetings_guildusers?: [{	distinct_on?:ValueTypes["meetings_guilduser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_guilduser_order_by"][],	where?:ValueTypes["meetings_guilduser_bool_exp"]},ValueTypes["meetings_guilduser"]],
meetings_guildusers_aggregate?: [{	distinct_on?:ValueTypes["meetings_guilduser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_guilduser_order_by"][],	where?:ValueTypes["meetings_guilduser_bool_exp"]},ValueTypes["meetings_guilduser_aggregate"]],
meetings_meetings?: [{	distinct_on?:ValueTypes["meetings_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meeting_order_by"][],	where?:ValueTypes["meetings_meeting_bool_exp"]},ValueTypes["meetings_meeting"]],
meetings_meetings_aggregate?: [{	distinct_on?:ValueTypes["meetings_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meeting_order_by"][],	where?:ValueTypes["meetings_meeting_bool_exp"]},ValueTypes["meetings_meeting_aggregate"]],
meetings_meetingusers?: [{	distinct_on?:ValueTypes["meetings_meetinguser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meetinguser_order_by"][],	where?:ValueTypes["meetings_meetinguser_bool_exp"]},ValueTypes["meetings_meetinguser"]],
meetings_meetingusers_aggregate?: [{	distinct_on?:ValueTypes["meetings_meetinguser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meetinguser_order_by"][],	where?:ValueTypes["meetings_meetinguser_bool_exp"]},ValueTypes["meetings_meetinguser_aggregate"]],
meetings_sphere_users?: [{	distinct_on?:ValueTypes["meetings_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_sphere_users_order_by"][],	where?:ValueTypes["meetings_sphere_users_bool_exp"]},ValueTypes["meetings_sphere_users"]],
meetings_sphere_users_aggregate?: [{	distinct_on?:ValueTypes["meetings_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_sphere_users_order_by"][],	where?:ValueTypes["meetings_sphere_users_bool_exp"]},ValueTypes["meetings_sphere_users_aggregate"]],
	password?:true,
	username?:true
		__typename?: true
}>;
	["auth_user_aggregate"]: AliasType<{
	aggregate?:ValueTypes["auth_user_aggregate_fields"],
	nodes?:ValueTypes["auth_user"]
		__typename?: true
}>;
	["auth_user_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["auth_user_avg_fields"],
count?: [{	columns?:ValueTypes["auth_user_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["auth_user_max_fields"],
	min?:ValueTypes["auth_user_min_fields"],
	stddev?:ValueTypes["auth_user_stddev_fields"],
	stddev_pop?:ValueTypes["auth_user_stddev_pop_fields"],
	stddev_samp?:ValueTypes["auth_user_stddev_samp_fields"],
	sum?:ValueTypes["auth_user_sum_fields"],
	var_pop?:ValueTypes["auth_user_var_pop_fields"],
	var_samp?:ValueTypes["auth_user_var_samp_fields"],
	variance?:ValueTypes["auth_user_variance_fields"]
		__typename?: true
}>;
	["auth_user_aggregate_order_by"]: {
	avg?:ValueTypes["auth_user_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["auth_user_max_order_by"],
	min?:ValueTypes["auth_user_min_order_by"],
	stddev?:ValueTypes["auth_user_stddev_order_by"],
	stddev_pop?:ValueTypes["auth_user_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["auth_user_stddev_samp_order_by"],
	sum?:ValueTypes["auth_user_sum_order_by"],
	var_pop?:ValueTypes["auth_user_var_pop_order_by"],
	var_samp?:ValueTypes["auth_user_var_samp_order_by"],
	variance?:ValueTypes["auth_user_variance_order_by"]
};
	["auth_user_arr_rel_insert_input"]: {
	data:ValueTypes["auth_user_insert_input"][],
	on_conflict?:ValueTypes["auth_user_on_conflict"]
};
	["auth_user_avg_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["auth_user_avg_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["auth_user_bool_exp"]: {
	_and?:(ValueTypes["auth_user_bool_exp"] | undefined)[],
	_not?:ValueTypes["auth_user_bool_exp"],
	_or?:(ValueTypes["auth_user_bool_exp"] | undefined)[],
	date_joined?:ValueTypes["timestamptz_comparison_exp"],
	email?:ValueTypes["String_comparison_exp"],
	first_name?:ValueTypes["String_comparison_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	is_active?:ValueTypes["Boolean_comparison_exp"],
	is_staff?:ValueTypes["Boolean_comparison_exp"],
	is_superuser?:ValueTypes["Boolean_comparison_exp"],
	last_login?:ValueTypes["timestamptz_comparison_exp"],
	last_name?:ValueTypes["String_comparison_exp"],
	meetings_guildusers?:ValueTypes["meetings_guilduser_bool_exp"],
	meetings_meetings?:ValueTypes["meetings_meeting_bool_exp"],
	meetings_meetingusers?:ValueTypes["meetings_meetinguser_bool_exp"],
	meetings_sphere_users?:ValueTypes["meetings_sphere_users_bool_exp"],
	password?:ValueTypes["String_comparison_exp"],
	username?:ValueTypes["String_comparison_exp"]
};
	["auth_user_constraint"]:auth_user_constraint;
	["auth_user_inc_input"]: {
	id?:number
};
	["auth_user_insert_input"]: {
	date_joined?:ValueTypes["timestamptz"],
	email?:string,
	first_name?:string,
	id?:number,
	is_active?:boolean,
	is_staff?:boolean,
	is_superuser?:boolean,
	last_login?:ValueTypes["timestamptz"],
	last_name?:string,
	meetings_guildusers?:ValueTypes["meetings_guilduser_arr_rel_insert_input"],
	meetings_meetings?:ValueTypes["meetings_meeting_arr_rel_insert_input"],
	meetings_meetingusers?:ValueTypes["meetings_meetinguser_arr_rel_insert_input"],
	meetings_sphere_users?:ValueTypes["meetings_sphere_users_arr_rel_insert_input"],
	password?:string,
	username?:string
};
	["auth_user_max_fields"]: AliasType<{
	date_joined?:true,
	email?:true,
	first_name?:true,
	id?:true,
	last_login?:true,
	last_name?:true,
	password?:true,
	username?:true
		__typename?: true
}>;
	["auth_user_max_order_by"]: {
	date_joined?:ValueTypes["order_by"],
	email?:ValueTypes["order_by"],
	first_name?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	last_login?:ValueTypes["order_by"],
	last_name?:ValueTypes["order_by"],
	password?:ValueTypes["order_by"],
	username?:ValueTypes["order_by"]
};
	["auth_user_min_fields"]: AliasType<{
	date_joined?:true,
	email?:true,
	first_name?:true,
	id?:true,
	last_login?:true,
	last_name?:true,
	password?:true,
	username?:true
		__typename?: true
}>;
	["auth_user_min_order_by"]: {
	date_joined?:ValueTypes["order_by"],
	email?:ValueTypes["order_by"],
	first_name?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	last_login?:ValueTypes["order_by"],
	last_name?:ValueTypes["order_by"],
	password?:ValueTypes["order_by"],
	username?:ValueTypes["order_by"]
};
	["auth_user_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["auth_user"]
		__typename?: true
}>;
	["auth_user_obj_rel_insert_input"]: {
	data:ValueTypes["auth_user_insert_input"],
	on_conflict?:ValueTypes["auth_user_on_conflict"]
};
	["auth_user_on_conflict"]: {
	constraint:ValueTypes["auth_user_constraint"],
	update_columns:ValueTypes["auth_user_update_column"][],
	where?:ValueTypes["auth_user_bool_exp"]
};
	["auth_user_order_by"]: {
	date_joined?:ValueTypes["order_by"],
	email?:ValueTypes["order_by"],
	first_name?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	is_active?:ValueTypes["order_by"],
	is_staff?:ValueTypes["order_by"],
	is_superuser?:ValueTypes["order_by"],
	last_login?:ValueTypes["order_by"],
	last_name?:ValueTypes["order_by"],
	meetings_guildusers_aggregate?:ValueTypes["meetings_guilduser_aggregate_order_by"],
	meetings_meetings_aggregate?:ValueTypes["meetings_meeting_aggregate_order_by"],
	meetings_meetingusers_aggregate?:ValueTypes["meetings_meetinguser_aggregate_order_by"],
	meetings_sphere_users_aggregate?:ValueTypes["meetings_sphere_users_aggregate_order_by"],
	password?:ValueTypes["order_by"],
	username?:ValueTypes["order_by"]
};
	["auth_user_select_column"]:auth_user_select_column;
	["auth_user_set_input"]: {
	date_joined?:ValueTypes["timestamptz"],
	email?:string,
	first_name?:string,
	id?:number,
	is_active?:boolean,
	is_staff?:boolean,
	is_superuser?:boolean,
	last_login?:ValueTypes["timestamptz"],
	last_name?:string,
	password?:string,
	username?:string
};
	["auth_user_stddev_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["auth_user_stddev_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["auth_user_stddev_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["auth_user_stddev_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["auth_user_stddev_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["auth_user_stddev_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["auth_user_sum_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["auth_user_sum_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["auth_user_update_column"]:auth_user_update_column;
	["auth_user_var_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["auth_user_var_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["auth_user_var_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["auth_user_var_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["auth_user_variance_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["auth_user_variance_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["Boolean_comparison_exp"]: {
	_eq?:boolean,
	_gt?:boolean,
	_gte?:boolean,
	_in?:boolean[],
	_is_null?:boolean,
	_lt?:boolean,
	_lte?:boolean,
	_neq?:boolean,
	_nin?:boolean[]
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
	["meetings_guild"]: AliasType<{
	created_at?:true,
	description?:true,
	id?:true,
meetings_guildusers?: [{	distinct_on?:ValueTypes["meetings_guilduser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_guilduser_order_by"][],	where?:ValueTypes["meetings_guilduser_bool_exp"]},ValueTypes["meetings_guilduser"]],
meetings_guildusers_aggregate?: [{	distinct_on?:ValueTypes["meetings_guilduser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_guilduser_order_by"][],	where?:ValueTypes["meetings_guilduser_bool_exp"]},ValueTypes["meetings_guilduser_aggregate"]],
meetings_meetings?: [{	distinct_on?:ValueTypes["meetings_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meeting_order_by"][],	where?:ValueTypes["meetings_meeting_bool_exp"]},ValueTypes["meetings_meeting"]],
meetings_meetings_aggregate?: [{	distinct_on?:ValueTypes["meetings_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meeting_order_by"][],	where?:ValueTypes["meetings_meeting_bool_exp"]},ValueTypes["meetings_meeting_aggregate"]],
	name?:true
		__typename?: true
}>;
	["meetings_guild_aggregate"]: AliasType<{
	aggregate?:ValueTypes["meetings_guild_aggregate_fields"],
	nodes?:ValueTypes["meetings_guild"]
		__typename?: true
}>;
	["meetings_guild_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["meetings_guild_avg_fields"],
count?: [{	columns?:ValueTypes["meetings_guild_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["meetings_guild_max_fields"],
	min?:ValueTypes["meetings_guild_min_fields"],
	stddev?:ValueTypes["meetings_guild_stddev_fields"],
	stddev_pop?:ValueTypes["meetings_guild_stddev_pop_fields"],
	stddev_samp?:ValueTypes["meetings_guild_stddev_samp_fields"],
	sum?:ValueTypes["meetings_guild_sum_fields"],
	var_pop?:ValueTypes["meetings_guild_var_pop_fields"],
	var_samp?:ValueTypes["meetings_guild_var_samp_fields"],
	variance?:ValueTypes["meetings_guild_variance_fields"]
		__typename?: true
}>;
	["meetings_guild_aggregate_order_by"]: {
	avg?:ValueTypes["meetings_guild_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["meetings_guild_max_order_by"],
	min?:ValueTypes["meetings_guild_min_order_by"],
	stddev?:ValueTypes["meetings_guild_stddev_order_by"],
	stddev_pop?:ValueTypes["meetings_guild_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["meetings_guild_stddev_samp_order_by"],
	sum?:ValueTypes["meetings_guild_sum_order_by"],
	var_pop?:ValueTypes["meetings_guild_var_pop_order_by"],
	var_samp?:ValueTypes["meetings_guild_var_samp_order_by"],
	variance?:ValueTypes["meetings_guild_variance_order_by"]
};
	["meetings_guild_arr_rel_insert_input"]: {
	data:ValueTypes["meetings_guild_insert_input"][],
	on_conflict?:ValueTypes["meetings_guild_on_conflict"]
};
	["meetings_guild_avg_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_guild_avg_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_guild_bool_exp"]: {
	_and?:(ValueTypes["meetings_guild_bool_exp"] | undefined)[],
	_not?:ValueTypes["meetings_guild_bool_exp"],
	_or?:(ValueTypes["meetings_guild_bool_exp"] | undefined)[],
	created_at?:ValueTypes["timestamptz_comparison_exp"],
	description?:ValueTypes["String_comparison_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	meetings_guildusers?:ValueTypes["meetings_guilduser_bool_exp"],
	meetings_meetings?:ValueTypes["meetings_meeting_bool_exp"],
	name?:ValueTypes["String_comparison_exp"]
};
	["meetings_guild_constraint"]:meetings_guild_constraint;
	["meetings_guild_inc_input"]: {
	id?:number
};
	["meetings_guild_insert_input"]: {
	created_at?:ValueTypes["timestamptz"],
	description?:string,
	id?:number,
	meetings_guildusers?:ValueTypes["meetings_guilduser_arr_rel_insert_input"],
	meetings_meetings?:ValueTypes["meetings_meeting_arr_rel_insert_input"],
	name?:string
};
	["meetings_guild_max_fields"]: AliasType<{
	created_at?:true,
	description?:true,
	id?:true,
	name?:true
		__typename?: true
}>;
	["meetings_guild_max_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"]
};
	["meetings_guild_min_fields"]: AliasType<{
	created_at?:true,
	description?:true,
	id?:true,
	name?:true
		__typename?: true
}>;
	["meetings_guild_min_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"]
};
	["meetings_guild_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["meetings_guild"]
		__typename?: true
}>;
	["meetings_guild_obj_rel_insert_input"]: {
	data:ValueTypes["meetings_guild_insert_input"],
	on_conflict?:ValueTypes["meetings_guild_on_conflict"]
};
	["meetings_guild_on_conflict"]: {
	constraint:ValueTypes["meetings_guild_constraint"],
	update_columns:ValueTypes["meetings_guild_update_column"][],
	where?:ValueTypes["meetings_guild_bool_exp"]
};
	["meetings_guild_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	meetings_guildusers_aggregate?:ValueTypes["meetings_guilduser_aggregate_order_by"],
	meetings_meetings_aggregate?:ValueTypes["meetings_meeting_aggregate_order_by"],
	name?:ValueTypes["order_by"]
};
	["meetings_guild_select_column"]:meetings_guild_select_column;
	["meetings_guild_set_input"]: {
	created_at?:ValueTypes["timestamptz"],
	description?:string,
	id?:number,
	name?:string
};
	["meetings_guild_stddev_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_guild_stddev_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_guild_stddev_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_guild_stddev_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_guild_stddev_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_guild_stddev_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_guild_sum_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_guild_sum_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_guild_update_column"]:meetings_guild_update_column;
	["meetings_guild_var_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_guild_var_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_guild_var_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_guild_var_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_guild_variance_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_guild_variance_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_guilduser"]: AliasType<{
	auth_user?:ValueTypes["auth_user"],
	guild_id?:true,
	id?:true,
	meetings_guild?:ValueTypes["meetings_guild"],
	membership_type?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_guilduser_aggregate"]: AliasType<{
	aggregate?:ValueTypes["meetings_guilduser_aggregate_fields"],
	nodes?:ValueTypes["meetings_guilduser"]
		__typename?: true
}>;
	["meetings_guilduser_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["meetings_guilduser_avg_fields"],
count?: [{	columns?:ValueTypes["meetings_guilduser_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["meetings_guilduser_max_fields"],
	min?:ValueTypes["meetings_guilduser_min_fields"],
	stddev?:ValueTypes["meetings_guilduser_stddev_fields"],
	stddev_pop?:ValueTypes["meetings_guilduser_stddev_pop_fields"],
	stddev_samp?:ValueTypes["meetings_guilduser_stddev_samp_fields"],
	sum?:ValueTypes["meetings_guilduser_sum_fields"],
	var_pop?:ValueTypes["meetings_guilduser_var_pop_fields"],
	var_samp?:ValueTypes["meetings_guilduser_var_samp_fields"],
	variance?:ValueTypes["meetings_guilduser_variance_fields"]
		__typename?: true
}>;
	["meetings_guilduser_aggregate_order_by"]: {
	avg?:ValueTypes["meetings_guilduser_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["meetings_guilduser_max_order_by"],
	min?:ValueTypes["meetings_guilduser_min_order_by"],
	stddev?:ValueTypes["meetings_guilduser_stddev_order_by"],
	stddev_pop?:ValueTypes["meetings_guilduser_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["meetings_guilduser_stddev_samp_order_by"],
	sum?:ValueTypes["meetings_guilduser_sum_order_by"],
	var_pop?:ValueTypes["meetings_guilduser_var_pop_order_by"],
	var_samp?:ValueTypes["meetings_guilduser_var_samp_order_by"],
	variance?:ValueTypes["meetings_guilduser_variance_order_by"]
};
	["meetings_guilduser_arr_rel_insert_input"]: {
	data:ValueTypes["meetings_guilduser_insert_input"][],
	on_conflict?:ValueTypes["meetings_guilduser_on_conflict"]
};
	["meetings_guilduser_avg_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_guilduser_avg_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_guilduser_bool_exp"]: {
	_and?:(ValueTypes["meetings_guilduser_bool_exp"] | undefined)[],
	_not?:ValueTypes["meetings_guilduser_bool_exp"],
	_or?:(ValueTypes["meetings_guilduser_bool_exp"] | undefined)[],
	auth_user?:ValueTypes["auth_user_bool_exp"],
	guild_id?:ValueTypes["Int_comparison_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	meetings_guild?:ValueTypes["meetings_guild_bool_exp"],
	membership_type?:ValueTypes["String_comparison_exp"],
	user_id?:ValueTypes["Int_comparison_exp"]
};
	["meetings_guilduser_constraint"]:meetings_guilduser_constraint;
	["meetings_guilduser_inc_input"]: {
	guild_id?:number,
	id?:number,
	user_id?:number
};
	["meetings_guilduser_insert_input"]: {
	auth_user?:ValueTypes["auth_user_obj_rel_insert_input"],
	guild_id?:number,
	id?:number,
	meetings_guild?:ValueTypes["meetings_guild_obj_rel_insert_input"],
	membership_type?:string,
	user_id?:number
};
	["meetings_guilduser_max_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	membership_type?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_guilduser_max_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	membership_type?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_guilduser_min_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	membership_type?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_guilduser_min_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	membership_type?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_guilduser_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["meetings_guilduser"]
		__typename?: true
}>;
	["meetings_guilduser_obj_rel_insert_input"]: {
	data:ValueTypes["meetings_guilduser_insert_input"],
	on_conflict?:ValueTypes["meetings_guilduser_on_conflict"]
};
	["meetings_guilduser_on_conflict"]: {
	constraint:ValueTypes["meetings_guilduser_constraint"],
	update_columns:ValueTypes["meetings_guilduser_update_column"][],
	where?:ValueTypes["meetings_guilduser_bool_exp"]
};
	["meetings_guilduser_order_by"]: {
	auth_user?:ValueTypes["auth_user_order_by"],
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	meetings_guild?:ValueTypes["meetings_guild_order_by"],
	membership_type?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_guilduser_select_column"]:meetings_guilduser_select_column;
	["meetings_guilduser_set_input"]: {
	guild_id?:number,
	id?:number,
	membership_type?:string,
	user_id?:number
};
	["meetings_guilduser_stddev_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_guilduser_stddev_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_guilduser_stddev_pop_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_guilduser_stddev_pop_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_guilduser_stddev_samp_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_guilduser_stddev_samp_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_guilduser_sum_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_guilduser_sum_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_guilduser_update_column"]:meetings_guilduser_update_column;
	["meetings_guilduser_var_pop_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_guilduser_var_pop_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_guilduser_var_samp_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_guilduser_var_samp_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_guilduser_variance_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_guilduser_variance_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_meeting"]: AliasType<{
	auth_user?:ValueTypes["auth_user"],
	created_at?:true,
	description?:true,
	end_time?:true,
	guild_id?:true,
	id?:true,
	location?:true,
	meetings_guild?:ValueTypes["meetings_guild"],
meetings_meetingusers?: [{	distinct_on?:ValueTypes["meetings_meetinguser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meetinguser_order_by"][],	where?:ValueTypes["meetings_meetinguser_bool_exp"]},ValueTypes["meetings_meetinguser"]],
meetings_meetingusers_aggregate?: [{	distinct_on?:ValueTypes["meetings_meetinguser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meetinguser_order_by"][],	where?:ValueTypes["meetings_meetinguser_bool_exp"]},ValueTypes["meetings_meetinguser_aggregate"]],
	meetings_sphere?:ValueTypes["meetings_sphere"],
	organizer_id?:true,
	publication_time?:true,
	sphere_id?:true,
	start_time?:true,
	title?:true,
	updated_at?:true
		__typename?: true
}>;
	["meetings_meeting_aggregate"]: AliasType<{
	aggregate?:ValueTypes["meetings_meeting_aggregate_fields"],
	nodes?:ValueTypes["meetings_meeting"]
		__typename?: true
}>;
	["meetings_meeting_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["meetings_meeting_avg_fields"],
count?: [{	columns?:ValueTypes["meetings_meeting_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["meetings_meeting_max_fields"],
	min?:ValueTypes["meetings_meeting_min_fields"],
	stddev?:ValueTypes["meetings_meeting_stddev_fields"],
	stddev_pop?:ValueTypes["meetings_meeting_stddev_pop_fields"],
	stddev_samp?:ValueTypes["meetings_meeting_stddev_samp_fields"],
	sum?:ValueTypes["meetings_meeting_sum_fields"],
	var_pop?:ValueTypes["meetings_meeting_var_pop_fields"],
	var_samp?:ValueTypes["meetings_meeting_var_samp_fields"],
	variance?:ValueTypes["meetings_meeting_variance_fields"]
		__typename?: true
}>;
	["meetings_meeting_aggregate_order_by"]: {
	avg?:ValueTypes["meetings_meeting_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["meetings_meeting_max_order_by"],
	min?:ValueTypes["meetings_meeting_min_order_by"],
	stddev?:ValueTypes["meetings_meeting_stddev_order_by"],
	stddev_pop?:ValueTypes["meetings_meeting_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["meetings_meeting_stddev_samp_order_by"],
	sum?:ValueTypes["meetings_meeting_sum_order_by"],
	var_pop?:ValueTypes["meetings_meeting_var_pop_order_by"],
	var_samp?:ValueTypes["meetings_meeting_var_samp_order_by"],
	variance?:ValueTypes["meetings_meeting_variance_order_by"]
};
	["meetings_meeting_arr_rel_insert_input"]: {
	data:ValueTypes["meetings_meeting_insert_input"][],
	on_conflict?:ValueTypes["meetings_meeting_on_conflict"]
};
	["meetings_meeting_avg_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	organizer_id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meetings_meeting_avg_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	organizer_id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meetings_meeting_bool_exp"]: {
	_and?:(ValueTypes["meetings_meeting_bool_exp"] | undefined)[],
	_not?:ValueTypes["meetings_meeting_bool_exp"],
	_or?:(ValueTypes["meetings_meeting_bool_exp"] | undefined)[],
	auth_user?:ValueTypes["auth_user_bool_exp"],
	created_at?:ValueTypes["timestamptz_comparison_exp"],
	description?:ValueTypes["String_comparison_exp"],
	end_time?:ValueTypes["timestamptz_comparison_exp"],
	guild_id?:ValueTypes["Int_comparison_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	location?:ValueTypes["String_comparison_exp"],
	meetings_guild?:ValueTypes["meetings_guild_bool_exp"],
	meetings_meetingusers?:ValueTypes["meetings_meetinguser_bool_exp"],
	meetings_sphere?:ValueTypes["meetings_sphere_bool_exp"],
	organizer_id?:ValueTypes["Int_comparison_exp"],
	publication_time?:ValueTypes["timestamptz_comparison_exp"],
	sphere_id?:ValueTypes["Int_comparison_exp"],
	start_time?:ValueTypes["timestamptz_comparison_exp"],
	title?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["timestamptz_comparison_exp"]
};
	["meetings_meeting_constraint"]:meetings_meeting_constraint;
	["meetings_meeting_inc_input"]: {
	guild_id?:number,
	id?:number,
	organizer_id?:number,
	sphere_id?:number
};
	["meetings_meeting_insert_input"]: {
	auth_user?:ValueTypes["auth_user_obj_rel_insert_input"],
	created_at?:ValueTypes["timestamptz"],
	description?:string,
	end_time?:ValueTypes["timestamptz"],
	guild_id?:number,
	id?:number,
	location?:string,
	meetings_guild?:ValueTypes["meetings_guild_obj_rel_insert_input"],
	meetings_meetingusers?:ValueTypes["meetings_meetinguser_arr_rel_insert_input"],
	meetings_sphere?:ValueTypes["meetings_sphere_obj_rel_insert_input"],
	organizer_id?:number,
	publication_time?:ValueTypes["timestamptz"],
	sphere_id?:number,
	start_time?:ValueTypes["timestamptz"],
	title?:string,
	updated_at?:ValueTypes["timestamptz"]
};
	["meetings_meeting_max_fields"]: AliasType<{
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
	["meetings_meeting_max_order_by"]: {
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
	["meetings_meeting_min_fields"]: AliasType<{
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
	["meetings_meeting_min_order_by"]: {
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
	["meetings_meeting_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["meetings_meeting"]
		__typename?: true
}>;
	["meetings_meeting_obj_rel_insert_input"]: {
	data:ValueTypes["meetings_meeting_insert_input"],
	on_conflict?:ValueTypes["meetings_meeting_on_conflict"]
};
	["meetings_meeting_on_conflict"]: {
	constraint:ValueTypes["meetings_meeting_constraint"],
	update_columns:ValueTypes["meetings_meeting_update_column"][],
	where?:ValueTypes["meetings_meeting_bool_exp"]
};
	["meetings_meeting_order_by"]: {
	auth_user?:ValueTypes["auth_user_order_by"],
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	end_time?:ValueTypes["order_by"],
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	location?:ValueTypes["order_by"],
	meetings_guild?:ValueTypes["meetings_guild_order_by"],
	meetings_meetingusers_aggregate?:ValueTypes["meetings_meetinguser_aggregate_order_by"],
	meetings_sphere?:ValueTypes["meetings_sphere_order_by"],
	organizer_id?:ValueTypes["order_by"],
	publication_time?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"],
	start_time?:ValueTypes["order_by"],
	title?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	["meetings_meeting_select_column"]:meetings_meeting_select_column;
	["meetings_meeting_set_input"]: {
	created_at?:ValueTypes["timestamptz"],
	description?:string,
	end_time?:ValueTypes["timestamptz"],
	guild_id?:number,
	id?:number,
	location?:string,
	organizer_id?:number,
	publication_time?:ValueTypes["timestamptz"],
	sphere_id?:number,
	start_time?:ValueTypes["timestamptz"],
	title?:string,
	updated_at?:ValueTypes["timestamptz"]
};
	["meetings_meeting_stddev_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	organizer_id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meetings_meeting_stddev_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	organizer_id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meetings_meeting_stddev_pop_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	organizer_id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meetings_meeting_stddev_pop_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	organizer_id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meetings_meeting_stddev_samp_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	organizer_id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meetings_meeting_stddev_samp_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	organizer_id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meetings_meeting_sum_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	organizer_id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meetings_meeting_sum_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	organizer_id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meetings_meeting_update_column"]:meetings_meeting_update_column;
	["meetings_meeting_var_pop_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	organizer_id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meetings_meeting_var_pop_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	organizer_id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meetings_meeting_var_samp_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	organizer_id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meetings_meeting_var_samp_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	organizer_id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meetings_meeting_variance_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	organizer_id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["meetings_meeting_variance_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	organizer_id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["meetings_meetinguser"]: AliasType<{
	auth_user?:ValueTypes["auth_user"],
	id?:true,
	meeting_id?:true,
	meetings_meeting?:ValueTypes["meetings_meeting"],
	status?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_meetinguser_aggregate"]: AliasType<{
	aggregate?:ValueTypes["meetings_meetinguser_aggregate_fields"],
	nodes?:ValueTypes["meetings_meetinguser"]
		__typename?: true
}>;
	["meetings_meetinguser_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["meetings_meetinguser_avg_fields"],
count?: [{	columns?:ValueTypes["meetings_meetinguser_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["meetings_meetinguser_max_fields"],
	min?:ValueTypes["meetings_meetinguser_min_fields"],
	stddev?:ValueTypes["meetings_meetinguser_stddev_fields"],
	stddev_pop?:ValueTypes["meetings_meetinguser_stddev_pop_fields"],
	stddev_samp?:ValueTypes["meetings_meetinguser_stddev_samp_fields"],
	sum?:ValueTypes["meetings_meetinguser_sum_fields"],
	var_pop?:ValueTypes["meetings_meetinguser_var_pop_fields"],
	var_samp?:ValueTypes["meetings_meetinguser_var_samp_fields"],
	variance?:ValueTypes["meetings_meetinguser_variance_fields"]
		__typename?: true
}>;
	["meetings_meetinguser_aggregate_order_by"]: {
	avg?:ValueTypes["meetings_meetinguser_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["meetings_meetinguser_max_order_by"],
	min?:ValueTypes["meetings_meetinguser_min_order_by"],
	stddev?:ValueTypes["meetings_meetinguser_stddev_order_by"],
	stddev_pop?:ValueTypes["meetings_meetinguser_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["meetings_meetinguser_stddev_samp_order_by"],
	sum?:ValueTypes["meetings_meetinguser_sum_order_by"],
	var_pop?:ValueTypes["meetings_meetinguser_var_pop_order_by"],
	var_samp?:ValueTypes["meetings_meetinguser_var_samp_order_by"],
	variance?:ValueTypes["meetings_meetinguser_variance_order_by"]
};
	["meetings_meetinguser_arr_rel_insert_input"]: {
	data:ValueTypes["meetings_meetinguser_insert_input"][],
	on_conflict?:ValueTypes["meetings_meetinguser_on_conflict"]
};
	["meetings_meetinguser_avg_fields"]: AliasType<{
	id?:true,
	meeting_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_meetinguser_avg_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_meetinguser_bool_exp"]: {
	_and?:(ValueTypes["meetings_meetinguser_bool_exp"] | undefined)[],
	_not?:ValueTypes["meetings_meetinguser_bool_exp"],
	_or?:(ValueTypes["meetings_meetinguser_bool_exp"] | undefined)[],
	auth_user?:ValueTypes["auth_user_bool_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	meeting_id?:ValueTypes["Int_comparison_exp"],
	meetings_meeting?:ValueTypes["meetings_meeting_bool_exp"],
	status?:ValueTypes["String_comparison_exp"],
	user_id?:ValueTypes["Int_comparison_exp"]
};
	["meetings_meetinguser_constraint"]:meetings_meetinguser_constraint;
	["meetings_meetinguser_inc_input"]: {
	id?:number,
	meeting_id?:number,
	user_id?:number
};
	["meetings_meetinguser_insert_input"]: {
	auth_user?:ValueTypes["auth_user_obj_rel_insert_input"],
	id?:number,
	meeting_id?:number,
	meetings_meeting?:ValueTypes["meetings_meeting_obj_rel_insert_input"],
	status?:string,
	user_id?:number
};
	["meetings_meetinguser_max_fields"]: AliasType<{
	id?:true,
	meeting_id?:true,
	status?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_meetinguser_max_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_meetinguser_min_fields"]: AliasType<{
	id?:true,
	meeting_id?:true,
	status?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_meetinguser_min_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_meetinguser_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["meetings_meetinguser"]
		__typename?: true
}>;
	["meetings_meetinguser_obj_rel_insert_input"]: {
	data:ValueTypes["meetings_meetinguser_insert_input"],
	on_conflict?:ValueTypes["meetings_meetinguser_on_conflict"]
};
	["meetings_meetinguser_on_conflict"]: {
	constraint:ValueTypes["meetings_meetinguser_constraint"],
	update_columns:ValueTypes["meetings_meetinguser_update_column"][],
	where?:ValueTypes["meetings_meetinguser_bool_exp"]
};
	["meetings_meetinguser_order_by"]: {
	auth_user?:ValueTypes["auth_user_order_by"],
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"],
	meetings_meeting?:ValueTypes["meetings_meeting_order_by"],
	status?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_meetinguser_select_column"]:meetings_meetinguser_select_column;
	["meetings_meetinguser_set_input"]: {
	id?:number,
	meeting_id?:number,
	status?:string,
	user_id?:number
};
	["meetings_meetinguser_stddev_fields"]: AliasType<{
	id?:true,
	meeting_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_meetinguser_stddev_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_meetinguser_stddev_pop_fields"]: AliasType<{
	id?:true,
	meeting_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_meetinguser_stddev_pop_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_meetinguser_stddev_samp_fields"]: AliasType<{
	id?:true,
	meeting_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_meetinguser_stddev_samp_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_meetinguser_sum_fields"]: AliasType<{
	id?:true,
	meeting_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_meetinguser_sum_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_meetinguser_update_column"]:meetings_meetinguser_update_column;
	["meetings_meetinguser_var_pop_fields"]: AliasType<{
	id?:true,
	meeting_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_meetinguser_var_pop_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_meetinguser_var_samp_fields"]: AliasType<{
	id?:true,
	meeting_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_meetinguser_var_samp_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_meetinguser_variance_fields"]: AliasType<{
	id?:true,
	meeting_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_meetinguser_variance_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_sphere"]: AliasType<{
	id?:true,
meetings_meetings?: [{	distinct_on?:ValueTypes["meetings_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meeting_order_by"][],	where?:ValueTypes["meetings_meeting_bool_exp"]},ValueTypes["meetings_meeting"]],
meetings_meetings_aggregate?: [{	distinct_on?:ValueTypes["meetings_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meeting_order_by"][],	where?:ValueTypes["meetings_meeting_bool_exp"]},ValueTypes["meetings_meeting_aggregate"]],
meetings_sphere_users?: [{	distinct_on?:ValueTypes["meetings_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_sphere_users_order_by"][],	where?:ValueTypes["meetings_sphere_users_bool_exp"]},ValueTypes["meetings_sphere_users"]],
meetings_sphere_users_aggregate?: [{	distinct_on?:ValueTypes["meetings_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_sphere_users_order_by"][],	where?:ValueTypes["meetings_sphere_users_bool_exp"]},ValueTypes["meetings_sphere_users_aggregate"]],
	name?:true
		__typename?: true
}>;
	["meetings_sphere_aggregate"]: AliasType<{
	aggregate?:ValueTypes["meetings_sphere_aggregate_fields"],
	nodes?:ValueTypes["meetings_sphere"]
		__typename?: true
}>;
	["meetings_sphere_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["meetings_sphere_avg_fields"],
count?: [{	columns?:ValueTypes["meetings_sphere_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["meetings_sphere_max_fields"],
	min?:ValueTypes["meetings_sphere_min_fields"],
	stddev?:ValueTypes["meetings_sphere_stddev_fields"],
	stddev_pop?:ValueTypes["meetings_sphere_stddev_pop_fields"],
	stddev_samp?:ValueTypes["meetings_sphere_stddev_samp_fields"],
	sum?:ValueTypes["meetings_sphere_sum_fields"],
	var_pop?:ValueTypes["meetings_sphere_var_pop_fields"],
	var_samp?:ValueTypes["meetings_sphere_var_samp_fields"],
	variance?:ValueTypes["meetings_sphere_variance_fields"]
		__typename?: true
}>;
	["meetings_sphere_aggregate_order_by"]: {
	avg?:ValueTypes["meetings_sphere_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["meetings_sphere_max_order_by"],
	min?:ValueTypes["meetings_sphere_min_order_by"],
	stddev?:ValueTypes["meetings_sphere_stddev_order_by"],
	stddev_pop?:ValueTypes["meetings_sphere_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["meetings_sphere_stddev_samp_order_by"],
	sum?:ValueTypes["meetings_sphere_sum_order_by"],
	var_pop?:ValueTypes["meetings_sphere_var_pop_order_by"],
	var_samp?:ValueTypes["meetings_sphere_var_samp_order_by"],
	variance?:ValueTypes["meetings_sphere_variance_order_by"]
};
	["meetings_sphere_arr_rel_insert_input"]: {
	data:ValueTypes["meetings_sphere_insert_input"][],
	on_conflict?:ValueTypes["meetings_sphere_on_conflict"]
};
	["meetings_sphere_avg_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_sphere_avg_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_sphere_bool_exp"]: {
	_and?:(ValueTypes["meetings_sphere_bool_exp"] | undefined)[],
	_not?:ValueTypes["meetings_sphere_bool_exp"],
	_or?:(ValueTypes["meetings_sphere_bool_exp"] | undefined)[],
	id?:ValueTypes["Int_comparison_exp"],
	meetings_meetings?:ValueTypes["meetings_meeting_bool_exp"],
	meetings_sphere_users?:ValueTypes["meetings_sphere_users_bool_exp"],
	name?:ValueTypes["String_comparison_exp"]
};
	["meetings_sphere_constraint"]:meetings_sphere_constraint;
	["meetings_sphere_inc_input"]: {
	id?:number
};
	["meetings_sphere_insert_input"]: {
	id?:number,
	meetings_meetings?:ValueTypes["meetings_meeting_arr_rel_insert_input"],
	meetings_sphere_users?:ValueTypes["meetings_sphere_users_arr_rel_insert_input"],
	name?:string
};
	["meetings_sphere_max_fields"]: AliasType<{
	id?:true,
	name?:true
		__typename?: true
}>;
	["meetings_sphere_max_order_by"]: {
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"]
};
	["meetings_sphere_min_fields"]: AliasType<{
	id?:true,
	name?:true
		__typename?: true
}>;
	["meetings_sphere_min_order_by"]: {
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"]
};
	["meetings_sphere_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["meetings_sphere"]
		__typename?: true
}>;
	["meetings_sphere_obj_rel_insert_input"]: {
	data:ValueTypes["meetings_sphere_insert_input"],
	on_conflict?:ValueTypes["meetings_sphere_on_conflict"]
};
	["meetings_sphere_on_conflict"]: {
	constraint:ValueTypes["meetings_sphere_constraint"],
	update_columns:ValueTypes["meetings_sphere_update_column"][],
	where?:ValueTypes["meetings_sphere_bool_exp"]
};
	["meetings_sphere_order_by"]: {
	id?:ValueTypes["order_by"],
	meetings_meetings_aggregate?:ValueTypes["meetings_meeting_aggregate_order_by"],
	meetings_sphere_users_aggregate?:ValueTypes["meetings_sphere_users_aggregate_order_by"],
	name?:ValueTypes["order_by"]
};
	["meetings_sphere_select_column"]:meetings_sphere_select_column;
	["meetings_sphere_set_input"]: {
	id?:number,
	name?:string
};
	["meetings_sphere_stddev_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_sphere_stddev_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_sphere_stddev_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_sphere_stddev_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_sphere_stddev_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_sphere_stddev_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_sphere_sum_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_sphere_sum_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_sphere_update_column"]:meetings_sphere_update_column;
	["meetings_sphere_users"]: AliasType<{
	auth_user?:ValueTypes["auth_user"],
	id?:true,
	meetings_sphere?:ValueTypes["meetings_sphere"],
	sphere_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_sphere_users_aggregate"]: AliasType<{
	aggregate?:ValueTypes["meetings_sphere_users_aggregate_fields"],
	nodes?:ValueTypes["meetings_sphere_users"]
		__typename?: true
}>;
	["meetings_sphere_users_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["meetings_sphere_users_avg_fields"],
count?: [{	columns?:ValueTypes["meetings_sphere_users_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["meetings_sphere_users_max_fields"],
	min?:ValueTypes["meetings_sphere_users_min_fields"],
	stddev?:ValueTypes["meetings_sphere_users_stddev_fields"],
	stddev_pop?:ValueTypes["meetings_sphere_users_stddev_pop_fields"],
	stddev_samp?:ValueTypes["meetings_sphere_users_stddev_samp_fields"],
	sum?:ValueTypes["meetings_sphere_users_sum_fields"],
	var_pop?:ValueTypes["meetings_sphere_users_var_pop_fields"],
	var_samp?:ValueTypes["meetings_sphere_users_var_samp_fields"],
	variance?:ValueTypes["meetings_sphere_users_variance_fields"]
		__typename?: true
}>;
	["meetings_sphere_users_aggregate_order_by"]: {
	avg?:ValueTypes["meetings_sphere_users_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["meetings_sphere_users_max_order_by"],
	min?:ValueTypes["meetings_sphere_users_min_order_by"],
	stddev?:ValueTypes["meetings_sphere_users_stddev_order_by"],
	stddev_pop?:ValueTypes["meetings_sphere_users_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["meetings_sphere_users_stddev_samp_order_by"],
	sum?:ValueTypes["meetings_sphere_users_sum_order_by"],
	var_pop?:ValueTypes["meetings_sphere_users_var_pop_order_by"],
	var_samp?:ValueTypes["meetings_sphere_users_var_samp_order_by"],
	variance?:ValueTypes["meetings_sphere_users_variance_order_by"]
};
	["meetings_sphere_users_arr_rel_insert_input"]: {
	data:ValueTypes["meetings_sphere_users_insert_input"][],
	on_conflict?:ValueTypes["meetings_sphere_users_on_conflict"]
};
	["meetings_sphere_users_avg_fields"]: AliasType<{
	id?:true,
	sphere_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_sphere_users_avg_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_sphere_users_bool_exp"]: {
	_and?:(ValueTypes["meetings_sphere_users_bool_exp"] | undefined)[],
	_not?:ValueTypes["meetings_sphere_users_bool_exp"],
	_or?:(ValueTypes["meetings_sphere_users_bool_exp"] | undefined)[],
	auth_user?:ValueTypes["auth_user_bool_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	meetings_sphere?:ValueTypes["meetings_sphere_bool_exp"],
	sphere_id?:ValueTypes["Int_comparison_exp"],
	user_id?:ValueTypes["Int_comparison_exp"]
};
	["meetings_sphere_users_constraint"]:meetings_sphere_users_constraint;
	["meetings_sphere_users_inc_input"]: {
	id?:number,
	sphere_id?:number,
	user_id?:number
};
	["meetings_sphere_users_insert_input"]: {
	auth_user?:ValueTypes["auth_user_obj_rel_insert_input"],
	id?:number,
	meetings_sphere?:ValueTypes["meetings_sphere_obj_rel_insert_input"],
	sphere_id?:number,
	user_id?:number
};
	["meetings_sphere_users_max_fields"]: AliasType<{
	id?:true,
	sphere_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_sphere_users_max_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_sphere_users_min_fields"]: AliasType<{
	id?:true,
	sphere_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_sphere_users_min_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_sphere_users_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["meetings_sphere_users"]
		__typename?: true
}>;
	["meetings_sphere_users_obj_rel_insert_input"]: {
	data:ValueTypes["meetings_sphere_users_insert_input"],
	on_conflict?:ValueTypes["meetings_sphere_users_on_conflict"]
};
	["meetings_sphere_users_on_conflict"]: {
	constraint:ValueTypes["meetings_sphere_users_constraint"],
	update_columns:ValueTypes["meetings_sphere_users_update_column"][],
	where?:ValueTypes["meetings_sphere_users_bool_exp"]
};
	["meetings_sphere_users_order_by"]: {
	auth_user?:ValueTypes["auth_user_order_by"],
	id?:ValueTypes["order_by"],
	meetings_sphere?:ValueTypes["meetings_sphere_order_by"],
	sphere_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_sphere_users_select_column"]:meetings_sphere_users_select_column;
	["meetings_sphere_users_set_input"]: {
	id?:number,
	sphere_id?:number,
	user_id?:number
};
	["meetings_sphere_users_stddev_fields"]: AliasType<{
	id?:true,
	sphere_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_sphere_users_stddev_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_sphere_users_stddev_pop_fields"]: AliasType<{
	id?:true,
	sphere_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_sphere_users_stddev_pop_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_sphere_users_stddev_samp_fields"]: AliasType<{
	id?:true,
	sphere_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_sphere_users_stddev_samp_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_sphere_users_sum_fields"]: AliasType<{
	id?:true,
	sphere_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_sphere_users_sum_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_sphere_users_update_column"]:meetings_sphere_users_update_column;
	["meetings_sphere_users_var_pop_fields"]: AliasType<{
	id?:true,
	sphere_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_sphere_users_var_pop_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_sphere_users_var_samp_fields"]: AliasType<{
	id?:true,
	sphere_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_sphere_users_var_samp_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_sphere_users_variance_fields"]: AliasType<{
	id?:true,
	sphere_id?:true,
	user_id?:true
		__typename?: true
}>;
	["meetings_sphere_users_variance_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["meetings_sphere_var_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_sphere_var_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_sphere_var_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_sphere_var_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["meetings_sphere_variance_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["meetings_sphere_variance_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["mutation_root"]: AliasType<{
delete_auth_user?: [{	where:ValueTypes["auth_user_bool_exp"]},ValueTypes["auth_user_mutation_response"]],
delete_meetings_guild?: [{	where:ValueTypes["meetings_guild_bool_exp"]},ValueTypes["meetings_guild_mutation_response"]],
delete_meetings_guilduser?: [{	where:ValueTypes["meetings_guilduser_bool_exp"]},ValueTypes["meetings_guilduser_mutation_response"]],
delete_meetings_meeting?: [{	where:ValueTypes["meetings_meeting_bool_exp"]},ValueTypes["meetings_meeting_mutation_response"]],
delete_meetings_meetinguser?: [{	where:ValueTypes["meetings_meetinguser_bool_exp"]},ValueTypes["meetings_meetinguser_mutation_response"]],
delete_meetings_sphere?: [{	where:ValueTypes["meetings_sphere_bool_exp"]},ValueTypes["meetings_sphere_mutation_response"]],
delete_meetings_sphere_users?: [{	where:ValueTypes["meetings_sphere_users_bool_exp"]},ValueTypes["meetings_sphere_users_mutation_response"]],
insert_auth_user?: [{	objects:ValueTypes["auth_user_insert_input"][],	on_conflict?:ValueTypes["auth_user_on_conflict"]},ValueTypes["auth_user_mutation_response"]],
insert_meetings_guild?: [{	objects:ValueTypes["meetings_guild_insert_input"][],	on_conflict?:ValueTypes["meetings_guild_on_conflict"]},ValueTypes["meetings_guild_mutation_response"]],
insert_meetings_guilduser?: [{	objects:ValueTypes["meetings_guilduser_insert_input"][],	on_conflict?:ValueTypes["meetings_guilduser_on_conflict"]},ValueTypes["meetings_guilduser_mutation_response"]],
insert_meetings_meeting?: [{	objects:ValueTypes["meetings_meeting_insert_input"][],	on_conflict?:ValueTypes["meetings_meeting_on_conflict"]},ValueTypes["meetings_meeting_mutation_response"]],
insert_meetings_meetinguser?: [{	objects:ValueTypes["meetings_meetinguser_insert_input"][],	on_conflict?:ValueTypes["meetings_meetinguser_on_conflict"]},ValueTypes["meetings_meetinguser_mutation_response"]],
insert_meetings_sphere?: [{	objects:ValueTypes["meetings_sphere_insert_input"][],	on_conflict?:ValueTypes["meetings_sphere_on_conflict"]},ValueTypes["meetings_sphere_mutation_response"]],
insert_meetings_sphere_users?: [{	objects:ValueTypes["meetings_sphere_users_insert_input"][],	on_conflict?:ValueTypes["meetings_sphere_users_on_conflict"]},ValueTypes["meetings_sphere_users_mutation_response"]],
update_auth_user?: [{	_inc?:ValueTypes["auth_user_inc_input"],	_set?:ValueTypes["auth_user_set_input"],	where:ValueTypes["auth_user_bool_exp"]},ValueTypes["auth_user_mutation_response"]],
update_meetings_guild?: [{	_inc?:ValueTypes["meetings_guild_inc_input"],	_set?:ValueTypes["meetings_guild_set_input"],	where:ValueTypes["meetings_guild_bool_exp"]},ValueTypes["meetings_guild_mutation_response"]],
update_meetings_guilduser?: [{	_inc?:ValueTypes["meetings_guilduser_inc_input"],	_set?:ValueTypes["meetings_guilduser_set_input"],	where:ValueTypes["meetings_guilduser_bool_exp"]},ValueTypes["meetings_guilduser_mutation_response"]],
update_meetings_meeting?: [{	_inc?:ValueTypes["meetings_meeting_inc_input"],	_set?:ValueTypes["meetings_meeting_set_input"],	where:ValueTypes["meetings_meeting_bool_exp"]},ValueTypes["meetings_meeting_mutation_response"]],
update_meetings_meetinguser?: [{	_inc?:ValueTypes["meetings_meetinguser_inc_input"],	_set?:ValueTypes["meetings_meetinguser_set_input"],	where:ValueTypes["meetings_meetinguser_bool_exp"]},ValueTypes["meetings_meetinguser_mutation_response"]],
update_meetings_sphere?: [{	_inc?:ValueTypes["meetings_sphere_inc_input"],	_set?:ValueTypes["meetings_sphere_set_input"],	where:ValueTypes["meetings_sphere_bool_exp"]},ValueTypes["meetings_sphere_mutation_response"]],
update_meetings_sphere_users?: [{	_inc?:ValueTypes["meetings_sphere_users_inc_input"],	_set?:ValueTypes["meetings_sphere_users_set_input"],	where:ValueTypes["meetings_sphere_users_bool_exp"]},ValueTypes["meetings_sphere_users_mutation_response"]]
		__typename?: true
}>;
	["order_by"]:order_by;
	["query_root"]: AliasType<{
auth_user?: [{	distinct_on?:ValueTypes["auth_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["auth_user_order_by"][],	where?:ValueTypes["auth_user_bool_exp"]},ValueTypes["auth_user"]],
auth_user_aggregate?: [{	distinct_on?:ValueTypes["auth_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["auth_user_order_by"][],	where?:ValueTypes["auth_user_bool_exp"]},ValueTypes["auth_user_aggregate"]],
auth_user_by_pk?: [{	id:number},ValueTypes["auth_user"]],
meetings_guild?: [{	distinct_on?:ValueTypes["meetings_guild_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_guild_order_by"][],	where?:ValueTypes["meetings_guild_bool_exp"]},ValueTypes["meetings_guild"]],
meetings_guild_aggregate?: [{	distinct_on?:ValueTypes["meetings_guild_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_guild_order_by"][],	where?:ValueTypes["meetings_guild_bool_exp"]},ValueTypes["meetings_guild_aggregate"]],
meetings_guild_by_pk?: [{	id:number},ValueTypes["meetings_guild"]],
meetings_guilduser?: [{	distinct_on?:ValueTypes["meetings_guilduser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_guilduser_order_by"][],	where?:ValueTypes["meetings_guilduser_bool_exp"]},ValueTypes["meetings_guilduser"]],
meetings_guilduser_aggregate?: [{	distinct_on?:ValueTypes["meetings_guilduser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_guilduser_order_by"][],	where?:ValueTypes["meetings_guilduser_bool_exp"]},ValueTypes["meetings_guilduser_aggregate"]],
meetings_guilduser_by_pk?: [{	id:number},ValueTypes["meetings_guilduser"]],
meetings_meeting?: [{	distinct_on?:ValueTypes["meetings_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meeting_order_by"][],	where?:ValueTypes["meetings_meeting_bool_exp"]},ValueTypes["meetings_meeting"]],
meetings_meeting_aggregate?: [{	distinct_on?:ValueTypes["meetings_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meeting_order_by"][],	where?:ValueTypes["meetings_meeting_bool_exp"]},ValueTypes["meetings_meeting_aggregate"]],
meetings_meeting_by_pk?: [{	id:number},ValueTypes["meetings_meeting"]],
meetings_meetinguser?: [{	distinct_on?:ValueTypes["meetings_meetinguser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meetinguser_order_by"][],	where?:ValueTypes["meetings_meetinguser_bool_exp"]},ValueTypes["meetings_meetinguser"]],
meetings_meetinguser_aggregate?: [{	distinct_on?:ValueTypes["meetings_meetinguser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meetinguser_order_by"][],	where?:ValueTypes["meetings_meetinguser_bool_exp"]},ValueTypes["meetings_meetinguser_aggregate"]],
meetings_meetinguser_by_pk?: [{	id:number},ValueTypes["meetings_meetinguser"]],
meetings_sphere?: [{	distinct_on?:ValueTypes["meetings_sphere_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_sphere_order_by"][],	where?:ValueTypes["meetings_sphere_bool_exp"]},ValueTypes["meetings_sphere"]],
meetings_sphere_aggregate?: [{	distinct_on?:ValueTypes["meetings_sphere_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_sphere_order_by"][],	where?:ValueTypes["meetings_sphere_bool_exp"]},ValueTypes["meetings_sphere_aggregate"]],
meetings_sphere_by_pk?: [{	id:number},ValueTypes["meetings_sphere"]],
meetings_sphere_users?: [{	distinct_on?:ValueTypes["meetings_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_sphere_users_order_by"][],	where?:ValueTypes["meetings_sphere_users_bool_exp"]},ValueTypes["meetings_sphere_users"]],
meetings_sphere_users_aggregate?: [{	distinct_on?:ValueTypes["meetings_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_sphere_users_order_by"][],	where?:ValueTypes["meetings_sphere_users_bool_exp"]},ValueTypes["meetings_sphere_users_aggregate"]],
meetings_sphere_users_by_pk?: [{	id:number},ValueTypes["meetings_sphere_users"]]
		__typename?: true
}>;
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
auth_user?: [{	distinct_on?:ValueTypes["auth_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["auth_user_order_by"][],	where?:ValueTypes["auth_user_bool_exp"]},ValueTypes["auth_user"]],
auth_user_aggregate?: [{	distinct_on?:ValueTypes["auth_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["auth_user_order_by"][],	where?:ValueTypes["auth_user_bool_exp"]},ValueTypes["auth_user_aggregate"]],
auth_user_by_pk?: [{	id:number},ValueTypes["auth_user"]],
meetings_guild?: [{	distinct_on?:ValueTypes["meetings_guild_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_guild_order_by"][],	where?:ValueTypes["meetings_guild_bool_exp"]},ValueTypes["meetings_guild"]],
meetings_guild_aggregate?: [{	distinct_on?:ValueTypes["meetings_guild_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_guild_order_by"][],	where?:ValueTypes["meetings_guild_bool_exp"]},ValueTypes["meetings_guild_aggregate"]],
meetings_guild_by_pk?: [{	id:number},ValueTypes["meetings_guild"]],
meetings_guilduser?: [{	distinct_on?:ValueTypes["meetings_guilduser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_guilduser_order_by"][],	where?:ValueTypes["meetings_guilduser_bool_exp"]},ValueTypes["meetings_guilduser"]],
meetings_guilduser_aggregate?: [{	distinct_on?:ValueTypes["meetings_guilduser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_guilduser_order_by"][],	where?:ValueTypes["meetings_guilduser_bool_exp"]},ValueTypes["meetings_guilduser_aggregate"]],
meetings_guilduser_by_pk?: [{	id:number},ValueTypes["meetings_guilduser"]],
meetings_meeting?: [{	distinct_on?:ValueTypes["meetings_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meeting_order_by"][],	where?:ValueTypes["meetings_meeting_bool_exp"]},ValueTypes["meetings_meeting"]],
meetings_meeting_aggregate?: [{	distinct_on?:ValueTypes["meetings_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meeting_order_by"][],	where?:ValueTypes["meetings_meeting_bool_exp"]},ValueTypes["meetings_meeting_aggregate"]],
meetings_meeting_by_pk?: [{	id:number},ValueTypes["meetings_meeting"]],
meetings_meetinguser?: [{	distinct_on?:ValueTypes["meetings_meetinguser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meetinguser_order_by"][],	where?:ValueTypes["meetings_meetinguser_bool_exp"]},ValueTypes["meetings_meetinguser"]],
meetings_meetinguser_aggregate?: [{	distinct_on?:ValueTypes["meetings_meetinguser_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_meetinguser_order_by"][],	where?:ValueTypes["meetings_meetinguser_bool_exp"]},ValueTypes["meetings_meetinguser_aggregate"]],
meetings_meetinguser_by_pk?: [{	id:number},ValueTypes["meetings_meetinguser"]],
meetings_sphere?: [{	distinct_on?:ValueTypes["meetings_sphere_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_sphere_order_by"][],	where?:ValueTypes["meetings_sphere_bool_exp"]},ValueTypes["meetings_sphere"]],
meetings_sphere_aggregate?: [{	distinct_on?:ValueTypes["meetings_sphere_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_sphere_order_by"][],	where?:ValueTypes["meetings_sphere_bool_exp"]},ValueTypes["meetings_sphere_aggregate"]],
meetings_sphere_by_pk?: [{	id:number},ValueTypes["meetings_sphere"]],
meetings_sphere_users?: [{	distinct_on?:ValueTypes["meetings_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_sphere_users_order_by"][],	where?:ValueTypes["meetings_sphere_users_bool_exp"]},ValueTypes["meetings_sphere_users"]],
meetings_sphere_users_aggregate?: [{	distinct_on?:ValueTypes["meetings_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["meetings_sphere_users_order_by"][],	where?:ValueTypes["meetings_sphere_users_bool_exp"]},ValueTypes["meetings_sphere_users_aggregate"]],
meetings_sphere_users_by_pk?: [{	id:number},ValueTypes["meetings_sphere_users"]]
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
}
  }

export type PartialObjects = {
    ["auth_user"]: {
		__typename?: "auth_user";
			date_joined?:PartialObjects["timestamptz"],
			email?:string,
			first_name?:string,
			id?:number,
			is_active?:boolean,
			is_staff?:boolean,
			is_superuser?:boolean,
			last_login?:PartialObjects["timestamptz"],
			last_name?:string,
			meetings_guildusers?:PartialObjects["meetings_guilduser"][],
			meetings_guildusers_aggregate?:PartialObjects["meetings_guilduser_aggregate"],
			meetings_meetings?:PartialObjects["meetings_meeting"][],
			meetings_meetings_aggregate?:PartialObjects["meetings_meeting_aggregate"],
			meetings_meetingusers?:PartialObjects["meetings_meetinguser"][],
			meetings_meetingusers_aggregate?:PartialObjects["meetings_meetinguser_aggregate"],
			meetings_sphere_users?:PartialObjects["meetings_sphere_users"][],
			meetings_sphere_users_aggregate?:PartialObjects["meetings_sphere_users_aggregate"],
			password?:string,
			username?:string
	},
	["auth_user_aggregate"]: {
		__typename?: "auth_user_aggregate";
			aggregate?:PartialObjects["auth_user_aggregate_fields"],
			nodes?:PartialObjects["auth_user"][]
	},
	["auth_user_aggregate_fields"]: {
		__typename?: "auth_user_aggregate_fields";
			avg?:PartialObjects["auth_user_avg_fields"],
			count?:number,
			max?:PartialObjects["auth_user_max_fields"],
			min?:PartialObjects["auth_user_min_fields"],
			stddev?:PartialObjects["auth_user_stddev_fields"],
			stddev_pop?:PartialObjects["auth_user_stddev_pop_fields"],
			stddev_samp?:PartialObjects["auth_user_stddev_samp_fields"],
			sum?:PartialObjects["auth_user_sum_fields"],
			var_pop?:PartialObjects["auth_user_var_pop_fields"],
			var_samp?:PartialObjects["auth_user_var_samp_fields"],
			variance?:PartialObjects["auth_user_variance_fields"]
	},
	["auth_user_aggregate_order_by"]: {
	avg?:PartialObjects["auth_user_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["auth_user_max_order_by"],
	min?:PartialObjects["auth_user_min_order_by"],
	stddev?:PartialObjects["auth_user_stddev_order_by"],
	stddev_pop?:PartialObjects["auth_user_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["auth_user_stddev_samp_order_by"],
	sum?:PartialObjects["auth_user_sum_order_by"],
	var_pop?:PartialObjects["auth_user_var_pop_order_by"],
	var_samp?:PartialObjects["auth_user_var_samp_order_by"],
	variance?:PartialObjects["auth_user_variance_order_by"]
},
	["auth_user_arr_rel_insert_input"]: {
	data:PartialObjects["auth_user_insert_input"][],
	on_conflict?:PartialObjects["auth_user_on_conflict"]
},
	["auth_user_avg_fields"]: {
		__typename?: "auth_user_avg_fields";
			id?:number
	},
	["auth_user_avg_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["auth_user_bool_exp"]: {
	_and?:(PartialObjects["auth_user_bool_exp"] | undefined)[],
	_not?:PartialObjects["auth_user_bool_exp"],
	_or?:(PartialObjects["auth_user_bool_exp"] | undefined)[],
	date_joined?:PartialObjects["timestamptz_comparison_exp"],
	email?:PartialObjects["String_comparison_exp"],
	first_name?:PartialObjects["String_comparison_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	is_active?:PartialObjects["Boolean_comparison_exp"],
	is_staff?:PartialObjects["Boolean_comparison_exp"],
	is_superuser?:PartialObjects["Boolean_comparison_exp"],
	last_login?:PartialObjects["timestamptz_comparison_exp"],
	last_name?:PartialObjects["String_comparison_exp"],
	meetings_guildusers?:PartialObjects["meetings_guilduser_bool_exp"],
	meetings_meetings?:PartialObjects["meetings_meeting_bool_exp"],
	meetings_meetingusers?:PartialObjects["meetings_meetinguser_bool_exp"],
	meetings_sphere_users?:PartialObjects["meetings_sphere_users_bool_exp"],
	password?:PartialObjects["String_comparison_exp"],
	username?:PartialObjects["String_comparison_exp"]
},
	["auth_user_constraint"]:auth_user_constraint,
	["auth_user_inc_input"]: {
	id?:number
},
	["auth_user_insert_input"]: {
	date_joined?:PartialObjects["timestamptz"],
	email?:string,
	first_name?:string,
	id?:number,
	is_active?:boolean,
	is_staff?:boolean,
	is_superuser?:boolean,
	last_login?:PartialObjects["timestamptz"],
	last_name?:string,
	meetings_guildusers?:PartialObjects["meetings_guilduser_arr_rel_insert_input"],
	meetings_meetings?:PartialObjects["meetings_meeting_arr_rel_insert_input"],
	meetings_meetingusers?:PartialObjects["meetings_meetinguser_arr_rel_insert_input"],
	meetings_sphere_users?:PartialObjects["meetings_sphere_users_arr_rel_insert_input"],
	password?:string,
	username?:string
},
	["auth_user_max_fields"]: {
		__typename?: "auth_user_max_fields";
			date_joined?:PartialObjects["timestamptz"],
			email?:string,
			first_name?:string,
			id?:number,
			last_login?:PartialObjects["timestamptz"],
			last_name?:string,
			password?:string,
			username?:string
	},
	["auth_user_max_order_by"]: {
	date_joined?:PartialObjects["order_by"],
	email?:PartialObjects["order_by"],
	first_name?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	last_login?:PartialObjects["order_by"],
	last_name?:PartialObjects["order_by"],
	password?:PartialObjects["order_by"],
	username?:PartialObjects["order_by"]
},
	["auth_user_min_fields"]: {
		__typename?: "auth_user_min_fields";
			date_joined?:PartialObjects["timestamptz"],
			email?:string,
			first_name?:string,
			id?:number,
			last_login?:PartialObjects["timestamptz"],
			last_name?:string,
			password?:string,
			username?:string
	},
	["auth_user_min_order_by"]: {
	date_joined?:PartialObjects["order_by"],
	email?:PartialObjects["order_by"],
	first_name?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	last_login?:PartialObjects["order_by"],
	last_name?:PartialObjects["order_by"],
	password?:PartialObjects["order_by"],
	username?:PartialObjects["order_by"]
},
	["auth_user_mutation_response"]: {
		__typename?: "auth_user_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["auth_user"][]
	},
	["auth_user_obj_rel_insert_input"]: {
	data:PartialObjects["auth_user_insert_input"],
	on_conflict?:PartialObjects["auth_user_on_conflict"]
},
	["auth_user_on_conflict"]: {
	constraint:PartialObjects["auth_user_constraint"],
	update_columns:PartialObjects["auth_user_update_column"][],
	where?:PartialObjects["auth_user_bool_exp"]
},
	["auth_user_order_by"]: {
	date_joined?:PartialObjects["order_by"],
	email?:PartialObjects["order_by"],
	first_name?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	is_active?:PartialObjects["order_by"],
	is_staff?:PartialObjects["order_by"],
	is_superuser?:PartialObjects["order_by"],
	last_login?:PartialObjects["order_by"],
	last_name?:PartialObjects["order_by"],
	meetings_guildusers_aggregate?:PartialObjects["meetings_guilduser_aggregate_order_by"],
	meetings_meetings_aggregate?:PartialObjects["meetings_meeting_aggregate_order_by"],
	meetings_meetingusers_aggregate?:PartialObjects["meetings_meetinguser_aggregate_order_by"],
	meetings_sphere_users_aggregate?:PartialObjects["meetings_sphere_users_aggregate_order_by"],
	password?:PartialObjects["order_by"],
	username?:PartialObjects["order_by"]
},
	["auth_user_select_column"]:auth_user_select_column,
	["auth_user_set_input"]: {
	date_joined?:PartialObjects["timestamptz"],
	email?:string,
	first_name?:string,
	id?:number,
	is_active?:boolean,
	is_staff?:boolean,
	is_superuser?:boolean,
	last_login?:PartialObjects["timestamptz"],
	last_name?:string,
	password?:string,
	username?:string
},
	["auth_user_stddev_fields"]: {
		__typename?: "auth_user_stddev_fields";
			id?:number
	},
	["auth_user_stddev_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["auth_user_stddev_pop_fields"]: {
		__typename?: "auth_user_stddev_pop_fields";
			id?:number
	},
	["auth_user_stddev_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["auth_user_stddev_samp_fields"]: {
		__typename?: "auth_user_stddev_samp_fields";
			id?:number
	},
	["auth_user_stddev_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["auth_user_sum_fields"]: {
		__typename?: "auth_user_sum_fields";
			id?:number
	},
	["auth_user_sum_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["auth_user_update_column"]:auth_user_update_column,
	["auth_user_var_pop_fields"]: {
		__typename?: "auth_user_var_pop_fields";
			id?:number
	},
	["auth_user_var_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["auth_user_var_samp_fields"]: {
		__typename?: "auth_user_var_samp_fields";
			id?:number
	},
	["auth_user_var_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["auth_user_variance_fields"]: {
		__typename?: "auth_user_variance_fields";
			id?:number
	},
	["auth_user_variance_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["Boolean_comparison_exp"]: {
	_eq?:boolean,
	_gt?:boolean,
	_gte?:boolean,
	_in?:boolean[],
	_is_null?:boolean,
	_lt?:boolean,
	_lte?:boolean,
	_neq?:boolean,
	_nin?:boolean[]
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
	["meetings_guild"]: {
		__typename?: "meetings_guild";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			id?:number,
			meetings_guildusers?:PartialObjects["meetings_guilduser"][],
			meetings_guildusers_aggregate?:PartialObjects["meetings_guilduser_aggregate"],
			meetings_meetings?:PartialObjects["meetings_meeting"][],
			meetings_meetings_aggregate?:PartialObjects["meetings_meeting_aggregate"],
			name?:string
	},
	["meetings_guild_aggregate"]: {
		__typename?: "meetings_guild_aggregate";
			aggregate?:PartialObjects["meetings_guild_aggregate_fields"],
			nodes?:PartialObjects["meetings_guild"][]
	},
	["meetings_guild_aggregate_fields"]: {
		__typename?: "meetings_guild_aggregate_fields";
			avg?:PartialObjects["meetings_guild_avg_fields"],
			count?:number,
			max?:PartialObjects["meetings_guild_max_fields"],
			min?:PartialObjects["meetings_guild_min_fields"],
			stddev?:PartialObjects["meetings_guild_stddev_fields"],
			stddev_pop?:PartialObjects["meetings_guild_stddev_pop_fields"],
			stddev_samp?:PartialObjects["meetings_guild_stddev_samp_fields"],
			sum?:PartialObjects["meetings_guild_sum_fields"],
			var_pop?:PartialObjects["meetings_guild_var_pop_fields"],
			var_samp?:PartialObjects["meetings_guild_var_samp_fields"],
			variance?:PartialObjects["meetings_guild_variance_fields"]
	},
	["meetings_guild_aggregate_order_by"]: {
	avg?:PartialObjects["meetings_guild_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["meetings_guild_max_order_by"],
	min?:PartialObjects["meetings_guild_min_order_by"],
	stddev?:PartialObjects["meetings_guild_stddev_order_by"],
	stddev_pop?:PartialObjects["meetings_guild_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["meetings_guild_stddev_samp_order_by"],
	sum?:PartialObjects["meetings_guild_sum_order_by"],
	var_pop?:PartialObjects["meetings_guild_var_pop_order_by"],
	var_samp?:PartialObjects["meetings_guild_var_samp_order_by"],
	variance?:PartialObjects["meetings_guild_variance_order_by"]
},
	["meetings_guild_arr_rel_insert_input"]: {
	data:PartialObjects["meetings_guild_insert_input"][],
	on_conflict?:PartialObjects["meetings_guild_on_conflict"]
},
	["meetings_guild_avg_fields"]: {
		__typename?: "meetings_guild_avg_fields";
			id?:number
	},
	["meetings_guild_avg_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_guild_bool_exp"]: {
	_and?:(PartialObjects["meetings_guild_bool_exp"] | undefined)[],
	_not?:PartialObjects["meetings_guild_bool_exp"],
	_or?:(PartialObjects["meetings_guild_bool_exp"] | undefined)[],
	created_at?:PartialObjects["timestamptz_comparison_exp"],
	description?:PartialObjects["String_comparison_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	meetings_guildusers?:PartialObjects["meetings_guilduser_bool_exp"],
	meetings_meetings?:PartialObjects["meetings_meeting_bool_exp"],
	name?:PartialObjects["String_comparison_exp"]
},
	["meetings_guild_constraint"]:meetings_guild_constraint,
	["meetings_guild_inc_input"]: {
	id?:number
},
	["meetings_guild_insert_input"]: {
	created_at?:PartialObjects["timestamptz"],
	description?:string,
	id?:number,
	meetings_guildusers?:PartialObjects["meetings_guilduser_arr_rel_insert_input"],
	meetings_meetings?:PartialObjects["meetings_meeting_arr_rel_insert_input"],
	name?:string
},
	["meetings_guild_max_fields"]: {
		__typename?: "meetings_guild_max_fields";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			id?:number,
			name?:string
	},
	["meetings_guild_max_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"]
},
	["meetings_guild_min_fields"]: {
		__typename?: "meetings_guild_min_fields";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			id?:number,
			name?:string
	},
	["meetings_guild_min_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"]
},
	["meetings_guild_mutation_response"]: {
		__typename?: "meetings_guild_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["meetings_guild"][]
	},
	["meetings_guild_obj_rel_insert_input"]: {
	data:PartialObjects["meetings_guild_insert_input"],
	on_conflict?:PartialObjects["meetings_guild_on_conflict"]
},
	["meetings_guild_on_conflict"]: {
	constraint:PartialObjects["meetings_guild_constraint"],
	update_columns:PartialObjects["meetings_guild_update_column"][],
	where?:PartialObjects["meetings_guild_bool_exp"]
},
	["meetings_guild_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	meetings_guildusers_aggregate?:PartialObjects["meetings_guilduser_aggregate_order_by"],
	meetings_meetings_aggregate?:PartialObjects["meetings_meeting_aggregate_order_by"],
	name?:PartialObjects["order_by"]
},
	["meetings_guild_select_column"]:meetings_guild_select_column,
	["meetings_guild_set_input"]: {
	created_at?:PartialObjects["timestamptz"],
	description?:string,
	id?:number,
	name?:string
},
	["meetings_guild_stddev_fields"]: {
		__typename?: "meetings_guild_stddev_fields";
			id?:number
	},
	["meetings_guild_stddev_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_guild_stddev_pop_fields"]: {
		__typename?: "meetings_guild_stddev_pop_fields";
			id?:number
	},
	["meetings_guild_stddev_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_guild_stddev_samp_fields"]: {
		__typename?: "meetings_guild_stddev_samp_fields";
			id?:number
	},
	["meetings_guild_stddev_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_guild_sum_fields"]: {
		__typename?: "meetings_guild_sum_fields";
			id?:number
	},
	["meetings_guild_sum_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_guild_update_column"]:meetings_guild_update_column,
	["meetings_guild_var_pop_fields"]: {
		__typename?: "meetings_guild_var_pop_fields";
			id?:number
	},
	["meetings_guild_var_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_guild_var_samp_fields"]: {
		__typename?: "meetings_guild_var_samp_fields";
			id?:number
	},
	["meetings_guild_var_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_guild_variance_fields"]: {
		__typename?: "meetings_guild_variance_fields";
			id?:number
	},
	["meetings_guild_variance_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_guilduser"]: {
		__typename?: "meetings_guilduser";
			auth_user?:PartialObjects["auth_user"],
			guild_id?:number,
			id?:number,
			meetings_guild?:PartialObjects["meetings_guild"],
			membership_type?:string,
			user_id?:number
	},
	["meetings_guilduser_aggregate"]: {
		__typename?: "meetings_guilduser_aggregate";
			aggregate?:PartialObjects["meetings_guilduser_aggregate_fields"],
			nodes?:PartialObjects["meetings_guilduser"][]
	},
	["meetings_guilduser_aggregate_fields"]: {
		__typename?: "meetings_guilduser_aggregate_fields";
			avg?:PartialObjects["meetings_guilduser_avg_fields"],
			count?:number,
			max?:PartialObjects["meetings_guilduser_max_fields"],
			min?:PartialObjects["meetings_guilduser_min_fields"],
			stddev?:PartialObjects["meetings_guilduser_stddev_fields"],
			stddev_pop?:PartialObjects["meetings_guilduser_stddev_pop_fields"],
			stddev_samp?:PartialObjects["meetings_guilduser_stddev_samp_fields"],
			sum?:PartialObjects["meetings_guilduser_sum_fields"],
			var_pop?:PartialObjects["meetings_guilduser_var_pop_fields"],
			var_samp?:PartialObjects["meetings_guilduser_var_samp_fields"],
			variance?:PartialObjects["meetings_guilduser_variance_fields"]
	},
	["meetings_guilduser_aggregate_order_by"]: {
	avg?:PartialObjects["meetings_guilduser_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["meetings_guilduser_max_order_by"],
	min?:PartialObjects["meetings_guilduser_min_order_by"],
	stddev?:PartialObjects["meetings_guilduser_stddev_order_by"],
	stddev_pop?:PartialObjects["meetings_guilduser_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["meetings_guilduser_stddev_samp_order_by"],
	sum?:PartialObjects["meetings_guilduser_sum_order_by"],
	var_pop?:PartialObjects["meetings_guilduser_var_pop_order_by"],
	var_samp?:PartialObjects["meetings_guilduser_var_samp_order_by"],
	variance?:PartialObjects["meetings_guilduser_variance_order_by"]
},
	["meetings_guilduser_arr_rel_insert_input"]: {
	data:PartialObjects["meetings_guilduser_insert_input"][],
	on_conflict?:PartialObjects["meetings_guilduser_on_conflict"]
},
	["meetings_guilduser_avg_fields"]: {
		__typename?: "meetings_guilduser_avg_fields";
			guild_id?:number,
			id?:number,
			user_id?:number
	},
	["meetings_guilduser_avg_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_guilduser_bool_exp"]: {
	_and?:(PartialObjects["meetings_guilduser_bool_exp"] | undefined)[],
	_not?:PartialObjects["meetings_guilduser_bool_exp"],
	_or?:(PartialObjects["meetings_guilduser_bool_exp"] | undefined)[],
	auth_user?:PartialObjects["auth_user_bool_exp"],
	guild_id?:PartialObjects["Int_comparison_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	meetings_guild?:PartialObjects["meetings_guild_bool_exp"],
	membership_type?:PartialObjects["String_comparison_exp"],
	user_id?:PartialObjects["Int_comparison_exp"]
},
	["meetings_guilduser_constraint"]:meetings_guilduser_constraint,
	["meetings_guilduser_inc_input"]: {
	guild_id?:number,
	id?:number,
	user_id?:number
},
	["meetings_guilduser_insert_input"]: {
	auth_user?:PartialObjects["auth_user_obj_rel_insert_input"],
	guild_id?:number,
	id?:number,
	meetings_guild?:PartialObjects["meetings_guild_obj_rel_insert_input"],
	membership_type?:string,
	user_id?:number
},
	["meetings_guilduser_max_fields"]: {
		__typename?: "meetings_guilduser_max_fields";
			guild_id?:number,
			id?:number,
			membership_type?:string,
			user_id?:number
	},
	["meetings_guilduser_max_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	membership_type?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_guilduser_min_fields"]: {
		__typename?: "meetings_guilduser_min_fields";
			guild_id?:number,
			id?:number,
			membership_type?:string,
			user_id?:number
	},
	["meetings_guilduser_min_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	membership_type?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_guilduser_mutation_response"]: {
		__typename?: "meetings_guilduser_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["meetings_guilduser"][]
	},
	["meetings_guilduser_obj_rel_insert_input"]: {
	data:PartialObjects["meetings_guilduser_insert_input"],
	on_conflict?:PartialObjects["meetings_guilduser_on_conflict"]
},
	["meetings_guilduser_on_conflict"]: {
	constraint:PartialObjects["meetings_guilduser_constraint"],
	update_columns:PartialObjects["meetings_guilduser_update_column"][],
	where?:PartialObjects["meetings_guilduser_bool_exp"]
},
	["meetings_guilduser_order_by"]: {
	auth_user?:PartialObjects["auth_user_order_by"],
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	meetings_guild?:PartialObjects["meetings_guild_order_by"],
	membership_type?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_guilduser_select_column"]:meetings_guilduser_select_column,
	["meetings_guilduser_set_input"]: {
	guild_id?:number,
	id?:number,
	membership_type?:string,
	user_id?:number
},
	["meetings_guilduser_stddev_fields"]: {
		__typename?: "meetings_guilduser_stddev_fields";
			guild_id?:number,
			id?:number,
			user_id?:number
	},
	["meetings_guilduser_stddev_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_guilduser_stddev_pop_fields"]: {
		__typename?: "meetings_guilduser_stddev_pop_fields";
			guild_id?:number,
			id?:number,
			user_id?:number
	},
	["meetings_guilduser_stddev_pop_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_guilduser_stddev_samp_fields"]: {
		__typename?: "meetings_guilduser_stddev_samp_fields";
			guild_id?:number,
			id?:number,
			user_id?:number
	},
	["meetings_guilduser_stddev_samp_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_guilduser_sum_fields"]: {
		__typename?: "meetings_guilduser_sum_fields";
			guild_id?:number,
			id?:number,
			user_id?:number
	},
	["meetings_guilduser_sum_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_guilduser_update_column"]:meetings_guilduser_update_column,
	["meetings_guilduser_var_pop_fields"]: {
		__typename?: "meetings_guilduser_var_pop_fields";
			guild_id?:number,
			id?:number,
			user_id?:number
	},
	["meetings_guilduser_var_pop_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_guilduser_var_samp_fields"]: {
		__typename?: "meetings_guilduser_var_samp_fields";
			guild_id?:number,
			id?:number,
			user_id?:number
	},
	["meetings_guilduser_var_samp_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_guilduser_variance_fields"]: {
		__typename?: "meetings_guilduser_variance_fields";
			guild_id?:number,
			id?:number,
			user_id?:number
	},
	["meetings_guilduser_variance_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_meeting"]: {
		__typename?: "meetings_meeting";
			auth_user?:PartialObjects["auth_user"],
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			end_time?:PartialObjects["timestamptz"],
			guild_id?:number,
			id?:number,
			location?:string,
			meetings_guild?:PartialObjects["meetings_guild"],
			meetings_meetingusers?:PartialObjects["meetings_meetinguser"][],
			meetings_meetingusers_aggregate?:PartialObjects["meetings_meetinguser_aggregate"],
			meetings_sphere?:PartialObjects["meetings_sphere"],
			organizer_id?:number,
			publication_time?:PartialObjects["timestamptz"],
			sphere_id?:number,
			start_time?:PartialObjects["timestamptz"],
			title?:string,
			updated_at?:PartialObjects["timestamptz"]
	},
	["meetings_meeting_aggregate"]: {
		__typename?: "meetings_meeting_aggregate";
			aggregate?:PartialObjects["meetings_meeting_aggregate_fields"],
			nodes?:PartialObjects["meetings_meeting"][]
	},
	["meetings_meeting_aggregate_fields"]: {
		__typename?: "meetings_meeting_aggregate_fields";
			avg?:PartialObjects["meetings_meeting_avg_fields"],
			count?:number,
			max?:PartialObjects["meetings_meeting_max_fields"],
			min?:PartialObjects["meetings_meeting_min_fields"],
			stddev?:PartialObjects["meetings_meeting_stddev_fields"],
			stddev_pop?:PartialObjects["meetings_meeting_stddev_pop_fields"],
			stddev_samp?:PartialObjects["meetings_meeting_stddev_samp_fields"],
			sum?:PartialObjects["meetings_meeting_sum_fields"],
			var_pop?:PartialObjects["meetings_meeting_var_pop_fields"],
			var_samp?:PartialObjects["meetings_meeting_var_samp_fields"],
			variance?:PartialObjects["meetings_meeting_variance_fields"]
	},
	["meetings_meeting_aggregate_order_by"]: {
	avg?:PartialObjects["meetings_meeting_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["meetings_meeting_max_order_by"],
	min?:PartialObjects["meetings_meeting_min_order_by"],
	stddev?:PartialObjects["meetings_meeting_stddev_order_by"],
	stddev_pop?:PartialObjects["meetings_meeting_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["meetings_meeting_stddev_samp_order_by"],
	sum?:PartialObjects["meetings_meeting_sum_order_by"],
	var_pop?:PartialObjects["meetings_meeting_var_pop_order_by"],
	var_samp?:PartialObjects["meetings_meeting_var_samp_order_by"],
	variance?:PartialObjects["meetings_meeting_variance_order_by"]
},
	["meetings_meeting_arr_rel_insert_input"]: {
	data:PartialObjects["meetings_meeting_insert_input"][],
	on_conflict?:PartialObjects["meetings_meeting_on_conflict"]
},
	["meetings_meeting_avg_fields"]: {
		__typename?: "meetings_meeting_avg_fields";
			guild_id?:number,
			id?:number,
			organizer_id?:number,
			sphere_id?:number
	},
	["meetings_meeting_avg_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	organizer_id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meetings_meeting_bool_exp"]: {
	_and?:(PartialObjects["meetings_meeting_bool_exp"] | undefined)[],
	_not?:PartialObjects["meetings_meeting_bool_exp"],
	_or?:(PartialObjects["meetings_meeting_bool_exp"] | undefined)[],
	auth_user?:PartialObjects["auth_user_bool_exp"],
	created_at?:PartialObjects["timestamptz_comparison_exp"],
	description?:PartialObjects["String_comparison_exp"],
	end_time?:PartialObjects["timestamptz_comparison_exp"],
	guild_id?:PartialObjects["Int_comparison_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	location?:PartialObjects["String_comparison_exp"],
	meetings_guild?:PartialObjects["meetings_guild_bool_exp"],
	meetings_meetingusers?:PartialObjects["meetings_meetinguser_bool_exp"],
	meetings_sphere?:PartialObjects["meetings_sphere_bool_exp"],
	organizer_id?:PartialObjects["Int_comparison_exp"],
	publication_time?:PartialObjects["timestamptz_comparison_exp"],
	sphere_id?:PartialObjects["Int_comparison_exp"],
	start_time?:PartialObjects["timestamptz_comparison_exp"],
	title?:PartialObjects["String_comparison_exp"],
	updated_at?:PartialObjects["timestamptz_comparison_exp"]
},
	["meetings_meeting_constraint"]:meetings_meeting_constraint,
	["meetings_meeting_inc_input"]: {
	guild_id?:number,
	id?:number,
	organizer_id?:number,
	sphere_id?:number
},
	["meetings_meeting_insert_input"]: {
	auth_user?:PartialObjects["auth_user_obj_rel_insert_input"],
	created_at?:PartialObjects["timestamptz"],
	description?:string,
	end_time?:PartialObjects["timestamptz"],
	guild_id?:number,
	id?:number,
	location?:string,
	meetings_guild?:PartialObjects["meetings_guild_obj_rel_insert_input"],
	meetings_meetingusers?:PartialObjects["meetings_meetinguser_arr_rel_insert_input"],
	meetings_sphere?:PartialObjects["meetings_sphere_obj_rel_insert_input"],
	organizer_id?:number,
	publication_time?:PartialObjects["timestamptz"],
	sphere_id?:number,
	start_time?:PartialObjects["timestamptz"],
	title?:string,
	updated_at?:PartialObjects["timestamptz"]
},
	["meetings_meeting_max_fields"]: {
		__typename?: "meetings_meeting_max_fields";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			end_time?:PartialObjects["timestamptz"],
			guild_id?:number,
			id?:number,
			location?:string,
			organizer_id?:number,
			publication_time?:PartialObjects["timestamptz"],
			sphere_id?:number,
			start_time?:PartialObjects["timestamptz"],
			title?:string,
			updated_at?:PartialObjects["timestamptz"]
	},
	["meetings_meeting_max_order_by"]: {
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
	["meetings_meeting_min_fields"]: {
		__typename?: "meetings_meeting_min_fields";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			end_time?:PartialObjects["timestamptz"],
			guild_id?:number,
			id?:number,
			location?:string,
			organizer_id?:number,
			publication_time?:PartialObjects["timestamptz"],
			sphere_id?:number,
			start_time?:PartialObjects["timestamptz"],
			title?:string,
			updated_at?:PartialObjects["timestamptz"]
	},
	["meetings_meeting_min_order_by"]: {
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
	["meetings_meeting_mutation_response"]: {
		__typename?: "meetings_meeting_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["meetings_meeting"][]
	},
	["meetings_meeting_obj_rel_insert_input"]: {
	data:PartialObjects["meetings_meeting_insert_input"],
	on_conflict?:PartialObjects["meetings_meeting_on_conflict"]
},
	["meetings_meeting_on_conflict"]: {
	constraint:PartialObjects["meetings_meeting_constraint"],
	update_columns:PartialObjects["meetings_meeting_update_column"][],
	where?:PartialObjects["meetings_meeting_bool_exp"]
},
	["meetings_meeting_order_by"]: {
	auth_user?:PartialObjects["auth_user_order_by"],
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	end_time?:PartialObjects["order_by"],
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	location?:PartialObjects["order_by"],
	meetings_guild?:PartialObjects["meetings_guild_order_by"],
	meetings_meetingusers_aggregate?:PartialObjects["meetings_meetinguser_aggregate_order_by"],
	meetings_sphere?:PartialObjects["meetings_sphere_order_by"],
	organizer_id?:PartialObjects["order_by"],
	publication_time?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"],
	start_time?:PartialObjects["order_by"],
	title?:PartialObjects["order_by"],
	updated_at?:PartialObjects["order_by"]
},
	["meetings_meeting_select_column"]:meetings_meeting_select_column,
	["meetings_meeting_set_input"]: {
	created_at?:PartialObjects["timestamptz"],
	description?:string,
	end_time?:PartialObjects["timestamptz"],
	guild_id?:number,
	id?:number,
	location?:string,
	organizer_id?:number,
	publication_time?:PartialObjects["timestamptz"],
	sphere_id?:number,
	start_time?:PartialObjects["timestamptz"],
	title?:string,
	updated_at?:PartialObjects["timestamptz"]
},
	["meetings_meeting_stddev_fields"]: {
		__typename?: "meetings_meeting_stddev_fields";
			guild_id?:number,
			id?:number,
			organizer_id?:number,
			sphere_id?:number
	},
	["meetings_meeting_stddev_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	organizer_id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meetings_meeting_stddev_pop_fields"]: {
		__typename?: "meetings_meeting_stddev_pop_fields";
			guild_id?:number,
			id?:number,
			organizer_id?:number,
			sphere_id?:number
	},
	["meetings_meeting_stddev_pop_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	organizer_id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meetings_meeting_stddev_samp_fields"]: {
		__typename?: "meetings_meeting_stddev_samp_fields";
			guild_id?:number,
			id?:number,
			organizer_id?:number,
			sphere_id?:number
	},
	["meetings_meeting_stddev_samp_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	organizer_id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meetings_meeting_sum_fields"]: {
		__typename?: "meetings_meeting_sum_fields";
			guild_id?:number,
			id?:number,
			organizer_id?:number,
			sphere_id?:number
	},
	["meetings_meeting_sum_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	organizer_id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meetings_meeting_update_column"]:meetings_meeting_update_column,
	["meetings_meeting_var_pop_fields"]: {
		__typename?: "meetings_meeting_var_pop_fields";
			guild_id?:number,
			id?:number,
			organizer_id?:number,
			sphere_id?:number
	},
	["meetings_meeting_var_pop_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	organizer_id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meetings_meeting_var_samp_fields"]: {
		__typename?: "meetings_meeting_var_samp_fields";
			guild_id?:number,
			id?:number,
			organizer_id?:number,
			sphere_id?:number
	},
	["meetings_meeting_var_samp_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	organizer_id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meetings_meeting_variance_fields"]: {
		__typename?: "meetings_meeting_variance_fields";
			guild_id?:number,
			id?:number,
			organizer_id?:number,
			sphere_id?:number
	},
	["meetings_meeting_variance_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	organizer_id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["meetings_meetinguser"]: {
		__typename?: "meetings_meetinguser";
			auth_user?:PartialObjects["auth_user"],
			id?:number,
			meeting_id?:number,
			meetings_meeting?:PartialObjects["meetings_meeting"],
			status?:string,
			user_id?:number
	},
	["meetings_meetinguser_aggregate"]: {
		__typename?: "meetings_meetinguser_aggregate";
			aggregate?:PartialObjects["meetings_meetinguser_aggregate_fields"],
			nodes?:PartialObjects["meetings_meetinguser"][]
	},
	["meetings_meetinguser_aggregate_fields"]: {
		__typename?: "meetings_meetinguser_aggregate_fields";
			avg?:PartialObjects["meetings_meetinguser_avg_fields"],
			count?:number,
			max?:PartialObjects["meetings_meetinguser_max_fields"],
			min?:PartialObjects["meetings_meetinguser_min_fields"],
			stddev?:PartialObjects["meetings_meetinguser_stddev_fields"],
			stddev_pop?:PartialObjects["meetings_meetinguser_stddev_pop_fields"],
			stddev_samp?:PartialObjects["meetings_meetinguser_stddev_samp_fields"],
			sum?:PartialObjects["meetings_meetinguser_sum_fields"],
			var_pop?:PartialObjects["meetings_meetinguser_var_pop_fields"],
			var_samp?:PartialObjects["meetings_meetinguser_var_samp_fields"],
			variance?:PartialObjects["meetings_meetinguser_variance_fields"]
	},
	["meetings_meetinguser_aggregate_order_by"]: {
	avg?:PartialObjects["meetings_meetinguser_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["meetings_meetinguser_max_order_by"],
	min?:PartialObjects["meetings_meetinguser_min_order_by"],
	stddev?:PartialObjects["meetings_meetinguser_stddev_order_by"],
	stddev_pop?:PartialObjects["meetings_meetinguser_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["meetings_meetinguser_stddev_samp_order_by"],
	sum?:PartialObjects["meetings_meetinguser_sum_order_by"],
	var_pop?:PartialObjects["meetings_meetinguser_var_pop_order_by"],
	var_samp?:PartialObjects["meetings_meetinguser_var_samp_order_by"],
	variance?:PartialObjects["meetings_meetinguser_variance_order_by"]
},
	["meetings_meetinguser_arr_rel_insert_input"]: {
	data:PartialObjects["meetings_meetinguser_insert_input"][],
	on_conflict?:PartialObjects["meetings_meetinguser_on_conflict"]
},
	["meetings_meetinguser_avg_fields"]: {
		__typename?: "meetings_meetinguser_avg_fields";
			id?:number,
			meeting_id?:number,
			user_id?:number
	},
	["meetings_meetinguser_avg_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_meetinguser_bool_exp"]: {
	_and?:(PartialObjects["meetings_meetinguser_bool_exp"] | undefined)[],
	_not?:PartialObjects["meetings_meetinguser_bool_exp"],
	_or?:(PartialObjects["meetings_meetinguser_bool_exp"] | undefined)[],
	auth_user?:PartialObjects["auth_user_bool_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	meeting_id?:PartialObjects["Int_comparison_exp"],
	meetings_meeting?:PartialObjects["meetings_meeting_bool_exp"],
	status?:PartialObjects["String_comparison_exp"],
	user_id?:PartialObjects["Int_comparison_exp"]
},
	["meetings_meetinguser_constraint"]:meetings_meetinguser_constraint,
	["meetings_meetinguser_inc_input"]: {
	id?:number,
	meeting_id?:number,
	user_id?:number
},
	["meetings_meetinguser_insert_input"]: {
	auth_user?:PartialObjects["auth_user_obj_rel_insert_input"],
	id?:number,
	meeting_id?:number,
	meetings_meeting?:PartialObjects["meetings_meeting_obj_rel_insert_input"],
	status?:string,
	user_id?:number
},
	["meetings_meetinguser_max_fields"]: {
		__typename?: "meetings_meetinguser_max_fields";
			id?:number,
			meeting_id?:number,
			status?:string,
			user_id?:number
	},
	["meetings_meetinguser_max_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"],
	status?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_meetinguser_min_fields"]: {
		__typename?: "meetings_meetinguser_min_fields";
			id?:number,
			meeting_id?:number,
			status?:string,
			user_id?:number
	},
	["meetings_meetinguser_min_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"],
	status?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_meetinguser_mutation_response"]: {
		__typename?: "meetings_meetinguser_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["meetings_meetinguser"][]
	},
	["meetings_meetinguser_obj_rel_insert_input"]: {
	data:PartialObjects["meetings_meetinguser_insert_input"],
	on_conflict?:PartialObjects["meetings_meetinguser_on_conflict"]
},
	["meetings_meetinguser_on_conflict"]: {
	constraint:PartialObjects["meetings_meetinguser_constraint"],
	update_columns:PartialObjects["meetings_meetinguser_update_column"][],
	where?:PartialObjects["meetings_meetinguser_bool_exp"]
},
	["meetings_meetinguser_order_by"]: {
	auth_user?:PartialObjects["auth_user_order_by"],
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"],
	meetings_meeting?:PartialObjects["meetings_meeting_order_by"],
	status?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_meetinguser_select_column"]:meetings_meetinguser_select_column,
	["meetings_meetinguser_set_input"]: {
	id?:number,
	meeting_id?:number,
	status?:string,
	user_id?:number
},
	["meetings_meetinguser_stddev_fields"]: {
		__typename?: "meetings_meetinguser_stddev_fields";
			id?:number,
			meeting_id?:number,
			user_id?:number
	},
	["meetings_meetinguser_stddev_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_meetinguser_stddev_pop_fields"]: {
		__typename?: "meetings_meetinguser_stddev_pop_fields";
			id?:number,
			meeting_id?:number,
			user_id?:number
	},
	["meetings_meetinguser_stddev_pop_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_meetinguser_stddev_samp_fields"]: {
		__typename?: "meetings_meetinguser_stddev_samp_fields";
			id?:number,
			meeting_id?:number,
			user_id?:number
	},
	["meetings_meetinguser_stddev_samp_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_meetinguser_sum_fields"]: {
		__typename?: "meetings_meetinguser_sum_fields";
			id?:number,
			meeting_id?:number,
			user_id?:number
	},
	["meetings_meetinguser_sum_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_meetinguser_update_column"]:meetings_meetinguser_update_column,
	["meetings_meetinguser_var_pop_fields"]: {
		__typename?: "meetings_meetinguser_var_pop_fields";
			id?:number,
			meeting_id?:number,
			user_id?:number
	},
	["meetings_meetinguser_var_pop_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_meetinguser_var_samp_fields"]: {
		__typename?: "meetings_meetinguser_var_samp_fields";
			id?:number,
			meeting_id?:number,
			user_id?:number
	},
	["meetings_meetinguser_var_samp_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_meetinguser_variance_fields"]: {
		__typename?: "meetings_meetinguser_variance_fields";
			id?:number,
			meeting_id?:number,
			user_id?:number
	},
	["meetings_meetinguser_variance_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_sphere"]: {
		__typename?: "meetings_sphere";
			id?:number,
			meetings_meetings?:PartialObjects["meetings_meeting"][],
			meetings_meetings_aggregate?:PartialObjects["meetings_meeting_aggregate"],
			meetings_sphere_users?:PartialObjects["meetings_sphere_users"][],
			meetings_sphere_users_aggregate?:PartialObjects["meetings_sphere_users_aggregate"],
			name?:string
	},
	["meetings_sphere_aggregate"]: {
		__typename?: "meetings_sphere_aggregate";
			aggregate?:PartialObjects["meetings_sphere_aggregate_fields"],
			nodes?:PartialObjects["meetings_sphere"][]
	},
	["meetings_sphere_aggregate_fields"]: {
		__typename?: "meetings_sphere_aggregate_fields";
			avg?:PartialObjects["meetings_sphere_avg_fields"],
			count?:number,
			max?:PartialObjects["meetings_sphere_max_fields"],
			min?:PartialObjects["meetings_sphere_min_fields"],
			stddev?:PartialObjects["meetings_sphere_stddev_fields"],
			stddev_pop?:PartialObjects["meetings_sphere_stddev_pop_fields"],
			stddev_samp?:PartialObjects["meetings_sphere_stddev_samp_fields"],
			sum?:PartialObjects["meetings_sphere_sum_fields"],
			var_pop?:PartialObjects["meetings_sphere_var_pop_fields"],
			var_samp?:PartialObjects["meetings_sphere_var_samp_fields"],
			variance?:PartialObjects["meetings_sphere_variance_fields"]
	},
	["meetings_sphere_aggregate_order_by"]: {
	avg?:PartialObjects["meetings_sphere_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["meetings_sphere_max_order_by"],
	min?:PartialObjects["meetings_sphere_min_order_by"],
	stddev?:PartialObjects["meetings_sphere_stddev_order_by"],
	stddev_pop?:PartialObjects["meetings_sphere_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["meetings_sphere_stddev_samp_order_by"],
	sum?:PartialObjects["meetings_sphere_sum_order_by"],
	var_pop?:PartialObjects["meetings_sphere_var_pop_order_by"],
	var_samp?:PartialObjects["meetings_sphere_var_samp_order_by"],
	variance?:PartialObjects["meetings_sphere_variance_order_by"]
},
	["meetings_sphere_arr_rel_insert_input"]: {
	data:PartialObjects["meetings_sphere_insert_input"][],
	on_conflict?:PartialObjects["meetings_sphere_on_conflict"]
},
	["meetings_sphere_avg_fields"]: {
		__typename?: "meetings_sphere_avg_fields";
			id?:number
	},
	["meetings_sphere_avg_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_sphere_bool_exp"]: {
	_and?:(PartialObjects["meetings_sphere_bool_exp"] | undefined)[],
	_not?:PartialObjects["meetings_sphere_bool_exp"],
	_or?:(PartialObjects["meetings_sphere_bool_exp"] | undefined)[],
	id?:PartialObjects["Int_comparison_exp"],
	meetings_meetings?:PartialObjects["meetings_meeting_bool_exp"],
	meetings_sphere_users?:PartialObjects["meetings_sphere_users_bool_exp"],
	name?:PartialObjects["String_comparison_exp"]
},
	["meetings_sphere_constraint"]:meetings_sphere_constraint,
	["meetings_sphere_inc_input"]: {
	id?:number
},
	["meetings_sphere_insert_input"]: {
	id?:number,
	meetings_meetings?:PartialObjects["meetings_meeting_arr_rel_insert_input"],
	meetings_sphere_users?:PartialObjects["meetings_sphere_users_arr_rel_insert_input"],
	name?:string
},
	["meetings_sphere_max_fields"]: {
		__typename?: "meetings_sphere_max_fields";
			id?:number,
			name?:string
	},
	["meetings_sphere_max_order_by"]: {
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"]
},
	["meetings_sphere_min_fields"]: {
		__typename?: "meetings_sphere_min_fields";
			id?:number,
			name?:string
	},
	["meetings_sphere_min_order_by"]: {
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"]
},
	["meetings_sphere_mutation_response"]: {
		__typename?: "meetings_sphere_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["meetings_sphere"][]
	},
	["meetings_sphere_obj_rel_insert_input"]: {
	data:PartialObjects["meetings_sphere_insert_input"],
	on_conflict?:PartialObjects["meetings_sphere_on_conflict"]
},
	["meetings_sphere_on_conflict"]: {
	constraint:PartialObjects["meetings_sphere_constraint"],
	update_columns:PartialObjects["meetings_sphere_update_column"][],
	where?:PartialObjects["meetings_sphere_bool_exp"]
},
	["meetings_sphere_order_by"]: {
	id?:PartialObjects["order_by"],
	meetings_meetings_aggregate?:PartialObjects["meetings_meeting_aggregate_order_by"],
	meetings_sphere_users_aggregate?:PartialObjects["meetings_sphere_users_aggregate_order_by"],
	name?:PartialObjects["order_by"]
},
	["meetings_sphere_select_column"]:meetings_sphere_select_column,
	["meetings_sphere_set_input"]: {
	id?:number,
	name?:string
},
	["meetings_sphere_stddev_fields"]: {
		__typename?: "meetings_sphere_stddev_fields";
			id?:number
	},
	["meetings_sphere_stddev_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_sphere_stddev_pop_fields"]: {
		__typename?: "meetings_sphere_stddev_pop_fields";
			id?:number
	},
	["meetings_sphere_stddev_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_sphere_stddev_samp_fields"]: {
		__typename?: "meetings_sphere_stddev_samp_fields";
			id?:number
	},
	["meetings_sphere_stddev_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_sphere_sum_fields"]: {
		__typename?: "meetings_sphere_sum_fields";
			id?:number
	},
	["meetings_sphere_sum_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_sphere_update_column"]:meetings_sphere_update_column,
	["meetings_sphere_users"]: {
		__typename?: "meetings_sphere_users";
			auth_user?:PartialObjects["auth_user"],
			id?:number,
			meetings_sphere?:PartialObjects["meetings_sphere"],
			sphere_id?:number,
			user_id?:number
	},
	["meetings_sphere_users_aggregate"]: {
		__typename?: "meetings_sphere_users_aggregate";
			aggregate?:PartialObjects["meetings_sphere_users_aggregate_fields"],
			nodes?:PartialObjects["meetings_sphere_users"][]
	},
	["meetings_sphere_users_aggregate_fields"]: {
		__typename?: "meetings_sphere_users_aggregate_fields";
			avg?:PartialObjects["meetings_sphere_users_avg_fields"],
			count?:number,
			max?:PartialObjects["meetings_sphere_users_max_fields"],
			min?:PartialObjects["meetings_sphere_users_min_fields"],
			stddev?:PartialObjects["meetings_sphere_users_stddev_fields"],
			stddev_pop?:PartialObjects["meetings_sphere_users_stddev_pop_fields"],
			stddev_samp?:PartialObjects["meetings_sphere_users_stddev_samp_fields"],
			sum?:PartialObjects["meetings_sphere_users_sum_fields"],
			var_pop?:PartialObjects["meetings_sphere_users_var_pop_fields"],
			var_samp?:PartialObjects["meetings_sphere_users_var_samp_fields"],
			variance?:PartialObjects["meetings_sphere_users_variance_fields"]
	},
	["meetings_sphere_users_aggregate_order_by"]: {
	avg?:PartialObjects["meetings_sphere_users_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["meetings_sphere_users_max_order_by"],
	min?:PartialObjects["meetings_sphere_users_min_order_by"],
	stddev?:PartialObjects["meetings_sphere_users_stddev_order_by"],
	stddev_pop?:PartialObjects["meetings_sphere_users_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["meetings_sphere_users_stddev_samp_order_by"],
	sum?:PartialObjects["meetings_sphere_users_sum_order_by"],
	var_pop?:PartialObjects["meetings_sphere_users_var_pop_order_by"],
	var_samp?:PartialObjects["meetings_sphere_users_var_samp_order_by"],
	variance?:PartialObjects["meetings_sphere_users_variance_order_by"]
},
	["meetings_sphere_users_arr_rel_insert_input"]: {
	data:PartialObjects["meetings_sphere_users_insert_input"][],
	on_conflict?:PartialObjects["meetings_sphere_users_on_conflict"]
},
	["meetings_sphere_users_avg_fields"]: {
		__typename?: "meetings_sphere_users_avg_fields";
			id?:number,
			sphere_id?:number,
			user_id?:number
	},
	["meetings_sphere_users_avg_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_sphere_users_bool_exp"]: {
	_and?:(PartialObjects["meetings_sphere_users_bool_exp"] | undefined)[],
	_not?:PartialObjects["meetings_sphere_users_bool_exp"],
	_or?:(PartialObjects["meetings_sphere_users_bool_exp"] | undefined)[],
	auth_user?:PartialObjects["auth_user_bool_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	meetings_sphere?:PartialObjects["meetings_sphere_bool_exp"],
	sphere_id?:PartialObjects["Int_comparison_exp"],
	user_id?:PartialObjects["Int_comparison_exp"]
},
	["meetings_sphere_users_constraint"]:meetings_sphere_users_constraint,
	["meetings_sphere_users_inc_input"]: {
	id?:number,
	sphere_id?:number,
	user_id?:number
},
	["meetings_sphere_users_insert_input"]: {
	auth_user?:PartialObjects["auth_user_obj_rel_insert_input"],
	id?:number,
	meetings_sphere?:PartialObjects["meetings_sphere_obj_rel_insert_input"],
	sphere_id?:number,
	user_id?:number
},
	["meetings_sphere_users_max_fields"]: {
		__typename?: "meetings_sphere_users_max_fields";
			id?:number,
			sphere_id?:number,
			user_id?:number
	},
	["meetings_sphere_users_max_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_sphere_users_min_fields"]: {
		__typename?: "meetings_sphere_users_min_fields";
			id?:number,
			sphere_id?:number,
			user_id?:number
	},
	["meetings_sphere_users_min_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_sphere_users_mutation_response"]: {
		__typename?: "meetings_sphere_users_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["meetings_sphere_users"][]
	},
	["meetings_sphere_users_obj_rel_insert_input"]: {
	data:PartialObjects["meetings_sphere_users_insert_input"],
	on_conflict?:PartialObjects["meetings_sphere_users_on_conflict"]
},
	["meetings_sphere_users_on_conflict"]: {
	constraint:PartialObjects["meetings_sphere_users_constraint"],
	update_columns:PartialObjects["meetings_sphere_users_update_column"][],
	where?:PartialObjects["meetings_sphere_users_bool_exp"]
},
	["meetings_sphere_users_order_by"]: {
	auth_user?:PartialObjects["auth_user_order_by"],
	id?:PartialObjects["order_by"],
	meetings_sphere?:PartialObjects["meetings_sphere_order_by"],
	sphere_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_sphere_users_select_column"]:meetings_sphere_users_select_column,
	["meetings_sphere_users_set_input"]: {
	id?:number,
	sphere_id?:number,
	user_id?:number
},
	["meetings_sphere_users_stddev_fields"]: {
		__typename?: "meetings_sphere_users_stddev_fields";
			id?:number,
			sphere_id?:number,
			user_id?:number
	},
	["meetings_sphere_users_stddev_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_sphere_users_stddev_pop_fields"]: {
		__typename?: "meetings_sphere_users_stddev_pop_fields";
			id?:number,
			sphere_id?:number,
			user_id?:number
	},
	["meetings_sphere_users_stddev_pop_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_sphere_users_stddev_samp_fields"]: {
		__typename?: "meetings_sphere_users_stddev_samp_fields";
			id?:number,
			sphere_id?:number,
			user_id?:number
	},
	["meetings_sphere_users_stddev_samp_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_sphere_users_sum_fields"]: {
		__typename?: "meetings_sphere_users_sum_fields";
			id?:number,
			sphere_id?:number,
			user_id?:number
	},
	["meetings_sphere_users_sum_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_sphere_users_update_column"]:meetings_sphere_users_update_column,
	["meetings_sphere_users_var_pop_fields"]: {
		__typename?: "meetings_sphere_users_var_pop_fields";
			id?:number,
			sphere_id?:number,
			user_id?:number
	},
	["meetings_sphere_users_var_pop_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_sphere_users_var_samp_fields"]: {
		__typename?: "meetings_sphere_users_var_samp_fields";
			id?:number,
			sphere_id?:number,
			user_id?:number
	},
	["meetings_sphere_users_var_samp_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_sphere_users_variance_fields"]: {
		__typename?: "meetings_sphere_users_variance_fields";
			id?:number,
			sphere_id?:number,
			user_id?:number
	},
	["meetings_sphere_users_variance_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["meetings_sphere_var_pop_fields"]: {
		__typename?: "meetings_sphere_var_pop_fields";
			id?:number
	},
	["meetings_sphere_var_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_sphere_var_samp_fields"]: {
		__typename?: "meetings_sphere_var_samp_fields";
			id?:number
	},
	["meetings_sphere_var_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["meetings_sphere_variance_fields"]: {
		__typename?: "meetings_sphere_variance_fields";
			id?:number
	},
	["meetings_sphere_variance_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["mutation_root"]: {
		__typename?: "mutation_root";
			delete_auth_user?:PartialObjects["auth_user_mutation_response"],
			delete_meetings_guild?:PartialObjects["meetings_guild_mutation_response"],
			delete_meetings_guilduser?:PartialObjects["meetings_guilduser_mutation_response"],
			delete_meetings_meeting?:PartialObjects["meetings_meeting_mutation_response"],
			delete_meetings_meetinguser?:PartialObjects["meetings_meetinguser_mutation_response"],
			delete_meetings_sphere?:PartialObjects["meetings_sphere_mutation_response"],
			delete_meetings_sphere_users?:PartialObjects["meetings_sphere_users_mutation_response"],
			insert_auth_user?:PartialObjects["auth_user_mutation_response"],
			insert_meetings_guild?:PartialObjects["meetings_guild_mutation_response"],
			insert_meetings_guilduser?:PartialObjects["meetings_guilduser_mutation_response"],
			insert_meetings_meeting?:PartialObjects["meetings_meeting_mutation_response"],
			insert_meetings_meetinguser?:PartialObjects["meetings_meetinguser_mutation_response"],
			insert_meetings_sphere?:PartialObjects["meetings_sphere_mutation_response"],
			insert_meetings_sphere_users?:PartialObjects["meetings_sphere_users_mutation_response"],
			update_auth_user?:PartialObjects["auth_user_mutation_response"],
			update_meetings_guild?:PartialObjects["meetings_guild_mutation_response"],
			update_meetings_guilduser?:PartialObjects["meetings_guilduser_mutation_response"],
			update_meetings_meeting?:PartialObjects["meetings_meeting_mutation_response"],
			update_meetings_meetinguser?:PartialObjects["meetings_meetinguser_mutation_response"],
			update_meetings_sphere?:PartialObjects["meetings_sphere_mutation_response"],
			update_meetings_sphere_users?:PartialObjects["meetings_sphere_users_mutation_response"]
	},
	["order_by"]:order_by,
	["query_root"]: {
		__typename?: "query_root";
			auth_user?:PartialObjects["auth_user"][],
			auth_user_aggregate?:PartialObjects["auth_user_aggregate"],
			auth_user_by_pk?:PartialObjects["auth_user"],
			meetings_guild?:PartialObjects["meetings_guild"][],
			meetings_guild_aggregate?:PartialObjects["meetings_guild_aggregate"],
			meetings_guild_by_pk?:PartialObjects["meetings_guild"],
			meetings_guilduser?:PartialObjects["meetings_guilduser"][],
			meetings_guilduser_aggregate?:PartialObjects["meetings_guilduser_aggregate"],
			meetings_guilduser_by_pk?:PartialObjects["meetings_guilduser"],
			meetings_meeting?:PartialObjects["meetings_meeting"][],
			meetings_meeting_aggregate?:PartialObjects["meetings_meeting_aggregate"],
			meetings_meeting_by_pk?:PartialObjects["meetings_meeting"],
			meetings_meetinguser?:PartialObjects["meetings_meetinguser"][],
			meetings_meetinguser_aggregate?:PartialObjects["meetings_meetinguser_aggregate"],
			meetings_meetinguser_by_pk?:PartialObjects["meetings_meetinguser"],
			meetings_sphere?:PartialObjects["meetings_sphere"][],
			meetings_sphere_aggregate?:PartialObjects["meetings_sphere_aggregate"],
			meetings_sphere_by_pk?:PartialObjects["meetings_sphere"],
			meetings_sphere_users?:PartialObjects["meetings_sphere_users"][],
			meetings_sphere_users_aggregate?:PartialObjects["meetings_sphere_users_aggregate"],
			meetings_sphere_users_by_pk?:PartialObjects["meetings_sphere_users"]
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
			auth_user?:PartialObjects["auth_user"][],
			auth_user_aggregate?:PartialObjects["auth_user_aggregate"],
			auth_user_by_pk?:PartialObjects["auth_user"],
			meetings_guild?:PartialObjects["meetings_guild"][],
			meetings_guild_aggregate?:PartialObjects["meetings_guild_aggregate"],
			meetings_guild_by_pk?:PartialObjects["meetings_guild"],
			meetings_guilduser?:PartialObjects["meetings_guilduser"][],
			meetings_guilduser_aggregate?:PartialObjects["meetings_guilduser_aggregate"],
			meetings_guilduser_by_pk?:PartialObjects["meetings_guilduser"],
			meetings_meeting?:PartialObjects["meetings_meeting"][],
			meetings_meeting_aggregate?:PartialObjects["meetings_meeting_aggregate"],
			meetings_meeting_by_pk?:PartialObjects["meetings_meeting"],
			meetings_meetinguser?:PartialObjects["meetings_meetinguser"][],
			meetings_meetinguser_aggregate?:PartialObjects["meetings_meetinguser_aggregate"],
			meetings_meetinguser_by_pk?:PartialObjects["meetings_meetinguser"],
			meetings_sphere?:PartialObjects["meetings_sphere"][],
			meetings_sphere_aggregate?:PartialObjects["meetings_sphere_aggregate"],
			meetings_sphere_by_pk?:PartialObjects["meetings_sphere"],
			meetings_sphere_users?:PartialObjects["meetings_sphere_users"][],
			meetings_sphere_users_aggregate?:PartialObjects["meetings_sphere_users_aggregate"],
			meetings_sphere_users_by_pk?:PartialObjects["meetings_sphere_users"]
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
}
  }

// columns and relationships of "auth_user"

// aggregated selection of "auth_user"

// aggregate fields of "auth_user"

// order by aggregate values of table "auth_user"

// input type for inserting array relation for remote table "auth_user"

// aggregate avg on columns

// order by avg() on columns of table "auth_user"

// Boolean expression to filter rows from the table "auth_user". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "auth_user"

// input type for incrementing integer columne in table "auth_user"

// input type for inserting data into table "auth_user"

// aggregate max on columns

// order by max() on columns of table "auth_user"

// aggregate min on columns

// order by min() on columns of table "auth_user"

// response of any mutation on the table "auth_user"

// input type for inserting object relation for remote table "auth_user"

// on conflict condition type for table "auth_user"

// ordering options when selecting data from "auth_user"

// select columns of table "auth_user"

// input type for updating data in table "auth_user"

// aggregate stddev on columns

// order by stddev() on columns of table "auth_user"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "auth_user"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "auth_user"

// aggregate sum on columns

// order by sum() on columns of table "auth_user"

// update columns of table "auth_user"

// aggregate var_pop on columns

// order by var_pop() on columns of table "auth_user"

// aggregate var_samp on columns

// order by var_samp() on columns of table "auth_user"

// aggregate variance on columns

// order by variance() on columns of table "auth_user"

// expression to compare columns of type Boolean. All fields are combined with logical 'AND'.

// expression to compare columns of type Int. All fields are combined with logical 'AND'.

// columns and relationships of "meetings_guild"

// aggregated selection of "meetings_guild"

// aggregate fields of "meetings_guild"

// order by aggregate values of table "meetings_guild"

// input type for inserting array relation for remote table "meetings_guild"

// aggregate avg on columns

// order by avg() on columns of table "meetings_guild"

// Boolean expression to filter rows from the table "meetings_guild". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "meetings_guild"

// input type for incrementing integer columne in table "meetings_guild"

// input type for inserting data into table "meetings_guild"

// aggregate max on columns

// order by max() on columns of table "meetings_guild"

// aggregate min on columns

// order by min() on columns of table "meetings_guild"

// response of any mutation on the table "meetings_guild"

// input type for inserting object relation for remote table "meetings_guild"

// on conflict condition type for table "meetings_guild"

// ordering options when selecting data from "meetings_guild"

// select columns of table "meetings_guild"

// input type for updating data in table "meetings_guild"

// aggregate stddev on columns

// order by stddev() on columns of table "meetings_guild"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "meetings_guild"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "meetings_guild"

// aggregate sum on columns

// order by sum() on columns of table "meetings_guild"

// update columns of table "meetings_guild"

// aggregate var_pop on columns

// order by var_pop() on columns of table "meetings_guild"

// aggregate var_samp on columns

// order by var_samp() on columns of table "meetings_guild"

// aggregate variance on columns

// order by variance() on columns of table "meetings_guild"

// columns and relationships of "meetings_guilduser"

// aggregated selection of "meetings_guilduser"

// aggregate fields of "meetings_guilduser"

// order by aggregate values of table "meetings_guilduser"

// input type for inserting array relation for remote table "meetings_guilduser"

// aggregate avg on columns

// order by avg() on columns of table "meetings_guilduser"

// Boolean expression to filter rows from the table "meetings_guilduser". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "meetings_guilduser"

// input type for incrementing integer columne in table "meetings_guilduser"

// input type for inserting data into table "meetings_guilduser"

// aggregate max on columns

// order by max() on columns of table "meetings_guilduser"

// aggregate min on columns

// order by min() on columns of table "meetings_guilduser"

// response of any mutation on the table "meetings_guilduser"

// input type for inserting object relation for remote table "meetings_guilduser"

// on conflict condition type for table "meetings_guilduser"

// ordering options when selecting data from "meetings_guilduser"

// select columns of table "meetings_guilduser"

// input type for updating data in table "meetings_guilduser"

// aggregate stddev on columns

// order by stddev() on columns of table "meetings_guilduser"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "meetings_guilduser"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "meetings_guilduser"

// aggregate sum on columns

// order by sum() on columns of table "meetings_guilduser"

// update columns of table "meetings_guilduser"

// aggregate var_pop on columns

// order by var_pop() on columns of table "meetings_guilduser"

// aggregate var_samp on columns

// order by var_samp() on columns of table "meetings_guilduser"

// aggregate variance on columns

// order by variance() on columns of table "meetings_guilduser"

// columns and relationships of "meetings_meeting"

// aggregated selection of "meetings_meeting"

// aggregate fields of "meetings_meeting"

// order by aggregate values of table "meetings_meeting"

// input type for inserting array relation for remote table "meetings_meeting"

// aggregate avg on columns

// order by avg() on columns of table "meetings_meeting"

// Boolean expression to filter rows from the table "meetings_meeting". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "meetings_meeting"

// input type for incrementing integer columne in table "meetings_meeting"

// input type for inserting data into table "meetings_meeting"

// aggregate max on columns

// order by max() on columns of table "meetings_meeting"

// aggregate min on columns

// order by min() on columns of table "meetings_meeting"

// response of any mutation on the table "meetings_meeting"

// input type for inserting object relation for remote table "meetings_meeting"

// on conflict condition type for table "meetings_meeting"

// ordering options when selecting data from "meetings_meeting"

// select columns of table "meetings_meeting"

// input type for updating data in table "meetings_meeting"

// aggregate stddev on columns

// order by stddev() on columns of table "meetings_meeting"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "meetings_meeting"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "meetings_meeting"

// aggregate sum on columns

// order by sum() on columns of table "meetings_meeting"

// update columns of table "meetings_meeting"

// aggregate var_pop on columns

// order by var_pop() on columns of table "meetings_meeting"

// aggregate var_samp on columns

// order by var_samp() on columns of table "meetings_meeting"

// aggregate variance on columns

// order by variance() on columns of table "meetings_meeting"

// columns and relationships of "meetings_meetinguser"

// aggregated selection of "meetings_meetinguser"

// aggregate fields of "meetings_meetinguser"

// order by aggregate values of table "meetings_meetinguser"

// input type for inserting array relation for remote table "meetings_meetinguser"

// aggregate avg on columns

// order by avg() on columns of table "meetings_meetinguser"

// Boolean expression to filter rows from the table "meetings_meetinguser". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "meetings_meetinguser"

// input type for incrementing integer columne in table "meetings_meetinguser"

// input type for inserting data into table "meetings_meetinguser"

// aggregate max on columns

// order by max() on columns of table "meetings_meetinguser"

// aggregate min on columns

// order by min() on columns of table "meetings_meetinguser"

// response of any mutation on the table "meetings_meetinguser"

// input type for inserting object relation for remote table "meetings_meetinguser"

// on conflict condition type for table "meetings_meetinguser"

// ordering options when selecting data from "meetings_meetinguser"

// select columns of table "meetings_meetinguser"

// input type for updating data in table "meetings_meetinguser"

// aggregate stddev on columns

// order by stddev() on columns of table "meetings_meetinguser"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "meetings_meetinguser"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "meetings_meetinguser"

// aggregate sum on columns

// order by sum() on columns of table "meetings_meetinguser"

// update columns of table "meetings_meetinguser"

// aggregate var_pop on columns

// order by var_pop() on columns of table "meetings_meetinguser"

// aggregate var_samp on columns

// order by var_samp() on columns of table "meetings_meetinguser"

// aggregate variance on columns

// order by variance() on columns of table "meetings_meetinguser"

// columns and relationships of "meetings_sphere"

// aggregated selection of "meetings_sphere"

// aggregate fields of "meetings_sphere"

// order by aggregate values of table "meetings_sphere"

// input type for inserting array relation for remote table "meetings_sphere"

// aggregate avg on columns

// order by avg() on columns of table "meetings_sphere"

// Boolean expression to filter rows from the table "meetings_sphere". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "meetings_sphere"

// input type for incrementing integer columne in table "meetings_sphere"

// input type for inserting data into table "meetings_sphere"

// aggregate max on columns

// order by max() on columns of table "meetings_sphere"

// aggregate min on columns

// order by min() on columns of table "meetings_sphere"

// response of any mutation on the table "meetings_sphere"

// input type for inserting object relation for remote table "meetings_sphere"

// on conflict condition type for table "meetings_sphere"

// ordering options when selecting data from "meetings_sphere"

// select columns of table "meetings_sphere"

// input type for updating data in table "meetings_sphere"

// aggregate stddev on columns

// order by stddev() on columns of table "meetings_sphere"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "meetings_sphere"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "meetings_sphere"

// aggregate sum on columns

// order by sum() on columns of table "meetings_sphere"

// update columns of table "meetings_sphere"

// columns and relationships of "meetings_sphere_users"

// aggregated selection of "meetings_sphere_users"

// aggregate fields of "meetings_sphere_users"

// order by aggregate values of table "meetings_sphere_users"

// input type for inserting array relation for remote table "meetings_sphere_users"

// aggregate avg on columns

// order by avg() on columns of table "meetings_sphere_users"

// Boolean expression to filter rows from the table "meetings_sphere_users". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "meetings_sphere_users"

// input type for incrementing integer columne in table "meetings_sphere_users"

// input type for inserting data into table "meetings_sphere_users"

// aggregate max on columns

// order by max() on columns of table "meetings_sphere_users"

// aggregate min on columns

// order by min() on columns of table "meetings_sphere_users"

// response of any mutation on the table "meetings_sphere_users"

// input type for inserting object relation for remote table "meetings_sphere_users"

// on conflict condition type for table "meetings_sphere_users"

// ordering options when selecting data from "meetings_sphere_users"

// select columns of table "meetings_sphere_users"

// input type for updating data in table "meetings_sphere_users"

// aggregate stddev on columns

// order by stddev() on columns of table "meetings_sphere_users"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "meetings_sphere_users"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "meetings_sphere_users"

// aggregate sum on columns

// order by sum() on columns of table "meetings_sphere_users"

// update columns of table "meetings_sphere_users"

// aggregate var_pop on columns

// order by var_pop() on columns of table "meetings_sphere_users"

// aggregate var_samp on columns

// order by var_samp() on columns of table "meetings_sphere_users"

// aggregate variance on columns

// order by variance() on columns of table "meetings_sphere_users"

// aggregate var_pop on columns

// order by var_pop() on columns of table "meetings_sphere"

// aggregate var_samp on columns

// order by var_samp() on columns of table "meetings_sphere"

// aggregate variance on columns

// order by variance() on columns of table "meetings_sphere"

// mutation root

// column ordering options

// query root

// expression to compare columns of type String. All fields are combined with logical 'AND'.

// subscription root

// expression to compare columns of type timestamptz. All fields are combined with logical 'AND'.

export type auth_user = {
	__typename?: "auth_user",
	date_joined:timestamptz,
	email:string,
	first_name:string,
	id:number,
	is_active:boolean,
	is_staff:boolean,
	is_superuser:boolean,
	last_login?:timestamptz,
	last_name:string,
	meetings_guildusers:meetings_guilduser[],
	meetings_guildusers_aggregate:meetings_guilduser_aggregate,
	meetings_meetings:meetings_meeting[],
	meetings_meetings_aggregate:meetings_meeting_aggregate,
	meetings_meetingusers:meetings_meetinguser[],
	meetings_meetingusers_aggregate:meetings_meetinguser_aggregate,
	meetings_sphere_users:meetings_sphere_users[],
	meetings_sphere_users_aggregate:meetings_sphere_users_aggregate,
	password:string,
	username:string
}

export type auth_user_aggregate = {
	__typename?: "auth_user_aggregate",
	aggregate?:auth_user_aggregate_fields,
	nodes:auth_user[]
}

export type auth_user_aggregate_fields = {
	__typename?: "auth_user_aggregate_fields",
	avg?:auth_user_avg_fields,
	count?:number,
	max?:auth_user_max_fields,
	min?:auth_user_min_fields,
	stddev?:auth_user_stddev_fields,
	stddev_pop?:auth_user_stddev_pop_fields,
	stddev_samp?:auth_user_stddev_samp_fields,
	sum?:auth_user_sum_fields,
	var_pop?:auth_user_var_pop_fields,
	var_samp?:auth_user_var_samp_fields,
	variance?:auth_user_variance_fields
}

export type auth_user_aggregate_order_by = {
		avg?:auth_user_avg_order_by,
	count?:order_by,
	max?:auth_user_max_order_by,
	min?:auth_user_min_order_by,
	stddev?:auth_user_stddev_order_by,
	stddev_pop?:auth_user_stddev_pop_order_by,
	stddev_samp?:auth_user_stddev_samp_order_by,
	sum?:auth_user_sum_order_by,
	var_pop?:auth_user_var_pop_order_by,
	var_samp?:auth_user_var_samp_order_by,
	variance?:auth_user_variance_order_by
}

export type auth_user_arr_rel_insert_input = {
		data:auth_user_insert_input[],
	on_conflict?:auth_user_on_conflict
}

export type auth_user_avg_fields = {
	__typename?: "auth_user_avg_fields",
	id?:number
}

export type auth_user_avg_order_by = {
		id?:order_by
}

export type auth_user_bool_exp = {
		_and?:(auth_user_bool_exp | undefined)[],
	_not?:auth_user_bool_exp,
	_or?:(auth_user_bool_exp | undefined)[],
	date_joined?:timestamptz_comparison_exp,
	email?:String_comparison_exp,
	first_name?:String_comparison_exp,
	id?:Int_comparison_exp,
	is_active?:Boolean_comparison_exp,
	is_staff?:Boolean_comparison_exp,
	is_superuser?:Boolean_comparison_exp,
	last_login?:timestamptz_comparison_exp,
	last_name?:String_comparison_exp,
	meetings_guildusers?:meetings_guilduser_bool_exp,
	meetings_meetings?:meetings_meeting_bool_exp,
	meetings_meetingusers?:meetings_meetinguser_bool_exp,
	meetings_sphere_users?:meetings_sphere_users_bool_exp,
	password?:String_comparison_exp,
	username?:String_comparison_exp
}

export enum auth_user_constraint {
	auth_user_pkey = "auth_user_pkey",
	auth_user_username_key = "auth_user_username_key"
}

export type auth_user_inc_input = {
		id?:number
}

export type auth_user_insert_input = {
		date_joined?:timestamptz,
	email?:string,
	first_name?:string,
	id?:number,
	is_active?:boolean,
	is_staff?:boolean,
	is_superuser?:boolean,
	last_login?:timestamptz,
	last_name?:string,
	meetings_guildusers?:meetings_guilduser_arr_rel_insert_input,
	meetings_meetings?:meetings_meeting_arr_rel_insert_input,
	meetings_meetingusers?:meetings_meetinguser_arr_rel_insert_input,
	meetings_sphere_users?:meetings_sphere_users_arr_rel_insert_input,
	password?:string,
	username?:string
}

export type auth_user_max_fields = {
	__typename?: "auth_user_max_fields",
	date_joined?:timestamptz,
	email?:string,
	first_name?:string,
	id?:number,
	last_login?:timestamptz,
	last_name?:string,
	password?:string,
	username?:string
}

export type auth_user_max_order_by = {
		date_joined?:order_by,
	email?:order_by,
	first_name?:order_by,
	id?:order_by,
	last_login?:order_by,
	last_name?:order_by,
	password?:order_by,
	username?:order_by
}

export type auth_user_min_fields = {
	__typename?: "auth_user_min_fields",
	date_joined?:timestamptz,
	email?:string,
	first_name?:string,
	id?:number,
	last_login?:timestamptz,
	last_name?:string,
	password?:string,
	username?:string
}

export type auth_user_min_order_by = {
		date_joined?:order_by,
	email?:order_by,
	first_name?:order_by,
	id?:order_by,
	last_login?:order_by,
	last_name?:order_by,
	password?:order_by,
	username?:order_by
}

export type auth_user_mutation_response = {
	__typename?: "auth_user_mutation_response",
	affected_rows:number,
	returning:auth_user[]
}

export type auth_user_obj_rel_insert_input = {
		data:auth_user_insert_input,
	on_conflict?:auth_user_on_conflict
}

export type auth_user_on_conflict = {
		constraint:auth_user_constraint,
	update_columns:auth_user_update_column[],
	where?:auth_user_bool_exp
}

export type auth_user_order_by = {
		date_joined?:order_by,
	email?:order_by,
	first_name?:order_by,
	id?:order_by,
	is_active?:order_by,
	is_staff?:order_by,
	is_superuser?:order_by,
	last_login?:order_by,
	last_name?:order_by,
	meetings_guildusers_aggregate?:meetings_guilduser_aggregate_order_by,
	meetings_meetings_aggregate?:meetings_meeting_aggregate_order_by,
	meetings_meetingusers_aggregate?:meetings_meetinguser_aggregate_order_by,
	meetings_sphere_users_aggregate?:meetings_sphere_users_aggregate_order_by,
	password?:order_by,
	username?:order_by
}

export enum auth_user_select_column {
	date_joined = "date_joined",
	email = "email",
	first_name = "first_name",
	id = "id",
	is_active = "is_active",
	is_staff = "is_staff",
	is_superuser = "is_superuser",
	last_login = "last_login",
	last_name = "last_name",
	password = "password",
	username = "username"
}

export type auth_user_set_input = {
		date_joined?:timestamptz,
	email?:string,
	first_name?:string,
	id?:number,
	is_active?:boolean,
	is_staff?:boolean,
	is_superuser?:boolean,
	last_login?:timestamptz,
	last_name?:string,
	password?:string,
	username?:string
}

export type auth_user_stddev_fields = {
	__typename?: "auth_user_stddev_fields",
	id?:number
}

export type auth_user_stddev_order_by = {
		id?:order_by
}

export type auth_user_stddev_pop_fields = {
	__typename?: "auth_user_stddev_pop_fields",
	id?:number
}

export type auth_user_stddev_pop_order_by = {
		id?:order_by
}

export type auth_user_stddev_samp_fields = {
	__typename?: "auth_user_stddev_samp_fields",
	id?:number
}

export type auth_user_stddev_samp_order_by = {
		id?:order_by
}

export type auth_user_sum_fields = {
	__typename?: "auth_user_sum_fields",
	id?:number
}

export type auth_user_sum_order_by = {
		id?:order_by
}

export enum auth_user_update_column {
	date_joined = "date_joined",
	email = "email",
	first_name = "first_name",
	id = "id",
	is_active = "is_active",
	is_staff = "is_staff",
	is_superuser = "is_superuser",
	last_login = "last_login",
	last_name = "last_name",
	password = "password",
	username = "username"
}

export type auth_user_var_pop_fields = {
	__typename?: "auth_user_var_pop_fields",
	id?:number
}

export type auth_user_var_pop_order_by = {
		id?:order_by
}

export type auth_user_var_samp_fields = {
	__typename?: "auth_user_var_samp_fields",
	id?:number
}

export type auth_user_var_samp_order_by = {
		id?:order_by
}

export type auth_user_variance_fields = {
	__typename?: "auth_user_variance_fields",
	id?:number
}

export type auth_user_variance_order_by = {
		id?:order_by
}

export type Boolean_comparison_exp = {
		_eq?:boolean,
	_gt?:boolean,
	_gte?:boolean,
	_in?:boolean[],
	_is_null?:boolean,
	_lt?:boolean,
	_lte?:boolean,
	_neq?:boolean,
	_nin?:boolean[]
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

export type meetings_guild = {
	__typename?: "meetings_guild",
	created_at:timestamptz,
	description:string,
	id:number,
	meetings_guildusers:meetings_guilduser[],
	meetings_guildusers_aggregate:meetings_guilduser_aggregate,
	meetings_meetings:meetings_meeting[],
	meetings_meetings_aggregate:meetings_meeting_aggregate,
	name:string
}

export type meetings_guild_aggregate = {
	__typename?: "meetings_guild_aggregate",
	aggregate?:meetings_guild_aggregate_fields,
	nodes:meetings_guild[]
}

export type meetings_guild_aggregate_fields = {
	__typename?: "meetings_guild_aggregate_fields",
	avg?:meetings_guild_avg_fields,
	count?:number,
	max?:meetings_guild_max_fields,
	min?:meetings_guild_min_fields,
	stddev?:meetings_guild_stddev_fields,
	stddev_pop?:meetings_guild_stddev_pop_fields,
	stddev_samp?:meetings_guild_stddev_samp_fields,
	sum?:meetings_guild_sum_fields,
	var_pop?:meetings_guild_var_pop_fields,
	var_samp?:meetings_guild_var_samp_fields,
	variance?:meetings_guild_variance_fields
}

export type meetings_guild_aggregate_order_by = {
		avg?:meetings_guild_avg_order_by,
	count?:order_by,
	max?:meetings_guild_max_order_by,
	min?:meetings_guild_min_order_by,
	stddev?:meetings_guild_stddev_order_by,
	stddev_pop?:meetings_guild_stddev_pop_order_by,
	stddev_samp?:meetings_guild_stddev_samp_order_by,
	sum?:meetings_guild_sum_order_by,
	var_pop?:meetings_guild_var_pop_order_by,
	var_samp?:meetings_guild_var_samp_order_by,
	variance?:meetings_guild_variance_order_by
}

export type meetings_guild_arr_rel_insert_input = {
		data:meetings_guild_insert_input[],
	on_conflict?:meetings_guild_on_conflict
}

export type meetings_guild_avg_fields = {
	__typename?: "meetings_guild_avg_fields",
	id?:number
}

export type meetings_guild_avg_order_by = {
		id?:order_by
}

export type meetings_guild_bool_exp = {
		_and?:(meetings_guild_bool_exp | undefined)[],
	_not?:meetings_guild_bool_exp,
	_or?:(meetings_guild_bool_exp | undefined)[],
	created_at?:timestamptz_comparison_exp,
	description?:String_comparison_exp,
	id?:Int_comparison_exp,
	meetings_guildusers?:meetings_guilduser_bool_exp,
	meetings_meetings?:meetings_meeting_bool_exp,
	name?:String_comparison_exp
}

export enum meetings_guild_constraint {
	meetings_guild_pkey = "meetings_guild_pkey"
}

export type meetings_guild_inc_input = {
		id?:number
}

export type meetings_guild_insert_input = {
		created_at?:timestamptz,
	description?:string,
	id?:number,
	meetings_guildusers?:meetings_guilduser_arr_rel_insert_input,
	meetings_meetings?:meetings_meeting_arr_rel_insert_input,
	name?:string
}

export type meetings_guild_max_fields = {
	__typename?: "meetings_guild_max_fields",
	created_at?:timestamptz,
	description?:string,
	id?:number,
	name?:string
}

export type meetings_guild_max_order_by = {
		created_at?:order_by,
	description?:order_by,
	id?:order_by,
	name?:order_by
}

export type meetings_guild_min_fields = {
	__typename?: "meetings_guild_min_fields",
	created_at?:timestamptz,
	description?:string,
	id?:number,
	name?:string
}

export type meetings_guild_min_order_by = {
		created_at?:order_by,
	description?:order_by,
	id?:order_by,
	name?:order_by
}

export type meetings_guild_mutation_response = {
	__typename?: "meetings_guild_mutation_response",
	affected_rows:number,
	returning:meetings_guild[]
}

export type meetings_guild_obj_rel_insert_input = {
		data:meetings_guild_insert_input,
	on_conflict?:meetings_guild_on_conflict
}

export type meetings_guild_on_conflict = {
		constraint:meetings_guild_constraint,
	update_columns:meetings_guild_update_column[],
	where?:meetings_guild_bool_exp
}

export type meetings_guild_order_by = {
		created_at?:order_by,
	description?:order_by,
	id?:order_by,
	meetings_guildusers_aggregate?:meetings_guilduser_aggregate_order_by,
	meetings_meetings_aggregate?:meetings_meeting_aggregate_order_by,
	name?:order_by
}

export enum meetings_guild_select_column {
	created_at = "created_at",
	description = "description",
	id = "id",
	name = "name"
}

export type meetings_guild_set_input = {
		created_at?:timestamptz,
	description?:string,
	id?:number,
	name?:string
}

export type meetings_guild_stddev_fields = {
	__typename?: "meetings_guild_stddev_fields",
	id?:number
}

export type meetings_guild_stddev_order_by = {
		id?:order_by
}

export type meetings_guild_stddev_pop_fields = {
	__typename?: "meetings_guild_stddev_pop_fields",
	id?:number
}

export type meetings_guild_stddev_pop_order_by = {
		id?:order_by
}

export type meetings_guild_stddev_samp_fields = {
	__typename?: "meetings_guild_stddev_samp_fields",
	id?:number
}

export type meetings_guild_stddev_samp_order_by = {
		id?:order_by
}

export type meetings_guild_sum_fields = {
	__typename?: "meetings_guild_sum_fields",
	id?:number
}

export type meetings_guild_sum_order_by = {
		id?:order_by
}

export enum meetings_guild_update_column {
	created_at = "created_at",
	description = "description",
	id = "id",
	name = "name"
}

export type meetings_guild_var_pop_fields = {
	__typename?: "meetings_guild_var_pop_fields",
	id?:number
}

export type meetings_guild_var_pop_order_by = {
		id?:order_by
}

export type meetings_guild_var_samp_fields = {
	__typename?: "meetings_guild_var_samp_fields",
	id?:number
}

export type meetings_guild_var_samp_order_by = {
		id?:order_by
}

export type meetings_guild_variance_fields = {
	__typename?: "meetings_guild_variance_fields",
	id?:number
}

export type meetings_guild_variance_order_by = {
		id?:order_by
}

export type meetings_guilduser = {
	__typename?: "meetings_guilduser",
	auth_user:auth_user,
	guild_id:number,
	id:number,
	meetings_guild:meetings_guild,
	membership_type:string,
	user_id:number
}

export type meetings_guilduser_aggregate = {
	__typename?: "meetings_guilduser_aggregate",
	aggregate?:meetings_guilduser_aggregate_fields,
	nodes:meetings_guilduser[]
}

export type meetings_guilduser_aggregate_fields = {
	__typename?: "meetings_guilduser_aggregate_fields",
	avg?:meetings_guilduser_avg_fields,
	count?:number,
	max?:meetings_guilduser_max_fields,
	min?:meetings_guilduser_min_fields,
	stddev?:meetings_guilduser_stddev_fields,
	stddev_pop?:meetings_guilduser_stddev_pop_fields,
	stddev_samp?:meetings_guilduser_stddev_samp_fields,
	sum?:meetings_guilduser_sum_fields,
	var_pop?:meetings_guilduser_var_pop_fields,
	var_samp?:meetings_guilduser_var_samp_fields,
	variance?:meetings_guilduser_variance_fields
}

export type meetings_guilduser_aggregate_order_by = {
		avg?:meetings_guilduser_avg_order_by,
	count?:order_by,
	max?:meetings_guilduser_max_order_by,
	min?:meetings_guilduser_min_order_by,
	stddev?:meetings_guilduser_stddev_order_by,
	stddev_pop?:meetings_guilduser_stddev_pop_order_by,
	stddev_samp?:meetings_guilduser_stddev_samp_order_by,
	sum?:meetings_guilduser_sum_order_by,
	var_pop?:meetings_guilduser_var_pop_order_by,
	var_samp?:meetings_guilduser_var_samp_order_by,
	variance?:meetings_guilduser_variance_order_by
}

export type meetings_guilduser_arr_rel_insert_input = {
		data:meetings_guilduser_insert_input[],
	on_conflict?:meetings_guilduser_on_conflict
}

export type meetings_guilduser_avg_fields = {
	__typename?: "meetings_guilduser_avg_fields",
	guild_id?:number,
	id?:number,
	user_id?:number
}

export type meetings_guilduser_avg_order_by = {
		guild_id?:order_by,
	id?:order_by,
	user_id?:order_by
}

export type meetings_guilduser_bool_exp = {
		_and?:(meetings_guilduser_bool_exp | undefined)[],
	_not?:meetings_guilduser_bool_exp,
	_or?:(meetings_guilduser_bool_exp | undefined)[],
	auth_user?:auth_user_bool_exp,
	guild_id?:Int_comparison_exp,
	id?:Int_comparison_exp,
	meetings_guild?:meetings_guild_bool_exp,
	membership_type?:String_comparison_exp,
	user_id?:Int_comparison_exp
}

export enum meetings_guilduser_constraint {
	meetings_guilduser_pkey = "meetings_guilduser_pkey"
}

export type meetings_guilduser_inc_input = {
		guild_id?:number,
	id?:number,
	user_id?:number
}

export type meetings_guilduser_insert_input = {
		auth_user?:auth_user_obj_rel_insert_input,
	guild_id?:number,
	id?:number,
	meetings_guild?:meetings_guild_obj_rel_insert_input,
	membership_type?:string,
	user_id?:number
}

export type meetings_guilduser_max_fields = {
	__typename?: "meetings_guilduser_max_fields",
	guild_id?:number,
	id?:number,
	membership_type?:string,
	user_id?:number
}

export type meetings_guilduser_max_order_by = {
		guild_id?:order_by,
	id?:order_by,
	membership_type?:order_by,
	user_id?:order_by
}

export type meetings_guilduser_min_fields = {
	__typename?: "meetings_guilduser_min_fields",
	guild_id?:number,
	id?:number,
	membership_type?:string,
	user_id?:number
}

export type meetings_guilduser_min_order_by = {
		guild_id?:order_by,
	id?:order_by,
	membership_type?:order_by,
	user_id?:order_by
}

export type meetings_guilduser_mutation_response = {
	__typename?: "meetings_guilduser_mutation_response",
	affected_rows:number,
	returning:meetings_guilduser[]
}

export type meetings_guilduser_obj_rel_insert_input = {
		data:meetings_guilduser_insert_input,
	on_conflict?:meetings_guilduser_on_conflict
}

export type meetings_guilduser_on_conflict = {
		constraint:meetings_guilduser_constraint,
	update_columns:meetings_guilduser_update_column[],
	where?:meetings_guilduser_bool_exp
}

export type meetings_guilduser_order_by = {
		auth_user?:auth_user_order_by,
	guild_id?:order_by,
	id?:order_by,
	meetings_guild?:meetings_guild_order_by,
	membership_type?:order_by,
	user_id?:order_by
}

export enum meetings_guilduser_select_column {
	guild_id = "guild_id",
	id = "id",
	membership_type = "membership_type",
	user_id = "user_id"
}

export type meetings_guilduser_set_input = {
		guild_id?:number,
	id?:number,
	membership_type?:string,
	user_id?:number
}

export type meetings_guilduser_stddev_fields = {
	__typename?: "meetings_guilduser_stddev_fields",
	guild_id?:number,
	id?:number,
	user_id?:number
}

export type meetings_guilduser_stddev_order_by = {
		guild_id?:order_by,
	id?:order_by,
	user_id?:order_by
}

export type meetings_guilduser_stddev_pop_fields = {
	__typename?: "meetings_guilduser_stddev_pop_fields",
	guild_id?:number,
	id?:number,
	user_id?:number
}

export type meetings_guilduser_stddev_pop_order_by = {
		guild_id?:order_by,
	id?:order_by,
	user_id?:order_by
}

export type meetings_guilduser_stddev_samp_fields = {
	__typename?: "meetings_guilduser_stddev_samp_fields",
	guild_id?:number,
	id?:number,
	user_id?:number
}

export type meetings_guilduser_stddev_samp_order_by = {
		guild_id?:order_by,
	id?:order_by,
	user_id?:order_by
}

export type meetings_guilduser_sum_fields = {
	__typename?: "meetings_guilduser_sum_fields",
	guild_id?:number,
	id?:number,
	user_id?:number
}

export type meetings_guilduser_sum_order_by = {
		guild_id?:order_by,
	id?:order_by,
	user_id?:order_by
}

export enum meetings_guilduser_update_column {
	guild_id = "guild_id",
	id = "id",
	membership_type = "membership_type",
	user_id = "user_id"
}

export type meetings_guilduser_var_pop_fields = {
	__typename?: "meetings_guilduser_var_pop_fields",
	guild_id?:number,
	id?:number,
	user_id?:number
}

export type meetings_guilduser_var_pop_order_by = {
		guild_id?:order_by,
	id?:order_by,
	user_id?:order_by
}

export type meetings_guilduser_var_samp_fields = {
	__typename?: "meetings_guilduser_var_samp_fields",
	guild_id?:number,
	id?:number,
	user_id?:number
}

export type meetings_guilduser_var_samp_order_by = {
		guild_id?:order_by,
	id?:order_by,
	user_id?:order_by
}

export type meetings_guilduser_variance_fields = {
	__typename?: "meetings_guilduser_variance_fields",
	guild_id?:number,
	id?:number,
	user_id?:number
}

export type meetings_guilduser_variance_order_by = {
		guild_id?:order_by,
	id?:order_by,
	user_id?:order_by
}

export type meetings_meeting = {
	__typename?: "meetings_meeting",
	auth_user:auth_user,
	created_at:timestamptz,
	description:string,
	end_time?:timestamptz,
	guild_id:number,
	id:number,
	location?:string,
	meetings_guild:meetings_guild,
	meetings_meetingusers:meetings_meetinguser[],
	meetings_meetingusers_aggregate:meetings_meetinguser_aggregate,
	meetings_sphere:meetings_sphere,
	organizer_id:number,
	publication_time?:timestamptz,
	sphere_id:number,
	start_time?:timestamptz,
	title:string,
	updated_at:timestamptz
}

export type meetings_meeting_aggregate = {
	__typename?: "meetings_meeting_aggregate",
	aggregate?:meetings_meeting_aggregate_fields,
	nodes:meetings_meeting[]
}

export type meetings_meeting_aggregate_fields = {
	__typename?: "meetings_meeting_aggregate_fields",
	avg?:meetings_meeting_avg_fields,
	count?:number,
	max?:meetings_meeting_max_fields,
	min?:meetings_meeting_min_fields,
	stddev?:meetings_meeting_stddev_fields,
	stddev_pop?:meetings_meeting_stddev_pop_fields,
	stddev_samp?:meetings_meeting_stddev_samp_fields,
	sum?:meetings_meeting_sum_fields,
	var_pop?:meetings_meeting_var_pop_fields,
	var_samp?:meetings_meeting_var_samp_fields,
	variance?:meetings_meeting_variance_fields
}

export type meetings_meeting_aggregate_order_by = {
		avg?:meetings_meeting_avg_order_by,
	count?:order_by,
	max?:meetings_meeting_max_order_by,
	min?:meetings_meeting_min_order_by,
	stddev?:meetings_meeting_stddev_order_by,
	stddev_pop?:meetings_meeting_stddev_pop_order_by,
	stddev_samp?:meetings_meeting_stddev_samp_order_by,
	sum?:meetings_meeting_sum_order_by,
	var_pop?:meetings_meeting_var_pop_order_by,
	var_samp?:meetings_meeting_var_samp_order_by,
	variance?:meetings_meeting_variance_order_by
}

export type meetings_meeting_arr_rel_insert_input = {
		data:meetings_meeting_insert_input[],
	on_conflict?:meetings_meeting_on_conflict
}

export type meetings_meeting_avg_fields = {
	__typename?: "meetings_meeting_avg_fields",
	guild_id?:number,
	id?:number,
	organizer_id?:number,
	sphere_id?:number
}

export type meetings_meeting_avg_order_by = {
		guild_id?:order_by,
	id?:order_by,
	organizer_id?:order_by,
	sphere_id?:order_by
}

export type meetings_meeting_bool_exp = {
		_and?:(meetings_meeting_bool_exp | undefined)[],
	_not?:meetings_meeting_bool_exp,
	_or?:(meetings_meeting_bool_exp | undefined)[],
	auth_user?:auth_user_bool_exp,
	created_at?:timestamptz_comparison_exp,
	description?:String_comparison_exp,
	end_time?:timestamptz_comparison_exp,
	guild_id?:Int_comparison_exp,
	id?:Int_comparison_exp,
	location?:String_comparison_exp,
	meetings_guild?:meetings_guild_bool_exp,
	meetings_meetingusers?:meetings_meetinguser_bool_exp,
	meetings_sphere?:meetings_sphere_bool_exp,
	organizer_id?:Int_comparison_exp,
	publication_time?:timestamptz_comparison_exp,
	sphere_id?:Int_comparison_exp,
	start_time?:timestamptz_comparison_exp,
	title?:String_comparison_exp,
	updated_at?:timestamptz_comparison_exp
}

export enum meetings_meeting_constraint {
	meetings_meeting_pkey = "meetings_meeting_pkey"
}

export type meetings_meeting_inc_input = {
		guild_id?:number,
	id?:number,
	organizer_id?:number,
	sphere_id?:number
}

export type meetings_meeting_insert_input = {
		auth_user?:auth_user_obj_rel_insert_input,
	created_at?:timestamptz,
	description?:string,
	end_time?:timestamptz,
	guild_id?:number,
	id?:number,
	location?:string,
	meetings_guild?:meetings_guild_obj_rel_insert_input,
	meetings_meetingusers?:meetings_meetinguser_arr_rel_insert_input,
	meetings_sphere?:meetings_sphere_obj_rel_insert_input,
	organizer_id?:number,
	publication_time?:timestamptz,
	sphere_id?:number,
	start_time?:timestamptz,
	title?:string,
	updated_at?:timestamptz
}

export type meetings_meeting_max_fields = {
	__typename?: "meetings_meeting_max_fields",
	created_at?:timestamptz,
	description?:string,
	end_time?:timestamptz,
	guild_id?:number,
	id?:number,
	location?:string,
	organizer_id?:number,
	publication_time?:timestamptz,
	sphere_id?:number,
	start_time?:timestamptz,
	title?:string,
	updated_at?:timestamptz
}

export type meetings_meeting_max_order_by = {
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

export type meetings_meeting_min_fields = {
	__typename?: "meetings_meeting_min_fields",
	created_at?:timestamptz,
	description?:string,
	end_time?:timestamptz,
	guild_id?:number,
	id?:number,
	location?:string,
	organizer_id?:number,
	publication_time?:timestamptz,
	sphere_id?:number,
	start_time?:timestamptz,
	title?:string,
	updated_at?:timestamptz
}

export type meetings_meeting_min_order_by = {
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

export type meetings_meeting_mutation_response = {
	__typename?: "meetings_meeting_mutation_response",
	affected_rows:number,
	returning:meetings_meeting[]
}

export type meetings_meeting_obj_rel_insert_input = {
		data:meetings_meeting_insert_input,
	on_conflict?:meetings_meeting_on_conflict
}

export type meetings_meeting_on_conflict = {
		constraint:meetings_meeting_constraint,
	update_columns:meetings_meeting_update_column[],
	where?:meetings_meeting_bool_exp
}

export type meetings_meeting_order_by = {
		auth_user?:auth_user_order_by,
	created_at?:order_by,
	description?:order_by,
	end_time?:order_by,
	guild_id?:order_by,
	id?:order_by,
	location?:order_by,
	meetings_guild?:meetings_guild_order_by,
	meetings_meetingusers_aggregate?:meetings_meetinguser_aggregate_order_by,
	meetings_sphere?:meetings_sphere_order_by,
	organizer_id?:order_by,
	publication_time?:order_by,
	sphere_id?:order_by,
	start_time?:order_by,
	title?:order_by,
	updated_at?:order_by
}

export enum meetings_meeting_select_column {
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

export type meetings_meeting_set_input = {
		created_at?:timestamptz,
	description?:string,
	end_time?:timestamptz,
	guild_id?:number,
	id?:number,
	location?:string,
	organizer_id?:number,
	publication_time?:timestamptz,
	sphere_id?:number,
	start_time?:timestamptz,
	title?:string,
	updated_at?:timestamptz
}

export type meetings_meeting_stddev_fields = {
	__typename?: "meetings_meeting_stddev_fields",
	guild_id?:number,
	id?:number,
	organizer_id?:number,
	sphere_id?:number
}

export type meetings_meeting_stddev_order_by = {
		guild_id?:order_by,
	id?:order_by,
	organizer_id?:order_by,
	sphere_id?:order_by
}

export type meetings_meeting_stddev_pop_fields = {
	__typename?: "meetings_meeting_stddev_pop_fields",
	guild_id?:number,
	id?:number,
	organizer_id?:number,
	sphere_id?:number
}

export type meetings_meeting_stddev_pop_order_by = {
		guild_id?:order_by,
	id?:order_by,
	organizer_id?:order_by,
	sphere_id?:order_by
}

export type meetings_meeting_stddev_samp_fields = {
	__typename?: "meetings_meeting_stddev_samp_fields",
	guild_id?:number,
	id?:number,
	organizer_id?:number,
	sphere_id?:number
}

export type meetings_meeting_stddev_samp_order_by = {
		guild_id?:order_by,
	id?:order_by,
	organizer_id?:order_by,
	sphere_id?:order_by
}

export type meetings_meeting_sum_fields = {
	__typename?: "meetings_meeting_sum_fields",
	guild_id?:number,
	id?:number,
	organizer_id?:number,
	sphere_id?:number
}

export type meetings_meeting_sum_order_by = {
		guild_id?:order_by,
	id?:order_by,
	organizer_id?:order_by,
	sphere_id?:order_by
}

export enum meetings_meeting_update_column {
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

export type meetings_meeting_var_pop_fields = {
	__typename?: "meetings_meeting_var_pop_fields",
	guild_id?:number,
	id?:number,
	organizer_id?:number,
	sphere_id?:number
}

export type meetings_meeting_var_pop_order_by = {
		guild_id?:order_by,
	id?:order_by,
	organizer_id?:order_by,
	sphere_id?:order_by
}

export type meetings_meeting_var_samp_fields = {
	__typename?: "meetings_meeting_var_samp_fields",
	guild_id?:number,
	id?:number,
	organizer_id?:number,
	sphere_id?:number
}

export type meetings_meeting_var_samp_order_by = {
		guild_id?:order_by,
	id?:order_by,
	organizer_id?:order_by,
	sphere_id?:order_by
}

export type meetings_meeting_variance_fields = {
	__typename?: "meetings_meeting_variance_fields",
	guild_id?:number,
	id?:number,
	organizer_id?:number,
	sphere_id?:number
}

export type meetings_meeting_variance_order_by = {
		guild_id?:order_by,
	id?:order_by,
	organizer_id?:order_by,
	sphere_id?:order_by
}

export type meetings_meetinguser = {
	__typename?: "meetings_meetinguser",
	auth_user:auth_user,
	id:number,
	meeting_id:number,
	meetings_meeting:meetings_meeting,
	status:string,
	user_id:number
}

export type meetings_meetinguser_aggregate = {
	__typename?: "meetings_meetinguser_aggregate",
	aggregate?:meetings_meetinguser_aggregate_fields,
	nodes:meetings_meetinguser[]
}

export type meetings_meetinguser_aggregate_fields = {
	__typename?: "meetings_meetinguser_aggregate_fields",
	avg?:meetings_meetinguser_avg_fields,
	count?:number,
	max?:meetings_meetinguser_max_fields,
	min?:meetings_meetinguser_min_fields,
	stddev?:meetings_meetinguser_stddev_fields,
	stddev_pop?:meetings_meetinguser_stddev_pop_fields,
	stddev_samp?:meetings_meetinguser_stddev_samp_fields,
	sum?:meetings_meetinguser_sum_fields,
	var_pop?:meetings_meetinguser_var_pop_fields,
	var_samp?:meetings_meetinguser_var_samp_fields,
	variance?:meetings_meetinguser_variance_fields
}

export type meetings_meetinguser_aggregate_order_by = {
		avg?:meetings_meetinguser_avg_order_by,
	count?:order_by,
	max?:meetings_meetinguser_max_order_by,
	min?:meetings_meetinguser_min_order_by,
	stddev?:meetings_meetinguser_stddev_order_by,
	stddev_pop?:meetings_meetinguser_stddev_pop_order_by,
	stddev_samp?:meetings_meetinguser_stddev_samp_order_by,
	sum?:meetings_meetinguser_sum_order_by,
	var_pop?:meetings_meetinguser_var_pop_order_by,
	var_samp?:meetings_meetinguser_var_samp_order_by,
	variance?:meetings_meetinguser_variance_order_by
}

export type meetings_meetinguser_arr_rel_insert_input = {
		data:meetings_meetinguser_insert_input[],
	on_conflict?:meetings_meetinguser_on_conflict
}

export type meetings_meetinguser_avg_fields = {
	__typename?: "meetings_meetinguser_avg_fields",
	id?:number,
	meeting_id?:number,
	user_id?:number
}

export type meetings_meetinguser_avg_order_by = {
		id?:order_by,
	meeting_id?:order_by,
	user_id?:order_by
}

export type meetings_meetinguser_bool_exp = {
		_and?:(meetings_meetinguser_bool_exp | undefined)[],
	_not?:meetings_meetinguser_bool_exp,
	_or?:(meetings_meetinguser_bool_exp | undefined)[],
	auth_user?:auth_user_bool_exp,
	id?:Int_comparison_exp,
	meeting_id?:Int_comparison_exp,
	meetings_meeting?:meetings_meeting_bool_exp,
	status?:String_comparison_exp,
	user_id?:Int_comparison_exp
}

export enum meetings_meetinguser_constraint {
	meetings_meetinguser_pkey = "meetings_meetinguser_pkey"
}

export type meetings_meetinguser_inc_input = {
		id?:number,
	meeting_id?:number,
	user_id?:number
}

export type meetings_meetinguser_insert_input = {
		auth_user?:auth_user_obj_rel_insert_input,
	id?:number,
	meeting_id?:number,
	meetings_meeting?:meetings_meeting_obj_rel_insert_input,
	status?:string,
	user_id?:number
}

export type meetings_meetinguser_max_fields = {
	__typename?: "meetings_meetinguser_max_fields",
	id?:number,
	meeting_id?:number,
	status?:string,
	user_id?:number
}

export type meetings_meetinguser_max_order_by = {
		id?:order_by,
	meeting_id?:order_by,
	status?:order_by,
	user_id?:order_by
}

export type meetings_meetinguser_min_fields = {
	__typename?: "meetings_meetinguser_min_fields",
	id?:number,
	meeting_id?:number,
	status?:string,
	user_id?:number
}

export type meetings_meetinguser_min_order_by = {
		id?:order_by,
	meeting_id?:order_by,
	status?:order_by,
	user_id?:order_by
}

export type meetings_meetinguser_mutation_response = {
	__typename?: "meetings_meetinguser_mutation_response",
	affected_rows:number,
	returning:meetings_meetinguser[]
}

export type meetings_meetinguser_obj_rel_insert_input = {
		data:meetings_meetinguser_insert_input,
	on_conflict?:meetings_meetinguser_on_conflict
}

export type meetings_meetinguser_on_conflict = {
		constraint:meetings_meetinguser_constraint,
	update_columns:meetings_meetinguser_update_column[],
	where?:meetings_meetinguser_bool_exp
}

export type meetings_meetinguser_order_by = {
		auth_user?:auth_user_order_by,
	id?:order_by,
	meeting_id?:order_by,
	meetings_meeting?:meetings_meeting_order_by,
	status?:order_by,
	user_id?:order_by
}

export enum meetings_meetinguser_select_column {
	id = "id",
	meeting_id = "meeting_id",
	status = "status",
	user_id = "user_id"
}

export type meetings_meetinguser_set_input = {
		id?:number,
	meeting_id?:number,
	status?:string,
	user_id?:number
}

export type meetings_meetinguser_stddev_fields = {
	__typename?: "meetings_meetinguser_stddev_fields",
	id?:number,
	meeting_id?:number,
	user_id?:number
}

export type meetings_meetinguser_stddev_order_by = {
		id?:order_by,
	meeting_id?:order_by,
	user_id?:order_by
}

export type meetings_meetinguser_stddev_pop_fields = {
	__typename?: "meetings_meetinguser_stddev_pop_fields",
	id?:number,
	meeting_id?:number,
	user_id?:number
}

export type meetings_meetinguser_stddev_pop_order_by = {
		id?:order_by,
	meeting_id?:order_by,
	user_id?:order_by
}

export type meetings_meetinguser_stddev_samp_fields = {
	__typename?: "meetings_meetinguser_stddev_samp_fields",
	id?:number,
	meeting_id?:number,
	user_id?:number
}

export type meetings_meetinguser_stddev_samp_order_by = {
		id?:order_by,
	meeting_id?:order_by,
	user_id?:order_by
}

export type meetings_meetinguser_sum_fields = {
	__typename?: "meetings_meetinguser_sum_fields",
	id?:number,
	meeting_id?:number,
	user_id?:number
}

export type meetings_meetinguser_sum_order_by = {
		id?:order_by,
	meeting_id?:order_by,
	user_id?:order_by
}

export enum meetings_meetinguser_update_column {
	id = "id",
	meeting_id = "meeting_id",
	status = "status",
	user_id = "user_id"
}

export type meetings_meetinguser_var_pop_fields = {
	__typename?: "meetings_meetinguser_var_pop_fields",
	id?:number,
	meeting_id?:number,
	user_id?:number
}

export type meetings_meetinguser_var_pop_order_by = {
		id?:order_by,
	meeting_id?:order_by,
	user_id?:order_by
}

export type meetings_meetinguser_var_samp_fields = {
	__typename?: "meetings_meetinguser_var_samp_fields",
	id?:number,
	meeting_id?:number,
	user_id?:number
}

export type meetings_meetinguser_var_samp_order_by = {
		id?:order_by,
	meeting_id?:order_by,
	user_id?:order_by
}

export type meetings_meetinguser_variance_fields = {
	__typename?: "meetings_meetinguser_variance_fields",
	id?:number,
	meeting_id?:number,
	user_id?:number
}

export type meetings_meetinguser_variance_order_by = {
		id?:order_by,
	meeting_id?:order_by,
	user_id?:order_by
}

export type meetings_sphere = {
	__typename?: "meetings_sphere",
	id:number,
	meetings_meetings:meetings_meeting[],
	meetings_meetings_aggregate:meetings_meeting_aggregate,
	meetings_sphere_users:meetings_sphere_users[],
	meetings_sphere_users_aggregate:meetings_sphere_users_aggregate,
	name:string
}

export type meetings_sphere_aggregate = {
	__typename?: "meetings_sphere_aggregate",
	aggregate?:meetings_sphere_aggregate_fields,
	nodes:meetings_sphere[]
}

export type meetings_sphere_aggregate_fields = {
	__typename?: "meetings_sphere_aggregate_fields",
	avg?:meetings_sphere_avg_fields,
	count?:number,
	max?:meetings_sphere_max_fields,
	min?:meetings_sphere_min_fields,
	stddev?:meetings_sphere_stddev_fields,
	stddev_pop?:meetings_sphere_stddev_pop_fields,
	stddev_samp?:meetings_sphere_stddev_samp_fields,
	sum?:meetings_sphere_sum_fields,
	var_pop?:meetings_sphere_var_pop_fields,
	var_samp?:meetings_sphere_var_samp_fields,
	variance?:meetings_sphere_variance_fields
}

export type meetings_sphere_aggregate_order_by = {
		avg?:meetings_sphere_avg_order_by,
	count?:order_by,
	max?:meetings_sphere_max_order_by,
	min?:meetings_sphere_min_order_by,
	stddev?:meetings_sphere_stddev_order_by,
	stddev_pop?:meetings_sphere_stddev_pop_order_by,
	stddev_samp?:meetings_sphere_stddev_samp_order_by,
	sum?:meetings_sphere_sum_order_by,
	var_pop?:meetings_sphere_var_pop_order_by,
	var_samp?:meetings_sphere_var_samp_order_by,
	variance?:meetings_sphere_variance_order_by
}

export type meetings_sphere_arr_rel_insert_input = {
		data:meetings_sphere_insert_input[],
	on_conflict?:meetings_sphere_on_conflict
}

export type meetings_sphere_avg_fields = {
	__typename?: "meetings_sphere_avg_fields",
	id?:number
}

export type meetings_sphere_avg_order_by = {
		id?:order_by
}

export type meetings_sphere_bool_exp = {
		_and?:(meetings_sphere_bool_exp | undefined)[],
	_not?:meetings_sphere_bool_exp,
	_or?:(meetings_sphere_bool_exp | undefined)[],
	id?:Int_comparison_exp,
	meetings_meetings?:meetings_meeting_bool_exp,
	meetings_sphere_users?:meetings_sphere_users_bool_exp,
	name?:String_comparison_exp
}

export enum meetings_sphere_constraint {
	meetings_sphere_pkey = "meetings_sphere_pkey"
}

export type meetings_sphere_inc_input = {
		id?:number
}

export type meetings_sphere_insert_input = {
		id?:number,
	meetings_meetings?:meetings_meeting_arr_rel_insert_input,
	meetings_sphere_users?:meetings_sphere_users_arr_rel_insert_input,
	name?:string
}

export type meetings_sphere_max_fields = {
	__typename?: "meetings_sphere_max_fields",
	id?:number,
	name?:string
}

export type meetings_sphere_max_order_by = {
		id?:order_by,
	name?:order_by
}

export type meetings_sphere_min_fields = {
	__typename?: "meetings_sphere_min_fields",
	id?:number,
	name?:string
}

export type meetings_sphere_min_order_by = {
		id?:order_by,
	name?:order_by
}

export type meetings_sphere_mutation_response = {
	__typename?: "meetings_sphere_mutation_response",
	affected_rows:number,
	returning:meetings_sphere[]
}

export type meetings_sphere_obj_rel_insert_input = {
		data:meetings_sphere_insert_input,
	on_conflict?:meetings_sphere_on_conflict
}

export type meetings_sphere_on_conflict = {
		constraint:meetings_sphere_constraint,
	update_columns:meetings_sphere_update_column[],
	where?:meetings_sphere_bool_exp
}

export type meetings_sphere_order_by = {
		id?:order_by,
	meetings_meetings_aggregate?:meetings_meeting_aggregate_order_by,
	meetings_sphere_users_aggregate?:meetings_sphere_users_aggregate_order_by,
	name?:order_by
}

export enum meetings_sphere_select_column {
	id = "id",
	name = "name"
}

export type meetings_sphere_set_input = {
		id?:number,
	name?:string
}

export type meetings_sphere_stddev_fields = {
	__typename?: "meetings_sphere_stddev_fields",
	id?:number
}

export type meetings_sphere_stddev_order_by = {
		id?:order_by
}

export type meetings_sphere_stddev_pop_fields = {
	__typename?: "meetings_sphere_stddev_pop_fields",
	id?:number
}

export type meetings_sphere_stddev_pop_order_by = {
		id?:order_by
}

export type meetings_sphere_stddev_samp_fields = {
	__typename?: "meetings_sphere_stddev_samp_fields",
	id?:number
}

export type meetings_sphere_stddev_samp_order_by = {
		id?:order_by
}

export type meetings_sphere_sum_fields = {
	__typename?: "meetings_sphere_sum_fields",
	id?:number
}

export type meetings_sphere_sum_order_by = {
		id?:order_by
}

export enum meetings_sphere_update_column {
	id = "id",
	name = "name"
}

export type meetings_sphere_users = {
	__typename?: "meetings_sphere_users",
	auth_user:auth_user,
	id:number,
	meetings_sphere:meetings_sphere,
	sphere_id:number,
	user_id:number
}

export type meetings_sphere_users_aggregate = {
	__typename?: "meetings_sphere_users_aggregate",
	aggregate?:meetings_sphere_users_aggregate_fields,
	nodes:meetings_sphere_users[]
}

export type meetings_sphere_users_aggregate_fields = {
	__typename?: "meetings_sphere_users_aggregate_fields",
	avg?:meetings_sphere_users_avg_fields,
	count?:number,
	max?:meetings_sphere_users_max_fields,
	min?:meetings_sphere_users_min_fields,
	stddev?:meetings_sphere_users_stddev_fields,
	stddev_pop?:meetings_sphere_users_stddev_pop_fields,
	stddev_samp?:meetings_sphere_users_stddev_samp_fields,
	sum?:meetings_sphere_users_sum_fields,
	var_pop?:meetings_sphere_users_var_pop_fields,
	var_samp?:meetings_sphere_users_var_samp_fields,
	variance?:meetings_sphere_users_variance_fields
}

export type meetings_sphere_users_aggregate_order_by = {
		avg?:meetings_sphere_users_avg_order_by,
	count?:order_by,
	max?:meetings_sphere_users_max_order_by,
	min?:meetings_sphere_users_min_order_by,
	stddev?:meetings_sphere_users_stddev_order_by,
	stddev_pop?:meetings_sphere_users_stddev_pop_order_by,
	stddev_samp?:meetings_sphere_users_stddev_samp_order_by,
	sum?:meetings_sphere_users_sum_order_by,
	var_pop?:meetings_sphere_users_var_pop_order_by,
	var_samp?:meetings_sphere_users_var_samp_order_by,
	variance?:meetings_sphere_users_variance_order_by
}

export type meetings_sphere_users_arr_rel_insert_input = {
		data:meetings_sphere_users_insert_input[],
	on_conflict?:meetings_sphere_users_on_conflict
}

export type meetings_sphere_users_avg_fields = {
	__typename?: "meetings_sphere_users_avg_fields",
	id?:number,
	sphere_id?:number,
	user_id?:number
}

export type meetings_sphere_users_avg_order_by = {
		id?:order_by,
	sphere_id?:order_by,
	user_id?:order_by
}

export type meetings_sphere_users_bool_exp = {
		_and?:(meetings_sphere_users_bool_exp | undefined)[],
	_not?:meetings_sphere_users_bool_exp,
	_or?:(meetings_sphere_users_bool_exp | undefined)[],
	auth_user?:auth_user_bool_exp,
	id?:Int_comparison_exp,
	meetings_sphere?:meetings_sphere_bool_exp,
	sphere_id?:Int_comparison_exp,
	user_id?:Int_comparison_exp
}

export enum meetings_sphere_users_constraint {
	meetings_sphere_users_pkey = "meetings_sphere_users_pkey",
	meetings_sphere_users_sphere_id_user_id_88046145_uniq = "meetings_sphere_users_sphere_id_user_id_88046145_uniq"
}

export type meetings_sphere_users_inc_input = {
		id?:number,
	sphere_id?:number,
	user_id?:number
}

export type meetings_sphere_users_insert_input = {
		auth_user?:auth_user_obj_rel_insert_input,
	id?:number,
	meetings_sphere?:meetings_sphere_obj_rel_insert_input,
	sphere_id?:number,
	user_id?:number
}

export type meetings_sphere_users_max_fields = {
	__typename?: "meetings_sphere_users_max_fields",
	id?:number,
	sphere_id?:number,
	user_id?:number
}

export type meetings_sphere_users_max_order_by = {
		id?:order_by,
	sphere_id?:order_by,
	user_id?:order_by
}

export type meetings_sphere_users_min_fields = {
	__typename?: "meetings_sphere_users_min_fields",
	id?:number,
	sphere_id?:number,
	user_id?:number
}

export type meetings_sphere_users_min_order_by = {
		id?:order_by,
	sphere_id?:order_by,
	user_id?:order_by
}

export type meetings_sphere_users_mutation_response = {
	__typename?: "meetings_sphere_users_mutation_response",
	affected_rows:number,
	returning:meetings_sphere_users[]
}

export type meetings_sphere_users_obj_rel_insert_input = {
		data:meetings_sphere_users_insert_input,
	on_conflict?:meetings_sphere_users_on_conflict
}

export type meetings_sphere_users_on_conflict = {
		constraint:meetings_sphere_users_constraint,
	update_columns:meetings_sphere_users_update_column[],
	where?:meetings_sphere_users_bool_exp
}

export type meetings_sphere_users_order_by = {
		auth_user?:auth_user_order_by,
	id?:order_by,
	meetings_sphere?:meetings_sphere_order_by,
	sphere_id?:order_by,
	user_id?:order_by
}

export enum meetings_sphere_users_select_column {
	id = "id",
	sphere_id = "sphere_id",
	user_id = "user_id"
}

export type meetings_sphere_users_set_input = {
		id?:number,
	sphere_id?:number,
	user_id?:number
}

export type meetings_sphere_users_stddev_fields = {
	__typename?: "meetings_sphere_users_stddev_fields",
	id?:number,
	sphere_id?:number,
	user_id?:number
}

export type meetings_sphere_users_stddev_order_by = {
		id?:order_by,
	sphere_id?:order_by,
	user_id?:order_by
}

export type meetings_sphere_users_stddev_pop_fields = {
	__typename?: "meetings_sphere_users_stddev_pop_fields",
	id?:number,
	sphere_id?:number,
	user_id?:number
}

export type meetings_sphere_users_stddev_pop_order_by = {
		id?:order_by,
	sphere_id?:order_by,
	user_id?:order_by
}

export type meetings_sphere_users_stddev_samp_fields = {
	__typename?: "meetings_sphere_users_stddev_samp_fields",
	id?:number,
	sphere_id?:number,
	user_id?:number
}

export type meetings_sphere_users_stddev_samp_order_by = {
		id?:order_by,
	sphere_id?:order_by,
	user_id?:order_by
}

export type meetings_sphere_users_sum_fields = {
	__typename?: "meetings_sphere_users_sum_fields",
	id?:number,
	sphere_id?:number,
	user_id?:number
}

export type meetings_sphere_users_sum_order_by = {
		id?:order_by,
	sphere_id?:order_by,
	user_id?:order_by
}

export enum meetings_sphere_users_update_column {
	id = "id",
	sphere_id = "sphere_id",
	user_id = "user_id"
}

export type meetings_sphere_users_var_pop_fields = {
	__typename?: "meetings_sphere_users_var_pop_fields",
	id?:number,
	sphere_id?:number,
	user_id?:number
}

export type meetings_sphere_users_var_pop_order_by = {
		id?:order_by,
	sphere_id?:order_by,
	user_id?:order_by
}

export type meetings_sphere_users_var_samp_fields = {
	__typename?: "meetings_sphere_users_var_samp_fields",
	id?:number,
	sphere_id?:number,
	user_id?:number
}

export type meetings_sphere_users_var_samp_order_by = {
		id?:order_by,
	sphere_id?:order_by,
	user_id?:order_by
}

export type meetings_sphere_users_variance_fields = {
	__typename?: "meetings_sphere_users_variance_fields",
	id?:number,
	sphere_id?:number,
	user_id?:number
}

export type meetings_sphere_users_variance_order_by = {
		id?:order_by,
	sphere_id?:order_by,
	user_id?:order_by
}

export type meetings_sphere_var_pop_fields = {
	__typename?: "meetings_sphere_var_pop_fields",
	id?:number
}

export type meetings_sphere_var_pop_order_by = {
		id?:order_by
}

export type meetings_sphere_var_samp_fields = {
	__typename?: "meetings_sphere_var_samp_fields",
	id?:number
}

export type meetings_sphere_var_samp_order_by = {
		id?:order_by
}

export type meetings_sphere_variance_fields = {
	__typename?: "meetings_sphere_variance_fields",
	id?:number
}

export type meetings_sphere_variance_order_by = {
		id?:order_by
}

export type mutation_root = {
	__typename?: "mutation_root",
	delete_auth_user?:auth_user_mutation_response,
	delete_meetings_guild?:meetings_guild_mutation_response,
	delete_meetings_guilduser?:meetings_guilduser_mutation_response,
	delete_meetings_meeting?:meetings_meeting_mutation_response,
	delete_meetings_meetinguser?:meetings_meetinguser_mutation_response,
	delete_meetings_sphere?:meetings_sphere_mutation_response,
	delete_meetings_sphere_users?:meetings_sphere_users_mutation_response,
	insert_auth_user?:auth_user_mutation_response,
	insert_meetings_guild?:meetings_guild_mutation_response,
	insert_meetings_guilduser?:meetings_guilduser_mutation_response,
	insert_meetings_meeting?:meetings_meeting_mutation_response,
	insert_meetings_meetinguser?:meetings_meetinguser_mutation_response,
	insert_meetings_sphere?:meetings_sphere_mutation_response,
	insert_meetings_sphere_users?:meetings_sphere_users_mutation_response,
	update_auth_user?:auth_user_mutation_response,
	update_meetings_guild?:meetings_guild_mutation_response,
	update_meetings_guilduser?:meetings_guilduser_mutation_response,
	update_meetings_meeting?:meetings_meeting_mutation_response,
	update_meetings_meetinguser?:meetings_meetinguser_mutation_response,
	update_meetings_sphere?:meetings_sphere_mutation_response,
	update_meetings_sphere_users?:meetings_sphere_users_mutation_response
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
	auth_user:auth_user[],
	auth_user_aggregate:auth_user_aggregate,
	auth_user_by_pk?:auth_user,
	meetings_guild:meetings_guild[],
	meetings_guild_aggregate:meetings_guild_aggregate,
	meetings_guild_by_pk?:meetings_guild,
	meetings_guilduser:meetings_guilduser[],
	meetings_guilduser_aggregate:meetings_guilduser_aggregate,
	meetings_guilduser_by_pk?:meetings_guilduser,
	meetings_meeting:meetings_meeting[],
	meetings_meeting_aggregate:meetings_meeting_aggregate,
	meetings_meeting_by_pk?:meetings_meeting,
	meetings_meetinguser:meetings_meetinguser[],
	meetings_meetinguser_aggregate:meetings_meetinguser_aggregate,
	meetings_meetinguser_by_pk?:meetings_meetinguser,
	meetings_sphere:meetings_sphere[],
	meetings_sphere_aggregate:meetings_sphere_aggregate,
	meetings_sphere_by_pk?:meetings_sphere,
	meetings_sphere_users:meetings_sphere_users[],
	meetings_sphere_users_aggregate:meetings_sphere_users_aggregate,
	meetings_sphere_users_by_pk?:meetings_sphere_users
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
	auth_user:auth_user[],
	auth_user_aggregate:auth_user_aggregate,
	auth_user_by_pk?:auth_user,
	meetings_guild:meetings_guild[],
	meetings_guild_aggregate:meetings_guild_aggregate,
	meetings_guild_by_pk?:meetings_guild,
	meetings_guilduser:meetings_guilduser[],
	meetings_guilduser_aggregate:meetings_guilduser_aggregate,
	meetings_guilduser_by_pk?:meetings_guilduser,
	meetings_meeting:meetings_meeting[],
	meetings_meeting_aggregate:meetings_meeting_aggregate,
	meetings_meeting_by_pk?:meetings_meeting,
	meetings_meetinguser:meetings_meetinguser[],
	meetings_meetinguser_aggregate:meetings_meetinguser_aggregate,
	meetings_meetinguser_by_pk?:meetings_meetinguser,
	meetings_sphere:meetings_sphere[],
	meetings_sphere_aggregate:meetings_sphere_aggregate,
	meetings_sphere_by_pk?:meetings_sphere,
	meetings_sphere_users:meetings_sphere_users[],
	meetings_sphere_users_aggregate:meetings_sphere_users_aggregate,
	meetings_sphere_users_by_pk?:meetings_sphere_users
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

export const AllTypesProps: Record<string,any> = {
	auth_user:{
		meetings_guildusers:{
			distinct_on:{
				type:"meetings_guilduser_select_column",
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
				type:"meetings_guilduser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_guilduser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_guildusers_aggregate:{
			distinct_on:{
				type:"meetings_guilduser_select_column",
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
				type:"meetings_guilduser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_guilduser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meetings:{
			distinct_on:{
				type:"meetings_meeting_select_column",
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
				type:"meetings_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meetings_aggregate:{
			distinct_on:{
				type:"meetings_meeting_select_column",
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
				type:"meetings_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meetingusers:{
			distinct_on:{
				type:"meetings_meetinguser_select_column",
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
				type:"meetings_meetinguser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meetinguser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meetingusers_aggregate:{
			distinct_on:{
				type:"meetings_meetinguser_select_column",
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
				type:"meetings_meetinguser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meetinguser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_sphere_users:{
			distinct_on:{
				type:"meetings_sphere_users_select_column",
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
				type:"meetings_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_sphere_users_aggregate:{
			distinct_on:{
				type:"meetings_sphere_users_select_column",
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
				type:"meetings_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	auth_user_aggregate_fields:{
		count:{
			columns:{
				type:"auth_user_select_column",
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
	auth_user_aggregate_order_by:{
		avg:{
			type:"auth_user_avg_order_by",
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
			type:"auth_user_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"auth_user_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"auth_user_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"auth_user_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"auth_user_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"auth_user_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"auth_user_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"auth_user_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"auth_user_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_arr_rel_insert_input:{
		data:{
			type:"auth_user_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"auth_user_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_avg_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_bool_exp:{
		_and:{
			type:"auth_user_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"auth_user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"auth_user_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		date_joined:{
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
		first_name:{
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
		is_active:{
			type:"Boolean_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_staff:{
			type:"Boolean_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_superuser:{
			type:"Boolean_comparison_exp",
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
		last_name:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_guildusers:{
			type:"meetings_guilduser_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetings:{
			type:"meetings_meeting_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetingusers:{
			type:"meetings_meetinguser_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_sphere_users:{
			type:"meetings_sphere_users_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		username:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_constraint: "enum",
	auth_user_inc_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_insert_input:{
		date_joined:{
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
		first_name:{
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
		is_active:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_staff:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_superuser:{
			type:"Boolean",
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
		last_name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_guildusers:{
			type:"meetings_guilduser_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetings:{
			type:"meetings_meeting_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetingusers:{
			type:"meetings_meetinguser_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_sphere_users:{
			type:"meetings_sphere_users_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_max_order_by:{
		date_joined:{
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
		first_name:{
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
		last_login:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		last_name:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		username:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_min_order_by:{
		date_joined:{
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
		first_name:{
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
		last_login:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		last_name:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		username:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_obj_rel_insert_input:{
		data:{
			type:"auth_user_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"auth_user_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_on_conflict:{
		constraint:{
			type:"auth_user_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"auth_user_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"auth_user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_order_by:{
		date_joined:{
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
		first_name:{
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
		is_active:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_staff:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_superuser:{
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
		last_name:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_guildusers_aggregate:{
			type:"meetings_guilduser_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetings_aggregate:{
			type:"meetings_meeting_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetingusers_aggregate:{
			type:"meetings_meetinguser_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_sphere_users_aggregate:{
			type:"meetings_sphere_users_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		username:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_select_column: "enum",
	auth_user_set_input:{
		date_joined:{
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
		first_name:{
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
		is_active:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_staff:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_superuser:{
			type:"Boolean",
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
		last_name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_stddev_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_stddev_pop_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_stddev_samp_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_sum_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_update_column: "enum",
	auth_user_var_pop_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_var_samp_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	auth_user_variance_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Boolean_comparison_exp:{
		_eq:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gt:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gte:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_in:{
			type:"Boolean",
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
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lte:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_neq:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_nin:{
			type:"Boolean",
			array:true,
			arrayRequired:false,
			required:true
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
	meetings_guild:{
		meetings_guildusers:{
			distinct_on:{
				type:"meetings_guilduser_select_column",
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
				type:"meetings_guilduser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_guilduser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_guildusers_aggregate:{
			distinct_on:{
				type:"meetings_guilduser_select_column",
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
				type:"meetings_guilduser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_guilduser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meetings:{
			distinct_on:{
				type:"meetings_meeting_select_column",
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
				type:"meetings_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meetings_aggregate:{
			distinct_on:{
				type:"meetings_meeting_select_column",
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
				type:"meetings_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	meetings_guild_aggregate_fields:{
		count:{
			columns:{
				type:"meetings_guild_select_column",
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
	meetings_guild_aggregate_order_by:{
		avg:{
			type:"meetings_guild_avg_order_by",
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
			type:"meetings_guild_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"meetings_guild_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"meetings_guild_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"meetings_guild_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"meetings_guild_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"meetings_guild_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"meetings_guild_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"meetings_guild_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"meetings_guild_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guild_arr_rel_insert_input:{
		data:{
			type:"meetings_guild_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"meetings_guild_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guild_avg_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guild_bool_exp:{
		_and:{
			type:"meetings_guild_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"meetings_guild_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"meetings_guild_bool_exp",
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
		id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_guildusers:{
			type:"meetings_guilduser_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetings:{
			type:"meetings_meeting_bool_exp",
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
	meetings_guild_constraint: "enum",
	meetings_guild_inc_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guild_insert_input:{
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
		meetings_guildusers:{
			type:"meetings_guilduser_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetings:{
			type:"meetings_meeting_arr_rel_insert_input",
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
	meetings_guild_max_order_by:{
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
		}
	},
	meetings_guild_min_order_by:{
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
		}
	},
	meetings_guild_obj_rel_insert_input:{
		data:{
			type:"meetings_guild_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"meetings_guild_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guild_on_conflict:{
		constraint:{
			type:"meetings_guild_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"meetings_guild_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"meetings_guild_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guild_order_by:{
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
		meetings_guildusers_aggregate:{
			type:"meetings_guilduser_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetings_aggregate:{
			type:"meetings_meeting_aggregate_order_by",
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
	meetings_guild_select_column: "enum",
	meetings_guild_set_input:{
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
		}
	},
	meetings_guild_stddev_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guild_stddev_pop_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guild_stddev_samp_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guild_sum_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guild_update_column: "enum",
	meetings_guild_var_pop_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guild_var_samp_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guild_variance_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_aggregate_fields:{
		count:{
			columns:{
				type:"meetings_guilduser_select_column",
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
	meetings_guilduser_aggregate_order_by:{
		avg:{
			type:"meetings_guilduser_avg_order_by",
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
			type:"meetings_guilduser_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"meetings_guilduser_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"meetings_guilduser_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"meetings_guilduser_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"meetings_guilduser_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"meetings_guilduser_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"meetings_guilduser_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"meetings_guilduser_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"meetings_guilduser_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_arr_rel_insert_input:{
		data:{
			type:"meetings_guilduser_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"meetings_guilduser_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_avg_order_by:{
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_bool_exp:{
		_and:{
			type:"meetings_guilduser_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"meetings_guilduser_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"meetings_guilduser_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		auth_user:{
			type:"auth_user_bool_exp",
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
		meetings_guild:{
			type:"meetings_guild_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		membership_type:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_constraint: "enum",
	meetings_guilduser_inc_input:{
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
		user_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_insert_input:{
		auth_user:{
			type:"auth_user_obj_rel_insert_input",
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
		meetings_guild:{
			type:"meetings_guild_obj_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		membership_type:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_max_order_by:{
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
		membership_type:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_min_order_by:{
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
		membership_type:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_obj_rel_insert_input:{
		data:{
			type:"meetings_guilduser_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"meetings_guilduser_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_on_conflict:{
		constraint:{
			type:"meetings_guilduser_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"meetings_guilduser_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"meetings_guilduser_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_order_by:{
		auth_user:{
			type:"auth_user_order_by",
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
		meetings_guild:{
			type:"meetings_guild_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		membership_type:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_select_column: "enum",
	meetings_guilduser_set_input:{
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
		membership_type:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_stddev_order_by:{
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_stddev_pop_order_by:{
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_stddev_samp_order_by:{
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_sum_order_by:{
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_update_column: "enum",
	meetings_guilduser_var_pop_order_by:{
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_var_samp_order_by:{
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_guilduser_variance_order_by:{
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meeting:{
		meetings_meetingusers:{
			distinct_on:{
				type:"meetings_meetinguser_select_column",
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
				type:"meetings_meetinguser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meetinguser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meetingusers_aggregate:{
			distinct_on:{
				type:"meetings_meetinguser_select_column",
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
				type:"meetings_meetinguser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meetinguser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	meetings_meeting_aggregate_fields:{
		count:{
			columns:{
				type:"meetings_meeting_select_column",
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
	meetings_meeting_aggregate_order_by:{
		avg:{
			type:"meetings_meeting_avg_order_by",
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
			type:"meetings_meeting_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"meetings_meeting_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"meetings_meeting_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"meetings_meeting_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"meetings_meeting_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"meetings_meeting_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"meetings_meeting_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"meetings_meeting_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"meetings_meeting_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meeting_arr_rel_insert_input:{
		data:{
			type:"meetings_meeting_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"meetings_meeting_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meeting_avg_order_by:{
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
		organizer_id:{
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
	meetings_meeting_bool_exp:{
		_and:{
			type:"meetings_meeting_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"meetings_meeting_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"meetings_meeting_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		auth_user:{
			type:"auth_user_bool_exp",
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
		meetings_guild:{
			type:"meetings_guild_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetingusers:{
			type:"meetings_meetinguser_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_sphere:{
			type:"meetings_sphere_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		organizer_id:{
			type:"Int_comparison_exp",
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
	meetings_meeting_constraint: "enum",
	meetings_meeting_inc_input:{
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
		organizer_id:{
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
	meetings_meeting_insert_input:{
		auth_user:{
			type:"auth_user_obj_rel_insert_input",
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
		meetings_guild:{
			type:"meetings_guild_obj_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetingusers:{
			type:"meetings_meetinguser_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_sphere:{
			type:"meetings_sphere_obj_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		organizer_id:{
			type:"Int",
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
	meetings_meeting_max_order_by:{
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
	meetings_meeting_min_order_by:{
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
	meetings_meeting_obj_rel_insert_input:{
		data:{
			type:"meetings_meeting_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"meetings_meeting_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meeting_on_conflict:{
		constraint:{
			type:"meetings_meeting_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"meetings_meeting_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"meetings_meeting_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meeting_order_by:{
		auth_user:{
			type:"auth_user_order_by",
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
		meetings_guild:{
			type:"meetings_guild_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetingusers_aggregate:{
			type:"meetings_meetinguser_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_sphere:{
			type:"meetings_sphere_order_by",
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
	meetings_meeting_select_column: "enum",
	meetings_meeting_set_input:{
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
			type:"Int",
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
	meetings_meeting_stddev_order_by:{
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
		organizer_id:{
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
	meetings_meeting_stddev_pop_order_by:{
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
		organizer_id:{
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
	meetings_meeting_stddev_samp_order_by:{
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
		organizer_id:{
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
	meetings_meeting_sum_order_by:{
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
		organizer_id:{
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
	meetings_meeting_update_column: "enum",
	meetings_meeting_var_pop_order_by:{
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
		organizer_id:{
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
	meetings_meeting_var_samp_order_by:{
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
		organizer_id:{
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
	meetings_meeting_variance_order_by:{
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
		organizer_id:{
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
	meetings_meetinguser_aggregate_fields:{
		count:{
			columns:{
				type:"meetings_meetinguser_select_column",
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
	meetings_meetinguser_aggregate_order_by:{
		avg:{
			type:"meetings_meetinguser_avg_order_by",
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
			type:"meetings_meetinguser_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"meetings_meetinguser_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"meetings_meetinguser_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"meetings_meetinguser_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"meetings_meetinguser_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"meetings_meetinguser_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"meetings_meetinguser_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"meetings_meetinguser_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"meetings_meetinguser_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_arr_rel_insert_input:{
		data:{
			type:"meetings_meetinguser_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"meetings_meetinguser_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_avg_order_by:{
		id:{
			type:"order_by",
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_bool_exp:{
		_and:{
			type:"meetings_meetinguser_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"meetings_meetinguser_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"meetings_meetinguser_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		auth_user:{
			type:"auth_user_bool_exp",
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
		meeting_id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meeting:{
			type:"meetings_meeting_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_constraint: "enum",
	meetings_meetinguser_inc_input:{
		id:{
			type:"Int",
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
		user_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_insert_input:{
		auth_user:{
			type:"auth_user_obj_rel_insert_input",
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
		meeting_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meeting:{
			type:"meetings_meeting_obj_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_max_order_by:{
		id:{
			type:"order_by",
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
		status:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_min_order_by:{
		id:{
			type:"order_by",
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
		status:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_obj_rel_insert_input:{
		data:{
			type:"meetings_meetinguser_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"meetings_meetinguser_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_on_conflict:{
		constraint:{
			type:"meetings_meetinguser_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"meetings_meetinguser_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"meetings_meetinguser_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_order_by:{
		auth_user:{
			type:"auth_user_order_by",
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
		meeting_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meeting:{
			type:"meetings_meeting_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_select_column: "enum",
	meetings_meetinguser_set_input:{
		id:{
			type:"Int",
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
		status:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_stddev_order_by:{
		id:{
			type:"order_by",
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_stddev_pop_order_by:{
		id:{
			type:"order_by",
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_stddev_samp_order_by:{
		id:{
			type:"order_by",
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_sum_order_by:{
		id:{
			type:"order_by",
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_update_column: "enum",
	meetings_meetinguser_var_pop_order_by:{
		id:{
			type:"order_by",
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_var_samp_order_by:{
		id:{
			type:"order_by",
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_meetinguser_variance_order_by:{
		id:{
			type:"order_by",
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere:{
		meetings_meetings:{
			distinct_on:{
				type:"meetings_meeting_select_column",
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
				type:"meetings_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meetings_aggregate:{
			distinct_on:{
				type:"meetings_meeting_select_column",
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
				type:"meetings_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_sphere_users:{
			distinct_on:{
				type:"meetings_sphere_users_select_column",
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
				type:"meetings_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_sphere_users_aggregate:{
			distinct_on:{
				type:"meetings_sphere_users_select_column",
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
				type:"meetings_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	meetings_sphere_aggregate_fields:{
		count:{
			columns:{
				type:"meetings_sphere_select_column",
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
	meetings_sphere_aggregate_order_by:{
		avg:{
			type:"meetings_sphere_avg_order_by",
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
			type:"meetings_sphere_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"meetings_sphere_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"meetings_sphere_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"meetings_sphere_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"meetings_sphere_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"meetings_sphere_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"meetings_sphere_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"meetings_sphere_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"meetings_sphere_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_arr_rel_insert_input:{
		data:{
			type:"meetings_sphere_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"meetings_sphere_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_avg_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_bool_exp:{
		_and:{
			type:"meetings_sphere_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"meetings_sphere_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"meetings_sphere_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetings:{
			type:"meetings_meeting_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_sphere_users:{
			type:"meetings_sphere_users_bool_exp",
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
	meetings_sphere_constraint: "enum",
	meetings_sphere_inc_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_insert_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetings:{
			type:"meetings_meeting_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_sphere_users:{
			type:"meetings_sphere_users_arr_rel_insert_input",
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
	meetings_sphere_max_order_by:{
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
	meetings_sphere_min_order_by:{
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
	meetings_sphere_obj_rel_insert_input:{
		data:{
			type:"meetings_sphere_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"meetings_sphere_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_on_conflict:{
		constraint:{
			type:"meetings_sphere_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"meetings_sphere_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"meetings_sphere_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_meetings_aggregate:{
			type:"meetings_meeting_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		meetings_sphere_users_aggregate:{
			type:"meetings_sphere_users_aggregate_order_by",
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
	meetings_sphere_select_column: "enum",
	meetings_sphere_set_input:{
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
	meetings_sphere_stddev_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_stddev_pop_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_stddev_samp_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_sum_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_update_column: "enum",
	meetings_sphere_users_aggregate_fields:{
		count:{
			columns:{
				type:"meetings_sphere_users_select_column",
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
	meetings_sphere_users_aggregate_order_by:{
		avg:{
			type:"meetings_sphere_users_avg_order_by",
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
			type:"meetings_sphere_users_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"meetings_sphere_users_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"meetings_sphere_users_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"meetings_sphere_users_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"meetings_sphere_users_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"meetings_sphere_users_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"meetings_sphere_users_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"meetings_sphere_users_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"meetings_sphere_users_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_arr_rel_insert_input:{
		data:{
			type:"meetings_sphere_users_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"meetings_sphere_users_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_avg_order_by:{
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
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_bool_exp:{
		_and:{
			type:"meetings_sphere_users_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"meetings_sphere_users_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"meetings_sphere_users_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		auth_user:{
			type:"auth_user_bool_exp",
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
		meetings_sphere:{
			type:"meetings_sphere_bool_exp",
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
		user_id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_constraint: "enum",
	meetings_sphere_users_inc_input:{
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
		},
		user_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_insert_input:{
		auth_user:{
			type:"auth_user_obj_rel_insert_input",
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
		meetings_sphere:{
			type:"meetings_sphere_obj_rel_insert_input",
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
		user_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_max_order_by:{
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
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_min_order_by:{
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
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_obj_rel_insert_input:{
		data:{
			type:"meetings_sphere_users_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"meetings_sphere_users_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_on_conflict:{
		constraint:{
			type:"meetings_sphere_users_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"meetings_sphere_users_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"meetings_sphere_users_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_order_by:{
		auth_user:{
			type:"auth_user_order_by",
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
		meetings_sphere:{
			type:"meetings_sphere_order_by",
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
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_select_column: "enum",
	meetings_sphere_users_set_input:{
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
		},
		user_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_stddev_order_by:{
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
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_stddev_pop_order_by:{
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
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_stddev_samp_order_by:{
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
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_sum_order_by:{
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
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_update_column: "enum",
	meetings_sphere_users_var_pop_order_by:{
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
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_var_samp_order_by:{
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
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_users_variance_order_by:{
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
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_var_pop_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_var_samp_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	meetings_sphere_variance_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	mutation_root:{
		delete_auth_user:{
			where:{
				type:"auth_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_meetings_guild:{
			where:{
				type:"meetings_guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_meetings_guilduser:{
			where:{
				type:"meetings_guilduser_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_meetings_meeting:{
			where:{
				type:"meetings_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_meetings_meetinguser:{
			where:{
				type:"meetings_meetinguser_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_meetings_sphere:{
			where:{
				type:"meetings_sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_meetings_sphere_users:{
			where:{
				type:"meetings_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		insert_auth_user:{
			objects:{
				type:"auth_user_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"auth_user_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_meetings_guild:{
			objects:{
				type:"meetings_guild_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"meetings_guild_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_meetings_guilduser:{
			objects:{
				type:"meetings_guilduser_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"meetings_guilduser_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_meetings_meeting:{
			objects:{
				type:"meetings_meeting_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"meetings_meeting_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_meetings_meetinguser:{
			objects:{
				type:"meetings_meetinguser_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"meetings_meetinguser_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_meetings_sphere:{
			objects:{
				type:"meetings_sphere_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"meetings_sphere_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_meetings_sphere_users:{
			objects:{
				type:"meetings_sphere_users_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"meetings_sphere_users_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		update_auth_user:{
			_inc:{
				type:"auth_user_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"auth_user_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"auth_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_meetings_guild:{
			_inc:{
				type:"meetings_guild_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"meetings_guild_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"meetings_guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_meetings_guilduser:{
			_inc:{
				type:"meetings_guilduser_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"meetings_guilduser_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"meetings_guilduser_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_meetings_meeting:{
			_inc:{
				type:"meetings_meeting_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"meetings_meeting_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"meetings_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_meetings_meetinguser:{
			_inc:{
				type:"meetings_meetinguser_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"meetings_meetinguser_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"meetings_meetinguser_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_meetings_sphere:{
			_inc:{
				type:"meetings_sphere_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"meetings_sphere_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"meetings_sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_meetings_sphere_users:{
			_inc:{
				type:"meetings_sphere_users_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"meetings_sphere_users_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"meetings_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	order_by: "enum",
	query_root:{
		auth_user:{
			distinct_on:{
				type:"auth_user_select_column",
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
				type:"auth_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"auth_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		auth_user_aggregate:{
			distinct_on:{
				type:"auth_user_select_column",
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
				type:"auth_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"auth_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		auth_user_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meetings_guild:{
			distinct_on:{
				type:"meetings_guild_select_column",
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
				type:"meetings_guild_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_guild_aggregate:{
			distinct_on:{
				type:"meetings_guild_select_column",
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
				type:"meetings_guild_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_guild_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meetings_guilduser:{
			distinct_on:{
				type:"meetings_guilduser_select_column",
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
				type:"meetings_guilduser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_guilduser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_guilduser_aggregate:{
			distinct_on:{
				type:"meetings_guilduser_select_column",
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
				type:"meetings_guilduser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_guilduser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_guilduser_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meetings_meeting:{
			distinct_on:{
				type:"meetings_meeting_select_column",
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
				type:"meetings_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meeting_aggregate:{
			distinct_on:{
				type:"meetings_meeting_select_column",
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
				type:"meetings_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meeting_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meetings_meetinguser:{
			distinct_on:{
				type:"meetings_meetinguser_select_column",
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
				type:"meetings_meetinguser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meetinguser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meetinguser_aggregate:{
			distinct_on:{
				type:"meetings_meetinguser_select_column",
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
				type:"meetings_meetinguser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meetinguser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meetinguser_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meetings_sphere:{
			distinct_on:{
				type:"meetings_sphere_select_column",
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
				type:"meetings_sphere_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_sphere_aggregate:{
			distinct_on:{
				type:"meetings_sphere_select_column",
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
				type:"meetings_sphere_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_sphere_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meetings_sphere_users:{
			distinct_on:{
				type:"meetings_sphere_users_select_column",
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
				type:"meetings_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_sphere_users_aggregate:{
			distinct_on:{
				type:"meetings_sphere_users_select_column",
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
				type:"meetings_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_sphere_users_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
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
		auth_user:{
			distinct_on:{
				type:"auth_user_select_column",
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
				type:"auth_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"auth_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		auth_user_aggregate:{
			distinct_on:{
				type:"auth_user_select_column",
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
				type:"auth_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"auth_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		auth_user_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meetings_guild:{
			distinct_on:{
				type:"meetings_guild_select_column",
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
				type:"meetings_guild_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_guild_aggregate:{
			distinct_on:{
				type:"meetings_guild_select_column",
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
				type:"meetings_guild_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_guild_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meetings_guilduser:{
			distinct_on:{
				type:"meetings_guilduser_select_column",
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
				type:"meetings_guilduser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_guilduser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_guilduser_aggregate:{
			distinct_on:{
				type:"meetings_guilduser_select_column",
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
				type:"meetings_guilduser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_guilduser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_guilduser_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meetings_meeting:{
			distinct_on:{
				type:"meetings_meeting_select_column",
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
				type:"meetings_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meeting_aggregate:{
			distinct_on:{
				type:"meetings_meeting_select_column",
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
				type:"meetings_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meeting_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meetings_meetinguser:{
			distinct_on:{
				type:"meetings_meetinguser_select_column",
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
				type:"meetings_meetinguser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meetinguser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meetinguser_aggregate:{
			distinct_on:{
				type:"meetings_meetinguser_select_column",
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
				type:"meetings_meetinguser_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_meetinguser_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_meetinguser_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meetings_sphere:{
			distinct_on:{
				type:"meetings_sphere_select_column",
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
				type:"meetings_sphere_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_sphere_aggregate:{
			distinct_on:{
				type:"meetings_sphere_select_column",
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
				type:"meetings_sphere_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_sphere_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		meetings_sphere_users:{
			distinct_on:{
				type:"meetings_sphere_users_select_column",
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
				type:"meetings_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_sphere_users_aggregate:{
			distinct_on:{
				type:"meetings_sphere_users_select_column",
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
				type:"meetings_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"meetings_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		meetings_sphere_users_by_pk:{
			id:{
				type:"Int",
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
	}
}

export const ReturnTypes: Record<string,any> = {
	auth_user:{
		date_joined:"timestamptz",
		email:"String",
		first_name:"String",
		id:"Int",
		is_active:"Boolean",
		is_staff:"Boolean",
		is_superuser:"Boolean",
		last_login:"timestamptz",
		last_name:"String",
		meetings_guildusers:"meetings_guilduser",
		meetings_guildusers_aggregate:"meetings_guilduser_aggregate",
		meetings_meetings:"meetings_meeting",
		meetings_meetings_aggregate:"meetings_meeting_aggregate",
		meetings_meetingusers:"meetings_meetinguser",
		meetings_meetingusers_aggregate:"meetings_meetinguser_aggregate",
		meetings_sphere_users:"meetings_sphere_users",
		meetings_sphere_users_aggregate:"meetings_sphere_users_aggregate",
		password:"String",
		username:"String"
	},
	auth_user_aggregate:{
		aggregate:"auth_user_aggregate_fields",
		nodes:"auth_user"
	},
	auth_user_aggregate_fields:{
		avg:"auth_user_avg_fields",
		count:"Int",
		max:"auth_user_max_fields",
		min:"auth_user_min_fields",
		stddev:"auth_user_stddev_fields",
		stddev_pop:"auth_user_stddev_pop_fields",
		stddev_samp:"auth_user_stddev_samp_fields",
		sum:"auth_user_sum_fields",
		var_pop:"auth_user_var_pop_fields",
		var_samp:"auth_user_var_samp_fields",
		variance:"auth_user_variance_fields"
	},
	auth_user_avg_fields:{
		id:"Float"
	},
	auth_user_max_fields:{
		date_joined:"timestamptz",
		email:"String",
		first_name:"String",
		id:"Int",
		last_login:"timestamptz",
		last_name:"String",
		password:"String",
		username:"String"
	},
	auth_user_min_fields:{
		date_joined:"timestamptz",
		email:"String",
		first_name:"String",
		id:"Int",
		last_login:"timestamptz",
		last_name:"String",
		password:"String",
		username:"String"
	},
	auth_user_mutation_response:{
		affected_rows:"Int",
		returning:"auth_user"
	},
	auth_user_stddev_fields:{
		id:"Float"
	},
	auth_user_stddev_pop_fields:{
		id:"Float"
	},
	auth_user_stddev_samp_fields:{
		id:"Float"
	},
	auth_user_sum_fields:{
		id:"Int"
	},
	auth_user_var_pop_fields:{
		id:"Float"
	},
	auth_user_var_samp_fields:{
		id:"Float"
	},
	auth_user_variance_fields:{
		id:"Float"
	},
	meetings_guild:{
		created_at:"timestamptz",
		description:"String",
		id:"Int",
		meetings_guildusers:"meetings_guilduser",
		meetings_guildusers_aggregate:"meetings_guilduser_aggregate",
		meetings_meetings:"meetings_meeting",
		meetings_meetings_aggregate:"meetings_meeting_aggregate",
		name:"String"
	},
	meetings_guild_aggregate:{
		aggregate:"meetings_guild_aggregate_fields",
		nodes:"meetings_guild"
	},
	meetings_guild_aggregate_fields:{
		avg:"meetings_guild_avg_fields",
		count:"Int",
		max:"meetings_guild_max_fields",
		min:"meetings_guild_min_fields",
		stddev:"meetings_guild_stddev_fields",
		stddev_pop:"meetings_guild_stddev_pop_fields",
		stddev_samp:"meetings_guild_stddev_samp_fields",
		sum:"meetings_guild_sum_fields",
		var_pop:"meetings_guild_var_pop_fields",
		var_samp:"meetings_guild_var_samp_fields",
		variance:"meetings_guild_variance_fields"
	},
	meetings_guild_avg_fields:{
		id:"Float"
	},
	meetings_guild_max_fields:{
		created_at:"timestamptz",
		description:"String",
		id:"Int",
		name:"String"
	},
	meetings_guild_min_fields:{
		created_at:"timestamptz",
		description:"String",
		id:"Int",
		name:"String"
	},
	meetings_guild_mutation_response:{
		affected_rows:"Int",
		returning:"meetings_guild"
	},
	meetings_guild_stddev_fields:{
		id:"Float"
	},
	meetings_guild_stddev_pop_fields:{
		id:"Float"
	},
	meetings_guild_stddev_samp_fields:{
		id:"Float"
	},
	meetings_guild_sum_fields:{
		id:"Int"
	},
	meetings_guild_var_pop_fields:{
		id:"Float"
	},
	meetings_guild_var_samp_fields:{
		id:"Float"
	},
	meetings_guild_variance_fields:{
		id:"Float"
	},
	meetings_guilduser:{
		auth_user:"auth_user",
		guild_id:"Int",
		id:"Int",
		meetings_guild:"meetings_guild",
		membership_type:"String",
		user_id:"Int"
	},
	meetings_guilduser_aggregate:{
		aggregate:"meetings_guilduser_aggregate_fields",
		nodes:"meetings_guilduser"
	},
	meetings_guilduser_aggregate_fields:{
		avg:"meetings_guilduser_avg_fields",
		count:"Int",
		max:"meetings_guilduser_max_fields",
		min:"meetings_guilduser_min_fields",
		stddev:"meetings_guilduser_stddev_fields",
		stddev_pop:"meetings_guilduser_stddev_pop_fields",
		stddev_samp:"meetings_guilduser_stddev_samp_fields",
		sum:"meetings_guilduser_sum_fields",
		var_pop:"meetings_guilduser_var_pop_fields",
		var_samp:"meetings_guilduser_var_samp_fields",
		variance:"meetings_guilduser_variance_fields"
	},
	meetings_guilduser_avg_fields:{
		guild_id:"Float",
		id:"Float",
		user_id:"Float"
	},
	meetings_guilduser_max_fields:{
		guild_id:"Int",
		id:"Int",
		membership_type:"String",
		user_id:"Int"
	},
	meetings_guilduser_min_fields:{
		guild_id:"Int",
		id:"Int",
		membership_type:"String",
		user_id:"Int"
	},
	meetings_guilduser_mutation_response:{
		affected_rows:"Int",
		returning:"meetings_guilduser"
	},
	meetings_guilduser_stddev_fields:{
		guild_id:"Float",
		id:"Float",
		user_id:"Float"
	},
	meetings_guilduser_stddev_pop_fields:{
		guild_id:"Float",
		id:"Float",
		user_id:"Float"
	},
	meetings_guilduser_stddev_samp_fields:{
		guild_id:"Float",
		id:"Float",
		user_id:"Float"
	},
	meetings_guilduser_sum_fields:{
		guild_id:"Int",
		id:"Int",
		user_id:"Int"
	},
	meetings_guilduser_var_pop_fields:{
		guild_id:"Float",
		id:"Float",
		user_id:"Float"
	},
	meetings_guilduser_var_samp_fields:{
		guild_id:"Float",
		id:"Float",
		user_id:"Float"
	},
	meetings_guilduser_variance_fields:{
		guild_id:"Float",
		id:"Float",
		user_id:"Float"
	},
	meetings_meeting:{
		auth_user:"auth_user",
		created_at:"timestamptz",
		description:"String",
		end_time:"timestamptz",
		guild_id:"Int",
		id:"Int",
		location:"String",
		meetings_guild:"meetings_guild",
		meetings_meetingusers:"meetings_meetinguser",
		meetings_meetingusers_aggregate:"meetings_meetinguser_aggregate",
		meetings_sphere:"meetings_sphere",
		organizer_id:"Int",
		publication_time:"timestamptz",
		sphere_id:"Int",
		start_time:"timestamptz",
		title:"String",
		updated_at:"timestamptz"
	},
	meetings_meeting_aggregate:{
		aggregate:"meetings_meeting_aggregate_fields",
		nodes:"meetings_meeting"
	},
	meetings_meeting_aggregate_fields:{
		avg:"meetings_meeting_avg_fields",
		count:"Int",
		max:"meetings_meeting_max_fields",
		min:"meetings_meeting_min_fields",
		stddev:"meetings_meeting_stddev_fields",
		stddev_pop:"meetings_meeting_stddev_pop_fields",
		stddev_samp:"meetings_meeting_stddev_samp_fields",
		sum:"meetings_meeting_sum_fields",
		var_pop:"meetings_meeting_var_pop_fields",
		var_samp:"meetings_meeting_var_samp_fields",
		variance:"meetings_meeting_variance_fields"
	},
	meetings_meeting_avg_fields:{
		guild_id:"Float",
		id:"Float",
		organizer_id:"Float",
		sphere_id:"Float"
	},
	meetings_meeting_max_fields:{
		created_at:"timestamptz",
		description:"String",
		end_time:"timestamptz",
		guild_id:"Int",
		id:"Int",
		location:"String",
		organizer_id:"Int",
		publication_time:"timestamptz",
		sphere_id:"Int",
		start_time:"timestamptz",
		title:"String",
		updated_at:"timestamptz"
	},
	meetings_meeting_min_fields:{
		created_at:"timestamptz",
		description:"String",
		end_time:"timestamptz",
		guild_id:"Int",
		id:"Int",
		location:"String",
		organizer_id:"Int",
		publication_time:"timestamptz",
		sphere_id:"Int",
		start_time:"timestamptz",
		title:"String",
		updated_at:"timestamptz"
	},
	meetings_meeting_mutation_response:{
		affected_rows:"Int",
		returning:"meetings_meeting"
	},
	meetings_meeting_stddev_fields:{
		guild_id:"Float",
		id:"Float",
		organizer_id:"Float",
		sphere_id:"Float"
	},
	meetings_meeting_stddev_pop_fields:{
		guild_id:"Float",
		id:"Float",
		organizer_id:"Float",
		sphere_id:"Float"
	},
	meetings_meeting_stddev_samp_fields:{
		guild_id:"Float",
		id:"Float",
		organizer_id:"Float",
		sphere_id:"Float"
	},
	meetings_meeting_sum_fields:{
		guild_id:"Int",
		id:"Int",
		organizer_id:"Int",
		sphere_id:"Int"
	},
	meetings_meeting_var_pop_fields:{
		guild_id:"Float",
		id:"Float",
		organizer_id:"Float",
		sphere_id:"Float"
	},
	meetings_meeting_var_samp_fields:{
		guild_id:"Float",
		id:"Float",
		organizer_id:"Float",
		sphere_id:"Float"
	},
	meetings_meeting_variance_fields:{
		guild_id:"Float",
		id:"Float",
		organizer_id:"Float",
		sphere_id:"Float"
	},
	meetings_meetinguser:{
		auth_user:"auth_user",
		id:"Int",
		meeting_id:"Int",
		meetings_meeting:"meetings_meeting",
		status:"String",
		user_id:"Int"
	},
	meetings_meetinguser_aggregate:{
		aggregate:"meetings_meetinguser_aggregate_fields",
		nodes:"meetings_meetinguser"
	},
	meetings_meetinguser_aggregate_fields:{
		avg:"meetings_meetinguser_avg_fields",
		count:"Int",
		max:"meetings_meetinguser_max_fields",
		min:"meetings_meetinguser_min_fields",
		stddev:"meetings_meetinguser_stddev_fields",
		stddev_pop:"meetings_meetinguser_stddev_pop_fields",
		stddev_samp:"meetings_meetinguser_stddev_samp_fields",
		sum:"meetings_meetinguser_sum_fields",
		var_pop:"meetings_meetinguser_var_pop_fields",
		var_samp:"meetings_meetinguser_var_samp_fields",
		variance:"meetings_meetinguser_variance_fields"
	},
	meetings_meetinguser_avg_fields:{
		id:"Float",
		meeting_id:"Float",
		user_id:"Float"
	},
	meetings_meetinguser_max_fields:{
		id:"Int",
		meeting_id:"Int",
		status:"String",
		user_id:"Int"
	},
	meetings_meetinguser_min_fields:{
		id:"Int",
		meeting_id:"Int",
		status:"String",
		user_id:"Int"
	},
	meetings_meetinguser_mutation_response:{
		affected_rows:"Int",
		returning:"meetings_meetinguser"
	},
	meetings_meetinguser_stddev_fields:{
		id:"Float",
		meeting_id:"Float",
		user_id:"Float"
	},
	meetings_meetinguser_stddev_pop_fields:{
		id:"Float",
		meeting_id:"Float",
		user_id:"Float"
	},
	meetings_meetinguser_stddev_samp_fields:{
		id:"Float",
		meeting_id:"Float",
		user_id:"Float"
	},
	meetings_meetinguser_sum_fields:{
		id:"Int",
		meeting_id:"Int",
		user_id:"Int"
	},
	meetings_meetinguser_var_pop_fields:{
		id:"Float",
		meeting_id:"Float",
		user_id:"Float"
	},
	meetings_meetinguser_var_samp_fields:{
		id:"Float",
		meeting_id:"Float",
		user_id:"Float"
	},
	meetings_meetinguser_variance_fields:{
		id:"Float",
		meeting_id:"Float",
		user_id:"Float"
	},
	meetings_sphere:{
		id:"Int",
		meetings_meetings:"meetings_meeting",
		meetings_meetings_aggregate:"meetings_meeting_aggregate",
		meetings_sphere_users:"meetings_sphere_users",
		meetings_sphere_users_aggregate:"meetings_sphere_users_aggregate",
		name:"String"
	},
	meetings_sphere_aggregate:{
		aggregate:"meetings_sphere_aggregate_fields",
		nodes:"meetings_sphere"
	},
	meetings_sphere_aggregate_fields:{
		avg:"meetings_sphere_avg_fields",
		count:"Int",
		max:"meetings_sphere_max_fields",
		min:"meetings_sphere_min_fields",
		stddev:"meetings_sphere_stddev_fields",
		stddev_pop:"meetings_sphere_stddev_pop_fields",
		stddev_samp:"meetings_sphere_stddev_samp_fields",
		sum:"meetings_sphere_sum_fields",
		var_pop:"meetings_sphere_var_pop_fields",
		var_samp:"meetings_sphere_var_samp_fields",
		variance:"meetings_sphere_variance_fields"
	},
	meetings_sphere_avg_fields:{
		id:"Float"
	},
	meetings_sphere_max_fields:{
		id:"Int",
		name:"String"
	},
	meetings_sphere_min_fields:{
		id:"Int",
		name:"String"
	},
	meetings_sphere_mutation_response:{
		affected_rows:"Int",
		returning:"meetings_sphere"
	},
	meetings_sphere_stddev_fields:{
		id:"Float"
	},
	meetings_sphere_stddev_pop_fields:{
		id:"Float"
	},
	meetings_sphere_stddev_samp_fields:{
		id:"Float"
	},
	meetings_sphere_sum_fields:{
		id:"Int"
	},
	meetings_sphere_users:{
		auth_user:"auth_user",
		id:"Int",
		meetings_sphere:"meetings_sphere",
		sphere_id:"Int",
		user_id:"Int"
	},
	meetings_sphere_users_aggregate:{
		aggregate:"meetings_sphere_users_aggregate_fields",
		nodes:"meetings_sphere_users"
	},
	meetings_sphere_users_aggregate_fields:{
		avg:"meetings_sphere_users_avg_fields",
		count:"Int",
		max:"meetings_sphere_users_max_fields",
		min:"meetings_sphere_users_min_fields",
		stddev:"meetings_sphere_users_stddev_fields",
		stddev_pop:"meetings_sphere_users_stddev_pop_fields",
		stddev_samp:"meetings_sphere_users_stddev_samp_fields",
		sum:"meetings_sphere_users_sum_fields",
		var_pop:"meetings_sphere_users_var_pop_fields",
		var_samp:"meetings_sphere_users_var_samp_fields",
		variance:"meetings_sphere_users_variance_fields"
	},
	meetings_sphere_users_avg_fields:{
		id:"Float",
		sphere_id:"Float",
		user_id:"Float"
	},
	meetings_sphere_users_max_fields:{
		id:"Int",
		sphere_id:"Int",
		user_id:"Int"
	},
	meetings_sphere_users_min_fields:{
		id:"Int",
		sphere_id:"Int",
		user_id:"Int"
	},
	meetings_sphere_users_mutation_response:{
		affected_rows:"Int",
		returning:"meetings_sphere_users"
	},
	meetings_sphere_users_stddev_fields:{
		id:"Float",
		sphere_id:"Float",
		user_id:"Float"
	},
	meetings_sphere_users_stddev_pop_fields:{
		id:"Float",
		sphere_id:"Float",
		user_id:"Float"
	},
	meetings_sphere_users_stddev_samp_fields:{
		id:"Float",
		sphere_id:"Float",
		user_id:"Float"
	},
	meetings_sphere_users_sum_fields:{
		id:"Int",
		sphere_id:"Int",
		user_id:"Int"
	},
	meetings_sphere_users_var_pop_fields:{
		id:"Float",
		sphere_id:"Float",
		user_id:"Float"
	},
	meetings_sphere_users_var_samp_fields:{
		id:"Float",
		sphere_id:"Float",
		user_id:"Float"
	},
	meetings_sphere_users_variance_fields:{
		id:"Float",
		sphere_id:"Float",
		user_id:"Float"
	},
	meetings_sphere_var_pop_fields:{
		id:"Float"
	},
	meetings_sphere_var_samp_fields:{
		id:"Float"
	},
	meetings_sphere_variance_fields:{
		id:"Float"
	},
	mutation_root:{
		delete_auth_user:"auth_user_mutation_response",
		delete_meetings_guild:"meetings_guild_mutation_response",
		delete_meetings_guilduser:"meetings_guilduser_mutation_response",
		delete_meetings_meeting:"meetings_meeting_mutation_response",
		delete_meetings_meetinguser:"meetings_meetinguser_mutation_response",
		delete_meetings_sphere:"meetings_sphere_mutation_response",
		delete_meetings_sphere_users:"meetings_sphere_users_mutation_response",
		insert_auth_user:"auth_user_mutation_response",
		insert_meetings_guild:"meetings_guild_mutation_response",
		insert_meetings_guilduser:"meetings_guilduser_mutation_response",
		insert_meetings_meeting:"meetings_meeting_mutation_response",
		insert_meetings_meetinguser:"meetings_meetinguser_mutation_response",
		insert_meetings_sphere:"meetings_sphere_mutation_response",
		insert_meetings_sphere_users:"meetings_sphere_users_mutation_response",
		update_auth_user:"auth_user_mutation_response",
		update_meetings_guild:"meetings_guild_mutation_response",
		update_meetings_guilduser:"meetings_guilduser_mutation_response",
		update_meetings_meeting:"meetings_meeting_mutation_response",
		update_meetings_meetinguser:"meetings_meetinguser_mutation_response",
		update_meetings_sphere:"meetings_sphere_mutation_response",
		update_meetings_sphere_users:"meetings_sphere_users_mutation_response"
	},
	query_root:{
		auth_user:"auth_user",
		auth_user_aggregate:"auth_user_aggregate",
		auth_user_by_pk:"auth_user",
		meetings_guild:"meetings_guild",
		meetings_guild_aggregate:"meetings_guild_aggregate",
		meetings_guild_by_pk:"meetings_guild",
		meetings_guilduser:"meetings_guilduser",
		meetings_guilduser_aggregate:"meetings_guilduser_aggregate",
		meetings_guilduser_by_pk:"meetings_guilduser",
		meetings_meeting:"meetings_meeting",
		meetings_meeting_aggregate:"meetings_meeting_aggregate",
		meetings_meeting_by_pk:"meetings_meeting",
		meetings_meetinguser:"meetings_meetinguser",
		meetings_meetinguser_aggregate:"meetings_meetinguser_aggregate",
		meetings_meetinguser_by_pk:"meetings_meetinguser",
		meetings_sphere:"meetings_sphere",
		meetings_sphere_aggregate:"meetings_sphere_aggregate",
		meetings_sphere_by_pk:"meetings_sphere",
		meetings_sphere_users:"meetings_sphere_users",
		meetings_sphere_users_aggregate:"meetings_sphere_users_aggregate",
		meetings_sphere_users_by_pk:"meetings_sphere_users"
	},
	subscription_root:{
		auth_user:"auth_user",
		auth_user_aggregate:"auth_user_aggregate",
		auth_user_by_pk:"auth_user",
		meetings_guild:"meetings_guild",
		meetings_guild_aggregate:"meetings_guild_aggregate",
		meetings_guild_by_pk:"meetings_guild",
		meetings_guilduser:"meetings_guilduser",
		meetings_guilduser_aggregate:"meetings_guilduser_aggregate",
		meetings_guilduser_by_pk:"meetings_guilduser",
		meetings_meeting:"meetings_meeting",
		meetings_meeting_aggregate:"meetings_meeting_aggregate",
		meetings_meeting_by_pk:"meetings_meeting",
		meetings_meetinguser:"meetings_meetinguser",
		meetings_meetinguser_aggregate:"meetings_meetinguser_aggregate",
		meetings_meetinguser_by_pk:"meetings_meetinguser",
		meetings_sphere:"meetings_sphere",
		meetings_sphere_aggregate:"meetings_sphere_aggregate",
		meetings_sphere_by_pk:"meetings_sphere",
		meetings_sphere_users:"meetings_sphere_users",
		meetings_sphere_users_aggregate:"meetings_sphere_users_aggregate",
		meetings_sphere_users_by_pk:"meetings_sphere_users"
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

type OperationToGraphQL<V, T> = <Z>(o: Z | V) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;



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

const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${buildQuery(tName, o)}`;

const fullChainConstruct = (options: fetchOptions) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
) => apiFetch(options, queryConstruct(t, tName)(o));
  
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

const apiFetch = (options: fetchOptions, query: string) => {
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
      body: JSON.stringify({ query: queryString }),
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
  


export const Chain = (...options: fetchOptions) => ({
  query: ((o: any) =>
    fullChainConstruct(options)('query', 'query_root')(o).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["query_root"],query_root>,
mutation: ((o: any) =>
    fullChainConstruct(options)('mutation', 'mutation_root')(o).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["mutation_root"],mutation_root>,
subscription: ((o: any) =>
    fullChainConstruct(options)('subscription', 'subscription_root')(o).then(
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
  