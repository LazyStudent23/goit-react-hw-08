import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    return contacts.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
