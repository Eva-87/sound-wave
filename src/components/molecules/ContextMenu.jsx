import { useState } from "react";

export default function ContextMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 rounded-full hover:bg-gray-800"
        onClick={() => setOpen(!open)}
      >
        <div className="flex flex-col gap-1">
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
        </div>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-800 rounded-md shadow-lg z-20 text-sm">
          <button className="w-full text-left px-3 py-2 hover:bg-gray-800">
            Add to playlist
          </button>
          <button className="w-full text-left px-3 py-2 hover:bg-gray-800">
            Share
          </button>
          <button className="w-full text-left px-3 py-2 hover:bg-gray-800">
            View artist
          </button>
        </div>
      )}
    </div>
  );
}
