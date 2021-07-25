'use strict';

const express = require('express');
const Clothes = require('../models/clothes');
const validator = require('../middleware/validator');

const router = express.Router();
const clothes = new Clothes();

router.get('/', getClothes);
router.get('/:id', getClothes);
router.post('/', validator, addClothes);
router.put('/:id', validator, updateClothes);
router.delete('/:id', deleteClothes);

function getClothes(req, res) {
  const result = clothes.read(req.params.id);
  res.json(result);
}

function addClothes(req, res) {
  const result = clothes.create(req.body);
  res.json(result);
}

function updateClothes(req, res) {
  const result = food.update(req.params.id, req.body);
  res.json(result);
}

function deleteClothes(req, res) {
  const result = clothes.delete(req.params.id);
  res.json(result);
}

module.exports = router;
