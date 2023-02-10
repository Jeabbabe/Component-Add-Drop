<script setup>
import { RouterView } from "vue-router";
</script>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { icon: "mdi-home", title: "หน้าหลัก", route: "/" },
        { icon: "mdi-newspaper-variant", title: "ข่าว", route: "/news" },
        {
          icon: "mdi-clipboard-arrow-down-outline",
          title: "แผนการเรียน",
          route: "/plans",
        },
        {
          icon: "mdi-plus-minus-variant",
          title: "เพิ่มถอนรายวิชา",
          route: "/adddrop",
        },
      ],
    };
  },
};
</script>

<template>
  <v-app>
    <v-system-bar>
      <v-icon icon="mdi-wifi-strength-4"></v-icon>
      <v-icon icon="mdi-signal" class="ms-2"></v-icon>
      <v-icon icon="mdi-battery" class="ms-2"></v-icon>

      <span class="ms-2">3:13PM</span>
    </v-system-bar>
    <v-app-bar
      color="green"
      image="../src/assets/mju_logo_main-resize_sharpened_4x_models-DF2K.png"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, 
        rgba(0,128,0,.75), 
        rgba(0,192,0,.50)"
        >
        </v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>
        หน้าเว็บทำรายการเพิ่มถอนรายวิชา<br />มหาวิทยาลัยแม่โจ้
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <v-list flat dense nav class="py-1">
        <v-list-item-group color="primary" mandatory>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            dense
            router
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon color="green">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-title>{{ item.title }}</v-list-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid><RouterView /></v-container>
    </v-main>
  </v-app>
</template>
