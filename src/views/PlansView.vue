<template>
  <div>
    <h1>แผนการเรียน</h1>
  </div>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" width="344">
          <v-card-title style="text-align: center; font-weight: bold; font-size: x-large">
            สถาปัตยกรรมคอมพิวเตอร์
          </v-card-title>
          <v-card-subtitle style="text-align: center; font-size: larger"
            >รหัส คพ232
          </v-card-subtitle>
          <v-spacer></v-spacer>
          <div class="text--primary" style="text-align: center">
            ครูผู้สอน : ผศ.ภานุวัฒน์ เมฆะ
          </div>

          <v-card-actions>
            <v-btn color="orange" variant="text"> สำรวจ </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show1 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show1 = !show1"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show1">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could
                deliver. You won't have time for sleeping, soldier, not with all the bed
                making you'll be doing. Then we'll go with that data file! Hey, you add a
                one and two zeros to that or we walk! You're going to do his laundry? I've
                got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" width="344"
          ><v-card-title
            style="text-align: center; font-weight: bold; font-size: x-large"
          >
            สถาปัตยกรรมคอมพิวเตอร์
          </v-card-title>
          <v-card-subtitle style="text-align: center; font-size: larger"
            >รหัส คพ232</v-card-subtitle
          >
          <div class="text--primary" style="text-align: center">
            ครูผู้สอน : ผศ.ภานุวัฒน์ เมฆะ
          </div>

          <v-card-actions>
            <v-btn color="orange" variant="text"> สำรวจ </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show2 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show2 = !show2"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could
                deliver. You won't have time for sleeping, soldier, not with all the bed
                making you'll be doing. Then we'll go with that data file! Hey, you add a
                one and two zeros to that or we walk! You're going to do his laundry? I've
                got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" width="344"
          ><v-card-title
            style="text-align: center; font-weight: bold; font-size: x-large"
          >
            สถาปัตยกรรมคอมพิวเตอร์
          </v-card-title>
          <v-card-subtitle style="text-align: center; font-size: larger"
            >รหัส คพ232</v-card-subtitle
          >
          <div class="text--primary" style="text-align: center">
            ครูผู้สอน : ผศ.ภานุวัฒน์ เมฆะ
          </div>

          <v-card-actions>
            <v-btn color="orange" variant="text"> สำรวจ </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show3 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show3 = !show3"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show3">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could
                deliver. You won't have time for sleeping, soldier, not with all the bed
                making you'll be doing. Then we'll go with that data file! Hey, you add a
                one and two zeros to that or we walk! You're going to do his laundry? I've
                got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" width="344"
          ><v-card-title
            style="text-align: center; font-weight: bold; font-size: x-large"
          >
            สถาปัตยกรรมคอมพิวเตอร์
          </v-card-title>
          <v-card-subtitle style="text-align: center; font-size: larger"
            >รหัส คพ232</v-card-subtitle
          >
          <div class="text--primary" style="text-align: center">
            ครูผู้สอน : ผศ.ภานุวัฒน์ เมฆะ
          </div>

          <v-card-actions>
            <v-btn color="orange" variant="text"> สำรวจ </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show4 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show4 = !show4"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show4">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could
                deliver. You won't have time for sleeping, soldier, not with all the bed
                making you'll be doing. Then we'll go with that data file! Hey, you add a
                one and two zeros to that or we walk! You're going to do his laundry? I've
                got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" width="344"
          ><v-card-title
            style="text-align: center; font-weight: bold; font-size: x-large"
          >
            สถาปัตยกรรมคอมพิวเตอร์
          </v-card-title>
          <v-card-subtitle style="text-align: center; font-size: larger"
            >รหัส คพ232</v-card-subtitle
          >
          <div class="text--primary" style="text-align: center">
            ครูผู้สอน : ผศ.ภานุวัฒน์ เมฆะ
          </div>

          <v-card-actions>
            <v-btn color="orange" variant="text"> สำรวจ </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show5 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show5 = !show5"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show5">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could
                deliver. You won't have time for sleeping, soldier, not with all the bed
                making you'll be doing. Then we'll go with that data file! Hey, you add a
                one and two zeros to that or we walk! You're going to do his laundry? I've
                got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" width="344"
          ><v-card-title
            style="text-align: center; font-weight: bold; font-size: x-large"
          >
            สถาปัตยกรรมคอมพิวเตอร์
          </v-card-title>
          <v-card-subtitle style="text-align: center; font-size: larger"
            >รหัส คพ232</v-card-subtitle
          >
          <div class="text--primary" style="text-align: center">
            ครูผู้สอน : ผศ.ภานุวัฒน์ เมฆะ
          </div>

          <v-card-actions>
            <v-btn color="orange" variant="text"> สำรวจ </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show6 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show6 = !show6"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show6">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could
                deliver. You won't have time for sleeping, soldier, not with all the bed
                making you'll be doing. Then we'll go with that data file! Hey, you add a
                one and two zeros to that or we walk! You're going to do his laundry? I've
                got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);
const show5 = ref(false);
const show6 = ref(false);
</script>

<style scoped>
.containercard {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 50px;
}
</style>
