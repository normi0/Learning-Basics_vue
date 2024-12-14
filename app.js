console.log("hello ,vue");

const app = Vue.createApp({
  // template:'<h2> i am the template</h2>'
  data() {
    return {
      showbooks: true,
      url: "https://hsr.hoyoverse.com/fr-fr/",
      books: [
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          img: "image/book1.jpg",
          isFav: true,
        },
        {
          title: "1984",
          author: "George Orwell",
          img: "image/book2.webp",
          isFav: false,
        },
        {
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          img: "image/book3.webp",
          isFav: true,
        },
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          img: "image/book2.webp",
          isFav: false,
        },
        {
          title: "Moby-Dick",
          author: "Herman Melville",
          img: "image/book2.webp",
          isFav: true,
        },
      ],
      age: 69,
      x: 0,
      y: 0,
    };
  },
  methods: {
    // changeTitle(title) {
    // //   console.log("you clicked me ")
    //   this.title = title
    // }
    ToogleShowBooks() {
      this.showbooks = !this.showbooks;
    },
    ToogleFavBook(book) {
      book.isFav = !book.isFav;
    },
    handleEvent(e) {
      // Renamed to match template
      console.log(e);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
  computed: {
    filtredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});
app.mount("#app");
