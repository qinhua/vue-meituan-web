<template>
  <div class="page-register">
    <article class="header">
      <header>
        <a 
          href="/"
          class="site-logo"/>
        <span class="login">
          <em class="bold">已有美团账号？</em>
          <a href="/login">
            <el-button
              type="primary"
              size="small">登录</el-button>
          </a>
        </span>
      </header>
    </article>
    <section>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        status-icon
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item 
          label="用户名" 
          prop="name">
          <el-input 
            v-model="ruleForm.name" 
            type="text" 
            autocomplete="off"/>
        </el-form-item>
        <el-form-item 
          label="邮箱" 
          prop="email" 
          class="vercode-model">
          <el-input 
            v-model="ruleForm.email" 
            type="text" 
            autocomplete="off"/>
          <el-button 
            size="small" 
            @click.prevent="getCode()">{{statusMsg}}</el-button>
        </el-form-item>
        <el-form-item 
          label="验证码" 
          prop="code">
          <el-input v-model="ruleForm.code"/>
        </el-form-item>
        <el-form-item 
          label="密码" 
          prop="pwd">
          <el-input 
            v-model="ruleForm.pwd" 
            type="password" 
            autocomplete="off"/>
        </el-form-item>
        <el-form-item 
          label="确认密码" 
          prop="cpwd">
          <el-input 
            v-model="ruleForm.cpwd" 
            type="password" 
            autocomplete="off"/>
        </el-form-item>
        <el-form-item>
          <el-button 
            type="primary" 
            @click="submitForm('ruleForm')">同意协议并注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'blank',
  data() {
    return {
      statusMsg: '获取验证码',
      error: '',
      ruleForm: {
        name: '',
        code: '',
        pwd: '',
        cpwd: '',
        email: ''
      },
      rules: {
        name: [
          {
            required: true,
            type: 'string',
            message: '请输入昵称',
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            type: 'email',
            message: '请输入邮箱',
            trigger: 'blur'
          }
        ],
        code: [
          {
            required: true,
            type: 'string',
            message: '请输入验证码',
            trigger: 'blur'
          }
        ],
        pwd: [
          {
            required: true,
            type: 'string',
            message: '创建密码',
            trigger: 'blur'
          }
        ],
        cpwd: [
          {
            required: true,
            type: 'string',
            message: '确认密码',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              if (value == '') {
                callback(new Error('请再次输入密码！'))
              } else if (value !== ruleForm.pwd) {
                callback(new Error('两次输入的密码不一致！'))
              } else {
                callback()
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/register/index.scss';
.vercode-model {
  position: relative;
  /deep/.el-input {
    float: left;
    width: 228px !important;
  }
  /deep/.el-button {
    padding: 0 15px;
    height: 40px;
    margin-left: 10px;
    line-height: 40px;
  }
}
</style>
