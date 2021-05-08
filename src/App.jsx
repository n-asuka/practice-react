import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //追加ボタン
  const onClickAdd = () => {
    if (todoText === "") return;
    //未完了リストに入力したToDoを追加
    const newTodos = [...incompleteTodos, todoText];
    //未完了リストを再定義
    setIncompleteTodos(newTodos);
    //入力したTodoを空にする
    setTodoText("");
  };

  //削除ボタン
  const onClickDelete = (index) => {
    //新しいTodoリストとして未完了リストをコピー
    const newTodos = [...incompleteTodos];
    //コピーした未完了リストから削除ボタンを押した要素を削除
    newTodos.splice(index, 1);
    //未完了リストを更新
    setIncompleteTodos(newTodos);
  };

  //完了ボタン
  const onClickComplete = (index) => {
    //未完了リストをコピー
    const newIncompleteTodos = [...incompleteTodos];
    //未完了リストからリストを削除
    newIncompleteTodos.splice(index, 1);

    //完了リストへリストを追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    //未完了リストを更新
    setIncompleteTodos(newIncompleteTodos);
    //完了リストを更新
    setCompleteTodos(newCompleteTodos);
  };

  //戻すボタン
  const onClickBack = (index) => {
    //新しい完了リスト配列を作成
    const newCompleteTodos = [...completeTodos];
    //完了リストから戻したいリストを削除
    newCompleteTodos.splice(index, 1);

    //未完了リスト配列を作成
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    //更新した完了リストを再定義
    setCompleteTodos(newCompleteTodos);
    //更新した未完了リストを再定義
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
