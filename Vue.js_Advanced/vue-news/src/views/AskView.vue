<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit("start:spinner");

    setTimeout(() => {
      this.$store
        .dispatch("FETCH_ASKS")
        .then(() => {
          bus.$emit("end:spinner");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};
</script>

<style scoped></style>
