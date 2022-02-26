import Menu from "@common/NewPost/Editor/Menu";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Typography from "@tiptap/extension-typography";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

/**
 * TODO
 * Editor.storage.characterCount.characters() //count the total word
 *
 * const json = Editor.getJSON()
 * const html = Editor.getHTML()
 *
 * onUpdate: ({ Editor }) => {
 *   const json = Editor.getJSON()
 *   // send the content to an API here
 * },
 */

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2],
          HTMLAttributes: {
            class: "text-light font-bold text-2xl text-gray-700",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc list-inside",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal list-inside",
          },
        },
        paragraph: {
          HTMLAttributes: {
            class: "leading-loose",
          },
        },
      }),
      Typography,
      Link,
      Image,
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none selection:text-white selection:bg-cyan-500 font-Inter",
      },
    },
  });
  return (
    <div>
      <Menu editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
