import Brainstorm from './brainstorm-api/Brainstorm';
import Idea from './brainstorm-api/Idea';

import { getBrainstormData, updateBrainstormData } from "./brainstorm-api/storage"

let ID_ADD_SELECTION = "brainstorm-me-add-selection";

// Create the menu item
browser.contextMenus.create({
  id: ID_ADD_SELECTION,
  title: browser.i18n.getMessage("contextMenuItemAddSelection"),
  contexts: ["selection"]
});

// Context menu listener for 'brainstorm-me-add-selection'
browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case ID_ADD_SELECTION: {
      getBrainstormData().then(
        (brainstorm) => {
          const idea = new Idea(info.pageUrl, info.selectedText);
          brainstorm.pushNewIdea(idea);

          updateBrainstormData(brainstorm).then(
            (value) => {
              console.log("Brainstorm data stored.");
            },
            (error) => {
              console.error(error);
            }
          );
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
});
