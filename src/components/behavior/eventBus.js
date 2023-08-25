// eventBus.js
import emitter from 'tiny-emitter/instance'

/**
 * Allows handling parent events in other sub components.
 * 
 * @version 2.0.0
 * @link https://vuejs.org/api/options-state.html#emits
 */
export default {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args)
}