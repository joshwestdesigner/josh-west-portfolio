import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        citiEForEducation: 'work/citi-e-for-education.html',
        parisParalympicPins: 'work/paris-paralympic-pins.html',
        adidasHeatRdy: 'work/adidas-heat-rdy.html',
        starbucksPhantomFrapp: 'work/starbucks-phantom-frapp.html',
        starbucksForgetMeNot: 'work/starbucks-forget-me-not.html',
        originalSourcePackMoreIn: 'work/original-source-pack-more-in.html',
        adidasTeamWear: 'work/adidas-team-wear.html',
        cop26WouldYouRather: 'work/cop26-would-you-rather.html',
        cinchEddieStorbart: 'work/cinch-eddie-stobart.html',
      }
    }
  }
})
