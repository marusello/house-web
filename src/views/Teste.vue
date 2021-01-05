<template>
  <div>
    <input
      type="file"
      id="file"
      ref="myFiles"
      class="custom-file-input"
      @change="previewFiles"
      multiple
    />
  </div>
</template>

<script>

export default {
  data() {
    return {
      files: [],
    };
  },
  methods: {
    previewFiles() {
      this.files = this.$refs.myFiles.files;
    },
  },
};
</script>