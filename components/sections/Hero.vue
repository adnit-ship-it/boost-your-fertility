<template>
  <UiSectionWrapper class="relative text-black pt-24 lg:pt-32 pb-52">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-no-repeat w-full h-full" :style="{
        backgroundImage: `url('${hero?.media?.background?.src || '/assets/images/brand/hero-bg.png'}')`,
        backgroundPosition: 'bottom right'
      }" />

    <!-- Gradient Overlay -->
    <div class="absolute w-full h-[256px] -bottom-[128px] z-[1]" style="
        background: linear-gradient(to bottom, rgba(98, 98, 98, 0) 0%, rgba(0, 0, 0, 1) 100%);
      "></div>

    <!-- Hand Vial Image - Bottom Right -->
    <div
      class="absolute md:hidden bottom-8 right-0 z-20 h-[222px] flex items-end justify-end md:h-[480px] lg:h-[600px]">
      <img v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 500,
          type: 'ease-in',
          stiffness: 250,
          damping: 25,
          mass: 1,
        },
          }" :src="hero?.media?.foreground?.src || '/assets/images/brand/hero-img.png'" :alt="hero?.media?.foreground?.alt || 'Vial and Syringe'" class="h-full w-auto object-contain" />
    </div>

    <!-- Content - Single Column -->
    <UiSectionContainer class="relative z-30 h-full flex justify-between">
      <div class="space-y-2 md:space-y-4 lg:space-y-10 flex flex-col h-full">
        <div class="w-[192px] md:w-[365px]">
          <img v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              type: 'ease-in',
              stiffness: 250,
              damping: 25,
              mass: 1,
            },
          }" :src="hero?.media?.logo?.src || '/assets/images/brand/logo-alt.svg'" class="h-full w-full object-cover" :alt="hero?.media?.logo?.alt || 'Brand Logo'" />
        </div>

        <h1 v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 500,
            type: 'ease-in',
            stiffness: 250,
            damping: 25,
            mass: 1,
            delay: 50,
          },
        }" class="text-2xl md:text-3xl lg:text-[48px] font-bold text-bodyColor">
          {{ hero?.heading || crmStore.getHeroHeading }}
        </h1>

        <h2 v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 500,
            type: 'ease-in',
            stiffness: 250,
            damping: 25,
            mass: 1,
            delay: 100,
          },
        }" class="text-lg md:text-xl lg:text-[34px] text-bodyColor">
          {{ hero?.subheading || crmStore.getHeroSubheading }}
        </h2>

        <!-- Bullet Points -->
        <ul class="space-y-3">
          <li v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              type: 'ease-in',
              stiffness: 250,
              damping: 25,
              mass: 1,
              delay: 150,
            },
          }" class="flex items-center h-[16px] md:h-[26px]">
            <img :src="hero?.media?.bulletIcon?.src || '/assets/images/brand/check.svg'" :alt="hero?.media?.bulletIcon?.alt || 'Checkmark'"
              class="w-[14px] h-[14px] md:w-[26px] md:h-[26px] mr-1 md:mr-3" />
            <span class="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-accentColor1">{{ hero?.bulletPoints.trustedByExperts || 'Trusted by experts' }}</span>
          </li>
          <li v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              type: 'ease-in',
              stiffness: 250,
              damping: 25,
              mass: 1,
              delay: 150,
            },
          }" class="flex items-center h-[16px] md:h-[26px]">
            <img :src="hero?.media?.bulletIcon?.src || '/assets/images/brand/check.svg'" :alt="hero?.media?.bulletIcon?.alt || 'Checkmark'"
              class="w-[14px] h-[14px] md:w-[26px] md:h-[26px] mr-1 md:mr-3" />
            <span class="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-accentColor1">{{ hero?.bulletPoints.provenResults || 'Proven results' }}</span>
          </li>
          <li v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              type: 'ease-in',
              stiffness: 250,
              damping: 25,
              mass: 1,
              delay: 150,
            },
          }" class="flex items-center h-[16px] md:h-[26px]">
            <img :src="hero?.media?.bulletIcon?.src || '/assets/images/brand/check.svg'" :alt="hero?.media?.bulletIcon?.alt || 'Checkmark'"
              class="w-[14px] h-[14px] md:w-[26px] md:h-[26px] mr-1 md:mr-3" />
            <span class="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-accentColor1">{{ hero?.bulletPoints.exceptionalCare || 'Exceptional care' }}</span>
          </li>
        </ul>

        <!-- CTA Button -->
        <div v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 500,
            type: 'ease-in',
            stiffness: 250,
            damping: 25,
            mass: 1,
            delay: 200,
          },
        }" class="flex flex-col justify-end h-[50px] mt-7 lg:mt-5">
          <NuxtLink to="/consultation">
            <UiButton background-color="accentColor2" text-color="white" :width="buttonWidth" :height="buttonHeight"
              :font-size="buttonFontSize">
              {{ hero?.ctaButton || 'Take the Assessment' }}
            </UiButton>
          </NuxtLink>
        </div>
      </div>
      <div class="hidden md:block z-20 h-[222px] md:h-[512px]">
        <img v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 500,
            type: 'ease-in',
            stiffness: 250,
            damping: 25,
            mass: 1,
          },
        }" :src="hero?.media?.foreground?.src || '/assets/images/brand/hero-img.png'" :alt="hero?.media?.foreground?.alt || 'Hand holding vial'" class="h-full w-auto object-contain" />
      </div>
    </UiSectionContainer>
  </UiSectionWrapper>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useCRMStore } from "~/stores/crmStore";
import { useSiteTextStore } from "~/stores/siteText";

const crmStore = useCRMStore();
const siteTextStore = useSiteTextStore();

// Destructure site text sections once for this component
const hero = computed(() => siteTextStore.getHomeText()?.hero);

// Mobile detection
const isMobile = ref(false);

// Check mobile on mount and resize
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

// Derived button sizes
const buttonWidth = computed(() => (isMobile.value ? "192px" : "320px"));
const buttonHeight = computed(() => (isMobile.value ? "28px" : "48px"));
const buttonFontSize = computed(() => (isMobile.value ? "16" : "24"));
</script>

<style scoped>
/* Custom styles if needed */
</style>
