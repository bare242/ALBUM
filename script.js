new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "first_page/1.jpg",
          img2: "first_page/2.jpg",
          img3: "first_page/3.jpg",
          title: "COUPLE",
          isOpen: false,
        },
        {
          img1: "second_page/4.jpg",
          img2: "second_page/5.jpg",
          img3: "second_page/7.jpg",
          title: "CUTE",
          isOpen: false,
        },
        {
          img1: "last_page/6.jpg",
          img2: "last_page/8.jpg",
          img3: "last_page/grid.jpg",
          title: "GRID",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
