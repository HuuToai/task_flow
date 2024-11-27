const admin = [
    {
        //layout bố cục
        path: "/admin",
        component: () => import("../layouts/admin.vue"),
        // thằng này là con trong layout bố cục
        children: 
        [
            {
                path: "dashboard",
                name: "admin-dashboard",
                component: () => import("../pages/admin/index.vue"),
                meta: { requiresAuth: true }, // Cần đăng nhập mới có thể vào
            },
            {
                path: "register",
                name: "users-register",
                component: () => import("../pages/admin/users/register.vue"),
                meta: { requiresAuth: true }, // Cần đăng nhập mới có thể vào
            },
            {
                path: "users",
                name: "admin-users",
                component: () => import("../pages/admin/users/index.vue"),
                meta: { requiresAuth: true }, // Cần đăng nhập mới có thể vào
            },
            {
                path: "users/edit/:id",
                name: "admin-users-edit",
                component: () => import("../pages/admin/users/edit.vue"),
            },
            {
                path: "departments",
                name: "admin-departments",
                component: () => import("../pages/admin/departments/index.vue"),
                meta: { requiresAuth: true }, // Cần đăng nhập mới có thể vào
            },
        ]
    },
    {
        // Định nghĩa route riêng cho trang login (không dùng layout chung)
        path: "/admin/login",
        name: "admin-login",
        component: () => import("../pages/admin/users/login.vue"),
    }
];

export default admin;