<template>
  <div>
    <a href="#section2">Go to Section 2</a>
    <div id="section2" style="margin-top: 1000px">Section 2</div>
    <h1>{{ sectionTitle }}</h1>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const sectionTitle = ref("");

const smoothScroll = (targetHash) => {
  const element = document.querySelector(targetHash);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - 70; // Offset for fixed navbar height (adjust as needed)
    const duration = 2000; // Duration in milliseconds
    let start = null;

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1); // Ensures progressRatio is between 0 and 1
      window.scrollTo(
        0,
        startPosition + distance * easeInOutQuad(progressRatio)
      );
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    });

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
  }
};

onMounted(() => {
  const updateSectionTitle = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      sectionTitle.value =
        element.textContent || element.getAttribute("id") || "Section";
    } else {
      sectionTitle.value = "";
    }
  };

  watch(
    () => router.currentRoute.value,
    (to, from) => {
      if (to.hash) {
        setTimeout(() => {
          smoothScroll(to.hash);
          updateSectionTitle(to.hash);
        }, 100);
      }
    },
    { immediate: true }
  );

  const handleAnchorClick = (e) => {
    e.preventDefault();
    const targetHash = e.target.getAttribute("href");
    if (targetHash) {
      smoothScroll(targetHash);
      updateSectionTitle(targetHash);
    }
  };

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", handleAnchorClick);
  });

  onBeforeUnmount(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.removeEventListener("click", handleAnchorClick);
    });
  });
});
</script>

<style scoped>
html {
  scroll-behavior: auto; /* Disable default smooth scrolling */
}
body {
  height: 2000px; /* Just to make the page scrollable */
}
</style>
