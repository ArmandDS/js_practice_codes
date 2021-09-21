// /

function createSentence() {
  const self = this;
  return {
    words: [],
    add(str) {
      str.split(" ").forEach((word) => {
        const trimWord = word.trim();

        if (trimWord !== "") {
          this.words.push(trimWord);
          // console.log(this.words, "tr" );
        }
      });
      // console.log(this.words, "h");
      return this;
    },
    get() {
      console.log(this.words, "h");
      return this.words.join(" ") + ".";
    },
  };
}

function createLower() {
  const sentence = createSentence();
  return {
    add(str) {
      sentence.add(str.toLowerCase());
    },
    get: () => sentence.get(),
  };
}

const n = createLower();
n.add("Mola Mundo");

// console.log(createSentence().add("Mola Mundo"));

console.log(n.get());
