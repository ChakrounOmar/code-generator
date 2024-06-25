import {Tracker} from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

export const SignupSchema = new SimpleSchema({
  firstName: {
    type: String,
    autoform: {
        afFieldInput: {
            class: 'fw-light',
        }
    }
    },
    lastName: {
        type: String,
        autoform: {
            afFieldInput: {
                class: 'fw-light',
            }
        }
    },

    telephone: {
        type: String,
        label: 'Primary telephone',
        autoform: {
            afFieldInput: {
                class: 'fw-light',
            }
        }
    },
    birthday: {
        type: Date,
        optional: true,
        autoform: {
            afFieldInput: {
                class: 'fw-light',
                autocomplete: 'off'
            }
        }
    },
    emailAddress: {
        label: 'Email',
        type: String,
        custom() {
            const email = this.value.toLowerCase().trim();
            const reg = SimpleSchema.RegEx.EmailWithTLD;

            if (!reg.test(email)) {
                return 'invalidEmail';
            }
        },
        autoform: {
            afFieldInput: {
                class: 'input-dark text-white'
            }
        }
    },
    password: {
        type: String,
        autoform: {
            type: 'password',
            afFieldInput: {
                class: 'input-dark text-white'
            }
        }
    },
}, {tracker: Tracker});

export const EditSchema = new SimpleSchema({
    firstName: {
      type: String,
      autoform: {
          afFieldInput: {
              class: 'fw-light',
          }
      }
  },
  lastName: {
      type: String,
      autoform: {
          afFieldInput: {
              class: 'fw-light',
          }
      }
  },
  
  telephone: {
      type: String,
      label: 'Primary telephone',
      autoform: {
          afFieldInput: {
              class: 'fw-light',
          }
      }
  },
  birthday: {
      type: Date,
      optional: true,
      autoform: {
          afFieldInput: {
              class: 'fw-light',
              autocomplete: 'off'
          }
      }
  }
}, {tracker: Tracker});