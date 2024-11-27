<template>
  <section class="bg-light p-3 p-md-4 p-xl-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-xxl-11">
          <div class="card border-light-subtle shadow-sm">
            <div class="row g-0">
              <div class="col-12 col-md-6">
                <img
                  class="img-fluid rounded-start w-100 h-100 object-fit-cover"
                  loading="lazy"
                  src="../../../assets/loginbackground.jpg"
                  alt="Chào mừng bạn đến với hệ thống quản lý dự án"
                />
              </div>
              <div
                class="col-12 col-md-6 d-flex align-items-center justify-content-center"
              >
                <div class="col-12 col-lg-11 col-xl-10">
                  <div class="card-body p-3 p-md-4 p-xl-5">
                    <div class="row">
                      <div class="col-12">
                        <div class="mb-5">
                          <div class="text-center mb-4">
                            <a href="#!">
                              <img
                                src="../../../assets/logo-back.png"
                                alt="BootstrapBrain Logo"
                                width="175"
                                height="57"
                              />
                            </a>
                          </div>
                          <h4 class="text-center">
                            Chào mừng bạn đến với hệ thống quản lý dự án
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="d-flex gap-3 flex-column">
                          <a href="#!" class="btn btn-lg btn-outline-dark">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-google"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                              />
                            </svg>
                            <span class="ms-2 fs-6">Đăng nhập bằng Google</span>
                          </a>
                        </div>
                        <p class="text-center mt-4 mb-5">Hoặc đăng nhập bằng</p>
                      </div>
                    </div>
                    <form @submit.prevent="loginUsers">
                      <div class="row gy-3 overflow-hidden">
                        <div class="col-12">
                          <div class="form-floating mb-3">
                            <a-input
                              placeholder="Email"
                              allow-clear
                              required
                              id="email"
                              v-model:value="email"
                              :class="{
                                'input-danger': errors.email,
                              }"
                            />
                            <div class="w-100"></div>
                            <ErrorMessage :message="errors.email" />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-floating mb-3">
                            <a-input-password
                              placeholder="Mật khẩu"
                              allow-clear
                              id="password"
                              v-model:value="password"
                              :class="{
                                'input-danger': errors.password,
                              }"
                            />
                            <div class="w-100"></div>
                            <ErrorMessage :message="errors.password" />
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="d-grid">
                            <button class="btn btn-dark btn-lg" type="submit">
                              Đăng nhập
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div class="row">
                      <div class="col-12">
                        <div
                          class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5"
                        >
                          <a
                            href="#!"
                            class="link-secondary text-decoration-none"
                            >Tạo tài khoản</a
                          >
                          <a
                            href="#!"
                            class="link-secondary text-decoration-none"
                            >Quên mật khẩu?</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
import { defineComponent, reactive, toRefs } from "vue";
import { message } from "ant-design-vue";
// import { useMenu } from "../../../stores/use-menu.js";
import axios from "axios";
import { useErrorStore } from "../../../stores/use-erorrs.js";
import ErrorMessage from "../../../components/ErrorMessage.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: { ErrorMessage },

  setup() {
    const router = useRouter();

    const token = localStorage.getItem("accessToken");

    if (token) {
      // Nếu có token, điều hướng về trang quản lý người dùng hoặc dashboard
      router.push({ name: "admin-dashboard" });
    }
    const errorStore = useErrorStore();
    const errors = computed(() => errorStore.errors);
    const users = reactive({
      email: "",
      password: "",
    });
    const loginUsers = () => {
      errorStore.clearAllErrors(); // Xóa toàn bộ lỗi trước đó

      // Kiểm tra email
      if (!users.email) {
        errorStore.setError("email", "Vui lòng nhập vào Email!");
      } else if (!/\S+@\S+\.\S+/.test(users.email)) {
        errorStore.setError("email", "Email không hợp lệ!");
      }
      // Kiểm tra mật khẩu
      if (!users.password) {
        errorStore.setError("password", "Vui lòng nhập vào mật khẩu!");
      } else if (users.password.length < 8) {
        errorStore.setError("password", "Mật khẩu phải có ít nhất 8 ký tự!");
      }

      if (Object.keys(errors.value).length === 0) {
        axios
          .post("http://127.0.0.1:8000/api/login", users)
          .then((response) => {
                console.log(response.data);
            if (
              response.data.response_code === "200" 
            ) {
              // Lưu token và thông tin người dùng
              localStorage.setItem("accessToken", response.data.access_token);
              localStorage.setItem(
                "userInfo",
                JSON.stringify(response.data.user_infor)
              );

              // Thông báo thành công
              message.success(response.data.message || "Đăng nhập thành công!");
              router.push({ name: "admin-dashboard" });

            //   // Chuyển hướng người dùng
            //   const redirectUrl =
            //     localStorage.getItem("redirectUrl") || "/dashboard";
            //   localStorage.removeItem("redirectUrl");
            //   this.$router.push(redirectUrl);
            }
          })
          .catch((error) => {
            if (error.response && error.response.data.errors) {
              // Lấy các lỗi từ phản hồi server
              const serverErrors = error.response.data.errors;

              // Duyệt qua từng trường bị lỗi và set vào errorStore
              Object.keys(serverErrors).forEach((field) => {
                // Lấy thông báo lỗi đầu tiên từ mảng lỗi của trường
                const errorMessage = serverErrors[field][0];
                errorStore.setError(field, errorMessage); // Đặt lỗi vào store
              });
            } else {
              // Xử lý lỗi chung nếu server không trả về cấu trúc lỗi mong đợi
              message.error(error.response.data.message);
            }
          });
      }
    };
    return {
      ...toRefs(users),
      errors,
      loginUsers,
    };
  },
});
</script>
  
<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #fff;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

.login-link {
  text-align: center;
  margin-top: 15px;
}
</style>