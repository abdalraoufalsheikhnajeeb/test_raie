import { useState } from "react";
import { Tree } from "antd";
import "antd/dist/reset.css";
import "./TreeTable.css";

const TreeTable = () => {
  const [checkedKeys, setCheckedKeys] = useState([]);

  const treeData = [
    {
      title: "First paragraph with two children",
      key: "0-0",
      children: [
        { title: "Child 1 of first paragraph", key: "0-0-0" },
        { title: "Child 2 of first paragraph", key: "0-0-1" },
      ],
    },
    { title: "Second primary paragraph", key: "0-1" },
    { title: "Third primary paragraph", key: "0-2" },
    { title: "Fourth primary paragraph", key: "0-3" },
    {
      title: "Fifth paragraph with two children",
      key: "0-4",
      children: [
        { title: "Child 1 of fifth paragraph", key: "0-4-0" },
        { title: "Child 2 of fifth paragraph", key: "0-4-1" },
      ],
    },
    {
      title: "Sixth paragraph with two children",
      key: "0-5",
      children: [
        { title: "Child 1 of sixth paragraph", key: "0-5-0" },
        { title: "Child 2 of sixth paragraph", key: "0-5-1" },
      ],
    },
    {
      title: "Seventh paragraph with two children",
      key: "0-6",
      children: [
        { title: "Child 1 of seventh paragraph", key: "0-6-0" },
        { title: "Child 2 of seventh paragraph", key: "0-6-1" },
      ],
    },
  ];

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
  };

  return (
    <div className="parent-node">
      <Tree
        checkable
        defaultExpandAll
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        treeData={treeData}
        className="custom-tree"
      />
    </div>
  );
};

export default TreeTable;
