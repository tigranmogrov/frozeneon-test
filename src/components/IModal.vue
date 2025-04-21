<script setup lang="ts">
import IChip from '@/components/IChip.vue';
import type { IPackage } from '@/types/package.types';

defineProps<{
  modelValue: boolean;
  data: IPackage | null;
}>();

defineEmits(['update:modelValue']);
</script>

<template>
  <transition
    name="fade"
    appear
    :enter-active-class="$style['fade-enter-active']"
    :leave-active-class="$style['fade-leave-active']"
    :enter-from-class="$style['fade-enter-from']"
    :leave-to-class="$style['fade-leave-to']"
  >
    <div
      v-if="modelValue"
      v-scroll-lock="modelValue"
      :class="$style['modal']"
      @click.self="$emit('update:modelValue', false)"
    >
      <div :class="$style['modal-inner']">
        <button
          :class="$style['modal-btn']"
          title="close modal"
          @click="$emit('update:modelValue', false)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            height="490px"
            width="490px"
            viewBox="0 0 490 490"
            xml:space="preserve"
          >
            <polygon
              points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490   489.292,457.678 277.331,245.004 489.292,32.337 "
            />
          </svg>
        </button>
        <div v-if="data" :class="$style['modal-content']">
          <table :class="$style['modal-table']">
            <tbody>
              <tr>
                <th>Package</th>
                <td>{{ data.name }}</td>
              </tr>
              <tr>
                <th>Version</th>
                <td>{{ data.version }}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{{ data.description }}</td>
              </tr>
              <tr v-if="data.keywords?.length">
                <th>Keywords</th>
                <td>
                  <i-chip v-for="(keyword, index) in data.keywords" :key="index">
                    {{ keyword }}
                  </i-chip>
                </td>
              </tr>
              <tr>
                <th>User</th>
                <td>{{ data.publisher.username }}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>
                  <a :href="'mailto:' + data.publisher.email">{{ data.publisher.email }}</a>
                </td>
              </tr>
              <tr v-if="data.links.repository">
                <th>GitHub</th>
                <td>
                  <a target="_blank" :href="data.links.repository">{{ data.links.repository }}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <h3 :class="$style['error-title']">Not Data...</h3>
        </div>
      </div>
    </div>
  </transition>
</template>

<style module lang="scss">
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: rgba(#000, 0.7);
}

.modal-inner {
  position: relative;
  display: block;
  max-width: 600px;
  width: 100%;
  padding: 40px 0;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
}

.modal-content {
  display: block;
  max-height: 500px;
  min-height: 100px;
  padding: 0 15px;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media screen and (min-width: 768px) {
    padding: 0 30px;
  }
}

.modal-btn {
  position: absolute;
  top: 6px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  padding: 4px;
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }

  svg,
  path {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.modal-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e4e4e4;

  th,
  td {
    border: 1px solid #e4e4e4;
    padding: 10px 6px;
  }

  th {
    width: 100px;
    font-size: 14px;
    line-height: 18px;
  }

  td {
    font-size: 12px;
    line-height: 16px;

    > div {
      margin-right: 4px;
      margin-bottom: 4px;
    }

    a {
      color: #4479d7;
    }
  }
}

.error-title {
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
