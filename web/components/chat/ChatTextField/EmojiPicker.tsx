import React, { FC, useEffect, useState } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

export type EmojiPickerProps = {
  onEmojiSelect: (emoji) => void;
  customEmoji: any[];
};

export const EmojiPicker: FC<EmojiPickerProps> = ({ onEmojiSelect, customEmoji }) => {
  const [custom, setCustom] = useState({});

  // Recreate the emoji picker when the custom emoji changes.
  useEffect(() => {
    const e = customEmoji.map(emoji => ({
      id: emoji.name,
      name: emoji.name,
      skins: [{ src: emoji.url }],
    }));

    setCustom([{ id: 'custom', name: 'Custom', emojis: e }]);
  }, []);

  return <Picker data={data} custom={custom} onEmojiSelect={onEmojiSelect} />;
};
