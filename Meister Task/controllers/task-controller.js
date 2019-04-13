const Task = require('../models/task');

module.exports = {
  getIndex: function (req, res) {
    Task.find()
    .then(task => {
      res.render('index', {
        'openTasks': task.filter(t => t.status === 'Open'),
        'inProgressTasks': task.filter(t => t.status === 'In Progress'),
        'finishedTasks': task.filter(t => t.status === 'Finished')
      });
    });
  },
  getCreate: function (req, res) {
    res.render('create')
  },
  postCreate: function (req, res) {
    Task.create(req.body)
    .then(() => res.redirect('/')
    .catch(() => res.redirect('create')));
  },
  getEdit: function (req, res) {
  },
  postEdit: function (req, res) {
  },
  getDelete: function (req, res) {
    let id  = req.params.id;
    return res.render('delete', {id});
  },
  postDelete: function (req, res) {

  }
};