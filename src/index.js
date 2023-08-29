import sunburst from "./components/sunburst.vue";

//slots info
import nodeInfoDisplayer from "./components/nodeInfoDisplayer.vue";
import breadcrumbTrail from "./components/breadcrumbTrail.vue";
//slots behaviors
import highlightOnHover from "./components/behavior/highlightOnHover.js";
import zoomOnClick from "./components/behavior/zoomOnClick.js";
import popUpOnHover from "./components/behavior/popUpOnHover.js";

import { colorSchemes } from "./infra/colorSchemes.js";

import Emitter from "./tinyemitter/Emitter.js";
import eventBus from "./tinyemitter/eventBus.js";

export {
  breadcrumbTrail,
  colorSchemes,
  Emitter,
  eventBus,
  highlightOnHover,
  popUpOnHover,
  nodeInfoDisplayer,
  sunburst,
  zoomOnClick
};
