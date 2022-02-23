<template>
  <div>
    <div>
      <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
      <div
        class="fixed inset-0 flex z-40 md:hidden"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="fixed inset-0 bg-gray-600 bg-opacity-75"
          aria-hidden="true"
        ></div>
        <div
          class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700"
        >
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Close sidebar</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="flex-shrink-0 flex items-center px-4">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <div class="mt-5 flex-1 h-0 overflow-y-auto">
            <nav class="px-2 space-y-1">
              <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" -->
              <a
                href="#"
                class="bg-indigo-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                <!-- Heroicon name: outline/home -->
                <svg
                  class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Dashboard
              </a>
            </nav>
          </div>
        </div>

        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>

      <!-- Static sidebar for desktop -->
      <sidebar> </sidebar>
      <div class="md:pl-64 flex flex-col flex-1">
        <main>
          <div class="py-6 pt-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1
                class="text-2xl font-semibold text-gray-900 capitalize underline"
              >
                {{ meta['Meta Data']['1. Information'] }}
              </h1>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <!-- Replace with your content -->
              <div class="py-4">
                <div id="chart">
                  <apexchart
                    type="area"
                    height="350"
                    :options="chartOptions"
                    :series="series"
                    width="1000"
                  ></apexchart>
                </div>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: { Sidebar },
  head() {
    return {
      title: {
        inner: 'Home'
      }
    }
  },
  data() {
    return {
      meta: {},
      series: [],
      chartOptions: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: []
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      }
    }
  },
  computed: {
    ...mapState('app', ['appTitle'])
  },
  mounted() {
    this.getData()
  },
  methods: {
    ...mapMutations('products', ['setStocks']),
    getData() {
      this.axios(
        'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=58EZZ1KTYL8BH2DU'
      ).then(response => {
        this.meta = response.data
        // console.log(this.meta)
        const xvalue = [] // date array
        const series = []
        const open = []
        const close = []
        const high = []
        const low = []
        const volume = []
        const chartData = response.data['Time Series (5min)']
        // this.commit('setStocks', chartData)
        Object.entries(chartData).forEach(([keyOuter, element]) => {
          if (
            keyOuter.includes('12:') ||
            keyOuter.includes('11:') ||
            keyOuter.includes('10:')
          ) {
            console.log(element)
            xvalue.push(keyOuter)
          }
        })
        Object.entries(chartData).forEach(([keyOuter, element]) => {
          if (
            keyOuter.includes('12:') ||
            keyOuter.includes('11:') ||
            keyOuter.includes('10:')
          ) {
            console.log(keyOuter)
            // eslint-disable-next-line no-unused-vars
            Object.entries(element).forEach(([key, array]) => {
              // eslint-disable-next-line no-unused-vars
              console.log(key, 'KEY', array, 'array')
              if (key.slice(3) === 'open') {
                open.push(array)
                console.log(array, 'DATA', open)
              } else if (key.slice(3) === 'close') {
                close.push(array)
              } else if (key.slice(3) === 'high') {
                high.push(array)
              } else if (key.slice(3) === 'low') {
                low.push(array)
              } else if (key.slice(3) === 'volume') {
                volume.push(array)
              }
            })
          }
        })
        series.push({
          data: low,
          name: 'Low'
        })
        series.push({
          data: high,
          name: 'high'
        })
        series.push({
          data: close,
          name: 'close'
        })
        series.push({
          data: open,
          name: 'open'
        })
        // series.push({
        //   data: volume,
        //   name: 'Volume'
        // })
        this.updateChart(xvalue, series)
        this.setStocks({
          stocks: xvalue,
          open,
          close,
          low,
          high,
          volume
        })
      })
    },
    updateChart(xvalue, series) {
      this.series = series
      this.chartOptions.xaxis.categories = xvalue
      console.log('updated')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 3rem;
  }

  .home-page-title {
    text-align: center;
  }

  .documentation-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500;
  }
}
</style>
