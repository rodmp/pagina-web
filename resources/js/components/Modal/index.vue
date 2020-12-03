<template>
  <div>
    <BigModal
      :header="data.headerTitle"
      :isOpen="data.isOpen"
      :children="childrenBody"
      :actions="[
          { text: 'Cancel', variant: 'subtle', onClick: () => setIsOpen(false) },
          { text: 'Apply', onClick: handleApply },
      ]"
    />
  </div>
</template>
<script>

import React from "react";

export default {
  props: {
    data: {
      headerTitle: String,
      bodyTitle: String,
      isOpen: Boolean,
    }
  },
  created() {
    console.log("Modal Created");
  },
  computed: {
    childrenBody() {
      return React.createElement('div', null, this.data.bodyTitle);
    }
  },
  methods: {
    setIsOpen(isOpen) {
      this.data.isOpen = isOpen;
    },
    handleApply() {
      this.$emit('handleApply');
    }
  }
}
</script>