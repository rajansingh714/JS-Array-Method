const library = [
  { title: "Book A", author: "Author 1", year: 2015 },
  { title: "Book B", author: "Author 2", year: 2020 },
  { title: "Book C", author: "Author 1", year: 2018 },
];

// 1.Find books by "Author 1"

const FindBookByAuthor = library.filter((value) => {
  return value.author === "Author 1";
});

console.log("Book by Author", FindBookByAuthor);

// 2.Find the most recent book.

const recentBook = library.reduce((val, com) => {
  val.year > com.year ? val : com;
});

console.log(recentBook);
