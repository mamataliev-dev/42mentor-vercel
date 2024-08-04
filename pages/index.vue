<template>
  <div>
    <header>
      <NavBar />

      <div
        class="pt-20 min-h-[700px] flex flex-col justify-center items-center section-margin"
      >
        <div class="flex flex-col items-center">
          <h1 class="text-6xl font-semibold tracking-tighter">
            Land job at FAANG
          </h1>

          <p
            class="max-w-[768px] text-center font-medium text-2xl mt-4 tracking-tight mb-8"
          >
            42Mentor is a mentorship program designed to help software engineers
            land jobs at FAANG-level companies.
          </p>

          <ULink :to="formLink">
            <button
              class="text-white text-[17px] bg-blue rounded-md h-10 px-[18px]"
            >
              Get Started
            </button>
          </ULink>
        </div>

        <div class="flex items-center gap-x-10 mt-14">
          <img src="~/assets/img/icons/facebook.svg" alt="Facebook" />
          <img src="~/assets/img/icons/apple.svg" alt="Apple" />
          <img src="~/assets/img/icons/amazon-i.svg" alt="Amazon" />
          <img src="~/assets/img/icons/netflix.svg" alt="Netflix" />
          <img src="~/assets/img/icons/google-i.svg" alt="Google" />
        </div>
      </div>
    </header>

    <main>
      <section class="wrapper section-margin">
        <h1 class="title margin-block">Mentorship tracks</h1>

        <div class="flex justify-center gap-[30px]">
          <div class="mentorship__block">
            <h2 class="mentorship__block_title">iOS</h2>
            <p class="mentorship__block_subtitle">
              Elevate Your Expertise in Advanced iOS Development
            </p>

            <ULink :to="formLink">
              <button
                class="text-black text-sm bg-none border border-black rounded-md h-[30px] px-2.5 mt-5 transition-all duration-200 hover:bg-black hover:text-white"
              >
                Get Started
              </button>
            </ULink>
          </div>

          <div class="mentorship__block">
            <h2 class="mentorship__block_title">Backend</h2>
            <p class="mentorship__block_subtitle">
              Deep Dive into High-Level Back-End Development
            </p>

            <ULink :to="formLink">
              <button
                class="text-black text-sm bg-none border border-black rounded-md h-[30px] px-2.5 mt-5 transition-all duration-200 hover:bg-black hover:text-white"
              >
                Get Started
              </button>
            </ULink>
          </div>
        </div>

        <hr class="max-w-[830px] bg-cgray-bg mx-auto mt-[30px]" />

        <div class="flex flex-col items-center justify-center mt-[30px]">
          <h1 class="text-[36px] font-bold tracking-tighter mb-5">
            Coming soon
          </h1>

          <div class="mentorship__block">
            <h2 class="mentorship__block_title">Frontend</h2>
            <p class="mentorship__block_subtitle">
              Refine Your Expertise in Front-End Development
            </p>
          </div>
        </div>
      </section>
      <section class="wrapper section-margin">
        <h1 class="title margin-block">Curriculum</h1>

        <div class="flex justify-center">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div
              v-for="(item, index) in curriculum"
              :key="index"
              class="curriculum__block"
            >
              <h2 class="curriculum__block_title">{{ item.title }}</h2>

              <div class="curriculum__block_week">
                {{ item.duration }} weeks
              </div>

              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="wrapper section-margin">
        <h1 class="title margin-block">Mentors</h1>

        <div class="mentors">
          <div class="mentors__block">
            <img
              class="w-52 h-52 rounded-full"
              src="~/assets/img/jpg/mentor1.jpeg"
              alt="Darkhonbek Mamataliev"
            />

            <div class="mt-8">
              <div class="flex items-center justify-center gap-2">
                <h2 class="mentors__block_title">Darkhonbek Mamataliev</h2>

                <ULink to="https://www.linkedin.com/in/darhonbek/">
                  <img src="~/assets/img/icons/linkedin.svg" alt="LinkedIn" />
                </ULink>
              </div>

              <p class="mentors__block_subtitle">
                Senior iOS Engineer at TikTok, ex Uber
              </p>
            </div>

            <div class="flex flex-col items-center justify-center gap-4 mt-7">
              <img src="~/assets/img/icons/uber.svg" alt="Uber" />
              <img src="~/assets/img/icons/tik-tok.svg" alt="Tik Tok" />
            </div>
          </div>

          <div class="mentors__block">
            <img
              class="w-52 h-52 rounded-full"
              src="~/assets/img/jpg/mentor2.jpeg"
              alt="Azimjon Pulatov"
            />

            <div class="mt-8">
              <div class="flex items-center justify-center gap-2">
                <h2 class="mentors__block_title">Azimjon Pulatov</h2>

                <ULink to="https://www.linkedin.com/in/azimjon-pulatov/">
                  <img src="~/assets/img/icons/linkedin.svg" alt="LinkedIn" />
                </ULink>
              </div>

              <p class="mentors__block_subtitle">
                Backend Engineer at Google, ex Amazon, ex Meta
              </p>
            </div>

            <div class="flex items-center gap-x-10 mt-7 mb-5">
              <img src="~/assets/img/icons/google.svg" alt="Google" />
              <img src="~/assets/img/icons/meta.svg" alt="Meta" />
            </div>

            <img src="~/assets/img/icons/amazon.svg" alt="Amazon" />
          </div>
        </div>
      </section>
      <section class="wrapper section-margin">
        <h1 class="title margin-block">Alumni</h1>

        <div class="alumni">
          <div class="alumni__block">
            <img
              class="w-[370px] h-[300px] rounded-xl"
              src="~/assets/img/jpg/alumni.jpg"
              alt="Alumni"
            />

            <div class="flex flex-col">
              <p>
                Is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>

              <div class="mt-5">
                <ULink
                  to="https://www.linkedin.com"
                  class="flex items-start gap-2 mb-1"
                >
                  <h2 class="text-blue text-lg font-medium">Anvar Kayumov</h2>
                  <img src="~/assets/img/icons/linkedin.svg" alt="LinkedIn" />
                </ULink>

                <span class="text-cgray">Software Engineer at Meta</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="wrapper section-margin">
        <h1 class="title margin-block">Frequently asked questions</h1>

        <div class="faq__block">
          <div
            v-for="(item, index) in faq"
            :key="index"
            class="faq__ques"
            @click="toggleQuestion(index)"
          >
            <div class="faq__ques_top flex justify-between items-center">
              <h3 class="faq__ques_title">{{ item.question }}</h3>
              <img
                :class="
                  openQuestionIndex === index ? 'transform rotate-180' : ''
                "
                src="~/assets/img/icons/arrow.svg"
                alt="Open"
              />
            </div>

            <div
              :class="openQuestionIndex === index ? 'block' : 'hidden'"
              class="mt-4"
            >
              <p>{{ item.answer }}</p>
            </div>
          </div>

          <ULink
            class="flex items-center ml-auto gap-2 mt-10"
            to="https://subsequent-meteoroid-01d.notion.site/42Mentor-FAQ-b6fbde2bef1d44c7929c0d10bb895480"
          >
            <span class="text-[#0A85D1]">Learn more</span>

            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.61359 11L5.73859 10.1364L9.34087 6.53409H0.0113215V5.28409H9.34087L5.73859 1.69318L6.61359 0.818182L11.7045 5.90909L6.61359 11Z"
                fill="#0A85D1"
              />
            </svg>
          </ULink>
        </div>
      </section>
      <section class="wrapper mb-28">
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-6xl font-semibold tracking-tighter">
            Get started for now!
          </h1>

          <p class="font-semibold text-2xl mt-4">
            Launch Your FAANG Journey Today
          </p>

          <ULink class="mt-10" :to="formLink">
            <button
              class="text-white text-[17px] bg-black rounded-md h-10 px-[18px]"
            >
              Get Started
            </button>
          </ULink>
        </div>
      </section>
    </main>

    <footer class="py-14 border-t border-[#E5E5E5]">
      <div class="wrapper flex flex-col items-center justify-center">
        <ULink to="/">
          <img src="~/assets/img/icons/logo.svg" alt="42Mentor" />
        </ULink>

        <ul class="flex justify-between items-center mt-10">
          <li>
            <div class="flex items-center gap-x-5 font-semibold">
              <a href="#">Program</a>
              <a href="#">Mentors</a>
              <a href="#">Alumni</a>
              <a href="#">FAQ</a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup>
