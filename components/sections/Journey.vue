<template>
  <UiSectionWrapper class="flex-col py-20">
    <UiSectionContainer class="flex-col">
      <!-- Move ref here to the actual content -->
      <div ref="sectionRef">
        <!-- Heading -->
        <h2 v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 400,
            type: 'ease-in',
            stiffness: 250,
            damping: 25,
            mass: 1,
            delay: 50,
          },
        }"
          class="w-full text-[20px] md:text-[28px] lg:text-[32px] mb-9 md:mb-12 font-medium text-bodyColor text-center">
          {{ journey?.title || 'Your Weight Loss Journey' }}
        </h2>

        <!-- Content Container -->
        <div class="flex flex-row lg:flex-col gap-8 px-8 lg:px-0 max-w-[1168px] w-full">
          <div class="flex flex-col items-center lg:hidden py-10 relative">
            <div class="progress-line absolute top-12 w-[1px] max-h-[224px] bg-[#0471F6]"
              :style="{ height: progressHeight + 'px' }"></div>
            <!-- First dot (always active) -->
            <div v-if="journeyCards.length > 0" class="h-2 w-2 md:h-3 md:w-3 rounded-full bg-[#0471F6]" />
            <!-- Dynamic dots and spacing -->
            <template v-for="(card, index) in journeyCards.slice(1)" :key="`mobile-dot-${index + 1}`">
              <div class="h-[108px] md:h-[152px] w-[1px] md:w-[2px] bg-[#DBD9D9]"></div>
              <div :class="[
                'h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300',
                progress >= (dotThresholds[index + 1] || 0)
                  ? 'bg-[#0471F6] border-0'
                  : 'border-[#DBD9D9] border md:border-2',
              ]" />
            </template>
          </div>
          <div class="w-full flex flex-col lg:flex-row gap-7 pl-4 flex-wrap justify-center items-center">
            <UiJourneyCard v-motion :initial="{ opacity: 0, y: 8 }" :visible-once="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 400,
                type: 'ease-in-out',
                stiffness: 250,
                damping: 25,
                mass: 1,
                delay: 100 * index,
              },
            }" v-for="(card, index) in journeyCards" :key="index" :img="card.img" :title="card.title"
              :subtext="card.subtext" :is-active="index === 0" :isActive="card.isActive" />
          </div>
        </div>
      </div>
    </UiSectionContainer>
    <div class="hidden lg:flex w-full h-[1px] bg-[#d9d9d9] mt-8  justify-center">
      <UiSectionContainer class="flex flex-row justify-around">
        <div 
          v-for="(card, index) in journeyCards" 
          :key="index"
          class="h-2 w-2 rounded-full bg-accentColor1 -mt-[3px]" 
        />
      </UiSectionContainer>
    </div>
    <NuxtLink to="/consultation" class="mt-16">
      <UiButton text-color="white" background-color="accentColor1" width="229px">
        {{ journey?.ctaButton || 'Start Today!' }}
    </UiButton>
    </NuxtLink>
    
  </UiSectionWrapper>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from "vue";
import { useSiteTextStore } from '~/stores/siteText';

const siteTextStore = useSiteTextStore();

// Initialize site text once for this component
const journey = computed(() => siteTextStore.getHomeText()?.journey);

const journeyCards = computed(() => {
  const siteTextSteps = journey.value?.steps || []
  return siteTextSteps.map((step, index) => ({
    img: step.icon?.src || (index === 0 ? "/assets/images/virtual-consult.svg" : 
         index === 1 ? "/assets/images/patient-approved.svg" : 
         "/assets/images/prescription.svg"),
    title: step.title,
    subtext: Array.isArray(step.subtext) ? step.subtext.join('<br class="hidden md:block" />') : step.subtext,
    isActive: false,
  }))
});

const progressHeight = ref(0);
const progress = ref(0);
const sectionRef = ref(null);

