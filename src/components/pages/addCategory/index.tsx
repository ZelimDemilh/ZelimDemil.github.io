import React, { useState } from "react";
import { useForm, SubmitHandler  } from "react-hook-form";
import { addCategory } from "../../../types/ICategory";
import { useAppDispatch } from "../../../hooks/hooks";
import { createCategory } from "../../../store/reducers/category/categoryFunc";

const AddCategory = () => {
  const [postImg, setPostImg] = useState<null | File >(null)
  const dispatch = useAppDispatch()

const {register, handleSubmit} = useForm<addCategory>()

  const onSubmit: SubmitHandler<addCategory> = (data) => {
    const formData = new FormData()

    formData.append("name", data.name)
    postImg && formData.append("img", postImg)

    // console.log(data);
    dispatch(createCategory(formData))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")}/>
        <br />
        <input type="file" onChange={(e) => setPostImg(e.target.files![0])}/>
        <br />
        <button>Добавить</button>
      </form>
    </div>
  );
};

export default AddCategory;
