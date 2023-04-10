import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import {
  resetFilters,
  setPostBrand,
  setPostDescription,
  setPostMaker,
  setPostName,
  setPostPrice,
  setPostTags,
  updateMakerSortCheckBoxes,
  updatePriceFilter,
} from "../Redux/Reducers/catalogueSlice";
import "./SCSS/PostEditPage.scss";

type Props = {};

function PostEditPage({}: Props) {
  const { code } = useParams();
  const posts = useAppSelector((state) => state.catalogue.posts);

  const dispatch = useAppDispatch();
  const post = posts.find((el) => el.code === Number(code));

  if (post === undefined) {
    return <div>Пост не найден.</div>;
  }

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
          value={post.name}
          onChange={(e) =>
            dispatch(
              setPostName({ code: post.code, value: e.currentTarget.value })
            )
          }
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
          value={post.brand}
          onChange={(e) =>
            dispatch(
              setPostBrand({ code: post.code, value: e.currentTarget.value })
            )
          }
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
          value={post.description}
          onChange={(e) =>
            dispatch(
              setPostDescription({
                code: post.code,
                value: e.currentTarget.value,
              })
            )
          }
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
          value={post.maker}
          onChange={(e) => {
            dispatch(
              setPostMaker({ code: post.code, value: e.currentTarget.value })
            );
            dispatch(updateMakerSortCheckBoxes());
          }}
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
          value={post.price}
          onChange={(e) => {
            dispatch(
              setPostPrice({ code: post.code, value: +e.currentTarget.value })
            );
            dispatch(updatePriceFilter());
          }}
        />
      </div>
      <h2>Тэги:</h2>
      <select
        value={post.tags}
        onChange={function (e) {
          var options = e.target.options;
          var value = [];
          for (var i = 0, l = options.length; i < l; i++) {
            if (!options[i]) {
              dispatch(setPostTags({ code: post.code, value: [] }));
              return;
            }
            if (options[i].selected) {
              value.push(options[i].value);
            }
          }

          dispatch(setPostTags({ code: post.code, value }));
        }}
        multiple
      >
        <option value="body">Уход за телом</option>
        <option value="hands">Уход за руками</option>
        <option value="null">Нет тэгов</option>
      </select>
      <Link
        onClick={() => {
          dispatch(updatePriceFilter());
          dispatch(updateMakerSortCheckBoxes());
          dispatch(resetFilters());
        }}
        to="/catalogue"
        className="edit-button"
      >
        В каталог
      </Link>
    </div>
  );
}

export default PostEditPage;
