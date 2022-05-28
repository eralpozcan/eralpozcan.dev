<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">
                  Dec 2021
                </div>
                <div class="caption font-weight-bold blue--text">Feb 2021</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Full Stack Web Development Bootcamp </strong>
                <div class="caption mb-2">Patika.Dev</div>
                <div class="caption mb-2">MEVN Stack</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">June 2022</div>
                <div class="caption font-weight-bold blue--text">June 2017</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Business Administration</strong>
                <div class="caption mb-2">Anadolu University</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">June 2019</div>
                <div class="caption font-weight-bold blue--text">June 2013</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Mechatronics Engineering </strong>
                <div class="caption mb-2">Karabuk University</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4">Experience</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">
                  Dec 2020 -
                </div>
                <div class="caption font-weight-bold blue--text">Present</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Freelance Software Developer</strong>
                <div class="caption mb-2">Remote</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">
                  Jun 2017 -
                </div>
                <div class="caption font-weight-bold blue--text">Aug 2017</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Mechatronic Engineer - Intern</strong>
                <div class="caption mb-2">Arcelik A.S</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">Jun 2016</div>
                <div class="caption font-weight-bold blue--text">Aug 2016</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Mechatronic Engineer - Intern</strong>
                <div class="caption mb-2">Hexagon Studio</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span class="blue--text">Skills</span>
        </h2>
        <br />
        <strong>Vue</strong>
        <v-progress-linear
          v-model="buffer1"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
        <strong>Nuxt</strong>
        <v-progress-linear
          v-model="buffer2"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
        <strong>HTML/CSS</strong>
        <v-progress-linear
          v-model="buffer3"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
        <strong>JavaScript</strong>
        <v-progress-linear
          v-model="buffer4"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
      </v-flex>
    </v-layout>
  </v-layout>

</template>

<script>
export default {
  metaInfo: {
    title: 'Resume',
    titleTemplate: '%s ← Eralp Özcan',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Vue Nuxt HTML CSS JavaScript Coding Skills Resume Work Web Developer Front-End'
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: 'Eralp Özcan' },
      { property: 'og:site_name', content: 'Eralp Özcan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://eralpozcan.com' },
      {
        property: 'og:image',
        content: 'https://i.imgur.com/Dcz2PGx.jp'
      },
      {
        property: 'og:description',
        content:
          'Vue Nuxt HTML CSS JavaScript Coding Skills Resume Work Web Developer Front-End'
      }
    ]
  },
  data () {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      bufferValue: 100,
      interval: 0
    }
  },
  mounted () {
    this.startBuffer()
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    startBuffer () {
      this.interval = setInterval(() => {
        this.buffer1 = 75
        this.buffer2 = 25
        this.buffer3 = 60
        this.buffer4 = 60
        this.buffer5 = 90
        this.buffer6 = 70
      }, 800)
    }
  }
}
</script>
<style></style>
