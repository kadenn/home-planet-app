<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
  props: {
    planetData: Object,
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <div class="modal-header">
          <p>{{ planetData.name }} Planet</p>
        </div>

        <div class="modal-body">
          <p>
            <strong>Name: </strong>
            {{ planetData.name }}
          </p>
          <p>
            <strong>Climate: </strong>
            {{ planetData.climate }}
          </p>
          <p>
            <strong>Diameter: </strong>
            {{ planetData.diameter }}
          </p>
          <p><strong>Population: </strong>{{ planetData.population }}</p>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  color: rgb(255, 0, 255);
  font-size: 30px;
  font-weight: bold;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  padding: 20px;
}

.modal-body {
  position: relative;
  padding: 10px 60px;
  text-align: left;
  font-size: 20px;
}

.btn-close {
  font-size: 20px;
  width: 100%;
  height: 100;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>