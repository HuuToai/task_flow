<template>
  <div class="dashboard-container">
    <a-row gutter="24">
      <!-- Card 1 -->
      <a-col :span="8">
        <a-card :title="'Total Sales'" :bordered="false">
          <p class="card-content">Total sales amount for this month.</p>
          <h2>$10,500</h2>
        </a-card>
      </a-col>

      <!-- Card 2 -->
      <a-col :span="8">
        <a-card :title="'New Users'" :bordered="false">
          <p class="card-content">New users registered this month.</p>
          <h2>150</h2>
        </a-card>
      </a-col>

      <!-- Card 3 -->
      <a-col :span="8">
        <a-card :title="'Orders Completed'" :bordered="false">
          <p class="card-content">
            Total number of orders completed this month.
          </p>
          <h2>245</h2>
        </a-card>
      </a-col>
    </a-row>

    <a-row gutter="24" style="margin-top: 24px">
      <!-- Table Example -->
      <a-col :span="24">
        <a-card :title="'Recent Orders'" :bordered="false">
          <a-table :columns="columns" :dataSource="data" pagination />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
  
  <script>
import { Card, Row, Col, Table } from "ant-design-vue";
import { useMenu } from "../../stores/use-menu.js";

export default {
  setup(){
    const store = useMenu();
    store.onSelectedKeys(["admin-dashboard"]);
  },
  components: {
    "a-card": Card,
    "a-row": Row,
    "a-col": Col,
    "a-table": Table,
  },
  data() {
    return {
      columns: [
        {
          title: "Order ID",
          dataIndex: "orderId",
          key: "orderId",
        },
        {
          title: "Customer",
          dataIndex: "customer",
          key: "customer",
        },
        {
          title: "Total",
          dataIndex: "total",
          key: "total",
        },
        {
          title: "Date",
          dataIndex: "date",
          key: "date",
        },
      ],
      data: [
        {
          key: "1",
          orderId: "ORD12345",
          customer: "John Doe",
          total: "$250",
          date: "2024-11-25",
        },
        {
          key: "2",
          orderId: "ORD12346",
          customer: "Jane Smith",
          total: "$320",
          date: "2024-11-24",
        },
        {
          key: "3",
          orderId: "ORD12347",
          customer: "Bill Gates",
          total: "$150",
          date: "2024-11-23",
        },
      ],
    };
  },
};
</script>
  
  <style scoped>
.dashboard-container {
  padding: 24px;
}
.card-content {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
  