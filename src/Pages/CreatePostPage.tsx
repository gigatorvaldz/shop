import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import {
  createPost,
  resetFilters,
  updateMakerSortCheckBoxes,
  updatePriceFilter,
} from "../Redux/Reducers/catalogueSlice";
import { PostI } from "../Types/defaultTypes";
import "./SCSS/PostEditPage.scss";

type Props = {};

function CreatePostPage({}: Props) {
  const [nameInput, setNameInput] = useState("");
  const [brandInput, setBrandInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [makerInput, setMakerInput] = useState("");
  const [priceInput, setPriceInput] = useState(1);
  const [tagsInput, setTagsInput] = useState<Array<string>>();

  const dispatch = useAppDispatch();

  let savePost = () => {
    let post: PostI;
    if (tagsInput !== undefined) {
      post = {
        name: nameInput,
        brand: brandInput,
        description: descriptionInput,
        maker: makerInput,
        price: priceInput,
        tags: tagsInput,
        code: new Date().valueOf(),
        type: "volume",
        imageUrl: "post-2.png",
      };

      dispatch(createPost(post));
      dispatch(updatePriceFilter());
      dispatch(updateMakerSortCheckBoxes());
      dispatch(resetFilters());
    }
  };

  return (
    <div className="post-editor">
      <div className="post-editor__item">
        <label className="post-editor__label" htmlFor="name-edit">
          Название:{" "}
        </label>
        <input
          className="post-editor__input"
          name="name-edit"
          id="name-edit"
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.currentTarget.value)}
        />
      </div>
      <div className="post-editor__item">
        <label className="post-editor__label" htmlFor="brand-edit">
          Бренд:{" "}
        </label>
        <input
          className="post-editor__input"
          name="brand-edit"
          id="brand-edit"
          type="text"
          value={brandInput}
          onChange={(e) => setBrandInput(e.currentTarget.value)}
        />
      </div>
      <div className="post-editor__item">
        <label className="post-editor__label" htmlFor="description-edit">
          Описание:{" "}
        </label>
        <input
          className="post-editor__input"
          name="description-edit"
          id="description-edit"
          type="text"
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.currentTarget.value)}
        />
      </div>
      <div className="post-editor__item">
        <label className="post-editor__label" htmlFor="maker-edit">
          Производитель:{" "}
        </label>
        <input
          className="post-editor__input"
          name="maker-edit"
          id="maker-edit"
          type="text"
          value={makerInput}
          onChange={(e) => setMakerInput(e.currentTarget.value)}
        />
      </div>
      <div className="post-editor__item">
        <label className="post-editor__label" htmlFor="price-edit">
          Цена:{" "}
        </label>
        <input
          className="post-editor__input"
          name="price-edit"
          id="price-edit"
          type="number"
          value={priceInput}
          onChange={(e) => setPriceInput(+e.currentTarget.value)}
        />
      </div>
      <h2>Тэги:</h2>
      <select
        value={tagsInput}
        onChange={function (e) {
          var options = e.target.options;
          var value = [];
          for (var i = 0, l = options.length; i < l; i++) {
            if (!options[i]) {
              setTagsInput([]);
              return;
            }
            if (options[i].selected) {
              value.push(options[i].value);
            }
            setTagsInput(value);
          }
        }}
        multiple
      >
        <option value="body">Уход за телом</option>
        <option value="hands">Уход за руками</option>
        <option value="null">Нет тэгов</option>
      </select>
      <Link to="/catalogue" onClick={() => savePost()} className="edit-button">
        Сохранить
      </Link>
    </div>
  );
}

export default CreatePostPage;
