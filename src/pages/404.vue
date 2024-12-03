<template>
    <div class="not-found">
      <h1>404 - Trang không tồn tại</h1>
      <p>Xin lỗi, chúng tôi không tìm thấy trang bạn đang tìm kiếm.</p>
      <router-link to="/" class="go-home">Quay về trang chủ</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 50px;
  }
  .not-found h1 {
    font-size: 2.5rem;
    color: #ff6b6b;
  }
  .not-found p {
    font-size: 1.2rem;
    margin: 20px 0;
  }
  .go-home {
    display: inline-block;
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  .go-home:hover {
    background-color: #45a049;
  }
  </style>
  