# 🦶 Obsidian Rich Foot
Obsidian Rich Foot automatically adds the following style elements to your notes in Reading View:
- **_Backlinks_**
- **_Created Date_**
- **_Modified Date_**

---

## Instalation

- copy the [scripts/obsidian-rich-foot/](./obsidian-rich-foot/scripts/obsidian-rich-foot/) folder to your Obsidian vault (suggested to save it to a "./scripts/obsidian-rich-foot" folder).
  
  <img src="docs/path.png" width="333">

---

## Usage

- Add the following line to the bottom of any Obsidian note.  
  (ensure the path to the script that you copied to your vault in the *Installation* step above is correct)

    ```javascript
    `$= await dv.view("= scripts/obsidian-rich-foot")`
    ```

---

## Example

<img src="docs/rich-foot--source-view.png" width="600">
<img src="docs/rich-foot--reading-view.png" width="600">

---

_note: live preview not supported_
