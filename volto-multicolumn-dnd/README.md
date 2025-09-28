# volto-multicolumn-dnd

GSoC 2025 — Multi-columns Row with Drag-and-Drop between Row and Columns

**Student:** Heer Makwana

This repository contains a complete Volto addon which implements column-aware drag-and-drop for multicolumn layouts.

## Features

- Drag blocks between columns within the same row.
- Visual placeholder indicators when hovering over columns.
- Optimistic UI updates for immediate feedback.
- Fully integrated with Redux for state management.
- Unit tests included for actions and reducers.

## Installation

1. Clone your Volto project:

    ```bash
    git clone https://github.com/plone/volto.git
    cd volto
    ```

2. Link the addon using npm:

    ```bash
    cd path/to/volto-multicolumn-dnd
    npm install
    npm run build
    npm link
    cd path/to/volto
    npm link volto-multicolumn-dnd
    ```

3. Add the addon to your Volto `config.js`:

    ```javascript
    import voltoMulticolumnDnd from 'volto-multicolumn-dnd';

    export default function applyConfig(config) {
      config = voltoMulticolumnDnd(config);
      return config;
    }
    ```

4. Run Volto:

    ```bash
    npm start
    ```

## Usage

- Add a MulticolumnRow block in the editor.
- Drag blocks between columns with visual guidance.

## Development

Run tests:

```bash
npm test
```
