'use strict';

const uuid = require('uuid').v4;

class Food {
  constructor() {
    this.db = [];
  }

  create(obj) {
    const recored = {
      id: uuid(),
      data: obj,
    };
    this.db.push(recored);
    return recored;
  }

  read(id) {
    if (id) {
      return this.db.find((item) => item.id === id);
    } else {
      return this.db;
    }
  }

  update(id, obj) {
    this.db.forEach((item, idx) => {
      if (item.id === id) {
        this.db[idx].data = obj;
        // return this.db[idx];
      }
    });
    return this.db;
  }

  delete(id) {
    this.db = this.db.filter((item) => item.id !== id);
    return typeof this.db.id;
  }
}

module.exports = Food;
