import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Typography from "@tiptap/extension-typography";
import Heading from "@tiptap/extension-heading";
import Blockquote from "@tiptap/extension-blockquote";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Bold from "@tiptap/extension-bold";
// import {BubbleMenu} from "@tiptap/react";
import BulletList from "@tiptap/extension-bullet-list";
import DropCursor from "@tiptap/extension-dropcursor";
import ListItem from "@tiptap/extension-list-item";

/**
 * TODO
 * Bubble menu extension
 * editor.chain().focus().toggleBold().run()
 * editor.commands.setBlockquote()
 * editor.commands.toggleBlockquote()
 *
 * editor.storage.characterCount.characters() //count the total word
 *
 * const json = editor.getJSON()
 * const html = editor.getHTML()
 *
 * onUpdate: ({ editor }) => {
 *   const json = editor.getJSON()
 *   // send the content to an API here
 * },
 */

const Editor = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Blockquote,
      Text,
      Typography,
      Heading,
      Link,
      Image,
      Bold,
      BulletList,
      DropCursor,
      ListItem,
    ],
    autofocus: true,
  });

  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
};

export default Editor;