let openQuestionIndex = ref(null);
const faq = [
  {
    question: "What is the program?",
    answer:
      "It is a mentorship program designed to help software engineers get a job in companies like FAANG.",
  },
  {
    question: "Who can apply?",
    answer:
      "We encourage everyone with software engineering experience to apply.",
  },
  {
    question: "How long does the program last?",
    answer:
      "Learning phase lasts 4–6 months, depending on your progress. Application phase lasts until you land an offer.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Our fee is 10% of your pre-tax monthly base salary (excluding bonuses and stocks) for 24 months. You only pay if you successfully land the job you're targeting. In addition we charge $1,000 fee in the beginning of the program. Only after you pass trial period and accepted.",
  },
  {
    question: "When does the program start?",
    answer: "Summer 2024 batch will start in August 2024.",
  },
];
const curriculum = [
  {
    title: "Algorithms",
    duration: 12,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque perferendis asperiores, iusto magnam ex quia.",
  },
  {
    title: "System Design",
    duration: 4,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque perferendis asperiores, iusto magnam ex quia.",
  },
  {
    title: "Domain Specific Coding",
    duration: 3,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque perferendis asperiores, iusto magnam ex quia.",
  },
  {
    title: "Behavioral & Resume",
    duration: 3,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque perferendis asperiores, iusto magnam ex quia.",
  },
];
const formLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSdWQNp1RxpRn2DpH0F0fLCq5if_wQmABRpFe0G1iPXrY4OiUA/viewform";

