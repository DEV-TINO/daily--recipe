import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: null,  // 사용자 정보 (로그인 상태)
    isAuthenticated: false,  // 로그인 여부
  }),
  actions: {
    login(userData) {
      this.user = userData;
      this.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(userData)); // 로컬 스토리지에 사용자 정보 저장
    },
    logout() {
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem('user');  // 로그아웃 시 로컬 스토리지에서 제거
    },
    checkAuth() {
      const user = localStorage.getItem('user');
      if (user) {
        this.user = JSON.parse(user);
        this.isAuthenticated = true;
      }
    },
  },
});