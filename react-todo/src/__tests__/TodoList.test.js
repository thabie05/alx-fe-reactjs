import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  test('adds new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');
    
    // Initial state
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
    
    // After click
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    // Toggle back
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');
    const initialCount = deleteButtons.length;
    
    fireEvent.click(deleteButtons[0]);
    expect(screen.getAllByText('Delete')).toHaveLength(initialCount - 1);
  });
});