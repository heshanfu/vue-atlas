<template>
  <div class="wrap" :style="{width: width + 'px'}">
    <input ref="range" :class="`${prefixCls}-range`" :value="currentValue" type="range" :min="min" :max="max" :step="step" @input="onInput" />
    <transition name="fade">
      <div v-if="showoutput" class="output_position">
        <output for="r" ></output>
      </div>
    </transition>
  </div>
</template>

<script>
import EventListener from '../utils/EventListener.js'

export default {
  name: 'VaRange',
  props: {
    min: {
      type: [String, Number],
      default: '0',
      required: false
    },
    max: {
      type: [String, Number],
      default: '100',
      required: false
    },
    step: {
      type: [String, Number],
      default: '1',
      required: false
    },
    value: {
      type: [Number, String],
      default: 0,
      required: false
    },
    width: {
      type: Number,
      default: 300
    },
    prefixCls: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let value = this.value
    return {
      showoutput: false,
      currentValue: value,
      preBarElement: null
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
      this.$emit('change', val)
      this.preBarElement.style.width = this.getVal() + 'px'
    },
    min (val) {
      this.preBarElement.style.width = this.getVal() + 'px'
    },
    max (val) {
      this.preBarElement.style.width = this.getVal() + 'px'
    },
    step (val) {
      this.preBarElement.style.width = this.getVal() + 'px'
    }
  },
  methods: {
    onInput (e) {
      this.currentValue = parseInt(e.target.value)
      this.$emit('input', parseInt(e.target.value))
    },
    getVal () {
      var w = parseInt(this.$refs.range.clientWidth, 10)
      let cv = parseInt(this.currentValue, 10)
      let min = parseInt(this.min, 10)
      let max = parseInt(this.max, 10)

      max = max - min
      cv = cv - min
      min = min - min

      if (min === 0 && max === 100) {
        return cv * w / 100 - (cv * 16 / 100) // because the thumb is 16px wide
      } else {
        let p = cv * 100 / max
        let pp = p * w / 100
        pp = pp - (p * 16 / 100)

        return pp
      }
    }
  },
  computed: {
    styleObj () {
      let style = {}

      let l = this.value - this.min
      let r = this.max - this.min

      style['transform'] = 'translate(calc(' + l / r + ' * 11.25em - 50%))'

      return style
    }
  },
  mounted () {
    let {prefixCls} = this
    var wrp = document.createElement('div')
    var preBar = document.createElement('p')

    wrp.className = prefixCls + '-range-barCnt'
    preBar.className = prefixCls + '-range-preBar'

    this.$refs.range.className = this.$refs.range.className.length ? (this.$refs.range.className + ' colorized') : 'colorized'
    this.$refs.range.parentNode.replaceChild(wrp, this.$refs.range)

    wrp.appendChild(this.$refs.range)
    wrp.appendChild(preBar)

    let r = this.$refs.range
    this._inputEvent = EventListener.listen(r, 'input', () => {
      preBar.style.width = this.getVal() + 'px'
    })

    this.$nextTick(() => {
      preBar.style.width = this.getVal() + 'px'
    })

    this.$refs.range.value = this.value
    this.preBarElement = preBar
  },
  beforeDestroy () {
    if (this._inputEvent) this._inputEvent.remove()
    if (this._mouseupEvent) this._mouseupEvent.remove()
    if (this._mousedownEvent) this._mousedownEvent.remove()
  }
}
</script>
