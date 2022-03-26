"use strict";

const User = require("../../models/User");

const output = {
  index: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },

  register: (req, res) => {
    res.render("home/register");
  },

  introduce: (req, res) => {
    res.render("home/introduce");
  },

  game: (req, res) => {
    res.render("home/game");
  },

  ai: (req, res) => {
    res.render("home/ai");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
