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
      this.$axios.post('http://localhost:3000/upload', formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>