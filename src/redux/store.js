import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contactsSlice/contactsSlice";
import { filtersReducer } from "./filtersSlice/filtersSlice";


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});


