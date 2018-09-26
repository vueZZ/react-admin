import React from 'react';
import ReactDOM from 'react-dom';

import { Button, LocaleProvider, DatePicker  } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Main from './App'

// import Layouts from './layouts/login'

moment.locale('zh-cn');
class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Main/>
{/*         // <Layouts>
        //   <Button>ss</Button>
        //   <DatePicker></DatePicker>
        // </Layouts> */}
      </LocaleProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
