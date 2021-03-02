const defaultTiming = '0.5s ease'
const defaultTimingColor = '0.1s ease'
const bgTransition = `background ${defaultTiming}`
const colorTransition = `color ${defaultTimingColor}`
const defaultTransition = `${bgTransition}, ${colorTransition}`

export default {
    DEFAULT: defaultTransition,
    COLOR: colorTransition,
    BACKGROUND: bgTransition,
    ALL: defaultTiming
}