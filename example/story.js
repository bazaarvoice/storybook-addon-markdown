import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import Button from './Button';
import readme from '!raw!../README.md';
import doc from '!raw!./doc.md';
const context = {Button};

const buttonDocTwo = `
# Second markdown
|Test|Header|
|-|-|
|One|Two|

\`\`\`preview
<Button label="Second Inline Button" />
\`\`\`

\`\`\`preview
() => {
  var label = "I like pie";
  return <Button label={label} />
}
\`\`\`
`;

storiesOf('Button Readme')
  .addMarkdown('Documentation', readme)
  .add( 'simple usage', () => (
    <Button label="The Button" onClick={action('onClick')} />
  ))
  .add('another usage', () => (
    <Button label="Another Button" onClick={action('another onClick')} />
  ));

storiesOf('Button Inline')
  .addMarkdown('Documentation', doc, Button, context)
  .add( 'simple usage', () => (
    <Button label="The Button" onClick={action('onClick')} />
  ));

storiesOf('Multiple Documents')
  .addMarkdown('First markdown', doc, Button, context)
  .addMarkdown('Second markdown', buttonDocTwo, Button, context);
