import React from 'react';
import Toast from '../components/Toast/Toast';
import { fn } from '@storybook/test';

export default {
  title: 'Toast',
  component: Toast,
  
  tags: ['autodocs'],
  args:{
    buttonAction: fn(),
    closeAction:fn(),
  },
  
  argTypes: {
    
    hideInfoIcon: {
      control: 'boolean',
      description: 'Toggle visibility of the info icon',
    },
    notificationIcon: {
      control: {
        type: 'select',
      },
      options: ['information', 'error', 'warning', 'success'],

      description: 'Type of notification icon to display',
    },
  },
};

const Template = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Message here',
  notificationIcon: 'information',
};

export const DisplayType = Template.bind({});
DisplayType.args = {
  message: 'Message here',
  hideInfoIcon: true,
  withoutAction: true,
  withoutDivider: true,
  crossIcon: true,
  notificationIcon: 'information',
};

export const ToastNotification = Template.bind({});
ToastNotification.args = {
  message: 'Message here',
  notificationIcon: 'information',
};
ToastNotification.argTypes = {
  message: { table: { disable: true } },
  hideInfoIcon: { table: { disable: true } },
};

DisplayType.argTypes = {
  notificationIcon: { table: { disable: true } },
};
