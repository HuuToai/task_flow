<template>
  <div ref="ganttContainer"></div>
  <!-- Thẻ `div` là vùng chứa biểu đồ Gantt. 
       Tham chiếu tới `div` này được lưu bằng `ref="ganttContainer"` để dễ truy cập. -->
</template>

<script>
import { gantt } from 'dhtmlx-gantt'
// Import thư viện DHTMLX Gantt để tạo biểu đồ Gantt.

export default {
  props: {
    tasks: {
      // Thuộc tính `tasks` nhận dữ liệu từ component cha.
      type: Object,
      // Kiểu dữ liệu của `tasks` phải là một đối tượng.
      default() {
        // Cung cấp giá trị mặc định khi không có dữ liệu được truyền vào.
        return { data: [], links: [] }
        // `data` chứa danh sách nhiệm vụ và `links` chứa liên kết giữa các nhiệm vụ.
      },
    },
  },

  mounted: function () {
    // Phương thức `mounted` chạy sau khi component được gắn vào DOM.
    gantt.plugins({
      critical_path: true, // Kích hoạt hiển thị đường găng.
    })
    gantt.plugins({
      drag_timeline: true, // Cho phép kéo timeline.
    })
    gantt.plugins({
      click_drag: true, // Kéo các nhiệm vụ bằng cách click & kéo.
    })
    gantt.plugins({
      fullscreen: true, // Hỗ trợ chế độ toàn màn hình.
    })
    gantt.plugins({
      keyboard_navigation: true, // Điều hướng bằng bàn phím.
    })
    gantt.plugins({
      multiselect: true, // Cho phép chọn nhiều nhiệm vụ.
    })
    gantt.plugins({
      quick_info: true, // Hiển thị thông tin nhanh của nhiệm vụ.
    })
    gantt.plugins({
      tooltip: true, // Hiển thị tooltip trên nhiệm vụ.
    })
    gantt.plugins({
      undo: true, // Kích hoạt tính năng hoàn tác.
    })
    gantt.plugins({
      marker: true, // Hiển thị các mốc thời gian (marker).
    })
    gantt.config.date_format = '%Y-%m-%d'
    // Định dạng ngày được sử dụng trong biểu đồ là `YYYY-MM-DD`.

    gantt.init(this.$refs.ganttContainer)
    // Khởi tạo biểu đồ Gantt trong thẻ `div` được tham chiếu bởi `ref="ganttContainer"`.

    gantt.parse(this.$props.tasks)
    // Nạp dữ liệu `tasks` vào biểu đồ.

    gantt.attachEvent('onTaskSelected', (id) => {
      // Lắng nghe sự kiện khi một nhiệm vụ được chọn.
      let task = gantt.getTask(id)
      // Lấy thông tin nhiệm vụ theo `id`.
      this.$emit('task-selected', task)
      // Phát sự kiện `task-selected` và truyền thông tin nhiệm vụ cho component cha.
    })

    gantt.attachEvent('onTaskIdChange', (id, new_id) => {
      // Lắng nghe sự kiện khi ID của một nhiệm vụ thay đổi.
      if (gantt.getSelectedId() == new_id) {
        // Kiểm tra xem nhiệm vụ có ID mới có đang được chọn hay không.
        let task = gantt.getTask(new_id)
        // Lấy thông tin nhiệm vụ mới.
        this.$emit('task-selected', task)
        // Phát sự kiện `task-selected` với nhiệm vụ mới.
      }
    })

    gantt.createDataProcessor((entity, action, data, id) => {
      // Bộ xử lý dữ liệu để đồng bộ hóa các thay đổi giữa Gantt và hệ thống.
      this.$emit(`${entity}-updated`, id, action, data)
      // Phát sự kiện với tên thực thể (`entity`), hành động (`action`),
      // dữ liệu (`data`), và ID (`id`) tới component cha.
    })
  },
}
</script>

<style>
@import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
/* Import CSS từ thư viện DHTMLX Gantt để áp dụng giao diện mặc định. */
</style>