// Calculate dot thresholds dynamically based on journeyCards length
const dotThresholds = computed(() => {
  const count = journeyCards.value.length;
  if (count <= 1) return [0];
  return Array.from({ length: count }, (_, i) => i / (count - 1));
});

// Tablet-specific values (768px - 1076px)
const tabletDotThresholds = computed(() => {
  const count = journeyCards.value.length;
  if (count <= 1) return [0];
  // Slightly different distribution for tablet
  return Array.from({ length: count }, (_, i) => (i / (count - 1)) * 0.95);
});
const tabletProgressHeight = 640; // Tablet progress line height
const mobileProgressHeight = 456; // Mobile progress line height

const updateProgress = () => {
  if (window.innerWidth > 1076) return; // Desktop only

  const section = sectionRef.value;
  if (!section || typeof section.getBoundingClientRect !== 'function') return;

  const rect = section.getBoundingClientRect();
  const sectionTop = rect.top;
  const sectionHeight = rect.height;
  const viewportHeight = window.innerHeight;

  // Control when animation starts and ends
  const startPoint = 0.2; // Start at 20% scroll
  const endPoint = 0.8; // End at 80% scroll

  if (sectionTop <= viewportHeight * (1 - startPoint)) {
    const rawProgress =
      (viewportHeight - sectionTop) / (sectionHeight + viewportHeight);
    progress.value = Math.max(
      0,
      Math.min(1, (rawProgress - startPoint) / (endPoint - startPoint))
    );

    // Use different thresholds based on screen size
    const currentThresholds = window.innerWidth >= 768 ? tabletDotThresholds.value : dotThresholds.value;
    const currentProgressHeight = window.innerWidth >= 768 ? tabletProgressHeight : mobileProgressHeight;

    // Update journey card active states based on progress thresholds
    journeyCards.value.forEach((card, index) => {
      if (index === 0) return; // First card always active

      const threshold = currentThresholds[index];
      if (threshold === undefined) return; // Safety check
      
      const wasActive = card.isActive;
      const isNowActive = progress.value >= threshold;

      if (isNowActive !== wasActive) {
        card.isActive = isNowActive;
      }
    });

    // Update progress height based on screen size
    progressHeight.value = progress.value * currentProgressHeight;
  } else {
    progress.value = 0;
    // Reset all cards to inactive except first
    journeyCards.value.forEach((card, index) => {
      card.isActive = index === 0;
    });
  }
};



onMounted(() => {
  // Wait for next tick to ensure refs are properly set
  nextTick(() => {
    // Mobile/tablet animation
    if (window.innerWidth <= 1076) {
      window.addEventListener("scroll", updateProgress);
      window.addEventListener("resize", updateProgress);
      updateProgress(); // Initial call
    }


  });

  // Handle resize to switch between animations
  window.addEventListener("resize", handleResize);
});

const handleResize = () => {
  // Remove all listeners first
  window.removeEventListener("scroll", updateProgress);

  // Add appropriate listener based on new screen size
  if (window.innerWidth <= 1076) {
    window.addEventListener("scroll", updateProgress);
    updateProgress(); // Initial call
  }
};

// Computed property for template access
const isDesktop = computed(() => process.client && window.innerWidth > 1076);

onUnmounted(() => {
  window.removeEventListener("scroll", updateProgress);
  window.removeEventListener("resize", updateProgress);
});
</script>

<style scoped>
/* Mobile-only progress line animation */
@media (max-width: 1076px) {
  .progress-line {
    transition: height 0.1s ease-out;
  }
}

/* Tablet-specific progress line animation (768px - 1076px) */
@media (min-width: 768px) and (max-width: 1076px) {
  .progress-line {
    transition: height 0.15s ease-out;
    /* Slightly slower for tablet */
  }
}

/* Mobile-specific progress line animation (below 768px) */
@media (max-width: 767px) {
  .progress-line {
    transition: height 0.1s ease-out;
    /* Faster for mobile */
  }
}
</style>
