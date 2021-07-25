'use strict';

const express = require('express');
const Food = require('../models/food');
const validator = require('../middleware/validator');

const router = express.Router();
const food = new Food();

router.get('/', getFood);
router.get('/:id', getFood);
router.post('/', validator, addFood);
router.put('/:id', validator, updateFood);
router.delete('/:id', deleteFood);

function getFood(req, res) {
  const result = food.read(req.params.id);
  res.json(result);
}

function addFood(req, res) {
  const result = food.create(req.body);
  res.json(result);
}

function updateFood(req, res) {
  const result = food.update(req.params.id, req.body);
  res.json(result);
}

function deleteFood(req, res) {
  const result = food.delete(req.params.id);
  res.json(result);
}

module.exports = router;
