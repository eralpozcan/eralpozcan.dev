<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <VueCompareImage
      class="hidden-md-and-down"
      hover
      :style="{ minWidth: '1300px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    />
    <VueCompareImage
      class="hidden-lg-and-up"
      hover
      :style="{ maxWidth: '400px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage2"
      :rightImage="rightImage2"
      :sliderPositionPercentage="sliderPosition"
    />

    <br>

    <vue-typer class="headline" :repeat="0" text="Eralp Özcan"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
    <br>
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <span>About</span>
              <span class="blue--text"> Me</span>
            </h3>
            <div>
              <p>
                I'm currently a Freelance MEVN Full Stack Software Developer. I have been developing myself in the field of Frontend,Backend since 2021. I enjoy working in the software field as I have transitioned from automation field. Between 2018-2021, I worked in the field of artificial intelligence and data processing.
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down justify-center ">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outline
            color="blue"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up justify-center ">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outline
            color="blue"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from 'vue-typer'
import VueCompareImage from 'vue-compare-image'
export default {
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s ← Eralp Özcan',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: "Eralp Ozcan's Portfolio" },
      { charset: 'utf-8' },
      { property: 'og:title', content: 'Eralp Özcan' },
      { property: 'og:site_name', content: 'Eralp Özcan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://eralpozcan' },
      {
        property: 'og:image',
        content: ''
      },
      { property: 'og:description', content: "Eralp Ozcan's Portfolio" }
    ]
  },
  components: {
    'vue-typer': VueTyper,
    VueCompareImage
  },
  data () {
    return {
      icons: [
        { href: 'https://github.com/Eralpozcan', icon: 'fab fa-github' },
        {
          href: 'https://www.linkedin.com/in/eralpozcan/',
          icon: 'fab fa-linkedin-in'
        }
      ],
      text1: ['Front-End Developer', 'Full Stack Developer', 'Software Developer']
    }
  }
}
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: #2196F3;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: #2196F3;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
</style>
