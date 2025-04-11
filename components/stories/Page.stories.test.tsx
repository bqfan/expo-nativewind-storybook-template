import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Page.stories';
import { userEvent, within } from '@storybook/testing-library';

const { LoggedIn, LoggedOut } = composeStories(stories);

test('should log in and show logout button', async () => {
  render(<LoggedIn />);
  const canvas = within(screen.getByTestId('story-root') || screen.getByRole('main'));

  const loginButton = canvas.getByRole('button', { name: /log in/i });
  expect(loginButton).toBeInTheDocument();

  await userEvent.click(loginButton);

  const logoutButton = await canvas.findByRole('button', { name: /log out/i });
  expect(logoutButton).toBeInTheDocument();
});
