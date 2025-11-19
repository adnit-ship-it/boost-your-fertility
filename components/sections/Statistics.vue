<template>
  <UiSectionWrapper class="bg-accentColor2 py-20">
    <UiSectionContainer class="flex flex-col gap-12">
      <h2 v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 400,
          type: 'ease-in',
          stiffness: 250,
          damping: 25,
          mass: 1,
          delay: 100,
        },
      }"
        class="w-full max-w-[1168px] font-defaultSerif text-[20px] md:text-[28px] lg:text-[32px] font-semibold text-black md:text-left">
        {{ statistics?.title || 'Clinically Proven To Help You Lose Weight' }}
      </h2>
      <div class="flex gap-12">
        <div class="flex flex-col w-full gap-8">
          <div v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 400,
              type: 'ease-in',
              stiffness: 250,
              damping: 25,
              mass: 1,
              delay: 150,
            },
          }"
            class="w-full md:w-[420px] h-[108px] bg-backgroundColor border-2 border-accentColor1 rounded-[12px] flex items-center justify-center flex-col shadow-xl">
            <h3 class="text-[28px] md:text-[36px] leading-[32px] md:leading-[38px] font-semibold">{{ statistics?.cards?.[0]?.value || '14.9%' }}</h3>
            <p class="text-[20px] text-center leading-[24px]" v-html="statistics?.cards?.[0]?.description || 'Average reduction in body weight'"></p>
          </div>
          <div v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 400,
              type: 'ease-in',
              stiffness: 250,
              damping: 25,
              mass: 1,
              delay: 200,
            },
          }" class="w-full md:w-[420px] h-[108px] bg-backgroundColor border-2 border-accentColor1 rounded-[12px] flex items-center justify-center flex-col shadow-xl">
            <h3 class="text-[28px] md:text-[36px] leading-[32px] md:leading-[38px] font-semibold">{{ statistics?.cards?.[1]?.value || '6x' }}</h3>
            <p class="text-[20px] text-center leading-[24px]" v-html="statistics?.cards?.[1]?.description || 'More weight loss than diet<br>and exercise alone'"></p>
          </div>
          <div v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 400,
              type: 'ease-in',
              stiffness: 250,
              damping: 25,
              mass: 1,
              delay: 250,
            },
          }" class="w-full md:w-[420px] h-[108px] bg-backgroundColor border-2 border-accentColor1 rounded-[12px] flex items-center justify-center flex-col shadow-xl">
            <h3 class="text-[28px] md:text-[36px] leading-[32px] md:leading-[38px] font-semibold">{{ statistics?.cards?.[2]?.value || '100%' }}</h3>
            <p class="text-[20px] text-center leading-[24px]">{{ statistics?.cards?.[2]?.description || 'Online Personalized Support' }}</p>
          </div>
        </div>
        <img v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 400,
            type: 'ease-in',
            stiffness: 250,
            damping: 25,
            mass: 1,
            delay: 150,
          },
        }" :src="statistics?.media?.graph?.src || '/assets/images/wl-graph.png'" :alt="statistics?.media?.graph?.alt || 'weight loss graph'" class="hidden lg:block h-[388px] object-contain">
      </div>
    </UiSectionContainer>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSiteTextStore } from '~/stores/siteText'

const siteTextStore = useSiteTextStore()
const statistics = computed(() => siteTextStore.getHomeText()?.statistics)
const common = computed(() => siteTextStore.getCommonText())
</script>