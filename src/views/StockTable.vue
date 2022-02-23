<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
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
          class="
            relative
            flex-1 flex flex-col
            max-w-xs
            w-full
            pt-5
            pb-4
            bg-indigo-700
          "
        >
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              class="
                ml-1
                flex
                items-center
                justify-center
                h-10
                w-10
                rounded-full
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-white
              "
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
                class="
                  bg-indigo-800
                  text-white
                  group
                  flex
                  items-center
                  px-2
                  py-2
                  text-base
                  font-medium
                  rounded-md
                "
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
      <div class="md:pl-64 flex flex-col flex-1 pt-16">
        <main>
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="
                  py-2
                  align-middle
                  inline-block
                  min-w-full
                  sm:px-6
                  lg:px-8
                "
              >
                <div
                  class="
                    shadow
                    overflow-hidden
                    border-b border-gray-200
                    sm:rounded-lg
                  "
                >
                  <h1
                    class="text-2xl font-semibold text-gray-900 capitalize underline pl-24"
                  >
                    Intraday Stock Table
                  </h1>
                  <table
                    v-for="stock in stocks"
                    :key="stock"
                    class="min-w-full divide-y divide-gray-200"
                  >
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          scope="row"
                          class="
                            px-6
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-800
                            uppercase
                            tracking-wider
                          "
                        >
                          {{ stock }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- Odd row -->
                      <tr class="bg-red-100">
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          Open
                        </th>
                        <td
                          v-for="item in open"
                          :key="item"
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm
                            font-medium
                            text-gray-900
                          "
                        >
                          {{ item }}
                        </td>
                      </tr>
                      <tr class="bg-yellow-100">
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          Close
                        </th>
                        <td
                          v-for="item in close"
                          :key="item"
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm
                            font-medium
                            text-gray-900
                          "
                        >
                          {{ item }}
                        </td>
                      </tr>
                      <tr class="bg-blue-100">
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          Low
                        </th>
                        <td
                          v-for="item in low"
                          :key="item"
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm
                            font-medium
                            text-gray-900
                          "
                        >
                          {{ item }}
                        </td>
                      </tr>
                      <tr class="bg-green-100">
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          HIGH
                        </th>
                        <td
                          v-for="item in high"
                          :key="item"
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm
                            font-medium
                            text-gray-900
                          "
                        >
                          {{ item }}
                        </td>
                      </tr>
                      <tr class="bg-purple-100">
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          Volume
                        </th>
                        <td
                          v-for="item in volume"
                          :key="item"
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm
                            font-medium
                            text-gray-900
                          "
                        >
                          {{ item }}
                        </td>
                      </tr>

                      <!-- More people... -->
                    </tbody>
                  </table>
                </div>
              </div>
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
  computed: {
    ...mapState('products', [
      'stocks',
      'open',
      'close',
      'low',
      'high',
      'volume'
    ]),
    ...mapState('app', ['networkOnLine']),
    ...mapMutations('products', ['setStocks'])
  }
}
</script>

<style></style>
