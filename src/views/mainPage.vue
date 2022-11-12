<template>
  <headerBlock />
  <presentationBlock />
  <aboutUsBlock />
  <procuringBlock />
  <connectionBlock />
  <calculatorBlock />
  <instructionBlock />
  <reportBlock />
  <footerBlock />
</template>

<script>

import headerBlock from '@/components/headerBlock.vue';
import presentationBlock from '@/components/presentationBlock.vue'
import aboutUsBlock from '@/components/aboutUsBlock.vue';
import procuringBlock from '@/components/procuringBlock.vue';
import connectionBlock from '@/components/connectionBlock.vue';
import calculatorBlock from '@/components/calculatorBlock.vue';
import instructionBlock from '@/components/instructionBlock.vue';
import reportBlock from '@/components/reportBlock.vue';
import footerBlock from '@/components/footerBlock.vue';

export default {

  name: 'mainPage',
  components: {
    headerBlock,
    presentationBlock,
    aboutUsBlock,
    procuringBlock,
    connectionBlock,
    calculatorBlock,
    instructionBlock,
    reportBlock,
    footerBlock,
  },

}

</script>
