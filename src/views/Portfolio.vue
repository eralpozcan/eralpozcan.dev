<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span class="blue--text">Portfolio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        lazy
        max-width="1000"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="project.poster"
                :alt="project.title"
                height="230"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{project.title}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="project.dialog">
          <v-img :src="project.poster"></v-img>
          <v-card-actions class="justify-center">
            <h3 class="headline mb-0">
              <span>Technology</span>
            </h3>
          </v-card-actions>
          <v-card-actions class="justify-center">
            <v-chip color="blue" text-color="white">{{project.tech.tech1}}</v-chip>
            <v-chip color="blue" text-color="white">{{project.tech.tech2}}</v-chip>
            <v-chip color="blue" text-color="white">{{project.tech.tech3}}</v-chip>
            <v-chip color="blue" text-color="white">{{project.tech.tech4}}</v-chip>
          </v-card-actions>
          <v-card-actions class="justify-center">
            <v-btn flat large dark color="blue" :href="project.git" target="_blank">
              <v-icon left>fab fa-github</v-icon>GitHub
            </v-btn>
            <v-btn large flat dark color="blue" :href="project.demo" target="_blank">
              <v-icon left>fas fa-desktop</v-icon>Demo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Portfolio',
    titleTemplate: '%s ← Eralp Özcan',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Eralp Özcan Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios  JavaScript Web Developer Front-End Responsive'
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: 'Eralp Özcan' },
      { property: 'og:site_name', content: 'Eralp Özcan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://eralpozcan.com' },
      {
        property: 'og:image',
        content: ''
      },
      {
        property: 'og:description',
        content:
          'Eralp Özcan Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios  JavaScript Web Developer Front-End Responsive'
      }
    ]
  },
  data () {
    return {
      dialog: false,
      projects: [
        {
          dialog: false,
          title: 'MoviePal',
          git: 'https://github.com/Eralpozcan/MoviesApp',
          demo: 'https://moviepal.vercel.app/',
          tech: {
            tech1: 'Vue',
            tech2: 'JavaScript',
            tech3: 'Bootstrap',
            tech4: 'Axios'
          },
          poster: 'https://i.hizliresim.com/8r97ekp.png'
        },
        {
          dialog: false,
          title: 'Energy-Dashboard',
          git: 'https://github.com/Eralpozcan/Energy-Dashboard',
          demo: 'https://energy-dashboard.vercel.app',
          tech: {
            tech1: 'Vue',
            tech2: 'Vuetify',
            tech3: 'Bootstrap',
            tech4: 'Node.js'
          },
          poster: 'https://i.hizliresim.com/o27jxla.png'
        }
      ]
    }
  }
}
</script>

<style>
</style>
