<template>
    <div class="q-pa-md example-column-all-breakpoints">
        <div class="column"  v-if="props.settingData">
            <label>房間名稱</label>
            <input type="text" v-model="props.settingData.name">
            <label>英文名稱</label>
            <input type="text" v-model="props.settingData.eng">
            <label>折價</label>
            <input type="text" v-model="props.settingData.discount">
            <label>價格</label>
            <input type="text" v-model="props.settingData.price">
            <label>設備</label>
            <div>
                <input type="checkbox" v-model="props.settingData.equipment.wifi">Wifi
                <input type="checkbox" v-model="props.settingData.equipment.bathtub">Bathtub
                <input type="checkbox" v-model="props.settingData.equipment.breakfast">Breakfast
            </div>
        </div>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';

const props = defineProps(['settingData']);


</script>
