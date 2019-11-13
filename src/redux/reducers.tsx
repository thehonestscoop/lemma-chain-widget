import { combineReducers } from "redux";

// import { actionsAndProps as actions } from './actions';
import { ActionInterface as A } from "./actions";
import Get_HardCoded_Refs from "../JSON_MockUp_Sample";

//the Reducers ...
const dropdownIsCollapsed = (state = true, action: A) => {
  if ("SET_DROPDOWN_IS_COLLAPSED" === action.type) return action.newState;
  return state;
};

const dropdownCurHeight = (state: any = 0, action: A) => {
  if ("RESIZE_DROPDOWN_HEIGHT" === action.type)
    return resizeDropdownHeightTo(action.newState);
  return state;

  function resizeDropdownHeightTo(activeTab: any, constHeight = 48) {
    //i.e. if the argument, activeTab, is an element and not a number (0)...
    //PS: Add 2px for border-bottom extension
    if (typeof activeTab === 'number')
      return activeTab;
    return activeTab.offsetHeight + constHeight + 2;
  }
};

const refID = (state = "@powerofgod/17t8kcjuw", action: A) => {
  if ("UPDATE_REF_ID" === action.type) return action.newState;
  return state;
};

const activeTabName = (state = "required-tab", action: A) => {
  if ("UPDATE_ACTIVE_TAB_NAME" === action.type) return action.newState;
  return state;
};

const activeTabLinkName = (state = "required-tab-link", action: A) => {
  if ("UPDATE_ACTIVE_TABLINK_NAME" === action.type) return action.newState;
  return state;
};

const historyExists = (state = false, action: A) => {
  if ("SET_HISTORY_EXISTS" === action.type) return action.newState;
  return state;
};

const refIsLoading = (state = false, action: A) => {
  if ("SET_REF_IS_LOADING" === action.type) return action.newState;
  return state;
};

const payload = (state = Get_HardCoded_Refs(), action: A) => {
  if ("UPDATE_PAYLOAD" === action.type) return action.newState;
  return state;
};

const errOccurred = (state = false, action: A) => {
  if ("SET_ERROR_OCCURRED" === action.type) return action.newState;
  return state;
};

const errMsg = (state = "", action: A) => {
  if ("GET_ERR_MSG" === action.type) return action.newState;
  return state;
};

const graphNodeIsHovered = (state = false, action: A) => {
  if ("SET_GRAPH_NODE_IS_HOVERED" === action.type) return action.newState;
  return state;
};

const graphNodeIsActive = (state = false, action: A) => {
  if ("SET_GRAPH_NODE_IS_ACTIVE" === action.type) return action.newState;
  return state;
};

const tooltipIsActive = (state = false, action: A) => {
  if ("SET_TOOLTIP_IS_ACTIVE" === action.type) return action.newState;
  return state;
};

// const history = (state: any = [], action: A) => {
//   // switch (action.type) {
//   //   case :
//   //     const copyHistory = state.history ? [ ...state.history ] : [{}]
//   //     copyHistory.push({ ...action.newState })
//   //     return { history: copyHistory };
//   //   case 'DELETE_PREV_HISTORY':
//   //     let copyState = { ...state };
//   //     return copyState.history.pop();
//   //   default: return state;

//   // }
//   if ("UPDATE_HISTORY" === action.type) return action.newState;
//   return state;
// };

const graphNodes = (state: any = [], action: A) => {
  if ("POPULATE_GRAPH_NODES" === action.type) return action.newState;
  return state;
};

const graphEdges = (state: any = [], action: A) => {
  if ("POPULATE_GRAPH_EDGES" === action.type) return action.newState;
  return state;
};

const reducers = combineReducers({
  dropdownIsCollapsed,
  dropdownCurHeight,
  refID,
  activeTabName,
  activeTabLinkName,
  historyExists,
  refIsLoading,
  payload,
  errOccurred,
  errMsg,
  graphNodeIsHovered,
  graphNodeIsActive,
  tooltipIsActive,
  // history,
  graphNodes,
  graphEdges
});

export default reducers;
