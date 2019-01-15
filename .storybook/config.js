import React from 'react';
import {configure, setAddon} from '@storybook/react';
import MarkdownAddon from '../src';

setAddon(MarkdownAddon);

configure(function () {
  require('../example/story');
}, module);
