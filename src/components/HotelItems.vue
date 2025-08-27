<template>
  <div class="q-pa-md row items-start q-gutter-md hotelitem">
    <q-card class="my-card" v-if="item">
      <q-img :src="item.cover" class="item-image">
        <div class="absolute-bottom text-subtitle2 text-center">
          {{ item.name }}<br />{{ item.eng }}
        </div>
      </q-img>
      <q-card-section>
        <div>優惠：{{ item.discount }}</div>
        <div>
          設備：
          <span v-if="item.equipment.wifi"
            ><i class="fa-solid fa-wifi"></i
          ></span>
          <span v-if="item.equipment.bathtub"
            ><i class="fa-solid fa-bath"></i
          ></span>
          <span v-if="item.equipment.breakfast"
            ><i class="fa-solid fa-mug-saucer"></i
          ></span>
        </div>

        <div class="item-price">
          <div>原價：${{ item.price }}</div>
          <b>
            <div style="font-size: 1.5em; color: red">
              優惠價格：${{ Math.ceil(item.price * item.discount) }}
            </div>
          </b>
        </div>
        <button @click="emit('detailsItem', item)">setting</button>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["item"]);
const emit = defineEmits(["detailsItem"]);
</script>

<style scoped>
.my-card {
  height: 400px;
  width: 100%;
  max-width: 350px;

  .item-image {
    height: 230px;
  }

  .item-price {
    display: flex;
    justify-content: space-between;
  }
}
</style>
