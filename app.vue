<template>
  <div class="site">
    <div class="background-orbs"></div>

    <div class="container is-fluid site-container">
      <div class="columns is-variable is-6 is-multiline layout">
        <div class="column is-4 profile-column">
          <ProfileCard />
          <NavMenu />
        </div>

        <div class="column is-8 content-column">
          <main class="content-card">
            <NuxtPage />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileCard from "@/components/ProfileCard.vue";
import NavMenu from "@/components/NavMenu.vue";
</script>