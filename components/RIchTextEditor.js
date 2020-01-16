import React, { useState, useMemo } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import styled from "styled-components";

const StyledEditable = styled(Editable)`
  border: 1px solid #ccc;
  margin-top: 30px;
  padding: 12px 8px;
  &:placeholder {
    color: #757575;
    opacity: 1 !important;
  }
`;

const RichTextEditor = ({ placeholder, onChange, initialValue }) => {
  const [value, setValue] = useState([
    {
      children: [
        {
          text: initialValue
        }
      ]
    }
  ]);

  const serialize = nodes => nodes.map(n => Node.string(n)).join("\n");

  const handleChange = value => {
    if (onChange) {
      onChange(serialize(value));
    }
    setValue(value);
  };

  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={value => handleChange(value)}
    >
      <StyledEditable placeholder={placeholder} />
    </Slate>
  );
};

export default RichTextEditor;
