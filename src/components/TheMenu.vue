<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
  >
    <a-menu-item key="admin-dashboard">
      <router-link
        class="text-decoration-none"
        :to="{ name: 'admin-dashboard' }"
      >
        <span>
          <HomeOutlined class="me-1" />
          Trang chủ
        </span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="admin-users">
      <router-link class="text-decoration-none" :to="{ name: 'admin-users' }">
        <span>
          <UserOutlined class="me-1" />
          Tài Khoản
        </span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="admin-departments">
      <router-link
        class="text-decoration-none"
        :to="{ name: 'admin-departments' }"
      >
        <span>
          <ApartmentOutlined class="me-1" />
          Quản lý phòng ban
        </span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="admin-projects">
      <router-link
        class="text-decoration-none"
        :to="{ name: 'admin-projects' }"
      >
        <span>
          <i class="fa-solid fa-list-check"></i>
          Quản lý Dự án
        </span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>


<script>
import { defineComponent } from 'vue'
import {
  HomeOutlined,
  UserOutlined,
  ApartmentOutlined,
} from '@ant-design/icons-vue'
import { storeToRefs } from 'pinia'
import { useMenu } from '../stores/use-menu.js'
export default defineComponent({
  setup() {
    const store = useMenu()

    return {
      ...storeToRefs(store),
    }
  },
  components: {
    HomeOutlined,
    UserOutlined,
    ApartmentOutlined,
  },
})
</script>


