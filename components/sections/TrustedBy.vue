<template>
  <UiSectionWrapper class="flex-col overflow-hidden py-20">
    <UiSectionContainer>
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
      }" class="pb-[24px] text-[20px] md:text-[28px] lg:text-[32px] font-semibold text-bodyColor text-center">
        {{ trustedBy?.title || 'Trusted By' }}
      </h2>
    </UiSectionContainer>
    <div class="relative overflow-hidden border-t h-[90px] md:h-[130px] border-b border-[#D9D9D9]">
      <NuxtMarquee :speed="trustedBy?.marquee?.speed || 50" :autoFill="true" class="flex items-center justify-center h-full gap-8">
        <div class="flex items-center gap-8 lg:gap-16 h-full px-4">
          <template v-for="(logo, index) in trustedByLogos" :key="index">
            <img :src="logo.src" :alt="logo.alt" class="h-8 lg:h-10 w-auto object-contain" />
          </template>
          <!-- Duplicate for seamless loop -->
          <template v-for="(logo, index) in trustedByLogos" :key="`duplicate-${index}`">
            <img :src="logo.src" :alt="logo.alt" class="h-8 lg:h-10 w-auto object-contain" />
          </template>
        </div>
      </NuxtMarquee>
    </div>
  </UiSectionWrapper>
</template>

<script setup>
import { computed } from 'vue'
import { useSiteTextStore } from '~/stores/siteText'

const siteTextStore = useSiteTextStore()
const trustedBy = computed(() => siteTextStore.getHomeText()?.trustedBy)

// Define the center prop with a default value of false
const { center } = defineProps({
  center: {
    type: Boolean,
    default: false,
  },
});

// Get logos from siteText or fallback
const trustedByLogos = computed(() => trustedBy.value?.logos || [])
</script>
