import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).toBeChecked();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /add todo/i });

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')[2]).not.toBeChecked();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const checkbox = screen.getAllByRole('checkbox')[0];
    const todoText = screen.getByText('Learn React');

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(todoText).toHaveStyle('text-decoration: line-through');

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    const initialTodo = screen.getByText('Learn React');

    fireEvent.click(deleteButtons[0]);
    expect(initialTodo).not.toBeInTheDocument();
  });
});