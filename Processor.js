class Processor {
  static Process(data) {
    let a = data.split("\r\n");
    let rows = [];

    a.forEach((row) => {
      let arr = row.split(",");
      rows.push(arr);
    });

    console.log(rows);
  }
}

module.exports = Processor;