const toggleQuestion = (index) => {
  openQuestionIndex.value = openQuestionIndex.value === index ? null : index;
};
</script>

<style lang="scss" scoped>
.section-margin {
  @apply mb-[120px];
}

.margin-block {
  @apply mb-10;
}

.title {
  @apply text-[45px] font-bold tracking-tighter text-center;
}

.mentorship {
  &__block {
    @apply max-w-[400px] bg-cgray-bg rounded-xl py-[30px] px-[25px];

    &_title {
      @apply text-[26px] font-semibold tracking-tight leading-normal;
    }

    &_subtitle {
      @apply mt-1;
    }
  }
}

.curriculum {
  &__block {
    @apply max-w-[450px] bg-cgray-bg rounded-xl px-[25px] pt-[25px] pb-[35px];

    &_title {
      @apply text-[26px] font-semibold tracking-tight leading-normal mb-[30px];
    }

    &_week {
      @apply rounded-xl px-6 py-1 inline-block h-[35px] font-medium border border-cgray mb-[15px];
    }
  }
}

.mentors {
  @apply flex justify-center gap-10;

  &__block {
    @apply w-[350px] bg-cgray-bg pt-7 pb-8 rounded-xl flex flex-col items-center justify-center;

    &_title {
      @apply text-[24px] font-semibold tracking-tight;
    }

    &_subtitle {
      @apply max-w-[232px] text-center mx-auto mt-2;
    }
  }
}

.alumni {
  @apply flex justify-center;

  &__block {
    @apply max-w-[800px] flex items-start  gap-x-5 p-5 bg-cgray-bg rounded-xl;
  }
}

.faq {
  &__block {
    @apply flex flex-col gap-5;
  }

  &__ques {
    @apply border-b border-cgray pb-3 cursor-pointer;

    &_top {
      @apply flex justify-between items-center;
    }

    &_title {
      @apply text-lg font-medium tracking-tight;
    }
  }
}
</style>
