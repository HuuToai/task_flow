<template>
  <TheHeader />
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-sm-3 d-none d-sm-flex">
        <a-list bordered style="width: 100%">
          <TheMenu />
          <template #header>
            <div>BẢNG ĐIỀU KHIỂN</div>
          </template>
        </a-list>
      </div>
      <div class="col-12 col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheMenu from "../components/TheMenu.vue";
import { message } from "ant-design-vue";

export default {
  created() {
    const token = localStorage.getItem("accessToken");

    if (!token) {
        message.warning("Bạn chưa đăng nhập, vui lòng đăng nhập!");

      this.$router.push({ name: "admin-login" }); // Điều hướng về login nếu không có token
    }
  },
  components: {
    TheHeader,
    TheMenu,
  },
};
</script>