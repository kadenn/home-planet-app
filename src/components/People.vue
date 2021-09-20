<template>
  <div class="people">
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      :planetData="planetData"
    />

    <input
      type="text"
      class="form-control"
      placeholder="Search for names.."
      v-model="filters.name.value"
    />

    <v-table :data="people" :filters="filters">
      <thead slot="head">
        <v-th sortKey="name">Name</v-th>
        <v-th sortKey="height">Height</v-th>
        <v-th sortKey="mass">Mass</v-th>
        <v-th sortKey="created">Created</v-th>
        <v-th sortKey="edited">Edited</v-th>
        <v-th sortKey="planet_data.name">Planet Name</v-th>
      </thead>

      <tbody slot="body" slot-scope="{ displayData }">
        <tr v-for="row in displayData" :key="row.id">
          <td>{{ row.name }}</td>
          <td>{{ row.height }}</td>
          <td>{{ row.mass }}</td>
          <td>{{ row.created.split("T")[0] }}</td>
          <td>{{ row.edited.split("T")[0] }}</td>
          <td>
            <button
              type="button"
              class="btn"
              @click="showModal(row.planet_data)"
            >
              {{ row.planet_data.name }}
            </button>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Modal from "./Modal.vue";

export default {
  name: "People",

  components: {
    Modal,
  },

  computed: mapState(["people"]),

  created() {
    if (this.people.length != 82) {
      this.$store.dispatch("loadPeople");
    }
  },

  data() {
    return {
      filters: {
        name: { value: "", keys: ["name"] },
      },
      isModalVisible: false,
      planetData: new Object(),
    };
  },

  methods: {
    showModal(planet_data) {
      this.planetData = planet_data;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

table {
  width: 100%;
  margin-bottom: 50px;
  border-collapse: collapse;
  text-align: left;
  table-layout: fixed;
}

table tr:hover {
  background-color: #f1f1f1;
}

td,
th {
  border: 1px solid #999;
  padding: 0.5rem;
}

td {
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
}

th {
  background: gray;
  border-color: white;
}

button {
  width: 100%;
  height: 100%;
}

input {
  width: 100%;
  padding: 12px 20px 12px 20px;
  border: 1px solid gray;
  margin-bottom: 5px;
}

@media only screen and (min-width: 768px) {
  * {
    font-size: 18px;
  }
}

@media only screen and (max-width: 768px) {
  * {
    font-size: 18px;
  }
}

@media only screen and (max-width: 425px) {
  * {
    font-size: 12px;
  }
}

@media only screen and (max-width: 320px) {
  * {
    font-size: 8px;
  }
}
</style>
