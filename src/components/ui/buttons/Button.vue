<template>
  <button
    class="btn"
    :class="btnClass"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'link',
    },
    name: {
      type: String,
      default: 'Primary button',
    },
    btnClass: {
      type: String,
      default: 'btn-primary',
    },
  },
};
</script>

<style lang="scss">
  .btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: .5rem 1rem;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: normal;
    outline: none;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }

  .btn-primary {
    background: #42b983;
    transition: background-color .15s ease-in-out;

    &:hover {
      background: #2b9564;
      transition: background-color .15s ease-in-out;
    }
  }

  .btn-remove {
    background: #222222;
    transition: background-color .15s ease-in-out;

    &:hover {
      background: #444444;
      transition: background-color .15s ease-in-out;
    }
  }
</style>
