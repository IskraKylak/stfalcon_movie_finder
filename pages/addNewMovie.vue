<template>
  <el-form :model="movieForm" class="formAddFilm p-10">
    <el-form-item label="Title">
      <el-input v-model="movieForm.Title.value"></el-input>
    </el-form-item>

    <el-form-item label="Director">
      <el-input v-model="movieForm.Director.value"></el-input>
    </el-form-item>

    <el-form-item label="Year">
      <el-date-picker
        v-model="movieForm.Year.value"
        type="year"
        placeholder="Year"
      ></el-date-picker>
    </el-form-item>

    <el-form-item label="Poster">
      <el-upload
        class="avatar-uploader"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img
          v-if="movieForm.Poster.value"
          :src="movieForm.Poster.value"
          class="avatar"
          alt="Movie Poster"
        />
      </el-upload>
    </el-form-item>

    <el-form-item class="wrap_buttons">
      <el-button type="primary" @click="submitForm">Add</el-button>
      <el-button @click="resetForm">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { useCounterStore } from "~/stores/myStore";
import type { Movie } from "~/types/Movie";

export default {
  setup() {
    const store = useCounterStore();
    const { $message, $error } = useNuxtApp();

    const movieForm = {
      Title: ref(""),
      Poster: ref(null as null | string),
      Director: ref(""),
      Year: ref(null as null | number),
    };

    function submitForm(): void {
      if (movieForm.Title.value == "") {
        $error("Please enter valid Title.");
        return;
      } else if (
        movieForm.Poster.value == "" ||
        movieForm.Poster.value == null
      ) {
        $error("Please add Poster.");
        return;
      } else if (movieForm.Director.value == "") {
        $error("Please enter valid Director.");
        return;
      } else if (movieForm.Year.value == null) {
        $error("Please enter valid Year.");
        return;
      }
      const tmpMovie: Movie = {
        Title: movieForm.Title.value,
        Poster: movieForm.Poster.value,
        Director: movieForm.Director.value,
        Year: movieForm.Year.value.getFullYear(),
      };
      store.movies.push(tmpMovie);
      $message("Movie added");
      (movieForm.Title.value = ""),
        (movieForm.Poster.value = null),
        (movieForm.Director.value = ""),
        (movieForm.Year.value = null);
    }

    function resetForm(): void {
      (movieForm.Title.value = ""),
        (movieForm.Poster.value = null),
        (movieForm.Director.value = ""),
        (movieForm.Year.value = null);
    }

    function handleAvatarSuccess(res: any, file: any): void {
      movieForm.Poster.value = URL.createObjectURL(file.raw);
    }

    function beforeAvatarUpload(file: any): boolean {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        $error("Please add valid image file.");
        return false;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        $error("Max image file size is restricted to 2MB");
        return false;
      }
      return isImage && isLt2M;
    }

    return {
      movieForm,
      submitForm,
      resetForm,
      handleAvatarSuccess,
      beforeAvatarUpload,
    };
  },
};
</script>

<style>
.el-form label,
.el-form .el-form-item__label {
  min-width: 75px;
  justify-content: flex-start;
}

.wrap_buttons {
  padding-left: 75px;
}

.formAddFilm {
  margin: 0 auto;
  max-width: 600px;
}

.el-upload.el-upload--text {
  width: 100%;
  height: 100%;
}

.avatar-uploader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  overflow: hidden;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #999;
}

.poster-tip {
  margin-top: 8px;
  color: #666;
  font-size: 14px;
  text-align: center;
}

.notification.bg-green {
  display: flex;
  justify-content: center;
  border-radius: 5px;
  position: fixed;
  background: #059fa1;
  color: #fff;
  text-align: center;
  padding: 20px;
}

.notification.bg-red {
  display: flex;
  justify-content: center;
  border-radius: 5px;
  position: fixed;
  background: #d2050f;
  color: #fff;
  text-align: center;
  padding: 20px;
}
</style>
