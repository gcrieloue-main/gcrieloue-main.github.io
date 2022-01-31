export const ThemeToggle = {
  template: `<div class="switch-container" v-bind:title="title"><label class="switch">
        <input type="checkbox" v-model="checked" v-on:change="toggle()">
       <span class="slider round"></span>
    </label></div>`,
  data: () => {
    return {
      title: '',
      checked: false,
    }
  },
  created: function () {
    this.checked =
      localStorage.getItem('theme') === 'light' ||
      !(
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      )
    this.toggle()
  },
  methods: {
    toggle: function () {
      document.documentElement.classList.add(this.checked ? 'light' : 'dark')
      document.documentElement.classList.remove(this.checked ? 'dark' : 'light')
      this.title = 'Activer le thème ' + (this.checked ? 'sombre' : 'clair')
      localStorage.setItem('theme', this.checked ? 'light' : 'dark')
    },
  },
}
