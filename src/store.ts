import { writable } from 'svelte/store';

interface Node {
  id: number, 
  color: String, 
  x: number, 
  y: number, 
  connection: number
};

function createNode(id: number, x: number, y: number, color?: String, connection?: number) : Node {
  return {
    id: id,
    color: color || 'blue',
    x: x, 
    y: y,
    connection: connection || null
  };
}

export let nodes = writable(
  [
    createNode(1, 0, 0, 'blue', 2),
    createNode(2, 500, 0, 'red'),
  ]
);