<template>
  <div class="pt-[83px] lg:pt-[68px] bg-backgroundColor">
    <SectionsHero />
    <SectionsDiscover v-if="discover?.show" />
    <SectionsTrustedBy center />
    <SectionsJourney />
    <SectionsCTA />
    <SectionsBeforeAfter />
    <!-- <SectionsProducts /> -->
    <SectionsFAQ />
    <SectionsIntakeForm />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSiteTextStore } from '~/stores/siteText'

const siteTextStore = useSiteTextStore()

// Get discover section show status
const discover = computed(() => siteTextStore.getHomeText()?.discover)
</script>

<style scoped>
/* Custom styles if needed */
</style>
