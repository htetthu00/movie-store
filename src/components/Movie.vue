<template>
  <div class="container">
    <div class="header mt-4">
        <h1>
            Trending Movies
            <img src="../../public/xicon.png" alt="" />
        </h1>
        <p>Keep up with the honest movies that are trending this week.</p>
    </div>
    <section class="nav-link">
        <button class="btn btn-info">Trending today</button>
        <button class="btn btn-info">This week</button>
    </section>

    <div class="pages">
        <pagination
            :totalPages="data.total_pages"
            :perPage="20"
            :currentPage="data.page"
            @pageChanged="onPageChange"
        />
    </div>

    <section class="content">
        <div class="container">
            <div class="row row-items">
                <div
                    class="col-sm-6 col-md-4 col-lg-3 mb-3"
                    v-for="movie in moviesData"
                    :key="movie.id"
                >
                    <img :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
                        class="img-fluid"
                    />
                    <div class="mv-info">
                        <div class="mv-title">
                            <span class="span-hover">{{ movie.original_title }}</span>
                        </div>
                        <div class="status">
                            <span>
                            <i class="ri-heart-line"></i>
                            </span>
                            <span class="rating">{{ "Rating " + movie.vote_average }}</span>
                        </div>
                        <div class="last-info">
                            <div class="release-date">
                                <span>
                                    <i class="ri-time-line"></i>
                                </span>
                                <span>
                                    {{ movie.release_date }}
                                </span>
                            </div>
                            <i class="ri-download-2-line smallBtn"></i>
                            <i class="ri-play-line smallBtn"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="footer-pages">
        <pagination
            :totalPages="data.total_pages"
            :perPage="20"
            :currentPage="data.page"
            @pageChanged="onPageChange"
        />
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue"
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      moviesData: null,
      getDate: null,
      data: {},
      key: "335c8b87f473d98341300a6547090fa1",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=335c8b87f473d98341300a6547090fa1&&page=",
      Page: 1
    };
  },
  methods: {
    async getData() {
      const res = await fetch(
        `${this.url}${this.Page}`
      );
      const finalRes = await res.json();
      this.data = finalRes;
      this.moviesData = finalRes.results;
      
    },
    async onPageChange(page) {
        const res = await fetch(
            `${this.url}${page}`
      );
      const finalRes = await res.json();
      this.data = finalRes;
      this.moviesData = finalRes.results;

  }
    
  },
  mounted() {
    this.getData();
  },
  components : {
    Pagination,
  },
  
};
</script>

<style scoped>
* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.header p {
  color: rgb(169, 166, 166);
}

.header h1 {
  margin-bottom: 5px;
  color: #28bab0;
}

.header img {
  width: 40px;
  margin-left: 10px;
  margin-bottom: 15px;
}

.nav-link {
  display: flex;
  justify-content: start;
  height: auto;
}

.menu {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.pages {
    display: flex;
    justify-content: start;
    margin-top: 0px;
    margin-left: 20px;
    margin-bottom: 10px;
}

.footer-pages {
    display: flex;
    justify-content: end;
}

.nav-link button {
  color: white;
  margin-right: 20px;
  margin-bottom: 20px;
}

.mv-info {
  display: block;
  width: auto;
  background-color: rgb(0, 41, 48);
  color: #fff;
  min-height: 200px;
  padding: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.3);
}

.mb-3 img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 3px 0px 5px 0px rgba(0, 0, 0, 0.3);
}

.status {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
}

.mv-title {
  display: block;
  min-height: 70px;
}

.span-hover:hover {
  text-decoration: underline;
  transition: 1s;
}

.content img {
  cursor: pointer;
}

.content span {
  cursor: pointer;
}

.status i {
  color: rgb(120, 119, 119);
  font-size: 22px;
}

.rating {
  color: rgb(120, 119, 119);
}

.release-date {
  font-size: 13px;
  display: flex;
  justify-content: start;
  color: rgb(120, 119, 119);
}

.release-date span {
  margin-top: 15px;
  margin-right: 10px;
}

.last-info {
  margin-top: 0;
  display: flex;
  justify-content: space-between;
}

.smallBtn {
  font-size: 20px;
  color: rgb(120, 119, 119);
  margin-top: 10px;
  cursor: pointer;
}

/** p */






/* .page-item {
  background-color: rgb(0, 41, 48);
} */

@media (max-width: 576px) {
  .header p {
    text-align: center;
    margin-top: 20px;
    font-size: 15px;
  }
  .header h1 {
    font-size: 30px;
  }
  .header img {
    width: 30px;
    margin-left: 10px;
    margin-bottom: 15px;
  }
  .nav-link button {
    font-size: 13px;
    padding: 6px;
  }
}
</style>
