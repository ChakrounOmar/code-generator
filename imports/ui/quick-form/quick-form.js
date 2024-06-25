import { Template } from 'meteor/templating';
import { TaskSchema } from '../lib/collections.js';

Template.quickFormExample.helpers({
    taskSchema() {
        return TaskSchema;
    }
  });