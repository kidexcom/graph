<template>
  <div class="grid form-grid">
    <div class="col-grid range-cell grid">
      <div class="storage-block">
        <p class="label storage">Storage:&nbsp;<span id="storage-val">{{ storage }}</span>&nbsp;GB</p>
        <input type="range" min="0" max="1000" step="1" @change="updateValueStorage" :value="storage" id="storage">
      </div>
      <div class="transfer-block">
        <p class="label transfer">Transfer:&nbsp;<span id="transfer-val">{{ transfer }}</span>&nbsp;GB</p>
        <input type="range" min="0" max="1000" step="1" @change="updateValueTransfer" :value="transfer" id="transfer">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppRange",
  data() {
    return {}
  },
  computed: {
    storage() {
      return this.$store.state.storage
    },
    transfer() {
      return this.$store.state.transfer
    }
  },
  methods: {
    updateValueStorage (e) {
      this.$store.commit('updateValueStorage', e.target.value);
    },
    updateValueTransfer (e) {
      this.$store.commit('updateValueTransfer', e.target.value);
    },
  }
}
</script>
