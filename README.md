# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## Refactors / Future Improvements

### Completed App Review
- [x] Add tasks
- [x] Mark tasks complete / undo
- [x] Delete tasks
- [x] Save tasks using localStorage
- [x] Confirm tasks persist after refresh

### Refactor Improvements
- [ ] Move task list into a separate `TaskList.jsx` component
- [ ] Move each task item into a `TaskItem.jsx` component
- [ ] Clean up inline styles and move styling to CSS
- [ ] Add better spacing and layout
- [ ] Improve button labels and UI readability
- [ ] Add empty state message when there are no tasks

### Functionality Improvements
- [ ] Add edit task feature
- [ ] Add task created date
- [ ] Add filter: All / Active / Completed
- [ ] Add clear completed tasks button
- [ ] Add validation message for empty task input

### Future Full-Stack Improvements
- [ ] Replace localStorage with Supabase database
- [ ] Add user login
- [ ] Save tasks per user
- [ ] Deploy app using Vercel
- [ ] Add environment variables for backend config