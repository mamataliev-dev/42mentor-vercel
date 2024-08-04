<template>
  <nav class="fixed top-0 w-full z-50 bg-white">
    <ul
      :class="isVisible ? 'border-b border-b-gray-bg' : ''"
      class="wrapper flex justify-between items-center py-4 transition-all duration-100"
    >
      <li>
        <ULink to="/">
          <img src="~/assets/img/icons/logo.svg" alt="42Mentor" />
        </ULink>
      </li>

      <li>
        <div class="flex items-center gap-x-5 font-semibold">
          <a href="#">Program</a>
          <a href="#">Mentors</a>
          <a href="#">Alumni</a>
          <a href="#">FAQ</a>
        </div>
      </li>

      <li>
        <ULink
          to="https://docs.google.com/forms/d/e/1FAIpQLSdWQNp1RxpRn2DpH0F0fLCq5if_wQmABRpFe0G1iPXrY4OiUA/viewform"
        >
          <button
            class="text-white text-[15px] bg-black rounded-md h-[35px] px-[18px]"
          >
            Get Started
          </button>
        </ULink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const isVisible = ref(false);

const handleScroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  isVisible.value = scrollTop > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped></style>
