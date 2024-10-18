<template>
  <div class="login-view">
    <div class="login-container">
      <img src="/images/loginicon.png" class="icon">
      <div class="title">아이디</div>
      <input v-model="username" placeholder="사용자 이름" class="text-input"/>
      <div class="title">비밀번호</div>
      <input v-model="password" type="password" placeholder="비밀번호" class="text-input"/>
      <div @click="handleClickLogin" class="login-button">로그인</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useAuthStore } from '@/stores/authStore';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    ...mapState(useAuthStore, ['user', 'isAuthenticated']),
  },
  methods: {
    ...mapActions(useAuthStore, ['login']),
    handleClickLogin() {
      const userData = { username: this.username };
      this.login(userData);
      this.$router.push({ name: 'home' }); // 로그인 성공 후 홈 화면으로 이동
    },
  },
};
</script>

<style lang='scss'>
.login-container {
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  float: right;
  top: 50%;
  position: absolute;
  transform: translate(0,-50%);
  .text-input {
    width: 100%;
    font-size: 20px;
    border-color: #aaa;
    border-width: 0 0 3px;
    outline: none;
  }
  .text-input:focus {
    width: 100%;
    font-size: 20px;
    border-color: orange;
    border-width: 0 0 3px;
  }
  .login-button {
    margin-top: 30px;
    width: fit-content;
    padding: 5px 20px 8px 20px;
    font-size: 20px;
    font-weight: bold;
    border: solid #111 1px;
    border-radius: 10px;
    text-align: center;
    margin-left: auto;
  }
}
.login-view {
  height: 98vh;
  width: 100%;
  position: relative;
  .title{
    margin: 20px 0px 30px 3px;
    font-size: 24px;
    font-weight: bold;
  }
  .icon {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    height: 229px;
    width: 205px;
  }
}
</style>