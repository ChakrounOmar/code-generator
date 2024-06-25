import {AutoFormThemeBootstrap5} from 'meteor/discomania:autoform-bootstrap5/static';
import 'meteor/aldeed:autoform/static';
import {AutoForm} from 'meteor/aldeed:autoform';
AutoFormThemeBootstrap5.load();

AutoForm.setDefaultTemplate('bootstrap5');
