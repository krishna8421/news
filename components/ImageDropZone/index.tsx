import { Textarea } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { BsImageFill } from "react-icons/bs";
import Image from "next/image";
import { MdCancel } from "react-icons/md";

interface Props {
  onDrop: (files: File[]) => void;
  onReject: (files: any) => void;
  tempImg: string | ArrayBuffer | null;
  removeTempImg: () => void;
  className?: string;
  caption: string;
  setCaption: (caption: string) => void;
}

export default function ImageDropZone({
  onDrop,
  onReject,
  tempImg,
  removeTempImg,
  className,
  caption,
  setCaption,
}: Props) {
  return (
    <div className={`flex flex-wrap gap-8 items-center ${className}`}>
      {tempImg && (
        <div className="relative">
          <Image
            src={tempImg as string}
            alt="Temp Image"
            width={240}
            height={160}
            objectFit="cover"
            objectPosition="center"
            className="rounded"
          />
          <MdCancel
            className="absolute z-10 -top-1 -right-2 cursor-pointer"
            onClick={removeTempImg}
          />
        </div>
      )}
      {!tempImg && (
        <Dropzone
          className={`w-60 h-40 text-xs flex items-center justify-center text-center`}
          onDrop={onDrop}
          onReject={onReject}
          maxSize={2 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
        >
          {() => (
            <div className="flex justify-center items-center flex-col gap-4">
              <BsImageFill size={30} />
              <p>Drag images here or click to select files</p>
            </div>
          )}
        </Dropzone>
      )}
      <Textarea
        sx={{
          textarea: {
            "&:focus": {
              border: "1px solid #E50914",
            },
          },
        }}
        placeholder="Add Caption"
        className="w-80"
        minRows={6}
        maxRows={6}
        variant="default"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
    </div>
  );
}
