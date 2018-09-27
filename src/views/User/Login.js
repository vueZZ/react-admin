import React, { Component } from 'react';
import Login from '@/layouts/Login';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import styles from './login.less'
const FormItem = Form.Item;
class LoginForm extends Component {
  state = {
    loginLoading: false
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ loginLoading: true })
    this.props.form.validateFields().then(() => {
      console.log(1)
    }).catch(er => {
      console.log(er)
    })
    // this.loginLoading = true
    // console.log(this)
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <Login>
        <Form onSubmit={this.handleSubmit} className={styles['form']}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="password" />
            )}
          </FormItem>
          <div>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
            )}
            <a href="" className={styles['form-forgot']}>忘记密码？</a>
          </div>
          <FormItem>
            <Button type="primary" htmlType="submit" loading={this.state.loginLoading} className={styles['form-button']}>
              登录
            </Button>
            Or <a href="">注册账号</a>
          </FormItem>
        </Form>
      </Login>
    )
  }
}

const UserLoginForm = Form.create()(LoginForm);

export default UserLoginForm
