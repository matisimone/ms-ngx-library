
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MsNgxProgressBarComponent as ProgressBar } from '../../projects/ms-ngx/src/lib/ms-ngx-progress-bar/ms-ngx-progress-bar.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/ProgressBar',
  component: ProgressBar,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        MatProgressBarModule,
        MatButtonModule
      ],
    }),
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ProgressBar> = (args: ProgressBar) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'ProgressBar',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
