<script setup lang="ts">
export interface IPropsInput {
  value: string;
  type?: string;
  name?: string;
  placeholder?: string;
}

withDefaults(defineProps<IPropsInput>(), {
  type: 'text',
  value: '',
  name: 'field',
  placeholder: 'Type text'
});
const emit = defineEmits(['update:value']);
const emitUpdateValue = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  emit('update:value', target.value);
};
</script>

<template>
  <label :class="$style['form-field']">
    <input
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @input="emitUpdateValue"
    />
  </label>
</template>

<style module lang="scss">
.form-field {
  display: block;
  width: 100%;
  height: 40px;
  max-width: 240px;

  input {
    display: block;
    padding: 6px;
    width: 100%;
    height: 100%;
    border: 1px solid #b2afaf;
    border-radius: 4px;
  }
}
</style>
