/* eslint-disable no-param-reassign */

import { Action } from "overmind";
import { Claims } from "../auth";

export const setUser: Action<Claims> = ({ state }, user) => {
  state.user = user;
};
