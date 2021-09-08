const counter2 = {
  next: 1,
  tick() {
    setTimeout(() => {
      console.log(this.next);
      this.next++;
    }, 1000);
  },
};

const counter = {
  next: 1,
  tick() {
    const f1 = (n) => setTimeout(() => console.log(n), 1000);
    f1(this.next);
    this.next++;
  },
};

// // move this.next++ into the timeout
counter.tick();
counter.tick();
counter.tick();
counter.tick();
counter.tick();
counter.tick();
counter.tick();
counter.tick();
counter.tick();
counter.tick();
counter.tick();
counter.tick();
counter.tick();
counter.tick();
counter.tick();
counter.tick();
