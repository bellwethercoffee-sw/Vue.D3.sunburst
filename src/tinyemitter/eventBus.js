// eventBus.js
import Emitter from './Emitter.js'

/**
 * Allows handling parent events in other sub components.
 * 
 * @version 2.0.0
 * @link https://vuejs.org/api/options-state.html#emits
 */
export default {
  $on: (...args) => Emitter.on(...args),
  $once: (...args) => Emitter.once(...args),
  $off: (...args) => Emitter.off(...args),
  $emit: (...args) => Emitter.emit(...args)
}