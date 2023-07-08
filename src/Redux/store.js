import { configureStore } from '@reduxjs/toolkit';
import FormData from './FormData';

export default configureStore({
  reducer: {
    form: FormData,
  },
});
