const express = require("express");
const router = express.Router();
const Boat = require("../models/Boat");

// GET all boats
router.get("/", async (req, res) => {
  const boats = await Boat.findAll();
  res.json(boats);
});

// GET boat by ID
router.get("/:id", async (req, res) => {
  const boat = await Boat.findByPk(req.params.id);
  boat ? res.json(boat) : res.status(404).send("Not found");
});

// POST new boat
router.post("/", async (req, res) => {
  const boat = await Boat.create(req.body);
  res.status(201).json(boat);
});

// PUT update boat
router.put("/:id", async (req, res) => {
  const boat = await Boat.findByPk(req.params.id);
  if (boat) {
    await boat.update(req.body);
    res.json(boat);
  } else {
    res.status(404).send("Not found");
  }
});

// DELETE boat
router.delete("/:id", async (req, res) => {
  const boat = await Boat.findByPk(req.params.id);
  if (boat) {
    await boat.destroy();
    res.status(204).send();
  } else {
    res.status(404).send("Not found");
  }
});

module.exports = router;
