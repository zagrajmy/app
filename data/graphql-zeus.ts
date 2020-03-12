/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
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
	["cr_user"]: AliasType<{
	date_joined?:true,
	email?:true,
	first_name?:true,
	is_active?:true,
	is_staff?:true,
	is_superuser?:true,
	last_login?:true,
	last_name?:true,
nb_guild_users?: [{	distinct_on?:ValueTypes["nb_guild_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_guild_user_order_by"][],	where?:ValueTypes["nb_guild_user_bool_exp"]},ValueTypes["nb_guild_user"]],
nb_guild_users_aggregate?: [{	distinct_on?:ValueTypes["nb_guild_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_guild_user_order_by"][],	where?:ValueTypes["nb_guild_user_bool_exp"]},ValueTypes["nb_guild_user_aggregate"]],
nb_meeting_users?: [{	distinct_on?:ValueTypes["nb_meeting_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_user_order_by"][],	where?:ValueTypes["nb_meeting_user_bool_exp"]},ValueTypes["nb_meeting_user"]],
nb_meeting_users_aggregate?: [{	distinct_on?:ValueTypes["nb_meeting_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_user_order_by"][],	where?:ValueTypes["nb_meeting_user_bool_exp"]},ValueTypes["nb_meeting_user_aggregate"]],
nb_meetings?: [{	distinct_on?:ValueTypes["nb_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_order_by"][],	where?:ValueTypes["nb_meeting_bool_exp"]},ValueTypes["nb_meeting"]],
nb_meetings_aggregate?: [{	distinct_on?:ValueTypes["nb_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_order_by"][],	where?:ValueTypes["nb_meeting_bool_exp"]},ValueTypes["nb_meeting_aggregate"]],
nb_sphere_users?: [{	distinct_on?:ValueTypes["nb_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_sphere_users_order_by"][],	where?:ValueTypes["nb_sphere_users_bool_exp"]},ValueTypes["nb_sphere_users"]],
nb_sphere_users_aggregate?: [{	distinct_on?:ValueTypes["nb_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_sphere_users_order_by"][],	where?:ValueTypes["nb_sphere_users_bool_exp"]},ValueTypes["nb_sphere_users_aggregate"]],
	password?:true,
	username?:true,
	uuid?:true
		__typename?: true
}>;
	["cr_user_aggregate"]: AliasType<{
	aggregate?:ValueTypes["cr_user_aggregate_fields"],
	nodes?:ValueTypes["cr_user"]
		__typename?: true
}>;
	["cr_user_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["cr_user_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["cr_user_max_fields"],
	min?:ValueTypes["cr_user_min_fields"]
		__typename?: true
}>;
	["cr_user_aggregate_order_by"]: {
	count?:ValueTypes["order_by"],
	max?:ValueTypes["cr_user_max_order_by"],
	min?:ValueTypes["cr_user_min_order_by"]
};
	["cr_user_arr_rel_insert_input"]: {
	data:ValueTypes["cr_user_insert_input"][],
	on_conflict?:ValueTypes["cr_user_on_conflict"]
};
	["cr_user_bool_exp"]: {
	_and?:(ValueTypes["cr_user_bool_exp"] | undefined)[],
	_not?:ValueTypes["cr_user_bool_exp"],
	_or?:(ValueTypes["cr_user_bool_exp"] | undefined)[],
	date_joined?:ValueTypes["timestamptz_comparison_exp"],
	email?:ValueTypes["String_comparison_exp"],
	first_name?:ValueTypes["String_comparison_exp"],
	is_active?:ValueTypes["Boolean_comparison_exp"],
	is_staff?:ValueTypes["Boolean_comparison_exp"],
	is_superuser?:ValueTypes["Boolean_comparison_exp"],
	last_login?:ValueTypes["timestamptz_comparison_exp"],
	last_name?:ValueTypes["String_comparison_exp"],
	nb_guild_users?:ValueTypes["nb_guild_user_bool_exp"],
	nb_meeting_users?:ValueTypes["nb_meeting_user_bool_exp"],
	nb_meetings?:ValueTypes["nb_meeting_bool_exp"],
	nb_sphere_users?:ValueTypes["nb_sphere_users_bool_exp"],
	password?:ValueTypes["String_comparison_exp"],
	username?:ValueTypes["String_comparison_exp"],
	uuid?:ValueTypes["uuid_comparison_exp"]
};
	["cr_user_constraint"]:cr_user_constraint;
	["cr_user_insert_input"]: {
	date_joined?:ValueTypes["timestamptz"],
	email?:string,
	first_name?:string,
	is_active?:boolean,
	is_staff?:boolean,
	is_superuser?:boolean,
	last_login?:ValueTypes["timestamptz"],
	last_name?:string,
	nb_guild_users?:ValueTypes["nb_guild_user_arr_rel_insert_input"],
	nb_meeting_users?:ValueTypes["nb_meeting_user_arr_rel_insert_input"],
	nb_meetings?:ValueTypes["nb_meeting_arr_rel_insert_input"],
	nb_sphere_users?:ValueTypes["nb_sphere_users_arr_rel_insert_input"],
	password?:string,
	username?:string,
	uuid?:ValueTypes["uuid"]
};
	["cr_user_max_fields"]: AliasType<{
	date_joined?:true,
	email?:true,
	first_name?:true,
	last_login?:true,
	last_name?:true,
	password?:true,
	username?:true
		__typename?: true
}>;
	["cr_user_max_order_by"]: {
	date_joined?:ValueTypes["order_by"],
	email?:ValueTypes["order_by"],
	first_name?:ValueTypes["order_by"],
	last_login?:ValueTypes["order_by"],
	last_name?:ValueTypes["order_by"],
	password?:ValueTypes["order_by"],
	username?:ValueTypes["order_by"]
};
	["cr_user_min_fields"]: AliasType<{
	date_joined?:true,
	email?:true,
	first_name?:true,
	last_login?:true,
	last_name?:true,
	password?:true,
	username?:true
		__typename?: true
}>;
	["cr_user_min_order_by"]: {
	date_joined?:ValueTypes["order_by"],
	email?:ValueTypes["order_by"],
	first_name?:ValueTypes["order_by"],
	last_login?:ValueTypes["order_by"],
	last_name?:ValueTypes["order_by"],
	password?:ValueTypes["order_by"],
	username?:ValueTypes["order_by"]
};
	["cr_user_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["cr_user"]
		__typename?: true
}>;
	["cr_user_obj_rel_insert_input"]: {
	data:ValueTypes["cr_user_insert_input"],
	on_conflict?:ValueTypes["cr_user_on_conflict"]
};
	["cr_user_on_conflict"]: {
	constraint:ValueTypes["cr_user_constraint"],
	update_columns:ValueTypes["cr_user_update_column"][],
	where?:ValueTypes["cr_user_bool_exp"]
};
	["cr_user_order_by"]: {
	date_joined?:ValueTypes["order_by"],
	email?:ValueTypes["order_by"],
	first_name?:ValueTypes["order_by"],
	is_active?:ValueTypes["order_by"],
	is_staff?:ValueTypes["order_by"],
	is_superuser?:ValueTypes["order_by"],
	last_login?:ValueTypes["order_by"],
	last_name?:ValueTypes["order_by"],
	nb_guild_users_aggregate?:ValueTypes["nb_guild_user_aggregate_order_by"],
	nb_meeting_users_aggregate?:ValueTypes["nb_meeting_user_aggregate_order_by"],
	nb_meetings_aggregate?:ValueTypes["nb_meeting_aggregate_order_by"],
	nb_sphere_users_aggregate?:ValueTypes["nb_sphere_users_aggregate_order_by"],
	password?:ValueTypes["order_by"],
	username?:ValueTypes["order_by"],
	uuid?:ValueTypes["order_by"]
};
	["cr_user_select_column"]:cr_user_select_column;
	["cr_user_set_input"]: {
	date_joined?:ValueTypes["timestamptz"],
	email?:string,
	first_name?:string,
	is_active?:boolean,
	is_staff?:boolean,
	is_superuser?:boolean,
	last_login?:ValueTypes["timestamptz"],
	last_name?:string,
	password?:string,
	username?:string,
	uuid?:ValueTypes["uuid"]
};
	["cr_user_update_column"]:cr_user_update_column;
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
	["mutation_root"]: AliasType<{
delete_cr_user?: [{	where:ValueTypes["cr_user_bool_exp"]},ValueTypes["cr_user_mutation_response"]],
delete_nb_guild?: [{	where:ValueTypes["nb_guild_bool_exp"]},ValueTypes["nb_guild_mutation_response"]],
delete_nb_guild_user?: [{	where:ValueTypes["nb_guild_user_bool_exp"]},ValueTypes["nb_guild_user_mutation_response"]],
delete_nb_meeting?: [{	where:ValueTypes["nb_meeting_bool_exp"]},ValueTypes["nb_meeting_mutation_response"]],
delete_nb_meeting_user?: [{	where:ValueTypes["nb_meeting_user_bool_exp"]},ValueTypes["nb_meeting_user_mutation_response"]],
delete_nb_sphere?: [{	where:ValueTypes["nb_sphere_bool_exp"]},ValueTypes["nb_sphere_mutation_response"]],
delete_nb_sphere_users?: [{	where:ValueTypes["nb_sphere_users_bool_exp"]},ValueTypes["nb_sphere_users_mutation_response"]],
insert_cr_user?: [{	objects:ValueTypes["cr_user_insert_input"][],	on_conflict?:ValueTypes["cr_user_on_conflict"]},ValueTypes["cr_user_mutation_response"]],
insert_nb_guild?: [{	objects:ValueTypes["nb_guild_insert_input"][],	on_conflict?:ValueTypes["nb_guild_on_conflict"]},ValueTypes["nb_guild_mutation_response"]],
insert_nb_guild_user?: [{	objects:ValueTypes["nb_guild_user_insert_input"][],	on_conflict?:ValueTypes["nb_guild_user_on_conflict"]},ValueTypes["nb_guild_user_mutation_response"]],
insert_nb_meeting?: [{	objects:ValueTypes["nb_meeting_insert_input"][],	on_conflict?:ValueTypes["nb_meeting_on_conflict"]},ValueTypes["nb_meeting_mutation_response"]],
insert_nb_meeting_user?: [{	objects:ValueTypes["nb_meeting_user_insert_input"][],	on_conflict?:ValueTypes["nb_meeting_user_on_conflict"]},ValueTypes["nb_meeting_user_mutation_response"]],
insert_nb_sphere?: [{	objects:ValueTypes["nb_sphere_insert_input"][],	on_conflict?:ValueTypes["nb_sphere_on_conflict"]},ValueTypes["nb_sphere_mutation_response"]],
insert_nb_sphere_users?: [{	objects:ValueTypes["nb_sphere_users_insert_input"][],	on_conflict?:ValueTypes["nb_sphere_users_on_conflict"]},ValueTypes["nb_sphere_users_mutation_response"]],
update_cr_user?: [{	_set?:ValueTypes["cr_user_set_input"],	where:ValueTypes["cr_user_bool_exp"]},ValueTypes["cr_user_mutation_response"]],
update_nb_guild?: [{	_inc?:ValueTypes["nb_guild_inc_input"],	_set?:ValueTypes["nb_guild_set_input"],	where:ValueTypes["nb_guild_bool_exp"]},ValueTypes["nb_guild_mutation_response"]],
update_nb_guild_user?: [{	_inc?:ValueTypes["nb_guild_user_inc_input"],	_set?:ValueTypes["nb_guild_user_set_input"],	where:ValueTypes["nb_guild_user_bool_exp"]},ValueTypes["nb_guild_user_mutation_response"]],
update_nb_meeting?: [{	_inc?:ValueTypes["nb_meeting_inc_input"],	_set?:ValueTypes["nb_meeting_set_input"],	where:ValueTypes["nb_meeting_bool_exp"]},ValueTypes["nb_meeting_mutation_response"]],
update_nb_meeting_user?: [{	_inc?:ValueTypes["nb_meeting_user_inc_input"],	_set?:ValueTypes["nb_meeting_user_set_input"],	where:ValueTypes["nb_meeting_user_bool_exp"]},ValueTypes["nb_meeting_user_mutation_response"]],
update_nb_sphere?: [{	_inc?:ValueTypes["nb_sphere_inc_input"],	_set?:ValueTypes["nb_sphere_set_input"],	where:ValueTypes["nb_sphere_bool_exp"]},ValueTypes["nb_sphere_mutation_response"]],
update_nb_sphere_users?: [{	_inc?:ValueTypes["nb_sphere_users_inc_input"],	_set?:ValueTypes["nb_sphere_users_set_input"],	where:ValueTypes["nb_sphere_users_bool_exp"]},ValueTypes["nb_sphere_users_mutation_response"]]
		__typename?: true
}>;
	["nb_guild"]: AliasType<{
	created_at?:true,
	description?:true,
	id?:true,
	name?:true,
nb_guild_users?: [{	distinct_on?:ValueTypes["nb_guild_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_guild_user_order_by"][],	where?:ValueTypes["nb_guild_user_bool_exp"]},ValueTypes["nb_guild_user"]],
nb_guild_users_aggregate?: [{	distinct_on?:ValueTypes["nb_guild_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_guild_user_order_by"][],	where?:ValueTypes["nb_guild_user_bool_exp"]},ValueTypes["nb_guild_user_aggregate"]],
nb_meetings?: [{	distinct_on?:ValueTypes["nb_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_order_by"][],	where?:ValueTypes["nb_meeting_bool_exp"]},ValueTypes["nb_meeting"]],
nb_meetings_aggregate?: [{	distinct_on?:ValueTypes["nb_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_order_by"][],	where?:ValueTypes["nb_meeting_bool_exp"]},ValueTypes["nb_meeting_aggregate"]],
	sphere_id?:true
		__typename?: true
}>;
	["nb_guild_aggregate"]: AliasType<{
	aggregate?:ValueTypes["nb_guild_aggregate_fields"],
	nodes?:ValueTypes["nb_guild"]
		__typename?: true
}>;
	["nb_guild_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["nb_guild_avg_fields"],
count?: [{	columns?:ValueTypes["nb_guild_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["nb_guild_max_fields"],
	min?:ValueTypes["nb_guild_min_fields"],
	stddev?:ValueTypes["nb_guild_stddev_fields"],
	stddev_pop?:ValueTypes["nb_guild_stddev_pop_fields"],
	stddev_samp?:ValueTypes["nb_guild_stddev_samp_fields"],
	sum?:ValueTypes["nb_guild_sum_fields"],
	var_pop?:ValueTypes["nb_guild_var_pop_fields"],
	var_samp?:ValueTypes["nb_guild_var_samp_fields"],
	variance?:ValueTypes["nb_guild_variance_fields"]
		__typename?: true
}>;
	["nb_guild_aggregate_order_by"]: {
	avg?:ValueTypes["nb_guild_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["nb_guild_max_order_by"],
	min?:ValueTypes["nb_guild_min_order_by"],
	stddev?:ValueTypes["nb_guild_stddev_order_by"],
	stddev_pop?:ValueTypes["nb_guild_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["nb_guild_stddev_samp_order_by"],
	sum?:ValueTypes["nb_guild_sum_order_by"],
	var_pop?:ValueTypes["nb_guild_var_pop_order_by"],
	var_samp?:ValueTypes["nb_guild_var_samp_order_by"],
	variance?:ValueTypes["nb_guild_variance_order_by"]
};
	["nb_guild_arr_rel_insert_input"]: {
	data:ValueTypes["nb_guild_insert_input"][],
	on_conflict?:ValueTypes["nb_guild_on_conflict"]
};
	["nb_guild_avg_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_guild_avg_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_guild_bool_exp"]: {
	_and?:(ValueTypes["nb_guild_bool_exp"] | undefined)[],
	_not?:ValueTypes["nb_guild_bool_exp"],
	_or?:(ValueTypes["nb_guild_bool_exp"] | undefined)[],
	created_at?:ValueTypes["timestamptz_comparison_exp"],
	description?:ValueTypes["String_comparison_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	name?:ValueTypes["String_comparison_exp"],
	nb_guild_users?:ValueTypes["nb_guild_user_bool_exp"],
	nb_meetings?:ValueTypes["nb_meeting_bool_exp"],
	sphere_id?:ValueTypes["Int_comparison_exp"]
};
	["nb_guild_constraint"]:nb_guild_constraint;
	["nb_guild_inc_input"]: {
	id?:number,
	sphere_id?:number
};
	["nb_guild_insert_input"]: {
	created_at?:ValueTypes["timestamptz"],
	description?:string,
	id?:number,
	name?:string,
	nb_guild_users?:ValueTypes["nb_guild_user_arr_rel_insert_input"],
	nb_meetings?:ValueTypes["nb_meeting_arr_rel_insert_input"],
	sphere_id?:number
};
	["nb_guild_max_fields"]: AliasType<{
	created_at?:true,
	description?:true,
	id?:true,
	name?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_guild_max_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_guild_min_fields"]: AliasType<{
	created_at?:true,
	description?:true,
	id?:true,
	name?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_guild_min_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_guild_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["nb_guild"]
		__typename?: true
}>;
	["nb_guild_obj_rel_insert_input"]: {
	data:ValueTypes["nb_guild_insert_input"],
	on_conflict?:ValueTypes["nb_guild_on_conflict"]
};
	["nb_guild_on_conflict"]: {
	constraint:ValueTypes["nb_guild_constraint"],
	update_columns:ValueTypes["nb_guild_update_column"][],
	where?:ValueTypes["nb_guild_bool_exp"]
};
	["nb_guild_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"],
	nb_guild_users_aggregate?:ValueTypes["nb_guild_user_aggregate_order_by"],
	nb_meetings_aggregate?:ValueTypes["nb_meeting_aggregate_order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_guild_select_column"]:nb_guild_select_column;
	["nb_guild_set_input"]: {
	created_at?:ValueTypes["timestamptz"],
	description?:string,
	id?:number,
	name?:string,
	sphere_id?:number
};
	["nb_guild_stddev_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_guild_stddev_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_guild_stddev_pop_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_guild_stddev_pop_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_guild_stddev_samp_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_guild_stddev_samp_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_guild_sum_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_guild_sum_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_guild_update_column"]:nb_guild_update_column;
	["nb_guild_user"]: AliasType<{
	cr_user?:ValueTypes["cr_user"],
	guild_id?:true,
	id?:true,
	membership_type?:true,
	nb_guild?:ValueTypes["nb_guild"],
	user_id?:true
		__typename?: true
}>;
	["nb_guild_user_aggregate"]: AliasType<{
	aggregate?:ValueTypes["nb_guild_user_aggregate_fields"],
	nodes?:ValueTypes["nb_guild_user"]
		__typename?: true
}>;
	["nb_guild_user_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["nb_guild_user_avg_fields"],
count?: [{	columns?:ValueTypes["nb_guild_user_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["nb_guild_user_max_fields"],
	min?:ValueTypes["nb_guild_user_min_fields"],
	stddev?:ValueTypes["nb_guild_user_stddev_fields"],
	stddev_pop?:ValueTypes["nb_guild_user_stddev_pop_fields"],
	stddev_samp?:ValueTypes["nb_guild_user_stddev_samp_fields"],
	sum?:ValueTypes["nb_guild_user_sum_fields"],
	var_pop?:ValueTypes["nb_guild_user_var_pop_fields"],
	var_samp?:ValueTypes["nb_guild_user_var_samp_fields"],
	variance?:ValueTypes["nb_guild_user_variance_fields"]
		__typename?: true
}>;
	["nb_guild_user_aggregate_order_by"]: {
	avg?:ValueTypes["nb_guild_user_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["nb_guild_user_max_order_by"],
	min?:ValueTypes["nb_guild_user_min_order_by"],
	stddev?:ValueTypes["nb_guild_user_stddev_order_by"],
	stddev_pop?:ValueTypes["nb_guild_user_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["nb_guild_user_stddev_samp_order_by"],
	sum?:ValueTypes["nb_guild_user_sum_order_by"],
	var_pop?:ValueTypes["nb_guild_user_var_pop_order_by"],
	var_samp?:ValueTypes["nb_guild_user_var_samp_order_by"],
	variance?:ValueTypes["nb_guild_user_variance_order_by"]
};
	["nb_guild_user_arr_rel_insert_input"]: {
	data:ValueTypes["nb_guild_user_insert_input"][],
	on_conflict?:ValueTypes["nb_guild_user_on_conflict"]
};
	["nb_guild_user_avg_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_guild_user_avg_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_guild_user_bool_exp"]: {
	_and?:(ValueTypes["nb_guild_user_bool_exp"] | undefined)[],
	_not?:ValueTypes["nb_guild_user_bool_exp"],
	_or?:(ValueTypes["nb_guild_user_bool_exp"] | undefined)[],
	cr_user?:ValueTypes["cr_user_bool_exp"],
	guild_id?:ValueTypes["Int_comparison_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	membership_type?:ValueTypes["String_comparison_exp"],
	nb_guild?:ValueTypes["nb_guild_bool_exp"],
	user_id?:ValueTypes["uuid_comparison_exp"]
};
	["nb_guild_user_constraint"]:nb_guild_user_constraint;
	["nb_guild_user_inc_input"]: {
	guild_id?:number,
	id?:number
};
	["nb_guild_user_insert_input"]: {
	cr_user?:ValueTypes["cr_user_obj_rel_insert_input"],
	guild_id?:number,
	id?:number,
	membership_type?:string,
	nb_guild?:ValueTypes["nb_guild_obj_rel_insert_input"],
	user_id?:ValueTypes["uuid"]
};
	["nb_guild_user_max_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	membership_type?:true
		__typename?: true
}>;
	["nb_guild_user_max_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	membership_type?:ValueTypes["order_by"]
};
	["nb_guild_user_min_fields"]: AliasType<{
	guild_id?:true,
	id?:true,
	membership_type?:true
		__typename?: true
}>;
	["nb_guild_user_min_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	membership_type?:ValueTypes["order_by"]
};
	["nb_guild_user_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["nb_guild_user"]
		__typename?: true
}>;
	["nb_guild_user_obj_rel_insert_input"]: {
	data:ValueTypes["nb_guild_user_insert_input"],
	on_conflict?:ValueTypes["nb_guild_user_on_conflict"]
};
	["nb_guild_user_on_conflict"]: {
	constraint:ValueTypes["nb_guild_user_constraint"],
	update_columns:ValueTypes["nb_guild_user_update_column"][],
	where?:ValueTypes["nb_guild_user_bool_exp"]
};
	["nb_guild_user_order_by"]: {
	cr_user?:ValueTypes["cr_user_order_by"],
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	membership_type?:ValueTypes["order_by"],
	nb_guild?:ValueTypes["nb_guild_order_by"],
	user_id?:ValueTypes["order_by"]
};
	["nb_guild_user_select_column"]:nb_guild_user_select_column;
	["nb_guild_user_set_input"]: {
	guild_id?:number,
	id?:number,
	membership_type?:string,
	user_id?:ValueTypes["uuid"]
};
	["nb_guild_user_stddev_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_guild_user_stddev_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_guild_user_stddev_pop_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_guild_user_stddev_pop_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_guild_user_stddev_samp_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_guild_user_stddev_samp_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_guild_user_sum_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_guild_user_sum_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_guild_user_update_column"]:nb_guild_user_update_column;
	["nb_guild_user_var_pop_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_guild_user_var_pop_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_guild_user_var_samp_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_guild_user_var_samp_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_guild_user_variance_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_guild_user_variance_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_guild_var_pop_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_guild_var_pop_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_guild_var_samp_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_guild_var_samp_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_guild_variance_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_guild_variance_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_meeting"]: AliasType<{
	created_at?:true,
	description?:true,
	end_time?:true,
	guild_id?:true,
	id?:true,
	location?:true,
	nb_guild?:ValueTypes["nb_guild"],
nb_meeting_users?: [{	distinct_on?:ValueTypes["nb_meeting_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_user_order_by"][],	where?:ValueTypes["nb_meeting_user_bool_exp"]},ValueTypes["nb_meeting_user"]],
nb_meeting_users_aggregate?: [{	distinct_on?:ValueTypes["nb_meeting_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_user_order_by"][],	where?:ValueTypes["nb_meeting_user_bool_exp"]},ValueTypes["nb_meeting_user_aggregate"]],
	organizer?:ValueTypes["cr_user"],
	organizer_id?:true,
	publication_time?:true,
	start_time?:true,
	title?:true,
	updated_at?:true
		__typename?: true
}>;
	["nb_meeting_aggregate"]: AliasType<{
	aggregate?:ValueTypes["nb_meeting_aggregate_fields"],
	nodes?:ValueTypes["nb_meeting"]
		__typename?: true
}>;
	["nb_meeting_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["nb_meeting_avg_fields"],
count?: [{	columns?:ValueTypes["nb_meeting_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["nb_meeting_max_fields"],
	min?:ValueTypes["nb_meeting_min_fields"],
	stddev?:ValueTypes["nb_meeting_stddev_fields"],
	stddev_pop?:ValueTypes["nb_meeting_stddev_pop_fields"],
	stddev_samp?:ValueTypes["nb_meeting_stddev_samp_fields"],
	sum?:ValueTypes["nb_meeting_sum_fields"],
	var_pop?:ValueTypes["nb_meeting_var_pop_fields"],
	var_samp?:ValueTypes["nb_meeting_var_samp_fields"],
	variance?:ValueTypes["nb_meeting_variance_fields"]
		__typename?: true
}>;
	["nb_meeting_aggregate_order_by"]: {
	avg?:ValueTypes["nb_meeting_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["nb_meeting_max_order_by"],
	min?:ValueTypes["nb_meeting_min_order_by"],
	stddev?:ValueTypes["nb_meeting_stddev_order_by"],
	stddev_pop?:ValueTypes["nb_meeting_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["nb_meeting_stddev_samp_order_by"],
	sum?:ValueTypes["nb_meeting_sum_order_by"],
	var_pop?:ValueTypes["nb_meeting_var_pop_order_by"],
	var_samp?:ValueTypes["nb_meeting_var_samp_order_by"],
	variance?:ValueTypes["nb_meeting_variance_order_by"]
};
	["nb_meeting_arr_rel_insert_input"]: {
	data:ValueTypes["nb_meeting_insert_input"][],
	on_conflict?:ValueTypes["nb_meeting_on_conflict"]
};
	["nb_meeting_avg_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_meeting_avg_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_meeting_bool_exp"]: {
	_and?:(ValueTypes["nb_meeting_bool_exp"] | undefined)[],
	_not?:ValueTypes["nb_meeting_bool_exp"],
	_or?:(ValueTypes["nb_meeting_bool_exp"] | undefined)[],
	created_at?:ValueTypes["timestamptz_comparison_exp"],
	description?:ValueTypes["String_comparison_exp"],
	end_time?:ValueTypes["timestamptz_comparison_exp"],
	guild_id?:ValueTypes["Int_comparison_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	location?:ValueTypes["String_comparison_exp"],
	nb_guild?:ValueTypes["nb_guild_bool_exp"],
	nb_meeting_users?:ValueTypes["nb_meeting_user_bool_exp"],
	organizer?:ValueTypes["cr_user_bool_exp"],
	organizer_id?:ValueTypes["uuid_comparison_exp"],
	publication_time?:ValueTypes["timestamptz_comparison_exp"],
	start_time?:ValueTypes["timestamptz_comparison_exp"],
	title?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["timestamptz_comparison_exp"]
};
	["nb_meeting_constraint"]:nb_meeting_constraint;
	["nb_meeting_inc_input"]: {
	guild_id?:number,
	id?:number
};
	["nb_meeting_insert_input"]: {
	created_at?:ValueTypes["timestamptz"],
	description?:string,
	end_time?:ValueTypes["timestamptz"],
	guild_id?:number,
	id?:number,
	location?:string,
	nb_guild?:ValueTypes["nb_guild_obj_rel_insert_input"],
	nb_meeting_users?:ValueTypes["nb_meeting_user_arr_rel_insert_input"],
	organizer?:ValueTypes["cr_user_obj_rel_insert_input"],
	organizer_id?:ValueTypes["uuid"],
	publication_time?:ValueTypes["timestamptz"],
	start_time?:ValueTypes["timestamptz"],
	title?:string,
	updated_at?:ValueTypes["timestamptz"]
};
	["nb_meeting_max_fields"]: AliasType<{
	created_at?:true,
	description?:true,
	end_time?:true,
	guild_id?:true,
	id?:true,
	location?:true,
	publication_time?:true,
	start_time?:true,
	title?:true,
	updated_at?:true
		__typename?: true
}>;
	["nb_meeting_max_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	end_time?:ValueTypes["order_by"],
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	location?:ValueTypes["order_by"],
	publication_time?:ValueTypes["order_by"],
	start_time?:ValueTypes["order_by"],
	title?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	["nb_meeting_min_fields"]: AliasType<{
	created_at?:true,
	description?:true,
	end_time?:true,
	guild_id?:true,
	id?:true,
	location?:true,
	publication_time?:true,
	start_time?:true,
	title?:true,
	updated_at?:true
		__typename?: true
}>;
	["nb_meeting_min_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	end_time?:ValueTypes["order_by"],
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	location?:ValueTypes["order_by"],
	publication_time?:ValueTypes["order_by"],
	start_time?:ValueTypes["order_by"],
	title?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	["nb_meeting_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["nb_meeting"]
		__typename?: true
}>;
	["nb_meeting_obj_rel_insert_input"]: {
	data:ValueTypes["nb_meeting_insert_input"],
	on_conflict?:ValueTypes["nb_meeting_on_conflict"]
};
	["nb_meeting_on_conflict"]: {
	constraint:ValueTypes["nb_meeting_constraint"],
	update_columns:ValueTypes["nb_meeting_update_column"][],
	where?:ValueTypes["nb_meeting_bool_exp"]
};
	["nb_meeting_order_by"]: {
	created_at?:ValueTypes["order_by"],
	description?:ValueTypes["order_by"],
	end_time?:ValueTypes["order_by"],
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	location?:ValueTypes["order_by"],
	nb_guild?:ValueTypes["nb_guild_order_by"],
	nb_meeting_users_aggregate?:ValueTypes["nb_meeting_user_aggregate_order_by"],
	organizer?:ValueTypes["cr_user_order_by"],
	organizer_id?:ValueTypes["order_by"],
	publication_time?:ValueTypes["order_by"],
	start_time?:ValueTypes["order_by"],
	title?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	["nb_meeting_select_column"]:nb_meeting_select_column;
	["nb_meeting_set_input"]: {
	created_at?:ValueTypes["timestamptz"],
	description?:string,
	end_time?:ValueTypes["timestamptz"],
	guild_id?:number,
	id?:number,
	location?:string,
	organizer_id?:ValueTypes["uuid"],
	publication_time?:ValueTypes["timestamptz"],
	start_time?:ValueTypes["timestamptz"],
	title?:string,
	updated_at?:ValueTypes["timestamptz"]
};
	["nb_meeting_stddev_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_meeting_stddev_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_meeting_stddev_pop_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_meeting_stddev_pop_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_meeting_stddev_samp_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_meeting_stddev_samp_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_meeting_sum_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_meeting_sum_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_meeting_update_column"]:nb_meeting_update_column;
	["nb_meeting_user"]: AliasType<{
	cr_user?:ValueTypes["cr_user"],
	id?:true,
	meeting_id?:true,
	nb_meeting?:ValueTypes["nb_meeting"],
	status?:true,
	user_id?:true
		__typename?: true
}>;
	["nb_meeting_user_aggregate"]: AliasType<{
	aggregate?:ValueTypes["nb_meeting_user_aggregate_fields"],
	nodes?:ValueTypes["nb_meeting_user"]
		__typename?: true
}>;
	["nb_meeting_user_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["nb_meeting_user_avg_fields"],
count?: [{	columns?:ValueTypes["nb_meeting_user_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["nb_meeting_user_max_fields"],
	min?:ValueTypes["nb_meeting_user_min_fields"],
	stddev?:ValueTypes["nb_meeting_user_stddev_fields"],
	stddev_pop?:ValueTypes["nb_meeting_user_stddev_pop_fields"],
	stddev_samp?:ValueTypes["nb_meeting_user_stddev_samp_fields"],
	sum?:ValueTypes["nb_meeting_user_sum_fields"],
	var_pop?:ValueTypes["nb_meeting_user_var_pop_fields"],
	var_samp?:ValueTypes["nb_meeting_user_var_samp_fields"],
	variance?:ValueTypes["nb_meeting_user_variance_fields"]
		__typename?: true
}>;
	["nb_meeting_user_aggregate_order_by"]: {
	avg?:ValueTypes["nb_meeting_user_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["nb_meeting_user_max_order_by"],
	min?:ValueTypes["nb_meeting_user_min_order_by"],
	stddev?:ValueTypes["nb_meeting_user_stddev_order_by"],
	stddev_pop?:ValueTypes["nb_meeting_user_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["nb_meeting_user_stddev_samp_order_by"],
	sum?:ValueTypes["nb_meeting_user_sum_order_by"],
	var_pop?:ValueTypes["nb_meeting_user_var_pop_order_by"],
	var_samp?:ValueTypes["nb_meeting_user_var_samp_order_by"],
	variance?:ValueTypes["nb_meeting_user_variance_order_by"]
};
	["nb_meeting_user_arr_rel_insert_input"]: {
	data:ValueTypes["nb_meeting_user_insert_input"][],
	on_conflict?:ValueTypes["nb_meeting_user_on_conflict"]
};
	["nb_meeting_user_avg_fields"]: AliasType<{
	id?:true,
	meeting_id?:true
		__typename?: true
}>;
	["nb_meeting_user_avg_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"]
};
	["nb_meeting_user_bool_exp"]: {
	_and?:(ValueTypes["nb_meeting_user_bool_exp"] | undefined)[],
	_not?:ValueTypes["nb_meeting_user_bool_exp"],
	_or?:(ValueTypes["nb_meeting_user_bool_exp"] | undefined)[],
	cr_user?:ValueTypes["cr_user_bool_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	meeting_id?:ValueTypes["Int_comparison_exp"],
	nb_meeting?:ValueTypes["nb_meeting_bool_exp"],
	status?:ValueTypes["String_comparison_exp"],
	user_id?:ValueTypes["uuid_comparison_exp"]
};
	["nb_meeting_user_constraint"]:nb_meeting_user_constraint;
	["nb_meeting_user_inc_input"]: {
	id?:number,
	meeting_id?:number
};
	["nb_meeting_user_insert_input"]: {
	cr_user?:ValueTypes["cr_user_obj_rel_insert_input"],
	id?:number,
	meeting_id?:number,
	nb_meeting?:ValueTypes["nb_meeting_obj_rel_insert_input"],
	status?:string,
	user_id?:ValueTypes["uuid"]
};
	["nb_meeting_user_max_fields"]: AliasType<{
	id?:true,
	meeting_id?:true,
	status?:true
		__typename?: true
}>;
	["nb_meeting_user_max_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"]
};
	["nb_meeting_user_min_fields"]: AliasType<{
	id?:true,
	meeting_id?:true,
	status?:true
		__typename?: true
}>;
	["nb_meeting_user_min_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"]
};
	["nb_meeting_user_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["nb_meeting_user"]
		__typename?: true
}>;
	["nb_meeting_user_obj_rel_insert_input"]: {
	data:ValueTypes["nb_meeting_user_insert_input"],
	on_conflict?:ValueTypes["nb_meeting_user_on_conflict"]
};
	["nb_meeting_user_on_conflict"]: {
	constraint:ValueTypes["nb_meeting_user_constraint"],
	update_columns:ValueTypes["nb_meeting_user_update_column"][],
	where?:ValueTypes["nb_meeting_user_bool_exp"]
};
	["nb_meeting_user_order_by"]: {
	cr_user?:ValueTypes["cr_user_order_by"],
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"],
	nb_meeting?:ValueTypes["nb_meeting_order_by"],
	status?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["nb_meeting_user_select_column"]:nb_meeting_user_select_column;
	["nb_meeting_user_set_input"]: {
	id?:number,
	meeting_id?:number,
	status?:string,
	user_id?:ValueTypes["uuid"]
};
	["nb_meeting_user_stddev_fields"]: AliasType<{
	id?:true,
	meeting_id?:true
		__typename?: true
}>;
	["nb_meeting_user_stddev_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"]
};
	["nb_meeting_user_stddev_pop_fields"]: AliasType<{
	id?:true,
	meeting_id?:true
		__typename?: true
}>;
	["nb_meeting_user_stddev_pop_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"]
};
	["nb_meeting_user_stddev_samp_fields"]: AliasType<{
	id?:true,
	meeting_id?:true
		__typename?: true
}>;
	["nb_meeting_user_stddev_samp_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"]
};
	["nb_meeting_user_sum_fields"]: AliasType<{
	id?:true,
	meeting_id?:true
		__typename?: true
}>;
	["nb_meeting_user_sum_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"]
};
	["nb_meeting_user_update_column"]:nb_meeting_user_update_column;
	["nb_meeting_user_var_pop_fields"]: AliasType<{
	id?:true,
	meeting_id?:true
		__typename?: true
}>;
	["nb_meeting_user_var_pop_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"]
};
	["nb_meeting_user_var_samp_fields"]: AliasType<{
	id?:true,
	meeting_id?:true
		__typename?: true
}>;
	["nb_meeting_user_var_samp_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"]
};
	["nb_meeting_user_variance_fields"]: AliasType<{
	id?:true,
	meeting_id?:true
		__typename?: true
}>;
	["nb_meeting_user_variance_order_by"]: {
	id?:ValueTypes["order_by"],
	meeting_id?:ValueTypes["order_by"]
};
	["nb_meeting_var_pop_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_meeting_var_pop_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_meeting_var_samp_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_meeting_var_samp_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_meeting_variance_fields"]: AliasType<{
	guild_id?:true,
	id?:true
		__typename?: true
}>;
	["nb_meeting_variance_order_by"]: {
	guild_id?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"]
};
	["nb_sphere"]: AliasType<{
	id?:true,
	name?:true,
nb_sphere_users?: [{	distinct_on?:ValueTypes["nb_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_sphere_users_order_by"][],	where?:ValueTypes["nb_sphere_users_bool_exp"]},ValueTypes["nb_sphere_users"]],
nb_sphere_users_aggregate?: [{	distinct_on?:ValueTypes["nb_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_sphere_users_order_by"][],	where?:ValueTypes["nb_sphere_users_bool_exp"]},ValueTypes["nb_sphere_users_aggregate"]]
		__typename?: true
}>;
	["nb_sphere_aggregate"]: AliasType<{
	aggregate?:ValueTypes["nb_sphere_aggregate_fields"],
	nodes?:ValueTypes["nb_sphere"]
		__typename?: true
}>;
	["nb_sphere_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["nb_sphere_avg_fields"],
count?: [{	columns?:ValueTypes["nb_sphere_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["nb_sphere_max_fields"],
	min?:ValueTypes["nb_sphere_min_fields"],
	stddev?:ValueTypes["nb_sphere_stddev_fields"],
	stddev_pop?:ValueTypes["nb_sphere_stddev_pop_fields"],
	stddev_samp?:ValueTypes["nb_sphere_stddev_samp_fields"],
	sum?:ValueTypes["nb_sphere_sum_fields"],
	var_pop?:ValueTypes["nb_sphere_var_pop_fields"],
	var_samp?:ValueTypes["nb_sphere_var_samp_fields"],
	variance?:ValueTypes["nb_sphere_variance_fields"]
		__typename?: true
}>;
	["nb_sphere_aggregate_order_by"]: {
	avg?:ValueTypes["nb_sphere_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["nb_sphere_max_order_by"],
	min?:ValueTypes["nb_sphere_min_order_by"],
	stddev?:ValueTypes["nb_sphere_stddev_order_by"],
	stddev_pop?:ValueTypes["nb_sphere_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["nb_sphere_stddev_samp_order_by"],
	sum?:ValueTypes["nb_sphere_sum_order_by"],
	var_pop?:ValueTypes["nb_sphere_var_pop_order_by"],
	var_samp?:ValueTypes["nb_sphere_var_samp_order_by"],
	variance?:ValueTypes["nb_sphere_variance_order_by"]
};
	["nb_sphere_arr_rel_insert_input"]: {
	data:ValueTypes["nb_sphere_insert_input"][],
	on_conflict?:ValueTypes["nb_sphere_on_conflict"]
};
	["nb_sphere_avg_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["nb_sphere_avg_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["nb_sphere_bool_exp"]: {
	_and?:(ValueTypes["nb_sphere_bool_exp"] | undefined)[],
	_not?:ValueTypes["nb_sphere_bool_exp"],
	_or?:(ValueTypes["nb_sphere_bool_exp"] | undefined)[],
	id?:ValueTypes["Int_comparison_exp"],
	name?:ValueTypes["String_comparison_exp"],
	nb_sphere_users?:ValueTypes["nb_sphere_users_bool_exp"]
};
	["nb_sphere_constraint"]:nb_sphere_constraint;
	["nb_sphere_inc_input"]: {
	id?:number
};
	["nb_sphere_insert_input"]: {
	id?:number,
	name?:string,
	nb_sphere_users?:ValueTypes["nb_sphere_users_arr_rel_insert_input"]
};
	["nb_sphere_max_fields"]: AliasType<{
	id?:true,
	name?:true
		__typename?: true
}>;
	["nb_sphere_max_order_by"]: {
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"]
};
	["nb_sphere_min_fields"]: AliasType<{
	id?:true,
	name?:true
		__typename?: true
}>;
	["nb_sphere_min_order_by"]: {
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"]
};
	["nb_sphere_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["nb_sphere"]
		__typename?: true
}>;
	["nb_sphere_obj_rel_insert_input"]: {
	data:ValueTypes["nb_sphere_insert_input"],
	on_conflict?:ValueTypes["nb_sphere_on_conflict"]
};
	["nb_sphere_on_conflict"]: {
	constraint:ValueTypes["nb_sphere_constraint"],
	update_columns:ValueTypes["nb_sphere_update_column"][],
	where?:ValueTypes["nb_sphere_bool_exp"]
};
	["nb_sphere_order_by"]: {
	id?:ValueTypes["order_by"],
	name?:ValueTypes["order_by"],
	nb_sphere_users_aggregate?:ValueTypes["nb_sphere_users_aggregate_order_by"]
};
	["nb_sphere_select_column"]:nb_sphere_select_column;
	["nb_sphere_set_input"]: {
	id?:number,
	name?:string
};
	["nb_sphere_stddev_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["nb_sphere_stddev_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["nb_sphere_stddev_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["nb_sphere_stddev_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["nb_sphere_stddev_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["nb_sphere_stddev_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["nb_sphere_sum_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["nb_sphere_sum_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["nb_sphere_update_column"]:nb_sphere_update_column;
	["nb_sphere_users"]: AliasType<{
	cr_user?:ValueTypes["cr_user"],
	id?:true,
	nb_sphere?:ValueTypes["nb_sphere"],
	sphere_id?:true,
	user_id?:true
		__typename?: true
}>;
	["nb_sphere_users_aggregate"]: AliasType<{
	aggregate?:ValueTypes["nb_sphere_users_aggregate_fields"],
	nodes?:ValueTypes["nb_sphere_users"]
		__typename?: true
}>;
	["nb_sphere_users_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["nb_sphere_users_avg_fields"],
count?: [{	columns?:ValueTypes["nb_sphere_users_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["nb_sphere_users_max_fields"],
	min?:ValueTypes["nb_sphere_users_min_fields"],
	stddev?:ValueTypes["nb_sphere_users_stddev_fields"],
	stddev_pop?:ValueTypes["nb_sphere_users_stddev_pop_fields"],
	stddev_samp?:ValueTypes["nb_sphere_users_stddev_samp_fields"],
	sum?:ValueTypes["nb_sphere_users_sum_fields"],
	var_pop?:ValueTypes["nb_sphere_users_var_pop_fields"],
	var_samp?:ValueTypes["nb_sphere_users_var_samp_fields"],
	variance?:ValueTypes["nb_sphere_users_variance_fields"]
		__typename?: true
}>;
	["nb_sphere_users_aggregate_order_by"]: {
	avg?:ValueTypes["nb_sphere_users_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["nb_sphere_users_max_order_by"],
	min?:ValueTypes["nb_sphere_users_min_order_by"],
	stddev?:ValueTypes["nb_sphere_users_stddev_order_by"],
	stddev_pop?:ValueTypes["nb_sphere_users_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["nb_sphere_users_stddev_samp_order_by"],
	sum?:ValueTypes["nb_sphere_users_sum_order_by"],
	var_pop?:ValueTypes["nb_sphere_users_var_pop_order_by"],
	var_samp?:ValueTypes["nb_sphere_users_var_samp_order_by"],
	variance?:ValueTypes["nb_sphere_users_variance_order_by"]
};
	["nb_sphere_users_arr_rel_insert_input"]: {
	data:ValueTypes["nb_sphere_users_insert_input"][],
	on_conflict?:ValueTypes["nb_sphere_users_on_conflict"]
};
	["nb_sphere_users_avg_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_sphere_users_avg_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_sphere_users_bool_exp"]: {
	_and?:(ValueTypes["nb_sphere_users_bool_exp"] | undefined)[],
	_not?:ValueTypes["nb_sphere_users_bool_exp"],
	_or?:(ValueTypes["nb_sphere_users_bool_exp"] | undefined)[],
	cr_user?:ValueTypes["cr_user_bool_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	nb_sphere?:ValueTypes["nb_sphere_bool_exp"],
	sphere_id?:ValueTypes["Int_comparison_exp"],
	user_id?:ValueTypes["uuid_comparison_exp"]
};
	["nb_sphere_users_constraint"]:nb_sphere_users_constraint;
	["nb_sphere_users_inc_input"]: {
	id?:number,
	sphere_id?:number
};
	["nb_sphere_users_insert_input"]: {
	cr_user?:ValueTypes["cr_user_obj_rel_insert_input"],
	id?:number,
	nb_sphere?:ValueTypes["nb_sphere_obj_rel_insert_input"],
	sphere_id?:number,
	user_id?:ValueTypes["uuid"]
};
	["nb_sphere_users_max_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_sphere_users_max_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_sphere_users_min_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_sphere_users_min_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_sphere_users_mutation_response"]: AliasType<{
	affected_rows?:true,
	returning?:ValueTypes["nb_sphere_users"]
		__typename?: true
}>;
	["nb_sphere_users_obj_rel_insert_input"]: {
	data:ValueTypes["nb_sphere_users_insert_input"],
	on_conflict?:ValueTypes["nb_sphere_users_on_conflict"]
};
	["nb_sphere_users_on_conflict"]: {
	constraint:ValueTypes["nb_sphere_users_constraint"],
	update_columns:ValueTypes["nb_sphere_users_update_column"][],
	where?:ValueTypes["nb_sphere_users_bool_exp"]
};
	["nb_sphere_users_order_by"]: {
	cr_user?:ValueTypes["cr_user_order_by"],
	id?:ValueTypes["order_by"],
	nb_sphere?:ValueTypes["nb_sphere_order_by"],
	sphere_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	["nb_sphere_users_select_column"]:nb_sphere_users_select_column;
	["nb_sphere_users_set_input"]: {
	id?:number,
	sphere_id?:number,
	user_id?:ValueTypes["uuid"]
};
	["nb_sphere_users_stddev_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_sphere_users_stddev_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_sphere_users_stddev_pop_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_sphere_users_stddev_pop_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_sphere_users_stddev_samp_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_sphere_users_stddev_samp_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_sphere_users_sum_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_sphere_users_sum_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_sphere_users_update_column"]:nb_sphere_users_update_column;
	["nb_sphere_users_var_pop_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_sphere_users_var_pop_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_sphere_users_var_samp_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_sphere_users_var_samp_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_sphere_users_variance_fields"]: AliasType<{
	id?:true,
	sphere_id?:true
		__typename?: true
}>;
	["nb_sphere_users_variance_order_by"]: {
	id?:ValueTypes["order_by"],
	sphere_id?:ValueTypes["order_by"]
};
	["nb_sphere_var_pop_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["nb_sphere_var_pop_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["nb_sphere_var_samp_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["nb_sphere_var_samp_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["nb_sphere_variance_fields"]: AliasType<{
	id?:true
		__typename?: true
}>;
	["nb_sphere_variance_order_by"]: {
	id?:ValueTypes["order_by"]
};
	["order_by"]:order_by;
	["query_root"]: AliasType<{
cr_user?: [{	distinct_on?:ValueTypes["cr_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["cr_user_order_by"][],	where?:ValueTypes["cr_user_bool_exp"]},ValueTypes["cr_user"]],
cr_user_aggregate?: [{	distinct_on?:ValueTypes["cr_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["cr_user_order_by"][],	where?:ValueTypes["cr_user_bool_exp"]},ValueTypes["cr_user_aggregate"]],
cr_user_by_pk?: [{	uuid:ValueTypes["uuid"]},ValueTypes["cr_user"]],
nb_guild?: [{	distinct_on?:ValueTypes["nb_guild_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_guild_order_by"][],	where?:ValueTypes["nb_guild_bool_exp"]},ValueTypes["nb_guild"]],
nb_guild_aggregate?: [{	distinct_on?:ValueTypes["nb_guild_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_guild_order_by"][],	where?:ValueTypes["nb_guild_bool_exp"]},ValueTypes["nb_guild_aggregate"]],
nb_guild_by_pk?: [{	id:number},ValueTypes["nb_guild"]],
nb_guild_user?: [{	distinct_on?:ValueTypes["nb_guild_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_guild_user_order_by"][],	where?:ValueTypes["nb_guild_user_bool_exp"]},ValueTypes["nb_guild_user"]],
nb_guild_user_aggregate?: [{	distinct_on?:ValueTypes["nb_guild_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_guild_user_order_by"][],	where?:ValueTypes["nb_guild_user_bool_exp"]},ValueTypes["nb_guild_user_aggregate"]],
nb_guild_user_by_pk?: [{	id:number},ValueTypes["nb_guild_user"]],
nb_meeting?: [{	distinct_on?:ValueTypes["nb_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_order_by"][],	where?:ValueTypes["nb_meeting_bool_exp"]},ValueTypes["nb_meeting"]],
nb_meeting_aggregate?: [{	distinct_on?:ValueTypes["nb_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_order_by"][],	where?:ValueTypes["nb_meeting_bool_exp"]},ValueTypes["nb_meeting_aggregate"]],
nb_meeting_by_pk?: [{	id:number},ValueTypes["nb_meeting"]],
nb_meeting_user?: [{	distinct_on?:ValueTypes["nb_meeting_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_user_order_by"][],	where?:ValueTypes["nb_meeting_user_bool_exp"]},ValueTypes["nb_meeting_user"]],
nb_meeting_user_aggregate?: [{	distinct_on?:ValueTypes["nb_meeting_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_user_order_by"][],	where?:ValueTypes["nb_meeting_user_bool_exp"]},ValueTypes["nb_meeting_user_aggregate"]],
nb_meeting_user_by_pk?: [{	id:number},ValueTypes["nb_meeting_user"]],
nb_sphere?: [{	distinct_on?:ValueTypes["nb_sphere_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_sphere_order_by"][],	where?:ValueTypes["nb_sphere_bool_exp"]},ValueTypes["nb_sphere"]],
nb_sphere_aggregate?: [{	distinct_on?:ValueTypes["nb_sphere_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_sphere_order_by"][],	where?:ValueTypes["nb_sphere_bool_exp"]},ValueTypes["nb_sphere_aggregate"]],
nb_sphere_by_pk?: [{	id:number},ValueTypes["nb_sphere"]],
nb_sphere_users?: [{	distinct_on?:ValueTypes["nb_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_sphere_users_order_by"][],	where?:ValueTypes["nb_sphere_users_bool_exp"]},ValueTypes["nb_sphere_users"]],
nb_sphere_users_aggregate?: [{	distinct_on?:ValueTypes["nb_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_sphere_users_order_by"][],	where?:ValueTypes["nb_sphere_users_bool_exp"]},ValueTypes["nb_sphere_users_aggregate"]],
nb_sphere_users_by_pk?: [{	id:number},ValueTypes["nb_sphere_users"]]
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
cr_user?: [{	distinct_on?:ValueTypes["cr_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["cr_user_order_by"][],	where?:ValueTypes["cr_user_bool_exp"]},ValueTypes["cr_user"]],
cr_user_aggregate?: [{	distinct_on?:ValueTypes["cr_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["cr_user_order_by"][],	where?:ValueTypes["cr_user_bool_exp"]},ValueTypes["cr_user_aggregate"]],
cr_user_by_pk?: [{	uuid:ValueTypes["uuid"]},ValueTypes["cr_user"]],
nb_guild?: [{	distinct_on?:ValueTypes["nb_guild_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_guild_order_by"][],	where?:ValueTypes["nb_guild_bool_exp"]},ValueTypes["nb_guild"]],
nb_guild_aggregate?: [{	distinct_on?:ValueTypes["nb_guild_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_guild_order_by"][],	where?:ValueTypes["nb_guild_bool_exp"]},ValueTypes["nb_guild_aggregate"]],
nb_guild_by_pk?: [{	id:number},ValueTypes["nb_guild"]],
nb_guild_user?: [{	distinct_on?:ValueTypes["nb_guild_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_guild_user_order_by"][],	where?:ValueTypes["nb_guild_user_bool_exp"]},ValueTypes["nb_guild_user"]],
nb_guild_user_aggregate?: [{	distinct_on?:ValueTypes["nb_guild_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_guild_user_order_by"][],	where?:ValueTypes["nb_guild_user_bool_exp"]},ValueTypes["nb_guild_user_aggregate"]],
nb_guild_user_by_pk?: [{	id:number},ValueTypes["nb_guild_user"]],
nb_meeting?: [{	distinct_on?:ValueTypes["nb_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_order_by"][],	where?:ValueTypes["nb_meeting_bool_exp"]},ValueTypes["nb_meeting"]],
nb_meeting_aggregate?: [{	distinct_on?:ValueTypes["nb_meeting_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_order_by"][],	where?:ValueTypes["nb_meeting_bool_exp"]},ValueTypes["nb_meeting_aggregate"]],
nb_meeting_by_pk?: [{	id:number},ValueTypes["nb_meeting"]],
nb_meeting_user?: [{	distinct_on?:ValueTypes["nb_meeting_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_user_order_by"][],	where?:ValueTypes["nb_meeting_user_bool_exp"]},ValueTypes["nb_meeting_user"]],
nb_meeting_user_aggregate?: [{	distinct_on?:ValueTypes["nb_meeting_user_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_meeting_user_order_by"][],	where?:ValueTypes["nb_meeting_user_bool_exp"]},ValueTypes["nb_meeting_user_aggregate"]],
nb_meeting_user_by_pk?: [{	id:number},ValueTypes["nb_meeting_user"]],
nb_sphere?: [{	distinct_on?:ValueTypes["nb_sphere_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_sphere_order_by"][],	where?:ValueTypes["nb_sphere_bool_exp"]},ValueTypes["nb_sphere"]],
nb_sphere_aggregate?: [{	distinct_on?:ValueTypes["nb_sphere_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_sphere_order_by"][],	where?:ValueTypes["nb_sphere_bool_exp"]},ValueTypes["nb_sphere_aggregate"]],
nb_sphere_by_pk?: [{	id:number},ValueTypes["nb_sphere"]],
nb_sphere_users?: [{	distinct_on?:ValueTypes["nb_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_sphere_users_order_by"][],	where?:ValueTypes["nb_sphere_users_bool_exp"]},ValueTypes["nb_sphere_users"]],
nb_sphere_users_aggregate?: [{	distinct_on?:ValueTypes["nb_sphere_users_select_column"][],	limit?:number,	offset?:number,	order_by?:ValueTypes["nb_sphere_users_order_by"][],	where?:ValueTypes["nb_sphere_users_bool_exp"]},ValueTypes["nb_sphere_users_aggregate"]],
nb_sphere_users_by_pk?: [{	id:number},ValueTypes["nb_sphere_users"]]
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
	["cr_user"]: {
		__typename?: "cr_user";
			date_joined?:PartialObjects["timestamptz"],
			email?:string,
			first_name?:string,
			is_active?:boolean,
			is_staff?:boolean,
			is_superuser?:boolean,
			last_login?:PartialObjects["timestamptz"],
			last_name?:string,
			nb_guild_users?:PartialObjects["nb_guild_user"][],
			nb_guild_users_aggregate?:PartialObjects["nb_guild_user_aggregate"],
			nb_meeting_users?:PartialObjects["nb_meeting_user"][],
			nb_meeting_users_aggregate?:PartialObjects["nb_meeting_user_aggregate"],
			nb_meetings?:PartialObjects["nb_meeting"][],
			nb_meetings_aggregate?:PartialObjects["nb_meeting_aggregate"],
			nb_sphere_users?:PartialObjects["nb_sphere_users"][],
			nb_sphere_users_aggregate?:PartialObjects["nb_sphere_users_aggregate"],
			password?:string,
			username?:string,
			uuid?:PartialObjects["uuid"]
	},
	["cr_user_aggregate"]: {
		__typename?: "cr_user_aggregate";
			aggregate?:PartialObjects["cr_user_aggregate_fields"],
			nodes?:PartialObjects["cr_user"][]
	},
	["cr_user_aggregate_fields"]: {
		__typename?: "cr_user_aggregate_fields";
			count?:number,
			max?:PartialObjects["cr_user_max_fields"],
			min?:PartialObjects["cr_user_min_fields"]
	},
	["cr_user_aggregate_order_by"]: {
	count?:PartialObjects["order_by"],
	max?:PartialObjects["cr_user_max_order_by"],
	min?:PartialObjects["cr_user_min_order_by"]
},
	["cr_user_arr_rel_insert_input"]: {
	data:PartialObjects["cr_user_insert_input"][],
	on_conflict?:PartialObjects["cr_user_on_conflict"]
},
	["cr_user_bool_exp"]: {
	_and?:(PartialObjects["cr_user_bool_exp"] | undefined)[],
	_not?:PartialObjects["cr_user_bool_exp"],
	_or?:(PartialObjects["cr_user_bool_exp"] | undefined)[],
	date_joined?:PartialObjects["timestamptz_comparison_exp"],
	email?:PartialObjects["String_comparison_exp"],
	first_name?:PartialObjects["String_comparison_exp"],
	is_active?:PartialObjects["Boolean_comparison_exp"],
	is_staff?:PartialObjects["Boolean_comparison_exp"],
	is_superuser?:PartialObjects["Boolean_comparison_exp"],
	last_login?:PartialObjects["timestamptz_comparison_exp"],
	last_name?:PartialObjects["String_comparison_exp"],
	nb_guild_users?:PartialObjects["nb_guild_user_bool_exp"],
	nb_meeting_users?:PartialObjects["nb_meeting_user_bool_exp"],
	nb_meetings?:PartialObjects["nb_meeting_bool_exp"],
	nb_sphere_users?:PartialObjects["nb_sphere_users_bool_exp"],
	password?:PartialObjects["String_comparison_exp"],
	username?:PartialObjects["String_comparison_exp"],
	uuid?:PartialObjects["uuid_comparison_exp"]
},
	["cr_user_constraint"]:cr_user_constraint,
	["cr_user_insert_input"]: {
	date_joined?:PartialObjects["timestamptz"],
	email?:string,
	first_name?:string,
	is_active?:boolean,
	is_staff?:boolean,
	is_superuser?:boolean,
	last_login?:PartialObjects["timestamptz"],
	last_name?:string,
	nb_guild_users?:PartialObjects["nb_guild_user_arr_rel_insert_input"],
	nb_meeting_users?:PartialObjects["nb_meeting_user_arr_rel_insert_input"],
	nb_meetings?:PartialObjects["nb_meeting_arr_rel_insert_input"],
	nb_sphere_users?:PartialObjects["nb_sphere_users_arr_rel_insert_input"],
	password?:string,
	username?:string,
	uuid?:PartialObjects["uuid"]
},
	["cr_user_max_fields"]: {
		__typename?: "cr_user_max_fields";
			date_joined?:PartialObjects["timestamptz"],
			email?:string,
			first_name?:string,
			last_login?:PartialObjects["timestamptz"],
			last_name?:string,
			password?:string,
			username?:string
	},
	["cr_user_max_order_by"]: {
	date_joined?:PartialObjects["order_by"],
	email?:PartialObjects["order_by"],
	first_name?:PartialObjects["order_by"],
	last_login?:PartialObjects["order_by"],
	last_name?:PartialObjects["order_by"],
	password?:PartialObjects["order_by"],
	username?:PartialObjects["order_by"]
},
	["cr_user_min_fields"]: {
		__typename?: "cr_user_min_fields";
			date_joined?:PartialObjects["timestamptz"],
			email?:string,
			first_name?:string,
			last_login?:PartialObjects["timestamptz"],
			last_name?:string,
			password?:string,
			username?:string
	},
	["cr_user_min_order_by"]: {
	date_joined?:PartialObjects["order_by"],
	email?:PartialObjects["order_by"],
	first_name?:PartialObjects["order_by"],
	last_login?:PartialObjects["order_by"],
	last_name?:PartialObjects["order_by"],
	password?:PartialObjects["order_by"],
	username?:PartialObjects["order_by"]
},
	["cr_user_mutation_response"]: {
		__typename?: "cr_user_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["cr_user"][]
	},
	["cr_user_obj_rel_insert_input"]: {
	data:PartialObjects["cr_user_insert_input"],
	on_conflict?:PartialObjects["cr_user_on_conflict"]
},
	["cr_user_on_conflict"]: {
	constraint:PartialObjects["cr_user_constraint"],
	update_columns:PartialObjects["cr_user_update_column"][],
	where?:PartialObjects["cr_user_bool_exp"]
},
	["cr_user_order_by"]: {
	date_joined?:PartialObjects["order_by"],
	email?:PartialObjects["order_by"],
	first_name?:PartialObjects["order_by"],
	is_active?:PartialObjects["order_by"],
	is_staff?:PartialObjects["order_by"],
	is_superuser?:PartialObjects["order_by"],
	last_login?:PartialObjects["order_by"],
	last_name?:PartialObjects["order_by"],
	nb_guild_users_aggregate?:PartialObjects["nb_guild_user_aggregate_order_by"],
	nb_meeting_users_aggregate?:PartialObjects["nb_meeting_user_aggregate_order_by"],
	nb_meetings_aggregate?:PartialObjects["nb_meeting_aggregate_order_by"],
	nb_sphere_users_aggregate?:PartialObjects["nb_sphere_users_aggregate_order_by"],
	password?:PartialObjects["order_by"],
	username?:PartialObjects["order_by"],
	uuid?:PartialObjects["order_by"]
},
	["cr_user_select_column"]:cr_user_select_column,
	["cr_user_set_input"]: {
	date_joined?:PartialObjects["timestamptz"],
	email?:string,
	first_name?:string,
	is_active?:boolean,
	is_staff?:boolean,
	is_superuser?:boolean,
	last_login?:PartialObjects["timestamptz"],
	last_name?:string,
	password?:string,
	username?:string,
	uuid?:PartialObjects["uuid"]
},
	["cr_user_update_column"]:cr_user_update_column,
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
	["mutation_root"]: {
		__typename?: "mutation_root";
			delete_cr_user?:PartialObjects["cr_user_mutation_response"],
			delete_nb_guild?:PartialObjects["nb_guild_mutation_response"],
			delete_nb_guild_user?:PartialObjects["nb_guild_user_mutation_response"],
			delete_nb_meeting?:PartialObjects["nb_meeting_mutation_response"],
			delete_nb_meeting_user?:PartialObjects["nb_meeting_user_mutation_response"],
			delete_nb_sphere?:PartialObjects["nb_sphere_mutation_response"],
			delete_nb_sphere_users?:PartialObjects["nb_sphere_users_mutation_response"],
			insert_cr_user?:PartialObjects["cr_user_mutation_response"],
			insert_nb_guild?:PartialObjects["nb_guild_mutation_response"],
			insert_nb_guild_user?:PartialObjects["nb_guild_user_mutation_response"],
			insert_nb_meeting?:PartialObjects["nb_meeting_mutation_response"],
			insert_nb_meeting_user?:PartialObjects["nb_meeting_user_mutation_response"],
			insert_nb_sphere?:PartialObjects["nb_sphere_mutation_response"],
			insert_nb_sphere_users?:PartialObjects["nb_sphere_users_mutation_response"],
			update_cr_user?:PartialObjects["cr_user_mutation_response"],
			update_nb_guild?:PartialObjects["nb_guild_mutation_response"],
			update_nb_guild_user?:PartialObjects["nb_guild_user_mutation_response"],
			update_nb_meeting?:PartialObjects["nb_meeting_mutation_response"],
			update_nb_meeting_user?:PartialObjects["nb_meeting_user_mutation_response"],
			update_nb_sphere?:PartialObjects["nb_sphere_mutation_response"],
			update_nb_sphere_users?:PartialObjects["nb_sphere_users_mutation_response"]
	},
	["nb_guild"]: {
		__typename?: "nb_guild";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			id?:number,
			name?:string,
			nb_guild_users?:PartialObjects["nb_guild_user"][],
			nb_guild_users_aggregate?:PartialObjects["nb_guild_user_aggregate"],
			nb_meetings?:PartialObjects["nb_meeting"][],
			nb_meetings_aggregate?:PartialObjects["nb_meeting_aggregate"],
			sphere_id?:number
	},
	["nb_guild_aggregate"]: {
		__typename?: "nb_guild_aggregate";
			aggregate?:PartialObjects["nb_guild_aggregate_fields"],
			nodes?:PartialObjects["nb_guild"][]
	},
	["nb_guild_aggregate_fields"]: {
		__typename?: "nb_guild_aggregate_fields";
			avg?:PartialObjects["nb_guild_avg_fields"],
			count?:number,
			max?:PartialObjects["nb_guild_max_fields"],
			min?:PartialObjects["nb_guild_min_fields"],
			stddev?:PartialObjects["nb_guild_stddev_fields"],
			stddev_pop?:PartialObjects["nb_guild_stddev_pop_fields"],
			stddev_samp?:PartialObjects["nb_guild_stddev_samp_fields"],
			sum?:PartialObjects["nb_guild_sum_fields"],
			var_pop?:PartialObjects["nb_guild_var_pop_fields"],
			var_samp?:PartialObjects["nb_guild_var_samp_fields"],
			variance?:PartialObjects["nb_guild_variance_fields"]
	},
	["nb_guild_aggregate_order_by"]: {
	avg?:PartialObjects["nb_guild_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["nb_guild_max_order_by"],
	min?:PartialObjects["nb_guild_min_order_by"],
	stddev?:PartialObjects["nb_guild_stddev_order_by"],
	stddev_pop?:PartialObjects["nb_guild_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["nb_guild_stddev_samp_order_by"],
	sum?:PartialObjects["nb_guild_sum_order_by"],
	var_pop?:PartialObjects["nb_guild_var_pop_order_by"],
	var_samp?:PartialObjects["nb_guild_var_samp_order_by"],
	variance?:PartialObjects["nb_guild_variance_order_by"]
},
	["nb_guild_arr_rel_insert_input"]: {
	data:PartialObjects["nb_guild_insert_input"][],
	on_conflict?:PartialObjects["nb_guild_on_conflict"]
},
	["nb_guild_avg_fields"]: {
		__typename?: "nb_guild_avg_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_guild_avg_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_guild_bool_exp"]: {
	_and?:(PartialObjects["nb_guild_bool_exp"] | undefined)[],
	_not?:PartialObjects["nb_guild_bool_exp"],
	_or?:(PartialObjects["nb_guild_bool_exp"] | undefined)[],
	created_at?:PartialObjects["timestamptz_comparison_exp"],
	description?:PartialObjects["String_comparison_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	name?:PartialObjects["String_comparison_exp"],
	nb_guild_users?:PartialObjects["nb_guild_user_bool_exp"],
	nb_meetings?:PartialObjects["nb_meeting_bool_exp"],
	sphere_id?:PartialObjects["Int_comparison_exp"]
},
	["nb_guild_constraint"]:nb_guild_constraint,
	["nb_guild_inc_input"]: {
	id?:number,
	sphere_id?:number
},
	["nb_guild_insert_input"]: {
	created_at?:PartialObjects["timestamptz"],
	description?:string,
	id?:number,
	name?:string,
	nb_guild_users?:PartialObjects["nb_guild_user_arr_rel_insert_input"],
	nb_meetings?:PartialObjects["nb_meeting_arr_rel_insert_input"],
	sphere_id?:number
},
	["nb_guild_max_fields"]: {
		__typename?: "nb_guild_max_fields";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			id?:number,
			name?:string,
			sphere_id?:number
	},
	["nb_guild_max_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_guild_min_fields"]: {
		__typename?: "nb_guild_min_fields";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			id?:number,
			name?:string,
			sphere_id?:number
	},
	["nb_guild_min_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_guild_mutation_response"]: {
		__typename?: "nb_guild_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["nb_guild"][]
	},
	["nb_guild_obj_rel_insert_input"]: {
	data:PartialObjects["nb_guild_insert_input"],
	on_conflict?:PartialObjects["nb_guild_on_conflict"]
},
	["nb_guild_on_conflict"]: {
	constraint:PartialObjects["nb_guild_constraint"],
	update_columns:PartialObjects["nb_guild_update_column"][],
	where?:PartialObjects["nb_guild_bool_exp"]
},
	["nb_guild_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"],
	nb_guild_users_aggregate?:PartialObjects["nb_guild_user_aggregate_order_by"],
	nb_meetings_aggregate?:PartialObjects["nb_meeting_aggregate_order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_guild_select_column"]:nb_guild_select_column,
	["nb_guild_set_input"]: {
	created_at?:PartialObjects["timestamptz"],
	description?:string,
	id?:number,
	name?:string,
	sphere_id?:number
},
	["nb_guild_stddev_fields"]: {
		__typename?: "nb_guild_stddev_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_guild_stddev_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_guild_stddev_pop_fields"]: {
		__typename?: "nb_guild_stddev_pop_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_guild_stddev_pop_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_guild_stddev_samp_fields"]: {
		__typename?: "nb_guild_stddev_samp_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_guild_stddev_samp_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_guild_sum_fields"]: {
		__typename?: "nb_guild_sum_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_guild_sum_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_guild_update_column"]:nb_guild_update_column,
	["nb_guild_user"]: {
		__typename?: "nb_guild_user";
			cr_user?:PartialObjects["cr_user"],
			guild_id?:number,
			id?:number,
			membership_type?:string,
			nb_guild?:PartialObjects["nb_guild"],
			user_id?:PartialObjects["uuid"]
	},
	["nb_guild_user_aggregate"]: {
		__typename?: "nb_guild_user_aggregate";
			aggregate?:PartialObjects["nb_guild_user_aggregate_fields"],
			nodes?:PartialObjects["nb_guild_user"][]
	},
	["nb_guild_user_aggregate_fields"]: {
		__typename?: "nb_guild_user_aggregate_fields";
			avg?:PartialObjects["nb_guild_user_avg_fields"],
			count?:number,
			max?:PartialObjects["nb_guild_user_max_fields"],
			min?:PartialObjects["nb_guild_user_min_fields"],
			stddev?:PartialObjects["nb_guild_user_stddev_fields"],
			stddev_pop?:PartialObjects["nb_guild_user_stddev_pop_fields"],
			stddev_samp?:PartialObjects["nb_guild_user_stddev_samp_fields"],
			sum?:PartialObjects["nb_guild_user_sum_fields"],
			var_pop?:PartialObjects["nb_guild_user_var_pop_fields"],
			var_samp?:PartialObjects["nb_guild_user_var_samp_fields"],
			variance?:PartialObjects["nb_guild_user_variance_fields"]
	},
	["nb_guild_user_aggregate_order_by"]: {
	avg?:PartialObjects["nb_guild_user_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["nb_guild_user_max_order_by"],
	min?:PartialObjects["nb_guild_user_min_order_by"],
	stddev?:PartialObjects["nb_guild_user_stddev_order_by"],
	stddev_pop?:PartialObjects["nb_guild_user_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["nb_guild_user_stddev_samp_order_by"],
	sum?:PartialObjects["nb_guild_user_sum_order_by"],
	var_pop?:PartialObjects["nb_guild_user_var_pop_order_by"],
	var_samp?:PartialObjects["nb_guild_user_var_samp_order_by"],
	variance?:PartialObjects["nb_guild_user_variance_order_by"]
},
	["nb_guild_user_arr_rel_insert_input"]: {
	data:PartialObjects["nb_guild_user_insert_input"][],
	on_conflict?:PartialObjects["nb_guild_user_on_conflict"]
},
	["nb_guild_user_avg_fields"]: {
		__typename?: "nb_guild_user_avg_fields";
			guild_id?:number,
			id?:number
	},
	["nb_guild_user_avg_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_guild_user_bool_exp"]: {
	_and?:(PartialObjects["nb_guild_user_bool_exp"] | undefined)[],
	_not?:PartialObjects["nb_guild_user_bool_exp"],
	_or?:(PartialObjects["nb_guild_user_bool_exp"] | undefined)[],
	cr_user?:PartialObjects["cr_user_bool_exp"],
	guild_id?:PartialObjects["Int_comparison_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	membership_type?:PartialObjects["String_comparison_exp"],
	nb_guild?:PartialObjects["nb_guild_bool_exp"],
	user_id?:PartialObjects["uuid_comparison_exp"]
},
	["nb_guild_user_constraint"]:nb_guild_user_constraint,
	["nb_guild_user_inc_input"]: {
	guild_id?:number,
	id?:number
},
	["nb_guild_user_insert_input"]: {
	cr_user?:PartialObjects["cr_user_obj_rel_insert_input"],
	guild_id?:number,
	id?:number,
	membership_type?:string,
	nb_guild?:PartialObjects["nb_guild_obj_rel_insert_input"],
	user_id?:PartialObjects["uuid"]
},
	["nb_guild_user_max_fields"]: {
		__typename?: "nb_guild_user_max_fields";
			guild_id?:number,
			id?:number,
			membership_type?:string
	},
	["nb_guild_user_max_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	membership_type?:PartialObjects["order_by"]
},
	["nb_guild_user_min_fields"]: {
		__typename?: "nb_guild_user_min_fields";
			guild_id?:number,
			id?:number,
			membership_type?:string
	},
	["nb_guild_user_min_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	membership_type?:PartialObjects["order_by"]
},
	["nb_guild_user_mutation_response"]: {
		__typename?: "nb_guild_user_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["nb_guild_user"][]
	},
	["nb_guild_user_obj_rel_insert_input"]: {
	data:PartialObjects["nb_guild_user_insert_input"],
	on_conflict?:PartialObjects["nb_guild_user_on_conflict"]
},
	["nb_guild_user_on_conflict"]: {
	constraint:PartialObjects["nb_guild_user_constraint"],
	update_columns:PartialObjects["nb_guild_user_update_column"][],
	where?:PartialObjects["nb_guild_user_bool_exp"]
},
	["nb_guild_user_order_by"]: {
	cr_user?:PartialObjects["cr_user_order_by"],
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	membership_type?:PartialObjects["order_by"],
	nb_guild?:PartialObjects["nb_guild_order_by"],
	user_id?:PartialObjects["order_by"]
},
	["nb_guild_user_select_column"]:nb_guild_user_select_column,
	["nb_guild_user_set_input"]: {
	guild_id?:number,
	id?:number,
	membership_type?:string,
	user_id?:PartialObjects["uuid"]
},
	["nb_guild_user_stddev_fields"]: {
		__typename?: "nb_guild_user_stddev_fields";
			guild_id?:number,
			id?:number
	},
	["nb_guild_user_stddev_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_guild_user_stddev_pop_fields"]: {
		__typename?: "nb_guild_user_stddev_pop_fields";
			guild_id?:number,
			id?:number
	},
	["nb_guild_user_stddev_pop_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_guild_user_stddev_samp_fields"]: {
		__typename?: "nb_guild_user_stddev_samp_fields";
			guild_id?:number,
			id?:number
	},
	["nb_guild_user_stddev_samp_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_guild_user_sum_fields"]: {
		__typename?: "nb_guild_user_sum_fields";
			guild_id?:number,
			id?:number
	},
	["nb_guild_user_sum_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_guild_user_update_column"]:nb_guild_user_update_column,
	["nb_guild_user_var_pop_fields"]: {
		__typename?: "nb_guild_user_var_pop_fields";
			guild_id?:number,
			id?:number
	},
	["nb_guild_user_var_pop_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_guild_user_var_samp_fields"]: {
		__typename?: "nb_guild_user_var_samp_fields";
			guild_id?:number,
			id?:number
	},
	["nb_guild_user_var_samp_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_guild_user_variance_fields"]: {
		__typename?: "nb_guild_user_variance_fields";
			guild_id?:number,
			id?:number
	},
	["nb_guild_user_variance_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_guild_var_pop_fields"]: {
		__typename?: "nb_guild_var_pop_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_guild_var_pop_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_guild_var_samp_fields"]: {
		__typename?: "nb_guild_var_samp_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_guild_var_samp_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_guild_variance_fields"]: {
		__typename?: "nb_guild_variance_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_guild_variance_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_meeting"]: {
		__typename?: "nb_meeting";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			end_time?:PartialObjects["timestamptz"],
			guild_id?:number,
			id?:number,
			location?:string,
			nb_guild?:PartialObjects["nb_guild"],
			nb_meeting_users?:PartialObjects["nb_meeting_user"][],
			nb_meeting_users_aggregate?:PartialObjects["nb_meeting_user_aggregate"],
			organizer?:PartialObjects["cr_user"],
			organizer_id?:PartialObjects["uuid"],
			publication_time?:PartialObjects["timestamptz"],
			start_time?:PartialObjects["timestamptz"],
			title?:string,
			updated_at?:PartialObjects["timestamptz"]
	},
	["nb_meeting_aggregate"]: {
		__typename?: "nb_meeting_aggregate";
			aggregate?:PartialObjects["nb_meeting_aggregate_fields"],
			nodes?:PartialObjects["nb_meeting"][]
	},
	["nb_meeting_aggregate_fields"]: {
		__typename?: "nb_meeting_aggregate_fields";
			avg?:PartialObjects["nb_meeting_avg_fields"],
			count?:number,
			max?:PartialObjects["nb_meeting_max_fields"],
			min?:PartialObjects["nb_meeting_min_fields"],
			stddev?:PartialObjects["nb_meeting_stddev_fields"],
			stddev_pop?:PartialObjects["nb_meeting_stddev_pop_fields"],
			stddev_samp?:PartialObjects["nb_meeting_stddev_samp_fields"],
			sum?:PartialObjects["nb_meeting_sum_fields"],
			var_pop?:PartialObjects["nb_meeting_var_pop_fields"],
			var_samp?:PartialObjects["nb_meeting_var_samp_fields"],
			variance?:PartialObjects["nb_meeting_variance_fields"]
	},
	["nb_meeting_aggregate_order_by"]: {
	avg?:PartialObjects["nb_meeting_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["nb_meeting_max_order_by"],
	min?:PartialObjects["nb_meeting_min_order_by"],
	stddev?:PartialObjects["nb_meeting_stddev_order_by"],
	stddev_pop?:PartialObjects["nb_meeting_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["nb_meeting_stddev_samp_order_by"],
	sum?:PartialObjects["nb_meeting_sum_order_by"],
	var_pop?:PartialObjects["nb_meeting_var_pop_order_by"],
	var_samp?:PartialObjects["nb_meeting_var_samp_order_by"],
	variance?:PartialObjects["nb_meeting_variance_order_by"]
},
	["nb_meeting_arr_rel_insert_input"]: {
	data:PartialObjects["nb_meeting_insert_input"][],
	on_conflict?:PartialObjects["nb_meeting_on_conflict"]
},
	["nb_meeting_avg_fields"]: {
		__typename?: "nb_meeting_avg_fields";
			guild_id?:number,
			id?:number
	},
	["nb_meeting_avg_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_meeting_bool_exp"]: {
	_and?:(PartialObjects["nb_meeting_bool_exp"] | undefined)[],
	_not?:PartialObjects["nb_meeting_bool_exp"],
	_or?:(PartialObjects["nb_meeting_bool_exp"] | undefined)[],
	created_at?:PartialObjects["timestamptz_comparison_exp"],
	description?:PartialObjects["String_comparison_exp"],
	end_time?:PartialObjects["timestamptz_comparison_exp"],
	guild_id?:PartialObjects["Int_comparison_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	location?:PartialObjects["String_comparison_exp"],
	nb_guild?:PartialObjects["nb_guild_bool_exp"],
	nb_meeting_users?:PartialObjects["nb_meeting_user_bool_exp"],
	organizer?:PartialObjects["cr_user_bool_exp"],
	organizer_id?:PartialObjects["uuid_comparison_exp"],
	publication_time?:PartialObjects["timestamptz_comparison_exp"],
	start_time?:PartialObjects["timestamptz_comparison_exp"],
	title?:PartialObjects["String_comparison_exp"],
	updated_at?:PartialObjects["timestamptz_comparison_exp"]
},
	["nb_meeting_constraint"]:nb_meeting_constraint,
	["nb_meeting_inc_input"]: {
	guild_id?:number,
	id?:number
},
	["nb_meeting_insert_input"]: {
	created_at?:PartialObjects["timestamptz"],
	description?:string,
	end_time?:PartialObjects["timestamptz"],
	guild_id?:number,
	id?:number,
	location?:string,
	nb_guild?:PartialObjects["nb_guild_obj_rel_insert_input"],
	nb_meeting_users?:PartialObjects["nb_meeting_user_arr_rel_insert_input"],
	organizer?:PartialObjects["cr_user_obj_rel_insert_input"],
	organizer_id?:PartialObjects["uuid"],
	publication_time?:PartialObjects["timestamptz"],
	start_time?:PartialObjects["timestamptz"],
	title?:string,
	updated_at?:PartialObjects["timestamptz"]
},
	["nb_meeting_max_fields"]: {
		__typename?: "nb_meeting_max_fields";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			end_time?:PartialObjects["timestamptz"],
			guild_id?:number,
			id?:number,
			location?:string,
			publication_time?:PartialObjects["timestamptz"],
			start_time?:PartialObjects["timestamptz"],
			title?:string,
			updated_at?:PartialObjects["timestamptz"]
	},
	["nb_meeting_max_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	end_time?:PartialObjects["order_by"],
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	location?:PartialObjects["order_by"],
	publication_time?:PartialObjects["order_by"],
	start_time?:PartialObjects["order_by"],
	title?:PartialObjects["order_by"],
	updated_at?:PartialObjects["order_by"]
},
	["nb_meeting_min_fields"]: {
		__typename?: "nb_meeting_min_fields";
			created_at?:PartialObjects["timestamptz"],
			description?:string,
			end_time?:PartialObjects["timestamptz"],
			guild_id?:number,
			id?:number,
			location?:string,
			publication_time?:PartialObjects["timestamptz"],
			start_time?:PartialObjects["timestamptz"],
			title?:string,
			updated_at?:PartialObjects["timestamptz"]
	},
	["nb_meeting_min_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	end_time?:PartialObjects["order_by"],
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	location?:PartialObjects["order_by"],
	publication_time?:PartialObjects["order_by"],
	start_time?:PartialObjects["order_by"],
	title?:PartialObjects["order_by"],
	updated_at?:PartialObjects["order_by"]
},
	["nb_meeting_mutation_response"]: {
		__typename?: "nb_meeting_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["nb_meeting"][]
	},
	["nb_meeting_obj_rel_insert_input"]: {
	data:PartialObjects["nb_meeting_insert_input"],
	on_conflict?:PartialObjects["nb_meeting_on_conflict"]
},
	["nb_meeting_on_conflict"]: {
	constraint:PartialObjects["nb_meeting_constraint"],
	update_columns:PartialObjects["nb_meeting_update_column"][],
	where?:PartialObjects["nb_meeting_bool_exp"]
},
	["nb_meeting_order_by"]: {
	created_at?:PartialObjects["order_by"],
	description?:PartialObjects["order_by"],
	end_time?:PartialObjects["order_by"],
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	location?:PartialObjects["order_by"],
	nb_guild?:PartialObjects["nb_guild_order_by"],
	nb_meeting_users_aggregate?:PartialObjects["nb_meeting_user_aggregate_order_by"],
	organizer?:PartialObjects["cr_user_order_by"],
	organizer_id?:PartialObjects["order_by"],
	publication_time?:PartialObjects["order_by"],
	start_time?:PartialObjects["order_by"],
	title?:PartialObjects["order_by"],
	updated_at?:PartialObjects["order_by"]
},
	["nb_meeting_select_column"]:nb_meeting_select_column,
	["nb_meeting_set_input"]: {
	created_at?:PartialObjects["timestamptz"],
	description?:string,
	end_time?:PartialObjects["timestamptz"],
	guild_id?:number,
	id?:number,
	location?:string,
	organizer_id?:PartialObjects["uuid"],
	publication_time?:PartialObjects["timestamptz"],
	start_time?:PartialObjects["timestamptz"],
	title?:string,
	updated_at?:PartialObjects["timestamptz"]
},
	["nb_meeting_stddev_fields"]: {
		__typename?: "nb_meeting_stddev_fields";
			guild_id?:number,
			id?:number
	},
	["nb_meeting_stddev_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_meeting_stddev_pop_fields"]: {
		__typename?: "nb_meeting_stddev_pop_fields";
			guild_id?:number,
			id?:number
	},
	["nb_meeting_stddev_pop_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_meeting_stddev_samp_fields"]: {
		__typename?: "nb_meeting_stddev_samp_fields";
			guild_id?:number,
			id?:number
	},
	["nb_meeting_stddev_samp_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_meeting_sum_fields"]: {
		__typename?: "nb_meeting_sum_fields";
			guild_id?:number,
			id?:number
	},
	["nb_meeting_sum_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_meeting_update_column"]:nb_meeting_update_column,
	["nb_meeting_user"]: {
		__typename?: "nb_meeting_user";
			cr_user?:PartialObjects["cr_user"],
			id?:number,
			meeting_id?:number,
			nb_meeting?:PartialObjects["nb_meeting"],
			status?:string,
			user_id?:PartialObjects["uuid"]
	},
	["nb_meeting_user_aggregate"]: {
		__typename?: "nb_meeting_user_aggregate";
			aggregate?:PartialObjects["nb_meeting_user_aggregate_fields"],
			nodes?:PartialObjects["nb_meeting_user"][]
	},
	["nb_meeting_user_aggregate_fields"]: {
		__typename?: "nb_meeting_user_aggregate_fields";
			avg?:PartialObjects["nb_meeting_user_avg_fields"],
			count?:number,
			max?:PartialObjects["nb_meeting_user_max_fields"],
			min?:PartialObjects["nb_meeting_user_min_fields"],
			stddev?:PartialObjects["nb_meeting_user_stddev_fields"],
			stddev_pop?:PartialObjects["nb_meeting_user_stddev_pop_fields"],
			stddev_samp?:PartialObjects["nb_meeting_user_stddev_samp_fields"],
			sum?:PartialObjects["nb_meeting_user_sum_fields"],
			var_pop?:PartialObjects["nb_meeting_user_var_pop_fields"],
			var_samp?:PartialObjects["nb_meeting_user_var_samp_fields"],
			variance?:PartialObjects["nb_meeting_user_variance_fields"]
	},
	["nb_meeting_user_aggregate_order_by"]: {
	avg?:PartialObjects["nb_meeting_user_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["nb_meeting_user_max_order_by"],
	min?:PartialObjects["nb_meeting_user_min_order_by"],
	stddev?:PartialObjects["nb_meeting_user_stddev_order_by"],
	stddev_pop?:PartialObjects["nb_meeting_user_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["nb_meeting_user_stddev_samp_order_by"],
	sum?:PartialObjects["nb_meeting_user_sum_order_by"],
	var_pop?:PartialObjects["nb_meeting_user_var_pop_order_by"],
	var_samp?:PartialObjects["nb_meeting_user_var_samp_order_by"],
	variance?:PartialObjects["nb_meeting_user_variance_order_by"]
},
	["nb_meeting_user_arr_rel_insert_input"]: {
	data:PartialObjects["nb_meeting_user_insert_input"][],
	on_conflict?:PartialObjects["nb_meeting_user_on_conflict"]
},
	["nb_meeting_user_avg_fields"]: {
		__typename?: "nb_meeting_user_avg_fields";
			id?:number,
			meeting_id?:number
	},
	["nb_meeting_user_avg_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"]
},
	["nb_meeting_user_bool_exp"]: {
	_and?:(PartialObjects["nb_meeting_user_bool_exp"] | undefined)[],
	_not?:PartialObjects["nb_meeting_user_bool_exp"],
	_or?:(PartialObjects["nb_meeting_user_bool_exp"] | undefined)[],
	cr_user?:PartialObjects["cr_user_bool_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	meeting_id?:PartialObjects["Int_comparison_exp"],
	nb_meeting?:PartialObjects["nb_meeting_bool_exp"],
	status?:PartialObjects["String_comparison_exp"],
	user_id?:PartialObjects["uuid_comparison_exp"]
},
	["nb_meeting_user_constraint"]:nb_meeting_user_constraint,
	["nb_meeting_user_inc_input"]: {
	id?:number,
	meeting_id?:number
},
	["nb_meeting_user_insert_input"]: {
	cr_user?:PartialObjects["cr_user_obj_rel_insert_input"],
	id?:number,
	meeting_id?:number,
	nb_meeting?:PartialObjects["nb_meeting_obj_rel_insert_input"],
	status?:string,
	user_id?:PartialObjects["uuid"]
},
	["nb_meeting_user_max_fields"]: {
		__typename?: "nb_meeting_user_max_fields";
			id?:number,
			meeting_id?:number,
			status?:string
	},
	["nb_meeting_user_max_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"],
	status?:PartialObjects["order_by"]
},
	["nb_meeting_user_min_fields"]: {
		__typename?: "nb_meeting_user_min_fields";
			id?:number,
			meeting_id?:number,
			status?:string
	},
	["nb_meeting_user_min_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"],
	status?:PartialObjects["order_by"]
},
	["nb_meeting_user_mutation_response"]: {
		__typename?: "nb_meeting_user_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["nb_meeting_user"][]
	},
	["nb_meeting_user_obj_rel_insert_input"]: {
	data:PartialObjects["nb_meeting_user_insert_input"],
	on_conflict?:PartialObjects["nb_meeting_user_on_conflict"]
},
	["nb_meeting_user_on_conflict"]: {
	constraint:PartialObjects["nb_meeting_user_constraint"],
	update_columns:PartialObjects["nb_meeting_user_update_column"][],
	where?:PartialObjects["nb_meeting_user_bool_exp"]
},
	["nb_meeting_user_order_by"]: {
	cr_user?:PartialObjects["cr_user_order_by"],
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"],
	nb_meeting?:PartialObjects["nb_meeting_order_by"],
	status?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["nb_meeting_user_select_column"]:nb_meeting_user_select_column,
	["nb_meeting_user_set_input"]: {
	id?:number,
	meeting_id?:number,
	status?:string,
	user_id?:PartialObjects["uuid"]
},
	["nb_meeting_user_stddev_fields"]: {
		__typename?: "nb_meeting_user_stddev_fields";
			id?:number,
			meeting_id?:number
	},
	["nb_meeting_user_stddev_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"]
},
	["nb_meeting_user_stddev_pop_fields"]: {
		__typename?: "nb_meeting_user_stddev_pop_fields";
			id?:number,
			meeting_id?:number
	},
	["nb_meeting_user_stddev_pop_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"]
},
	["nb_meeting_user_stddev_samp_fields"]: {
		__typename?: "nb_meeting_user_stddev_samp_fields";
			id?:number,
			meeting_id?:number
	},
	["nb_meeting_user_stddev_samp_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"]
},
	["nb_meeting_user_sum_fields"]: {
		__typename?: "nb_meeting_user_sum_fields";
			id?:number,
			meeting_id?:number
	},
	["nb_meeting_user_sum_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"]
},
	["nb_meeting_user_update_column"]:nb_meeting_user_update_column,
	["nb_meeting_user_var_pop_fields"]: {
		__typename?: "nb_meeting_user_var_pop_fields";
			id?:number,
			meeting_id?:number
	},
	["nb_meeting_user_var_pop_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"]
},
	["nb_meeting_user_var_samp_fields"]: {
		__typename?: "nb_meeting_user_var_samp_fields";
			id?:number,
			meeting_id?:number
	},
	["nb_meeting_user_var_samp_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"]
},
	["nb_meeting_user_variance_fields"]: {
		__typename?: "nb_meeting_user_variance_fields";
			id?:number,
			meeting_id?:number
	},
	["nb_meeting_user_variance_order_by"]: {
	id?:PartialObjects["order_by"],
	meeting_id?:PartialObjects["order_by"]
},
	["nb_meeting_var_pop_fields"]: {
		__typename?: "nb_meeting_var_pop_fields";
			guild_id?:number,
			id?:number
	},
	["nb_meeting_var_pop_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_meeting_var_samp_fields"]: {
		__typename?: "nb_meeting_var_samp_fields";
			guild_id?:number,
			id?:number
	},
	["nb_meeting_var_samp_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_meeting_variance_fields"]: {
		__typename?: "nb_meeting_variance_fields";
			guild_id?:number,
			id?:number
	},
	["nb_meeting_variance_order_by"]: {
	guild_id?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"]
},
	["nb_sphere"]: {
		__typename?: "nb_sphere";
			id?:number,
			name?:string,
			nb_sphere_users?:PartialObjects["nb_sphere_users"][],
			nb_sphere_users_aggregate?:PartialObjects["nb_sphere_users_aggregate"]
	},
	["nb_sphere_aggregate"]: {
		__typename?: "nb_sphere_aggregate";
			aggregate?:PartialObjects["nb_sphere_aggregate_fields"],
			nodes?:PartialObjects["nb_sphere"][]
	},
	["nb_sphere_aggregate_fields"]: {
		__typename?: "nb_sphere_aggregate_fields";
			avg?:PartialObjects["nb_sphere_avg_fields"],
			count?:number,
			max?:PartialObjects["nb_sphere_max_fields"],
			min?:PartialObjects["nb_sphere_min_fields"],
			stddev?:PartialObjects["nb_sphere_stddev_fields"],
			stddev_pop?:PartialObjects["nb_sphere_stddev_pop_fields"],
			stddev_samp?:PartialObjects["nb_sphere_stddev_samp_fields"],
			sum?:PartialObjects["nb_sphere_sum_fields"],
			var_pop?:PartialObjects["nb_sphere_var_pop_fields"],
			var_samp?:PartialObjects["nb_sphere_var_samp_fields"],
			variance?:PartialObjects["nb_sphere_variance_fields"]
	},
	["nb_sphere_aggregate_order_by"]: {
	avg?:PartialObjects["nb_sphere_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["nb_sphere_max_order_by"],
	min?:PartialObjects["nb_sphere_min_order_by"],
	stddev?:PartialObjects["nb_sphere_stddev_order_by"],
	stddev_pop?:PartialObjects["nb_sphere_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["nb_sphere_stddev_samp_order_by"],
	sum?:PartialObjects["nb_sphere_sum_order_by"],
	var_pop?:PartialObjects["nb_sphere_var_pop_order_by"],
	var_samp?:PartialObjects["nb_sphere_var_samp_order_by"],
	variance?:PartialObjects["nb_sphere_variance_order_by"]
},
	["nb_sphere_arr_rel_insert_input"]: {
	data:PartialObjects["nb_sphere_insert_input"][],
	on_conflict?:PartialObjects["nb_sphere_on_conflict"]
},
	["nb_sphere_avg_fields"]: {
		__typename?: "nb_sphere_avg_fields";
			id?:number
	},
	["nb_sphere_avg_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["nb_sphere_bool_exp"]: {
	_and?:(PartialObjects["nb_sphere_bool_exp"] | undefined)[],
	_not?:PartialObjects["nb_sphere_bool_exp"],
	_or?:(PartialObjects["nb_sphere_bool_exp"] | undefined)[],
	id?:PartialObjects["Int_comparison_exp"],
	name?:PartialObjects["String_comparison_exp"],
	nb_sphere_users?:PartialObjects["nb_sphere_users_bool_exp"]
},
	["nb_sphere_constraint"]:nb_sphere_constraint,
	["nb_sphere_inc_input"]: {
	id?:number
},
	["nb_sphere_insert_input"]: {
	id?:number,
	name?:string,
	nb_sphere_users?:PartialObjects["nb_sphere_users_arr_rel_insert_input"]
},
	["nb_sphere_max_fields"]: {
		__typename?: "nb_sphere_max_fields";
			id?:number,
			name?:string
	},
	["nb_sphere_max_order_by"]: {
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"]
},
	["nb_sphere_min_fields"]: {
		__typename?: "nb_sphere_min_fields";
			id?:number,
			name?:string
	},
	["nb_sphere_min_order_by"]: {
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"]
},
	["nb_sphere_mutation_response"]: {
		__typename?: "nb_sphere_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["nb_sphere"][]
	},
	["nb_sphere_obj_rel_insert_input"]: {
	data:PartialObjects["nb_sphere_insert_input"],
	on_conflict?:PartialObjects["nb_sphere_on_conflict"]
},
	["nb_sphere_on_conflict"]: {
	constraint:PartialObjects["nb_sphere_constraint"],
	update_columns:PartialObjects["nb_sphere_update_column"][],
	where?:PartialObjects["nb_sphere_bool_exp"]
},
	["nb_sphere_order_by"]: {
	id?:PartialObjects["order_by"],
	name?:PartialObjects["order_by"],
	nb_sphere_users_aggregate?:PartialObjects["nb_sphere_users_aggregate_order_by"]
},
	["nb_sphere_select_column"]:nb_sphere_select_column,
	["nb_sphere_set_input"]: {
	id?:number,
	name?:string
},
	["nb_sphere_stddev_fields"]: {
		__typename?: "nb_sphere_stddev_fields";
			id?:number
	},
	["nb_sphere_stddev_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["nb_sphere_stddev_pop_fields"]: {
		__typename?: "nb_sphere_stddev_pop_fields";
			id?:number
	},
	["nb_sphere_stddev_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["nb_sphere_stddev_samp_fields"]: {
		__typename?: "nb_sphere_stddev_samp_fields";
			id?:number
	},
	["nb_sphere_stddev_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["nb_sphere_sum_fields"]: {
		__typename?: "nb_sphere_sum_fields";
			id?:number
	},
	["nb_sphere_sum_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["nb_sphere_update_column"]:nb_sphere_update_column,
	["nb_sphere_users"]: {
		__typename?: "nb_sphere_users";
			cr_user?:PartialObjects["cr_user"],
			id?:number,
			nb_sphere?:PartialObjects["nb_sphere"],
			sphere_id?:number,
			user_id?:PartialObjects["uuid"]
	},
	["nb_sphere_users_aggregate"]: {
		__typename?: "nb_sphere_users_aggregate";
			aggregate?:PartialObjects["nb_sphere_users_aggregate_fields"],
			nodes?:PartialObjects["nb_sphere_users"][]
	},
	["nb_sphere_users_aggregate_fields"]: {
		__typename?: "nb_sphere_users_aggregate_fields";
			avg?:PartialObjects["nb_sphere_users_avg_fields"],
			count?:number,
			max?:PartialObjects["nb_sphere_users_max_fields"],
			min?:PartialObjects["nb_sphere_users_min_fields"],
			stddev?:PartialObjects["nb_sphere_users_stddev_fields"],
			stddev_pop?:PartialObjects["nb_sphere_users_stddev_pop_fields"],
			stddev_samp?:PartialObjects["nb_sphere_users_stddev_samp_fields"],
			sum?:PartialObjects["nb_sphere_users_sum_fields"],
			var_pop?:PartialObjects["nb_sphere_users_var_pop_fields"],
			var_samp?:PartialObjects["nb_sphere_users_var_samp_fields"],
			variance?:PartialObjects["nb_sphere_users_variance_fields"]
	},
	["nb_sphere_users_aggregate_order_by"]: {
	avg?:PartialObjects["nb_sphere_users_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["nb_sphere_users_max_order_by"],
	min?:PartialObjects["nb_sphere_users_min_order_by"],
	stddev?:PartialObjects["nb_sphere_users_stddev_order_by"],
	stddev_pop?:PartialObjects["nb_sphere_users_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["nb_sphere_users_stddev_samp_order_by"],
	sum?:PartialObjects["nb_sphere_users_sum_order_by"],
	var_pop?:PartialObjects["nb_sphere_users_var_pop_order_by"],
	var_samp?:PartialObjects["nb_sphere_users_var_samp_order_by"],
	variance?:PartialObjects["nb_sphere_users_variance_order_by"]
},
	["nb_sphere_users_arr_rel_insert_input"]: {
	data:PartialObjects["nb_sphere_users_insert_input"][],
	on_conflict?:PartialObjects["nb_sphere_users_on_conflict"]
},
	["nb_sphere_users_avg_fields"]: {
		__typename?: "nb_sphere_users_avg_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_sphere_users_avg_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_sphere_users_bool_exp"]: {
	_and?:(PartialObjects["nb_sphere_users_bool_exp"] | undefined)[],
	_not?:PartialObjects["nb_sphere_users_bool_exp"],
	_or?:(PartialObjects["nb_sphere_users_bool_exp"] | undefined)[],
	cr_user?:PartialObjects["cr_user_bool_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	nb_sphere?:PartialObjects["nb_sphere_bool_exp"],
	sphere_id?:PartialObjects["Int_comparison_exp"],
	user_id?:PartialObjects["uuid_comparison_exp"]
},
	["nb_sphere_users_constraint"]:nb_sphere_users_constraint,
	["nb_sphere_users_inc_input"]: {
	id?:number,
	sphere_id?:number
},
	["nb_sphere_users_insert_input"]: {
	cr_user?:PartialObjects["cr_user_obj_rel_insert_input"],
	id?:number,
	nb_sphere?:PartialObjects["nb_sphere_obj_rel_insert_input"],
	sphere_id?:number,
	user_id?:PartialObjects["uuid"]
},
	["nb_sphere_users_max_fields"]: {
		__typename?: "nb_sphere_users_max_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_sphere_users_max_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_sphere_users_min_fields"]: {
		__typename?: "nb_sphere_users_min_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_sphere_users_min_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_sphere_users_mutation_response"]: {
		__typename?: "nb_sphere_users_mutation_response";
			affected_rows?:number,
			returning?:PartialObjects["nb_sphere_users"][]
	},
	["nb_sphere_users_obj_rel_insert_input"]: {
	data:PartialObjects["nb_sphere_users_insert_input"],
	on_conflict?:PartialObjects["nb_sphere_users_on_conflict"]
},
	["nb_sphere_users_on_conflict"]: {
	constraint:PartialObjects["nb_sphere_users_constraint"],
	update_columns:PartialObjects["nb_sphere_users_update_column"][],
	where?:PartialObjects["nb_sphere_users_bool_exp"]
},
	["nb_sphere_users_order_by"]: {
	cr_user?:PartialObjects["cr_user_order_by"],
	id?:PartialObjects["order_by"],
	nb_sphere?:PartialObjects["nb_sphere_order_by"],
	sphere_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	["nb_sphere_users_select_column"]:nb_sphere_users_select_column,
	["nb_sphere_users_set_input"]: {
	id?:number,
	sphere_id?:number,
	user_id?:PartialObjects["uuid"]
},
	["nb_sphere_users_stddev_fields"]: {
		__typename?: "nb_sphere_users_stddev_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_sphere_users_stddev_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_sphere_users_stddev_pop_fields"]: {
		__typename?: "nb_sphere_users_stddev_pop_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_sphere_users_stddev_pop_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_sphere_users_stddev_samp_fields"]: {
		__typename?: "nb_sphere_users_stddev_samp_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_sphere_users_stddev_samp_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_sphere_users_sum_fields"]: {
		__typename?: "nb_sphere_users_sum_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_sphere_users_sum_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_sphere_users_update_column"]:nb_sphere_users_update_column,
	["nb_sphere_users_var_pop_fields"]: {
		__typename?: "nb_sphere_users_var_pop_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_sphere_users_var_pop_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_sphere_users_var_samp_fields"]: {
		__typename?: "nb_sphere_users_var_samp_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_sphere_users_var_samp_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_sphere_users_variance_fields"]: {
		__typename?: "nb_sphere_users_variance_fields";
			id?:number,
			sphere_id?:number
	},
	["nb_sphere_users_variance_order_by"]: {
	id?:PartialObjects["order_by"],
	sphere_id?:PartialObjects["order_by"]
},
	["nb_sphere_var_pop_fields"]: {
		__typename?: "nb_sphere_var_pop_fields";
			id?:number
	},
	["nb_sphere_var_pop_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["nb_sphere_var_samp_fields"]: {
		__typename?: "nb_sphere_var_samp_fields";
			id?:number
	},
	["nb_sphere_var_samp_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["nb_sphere_variance_fields"]: {
		__typename?: "nb_sphere_variance_fields";
			id?:number
	},
	["nb_sphere_variance_order_by"]: {
	id?:PartialObjects["order_by"]
},
	["order_by"]:order_by,
	["query_root"]: {
		__typename?: "query_root";
			cr_user?:PartialObjects["cr_user"][],
			cr_user_aggregate?:PartialObjects["cr_user_aggregate"],
			cr_user_by_pk?:PartialObjects["cr_user"],
			nb_guild?:PartialObjects["nb_guild"][],
			nb_guild_aggregate?:PartialObjects["nb_guild_aggregate"],
			nb_guild_by_pk?:PartialObjects["nb_guild"],
			nb_guild_user?:PartialObjects["nb_guild_user"][],
			nb_guild_user_aggregate?:PartialObjects["nb_guild_user_aggregate"],
			nb_guild_user_by_pk?:PartialObjects["nb_guild_user"],
			nb_meeting?:PartialObjects["nb_meeting"][],
			nb_meeting_aggregate?:PartialObjects["nb_meeting_aggregate"],
			nb_meeting_by_pk?:PartialObjects["nb_meeting"],
			nb_meeting_user?:PartialObjects["nb_meeting_user"][],
			nb_meeting_user_aggregate?:PartialObjects["nb_meeting_user_aggregate"],
			nb_meeting_user_by_pk?:PartialObjects["nb_meeting_user"],
			nb_sphere?:PartialObjects["nb_sphere"][],
			nb_sphere_aggregate?:PartialObjects["nb_sphere_aggregate"],
			nb_sphere_by_pk?:PartialObjects["nb_sphere"],
			nb_sphere_users?:PartialObjects["nb_sphere_users"][],
			nb_sphere_users_aggregate?:PartialObjects["nb_sphere_users_aggregate"],
			nb_sphere_users_by_pk?:PartialObjects["nb_sphere_users"]
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
			cr_user?:PartialObjects["cr_user"][],
			cr_user_aggregate?:PartialObjects["cr_user_aggregate"],
			cr_user_by_pk?:PartialObjects["cr_user"],
			nb_guild?:PartialObjects["nb_guild"][],
			nb_guild_aggregate?:PartialObjects["nb_guild_aggregate"],
			nb_guild_by_pk?:PartialObjects["nb_guild"],
			nb_guild_user?:PartialObjects["nb_guild_user"][],
			nb_guild_user_aggregate?:PartialObjects["nb_guild_user_aggregate"],
			nb_guild_user_by_pk?:PartialObjects["nb_guild_user"],
			nb_meeting?:PartialObjects["nb_meeting"][],
			nb_meeting_aggregate?:PartialObjects["nb_meeting_aggregate"],
			nb_meeting_by_pk?:PartialObjects["nb_meeting"],
			nb_meeting_user?:PartialObjects["nb_meeting_user"][],
			nb_meeting_user_aggregate?:PartialObjects["nb_meeting_user_aggregate"],
			nb_meeting_user_by_pk?:PartialObjects["nb_meeting_user"],
			nb_sphere?:PartialObjects["nb_sphere"][],
			nb_sphere_aggregate?:PartialObjects["nb_sphere_aggregate"],
			nb_sphere_by_pk?:PartialObjects["nb_sphere"],
			nb_sphere_users?:PartialObjects["nb_sphere_users"][],
			nb_sphere_users_aggregate?:PartialObjects["nb_sphere_users_aggregate"],
			nb_sphere_users_by_pk?:PartialObjects["nb_sphere_users"]
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

// expression to compare columns of type Boolean. All fields are combined with logical 'AND'.

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

// select columns of table "cr_user"

// input type for updating data in table "cr_user"

// update columns of table "cr_user"

// expression to compare columns of type Int. All fields are combined with logical 'AND'.

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

// input type for incrementing integer columne in table "nb_guild"

// input type for inserting data into table "nb_guild"

// aggregate max on columns

// order by max() on columns of table "nb_guild"

// aggregate min on columns

// order by min() on columns of table "nb_guild"

// response of any mutation on the table "nb_guild"

// input type for inserting object relation for remote table "nb_guild"

// on conflict condition type for table "nb_guild"

// ordering options when selecting data from "nb_guild"

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

// columns and relationships of "nb_guild_user"

// aggregated selection of "nb_guild_user"

// aggregate fields of "nb_guild_user"

// order by aggregate values of table "nb_guild_user"

// input type for inserting array relation for remote table "nb_guild_user"

// aggregate avg on columns

// order by avg() on columns of table "nb_guild_user"

// Boolean expression to filter rows from the table "nb_guild_user". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "nb_guild_user"

// input type for incrementing integer columne in table "nb_guild_user"

// input type for inserting data into table "nb_guild_user"

// aggregate max on columns

// order by max() on columns of table "nb_guild_user"

// aggregate min on columns

// order by min() on columns of table "nb_guild_user"

// response of any mutation on the table "nb_guild_user"

// input type for inserting object relation for remote table "nb_guild_user"

// on conflict condition type for table "nb_guild_user"

// ordering options when selecting data from "nb_guild_user"

// select columns of table "nb_guild_user"

// input type for updating data in table "nb_guild_user"

// aggregate stddev on columns

// order by stddev() on columns of table "nb_guild_user"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "nb_guild_user"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "nb_guild_user"

// aggregate sum on columns

// order by sum() on columns of table "nb_guild_user"

// update columns of table "nb_guild_user"

// aggregate var_pop on columns

// order by var_pop() on columns of table "nb_guild_user"

// aggregate var_samp on columns

// order by var_samp() on columns of table "nb_guild_user"

// aggregate variance on columns

// order by variance() on columns of table "nb_guild_user"

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

// input type for incrementing integer columne in table "nb_meeting"

// input type for inserting data into table "nb_meeting"

// aggregate max on columns

// order by max() on columns of table "nb_meeting"

// aggregate min on columns

// order by min() on columns of table "nb_meeting"

// response of any mutation on the table "nb_meeting"

// input type for inserting object relation for remote table "nb_meeting"

// on conflict condition type for table "nb_meeting"

// ordering options when selecting data from "nb_meeting"

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

// columns and relationships of "nb_meeting_user"

// aggregated selection of "nb_meeting_user"

// aggregate fields of "nb_meeting_user"

// order by aggregate values of table "nb_meeting_user"

// input type for inserting array relation for remote table "nb_meeting_user"

// aggregate avg on columns

// order by avg() on columns of table "nb_meeting_user"

// Boolean expression to filter rows from the table "nb_meeting_user". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "nb_meeting_user"

// input type for incrementing integer columne in table "nb_meeting_user"

// input type for inserting data into table "nb_meeting_user"

// aggregate max on columns

// order by max() on columns of table "nb_meeting_user"

// aggregate min on columns

// order by min() on columns of table "nb_meeting_user"

// response of any mutation on the table "nb_meeting_user"

// input type for inserting object relation for remote table "nb_meeting_user"

// on conflict condition type for table "nb_meeting_user"

// ordering options when selecting data from "nb_meeting_user"

// select columns of table "nb_meeting_user"

// input type for updating data in table "nb_meeting_user"

// aggregate stddev on columns

// order by stddev() on columns of table "nb_meeting_user"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "nb_meeting_user"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "nb_meeting_user"

// aggregate sum on columns

// order by sum() on columns of table "nb_meeting_user"

// update columns of table "nb_meeting_user"

// aggregate var_pop on columns

// order by var_pop() on columns of table "nb_meeting_user"

// aggregate var_samp on columns

// order by var_samp() on columns of table "nb_meeting_user"

// aggregate variance on columns

// order by variance() on columns of table "nb_meeting_user"

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

// input type for inserting array relation for remote table "nb_sphere"

// aggregate avg on columns

// order by avg() on columns of table "nb_sphere"

// Boolean expression to filter rows from the table "nb_sphere". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "nb_sphere"

// input type for incrementing integer columne in table "nb_sphere"

// input type for inserting data into table "nb_sphere"

// aggregate max on columns

// order by max() on columns of table "nb_sphere"

// aggregate min on columns

// order by min() on columns of table "nb_sphere"

// response of any mutation on the table "nb_sphere"

// input type for inserting object relation for remote table "nb_sphere"

// on conflict condition type for table "nb_sphere"

// ordering options when selecting data from "nb_sphere"

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

// columns and relationships of "nb_sphere_users"

// aggregated selection of "nb_sphere_users"

// aggregate fields of "nb_sphere_users"

// order by aggregate values of table "nb_sphere_users"

// input type for inserting array relation for remote table "nb_sphere_users"

// aggregate avg on columns

// order by avg() on columns of table "nb_sphere_users"

// Boolean expression to filter rows from the table "nb_sphere_users". All fields are combined with a logical 'AND'.

// unique or primary key constraints on table "nb_sphere_users"

// input type for incrementing integer columne in table "nb_sphere_users"

// input type for inserting data into table "nb_sphere_users"

// aggregate max on columns

// order by max() on columns of table "nb_sphere_users"

// aggregate min on columns

// order by min() on columns of table "nb_sphere_users"

// response of any mutation on the table "nb_sphere_users"

// input type for inserting object relation for remote table "nb_sphere_users"

// on conflict condition type for table "nb_sphere_users"

// ordering options when selecting data from "nb_sphere_users"

// select columns of table "nb_sphere_users"

// input type for updating data in table "nb_sphere_users"

// aggregate stddev on columns

// order by stddev() on columns of table "nb_sphere_users"

// aggregate stddev_pop on columns

// order by stddev_pop() on columns of table "nb_sphere_users"

// aggregate stddev_samp on columns

// order by stddev_samp() on columns of table "nb_sphere_users"

// aggregate sum on columns

// order by sum() on columns of table "nb_sphere_users"

// update columns of table "nb_sphere_users"

// aggregate var_pop on columns

// order by var_pop() on columns of table "nb_sphere_users"

// aggregate var_samp on columns

// order by var_samp() on columns of table "nb_sphere_users"

// aggregate variance on columns

// order by variance() on columns of table "nb_sphere_users"

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

export type cr_user = {
	__typename?: "cr_user",
	date_joined:timestamptz,
	email:string,
	first_name?:string,
	is_active:boolean,
	is_staff:boolean,
	is_superuser:boolean,
	last_login?:timestamptz,
	last_name?:string,
	nb_guild_users:nb_guild_user[],
	nb_guild_users_aggregate:nb_guild_user_aggregate,
	nb_meeting_users:nb_meeting_user[],
	nb_meeting_users_aggregate:nb_meeting_user_aggregate,
	nb_meetings:nb_meeting[],
	nb_meetings_aggregate:nb_meeting_aggregate,
	nb_sphere_users:nb_sphere_users[],
	nb_sphere_users_aggregate:nb_sphere_users_aggregate,
	password:string,
	username:string,
	uuid:uuid
}

export type cr_user_aggregate = {
	__typename?: "cr_user_aggregate",
	aggregate?:cr_user_aggregate_fields,
	nodes:cr_user[]
}

export type cr_user_aggregate_fields = {
	__typename?: "cr_user_aggregate_fields",
	count?:number,
	max?:cr_user_max_fields,
	min?:cr_user_min_fields
}

export type cr_user_aggregate_order_by = {
		count?:order_by,
	max?:cr_user_max_order_by,
	min?:cr_user_min_order_by
}

export type cr_user_arr_rel_insert_input = {
		data:cr_user_insert_input[],
	on_conflict?:cr_user_on_conflict
}

export type cr_user_bool_exp = {
		_and?:(cr_user_bool_exp | undefined)[],
	_not?:cr_user_bool_exp,
	_or?:(cr_user_bool_exp | undefined)[],
	date_joined?:timestamptz_comparison_exp,
	email?:String_comparison_exp,
	first_name?:String_comparison_exp,
	is_active?:Boolean_comparison_exp,
	is_staff?:Boolean_comparison_exp,
	is_superuser?:Boolean_comparison_exp,
	last_login?:timestamptz_comparison_exp,
	last_name?:String_comparison_exp,
	nb_guild_users?:nb_guild_user_bool_exp,
	nb_meeting_users?:nb_meeting_user_bool_exp,
	nb_meetings?:nb_meeting_bool_exp,
	nb_sphere_users?:nb_sphere_users_bool_exp,
	password?:String_comparison_exp,
	username?:String_comparison_exp,
	uuid?:uuid_comparison_exp
}

export enum cr_user_constraint {
	cr_user_pkey = "cr_user_pkey",
	cr_user_uuid_key = "cr_user_uuid_key"
}

export type cr_user_insert_input = {
		date_joined?:timestamptz,
	email?:string,
	first_name?:string,
	is_active?:boolean,
	is_staff?:boolean,
	is_superuser?:boolean,
	last_login?:timestamptz,
	last_name?:string,
	nb_guild_users?:nb_guild_user_arr_rel_insert_input,
	nb_meeting_users?:nb_meeting_user_arr_rel_insert_input,
	nb_meetings?:nb_meeting_arr_rel_insert_input,
	nb_sphere_users?:nb_sphere_users_arr_rel_insert_input,
	password?:string,
	username?:string,
	uuid?:uuid
}

export type cr_user_max_fields = {
	__typename?: "cr_user_max_fields",
	date_joined?:timestamptz,
	email?:string,
	first_name?:string,
	last_login?:timestamptz,
	last_name?:string,
	password?:string,
	username?:string
}

export type cr_user_max_order_by = {
		date_joined?:order_by,
	email?:order_by,
	first_name?:order_by,
	last_login?:order_by,
	last_name?:order_by,
	password?:order_by,
	username?:order_by
}

export type cr_user_min_fields = {
	__typename?: "cr_user_min_fields",
	date_joined?:timestamptz,
	email?:string,
	first_name?:string,
	last_login?:timestamptz,
	last_name?:string,
	password?:string,
	username?:string
}

export type cr_user_min_order_by = {
		date_joined?:order_by,
	email?:order_by,
	first_name?:order_by,
	last_login?:order_by,
	last_name?:order_by,
	password?:order_by,
	username?:order_by
}

export type cr_user_mutation_response = {
	__typename?: "cr_user_mutation_response",
	affected_rows:number,
	returning:cr_user[]
}

export type cr_user_obj_rel_insert_input = {
		data:cr_user_insert_input,
	on_conflict?:cr_user_on_conflict
}

export type cr_user_on_conflict = {
		constraint:cr_user_constraint,
	update_columns:cr_user_update_column[],
	where?:cr_user_bool_exp
}

export type cr_user_order_by = {
		date_joined?:order_by,
	email?:order_by,
	first_name?:order_by,
	is_active?:order_by,
	is_staff?:order_by,
	is_superuser?:order_by,
	last_login?:order_by,
	last_name?:order_by,
	nb_guild_users_aggregate?:nb_guild_user_aggregate_order_by,
	nb_meeting_users_aggregate?:nb_meeting_user_aggregate_order_by,
	nb_meetings_aggregate?:nb_meeting_aggregate_order_by,
	nb_sphere_users_aggregate?:nb_sphere_users_aggregate_order_by,
	password?:order_by,
	username?:order_by,
	uuid?:order_by
}

export enum cr_user_select_column {
	date_joined = "date_joined",
	email = "email",
	first_name = "first_name",
	is_active = "is_active",
	is_staff = "is_staff",
	is_superuser = "is_superuser",
	last_login = "last_login",
	last_name = "last_name",
	password = "password",
	username = "username",
	uuid = "uuid"
}

export type cr_user_set_input = {
		date_joined?:timestamptz,
	email?:string,
	first_name?:string,
	is_active?:boolean,
	is_staff?:boolean,
	is_superuser?:boolean,
	last_login?:timestamptz,
	last_name?:string,
	password?:string,
	username?:string,
	uuid?:uuid
}

export enum cr_user_update_column {
	date_joined = "date_joined",
	email = "email",
	first_name = "first_name",
	is_active = "is_active",
	is_staff = "is_staff",
	is_superuser = "is_superuser",
	last_login = "last_login",
	last_name = "last_name",
	password = "password",
	username = "username",
	uuid = "uuid"
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

export type mutation_root = {
	__typename?: "mutation_root",
	delete_cr_user?:cr_user_mutation_response,
	delete_nb_guild?:nb_guild_mutation_response,
	delete_nb_guild_user?:nb_guild_user_mutation_response,
	delete_nb_meeting?:nb_meeting_mutation_response,
	delete_nb_meeting_user?:nb_meeting_user_mutation_response,
	delete_nb_sphere?:nb_sphere_mutation_response,
	delete_nb_sphere_users?:nb_sphere_users_mutation_response,
	insert_cr_user?:cr_user_mutation_response,
	insert_nb_guild?:nb_guild_mutation_response,
	insert_nb_guild_user?:nb_guild_user_mutation_response,
	insert_nb_meeting?:nb_meeting_mutation_response,
	insert_nb_meeting_user?:nb_meeting_user_mutation_response,
	insert_nb_sphere?:nb_sphere_mutation_response,
	insert_nb_sphere_users?:nb_sphere_users_mutation_response,
	update_cr_user?:cr_user_mutation_response,
	update_nb_guild?:nb_guild_mutation_response,
	update_nb_guild_user?:nb_guild_user_mutation_response,
	update_nb_meeting?:nb_meeting_mutation_response,
	update_nb_meeting_user?:nb_meeting_user_mutation_response,
	update_nb_sphere?:nb_sphere_mutation_response,
	update_nb_sphere_users?:nb_sphere_users_mutation_response
}

export type nb_guild = {
	__typename?: "nb_guild",
	created_at:timestamptz,
	description:string,
	id:number,
	name:string,
	nb_guild_users:nb_guild_user[],
	nb_guild_users_aggregate:nb_guild_user_aggregate,
	nb_meetings:nb_meeting[],
	nb_meetings_aggregate:nb_meeting_aggregate,
	sphere_id:number
}

export type nb_guild_aggregate = {
	__typename?: "nb_guild_aggregate",
	aggregate?:nb_guild_aggregate_fields,
	nodes:nb_guild[]
}

export type nb_guild_aggregate_fields = {
	__typename?: "nb_guild_aggregate_fields",
	avg?:nb_guild_avg_fields,
	count?:number,
	max?:nb_guild_max_fields,
	min?:nb_guild_min_fields,
	stddev?:nb_guild_stddev_fields,
	stddev_pop?:nb_guild_stddev_pop_fields,
	stddev_samp?:nb_guild_stddev_samp_fields,
	sum?:nb_guild_sum_fields,
	var_pop?:nb_guild_var_pop_fields,
	var_samp?:nb_guild_var_samp_fields,
	variance?:nb_guild_variance_fields
}

export type nb_guild_aggregate_order_by = {
		avg?:nb_guild_avg_order_by,
	count?:order_by,
	max?:nb_guild_max_order_by,
	min?:nb_guild_min_order_by,
	stddev?:nb_guild_stddev_order_by,
	stddev_pop?:nb_guild_stddev_pop_order_by,
	stddev_samp?:nb_guild_stddev_samp_order_by,
	sum?:nb_guild_sum_order_by,
	var_pop?:nb_guild_var_pop_order_by,
	var_samp?:nb_guild_var_samp_order_by,
	variance?:nb_guild_variance_order_by
}

export type nb_guild_arr_rel_insert_input = {
		data:nb_guild_insert_input[],
	on_conflict?:nb_guild_on_conflict
}

export type nb_guild_avg_fields = {
	__typename?: "nb_guild_avg_fields",
	id?:number,
	sphere_id?:number
}

export type nb_guild_avg_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_guild_bool_exp = {
		_and?:(nb_guild_bool_exp | undefined)[],
	_not?:nb_guild_bool_exp,
	_or?:(nb_guild_bool_exp | undefined)[],
	created_at?:timestamptz_comparison_exp,
	description?:String_comparison_exp,
	id?:Int_comparison_exp,
	name?:String_comparison_exp,
	nb_guild_users?:nb_guild_user_bool_exp,
	nb_meetings?:nb_meeting_bool_exp,
	sphere_id?:Int_comparison_exp
}

export enum nb_guild_constraint {
	nb_guild_pkey = "nb_guild_pkey"
}

export type nb_guild_inc_input = {
		id?:number,
	sphere_id?:number
}

export type nb_guild_insert_input = {
		created_at?:timestamptz,
	description?:string,
	id?:number,
	name?:string,
	nb_guild_users?:nb_guild_user_arr_rel_insert_input,
	nb_meetings?:nb_meeting_arr_rel_insert_input,
	sphere_id?:number
}

export type nb_guild_max_fields = {
	__typename?: "nb_guild_max_fields",
	created_at?:timestamptz,
	description?:string,
	id?:number,
	name?:string,
	sphere_id?:number
}

export type nb_guild_max_order_by = {
		created_at?:order_by,
	description?:order_by,
	id?:order_by,
	name?:order_by,
	sphere_id?:order_by
}

export type nb_guild_min_fields = {
	__typename?: "nb_guild_min_fields",
	created_at?:timestamptz,
	description?:string,
	id?:number,
	name?:string,
	sphere_id?:number
}

export type nb_guild_min_order_by = {
		created_at?:order_by,
	description?:order_by,
	id?:order_by,
	name?:order_by,
	sphere_id?:order_by
}

export type nb_guild_mutation_response = {
	__typename?: "nb_guild_mutation_response",
	affected_rows:number,
	returning:nb_guild[]
}

export type nb_guild_obj_rel_insert_input = {
		data:nb_guild_insert_input,
	on_conflict?:nb_guild_on_conflict
}

export type nb_guild_on_conflict = {
		constraint:nb_guild_constraint,
	update_columns:nb_guild_update_column[],
	where?:nb_guild_bool_exp
}

export type nb_guild_order_by = {
		created_at?:order_by,
	description?:order_by,
	id?:order_by,
	name?:order_by,
	nb_guild_users_aggregate?:nb_guild_user_aggregate_order_by,
	nb_meetings_aggregate?:nb_meeting_aggregate_order_by,
	sphere_id?:order_by
}

export enum nb_guild_select_column {
	created_at = "created_at",
	description = "description",
	id = "id",
	name = "name",
	sphere_id = "sphere_id"
}

export type nb_guild_set_input = {
		created_at?:timestamptz,
	description?:string,
	id?:number,
	name?:string,
	sphere_id?:number
}

export type nb_guild_stddev_fields = {
	__typename?: "nb_guild_stddev_fields",
	id?:number,
	sphere_id?:number
}

export type nb_guild_stddev_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_guild_stddev_pop_fields = {
	__typename?: "nb_guild_stddev_pop_fields",
	id?:number,
	sphere_id?:number
}

export type nb_guild_stddev_pop_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_guild_stddev_samp_fields = {
	__typename?: "nb_guild_stddev_samp_fields",
	id?:number,
	sphere_id?:number
}

export type nb_guild_stddev_samp_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_guild_sum_fields = {
	__typename?: "nb_guild_sum_fields",
	id?:number,
	sphere_id?:number
}

export type nb_guild_sum_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export enum nb_guild_update_column {
	created_at = "created_at",
	description = "description",
	id = "id",
	name = "name",
	sphere_id = "sphere_id"
}

export type nb_guild_user = {
	__typename?: "nb_guild_user",
	cr_user:cr_user,
	guild_id:number,
	id:number,
	membership_type:string,
	nb_guild:nb_guild,
	user_id:uuid
}

export type nb_guild_user_aggregate = {
	__typename?: "nb_guild_user_aggregate",
	aggregate?:nb_guild_user_aggregate_fields,
	nodes:nb_guild_user[]
}

export type nb_guild_user_aggregate_fields = {
	__typename?: "nb_guild_user_aggregate_fields",
	avg?:nb_guild_user_avg_fields,
	count?:number,
	max?:nb_guild_user_max_fields,
	min?:nb_guild_user_min_fields,
	stddev?:nb_guild_user_stddev_fields,
	stddev_pop?:nb_guild_user_stddev_pop_fields,
	stddev_samp?:nb_guild_user_stddev_samp_fields,
	sum?:nb_guild_user_sum_fields,
	var_pop?:nb_guild_user_var_pop_fields,
	var_samp?:nb_guild_user_var_samp_fields,
	variance?:nb_guild_user_variance_fields
}

export type nb_guild_user_aggregate_order_by = {
		avg?:nb_guild_user_avg_order_by,
	count?:order_by,
	max?:nb_guild_user_max_order_by,
	min?:nb_guild_user_min_order_by,
	stddev?:nb_guild_user_stddev_order_by,
	stddev_pop?:nb_guild_user_stddev_pop_order_by,
	stddev_samp?:nb_guild_user_stddev_samp_order_by,
	sum?:nb_guild_user_sum_order_by,
	var_pop?:nb_guild_user_var_pop_order_by,
	var_samp?:nb_guild_user_var_samp_order_by,
	variance?:nb_guild_user_variance_order_by
}

export type nb_guild_user_arr_rel_insert_input = {
		data:nb_guild_user_insert_input[],
	on_conflict?:nb_guild_user_on_conflict
}

export type nb_guild_user_avg_fields = {
	__typename?: "nb_guild_user_avg_fields",
	guild_id?:number,
	id?:number
}

export type nb_guild_user_avg_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export type nb_guild_user_bool_exp = {
		_and?:(nb_guild_user_bool_exp | undefined)[],
	_not?:nb_guild_user_bool_exp,
	_or?:(nb_guild_user_bool_exp | undefined)[],
	cr_user?:cr_user_bool_exp,
	guild_id?:Int_comparison_exp,
	id?:Int_comparison_exp,
	membership_type?:String_comparison_exp,
	nb_guild?:nb_guild_bool_exp,
	user_id?:uuid_comparison_exp
}

export enum nb_guild_user_constraint {
	nb_guild_user_pkey = "nb_guild_user_pkey"
}

export type nb_guild_user_inc_input = {
		guild_id?:number,
	id?:number
}

export type nb_guild_user_insert_input = {
		cr_user?:cr_user_obj_rel_insert_input,
	guild_id?:number,
	id?:number,
	membership_type?:string,
	nb_guild?:nb_guild_obj_rel_insert_input,
	user_id?:uuid
}

export type nb_guild_user_max_fields = {
	__typename?: "nb_guild_user_max_fields",
	guild_id?:number,
	id?:number,
	membership_type?:string
}

export type nb_guild_user_max_order_by = {
		guild_id?:order_by,
	id?:order_by,
	membership_type?:order_by
}

export type nb_guild_user_min_fields = {
	__typename?: "nb_guild_user_min_fields",
	guild_id?:number,
	id?:number,
	membership_type?:string
}

export type nb_guild_user_min_order_by = {
		guild_id?:order_by,
	id?:order_by,
	membership_type?:order_by
}

export type nb_guild_user_mutation_response = {
	__typename?: "nb_guild_user_mutation_response",
	affected_rows:number,
	returning:nb_guild_user[]
}

export type nb_guild_user_obj_rel_insert_input = {
		data:nb_guild_user_insert_input,
	on_conflict?:nb_guild_user_on_conflict
}

export type nb_guild_user_on_conflict = {
		constraint:nb_guild_user_constraint,
	update_columns:nb_guild_user_update_column[],
	where?:nb_guild_user_bool_exp
}

export type nb_guild_user_order_by = {
		cr_user?:cr_user_order_by,
	guild_id?:order_by,
	id?:order_by,
	membership_type?:order_by,
	nb_guild?:nb_guild_order_by,
	user_id?:order_by
}

export enum nb_guild_user_select_column {
	guild_id = "guild_id",
	id = "id",
	membership_type = "membership_type",
	user_id = "user_id"
}

export type nb_guild_user_set_input = {
		guild_id?:number,
	id?:number,
	membership_type?:string,
	user_id?:uuid
}

export type nb_guild_user_stddev_fields = {
	__typename?: "nb_guild_user_stddev_fields",
	guild_id?:number,
	id?:number
}

export type nb_guild_user_stddev_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export type nb_guild_user_stddev_pop_fields = {
	__typename?: "nb_guild_user_stddev_pop_fields",
	guild_id?:number,
	id?:number
}

export type nb_guild_user_stddev_pop_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export type nb_guild_user_stddev_samp_fields = {
	__typename?: "nb_guild_user_stddev_samp_fields",
	guild_id?:number,
	id?:number
}

export type nb_guild_user_stddev_samp_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export type nb_guild_user_sum_fields = {
	__typename?: "nb_guild_user_sum_fields",
	guild_id?:number,
	id?:number
}

export type nb_guild_user_sum_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export enum nb_guild_user_update_column {
	guild_id = "guild_id",
	id = "id",
	membership_type = "membership_type",
	user_id = "user_id"
}

export type nb_guild_user_var_pop_fields = {
	__typename?: "nb_guild_user_var_pop_fields",
	guild_id?:number,
	id?:number
}

export type nb_guild_user_var_pop_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export type nb_guild_user_var_samp_fields = {
	__typename?: "nb_guild_user_var_samp_fields",
	guild_id?:number,
	id?:number
}

export type nb_guild_user_var_samp_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export type nb_guild_user_variance_fields = {
	__typename?: "nb_guild_user_variance_fields",
	guild_id?:number,
	id?:number
}

export type nb_guild_user_variance_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export type nb_guild_var_pop_fields = {
	__typename?: "nb_guild_var_pop_fields",
	id?:number,
	sphere_id?:number
}

export type nb_guild_var_pop_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_guild_var_samp_fields = {
	__typename?: "nb_guild_var_samp_fields",
	id?:number,
	sphere_id?:number
}

export type nb_guild_var_samp_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_guild_variance_fields = {
	__typename?: "nb_guild_variance_fields",
	id?:number,
	sphere_id?:number
}

export type nb_guild_variance_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_meeting = {
	__typename?: "nb_meeting",
	created_at:timestamptz,
	description:string,
	end_time?:timestamptz,
	guild_id:number,
	id:number,
	location?:string,
	nb_guild:nb_guild,
	nb_meeting_users:nb_meeting_user[],
	nb_meeting_users_aggregate:nb_meeting_user_aggregate,
	organizer:cr_user,
	organizer_id:uuid,
	publication_time?:timestamptz,
	start_time?:timestamptz,
	title:string,
	updated_at:timestamptz
}

export type nb_meeting_aggregate = {
	__typename?: "nb_meeting_aggregate",
	aggregate?:nb_meeting_aggregate_fields,
	nodes:nb_meeting[]
}

export type nb_meeting_aggregate_fields = {
	__typename?: "nb_meeting_aggregate_fields",
	avg?:nb_meeting_avg_fields,
	count?:number,
	max?:nb_meeting_max_fields,
	min?:nb_meeting_min_fields,
	stddev?:nb_meeting_stddev_fields,
	stddev_pop?:nb_meeting_stddev_pop_fields,
	stddev_samp?:nb_meeting_stddev_samp_fields,
	sum?:nb_meeting_sum_fields,
	var_pop?:nb_meeting_var_pop_fields,
	var_samp?:nb_meeting_var_samp_fields,
	variance?:nb_meeting_variance_fields
}

export type nb_meeting_aggregate_order_by = {
		avg?:nb_meeting_avg_order_by,
	count?:order_by,
	max?:nb_meeting_max_order_by,
	min?:nb_meeting_min_order_by,
	stddev?:nb_meeting_stddev_order_by,
	stddev_pop?:nb_meeting_stddev_pop_order_by,
	stddev_samp?:nb_meeting_stddev_samp_order_by,
	sum?:nb_meeting_sum_order_by,
	var_pop?:nb_meeting_var_pop_order_by,
	var_samp?:nb_meeting_var_samp_order_by,
	variance?:nb_meeting_variance_order_by
}

export type nb_meeting_arr_rel_insert_input = {
		data:nb_meeting_insert_input[],
	on_conflict?:nb_meeting_on_conflict
}

export type nb_meeting_avg_fields = {
	__typename?: "nb_meeting_avg_fields",
	guild_id?:number,
	id?:number
}

export type nb_meeting_avg_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export type nb_meeting_bool_exp = {
		_and?:(nb_meeting_bool_exp | undefined)[],
	_not?:nb_meeting_bool_exp,
	_or?:(nb_meeting_bool_exp | undefined)[],
	created_at?:timestamptz_comparison_exp,
	description?:String_comparison_exp,
	end_time?:timestamptz_comparison_exp,
	guild_id?:Int_comparison_exp,
	id?:Int_comparison_exp,
	location?:String_comparison_exp,
	nb_guild?:nb_guild_bool_exp,
	nb_meeting_users?:nb_meeting_user_bool_exp,
	organizer?:cr_user_bool_exp,
	organizer_id?:uuid_comparison_exp,
	publication_time?:timestamptz_comparison_exp,
	start_time?:timestamptz_comparison_exp,
	title?:String_comparison_exp,
	updated_at?:timestamptz_comparison_exp
}

export enum nb_meeting_constraint {
	nb_meeting_pkey = "nb_meeting_pkey"
}

export type nb_meeting_inc_input = {
		guild_id?:number,
	id?:number
}

export type nb_meeting_insert_input = {
		created_at?:timestamptz,
	description?:string,
	end_time?:timestamptz,
	guild_id?:number,
	id?:number,
	location?:string,
	nb_guild?:nb_guild_obj_rel_insert_input,
	nb_meeting_users?:nb_meeting_user_arr_rel_insert_input,
	organizer?:cr_user_obj_rel_insert_input,
	organizer_id?:uuid,
	publication_time?:timestamptz,
	start_time?:timestamptz,
	title?:string,
	updated_at?:timestamptz
}

export type nb_meeting_max_fields = {
	__typename?: "nb_meeting_max_fields",
	created_at?:timestamptz,
	description?:string,
	end_time?:timestamptz,
	guild_id?:number,
	id?:number,
	location?:string,
	publication_time?:timestamptz,
	start_time?:timestamptz,
	title?:string,
	updated_at?:timestamptz
}

export type nb_meeting_max_order_by = {
		created_at?:order_by,
	description?:order_by,
	end_time?:order_by,
	guild_id?:order_by,
	id?:order_by,
	location?:order_by,
	publication_time?:order_by,
	start_time?:order_by,
	title?:order_by,
	updated_at?:order_by
}

export type nb_meeting_min_fields = {
	__typename?: "nb_meeting_min_fields",
	created_at?:timestamptz,
	description?:string,
	end_time?:timestamptz,
	guild_id?:number,
	id?:number,
	location?:string,
	publication_time?:timestamptz,
	start_time?:timestamptz,
	title?:string,
	updated_at?:timestamptz
}

export type nb_meeting_min_order_by = {
		created_at?:order_by,
	description?:order_by,
	end_time?:order_by,
	guild_id?:order_by,
	id?:order_by,
	location?:order_by,
	publication_time?:order_by,
	start_time?:order_by,
	title?:order_by,
	updated_at?:order_by
}

export type nb_meeting_mutation_response = {
	__typename?: "nb_meeting_mutation_response",
	affected_rows:number,
	returning:nb_meeting[]
}

export type nb_meeting_obj_rel_insert_input = {
		data:nb_meeting_insert_input,
	on_conflict?:nb_meeting_on_conflict
}

export type nb_meeting_on_conflict = {
		constraint:nb_meeting_constraint,
	update_columns:nb_meeting_update_column[],
	where?:nb_meeting_bool_exp
}

export type nb_meeting_order_by = {
		created_at?:order_by,
	description?:order_by,
	end_time?:order_by,
	guild_id?:order_by,
	id?:order_by,
	location?:order_by,
	nb_guild?:nb_guild_order_by,
	nb_meeting_users_aggregate?:nb_meeting_user_aggregate_order_by,
	organizer?:cr_user_order_by,
	organizer_id?:order_by,
	publication_time?:order_by,
	start_time?:order_by,
	title?:order_by,
	updated_at?:order_by
}

export enum nb_meeting_select_column {
	created_at = "created_at",
	description = "description",
	end_time = "end_time",
	guild_id = "guild_id",
	id = "id",
	location = "location",
	organizer_id = "organizer_id",
	publication_time = "publication_time",
	start_time = "start_time",
	title = "title",
	updated_at = "updated_at"
}

export type nb_meeting_set_input = {
		created_at?:timestamptz,
	description?:string,
	end_time?:timestamptz,
	guild_id?:number,
	id?:number,
	location?:string,
	organizer_id?:uuid,
	publication_time?:timestamptz,
	start_time?:timestamptz,
	title?:string,
	updated_at?:timestamptz
}

export type nb_meeting_stddev_fields = {
	__typename?: "nb_meeting_stddev_fields",
	guild_id?:number,
	id?:number
}

export type nb_meeting_stddev_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export type nb_meeting_stddev_pop_fields = {
	__typename?: "nb_meeting_stddev_pop_fields",
	guild_id?:number,
	id?:number
}

export type nb_meeting_stddev_pop_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export type nb_meeting_stddev_samp_fields = {
	__typename?: "nb_meeting_stddev_samp_fields",
	guild_id?:number,
	id?:number
}

export type nb_meeting_stddev_samp_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export type nb_meeting_sum_fields = {
	__typename?: "nb_meeting_sum_fields",
	guild_id?:number,
	id?:number
}

export type nb_meeting_sum_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export enum nb_meeting_update_column {
	created_at = "created_at",
	description = "description",
	end_time = "end_time",
	guild_id = "guild_id",
	id = "id",
	location = "location",
	organizer_id = "organizer_id",
	publication_time = "publication_time",
	start_time = "start_time",
	title = "title",
	updated_at = "updated_at"
}

export type nb_meeting_user = {
	__typename?: "nb_meeting_user",
	cr_user:cr_user,
	id:number,
	meeting_id:number,
	nb_meeting:nb_meeting,
	status:string,
	user_id:uuid
}

export type nb_meeting_user_aggregate = {
	__typename?: "nb_meeting_user_aggregate",
	aggregate?:nb_meeting_user_aggregate_fields,
	nodes:nb_meeting_user[]
}

export type nb_meeting_user_aggregate_fields = {
	__typename?: "nb_meeting_user_aggregate_fields",
	avg?:nb_meeting_user_avg_fields,
	count?:number,
	max?:nb_meeting_user_max_fields,
	min?:nb_meeting_user_min_fields,
	stddev?:nb_meeting_user_stddev_fields,
	stddev_pop?:nb_meeting_user_stddev_pop_fields,
	stddev_samp?:nb_meeting_user_stddev_samp_fields,
	sum?:nb_meeting_user_sum_fields,
	var_pop?:nb_meeting_user_var_pop_fields,
	var_samp?:nb_meeting_user_var_samp_fields,
	variance?:nb_meeting_user_variance_fields
}

export type nb_meeting_user_aggregate_order_by = {
		avg?:nb_meeting_user_avg_order_by,
	count?:order_by,
	max?:nb_meeting_user_max_order_by,
	min?:nb_meeting_user_min_order_by,
	stddev?:nb_meeting_user_stddev_order_by,
	stddev_pop?:nb_meeting_user_stddev_pop_order_by,
	stddev_samp?:nb_meeting_user_stddev_samp_order_by,
	sum?:nb_meeting_user_sum_order_by,
	var_pop?:nb_meeting_user_var_pop_order_by,
	var_samp?:nb_meeting_user_var_samp_order_by,
	variance?:nb_meeting_user_variance_order_by
}

export type nb_meeting_user_arr_rel_insert_input = {
		data:nb_meeting_user_insert_input[],
	on_conflict?:nb_meeting_user_on_conflict
}

export type nb_meeting_user_avg_fields = {
	__typename?: "nb_meeting_user_avg_fields",
	id?:number,
	meeting_id?:number
}

export type nb_meeting_user_avg_order_by = {
		id?:order_by,
	meeting_id?:order_by
}

export type nb_meeting_user_bool_exp = {
		_and?:(nb_meeting_user_bool_exp | undefined)[],
	_not?:nb_meeting_user_bool_exp,
	_or?:(nb_meeting_user_bool_exp | undefined)[],
	cr_user?:cr_user_bool_exp,
	id?:Int_comparison_exp,
	meeting_id?:Int_comparison_exp,
	nb_meeting?:nb_meeting_bool_exp,
	status?:String_comparison_exp,
	user_id?:uuid_comparison_exp
}

export enum nb_meeting_user_constraint {
	nb_meeting_user_pkey = "nb_meeting_user_pkey"
}

export type nb_meeting_user_inc_input = {
		id?:number,
	meeting_id?:number
}

export type nb_meeting_user_insert_input = {
		cr_user?:cr_user_obj_rel_insert_input,
	id?:number,
	meeting_id?:number,
	nb_meeting?:nb_meeting_obj_rel_insert_input,
	status?:string,
	user_id?:uuid
}

export type nb_meeting_user_max_fields = {
	__typename?: "nb_meeting_user_max_fields",
	id?:number,
	meeting_id?:number,
	status?:string
}

export type nb_meeting_user_max_order_by = {
		id?:order_by,
	meeting_id?:order_by,
	status?:order_by
}

export type nb_meeting_user_min_fields = {
	__typename?: "nb_meeting_user_min_fields",
	id?:number,
	meeting_id?:number,
	status?:string
}

export type nb_meeting_user_min_order_by = {
		id?:order_by,
	meeting_id?:order_by,
	status?:order_by
}

export type nb_meeting_user_mutation_response = {
	__typename?: "nb_meeting_user_mutation_response",
	affected_rows:number,
	returning:nb_meeting_user[]
}

export type nb_meeting_user_obj_rel_insert_input = {
		data:nb_meeting_user_insert_input,
	on_conflict?:nb_meeting_user_on_conflict
}

export type nb_meeting_user_on_conflict = {
		constraint:nb_meeting_user_constraint,
	update_columns:nb_meeting_user_update_column[],
	where?:nb_meeting_user_bool_exp
}

export type nb_meeting_user_order_by = {
		cr_user?:cr_user_order_by,
	id?:order_by,
	meeting_id?:order_by,
	nb_meeting?:nb_meeting_order_by,
	status?:order_by,
	user_id?:order_by
}

export enum nb_meeting_user_select_column {
	id = "id",
	meeting_id = "meeting_id",
	status = "status",
	user_id = "user_id"
}

export type nb_meeting_user_set_input = {
		id?:number,
	meeting_id?:number,
	status?:string,
	user_id?:uuid
}

export type nb_meeting_user_stddev_fields = {
	__typename?: "nb_meeting_user_stddev_fields",
	id?:number,
	meeting_id?:number
}

export type nb_meeting_user_stddev_order_by = {
		id?:order_by,
	meeting_id?:order_by
}

export type nb_meeting_user_stddev_pop_fields = {
	__typename?: "nb_meeting_user_stddev_pop_fields",
	id?:number,
	meeting_id?:number
}

export type nb_meeting_user_stddev_pop_order_by = {
		id?:order_by,
	meeting_id?:order_by
}

export type nb_meeting_user_stddev_samp_fields = {
	__typename?: "nb_meeting_user_stddev_samp_fields",
	id?:number,
	meeting_id?:number
}

export type nb_meeting_user_stddev_samp_order_by = {
		id?:order_by,
	meeting_id?:order_by
}

export type nb_meeting_user_sum_fields = {
	__typename?: "nb_meeting_user_sum_fields",
	id?:number,
	meeting_id?:number
}

export type nb_meeting_user_sum_order_by = {
		id?:order_by,
	meeting_id?:order_by
}

export enum nb_meeting_user_update_column {
	id = "id",
	meeting_id = "meeting_id",
	status = "status",
	user_id = "user_id"
}

export type nb_meeting_user_var_pop_fields = {
	__typename?: "nb_meeting_user_var_pop_fields",
	id?:number,
	meeting_id?:number
}

export type nb_meeting_user_var_pop_order_by = {
		id?:order_by,
	meeting_id?:order_by
}

export type nb_meeting_user_var_samp_fields = {
	__typename?: "nb_meeting_user_var_samp_fields",
	id?:number,
	meeting_id?:number
}

export type nb_meeting_user_var_samp_order_by = {
		id?:order_by,
	meeting_id?:order_by
}

export type nb_meeting_user_variance_fields = {
	__typename?: "nb_meeting_user_variance_fields",
	id?:number,
	meeting_id?:number
}

export type nb_meeting_user_variance_order_by = {
		id?:order_by,
	meeting_id?:order_by
}

export type nb_meeting_var_pop_fields = {
	__typename?: "nb_meeting_var_pop_fields",
	guild_id?:number,
	id?:number
}

export type nb_meeting_var_pop_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export type nb_meeting_var_samp_fields = {
	__typename?: "nb_meeting_var_samp_fields",
	guild_id?:number,
	id?:number
}

export type nb_meeting_var_samp_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export type nb_meeting_variance_fields = {
	__typename?: "nb_meeting_variance_fields",
	guild_id?:number,
	id?:number
}

export type nb_meeting_variance_order_by = {
		guild_id?:order_by,
	id?:order_by
}

export type nb_sphere = {
	__typename?: "nb_sphere",
	id:number,
	name:string,
	nb_sphere_users:nb_sphere_users[],
	nb_sphere_users_aggregate:nb_sphere_users_aggregate
}

export type nb_sphere_aggregate = {
	__typename?: "nb_sphere_aggregate",
	aggregate?:nb_sphere_aggregate_fields,
	nodes:nb_sphere[]
}

export type nb_sphere_aggregate_fields = {
	__typename?: "nb_sphere_aggregate_fields",
	avg?:nb_sphere_avg_fields,
	count?:number,
	max?:nb_sphere_max_fields,
	min?:nb_sphere_min_fields,
	stddev?:nb_sphere_stddev_fields,
	stddev_pop?:nb_sphere_stddev_pop_fields,
	stddev_samp?:nb_sphere_stddev_samp_fields,
	sum?:nb_sphere_sum_fields,
	var_pop?:nb_sphere_var_pop_fields,
	var_samp?:nb_sphere_var_samp_fields,
	variance?:nb_sphere_variance_fields
}

export type nb_sphere_aggregate_order_by = {
		avg?:nb_sphere_avg_order_by,
	count?:order_by,
	max?:nb_sphere_max_order_by,
	min?:nb_sphere_min_order_by,
	stddev?:nb_sphere_stddev_order_by,
	stddev_pop?:nb_sphere_stddev_pop_order_by,
	stddev_samp?:nb_sphere_stddev_samp_order_by,
	sum?:nb_sphere_sum_order_by,
	var_pop?:nb_sphere_var_pop_order_by,
	var_samp?:nb_sphere_var_samp_order_by,
	variance?:nb_sphere_variance_order_by
}

export type nb_sphere_arr_rel_insert_input = {
		data:nb_sphere_insert_input[],
	on_conflict?:nb_sphere_on_conflict
}

export type nb_sphere_avg_fields = {
	__typename?: "nb_sphere_avg_fields",
	id?:number
}

export type nb_sphere_avg_order_by = {
		id?:order_by
}

export type nb_sphere_bool_exp = {
		_and?:(nb_sphere_bool_exp | undefined)[],
	_not?:nb_sphere_bool_exp,
	_or?:(nb_sphere_bool_exp | undefined)[],
	id?:Int_comparison_exp,
	name?:String_comparison_exp,
	nb_sphere_users?:nb_sphere_users_bool_exp
}

export enum nb_sphere_constraint {
	nb_sphere_pkey = "nb_sphere_pkey"
}

export type nb_sphere_inc_input = {
		id?:number
}

export type nb_sphere_insert_input = {
		id?:number,
	name?:string,
	nb_sphere_users?:nb_sphere_users_arr_rel_insert_input
}

export type nb_sphere_max_fields = {
	__typename?: "nb_sphere_max_fields",
	id?:number,
	name?:string
}

export type nb_sphere_max_order_by = {
		id?:order_by,
	name?:order_by
}

export type nb_sphere_min_fields = {
	__typename?: "nb_sphere_min_fields",
	id?:number,
	name?:string
}

export type nb_sphere_min_order_by = {
		id?:order_by,
	name?:order_by
}

export type nb_sphere_mutation_response = {
	__typename?: "nb_sphere_mutation_response",
	affected_rows:number,
	returning:nb_sphere[]
}

export type nb_sphere_obj_rel_insert_input = {
		data:nb_sphere_insert_input,
	on_conflict?:nb_sphere_on_conflict
}

export type nb_sphere_on_conflict = {
		constraint:nb_sphere_constraint,
	update_columns:nb_sphere_update_column[],
	where?:nb_sphere_bool_exp
}

export type nb_sphere_order_by = {
		id?:order_by,
	name?:order_by,
	nb_sphere_users_aggregate?:nb_sphere_users_aggregate_order_by
}

export enum nb_sphere_select_column {
	id = "id",
	name = "name"
}

export type nb_sphere_set_input = {
		id?:number,
	name?:string
}

export type nb_sphere_stddev_fields = {
	__typename?: "nb_sphere_stddev_fields",
	id?:number
}

export type nb_sphere_stddev_order_by = {
		id?:order_by
}

export type nb_sphere_stddev_pop_fields = {
	__typename?: "nb_sphere_stddev_pop_fields",
	id?:number
}

export type nb_sphere_stddev_pop_order_by = {
		id?:order_by
}

export type nb_sphere_stddev_samp_fields = {
	__typename?: "nb_sphere_stddev_samp_fields",
	id?:number
}

export type nb_sphere_stddev_samp_order_by = {
		id?:order_by
}

export type nb_sphere_sum_fields = {
	__typename?: "nb_sphere_sum_fields",
	id?:number
}

export type nb_sphere_sum_order_by = {
		id?:order_by
}

export enum nb_sphere_update_column {
	id = "id",
	name = "name"
}

export type nb_sphere_users = {
	__typename?: "nb_sphere_users",
	cr_user:cr_user,
	id:number,
	nb_sphere:nb_sphere,
	sphere_id:number,
	user_id:uuid
}

export type nb_sphere_users_aggregate = {
	__typename?: "nb_sphere_users_aggregate",
	aggregate?:nb_sphere_users_aggregate_fields,
	nodes:nb_sphere_users[]
}

export type nb_sphere_users_aggregate_fields = {
	__typename?: "nb_sphere_users_aggregate_fields",
	avg?:nb_sphere_users_avg_fields,
	count?:number,
	max?:nb_sphere_users_max_fields,
	min?:nb_sphere_users_min_fields,
	stddev?:nb_sphere_users_stddev_fields,
	stddev_pop?:nb_sphere_users_stddev_pop_fields,
	stddev_samp?:nb_sphere_users_stddev_samp_fields,
	sum?:nb_sphere_users_sum_fields,
	var_pop?:nb_sphere_users_var_pop_fields,
	var_samp?:nb_sphere_users_var_samp_fields,
	variance?:nb_sphere_users_variance_fields
}

export type nb_sphere_users_aggregate_order_by = {
		avg?:nb_sphere_users_avg_order_by,
	count?:order_by,
	max?:nb_sphere_users_max_order_by,
	min?:nb_sphere_users_min_order_by,
	stddev?:nb_sphere_users_stddev_order_by,
	stddev_pop?:nb_sphere_users_stddev_pop_order_by,
	stddev_samp?:nb_sphere_users_stddev_samp_order_by,
	sum?:nb_sphere_users_sum_order_by,
	var_pop?:nb_sphere_users_var_pop_order_by,
	var_samp?:nb_sphere_users_var_samp_order_by,
	variance?:nb_sphere_users_variance_order_by
}

export type nb_sphere_users_arr_rel_insert_input = {
		data:nb_sphere_users_insert_input[],
	on_conflict?:nb_sphere_users_on_conflict
}

export type nb_sphere_users_avg_fields = {
	__typename?: "nb_sphere_users_avg_fields",
	id?:number,
	sphere_id?:number
}

export type nb_sphere_users_avg_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_sphere_users_bool_exp = {
		_and?:(nb_sphere_users_bool_exp | undefined)[],
	_not?:nb_sphere_users_bool_exp,
	_or?:(nb_sphere_users_bool_exp | undefined)[],
	cr_user?:cr_user_bool_exp,
	id?:Int_comparison_exp,
	nb_sphere?:nb_sphere_bool_exp,
	sphere_id?:Int_comparison_exp,
	user_id?:uuid_comparison_exp
}

export enum nb_sphere_users_constraint {
	nb_sphere_users_pkey = "nb_sphere_users_pkey",
	nb_sphere_users_sphere_id_user_id_aef2df6d_uniq = "nb_sphere_users_sphere_id_user_id_aef2df6d_uniq"
}

export type nb_sphere_users_inc_input = {
		id?:number,
	sphere_id?:number
}

export type nb_sphere_users_insert_input = {
		cr_user?:cr_user_obj_rel_insert_input,
	id?:number,
	nb_sphere?:nb_sphere_obj_rel_insert_input,
	sphere_id?:number,
	user_id?:uuid
}

export type nb_sphere_users_max_fields = {
	__typename?: "nb_sphere_users_max_fields",
	id?:number,
	sphere_id?:number
}

export type nb_sphere_users_max_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_sphere_users_min_fields = {
	__typename?: "nb_sphere_users_min_fields",
	id?:number,
	sphere_id?:number
}

export type nb_sphere_users_min_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_sphere_users_mutation_response = {
	__typename?: "nb_sphere_users_mutation_response",
	affected_rows:number,
	returning:nb_sphere_users[]
}

export type nb_sphere_users_obj_rel_insert_input = {
		data:nb_sphere_users_insert_input,
	on_conflict?:nb_sphere_users_on_conflict
}

export type nb_sphere_users_on_conflict = {
		constraint:nb_sphere_users_constraint,
	update_columns:nb_sphere_users_update_column[],
	where?:nb_sphere_users_bool_exp
}

export type nb_sphere_users_order_by = {
		cr_user?:cr_user_order_by,
	id?:order_by,
	nb_sphere?:nb_sphere_order_by,
	sphere_id?:order_by,
	user_id?:order_by
}

export enum nb_sphere_users_select_column {
	id = "id",
	sphere_id = "sphere_id",
	user_id = "user_id"
}

export type nb_sphere_users_set_input = {
		id?:number,
	sphere_id?:number,
	user_id?:uuid
}

export type nb_sphere_users_stddev_fields = {
	__typename?: "nb_sphere_users_stddev_fields",
	id?:number,
	sphere_id?:number
}

export type nb_sphere_users_stddev_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_sphere_users_stddev_pop_fields = {
	__typename?: "nb_sphere_users_stddev_pop_fields",
	id?:number,
	sphere_id?:number
}

export type nb_sphere_users_stddev_pop_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_sphere_users_stddev_samp_fields = {
	__typename?: "nb_sphere_users_stddev_samp_fields",
	id?:number,
	sphere_id?:number
}

export type nb_sphere_users_stddev_samp_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_sphere_users_sum_fields = {
	__typename?: "nb_sphere_users_sum_fields",
	id?:number,
	sphere_id?:number
}

export type nb_sphere_users_sum_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export enum nb_sphere_users_update_column {
	id = "id",
	sphere_id = "sphere_id",
	user_id = "user_id"
}

export type nb_sphere_users_var_pop_fields = {
	__typename?: "nb_sphere_users_var_pop_fields",
	id?:number,
	sphere_id?:number
}

export type nb_sphere_users_var_pop_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_sphere_users_var_samp_fields = {
	__typename?: "nb_sphere_users_var_samp_fields",
	id?:number,
	sphere_id?:number
}

export type nb_sphere_users_var_samp_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_sphere_users_variance_fields = {
	__typename?: "nb_sphere_users_variance_fields",
	id?:number,
	sphere_id?:number
}

export type nb_sphere_users_variance_order_by = {
		id?:order_by,
	sphere_id?:order_by
}

export type nb_sphere_var_pop_fields = {
	__typename?: "nb_sphere_var_pop_fields",
	id?:number
}

export type nb_sphere_var_pop_order_by = {
		id?:order_by
}

export type nb_sphere_var_samp_fields = {
	__typename?: "nb_sphere_var_samp_fields",
	id?:number
}

export type nb_sphere_var_samp_order_by = {
		id?:order_by
}

export type nb_sphere_variance_fields = {
	__typename?: "nb_sphere_variance_fields",
	id?:number
}

export type nb_sphere_variance_order_by = {
		id?:order_by
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
	cr_user:cr_user[],
	cr_user_aggregate:cr_user_aggregate,
	cr_user_by_pk?:cr_user,
	nb_guild:nb_guild[],
	nb_guild_aggregate:nb_guild_aggregate,
	nb_guild_by_pk?:nb_guild,
	nb_guild_user:nb_guild_user[],
	nb_guild_user_aggregate:nb_guild_user_aggregate,
	nb_guild_user_by_pk?:nb_guild_user,
	nb_meeting:nb_meeting[],
	nb_meeting_aggregate:nb_meeting_aggregate,
	nb_meeting_by_pk?:nb_meeting,
	nb_meeting_user:nb_meeting_user[],
	nb_meeting_user_aggregate:nb_meeting_user_aggregate,
	nb_meeting_user_by_pk?:nb_meeting_user,
	nb_sphere:nb_sphere[],
	nb_sphere_aggregate:nb_sphere_aggregate,
	nb_sphere_by_pk?:nb_sphere,
	nb_sphere_users:nb_sphere_users[],
	nb_sphere_users_aggregate:nb_sphere_users_aggregate,
	nb_sphere_users_by_pk?:nb_sphere_users
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
	cr_user:cr_user[],
	cr_user_aggregate:cr_user_aggregate,
	cr_user_by_pk?:cr_user,
	nb_guild:nb_guild[],
	nb_guild_aggregate:nb_guild_aggregate,
	nb_guild_by_pk?:nb_guild,
	nb_guild_user:nb_guild_user[],
	nb_guild_user_aggregate:nb_guild_user_aggregate,
	nb_guild_user_by_pk?:nb_guild_user,
	nb_meeting:nb_meeting[],
	nb_meeting_aggregate:nb_meeting_aggregate,
	nb_meeting_by_pk?:nb_meeting,
	nb_meeting_user:nb_meeting_user[],
	nb_meeting_user_aggregate:nb_meeting_user_aggregate,
	nb_meeting_user_by_pk?:nb_meeting_user,
	nb_sphere:nb_sphere[],
	nb_sphere_aggregate:nb_sphere_aggregate,
	nb_sphere_by_pk?:nb_sphere,
	nb_sphere_users:nb_sphere_users[],
	nb_sphere_users_aggregate:nb_sphere_users_aggregate,
	nb_sphere_users_by_pk?:nb_sphere_users
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
	cr_user:{
		nb_guild_users:{
			distinct_on:{
				type:"nb_guild_user_select_column",
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
				type:"nb_guild_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_guild_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_guild_users_aggregate:{
			distinct_on:{
				type:"nb_guild_user_select_column",
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
				type:"nb_guild_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_guild_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meeting_users:{
			distinct_on:{
				type:"nb_meeting_user_select_column",
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
				type:"nb_meeting_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meeting_users_aggregate:{
			distinct_on:{
				type:"nb_meeting_user_select_column",
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
				type:"nb_meeting_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meetings:{
			distinct_on:{
				type:"nb_meeting_select_column",
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
				type:"nb_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meetings_aggregate:{
			distinct_on:{
				type:"nb_meeting_select_column",
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
				type:"nb_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_sphere_users:{
			distinct_on:{
				type:"nb_sphere_users_select_column",
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
				type:"nb_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_sphere_users_aggregate:{
			distinct_on:{
				type:"nb_sphere_users_select_column",
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
				type:"nb_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	cr_user_aggregate_fields:{
		count:{
			columns:{
				type:"cr_user_select_column",
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
	cr_user_aggregate_order_by:{
		count:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		max:{
			type:"cr_user_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"cr_user_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	cr_user_arr_rel_insert_input:{
		data:{
			type:"cr_user_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"cr_user_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	cr_user_bool_exp:{
		_and:{
			type:"cr_user_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"cr_user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"cr_user_bool_exp",
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
		nb_guild_users:{
			type:"nb_guild_user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_meeting_users:{
			type:"nb_meeting_user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_meetings:{
			type:"nb_meeting_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_sphere_users:{
			type:"nb_sphere_users_bool_exp",
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
		},
		uuid:{
			type:"uuid_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	cr_user_constraint: "enum",
	cr_user_insert_input:{
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
		nb_guild_users:{
			type:"nb_guild_user_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_meeting_users:{
			type:"nb_meeting_user_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_meetings:{
			type:"nb_meeting_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_sphere_users:{
			type:"nb_sphere_users_arr_rel_insert_input",
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
		},
		uuid:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	cr_user_max_order_by:{
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
	cr_user_min_order_by:{
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
	cr_user_obj_rel_insert_input:{
		data:{
			type:"cr_user_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"cr_user_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	cr_user_on_conflict:{
		constraint:{
			type:"cr_user_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"cr_user_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"cr_user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	cr_user_order_by:{
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
		nb_guild_users_aggregate:{
			type:"nb_guild_user_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_meeting_users_aggregate:{
			type:"nb_meeting_user_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_meetings_aggregate:{
			type:"nb_meeting_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_sphere_users_aggregate:{
			type:"nb_sphere_users_aggregate_order_by",
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
		},
		uuid:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	cr_user_select_column: "enum",
	cr_user_set_input:{
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
		},
		uuid:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	cr_user_update_column: "enum",
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
	mutation_root:{
		delete_cr_user:{
			where:{
				type:"cr_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_nb_guild:{
			where:{
				type:"nb_guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_nb_guild_user:{
			where:{
				type:"nb_guild_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_nb_meeting:{
			where:{
				type:"nb_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_nb_meeting_user:{
			where:{
				type:"nb_meeting_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_nb_sphere:{
			where:{
				type:"nb_sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_nb_sphere_users:{
			where:{
				type:"nb_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		insert_cr_user:{
			objects:{
				type:"cr_user_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"cr_user_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_nb_guild:{
			objects:{
				type:"nb_guild_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"nb_guild_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_nb_guild_user:{
			objects:{
				type:"nb_guild_user_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"nb_guild_user_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_nb_meeting:{
			objects:{
				type:"nb_meeting_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"nb_meeting_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_nb_meeting_user:{
			objects:{
				type:"nb_meeting_user_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"nb_meeting_user_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_nb_sphere:{
			objects:{
				type:"nb_sphere_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"nb_sphere_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_nb_sphere_users:{
			objects:{
				type:"nb_sphere_users_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"nb_sphere_users_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		update_cr_user:{
			_set:{
				type:"cr_user_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"cr_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_nb_guild:{
			_inc:{
				type:"nb_guild_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"nb_guild_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"nb_guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_nb_guild_user:{
			_inc:{
				type:"nb_guild_user_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"nb_guild_user_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"nb_guild_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_nb_meeting:{
			_inc:{
				type:"nb_meeting_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"nb_meeting_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"nb_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_nb_meeting_user:{
			_inc:{
				type:"nb_meeting_user_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"nb_meeting_user_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"nb_meeting_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_nb_sphere:{
			_inc:{
				type:"nb_sphere_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"nb_sphere_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"nb_sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_nb_sphere_users:{
			_inc:{
				type:"nb_sphere_users_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"nb_sphere_users_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"nb_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	nb_guild:{
		nb_guild_users:{
			distinct_on:{
				type:"nb_guild_user_select_column",
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
				type:"nb_guild_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_guild_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_guild_users_aggregate:{
			distinct_on:{
				type:"nb_guild_user_select_column",
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
				type:"nb_guild_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_guild_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meetings:{
			distinct_on:{
				type:"nb_meeting_select_column",
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
				type:"nb_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meetings_aggregate:{
			distinct_on:{
				type:"nb_meeting_select_column",
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
				type:"nb_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	nb_guild_aggregate_fields:{
		count:{
			columns:{
				type:"nb_guild_select_column",
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
	nb_guild_aggregate_order_by:{
		avg:{
			type:"nb_guild_avg_order_by",
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
			type:"nb_guild_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"nb_guild_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"nb_guild_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"nb_guild_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"nb_guild_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"nb_guild_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"nb_guild_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"nb_guild_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"nb_guild_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_arr_rel_insert_input:{
		data:{
			type:"nb_guild_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"nb_guild_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_avg_order_by:{
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
	nb_guild_bool_exp:{
		_and:{
			type:"nb_guild_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"nb_guild_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"nb_guild_bool_exp",
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
		name:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_guild_users:{
			type:"nb_guild_user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_meetings:{
			type:"nb_meeting_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		sphere_id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_constraint: "enum",
	nb_guild_inc_input:{
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
	nb_guild_insert_input:{
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
		nb_guild_users:{
			type:"nb_guild_user_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_meetings:{
			type:"nb_meeting_arr_rel_insert_input",
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
	nb_guild_max_order_by:{
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
		sphere_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_min_order_by:{
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
		sphere_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_obj_rel_insert_input:{
		data:{
			type:"nb_guild_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"nb_guild_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_on_conflict:{
		constraint:{
			type:"nb_guild_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"nb_guild_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"nb_guild_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_order_by:{
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
		nb_guild_users_aggregate:{
			type:"nb_guild_user_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_meetings_aggregate:{
			type:"nb_meeting_aggregate_order_by",
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
	nb_guild_select_column: "enum",
	nb_guild_set_input:{
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
		sphere_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_stddev_order_by:{
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
	nb_guild_stddev_pop_order_by:{
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
	nb_guild_stddev_samp_order_by:{
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
	nb_guild_sum_order_by:{
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
	nb_guild_update_column: "enum",
	nb_guild_user_aggregate_fields:{
		count:{
			columns:{
				type:"nb_guild_user_select_column",
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
	nb_guild_user_aggregate_order_by:{
		avg:{
			type:"nb_guild_user_avg_order_by",
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
			type:"nb_guild_user_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"nb_guild_user_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"nb_guild_user_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"nb_guild_user_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"nb_guild_user_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"nb_guild_user_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"nb_guild_user_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"nb_guild_user_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"nb_guild_user_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_user_arr_rel_insert_input:{
		data:{
			type:"nb_guild_user_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"nb_guild_user_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_user_avg_order_by:{
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
		}
	},
	nb_guild_user_bool_exp:{
		_and:{
			type:"nb_guild_user_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"nb_guild_user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"nb_guild_user_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		cr_user:{
			type:"cr_user_bool_exp",
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
		membership_type:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_guild:{
			type:"nb_guild_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"uuid_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_user_constraint: "enum",
	nb_guild_user_inc_input:{
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
		}
	},
	nb_guild_user_insert_input:{
		cr_user:{
			type:"cr_user_obj_rel_insert_input",
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
		membership_type:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_guild:{
			type:"nb_guild_obj_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_user_max_order_by:{
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
		}
	},
	nb_guild_user_min_order_by:{
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
		}
	},
	nb_guild_user_obj_rel_insert_input:{
		data:{
			type:"nb_guild_user_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"nb_guild_user_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_user_on_conflict:{
		constraint:{
			type:"nb_guild_user_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"nb_guild_user_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"nb_guild_user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_user_order_by:{
		cr_user:{
			type:"cr_user_order_by",
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
		membership_type:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_guild:{
			type:"nb_guild_order_by",
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
	nb_guild_user_select_column: "enum",
	nb_guild_user_set_input:{
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
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_guild_user_stddev_order_by:{
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
		}
	},
	nb_guild_user_stddev_pop_order_by:{
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
		}
	},
	nb_guild_user_stddev_samp_order_by:{
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
		}
	},
	nb_guild_user_sum_order_by:{
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
		}
	},
	nb_guild_user_update_column: "enum",
	nb_guild_user_var_pop_order_by:{
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
		}
	},
	nb_guild_user_var_samp_order_by:{
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
		}
	},
	nb_guild_user_variance_order_by:{
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
		}
	},
	nb_guild_var_pop_order_by:{
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
	nb_guild_var_samp_order_by:{
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
	nb_guild_variance_order_by:{
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
	nb_meeting:{
		nb_meeting_users:{
			distinct_on:{
				type:"nb_meeting_user_select_column",
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
				type:"nb_meeting_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meeting_users_aggregate:{
			distinct_on:{
				type:"nb_meeting_user_select_column",
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
				type:"nb_meeting_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	nb_meeting_aggregate_fields:{
		count:{
			columns:{
				type:"nb_meeting_select_column",
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
	nb_meeting_aggregate_order_by:{
		avg:{
			type:"nb_meeting_avg_order_by",
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
			type:"nb_meeting_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"nb_meeting_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"nb_meeting_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"nb_meeting_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"nb_meeting_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"nb_meeting_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"nb_meeting_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"nb_meeting_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"nb_meeting_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_meeting_arr_rel_insert_input:{
		data:{
			type:"nb_meeting_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"nb_meeting_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_meeting_avg_order_by:{
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
		}
	},
	nb_meeting_bool_exp:{
		_and:{
			type:"nb_meeting_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"nb_meeting_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"nb_meeting_bool_exp",
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
		nb_guild:{
			type:"nb_guild_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_meeting_users:{
			type:"nb_meeting_user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		organizer:{
			type:"cr_user_bool_exp",
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
		publication_time:{
			type:"timestamptz_comparison_exp",
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
	nb_meeting_constraint: "enum",
	nb_meeting_inc_input:{
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
		}
	},
	nb_meeting_insert_input:{
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
		nb_guild:{
			type:"nb_guild_obj_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_meeting_users:{
			type:"nb_meeting_user_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		organizer:{
			type:"cr_user_obj_rel_insert_input",
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
	nb_meeting_max_order_by:{
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
		publication_time:{
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
	nb_meeting_min_order_by:{
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
		publication_time:{
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
	nb_meeting_obj_rel_insert_input:{
		data:{
			type:"nb_meeting_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"nb_meeting_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_meeting_on_conflict:{
		constraint:{
			type:"nb_meeting_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"nb_meeting_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"nb_meeting_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_meeting_order_by:{
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
		nb_guild:{
			type:"nb_guild_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_meeting_users_aggregate:{
			type:"nb_meeting_user_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		organizer:{
			type:"cr_user_order_by",
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
	nb_meeting_select_column: "enum",
	nb_meeting_set_input:{
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
	nb_meeting_stddev_order_by:{
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
		}
	},
	nb_meeting_stddev_pop_order_by:{
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
		}
	},
	nb_meeting_stddev_samp_order_by:{
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
		}
	},
	nb_meeting_sum_order_by:{
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
		}
	},
	nb_meeting_update_column: "enum",
	nb_meeting_user_aggregate_fields:{
		count:{
			columns:{
				type:"nb_meeting_user_select_column",
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
	nb_meeting_user_aggregate_order_by:{
		avg:{
			type:"nb_meeting_user_avg_order_by",
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
			type:"nb_meeting_user_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"nb_meeting_user_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"nb_meeting_user_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"nb_meeting_user_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"nb_meeting_user_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"nb_meeting_user_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"nb_meeting_user_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"nb_meeting_user_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"nb_meeting_user_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_meeting_user_arr_rel_insert_input:{
		data:{
			type:"nb_meeting_user_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"nb_meeting_user_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_meeting_user_avg_order_by:{
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
		}
	},
	nb_meeting_user_bool_exp:{
		_and:{
			type:"nb_meeting_user_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"nb_meeting_user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"nb_meeting_user_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		cr_user:{
			type:"cr_user_bool_exp",
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
		nb_meeting:{
			type:"nb_meeting_bool_exp",
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
			type:"uuid_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_meeting_user_constraint: "enum",
	nb_meeting_user_inc_input:{
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
		}
	},
	nb_meeting_user_insert_input:{
		cr_user:{
			type:"cr_user_obj_rel_insert_input",
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
		nb_meeting:{
			type:"nb_meeting_obj_rel_insert_input",
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
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_meeting_user_max_order_by:{
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
		}
	},
	nb_meeting_user_min_order_by:{
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
		}
	},
	nb_meeting_user_obj_rel_insert_input:{
		data:{
			type:"nb_meeting_user_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"nb_meeting_user_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_meeting_user_on_conflict:{
		constraint:{
			type:"nb_meeting_user_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"nb_meeting_user_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"nb_meeting_user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_meeting_user_order_by:{
		cr_user:{
			type:"cr_user_order_by",
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
		nb_meeting:{
			type:"nb_meeting_order_by",
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
	nb_meeting_user_select_column: "enum",
	nb_meeting_user_set_input:{
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
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_meeting_user_stddev_order_by:{
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
		}
	},
	nb_meeting_user_stddev_pop_order_by:{
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
		}
	},
	nb_meeting_user_stddev_samp_order_by:{
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
		}
	},
	nb_meeting_user_sum_order_by:{
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
		}
	},
	nb_meeting_user_update_column: "enum",
	nb_meeting_user_var_pop_order_by:{
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
		}
	},
	nb_meeting_user_var_samp_order_by:{
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
		}
	},
	nb_meeting_user_variance_order_by:{
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
		}
	},
	nb_meeting_var_pop_order_by:{
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
		}
	},
	nb_meeting_var_samp_order_by:{
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
		}
	},
	nb_meeting_variance_order_by:{
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
		}
	},
	nb_sphere:{
		nb_sphere_users:{
			distinct_on:{
				type:"nb_sphere_users_select_column",
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
				type:"nb_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_sphere_users_aggregate:{
			distinct_on:{
				type:"nb_sphere_users_select_column",
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
				type:"nb_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	nb_sphere_aggregate_fields:{
		count:{
			columns:{
				type:"nb_sphere_select_column",
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
	nb_sphere_aggregate_order_by:{
		avg:{
			type:"nb_sphere_avg_order_by",
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
			type:"nb_sphere_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"nb_sphere_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"nb_sphere_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"nb_sphere_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"nb_sphere_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"nb_sphere_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"nb_sphere_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"nb_sphere_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"nb_sphere_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_arr_rel_insert_input:{
		data:{
			type:"nb_sphere_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"nb_sphere_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_avg_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_bool_exp:{
		_and:{
			type:"nb_sphere_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"nb_sphere_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"nb_sphere_bool_exp",
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
		name:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		nb_sphere_users:{
			type:"nb_sphere_users_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_constraint: "enum",
	nb_sphere_inc_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_insert_input:{
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
		nb_sphere_users:{
			type:"nb_sphere_users_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_max_order_by:{
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
	nb_sphere_min_order_by:{
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
	nb_sphere_obj_rel_insert_input:{
		data:{
			type:"nb_sphere_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"nb_sphere_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_on_conflict:{
		constraint:{
			type:"nb_sphere_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"nb_sphere_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"nb_sphere_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_order_by:{
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
		nb_sphere_users_aggregate:{
			type:"nb_sphere_users_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_select_column: "enum",
	nb_sphere_set_input:{
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
	nb_sphere_stddev_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_stddev_pop_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_stddev_samp_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_sum_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_update_column: "enum",
	nb_sphere_users_aggregate_fields:{
		count:{
			columns:{
				type:"nb_sphere_users_select_column",
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
	nb_sphere_users_aggregate_order_by:{
		avg:{
			type:"nb_sphere_users_avg_order_by",
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
			type:"nb_sphere_users_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"nb_sphere_users_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"nb_sphere_users_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"nb_sphere_users_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"nb_sphere_users_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"nb_sphere_users_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"nb_sphere_users_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"nb_sphere_users_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"nb_sphere_users_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_users_arr_rel_insert_input:{
		data:{
			type:"nb_sphere_users_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"nb_sphere_users_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_users_avg_order_by:{
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
	nb_sphere_users_bool_exp:{
		_and:{
			type:"nb_sphere_users_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		_not:{
			type:"nb_sphere_users_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"nb_sphere_users_bool_exp",
			array:true,
			arrayRequired:false,
			required:false
		},
		cr_user:{
			type:"cr_user_bool_exp",
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
		nb_sphere:{
			type:"nb_sphere_bool_exp",
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
			type:"uuid_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_users_constraint: "enum",
	nb_sphere_users_inc_input:{
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
	nb_sphere_users_insert_input:{
		cr_user:{
			type:"cr_user_obj_rel_insert_input",
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
		nb_sphere:{
			type:"nb_sphere_obj_rel_insert_input",
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
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_users_max_order_by:{
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
	nb_sphere_users_min_order_by:{
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
	nb_sphere_users_obj_rel_insert_input:{
		data:{
			type:"nb_sphere_users_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"nb_sphere_users_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_users_on_conflict:{
		constraint:{
			type:"nb_sphere_users_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"nb_sphere_users_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"nb_sphere_users_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_users_order_by:{
		cr_user:{
			type:"cr_user_order_by",
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
		nb_sphere:{
			type:"nb_sphere_order_by",
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
	nb_sphere_users_select_column: "enum",
	nb_sphere_users_set_input:{
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
			type:"uuid",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_users_stddev_order_by:{
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
	nb_sphere_users_stddev_pop_order_by:{
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
	nb_sphere_users_stddev_samp_order_by:{
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
	nb_sphere_users_sum_order_by:{
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
	nb_sphere_users_update_column: "enum",
	nb_sphere_users_var_pop_order_by:{
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
	nb_sphere_users_var_samp_order_by:{
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
	nb_sphere_users_variance_order_by:{
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
	nb_sphere_var_pop_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_var_samp_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	nb_sphere_variance_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	order_by: "enum",
	query_root:{
		cr_user:{
			distinct_on:{
				type:"cr_user_select_column",
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
				type:"cr_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"cr_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		cr_user_aggregate:{
			distinct_on:{
				type:"cr_user_select_column",
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
				type:"cr_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"cr_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		cr_user_by_pk:{
			uuid:{
				type:"uuid",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		nb_guild:{
			distinct_on:{
				type:"nb_guild_select_column",
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
				type:"nb_guild_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_guild_aggregate:{
			distinct_on:{
				type:"nb_guild_select_column",
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
				type:"nb_guild_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_guild_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		nb_guild_user:{
			distinct_on:{
				type:"nb_guild_user_select_column",
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
				type:"nb_guild_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_guild_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_guild_user_aggregate:{
			distinct_on:{
				type:"nb_guild_user_select_column",
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
				type:"nb_guild_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_guild_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_guild_user_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		nb_meeting:{
			distinct_on:{
				type:"nb_meeting_select_column",
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
				type:"nb_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meeting_aggregate:{
			distinct_on:{
				type:"nb_meeting_select_column",
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
				type:"nb_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meeting_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		nb_meeting_user:{
			distinct_on:{
				type:"nb_meeting_user_select_column",
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
				type:"nb_meeting_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meeting_user_aggregate:{
			distinct_on:{
				type:"nb_meeting_user_select_column",
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
				type:"nb_meeting_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meeting_user_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		nb_sphere:{
			distinct_on:{
				type:"nb_sphere_select_column",
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
				type:"nb_sphere_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_sphere_aggregate:{
			distinct_on:{
				type:"nb_sphere_select_column",
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
				type:"nb_sphere_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_sphere_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		nb_sphere_users:{
			distinct_on:{
				type:"nb_sphere_users_select_column",
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
				type:"nb_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_sphere_users_aggregate:{
			distinct_on:{
				type:"nb_sphere_users_select_column",
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
				type:"nb_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_sphere_users_by_pk:{
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
		cr_user:{
			distinct_on:{
				type:"cr_user_select_column",
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
				type:"cr_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"cr_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		cr_user_aggregate:{
			distinct_on:{
				type:"cr_user_select_column",
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
				type:"cr_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"cr_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		cr_user_by_pk:{
			uuid:{
				type:"uuid",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		nb_guild:{
			distinct_on:{
				type:"nb_guild_select_column",
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
				type:"nb_guild_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_guild_aggregate:{
			distinct_on:{
				type:"nb_guild_select_column",
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
				type:"nb_guild_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_guild_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_guild_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		nb_guild_user:{
			distinct_on:{
				type:"nb_guild_user_select_column",
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
				type:"nb_guild_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_guild_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_guild_user_aggregate:{
			distinct_on:{
				type:"nb_guild_user_select_column",
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
				type:"nb_guild_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_guild_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_guild_user_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		nb_meeting:{
			distinct_on:{
				type:"nb_meeting_select_column",
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
				type:"nb_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meeting_aggregate:{
			distinct_on:{
				type:"nb_meeting_select_column",
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
				type:"nb_meeting_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meeting_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		nb_meeting_user:{
			distinct_on:{
				type:"nb_meeting_user_select_column",
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
				type:"nb_meeting_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meeting_user_aggregate:{
			distinct_on:{
				type:"nb_meeting_user_select_column",
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
				type:"nb_meeting_user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_meeting_user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_meeting_user_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		nb_sphere:{
			distinct_on:{
				type:"nb_sphere_select_column",
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
				type:"nb_sphere_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_sphere_aggregate:{
			distinct_on:{
				type:"nb_sphere_select_column",
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
				type:"nb_sphere_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_sphere_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_sphere_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		nb_sphere_users:{
			distinct_on:{
				type:"nb_sphere_users_select_column",
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
				type:"nb_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_sphere_users_aggregate:{
			distinct_on:{
				type:"nb_sphere_users_select_column",
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
				type:"nb_sphere_users_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"nb_sphere_users_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		nb_sphere_users_by_pk:{
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
	},
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
	cr_user:{
		date_joined:"timestamptz",
		email:"String",
		first_name:"String",
		is_active:"Boolean",
		is_staff:"Boolean",
		is_superuser:"Boolean",
		last_login:"timestamptz",
		last_name:"String",
		nb_guild_users:"nb_guild_user",
		nb_guild_users_aggregate:"nb_guild_user_aggregate",
		nb_meeting_users:"nb_meeting_user",
		nb_meeting_users_aggregate:"nb_meeting_user_aggregate",
		nb_meetings:"nb_meeting",
		nb_meetings_aggregate:"nb_meeting_aggregate",
		nb_sphere_users:"nb_sphere_users",
		nb_sphere_users_aggregate:"nb_sphere_users_aggregate",
		password:"String",
		username:"String",
		uuid:"uuid"
	},
	cr_user_aggregate:{
		aggregate:"cr_user_aggregate_fields",
		nodes:"cr_user"
	},
	cr_user_aggregate_fields:{
		count:"Int",
		max:"cr_user_max_fields",
		min:"cr_user_min_fields"
	},
	cr_user_max_fields:{
		date_joined:"timestamptz",
		email:"String",
		first_name:"String",
		last_login:"timestamptz",
		last_name:"String",
		password:"String",
		username:"String"
	},
	cr_user_min_fields:{
		date_joined:"timestamptz",
		email:"String",
		first_name:"String",
		last_login:"timestamptz",
		last_name:"String",
		password:"String",
		username:"String"
	},
	cr_user_mutation_response:{
		affected_rows:"Int",
		returning:"cr_user"
	},
	mutation_root:{
		delete_cr_user:"cr_user_mutation_response",
		delete_nb_guild:"nb_guild_mutation_response",
		delete_nb_guild_user:"nb_guild_user_mutation_response",
		delete_nb_meeting:"nb_meeting_mutation_response",
		delete_nb_meeting_user:"nb_meeting_user_mutation_response",
		delete_nb_sphere:"nb_sphere_mutation_response",
		delete_nb_sphere_users:"nb_sphere_users_mutation_response",
		insert_cr_user:"cr_user_mutation_response",
		insert_nb_guild:"nb_guild_mutation_response",
		insert_nb_guild_user:"nb_guild_user_mutation_response",
		insert_nb_meeting:"nb_meeting_mutation_response",
		insert_nb_meeting_user:"nb_meeting_user_mutation_response",
		insert_nb_sphere:"nb_sphere_mutation_response",
		insert_nb_sphere_users:"nb_sphere_users_mutation_response",
		update_cr_user:"cr_user_mutation_response",
		update_nb_guild:"nb_guild_mutation_response",
		update_nb_guild_user:"nb_guild_user_mutation_response",
		update_nb_meeting:"nb_meeting_mutation_response",
		update_nb_meeting_user:"nb_meeting_user_mutation_response",
		update_nb_sphere:"nb_sphere_mutation_response",
		update_nb_sphere_users:"nb_sphere_users_mutation_response"
	},
	nb_guild:{
		created_at:"timestamptz",
		description:"String",
		id:"Int",
		name:"String",
		nb_guild_users:"nb_guild_user",
		nb_guild_users_aggregate:"nb_guild_user_aggregate",
		nb_meetings:"nb_meeting",
		nb_meetings_aggregate:"nb_meeting_aggregate",
		sphere_id:"Int"
	},
	nb_guild_aggregate:{
		aggregate:"nb_guild_aggregate_fields",
		nodes:"nb_guild"
	},
	nb_guild_aggregate_fields:{
		avg:"nb_guild_avg_fields",
		count:"Int",
		max:"nb_guild_max_fields",
		min:"nb_guild_min_fields",
		stddev:"nb_guild_stddev_fields",
		stddev_pop:"nb_guild_stddev_pop_fields",
		stddev_samp:"nb_guild_stddev_samp_fields",
		sum:"nb_guild_sum_fields",
		var_pop:"nb_guild_var_pop_fields",
		var_samp:"nb_guild_var_samp_fields",
		variance:"nb_guild_variance_fields"
	},
	nb_guild_avg_fields:{
		id:"Float",
		sphere_id:"Float"
	},
	nb_guild_max_fields:{
		created_at:"timestamptz",
		description:"String",
		id:"Int",
		name:"String",
		sphere_id:"Int"
	},
	nb_guild_min_fields:{
		created_at:"timestamptz",
		description:"String",
		id:"Int",
		name:"String",
		sphere_id:"Int"
	},
	nb_guild_mutation_response:{
		affected_rows:"Int",
		returning:"nb_guild"
	},
	nb_guild_stddev_fields:{
		id:"Float",
		sphere_id:"Float"
	},
	nb_guild_stddev_pop_fields:{
		id:"Float",
		sphere_id:"Float"
	},
	nb_guild_stddev_samp_fields:{
		id:"Float",
		sphere_id:"Float"
	},
	nb_guild_sum_fields:{
		id:"Int",
		sphere_id:"Int"
	},
	nb_guild_user:{
		cr_user:"cr_user",
		guild_id:"Int",
		id:"Int",
		membership_type:"String",
		nb_guild:"nb_guild",
		user_id:"uuid"
	},
	nb_guild_user_aggregate:{
		aggregate:"nb_guild_user_aggregate_fields",
		nodes:"nb_guild_user"
	},
	nb_guild_user_aggregate_fields:{
		avg:"nb_guild_user_avg_fields",
		count:"Int",
		max:"nb_guild_user_max_fields",
		min:"nb_guild_user_min_fields",
		stddev:"nb_guild_user_stddev_fields",
		stddev_pop:"nb_guild_user_stddev_pop_fields",
		stddev_samp:"nb_guild_user_stddev_samp_fields",
		sum:"nb_guild_user_sum_fields",
		var_pop:"nb_guild_user_var_pop_fields",
		var_samp:"nb_guild_user_var_samp_fields",
		variance:"nb_guild_user_variance_fields"
	},
	nb_guild_user_avg_fields:{
		guild_id:"Float",
		id:"Float"
	},
	nb_guild_user_max_fields:{
		guild_id:"Int",
		id:"Int",
		membership_type:"String"
	},
	nb_guild_user_min_fields:{
		guild_id:"Int",
		id:"Int",
		membership_type:"String"
	},
	nb_guild_user_mutation_response:{
		affected_rows:"Int",
		returning:"nb_guild_user"
	},
	nb_guild_user_stddev_fields:{
		guild_id:"Float",
		id:"Float"
	},
	nb_guild_user_stddev_pop_fields:{
		guild_id:"Float",
		id:"Float"
	},
	nb_guild_user_stddev_samp_fields:{
		guild_id:"Float",
		id:"Float"
	},
	nb_guild_user_sum_fields:{
		guild_id:"Int",
		id:"Int"
	},
	nb_guild_user_var_pop_fields:{
		guild_id:"Float",
		id:"Float"
	},
	nb_guild_user_var_samp_fields:{
		guild_id:"Float",
		id:"Float"
	},
	nb_guild_user_variance_fields:{
		guild_id:"Float",
		id:"Float"
	},
	nb_guild_var_pop_fields:{
		id:"Float",
		sphere_id:"Float"
	},
	nb_guild_var_samp_fields:{
		id:"Float",
		sphere_id:"Float"
	},
	nb_guild_variance_fields:{
		id:"Float",
		sphere_id:"Float"
	},
	nb_meeting:{
		created_at:"timestamptz",
		description:"String",
		end_time:"timestamptz",
		guild_id:"Int",
		id:"Int",
		location:"String",
		nb_guild:"nb_guild",
		nb_meeting_users:"nb_meeting_user",
		nb_meeting_users_aggregate:"nb_meeting_user_aggregate",
		organizer:"cr_user",
		organizer_id:"uuid",
		publication_time:"timestamptz",
		start_time:"timestamptz",
		title:"String",
		updated_at:"timestamptz"
	},
	nb_meeting_aggregate:{
		aggregate:"nb_meeting_aggregate_fields",
		nodes:"nb_meeting"
	},
	nb_meeting_aggregate_fields:{
		avg:"nb_meeting_avg_fields",
		count:"Int",
		max:"nb_meeting_max_fields",
		min:"nb_meeting_min_fields",
		stddev:"nb_meeting_stddev_fields",
		stddev_pop:"nb_meeting_stddev_pop_fields",
		stddev_samp:"nb_meeting_stddev_samp_fields",
		sum:"nb_meeting_sum_fields",
		var_pop:"nb_meeting_var_pop_fields",
		var_samp:"nb_meeting_var_samp_fields",
		variance:"nb_meeting_variance_fields"
	},
	nb_meeting_avg_fields:{
		guild_id:"Float",
		id:"Float"
	},
	nb_meeting_max_fields:{
		created_at:"timestamptz",
		description:"String",
		end_time:"timestamptz",
		guild_id:"Int",
		id:"Int",
		location:"String",
		publication_time:"timestamptz",
		start_time:"timestamptz",
		title:"String",
		updated_at:"timestamptz"
	},
	nb_meeting_min_fields:{
		created_at:"timestamptz",
		description:"String",
		end_time:"timestamptz",
		guild_id:"Int",
		id:"Int",
		location:"String",
		publication_time:"timestamptz",
		start_time:"timestamptz",
		title:"String",
		updated_at:"timestamptz"
	},
	nb_meeting_mutation_response:{
		affected_rows:"Int",
		returning:"nb_meeting"
	},
	nb_meeting_stddev_fields:{
		guild_id:"Float",
		id:"Float"
	},
	nb_meeting_stddev_pop_fields:{
		guild_id:"Float",
		id:"Float"
	},
	nb_meeting_stddev_samp_fields:{
		guild_id:"Float",
		id:"Float"
	},
	nb_meeting_sum_fields:{
		guild_id:"Int",
		id:"Int"
	},
	nb_meeting_user:{
		cr_user:"cr_user",
		id:"Int",
		meeting_id:"Int",
		nb_meeting:"nb_meeting",
		status:"String",
		user_id:"uuid"
	},
	nb_meeting_user_aggregate:{
		aggregate:"nb_meeting_user_aggregate_fields",
		nodes:"nb_meeting_user"
	},
	nb_meeting_user_aggregate_fields:{
		avg:"nb_meeting_user_avg_fields",
		count:"Int",
		max:"nb_meeting_user_max_fields",
		min:"nb_meeting_user_min_fields",
		stddev:"nb_meeting_user_stddev_fields",
		stddev_pop:"nb_meeting_user_stddev_pop_fields",
		stddev_samp:"nb_meeting_user_stddev_samp_fields",
		sum:"nb_meeting_user_sum_fields",
		var_pop:"nb_meeting_user_var_pop_fields",
		var_samp:"nb_meeting_user_var_samp_fields",
		variance:"nb_meeting_user_variance_fields"
	},
	nb_meeting_user_avg_fields:{
		id:"Float",
		meeting_id:"Float"
	},
	nb_meeting_user_max_fields:{
		id:"Int",
		meeting_id:"Int",
		status:"String"
	},
	nb_meeting_user_min_fields:{
		id:"Int",
		meeting_id:"Int",
		status:"String"
	},
	nb_meeting_user_mutation_response:{
		affected_rows:"Int",
		returning:"nb_meeting_user"
	},
	nb_meeting_user_stddev_fields:{
		id:"Float",
		meeting_id:"Float"
	},
	nb_meeting_user_stddev_pop_fields:{
		id:"Float",
		meeting_id:"Float"
	},
	nb_meeting_user_stddev_samp_fields:{
		id:"Float",
		meeting_id:"Float"
	},
	nb_meeting_user_sum_fields:{
		id:"Int",
		meeting_id:"Int"
	},
	nb_meeting_user_var_pop_fields:{
		id:"Float",
		meeting_id:"Float"
	},
	nb_meeting_user_var_samp_fields:{
		id:"Float",
		meeting_id:"Float"
	},
	nb_meeting_user_variance_fields:{
		id:"Float",
		meeting_id:"Float"
	},
	nb_meeting_var_pop_fields:{
		guild_id:"Float",
		id:"Float"
	},
	nb_meeting_var_samp_fields:{
		guild_id:"Float",
		id:"Float"
	},
	nb_meeting_variance_fields:{
		guild_id:"Float",
		id:"Float"
	},
	nb_sphere:{
		id:"Int",
		name:"String",
		nb_sphere_users:"nb_sphere_users",
		nb_sphere_users_aggregate:"nb_sphere_users_aggregate"
	},
	nb_sphere_aggregate:{
		aggregate:"nb_sphere_aggregate_fields",
		nodes:"nb_sphere"
	},
	nb_sphere_aggregate_fields:{
		avg:"nb_sphere_avg_fields",
		count:"Int",
		max:"nb_sphere_max_fields",
		min:"nb_sphere_min_fields",
		stddev:"nb_sphere_stddev_fields",
		stddev_pop:"nb_sphere_stddev_pop_fields",
		stddev_samp:"nb_sphere_stddev_samp_fields",
		sum:"nb_sphere_sum_fields",
		var_pop:"nb_sphere_var_pop_fields",
		var_samp:"nb_sphere_var_samp_fields",
		variance:"nb_sphere_variance_fields"
	},
	nb_sphere_avg_fields:{
		id:"Float"
	},
	nb_sphere_max_fields:{
		id:"Int",
		name:"String"
	},
	nb_sphere_min_fields:{
		id:"Int",
		name:"String"
	},
	nb_sphere_mutation_response:{
		affected_rows:"Int",
		returning:"nb_sphere"
	},
	nb_sphere_stddev_fields:{
		id:"Float"
	},
	nb_sphere_stddev_pop_fields:{
		id:"Float"
	},
	nb_sphere_stddev_samp_fields:{
		id:"Float"
	},
	nb_sphere_sum_fields:{
		id:"Int"
	},
	nb_sphere_users:{
		cr_user:"cr_user",
		id:"Int",
		nb_sphere:"nb_sphere",
		sphere_id:"Int",
		user_id:"uuid"
	},
	nb_sphere_users_aggregate:{
		aggregate:"nb_sphere_users_aggregate_fields",
		nodes:"nb_sphere_users"
	},
	nb_sphere_users_aggregate_fields:{
		avg:"nb_sphere_users_avg_fields",
		count:"Int",
		max:"nb_sphere_users_max_fields",
		min:"nb_sphere_users_min_fields",
		stddev:"nb_sphere_users_stddev_fields",
		stddev_pop:"nb_sphere_users_stddev_pop_fields",
		stddev_samp:"nb_sphere_users_stddev_samp_fields",
		sum:"nb_sphere_users_sum_fields",
		var_pop:"nb_sphere_users_var_pop_fields",
		var_samp:"nb_sphere_users_var_samp_fields",
		variance:"nb_sphere_users_variance_fields"
	},
	nb_sphere_users_avg_fields:{
		id:"Float",
		sphere_id:"Float"
	},
	nb_sphere_users_max_fields:{
		id:"Int",
		sphere_id:"Int"
	},
	nb_sphere_users_min_fields:{
		id:"Int",
		sphere_id:"Int"
	},
	nb_sphere_users_mutation_response:{
		affected_rows:"Int",
		returning:"nb_sphere_users"
	},
	nb_sphere_users_stddev_fields:{
		id:"Float",
		sphere_id:"Float"
	},
	nb_sphere_users_stddev_pop_fields:{
		id:"Float",
		sphere_id:"Float"
	},
	nb_sphere_users_stddev_samp_fields:{
		id:"Float",
		sphere_id:"Float"
	},
	nb_sphere_users_sum_fields:{
		id:"Int",
		sphere_id:"Int"
	},
	nb_sphere_users_var_pop_fields:{
		id:"Float",
		sphere_id:"Float"
	},
	nb_sphere_users_var_samp_fields:{
		id:"Float",
		sphere_id:"Float"
	},
	nb_sphere_users_variance_fields:{
		id:"Float",
		sphere_id:"Float"
	},
	nb_sphere_var_pop_fields:{
		id:"Float"
	},
	nb_sphere_var_samp_fields:{
		id:"Float"
	},
	nb_sphere_variance_fields:{
		id:"Float"
	},
	query_root:{
		cr_user:"cr_user",
		cr_user_aggregate:"cr_user_aggregate",
		cr_user_by_pk:"cr_user",
		nb_guild:"nb_guild",
		nb_guild_aggregate:"nb_guild_aggregate",
		nb_guild_by_pk:"nb_guild",
		nb_guild_user:"nb_guild_user",
		nb_guild_user_aggregate:"nb_guild_user_aggregate",
		nb_guild_user_by_pk:"nb_guild_user",
		nb_meeting:"nb_meeting",
		nb_meeting_aggregate:"nb_meeting_aggregate",
		nb_meeting_by_pk:"nb_meeting",
		nb_meeting_user:"nb_meeting_user",
		nb_meeting_user_aggregate:"nb_meeting_user_aggregate",
		nb_meeting_user_by_pk:"nb_meeting_user",
		nb_sphere:"nb_sphere",
		nb_sphere_aggregate:"nb_sphere_aggregate",
		nb_sphere_by_pk:"nb_sphere",
		nb_sphere_users:"nb_sphere_users",
		nb_sphere_users_aggregate:"nb_sphere_users_aggregate",
		nb_sphere_users_by_pk:"nb_sphere_users"
	},
	subscription_root:{
		cr_user:"cr_user",
		cr_user_aggregate:"cr_user_aggregate",
		cr_user_by_pk:"cr_user",
		nb_guild:"nb_guild",
		nb_guild_aggregate:"nb_guild_aggregate",
		nb_guild_by_pk:"nb_guild",
		nb_guild_user:"nb_guild_user",
		nb_guild_user_aggregate:"nb_guild_user_aggregate",
		nb_guild_user_by_pk:"nb_guild_user",
		nb_meeting:"nb_meeting",
		nb_meeting_aggregate:"nb_meeting_aggregate",
		nb_meeting_by_pk:"nb_meeting",
		nb_meeting_user:"nb_meeting_user",
		nb_meeting_user_aggregate:"nb_meeting_user_aggregate",
		nb_meeting_user_by_pk:"nb_meeting_user",
		nb_sphere:"nb_sphere",
		nb_sphere_aggregate:"nb_sphere_aggregate",
		nb_sphere_by_pk:"nb_sphere",
		nb_sphere_users:"nb_sphere_users",
		nb_sphere_users_aggregate:"nb_sphere_users_aggregate",
		nb_sphere_users_by_pk:"nb_sphere_users"
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
  