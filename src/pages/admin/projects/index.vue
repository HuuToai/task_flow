<template>
  <div class="container">
    <!-- Vùng bên phải chứa thông tin task và danh sách message -->
    <div class="right-container">
      <!-- Hiển thị thông tin task đã chọn -->
      <div class="gantt-selected-info">
        <div v-if="selectedTask">
          <!-- Tên của task được chọn -->
          <h2>{{ selectedTask.text }}</h2>
          <!-- ID của task -->
          <span><b>Mã dự án: </b>{{ selectedTask.id }}</span
          ><br />
          <!-- Tiến độ hoàn thành của task dưới dạng phần trăm -->
          <span><b>Tiến độ công việc: </b> {{ progressPercentage }}</span
          ><br />
          <!-- Ngày bắt đầu của task được định dạng -->
          <span><b>Ngày bắt đầu: </b>{{ formattedStartDate }}</span
          ><br />
          <!-- Ngày kết thúc của task được định dạng -->
          <span><b>Hạn kết thúc: </b>{{ formattedEndDate }}</span
          ><br />
        </div>
        <!-- Hiển thị thông báo khi chưa chọn task nào -->
        <div v-else class="select-task-prompt">
          <h2>Chọn task bất kỳ</h2>
        </div>
      </div>
      <!-- Danh sách message hiển thị thông tin log -->
      <ul class="gantt-messages">
        <li
          class="gantt-message"
          v-for="(message, index) in messages"
          v-bind:key="index"
        >
          <!-- Nội dung của từng message -->
          {{ message }}
        </li>
      </ul>
    </div>
    <!-- Component Gantt hiển thị biểu đồ -->
    <!-- Lắng nghe sự kiện cập nhật task -->
    <!-- Lắng nghe sự kiện cập nhật link -->
    <!-- Lắng nghe sự kiện chọn task -->
    <GanttComponent
      class="left-container"
      :tasks="tasks"
      @task-updated="logTaskUpdate"
      @link-updated="logLinkUpdate"
      @task-selected="selectTask"
    ></GanttComponent>
  </div>
</template>
  
  <script>
import GanttComponent from '../../../components/GanttComponent.vue' // Import component Gantt
import { useMenu } from '../../../stores/use-menu.js' // Import store quản lý menu

const store = useMenu() // Khởi tạo store
store.onSelectedKeys(['admin-projects']) // Đánh dấu menu 'admin-projects' là đang được chọn

export default {
  name: 'projects', // Tên component
  components: { GanttComponent }, // Khai báo component con
  data() {
    return {
      tasks: {
        // Dữ liệu cho Gantt gồm danh sách task và link
        data: [
          {
            id: 1,
            text: 'Project #1',
            start_date: null,
            duration: null,
            parent: 0,
            progress: 0,
            open: true,
          },
          {
            id: 2,
            text: 'Task #1',
            start_date: '2019-08-01 00:00',
            duration: 5,
            parent: 1,
            progress: 1,
          },
          {
            id: 3,
            text: 'Task #2',
            start_date: '2019-08-06 00:00',
            duration: 2,
            parent: 1,
            progress: 0.5,
          },
          {
            id: 4,
            text: 'Task #3',
            start_date: null,
            duration: null,
            parent: 1,
            progress: 0.8,
            open: true,
          },
          {
            id: 5,
            text: 'Task #3.1',
            start_date: '2019-08-09 00:00',
            duration: 2,
            parent: 4,
            progress: 0.2,
          },
          {
            id: 6,
            text: 'Task #3.2',
            start_date: '2019-08-11 00:00',
            duration: 1,
            parent: 4,
            progress: 0,
          },
        ],
        links: [
          { id: 1, source: 2, target: 3, type: '0' },
          { id: 2, source: 3, target: 4, type: '0' },
          { id: 3, source: 5, target: 6, type: '0' },
        ],
      },
      selectedTask: null, // Task được chọn
      messages: [], // Danh sách message log
    }
  },
  computed: {
    progressPercentage() {
      // Tính phần trăm tiến độ của task
      let taskProgress = this.selectedTask.progress
      if (!taskProgress) return '0'
      return `${Math.round(+taskProgress * 100)} %`
    },
    formattedStartDate() {
      // Định dạng ngày bắt đầu của task
      let taskStart = this.selectedTask.start_date
      return `${taskStart.getFullYear()} / ${
        taskStart.getMonth() + 1
      } / ${taskStart.getDate()}`
    },
    formattedEndDate() {
      // Định dạng ngày kết thúc của task
      let taskEnd = this.selectedTask.end_date
      return `${taskEnd.getFullYear()} / ${
        taskEnd.getMonth() + 1
      } / ${taskEnd.getDate()}`
    },
  },
  methods: {
    selectTask(task) {
      // Lưu task được chọn
      console.log('vừa chọn task');
      this.selectedTask = task
    },
    addMessage(message) {
        console.log('Vừa thêm task added');
      // Thêm message vào danh sách và giới hạn 40 message
      this.messages.unshift(message)
      if (this.messages.length > 40) this.messages.pop()
    },
    logTaskUpdate(id, mode, task) {
      // Log thông tin cập nhật của task
      let text = task && task.text ? ` (${task.text})` : ''
      let message = `Task ${mode}: ${id} ${text}`
      this.addMessage(message)
    },
    logLinkUpdate(id, mode, link) {
      // Log thông tin cập nhật của link
      let message = `Link ${mode}: ${id}`
      if (link) message += ` ( source: ${link.source}, target: ${link.target} )`
      this.addMessage(message)
    },
  },
}
</script>
  
  <style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.container {
  height: 100vh;
  width: 100%;
}

.left-container {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.right-container {
  border-right: 1px solid #cecece;
  float: right;
  height: 100%;
  width: 340px;
  box-shadow: 0 0 5px 2px #aaa;
  position: relative;
  z-index: 2;
}

.gantt-messages {
  list-style-type: none;
  height: 50%;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding-left: 5px;
}

.gantt-messages > .gantt-message {
  background-color: #f4f4f4;
  box-shadow: inset 5px 0 #d69000;
  font-family: Geneva, Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 5px 0;
  padding: 8px 0 8px 10px;
}

.gantt-selected-info {
  border-bottom: 1px solid #cecece;
  box-sizing: border-box;
  font-family: Geneva, Arial, Helvetica, sans-serif;
  height: 50%;
  line-height: 28px;
  padding: 10px;
}

.gantt-selected-info h2 {
  border-bottom: 1px solid #cecece;
}

.select-task-prompt h2 {
  color: #d9d9d9;
}

.col-12.col-sm-9 .container {
  width: 100%;
  max-width: 100%;
  padding: 0;
}
</style>
  