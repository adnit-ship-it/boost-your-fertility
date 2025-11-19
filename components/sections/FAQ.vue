<template>
  <UiSectionWrapper class="py-20 md:py-32 bg-backgroundColor">
    <UiSectionContainer class="text-center">
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
      }" class="font-semibold text-[28px] md:text-[32px] lg:text-[36px] text-bodyColor mb-12">
        {{ faq?.title || 'Frequently Asked Questions' }}
      </h2>

      <div class="w-full space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border-b border-bodyColor"
        >
          <button
            @click="toggleFAQ(index)"
            class="w-full flex items-center justify-between py-6 text-left transition-colors duration-200"
          >
            <span class="font-medium text-[16px] md:text-[18px] text-bodyColor pr-4">
              {{ faq.question }}
            </span>
            <div class="flex-shrink-0">
              <svg 
                :class="[
                  'w-5 h-5 text-gray-500 transition-transform duration-300',
                  faq.isOpen ? 'rotate-45' : ''
                ]"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </button>
          
          <div 
            v-show="faq.isOpen"
            class="overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div class="pb-6 pr-4">
              <p class="text-[14px] text-left md:text-[16px] text-gray-600 leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UiSectionContainer>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSiteTextStore } from '~/stores/siteText'

const siteTextStore = useSiteTextStore()

// Initialize site text once for this component
const faq = computed(() => siteTextStore.getHomeText()?.faq)

const openStates = ref<Record<number, boolean>>({})

const faqs = computed(() => {
  const siteTextFaqs = faq.value?.questions || []
  return siteTextFaqs.map((faqItem, index) => ({
    question: faqItem.question,
    answer: faqItem.answer,
    isOpen: openStates.value[index] || false
  }))
})

const toggleFAQ = (index: number) => {
  openStates.value[index] = !openStates.value[index]
}
</script> 