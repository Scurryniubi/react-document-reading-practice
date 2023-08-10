/**
 * 这个打包清单有一个页脚，显示了打包的物品数量和总共的物品数量。一开始看起来似乎很好用，但是它也存在漏洞。例如，如果你将一个物品标记为已打包然后删除它，计数器就不会正确更新。请修复计数器以使其始终正确。
 */

import { useState } from "react";
import AddItem from "./AddItem.js";
import PackingList from "./PackingList.js";

let nextId = 3;
const initialItems = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  const [total, setTotal] = useState(3);
  const [packed, setPacked] = useState(1);

  function handleAddItem(title) {
    setTotal(total + 1);
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  }

  function handleChangeItem(nextItem) {
    if (nextItem.packed) {
      setPacked(packed + 1);
    } else {
      setPacked(packed - 1);
    }
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  }

  function handleDeleteItem(itemId) {
    setTotal(total - 1);
    // setPacked(packed-1)
    if (items[itemId].packed) {
      setPacked(packed-1)
    }
    setItems(items.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {packed} out of {total} packed!
      </b>
    </>
  );
}
