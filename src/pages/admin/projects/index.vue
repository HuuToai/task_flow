<template>

  </template>
  
  <script setup>

  // 1. Khai báo các biến reactive hoặc ref
  const departments = reactive({
    code: '',
    description: '',
  });
  
  // 2. Khai báo các store và các đối tượng ngoài
  const router = useRouter();
  const errorStore = useErrorStore();
  const axiosStore = useAxiosStore();
  
  // 3. Khai báo computed properties
  const errors = computed(() => errorStore.errors);
  
  // 4. Lifecycle hook: onMounted
  onMounted(() => {
    console.log('Component has been mounted.');
  });
  
  // 5. Watchers: Theo dõi các thay đổi
  watch(departments, (newVal) => {
    console.log('Departments data changed:', newVal);
  });
  
  // 6. Khai báo methods và các hành động
  const createDepartmenst = () => {
    errorStore.clearAllErrors(); // Xóa tất cả lỗi trước khi gửi dữ liệu
  
    axiosStore.axiosInstance
      .post('/departments/create', departments)
      .then((response) => {
        if (response.status === 201) {
          message.success(response.data.message); // Thông báo thành công
          router.push({ name: 'admin-departments' }); // Chuyển hướng đến trang danh sách
        }
      })
      .catch((error) => {
        if (error.response && error.response.data.errors) {
          const serverErrors = error.response.data.errors;
          Object.keys(serverErrors).forEach((field) => {
            const errorMessage = serverErrors[field][0];
            errorStore.setError(field, errorMessage); // Xử lý lỗi từ server
          });
        } else {
          message.error(error.response.data.message); // Thông báo lỗi chung
        }
      });
  };
  
  // 7. Sử dụng các helper hoặc phương thức khác
  const token = localStorage.getItem('accessToken');
  if (token) {
    axiosStore.initializeAxios(token); // Khởi tạo axios với token nếu có
  }
  
  </script>
  
  <style scoped>
  /* Định nghĩa các kiểu dáng cho component */
  .error-messages {
    color: red;
  }
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
  }
  </style>
  