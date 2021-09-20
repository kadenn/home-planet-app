<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <p>
      Home Planet App is a one-page application with a list of people and the
      details about their related home planet.
      <br />
      Click on the planet name to display more information regarding the planet.
      <br />
      You can sort the table by each column or filter by searching the person’s
      name.
    </p>
  </div>
</template>

<style scoped>
h1 {
  margin-top: 40px;
}

@media only screen and (min-width: 425px) {
  p {
    font-size: 20px;
    margin-bottom: 50px;
  }
}

@media only screen and (max-width: 425px) {
  h1 {
    font-size: 24px;
  }

  p {
    font-size: 15px;
    margin-bottom: 20px;
  }
}
</style>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String,
  },
};
</script>
