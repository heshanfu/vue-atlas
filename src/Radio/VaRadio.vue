<template>
  <label :class="`${prefixCls}-radio-con`">
    <span :class="objClass">
      <span :class="`${prefixCls}-radio-inner`"></span>
      <input
        type="radio"
        :disabled="disabled"
        :checked="currentChecked"
        :class="`${prefixCls}-radio-input`"
        @click.prevent="handleClick">
    </span>
    <span :class="`${prefixCls}-label`">
      <slot />
    </span>
    <validate
      :name="name"
      :rules="rules"
      :custom-validate="customValidate"
      :current="checked">
    </validate>
  </label>
</template>

<script>
import validationMixin from '../Mixin/validationMixin'
import events from '../utils/events'
import validate from '../validate'

export default {
  name: 'VaRadio',
  mixins: [validationMixin, events],
  props: {
    value: {
      type: String
    },
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'va'
    }
  },
  components: {
    validate
  },
  data () {
    let checked = this.checked
    if (checked !== undefined) {
      this.$emit('input', checked)
    } else {
      checked = !!this.value
    }

    return {
      currentChecked: checked
    }
  },
  computed: {
    objClass () {
      let {prefixCls, currentChecked, disabled} = this
      let klass = {}

      klass[prefixCls + '-radio-span'] = true
      klass[prefixCls + '-radio-checked'] = currentChecked
      klass[prefixCls + '-radio-disabled'] = disabled

      return klass
    }
  },
  watch: {
    value (val) {
      this.currentChecked = val
    },
    checked (val) {
      this.currentChecked = val
    },
    currentChecked (val) {
      this.$emit('input', val)
    }
  },
  created () {
    this.$on('Va@radiogroupChange', (val) => {
      // this.currentChecked = val.indexOf(this.label) > -1
      this.currentChecked = val === this.label
    })
  },
  methods: {
    handleClick () {
      if (this.currentChecked) return
      this.currentChecked = true
      this.dispatch('VaRadioGroup', 'Va@radioChange', this.label)
      this.$emit('change', this.currentChecked)
    }
  }
}
</script>
