<template>
  <div class="md:h-full font-body md:hero hero-mobil relative">
    <NavBar />
    <section class="md:h-full">
      <div class="md:container px-6 md:mx-auto md:h-full flex items-center md:max-w-6xl">
        <!-- grid -->
        <div class="flex flex-wrap items-center">
          <!-- col -->
          <div class="md:w-1/2 p-4 mx-auto md:mx-0">
            <img class="object-cover h-auto w-full" src="../assets/images/illustration-mockups.svg" alt="" />
          </div>
          <div class="md:w-1/2 p-4 mx-auto md:mx-0">
            <div class="text-center md:text-left">
              <h1 class="text-white text-2xl md:text-4xl font-bold leading-snug mb-4">
                Build The Community
                <span class="block">Your Fans Will Love</span>
              </h1>
              <p class="text-gray-300 my-6 max-w-sm md:max-w-lg">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <a
                href="#"
                class="inline-block bg-gray-300 text-violet px-10 py-2 rounded-full text-sm shadow-xl hover:bg-magenta hover:text-white"
                >Register</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

  <MyFooter />
  </div>
</template>

<script>
import MyFooter from '../components/MyFooter.vue';
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar, MyFooter },
};
</script>

<style>
.hero {
  height: 100%;
  background-image: url("../assets/images/bg-desktop.svg");
  width: 100%;
  background-size: cover;
}
.hero-mobil {
  height: 100%;
  background-image: url("../assets/images/bg-mobile.svg");
  width: 100%;
  background-position: top;
  background-size: cover;
}
body,
html {
  height: 100%;
  background: hsl(257, 40%, 49%);
}
* {
  /* border: 1px solid red; */
}
</style>
