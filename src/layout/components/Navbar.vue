<template>
  <div class="navbar">
    <div class="left-menu">
      <div class="jurisdiction">
        <i class="el-icon-lock" />
        <el-button type="text">权限管理</el-button>
      </div>
      <div class="users">
        <i class="el-icon-user" />
        <el-button type="text">用户管理</el-button>
      </div>
      <div class="systemLog">
        <i class="el-icon-s-order" />
        <el-button type="text">系统日志</el-button>
      </div>
    </div>
    <div class="center-menu">
      <div class="online">
        <i class="el-icon-user" />
        <el-button type="text">在线人数</el-button>
        <span style="color:#0493FE;fontSize:10px;">130</span>
      </div>
      <div class="systemMessage">
        <i class="el-icon-bell" />
        <el-badge :value="12">
          <el-button
            type="text"
            size="mini"
          >
            系统消息</el-button>

        </el-badge>

      </div>
    </div>
    <div class="right-menu">
      <el-dropdown
        class="avatar-container"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <img
            :src="avatar+'?imageView2/1/w/80/h/80'"
            class="user-avatar"
          >
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu
          slot="dropdown"
          class="user-dropdown"
        >
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <a
            target="_blank"
            href=""
          >
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a
            target="_blank"
            href=""
          >
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item
            divided
            @click.native="logout"
          >
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['sidebar', 'avatar'])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #304156;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -3px;
  .left-menu {
    display: flex;
    margin-top: 10px;
    margin-left: 50px;
    color: #bfcbd9;
    i {
      background-color: #0066ff;
      border-radius: 50%;
      text-align: center;
      width: 20px;
      height: 20px;
      line-height: 20px;
    }
    .jurisdiction {
      margin-left: 100px;
    }
    .users {
      margin-left: 100px;
    }
    .systemLog {
      margin-left: 100px;
    }
  }
  .center-menu {
    display: flex;
    color: #bfcbd9;
    margin-top: 10px;
    margin-left: 400px;
    .online {
      margin-left: 50px;
      i {
        background-color: #2aa515;
        border-radius: 50%;
        text-align: center;
        width: 20px;
        height: 20px;
        line-height: 20px;
      }
    }
    .systemMessage {
      margin-left: 50px;
      padding-top: 5px;

      i {
        background-color: #0066ff;
        border-radius: 50%;
        text-align: center;
        width: 20px;
        height: 20px;
        line-height: 20px;
      }
      .item {
        // margin-top: 10px;
        // margin-right: 40px;
      }
    }
  }
  .hamburger-container {
    height: 100%;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
