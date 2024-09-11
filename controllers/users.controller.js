const express = require("express");
const users = require("../models/users.model");

const path = require("path");

const getAllUsers = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};

const addUsers = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);

  const user = {
    name,
    age,
  };
  users.push(user);
  res.status(200).json({
    success: true,
    users,
  });
};

module.exports = {
  getAllUsers,
  addUsers,
};
