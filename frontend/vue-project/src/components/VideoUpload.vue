<template>
  <div>
    <input type="file" @change="uploadVideo">
  </div>
</template>

<script>
export default {
  methods: {
    uploadVideo(event){
      const file = event.target.files[0];
      const formData = new FormData();

      formData.append('video', file);
      this.$axios.post('')
    }
  }
}
</script>