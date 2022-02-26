import { Editor } from "@tiptap/react";
import Button from "@common/NewPost/Editor/Button";
import { FaBold, FaItalic, FaHeading, FaUndoAlt, FaRedoAlt } from "react-icons/fa";
import {
  AiOutlineStrikethrough,
  AiOutlineUnorderedList,
  AiOutlineOrderedList,
  AiOutlineLine,
} from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";
import { RiParkingLine } from "react-icons/ri";
import { BsBlockquoteRight } from "react-icons/bs";

interface MenuProps {
  editor: Editor | null;
}

export default function Menu({ editor }: MenuProps) {
  if (!editor) {
    return null;
  }
  return (
    <div className="border-2 md:p-5 p-4 flex flex-wrap bg-dashboard rounded-t-xl gap-2">
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        icon={<FaBold />}
        isActive={editor.isActive("bold")}
      />
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        icon={<FaItalic />}
        isActive={editor.isActive("italic")}
      />
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        icon={<AiOutlineStrikethrough />}
        isActive={editor.isActive("strike")}
      />
      <Button
        onClick={() => editor.chain().focus().toggleCode().run()}
        icon={<BiCodeCurly />}
        isActive={editor.isActive("code")}
      />
      <Button
        onClick={() => editor.chain().focus().setParagraph().run()}
        icon={<RiParkingLine />}
        isActive={editor.isActive("paragraph")}
      />
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        icon={<FaHeading />}
        isActive={editor.isActive("heading", { level: 2 })}
      />
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        icon={<AiOutlineOrderedList />}
        isActive={editor.isActive("orderedList")}
      />
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        icon={<AiOutlineUnorderedList />}
        isActive={editor.isActive("bulletList")}
      />
      <Button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        icon={<AiOutlineLine />}
      />
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        icon={<BsBlockquoteRight />}
        isActive={editor.isActive("blockquote")}
      />
      <Button onClick={() => editor.chain().focus().undo().run()} icon={<FaUndoAlt />} />
      <Button onClick={() => editor.chain().focus().redo().run()} icon={<FaRedoAlt />} />
    </div>
  );
}
